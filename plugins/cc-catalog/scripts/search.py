#!/usr/bin/env python3
"""Search the Claude Code extensions catalog (data/catalog.json). Stdlib only.

  search.py "<need>" [--type skill|plugin|agent] [--tier-min verified] [--limit 15] [--json]
  search.py --trending [--limit 20]
  search.py --new --days 14
  search.py --info owner/repo
"""
import argparse
import json
import math
import os
import re
import sys
import tempfile
import time
import unicodedata
import urllib.request
from datetime import datetime, timezone
from pathlib import Path

# ---- CONFIG: GitHub repo that publishes data/catalog.json ------------------
OWNER = "DalizC"
REPO = "claude-code-catalog"
# --------------------------------------------------------------------------
REMOTE_URL = f"https://raw.githubusercontent.com/{OWNER}/{REPO}/main/data/catalog.json"
CACHE_TTL = 24 * 3600
TIER_RANK = {"watch": 0, "verified": 1, "listed": 2, "official": 3, "anthropic": 4}
TIER_WEIGHT = {"watch": 0.0, "verified": 0.15, "listed": 0.3, "official": 0.45, "anthropic": 0.6}
TIER_LABEL = {"anthropic": "Anthropic", "official": "Official marketplace · 3rd-party",
              "listed": "Community marketplace · 3rd-party", "verified": "Verified", "watch": "Watch"}

STOP = set("""a an the of for to and or in on with by from is are be do does how i me my we you it this that
de la el los las un una unos unas y o en con por para que se al del lo su sus mi mis entre sobre como
quiero necesito hay existe alguna algun herramienta herramientas tool tools plugin plugins skill skills
claude code use using usar""".split())

# Spanish/English tolerance: token -> extra terms (already stemmed form is applied after).
SYN = {
    "generar": ["generate", "create", "creat"], "crear": ["create", "generate"], "genera": ["generate"],
    "presentacion": ["presentation", "slides", "deck", "powerpoint", "pptx"],
    "presentaciones": ["presentation", "slides", "deck", "powerpoint", "pptx"],
    "diapositivas": ["slides", "deck", "presentation"],
    "pptx": ["powerpoint", "presentation", "slides", "deck"],
    "powerpoint": ["pptx", "presentation", "slides", "deck"],
    "slides": ["presentation", "deck", "pptx"],
    "memoria": ["memory", "remember", "persist"], "recordar": ["memory", "remember"],
    "persistente": ["persistent", "persist", "memory"], "sesiones": ["session"], "sesion": ["session"],
    "contexto": ["context"], "revision": ["review"], "revisar": ["review"], "revisión": ["review"],
    "codigo": ["code"], "pruebas": ["test", "testing"], "prueba": ["test", "testing"],
    "navegador": ["browser", "playwright", "chrome"], "automatizar": ["automation", "automate"],
    "automatizacion": ["automation", "automate"], "base": ["database"], "datos": ["data", "database"],
    "documentacion": ["documentation", "docs"], "documentos": ["document", "docs"],
    "documento": ["document", "docs"], "correo": ["email", "mail"], "tareas": ["task", "todo"],
    "seguridad": ["security"], "despliegue": ["deploy", "deployment"], "desplegar": ["deploy"],
    "depurar": ["debug"], "errores": ["error", "bug"], "diseno": ["design"], "diseño": ["design"],
    "interfaz": ["ui", "interface"], "imagen": ["image"], "imagenes": ["image"], "video": ["video"],
    "busqueda": ["search"], "buscar": ["search"], "investigacion": ["research"],
    "agente": ["agent"], "agentes": ["agent"], "flujo": ["workflow"], "planificar": ["plan", "planning"],
    "refactorizar": ["refactor"], "traducir": ["translate", "translation"], "hoja": ["spreadsheet", "sheet"],
    "excel": ["xlsx", "spreadsheet"], "xlsx": ["excel", "spreadsheet"], "word": ["docx", "document"],
    "docx": ["word", "document"], "pdf": ["pdf"], "web": ["web", "website"], "sitio": ["website", "site"],
    "ahorrar": ["save", "reduce"], "tokens": ["token"], "costo": ["cost"], "mcp": ["mcp"],
    "review": ["pr", "pull"], "test": ["testing", "tests"], "testing": ["test", "tests"],
    "browser": ["playwright", "chrome", "puppeteer"],
}


