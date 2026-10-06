#!/usr/bin/env python3
"""Search the Claude Code extensions catalog (data/catalog.json). Stdlib only.

  search.py "<need>" [--type skill|plugin|agent|mcp-server] [--tier-min watch|new|verified|...] [--limit 15] [--json]
            [--tech <id|label>]... [--area <id|label>]...
            [--license commercial|copyleft|none|other] [--exclude-flag <flag>]...
  search.py --tech react --area testing        (facets alone, no text query, ranked by quality)
  search.py --trending [--limit 20]
  search.py --new --days 14
  (the Watch tier is excluded unless --tier-min watch is given)
  search.py --info owner/repo        (or an id such as mcp:io.github.owner/server)
  search.py --favorites ["<need>"]   (only favorites from favorites.json; favorites also get a small ranking boost and a star)
  search.py --fav-add <id-or-repo> [--note "..."]   /   --fav-remove <id-or-repo>   (edit the LOCAL favorites.json; commit and push yourself)
  search.py "browser automation" --type mcp-server   (standalone MCP servers from the official MCP Registry)
  search.py "pdf export" --license commercial   (only permissive licenses: MIT, Apache-2.0, BSD, ISC...)
  search.py "memory" --exclude-flag unmaintained --exclude-flag security-review
  Flags: star-farming, star-spike, star-anomaly, security-review, security-high, archived,
  unmaintained (no push for more than 180 days before the catalog's generated_at).
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
REMOTE_CLASS_URL = f"https://raw.githubusercontent.com/{OWNER}/{REPO}/main/data/classifications.json"
REMOTE_FAV_URL = f"https://raw.githubusercontent.com/{OWNER}/{REPO}/main/favorites.json"
REMOTE_TAXO_URL = f"https://raw.githubusercontent.com/{OWNER}/{REPO}/main/taxonomy.json"
CACHE_TTL = 24 * 3600
ROOT = Path(__file__).resolve().parent.parent.parent.parent
FAV_LOCAL = ROOT / "favorites.json"
FAV_BOOST = 1.25  # multiplier on the relevance score of a favorite
FAV_IDS = set()  # record ids of the favorites (filled in main)
TIER_RANK = {"watch": 0, "new": 1, "verified": 2, "listed": 3, "official": 4, "anthropic": 5}
TIER_WEIGHT = {"watch": 0.0, "new": 0.08, "verified": 0.15, "listed": 0.3, "official": 0.45, "anthropic": 0.6}
TIER_LABEL = {"anthropic": "Anthropic", "official": "Official marketplace · 3rd-party",
              "listed": "Community marketplace · 3rd-party", "verified": "Verified", "new": "New (under 90 days, early traction)", "watch": "Watch"}

# License groups (same mapping as build_site.py): SPDX id -> commercial | copyleft | none | other
PERMISSIVE = re.compile(r"^(MIT|MIT-0|Apache-2\.0|BSD-[23]-Clause|ISC|0BSD|Unlicense|Zlib|CC0-1\.0|WTFPL|UPL-1\.0|PostgreSQL|Artistic-2\.0|BSL-1\.0|CC-BY-4\.0|Python-2\.0)$")
COPYLEFT = re.compile(r"^(A?GPL|LGPL|MPL|EPL|EUPL|CC-BY-SA|OSL|CDDL)")
LICENSE_GROUPS = ("commercial", "copyleft", "none", "other")
UNMAINTAINED_DAYS = 180
FLAG_CHOICES = ("star-farming", "star-spike", "star-anomaly", "security-review", "security-high", "archived", "unmaintained")
REF_TIME = None  # catalog generated_at (set in main); falls back to now


def license_group(lic):
    """An "A OR B" expression lets the user pick, so any permissive alternative makes it commercial; "unclear" is other."""
    if not lic:
        return "none"
    alts = [x.strip() for x in lic.split(" OR ")]
    if any(PERMISSIVE.match(x) for x in alts):
        return "commercial"
    if any(COPYLEFT.match(x) for x in alts):
        return "copyleft"
    return "other"


def lic_of(r):
    """GitHub-detected license, else the license declared in a manifest or README (no LICENSE file)."""
    d = r.get("license_declared") if isinstance(r.get("license_declared"), dict) else {}
    return r.get("license") or d.get("id")


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


def push_age(r):
    """Days between the last push and the catalog's generated_at (or now)."""
    d = parse_dt(r.get("pushed_at"))
    return ((REF_TIME or now()) - d).days if d else None


DEPS = {}  # record id -> {"lv": "paid"|"key", "ev"}, from classifications.json (loaded when --exclude-flag names paid-api/api-key)


