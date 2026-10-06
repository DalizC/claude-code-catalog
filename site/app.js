/* cc-catalog v4: table + cards views over window.CATALOG (built by build_site.py).
   All data is rendered with DOM APIs / textContent. Only constant icon markup is parsed.
   Star history is lazy-loaded from history/NN.json (needs http; file:// degrades gracefully).
   Technology glyphs are vendored Simple Icons SVGs in icons/ (no runtime CDN). */
(function () {
  "use strict";

  const C = window.CATALOG;
  const SVGNS = "http://www.w3.org/2000/svg";
  const $ = id => document.getElementById(id);
  if (!C || !Array.isArray(C.repos)) {
    $("results").textContent = "Catalog data (catalog.js) failed to load.";
    return;
  }

  // ---------------------------------------------------------------- helpers
  const ICON = {
    chev: '<path d="m6 9 6 6 6-6"/>',
    copy: '<rect x="8.5" y="8.5" width="11" height="11" rx="2"/><path d="M15.5 8.5V6a1.5 1.5 0 0 0-1.5-1.5H6A1.5 1.5 0 0 0 4.5 6v8A1.5 1.5 0 0 0 6 15.5h2.5"/>',
    check: '<path d="m5 12.5 4.5 4.5L19 7.5"/>',
    x: '<path d="M7 7l10 10M17 7 7 17"/>',
    star: '<path d="m12 4 2.4 5 5.4.7-4 3.8 1 5.4L12 16.3 7.2 18.9l1-5.4-4-3.8 5.4-.7z"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2.5v2M12 19.5v2M4.6 4.6 6 6M18 18l1.4 1.4M2.5 12h2M19.5 12h2M4.6 19.4 6 18M18 6l1.4-1.4"/>',
    moon: '<path d="M19.5 14.5A8 8 0 0 1 9.5 4.5a8 8 0 1 0 10 10z"/>',
    ext: '<path d="M14 5h5v5M19 5l-8 8M17 14v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h4"/>',
    flag: '<path d="M5 21V4.5M5 4.5h11l-2 4 2 4H5"/>',
    key: '<circle cx="8" cy="15" r="3.5"/><path d="m10.5 12.5 8-8M16 7l2 2M14 9l1.5 1.5"/>',
    coin: '<circle cx="12" cy="12" r="8"/><path d="M14.5 9.5c-.4-.9-1.4-1.5-2.5-1.5-1.5 0-2.5.8-2.5 2s1 1.7 2.5 2 2.5.8 2.5 2-1 2-2.5 2c-1.1 0-2.1-.6-2.5-1.5M12 6.5V8M12 16v1.5"/>',
    warn: '<path d="M10.3 4.6 3.2 17a2 2 0 0 0 1.7 3h14.2a2 2 0 0 0 1.7-3L13.7 4.6a2 2 0 0 0-3.4 0z"/><path d="M12 9.5v4M12 17h.01"/>',
    archive: '<rect x="4" y="5" width="16" height="4" rx="1"/><path d="M5.5 9v9a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V9M10 13h4"/>',
    trend: '<path d="M4 17.5 9.5 12l3.5 3 7-7.5"/><path d="M15 7.5h5v5"/>',
    info: '<circle cx="12" cy="12" r="8"/><path d="M12 11v5M12 8h.01"/>',
    clock: '<circle cx="12" cy="12" r="8"/><path d="M12 8v4l2.5 2"/>',
    shield: '<path d="M12 3.5 5 6v5.5c0 4.2 2.9 7.4 7 9 4.1-1.6 7-4.8 7-9V6z"/><path d="M12 8.5v4M12 15.5h.01"/>',
    shieldok: '<path d="M12 3.5 5 6v5.5c0 4.2 2.9 7.4 7 9 4.1-1.6 7-4.8 7-9V6z"/><path d="m9 12 2.2 2.2L15.5 10"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    share: '<path d="M7 7h10v10"/><path d="M17 7 7 17"/>',
    minus: '<path d="M6 12h12"/>',
    q: '<circle cx="12" cy="12" r="8"/><path d="M9.8 9.7a2.3 2.3 0 0 1 4.4.9c0 1.6-2.2 2-2.2 3.4M12 17h.01"/>',
    box: '<path d="M12 3.5 4.5 7.5v9L12 20.5l7.5-4v-9z"/><path d="M4.5 7.5 12 11.5l7.5-4M12 11.5v9"/>',
    sort: '<path d="M8 5v14M4.5 15.5 8 19l3.5-3.5M16 19V5M12.5 8.5 16 5l3.5 3.5"/>',
    plugin: '<path d="M9 4v4M15 4v4M7 8h10v4a5 5 0 0 1-10 0zM12 17v3"/>',
    skill: '<path d="M13 3 5 13.5h6L10 21l8-10.5h-6z"/>',
    agent: '<rect x="5" y="8" width="14" height="11" rx="3"/><path d="M12 4v4M9.5 13h.01M14.5 13h.01"/>',
    marketplace: '<path d="M4 9.5 5.5 5h13L20 9.5M4 9.5h16M4 9.5a2.7 2.7 0 0 0 5.3 0 2.7 2.7 0 0 0 5.4 0 2.7 2.7 0 0 0 5.3 0M5.5 12.5V19h13v-6.5"/>',
    "mcp-server": '<rect x="4" y="4" width="16" height="6" rx="1.5"/><rect x="4" y="14" width="16" height="6" rx="1.5"/><path d="M7.5 7h.01M7.5 17h.01"/>',
    collection: '<rect x="4" y="4" width="7" height="7" rx="1.5"/><rect x="13" y="4" width="7" height="7" rx="1.5"/><rect x="4" y="13" width="7" height="7" rx="1.5"/><rect x="13" y="13" width="7" height="7" rx="1.5"/>',
  };
  const iconCache = Object.create(null);
  function ic(name, cls) {
    let base = iconCache[name];
    if (!base) {
      const tpl = document.createElement("template");
      tpl.innerHTML = '<svg xmlns="' + SVGNS + '" viewBox="0 0 24 24" aria-hidden="true" focusable="false">' + (ICON[name] || "") + "</svg>"; // constant markup only
      base = iconCache[name] = tpl.content.firstChild;
    }
    const s = base.cloneNode(true);
    s.setAttribute("class", "i" + (cls ? " " + cls : ""));
    return s;
  }
  function h(tag, props, ...kids) {
    const el = document.createElement(tag);
    if (props) for (const k in props) {
      const v = props[k];
      if (v == null || v === false) continue;
      if (k === "class") el.className = v;
      else if (k === "text") el.textContent = v;
      else el.setAttribute(k, v === true ? "" : String(v));
    }
    for (const c of kids.flat(3)) if (c != null && c !== false) el.append(c.nodeType ? c : String(c));
    return el;
  }
  function sv(tag, attrs) {
    const el = document.createElementNS(SVGNS, tag);
    for (const k in attrs) el.setAttribute(k, attrs[k]);
    return el;
  }
  function safeUrl(u) {
    if (typeof u !== "string" || !u) return null;
    try { const x = new URL(u); return x.protocol === "https:" || x.protocol === "http:" ? x.href : null; } catch (e) { return null; }
  }
  const isNum = v => typeof v === "number" && isFinite(v);
  const fmt = n => !isNum(n) ? "—" : n >= 1e6 ? (n / 1e6).toFixed(1).replace(/\.0$/, "") + "M" : n >= 1e4 ? Math.round(n / 1e3) + "k" : n >= 1e3 ? (n / 1e3).toFixed(1).replace(/\.0$/, "") + "k" : String(Math.round(n));
  const signed = n => !isNum(n) ? "—" : n === 0 ? "0" : (n > 0 ? "+" : "−") + fmt(Math.abs(n));
  const trendCls = n => !isNum(n) ? "nd" : n > 0 ? "up" : n < 0 ? "down" : "flat";
  const DAY = 864e5;
  const REF = (() => { const t = Date.parse(C.generated_at || ""); return isNaN(t) ? Date.now() : t; })();
  const REFDAY = Math.floor(REF / DAY);
  const dayOf = d => { const t = Date.parse(d + "T00:00:00Z"); return isNaN(t) ? null : Math.floor(t / DAY); };
  const ago = d => { const day = d && dayOf(d); return day == null ? null : Math.max(0, REFDAY - day); };
  function relDays(days) {
    if (days < 1) return "today";
    if (days < 2) return "yesterday";
    if (days < 31) return days + "d ago";
    if (days < 365) return Math.round(days / 30.4) + "mo ago";
    return (days / 365).toFixed(1).replace(/\.0$/, "") + "y ago";
  }
  const rel = d => { const a = ago(d); return a == null ? "—" : relDays(a); };
  const ageText = days => days < 60 ? days + " days" : days < 365 ? Math.round(days / 30.4) + " months" : (days / 365).toFixed(1).replace(/\.0$/, "") + " years";
  const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const fdate = t => { const d = new Date(t); return MONTHS[d.getUTCMonth()] + " " + d.getUTCDate() + ", " + d.getUTCFullYear(); };
  const sdate = s => { const t = Date.parse(s + "T00:00:00Z"); return isNaN(t) ? s : fdate(t); };
  const nf = n => n.toLocaleString("en-US");
  const plural = (n, one, many) => nf(n) + " " + (n === 1 ? one : (many || one + "s"));

  // ---------------------------------------------------------------- vocab
  const TIERS = [
    { id: "anthropic", label: "Anthropic", long: "Made by Anthropic", desc: "Built by Anthropic" },
    { id: "official", label: "Official", long: "In Anthropic's official marketplace", desc: "Official marketplace" },
    { id: "listed", label: "Community", long: "In Anthropic's community marketplace", desc: "Community marketplace" },
    { id: "verified", label: "Verified", long: "Passed our quality checks", desc: "Passed quality checks" },
    { id: "new", label: "New", long: "New, with early traction", desc: "Under 90 days, gaining stars" },
    { id: "watch", label: "Watch", long: "Not vetted yet", desc: "Unvetted, review first" },
  ];
  const TIER = Object.fromEntries(TIERS.map(t => [t.id, t]));
  const TORD = Object.fromEntries(TIERS.map((t, i) => [t.id, i]));
  const TYPES = ["plugin", "skill", "agent", "marketplace", "mcp-server", "collection"];
  const TLABEL = { plugin: "Plugin", skill: "Skill", agent: "Agent", marketplace: "Marketplace", "mcp-server": "MCP server", collection: "Collection" };
  const METHOD = { r: "keyword rules", e: "embeddings", er: "embeddings + rules", f: "fallback (no specific match)" };
  const SOURCE = { listed: "Community marketplace", official: "Official marketplace", curated: "Curated list", search: "GitHub search", "marketplace-expansion": "Another marketplace", "mcp-registry": "MCP Registry" };
  const SCAN_SCOPE = "Not security-scanned. The nightly scan covers every listed repo that is active (pushed in the last 6 months, not archived); new ones are scanned first. Read the files before installing.";
  const FLAGS = {
    "star-farming": { label: "Unusual star burst", short: "Star burst", icon: "flag", sus: true, tip: "One day brought an outsized share of recent stars with no code activity around it. Can be a viral launch or bought stars: don't rely on the star count alone." },
    "star-spike": { label: "Star spike", short: "Star spike", icon: "flag", sus: true, tip: "A sudden jump in stars over the last few days." },
    "star-anomaly": { label: "Star anomaly", short: "Anomaly", icon: "flag", sus: true, tip: "Gained stars unusually fast for its age. Popularity may be inflated." },
    "security-review": { label: "Security review", short: "Review", icon: "shield", sus: true, tip: "The static scan found patterns worth reviewing before you install." },
    "security-high": { label: "Security high", short: "High risk", icon: "shield", sus: true, hi: true, tip: "The static scan found high-risk patterns (e.g. remote code execution, credential access)." },
    archived: { label: "Archived", short: "Archived", icon: "archive", cls: "arch", tip: "The repository is archived: read-only, no further changes." },
    unmaintained: { label: "Unmaintained", short: "Unmaintained", icon: "clock", cls: "stale", tip: "No push in more than 6 months (180 days before the catalog was built)." },
    unscanned: { label: "Not security-scanned", short: "Not scanned", icon: "shield", cls: "stale", tip: SCAN_SCOPE },
    "paid-api": { label: "Paid API", short: "Paid API", icon: "coin", cls: "stale", tip: "Calls an external service that charges per use. The extension itself is free; check the service's pricing before installing." },
    "api-key": { label: "Needs API key", short: "API key", icon: "key", cls: "stale", tip: "Needs an API key or account for an external service. Many have a free tier; check before installing." },
  };
  const FLAGORDER = Object.keys(FLAGS);
  const SUSFLAGS = FLAGORDER.filter(f => FLAGS[f].sus);
  const flagLabel = f => FLAGS[f] ? FLAGS[f].label : f.replace(/[-_]+/g, " ").replace(/^./, c => c.toUpperCase());
  const isSus = f => (FLAGS[f] && FLAGS[f].sus) || /^star-/.test(f); // ranked last in Trending
  const LIC = {
    ok: { label: "Commercial use OK", help: "Permissive (MIT, Apache-2.0, BSD, ISC…). Use, modify and sell; keep the copyright notice." },
    copyleft: { label: "Copyleft", help: "Commercial use allowed with obligations: derived work must stay open under the same license (GPL, AGPL, LGPL, MPL)." },
    none: { label: "No license", help: "All rights reserved by default. You can read it, but not legally reuse or redistribute it." },
    other: { label: "Other / unknown", help: "Custom or unrecognized license text. Read the repo's LICENSE before reusing." },
  };
  const LICORDER = ["ok", "copyleft", "none", "other"];
  const LICRANK = { ok: 3, copyleft: 2, other: 1, none: 0 };
  // taxonomy technology id -> vendored Simple Icons slug (icons/<slug>.svg). Missing = neutral glyph + text label.
  const SLUG = {
    python: "python", django: "django", fastapi: "fastapi", javascript: "javascript", react: "react", nextjs: "nextdotjs",
    "react-native": "react", angular: "angular", vue: "vuedotjs", threejs: "threedotjs", typescript: "typescript", html: "html5",
    css: "css", tailwind: "tailwindcss", go: "go", rust: "rust", java: "openjdk", "spring-boot": "springboot", swift: "swift",
    csharp: "dotnet", php: "php", laravel: "laravel", wordpress: "wordpress", ruby: "ruby", flutter: "flutter", shell: "gnubash",
    postgresql: "postgresql", sqlite: "sqlite", mysql: "mysql", supabase: "supabase", aws: "amazonwebservices", gcp: "googlecloud",
    azure: "microsoftazure", cloudflare: "cloudflare", vercel: "vercel", docker: "docker", kubernetes: "kubernetes",
    terraform: "terraform", playwright: "playwright",
    figma: "figma", adobe: "adobe", blender: "blender", canva: "canva", framer: "framer", "sketch-penpot": "sketch",
    openai: "openai", gemini: "googlegemini", "local-models": "ollama", "model-gateways": "openrouter",
  };

  // ---------------------------------------------------------------- data prep
  const STR = C.strings || {};
  const TAX = C.taxonomy || {};
  const R = C.repos;
  const BY = new Map();
  const FALLBACK_ID = "general-purpose";
  const mkTree = list => (Array.isArray(list) ? list : []).map(n => ({ id: n.id, label: n.label || n.id, kids: (n.children || []).map(k => ({ id: k.id, label: k.label || k.id, kids: [] })) }));
  const TREES = { tech: mkTree(TAX.technologies), area: mkTree(TAX.areas) };
  const LABEL = { tech: Object.create(null), area: Object.create(null) };
  const PARENT = { tech: Object.create(null), area: Object.create(null) };
  const KIDS = { tech: Object.create(null), area: Object.create(null) };
  for (const g of ["tech", "area"]) TREES[g].forEach(n => {
    if (n.id === FALLBACK_ID) n.label = g === "tech" ? "Any stack (general purpose)" : "General purpose";
    LABEL[g][n.id] = n.label;
    if (n.kids.length) KIDS[g][n.id] = n.kids.map(k => k.id);
    n.kids.forEach(k => { LABEL[g][k.id] = k.label; PARENT[g][k.id] = n.id; });
  });
  const flagSet = new Set();
  const deref = (arr, table) => (Array.isArray(arr) ? arr : []).map(x => typeof x === "number" ? (table && table[x]) || "" : String(x)).filter(Boolean);
  const OTHER = "::other";
  const otherCount = { tech: Object.create(null), area: Object.create(null) };

  function leaves(g, tags) {
    // Filter keys: a parent tag that has a more specific child on the same repo is represented by
    // the child; a parent tag alone becomes the synthetic "Other <parent>" child.
    const set = new Set(tags), out = [];
    tags.forEach(t => {
      const kids = KIDS[g][t];
      if (!kids) out.push(t);
      else if (!kids.some(k => set.has(k))) out.push(t + OTHER);
    });
    return out;
  }
  // display order: most specific first (children before parents, a parent implied by a child is dropped)
  function specific(g, list) {
    const set = new Set(list);
    const kids = list.filter(t => PARENT[g][t]), rest = list.filter(t => !PARENT[g][t] && !(KIDS[g][t] || []).some(k => set.has(k)));
    return [...kids, ...rest];
  }

  R.forEach((r, i) => {
    r.i = i;
    r.r = String(r.r || "");
    r.k = String(r.k || r.r || "#" + i);
    r.n = r.n || r.r.split("/").pop() || r.k;
    r.nl = r.n.toLowerCase();
    r.d = r.d || "";
    r.tx = deref(r.tx, STR.tx);
    r.src = deref(r.src, STR.src);
    r.it = Array.isArray(r.it) ? r.it : [];
    r.nit = r.nit || r.it.length;
    r.fl = Array.isArray(r.fl) ? r.fl.filter(f => typeof f === "string") : [];
    r.tg = Array.isArray(r.tg) ? r.tg : [];
    r.ar = Array.isArray(r.ar) ? r.ar : [];
    r.al = Array.isArray(r.al) ? r.al.filter(a => typeof a === "string") : [];
    r.t7 = isNum(r.t7) ? r.t7 : null;
    r.t30 = isNum(r.t30) ? r.t30 : null;
    r.s = isNum(r.s) ? r.s : null;
    r.tr = TIER[r.tr] ? r.tr : "watch";
    r.lg = LIC[r.lg] ? r.lg : !r.l ? "none" : "other";
    r.url = safeUrl(r.u || (r.r ? "https://github.com/" + r.r : ""));
    r.own = r.r.includes("/") ? r.r.split("/")[0] : r.url ? new URL(r.url).hostname.replace(/^www\./, "") : "";
    r.ownl = r.own.toLowerCase();
    r.disp = r.r ? (r.k !== r.r ? r.k : r.r) : (r.url || r.k).replace(/^https?:\/\/(www\.)?/, "");
    r.pd = ago(r.p);
    const sec = r.sec && typeof r.sec === "object" && /^(ok|review|high)$/.test(r.sec.lv) ? r.sec : null;
    r.sec = sec;
    // r.flg: every flag the Flags facet knows (catalog flags + security level + archived; "unmaintained" comes from build_site.py)
    r.flg = r.fl.slice();
    if (sec && sec.lv !== "ok") r.flg.push("security-" + sec.lv);
    if (r.a && !r.flg.includes("archived")) r.flg.push("archived");
    r.flg.sort((a, b) => ((FLAGORDER.indexOf(a) + 99) % 99) - ((FLAGORDER.indexOf(b) + 99) % 99));
    r.pills = r.flg.filter(f => !(f === "unmaintained" && r.flg.includes("archived")));
    r.sus = r.flg.some(isSus);
    r.flg.forEach(f => flagSet.add(f));
    const fd = r.fs && dayOf(r.fs);
    r.age = fd == null ? Infinity : REFDAY - fd;
    // fallback ("general purpose") tags: classifier evidence when present, else the known id
    const tf = new Set(Array.isArray(r.tgf) ? r.tgf : []), af = new Set(Array.isArray(r.arf) ? r.arf : []);
    tf.add(FALLBACK_ID); af.add(FALLBACK_ID);
    r.fbTech = r.tg.filter(t => tf.has(t)); r.fbArea = r.ar.filter(t => af.has(t));
    r.spTech = r.tg.filter(t => !tf.has(t)); r.spArea = r.ar.filter(t => !af.has(t));
    r.anyStack = r.tg.length > 0 && r.spTech.length === 0;
    for (const g of ["tech", "area"]) {
      const tags = g === "tech" ? r.tg : r.ar;
      tags.forEach(t => { if (!(t in LABEL[g])) { LABEL[g][t] = t; TREES[g].push({ id: t, label: t, kids: [] }); } });
    }
    r.showArea = specific("area", r.spArea);
    r.showTech = specific("tech", r.spTech);
    r.showTech.sort((a, b) => (SLUG[b] ? 1 : 0) - (SLUG[a] ? 1 : 0)); // icons first, then labelled glyphs
    r.lfTech = leaves("tech", r.tg); r.lfArea = leaves("area", r.ar);
    const hit = (g, lf) => [...new Set(lf.flatMap(t => {
      if (t.endsWith(OTHER)) { const p = t.slice(0, -OTHER.length); otherCount[g][p] = (otherCount[g][p] || 0) + 1; return [t, p]; }
      return PARENT[g][t] ? [t, PARENT[g][t]] : [t];
    }))];
    r.hitTech = hit("tech", r.lfTech);
    r.hitArea = hit("area", r.lfArea);
    r.hay = [r.n, r.k, r.r, r.d, r.t, ...r.al, ...r.it.map(x => (x.n || "") + " " + (x.d || "")), ...r.tg.map(t => LABEL.tech[t]), ...r.ar.map(t => LABEL.area[t])].join(" ").toLowerCase();
    BY.set(r.k, r);
  });
  // add "Other <parent>" children so parent counts add up
  for (const g of ["tech", "area"]) TREES[g].forEach(n => {
    if (n.kids.length && otherCount[g][n.id]) {
      const id = n.id + OTHER;
      n.kids.push({ id, label: "Other " + n.label, kids: [], other: true });
      LABEL[g][id] = n.label; PARENT[g][id] = n.id;
    }
  });
  const leafIds = n => n.kids.length ? n.kids.map(k => k.id) : [n.id];

  // global counts (stable facet ordering)
  const GLOBAL = { tech: Object.create(null), area: Object.create(null) };
  R.forEach(r => { r.hitTech.forEach(t => GLOBAL.tech[t] = (GLOBAL.tech[t] || 0) + 1); r.hitArea.forEach(t => GLOBAL.area[t] = (GLOBAL.area[t] || 0) + 1); });
  for (const g of ["tech", "area"]) TREES[g].sort((a, b) => (a.id === FALLBACK_ID) - (b.id === FALLBACK_ID) || (GLOBAL[g][b.id] || 0) - (GLOBAL[g][a.id] || 0));

  // ---------------------------------------------------------------- favorites
  // Effective favorites = repo file (embedded as C.favorites) + local additions - local removals.
  // r.fv: 0 = not a favorite, 1 = saved in the repo file, 2 = local only (not exported yet).
  const FAVKEY = "cc-catalog:favorites:v1";
  const BYL = new Map(), ALIAS = new Map();
  R.forEach(r => {
    [r.k, r.r].forEach(x => { x = x.toLowerCase(); if (x && !BYL.has(x)) BYL.set(x, r); });
    r.al.forEach(a => { a = a.toLowerCase(); if (!ALIAS.has(a)) ALIAS.set(a, r); });
  });
  const findRec = id => { const x = String(id || "").trim().toLowerCase(); return BYL.get(x) || ALIAS.get(x) || null; };
  const todayStr = () => { const d = new Date(); return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0"); };
  const RAWFAV = [], REPOFAV = new Set();
  (C.favorites && Array.isArray(C.favorites.favorites) ? C.favorites.favorites : []).forEach(f => {
    if (!f || typeof f.id !== "string" || !f.id) return;
    const rec = findRec(f.id), key = rec ? rec.k : null;
    RAWFAV.push({ id: key || f.id, key, added: String(f.added || "").slice(0, 10), note: String(f.note || "").slice(0, 300) });
    if (key) REPOFAV.add(key);
  });
  const LOC = { added: Object.create(null), removed: new Set() };
  let STORE_OK = true, FAVN = 0;
  try {
    const j = JSON.parse(localStorage.getItem(FAVKEY) || "null");
    if (j && typeof j === "object") {
      if (j.added && typeof j.added === "object") for (const id in j.added) {
        const rec = findRec(id), v = j.added[id] || {};
        LOC.added[rec ? rec.k : id] = { added: String(v.added || "").slice(0, 10), note: String(v.note || "").slice(0, 300) };
      }
      if (Array.isArray(j.removed)) j.removed.forEach(id => { const rec = findRec(id); if (rec) LOC.removed.add(rec.k); });
    }
  } catch (e) { STORE_OK = false; }
  function saveLoc() {
    try { localStorage.setItem(FAVKEY, JSON.stringify({ version: 1, added: LOC.added, removed: [...LOC.removed] })); STORE_OK = true; } catch (e) { STORE_OK = false; }
    return STORE_OK;
  }
  function refreshFav() {
    FAVN = 0;
    R.forEach(r => { r.fv = REPOFAV.has(r.k) && !LOC.removed.has(r.k) ? 1 : LOC.added[r.k] ? 2 : 0; if (r.fv) FAVN++; });
  }
  refreshFav();
  function toggleFav(r) {
    const k = r.k;
    if (r.fv) { if (REPOFAV.has(k)) LOC.removed.add(k); delete LOC.added[k]; }
    else if (REPOFAV.has(k)) LOC.removed.delete(k);
    else LOC.added[k] = { added: todayStr(), note: "" };
    refreshFav();
    return saveLoc();
  }
  function favExport() {
    const seen = new Set(), out = [];
    const push = (id, added, note, key) => { const u = key || id; if (seen.has(u)) return; seen.add(u); out.push({ id, added, note }); };
    RAWFAV.forEach(f => { if (!(f.key && LOC.removed.has(f.key))) push(f.id, f.added, f.note, f.key); });
    for (const id in LOC.added) { const v = LOC.added[id]; push(id, v.added || todayStr(), v.note || "", id); }
    out.sort((a, b) => a.id < b.id ? -1 : a.id > b.id ? 1 : 0);
    return { version: 1, favorites: out };
  }
  const favPending = () => { let add = 0; for (const id in LOC.added) if (!REPOFAV.has(id) || LOC.removed.has(id)) add++; let rm = 0; LOC.removed.forEach(k => { if (REPOFAV.has(k)) rm++; }); return { add, rm }; };
  function favDownload() {
    const blob = new Blob([JSON.stringify(favExport(), null, 2) + "\n"], { type: "application/json" });
    const url = URL.createObjectURL(blob), a = h("a", { href: url, download: "favorites.json", style: "display:none" });
    document.body.append(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    toast("Exported favorites.json. Put it in the repo root, then commit.", true);
  }
  function favImport(file) {
    const rd = new FileReader();
    rd.onerror = () => toast("Could not read that file.", false);
    rd.onload = () => {
      let j; try { j = JSON.parse(String(rd.result)); } catch (e) { return toast("Not a valid favorites.json file.", false); }
      const list = j && Array.isArray(j.favorites) ? j.favorites : null;
      if (!list) return toast("Not a valid favorites.json file.", false);
      let n = 0, miss = 0;
      list.forEach(f => {
        const rec = f && typeof f.id === "string" ? findRec(f.id) : null;
        if (!rec) { miss++; return; }
        if (REPOFAV.has(rec.k)) { if (LOC.removed.delete(rec.k)) n++; }
        else if (!LOC.added[rec.k]) { LOC.added[rec.k] = { added: String(f.added || todayStr()).slice(0, 10), note: String(f.note || "").slice(0, 300) }; n++; }
      });
      refreshFav(); saveLoc(); update();
      toast("Imported " + plural(n, "favorite") + (miss ? " (" + miss + " not in the catalog)" : ""), true);
    };
    rd.readAsText(file);
  }

  // ---------------------------------------------------------------- facet groups
  const ADDED = [{ id: "1", label: "Since yesterday", days: 1 }, { id: "7", label: "Last 7 days", days: 7 }, { id: "30", label: "Last 30 days", days: 30 }];
  // The Flags group is inverted: S.sel.flag holds the flags that are HIDDEN (unchecked); empty = every flag included.
  const GROUPS = [
    { key: "fav", label: "Favorites", nodes: [{ id: "1", label: "Starred only", icon: "star", kids: [] }], tags: r => r.fv ? ["1"] : [], hits: r => r.fv ? ["1"] : [] },
    { key: "tier", label: "Tier", nodes: TIERS.map(t => ({ id: t.id, label: t.label, dot: t.id, desc: t.desc, kids: [] })), tags: r => [r.tr], hits: r => [r.tr] },
    { key: "flag", label: "Flags", chip: "Hiding", inverted: true, nodes: FLAGORDER.filter(f => f !== "star-anomaly" || flagSet.has(f)).map(f => ({ id: f, label: FLAGS[f].label, icon: FLAGS[f].icon, kids: [] })), tags: r => r.flg, hits: r => r.flg },
    { key: "lic", label: "License", nodes: LICORDER.map(k => ({ id: k, label: LIC[k].label, desc: LIC[k].help, two: true, ok: k === "ok", kids: [] })), tags: r => [r.lg], hits: r => [r.lg] },
    { key: "added", label: "New in", radio: true, nodes: ADDED.map(a => ({ ...a, kids: [] })) },
    { key: "type", label: "Type", nodes: TYPES.map(t => ({ id: t, label: TLABEL[t], icon: t, kids: [] })), tags: r => [r.t], hits: r => [r.t] },
    { key: "tech", label: "Technologies", tree: true, top: 8, nodes: TREES.tech, tags: r => r.lfTech, hits: r => r.hitTech },
    { key: "area", label: "Areas", tree: true, top: 8, nodes: TREES.area, tags: r => r.lfArea, hits: r => r.hitArea },
  ];
  const GROUP = Object.fromEntries(GROUPS.map(g => [g.key, g]));
  const ALLIDS = Object.fromEntries(GROUPS.map(g => [g.key, new Set(g.nodes.flatMap(n => [n.id, ...n.kids.map(k => k.id)]))]));
  const NODE = Object.fromEntries(GROUPS.map(g => [g.key, Object.fromEntries(g.nodes.flatMap(n => [[n.id, n], ...n.kids.map(k => [k.id, k])]))]));
  const HASHKEY = { flag: "hide" }; // URL parameter names that differ from the group key

  // sorts: "col" = the table header that shows it; the rest are applied by presets / the cards sort control
  const SORTS = [
    { id: "stars", label: "Stars", get: r => r.s, col: "stars" },
    { id: "t7", label: "7-day trend", get: r => r.t7, trend: true },
    { id: "t30", label: "30-day trend", get: r => r.t30, trend: true },
    { id: "pushed", label: "Last updated", get: r => r.p || null, col: "upd" },
    { id: "added", label: "Recently added", get: r => r.fs || null },
    { id: "name", label: "Name", get: r => r.nl, col: "name", asc: true },
    { id: "author", label: "Author", get: r => r.ownl || null, col: "au" },
    { id: "tier", label: "Tier", get: r => TIERS.length - 1 - TORD[r.tr], col: "tier" },
    { id: "type", label: "Type", get: r => r.t || null, col: "type" },
    { id: "license", label: "License", get: r => LICRANK[r.lg] + "|" + String(r.l || "").toLowerCase(), col: "lic" },
  ];
  const SORT = Object.fromEntries(SORTS.map(s => [s.id, s]));

  // ---------------------------------------------------------------- state
  const newSel = () => Object.fromEntries(GROUPS.filter(g => !g.radio).map(g => [g.key, new Set()]));
  const S = {
    view: "table", q: "", sort: "stars", dir: -1, added: 0, flagged: "demote", anyStack: false, watch: false, // watch: show the Watch tier when no tier is selected (default: hidden)
    sel: newSel(),
    open: new Set(), openCard: null,
  };
  let LIST = [], COUNTS = null, SUS_IN = 0, shown = 0;
  const PERF = window.__ccPerf = { updates: [] };

  // ---------------------------------------------------------------- filtering
  const wordsOf = q => q ? q.toLowerCase().split(/\s+/).filter(Boolean) : [];
  function passes(g, r, st) {
    if (g.radio) return !st.added || r.age < st.added;
    const sel = st.sel[g.key];
    if (g.inverted) { if (!sel.size) return true; const t = r.flg; for (let i = 0; i < t.length; i++) if (sel.has(t[i])) return false; return true; }
    if (!sel.size) return g.key === "tier" && !st.watch ? (r.tr !== "watch" || (st.sel.fav.size > 0 && r.fv > 0)) : true; // a favorite stays visible in the Watch tier when the Favorites filter is on
    const t = g.tags(r);
    for (let i = 0; i < t.length; i++) if (sel.has(t[i])) return true;
    return g.key === "tech" && st.anyStack && r.anyStack;
  }
  function addCounts(cnt, g, r) {
    const c = cnt[g.key];
    if (g.radio) { c.any = (c.any || 0) + 1; for (const a of ADDED) if (r.age < a.days) c[a.id] = (c[a.id] || 0) + 1; return; }
    const hs = g.hits(r);
    for (let i = 0; i < hs.length; i++) c[hs[i]] = (c[hs[i]] || 0) + 1;
  }
  function sortList(res) {
    const s = SORT[S.sort], dir = S.dir, demote = s.trend && S.flagged === "demote";
    res.sort((a, b) => {
      if (demote && a.sus !== b.sus) return a.sus ? 1 : -1;
      const x = s.get(a), y = s.get(b);
      if (x == null || y == null) { if (x != null) return -1; if (y != null) return 1; }
      else { const c = (x < y ? -1 : x > y ? 1 : 0) * dir; if (c) return c; }
      return ((b.s ?? -1) - (a.s ?? -1)) || a.i - b.i;
    });
  }
  function compute() {
    const words = wordsOf(S.q);
    const res = [], cnt = {};
    GROUPS.forEach(g => (cnt[g.key] = Object.create(null)));
    outer: for (let i = 0; i < R.length; i++) {
      const r = R[i];
      for (let w = 0; w < words.length; w++) if (!r.hay.includes(words[w])) continue outer;
      let fails = 0, fg = null;
      for (let k = 0; k < GROUPS.length; k++) if (!passes(GROUPS[k], r, S)) { fails++; fg = GROUPS[k]; if (fails > 1) break; }
      if (fails === 0) { res.push(r); for (let k = 0; k < GROUPS.length; k++) addCounts(cnt, GROUPS[k], r); }
      else if (fails === 1) addCounts(cnt, fg, r);
    }
    sortList(res);
    return { res, cnt };
  }
  // count matches for an arbitrary state (zero-result recovery, search suggestions)
  function countFor(st) {
    const words = wordsOf(st.q);
    let n = 0;
    outer: for (let i = 0; i < R.length; i++) {
      const r = R[i];
      for (let w = 0; w < words.length; w++) if (!r.hay.includes(words[w])) continue outer;
      for (let k = 0; k < GROUPS.length; k++) if (!passes(GROUPS[k], r, st)) continue outer;
      n++;
    }
    return n;
  }
  const cloneState = () => ({ q: S.q, added: S.added, flagged: S.flagged, anyStack: S.anyStack, watch: S.watch, sel: Object.fromEntries(Object.entries(S.sel).map(([k, v]) => [k, new Set(v)])) });

  // ---------------------------------------------------------------- tier reasons -> plain language
  function reasonLines(r) {
    const out = [];
    const ok = (t) => out.push([true, t]), no = (t) => out.push([false, t]);
    for (const raw of r.tx) {
      let s = String(raw).trim(), fail = false;
      if (/^fails:\s*/i.test(s)) { fail = true; s = s.replace(/^fails:\s*/i, ""); }
      let m;
      if ((m = /^authored by anthropic/i.exec(s))) ok("Published by Anthropic");
      else if ((m = /listed in anthropic (official|community) marketplace/i.exec(s))) ok("Listed in Anthropic's " + m[1].toLowerCase() + " marketplace");
      else if ((m = /^stars>=(\d+)\s*\((-?\d+)\)/.exec(s))) fail ? no("Only " + nf(+m[2]) + " stars (needs " + nf(+m[1]) + "+)") : ok("Over " + nf(+m[1]) + " stars");
      else if ((m = /^age>=(\d+)d\s*\((-?\d+)\)/.exec(s))) fail ? no("Repo is only " + ageText(Math.max(0, +m[2])) + " old (needs " + m[1] + "+ days)") : ok("Repo is " + ageText(+m[2]) + " old");
      else if ((m = /^pushed<=(\d+)d\s*\((-?\d+)\)/.exec(s))) {
        const d = Math.max(0, +m[2]);
        fail ? no("No update in " + ageText(d) + " (needs one within " + m[1] + " days)") : ok("Updated in the last " + m[1] + " days");
      }
      else if ((m = /^license\s*\((.*)\)/.exec(s))) {
        const l = m[1];
        if (fail) no(l === "None" || !l ? "No license" : l === "NOASSERTION" ? "License not recognized" : "License " + l + " not accepted");
        else ok("Has an open-source license");
      }
      else if (/^not archived/.test(s)) fail ? no("Archived") : ok("Not archived");
      else if (/^no star-anomaly/.test(s)) fail ? no("Suspicious star growth") : ok("No suspicious star growth");
      else if ((m = /^in curated list \((.*)\)/.exec(s))) ok("Listed in " + m[1]);
      else if (/^corroboration:/.test(s)) {
        s.replace(/^corroboration:\s*/, "").split(/,\s*/).forEach(p => {
          let k;
          if ((k = /^forks>=(\d+)\s*\((\d+)\)/.exec(p))) ok(nf(+k[2]) + " forks");
          else if ((k = /found by (\d+) independent sources/.exec(p))) ok("Found by " + k[1] + " independent sources");
          else if (/owner is organization/i.test(p)) ok("Owned by an organization");
          else if (p) ok(p);
        });
      }
      else if (/^registry namespace verified/i.test(s)) no("In the official MCP Registry, but no public source code to judge");
      else if (/^no corroborating signal/.test(s)) no("No independent signal yet (curated list, forks, several sources or an organization owner)");
      else if (/^curated but stale\/archived/.test(s)) no("In a curated list, but stale or archived");
      else if (/^stale\/archived/.test(s)) no("Stale or archived");
      else (fail ? no : ok)(s);
    }
    return out;
  }
  function reasonList(r, two) {
    const lines = reasonLines(r);
    if (!lines.length) return null;
    return h("ul", { class: "reasons" + (two ? " two" : "") }, lines.map(([good, t]) => h("li", { class: (good ? "ok" : "no") + (two && t.length > 34 ? " wide" : "") }, ic(good ? "check" : "x"), h("span", null, h("span", { class: "sr" }, good ? "Pass: " : "Fail: "), t))));
  }
  const rankLine = () => h("p", { class: "rank" }, "Tiers rank: ", TIERS.map((t, i) => [i ? h("span", { class: "gt", "aria-hidden": "true" }, " › ") : null, h("span", { class: "tn tc-" + t.id }, t.label)]), h("span", { class: "sr" }, ", highest trust first"));

  // ---------------------------------------------------------------- pieces
  function tierBadge(r) {
    return h("button", { type: "button", class: "tier tier-" + r.tr, "data-tip": "tier", "data-act": "tip", "aria-label": "Tier: " + TIER[r.tr].label + ". Show why." }, TIER[r.tr].label);
  }
  function typeTag(r, withItems) {
    return h("span", { class: "type", "data-tt": (TLABEL[r.t] || r.t || "Unknown type") + (r.nit > 1 ? " · " + plural(r.nit, "item") : "") },
      ic(TYPES.includes(r.t) ? r.t : "collection"), h("span", { class: "tt" }, TLABEL[r.t] || r.t || "—"),
      withItems && r.nit > 1 ? h("span", { class: "ni", "aria-label": plural(r.nit, "item") }, "· " + r.nit) : null);
  }
  function flagPills(r) {
    return r.pills.map(f => {
      const F = FLAGS[f] || {};
      const cls = "flag" + (F.hi ? " hi" : F.cls ? " " + F.cls : "");
      const tip = f === "unmaintained" && r.pd != null ? "No push for " + ageText(r.pd) + "." : F.tip || "";
      return h("button", { type: "button", class: cls, "data-tip": "flag", "data-act": "tip", "data-flag": f, "aria-label": flagLabel(f) + ". " + tip }, ic(F.icon || "flag"), h("span", null, F.short || flagLabel(f)));
    });
  }
  // full description of one flag, shared by the warning popover and the details panel
  function flagFull(r, f) {
    const F = FLAGS[f] || {};
    if ((f === "paid-api" || f === "api-key") && r.dpe) return (FLAGS[f] || {}).tip + " Evidence: " + r.dpe + ".";
    if (f === "unscanned" && r.sec && r.sec.at) return "Changed since its last security scan on " + sdate(r.sec.at) + " (last push " + sdate(r.p) + "). It is rescanned on the next nightly run if it is still in the scan scope; until then that result may be out of date.";
    return f === "unmaintained" && r.p ? "Last push " + sdate(r.p) + " (" + ageText(r.pd) + " before this catalog was built). Bugs and breaking changes in Claude Code may go unfixed." : F.tip || "Flagged by the catalog's checks.";
  }
  function flagList(r) {
    return h("ul", { class: "flagx" }, r.flg.map(f => {
      const F = FLAGS[f] || {};
      return h("li", null, h("span", { class: "flag" + (F.hi ? " hi" : F.cls ? " " + F.cls : "") }, ic(F.icon || "flag"), F.short || flagLabel(f)), h("span", null, flagFull(r, f)));
    }));
  }
  // table: one warning icon per flagged repo; its popover lists every issue in full
  function warnBtn(r) {
    if (!r.pills.length) return null;
    const sev = r.pills.includes("security-high") ? " hi" : r.pills.every(f => FLAGS[f] && FLAGS[f].cls) ? " mute" : "";
    return h("button", { type: "button", class: "warnb" + sev, "data-tip": "warn", "data-act": "tip", "aria-label": plural(r.flg.length, "issue") + ": " + r.flg.map(flagLabel).join(", ") + ". Show details." }, ic("warn"));
  }
  function favTitle(r) { return r.fv === 1 ? "Favorite, saved in the repo file. Click to remove." : r.fv === 2 ? "Favorite, local only (not exported yet). Click to remove." : "Add to favorites"; }
  function paintFav(b, r) {
    b.setAttribute("aria-pressed", String(r.fv > 0));
    b.setAttribute("aria-label", "Favorite " + r.n + (r.fv === 2 ? " (local only, not exported yet)" : ""));
    b.title = favTitle(r);
    b.dataset.s = r.fv === 1 ? "repo" : r.fv === 2 ? "local" : "";
  }
  function favBtn(r) {
    const b = h("button", { type: "button", class: "fav", "data-act": "fav" }, ic("star"));
    paintFav(b, r);
    return b;
  }
  function nameLink(r) {
    return r.url
      ? h("a", { class: "nm", href: r.url, target: "_blank", rel: "noopener noreferrer", "data-tip": "desc" }, r.n)
      : h("span", { class: "nm", tabindex: "0", "data-tip": "desc" }, r.n);
  }
  // facet shortcuts: area chips and technology glyphs filter by that facet; a second click removes it
  const facetIds = (g, id) => { const n = NODE[g][id]; return n ? leafIds(n) : [id]; };
  const facetOn = (g, id) => { const sel = S.sel[g], ids = facetIds(g, id); return ids.length > 0 && ids.every(x => sel.has(x)); };
  const techLabel = t => (LABEL.tech[t] || t).replace(/\s*\(stack-agnostic\)/, "");
  function facetBtn(g, id, cls, label, ...kids) {
    const on = facetOn(g, id), what = g === "tech" ? "technology" : "area";
    const tt = (on ? "Remove filter: " : "Filter by ") + label;
    const b = h("button", { type: "button", class: cls + (on ? " on" : ""), "data-act": "facet", "data-g": g, "data-fid": id, "data-tt": tt, "data-label": label, "aria-pressed": String(on), "aria-label": (on ? "Remove " + what + " filter " : "Filter by " + what + " ") + label }, ...kids);
    return b;
  }
  function techGlyph(t) {
    return SLUG[t] ? h("img", { class: "ti", src: "icons/" + SLUG[t] + ".svg", alt: "", width: "16", height: "16", decoding: "async", draggable: "false" }) : ic("box");
  }
  function techBtn(t) {
    const label = techLabel(t);
    return SLUG[t] ? facetBtn("tech", t, "tbtn", label, techGlyph(t))
      : facetBtn("tech", t, "tfb", label, ic("box"), h("span", { class: "tl" }, label));
  }
  function areaBtn(a) { return facetBtn("area", a, "tag", LABEL.area[a], LABEL.area[a]); }
  const plusEl = () => h("button", { type: "button", class: "tmore", hidden: true, "data-act": "openfrom" });
  function areasEl(r) {
    const box = h("div", { class: "tags", "data-fit": "" });
    if (!r.showArea.length) {
      box.append(h("span", { class: "dash", tabindex: r.ar.length ? "0" : null, "data-tt": r.ar.length ? "General purpose: no specific area" : "Not classified yet", "aria-label": r.ar.length ? "General purpose" : "Not classified" }, "—"));
      return box;
    }
    r.showArea.forEach(a => box.append(areaBtn(a)));
    box.append(plusEl());
    return box;
  }
  function techsEl(r) {
    const box = h("div", { class: "techs", "data-fit": "" });
    if (!r.showTech.length) {
      box.append(h("span", { class: "dash", tabindex: r.tg.length ? "0" : null, "data-tt": r.anyStack ? "Any stack: no specific technology, works with any stack" : "Not classified yet", "aria-label": r.anyStack ? "Any stack" : "Not classified" }, "—"));
      return box;
    }
    r.showTech.forEach(t => box.append(techBtn(t)));
    box.append(plusEl());
    return box;
  }
  // fit-based "+N": hide whole chips that do not fit (no mid-word clipping). Widths come from canvas text
  // metrics, so the only layout read is each box's width.
  const measureCtx = document.createElement("canvas").getContext("2d");
  const textW = Object.create(null);
  function tw(text, font) {
    const key = font + "|" + text;
    let w = textW[key];
    if (w == null) { measureCtx.font = font; w = textW[key] = measureCtx.measureText(text).width; }
    return w;
  }
  let FONT_TAG = "", FONT_TFB = "";
  function fonts() {
    if (FONT_TAG) return;
    const ff = getComputedStyle(document.body).fontFamily;
    FONT_TAG = "11.5px " + ff; FONT_TFB = "11px " + ff;
  }
  function itemWidth(el) {
    if (el.classList.contains("tbtn")) return 24;
    if (el.classList.contains("tfb")) return Math.ceil(tw(el.textContent, FONT_TFB)) + 28;
    return Math.ceil(tw(el.dataset.full || el.textContent, FONT_TAG)) + 16;
  }
  function fitTags(scope) {
    fonts();
    const boxes = [...scope.querySelectorAll("[data-fit]")];
    const reads = boxes.map(b => ({ b, w: b.clientWidth })).filter(x => x.w > 0);
    const GAP = 4;
    reads.forEach(({ b, w }) => {
      const kids = [...b.children], plus = kids[kids.length - 1];
      if (!plus || !plus.classList.contains("tmore")) return;
      const items = kids.slice(0, -1);
      const textOf = c => c.classList.contains("tfb") ? c.querySelector(".tl") : c; // area chip, or the label of an icon-less technology
      items.forEach(c => {
        c.hidden = false;
        const t = textOf(c);
        if (t && t.dataset.full) { t.textContent = t.dataset.full; delete t.dataset.full; c.classList.remove("cut"); }
      });
      plus.hidden = true;
      const ws = items.map(itemWidth);
      const total = ws.reduce((a, x) => a + x, 0) + GAP * (items.length - 1);
      if (total <= w) return;
      // greedy, in display order: keep every item that fits whole (room is reserved for the "+N" button)
      const reserve = items.length === 1 ? 0 : GAP + 8 + Math.ceil(tw("+" + items.length, FONT_TAG));
      let used = 0;
      const keep = items.map((c, i) => { const nx = used + (used ? GAP : 0) + ws[i]; if (nx + reserve <= w) { used = nx; return true; } return false; });
      if (!keep.some(Boolean) && (items[0].classList.contains("tag") || items[0].classList.contains("tfb"))) {
        // last resort: the first label alone is too wide, so shorten it at a word boundary (full label in the tooltip)
        const c = items[0], t = textOf(c), full = t.textContent, room = w - reserve - 16 - (t === c ? 0 : 22) - tw("…", FONT_TAG);
        const words = full.split(" ");
        let txt = "";
        for (let i = 0; i < words.length; i++) { const nx = (txt ? txt + " " : "") + words[i]; if (tw(nx, FONT_TAG) > room) break; txt = nx; }
        if (!txt) { let n = words[0].length - 1; while (n >= 3 && tw(words[0].slice(0, n), FONT_TAG) > room) n--; if (n >= 3) txt = words[0].slice(0, n); } // first word too long: cut mid-word, keep at least 3 letters
        if (txt) { t.dataset.full = full; t.textContent = txt.replace(/[\s&,]+$/, "") + "…"; c.classList.add("cut"); keep[0] = true; }
        else if (t !== c) { t.dataset.full = full; t.textContent = ""; c.classList.add("cut"); keep[0] = true; } // icon-less technology: glyph only, name in the tooltip
      }
      const rest = items.filter((c, i) => !keep[i]);
      if (!rest.length) return;
      rest.forEach(c => (c.hidden = true));
      plus.hidden = false;
      plus.textContent = "+" + rest.length;
      const names = rest.map(c => c.dataset.label || c.dataset.full || c.textContent);
      plus.dataset.tt = names.join(", ") + " · open details";
      plus.setAttribute("aria-label", rest.length + " more: " + names.join(", ") + ". Open details");
    });
  }
  function trendBtn(r, both) {
    const open = isOpen(r);
    const label = "Stars " + (r.t7 == null ? "trend not available" : signed(r.t7) + " in 7 days") + (r.t30 == null ? "" : ", " + signed(r.t30) + " in 30 days") + ". " + (open ? "Hide" : "Show") + " star history and details for " + r.n;
    return h("button", { class: "trend", type: "button", "data-act": "expand", "data-from": "trend", "aria-expanded": String(open), "aria-label": label },
      h("span", { class: "v t7 " + trendCls(r.t7) }, signed(r.t7)), both ? h("span", { class: "v t30 " + trendCls(r.t30) }, signed(r.t30)) : null);
  }
  function expandBtn(r, open, ctrl) {
    return h("button", { class: "exp", type: "button", "data-act": "expand", "aria-expanded": String(open), "aria-controls": open ? ctrl : null, "aria-label": "Details for " + r.n }, ic("chev"));
  }
  // r.ld: sources of a license declared without a LICENSE file (plugin.json, README...); r.l "unclear": declarations disagree (r.lb)
  const licText = r => r.l === "unclear" ? "Unclear" : r.lg === "none" ? "None" : r.l === "NOASSERTION" ? "Custom" : r.l;
  function licTip(r) {
    const g = r.lg;
    if (r.l === "unclear") return "Declared licenses disagree (" + (r.lb || r.ld) + ") and there is no LICENSE file: ask the author before reusing";
    const base = g === "ok" ? r.l + " · Commercial use OK" : g === "copyleft" ? r.l + " · Copyleft: commercial use with obligations" : g === "none" ? "No license: not legally reusable" : (r.l === "NOASSERTION" ? "Unrecognized license" : r.l) + ": read the LICENSE file before reusing";
    return r.ld ? base + ". Declared in " + r.ld + ", no LICENSE file: there is no copyright notice to keep, so credit the author when reusing" : base;
  }
  function licEl(r) {
    const g = r.lg, tip = licTip(r);
    const cls = { ok: "ok", copyleft: "cl", none: "none", other: "oth" }[g];
    const mark = g === "ok" ? ic("check") : g === "copyleft" ? ic("share") : g === "none" ? ic("minus") : ic("q");
    return h("span", { class: "lic " + cls, tabindex: "0", "data-tt": tip, "aria-label": "License: " + tip }, h("span", { class: "lm", "aria-hidden": "true" }, mark),
      h("span", { class: "lt" }, licText(r), r.ld && r.l !== "unclear" ? h("span", { class: "ldc" }, " declared") : null));
  }
  function updEl(r) {
    const pd = r.pd;
    return h("span", { class: "upd" + (pd != null && pd > 180 ? " dead" : pd != null && pd > 90 ? " old" : ""), "data-tt": r.p ? "Last push " + sdate(r.p) : "Last push unknown" }, pd == null ? "—" : relDays(pd));
  }
  function hl(text, words) {
    // highlight matched search words (DOM nodes only, no HTML parsing)
    if (!words.length || !text) return [text];
    const lower = text.toLowerCase(), marks = [];
    words.forEach(w => { let i = 0; while (w && (i = lower.indexOf(w, i)) !== -1) { marks.push([i, i + w.length]); i += w.length; } });
    if (!marks.length) return [text];
    marks.sort((a, b) => a[0] - b[0]);
    const out = []; let pos = 0;
    for (const [a, b] of marks) { if (b <= pos) continue; const s = Math.max(a, pos); if (s > pos) out.push(text.slice(pos, s)); out.push(h("mark", null, text.slice(s, b))); pos = b; }
    if (pos < text.length) out.push(text.slice(pos));
    return out;
  }

  // ---------------------------------------------------------------- history
  const NSH = C.history_shards || 16;
  const SHARDS = new Map();
  function shardOf(repo) { let s = 0; for (let i = 0; i < repo.length; i++) s += repo.charCodeAt(i); return s % NSH; }
  function loadShard(n) {
    if (!SHARDS.has(n)) {
      const p = location.protocol === "file:" ? Promise.resolve({ status: "file" })
        : fetch("history/" + String(n).padStart(2, "0") + ".json")
          .then(res => res.ok ? res.json() : res.status === 404 ? {} : Promise.reject(res.status))
          .then(d => ({ status: "ok", data: d && typeof d === "object" && !Array.isArray(d) ? d : {} }), () => { SHARDS.delete(n); return { status: "error" }; });
      SHARDS.set(n, p);
    }
    return SHARDS.get(n);
  }
  function cleanSeries(raw) {
    if (!Array.isArray(raw)) return null;
    const pts = [];
    for (const p of raw) {
      if (!Array.isArray(p) || !isNum(p[1])) continue;
      const t = Date.parse(String(p[0]).slice(0, 10) + "T00:00:00Z");
      if (!isNaN(t)) pts.push({ t, v: p[1] });
    }
    pts.sort((a, b) => a.t - b.t);
    return pts.length >= 2 ? pts : null;
  }
  function loadSeries(repo) {
    return loadShard(shardOf(repo)).then(s => s.status !== "ok" ? s
      : { status: "ok", pts: Object.prototype.hasOwnProperty.call(s.data, repo) ? cleanSeries(s.data[repo]) : null });
  }
  function niceStep(range, n) {
    const raw = range / n, p = Math.pow(10, Math.floor(Math.log10(raw))), f = raw / p;
    return (f <= 1 ? 1 : f <= 2 ? 2 : f <= 2.5 ? 2.5 : f <= 5 ? 5 : 10) * p;
  }
  const RO = new ResizeObserver(entries => entries.forEach(e => { if (e.target.isConnected) drawChart(e.target); else RO.unobserve(e.target); }));
  function drawChart(el) {
    const pts = el._pts, r = el._r;
    if (!pts) return;
    const W = Math.floor(el.clientWidth), H = Math.floor(el.clientHeight);
    if (W < 80 || H < 80 || (el._w === W && el._h === H)) return;
    el._w = W; el._h = H;
    let lo = Infinity, hi = -Infinity; pts.forEach(p => { lo = Math.min(lo, p.v); hi = Math.max(hi, p.v); });
    const step = niceStep(Math.max(1, hi - lo), 4);
    const y0 = Math.floor(lo / step) * step, y1 = Math.max(y0 + step, Math.ceil(hi / step) * step);
    const ticks = []; for (let v = y0; v <= y1 + 1e-9; v += step) ticks.push(v);
    const LP = 6 + Math.max(...ticks.map(v => fmt(v).length)) * 6.6, T = 8, B = 22, cw = W - LP, ch = H - T - B;
    const t0 = pts[0].t, t1 = pts[pts.length - 1].t;
    const X = t => LP + (t1 === t0 ? cw : ((t - t0) / (t1 - t0)) * cw);
    const Y = v => T + ch - ((v - y0) / (y1 - y0)) * ch;
    const svg = sv("svg", { width: W, height: H, role: "img", "aria-label": "Star history for " + r.n + ": " + fmt(pts[0].v) + " to " + fmt(pts[pts.length - 1].v) + " stars, " + fdate(t0) + " to " + fdate(t1) });
    const txt = (x, y, s, anchor) => { const t = sv("text", { x, y }); if (anchor) t.setAttribute("text-anchor", anchor); t.textContent = s; return t; };
    const b0 = Math.max(t0, t1 - 30 * DAY); // last-30-days band
    if (t1 - t0 > 45 * DAY) svg.append(sv("rect", { class: "band", x: X(b0), y: T, width: X(t1) - X(b0), height: ch }));
    ticks.forEach((v, i) => { const y = Math.round(Y(v)) + 0.5; svg.append(sv("line", { class: "grid" + (i === 0 ? " base" : ""), x1: LP, x2: W, y1: y, y2: y }), txt(LP - 8, y + 4, fmt(v), "end")); });
    const d = new Date(t0); d.setUTCDate(1); d.setUTCMonth(d.getUTCMonth() + 1);
    const months = []; for (let t = d.getTime(); t <= t1;) { months.push(t); const n = new Date(t); n.setUTCMonth(n.getUTCMonth() + 1); t = n.getTime(); }
    const every = Math.max(1, Math.ceil(months.length / Math.max(2, Math.floor(cw / 70))));
    if (!months.length) { svg.append(txt(LP, H - 5, fdate(t0)), txt(W, H - 5, fdate(t1), "end")); }
    months.forEach((t, i) => {
      if (i % every) return;
      const x = Math.round(X(t)) + 0.5, dt = new Date(t);
      svg.append(sv("line", { class: "tick", x1: x, x2: x, y1: T + ch, y2: T + ch + 4 }));
      svg.append(txt(x, H - 5, MONTHS[dt.getUTCMonth()] + (dt.getUTCMonth() === 0 || i === 0 ? " '" + String(dt.getUTCFullYear()).slice(2) : ""), "middle"));
    });
    const line = pts.map((p, i) => (i ? "L" : "M") + X(p.t).toFixed(1) + " " + Y(p.v).toFixed(1)).join("");
    svg.append(sv("path", { class: "a", d: line + "L" + X(t1).toFixed(1) + " " + (T + ch) + "L" + X(t0).toFixed(1) + " " + (T + ch) + "Z" }), sv("path", { class: "l", d: line }),
      sv("circle", { class: "end", cx: X(t1).toFixed(1), cy: Y(pts[pts.length - 1].v).toFixed(1), r: 3.5 }));
    const cross = sv("line", { class: "cross", y1: T, y2: T + ch, visibility: "hidden" });
    const dot = sv("circle", { class: "hov", r: 4, visibility: "hidden" });
    const hit = sv("rect", { x: LP, y: 0, width: cw, height: H, fill: "transparent" });
    svg.append(cross, dot, hit);
    const ro = el._ro;
    const idle = () => { const last = pts[pts.length - 1]; ro.replaceChildren(h("b", null, nf(last.v) + " stars"), h("span", null, "now · hover or use ← → for any day")); };
    const show = (p, k) => {
      const px = Math.round(X(p.t)) + 0.5;
      cross.setAttribute("x1", px); cross.setAttribute("x2", px); cross.setAttribute("visibility", "visible");
      dot.setAttribute("cx", X(p.t)); dot.setAttribute("cy", Y(p.v)); dot.setAttribute("visibility", "visible");
      const prev = pts[Math.max(0, k - 1)], dlt = p.v - prev.v;
      ro.replaceChildren(h("b", null, nf(p.v) + " stars"), h("span", null, fdate(p.t)), dlt ? h("span", { class: trendCls(dlt) }, signed(dlt) + " vs previous point") : null);
    };
    hit.addEventListener("pointermove", e => {
      const t = t0 + ((e.clientX - svg.getBoundingClientRect().left - LP) / cw) * (t1 - t0);
      let k = 0; for (let i = 1; i < pts.length; i++) if (Math.abs(pts[i].t - t) < Math.abs(pts[k].t - t)) k = i;
      el._k = k; show(pts[k], k);
    });
    hit.addEventListener("pointerleave", () => { cross.setAttribute("visibility", "hidden"); dot.setAttribute("visibility", "hidden"); idle(); });
    el.onkeydown = e => {
      if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
      e.preventDefault();
      el._k = Math.max(0, Math.min(pts.length - 1, (el._k ?? pts.length - 1) + (e.key === "ArrowLeft" ? -1 : 1)));
      show(pts[el._k], el._k);
    };
    el.onblur = () => { cross.setAttribute("visibility", "hidden"); dot.setAttribute("visibility", "hidden"); idle(); };
    idle();
    el.replaceChildren(svg);
  }

  // ---------------------------------------------------------------- install
  function installSteps(hint) {
    if (!hint) return [];
    if (hint[0] === "#") return [{ kind: "hint", text: hint.replace(/^#\s*/, "") }];
    const m = /^see\s+(\S+)/i.exec(hint);
    if (m) return [{ kind: "link", url: safeUrl(m[1]) }];
    if (/^copy (skills|agents|commands|files) from /i.test(hint)) return [{ kind: "hint", text: hint }];
    return hint.split(/\n|\s+;\s+/).map(s => s.trim()).filter(Boolean).map(s => ({ kind: "cmd", text: s }));
  }
  function viaOf(steps, r) {
    let mkt = null, src = null;
    steps.forEach(s => {
      if (s.kind !== "cmd") return;
      let m;
      if ((m = /\/plugin install \S+@(\S+)/.exec(s.text))) mkt = m[1];
      if ((m = /\/plugin marketplace add (\S+)/.exec(s.text))) src = m[1];
    });
    const key = (src || "") + " " + (mkt || "");
    if (/claude-plugins-official/.test(key)) return { rank: 0, label: "via Official marketplace" };
    if (/claude-plugins-community|claude-community/.test(key)) return { rank: 2, label: "via Community marketplace" };
    if (src && r.r && src.toLowerCase() === r.r.toLowerCase()) return { rank: 1, label: "via this repo's marketplace" };
    if (src || mkt) return { rank: 3, label: "via " + (mkt || src) + " marketplace" };
    return null;
  }
  function stepsEl(r, it, steps) {
    const out = [];
    steps.forEach(s => {
      if (s.kind === "cmd") {
        const b = h("button", { class: "copy", type: "button", "data-act": "copy", "aria-label": "Copy install command for " + (it.n || r.n) + ": " + s.text }, ic("copy"), h("span", { class: "cl" }, "Copy"));
        b.dataset.copy = s.text;
        out.push(h("div", { class: "cmdbox" }, h("code", null, s.text), b));
      }
      if (s.kind === "hint") out.push(h("div", { class: "hintx" }, s.text));
      if (s.kind === "link") { const url = s.url || r.url; if (url) out.push(h("a", { class: "readme", href: url, target: "_blank", rel: "noopener noreferrer" }, ic("ext"), "See the README for install steps")); }
    });
    if (!steps.length) out.push(h("div", { class: "hintx" }, "No install hint"));
    return out;
  }
  function itemEl(r, it, showHead, showVia) {
    const steps = installSteps(it.i), via = viaOf(steps, r);
    return h("li", null,
      showHead ? h("div", { class: "in" }, h("b", null, it.n || r.n), h("span", null, TLABEL[it.t] || it.t || ""), showVia && via ? h("span", { class: "via" + (via.rank === 0 ? " rec" : "") }, via.label + (via.rank === 0 ? " · recommended" : "")) : null) : null,
      it.d && showHead ? h("div", { class: "id" }, it.d) : null,
      stepsEl(r, it, steps));
  }
  function installEl(r) {
    // group same-named items (one plugin listed by several marketplaces): best path first, alternates folded
    const groups = new Map();
    r.it.forEach(it => { const k = (it.n || r.n).toLowerCase(); if (!groups.has(k)) groups.set(k, []); groups.get(k).push(it); });
    const head = r.it.length > 1 || r.it.some(it => it.n && it.n !== r.n);
    const lis = [...groups.values()].map(list => {
      if (list.length === 1) return itemEl(r, list[0], head, r.it.length > 1);
      const ranked = list.map(it => ({ it, v: viaOf(installSteps(it.i), r) })).sort((a, b) => (a.v ? a.v.rank : 9) - (b.v ? b.v.rank : 9));
      const li = itemEl(r, ranked[0].it, true, true);
      li.append(h("details", { class: "alt" }, h("summary", null, "Other ways to install (" + (ranked.length - 1) + ")"),
        h("ul", { class: "items" }, ranked.slice(1).map(x => itemEl(r, x.it, true, true)))));
      return li;
    });
    const ul = h("ul", { class: "items" }, lis.slice(0, 2));
    if (lis.length > 2) ul.append(h("li", { class: "morei" }, h("details", { class: "alt" }, h("summary", null, "Show " + plural(lis.length - 2, "more item")), h("ul", { class: "items" }, lis.slice(2)))));
    if (r.nit > r.it.length) ul.append(h("li", { class: "morei" }, "+ " + plural(r.nit - r.it.length, "more item") + " in the repository"));
    return ul;
  }

  // ---------------------------------------------------------------- unified detail panel (chevron and trend open the same panel)
  function chartBlock(r, dp) {
    const sec = h("section", { class: "dp-chart", "aria-label": "Star history" });
    const head = h("div", { class: "ch-head" }, h("h3", null, "Star history"));
    const rng = h("span", { class: "rng" });
    head.append(rng);
    if (r.t7 != null || r.t30 != null) head.append(h("div", { class: "deltas" },
      h("span", { class: "delta" }, h("span", { class: trendCls(r.t7) }, signed(r.t7)), h("i", null, "7 days")),
      h("span", { class: "delta", "data-tt": "The shaded band on the chart is the last 30 days", tabindex: "0" }, h("span", { class: "sw", "aria-hidden": "true" }), h("span", { class: trendCls(r.t30) }, signed(r.t30)), h("i", null, "30 days"))));
    const readout = h("div", { class: "readout", "aria-live": "polite" });
    const chart = h("div", { class: "chart" }, h("div", { class: "skel", role: "status", "aria-label": "Loading star history" }));
    sec.append(head, readout, chart);
    (r.r ? loadSeries(r.r) : Promise.resolve({ status: "ok", pts: null })).then(res => {
      if (res.status === "ok" && res.pts) {
        const pts = res.pts;
        rng.textContent = fdate(pts[0].t) + " – " + fdate(pts[pts.length - 1].t) + " · " + plural(pts.length, "point");
        chart._pts = pts; chart._r = r; chart._ro = readout; chart.tabIndex = 0;
        chart.setAttribute("aria-label", "Star history chart. Use the left and right arrow keys to read each day.");
        chart.textContent = "";
        RO.observe(chart); drawChart(chart);
        return;
      }
      readout.remove();
      const msg = res.status === "file"
        ? [h("b", null, "History needs a local server"), h("span", null, "Run ", h("code", null, "python -m http.server -d site"), " and open localhost:8000.")]
        : res.status === "error"
          ? [h("b", null, "History could not be loaded"), h("span", null, "The history file failed to download. Try again later.")]
          : [h("b", null, "No star history yet"), h("span", null, "History is backfilled gradually by the daily build.")];
      chart.replaceChildren(h("div", { class: "hstate" }, ic("clock"), h("div", null, ...msg)));
      // no history: a slim note instead of an empty chart; trust moves under it so neither column runs empty
      if (dp && !dp.classList.contains("nohist")) {
        dp.classList.add("nohist");
        const trust = dp.querySelector(".dp-trust");
        if (trust) sec.after(trust);
      }
    });
    return sec;
  }
  function trustBlock(r) {
    const sec = h("section", { class: "dp-sec dp-trust", "aria-label": "Trust summary" }, h("h3", null, "Why it's " + TIER[r.tr].label, h("span", { class: "sub" }, TIER[r.tr].long)));
    const lines = reasonLines(r);
    const list = reasonList(r, lines.length >= 4);
    sec.append(list || h("p", { class: "nd small" }, TIER[r.tr].desc));
    if (r.flg.length) sec.append(flagList(r));
    const s = r.sec;
    if (s && s.lv !== "ok") {
      const n = isNum(s.n) ? s.n : (s.f || []).length, fs = Array.isArray(s.f) ? s.f : [];
      sec.append(h("div", { class: "findings" + (s.lv === "high" ? " hi" : ""), role: "group", "aria-label": "Security findings" },
        h("div", { class: "fsum" }, ic("shield"), h("b", null, s.lv === "high" ? "High-risk patterns found" : "Patterns worth reviewing"), h("span", { class: "nd" }, plural(n, "finding") + (s.at ? " · static scan " + sdate(s.at) : "") + " · not executed")),
        h("ul", null, fs.map(f => h("li", null,
          h("div", { class: "fh" }, h("span", { class: "sev " + (/^(high|critical)$/i.test(f.s) ? "hi" : f.s === "info" ? "info" : "") }, String(f.s || "note")), h("b", null, String(f.r || "finding")), f.p ? h("span", { class: "loc" }, String(f.p) + (isNum(f.l) ? ":" + f.l : "")) : null),
          f.x ? h("code", null, String(f.x)) : null))),
        n > fs.length ? h("span", { class: "nd small" }, "+ " + plural(n - fs.length, "more finding")) : null));
    } else if (s) sec.append(h("p", { class: "secok" }, ic("shieldok"), "Security scan found nothing to review", s.at ? h("span", { class: "nd" }, "· " + sdate(s.at)) : null));
    else sec.append(h("p", { class: "secok none" }, ic("shield"), SCAN_SCOPE));
    return sec;
  }
  function aboutBlock(r) {
    const words = wordsOf(S.q);
    const src = [...new Set(r.src.map(s => SOURCE[s] || s))];
    const tags = h("div", { class: "dtags" });
    if (r.showArea.length) tags.append(h("div", { class: "trow" }, h("span", { class: "tk" }, "Areas"), h("div", { class: "tv" }, r.showArea.map(areaBtn))));
    const techList = r.showTech.map(t => facetBtn("tech", t, "tfb wide", techLabel(t), SLUG[t] ? techGlyph(t) : ic("box"), h("span", { class: "tl" }, techLabel(t))));
    if (techList.length || r.fbTech.length) tags.append(h("div", { class: "trow" }, h("span", { class: "tk" }, "Technologies"),
      h("div", { class: "tv" }, techList, r.fbTech.length ? h("span", { class: "anys", "data-tt": "Classified as general purpose: no specific technology needed", tabindex: "0" }, techList.length ? "Also works with any stack" : "Any stack") : null)));
    if (!r.tg.length && !r.ar.length) tags.append(h("p", { class: "nd small" }, "Not classified yet"));
    return h("section", { class: "dp-sec", "aria-label": "About" }, h("h3", null, "About"),
      h("p", { class: "about" }, ...(r.d ? hl(r.d, words) : ["No description provided."])),
      tags,
      h("p", { class: "prov" },
        h("span", { class: "nar" }, "By " + (r.own || "unknown")),
        h("span", { class: "nar" }, "License: " + (r.lg === "none" ? "none" : r.l === "NOASSERTION" ? "custom / unrecognized" : licText(r)) + (r.ld ? " (declared in " + r.ld + ")" : "") + " · " + LIC[r.lg].label),
        r.f ? h("span", null, plural(r.f, "fork")) : null,
        r.fs ? h("span", null, "In catalog since " + sdate(r.fs)) : null,
        src.length ? h("span", null, "Found via " + src.join(", ")) : null,
        r.cm || r.tg.length ? h("span", null, "Tagged by " + (METHOD[r.cm] || "auto") + (TAX.placeholder ? " (provisional taxonomy)" : "")) : null,
        r.al.length ? h("span", null, "Also known as " + r.al.join(", ")) : null,
        r.url ? h("a", { href: r.url, target: "_blank", rel: "noopener noreferrer" }, r.url.replace(/^https?:\/\/(www\.)?/, "")) : null));
  }
  function detailEl(r) {
    const dp = h("div", { class: "dp" });
    const install = h("section", { class: "dp-sec", "aria-label": "Install" }, h("h3", null, "Install", r.nit > 1 ? h("span", { class: "sub" }, plural(r.nit, "item")) : null), installEl(r));
    dp.append(h("div", { class: "dp-left" }, chartBlock(r, dp)), h("div", { class: "dp-side" }, trustBlock(r), install, aboutBlock(r)));
    return dp;
  }

  // ---------------------------------------------------------------- table
  const tbody = $("tbody"), cardsEl = $("cardview");
  const COLS = [
    { k: "fav", sr: "Favorite" }, { k: "exp", sr: "Details" },
    { k: "name", label: "Name", sort: "name" }, { k: "au", label: "Author", sort: "author" },
    { k: "tier", label: "Tier", sort: "tier" }, { k: "type", label: "Type", sort: "type" },
    { k: "area", label: "Areas" }, { k: "tech", label: "Technologies" },
    { k: "stars", label: "Stars", sort: "stars", r: true }, { k: "t7", label: "7d", r: true, tt: "Star change in the last 7 days. Click a value to open the history." },
    { k: "t30", label: "30d", r: true, tt: "Star change in the last 30 days" },
    { k: "upd", label: "Updated", sort: "pushed" }, { k: "lic", label: "License", sort: "license" },
  ];
  const isOpen = r => S.view === "table" ? S.open.has(r.k) : S.openCard === r.k;
  function rowEl(r) {
    const open = S.open.has(r.k);
    const td = (k, ...kids) => h("td", { class: "c-" + k, role: "cell" }, ...kids);
    const tr = h("tr", { class: "r" + (r.sus ? " sus" : ""), role: "row", "data-id": r.k, "data-open": String(open) });
    tr.append(
      td("fav", favBtn(r)),
      td("exp", expandBtn(r, open, "d-" + r.i)),
      td("name", h("div", { class: "nmcell" }, nameLink(r), warnBtn(r), r.own ? h("span", { class: "ow" }, r.own) : null)),
      td("au", h("span", { class: "au" }, r.own)),
      td("tier", tierBadge(r)),
      td("type", typeTag(r, true)),
      td("area", areasEl(r)),
      td("tech", techsEl(r)),
      h("td", { class: "c-stars num", role: "cell" }, fmt(r.s)),
      h("td", { class: "c-t7 c-trend", role: "cell" }, trendBtn(r, true)),
      td("upd", updEl(r)),
      td("lic", licEl(r)));
    return tr;
  }
  const moreRow = r => h("tr", { class: "more", role: "row", id: "d-" + r.i, "data-for": r.k }, h("td", { role: "cell" }, detailEl(r)));
  function buildHead() {
    const row = $("thead");
    row.setAttribute("role", "row");
    COLS.forEach(c => {
      const th = h("th", { scope: "col", role: "columnheader", class: "c-" + c.k + (c.r ? " r" : ""), "data-col": c.k });
      if (c.sr) th.append(h("span", { class: "sr" }, c.sr));
      else if (c.sort) th.append(h("button", { type: "button", class: "sortb", "data-act": "sort", "data-sort": c.sort }, h("span", null, c.label), ic("chev", "ar")));
      else th.append(h("span", { class: "hl", "data-tt": c.tt || null, tabindex: c.tt ? "0" : null }, c.label));
      row.append(th);
    });
    document.querySelector("table.grid").setAttribute("role", "table");
    document.querySelectorAll("table.grid thead, table.grid tbody").forEach(x => x.setAttribute("role", "rowgroup"));
  }

  // ---------------------------------------------------------------- cards
  function cardEl(r) {
    const open = S.openCard === r.k;
    const tagsBox = h("div", { class: "ctags", "data-fit": "" });
    r.showArea.forEach(a => tagsBox.append(areaBtn(a)));
    r.showTech.forEach(t => tagsBox.append(techBtn(t)));
    if (tagsBox.children.length) tagsBox.append(plusEl());
    else tagsBox.append(h("span", { class: "dash" }, r.anyStack ? "General purpose · any stack" : "Not classified yet"));
    return h("article", { class: "card" + (r.sus ? " sus" : ""), role: "listitem", "data-id": r.k, "data-open": String(open), "aria-label": r.n },
      h("div", { class: "ch" }, h("div", { class: "who" }, nameLink(r), h("span", { class: "ow" }, r.own)), favBtn(r), tierBadge(r)),
      r.pills.length ? h("div", { class: "cflags" }, flagPills(r)) : null,
      h("p", { class: "d" + (r.d ? "" : " nodesc") }, r.d || "No description provided."),
      tagsBox,
      h("div", { class: "meta" }, typeTag(r, r.nit > 1),
        h("span", { class: "s", "aria-label": nf(r.s || 0) + " stars" }, ic("star"), fmt(r.s)),
        updEl(r), licEl(r),
        h("span", { class: "grow" }), trendBtn(r, false), expandBtn(r, open, "panel")));
  }
  function closePanel() {
    const p = $("panel"); if (!p) return;
    const c = cardsEl.querySelector('.card[data-id="' + CSS.escape(p.dataset.for) + '"]');
    p.remove();
    if (c) { c.dataset.open = "false"; c.querySelectorAll("[data-act=expand]").forEach(b => b.setAttribute("aria-expanded", "false")); c.querySelector(".exp").removeAttribute("aria-controls"); }
  }
  function placePanel() {
    closePanel();
    const id = S.openCard; if (!id) return;
    const c = cardsEl.querySelector('.card[data-id="' + CSS.escape(id) + '"]');
    if (!c) return;
    const r = BY.get(id);
    c.dataset.open = "true";
    c.querySelectorAll("[data-act=expand]").forEach(b => b.setAttribute("aria-expanded", "true"));
    c.querySelector(".exp").setAttribute("aria-controls", "panel");
    let last = c;
    for (let n = c.nextElementSibling; n && n.classList.contains("card") && n.offsetTop === c.offsetTop; n = n.nextElementSibling) last = n;
    const p = h("section", { class: "panel", id: "panel", "data-id": r.k, "aria-label": "Details for " + r.n },
      h("div", { class: "ph" }, h("b", null, r.n), h("span", { class: "ow" }, r.disp), typeTag(r, false),
        h("button", { class: "exp x", type: "button", "data-act": "close", "aria-label": "Close details" }, ic("x"))),
      detailEl(r));
    p.dataset.for = r.k;
    last.after(p);
    fitTags(p);
  }

  // ---------------------------------------------------------------- zero results: relax one constraint at a time
  let RELAX = [];
  function relaxOptions() {
    const opts = [];
    const add = (label, mutate) => { const st = cloneState(); mutate(st); opts.push({ label, n: countFor(st), mutate }); };
    const words = S.q.split(/\s+/).filter(Boolean);
    words.forEach((w, i) => add("Remove “" + w + "” from search", st => { st.q = words.filter((_, j) => j !== i).join(" "); }));
    if (words.length > 1) add("Clear the search", st => { st.q = ""; });
    GROUPS.forEach(g => chipsFor(g).forEach(([, id, l]) => add(g.inverted ? "Show repos flagged " + l : "Remove " + g.label + ": " + l, st => unselect(st, g, id))));
    if (S.sel.tech.size && !S.anyStack) add("Include stack-agnostic tools", st => { st.anyStack = true; });
    if (!S.sel.tier.size && !S.watch) add("Include Watch tier", st => { st.watch = true; });
    if (S.sel.tier.size > 1) add("Search all tiers", st => { st.sel.tier.clear(); st.watch = true; });
    const seen = new Set();
    return opts.filter(o => !seen.has(o.label) && seen.add(o.label)).sort((a, b) => b.n - a.n);
  }
  function emptyEl() {
    if (S.sel.fav.size && !FAVN) return h("div", { class: "empty" }, h("b", null, "No favorites yet"),
      h("p", null, "Click the star next to any extension (in the table or on a card) to add it here."),
      h("p", null, "Favorites are kept in this browser. Use Export favorites in the sidebar to save them to favorites.json in the repo."),
      h("button", { class: "clear", type: "button", "data-act": "clearall" }, "Show all extensions"));
    const opts = relaxOptions();
    RELAX = opts;
    const good = opts.filter(o => o.n > 0).slice(0, 6), dead = opts.filter(o => o.n === 0);
    const list = h("ul", { class: "relax" }, good.map(o => h("li", null, h("button", { type: "button", class: "btn", "data-act": "relax", "data-i": String(opts.indexOf(o)) }, o.label, h("span", { class: "rn" }, "→ " + plural(o.n, "result"))))));
    return h("div", { class: "empty" }, h("b", null, "No extensions match"),
      h("p", null, S.q ? "Nothing matches “" + S.q + "” with the current filters." : "No repository has this combination of filters."),
      good.length ? h("p", { class: "eh" }, "Relax one constraint:") : h("p", { class: "eh" }, "No single change brings results back."),
      good.length ? list : null,
      dead.length ? h("p", { class: "nd small" }, "No help from: " + dead.map(o => o.label.replace(/^Remove /, "")).join(" · ")) : null,
      h("button", { class: "clear", type: "button", "data-act": "clearall" }, "Clear search and all filters"));
  }

  // ---------------------------------------------------------------- results rendering
  const CHUNK = 60, NEXT = 120;
  function renderResults() {
    hidePop(true); // never leave a popover pointing at a row that is about to disappear
    hideTip();
    shown = 0;
    tbody.textContent = "";
    cardsEl.textContent = "";
    if (!LIST.length) {
      if (S.view === "table") tbody.append(h("tr", { class: "emptyrow", role: "row" }, h("td", { role: "cell" }, emptyEl())));
      else cardsEl.append(h("div", { style: "grid-column:1/-1" }, emptyEl()));
    }
    more();
  }
  function more() {
    const end = Math.min(LIST.length, shown + (shown ? NEXT : CHUNK));
    if (end > shown) {
      const frag = document.createDocumentFragment();
      for (let i = shown; i < end; i++) {
        const r = LIST[i];
        if (S.view === "table") {
          if (i > 0 && SORT[S.sort].trend && S.flagged === "demote" && r.sus && !LIST[i - 1].sus) frag.append(sepRow());
          frag.append(rowEl(r)); if (S.open.has(r.k)) frag.append(moreRow(r));
        }
        else frag.append(cardEl(r));
      }
      const host = S.view === "table" ? tbody : cardsEl;
      const mark = host.lastElementChild;
      host.append(frag);
      fitTags(mark ? rangeAfter(host, mark) : host);
      const had = shown; shown = end;
      if (S.view === "cards" && S.openCard && !$("panel") && LIST.slice(had, end).some(r => r.k === S.openCard)) placePanel();
    }
    $("loadmore").textContent = !LIST.length ? "" : shown < LIST.length ? "Showing " + nf(shown) + " of " + nf(LIST.length) + " · scroll for more" : plural(LIST.length, "result");
    if (shown < LIST.length) requestAnimationFrame(() => { if ($("sentinel").getBoundingClientRect().top < innerHeight + 1200) more(); });
  }
  function rangeAfter(host, mark) {
    // a lightweight scope object for fitTags covering only newly appended nodes
    return { querySelectorAll: sel => { const out = []; for (let n = mark.nextElementSibling; n; n = n.nextElementSibling) out.push(...n.querySelectorAll(sel)); return out; } };
  }
  const sepRow = () => h("tr", { class: "sep", role: "row" }, h("td", { role: "cell" }, ic("flag"), "Flagged repos (suspicious stars or security findings), ranked last"));
  new IntersectionObserver(es => { if (es.some(e => e.isIntersecting) && shown < LIST.length) more(); }, { rootMargin: "0px 0px 1200px 0px" }).observe($("sentinel"));
  let lastW = 0;
  new ResizeObserver(es => { const w = Math.round(es[0].contentRect.width); if (w !== lastW) { lastW = w; fitTags($("results")); } }).observe($("results"));

  // ---------------------------------------------------------------- sidebar
  const sideRows = new Map(); // "g:id" -> {row, input, c, li}
  const groupHeads = {};
  const showAll = {};
  function nodeLi(g, n) {
    const hasKids = n.kids.length > 0, id = "f-" + g.key + "-" + n.id.replace(/[^\w-]/g, "_");
    const input = g.radio ? h("input", { type: "radio", name: "f-" + g.key, value: n.id, id }) : h("input", { type: "checkbox", id, "aria-describedby": n.desc && n.two ? id + "-d" : null });
    input.dataset.g = g.key; input.dataset.id = n.id;
    const c = h("span", { class: "c" });
    const glyph = n.ok ? h("span", { class: "okmark", "aria-hidden": "true" }, ic("check")) : n.dot ? h("span", { class: "dot d-" + n.dot }) : n.icon ? h("span", { class: "gl" }, ic(n.icon)) : null;
    const body = n.two
      ? h("span", { class: "lt" }, h("span", { class: "ln" }, glyph, h("span", { class: "lbl" }, n.label), c), h("small", { id: id + "-d" }, n.desc))
      : [glyph, h("span", { class: "lbl" }, n.label, n.desc ? h("small", null, n.desc) : null), c];
    const row = h("div", { class: "frow" + (n.desc ? " hasdesc" : "") + (n.two ? " two" : "") + (n.ok ? " lic-ok" : "") + (n.other ? " other" : "") },
      g.tree ? (hasKids ? h("button", { class: "tw", type: "button", "data-act": "fold", "aria-expanded": "false", "aria-controls": id + "-k", "aria-label": "Show " + n.label + " subcategories" }, ic("chev")) : h("span", { class: "tw ph" })) : null,
      h("label", { for: id }, input, body));
    const li = h("li", null, row);
    sideRows.set(g.key + ":" + n.id, { row, input, c, li });
    if (hasKids) li.append(h("ul", { id: id + "-k", hidden: true }, n.kids.map(k => nodeLi(g, k))));
    return li;
  }
  function buildSide() {
    const side = $("side");
    const gen = Date.parse(C.generated_at || "");
    side.append(h("div", { class: "brand" }, h("span", { class: "logo", "aria-hidden": "true" }, "cc"),
      h("div", { class: "bt" }, h("h1", null, "Extensions catalog"), h("p", null, nf(R.length) + " repos" + (isNaN(gen) ? "" : " · updated " + fdate(gen))))));
    GROUPS.forEach(g => {
      if (!g.nodes.length) return;
      const bodyId = "fg-" + g.key, n = h("span", { class: "n" + (g.inverted ? " ex" : "") });
      groupHeads[g.key] = n;
      const body = h("div", { class: "fbody", id: bodyId });
      if (g.key === "tier") body.append(h("p", { class: "fhelp" }, "Ranked by trust, highest first."));
      if (g.key === "fav") body.append(h("p", { class: "fhelp" }, "Star any row or card. Stored in this browser."));
      if (g.key === "flag") body.append(h("p", { class: "fhelp" }, "Checked flags are ", h("b", null, "included"), ". Uncheck one to hide every repo carrying it."));
      if (g.key === "lic") body.append(h("p", { class: "fhelp" }, "Grouped from each repo's SPDX license id."));
      if (g.key === "tech") body.append(h("p", { class: "fhelp prov" }, ic("info"), h("span", null, (TAX.placeholder ? "Provisional taxonomy. " : "") + "Tags are auto-classified. A repo can carry several tags, so counts overlap.")));
      const ul = h("ul", { class: "facets", role: g.radio ? "radiogroup" : null, "aria-label": g.label });
      if (g.radio) ul.append(nodeLi(g, { id: "", label: "Any time", kids: [] }));
      g.nodes.forEach(nd => ul.append(nodeLi(g, nd)));
      body.append(ul);
      if (g.top && g.nodes.length > g.top) body.append(h("button", { class: "showall", type: "button", "data-act": "showall", "data-g": g.key, "aria-expanded": "false" }, "Show all " + g.nodes.length));
      if (g.key === "fav") body.append(h("div", { class: "favtools" },
        h("p", { class: "favstat", id: "favstat", "aria-live": "polite" }),
        h("div", { class: "favbtns" },
          h("button", { type: "button", class: "btn", "data-act": "favexport" }, ic("copy"), "Export favorites"),
          h("button", { type: "button", class: "btn", "data-act": "favimport" }, ic("plus"), "Import"),
          h("input", { type: "file", id: "favfile", accept: "application/json,.json", hidden: true, "aria-label": "Import favorites.json" })),
        h("p", { class: "fhelp" }, "Export downloads favorites.json. Put it in the repo root, then commit it.")));
      side.append(h("section", { class: "fgroup fg-" + g.key, "aria-labelledby": "fh-" + g.key },
        h("h2", { class: "fh", id: "fh-" + g.key }, h("button", { class: "fhead", type: "button", "data-act": "fold", "aria-expanded": "true", "aria-controls": bodyId }, ic("chev", "chev"), h("span", { class: "ft" }, g.label), n)), body));
    });
    if (location.protocol === "file:") side.append(h("p", { class: "side-foot" }, "Opened from a file, so star history is off. Run ", h("code", null, "python -m http.server -d site"), " to enable it."));
    side.addEventListener("change", onFacet);
    $("favfile").addEventListener("change", e => { const f = e.target.files && e.target.files[0]; e.target.value = ""; if (f) favImport(f); });
  }
  function syncTopN() {
    GROUPS.forEach(g => {
      if (!g.top) return;
      const sel = S.sel[g.key];
      g.nodes.forEach((n, i) => {
        const x = sideRows.get(g.key + ":" + n.id);
        const active = leafIds(n).some(id => sel.has(id));
        x.li.hidden = !showAll[g.key] && i >= g.top && !active;
      });
      const b = document.querySelector('[data-act=showall][data-g="' + g.key + '"]');
      if (b) { b.textContent = showAll[g.key] ? "Show top " + g.top : "Show all " + g.nodes.length; b.setAttribute("aria-expanded", String(!!showAll[g.key])); }
    });
  }
  function setFold(g, n, open) {
    const x = sideRows.get(g.key + ":" + n.id); if (!x) return;
    const tw = x.row.querySelector(".tw[data-act=fold]"); if (!tw) return;
    tw.setAttribute("aria-expanded", String(open)); $(tw.getAttribute("aria-controls")).hidden = !open;
  }
  function onFacet(e) {
    const inp = e.target; if (!inp.dataset || !inp.dataset.g) return;
    const g = GROUP[inp.dataset.g], id = inp.dataset.id;
    if (g.radio) { S.added = +id || 0; return update(); }
    const sel = S.sel[g.key], node = NODE[g.key][id];
    if (g.inverted) { inp.checked ? sel.delete(id) : sel.add(id); return update(); }
    if (node && node.kids.length) {
      leafIds(node).forEach(k => inp.checked ? sel.add(k) : sel.delete(k));
      if (inp.checked) setFold(g, node, true); // selecting a parent reveals its children
    } else inp.checked ? sel.add(id) : sel.delete(id);
    update();
  }
  function syncSide(cnt) {
    GROUPS.forEach(g => {
      const c = cnt[g.key];
      if (g.radio) {
        const set = (id, v) => { const x = sideRows.get(g.key + ":" + id); if (!x) return; x.c.textContent = nf(v || 0); x.input.checked = String(S.added || "") === id; x.row.classList.toggle("zero", !v); };
        set("", c.any); ADDED.forEach(a => set(a.id, c[a.id]));
        groupHeads[g.key] && (groupHeads[g.key].textContent = S.added ? "1 selected" : "");
        return;
      }
      const sel = S.sel[g.key];
      g.nodes.forEach(n => [n, ...n.kids].forEach(nd => {
        const x = sideRows.get(g.key + ":" + nd.id); if (!x) return;
        const v = c[nd.id] || 0;
        x.c.textContent = nf(v);
        if (g.inverted) { const off = sel.has(nd.id); x.input.checked = !off; x.row.classList.toggle("off", off); x.row.classList.toggle("zero", !v); return; }
        if (nd.kids.length) {
          const ids = leafIds(nd), k = ids.filter(z => sel.has(z)).length;
          x.input.checked = k === ids.length;
          x.input.indeterminate = k > 0 && k < ids.length;
          x.row.classList.toggle("zero", !v && !k);
        } else { x.input.checked = sel.has(nd.id); x.row.classList.toggle("zero", !v && !sel.has(nd.id)); }
      }));
      const nsel = chipsFor(g).length;
      if (groupHeads[g.key]) groupHeads[g.key].textContent = nsel ? nsel + (g.inverted ? " hidden" : " selected") : "";
    });
    syncTopN();
    syncFavTools();
  }
  function syncFavTools() {
    const el = $("favstat"); if (!el) return;
    const p = favPending(), bits = [];
    if (p.add) bits.push(p.add + " local only");
    if (p.rm) bits.push(p.rm + (p.rm === 1 ? " removal" : " removals") + " pending");
    el.textContent = plural(FAVN, "favorite") + (bits.length ? " · " + bits.join(", ") : FAVN ? " · all saved in the repo file" : "") + (STORE_OK ? "" : ". Browser storage is blocked: favorites last only for this visit.");
  }
  function chipsFor(g) {
    const chips = [];
    if (g.radio) { if (S.added) chips.push([g, String(S.added), ADDED.find(a => a.days === S.added).label]); return chips; }
    const sel = S.sel[g.key];
    g.nodes.forEach(n => {
      if (!n.kids.length) { if (sel.has(n.id)) chips.push([g, n.id, n.label]); return; }
      const ids = leafIds(n);
      if (ids.every(k => sel.has(k))) chips.push([g, n.id, n.label]);
      else n.kids.forEach(k => sel.has(k.id) && chips.push([g, k.id, k.other ? "Other " + n.label : k.label]));
    });
    return chips;
  }
  function unselect(st, g, id) {
    if (g.radio) { st.added = 0; return; }
    const sel = st.sel[g.key], n = NODE[g.key][id];
    if (n && n.kids.length) leafIds(n).forEach(k => sel.delete(k)); else sel.delete(id);
  }
  function syncChips() {
    const el = $("chips"); el.textContent = "";
    const chips = GROUPS.flatMap(chipsFor);
    if (S.anyStack && S.sel.tech.size) chips.push([{ key: "anystack", label: "Also" }, "1", "stack-agnostic tools"]);
    if (!chips.length) return;
    chips.forEach(([g, id, l]) => {
      const name = g.chip || g.label;
      const b = h("button", { class: "chip" + (g.inverted ? " ex" : ""), type: "button", "data-act": "unchip", "aria-label": (g.inverted ? "Stop hiding " : "Remove filter " + name + ": ") + l }, h("span", { class: "k" }, name + ":"), " " + l, ic("x"));
      b.dataset.g = g.key; b.dataset.id = id;
      el.append(b);
    });
    el.append(h("button", { class: "clear", type: "button", "data-act": "clearall" }, "Clear all"));
  }

  // ---------------------------------------------------------------- assist bar: search suggestions, any-stack toggle, notices
  const TAXIDX = [];
  for (const g of ["area", "tech"]) TREES[g].forEach(n => [n, ...n.kids].forEach(nd => {
    if (nd.id === FALLBACK_ID || nd.other) return;
    const toks = (nd.label + " " + nd.id).toLowerCase().split(/[^a-z0-9#+.]+/).filter(t => t.length >= 2 && !/^(and|the|of)$/.test(t));
    TAXIDX.push({ g, id: nd.id, label: nd.label, parent: PARENT[g][nd.id], toks: [...new Set(toks)] });
  }));
  function suggestions() {
    const words = wordsOf(S.q);
    if (!words.length) return [];
    const out = [];
    words.forEach(w => {
      if (w.length < 2) return;
      TAXIDX.forEach(t => {
        const hit = t.toks.some(k => k === w || (w.length >= 3 && k.startsWith(w)) || (k.length >= 4 && w.startsWith(k)));
        if (!hit) return;
        const node = NODE[t.g][t.id], ids = node ? leafIds(node) : [t.id];
        if (ids.every(id => S.sel[t.g].has(id))) return;
        const st = cloneState();
        st.q = words.filter(x => x !== w).join(" ");
        ids.forEach(id => st.sel[t.g].add(id));
        out.push({ ...t, w, ids, n: countFor(st) });
      });
    });
    const seen = new Set(), ok = out.filter(s => s.n > 0 && !seen.has(s.g + s.id) && seen.add(s.g + s.id));
    const parents = new Set(ok.filter(s => !s.parent).map(s => s.g + s.id));
    return ok.filter(s => !s.parent || !parents.has(s.g + s.parent)).sort((a, b) => b.n - a.n).slice(0, 4);
  }
  let SUGG = [];
  function syncAssist() {
    const el = $("assist"); el.textContent = "";
    SUGG = suggestions();
    if (SUGG.length) {
      el.append(h("div", { class: "arow sugg", role: "group", "aria-label": "Suggested filters" }, h("span", { class: "al" }, "Filter instead:"),
        SUGG.map((s, i) => h("button", { type: "button", class: "sg", "data-act": "suggest", "data-i": String(i), "aria-label": "Filter " + (s.g === "tech" ? "Technology" : "Area") + ": " + s.label + ", " + plural(s.n, "result") + ", replaces the word " + s.w },
          ic("plus"), h("span", { class: "k" }, s.g === "tech" ? "Tech" : "Area"), s.label, h("span", { class: "rn" }, nf(s.n))))));
    }
    const st = cloneState(); st.anyStack = !S.anyStack;
    const delta = S.sel.tech.size ? Math.abs(countFor(st) - LIST.length) : 0;
    if (S.sel.tech.size && (delta || S.anyStack)) {
      el.append(h("div", { class: "arow" }, h("label", { class: "tgl" }, h("input", { type: "checkbox", id: "anystack", "data-act": "anystack", checked: S.anyStack || null }),
        h("span", null, "Include stack-agnostic tools", h("span", { class: "nd" }, S.anyStack ? " (" + plural(delta, "repo") + " added)" : " (+" + nf(delta) + ")")))));
    }
    if (!S.sel.tier.size) {
      const wn = (COUNTS && COUNTS.tier && COUNTS.tier.watch) || 0;
      if (!S.watch && wn) el.append(h("div", { class: "arow note" }, ic("info"), h("span", null, "Watch tier hidden (" + nf(wn) + " unvetted " + (wn === 1 ? "result" : "results") + ")."), h("button", { type: "button", class: "lnk", "data-act": "watch", "data-v": "1" }, "Show")));
      else if (S.watch) el.append(h("div", { class: "arow note" }, ic("info"), h("span", null, "Showing the Watch tier (unvetted: review before installing)."), h("button", { type: "button", class: "lnk", "data-act": "watch", "data-v": "0" }, "Hide")));
    }
    if (SORT[S.sort].trend && SUS_IN) {
      el.append(h("div", { class: "arow note" }, ic("flag"),
        h("span", null, S.flagged === "demote" ? plural(SUS_IN, "flagged repo") + " (suspicious stars or security findings) ranked last." : "Flagged repos are ranked by their raw trend."),
        h("button", { type: "button", class: "lnk", "data-act": "hidesus" }, "Hide them"),
        h("button", { type: "button", class: "lnk", "data-act": "flagged", "data-v": S.flagged === "demote" ? "show" : "demote" }, S.flagged === "demote" ? "Rank normally" : "Rank them last")));
    }
  }
  // results bar: sort indicator for sorts without a column header (table), sort control (cards)
  function syncResbar() {
    const el = $("resbar"); el.textContent = "";
    const s = SORT[S.sort];
    if (S.view === "cards") {
      const sel = h("select", { id: "csort", "aria-label": "Sort cards by" }, SORTS.map(x => h("option", { value: x.id }, x.label)));
      sel.value = S.sort;
      el.append(h("div", { class: "csort" }, h("label", { class: "t", for: "csort" }, "Sort"), sel,
        h("button", { type: "button", class: "btn icon dirb", "data-act": "dir", "aria-label": S.dir < 0 ? "Sorted descending. Switch to ascending" : "Sorted ascending. Switch to descending", "data-tt": S.dir < 0 ? "Descending" : "Ascending", "data-dir": S.dir < 0 ? "desc" : "asc" }, ic("sort"))));
      sel.addEventListener("change", () => setSort(sel.value, -1));
    } else if (!s.col) {
      el.append(h("p", { class: "sortnote" }, ic("trend"), h("span", null, "Sorted by " + s.label + (S.dir > 0 ? " (ascending)" : "")), h("button", { type: "button", class: "lnk", "data-act": "sort", "data-sort": "stars", "data-fresh": "1" }, "Sort by stars")));
    }
    el.hidden = !el.firstChild;
  }

  // ---------------------------------------------------------------- presets
  const PRESETS = [
    { id: "top", label: "Most starred", apply: () => ({ sort: "stars" }) },
    { id: "trusted", label: "Trending & trusted", apply: () => ({ sort: "t7", tier: ["anthropic", "official", "listed", "verified"], hide: SUSFLAGS }) },
    { id: "trending", label: "Trending this week", apply: () => ({ sort: "t7" }) },
    { id: "new", label: "New this week", apply: () => ({ sort: "stars", added: 7 }) },
    { id: "updated", label: "Recently updated", apply: () => ({ sort: "pushed" }) },
    { id: "fav", label: "Favorites", icon: "star", apply: () => ({ sort: "stars", fav: true }) },
  ];
  const sameSet = (set, list) => set.size === list.length && list.every(x => set.has(x));
  function presetOf() {
    const otherSel = Object.entries(S.sel).filter(([k, v]) => k !== "tier" && k !== "fav" && k !== "flag" && v.size).length;
    if (S.q || otherSel || S.anyStack || (S.watch && !S.sel.tier.size) || S.dir !== -1 || S.flagged !== "demote") return null;
    return PRESETS.find(p => {
      const x = p.apply();
      return x.sort === S.sort && (x.added || 0) === S.added && sameSet(S.sel.flag, (x.hide || []).filter(f => ALLIDS.flag.has(f))) && (x.fav ? 1 : 0) === S.sel.fav.size && sameSet(S.sel.tier, x.tier || []);
    }) || null;
  }
  function applyPreset(id) {
    const p = PRESETS.find(x => x.id === id); if (!p) return;
    const x = p.apply();
    S.sel = newSel(); S.q = ""; $("q").value = ""; S.anyStack = false; S.watch = false;
    (x.tier || []).forEach(t => S.sel.tier.add(t));
    (x.hide || []).forEach(f => ALLIDS.flag.has(f) && S.sel.flag.add(f));
    if (x.fav) S.sel.fav.add("1");
    S.added = x.added || 0; S.flagged = "demote";
    S.sort = x.sort; S.dir = -1;
    update();
  }
  function buildPresets() {
    const el = $("presets");
    el.append(h("span", { class: "al" }, "Quick views"), ...PRESETS.map(p => h("button", { type: "button", class: "pre", "data-act": "preset", "data-p": p.id, "aria-pressed": "false" }, p.icon ? ic(p.icon) : null, p.label)));
  }
  function syncPresets() {
    const cur = presetOf();
    document.querySelectorAll("[data-act=preset]").forEach(b => b.setAttribute("aria-pressed", String(!!cur && cur.id === b.dataset.p)));
  }

  // ---------------------------------------------------------------- top bar / headers
  function buildTop() {
    const q = $("q");
    let raf = 0;
    q.addEventListener("input", () => { S.q = q.value.trim(); cancelAnimationFrame(raf); raf = requestAnimationFrame(() => update()); });
    q.addEventListener("keydown", e => { if (e.key === "Escape" && q.value) { e.stopPropagation(); q.value = ""; S.q = ""; update(); } });
    buildHead();
  }
  function syncHeaders() {
    document.querySelectorAll("th [data-sort]").forEach(b => {
      const on = b.dataset.sort === S.sort, th = b.closest("th"), lab = b.firstChild.textContent;
      if (on) { b.setAttribute("data-on", S.dir > 0 ? "asc" : "desc"); th.setAttribute("aria-sort", S.dir > 0 ? "ascending" : "descending"); }
      else { b.removeAttribute("data-on"); th.removeAttribute("aria-sort"); }
      b.setAttribute("aria-label", "Sort by " + lab + (on ? (S.dir > 0 ? ", sorted ascending; click for descending" : ", sorted descending; click for ascending") : SORT[b.dataset.sort].asc ? ", ascending first" : ", descending first"));
    });
  }
  function syncCount() {
    $("count").replaceChildren(h("b", null, nf(LIST.length)), h("span", { class: "of" }, " of " + nf(R.length)));
  }
  function setSort(id, dir) {
    if (!SORT[id]) return;
    S.sort = id; S.dir = dir || -1;
    update();
  }
  function setView(v, fromHash) {
    S.view = v === "cards" ? "cards" : "table";
    document.body.dataset.view = S.view;
    $("tableview").hidden = S.view !== "table";
    cardsEl.hidden = S.view !== "cards";
    document.querySelectorAll("[data-act=view]").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.v === S.view)));
    if (!fromHash) { syncResbar(); renderResults(); writeHash(); }
  }
  function setTheme(t) {
    if (t) { document.documentElement.dataset.theme = t; try { localStorage.setItem("cc-theme", t); } catch (e) { /* storage blocked */ } }
    const dark = isDark();
    $("theme").replaceChildren(ic(dark ? "sun" : "moon"));
    $("theme").setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
  }
  const isDark = () => document.documentElement.dataset.theme ? document.documentElement.dataset.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;

  // ---------------------------------------------------------------- URL hash
  function writeHash() {
    const p = new URLSearchParams();
    if (S.view !== "table") p.set("view", S.view);
    if (S.q) p.set("q", S.q);
    if (S.sort !== "stars" || S.dir !== -1) { p.set("sort", S.sort); if (S.dir !== -1) p.set("dir", "asc"); }
    for (const k in S.sel) if (S.sel[k].size) {
      const sel = S.sel[k], ids = [], done = new Set();
      GROUP[k].nodes.forEach(n => { if (n.kids.length) { const l = leafIds(n); if (l.every(x => sel.has(x))) { ids.push(n.id); l.forEach(x => done.add(x)); } } });
      sel.forEach(x => { if (!done.has(x)) ids.push(x); });
      p.set(HASHKEY[k] || k, ids.join(","));
    }
    if (S.added) p.set("added", String(S.added));
    if (S.flagged !== "demote") p.set("flagged", S.flagged);
    if (S.anyStack) p.set("anystack", "1");
    if (S.watch && !S.sel.tier.size) p.set("watch", "1");
    const s = p.toString();
    if (s === location.hash.slice(1)) return;
    try { history.replaceState(null, "", s ? "#" + s : location.pathname + location.search); } catch (e) { /* opaque origin */ }
  }
  function readHash() {
    const p = new URLSearchParams(location.hash.slice(1));
    S.q = (p.get("q") || "").slice(0, 200);
    const so = p.get("sort");
    S.sort = SORT[so] ? so : "stars";
    S.dir = p.get("dir") === "asc" ? 1 : -1;
    for (const k in S.sel) {
      S.sel[k].clear();
      (p.get(HASHKEY[k] || k) || "").split(",").forEach(id => {
        if (!ALLIDS[k].has(id)) return;
        const n = NODE[k][id];
        if (n && n.kids.length) leafIds(n).forEach(x => S.sel[k].add(x)); else S.sel[k].add(id); // old hashes stored parents
      });
    }
    const a = +p.get("added"); S.added = ADDED.some(x => x.days === a) ? a : 0;
    const f = p.get("flagged");
    S.flagged = f === "show" ? "show" : "demote";
    if (f === "hide") SUSFLAGS.forEach(x => ALLIDS.flag.has(x) && S.sel.flag.add(x)); // v3 "hide flagged" links
    S.anyStack = p.get("anystack") === "1";
    S.watch = p.get("watch") === "1" && !S.sel.tier.size; // an explicit tier selection in the URL overrides the default
    $("q").value = S.q;
    setView(p.get("view"), true);
  }

  // ---------------------------------------------------------------- update
  function update() {
    const t0 = performance.now();
    const { res, cnt } = compute();
    LIST = res; COUNTS = cnt;
    SUS_IN = 0; for (const r of res) if (r.sus) SUS_IN++;
    const t1 = performance.now();
    syncSide(cnt); syncChips(); syncCount(); syncHeaders(); syncAssist(); syncResbar(); syncPresets();
    if (S.view === "cards" && S.openCard && !res.some(r => r.k === S.openCard)) S.openCard = null;
    renderResults();
    writeHash();
    PERF.updates.push({ filter: +(t1 - t0).toFixed(2), total: +(performance.now() - t0).toFixed(2), n: res.length });
    if (PERF.updates.length > 200) PERF.updates.shift();
  }

  // ---------------------------------------------------------------- interactions
  let toastT;
  function toast(msg, ok) {
    let t = document.querySelector(".toast");
    if (!t) { t = h("div", { class: "toast", role: "status" }); document.body.append(t); }
    t.replaceChildren(ic(ok ? "check" : "info"), h("span", null, msg));
    t.classList.add("on");
    clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove("on"), 1800);
  }
  async function copy(text, btn) {
    let ok = false;
    try { await navigator.clipboard.writeText(text); ok = true; } catch (e) {
      const ta = h("textarea", { style: "position:fixed;opacity:0;top:0;left:0", "aria-hidden": "true" }); ta.value = text;
      document.body.append(ta); ta.select(); try { ok = document.execCommand("copy"); } catch (e2) { /* blocked */ } ta.remove();
    }
    const lab = btn.querySelector(".cl"), old = lab ? lab.textContent : "";
    btn.classList.add("ok"); if (lab) lab.textContent = "Copied";
    setTimeout(() => { btn.classList.remove("ok"); if (lab) lab.textContent = old; }, 1400);
    toast(ok ? "Copied: " + (text.length > 60 ? text.slice(0, 59) + "…" : text) : "Copy blocked by the browser; select the command manually.", ok);
  }
  function toggleOpen(id, from) {
    const r = BY.get(id);
    hidePop(true); hideTip();
    if (S.view === "table") {
      const tr = tbody.querySelector('tr.r[data-id="' + CSS.escape(id) + '"]');
      if (!tr) return;
      const open = !S.open.has(id);
      open ? S.open.add(id) : S.open.delete(id);
      const fresh = rowEl(r);
      tr.replaceWith(fresh);
      fitTags(fresh);
      const nx = fresh.nextElementSibling;
      if (open) fresh.after(moreRow(r)); else if (nx && nx.classList.contains("more")) nx.remove();
      if (open) fitTags(fresh.nextElementSibling);
      const f = fresh.querySelector(from === "trend" ? ".trend" : ".exp");
      if (f) f.focus({ preventScroll: true });
    } else {
      S.openCard = S.openCard === id ? null : id;
      if (S.openCard) placePanel(); else closePanel();
    }
  }
  function toggleFacet(g, id, anchor) {
    const sel = S.sel[g], ids = facetIds(g, id), on = facetOn(g, id);
    ids.forEach(x => on ? sel.delete(x) : sel.add(x));
    if (!on && NODE[g][id] && PARENT[g][id]) setFold(GROUP[g], NODE[g][PARENT[g][id]], true);
    const host = anchor.closest("[data-id]"), hostId = host && (host.dataset.for || host.dataset.id);
    update();
    toast((on ? "Removed filter: " : "Filtering by ") + (g === "tech" ? techLabel(id) : LABEL.area[id]), true);
    // keep keyboard focus on the same control when its row is still listed
    if (hostId) {
      const scope = S.view === "table" ? tbody : cardsEl;
      const b = scope.querySelector('[data-id="' + CSS.escape(hostId) + '"] [data-act=facet][data-g="' + g + '"][data-fid="' + CSS.escape(id) + '"]');
      if (b && !b.hidden) b.focus({ preventScroll: true }); else $("results").focus({ preventScroll: true });
    }
  }

  // popover for description (name), tier reasons (tier badge) and flags
  let pop = null, popT = 0, popFor = null, pinned = false;
  const setPop = (...kids) => pop.replaceChildren(...kids.filter(k => k != null)); // native replaceChildren would print "null"
  function showPop(anchor) {
    if (!anchor.isConnected) return;
    pinned = false;
    const host = anchor.closest("[data-id]"); const r = host && BY.get(host.dataset.id); if (!r) return;
    hideTip();
    if (!pop) {
      pop = h("div", { class: "pop", role: "tooltip", id: "pop" });
      pop.addEventListener("mouseenter", () => clearTimeout(popT));
      pop.addEventListener("mouseleave", hidePop);
      document.body.append(pop);
    }
    const kind = anchor.dataset.tip;
    if (kind === "tier") {
      setPop(h("div", { class: "ph" }, h("span", { class: "tier tier-" + r.tr }, TIER[r.tr].label), h("b", null, TIER[r.tr].long)),
        reasonList(r) || h("p", { class: "nd" }, TIER[r.tr].desc), rankLine());
    } else if (kind === "warn") {
      const nsec = r.sec && r.flg.some(f => f.startsWith("security-")) ? (isNum(r.sec.n) ? r.sec.n : (r.sec.f || []).length) : 0;
      setPop(h("div", { class: "ph" }, ic("warn"), h("b", null, plural(r.flg.length, "issue"))), flagList(r),
        nsec ? h("p", { class: "nd" }, plural(nsec, "security finding") + ". Open the details for the findings.") : null,
        r.sus ? h("p", { class: "nd" }, "Flagged repos are ranked last in Trending.") : null,
        h("p", { class: "nd" }, "Uncheck a flag under Flags in the sidebar to hide every repo carrying it."));
    } else if (kind === "flag") {
      const f = anchor.dataset.flag, F = FLAGS[f] || {};
      const tip = f === "unscanned" || f === "paid-api" || f === "api-key" ? flagFull(r, f) : f === "unmaintained" && r.p ? "Last push " + sdate(r.p) + ": no push for " + ageText(r.pd) + "." : F.tip || "Flagged by the catalog's checks.";
      const extra = f.startsWith("security-") && r.sec ? h("p", { class: "nd" }, plural(isNum(r.sec.n) ? r.sec.n : (r.sec.f || []).length, "finding") + ". Open the details for the findings.") : null;
      setPop(h("div", { class: "ph" }, h("b", null, flagLabel(f))), h("p", { class: "pd" }, tip), extra,
        isSus(f) ? h("p", { class: "nd" }, "Flagged repos are ranked last in Trending.") : null,
        h("p", { class: "nd" }, "Uncheck it under Flags in the sidebar to hide every repo carrying it."));
    } else {
      setPop(h("p", { class: "pd" }, ...(r.d ? hl(r.d, wordsOf(S.q)) : ["No description provided."])),
        h("div", { class: "pm" }, r.disp + " · " + plural(r.nit, "item") + (r.url ? " · opens GitHub" : "")));
    }
    pop.style.width = kind === "tier" || kind === "warn" ? "360px" : "";
    const b = anchor.getBoundingClientRect();
    pop.style.left = "0px"; pop.style.top = "0px";
    pop.classList.add("on");
    const pw = pop.offsetWidth, ph = pop.offsetHeight;
    const x = Math.max(8, Math.min(b.left, innerWidth - pw - 12));
    let y = b.bottom + 6; if (y + ph > innerHeight - 8) y = b.top - ph - 6;
    pop.style.left = x + "px"; pop.style.top = y + "px";
    if (popFor && popFor !== anchor) popFor.removeAttribute("aria-describedby");
    popFor = anchor; anchor.setAttribute("aria-describedby", "pop");
  }
  function hidePop(now) {
    clearTimeout(popT);
    if (now !== true && pinned) return;
    const go = () => { pinned = false; if (pop) pop.classList.remove("on"); if (popFor) { popFor.removeAttribute("aria-describedby"); popFor = null; } };
    now === true ? go() : (popT = setTimeout(go, 100));
  }

  // tooltip: one shared element for every [data-tt] (hover + keyboard focus)
  const tip = $("tipbox");
  let tipFor = null, tipRaf = 0;
  function placeTip() {
    const el = tipFor; if (!el) return;
    const b = el.getBoundingClientRect(), w = tip.offsetWidth, hh = tip.offsetHeight;
    const x = Math.max(8, Math.min(innerWidth - w - 8, b.left + b.width / 2 - w / 2));
    let y = b.top - hh - 8; if (y < 104) y = b.bottom + 8;
    tip.style.left = x + "px"; tip.style.top = y + "px";
  }
  function showTip(el) {
    const text = el.dataset.tt; if (!text || !el.isConnected) return;
    if (tipFor && tipFor !== el) tipFor.removeAttribute("aria-describedby");
    tipFor = el; tip.textContent = text; tip.hidden = false; placeTip();
    if (!el.hasAttribute("aria-label")) el.setAttribute("aria-describedby", "tipbox");
    cancelAnimationFrame(tipRaf); tipRaf = requestAnimationFrame(() => tip.classList.add("on"));
  }
  function hideTip() {
    if (tipFor) tipFor.removeAttribute("aria-describedby");
    tipFor = null; cancelAnimationFrame(tipRaf); tip.classList.remove("on"); tip.hidden = true;
  }

  function onClick(e) {
    if (pinned && !e.target.closest(".pop") && !e.target.closest("[data-act=tip]")) hidePop(true);
    const a = e.target.closest("[data-act]"); if (!a) return;
    const act = a.dataset.act, host = a.closest("[data-id]");
    switch (act) {
      case "copy": e.preventDefault(); return copy(a.dataset.copy, a);
      case "fav": {
        const r = host && BY.get(host.dataset.id); if (!r) return;
        const ok = toggleFav(r);
        document.querySelectorAll('[data-id="' + CSS.escape(r.k) + '"] .fav').forEach(b => paintFav(b, r));
        const { cnt } = compute(); COUNTS = cnt; syncSide(cnt); syncPresets();
        toast((r.fv ? "Added to favorites: " : "Removed from favorites: ") + r.n + (ok ? "" : " (browser storage is blocked, not saved)"), ok);
        return;
      }
      case "favexport": return favDownload();
      case "favimport": return $("favfile").click();
      case "tip": { if (pinned && popFor === a) hidePop(true); else { clearTimeout(popT); showPop(a); pinned = true; } return; }
      case "expand": return host && toggleOpen(host.dataset.id, a.dataset.from);
      case "openfrom": { // "+N" overflow: the full list is in the details panel
        if (!host) return;
        const r = BY.get(host.dataset.for || host.dataset.id); if (!r) return;
        if (!isOpen(r)) toggleOpen(r.k);
        return;
      }
      case "facet": return toggleFacet(a.dataset.g, a.dataset.fid, a);
      case "close": { const id = S.openCard; S.openCard = null; closePanel(); const b = cardsEl.querySelector('.card[data-id="' + CSS.escape(id) + '"] .exp'); if (b) b.focus(); return; }
      case "sort": {
        const id = a.dataset.sort;
        const fresh = a.dataset.fresh || S.sort !== id;
        setSort(id, fresh ? (SORT[id].asc ? 1 : -1) : -S.dir);
        const b = document.querySelector('th [data-sort="' + id + '"]'); if (b && a.closest("th")) b.focus();
        return;
      }
      case "dir": { setSort(S.sort, -S.dir); const b = $("resbar").querySelector("[data-act=dir]"); if (b) b.focus(); return; }
      case "view": return setView(a.dataset.v);
      case "theme": return setTheme(isDark() ? "light" : "dark");
      case "drawer": { const s = $("side"), o = !s.classList.contains("open"); s.classList.toggle("open", o); a.setAttribute("aria-expanded", String(o)); if (o) { const f = s.querySelector("input,button"); if (f) f.focus(); } return; }
      case "fold": { const t = $(a.getAttribute("aria-controls")), o = a.getAttribute("aria-expanded") !== "true"; a.setAttribute("aria-expanded", String(o)); t.hidden = !o; return; }
      case "showall": { const k = a.dataset.g; showAll[k] = !showAll[k]; syncTopN(); return; }
      case "preset": return applyPreset(a.dataset.p);
      case "skip": { e.preventDefault(); const t = $(a.getAttribute("href").slice(1)); if (t) { if (t.id === "side" && matchMedia("(max-width:900px)").matches) document.querySelector("[data-act=drawer]").click(); t.focus(); } return; }
      case "suggest": {
        const s = SUGG[+a.dataset.i]; if (!s) return;
        S.q = wordsOf(S.q).filter(x => x !== s.w).join(" "); $("q").value = S.q;
        s.ids.forEach(id => S.sel[s.g].add(id));
        update(); $("q").focus(); return;
      }
      case "anystack": { S.anyStack = a.checked; update(); const t = $("anystack"); if (t) t.focus(); return; }
      case "watch": { S.watch = a.dataset.v === "1"; update(); const n = $("assist").querySelector("[data-act=watch]") || $("q"); n.focus(); return; }
      case "flagged": { S.flagged = a.dataset.v; update(); const n = $("assist").querySelector("[data-act=flagged]") || $("q"); n.focus(); return; }
      case "hidesus": { SUSFLAGS.forEach(f => ALLIDS.flag.has(f) && S.sel.flag.add(f)); update(); $("q").focus(); return; }
      case "relax": {
        const o = RELAX[+a.dataset.i]; if (!o) return;
        const st = cloneState(); o.mutate(st);
        S.q = st.q; $("q").value = S.q; S.added = st.added; S.flagged = st.flagged; S.anyStack = st.anyStack; S.watch = st.watch; S.sel = st.sel;
        update(); $("results").focus(); return;
      }
      case "unchip": {
        const k = a.dataset.g;
        if (k === "anystack") S.anyStack = false;
        else unselect(S, GROUP[k], a.dataset.id);
        update();
        const next = $("chips").querySelector(".chip"); (next || $("q")).focus();
        return;
      }
      case "clearall": {
        S.sel = newSel(); S.added = 0; S.q = ""; S.anyStack = false; S.flagged = "demote"; S.watch = false; $("q").value = "";
        update(); $("q").focus(); return;
      }
    }
  }

  function init() {
    buildSide(); buildTop(); buildPresets(); setTheme();
    readHash(); // view, query, filters and sort all come from the hash before the first render
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", e => {
      const tag = document.activeElement && document.activeElement.tagName;
      if (e.key === "/" && !e.ctrlKey && !e.metaKey && !e.altKey && !/INPUT|SELECT|TEXTAREA/.test(tag)) { e.preventDefault(); $("q").focus(); $("q").select(); return; }
      if (e.key === "Escape") {
        if (tipFor) { hideTip(); return; }
        if (pop && pop.classList.contains("on")) return hidePop(true);
        const s = $("side"); if (s.classList.contains("open")) { s.classList.remove("open"); document.querySelector("[data-act=drawer]").focus(); return; }
        if (S.view === "cards" && S.openCard) { const id = S.openCard; S.openCard = null; closePanel(); const b = cardsEl.querySelector('.card[data-id="' + CSS.escape(id) + '"] .exp'); if (b) b.focus(); }
      }
    });
    document.addEventListener("mouseover", e => {
      const a = e.target.closest("[data-tip]");
      if (a && !a.closest(".pop")) { clearTimeout(popT); popT = setTimeout(() => { if (a.isConnected && a.matches(":hover")) showPop(a); }, a.dataset.tip === "desc" ? 350 : 150); }
      const t = e.target.closest("[data-tt]");
      if (t && t !== tipFor) showTip(t); else if (!t && tipFor && tipFor !== document.activeElement) hideTip();
    });
    document.addEventListener("mouseout", e => { const a = e.target.closest("[data-tip]"); if (a && !a.contains(e.relatedTarget)) hidePop(); });
    document.addEventListener("focusin", e => {
      const a = e.target.closest("[data-tip]"); if (a && !a.closest(".pop") && a.matches(":focus-visible")) { clearTimeout(popT); showPop(a); }
      const t = e.target.closest("[data-tt]"); if (t) showTip(t); else if (tipFor) hideTip();
    });
    document.addEventListener("focusout", e => {
      if (e.target.closest("[data-tip]")) hidePop();
      if (tipFor && e.target === tipFor && !tipFor.matches(":hover")) hideTip();
    });
    addEventListener("scroll", () => { if (pop && pop.classList.contains("on")) hidePop(true); if (tipFor) { tipFor === document.activeElement ? placeTip() : hideTip(); } }, { passive: true, capture: true });
    addEventListener("hashchange", () => { readHash(); update(); });
    matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => setTheme());
    let rt; addEventListener("resize", () => { hidePop(true); hideTip(); clearTimeout(rt); rt = setTimeout(() => { if (S.view === "cards" && S.openCard) placePanel(); }, 150); });
    update();
    PERF.init = +performance.now().toFixed(1);
  }
  init();
})();