def norm(s):
    s = unicodedata.normalize("NFKD", (s or "").lower())
    return "".join(c for c in s if not unicodedata.combining(c))


def stem(w):
    for suf in ("ations", "ation", "ings", "ing", "ies", "ers", "er", "ed", "es", "ions", "ion", "s"):
        if w.endswith(suf) and len(w) - len(suf) >= 4:
            return w[: -len(suf)]
    return w


def tokens(s):
    return [t for t in re.split(r"[^a-z0-9]+", norm(s)) if t]


def query_groups(q):
    """One group per meaningful query token: set of stems that count as a hit."""
    groups = []
    for t in tokens(q):
        if t in STOP or len(t) < 2:
            continue
        g = {stem(t)}
        for extra in SYN.get(t, []) + SYN.get(stem(t), []):
            g.add(stem(norm(extra)))
        groups.append(g)
    return groups


def now():
    return datetime.now(timezone.utc)


def parse_dt(s):
    if not s:
        return None
    try:
        d = datetime.fromisoformat(str(s).replace("Z", "+00:00"))
        return d if d.tzinfo else d.replace(tzinfo=timezone.utc)
    except ValueError:
        return None


def days_since(s):
    d = parse_dt(s)
    return (now() - d).days if d else None


# ---------------------------------------------------------------- loading
def load_catalog():
    env = os.environ.get("CC_CATALOG_PATH")
    local = Path(__file__).resolve().parent.parent.parent.parent / "data" / "catalog.json"
    if env:
        path = Path(env)
    elif local.is_file():
        path = local
    else:
        path = Path(tempfile.gettempdir()) / "cc-catalog-cache.json"
        if not path.is_file() or time.time() - path.stat().st_mtime > CACHE_TTL:
            try:
                req = urllib.request.Request(REMOTE_URL, headers={"User-Agent": "cc-catalog-search"})
                with urllib.request.urlopen(req, timeout=30) as r:
                    data = r.read()
                path.write_bytes(data)
            except Exception as e:  # noqa: BLE001
                if not path.is_file():
                    sys.exit(f"Cannot load catalog: {e}\nSet CC_CATALOG_PATH or fix OWNER/REPO in search.py ({REMOTE_URL})")
                print(f"warning: download failed ({e}); using stale cache", file=sys.stderr)
    with open(path, encoding="utf-8") as f:
        d = json.load(f)
    if isinstance(d, list):
        return d, {"generated_at": datetime.fromtimestamp(path.stat().st_mtime, timezone.utc).isoformat() + " (file mtime)"}, path
    return d.get("repos", []), d, path


# ---------------------------------------------------------------- scoring
def rel_score(repo, groups):
    if not groups:
        return 0.0
    name = set(stem(t) for t in tokens(repo.get("name", "") + " " + repo.get("repo", "")))
    desc = set(stem(t) for t in tokens(repo.get("description", "")))
    items = repo.get("items") or []
    iname = set(stem(t) for it in items for t in tokens(it.get("name", "")))
    idesc = set(stem(t) for it in items for t in tokens(it.get("description", "")))
    total, hit = 0.0, 0
    for g in groups:
        s = 0.0
        if g & name: s = max(s, 3.0)
        if g & iname: s = max(s, 2.5)
        if g & desc: s = max(s, 1.5)
        if g & idesc: s = max(s, 1.0)
        if s:
            hit += 1
            # bonus when several fields agree
            s += 0.3 * (sum(bool(g & f) for f in (name, iname, desc, idesc)) - 1)
        total += s
    coverage = hit / len(groups)
    if hit == 0:
        return 0.0
    return (total / len(groups)) * (coverage ** 2)


