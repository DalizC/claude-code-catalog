/* cc-catalog v3: table + cards views over window.CATALOG (built by build_site.py).
   All data is rendered with DOM APIs / textContent. Only constant icon markup is parsed.
   Star history is lazy-loaded from history/NN.json (needs http; file:// degrades gracefully). */
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
    archive: '<rect x="4" y="5" width="16" height="4" rx="1"/><path d="M5.5 9v9a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V9M10 13h4"/>',
    trend: '<path d="M4 17.5 9.5 12l3.5 3 7-7.5"/><path d="M15 7.5h5v5"/>',
    chart: '<path d="M4 4v16h16"/><path d="m7.5 14.5 3.5-4 3 2.5 5-6"/>',
    info: '<circle cx="12" cy="12" r="8"/><path d="M12 11v5M12 8h.01"/>',
    clock: '<circle cx="12" cy="12" r="8"/><path d="M12 8v4l2.5 2"/>',
    shield: '<path d="M12 3.5 5 6v5.5c0 4.2 2.9 7.4 7 9 4.1-1.6 7-4.8 7-9V6z"/><path d="M12 8.5v4M12 15.5h.01"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
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
  function rel(d) {
    const day = d && dayOf(d);
    if (day == null) return "—";
    return relDays(Math.max(0, REFDAY - day));
  }
  function relDays(days) {
    if (days < 1) return "today";
    if (days < 2) return "yesterday";
    if (days < 31) return days + "d ago";
    if (days < 365) return Math.round(days / 30.4) + "mo ago";
    return (days / 365).toFixed(1).replace(/\.0$/, "") + "y ago";
  }
  const ageText = days => days < 60 ? days + " days" : days < 365 ? Math.round(days / 30.4) + " months" : (days / 365).toFixed(1).replace(/\.0$/, "") + " years";
  const stale = d => { const day = d && dayOf(d); return day != null && REFDAY - day > 90; };
  const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const fdate = t => { const d = new Date(t); return MONTHS[d.getUTCMonth()] + " " + d.getUTCDate() + ", " + d.getUTCFullYear(); };
  const sdate = s => { const t = Date.parse(s + "T00:00:00Z"); return isNaN(t) ? s : fdate(t); };
  const licLabel = l => !l ? "No license" : l === "NOASSERTION" ? "Other license" : l;
  const nf = n => n.toLocaleString("en-US");
  const plural = (n, one, many) => nf(n) + " " + (n === 1 ? one : (many || one + "s"));

  // ---------------------------------------------------------------- vocab
  const TIERS = [
    { id: "anthropic", label: "Anthropic", long: "Made by Anthropic", desc: "Built by Anthropic" },
    { id: "official", label: "Official", long: "In Anthropic's official marketplace", desc: "Official marketplace" },
    { id: "listed", label: "Community", long: "In Anthropic's community marketplace", desc: "Community marketplace" },
    { id: "verified", label: "Verified", long: "Passed our quality checks", desc: "Passed quality checks" },
    { id: "watch", label: "Watch", long: "Not vetted yet", desc: "Unvetted, review first" },
  ];
  const TIER = Object.fromEntries(TIERS.map(t => [t.id, t]));
  const TORD = Object.fromEntries(TIERS.map((t, i) => [t.id, i]));
  const TYPES = ["plugin", "skill", "agent", "marketplace", "mcp-server", "collection"];
  const TLABEL = { "mcp-server": "MCP server" };
  const METHOD = { r: "keyword rules", e: "embeddings", er: "embeddings + rules", f: "fallback (no specific match)" };
  const SOURCE = { listed: "Community marketplace", official: "Official marketplace", curated: "Curated list", search: "GitHub search", "marketplace-expansion": "Another marketplace", "mcp-registry": "MCP Registry" };
  const FLAGS = {
    "star-anomaly": { label: "Star anomaly", short: "Anomaly", tip: "Gained stars unusually fast for its age. Popularity may be inflated.", sus: true },
    "star-spike": { label: "Star spike", short: "Spike", tip: "A sudden jump in stars over the last few days.", sus: true },
    "star-farming": { label: "Unusual star burst", short: "Burst", tip: "One day brought an outsized share of recent stars with no code activity around it. Can be a viral launch or bought stars: don't rely on the star count alone.", sus: true },
    "security-review": { label: "Security: review", short: "Review", tip: "The static scan found patterns worth reviewing before you install.", sec: true },
    "security-high": { label: "Security risk", short: "Risk", tip: "The static scan found high-risk patterns (e.g. remote code execution, credential access).", sec: true, hi: true },
    archived: { label: "Archived", tip: "The repository is archived and no longer maintained." },
  };
  const flagLabel = f => FLAGS[f] ? FLAGS[f].label : f.replace(/[-_]+/g, " ").replace(/^./, c => c.toUpperCase());
  const isSus = f => (FLAGS[f] && FLAGS[f].sus) || /^star-/.test(f);
  const isWarn = f => isSus(f) || /^security-(review|high)$/.test(f); // ranked last in Trending, hidden by "hide flagged"

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
    r.url = safeUrl(r.u || (r.r ? "https://github.com/" + r.r : ""));
    r.own = r.r.includes("/") ? r.r.split("/")[0] : r.url ? new URL(r.url).hostname.replace(/^www\./, "") : "";
    r.disp = r.r ? (r.k !== r.r ? r.k : r.r) : (r.url || r.k).replace(/^https?:\/\/(www\.)?/, "");
    const sec = r.sec && typeof r.sec === "object" && /^(ok|review|high)$/.test(r.sec.lv) ? r.sec : null;
    r.sec = sec;
    r.flg = r.fl.slice();
    if (sec && sec.lv !== "ok") r.flg.push("security-" + sec.lv);
    if (r.a) r.flg.push("archived");
    r.sus = r.flg.some(isWarn);
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

  const ADDED = [{ id: "1", label: "Since yesterday", days: 1 }, { id: "7", label: "Last 7 days", days: 7 }, { id: "30", label: "Last 30 days", days: 30 }];
  const FLAGORDER = ["star-farming", "star-spike", "star-anomaly", "security-high", "security-review", "archived"];
  const GROUPS = [
    { key: "tier", label: "Tier", nodes: TIERS.map(t => ({ id: t.id, label: t.label, dot: t.id, desc: t.desc, kids: [] })), tags: r => [r.tr], hits: r => [r.tr] },
    { key: "added", label: "New in", radio: true, nodes: ADDED.map(a => ({ ...a, kids: [] })) },
    { key: "type", label: "Type", nodes: TYPES.map(t => ({ id: t, label: TLABEL[t] || t[0].toUpperCase() + t.slice(1), icon: t, kids: [] })), tags: r => [r.t], hits: r => [r.t] },
    { key: "tech", label: "Technologies", tree: true, top: 8, nodes: TREES.tech, tags: r => r.lfTech, hits: r => r.hitTech },
    { key: "area", label: "Areas", tree: true, top: 8, nodes: TREES.area, tags: r => r.lfArea, hits: r => r.hitArea },
    { key: "flag", label: "Flags", nodes: [...flagSet].sort((a, b) => ((FLAGORDER.indexOf(a) + 99) % 99) - ((FLAGORDER.indexOf(b) + 99) % 99) || a.localeCompare(b)).map(f => ({ id: f, label: flagLabel(f), icon: f === "archived" ? "archive" : FLAGS[f] && FLAGS[f].sec ? "shield" : "flag", kids: [] })), tags: r => r.flg, hits: r => r.flg },
  ];
  const GROUP = Object.fromEntries(GROUPS.map(g => [g.key, g]));
  const ALLIDS = Object.fromEntries(GROUPS.map(g => [g.key, new Set(g.nodes.flatMap(n => [n.id, ...n.kids.map(k => k.id)]))]));
  const NODE = Object.fromEntries(GROUPS.map(g => [g.key, Object.fromEntries(g.nodes.flatMap(n => [[n.id, n], ...n.kids.map(k => [k.id, k])]))]));

  const SORTS = [
    { id: "stars", label: "Stars", get: r => r.s, dir: -1 },
    { id: "t7", label: "Trending · 7d", get: r => r.t7, dir: -1, trend: true },
    { id: "t30", label: "Trending · 30d", get: r => r.t30, dir: -1, trend: true },
    { id: "pushed", label: "Last activity", get: r => r.p || null, dir: -1 },
    { id: "added", label: "Recently added", get: r => r.fs || null, dir: -1 },
    { id: "name", label: "Name", get: r => r.nl, dir: 1 },
    { id: "tier", label: "Tier", get: r => TORD[r.tr], dir: 1 },
    { id: "type", label: "Type", get: r => r.t || null, dir: 1 },
    { id: "items", label: "Items", get: r => r.nit, dir: -1 },
  ];
  const SORT = Object.fromEntries(SORTS.map(s => [s.id, s]));

  // ---------------------------------------------------------------- state
  const newSel = () => Object.fromEntries(GROUPS.filter(g => !g.radio).map(g => [g.key, new Set()]));
  const S = {
    view: "table", q: "", sort: "stars", dir: -1, added: 0, flagged: "demote", anyStack: false, watch: false, // watch: show the Watch tier when no tier is selected (default: hidden)
   
    sel: newSel(),
    flip: new Set(), open: new Set(), openCard: null,
  };
  let LIST = [], COUNTS = null, HIDDEN_SUS = 0, SUS_IN = 0, shown = 0;
  const PERF = window.__ccPerf = { updates: [] };

  // ---------------------------------------------------------------- filtering
  const wordsOf = q => q ? q.toLowerCase().split(/\s+/).filter(Boolean) : [];
  function passes(g, r, st) {
    if (g.radio) return !st.added || r.age < st.added;
    const sel = st.sel[g.key];
    if (!sel.size) return g.key === "tier" && !st.watch ? r.tr !== "watch" : true;
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
  function compute() {
    const words = wordsOf(S.q), hide = S.flagged === "hide";
    const res = [], cnt = {};
    let hidden = 0;
    GROUPS.forEach(g => (cnt[g.key] = Object.create(null)));
    outer: for (let i = 0; i < R.length; i++) {
      const r = R[i];
      for (let w = 0; w < words.length; w++) if (!r.hay.includes(words[w])) continue outer;
      let fails = 0, fg = null;
      for (let k = 0; k < GROUPS.length; k++) if (!passes(GROUPS[k], r, S)) { fails++; fg = GROUPS[k]; if (fails > 1) break; }
      if (hide && r.sus) { if (fails === 0) hidden++; continue; }
      if (fails === 0) { res.push(r); for (let k = 0; k < GROUPS.length; k++) addCounts(cnt, GROUPS[k], r); }
      else if (fails === 1) addCounts(cnt, fg, r);
    }
    const s = SORT[S.sort], dir = S.dir, demote = s.trend && S.flagged === "demote";
    res.sort((a, b) => {
      if (demote && a.sus !== b.sus) return a.sus ? 1 : -1;
      const x = s.get(a), y = s.get(b);
      if (x == null || y == null) { if (x != null) return -1; if (y != null) return 1; }
      else { const c = (x < y ? -1 : x > y ? 1 : 0) * dir; if (c) return c; }
      return ((b.s ?? -1) - (a.s ?? -1)) || a.i - b.i;
    });
    return { res, cnt, hidden };
  }
  // count matches for an arbitrary state (zero-result recovery, search suggestions)
  function countFor(st) {
    const words = wordsOf(st.q), hide = st.flagged === "hide";
    let n = 0;
    outer: for (let i = 0; i < R.length; i++) {
      const r = R[i];
      if (hide && r.sus) continue;
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
      else if ((m = /^stars>=(\d+)\s*\((-?\d+)\)/.exec(s))) fail ? no("Only " + nf(+m[2]) + " stars (needs " + nf(+m[1]) + "+)") : ok(fmt(+m[2]) + " stars");
      else if ((m = /^age>=(\d+)d\s*\((-?\d+)\)/.exec(s))) fail ? no("Repo is only " + ageText(Math.max(0, +m[2])) + " old (needs " + m[1] + "+ days)") : ok("Repo is " + ageText(+m[2]) + " old");
      else if ((m = /^pushed<=(\d+)d\s*\((-?\d+)\)/.exec(s))) {
        const d = Math.max(0, +m[2]);
        fail ? no("Last updated " + relDays(d) + " (needs an update within " + m[1] + " days)") : ok(d < 1 ? "Updated today" : "Updated " + relDays(d));
      }
      else if ((m = /^license\s*\((.*)\)/.exec(s))) {
        const l = m[1];
        if (fail) no(l === "None" || !l ? "No license" : l === "NOASSERTION" ? "License not recognized" : "License " + l + " not accepted");
        else ok(l + " license");
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
      else if (/^registry namespace verified/i.test(s)) no("Listed in the official MCP Registry (namespace verified), but no public source code to judge");
      else if (/^no corroborating signal/.test(s)) no("Not in a curated list, and no independent signal (forks, multiple sources, organization)");
      else if (/^curated but stale\/archived/.test(s)) no("In a curated list, but stale or archived");
      else if (/^stale\/archived/.test(s)) no("Stale or archived");
      else (fail ? no : ok)(s);
    }
    return out;
  }
  function reasonList(r, cls) {
    const lines = reasonLines(r);
    if (!lines.length) return null;
    return h("ul", { class: "reasons" + (cls ? " " + cls : "") }, lines.map(([good, t]) => h("li", { class: good ? "ok" : "no" }, ic(good ? "check" : "x"), h("span", null, h("span", { class: "sr" }, good ? "Pass: " : "Fail: "), t))));
  }
  const rankLine = () => h("p", { class: "rank" }, "Tiers rank: ", TIERS.map((t, i) => [i ? h("span", { class: "gt", "aria-hidden": "true" }, " › ") : null, h("span", { class: "tn tc-" + t.id }, t.label)]), h("span", { class: "sr" }, ", highest trust first"));

  // ---------------------------------------------------------------- pieces
  function tierBadge(r) {
    return h("button", { type: "button", class: "tier tier-" + r.tr, "data-tip": "tier", "data-act": "tip", "aria-label": "Tier: " + TIER[r.tr].label + ". Show why." }, TIER[r.tr].label);
  }
  function typeTag(r, withItems) {
    return h("span", { class: "type", title: (r.t || "unknown type") + (withItems ? " · " + plural(r.nit, "item") : "") }, ic(TYPES.includes(r.t) ? r.t : "collection"), h("span", { class: "tt" }, TLABEL[r.t] || r.t || "—"),
      withItems ? h("span", { class: "ni", "aria-label": plural(r.nit, "item") }, "· " + r.nit) : null);
  }
  function flagPills(r) {
    return r.flg.map(f => {
      const F = FLAGS[f] || {};
      const cls = "flag" + (F.hi ? " hi" : f === "archived" ? " arch" : "");
      const b = h("button", { type: "button", class: cls, "data-tip": "flag", "data-act": "tip", "data-flag": f, "aria-label": flagLabel(f) + ". " + (F.tip || "") }, ic(f === "archived" ? "archive" : F.sec ? "shield" : "flag"), h("span", { class: "fl-l" }, flagLabel(f)), h("span", { class: "fl-s", "aria-hidden": "true" }, F.short || flagLabel(f)));
      return b;
    });
  }
  function nameLink(r) {
    return r.url
      ? h("a", { class: "nm", href: r.url, target: "_blank", rel: "noopener noreferrer", "data-tip": "desc" }, r.n)
      : h("span", { class: "nm", tabindex: "0", "data-tip": "desc" }, r.n);
  }
  // summary tags: most specific first (children before parents, a parent implied by a child is dropped),
  // general-purpose fallbacks as a single muted pill at the end
  function summaryTags(r) {
    const spec = (g, list) => {
      const set = new Set(list);
      const kids = list.filter(t => PARENT[g][t]), rest = list.filter(t => !PARENT[g][t] && !(KIDS[g][t] || []).some(k => set.has(k)));
      return [...kids, ...rest].map(t => [g, t]);
    };
    const out = [...spec("area", r.spArea), ...spec("tech", r.spTech)];
    const parentsDropped = [...r.spArea.filter(t => (KIDS.area[t] || []).some(k => r.spArea.includes(k))).map(t => ["area", t]), ...r.spTech.filter(t => (KIDS.tech[t] || []).some(k => r.spTech.includes(k))).map(t => ["tech", t])];
    return { out, parentsDropped, fb: out.length ? (r.fbTech.length ? "Any stack" : null) : (r.fbTech.length || r.fbArea.length ? "General purpose" : null) };
  }
  function tagsEl(r) {
    const box = h("div", { class: "tags", "data-fit": "" });
    if (!r.tg.length && !r.ar.length) { box.append(h("span", { class: "tag none", title: "Not classified yet" }, "—")); return box; }
    const { out, fb } = summaryTags(r);
    out.forEach(([g, t]) => box.append(h("span", { class: "tag " + g, title: (g === "tech" ? "Technology: " : "Area: ") + LABEL[g][t] }, LABEL[g][t])));
    if (fb) box.append(h("span", { class: "tag fb", title: r.anyStack ? "No specific technology: works with any stack" : "General purpose (no specific area)" }, fb));
    box.append(h("span", { class: "tag plus", hidden: true }));
    return box;
  }
  // fit-based "+N": hide chips that do not fit instead of clipping them mid-word
  function fitTags(scope) {
    const boxes = [...scope.querySelectorAll(".tags[data-fit]")].filter(b => b.offsetParent !== null);
    boxes.forEach(b => { for (const k of b.children) { k.hidden = k.classList.contains("plus"); k.style.maxWidth = ""; } });
    const reads = boxes.map(b => ({ b, w: b.clientWidth, ws: [...b.children].map(k => k.classList.contains("plus") ? 0 : k.offsetWidth) }));
    const GAP = 4, PLUS = 30;
    reads.forEach(({ b, w, ws }) => {
      const kids = [...b.children], plus = kids[kids.length - 1], chips = kids.slice(0, -1);
      if (!chips.length || !plus.classList.contains("plus")) return;
      let total = ws.slice(0, -1).reduce((a, x) => a + x, 0) + GAP * (chips.length - 1);
      if (total <= w) return;
      let used = 0, k = 0;
      for (; k < chips.length; k++) { const nx = used + (k ? GAP : 0) + ws[k]; if (nx + GAP + PLUS > w) break; used = nx; }
      if (k === 0) { k = 1; chips[0].style.maxWidth = Math.max(40, w - GAP - PLUS) + "px"; }
      const rest = chips.slice(k);
      rest.forEach(c => (c.hidden = true));
      plus.hidden = false;
      plus.textContent = "+" + rest.length;
      const names = rest.map(c => c.textContent);
      plus.title = names.join(", ");
      plus.setAttribute("aria-label", rest.length + " more: " + names.join(", "));
    });
  }
  function trendBtn(r, both) {
    const label = "Star trend " + (r.t7 == null ? "not available" : signed(r.t7) + " in 7 days") + (r.t30 == null ? "" : ", " + signed(r.t30) + " in 30 days") + ". " + (S.flip.has(r.k) ? "Hide" : "Show") + " star history for " + r.n;
    const tv = h("span", { class: "tv" }, h("span", { class: "t7 " + trendCls(r.t7) }, signed(r.t7)), both ? h("span", { class: "t30 " + trendCls(r.t30) }, signed(r.t30)) : h("span", { class: "nd u" }, "7d"));
    return h("button", { class: "trend", type: "button", "data-act": "hist", "aria-pressed": String(S.flip.has(r.k)), "aria-label": label, title: S.flip.has(r.k) ? "Back to details" : "Show star history" }, tv, ic("chart"));
  }
  function expandBtn(r, open, ctrl) {
    return h("button", { class: "exp", type: "button", "data-act": "expand", "aria-expanded": String(open), "aria-controls": open ? ctrl : null, "aria-label": "Details and install for " + r.n }, ic("chev"));
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
  function histEl(r) {
    const hr = h("span", { class: "hr", "aria-live": "polite" });
    const stats = h("div", { class: "hstats" },
      h("b", null, ic("star"), " " + fmt(r.s)),
      h("span", { class: trendCls(r.t7) }, signed(r.t7) + " · 7d"),
      h("span", { class: trendCls(r.t30) }, signed(r.t30) + " · 30d"), hr);
    const chart = h("div", { class: "chart" }, h("div", { class: "skel", role: "status", "aria-label": "Loading star history" }));
    (r.r ? loadSeries(r.r) : Promise.resolve({ status: "ok", pts: null })).then(res => {
      if (res.status === "ok" && res.pts) { chart._pts = res.pts; chart._r = r; chart._hr = hr; chart.textContent = ""; RO.observe(chart); drawChart(chart); return; }
      const compact = !!chart.closest(".card");
      const msg = res.status === "file"
        ? [h("b", null, "History needs a local server"), compact ? null : h("span", null, "Run ", h("code", null, "python -m http.server -d site"), " and open localhost:8000.")]
        : res.status === "error"
          ? [h("b", null, "History could not be loaded"), compact ? null : h("span", null, "The history file failed to download. Try again later.")]
          : [h("b", null, "History not available yet"), compact ? null : h("span", null, "Star history is backfilled gradually by the daily build.")];
      chart.replaceChildren(h("div", { class: "hstate" }, ic("clock"), h("div", null, ...msg)));
    });
    return h("div", { class: "hist" }, stats, chart);
  }
  const RO = new ResizeObserver(entries => entries.forEach(e => { if (e.target.isConnected) drawChart(e.target); else RO.unobserve(e.target); }));
  function drawChart(el) {
    const pts = el._pts, r = el._r;
    const w = Math.floor(el.clientWidth), H = Math.floor(el.clientHeight);
    if (!pts || w < 40 || H < 30) return;
    if (el._w === w && el._h === H) return;
    el._w = w; el._h = H;
    const compact = w < 260;
    const RP = compact ? 34 : 44, T = 7, B = 16, cw = w - RP, ch = H - T - B;
    const t0 = pts[0].t, t1 = pts[pts.length - 1].t;
    let lo = Infinity, hi = -Infinity;
    pts.forEach(p => { if (p.v < lo) lo = p.v; if (p.v > hi) hi = p.v; });
    if (hi === lo) hi = lo + 1;
    const X = t => t1 === t0 ? cw : ((t - t0) / (t1 - t0)) * cw;
    const Y = v => T + ch - ((v - lo) / (hi - lo)) * ch;
    const line = pts.map((p, i) => (i ? "L" : "M") + X(p.t).toFixed(1) + " " + Y(p.v).toFixed(1)).join("");
    const svg = sv("svg", { width: w, height: H, role: "img", "aria-label": "Star history for " + r.n + ": " + fmt(lo) + " to " + fmt(hi) + " stars, " + fdate(t0) + " to " + fdate(t1) });
    const mid = Math.round((lo + hi) / 2);
    svg.append(
      sv("line", { class: "grid", x1: 0, x2: cw, y1: T + 0.5, y2: T + 0.5 }),
      sv("line", { class: "grid dash", x1: 0, x2: cw, y1: Math.round(T + ch / 2) + 0.5, y2: Math.round(T + ch / 2) + 0.5 }),
      sv("line", { class: "grid", x1: 0, x2: cw, y1: T + ch + 0.5, y2: T + ch + 0.5 }),
      sv("path", { class: "a", d: line + "L" + X(t1).toFixed(1) + " " + (T + ch) + "L" + X(t0).toFixed(1) + " " + (T + ch) + "Z" }),
      sv("path", { class: "l", d: line }),
      sv("circle", { cx: X(t1).toFixed(1), cy: Y(pts[pts.length - 1].v).toFixed(1), r: 3 }));
    const txt = (x, y, s, anchor) => { const t = sv("text", { x, y }); if (anchor) t.setAttribute("text-anchor", anchor); t.textContent = s; return t; };
    svg.append(txt(cw + 6, T + 4, fmt(hi)), txt(cw + 6, Math.round(T + ch / 2) + 4, fmt(mid)), txt(cw + 6, T + ch + 3, fmt(lo)),
      txt(0, H - 2, compact ? MONTHS[new Date(t0).getUTCMonth()] + " '" + String(new Date(t0).getUTCFullYear()).slice(2) : fdate(t0)),
      txt(cw, H - 2, compact ? "now" : fdate(t1), "end"));
    const cross = sv("line", { class: "cross", x1: 0, x2: 0, y1: T, y2: T + ch, visibility: "hidden" });
    const dot = sv("circle", { class: "hov", r: 3.5, cx: 0, cy: 0, visibility: "hidden" });
    const hit = sv("rect", { x: 0, y: 0, width: cw, height: H, fill: "transparent" });
    svg.append(cross, dot, hit);
    const hr = el._hr;
    hit.addEventListener("pointermove", e => {
      const x = e.clientX - svg.getBoundingClientRect().left, t = t0 + (x / cw) * (t1 - t0);
      let best = pts[0];
      for (const p of pts) if (Math.abs(p.t - t) < Math.abs(best.t - t)) best = p;
      const px = Math.round(X(best.t)) + 0.5;
      cross.setAttribute("x1", px); cross.setAttribute("x2", px); cross.setAttribute("visibility", "visible");
      dot.setAttribute("cx", X(best.t)); dot.setAttribute("cy", Y(best.v)); dot.setAttribute("visibility", "visible");
      if (hr) hr.replaceChildren(h("b", null, nf(best.v)), " · " + fdate(best.t));
    });
    hit.addEventListener("pointerleave", () => { cross.setAttribute("visibility", "hidden"); dot.setAttribute("visibility", "hidden"); if (hr) hr.textContent = rangeText(pts); });
    if (hr) hr.textContent = rangeText(pts);
    el.replaceChildren(svg);
  }
  const rangeText = pts => pts.length + " daily points";
  // 90-day sparkline for the trust strip
  function sparkEl(r) {
    const box = h("div", { class: "spark" });
    if (!r.r || location.protocol === "file:") return null;
    loadSeries(r.r).then(res => {
      if (!box.isConnected && !box.parentNode) return;
      if (res.status !== "ok" || !res.pts) { box.replaceChildren(h("span", { class: "nd" }, "No star history yet")); return; }
      const cut = res.pts[res.pts.length - 1].t - 90 * DAY, pts = res.pts.filter(p => p.t >= cut);
      if (pts.length < 2) { box.replaceChildren(h("span", { class: "nd" }, "Not enough history yet")); return; }
      const W = 120, H = 28;
      let lo = Infinity, hi = -Infinity; pts.forEach(p => { lo = Math.min(lo, p.v); hi = Math.max(hi, p.v); }); if (hi === lo) hi = lo + 1;
      const t0 = pts[0].t, t1 = pts[pts.length - 1].t;
      const X = t => ((t - t0) / Math.max(1, t1 - t0)) * W, Y = v => 2 + (H - 4) - ((v - lo) / (hi - lo)) * (H - 4);
      const d = pts.map((p, i) => (i ? "L" : "M") + X(p.t).toFixed(1) + " " + Y(p.v).toFixed(1)).join("");
      const svg = sv("svg", { width: W, height: H, viewBox: "0 0 " + W + " " + H, role: "img", "aria-label": "Stars over the last 90 days: " + fmt(pts[0].v) + " to " + fmt(pts[pts.length - 1].v) });
      svg.append(sv("path", { class: "a", d: d + "L" + W + " " + H + "L0 " + H + "Z" }), sv("path", { class: "l", d }));
      box.replaceChildren(svg, h("span", { class: "nd" }, "90 days"));
    });
    return box;
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
  function stepsBox(r, it, steps) {
    const cmds = steps.filter(s => s.kind === "cmd");
    const box = h("div", { class: "steps" });
    if (cmds.length) {
      const pre = h("ol", { class: "cmds" + (cmds.length > 1 ? " multi" : "") }, cmds.map(s => h("li", null, h("code", null, s.text))));
      const all = cmds.map(s => s.text).join("\n");
      const b = h("button", { class: "copy", type: "button", "data-act": "copy", "aria-label": (cmds.length > 1 ? "Copy all " + cmds.length + " install steps for " : "Copy install command for ") + (it.n || r.n) },
        ic("copy"), h("span", { class: "cl" }, cmds.length > 1 ? "Copy all " + cmds.length + " steps" : "Copy"));
      b.dataset.copy = all;
      box.append(h("div", { class: "cmdbox" }, pre, b));
    }
    steps.forEach(s => {
      if (s.kind === "hint") box.append(h("div", { class: "hintx" }, s.text));
      if (s.kind === "link") { const url = s.url || r.url; if (url) box.append(h("a", { class: "readme", href: url, target: "_blank", rel: "noopener noreferrer" }, ic("ext"), "See the README for install steps")); }
    });
    if (!steps.length) box.append(h("div", { class: "hintx" }, "No install hint"));
    return box;
  }
  function itemEl(r, it, showVia) {
    const steps = installSteps(it.i), via = viaOf(steps, r);
    return h("li", null,
      h("div", { class: "in" }, h("b", null, it.n || r.n), h("span", { class: "it" }, it.t || (r.t === "mcp-server" ? "mcp-server" : "")), showVia && via ? h("span", { class: "via" + (via.rank === 0 ? " rec" : "") }, via.label + (via.rank === 0 ? " · recommended" : "")) : null),
      it.d ? h("div", { class: "id" }, it.d) : null,
      stepsBox(r, it, steps));
  }
  function installEl(r) {
    // group same-named items (one plugin listed by several marketplaces): best path first, alternates folded
    const groups = new Map();
    r.it.forEach(it => { const k = (it.n || r.n).toLowerCase(); if (!groups.has(k)) groups.set(k, []); groups.get(k).push(it); });
    const ul = h("ul", { class: "items" });
    groups.forEach(list => {
      if (list.length === 1) { ul.append(itemEl(r, list[0], !!viaOf(installSteps(list[0].i), r) && r.it.length > 1)); return; }
      const ranked = list.map(it => ({ it, v: viaOf(installSteps(it.i), r) })).sort((a, b) => (a.v ? a.v.rank : 9) - (b.v ? b.v.rank : 9));
      const li = itemEl(r, ranked[0].it, true);
      const alt = h("details", { class: "alt" }, h("summary", null, "Other ways to install (" + (ranked.length - 1) + ")"),
        h("ul", { class: "items" }, ranked.slice(1).map(x => itemEl(r, x.it, true))));
      li.append(alt);
      ul.append(li);
    });
    if (r.nit > r.it.length) ul.append(h("li", { class: "morei" }, "+ " + (r.nit - r.it.length) + " more items in the repository"));
    return ul;
  }

  // ---------------------------------------------------------------- detail (expanded row / card panel)
  function securityEl(r) {
    const sec = r.sec;
    if (!sec) return null;
    if (sec.lv === "ok") return null;
    const n = isNum(sec.n) ? sec.n : (sec.f || []).length;
    const list = h("ul", { class: "findings" }, (Array.isArray(sec.f) ? sec.f : []).map(f => h("li", null,
      h("div", { class: "fh" }, h("span", { class: "sev sev-" + (/^(high|critical)$/i.test(f.s) ? "hi" : "md") }, String(f.s || "note")), h("b", null, String(f.r || "finding")),
        f.p ? h("span", { class: "loc" }, String(f.p) + (isNum(f.l) ? ":" + f.l : "")) : null),
      f.x ? h("code", { class: "ex" }, String(f.x)) : null)));
    const more = n > (sec.f || []).length ? h("p", { class: "nd" }, "+ " + plural(n - sec.f.length, "more finding", "more findings")) : null;
    return h("section", { class: "secbox " + (sec.lv === "high" ? "hi" : "md"), "aria-label": "Security scan findings" },
      h("div", { class: "sh" }, ic("shield"), h("b", null, sec.lv === "high" ? "High-risk patterns found" : "Patterns worth reviewing"),
        h("span", { class: "nd" }, plural(n, "finding") + (sec.at ? " · scanned " + sdate(sec.at) : "") + " · static scan, not executed")),
      list, more);
  }
  function detailEl(r) {
    const words = wordsOf(S.q);
    const verdict = h("div", { class: "verdict" }, h("span", { class: "tier tier-" + r.tr }, TIER[r.tr].label), h("b", null, TIER[r.tr].long));
    const facts = h("div", { class: "facts" },
      h("span", null, ic("star"), h("b", null, nf(r.s || 0)), " stars"),
      r.f ? h("span", null, h("b", null, nf(r.f)), " forks") : null,
      h("span", { class: stale(r.p) ? "old" : null }, "Updated " + rel(r.p)),
      h("span", null, licLabel(r.l)),
      h("span", null, h("span", { class: trendCls(r.t7) }, signed(r.t7)), " 7d · ", h("span", { class: trendCls(r.t30) }, signed(r.t30)), " 30d"),
      r.sec && r.sec.lv === "ok" ? h("span", { class: "up" }, ic("shield"), "Security scan: no findings") : null);
    const flagsRow = r.flg.length ? h("div", { class: "flagrow" }, r.flg.map(f => h("span", { class: "flag" + (FLAGS[f] && FLAGS[f].hi ? " hi" : f === "archived" ? " arch" : "") }, ic(f === "archived" ? "archive" : FLAGS[f] && FLAGS[f].sec ? "shield" : "flag"), h("span", null, flagLabel(f) + (FLAGS[f] ? ": " + FLAGS[f].tip : ""))))) : null;
    const trust = h("section", { class: "trust", "aria-label": "Trust summary" },
      h("div", { class: "tl" }, verdict, reasonList(r, "inline"), flagsRow),
      h("div", { class: "tr" }, facts, sparkEl(r)));
    const tagPills = (g, list, fb) => [...list.map(t => h("span", { class: "tag " + g }, LABEL[g][t])), ...fb.map(t => h("span", { class: "tag fb" }, g === "tech" ? "Any stack" : "General purpose"))];
    const tags = h("div", { class: "dtags" },
      h("div", null, h("h4", null, "Technologies"), r.tg.length ? tagPills("tech", r.spTech, r.fbTech) : h("span", { class: "nd" }, "Not classified")),
      h("div", null, h("h4", null, "Areas"), r.ar.length ? tagPills("area", r.spArea, r.fbArea) : h("span", { class: "nd" }, "Not classified")));
    const src = r.src.map(s => SOURCE[s] || s);
    const foot = h("p", { class: "prov" },
      src.length ? h("span", null, "Found via " + [...new Set(src)].join(", ")) : null,
      r.cm || r.tg.length ? h("span", null, "Tagged by " + (METHOD[r.cm] || "auto") + (TAX.placeholder ? " (provisional taxonomy)" : "")) : null,
      r.fs ? h("span", null, "First seen " + sdate(r.fs)) : null,
      r.al.length ? h("span", null, "Also known as " + r.al.join(", ")) : null,
      r.url ? h("a", { href: r.url, target: "_blank", rel: "noopener noreferrer" }, r.url.replace(/^https?:\/\/(www\.)?/, "")) : null);
    return h("div", { class: "detail" },
      trust,
      securityEl(r),
      h("div", { class: "dbody" },
        h("div", { class: "dmain" }, h("p", { class: "dd" }, ...(r.d ? hl(r.d, words) : ["No description provided."])), h("h4", null, "Install · " + plural(r.nit, "item")), installEl(r)),
        h("div", { class: "dside" }, tags)),
      foot);
  }

  // ---------------------------------------------------------------- table
  const tbody = $("tbody"), cardsEl = $("cardview");
  function rowEl(r) {
    const flipped = S.flip.has(r.k), open = S.open.has(r.k);
    const tr = h("tr", { class: "r" + (r.sus ? " sus" : ""), "data-id": r.k, "data-view": flipped ? "hist" : "norm", "data-open": String(open) });
    tr.append(
      h("td", { class: "ec" }, expandBtn(r, open, "d-" + r.i)),
      h("td", { class: "nmc" }, h("div", { class: "nmcell" + (r.flg.length ? " hasflag" : "") }, nameLink(r), r.own ? h("span", { class: "ow" }, r.own) : null, flagPills(r))),
      h("td", { class: "tic" }, tierBadge(r)));
    if (flipped) tr.append(h("td", { class: "histcell", colspan: "3" }, histEl(r)));
    else tr.append(
      h("td", { class: "tyc" }, h("div", { class: "typec" }, typeTag(r, true))),
      h("td", { class: "tgc" }, tagsEl(r)),
      h("td", { class: "num" }, fmt(r.s)));
    const old = stale(r.p);
    tr.append(
      h("td", { class: "trc" }, trendBtn(r, true)),
      h("td", { class: "ac" }, h("div", { class: "act" },
        h("span", { class: old ? "old" : null, title: r.p ? "Last push " + r.p + " · " + licLabel(r.l) : "Last push unknown" }, rel(r.p)),
        h("span", { class: "lic", title: !r.l ? "No license detected" : r.l === "NOASSERTION" ? "Unrecognized / custom license (NOASSERTION)" : r.l }, licLabel(r.l)))));
    return tr;
  }
  const moreRow = r => h("tr", { class: "more", id: "d-" + r.i, "data-for": r.k }, h("td", { colspan: "8" }, detailEl(r)));

  // ---------------------------------------------------------------- cards
  function cardEl(r) {
    const flipped = S.flip.has(r.k), open = S.openCard === r.k;
    const swap = h("div", { class: "swap" });
    if (flipped) swap.append(histEl(r));
    else swap.append(h("p", { class: "d" + (r.d ? "" : " nodesc") }, r.d || "No description provided."), tagsEl(r));
    const old = stale(r.p);
    return h("article", { class: "card" + (r.sus ? " sus" : ""), role: "listitem", "data-id": r.k, "data-view": flipped ? "hist" : "norm", "data-open": String(open), "aria-label": r.n },
      h("div", { class: "ch" }, h("div", { class: "who" }, nameLink(r), h("span", { class: "ow" }, r.own)), tierBadge(r)),
      r.flg.length ? h("div", { class: "cflags" }, flagPills(r)) : null,
      swap,
      h("div", { class: "meta" }, typeTag(r, r.nit > 1),
        h("span", { class: "s", "aria-label": nf(r.s || 0) + " stars" }, ic("star"), fmt(r.s)),
        h("span", { class: "pu" + (old ? " old" : ""), title: r.p ? "Last push " + r.p : "Last push unknown" }, rel(r.p)),
        h("span", { class: "grow" }), trendBtn(r, false), expandBtn(r, open, "panel")));
  }
  function closePanel() {
    const p = $("panel"); if (!p) return;
    const c = cardsEl.querySelector('.card[data-id="' + CSS.escape(p.dataset.for) + '"]');
    p.remove();
    if (c) { c.dataset.open = "false"; const b = c.querySelector("[data-act=expand]"); b.setAttribute("aria-expanded", "false"); b.removeAttribute("aria-controls"); }
  }
  function placePanel() {
    closePanel();
    const id = S.openCard; if (!id) return;
    const c = cardsEl.querySelector('.card[data-id="' + CSS.escape(id) + '"]');
    if (!c) return;
    const r = BY.get(id);
    c.dataset.open = "true";
    const b = c.querySelector("[data-act=expand]"); b.setAttribute("aria-expanded", "true"); b.setAttribute("aria-controls", "panel");
    let last = c;
    for (let n = c.nextElementSibling; n && n.classList.contains("card") && n.offsetTop === c.offsetTop; n = n.nextElementSibling) last = n;
    const p = h("section", { class: "panel", id: "panel", "data-id": r.k, "aria-label": "Details for " + r.n },
      h("div", { class: "ph" }, h("b", null, r.n), h("span", { class: "ow" }, r.disp), typeTag(r, false),
        h("button", { class: "exp x", type: "button", "data-act": "close", "aria-label": "Close details" }, ic("x"))),
      detailEl(r));
    p.dataset.for = r.k;
    last.after(p);
  }

  // ---------------------------------------------------------------- zero results: relax one constraint at a time
  let RELAX = [];
  function relaxOptions() {
    const opts = [];
    const add = (label, mutate) => { const st = cloneState(); mutate(st); opts.push({ label, n: countFor(st), mutate }); };
    const words = S.q.split(/\s+/).filter(Boolean);
    words.forEach((w, i) => add("Remove “" + w + "” from search", st => { st.q = words.filter((_, j) => j !== i).join(" "); }));
    if (words.length > 1) add("Clear the search", st => { st.q = ""; });
    GROUPS.forEach(g => chipsFor(g).forEach(([, id, l]) => add("Remove " + g.label + ": " + l, st => unselect(st, g, id))));
    if (S.sel.tech.size && !S.anyStack) add("Include stack-agnostic tools", st => { st.anyStack = true; });
    if (S.flagged === "hide") add("Include flagged repos", st => { st.flagged = "demote"; });
    if (!S.sel.tier.size && !S.watch) add("Include Watch tier", st => { st.watch = true; });
    if (S.sel.tier.size > 1) add("Search all tiers", st => { st.sel.tier.clear(); st.watch = true; });
    const seen = new Set();
    return opts.filter(o => !seen.has(o.label) && seen.add(o.label)).sort((a, b) => b.n - a.n);
  }
  function emptyEl() {
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
    hidePop(true); // E9: never leave a popover pointing at a row that is about to disappear
    shown = 0;
    tbody.textContent = "";
    cardsEl.textContent = "";
    if (!LIST.length) {
      if (S.view === "table") tbody.append(h("tr", { class: "emptyrow" }, h("td", { colspan: "8" }, emptyEl())));
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
  const sepRow = () => h("tr", { class: "sep" }, h("td", { colspan: "8" }, ic("flag"), "Flagged repos (suspicious stars or security findings), ranked last"));
  new IntersectionObserver(es => { if (es.some(e => e.isIntersecting) && shown < LIST.length) more(); }, { rootMargin: "0px 0px 1200px 0px" }).observe($("sentinel"));
  let lastW = 0;
  new ResizeObserver(es => { const w = Math.round(es[0].contentRect.width); if (w !== lastW) { lastW = w; fitTags($("results")); } }).observe($("results"));

  // ---------------------------------------------------------------- sidebar
  const sideRows = new Map(); // "g:id" -> {row, input, c, li}
  const groupHeads = {};
  const showAll = {};
  function nodeLi(g, n) {
    const hasKids = n.kids.length > 0, id = "f-" + g.key + "-" + n.id.replace(/[^\w-]/g, "_");
    const input = g.radio ? h("input", { type: "radio", name: "f-" + g.key, value: n.id, id }) : h("input", { type: "checkbox", id });
    input.dataset.g = g.key; input.dataset.id = n.id;
    const c = h("span", { class: "c" });
    const row = h("div", { class: "frow" + (n.desc ? " hasdesc" : "") + (n.other ? " other" : "") },
      g.tree ? (hasKids ? h("button", { class: "tw", type: "button", "data-act": "fold", "aria-expanded": "false", "aria-controls": id + "-k", "aria-label": "Show " + n.label + " subcategories" }, ic("chev")) : h("span", { class: "tw ph" })) : null,
      h("label", { for: id }, input, n.dot ? h("span", { class: "dot d-" + n.dot }) : n.icon ? ic(n.icon) : null,
        h("span", { class: "lbl" }, n.label, n.desc ? h("small", null, n.desc) : null), c));
    const li = h("li", null, row);
    sideRows.set(g.key + ":" + n.id, { row, input, c, li });
    if (hasKids) li.append(h("ul", { id: id + "-k", hidden: true }, n.kids.map(k => nodeLi(g, k))));
    return li;
  }
  function buildSide() {
    const side = $("side");
    const gen = Date.parse(C.generated_at || "");
    side.append(h("div", { class: "brand" }, h("span", { class: "logo", "aria-hidden": "true" }, "cc"), "Extensions catalog",
      h("small", null, nf(R.length) + " repos", isNaN(gen) ? null : h("i", { title: "Catalog generated " + C.generated_at }, "updated " + MONTHS[new Date(gen).getUTCMonth()] + " " + new Date(gen).getUTCDate()))));
    GROUPS.forEach(g => {
      if (!g.nodes.length) return;
      const bodyId = "fg-" + g.key, n = h("span", { class: "n" });
      groupHeads[g.key] = n;
      const body = h("div", { class: "fbody", id: bodyId });
      if (g.key === "tier") body.append(h("p", { class: "fnote rk" }, "Ranked by trust, highest first"));
      if (g.key === "tech") body.append(h("p", { class: "fnote prov" }, ic("info"), h("span", null, (TAX.placeholder ? "Provisional taxonomy. " : "") + "Tags are auto-classified. A repo can carry several tags, so counts overlap.")));
      const ul = h("ul", { class: "facets", role: g.radio ? "radiogroup" : null, "aria-label": g.label });
      if (g.radio) ul.append(nodeLi(g, { id: "", label: "Any time", kids: [] }));
      g.nodes.forEach(nd => ul.append(nodeLi(g, nd)));
      body.append(ul);
      if (g.top && g.nodes.length > g.top) {
        const b = h("button", { class: "showall", type: "button", "data-act": "showall", "data-g": g.key, "aria-expanded": "false" }, "Show all " + g.nodes.length);
        body.append(b);
      }
      side.append(h("section", { class: "fgroup", "aria-label": g.label + " filter" },
        h("button", { class: "fhead", type: "button", "data-act": "fold", "aria-expanded": "true", "aria-controls": bodyId }, ic("chev", "chev"), h("span", null, g.label), n), body));
    });
    if (location.protocol === "file:") side.append(h("p", { class: "side-foot" }, "Opened from a file, so star history is off. Run ", h("code", null, "python -m http.server -d site"), " to enable it."));
    side.addEventListener("change", onFacet);
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
    if (node && node.kids.length) {
      leafIds(node).forEach(k => inp.checked ? sel.add(k) : sel.delete(k));
      if (inp.checked) setFold(g, node, true); // E13: selecting a parent reveals its children
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
        if (nd.kids.length) {
          const ids = leafIds(nd), k = ids.filter(z => sel.has(z)).length;
          x.input.checked = k === ids.length;
          x.input.indeterminate = k > 0 && k < ids.length;
          x.row.classList.toggle("zero", !v && !k);
        } else { x.input.checked = sel.has(nd.id); x.row.classList.toggle("zero", !v && !sel.has(nd.id)); }
      }));
      const nsel = chipsFor(g).length;
      if (groupHeads[g.key]) groupHeads[g.key].textContent = nsel ? nsel + " selected" : "";
    });
    syncTopN();
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
    if (S.flagged === "hide") chips.push([{ key: "flagged", label: "Hidden" }, "1", "flagged repos"]);
    if (!chips.length) return;
    chips.forEach(([g, id, l]) => {
      const b = h("button", { class: "chip", type: "button", "data-act": "unchip", "aria-label": "Remove filter " + g.label + ": " + l }, h("span", { class: "k" }, g.label + ":"), " " + l, ic("x"));
      b.dataset.g = g.key; b.dataset.id = id;
      el.append(b);
    });
    el.append(h("button", { class: "clear", type: "button", "data-act": "clearall" }, "Clear all"));
  }

  // ---------------------------------------------------------------- assist bar: search suggestions, any-stack toggle, flagged notice
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
  function syncAssist(hidden) {
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
    const trending = SORT[S.sort].trend;
    if (S.flagged === "hide" && hidden) {
      el.append(h("div", { class: "arow note" }, ic("flag"), h("span", null, plural(hidden, "flagged repo") + " hidden (suspicious stars or security findings)."), h("button", { type: "button", class: "lnk", "data-act": "flagged", "data-v": "demote" }, "Show them")));
    } else if (trending && SUS_IN) {
      el.append(h("div", { class: "arow note" }, ic("flag"),
        h("span", null, S.flagged === "demote" ? plural(SUS_IN, "flagged repo") + " (suspicious stars or security findings) ranked last." : "Flagged repos are ranked by their raw trend."),
        S.flagged === "demote" ? h("button", { type: "button", class: "lnk", "data-act": "flagged", "data-v": "hide" }, "Hide them") : null,
        h("button", { type: "button", class: "lnk", "data-act": "flagged", "data-v": S.flagged === "demote" ? "show" : "demote" }, S.flagged === "demote" ? "Rank normally" : "Rank them last")));
    }
  }

  // ---------------------------------------------------------------- presets
  const PRESETS = [
    { id: "top", label: "Most starred", apply: () => ({ sort: "stars" }) },
    { id: "trusted", label: "Trending & trusted", apply: () => ({ sort: "t7", tier: ["anthropic", "official", "listed", "verified"], flagged: "hide" }) },
    { id: "trending", label: "Trending this week", apply: () => ({ sort: "t7" }) },
    { id: "new", label: "New this week", apply: () => ({ sort: "stars", added: 7 }) },
    { id: "updated", label: "Recently updated", apply: () => ({ sort: "pushed" }) },
  ];
  function presetOf() {
    const otherSel = Object.entries(S.sel).filter(([k, v]) => k !== "tier" && v.size).length;
    if (S.q || otherSel || S.anyStack || (S.watch && !S.sel.tier.size) || S.dir !== SORT[S.sort].dir) return null;
    return PRESETS.find(p => {
      const x = p.apply(), tiers = x.tier || [];
      return x.sort === S.sort && (x.added || 0) === S.added && (x.flagged || "demote") === S.flagged && tiers.length === S.sel.tier.size && tiers.every(t => S.sel.tier.has(t));
    }) || null;
  }
  function applyPreset(id) {
    const p = PRESETS.find(x => x.id === id); if (!p) return;
    const x = p.apply();
    S.sel = newSel(); S.q = ""; $("q").value = ""; S.anyStack = false; S.watch = false;
    (x.tier || []).forEach(t => S.sel.tier.add(t));
    S.added = x.added || 0; S.flagged = x.flagged || "demote";
    S.sort = x.sort; S.dir = SORT[x.sort].dir;
    update();
  }
  function buildPresets() {
    const el = $("presets");
    el.append(h("span", { class: "al" }, "Quick views"), ...PRESETS.map(p => h("button", { type: "button", class: "pre", "data-act": "preset", "data-p": p.id, "aria-pressed": "false" }, p.label)));
  }
  function syncPresets() {
    const cur = presetOf();
    document.querySelectorAll("[data-act=preset]").forEach(b => b.setAttribute("aria-pressed", String(!!cur && cur.id === b.dataset.p)));
  }

  // ---------------------------------------------------------------- top bar / headers
  function buildTop() {
    const sel = $("sort");
    SORTS.forEach(s => sel.append(h("option", { value: s.id }, s.label)));
    sel.addEventListener("change", () => setSort(sel.value));
    const q = $("q");
    let raf = 0;
    q.addEventListener("input", () => { S.q = q.value.trim(); cancelAnimationFrame(raf); raf = requestAnimationFrame(() => update()); });
    q.addEventListener("keydown", e => { if (e.key === "Escape" && q.value) { e.stopPropagation(); q.value = ""; S.q = ""; update(); } });
    const th = (col, label, sorts) => {
      const cell = document.querySelector('th[data-col="' + col + '"]');
      const mk = (id, text, cls) => h("button", { type: "button", class: cls || null, "data-act": "sort", "data-sort": id }, text, ic("chev", "ar"));
      if (sorts.length === 1) cell.append(mk(sorts[0], label));
      else cell.append(h("span", { class: "pair" }, h("span", { class: "plbl" }, label), ...sorts.map(([id, t]) => mk(id, t, "s-" + id))));
    };
    th("name", "Name", ["name"]); th("tier", "Tier", ["tier"]); th("type", "Type", ["type"]);
    th("stars", "Stars", ["stars"]); th("trend", "Trend", [["t7", "7d"], ["t30", "30d"]]); th("pushed", "Updated", ["pushed"]);
  }
  function syncHeaders() {
    document.querySelectorAll("th [data-sort]").forEach(b => {
      const on = b.dataset.sort === S.sort;
      on ? b.setAttribute("data-on", S.dir > 0 ? "asc" : "desc") : b.removeAttribute("data-on");
      const th = b.closest("th");
      if (on) th.setAttribute("aria-sort", S.dir > 0 ? "ascending" : "descending");
      else if (![...th.querySelectorAll("[data-sort]")].some(x => x.dataset.sort === S.sort)) th.removeAttribute("aria-sort");
    });
    $("sort").value = S.sort;
  }
  function syncCount() {
    $("count").replaceChildren(h("b", null, nf(LIST.length)), h("span", { class: "of" }, " of " + nf(R.length)));
  }
  function setSort(id, dir) {
    if (!SORT[id]) return;
    S.sort = id; S.dir = dir || SORT[id].dir;
    update();
  }
  function setView(v, fromHash) {
    S.view = v === "cards" ? "cards" : "table";
    document.body.dataset.view = S.view;
    $("tableview").hidden = S.view !== "table";
    cardsEl.hidden = S.view !== "cards";
    document.querySelectorAll("[data-act=view]").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.v === S.view)));
    if (!fromHash) { renderResults(); writeHash(); }
  }
  function setTheme(t) {
    if (t) { document.documentElement.dataset.theme = t; try { localStorage.setItem("cc-theme", t); } catch (e) {} }
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
    if (S.sort !== "stars" || S.dir !== -1) { p.set("sort", S.sort); if (S.dir !== SORT[S.sort].dir) p.set("dir", S.dir > 0 ? "asc" : "desc"); }
    for (const k in S.sel) if (S.sel[k].size) {
      const sel = S.sel[k], ids = [], done = new Set();
      GROUP[k].nodes.forEach(n => { if (n.kids.length) { const l = leafIds(n); if (l.every(x => sel.has(x))) { ids.push(n.id); l.forEach(x => done.add(x)); } } });
      sel.forEach(x => { if (!done.has(x)) ids.push(x); });
      p.set(k, ids.join(","));
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
    S.dir = p.get("dir") === "asc" ? 1 : p.get("dir") === "desc" ? -1 : SORT[S.sort].dir;
    for (const k in S.sel) {
      S.sel[k].clear();
      (p.get(k) || "").split(",").forEach(id => {
        if (!ALLIDS[k].has(id)) return;
        const n = NODE[k][id];
        if (n && n.kids.length) leafIds(n).forEach(x => S.sel[k].add(x)); else S.sel[k].add(id); // old hashes stored parents
      });
    }
    const a = +p.get("added"); S.added = ADDED.some(x => x.days === a) ? a : 0;
    const f = p.get("flagged"); S.flagged = f === "hide" || f === "show" ? f : "demote";
    S.anyStack = p.get("anystack") === "1";
    S.watch = p.get("watch") === "1" && !S.sel.tier.size; // an explicit tier selection in the URL overrides the default
    $("q").value = S.q;
    setView(p.get("view"), true);
  }

  // ---------------------------------------------------------------- update
  function update() {
    const t0 = performance.now();
    const { res, cnt, hidden } = compute();
    LIST = res; COUNTS = cnt; HIDDEN_SUS = hidden;
    SUS_IN = 0; for (const r of res) if (r.sus) SUS_IN++;
    const t1 = performance.now();
    syncSide(cnt); syncChips(); syncCount(); syncHeaders(); syncAssist(hidden); syncPresets();
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
      document.body.append(ta); ta.select(); try { ok = document.execCommand("copy"); } catch (e2) {} ta.remove();
    }
    const lab = btn.querySelector(".cl"), old = lab ? lab.textContent : "";
    btn.classList.add("ok"); if (lab) lab.textContent = "Copied";
    setTimeout(() => { btn.classList.remove("ok"); if (lab) lab.textContent = old; }, 1400);
    const n = text.split("\n").length;
    toast(ok ? (n > 1 ? "Copied " + n + " steps" : "Copied: " + (text.length > 60 ? text.slice(0, 59) + "…" : text)) : "Copy blocked by the browser; select the command manually.", ok);
  }
  function toggleHist(id) {
    hidePop(true);
    S.flip.has(id) ? S.flip.delete(id) : S.flip.add(id);
    const r = BY.get(id);
    const old = (S.view === "table" ? tbody : cardsEl).querySelector('[data-id="' + CSS.escape(id) + '"]:not(.panel)');
    if (!old) return;
    const fresh = S.view === "table" ? rowEl(r) : cardEl(r);
    old.replaceWith(fresh);
    fitTags(fresh);
    fresh.querySelector("[data-act=hist]").focus();
  }
  function toggleOpen(id) {
    const r = BY.get(id);
    if (S.view === "table") {
      const tr = tbody.querySelector('tr.r[data-id="' + CSS.escape(id) + '"]');
      const open = !S.open.has(id);
      open ? S.open.add(id) : S.open.delete(id);
      tr.dataset.open = String(open);
      const b = tr.querySelector("[data-act=expand]");
      b.setAttribute("aria-expanded", String(open));
      open ? b.setAttribute("aria-controls", "d-" + r.i) : b.removeAttribute("aria-controls");
      const nx = tr.nextElementSibling;
      if (open) tr.after(moreRow(r)); else if (nx && nx.classList.contains("more")) nx.remove();
    } else {
      S.openCard = S.openCard === id ? null : id;
      if (S.openCard) placePanel(); else closePanel();
    }
  }

  // popover for description (name), tier reasons (tier badge) and flags
  let pop = null, popT = 0, popFor = null, pinned = false;
  function showPop(anchor) {
    if (!anchor.isConnected) return;
    pinned = false;
    const host = anchor.closest("[data-id]"); const r = host && BY.get(host.dataset.id); if (!r) return;
    if (!pop) {
      pop = h("div", { class: "pop", role: "tooltip", id: "pop" });
      pop.addEventListener("mouseenter", () => clearTimeout(popT));
      pop.addEventListener("mouseleave", hidePop);
      document.body.append(pop);
    }
    const kind = anchor.dataset.tip;
    if (kind === "tier") {
      pop.replaceChildren(h("div", { class: "ph" }, h("span", { class: "tier tier-" + r.tr }, TIER[r.tr].label), h("b", null, TIER[r.tr].long)),
        reasonList(r) || h("p", { class: "nd" }, TIER[r.tr].desc), rankLine());
    } else if (kind === "flag") {
      const f = anchor.dataset.flag, F = FLAGS[f] || {};
      const extra = f.startsWith("security-") && r.sec ? h("p", { class: "nd" }, plural(isNum(r.sec.n) ? r.sec.n : (r.sec.f || []).length, "finding") + ". Expand the row for details.") : null;
      pop.replaceChildren(h("div", { class: "ph" }, h("b", null, flagLabel(f))), h("p", { class: "pd" }, F.tip || "Flagged by the catalog's checks."), extra,
        isWarn(f) ? h("p", { class: "nd" }, "Flagged repos are ranked last in Trending.") : null);
    } else {
      pop.replaceChildren(h("p", { class: "pd" }, ...(r.d ? hl(r.d, wordsOf(S.q)) : ["No description provided."])),
        h("div", { class: "pm" }, r.disp + " · " + plural(r.nit, "item") + (r.url ? " · opens GitHub" : "")));
    }
    pop.style.width = kind === "tier" ? "360px" : "";
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

  function onClick(e) {
    if (pinned && !e.target.closest(".pop") && !e.target.closest("[data-act=tip]")) hidePop(true);
    const a = e.target.closest("[data-act]"); if (!a) return;
    const act = a.dataset.act, host = a.closest("[data-id]");
    switch (act) {
      case "copy": e.preventDefault(); return copy(a.dataset.copy, a);
      case "tip": { if (pinned && popFor === a) hidePop(true); else { clearTimeout(popT); showPop(a); pinned = true; } return; }
      case "hist": return host && toggleHist(host.dataset.id);
      case "expand": return host && toggleOpen(host.dataset.id);
      case "close": { const id = S.openCard; S.openCard = null; closePanel(); const b = cardsEl.querySelector('.card[data-id="' + CSS.escape(id) + '"] [data-act=expand]'); if (b) b.focus(); return; }
      case "sort": { const id = a.dataset.sort; return setSort(id, S.sort === id ? -S.dir : SORT[id].dir); }
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
      case "relax": {
        const o = RELAX[+a.dataset.i]; if (!o) return;
        const st = cloneState(); o.mutate(st);
        S.q = st.q; $("q").value = S.q; S.added = st.added; S.flagged = st.flagged; S.anyStack = st.anyStack; S.watch = st.watch; S.sel = st.sel;
        update(); $("results").focus(); return;
      }
      case "unchip": {
        const k = a.dataset.g;
        if (k === "anystack") S.anyStack = false;
        else if (k === "flagged") S.flagged = "demote";
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
    readHash(); // D9: view, query, filters and sort all come from the hash before the first render
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", e => {
      const tag = document.activeElement && document.activeElement.tagName;
      if (e.key === "/" && !e.ctrlKey && !e.metaKey && !e.altKey && !/INPUT|SELECT|TEXTAREA/.test(tag)) { e.preventDefault(); $("q").focus(); $("q").select(); return; }
      if (e.key === "Escape") {
        if (pop && pop.classList.contains("on")) return hidePop(true);
        const s = $("side"); if (s.classList.contains("open")) { s.classList.remove("open"); document.querySelector("[data-act=drawer]").focus(); return; }
        if (S.view === "cards" && S.openCard) { const id = S.openCard; S.openCard = null; closePanel(); const b = cardsEl.querySelector('.card[data-id="' + CSS.escape(id) + '"] [data-act=expand]'); if (b) b.focus(); }
      }
    });
    document.addEventListener("mouseover", e => {
      const a = e.target.closest("[data-tip]");
      if (a && !a.closest(".pop")) { clearTimeout(popT); popT = setTimeout(() => { if (a.isConnected && a.matches(":hover")) showPop(a); }, a.dataset.tip === "desc" ? 350 : 150); }
    });
    document.addEventListener("mouseout", e => { const a = e.target.closest("[data-tip]"); if (a && !a.contains(e.relatedTarget)) hidePop(); });
    document.addEventListener("focusin", e => { const a = e.target.closest("[data-tip]"); if (a && !a.closest(".pop") && a.matches(":focus-visible")) { clearTimeout(popT); showPop(a); } });
    document.addEventListener("focusout", e => { if (e.target.closest("[data-tip]")) hidePop(); });
    addEventListener("scroll", () => { if (pop && pop.classList.contains("on")) hidePop(true); }, { passive: true });
    addEventListener("hashchange", () => { readHash(); update(); });
    matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => setTheme());
    let rt; addEventListener("resize", () => { hidePop(true); clearTimeout(rt); rt = setTimeout(() => { if (S.view === "cards" && S.openCard) placePanel(); }, 150); });
    update();
    PERF.init = +performance.now().toFixed(1);
  }
  init();
})();
