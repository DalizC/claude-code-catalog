#!/usr/bin/env python3
"""Star-history from GitHub's GET /repos/{o}/{r}/stargazers/history. stdlib only, free API only.

Usage: python history.py [--budget N]      (default 4500 API calls per run)
       python history.py --shards-only       (rebuild site/history shards from data/history/series.json, no network)

The endpoint returns weekly buckets, newest first: [{"week": unix_ts_of_sunday_utc, "total": N,
"days": [d0..d6]}] where total/days are NEW stars (d0 = Sunday). Page size is fixed at 30 weeks
(per_page is ignored); the Link header (rel="next") is followed until the repo's first week.
Cumulative series: the last point (today) is anchored to the current catalog stars; earlier
points are back-computed by subtracting the later deltas. If the buckets sum to less than the
catalog stars, the first point carries the remainder (pre-history stars / mismatch).

Scope: every repo-level catalog record with its own stars (one per repo). Every run refreshes
repos starting at a rotation cursor (data/history/_state.json) until the budget or the rate-limit
guard stops it; the next run resumes at the cursor. Points: weekly (last point of each 7-day
bucket) older than DAILY_DAYS, daily for the last DAILY_DAYS days.

After the series is built, trend_7d / trend_30d / trend_7d_pct and the "star-spike" flag
(trend_7d > max(500, 20% of stars)) are written back into data/catalog.json (those fields only).

Star-farming (flag "star-farming", recomputed from the stored series on every run, so it clears on its own):
a day D within the last FARM_WINDOW (30) days is suspicious when ALL hold
  1. gain(D) >= max(300, 10 x median daily gain of the up-to-30 days before D; needs >= 14 daily points before D)
  2. gain(D) >= 40% of the 14-day total (D and the 13 days before it)
  3. no matching activity: the repo's pushed_at is not within +-2 days of D (pushed_at is the latest push only,
     so this is a coarse check; a repo that keeps pushing is simply never flagged for that day)
Evidence is stored on the record as star_farming {date, gain, median, share_14d_pct}. The old age-based
"star-anomaly" flag (catalog.py) now exists only for repos that have no series here; it is removed for repos with one.
Series are only daily for the last DAILY_DAYS (90) days, so a day is testable only inside that window.

Files: data/history/series.json {repo: {"points": [[YYYY-MM-DD, stars]...], "backfilled_at": date}},
data/history/_state.json, site/history/NN.json shards ({repo: points}).

SHARD FUNCTION (the site JS must replicate it exactly), N_SHARDS = 16:
    shard(repo) = (sum of UTF-16 code units of the repo string "owner/name", exact case) mod 16
    JS:  let s=0; for (let i=0;i<repo.length;i++) s+=repo.charCodeAt(i); return s%16;
    file: site/history/{shard:02d}.json   (all 16 files always exist, possibly "{}")
"""
import json, os, re, sys, threading, time, urllib.request, urllib.error
from concurrent.futures import ThreadPoolExecutor
from datetime import date, datetime, timedelta, timezone
from pathlib import Path

ROOT = Path(__file__).parent
HIST = ROOT / "data" / "history"; SITE_HIST = ROOT / "site" / "history"
N_SHARDS, DAILY_DAYS, RESERVE, WORKERS = 16, 90, 100, 6
NOW = datetime.now(timezone.utc)
TODAY = NOW.date()

def load_token():  # HISTORY_TOKEN first, then GITHUB_TOKEN (never printed)
    t = os.environ.get("HISTORY_TOKEN") or os.environ.get("GITHUB_TOKEN")
    if t: return t.strip()
    f = ROOT / ".env"
    if f.exists():
        lines = f.read_text(encoding="utf-8").splitlines()
        for line in lines:
            if line.strip().startswith("HISTORY_TOKEN="):
                return line.split("=", 1)[1].strip().strip("\"'")
        for line in lines:
            if line.strip().startswith("GITHUB_TOKEN="):
                return line.split("=", 1)[1].strip().strip("\"'")
            if line.strip().startswith(("github_pat_", "ghp_")):
                return line.strip()
    return None

def shard(repo):
    b = repo.encode("utf-16-le")
    return sum(b[i] | (b[i + 1] << 8) for i in range(0, len(b), 2)) % N_SHARDS

def jload(p, default):
    try: return json.loads(p.read_text(encoding="utf-8"))
    except Exception: return default

def jsave(p, obj):
    p.parent.mkdir(parents=True, exist_ok=True)
    p.write_text(json.dumps(obj, separators=(",", ":"), ensure_ascii=False), encoding="utf-8")

