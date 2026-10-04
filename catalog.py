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

# Resilience. A partial upstream failure must never shrink or degrade the published catalog: transient errors are retried
# with exponential backoff, and whatever still fails falls back to the previous data/catalog.json (read before it is overwritten).
DELAYS = (2, 4, 8, 16)                                              # backoff between retries of 5xx / network errors (seconds)
RETRY_SCALE = float(os.environ.get("CATALOG_RETRY_SCALE", "1"))     # test only: scales every backoff sleep
GQL_PACE = float(os.environ.get("CATALOG_GQL_PACE", "1.0"))         # seconds between GraphQL queries (secondary rate limit)
GQL_403_SLEEP = float(os.environ.get("CATALOG_GQL_403_SLEEP", "60"))  # wait after a 403 without Retry-After
# CATALOG_FAULT (testing only): comma list of kind@n that inject failures.
#   registry500@N   registry page N (1-based) always answers HTTP 500          registry500t@N  only its first attempt does
#   gql403@K        the K-th GraphQL query always answers 403 (secondary rate limit)   gql403t@K  only its first attempt does
FAULTS = {}
for _f in os.environ.get("CATALOG_FAULT", "").split(","):
    _k, _, _n = _f.strip().partition("@")
    if _k and _n.isdigit(): FAULTS.setdefault(_k, set()).add(int(_n))
RETRIES = {"http": 0}

def load_prev():
    try:
        j = json.loads((ROOT / "data" / "catalog.json").read_text(encoding="utf-8"))
        return [e for e in (j["repos"] if isinstance(j, dict) else j) if isinstance(e, dict)]
    except Exception: return []
PREV = load_prev()   # the last published catalog, read before this run overwrites it
STALE = set()        # repos whose metadata was reused from PREV because enrichment failed

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

def _inject(url, attempt):
    """CATALOG_FAULT hook (testing): HTTP status to simulate for this request, or 0."""
    if url.startswith(MCP_REG):
        pg = STATE.get("reg_page")
        if pg in FAULTS.get("registry500", ()) or (pg in FAULTS.get("registry500t", ()) and attempt == 0): return 500
    return 0

def http_get(url, api=False, search=False):
    """Returns (status, body_text). Caches 200/404 bodies keyed by URL. Retries 5xx and network errors with backoff."""
    key = CACHE / (hashlib.sha1(url.encode()).hexdigest() + ".json")
    if key.exists() and not REFRESH and not _inject(url, 0) and (OFFLINE or (time.time() - key.stat().st_mtime) < CACHE_TTL_H * 3600):
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
    for attempt in range(len(DELAYS) + 1):
        status, body, hd, err = 0, "", None, ""
        if api: CALLS["search" if search else "core"] += 1
        inj = _inject(url, attempt)
        if inj: status, body = inj, "injected fault"
        else:
            try:
                with urllib.request.urlopen(urllib.request.Request(url, headers=h), timeout=30) as r:
                    status, body, hd = r.status, r.read().decode("utf-8", "replace"), r.headers
            except urllib.error.HTTPError as e:
                status, hd = e.code, e.headers
                body = e.read().decode("utf-8", "replace")
            except Exception as e:
                err = f"{type(e).__name__} {e}"
        if (status == 0 or status >= 500) and attempt < len(DELAYS):
            RETRIES["http"] += 1; time.sleep(DELAYS[attempt] * RETRY_SCALE); continue
        break
    if status == 0 and err:
        ERRORS.append(f"{url}: {err}"); return 0, ""
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
MKT = {}       # repo -> {"name": marketplace name, "plugins": [plugin names whose source is this repo]}
CURATED = set()

def trunc(s): return re.sub(r"\s+", " ", s or "").strip()[:300]

def set_meta(repo, item):
    if not repo: return
    lic = item.get("license")
    META[repo] = {"stars": item.get("stargazers_count"), "pushed_at": item.get("pushed_at"),
                  "created_at": item.get("created_at"), "forks": item.get("forks_count"),
                  "license": (lic or {}).get("spdx_id") if isinstance(lic, dict) else lic,
                  "archived": item.get("archived"), "topics": item.get("topics") or [], "owner_type": (item.get("owner") or {}).get("type"),
                  "node_id": item.get("node_id"), "canonical": item.get("full_name")}

def repo_from_url(u):
    m = re.search(r"github\.com[/:]([\w.-]+)/([\w.-]+?)(?:\.git)?(?:[/#?]|$)", u or "")
    if not m: m = re.fullmatch(r"([\w.-]+)/([\w.-]+?)(?:\.git)?", (u or "").strip())
    return f"{m.group(1)}/{m.group(2)}" if m else ""

def load_hist_repos():
    try: return set(json.loads((DATA / "history" / "series.json").read_text(encoding="utf-8")))
    except Exception: return set()
