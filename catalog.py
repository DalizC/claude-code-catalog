#!/usr/bin/env python3
"""Claude Code extensions catalog PoC. stdlib only. Fetched content is untrusted data."""
import csv, hashlib, io, json, os, random, re, sys, time, urllib.request, urllib.error
from datetime import datetime, timezone, date
from pathlib import Path
from urllib.parse import quote
from collections import Counter

ROOT = Path(__file__).parent
CACHE = ROOT / "cache"; DATA = ROOT / "data"
TODAY = date.today().isoformat()
REFRESH = "--refresh" in sys.argv
OFFLINE = "--offline" in sys.argv  # cache-only: no network, ignore TTL, reuse repo metadata from the previous data/catalog.json
CACHE_TTL_H = float(os.environ.get("CATALOG_CACHE_TTL_HOURS", "20"))  # cached HTTP responses older than this are refetched
NOW = datetime.now(timezone.utc)

def load_token():
    t = os.environ.get("GITHUB_TOKEN")
    if t: return t.strip()
    f = ROOT / ".env"
    if f.exists():
        for line in f.read_text(encoding="utf-8").splitlines():
            if line.strip().startswith("GITHUB_TOKEN="):
                return line.split("=", 1)[1].strip().strip("\"'")
            if line.strip().startswith(("github_pat_", "ghp_")):
                return line.strip()
    return None
TOKEN = load_token()

CALLS = {"core": 0, "search": 0}
ERRORS = []; RATE = {}; STATE = {"search_last": 0.0, "rl_stop": False}
CACHE.mkdir(exist_ok=True)

def http_get(url, api=False, search=False):
    """Returns (status, body_text). Caches 200/404 bodies keyed by URL."""
    key = CACHE / (hashlib.sha1(url.encode()).hexdigest() + ".json")
    if key.exists() and not REFRESH and (OFFLINE or (time.time() - key.stat().st_mtime) < CACHE_TTL_H * 3600):
        c = json.loads(key.read_text(encoding="utf-8"))
        return c["status"], c["body"]
    if OFFLINE: return 0, ""
    bucket = "search" if search else "core"
    if api and STATE.get("stop_" + bucket):
        return 0, ""
    if search:  # 10 req/min limit
        wait = 6.5 - (time.time() - STATE["search_last"])
        if wait > 0: time.sleep(wait)
        STATE["search_last"] = time.time()
    h = {"User-Agent": "cc-catalog-poc", "Accept": "application/vnd.github+json" if api else "*/*"}
    if TOKEN and api: h["Authorization"] = f"Bearer {TOKEN}"
    status, body, hd = 0, "", None
    if api: CALLS["search" if search else "core"] += 1
    try:
        with urllib.request.urlopen(urllib.request.Request(url, headers=h), timeout=30) as r:
            status, body, hd = r.status, r.read().decode("utf-8", "replace"), r.headers
    except urllib.error.HTTPError as e:
        status, hd = e.code, e.headers
        body = e.read().decode("utf-8", "replace")
    except Exception as e:
        ERRORS.append(f"{url}: {type(e).__name__} {e}"); return 0, ""
    if api and hd is not None:
        rem = hd.get("X-RateLimit-Remaining")
        if rem is not None:
            RATE["search" if search else "core"] = {"remaining": rem, "limit": hd.get("X-RateLimit-Limit")}
            if rem == "0" and not search: STATE["rl_stop"] = STATE["stop_core"] = True
    if status in (403, 429) and api:
        STATE["rl_stop"] = STATE["stop_" + bucket] = True
        ERRORS.append(f"{url}: HTTP {status} (rate limit?) {body[:120]}")
    elif status not in (200, 404):
        ERRORS.append(f"{url}: HTTP {status}")
    if status in (200, 404):
        key.write_text(json.dumps({"status": status, "body": body}), encoding="utf-8")
    return status, body

def jget(url, **kw):
    s, b = http_get(url, **kw)
    if s != 200: return None
    try: return json.loads(b)
    except Exception as e:
        ERRORS.append(f"{url}: bad JSON {e}"); return None

# ---------- state ----------
META = {}      # repo -> metadata dict
ENTRIES = {}   # id -> entry
CURATED = set()