def quality(repo):
    tier = TIER_WEIGHT.get(repo.get("tier"), 0.0)
    stars = repo.get("stars") or 0
    q = tier + 0.12 * math.log10(stars + 1)
    age = days_since(repo.get("pushed_at"))
    if age is not None:
        q += 0.25 * math.exp(-age / 120.0)
        if age > 365:
            q -= 0.4
    flags = repo.get("flags") or []
    if "star-anomaly" in flags: q -= 0.8
    if "star-spike" in flags: q -= 0.4
    if repo.get("archived"): q -= 1.0
    return q


def final_score(repo, groups):
    r = rel_score(repo, groups)
    if r <= 0:
        return 0.0
    return r * (1.0 + max(quality(repo), -0.9))


def matching_items(repo, groups, n=3):
    items = repo.get("items") or []
    scored = []
    for it in items:
        txt = set(stem(t) for t in tokens(it.get("name", "") + " " + it.get("description", "")))
        nm = set(stem(t) for t in tokens(it.get("name", "")))
        s = sum((2 if g & nm else 1) for g in groups if g & txt)
        if s:
            scored.append((s, it))
    scored.sort(key=lambda x: -x[0])
    out = [it for _, it in scored[:n]]
    return out or items[:1]


# ---------------------------------------------------------------- output
def fmt_trend(r):
    t7, t30 = r.get("trend_7d"), r.get("trend_30d")
    parts = []
    if t7 is not None: parts.append(f"7d {t7:+g}")
    if t30 is not None: parts.append(f"30d {t30:+g}")
    return " ".join(parts) or "n/a"


def fmt_push(r):
    a = days_since(r.get("pushed_at"))
    return "?" if a is None else (f"{a}d ago" if a < 400 else f"{a // 365}y ago")


def short(s, n):
    s = " ".join((s or "").split())
    return s if len(s) <= n else s[: n - 1] + "…"


def print_repo(i, r, groups=None, detail=False):
    flags = ",".join(r.get("flags") or []) or "-"
    if r.get("archived"):
        flags = "archived," + flags if flags != "-" else "archived"
    print(f"{i}. {r['id'] if r.get('container') else r['repo']} [{TIER_LABEL.get(r.get('tier'), r.get('tier'))}] {r.get('type')} | {r.get('stars') if r.get('stars') is not None else '?'} stars | trend {fmt_trend(r)} "
          f"| pushed {fmt_push(r)} | {r.get('license') or 'no-license'} | flags: {flags}")
    print(f"   {short(r.get('description'), 160)}")
    print(f"   {r.get('url')}")
    items = r.get("items") or []
    shown = items if detail else matching_items(r, groups or [])
    for it in shown:
        print(f"   - {it.get('type')}: {it.get('name')}: {short(it.get('description'), 90)}")
        if it.get("install_hint"):
            print(f"       install: {it['install_hint']}")
    if not detail and len(items) > len(shown):
        print(f"   (+{len(items) - len(shown)} more items; --info {r['repo']})")


