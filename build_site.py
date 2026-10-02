#!/usr/bin/env python3
"""Write site/catalog.js from data/catalog.json (index.html is hand-written)."""
import json, pathlib

ROOT = pathlib.Path(__file__).resolve().parent
SRC = ROOT / "data" / "catalog.json"
OUT = ROOT / "site" / "catalog.js"
DESC, ITEM_DESC, HINT, MAX_ITEMS = 200, 90, 200, 40


def cut(s, n):
    if not isinstance(s, str):
        return ""
    s = " ".join(s.split())
    return s if len(s) <= n else s[: n - 1].rstrip() + "…"


def num(v):
    return v if isinstance(v, (int, float)) and not isinstance(v, bool) else None


def slim(r):
    items = []
    for it in (r.get("items") or [])[:MAX_ITEMS]:
        if not isinstance(it, dict):
            continue
        items.append({"n": cut(it.get("name"), 80), "t": it.get("type") or "",
                      "d": cut(it.get("description"), ITEM_DESC),
                      "i": cut(it.get("install_hint"), HINT)})
    o = {
        "r": r.get("repo") or r.get("id") or "",
        "n": cut(r.get("name"), 80),
        "d": cut(r.get("description"), DESC),
        "t": r.get("type") or "",
        "ts": r.get("types") or [],
        "u": r.get("url") or "",
        "s": num(r.get("stars")),
        "f": num(r.get("forks")),
        "p": (r.get("pushed_at") or "")[:10] or None,
        "fs": (r.get("first_seen") or "")[:10] or None,
        "l": r.get("license"),
        "a": 1 if r.get("archived") else 0,
        "tr": r.get("tier") or "watch",
        "tx": [cut(x, 120) for x in (r.get("tier_reasons") or [])][:6],
        "fl": r.get("flags") or [],
        "src": sorted({s.split(":")[0] if s.startswith("search:") else s for s in (r.get("sources") or []) if isinstance(s, str)}),
        "t7": num(r.get("trend_7d")),
        "t30": num(r.get("trend_30d")),
        "t7p": num(r.get("trend_7d_pct")),
        "it": items,
        "nit": len(r.get("items") or []),
    }
    return {k: v for k, v in o.items() if v not in (None, [], "", 0) or k in ("s", "r", "n", "tr")}


def main():
    raw = json.loads(SRC.read_text(encoding="utf-8"))
    if isinstance(raw, list):
        meta, repos = {"generated_at": None, "schema": 0, "counts": {}}, raw
    else:
        meta, repos = raw, raw.get("repos") or []
    repos = [r for r in repos if isinstance(r, dict)]
    data = {"generated_at": meta.get("generated_at"), "schema": meta.get("schema"),
            "counts": meta.get("counts") or {}, "repos": [slim(r) for r in repos]}
    js = "window.CATALOG = " + json.dumps(data, ensure_ascii=False, separators=(",", ":")) + ";\n"
    js = js.replace("</", "<" + chr(92) + "/")
    OUT.parent.mkdir(exist_ok=True)
    OUT.write_text(js, encoding="utf-8")
    print(f"wrote {OUT} ({len(js)/1024:.0f} KB, {len(repos)} repos)")


if __name__ == "__main__":
    main()