def trunc(s): return re.sub(r"\s+", " ", s or "").strip()[:300]

def set_meta(repo, item):
    if not repo: return
    lic = item.get("license")
    META[repo] = {"stars": item.get("stargazers_count"), "pushed_at": item.get("pushed_at"),
                  "created_at": item.get("created_at"), "forks": item.get("forks_count"),
                  "license": (lic or {}).get("spdx_id") if isinstance(lic, dict) else lic,
                  "archived": item.get("archived"), "topics": item.get("topics") or [], "owner_type": (item.get("owner") or {}).get("type")}

def repo_from_url(u):
    m = re.search(r"github\.com[/:]([\w.-]+)/([\w.-]+?)(?:\.git)?(?:[/#?]|$)", u or "")
    if not m: m = re.fullmatch(r"([\w.-]+)/([\w.-]+?)(?:\.git)?", (u or "").strip())
    return f"{m.group(1)}/{m.group(2)}" if m else ""

TRANK = {"anthropic": 0, "official": 1, "listed": 2}
HINTS = tuple(TRANK)

def add(id_, name, type_, desc, repo, url, source, hint, tier_hint=None, signals=(), origin="", inrepo=""):
    e = ENTRIES.get(id_)
    if e:
        if source not in e["sources"]: e["sources"].append(source)
        for s in signals:
            if s not in e["signals"]: e["signals"].append(s)
        if TRANK.get(tier_hint, 9) < TRANK.get(e["tier_hint"], 9): e["tier_hint"] = tier_hint; e["origin"] = origin
        return
    ENTRIES[id_] = {"id": id_, "name": name, "type": type_, "description": trunc(desc), "repo": repo,
                    "url": url, "source": source, "sources": [source], "install_hint": hint,
                    "tier_hint": tier_hint, "signals": list(signals), "origin": origin, "inrepo": inrepo}

# ---------- marketplace parsing ----------
def parse_marketplace(text, mrepo, source, kind, branch="main"):
    """kind: "official" (Anthropic official marketplace) or "listed" (community marketplace) or None (third-party)."""
    try: mk = json.loads(text)
    except Exception as e:
        ERRORS.append(f"marketplace {mrepo}: bad JSON {e}"); return 0
    plugins = mk.get("plugins") if isinstance(mk, dict) else None
    if not isinstance(plugins, list):
        ERRORS.append(f"marketplace {mrepo}: no plugins list"); return 0
    mname = mk.get("name") or mrepo.split("/")[-1]
    hint_m = f"/plugin marketplace add {mrepo}"
    md = mk.get("metadata") if isinstance(mk.get("metadata"), dict) else {}
    add(f"marketplace:{mrepo}", mname, "marketplace", mk.get("description") or md.get("description"),
        mrepo, f"https://github.com/{mrepo}", source, hint_m, "anthropic" if mrepo.startswith("anthropics/") else kind,
        origin=f"{mrepo} marketplace")
    n = 0
    for p in plugins:
        if not isinstance(p, dict) or not p.get("name"): continue
        src = p.get("source"); repo = mrepo; sub = ""
        if isinstance(src, str):
            if src.startswith(("http", "git@")): repo = repo_from_url(src) or mrepo
            else: sub = src
        elif isinstance(src, dict):
            k = src.get("source")
            repo = (src.get("repo") if k == "github" else "") or repo_from_url(src.get("url", "")) or src.get("repo") or mrepo
            sub = src.get("path", "")
        url = f"https://github.com/{repo}" + (f"/tree/{branch}/{sub.lstrip('./')}" if sub and repo == mrepo else "")
        inrepo = ""; note = ""
        if kind == "official" and mrepo.startswith("anthropics/") and repo == mrepo:
            th = "official" if "external_plugins" in sub else "anthropic"
            au = p.get("author") if isinstance(p.get("author"), dict) else {}
            dom = (au.get("email") or "").rsplit("@", 1)[-1].lower()
            if th == "anthropic" and dom and not dom.endswith("anthropic.com"):
                th = "official"; note = f"author {au.get('name')} <{au.get('email')}> is not Anthropic"
        elif kind and repo.split("/")[0] == "anthropics":
            th = "anthropic"
        else:
            th = kind
        if mrepo.startswith("anthropics/") and repo == mrepo:
            inrepo = f"{mrepo}/{sub.strip('./') or p['name']}"
            if kind == "listed": th = "listed"
        origin = f"{mrepo} {sub}".strip() if repo == mrepo else f"{mrepo} -> {repo}"
        if note: origin += "; " + note
        add(f"plugin:{p['name']}@{mname}", p["name"], "plugin", p.get("description"), repo, url, source,
            f"{hint_m} ; /plugin install {p['name']}@{mname}", th, origin=origin, inrepo=inrepo)
        n += 1
    return n

