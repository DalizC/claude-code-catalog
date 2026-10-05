#!/usr/bin/env python3
"""Static security scan of the Claude Code components each catalog entry ships (ROADMAP B2).

Fetched files are untrusted third-party text: they are only pattern-matched, never executed,
imported or followed. Rules live in security_rules.json.

  python security.py [--budget N] [--offline] [--only owner/repo] [--reserve N]

--budget N   max repos whose git tree is fetched with a full (non-304) API call this run (default 400)
--offline    no network: re-evaluate every entry from cached trees/files with the current rules
--only R     scan just owner/repo (all its catalog entries), ignoring budget/rotation
--reserve N  stop when the core API rate limit drops to N remaining (default 300)

Outputs data/security.json, the `security` field of data/catalog.json repos, data/security-report.md,
and the rotation cursor in data/security-state.json. Local cache: cache/security/ (gitignored).
"""
import base64, gzip, hashlib, json, os, re, sys, time, unicodedata, urllib.error, urllib.parse, urllib.request
from concurrent.futures import ThreadPoolExecutor
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path(__file__).parent
DATA = ROOT / "data"
CACHE = ROOT / "cache" / "security"
TREES = CACHE / "trees"; BLOBS = CACHE / "blobs"
RULES_PATH = ROOT / "security_rules.json"
OUT_PATH = DATA / "security.json"; STATE_PATH = DATA / "security-state.json"
REPORT_PATH = DATA / "security-report.md"; CATALOG_PATH = DATA / "catalog.json"

SCAN_LIVE_DAYS, SCAN_MIN_STARS, SCAN_MIN_T7 = 180, 50, 10  # scan scope, see in_scope(); build_site.py shows the rest as not scanned
MAX_FILES = 40
MAX_BYTES = 300_000
MAX_FILE_BYTES = 100_000
MAX_FINDINGS = 25
EXCERPT = 160
WORKERS = 6        # raw fetch threads per repo
REPO_WORKERS = 6   # repos scanned concurrently
SEV = {"info": 0, "review": 1, "high": 2}
SEV_NAME = {v: k for k, v in SEV.items()}
TIER_RANK = {"anthropic": 0, "official": 1, "listed": 2, "verified": 3, "watch": 4}
SKIP_DIRS = {"node_modules", ".git", "vendor", "dist", "build", "out", ".next", "__pycache__", "site-packages",
             "venv", ".venv", "coverage", "target", "bower_components", ".turbo", ".cache", "third_party"}
SCRIPT_EXT = {".sh", ".bash", ".zsh", ".py", ".js", ".mjs", ".cjs", ".ts", ".mts", ".cts", ".ps1", ".psm1", ".bat", ".cmd"}
CODE_DIRS = {"hooks", "scripts", "bin", "skills", "commands", "agents", "tools", "lib", "hook", "script"}
NOW = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")


def load_token():  # same lookup order as catalog.py load_token()
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


def arg(name, default=None, cast=str):
    if name in sys.argv:
        i = sys.argv.index(name)
        if i + 1 < len(sys.argv): return cast(sys.argv[i + 1])
    return default


OFFLINE = "--offline" in sys.argv
ONLY = arg("--only")
BUDGET = arg("--budget", 400, int)
RESERVE = arg("--reserve", 300, int)
TOKEN = None if OFFLINE else load_token()
STATS = {"api_calls": 0, "api_304": 0, "raw_fetched": 0, "raw_cached": 0, "raw_failed": 0, "errors": [], "rate_remaining": None, "stopped": ""}


# ---------------------------------------------------------------- network (text only, never executed)
def _req(url, headers, timeout=30):
    try:
        with urllib.request.urlopen(urllib.request.Request(url, headers=headers), timeout=timeout) as r:
            return r.status, r.read(MAX_FILE_BYTES + 1), r.headers
    except urllib.error.HTTPError as e:
        return e.code, b"", e.headers
    except Exception as e:
        return 0, str(e).encode()[:200], None


def gh_tree(repo, etag):
    h = {"User-Agent": "cc-catalog-security", "Accept": "application/vnd.github+json"}
    if TOKEN: h["Authorization"] = f"Bearer {TOKEN}"
    if etag: h["If-None-Match"] = etag
    url = f"https://api.github.com/repos/{repo}/git/trees/HEAD?recursive=1"
    try:
        with urllib.request.urlopen(urllib.request.Request(url, headers=h), timeout=60) as r:
            status, body, hd = r.status, r.read(), r.headers
    except urllib.error.HTTPError as e:
        status, body, hd = e.code, b"", e.headers
    except Exception as e:
        STATS["errors"].append(f"{repo}: {type(e).__name__}"); return 0, None, None
    STATS["api_calls"] += 1
    if status == 304: STATS["api_304"] += 1
    if hd is not None and hd.get("X-RateLimit-Remaining") is not None:
        STATS["rate_remaining"] = int(hd.get("X-RateLimit-Remaining"))
    if status in (403, 429):
        STATS["stopped"] = f"HTTP {status} on tree API (rate limit?)"
    if status != 200: return status, None, None
    return 200, json.loads(body.decode("utf-8", "replace")), hd.get("ETag")