HIST_REPOS = load_hist_repos()

TRANK = {"anthropic": 0, "official": 1, "listed": 2}
HINTS = tuple(TRANK)

def add(id_, name, type_, desc, repo, url, source, hint, tier_hint=None, signals=(), origin="", inrepo="", paths=()):
    e = ENTRIES.get(id_)
    if e:
        if source not in e["sources"]: e["sources"].append(source)
        for pth in paths:
            if pth not in e["paths"]: e["paths"].append(pth)
        for s in signals:
            if s not in e["signals"]: e["signals"].append(s)
        if TRANK.get(tier_hint, 9) < TRANK.get(e["tier_hint"], 9): e["tier_hint"] = tier_hint; e["origin"] = origin
        return
    ENTRIES[id_] = {"id": id_, "name": name, "type": type_, "description": trunc(desc), "repo": repo,
                    "url": url, "source": source, "sources": [source], "install_hint": hint,
                    "tier_hint": tier_hint, "signals": list(signals), "origin": origin, "inrepo": inrepo, "paths": list(paths)}

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
    MKT.setdefault(mrepo, {"name": mname, "plugins": []})
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
        if repo == mrepo and p["name"] not in MKT[mrepo]["plugins"]: MKT[mrepo]["plugins"].append(p["name"])
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

def link_path(link):
    """Path inside the repo when a curated link points at /tree/<branch>/<path> or /blob/<branch>/<path>; else ''."""
    m = re.search(r"github\.com/[\w.-]+/[\w.-]+/(?:tree|blob)/[^/]+/(.+?)/?(?:[#?].*)?$", link or "")
    return m.group(1) if m else ""

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
            r.get(cdesc) if cdesc else "", repo, link, "curated", f"see {link}", None, ["curated"],
            paths=[link_path(link)] if link_path(link) else ())
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
        hits = {}; hpaths = {}
        for page in (1, 2, 3):
            d = jget(f"https://api.github.com/search/code?q={quote(q)}&per_page=100&page={page}", api=True, search=True)
            if not d: break
            for it in d.get("items", []):
                hits.setdefault(it["repository"]["full_name"], it["repository"])
                if it.get("path"): hpaths.setdefault(it["repository"]["full_name"], []).append(it["path"])
            if len(d.get("items", [])) < 100: break
        for repo, rj in hits.items():
            h = {"marketplace": f"/plugin marketplace add {repo}", "plugin": f"/plugin marketplace add {repo}",
                 "skill": f"copy skills from {repo}", "agent": f"copy agents from {repo}"}[typ]
            add(f"repo:{repo}:{typ}", repo.split("/")[1], typ, rj.get("description"), repo, rj["html_url"], f"search:code:{q}", h, paths=hpaths.get(repo, []))
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

# ---------- 3b official MCP Registry (standalone MCP servers) ----------
# https://registry.modelcontextprotocol.io/v0/servers, public, no auth. `version=latest` makes the registry return only each
# server's latest version; isLatest and status are still checked because the schema drifts between versions.
MCP_REG = "https://registry.modelcontextprotocol.io/v0/servers"
MCP_STATS = {"pages": 0, "fetched": 0, "kept": 0, "dropped": 0, "bad": 0, "complete": True, "excluded_remote_only": 0, "excluded_low_signal": 0, "fallback_merged": 0}
_SAFE_ID = re.compile(r"[\w@./:+=~-]+")
_SAFE_VER = re.compile(r"[\w.+~-]+")
_SAFE_URL = re.compile(r"https?://[^\s'\"`$;&|<>\\{}^]+")
_SAFE_VAR = re.compile(r"[A-Za-z_][A-Za-z0-9_.-]*")
_RESERVED = {"workspace", "claude-in-chrome", "computer-use"}

def _s(v): return v if isinstance(v, str) else ""
def _l(v): return [x for x in v if isinstance(x, dict)] if isinstance(v, list) else []

_GENERIC = {"mcp", "server", "mcp-server", "mcp-servers", "api", "remote", "remote-mcp", "app", "main", "default"}
def mcp_short_name(name):
    """Name for `claude mcp add`: last path segment of the registry name; a generic one ("mcp") borrows the namespace
    (com.notion/mcp -> notion, io.github.owner/mcp -> owner)."""
    ns, _, last = name.rpartition("/")
    clean = lambda x: re.sub(r"[^a-z0-9._-]+", "-", x.lower()).strip("-._")
    n = clean(last)
    if n in _GENERIC or not n:
        n = clean(ns.rsplit(".", 1)[-1]) or n or "mcp-server"
    return n + "-mcp" if n in _RESERVED else n