def fetch_marketplace(repo, source, tier_hint):
    for br in ("main", "master"):
        s, b = http_get(f"https://raw.githubusercontent.com/{repo}/{br}/.claude-plugin/marketplace.json")
        if s == 200: return parse_marketplace(b, repo, source, tier_hint, br)
    return None

# ---------- 1 official ----------
def src_official():
    for r in ["anthropics/claude-plugins-official", "anthropics/claude-plugins-community", "anthropics/skills", "anthropics/claude-code"]:
        listed = r.endswith("community")
        n = fetch_marketplace(r, "listed" if listed else "official", "listed" if listed else "official")
        if n is None: ERRORS.append(f"official marketplace not found: {r}")
        else: print(f"official {r}: {n} plugins")

# ---------- 2 curated ----------
def guess_type(cat):
    c = (cat or "").lower()
    if "skill" in c: return "skill"
    if "agent" in c: return "agent"
    if "hook" in c: return "hook"
    if "slash" in c or "command" in c: return "command"
    if "plugin" in c: return "plugin"
    return "collection"

def src_curated():
    base = "https://api.github.com/repos/hesreallyhim/awesome-claude-code/contents/"
    csvs = []
    def walk(path, depth):
        items = jget(base + path, api=True)
        if not isinstance(items, list): return
        for it in items:
            if it["type"] == "file" and it["name"].endswith(".csv"): csvs.append(it)
            elif it["type"] == "dir" and depth < 1 and it["name"].lower() in ("data", "resources", "the_resources_table", "assets"):
                walk(it["path"], depth + 1)
    walk("", 0)
    if not csvs:
        ERRORS.append("curated: no CSV found in hesreallyhim/awesome-claude-code (or API unavailable)"); return
    print("curated csv candidates:", [c["path"] for c in csvs])
    f = max(csvs, key=lambda c: c.get("size", 0))
    s, b = http_get(f"https://raw.githubusercontent.com/hesreallyhim/awesome-claude-code/main/{f['path']}")
    if s != 200: ERRORS.append(f"curated: cannot fetch {f['path']}"); return
    rows = list(csv.DictReader(io.StringIO(b)))
    if not rows: return
    cols = list(rows[0].keys()); print("curated columns:", cols)
    lc = {c.lower(): c for c in cols}
    def col(*names):
        for n in names:
            for k, v in lc.items():
                if n in k: return v
    cname = col("display name", "name", "title"); clink = col("primary link", "link", "url")
    cdesc = col("description"); ccat = col("category", "sub-category"); cact = col("active")
    n = 0
    for r in rows:
        link = r.get(clink, "") if clink else ""
        if cact and r.get(cact, "").strip().upper() == "FALSE": continue
        if not link: continue
        repo = repo_from_url(link); name = r.get(cname) or repo or link
        n += 1
        add(f"curated:{(repo or link).lower()}:{name}", name, guess_type(r.get(ccat) if ccat else ""),
            r.get(cdesc) if cdesc else "", repo, link, "curated", f"see {link}", None, ["curated"])
        if repo: CURATED.add(repo)
    print(f"curated: {n} entries, {len(CURATED)} github repos")

# ---------- 3 discovery ----------
TOPICS = {"claude-code-plugin": "plugin", "claude-skills": "skill", "claude-code-subagents": "agent", "claude-code-skills": "skill"}
MARKETPLACE_CANDIDATES = []