def raw_fetch(repo, path):
    url = f"https://raw.githubusercontent.com/{repo}/HEAD/{urllib.parse.quote(path)}"
    h = {"User-Agent": "cc-catalog-security"}
    if TOKEN: h["Authorization"] = f"Bearer {TOKEN}"
    for attempt in range(3):
        status, body, _ = _req(url, h)
        if status == 200: return body[:MAX_FILE_BYTES].decode("utf-8", "replace")
        if status in (429, 503) or status == 0:
            time.sleep(2 + attempt * 5); continue
        break
    return None


# ---------------------------------------------------------------- cache
def slug(repo): return repo.replace("/", "__")


def tree_cache_get(repo):
    p = TREES / (slug(repo) + ".json.gz")
    if not p.exists(): return None
    try: return json.loads(gzip.decompress(p.read_bytes()))
    except Exception: return None


def tree_cache_put(repo, obj):
    TREES.mkdir(parents=True, exist_ok=True)
    (TREES / (slug(repo) + ".json.gz")).write_bytes(gzip.compress(json.dumps(obj, separators=(",", ":")).encode()))


def blob_get(sha):
    p = BLOBS / sha[:2] / (sha + ".gz")
    if p.exists():
        try: return gzip.decompress(p.read_bytes()).decode("utf-8", "replace")
        except Exception: return None
    return None


def blob_put(sha, text):
    d = BLOBS / sha[:2]; d.mkdir(parents=True, exist_ok=True)
    (d / (sha + ".gz")).write_bytes(gzip.compress(text.encode("utf-8")))


def compact_tree(t):
    out = []
    for e in t.get("tree", []):
        if e.get("type") != "blob": continue
        p = e["path"]
        if any(part in SKIP_DIRS for part in p.split("/")[:-1]): continue
        out.append([p, e["sha"], e.get("size", 0)])
    return {"sha": t.get("sha"), "truncated": t.get("truncated", False), "blobs": out}


# ---------------------------------------------------------------- file selection
def kind_of(path):
    """Returns (kind, base_priority) or None if the file is out of scope."""
    low = path.lower(); name = low.rsplit("/", 1)[-1]; parts = low.split("/")
    ext = "." + name.rsplit(".", 1)[-1] if "." in name else ""
    dirs = parts[:-1]
    if name.endswith(".min.js") or name.endswith(".bundle.js"): return None
    if name == "hooks.json" or (ext == ".json" and ("hooks" in dirs)): return ("hooks", 0)
    if name in ("settings.json", "settings.local.json") and ".claude" in dirs: return ("settings", 0)
    if name == "plugin.json" and ".claude-plugin" in dirs: return ("manifest", 1)
    if name == ".mcp.json": return ("manifest", 1)
    if ext in SCRIPT_EXT:
        if "hooks" in dirs or "hook" in dirs: return ("script", 2)
        return ("script", 4)
    if ext in (".md", ".mdc"):
        if name == "skill.md": return ("md_instr", 3)
        if len(dirs) >= 1 and dirs[-1] in ("agents", "commands") and name not in ("readme.md",): return ("md_instr", 3)
        if ".claude" in dirs and ("agents" in dirs or "commands" in dirs): return ("md_instr", 3)
        if name == "claude.md" and ".claude" in dirs: return ("md_instr", 3)
        if "skills" in dirs: return ("md_doc", 5)
        return None
    return None


def select_files(blobs, subpath, exclude):
    """Pick the Claude Code component files of one entry (subpath '' = whole repo)."""
    pre = (subpath.rstrip("/") + "/") if subpath else ""
    cand = [(p, s, z) for p, s, z in blobs if p.startswith(pre) and not any(p.startswith(x + "/") for x in exclude)]
    skill_dirs = {p.rsplit("/", 1)[0] for p, _, _ in cand if p.lower().endswith("/skill.md")}
    plugin_roots = set()
    for p, _, _ in cand:
        lp = p.lower()
        if lp.endswith(".claude-plugin/plugin.json") or lp.endswith(".claude-plugin/marketplace.json"):
            plugin_roots.add(p[: -len(".claude-plugin/plugin.json")] if lp.endswith("plugin.json") else p[: -len(".claude-plugin/marketplace.json")])
    out = []
    for p, s, z in cand:
        k = kind_of(p)
        if not k or z > MAX_FILE_BYTES: continue
        kind, prio = k
        if kind == "script" and prio == 4:
            in_skill = any(p.startswith(d + "/") for d in skill_dirs)
            in_plugin = any(p.startswith(r) and p[len(r):].split("/")[0].lower() in CODE_DIRS for r in plugin_roots)
            in_claude = "/.claude/" in "/" + p.lower()
            if not (in_skill or in_plugin or in_claude): continue
        if kind == "md_doc" and not any(p.startswith(d + "/") for d in skill_dirs) and "/skills/" not in "/" + p.lower(): continue
        out.append({"path": p, "sha": s, "size": z, "kind": kind, "prio": prio})
    return out


def prioritize(files, referenced):
    test_re = CTX["test_path"]
    for f in files:
        if f["kind"] == "script" and f["path"].rsplit("/", 1)[-1] in referenced: f["prio"] = min(f["prio"], 2)
        if f["kind"] == "script" and f["prio"] == 2: f["kind"] = "hook_script"  # runs automatically via hooks
        if test_re.search(f["path"].lower()): f["prio"] += 3
    files.sort(key=lambda f: (f["prio"], f["path"].count("/"), f["path"]))
    picked, total = [], 0
    for f in files:
        if len(picked) >= MAX_FILES: break
        if total + f["size"] > MAX_BYTES: continue
        picked.append(f); total += f["size"]
    return picked