def _requires(*lists):
    """Names (never values) of required env vars / headers, in order, deduplicated."""
    out = []
    for lst in lists:
        for x in _l(lst):
            nm = _s(x.get("name")).strip()
            if x.get("isRequired") is True and _SAFE_VAR.fullmatch(nm) and nm not in out: out.append(nm)
    return out

def mcp_install_hint(srv):
    """Runnable `claude mcp add ...` for a registry server dict, or '' when neither a remote nor a runnable package is listed.
    Everything interpolated is validated against strict patterns first (registry text is untrusted data)."""
    short = mcp_short_name(_s(srv.get("name")))
    for r in _l(srv.get("remotes")):
        url, typ = _s(r.get("url")).strip(), _s(r.get("type")).lower()
        if typ not in ("streamable-http", "http", "sse") or not _SAFE_URL.fullmatch(url): continue
        req = _requires(r.get("headers"))
        return (f"claude mcp add --transport {'sse' if typ == 'sse' else 'http'} {short} {url}"
                + (f"  # requires: {', '.join(req)}" if req else ""))
    pk = _l(srv.get("packages"))
    for want in ("npm", "pypi", "oci"):
        for p in pk:
            if _s(p.get("registryType")).lower() != want: continue
            tr = p.get("transport")
            tt = _s(tr.get("type") if isinstance(tr, dict) else tr).lower()
            if tt not in ("", "stdio"): continue
            ident, ver = _s(p.get("identifier")).strip(), _s(p.get("version")).strip()
            if not ident or not _SAFE_ID.fullmatch(ident): continue
            if ver and not _SAFE_VER.fullmatch(ver): ver = ""
            args = []
            for a in _l(p.get("packageArguments")):
                v = _s(a.get("value")).strip(); nm = _s(a.get("name")).strip()
                if a.get("type") == "named" and re.fullmatch(r"--?[\w-]+", nm):
                    if v and _SAFE_VER.fullmatch(v): args += [nm, v]
                elif a.get("type") == "positional" and v and _SAFE_ID.fullmatch(v): args.append(v)
            tail = (" " + " ".join(args)) if args else ""
            if want == "npm": cmd = f"npx -y {ident}" + (f"@{ver}" if ver and "@" not in ident[1:] else "")
            elif want == "pypi": cmd = f"uvx {ident}"
            else: cmd = f"docker run -i --rm {ident}"
            req = _requires(p.get("environmentVariables"))
            return f"claude mcp add {short} -- {cmd}{tail}" + (f"  # requires: {', '.join(req)}" if req else "")
    return ""

def parse_mcp_entry(ent):
    """One registry list entry -> dict(name,title,desc,repo,repo_url,sub,site,remote,hint,published) or None (not active/latest)."""
    srv = ent.get("server") if isinstance(ent, dict) and isinstance(ent.get("server"), dict) else None
    if not srv or not _s(srv.get("name")).strip(): return None
    meta = (ent.get("_meta") or {}).get("io.modelcontextprotocol.registry/official") if isinstance(ent.get("_meta"), dict) else None
    meta = meta if isinstance(meta, dict) else {}
    if meta.get("status", "active") != "active" or meta.get("isLatest") is False: return None
    rp = srv.get("repository") if isinstance(srv.get("repository"), dict) else {}
    ru = _s(rp.get("url")).strip(); repo = ""
    if ru and (_s(rp.get("source")).lower() in ("github", "") or "github.com" in ru): repo = repo_from_url(ru)
    site = _s(srv.get("websiteUrl")).strip()
    rem = next((_s(r.get("url")).strip() for r in _l(srv.get("remotes")) if _s(r.get("url")).strip().startswith(("http://", "https://"))), "")
    return {"name": _s(srv["name"]).strip(), "title": _s(srv.get("title")).strip(), "desc": _s(srv.get("description")),
            "repo": repo, "repo_url": ru if ru.startswith(("http://", "https://")) else "", "sub": _s(rp.get("subfolder")).strip("/ "),
            "site": site if site.startswith(("http://", "https://")) else "", "remote": rem, "hint": mcp_install_hint(srv),
            "published": _s(meta.get("publishedAt"))}

