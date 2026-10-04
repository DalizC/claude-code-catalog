#!/usr/bin/env python3
"""Tag catalog repos with technologies and areas (rules + local CPU embeddings). Zero cost, no API keys.
Usage: python classify.py [--offline] [--limit N] [--report] [--refresh-readmes] [--no-embed] [--calibrate]
README text and all repo text are untrusted data: only matched/embedded, never executed.
fastembed model cache: set FASTEMBED_CACHE_PATH (default <tempdir>/fastembed_cache); cache that dir in Actions."""
import argparse, hashlib, json, os, random, re, sys, time, urllib.request
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parent
DATA = ROOT / "data"; CACHE = ROOT / "cache"
OUT = DATA / "classifications.json"; REPORT = DATA / "classification-report.md"
README_CACHE = CACHE / "readmes.json"
README_MAX = 4000; README_TTL_D = 7; README_EMBED = 300
EMBED_TIERS = {"anthropic", "official", "listed", "verified"}; EMBED_MIN_STARS = 50
MODEL = os.environ.get("CLASSIFY_MODEL", "BAAI/bge-small-en-v1.5")
# bge-small cosine scores are compressed and some nodes are hubs (high similarity to everything), so each node
# carries its own threshold `embed_min` = mean + Z*sd of its scores over all embed-eligible repos (set by
# --calibrate). A node needs ABS_MIN, its embed_min, and an excess over embed_min within MARGIN of the best excess.
ABS_MIN = {"technologies": 0.60, "areas": 0.56}; MARGIN = 0.02
CALIB_Z = {"technologies": 3.0, "areas": 2.3}
HINT_RELIEF = 0.0; COLD_EXTRA = 0.04
MAX_TOP = {"technologies": 1, "areas": 2}; MAX_SUB = 1


def load_token():  # same logic as catalog.py; never printed
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


def now(): return datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")


def jload(p, d):
    try: return json.loads(Path(p).read_text(encoding="utf-8"))
    except Exception: return d


# ---------- README fetch ----------
def clean_readme(t):
    t = re.sub(r"```.*?```|~~~.*?~~~", " ", t, flags=re.S)
    t = re.sub(r"\[!\[[^\]]*\]\([^)]*\)\]\([^)]*\)", " ", t)       # linked badges
    t = re.sub(r"!\[[^\]]*\]\([^)]*\)", " ", t)                      # images
    t = re.sub(r"<!--.*?-->", " ", t, flags=re.S)
    t = re.sub(r"<[^>]+>", " ", t)                                    # html
    t = re.sub(r"\[([^\]]*)\]\([^)]*\)", r"\1", t)                    # links -> text
    t = re.sub(r"https?://\S+", " ", t)
    t = re.sub(r"`([^`]*)`", r"\1", t)
    t = re.sub(r"\.\. (image|figure)::.*", " ", t)
    return re.sub(r"\s+", " ", t).strip()[:README_MAX]


GQL_FIELDS = ('primaryLanguage{name} repositoryTopics(first:25){nodes{topic{name}}} '
              'a:object(expression:"HEAD:README.md"){...on Blob{text}} b:object(expression:"HEAD:readme.md"){...on Blob{text}} '
              'c:object(expression:"HEAD:README.rst"){...on Blob{text}} d:object(expression:"HEAD:README"){...on Blob{text}}')


def gql(token, query):
    req = urllib.request.Request("https://api.github.com/graphql", json.dumps({"query": query}).encode(),
                                 {"Authorization": "bearer " + token, "Content-Type": "application/json", "User-Agent": "cc-catalog-classify"})
    last = None
    for attempt in range(3):
        try:
            with urllib.request.urlopen(req, timeout=90) as r: return json.loads(r.read())
        except Exception as e:
            last = e; time.sleep(3 * (attempt + 1))
    print("graphql failed:", type(last).__name__, file=sys.stderr); return None