# ---------------------------------------------------------------- rules engine
def load_rules():
    doc = json.loads(RULES_PATH.read_text(encoding="utf-8"))
    c = doc["context"]
    ctx = {"test_path": re.compile(c["test_path"], re.I), "doc_words": re.compile(c["doc_words"], re.I),
           "doc_window": c.get("doc_window", 2), "doc_heading": re.compile(c["doc_heading"], re.I),"guard_words": re.compile(c["guard_words"]),
           "guard_file": re.compile(c["guard_file"], re.I), "security_terms": c["security_terms"],
           "security_terms_min": c["security_terms_min"], "quoted": re.compile(c["quoted_citation"])}
    rules = []
    for r in doc["rules"]:
        fl = 0 if r.get("case_sensitive") else re.I
        rr = dict(r)
        rr["_pats"] = [re.compile(p, fl | re.M) for p in r.get("patterns", [])]
        rr["_any"] = re.compile("|".join(f"(?:{p})" for p in r["patterns"]), fl | re.M) if r.get("patterns") else None
        rr["_not"] = [re.compile(p, re.I) for p in r.get("not_patterns", [])]
        al = r.get("allowlist")
        rr["_allow"] = [re.compile(p, re.I) for p in al["patterns"]] if al else []
        es = r.get("escalate")
        rr["_esc"] = re.compile(es["pattern"], re.I) if es else None
        rules.append(rr)
    return doc, ctx, rules


RULES_DOC, CTX, RULES = load_rules()
RULES_HASH = hashlib.sha1(RULES_PATH.read_bytes()).hexdigest()[:12]

ZW = set("\u200b\u200c\u200d\u2060\u2061\u2062\u2063\u2064\u180e")
BIDI = set("\u202a\u202b\u202c\u202d\u202e\u2066\u2067\u2068\u2069")


def show(s):
    """Excerpt-safe rendering: invisible/control characters become <U+XXXX>."""
    o = []
    for ch in s:
        cp = ord(ch)
        if ch in ZW or ch in BIDI or 0xE0000 <= cp <= 0xE007F or ch == "\ufeff" or (unicodedata.category(ch) == "Cc" and ch != "\t"):
            o.append(f"<U+{cp:04X}>")
        else: o.append(ch)
    return "".join(o)


def excerpt(line, start=0):
    line = re.sub(r"\s+", " ", line.strip())
    s = show(line)
    if len(s) <= EXCERPT: return s
    st = max(0, min(start - 40, len(s) - EXCERPT))
    return ("\u2026" if st else "") + s[st: st + EXCERPT - 2] + "\u2026"


def in_string_literal(line, pos):
    before = line[:pos]
    return before.count('"') % 2 == 1 or before.count("'") % 2 == 1 or before.count("`") % 2 == 1


def lower(sev, n=1): return max(0, sev - n)


COMMENT_RE = re.compile(r"^\s*(?:#|//|\*|/\*|<#|REM\b|::|--\s)", re.I)
MD_TABLE_ROW_RE = re.compile(r"^\s*\|")
TRAIL_COMMENT_RE = re.compile(r"(?:^|\s)(?:#|//)\s")
PATTERN_LINE_RE = re.compile(r"\\s|\\\||\\b|\\\.|\(\?[:!=i]|\.\*|\[\^|re\.compile|new\s+RegExp|\bre\s*:\s*/|\bregex\b", re.I)
PRINT_RE = re.compile(r"(?:^|[\s;({=:])(?:echo|printf|print|puts|console\.\w+|Write-(?:Host|Output|Warning|Error)|log(?:ger)?(?:\.\w+)?|warn|die|error|fail|info|msg|message|hint|emit\w*|throw\s+new\s+\w+|raise\s+\w+|fmt\.Print\w*|description|help|usage|reason|text|label|title|prescription|suggest\w*|instruction\w*)\s*[(:=]?\s*f?[\"'`]", re.I)
EXEC_RE = re.compile(r"\b(?:execSync|execFileSync|exec|spawn\w*|system|popen|Popen|subprocess\.\w+|os\.system|child_process|run|check_output|shell_exec|Invoke-Expression|Start-Process)\s*\(", re.I)
ENC_RE = re.compile(r"-(?:e|en|enc|encodedcommand)\s+([A-Za-z0-9+/=]{40,})", re.I)
JSON_PERM_RE = re.compile(r"^\s*(?:[\"'](?:Bash|Read|Write|Edit|MultiEdit|WebFetch|WebSearch|Glob|Grep|NotebookEdit|mcp__)[^\"']*[\"']\s*,?\s*)+\]?\s*,?\s*$")
REGEX_LITERAL_RE = re.compile(r"^\s*(?:\w+\s*[:=]\s*)?/[^/\s].*/[gimsuy]*\s*[,;)]?\s*$|\bre\s*:\s*/[^/]")
STRONG_REGEX_RE = re.compile(r"\(\?[:!=<]|\.\{\d|\[\^|\\[sdwb][*+?{]|\\[sdwb]\)|\.\*\\")
DATA_LINE_RE = re.compile(r"^\s*[-*]?\s*(?:[\"'`][^\"'`]+[\"'`]\s*,?\s*)+[\]),]?\s*(?:(?:#|//).*)?$")