class Client:
    def __init__(self, token, budget):
        self.token, self.budget, self.calls, self.remaining = token, budget, 0, None
        self.lock = threading.Lock(); self.stop = None; self.errors = []
    def _get(self, url):
        """(status, parsed_json, next_url) or None when stopped."""
        h = {"User-Agent": "cc-catalog-history", "Accept": "application/vnd.github+json"}
        if self.token: h["Authorization"] = f"Bearer {self.token}"
        for attempt in range(3):
            with self.lock:
                if self.stop: return None
                if self.calls >= self.budget: self.stop = "budget"; return None
                if self.remaining is not None and self.remaining < RESERVE: self.stop = "rate-limit reserve"; return None
                self.calls += 1
            try:
                with urllib.request.urlopen(urllib.request.Request(url, headers=h), timeout=30) as r:
                    self._rem(r.headers)
                    m = re.search(r'<([^>]+)>;\s*rel="next"', r.headers.get("Link") or "")
                    return 200, json.loads(r.read().decode()), (m.group(1) if m else None)
            except urllib.error.HTTPError as e:
                self._rem(e.headers); body = e.read().decode("utf-8", "replace")[:150]
                if e.code in (401, 502, 503, 504) and attempt < 2: time.sleep(3 * (attempt + 1)); continue
                if e.code == 401:
                    with self.lock: self.stop = "HTTP 401 bad credentials"
                    return None
                if e.code == 429 or (e.code == 403 and self.remaining == 0):
                    with self.lock: self.stop = f"HTTP {e.code} rate limit"
                    return None
                with self.lock: self.errors.append(f"{url.split('/repos/')[-1][:60]}: HTTP {e.code} {body[:80]}")
                return e.code, None, None
            except Exception as e:
                if attempt < 2: time.sleep(2); continue
                with self.lock: self.errors.append(f"{url[-60:]}: {type(e).__name__} {e}")
                return 0, None, None
    def _rem(self, hd):
        rem = hd.get("X-RateLimit-Remaining")
        if rem is not None:
            with self.lock: self.remaining = int(rem) if self.remaining is None else min(self.remaining, int(rem))
    def history(self, repo):
        """All weekly buckets (newest first) or None on failure/stop."""
        url, out = f"https://api.github.com/repos/{repo}/stargazers/history", []
        while url:
            res = self._get(url)
            if res is None or res[0] != 200: return None
            out += res[1]; url = res[2]
        return out