def src_repo_search():
    for topic, typ in TOPICS.items():
        for page in (1, 2):
            q = f"topic:{topic}+stars:%3E%3D5"
            d = jget(f"https://api.github.com/search/repositories?q={q}&sort=stars&order=desc&per_page=100&page={page}", api=True, search=True)
            if not d: break
            for it in d.get("items", []):
                repo = it["full_name"]; set_meta(repo, it)
                hint = {"plugin": f"/plugin marketplace add {repo}", "skill": f"copy skills from {repo}", "agent": f"copy agents from {repo}"}[typ]
                add(f"repo:{repo}:{typ}", it["name"], typ, it.get("description"), repo, it["html_url"], f"search:topic:{topic}", hint)
                if repo not in MARKETPLACE_CANDIDATES: MARKETPLACE_CANDIDATES.append(repo)
            if len(d.get("items", [])) < 100: break
    # curated repos are also marketplace candidates
    for r in sorted(CURATED):
        if r not in MARKETPLACE_CANDIDATES: MARKETPLACE_CANDIDATES.append(r)

CODE_QUERIES = [("filename:marketplace.json path:.claude-plugin", "marketplace"), ("filename:plugin.json path:.claude-plugin", "plugin"),
                ("filename:SKILL.md", "skill"), ("path:.claude/agents extension:md", "agent")]
CODE_MARKETPLACES = []

def src_code_search():
    if not TOKEN:
        print("code search SKIPPED (no GITHUB_TOKEN)"); return
    for q, typ in CODE_QUERIES:
        hits = {}
        for page in (1, 2, 3):
            d = jget(f"https://api.github.com/search/code?q={quote(q)}&per_page=100&page={page}", api=True, search=True)
            if not d: break
            for it in d.get("items", []):
                hits.setdefault(it["repository"]["full_name"], it["repository"])
            if len(d.get("items", [])) < 100: break
        for repo, rj in hits.items():
            h = {"marketplace": f"/plugin marketplace add {repo}", "plugin": f"/plugin marketplace add {repo}",
                 "skill": f"copy skills from {repo}", "agent": f"copy agents from {repo}"}[typ]
            add(f"repo:{repo}:{typ}", repo.split("/")[1], typ, rj.get("description"), repo, rj["html_url"], f"search:code:{q}", h)
            if typ == "marketplace" and repo not in CODE_MARKETPLACES: CODE_MARKETPLACES.append(repo)
        print(f"code search '{q}': {len(hits)} repos")

def expand_marketplaces():
    cands = list(CODE_MARKETPLACES) + [r for r in MARKETPLACE_CANDIDATES if r not in CODE_MARKETPLACES]
    cands = [c for c in cands if not c.startswith("anthropics/")][:50]
    ok = 0
    for r in cands:
        n = fetch_marketplace(r, "marketplace-expansion", None)
        if n is not None: ok += 1
    print(f"marketplace expansion: {ok}/{len(cands)} had a marketplace.json")

# ---------- 4 enrichment (GraphQL, ~100 repos per query) ----------
GQL_FIELDS = ("stargazerCount forkCount pushedAt createdAt licenseInfo{spdxId} isArchived owner{__typename} "
              "repositoryTopics(first:20){nodes{topic{name}}}")
GQL = {"calls": 0, "cost": 0, "remaining": None, "limit": None, "stopped": False}

def gql(query):
    h = {"User-Agent": "cc-catalog", "Authorization": f"Bearer {TOKEN}", "Content-Type": "application/json"}
    data = json.dumps({"query": query}).encode()
    for attempt in range(3):
        try:
            GQL["calls"] += 1
            with urllib.request.urlopen(urllib.request.Request("https://api.github.com/graphql", data=data, headers=h), timeout=90) as r:
                return json.loads(r.read().decode("utf-8", "replace"))
        except urllib.error.HTTPError as e:
            if e.code in (502, 503, 504) and attempt < 2:
                time.sleep(3 * (attempt + 1)); continue
            ERRORS.append(f"graphql: HTTP {e.code}"); return None
        except Exception as e:
            if attempt < 2: time.sleep(3); continue
            ERRORS.append(f"graphql: {type(e).__name__} {e}"); return None