HEREDOC_RE = re.compile(r"<<-?\s*['\"]?([A-Za-z_]\w*)['\"]?")
SHELL_RUN_RE = re.compile(r"\|\s*(?:sudo\s+)?(?:ba|z|da)?sh\b|\b(?:ba|z)?sh\s*<<|\b(?:python[0-9.]*|node|perl|ruby)\s*-?\s*<<|\beval\b")


def code_context_masks(lines, kind):
    """Per-line flag: line is non-executable text (block comment, docstring, heredoc text,
    or the continuation of a multi-line message/assignment string)."""
    mask = [False] * len(lines)
    in_block = False; in_doc = None; heredoc = None; mstr = None
    for i, ln in enumerate(lines):
        st = ln.strip()
        if heredoc:
            mask[i] = True
            if st == heredoc: heredoc = None
            continue
        if mstr:
            mask[i] = True
            if (ln.count(mstr) - ln.count("\\" + mstr)) % 2 == 1: mstr = None
            continue
        if in_doc:
            mask[i] = True
            if st.count(in_doc) % 2 == 1 or (st.endswith(in_doc) and st != in_doc[:3]): in_doc = None
            continue
        if in_block:
            mask[i] = True
            if in_block in ln: in_block = False
            continue
        if st.startswith("/*") and "*/" not in st[2:]: in_block = "*/"; mask[i] = True; continue
        if st.startswith("<#") and "#>" not in st[2:]: in_block = "#>"; mask[i] = True; continue  # PowerShell block comment
        hd = HEREDOC_RE.search(ln)
        if hd and "<<<" not in ln and not SHELL_RUN_RE.search(ln):
            heredoc = hd.group(1); continue
        tq = False
        for q in ('"""', "'''"):
            if st.startswith(q) or (st.endswith(q) and "=" in st and st.count(q) == 1) or (re.match(r"^[\w.]+\s*=\s*[rbf]?" + q, st) and st.count(q) == 1):
                if st.count(q) == 1: in_doc = q; mask[i] = True
                elif st.startswith(q): mask[i] = True
                tq = True
                break
        if tq: continue
        for q in ('"', "`"):
            n = ln.count(q) - ln.count("\\" + q)
            if n % 2 == 1:
                k = ln.rfind(q)
                if (PRINT_RE.search(ln[:k + 1]) or re.search(r"[=:]\s*" + re.escape(q) + r"\s*$", ln[:k + 1])) and not EXEC_RE.search(ln[:k]):
                    mstr = q
                break
    return mask