def all_flags(r):
    """Catalog flags plus derived ones: security-review/high, archived, unmaintained, paid-api/api-key."""
    out = list(r.get("flags") or [])
    dl = (DEPS.get(r.get("id")) or {}).get("lv")
    if dl:
        out.append("paid-api" if dl == "paid" else "api-key")
    sec = r.get("security")
    lvl = sec.get("level") if isinstance(sec, dict) else sec
    if lvl in ("review", "high"):
        out.append("security-" + lvl)
    if r.get("archived"):
        out.append("archived")
    age = push_age(r)
    if age is not None and age > UNMAINTAINED_DAYS:
        out.append("unmaintained")
    return out


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


def cached_json(url, name, local=None):
    """Local file if given and present, else the remote URL cached in the temp dir like the catalog. None on failure."""
    if local and Path(local).is_file():
        path = Path(local)
    else:
        path = Path(tempfile.gettempdir()) / name
        if not path.is_file() or time.time() - path.stat().st_mtime > CACHE_TTL:
            try:
                req = urllib.request.Request(url, headers={"User-Agent": "cc-catalog-search"})
                with urllib.request.urlopen(req, timeout=30) as r:
                    path.write_bytes(r.read())
            except Exception as e:  # noqa: BLE001
                if not path.is_file():
                    print(f"warning: cannot load {url}: {e}", file=sys.stderr)
                    return None
    try:
        with open(path, encoding="utf-8") as f:
            return json.load(f)
    except (OSError, ValueError):
        return None


def load_facets(catalog_path):
    """(classifications {record id: {technologies, areas}}, taxonomy {technologies: [...], areas: [...]})"""
    base = Path(catalog_path).parent
    root = Path(__file__).resolve().parent.parent.parent.parent
    cls = cached_json(REMOTE_CLASS_URL, "cc-catalog-classifications-cache.json", base / "classifications.json")
    tax = cached_json(REMOTE_TAXO_URL, "cc-catalog-taxonomy-cache.json", root / "taxonomy.json")
    return cls or {}, tax or {}


def taxonomy_index(nodes):
    """id -> {"label", "ids": {id and all descendant ids}} for a taxonomy tree (list of nodes with children)."""
    idx = {}

    def walk(n):
        ids = {n["id"]}
        for c in n.get("children") or []:
            ids |= walk(c)
        idx[n["id"]] = {"label": n.get("label", n["id"]), "ids": ids}
        return ids

    for n in nodes or []:
        walk(n)
    return idx


def resolve_facet(values, idx, classes, field, kind):
    """Selected tag ids (nodes plus descendants) for repeated --tech/--area values, matched on id or label,
    case-insensitively. Unknown values exit with the valid ids."""
    if not idx:  # taxonomy unavailable: fall back to the tag ids seen in the classifications
        seen = {t for c in classes.values() for t in c.get(field, [])}
        idx = {t: {"label": t, "ids": {t}} for t in seen}
    out = set()
    for v in values:
        key = v.strip().lower()
        hit = [i for i, n in idx.items() if i.lower() == key or n["label"].lower() == key]
        if not hit:
            hit = [i for i, n in idx.items() if key in n["label"].lower()]
        if not hit:
            sys.exit(f"unknown {kind} '{v}'. Valid: " + ", ".join(sorted(idx)))
        for i in hit:
            out |= idx[i]["ids"]
    return out


# ---------------------------------------------------------------- favorites
def find_record(repos, ref):
    """Catalog record for an id, repo name or alias (case-insensitive). Exits with candidates when ambiguous."""
    want = ref.strip().strip("/").lower()
    for key in (lambda r: (r.get("id") or "").lower(), lambda r: (r.get("repo") or "").lower(),
                lambda r: [x.lower() for x in r.get("aliases") or []]):
        hit = [r for r in repos if want == key(r) or (isinstance(key(r), list) and want in key(r))]
        if len(hit) == 1:
            return hit[0]
        if len(hit) > 1:
            sys.exit(f"'{ref}' is ambiguous; use one of these ids: " + ", ".join(r.get("id", "?") for r in hit[:10]))
    return None


def favorite_entries():
    """Entries of favorites.json: the local file in a repo checkout, else the remote file cached like the catalog."""
    d = cached_json(REMOTE_FAV_URL, "cc-catalog-favorites-cache.json", FAV_LOCAL)
    out = d.get("favorites") if isinstance(d, dict) else None
    return [f for f in out or [] if isinstance(f, dict) and isinstance(f.get("id"), str)]


def favorite_ids(repos, entries):
    ids = set()
    for f in entries:
        r = find_record(repos, f["id"])
        if r:
            ids.add(r.get("id"))
    return ids