def set_meta_gql(repo, n):
    META[repo] = {"stars": n.get("stargazerCount"), "forks": n.get("forkCount"), "pushed_at": n.get("pushedAt"),
                  "created_at": n.get("createdAt"), "license": (n.get("licenseInfo") or {}).get("spdxId"),
                  "archived": n.get("isArchived"), "owner_type": (n.get("owner") or {}).get("__typename"),
                  "topics": [x["topic"]["name"] for x in ((n.get("repositoryTopics") or {}).get("nodes") or [])]}

def enrich():
    prio = {}
    for e in ENTRIES.values():
        if not e["repo"]: continue
        pr = TRANK.get(e["tier_hint"], 3 if "curated" in e["signals"] else 4)
        prio[e["repo"]] = min(prio.get(e["repo"], 9), pr)
    repos = sorted(prio, key=lambda r: prio[r])
    if OFFLINE:
        try:
            for e in json.loads((DATA / "catalog.json").read_text(encoding="utf-8"))["repos"]:
                if e.get("repo") and not e.get("container") and e["repo"] not in META:
                    META[e["repo"]] = {k: e.get(k) for k in ("stars", "forks", "pushed_at", "created_at", "license", "archived", "owner_type", "topics")}
        except Exception as ex: ERRORS.append(f"offline: cannot load previous catalog {ex}")
        return 0, 0
    if not TOKEN:
        miss = [r for r in repos if META.get(r, {}).get("stars") is None]
        print(f"enrichment SKIPPED (no token): {len(miss)} repos lack metadata"); return len(miss), 0
    done = 0
    for i in range(0, len(repos), 100):
        if GQL["remaining"] is not None and GQL["remaining"] < 50:
            GQL["stopped"] = True; ERRORS.append("graphql: stopped, rateLimit nearly exhausted"); break
        chunk = repos[i:i + 100]
        fields = "".join(f'r{j}:repository(owner:{json.dumps(r.split("/")[0])},name:{json.dumps(r.split("/")[1])}){{{GQL_FIELDS}}} '
                         for j, r in enumerate(chunk))
        d = gql("query{rateLimit{cost remaining limit} " + fields + "}")
        if not d or not d.get("data"):
            ERRORS.append(f"graphql chunk {i}: no data {str((d or {}).get('errors'))[:200]}"); continue
        rl = d["data"].get("rateLimit") or {}
        GQL["cost"] += rl.get("cost", 0); GQL["remaining"] = rl.get("remaining"); GQL["limit"] = rl.get("limit")
        for j, r in enumerate(chunk):
            n = d["data"].get(f"r{j}")
            if n: set_meta_gql(r, n); done += 1
            else: META[r] = {"stars": None, "not_found": True}
    miss = [r for r in repos if META.get(r, {}).get("stars") is None]
    return len(miss), done

# ---------- tiers ----------
def days(ts):
    if not ts: return None
    return (NOW - datetime.fromisoformat(ts.replace("Z", "+00:00"))).days

def family(src):
    if src in ("official", "listed"): return "anthropic"
    if src.startswith("search:topic"): return "topic"
    if src.startswith("search:code"): return "code"
    return src  # curated, marketplace-expansion