def scan_text(text, path, kind, repo_security_doc=False, repo="", depth=0):
    findings = []
    lines = text.split("\n")
    low = text.lower()
    is_md = kind.startswith("md")
    is_json = kind in ("hooks", "settings", "manifest")
    scope_kind = "script" if kind == "hook_script" else kind
    is_test = bool(CTX["test_path"].search(path.lower()))
    sec_terms = sum(1 for t in CTX["security_terms"] if t in low)
    sec_file = sec_terms >= CTX["security_terms_min"] or repo_security_doc
    guard_file = bool(CTX["guard_file"].search(text))
    owner = repo.split("/")[0].lower() if repo else ""
    fence = [False] * len(lines)
    if is_md:
        inside = False
        for i, ln in enumerate(lines):
            if re.match(r"^\s*(```|~~~)", ln):
                fence[i] = True; inside = not inside; continue
            fence[i] = inside
    heading = [""] * len(lines)  # nearest preceding markdown heading (deny lists live under "Forbidden ..." headings)
    if is_md:
        cur = ""
        for i, ln in enumerate(lines):
            if not fence[i] and re.match(r"^\s{0,3}#{1,6}\s", ln): cur = ln
            heading[i] = cur
    cmask = code_context_masks(lines, kind) if not is_md and not is_json else [False] * len(lines)

    def ctx_adjust(rule, sev, i, line, m):
        if rule.get("context") is False: return sev
        pos = m.start() if m else 0
        if is_test: sev = lower(sev)
        if rule.get("context") == "light":  # only test paths, comments and non-executable text
            if is_md: return lower(sev) if (kind == "md_doc" or not fence[i]) else sev
            return 0 if (cmask[i] or COMMENT_RE.match(line)) else sev
        if is_md and rule.get("md_fence_only") and not fence[i]: sev = lower(sev)  # prose mention, not a command
        if owner and m is not None and re.search(r"(?:githubusercontent\.com|github\.com)/" + re.escape(owner) + r"/", line, re.I):
            sev = min(sev, SEV["review"])  # the author's own installer / raw files
        if is_md:
            if not fence[i] and MD_TABLE_ROW_RE.match(line) and rule["category"] != "prompt-injection":
                return 0  # markdown table row: reference/denylist data, not an instruction to run
            if kind == "md_doc" and fence[i]: sev = lower(sev)
            if fence[i] and (PATTERN_LINE_RE.search(line) or DATA_LINE_RE.match(line) or CTX["guard_file"].search(line)): return 0
            w = CTX["doc_window"]
            win = "\n".join(lines[max(0, i - w): i + w + 1]).replace("_", " ")
            if CTX["doc_words"].search(win) or CTX["doc_heading"].search(heading[i]): sev = lower(sev, 2)
            if rule["category"] == "prompt-injection" and m is not None:
                pre = line[max(0, pos - 2): pos]
                if CTX["quoted"].search(pre): sev = lower(sev)
            if sec_file: sev = lower(sev)
            return sev
        # code / config
        if cmask[i] or COMMENT_RE.match(line): return 0
        tc = TRAIL_COMMENT_RE.search(line)
        if tc and tc.start() < pos and not in_string_literal(line, tc.start()): return 0
        if STRONG_REGEX_RE.search(line): return 0  # regex syntax: the line defines a detection pattern
        quoted = in_string_literal(line, pos) or REGEX_LITERAL_RE.search(line) is not None
        if quoted and not (is_json and '"command"' in line) and (PATTERN_LINE_RE.search(line) or CTX["guard_words"].search(line.split(" #")[0].split(" //")[0])):
            return 0  # the hit is pattern/denylist data inside a string or regex, not an executed command
        if is_json and JSON_PERM_RE.match(line): return 0
        if is_json and PRINT_RE.search(line[:pos + 1]): return 0  # message text inside a hook command (echo '...')
        if not is_json and DATA_LINE_RE.match(line): return 0  # a bare quoted string in a list/array (pattern or denylist data)
        if REGEX_LITERAL_RE.search(line): return 0
        if not is_json and in_string_literal(line, pos) and not EXEC_RE.search(line[:pos]):
            if PRINT_RE.search(line[:pos + 1]) or guard_file: return 0
            sev = lower(sev)
        if sec_file and kind != "hook_script": sev = lower(sev)
        return sev

    def add(rule, sev, i, line, start=0, extra=None):
        findings.append({"rule": rule["id"], "severity": SEV_NAME[sev], "file": path, "line": i + 1,
                         "excerpt": extra if extra is not None else excerpt(line, start)})

    for rule in RULES:
        if scope_kind not in rule["scope"]: continue
        if rule.get("prefilter") and not any(k in low for k in rule["prefilter"]): continue
        sbk = rule.get("severity_by_kind", {})
        if kind == "hook_script":  # auto-executed: never below the rule's default severity
            base = SEV[sbk.get("hook_script", max(rule["severity"], sbk.get("script", rule["severity"]), key=SEV.get))]
        else:
            base = SEV[sbk.get(kind, rule["severity"])]
        typ = rule.get("type")
        if typ == "unicode_tags":
            for i, ln in enumerate(lines):
                idx = [j for j, ch in enumerate(ln) if 0xE0000 <= ord(ch) <= 0xE007F]
                if not idx: continue
                # emoji subdivision flags (U+1F3F4 followed by tag letters) are legitimate
                stripped = re.sub("\U0001F3F4[\U000E0020-\U000E007E]+\U000E007F", "", ln)
                hidden = "".join(chr(ord(ch) - 0xE0000) for ch in stripped if 0xE0020 <= ord(ch) <= 0xE007E)
                if not hidden and not any(0xE0000 <= ord(ch) <= 0xE007F for ch in stripped): continue
                add(rule, base, i, ln, extra=f"{len(hidden)} hidden tag chars, decoded start: {hidden[:60]!r}")
            continue
        if typ == "zero_width":
            for i, ln in enumerate(lines):
                hits = []
                for j, ch in enumerate(ln):
                    if ch not in ZW: continue
                    a = ln[j - 1] if j else " "; b = ln[j + 1] if j + 1 < len(ln) else " "
                    if ch == "\u200d" and (ord(a) > 0x2000 or ord(b) > 0x2000): continue  # emoji ZWJ sequences
                    if ch == "\u200c" and (ord(a) > 0x0500 or ord(b) > 0x0500): continue  # ZWNJ in Indic/Arabic/Persian text
                    hits.append(j)
                if len(hits) >= rule.get("min_count", 1):
                    add(rule, base, i, ln, hits[0], extra=f"{len(hits)} zero-width chars: " + excerpt(ln, hits[0]))
            continue
        if typ == "settings_allow":
            try: doc = json.loads(text)  # parsed as data only
            except Exception: continue
            perms = doc.get("permissions") if isinstance(doc, dict) else None
            allow = perms.get("allow") if isinstance(perms, dict) else None
            for entry in allow if isinstance(allow, list) else []:
                if isinstance(entry, str) and entry.strip() in rule["allow_all_entries"]:
                    i = next((k for k, ln in enumerate(lines) if json.dumps(entry) in ln), 0)
                    add(rule, ctx_adjust(rule, base, i, lines[i] if lines else "", None), i, lines[i] if lines else "")
            continue
        if typ == "bidi":
            for i, ln in enumerate(lines):
                j = next((j for j, ch in enumerate(ln) if ch in BIDI), None)
                if j is None: continue
                if re.search(r"[\u0590-\u08ff\ufb1d-\ufdff\ufe70-\ufefe]", ln): continue  # real right-to-left text
                if sum(1 for ch in set(ln) if ch in BIDI or ch in ZW) >= 4: continue  # a list/character class of invisible chars
                add(rule, base, i, ln, j)
            continue
        if typ == "html_comment":
            for m in re.finditer(r"<!--(.*?)-->", text, re.S):
                body = m.group(1)
                if len(body) > 4000: continue
                i = text.count("\n", 0, m.start())
                if fence[i] if i < len(fence) else False: continue
                for pat in rule["_pats"]:
                    mm = pat.search(body)
                    if not mm: continue
                    sev = base
                    if rule["_esc"] and rule["_esc"].search(body): sev = SEV[rule["escalate"]["severity"]]
                    li = i + body.count("\n", 0, mm.start())
                    sev = ctx_adjust(rule, sev, li, lines[li], None)
                    add(rule, sev, li, lines[li], extra=excerpt(body[max(0, mm.start() - 20): mm.end() + 60]))
                    break
            continue
        if typ: continue
        if rule["_any"] is None or not rule["_any"].search(text): continue  # fast whole-file precheck
        for i, ln in enumerate(lines):
            if len(ln) > 5000 and rule["id"] != "obfusc-blob": ln = ln[:5000]
            for pat in rule["_pats"]:
                m = pat.search(ln)
                if rule.get("mixed_case_digits"):  # blob must mix upper, lower and digits (not a long word/path)
                    m = next((x for x in pat.finditer(ln) if re.search(r"[0-9]", x.group()) and re.search(r"[a-z]", x.group()) and re.search(r"[A-Z]", x.group())), None)
                if not m: continue
                if any(n.search(ln) for n in rule["_not"]): break
                sev = base
                if rule["_allow"] and any(a.search(ln) for a in rule["_allow"]):
                    sev = SEV[rule["allowlist"]["severity"]]
                else:
                    if rule["_esc"]:
                        w = rule["escalate"].get("window", 0)
                        if rule["_esc"].search("\n".join(lines[max(0, i - w): i + w + 1])): sev = max(sev, SEV[rule["escalate"]["severity"]])
                    sev = ctx_adjust(rule, sev, i, ln, m)
                em = ENC_RE.search(ln)
                if em and rule["id"] == "obfusc-decode-exec" and depth == 0:
                    try: dec = base64.b64decode(em.group(1) + "=" * (-len(em.group(1)) % 4)).decode("utf-16-le", "replace")
                    except Exception: dec = ""
                    inner = scan_text(dec, path, "hook_script" if kind in ("hooks", "hook_script") else "script", repo=repo, depth=1) if dec else []
                    sev = min(sev, max([SEV[x["severity"]] for x in inner], default=SEV["review"]))
                    sev = max(sev, SEV["review"]) if dec else sev
                    add(rule, sev, i, ln, extra="powershell -EncodedCommand decodes to: " + excerpt(dec, 0)[:120])
                    break
                add(rule, sev, i, ln, m.start())
                break
    return findings