def src_mcp_registry():
    seen = {}; cursor = None
    for _ in range(3000):
        url = f"{MCP_REG}?limit=100&version=latest" + (f"&cursor={quote(cursor, safe='')}" if cursor else "")
        STATE["reg_page"] = MCP_STATS["pages"] + 1
        s, b = http_get(url)
        if s != 200:
            MCP_STATS["complete"] = False; ERRORS.append(f"mcp registry: page {MCP_STATS['pages'] + 1} HTTP {s}"); break
        try: d = json.loads(b)
        except Exception as e:
            MCP_STATS["complete"] = False; ERRORS.append(f"mcp registry: bad JSON {e}"); break
        MCP_STATS["pages"] += 1
        servers = d.get("servers") if isinstance(d, dict) else None
        if not isinstance(servers, list): MCP_STATS["complete"] = False; ERRORS.append("mcp registry: no servers list"); break
        for ent in servers:
            MCP_STATS["fetched"] += 1
            try: m = parse_mcp_entry(ent)
            except Exception as e:
                MCP_STATS["bad"] += 1; ERRORS.append(f"mcp registry entry: {type(e).__name__} {e}"); continue
            if not m: MCP_STATS["dropped"] += 1; continue
            if m["name"] not in seen or m["published"] > seen[m["name"]]["published"]: seen[m["name"]] = m
        cursor = ((d.get("metadata") or {}).get("nextCursor") if isinstance(d, dict) else None) or None
        if not cursor or not servers: break
    for m in seen.values():
        if not m["repo"]:  # inclusion rule: a registry server needs a GitHub repository (remote-only servers are excluded)
            MCP_STATS["excluded_remote_only"] += 1; continue
        short = m["title"] or m["name"].rsplit("/", 1)[-1]
        url = f"https://github.com/{m['repo']}" + (f"/tree/HEAD/{m['sub']}" if m["sub"] else "")
        hint = m["hint"] or f"# no runnable package or remote listed in the registry: see {url}"
        add(f"mcp:{m['name']}", short, "mcp-server", m["desc"], m["repo"], url, "mcp-registry", hint)
    MCP_STATS["kept"] = len(seen)
    if not MCP_STATS["complete"]: merge_prev_mcp()
    print(f"mcp registry: {MCP_STATS['pages']} pages, {MCP_STATS['fetched']} entries, {len(seen)} latest+active servers, {MCP_STATS['dropped']} dropped, "
          f"{MCP_STATS['excluded_remote_only']} remote-only excluded")

def merge_prev_mcp():
    """Incomplete registry fetch: keep the MCP servers of the previous catalog that this run did not re-fetch."""
    fresh = {(e["repo"], e["name"]) for e in ENTRIES.values() if e["type"] == "mcp-server"}
    n = 0
    for r in PREV:
        repo = r.get("repo") or ""
        if not repo or r.get("container") or "mcp-registry" not in (r.get("sources") or []): continue
        for it in r.get("items") or []:
            if it.get("type") != "mcp-server" or (repo, it.get("name")) in fresh: continue
            eid = f"mcp:prev:{repo}:{it.get('name')}"
            add(eid, it.get("name") or repo, "mcp-server", it.get("description"), repo, it.get("url") or f"https://github.com/{repo}",
                "mcp-registry", it.get("install_hint") or "")
            ENTRIES[eid]["prev"] = True; n += 1
    MCP_STATS["fallback_merged"] = n
    print(f"mcp registry INCOMPLETE: {n} servers of the previous catalog merged in")

def filter_mcp():
    """Inclusion rule, applied after enrichment (it needs stars): a registry server is kept only when its GitHub repo is
    already in the catalog for another reason (attached), OR the repo reaches tier >= verified, OR has >= 10 stars."""
    nodes = {m["node_id"]: m["canonical"] for m in META.values() if m.get("node_id") and m.get("canonical")}
    canon = lambda r: nodes.get((META.get(r) or {}).get("node_id"), (META.get(r) or {}).get("canonical") or r)
    others = {}
    for e in ENTRIES.values():
        if e["repo"] and "mcp-registry" not in e["sources"]: others.setdefault(canon(e["repo"]), []).append(e)
    attached = {r for r, es in others.items() if not mcp_only(r, es, (META.get(r) or {}).get("topics"))}
    drop = []
    for k, e in ENTRIES.items():
        if e["type"] != "mcp-server" or e["sources"] != ["mcp-registry"] or e.get("prev"): continue  # prev: already passed the rule once
        r = canon(e["repo"])
        if r in attached: continue
        if tier(None, False, e["repo"], ["mcp-registry"])[0] != "watch" or ((META.get(e["repo"]) or {}).get("stars") or 0) >= 10: continue
        drop.append(k)
    for k in drop: del ENTRIES[k]
    MCP_STATS["excluded_low_signal"] = len(drop)
    print(f"mcp inclusion rule: {len(drop)} registry servers excluded (repo below verified and <10 stars, not attached to another catalog record)")

# ---------- 4 enrichment (GraphQL, ~100 repos per query) ----------
GQL_FIELDS = ("id nameWithOwner stargazerCount forkCount pushedAt createdAt licenseInfo{spdxId} isArchived owner{__typename} "
              "repositoryTopics(first:20){nodes{topic{name}}}")
GQL = {"calls": 0, "cost": 0, "remaining": None, "limit": None, "stopped": False, "queries": 0, "n403": 0, "secondary": 0, "retries": 0,
       "failed": 0, "batch": 100}