def build_points(buckets, stars):
    """weekly buckets -> downsampled cumulative [[date, stars]] ending today at `stars`. Also
    returns the mismatch (stars - sum of all bucket totals; >0 means pre-history stars)."""
    delta = {}
    for b in buckets:
        w = datetime.fromtimestamp(b["week"], timezone.utc).date()
        for i, n in enumerate(b.get("days") or []):
            d = w + timedelta(days=i)
            if n and d <= TODAY: delta[d] = delta.get(d, 0) + n
    total = sum(delta.values()); mismatch = stars - total
    if not delta: return [[TODAY.isoformat(), stars]], mismatch
    days = [min(delta) - timedelta(days=1)]
    while days[-1] < TODAY: days.append(days[-1] + timedelta(days=1))
    cum, c = {}, mismatch
    cum[days[0]] = max(0, c)
    for d in days[1:]:
        c += delta.get(d, 0); cum[d] = max(0, c)
    cum[TODAY] = stars
    cut = TODAY - timedelta(days=DAILY_DAYS)
    weekly = {}
    for d in days:
        if d < cut: weekly[(d - date(2020, 1, 6)).days // 7] = d
    keep = sorted(weekly.values()) + [d for d in days if d >= cut]
    if days[0] not in keep: keep.insert(0, days[0])
    return [[d.isoformat(), cum[d]] for d in keep], mismatch

def value_at(points, d):
    iso = d.isoformat(); v = points[0][1]
    for pd, ps in points:
        if pd <= iso: v = ps
        else: break
    return v

FARM_WINDOW, FARM_MIN_GAIN, FARM_MULT, FARM_SHARE, FARM_BASE_MIN, FARM_PUSH_DAYS = 30, 300, 10, 0.40, 14, 2

def farming(points, pushed_at):
    """Return evidence dict for the strongest star-farming day in the last FARM_WINDOW days, else None."""
    pts = {}
    for d, c in points:
        pts[date.fromisoformat(d)] = c
    pushed = None
    if pushed_at:
        try: pushed = datetime.fromisoformat(pushed_at.replace("Z", "+00:00")).date()
        except ValueError: pass
    def gain(d):
        a, b = pts.get(d), pts.get(d - timedelta(days=1))
        return None if a is None or b is None else a - b
    best = None
    for k in range(1, FARM_WINDOW + 1):   # k=0 (today) is a partial day, skipped
        d = TODAY - timedelta(days=k); g = gain(d)
        if g is None: continue
        base = sorted(x for x in (gain(d - timedelta(days=j)) for j in range(1, 31)) if x is not None)
        if len(base) < FARM_BASE_MIN: continue
        med = (base[len(base) // 2] + base[(len(base) - 1) // 2]) / 2
        tot14 = sum(x for x in (gain(d - timedelta(days=j)) for j in range(14)) if x is not None)
        if g < max(FARM_MIN_GAIN, FARM_MULT * med) or tot14 <= 0 or g < FARM_SHARE * tot14: continue
        if pushed and abs((pushed - d).days) <= FARM_PUSH_DAYS: continue
        ev = {"date": d.isoformat(), "gain": g, "median": med, "share_14d_pct": round(100 * g / tot14)}
        if not best or g > best["gain"]: best = ev
    return best

def scope(catalog):
    seen, rows = set(), []
    for r in catalog["repos"]:
        repo = r.get("repo")
        if r.get("stars") is None or not repo or repo in seen or not re.fullmatch(r"[\w.-]+/[\w.-]+", repo): continue
        seen.add(repo); rows.append(r)
    rows.sort(key=lambda r: r["repo"])
    return rows

def write_shards(series):
    shards = [{} for _ in range(N_SHARDS)]
    for repo, s in series.items(): shards[shard(repo)][repo] = s["points"]
    for i, sh in enumerate(shards): jsave(SITE_HIST / f"{i:02d}.json", sh)

def apply_trends(catalog, series):
    n = 0
    for r in catalog["repos"]:
        s = series.get(r.get("repo"))
        if not s or r.get("stars") is None or r.get("repo") in ("",) or r.get("repo") is None: continue
        st, pts = r["stars"], s["points"]
        t7 = st - value_at(pts, TODAY - timedelta(days=7)); t30 = st - value_at(pts, TODAY - timedelta(days=30))
        r["trend_7d"], r["trend_30d"] = t7, t30
        r["trend_7d_pct"] = round(100 * t7 / (st - t7), 2) if st - t7 > 0 else None
        fl = [f for f in (r.get("flags") or []) if f not in ("star-spike", "star-farming", "star-anomaly")]
        if t7 > max(500, 0.2 * st): fl.append("star-spike")
        ev = farming(pts, r.get("pushed_at")); r.pop("star_farming", None)
        if ev: fl.append("star-farming"); r["star_farming"] = ev
        r["flags"] = fl; n += 1
    return n

def main():
    if "--shards-only" in sys.argv:
        write_shards(jload(HIST / "series.json", {})); return
    budget = int(sys.argv[sys.argv.index("--budget") + 1]) if "--budget" in sys.argv else 4500
    cpath = ROOT / "data" / "catalog.json"
    catalog = jload(cpath, None)
    if not catalog: sys.exit("data/catalog.json missing")
    rows = scope(catalog)
    state = jload(HIST / "_state.json", {"cursor": 0, "runs": 0})
    series = jload(HIST / "series.json", {})
    for r in rows:   # renamed repo: carry the series over from the old name until it is refreshed
        if r["repo"] not in series:
            for al in r.get("aliases") or []:
                if al in series: series[r["repo"]] = series[al]; break
    keep = {r["repo"] for r in rows}
    for k in [k for k in series if k not in keep]: del series[k]
    cur = state.get("cursor", 0) % max(1, len(rows))
    order = rows[cur:] + rows[:cur]
    client = Client(load_token(), budget)
    t0 = time.time(); done = {"n": 0}; mism = {}
    print(f"in scope: {len(rows)} repos; cursor {cur}; budget {budget}")

    failed = set()
    def work(r):
        if client.stop: return None
        b = client.history(r["repo"])
        if b is None:
            if not client.stop: failed.add(r["repo"])
            return None
        pts, mm = build_points(b, r["stars"])
        return r["repo"], {"points": pts, "backfilled_at": TODAY.isoformat()}, mm, len(b)

    results = {}
    with ThreadPoolExecutor(WORKERS) as ex:
        for r, res in zip(order, ex.map(work, order)):
            if res is None: continue
            results[r["repo"]] = True
            series[res[0]] = res[1]; mism[res[0]] = (res[2], res[3])
    # cursor advances past the contiguous prefix of refreshed repos
    adv = 0
    for r in order:
        if r["repo"] in results or r["repo"] in failed: adv += 1
        else: break
    state["cursor"] = (cur + adv) % max(1, len(rows)); state["runs"] = state.get("runs", 0) + 1
    state["last_run"] = NOW.isoformat(timespec="seconds"); state["stop"] = client.stop
    jsave(HIST / "_state.json", state); jsave(HIST / "series.json", series); write_shards(series)
    n = apply_trends(catalog, series)
    if isinstance(catalog.get("counts"), dict):
        fc = {}
        for r in catalog["repos"]:
            for f in r.get("flags") or []: fc[f] = fc.get(f, 0) + 1
        catalog["counts"]["flags"] = fc
    cpath.write_text(json.dumps(catalog, indent=1), encoding="utf-8")
    big = sorted(mism.items(), key=lambda kv: -abs(kv[1][0]))[:3]
    print(f"calls {client.calls}; refreshed {len(results)}; series {len(series)}; trends written {n}; "
          f"stop: {client.stop}; errors {len(client.errors)}; secs {time.time() - t0:.0f}; cursor {state['cursor']}")
    print("largest mismatches (stars - sum(buckets), pages):", big)
    for e in client.errors[:10]: print("ERR", e)

if __name__ == "__main__":
    main()
