#!/usr/bin/env python3
"""Write site/catalog.js (window.CATALOG) from data/catalog.json, data/classifications.json
and taxonomy.json. site/index.html, site/app.css and site/app.js are hand-written.

Star history is NOT embedded: the page lazy-loads site/history/NN.json shards (written by
history.py) with fetch(), so it only appears when the site is served over http:
    python -m http.server -d site      ->  http://localhost:8000
Opened over file:// the page still works, just without star history.
"""
import json, pathlib

ROOT = pathlib.Path(__file__).resolve().parent
SRC = ROOT / "data" / "catalog.json"
CLS = ROOT / "data" / "classifications.json"
TAX = ROOT / "taxonomy.json"
OUT = ROOT / "site" / "catalog.js"
DESC, ITEM_DESC, HINT, MAX_ITEMS = 280, 160, 600, 40
SEC_FINDINGS, SEC_EXCERPT = 12, 160
# Standalone MCP servers (type mcp-server only) are ~85% of the records, so they are slimmed: shorter descriptions and hints,
# at most 3 tier reasons, and the single item drops its name/type when they equal the record's (the page falls back to them).
MCP_DESC, MCP_HINT, MCP_TX = 140, 240, 3


def cut(s, n):
    if not isinstance(s, str):
        return ""
    s = " ".join(s.split())
    return s if len(s) <= n else s[: n - 1].rstrip() + "…"


def cut_hint(s, n):
    """Like cut(), but keeps line breaks: a hint may be a multi-step, runnable command."""
    if not isinstance(s, str):
        return ""
    lines = [" ".join(x.split()) for x in s.splitlines()]
    s = chr(10).join(x for x in lines if x)
    return s if len(s) <= n else s[: n - 1].rstrip() + "…"


def fallback_tags(c, group):
    ev = ((c.get("evidence") or {}).get(group) or {}) if isinstance(c, dict) else {}
    out = [t for t, e in ev.items() if isinstance(e, dict) and e.get("method") == "fallback"]
    return [] if out == ["general-purpose"] else out  # the page always treats "general-purpose" as a fallback tag


def security(v):
    """Slim the optional security scan result: {"level", "findings": [...], "scanned_at"}."""
    if not isinstance(v, dict) or v.get("level") not in ("ok", "review", "high"):
        return None
    out = []
    for f in (v.get("findings") or [])[:SEC_FINDINGS]:
        if not isinstance(f, dict):
            continue
        o = {"r": cut(f.get("rule"), 60), "s": cut(f.get("severity"), 12), "p": cut(f.get("file"), 120),
             "l": num(f.get("line")), "x": cut(f.get("excerpt"), SEC_EXCERPT)}
        out.append({k: x for k, x in o.items() if x not in (None, "")})
    o = {"lv": v["level"], "n": len(v.get("findings") or []), "f": out, "at": (v.get("scanned_at") or "")[:10]}
    return {k: x for k, x in o.items() if x not in (None, "", [])}


def num(v):
    return v if isinstance(v, (int, float)) and not isinstance(v, bool) else None


def http_url(u):
    return u if isinstance(u, str) and u.lower().startswith(("https://", "http://")) else ""


def ids(v):
    return [x for x in v if isinstance(x, str) and x] if isinstance(v, list) else []


def load(p, default):
    try:
        return json.loads(p.read_text(encoding="utf-8"))
    except Exception:
        return default


def tree(nodes):
    out = []
    for n in nodes if isinstance(nodes, list) else []:
        if not isinstance(n, dict) or not n.get("id"):
            continue
        kids = [{"id": k["id"], "label": k.get("label") or k["id"]}
                for k in n.get("children") or [] if isinstance(k, dict) and k.get("id")]
        out.append({"id": n["id"], "label": n.get("label") or n["id"], "children": kids})
    return out