def gql(query):
    """One GraphQL query. 5xx/network errors: 4 retries with 2/4/8/16s backoff. 403/429 (secondary rate limit): wait Retry-After
    (else 60s) and retry up to 4 times, then give up (the caller falls back to the previous catalog's metadata)."""
    GQL["queries"] += 1; qn = GQL["queries"]
    h = {"User-Agent": "cc-catalog", "Authorization": f"Bearer {TOKEN}", "Content-Type": "application/json"}
    data = json.dumps({"query": query}).encode()
    t403 = t5 = 0
    while True:
        GQL["calls"] += 1
        status, body, hd = 0, "", {}
        if qn in FAULTS.get("gql403", ()) or (qn in FAULTS.get("gql403t", ()) and t403 == 0):
            status, body, hd = 403, "You have exceeded a secondary rate limit (injected fault)", {"Retry-After": "1"}
        else:
            try:
                with urllib.request.urlopen(urllib.request.Request("https://api.github.com/graphql", data=data, headers=h), timeout=90) as r:
                    return json.loads(r.read().decode("utf-8", "replace"))
            except urllib.error.HTTPError as e:
                status, hd, body = e.code, e.headers, e.read().decode("utf-8", "replace")
            except Exception as e:
                status, body = 0, f"{type(e).__name__} {e}"
        if status in (403, 429):
            GQL["n403"] += 1
            ra = hd.get("Retry-After")
            secondary = "secondary rate limit" in body.lower() or "abuse" in body.lower() or ra is not None
            if secondary: GQL["secondary"] += 1
            if hd.get("X-RateLimit-Remaining") == "0" and not secondary:
                ERRORS.append("graphql: primary rate limit exhausted (HTTP %d)" % status); GQL["failed"] += 1; return None
            GQL["batch"] = 50   # smaller batches after any 403
            if t403 >= 4:
                ERRORS.append(f"graphql: HTTP {status} {'secondary rate limit' if secondary else 'forbidden'} persisted after 4 retries"); GQL["failed"] += 1; return None
            wait = min(float(ra), 300) if ra and str(ra).isdigit() else GQL_403_SLEEP
            ERRORS.append(f"graphql: HTTP {status} {'secondary rate limit' if secondary else 'forbidden'}, waiting {wait:.0f}s (retry {t403 + 1}/4)")
            t403 += 1; GQL["retries"] += 1; time.sleep(wait); continue
        if status == 0 or status >= 500:
            if t5 < len(DELAYS):
                GQL["retries"] += 1; time.sleep(DELAYS[t5] * RETRY_SCALE); t5 += 1; continue
            ERRORS.append(f"graphql: HTTP {status or 'network error'} after {len(DELAYS)} retries {body[:80]}"); GQL["failed"] += 1; return None
        ERRORS.append(f"graphql: HTTP {status}"); GQL["failed"] += 1; return None

def set_meta_gql(repo, n):
    META[repo] = {"stars": n.get("stargazerCount"), "forks": n.get("forkCount"), "pushed_at": n.get("pushedAt"),
                  "created_at": n.get("createdAt"), "license": (n.get("licenseInfo") or {}).get("spdxId"),
                  "archived": n.get("isArchived"), "owner_type": (n.get("owner") or {}).get("__typename"),
                  "topics": [x["topic"]["name"] for x in ((n.get("repositoryTopics") or {}).get("nodes") or [])],
                  "node_id": n.get("id"), "canonical": n.get("nameWithOwner")}