def combo_findings(files_findings):
    """File-level escalation: credential/env access + a request-catcher host in the same script = high."""
    out = []
    by_file = {}
    for f in files_findings: by_file.setdefault(f["file"], []).append(f)
    for path, fs in by_file.items():
        cats = {f["rule"] for f in fs if f["severity"] != "info"}
        if {"exfil-webhook-host", "exfil-chat-webhook"} & cats and {"cred-ssh-cloud-keys", "cred-token-dump", "cred-browser-store", "cred-home-dotenv"} & cats:
            c = next(f for f in fs if f["rule"].startswith("cred-"))
            out.append({**c, "rule": "exfil-credential-combo", "severity": "high"})
    return out


# ---------------------------------------------------------------- per-repo scan
def entry_subpath(e):
    if e["id"] == e["repo"]: return ""
    m = re.search(r"github\.com/[^/]+/[^/]+/tree/[^/]+/(.+)$", e.get("url", ""))
    if m: return urllib.parse.unquote(m.group(1)).strip("/")
    return e["id"][len(e["repo"]) + 1:]


def fetch_blobs(repo, files):
    texts = {}
    need = []
    for f in files:
        t = blob_get(f["sha"])
        if t is not None: texts[f["sha"]] = t; STATS["raw_cached"] += 1
        elif not OFFLINE: need.append(f)
    if need:
        with ThreadPoolExecutor(WORKERS) as ex:
            for f, t in zip(need, ex.map(lambda f: raw_fetch(repo, f["path"]), need)):
                if t is None: STATS["raw_failed"] += 1; continue
                STATS["raw_fetched"] += 1
                blob_put(f["sha"], t); texts[f["sha"]] = t
    return texts


REF_RE = re.compile(r"[\w./${}-]*?([\w.-]+\.(?:sh|bash|zsh|py|js|mjs|cjs|ts|ps1))\b")


def scan_entry(repo, e, tree, exclude, entries_desc):
    sub = entry_subpath(e)
    files = select_files(tree["blobs"], sub, exclude)
    if not files: return None
    configs = [f for f in files if f["kind"] in ("hooks", "settings", "manifest")][:10]
    texts = fetch_blobs(repo, configs)
    referenced = set()
    for f in configs:
        referenced |= set(REF_RE.findall(texts.get(f["sha"], "")))
    picked = prioritize(files, referenced)
    texts.update(fetch_blobs(repo, [f for f in picked if f["sha"] not in texts]))
    sec_repo = bool(re.search(r"\b(security|vulnerab\w*|pentest\w*|red.?team|malware|threat|exploit\w*|appsec|secure.?code|audit\w*|guard\w*|safety|sandbox\w*|injection|sast|cve)\b", entries_desc, re.I))
    findings = []
    nscanned = 0
    for f in picked:
        t = texts.get(f["sha"])
        if t is None: continue
        nscanned += 1
        findings += scan_text(t, f["path"], f["kind"], repo_security_doc=sec_repo and f["kind"].startswith("md"), repo=repo)
    findings += combo_findings(findings)
    # dedupe: max 3 hits per (rule, file); sort by severity
    seen = {}; ded = []
    for f in sorted(findings, key=lambda f: (-SEV[f["severity"]], f["file"], f["line"])):
        k = (f["rule"], f["file"])
        seen[k] = seen.get(k, 0) + 1
        if seen[k] <= 3: ded.append(f)
    lvl = max([SEV[f["severity"]] for f in ded if f["severity"] != "info"], default=0)
    return {"level": {0: "ok", 1: "review", 2: "high"}[lvl], "findings": ded[:MAX_FINDINGS],
            "tree_sha": tree["sha"], "scanned_at": NOW, "files": nscanned}