def tier(hint, curated, repo, sources, origin="", item_level=False):
    m = META.get(repo, {}); reasons = []; flags = []
    st = m.get("stars"); age = days(m.get("created_at")); push = days(m.get("pushed_at"))
    if st is not None and age is not None and age < 180 and st / max(age, 1) > 50:
        flags.append("star-anomaly")
    stale = bool(m.get("archived")) or (push is not None and push > 365)
    if repo.startswith("anthropics/") and hint not in ("anthropic",) and not item_level and hint != "listed":
        return "anthropic", [f"authored by Anthropic (repo owner anthropics: {repo})"], flags
    if hint == "anthropic":
        return hint, [f"authored by Anthropic ({origin or repo})"], flags
    if hint == "official":
        return hint, ["third-party, listed in Anthropic official marketplace" + (f" ({origin})" if origin else "")], flags
    if hint == "listed":
        return hint, ["third-party, listed in Anthropic community marketplace" + (f" ({origin})" if origin else "")], flags
    if m.get("not_found"):
        return "watch", ["repo not found"], flags
    if curated and not stale: return "verified", ["in curated list (awesome-claude-code)"], flags
    if curated: reasons.append("curated but stale/archived")
    if stale: reasons.append("stale/archived")
    if st is None:
        reasons.append("no metadata"); return "watch", reasons, flags
    lic = m.get("license"); fams = {family(x) for x in sources}
    checks = [(st >= 200, f"stars>=200 ({st})"), (age is not None and age >= 90, f"age>=90d ({age})"),
              (push is not None and push <= 90, f"pushed<=90d ({push})"), (bool(lic) and lic != "NOASSERTION", f"license ({lic})"),
              (not m.get("archived"), "not archived"), ("star-anomaly" not in flags, "no star-anomaly")]
    forks = m.get("forks") or 0
    corro = [x for ok, x in [(forks >= 20, f"forks>=20 ({forks})"), (len(fams) >= 2, f"found by {len(fams)} independent sources"),
                             (m.get("owner_type") == "Organization", "owner is Organization")] if ok]
    fails = [x for ok, x in checks if not ok]
    if not fails and corro and not stale:
        return "verified", [x for ok, x in checks] + ["corroboration: " + ", ".join(corro)], flags
    reasons += ["fails: " + x for x in fails]
    if not corro: reasons.append("no corroborating signal")
    return "watch", reasons, flags

TYPE_RANK = ["plugin", "marketplace", "skill", "agent", "command", "hook", "collection"]

def mcp_only(repo, es, topics):
    """True when repo looks like a pure MCP server with no Claude Code plugin/skill/agent evidence."""
    name = repo.split("/")[-1].lower() if repo else ""
    name_sig = "mcp-server" in name or "mcp_server" in name or name.endswith("mcp")
    topic_sig = any(t in ("mcp-server", "mcp-servers") for t in topics or [])
    if not (name_sig or topic_sig): return False
    for e in es:
        if e["tier_hint"] in HINTS: return False
        if any(s in ("marketplace-expansion", "official", "listed") for s in e["sources"]): return False
        if any(s.startswith("search:code") for s in e["sources"]) and e["type"] in ("skill", "agent", "marketplace", "plugin"): return False
        # author labelled it as a Claude extension (topic search); only the repo NAME can override that
        if not name_sig and any(s.startswith("search:topic") for s in e["sources"]): return False
    return True

def load_snapshots():
    snaps = []
    for f in sorted((DATA / "snapshots").glob("*.json")):
        try: snaps.append((date.fromisoformat(f.stem), json.loads(f.read_text(encoding="utf-8"))))
        except Exception: pass
    return snaps

def trend(snaps, repo, stars, n):
    if stars is None: return None
    cutoff = date.fromisoformat(TODAY).toordinal() - n
    old = [s for d, s in snaps if d.toordinal() <= cutoff]
    if not old or repo not in old[-1]: return None
    return stars - old[-1][repo]

EXCLUDED_MCP = []