def apply_stale(repos):
    """Enrichment failed for these repos: reuse their metadata from the previous catalog (flagged meta_stale)."""
    pm = {}
    for e in PREV:
        if e.get("repo") and not e.get("container") and e.get("stars") is not None:
            m = {k: e.get(k) for k in ("stars", "forks", "pushed_at", "created_at", "license", "archived", "owner_type", "topics", "node_id")}
            m["canonical"] = e["repo"]; m["meta_stale"] = True
            for nm in [e["repo"]] + (e.get("aliases") or []): pm.setdefault(nm, m)
    for r in repos:
        m = META.get(r) or {}
        if m.get("stars") is None and not m.get("not_found") and r in pm:
            META[r] = dict(pm[r]); STALE.add(r)

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
                if e.get("repo") and not e.get("container"):
                    m = {k: e.get(k) for k in ("stars", "forks", "pushed_at", "created_at", "license", "archived", "owner_type", "topics", "node_id")}
                    m["canonical"] = e["repo"]
                    for nm in [e["repo"]] + (e.get("aliases") or []):
                        META.setdefault(nm, m)
        except Exception as ex: ERRORS.append(f"offline: cannot load previous catalog {ex}")
        return 0, 0
    if not TOKEN:
        apply_stale(repos)
        miss = [r for r in repos if META.get(r, {}).get("stars") is None]
        print(f"enrichment SKIPPED (no token): {len(miss)} repos lack metadata"); return len(miss), 0
    done = 0
    # GraphQL results are cached per repo (same TTL as HTTP responses) so an interrupted run resumes instead of restarting
    gc = CACHE / "gql_meta.json"
    try: gmeta = json.loads(gc.read_text(encoding="utf-8")) if gc.exists() and not REFRESH else {}
    except Exception: gmeta = {}
    fresh = {r for r in repos if r in gmeta and time.time() - gmeta[r]["t"] < CACHE_TTL_H * 3600}
    for r in fresh: META[r] = gmeta[r]["m"]; done += 1
    todo = [r for r in repos if r not in fresh]
    print(f"graphql: {len(fresh)} repos from cache, {len(todo)} to fetch")
    repos_all, repos = repos, todo
    pos = nq = 0
    while pos < len(repos):
        if nq and nq % 20 == 0:
            gc.write_text(json.dumps(gmeta), encoding="utf-8"); print(f"graphql: {pos}/{len(repos)}", flush=True)
        if GQL["remaining"] is not None and GQL["remaining"] < 50:
            GQL["stopped"] = True; ERRORS.append("graphql: stopped, rateLimit nearly exhausted"); break
        if nq: time.sleep(GQL_PACE)   # ~1s between queries keeps clear of the secondary rate limit
        chunk = repos[pos:pos + GQL["batch"]]; pos += len(chunk); nq += 1
        fields = "".join(f'r{j}:repository(owner:{json.dumps(r.split("/")[0])},name:{json.dumps(r.split("/")[1])}){{{GQL_FIELDS}}} '
                         for j, r in enumerate(chunk))
        d = gql("query{rateLimit{cost remaining limit} " + fields + "}")
        if not d or not d.get("data"):
            ERRORS.append(f"graphql chunk {nq}: no data {str((d or {}).get('errors'))[:200]}"); continue
        rl = d["data"].get("rateLimit") or {}
        GQL["cost"] += rl.get("cost", 0); GQL["remaining"] = rl.get("remaining"); GQL["limit"] = rl.get("limit")
        for j, r in enumerate(chunk):
            n = d["data"].get(f"r{j}")
            if n:
                set_meta_gql(r, n); done += 1; gmeta[r] = {"t": time.time(), "m": META[r]}
                can = n.get("nameWithOwner")  # renamed/transferred repo: the canonical name shares this metadata
                if can and can != r and META.get(can, {}).get("stars") is None: META[can] = META[r]
            else: META[r] = {"stars": None, "not_found": True}; gmeta[r] = {"t": time.time(), "m": META[r]}
    gc.write_text(json.dumps(gmeta), encoding="utf-8")
    repos = repos_all
    apply_stale(repos)
    miss = [r for r in repos if META.get(r, {}).get("stars") is None]
    return len(miss), done

# ---------- runnable install hints ----------
# install_hint is one string. Claude Code slash-command steps are joined with " ; " (type each on its own line in
# Claude Code); shell steps are joined with " && ". A trailing "  # ..." is a human note, not part of the command.
def _skill_dir(p):
    if p.lower().endswith("skill.md"): return p.rsplit("/", 1)[0] if "/" in p else ""
    return None if p.lower().endswith(".md") else p.strip("/")