def scan_repo(repo, entries, online):
    cached = tree_cache_get(repo)
    tree = cached
    if online:
        status, t, etag = gh_tree(repo, cached.get("etag") if cached else None)
        if status == 200 and t is not None:
            tree = compact_tree(t); tree["etag"] = etag; tree["fetched_at"] = NOW
            tree_cache_put(repo, tree)
        elif status == 304 and cached:
            tree = cached
        elif status in (404, 409, 451):
            return {"status": f"http-{status}"}, {}
        else:
            return None, {}
    if tree is None: return None, {}
    sub_paths = [entry_subpath(e) for e in entries if e["id"] != e["repo"]]
    out = {}
    desc = " ".join(f"{e.get('name','')} {e.get('description','')} {' '.join(e.get('topics') or [])}" for e in entries)
    for e in entries:
        excl = sub_paths if e["id"] == e["repo"] else []
        r = scan_entry(repo, e, tree, excl, desc)
        if r: out[e["id"]] = r
    return {"status": "ok", "tree_sha": tree["sha"], "visited_at": NOW}, out


# ---------------------------------------------------------------- outputs
def parse_ts(ts):
    try: return datetime.fromisoformat(ts.replace("Z", "+00:00")) if ts else None
    except Exception: return None


def in_scope(entries, ref):
    """Scanned repos: alive (not archived, pushed within SCAN_LIVE_DAYS) and in use (>= SCAN_MIN_STARS stars or
    >= SCAN_MIN_T7 new stars in 7 days), plus every Anthropic or official-marketplace repo that is alive."""
    if any(e.get("archived") for e in entries): return False
    p = max((parse_ts(e.get("pushed_at")) for e in entries if e.get("pushed_at")), default=None)
    if not p or (ref - p).days > SCAN_LIVE_DAYS: return False
    if any(e.get("tier") in ("anthropic", "official") for e in entries): return True
    return any((e.get("stars") or 0) >= SCAN_MIN_STARS or (e.get("trend_7d") or 0) >= SCAN_MIN_T7 for e in entries)


def load_json(p, default):
    try: return json.loads(p.read_text(encoding="utf-8"))
    except Exception: return default


def write_catalog_field(sec):
    cat = load_json(CATALOG_PATH, None)
    if not cat: return 0
    n = 0
    for r in cat["repos"]:
        s = sec.get(r["id"])
        if s:
            r["security"] = {k: s[k] for k in ("level", "findings", "tree_sha", "scanned_at")}; n += 1
        else:
            r.pop("security", None)
    CATALOG_PATH.write_text(json.dumps(cat, indent=1), encoding="utf-8")
    return n


def write_report(sec, state, secs, nvisited):
    from collections import Counter
    lv = Counter(v["level"] for v in sec.values())
    by_rule = Counter(); by_rule_sev = Counter()
    for v in sec.values():
        for f in v["findings"]:
            by_rule[f["rule"]] += 1; by_rule_sev[(f["rule"], f["severity"])] += 1
    L = ["# Security scan report", "", f"Generated {NOW} by security.py (rules {RULES_HASH}). Static pattern scan; content is never executed.", "",
         f"- Entries with scanned components: {len(sec)} (repos visited this run: {nvisited}, {secs:.0f}s)",
         f"- API calls this run: {STATS['api_calls']} ({STATS['api_304']} not-modified); raw files fetched {STATS['raw_fetched']}, from cache {STATS['raw_cached']}, failed {STATS['raw_failed']}",
         "", "## Entries by level", "", "| level | entries |", "|---|---|"]
    for k in ("high", "review", "ok"): L.append(f"| {k} | {lv.get(k, 0)} |")
    L += ["", "## Findings by rule", "", "| rule | high | review | info |", "|---|---|---|---|"]
    for rule, _ in by_rule.most_common():
        L.append(f"| {rule} | {by_rule_sev[(rule,'high')]} | {by_rule_sev[(rule,'review')]} | {by_rule_sev[(rule,'info')]} |")
    def esc(s): return s.replace("|", "\\|").replace("`", "'")
    L += ["", "## High findings", ""]
    for id_, v in sorted(sec.items()):
        for f in v["findings"]:
            if f["severity"] == "high":
                L.append(f"- **{id_}** `{f['rule']}` {f['file']}:{f['line']} \u2014 {esc(f['excerpt'])}")
    L += ["", "## Review findings (first per entry, up to 80)", ""]
    n = 0
    for id_, v in sorted(sec.items()):
        if v["level"] != "review": continue
        f = next(f for f in v["findings"] if f["severity"] == "review")
        L.append(f"- **{id_}** `{f['rule']}` {f['file']}:{f['line']} \u2014 {esc(f['excerpt'])}"); n += 1
        if n >= 80: break
    if STATS["errors"]: L += ["", "## Errors", ""] + [f"- {e}" for e in STATS["errors"][:30]]
    REPORT_PATH.write_text("\n".join(L) + "\n", encoding="utf-8")