def edit_favorites(repos, add=None, remove=None, note=""):
    if not (ROOT / "build_site.py").is_file():
        sys.exit(f"--fav-add/--fav-remove edit favorites.json in a repo checkout; {ROOT} is not one")
    try:
        data = json.loads(FAV_LOCAL.read_text(encoding="utf-8")) if FAV_LOCAL.is_file() else {}
    except ValueError:
        sys.exit(f"{FAV_LOCAL} is not valid JSON; fix it first")
    favs = [f for f in (data.get("favorites") if isinstance(data, dict) else None) or [] if isinstance(f, dict) and isinstance(f.get("id"), str)]
    ref = add or remove
    rec = find_record(repos, ref)
    if add:
        if not rec:
            sys.exit(f"not found in catalog: {ref} (use an id, owner/repo or a former repo name; see --info)")
        if any((find_record(repos, f["id"]) or {}).get("id") == rec["id"] or f["id"] == rec["id"] for f in favs):
            sys.exit(f"already a favorite: {rec['id']}")
        favs.append({"id": rec["id"], "added": datetime.now().strftime("%Y-%m-%d"), "note": note or ""})
        msg = f"added {rec['id']}"
    else:
        keep = [f for f in favs if not (f["id"].lower() == ref.strip().lower()
                                         or (rec and (find_record(repos, f["id"]) or {}).get("id") == rec["id"]))]
        if len(keep) == len(favs):
            sys.exit(f"not in favorites.json: {ref}")
        favs, msg = keep, f"removed {rec['id'] if rec else ref}"
    favs.sort(key=lambda f: f["id"])
    FAV_LOCAL.write_text(json.dumps({"version": 1, "favorites": favs}, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    print(f"{msg} ({len(favs)} favorites in {FAV_LOCAL})")
    print("Reminder: favorites.json is only changed locally. Review, commit and push it yourself so the site and other machines see it.")


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
    pa = push_age(repo)
    if pa is not None and pa > UNMAINTAINED_DAYS:
        q -= 0.3  # unmaintained
    flags = repo.get("flags") or []
    if "star-anomaly" in flags: q -= 0.8
    if "star-farming" in flags: q -= 0.8
    if "star-spike" in flags: q -= 0.4
    sec = repo.get("security")
    lvl = sec.get("level") if isinstance(sec, dict) else sec
    if lvl == "high": q -= 1.0
    elif lvl == "review": q -= 0.5
    if repo.get("archived"): q -= 1.0
    return q


def final_score(repo, groups):
    r = rel_score(repo, groups)
    if r <= 0:
        return 0.0
    return r * (1.0 + max(quality(repo), -0.9)) * (FAV_BOOST if repo.get("id") in FAV_IDS else 1.0)


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
    flags = ",".join(f.replace("security-", "security:") for f in all_flags(r)) or "-"
    star = "\u2b50 " if r.get("id") in FAV_IDS else ""
    print(f"{i}. {star}{r['id'] if r.get('container') or not r.get('repo') else r['repo']} [{TIER_LABEL.get(r.get('tier'), r.get('tier'))}] {r.get('type')} | {r.get('stars') if r.get('stars') is not None else '?'} stars | trend {fmt_trend(r)} "
          f"| pushed {fmt_push(r)} | {lic_of(r) or 'no-license'}{' (declared)' if not r.get('license') and lic_of(r) else ''} ({license_group(lic_of(r))}) | flags: {flags}")
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


def mark(r):
    """Record copy with the derived flags and license group, for --json output."""
    return {**r, "_flags": all_flags(r), "_license_group": license_group(lic_of(r))}


def header(meta, path, n=None):
    print(f"catalog generated_at: {meta.get('generated_at', 'unknown')}  source: {path}" + (f"  results: {n}" if n is not None else ""))


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("query", nargs="?", default="")
    ap.add_argument("--type", choices=["skill", "plugin", "agent", "marketplace", "mcp-server"])
    ap.add_argument("--tier-min", choices=list(TIER_RANK), default=None)
    ap.add_argument("--limit", type=int, default=None)
    ap.add_argument("--tech", action="append", default=[], metavar="ID", help="technology id or label (repeatable, any of; includes child technologies)")
    ap.add_argument("--area", action="append", default=[], metavar="ID", help="area id or label (repeatable, any of; includes child areas)")
    ap.add_argument("--license", choices=LICENSE_GROUPS, help="license group: commercial (permissive), copyleft, none, other")
    ap.add_argument("--exclude-flag", action="append", default=[], choices=FLAG_CHOICES, metavar="FLAG",
                    help="drop repos carrying this flag (repeatable): " + ", ".join(FLAG_CHOICES))
    ap.add_argument("--json", action="store_true")
    ap.add_argument("--trending", action="store_true")
    ap.add_argument("--new", action="store_true")
    ap.add_argument("--days", type=int, default=14)
    ap.add_argument("--info", metavar="owner/repo")
    ap.add_argument("--favorites", action="store_true", help="only favorites (from favorites.json; the Watch tier is included)")
    ap.add_argument("--fav-add", metavar="ID_OR_REPO", help="add to the local favorites.json (id, owner/repo or alias)")
    ap.add_argument("--fav-remove", metavar="ID_OR_REPO", help="remove from the local favorites.json")
    ap.add_argument("--note", default="", help="note stored with --fav-add")
    a = ap.parse_args()
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(encoding="utf-8")

    repos, meta, path = load_catalog()
    global REF_TIME
    REF_TIME = parse_dt(meta.get("generated_at"))
    if a.fav_add or a.fav_remove:
        if a.fav_add and a.fav_remove:
            ap.error("use only one of --fav-add / --fav-remove")
        return edit_favorites(repos, add=a.fav_add, remove=a.fav_remove, note=a.note)
    entries = favorite_entries()
    FAV_IDS.update(favorite_ids(repos, entries))
    tech_ids = area_ids = None
    classes = {}
    if a.tech or a.area or set(a.exclude_flag or []) & {"paid-api", "api-key"}:
        classes, tax = load_facets(path)
        DEPS.update({k: v["deps"] for k, v in classes.items() if isinstance(v, dict) and v.get("deps")})
    if a.tech or a.area:
        if not classes:
            sys.exit("classifications unavailable; cannot apply --tech/--area")
        if a.tech:
            tech_ids = resolve_facet(a.tech, taxonomy_index(tax.get("technologies")), classes, "technologies", "technology")
        if a.area:
            area_ids = resolve_facet(a.area, taxonomy_index(tax.get("areas")), classes, "areas", "area")

    def keep(r):
        if tech_ids is not None or area_ids is not None:
            c = classes.get(r.get("id")) or {}
            if tech_ids is not None and not tech_ids & set(c.get("technologies") or []):
                return False
            if area_ids is not None and not area_ids & set(c.get("areas") or []):
                return False
        if a.type and a.type not in (r.get("types") or [r.get("type")]) and r.get("type") != a.type:
            return False
        if a.favorites and r.get("id") not in FAV_IDS:
            return False
        if a.license and license_group(lic_of(r)) != a.license:
            return False
        if a.exclude_flag and set(a.exclude_flag) & set(all_flags(r)):
            return False
        if TIER_RANK.get(r.get("tier"), 0) < TIER_RANK[a.tier_min or ("watch" if a.favorites else "new")]:  # watch is excluded unless --tier-min watch (or --favorites)
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
            print(json.dumps(mark(r), indent=1, ensure_ascii=False)); return
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
            res = [r for r in res if not r.get("archived") and not {"star-anomaly", "star-farming"} & set(r.get("flags") or [])]
        else:
            note = "no trend data in catalog yet; showing recently pushed, non-flagged repos by tier and stars"
            res = [r for r in pool if not r.get("archived") and not (r.get("flags") or [])
                   and (days_since(r.get("pushed_at")) or 9999) <= 30 and TIER_RANK.get(r.get("tier"), 0) >= TIER_RANK["new"]]
            res.sort(key=lambda r: -(r.get("stars") or 0))
        res = res[:limit]
        if a.json:
            print(json.dumps([mark(r) for r in res], indent=1, ensure_ascii=False)); return
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
               and not r.get("archived") and not {"star-anomaly", "star-farming"} & set(r.get("flags") or [])]
        res.sort(key=lambda r: (-TIER_RANK.get(r.get("tier"), 0), -(r.get("stars") or 0)))
        res = res[:limit]
        if a.json:
            print(json.dumps([mark(r) for r in res], indent=1, ensure_ascii=False)); return
        header(meta, path, len(res))
        print(f"new in the last {a.days} days (by first_seen/created_at)")
        for i, r in enumerate(res, 1): print_repo(i, r, [])
        return

    facets_only = not a.query.strip() and bool(a.tech or a.area or a.favorites or a.license)
    if not a.query.strip() and not facets_only:
        ap.error("query required (or --tech/--area/--license / --favorites / --trending / --new / --info)")
    groups = [] if facets_only else query_groups(a.query)
    if not groups and not facets_only:
        sys.exit("query has no searchable terms")
    if facets_only:  # no text to match: rank by catalog quality
        scored = [(1.0 + max(quality(r), -0.9), r) for r in pool]
    else:
        scored = [(final_score(r, groups), r) for r in pool]
    scored = [x for x in scored if x[0] > 0]
    scored.sort(key=lambda x: -x[0])
    res = [r for _, r in scored[: a.limit or 15]]
    if a.json:
        print(json.dumps([{**mark(r), "_score": round(s, 3)} for s, r in scored[: a.limit or 15]], indent=1, ensure_ascii=False))
        return
    header(meta, path, len(res))
    if not res: print("no favorites yet; add one with --fav-add <id-or-repo>" if a.favorites and not FAV_IDS else "no matches; try other keywords (English works best)")
    for i, r in enumerate(res, 1): print_repo(i, r, groups)


if __name__ == "__main__":
    main()