def shell_install(repo, typ, paths):
    rn = repo.split("/")[1]; tmp = f"/tmp/{rn}"; url = f"https://github.com/{repo}"
    clone = f"git clone --depth 1 {url} {tmp}"
    if typ == "skill":
        dirs = sorted({d for d in (_skill_dir(p) for p in paths) if d is not None})
        if "" in dirs: return f"git clone --depth 1 {url} .claude/skills/{rn}"   # SKILL.md at the repo root
        if not dirs:
            return (f"mkdir -p .claude/skills && {clone} && find {tmp} -name SKILL.md -not -path '*/node_modules/*' "
                    f"-exec dirname {{}} \\; | xargs -I{{}} cp -r {{}} .claude/skills/  # skill folder not indexed: copies every folder containing SKILL.md")
        if len(dirs) <= 4:
            return f"mkdir -p .claude/skills && {clone} && " + " && ".join(f"cp -r {tmp}/{d} .claude/skills/" for d in dirs)
        parents = {d.rsplit("/", 1)[0] if "/" in d else "" for d in dirs}
        if len(parents) == 1 and "" not in parents:
            return f"mkdir -p .claude/skills && {clone} && cp -r {tmp}/{next(iter(parents))}/. .claude/skills/"
        return (f"mkdir -p .claude/skills && {clone} && " + " && ".join(f"cp -r {tmp}/{d} .claude/skills/" for d in dirs[:4])
                + f"  # +{len(dirs) - 4} more skill folders in the repo")
    if typ == "agent":
        files = sorted({p for p in paths if p.lower().endswith(".md")})
        dirs = sorted({p.rsplit("/", 1)[0] for p in files if "/" in p})
        if len(dirs) == 1 and len(files) > 1: cps = f"cp {tmp}/{dirs[0]}/*.md .claude/agents/"
        elif 0 < len(files) <= 4: cps = " && ".join(f"cp {tmp}/{f} .claude/agents/" for f in files)
        elif dirs: cps = " && ".join(f"cp {tmp}/{d}/*.md .claude/agents/" for d in dirs[:3])
        else:
            return (f"mkdir -p .claude/agents && {clone} && find {tmp} -path '*/agents/*.md' -not -path '*/node_modules/*' "
                    f"-exec cp {{}} .claude/agents/ \\;  # agent folder not indexed: copies every agents/*.md found")
        return f"mkdir -p .claude/agents && {clone} && {cps}"
    if typ == "plugin":
        return f"{clone} && claude --plugin-dir {tmp}  # no marketplace.json found: loads the plugin for this session only"
    if typ == "command":
        return (f"mkdir -p .claude/commands && {clone} && find {tmp} -path '*/commands/*.md' -not -path '*/node_modules/*' "
                f"-exec cp {{}} .claude/commands/ \\;  # copies every commands/*.md found")
    return f"{clone}  # {typ}: read its README, then copy what you need into .claude/"

def finalize_hints():
    """Replace "copy skills from ..." / "copy agents from ..." / "see <url>" with a runnable command. Entries whose repo
    has a parsed marketplace.json get /plugin marketplace add + /plugin install instead."""
    n = 0
    for e in ENTRIES.values():
        h = e["install_hint"]; repo = e["repo"]
        if not repo or not h.startswith(("copy ", "see ")): continue
        if not re.fullmatch(r"[\w.-]+/[\w.-]+", repo): continue
        mk = MKT.get(repo)
        if mk and mk["plugins"]:
            add_ = f"/plugin marketplace add {repo}"
            e["install_hint"] = (f"{add_} ; /plugin install {mk['plugins'][0]}@{mk['name']}" if len(mk["plugins"]) == 1 else
                                 f"{add_} ; /plugin install <plugin>@{mk['name']}  # {len(mk['plugins'])} plugins in this marketplace, browse with /plugin")
        else:
            e["install_hint"] = shell_install(repo, e["type"], e.get("paths") or [])
        n += 1
    print(f"install hints made runnable: {n}")

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
    if st is not None and age is not None and age < 180 and st / max(age, 1) > 50 and repo not in HIST_REPOS:
        flags.append("star-anomaly")  # coarse fallback only for repos without a star-history series; see history.py star-farming
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

TYPE_RANK = ["plugin", "marketplace", "skill", "agent", "command", "hook", "mcp-server", "collection"]

def mcp_only(repo, es, topics):
    """True when repo looks like a pure MCP server with no Claude Code plugin/skill/agent evidence. Repos registered in the
    official MCP Registry are never excluded: they come in through src_mcp_registry as type mcp-server. Unregistered MCP-only
    repos found by topic/code search stay excluded."""
    if any("mcp-registry" in e["sources"] for e in es): return False
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
    nodes = {}  # GraphQL node id -> canonical nameWithOwner (renamed/transferred repos share one node id)
    for r, m in META.items():
        if m.get("node_id") and m.get("canonical"): nodes.setdefault(m["node_id"], m["canonical"])
    def canon(r):
        m = META.get(r) or {}
        return nodes.get(m.get("node_id"), m.get("canonical") or r) if r else r
    groups = {}
    for e in ENTRIES.values():
        groups.setdefault(e.get("inrepo") or canon(e["repo"]) or (e["id"] if e["type"] == "mcp-server" else e["url"]), []).append(e)
    flat_tiers = []
    out = []
    for key, es in groups.items():
        repo = canon(es[0]["repo"])
        aliases = sorted({e["repo"] for e in es if e["repo"] and e["repo"] != repo})
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
        if not repo and all(e["type"] == "mcp-server" for e in es):  # registry server without a GitHub repo: nothing to judge
            t, r, fl = "watch", [es[0].get("origin") or "registry namespace verified, no public source"], []
        else:
            t, r, fl = tier(hint, curated, repo, sources, best.get("origin", ""), item_level)
        for e in es:  # pre-dedup tier for comparison
            ft = "watch" if not repo and e["type"] == "mcp-server" else tier(e["tier_hint"], "curated" in e["signals"], repo, e["sources"], e.get("origin", ""), item_level)[0]
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
        t7 = t30 = None
        for nm in [repo] + aliases:
            t7 = trend(snaps, nm, st, 7); t30 = trend(snaps, nm, st, 30)
            if t7 is not None: break
        pct = None
        if t7 is not None and st is not None and st - t7 > 0: pct = round(100 * t7 / (st - t7), 2)
        if t7 is not None and st is not None and t7 > max(500, 0.2 * st): fl = fl + ["star-spike"]
        out.append({"id": rid, "repo": repo, "name": (es[0]["name"] if item_level else repo.split("/")[-1] if repo else es[0]["name"]), "description": desc,
                    "type": types[0], "types": types, "items": items, "sources": sources,
                    "url": es[0]["url"] if item_level else f"https://github.com/{repo}" if repo else es[0]["url"],
                    "stars": st, "forks": m.get("forks"), "pushed_at": m.get("pushed_at"),
                    "created_at": m.get("created_at"), "license": m.get("license"), "archived": m.get("archived"),
                    "owner_type": m.get("owner_type"), "topics": m.get("topics") or [], "tier": t, "tier_reasons": r,
                    **({"node_id": m["node_id"]} if m.get("node_id") and not item_level else {}),
                    **({"aliases": aliases} if aliases and not item_level else {}),
                    **({"meta_stale": True} if m.get("meta_stale") and not item_level else {}),
                    "trend_7d": t7, "trend_30d": t30, "trend_7d_pct": pct, "flags": fl,
                    "first_seen": min([prev[x]["first_seen"] for x in [rid] + aliases if x in prev and prev[x].get("first_seen")] or [TODAY]),
                    **({"container": repo} if item_level else {})})
    return out, flat_tiers