def main():
    t0 = time.time()
    cat = load_json(CATALOG_PATH, None)
    if not cat: sys.exit("data/catalog.json missing")
    repos = {}
    for e in cat["repos"]:
        if not re.fullmatch(r"[\w.-]+/[\w.-]+", e.get("repo") or ""): continue
        repos.setdefault(e["repo"], []).append(e)
    def prio(repo):
        es = repos[repo]
        return (min(TIER_RANK.get(e.get("tier"), 9) for e in es), -max(e.get("stars") or 0 for e in es), repo)
    ref = parse_ts(cat.get("generated_at")) or datetime.now(timezone.utc)
    scope = {r for r in repos if in_scope(repos[r], ref)}
    order = sorted(scope, key=prio)
    sec = load_json(OUT_PATH, {})
    state = load_json(STATE_PATH, {"cursor": None, "repos": {}})
    state.setdefault("repos", {})
    # out of scope: an "ok" verdict can't be kept current, so it is dropped (the site shows "not scanned");
    # review/high findings stay visible with their scan date
    for r in set(repos) - scope:
        for e in repos[r]:
            if (sec.get(e["id"]) or {}).get("level") == "ok": sec.pop(e["id"])

    if ONLY:
        todo = [ONLY] if ONLY in repos else sys.exit(f"{ONLY} not in catalog")
    elif OFFLINE:
        todo = order
    else:
        # pushed since the last visit first (a change is rescanned the next night), then never scanned, then rotation
        def changed(r):
            p = max((parse_ts(e.get("pushed_at")) for e in repos[r] if e.get("pushed_at")), default=None)
            v = parse_ts(state["repos"][r].get("visited_at"))
            return bool(p and v and p > v)
        seen = [r for r in order if r in state["repos"]]
        hot = [r for r in seen if changed(r)]
        new = [r for r in order if r not in state["repos"]]
        old = [r for r in seen if r not in set(hot)]
        cur = state.get("cursor")
        k = old.index(cur) + 1 if cur in old else 0
        todo = hot + new + old[k:] + old[:k]
        print(f"security scope: {len(scope)}/{len(repos)} repos; changed since last visit {len(hot)}, never scanned {len(new)}")

    full_calls = 0; visited = 0; pos = 0
    pool = ThreadPoolExecutor(REPO_WORKERS)
    while pos < len(todo):
        n = REPO_WORKERS * 2
        if not OFFLINE and not ONLY:
            if full_calls >= BUDGET: break
            if STATS["rate_remaining"] is not None and STATS["rate_remaining"] <= RESERVE:
                STATS["stopped"] = f"rate limit reserve reached ({STATS['rate_remaining']} left)"; break
            if STATS["stopped"]: break
            n = min(n, BUDGET - full_calls)
        chunk = todo[pos: pos + n]; pos += len(chunk)
        before = STATS["api_calls"] - STATS["api_304"]
        results = list(pool.map(lambda r: scan_repo(r, repos[r], online=not OFFLINE), chunk))
        full_calls += (STATS["api_calls"] - STATS["api_304"]) - before
        for repo, (st, res) in zip(chunk, results):
            if st is None: continue
            visited += 1
            for e in repos[repo]: sec.pop(e["id"], None)
            sec.update(res)
            if not OFFLINE:
                state["repos"][repo] = st
                if not ONLY: state["cursor"] = repo
            if visited % 100 == 0:
                print(f"  {visited} repos, {time.time()-t0:.0f}s, api {STATS['api_calls']} (304: {STATS['api_304']}), raw {STATS['raw_fetched']}, rate left {STATS['rate_remaining']}", flush=True)
    pool.shutdown()
    ids = {e["id"] for es in repos.values() for e in es}
    sec = {k: sec[k] for k in sorted(sec) if k in ids}
    state["repos"] = {k: v for k, v in state["repos"].items() if k in repos}
    state.update({"updated_at": NOW, "rules": RULES_HASH, "last_run": {"visited": visited, "full_api_calls": full_calls, **{k: v for k, v in STATS.items() if k != "errors"}}})
    DATA.mkdir(exist_ok=True)
    OUT_PATH.write_text(json.dumps(sec, indent=1, ensure_ascii=False), encoding="utf-8")
    STATE_PATH.write_text(json.dumps(state, indent=1, sort_keys=True), encoding="utf-8")
    n = write_catalog_field(sec)
    secs = time.time() - t0
    write_report(sec, state, secs, visited)
    from collections import Counter
    print(f"security: visited {visited} repos in {secs:.0f}s; entries {len(sec)} {dict(Counter(v['level'] for v in sec.values()))}; "
          f"catalog updated {n}; api {STATS['api_calls']} (304 {STATS['api_304']}); raw {STATS['raw_fetched']} fetched/{STATS['raw_failed']} failed; {STATS['stopped']}")


if __name__ == "__main__":
    main()