def build():
    prev = {}
    pf = DATA / "catalog.json"
    if pf.exists():
        try:
            pj = json.loads(pf.read_text(encoding="utf-8"))
            prev = {e["id"]: e for e in (pj["repos"] if isinstance(pj, dict) else pj)}
        except Exception: pass
    snaps = load_snapshots()
    groups = {}
    for e in ENTRIES.values():
        groups.setdefault(e.get("inrepo") or e["repo"] or e["url"], []).append(e)
    flat_tiers = []
    out = []
    for key, es in groups.items():
        repo = es[0]["repo"]
        item_level = bool(es[0].get("inrepo"))
        m = dict(META.get(repo, {}))
        if item_level:  # in-repo item of a container: no own stars/forks/created; keep freshness and license
            m.update(stars=None, forks=None, created_at=None, topics=[])
        if mcp_only(repo, es, m.get("topics")):
            EXCLUDED_MCP.append({"repo": repo, "stars": m.get("stars"), "topics": (m.get("topics") or [])[:5],
                                 "description": es[0]["description"][:80]})
            continue
        sources = sorted({s for e in es for s in e["sources"]})
        curated = any("curated" in e["signals"] for e in es)
        best = min(es, key=lambda e: TRANK.get(e["tier_hint"], 9))
        hint = best["tier_hint"]
        t, r, fl = tier(hint, curated, repo, sources, best.get("origin", ""), item_level)
        for e in es:  # pre-dedup tier for comparison
            ft = tier(e["tier_hint"], "curated" in e["signals"], repo, e["sources"], e.get("origin", ""), item_level)[0]
            flat_tiers.append((ft, e["type"]))
        items = []; seen = set()
        for e in es:
            k = (e["name"], e["type"], e["install_hint"])
            if k in seen: continue
            seen.add(k)
            items.append({"name": e["name"], "type": e["type"], "description": e["description"],
                          "install_hint": e["install_hint"], "url": e["url"]})
        types = sorted({i["type"] for i in items}, key=TYPE_RANK.index)
        desc = next((i["description"] for i in items if i["description"]), "")
        rid = key if item_level else (repo or key)
        st = m.get("stars")
        t7 = trend(snaps, repo, st, 7); t30 = trend(snaps, repo, st, 30)
        pct = None
        if t7 is not None and st is not None and st - t7 > 0: pct = round(100 * t7 / (st - t7), 2)
        if t7 is not None and st is not None and t7 > max(500, 0.2 * st): fl = fl + ["star-spike"]
        out.append({"id": rid, "repo": repo, "name": (es[0]["name"] if item_level else repo.split("/")[-1] if repo else es[0]["name"]), "description": desc,
                    "type": types[0], "types": types, "items": items, "sources": sources,
                    "url": es[0]["url"] if item_level else f"https://github.com/{repo}" if repo else es[0]["url"],
                    "stars": st, "forks": m.get("forks"), "pushed_at": m.get("pushed_at"),
                    "created_at": m.get("created_at"), "license": m.get("license"), "archived": m.get("archived"),
                    "owner_type": m.get("owner_type"), "topics": m.get("topics") or [], "tier": t, "tier_reasons": r,
                    "trend_7d": t7, "trend_30d": t30, "trend_7d_pct": pct, "flags": fl,
                    "first_seen": prev.get(rid, {}).get("first_seen", TODAY),
                    **({"container": repo} if item_level else {})})
    return out, flat_tiers

def main():
    t0 = time.time()
    print("mode:", "TOKEN" if TOKEN else "NO-TOKEN")
    src_official(); src_curated(); src_repo_search(); src_code_search(); expand_marketplaces()
    nmiss, ndone = enrich()
    out, flat = build()
    DATA.mkdir(exist_ok=True); (DATA / "snapshots").mkdir(exist_ok=True)
    counts = {"repos": len(out), "items": sum(len(e["items"]) for e in out),
              "tiers": dict(Counter(e["tier"] for e in out)), "types": dict(Counter(e["type"] for e in out)),
              "item_types": dict(Counter(i["type"] for e in out for i in e["items"])),
              "flags": dict(Counter(f for e in out for f in e["flags"])), "excluded_mcp": len(EXCLUDED_MCP),
              "without_metadata": sum(1 for e in out if e["stars"] is None)}
    doc = {"generated_at": NOW.strftime("%Y-%m-%dT%H:%M:%SZ"), "schema": 1, "counts": counts, "repos": out}
    (DATA / "catalog.json").write_text(json.dumps(doc, indent=1), encoding="utf-8")
    (DATA / "snapshots" / f"{TODAY}.json").write_text(
        json.dumps({e["repo"]: e["stars"] for e in out if e["repo"] and e["stars"] is not None}, indent=1), encoding="utf-8")
    report(out, flat, nmiss, ndone, time.time() - t0)
    print("repos:", len(out), "flat entries:", len(ENTRIES), "excluded mcp:", len(EXCLUDED_MCP), f"{time.time()-t0:.0f}s")

def tab(counter):
    return "\n".join(f"- {k}: {v}" for k, v in sorted(counter.items(), key=lambda x: -x[1]))

def line(e):
    return f"- {e['repo'] or e['name']} [{','.join(e['types'])}] *{e['stars']}* {e['flags'] or ''} items={len(e['items'])} - {e['description'][:80]}"