def degradation(out):
    return {"registry_complete": MCP_STATS["complete"], "registry_pages": MCP_STATS["pages"], "registry_fetched": MCP_STATS["fetched"],
            "mcp_fallback_merged": MCP_STATS["fallback_merged"], "graphql_403": GQL["n403"], "graphql_secondary": GQL["secondary"],
            "graphql_retries": GQL["retries"], "graphql_failed_queries": GQL["failed"], "http_retries": RETRIES["http"],
            "stale_metadata_repos": sum(1 for e in out if e.get("meta_stale")), "injected_faults": os.environ.get("CATALOG_FAULT", "")}

def mcp_counts(out):
    """Registry stats. attached_existing = record also found by another source; new_repo = GitHub repo found only through the
    registry; remote_only = no GitHub repo."""
    rs = [e for e in out if "mcp-registry" in e["sources"]]
    return {**MCP_STATS, "records": len(rs),
            "attached_existing": sum(1 for e in rs if e["repo"] and set(e["sources"]) != {"mcp-registry"}),
            "new_repo": sum(1 for e in rs if e["repo"] and set(e["sources"]) == {"mcp-registry"}),
            "remote_only": sum(1 for e in rs if not e["repo"]),
            "tiers": dict(Counter(e["tier"] for e in rs))}

def main():
    t0 = time.time()
    print("mode:", "TOKEN" if TOKEN else "NO-TOKEN")
    src_official(); src_curated(); src_repo_search(); src_code_search(); expand_marketplaces(); src_mcp_registry()
    nmiss, ndone = enrich()
    filter_mcp()
    finalize_hints()
    out, flat = build()
    DATA.mkdir(exist_ok=True); (DATA / "snapshots").mkdir(exist_ok=True)
    counts = {"repos": len(out), "items": sum(len(e["items"]) for e in out),
              "tiers": dict(Counter(e["tier"] for e in out)), "types": dict(Counter(e["type"] for e in out)),
              "item_types": dict(Counter(i["type"] for e in out for i in e["items"])),
              "flags": dict(Counter(f for e in out for f in e["flags"])), "excluded_mcp": len(EXCLUDED_MCP), "mcp": mcp_counts(out), "degradation": degradation(out),
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
    dg = degradation(out)
    L += ["", "## Degradation", f"- registry complete: {dg['registry_complete']} ({dg['registry_pages']} pages, {dg['registry_fetched']} entries)",
          f"- MCP servers merged from the previous catalog (not re-fetched): {dg['mcp_fallback_merged']}",
          f"- GraphQL 403s: {dg['graphql_403']} (secondary rate limit: {dg['graphql_secondary']}); retries: {dg['graphql_retries']}; queries that gave up: {dg['graphql_failed_queries']}",
          f"- HTTP retries (5xx/network): {dg['http_retries']}",
          f"- repos with stale metadata reused from the previous catalog (meta_stale): {dg['stale_metadata_repos']}"]
    mc = mcp_counts(out)
    L += ["", "## MCP Registry", f"- {json.dumps(mc)}"]
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