def fetch_readmes(repos, token, offline, refresh):
    cache = jload(README_CACHE, {}); stale_before = time.time() - README_TTL_D * 86400
    need = [r for r in repos if "/" in r["repo"] and (refresh or r["repo"] not in cache or cache[r["repo"]].get("t", 0) < stale_before)]
    if offline or not token:
        if need: print(f"readme fetch skipped ({'offline' if offline else 'no token'}): {len(need)} uncached")
        return cache, 0.0
    t0 = time.time(); B = 40
    for i in range(0, len(need), B):
        batch = need[i:i + B]; parts = []
        for j, r in enumerate(batch):
            o, n = r["repo"].split("/", 1)
            parts.append(f'r{j}:repository(owner:{json.dumps(o)},name:{json.dumps(n)}){{{GQL_FIELDS}}}')
        res = gql(token, "query{" + " ".join(parts) + "}")
        if not res or not res.get("data"): continue
        for j, r in enumerate(batch):
            d = res["data"].get(f"r{j}")
            if d is None:
                cache[r["repo"]] = {"t": time.time(), "text": "", "sha": "", "topics": [], "lang": None, "missing": True}; continue
            raw = next((d[k]["text"] for k in "abcd" if d.get(k) and d[k].get("text")), "")
            cache[r["repo"]] = {"t": time.time(), "text": clean_readme(raw),
                                "sha": hashlib.sha1(raw.encode("utf-8", "ignore")).hexdigest() if raw else "",
                                "topics": [x["topic"]["name"] for x in d["repositoryTopics"]["nodes"]],
                                "lang": (d.get("primaryLanguage") or {}).get("name")}
        if (i // B) % 10 == 0:
            print(f"  readmes {min(i + B, len(need))}/{len(need)}", flush=True)
            CACHE.mkdir(exist_ok=True); README_CACHE.write_text(json.dumps(cache), encoding="utf-8")
    keep = {r["repo"] for r in repos}; cache = {k: v for k, v in cache.items() if k in keep}  # prune README cache of records no longer in the catalog
    CACHE.mkdir(exist_ok=True); README_CACHE.write_text(json.dumps(cache), encoding="utf-8")
    return cache, time.time() - t0


# ---------- taxonomy ----------
DEFAULT_RULES = {"weights": {"topic": 3, "language": 3, "name": 3, "description": 2, "items": 2, "readme": 2, "readme_tech": 1,
                             "readme_single": 1, "tech": 1, "no_readme": 1},
                 "min_score": {"technologies": 2, "areas": 3}, "readme_min": 2, "max_top": {"technologies": 4, "areas": 4}, "max_children": 3,
                 "many_items": 6, "list_dilution": 4}


def load_taxonomy():
    tax = json.loads((ROOT / "taxonomy.json").read_text(encoding="utf-8"))
    # version covers the taxonomy and the embedding gate, so cached embedding results are redone when either changes
    cfg = [MODEL, ABS_MIN, MARGIN, MAX_TOP, MAX_SUB, HINT_RELIEF, COLD_EXTRA, README_EMBED]
    version = hashlib.sha1((json.dumps(tax, sort_keys=True) + json.dumps(cfg)).encode()).hexdigest()[:12]
    nodes = {}  # dim -> [(id, parent_id|None, label, node_dict, description)]
    for dim in ("technologies", "areas"):
        lst = []
        for n in tax.get(dim, []):
            lst.append((n["id"], None, n["label"], n, n.get("description", "")))
            for c in n.get("children", []) or []:
                lst.append((c["id"], n["id"], c["label"], c, c.get("description", "")))
        nodes[dim] = lst
    return tax, version, nodes


def norm(t):  # '-'/'_' read as spaces, camelCase split, whitespace collapsed
    t = re.sub(r"(?<=[a-z])(?=[A-Z][a-z])", " ", t or "")
    return re.sub(r"\s+", " ", re.sub(r"[-_]+", " ", t)).strip()


def _alias_rx(als):
    long_ = sorted({norm(a).lower() for a in als if len(a.strip()) >= 3}, key=len, reverse=True)
    return re.compile(r"(?<![\w])(?:" + "|".join(re.escape(a) for a in long_) + r")(?![\w])", re.I) if long_ else None


def compile_taxonomy(nodes, tax):
    rules = {**DEFAULT_RULES, **(tax.get("_rules") or {})}
    out = {}
    for dim, lst in nodes.items():
        for nid, parent, label, n, _ in lst:
            als = list(n.get("aliases", []))
            out[(dim, nid)] = {
                "parent": parent,
                "rx": _alias_rx(als),
                "ctx": _alias_rx(n.get("contextual", [])),
                "pats": [re.compile(p) for p in n.get("patterns", [])],
                "excl": re.compile("|".join(f"(?:{e})" for e in n["exclude"]), re.I) if n.get("exclude") else None,
                # topic evidence: explicit topics and multi-word aliases (a single-word alias
                # such as "youtube" as a topic names a platform the tool touches, not its subject)
                "topics": {norm(a).lower() for a in als if " " in norm(a)} | {norm(t).lower() for t in n.get("topics", [])},
                "lang": {l.lower() for l in n.get("lang", [])},
                "lang_w": n.get("lang_weight", rules["weights"]["language"]),
                "readme_min": n.get("readme_min", rules["readme_min"]),
                "min": n.get("min_score", rules["min_score"][dim] if isinstance(rules["min_score"], dict) else rules["min_score"]),
                "from_tech": n.get("from_tech", []), "implies": n.get("implies", []),
                "veto": {norm(t).lower() for t in n.get("exclude_topics", [])},
                "focus": n.get("require_focus", 0),  # >0: needs name/description evidence or this many README mentions
                "fallback": bool(n.get("fallback")),
            }
    return out, rules


# ---------- rules ----------
CONTENT_RX = re.compile(r"\b(skills?|subagents?|agents|prompts?|commands|rules|instructions|methodology|playbooks?|guidelines|personas?|templates|workflows|plugins|marketplace|collection|curated|awesome|resources|dotfiles|configs?|setup)\b", re.I)
CODE_RX = re.compile(r"\b(mcp server|server|cli|library|sdk|framework|desktop app|web app|binary|daemon|engine|runtime|extension for|vs ?code extension|tui|proxy|gateway|dashboard)\b", re.I)


_NC = {}


def _norm_cached(text):
    if text not in _NC:
        if len(_NC) > 5000: _NC.clear()
        _NC[text] = norm(text)
    return _NC[text]


def _count(c, text, use_ctx):
    """Mentions of a node in one text (exclusions blanked first)."""
    if not text: return 0, None, 0
    if c["excl"]:  # blank exclusions in the raw text and again after normalization (names use '-' for spaces)
        text = c["excl"].sub(" ", text); t = c["excl"].sub(" ", norm(text))
    else: t = _norm_cached(text)
    hits = []
    for p in c["pats"]: hits += [m.group(0) for m in p.finditer(text)]
    if c["rx"]: hits += [m.group(0) for m in c["rx"].finditer(t)]
    if use_ctx and c["ctx"]: hits += [m.group(0) for m in c["ctx"].finditer(t)]
    return len(hits), (hits[0].lower() if hits else None), len({h.lower() for h in hits})


def fields_of(r, rd):
    """Evidence fields of one entry. Sub-entries (id != repo) share README/topics/language with their parent
    repo; those describe the parent, so only the sub-entry's own name/description/items are used."""
    sub = r.get("id") != r.get("repo")
    items = [i for i in (r.get("items") or [])[:40] if isinstance(i, dict)]
    slug = "" if sub else (r.get("repo") or "").split("/")[-1]
    desc = r.get("description") or ""
    return {
        "sub": sub,
        "topics": [] if sub else [norm(t).lower() for t in (r.get("topics") or rd.get("topics") or [])],
        "lang": None if sub else (rd.get("lang") or "").lower() or None,
        "name": " ".join(x for x in {r.get("name") or "", slug} if x),
        "description": desc,
        "items": [((i.get("name") or "") + " . " + (i.get("description") or "")) for i in items
                  if (i.get("description") or "") != desc],
        "readme": "" if sub else rd.get("text", ""),
        "content_pack": bool(CONTENT_RX.search(norm(r.get("name") or "") + " " + norm(slug)))
                        or (bool(CONTENT_RX.search(desc)) and not CODE_RX.search(desc)),
    }


def score_dim(dim, F, compiled, rules, techs=()):
    W = rules["weights"]; res = {}
    own = {}  # nid -> (score, fields, first match); contextual aliases only in the second pass
    keys = [(k, c) for (d, k), c in compiled.items() if d == dim and not c["fallback"]]
    for ctx_pass in (False, True):
        for nid, c in keys:
            if ctx_pass and not (c["parent"] and c["ctx"] and own.get(c["parent"], (0,))[0] >= compiled[(dim, c["parent"])]["min"]):
                continue
            ev = {}; m = None
            if c["veto"] and any(t in c["veto"] for t in F["topics"]): continue
            if any(t in c["topics"] for t in F["topics"]): ev["topic"] = W["topic"]
            if F["lang"] and F["lang"] in c["lang"]:
                ev["language"] = 1 if F["content_pack"] else c["lang_w"]
            n, m1, _ = _count(c, F["name"], ctx_pass); m = m or m1
            if n: ev["name"] = W["name"]
            n, m2, dn = _count(c, F["description"], ctx_pass); m = m or m2
            if n:  # +1 when the description names the node in two different ways; + no_readme when nothing can corroborate
                ev["description"] = W["description"] + (1 if dn >= 2 else 0) + (0 if F["readme"] else W["no_readme"])
            k = 0
            for it in F["items"]:
                n, m3, _ = _count(c, it, ctx_pass); m = m or m3
                k += bool(n)
            if k: ev["items"] = W["items"] if (k >= 2 or len(F["items"]) < rules["many_items"]) else 1
            nr = 0
            if (c["readme_min"] or c["focus"]) and F["readme"]:
                nr, m4, _ = _count(c, F["readme"], ctx_pass); n = nr
            if c["readme_min"] and F["readme"]:
                m = m or m4
                if n >= c["readme_min"]: ev["readme"] = W["readme_tech"] if dim == "technologies" else W["readme"]
                elif n: ev["readme"] = W["readme_single"]
            if c["from_tech"] and any(t in techs for t in c["from_tech"]): ev["tech"] = W.get("tech", 1)
            # focus gate: topics, items or a few README mentions are not enough unless the repo's own name or
            # description names the node or the README keeps returning to it
            if c["focus"] and not ({"name", "description"} & set(ev)) and nr < c["focus"]:
                ev = {}
            s = sum(ev.values())
            if not ctx_pass: own[nid] = (s, ev, m)
            elif s > own[nid][0]: own[nid] = (s, ev, m)
    # list dilution: a description naming many technologies is a compatibility list, not evidence of focus
    if dim == "technologies":
        listed = [nid for nid, (s, ev, m) in own.items() if "description" in ev and compiled[(dim, nid)]["parent"] is None]
        if len(listed) >= rules["list_dilution"]:
            for nid in listed:
                s, ev, m = own[nid]; ev = {**ev, "description": 1}; own[nid] = (sum(ev.values()), ev, m)
    partial = {}
    for nid, (s, ev, m) in own.items():
        if s >= compiled[(dim, nid)]["min"]:
            res[nid] = {"rule_score": s, "fields": ev, "match": m}
        elif s > 0: partial[nid] = s
    return res, partial


def finalize(dim, res, compiled, rules, nodes):
    order = {nid: i for i, (nid, *_) in enumerate(nodes[dim])}
    for nid in list(res):  # implies
        for j in compiled[(dim, nid)]["implies"]:
            if j not in res: res[j] = {**res[nid], "implied_by": nid}
    for nid in list(res):  # child -> parent
        p = compiled[(dim, nid)]["parent"]
        if p and p not in res: res[p] = {**res[nid], "implied_by": nid}
    tops = sorted((n for n in res if compiled[(dim, n)]["parent"] is None), key=lambda n: (-res[n]["rule_score"], order[n]))
    keep = set(tops[:rules["max_top"][dim]])
    for p in keep.copy():
        kids = sorted((n for n in res if compiled[(dim, n)]["parent"] == p), key=lambda n: (-res[n]["rule_score"], order[n]))
        keep |= set(kids[:rules["max_children"]])
    return {n: res[n] for n in sorted(keep, key=order.get)}


def run_rules(r, rd, compiled, rules, nodes):
    F = fields_of(r, rd)
    t, pt = score_dim("technologies", F, compiled, rules)
    tech = finalize("technologies", t, compiled, rules, nodes)
    a, pa = score_dim("areas", F, compiled, rules, techs=set(tech))
    area = finalize("areas", a, compiled, rules, nodes)
    return {"technologies": tech, "areas": area, "partial": {"technologies": pt, "areas": pa}}


# ---------- embeddings ----------
class Embedder:
    def __init__(self, nodes):
        import numpy as np
        from fastembed import TextEmbedding
        self.np = np; self.m = TextEmbedding(MODEL); self.nodes = nodes; self.mat = {}
        labels = {nid: lab for lst in nodes.values() for nid, _, lab, _, _ in lst}
        for dim, lst in nodes.items():
            texts = [(f"{labels[p]}: " if p else "") + f"{lab}. {desc}" for nid, p, lab, _, desc in lst]
            self.mat[dim] = np.array(list(self.m.embed(texts)))

    @staticmethod
    def repo_text(r, rd):
        items = "; ".join(f"{i.get('name', '')}: {(i.get('description') or '')[:120]}" for i in (r.get("items") or [])[:8])
        return f"{r.get('name', '')}. {r.get('description') or ''} {items} {rd.get('text', '')[:README_EMBED]}"[:2500]

    def classify(self, texts, partials):
        """partials[i][dim] = sub-threshold rule scores; a node with some rule evidence needs embed_min - HINT_RELIEF,
        a node without any needs embed_min + COLD_EXTRA."""
        out = []
        for v, part in zip(self.m.embed(texts), partials):
            res = {}
            for dim, lst in self.nodes.items():
                sims = self.mat[dim] @ v
                thr = [n.get("embed_min", 1.0) + (-HINT_RELIEF if nid in part.get(dim, {}) else COLD_EXTRA)
                       for nid, _, _, n, _ in lst]
                tops = sorted(((float(sims[k]) - thr[k], float(sims[k]), nid) for k, (nid, p, *_) in enumerate(lst)
                               if p is None and not lst[k][3].get("fallback") and sims[k] >= ABS_MIN[dim] and sims[k] >= thr[k]),
                              reverse=True)
                chosen = {}
                for ex, s, nid in tops[:MAX_TOP[dim]]:
                    if ex >= tops[0][0] - MARGIN: chosen[nid] = round(s, 3)
                for p in list(chosen):
                    kids = sorted(((float(sims[k]) - thr[k], float(sims[k]), nid) for k, (nid, pp, *_) in enumerate(lst)
                                   if pp == p and sims[k] >= thr[k]), reverse=True)
                    for ex, s, nid in kids[:MAX_SUB]: chosen[nid] = round(s, 3)
                res[dim] = chosen
            out.append(res)
        return out

    def calibrate(self, texts):
        """Per-node embed_min = mean + CALIB_Z*sd of cosine scores over `texts`."""
        V = self.np.array(list(self.m.embed(texts))); cal = {}
        for dim, lst in self.nodes.items():
            S = V @ self.mat[dim].T; mu = S.mean(0); sd = S.std(0)
            for k, (nid, *_) in enumerate(lst): cal[nid] = round(float(mu[k] + CALIB_Z[dim] * sd[k]), 3)
        return cal


def write_calibration(cal):
    p = ROOT / "taxonomy.json"; tax = json.loads(p.read_text(encoding="utf-8"))
    for dim in ("technologies", "areas"):
        for n in tax.get(dim, []):
            for x in [n] + (n.get("children") or []):
                if x["id"] in cal: x["embed_min"] = cal[x["id"]]
    p.write_text(dump_taxonomy(tax), encoding="utf-8")


def dump_taxonomy(tax):
    """One node per line (children indented) so taxonomy.json stays reviewable."""
    def node(n, ind):
        kids = n.get("children")
        head = {k: v for k, v in n.items() if k != "children"}
        s = ind + json.dumps(head, ensure_ascii=False)
        if kids is None: return s
        inner = ",\n".join(node(c, ind + "  ") for c in kids)
        return s[:-1] + ', "children": [' + ("\n" + inner + "\n" + ind + "]}" if kids else "]}")
    parts = []
    for k, v in tax.items():
        if k in ("technologies", "areas"):
            parts.append(f' "{k}": [\n' + ",\n".join(node(n, "  ") for n in v) + "\n ]")
        else:
            parts.append(f" {json.dumps(k)}: {json.dumps(v, ensure_ascii=False)}")
    return "{\n" + ",\n".join(parts) + "\n}\n"


# ---------- main ----------
def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--offline", action="store_true"); ap.add_argument("--limit", type=int)
    ap.add_argument("--report", action="store_true"); ap.add_argument("--refresh-readmes", action="store_true")
    ap.add_argument("--no-embed", action="store_true")
    ap.add_argument("--calibrate", action="store_true", help="recompute per-node embed_min in taxonomy.json and exit")
    a = ap.parse_args()
    cat = json.loads((DATA / "catalog.json").read_text(encoding="utf-8"))
    repos = cat["repos"][:a.limit] if a.limit else cat["repos"]
    tax, version, nodes = load_taxonomy(); compiled, rule_cfg = compile_taxonomy(nodes, tax)
    readmes, t_fetch = fetch_readmes(repos, load_token(), a.offline, a.refresh_readmes)
    print(f"taxonomy {version} placeholder={bool(tax.get('_placeholder'))}; readme fetch {t_fetch:.1f}s")
    if a.calibrate:
        E = Embedder(nodes)
        elig = [r for r in repos if r.get("tier") in EMBED_TIERS and (r.get("stars") or 0) >= EMBED_MIN_STARS]
        write_calibration(E.calibrate([E.repo_text(r, {} if r["id"] != r["repo"] else readmes.get(r["repo"], {})) for r in elig]))
        print(f"calibrated embed_min on {len(elig)} repos -> taxonomy.json"); return
    FALLBACK = {dim: next((nid for nid, p, _, n, _ in nodes[dim] if p is None and n.get("fallback")), None) for dim in nodes}
    prev = jload(OUT, {}); work = {}; todo = []; reused = 0
    for r in repos:
        rd = readmes.get(r["repo"], {}); sha = rd.get("sha", "")
        rules = run_rules(r, rd, compiled, rule_cfg, nodes)
        old = prev.get(r["id"]) or {}
        eligible = r.get("tier") in EMBED_TIERS and (r.get("stars") or 0) >= EMBED_MIN_STARS
        emb = None
        if eligible and (not rules["technologies"] or not rules["areas"]):
            oe = (old.get("evidence") or {}).get("embedding")
            if oe is not None and old.get("readme_sha") == sha and old.get("taxonomy_version") == version:
                emb = oe; reused += 1
            else: todo.append(r["id"])
        has_text = bool((r.get("description") or "").strip() or (r["id"] == r["repo"] and rd.get("text", "").strip()))
        work[r["id"]] = {"sha": sha, "rules": rules, "emb": emb, "fb_ok": has_text and not r.get("archived")}
    t_emb = 0.0; n_emb = 0
    if todo and not a.no_embed:
        t0 = time.time(); E = Embedder(nodes); byid = {r["id"]: r for r in repos}
        t_load = time.time() - t0
        texts = [E.repo_text(byid[i], {} if byid[i]["id"] != byid[i]["repo"] else readmes.get(byid[i]["repo"], {})) for i in todo]
        for k in range(0, len(todo), 64):
            for i, res in zip(todo[k:k + 64], E.classify(texts[k:k + 64], [work[j]["rules"]["partial"] for j in todo[k:k + 64]])):
                work[i]["emb"] = res; n_emb += 1
        t_emb = time.time() - t0
        print(f"model load {t_load:.1f}s")
    final = {}
    for rid, o in work.items():
        tags = {"technologies": [], "areas": []}; ev = {}; methods = set(); fb = False
        for dim in tags:
            if o["rules"][dim]:
                tags[dim] = list(o["rules"][dim]); ev[dim] = o["rules"][dim]; methods.add("rules")
            elif o["emb"] and o["emb"].get(dim):
                tags[dim] = list(o["emb"][dim]); ev[dim] = {k: {"score": v} for k, v in o["emb"][dim].items()}; methods.add("embedding")
            if not tags[dim] and o["fb_ok"] and FALLBACK[dim]:
                tags[dim] = [FALLBACK[dim]]; ev[dim] = {FALLBACK[dim]: {"method": "fallback"}}; fb = True
        if o["emb"] is not None: ev["embedding"] = o["emb"]
        pc = prev.get(rid) or {}
        same = (pc.get("readme_sha") == o["sha"] and pc.get("taxonomy_version") == version
                and pc.get("technologies") == tags["technologies"] and pc.get("areas") == tags["areas"])
        final[rid] = {"readme_sha": o["sha"], "taxonomy_version": version, "technologies": tags["technologies"], "areas": tags["areas"],
                      "evidence": ev, "method": "+".join(sorted(methods)) if methods else ("fallback" if fb else "none"),
                      "classified_at": pc["classified_at"] if same and pc.get("classified_at") else now()}
    DATA.mkdir(exist_ok=True); OUT.write_text(json.dumps(final, indent=1, ensure_ascii=False), encoding="utf-8")
    print(f"wrote {len(final)} classifications; embedded {n_emb}, reused {reused}, embed total {t_emb:.1f}s")
    if a.report: write_report(repos, final, nodes, version, tax)


def write_report(repos, final, nodes, version, tax):
    L = ["# Classification report", "", f"taxonomy version `{version}`" + (" (PLACEHOLDER taxonomy)" if tax.get("_placeholder") else ""), "",
         "## Coverage per tier", "", "real = rules or embedding; fallback = general-purpose only", "",
         "| tier | repos | technology real | technology fallback | area real | area fallback | no tags |", "|---|---|---|---|---|---|---|"]
    by = {}
    for r in repos: by.setdefault(r.get("tier"), []).append(r)
    for t, rs in sorted(by.items(), key=lambda x: str(x[0])):
        n = len(rs); c = [final[r["id"]] for r in rs]
        def fbk(x, d): return any(v.get("method") == "fallback" for v in x["evidence"].get(d, {}).values())
        pt = sum(bool(x["technologies"]) and not fbk(x, "technologies") for x in c); ft = sum(fbk(x, "technologies") for x in c)
        pa = sum(bool(x["areas"]) and not fbk(x, "areas") for x in c); fa = sum(fbk(x, "areas") for x in c)
        un = sum(not x["technologies"] and not x["areas"] for x in c)
        L.append(f"| {t} | {n} | {100*pt/n:.1f}% | {100*ft/n:.1f}% | {100*pa/n:.1f}% | {100*fa/n:.1f}% | {100*un/n:.1f}% |")
    for dim in ("technologies", "areas"):
        L += ["", f"## Counts per {'technology' if dim == 'technologies' else 'area'}", "", "| node | repos | via rules | via embedding | fallback |", "|---|---|---|---|---|"]
        for nid, p, lab, *_ in nodes[dim]:
            rs = [x for x in final.values() if nid in x[dim]]
            em = sum(1 for x in rs if isinstance(x["evidence"].get(dim, {}).get(nid), dict) and "score" in x["evidence"][dim][nid])
            fb = sum(1 for x in rs if (x["evidence"].get(dim, {}).get(nid) or {}).get("method") == "fallback")
            L.append(f"| {'-- ' if p else ''}{lab} (`{nid}`) | {len(rs)} | {len(rs) - em - fb} | {em} | {fb} |")
    L += ["", "## 20 random examples", ""]
    for r in random.Random(7).sample(repos, min(20, len(repos))):
        c = final[r["id"]]
        evs = json.dumps({k: v for k, v in c["evidence"].items() if k != "embedding"}, ensure_ascii=False)[:300]
        L += [f"- **{r['repo']}** ({r.get('tier')}, {r.get('stars')} stars): {(r.get('description') or '')[:110]}",
              f"  - technologies: {c['technologies']} / areas: {c['areas']} / method: {c['method']}",
              f"  - evidence: `{evs}`"]
    REPORT.write_text("\n".join(L) + "\n", encoding="utf-8"); print("wrote", REPORT)


if __name__ == "__main__":
    main()