def header(meta, path, n=None):
    print(f"catalog generated_at: {meta.get('generated_at', 'unknown')}  source: {path}" + (f"  results: {n}" if n is not None else ""))


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("query", nargs="?", default="")
    ap.add_argument("--type", choices=["skill", "plugin", "agent", "marketplace"])
    ap.add_argument("--tier-min", choices=list(TIER_RANK), default=None)
    ap.add_argument("--limit", type=int, default=None)
    ap.add_argument("--json", action="store_true")
    ap.add_argument("--trending", action="store_true")
    ap.add_argument("--new", action="store_true")
    ap.add_argument("--days", type=int, default=14)
    ap.add_argument("--info", metavar="owner/repo")
    a = ap.parse_args()
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(encoding="utf-8")

    repos, meta, path = load_catalog()

    def keep(r):
        if a.type and a.type not in (r.get("types") or [r.get("type")]) and r.get("type") != a.type:
            return False
        if a.tier_min and TIER_RANK.get(r.get("tier"), 0) < TIER_RANK[a.tier_min]:
            return False
        return True

    pool = [r for r in repos if keep(r)]

    if a.info:
        want = a.info.lower().strip("/")
        m = [r for r in repos if r["repo"].lower() == want or r.get("id", "").lower() == want]
        if not m:
            sys.exit(f"not found in catalog: {a.info}")
        r = m[0]
        if a.json:
            print(json.dumps(r, indent=1, ensure_ascii=False)); return
        header(meta, path)
        print_repo(1, r, detail=True)
        print(f"   tier_reasons: {'; '.join(r.get('tier_reasons') or []) or '-'}")
        print(f"   sources: {', '.join(r.get('sources') or [])}  first_seen: {r.get('first_seen')}  "
              f"created: {r.get('created_at')}  forks: {r.get('forks')}  owner: {r.get('owner_type')}")
        return

    if a.trending:
        limit = a.limit or 20
        have = [r for r in pool if r.get("trend_7d") is not None or r.get("trend_30d") is not None]
        note = ""
        if have:
            res = sorted(have, key=lambda r: -((r.get("trend_7d") or 0) * 4 + (r.get("trend_30d") or 0)))
            res = [r for r in res if not r.get("archived") and "star-anomaly" not in (r.get("flags") or [])]
        else:
            note = "no trend data in catalog yet; showing recently pushed, non-flagged repos by tier and stars"
            res = [r for r in pool if not r.get("archived") and not (r.get("flags") or [])
                   and (days_since(r.get("pushed_at")) or 9999) <= 30 and TIER_RANK.get(r.get("tier"), 0) >= TIER_RANK["verified"]]
            res.sort(key=lambda r: -(r.get("stars") or 0))
        res = res[:limit]
        if a.json:
            print(json.dumps(res, indent=1, ensure_ascii=False)); return
        header(meta, path, len(res))
        if note: print("note:", note)
        for i, r in enumerate(res, 1): print_repo(i, r, [])
        return

    if a.new:
        limit = a.limit or 20
        def first(r):
            d = days_since(r.get("first_seen"))
            return d if d is not None else days_since(r.get("created_at"))
        res = [r for r in pool if (first(r) is not None and first(r) <= a.days)
               and not r.get("archived") and "star-anomaly" not in (r.get("flags") or [])]
        res.sort(key=lambda r: (-TIER_RANK.get(r.get("tier"), 0), -(r.get("stars") or 0)))
        res = res[:limit]
        if a.json:
            print(json.dumps(res, indent=1, ensure_ascii=False)); return
        header(meta, path, len(res))
        print(f"new in the last {a.days} days (by first_seen/created_at)")
        for i, r in enumerate(res, 1): print_repo(i, r, [])
        return

    if not a.query.strip():
        ap.error("query required (or --trending / --new / --info)")
    groups = query_groups(a.query)
    if not groups:
        sys.exit("query has no searchable terms")
    scored = [(final_score(r, groups), r) for r in pool]
    scored = [x for x in scored if x[0] > 0]
    scored.sort(key=lambda x: -x[0])
    res = [r for _, r in scored[: a.limit or 15]]
    if a.json:
        print(json.dumps([{**r, "_score": round(s, 3)} for s, r in scored[: a.limit or 15]], indent=1, ensure_ascii=False))
        return
    header(meta, path, len(res))
    if not res: print("no matches; try other keywords (English works best)")
    for i, r in enumerate(res, 1): print_repo(i, r, groups)


if __name__ == "__main__":
    main()