def slim(r, cls):
    mcp = r.get("types") == ["mcp-server"]
    desc = cut(r.get("description"), MCP_DESC if mcp else DESC)
    items = []
    for it in (r.get("items") or [])[:MAX_ITEMS]:
        if not isinstance(it, dict):
            continue
        d = cut(it.get("description"), ITEM_DESC)
        o = {"n": cut(it.get("name"), 80), "t": it.get("type") or "",
             "d": "" if d == cut(r.get("description"), ITEM_DESC) else d,
             "i": cut_hint(it.get("install_hint"), MCP_HINT if mcp else HINT)}
        if mcp:
            if len(r.get("items") or []) == 1:
                o["d"] = ""
                if o["n"] == cut(r.get("name"), 80): o["n"] = ""
            o["t"] = ""
        items.append({k: v for k, v in o.items() if v})
    rid, key = r.get("id") or r.get("repo") or "", r.get("repo") or ""
    c = cls.get(rid) or cls.get(key) or {}
    o = {
        "k": rid if rid != key else "",  # unique record id; omitted when equal to the repo
        "r": key,                        # "owner/name" (history shard key); "" for non-GitHub entries
        "n": cut(r.get("name"), 80),
        "d": desc,
        "t": r.get("type") or "",
        "u": "" if key and http_url(r.get("url")) == "https://github.com/" + key else http_url(r.get("url")),
        "s": num(r.get("stars")),
        "f": num(r.get("forks")),
        "p": (r.get("pushed_at") or "")[:10] or None,
        "fs": (r.get("first_seen") or "")[:10] or None,
        "l": r.get("license"),
        "a": 1 if r.get("archived") else 0,
        "tr": r.get("tier") or "watch",
        "tx": [cut(x, 100 if mcp else 160) for x in (r.get("tier_reasons") or [])][:MCP_TX if mcp else 6],
        "fl": ids(r.get("flags")),
        "src": sorted({s.split(":")[0] if s.startswith("search:") else s
                       for s in (r.get("sources") or []) if isinstance(s, str)}),
        "t7": num(r.get("trend_7d")),
        "t30": num(r.get("trend_30d")),
        "it": items,
        "nit": len(r.get("items") or []),
        "tg": ids(c.get("technologies")),
        "ar": ids(c.get("areas")),
        "cm": METHOD.get(c.get("method")),
        "tgf": fallback_tags(c, "technologies"),
        "arf": fallback_tags(c, "areas"),
        "al": [cut(a, 120) for a in ids(r.get("aliases"))][:8],
        "sec": security(r.get("security")),
    }
    # omitted u = https://github.com/{r}; omitted t7/t30 = no trend data (shown as "—")
    return {k: v for k, v in o.items() if v not in (None, [], "", 0) or k in ("s", "r", "n", "tr") or (k in ("t7", "t30") and v == 0)}


METHOD = {"rules": "r", "embedding": "e", "embedding+rules": "er", "fallback": "f"}


def intern(repos, key):
    """Replace repeated strings in list field `key` by indexes into a shared table."""
    seen = {}
    for r in repos:
        for x in r.get(key) or []:
            seen[x] = seen.get(x, 0) + 1
    table = [x for x, n in seen.items() if n > 1]
    idx = {x: i for i, x in enumerate(table)}
    for r in repos:
        if key in r:
            r[key] = [idx.get(x, x) for x in r[key]]
    return table


def main():
    raw = json.loads(SRC.read_text(encoding="utf-8"))
    if isinstance(raw, list):
        meta, repos = {"generated_at": None, "schema": 0, "counts": {}}, raw
    else:
        meta, repos = raw, raw.get("repos") or []
    repos = [r for r in repos if isinstance(r, dict)]
    cls = load(CLS, {})
    cls = cls if isinstance(cls, dict) else {}
    tax = load(TAX, {})
    tax = tax if isinstance(tax, dict) else {}
    data = {
        "generated_at": meta.get("generated_at"), "schema": meta.get("schema"),
        "counts": meta.get("counts") or {},
        "taxonomy": {"placeholder": bool(tax.get("_placeholder")),
                     "technologies": tree(tax.get("technologies")), "areas": tree(tax.get("areas"))},
        "history_shards": 16,
        "repos": [slim(r, cls) for r in repos],
    }
    data["strings"] = {"tx": intern(data["repos"], "tx"), "src": intern(data["repos"], "src")}
    js = "window.CATALOG = " + json.dumps(data, ensure_ascii=False, separators=(",", ":")) + ";\n"
    js = js.replace("</", "<" + chr(92) + "/")
    OUT.parent.mkdir(exist_ok=True)
    OUT.write_text(js, encoding="utf-8")
    print(f"wrote {OUT} ({len(js.encode('utf-8'))/1024:.0f} KB, {len(repos)} repos, "
          f"{sum(1 for r in repos if (r.get('repo') or r.get('id')) in cls)} classified)")


if __name__ == "__main__":
    main()