def report(out, flat, nmiss, ndone, secs):
    L = [f"# Catalog report {TODAY}", f"Mode: **{'token' if TOKEN else 'NO TOKEN (code search + enrichment skipped)'}**; run time {secs:.0f}s",
         f"Repos (deduped): {len(out)}; flat entries before dedup: {len(ENTRIES)}", "",
         "## Tier x type BEFORE dedup (flat entries)", tab(Counter(f"{t}/{ty}" for t, ty in flat)),
         "", "## Tier AFTER dedup (repos)", tab(Counter(e["tier"] for e in out)),
         "", "## Type AFTER dedup (items)", tab(Counter(i["type"] for e in out for i in e["items"])),
         "", "## Primary type AFTER dedup (repos)", tab(Counter(e["type"] for e in out)),
         "", "## Repos by discovery source family", tab(Counter(f for e in out for f in {family(x) for x in e["sources"]})),
         "", "## Flags (all tiers)", tab(Counter(f for e in out for f in e["flags"]) or Counter({"none": 0})),
         "", "## star-anomaly by tier", tab(Counter(e["tier"] for e in out if "star-anomaly" in e["flags"]) or Counter({"none": 0}))]
    nf = [e for e in out if e["stars"] is None]
    L += ["", "## Metadata gaps", f"- repos without metadata: {len(nf)}",
          f"- reasons: {dict(Counter('repo not found' if META.get(e['repo'], {}).get('not_found') else ('no repo (non-github link)' if not e['repo'] else 'unfetched') for e in nf))}"]
    L += ["", f"## MCP-only repos excluded: {len(EXCLUDED_MCP)}"] + [f"- {x['repo']} *{x['stars']}* {x['topics']} - {x['description']}" for x in
          sorted(EXCLUDED_MCP, key=lambda x: -(x['stars'] or 0))[:15]]
    tr = sorted([e for e in out if e["trend_7d"] is not None], key=lambda e: -e["trend_7d"])[:20]
    L += ["", "## Top 20 by trend_7d"] + ([f"- {e['repo']} +{e['trend_7d']} ({e['trend_7d_pct']}%) {e['flags']}" for e in tr] or ["- n/a (no snapshot >=7 days old yet)"])
    topic = {e["id"] for e in out if any(family(s) == "topic" for s in e["sources"])}
    code = [e for e in out if any(family(s) == "code" for s in e["sources"])]
    new = [e for e in code if e["id"] not in topic and not any(family(s) in ("anthropic", "curated") for s in e["sources"])]
    L += ["", "## Code search vs topic search", f"- repos found by code search: {len(code)}", f"- also in topic search: {len([e for e in code if e['id'] in topic])}",
          f"- code-only: {len(new)}; tiers: {dict(Counter(e['tier'] for e in new))}"]
    for t in ("anthropic", "official", "listed", "verified", "watch"):
        L += ["", f"## Top 30 by stars: {t}"] + [line(e) for e in sorted([x for x in out if x["tier"] == t], key=lambda x: -(x["stars"] or 0))[:30]]
    w = [e for e in out if e["tier"] == "watch"]
    random.seed(11)
    L += ["", f"## Random sample of 20 watch repos (of {len(w)})"]
    for e in random.sample(w, min(20, len(w))): L.append(line(e) + f" reasons={e['tier_reasons']} src={sorted({family(s) for s in e['sources']})}")
    L += ["", "## Errors"] + ([f"- {x[:300]}" for x in ERRORS[:60]] or ["- none"])
    L += ["", "## Rate limit", f"- REST calls this run (uncached): {json.dumps(CALLS)}; last seen: {json.dumps(RATE)}",
          f"- GraphQL: {GQL['calls']} calls, cost {GQL['cost']}, remaining {GQL['remaining']}/{GQL['limit']}, stopped early: {GQL['stopped']}",
          f"- REST stopped early: {STATE['rl_stop']}", f"- repos lacking metadata: {nmiss}; enriched this run: {ndone}"]
    (DATA / "report.md").write_text("\n".join(L), encoding="utf-8")

if __name__ == "__main__":
    main()
