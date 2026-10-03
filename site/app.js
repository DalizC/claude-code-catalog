/* cc-catalog v2: table + cards views over window.CATALOG (built by build_site.py).
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
    info: '<circle cx="12" cy="12" r="8"/><path d="M12 11v5M12 8h.01"/>',
    clock: '<circle cx="12" cy="12" r="8"/><path d="M12 8v4l2.5 2"/>',
    plugin: '<path d="M9 4v4M15 4v4M7 8h10v4a5 5 0 0 1-10 0zM12 17v3"/>',
    skill: '<path d="M13 3 5 13.5h6L10 21l8-10.5h-6z"/>',
    agent: '<rect x="5" y="8" width="14" height="11" rx="3"/><path d="M12 4v4M9.5 13h.01M14.5 13h.01"/>',
    marketplace: '<path d="M4 9.5 5.5 5h13L20 9.5M4 9.5h16M4 9.5a2.7 2.7 0 0 0 5.3 0 2.7 2.7 0 0 0 5.4 0 2.7 2.7 0 0 0 5.3 0M5.5 12.5V19h13v-6.5"/>',
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
    for (const c of kids.flat()) if (c != null && c !== false) el.append(c.nodeType ? c : String(c));
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
    const days = Math.max(0, REFDAY - day);
    if (days < 1) return "today";
    if (days < 31) return days + "d ago";
    if (days < 365) return Math.round(days / 30.4) + "mo ago";
    return (days / 365).toFixed(1).replace(/\.0$/, "") + "y ago";
  }
  const stale = d => { const day = d && dayOf(d); return day != null && REFDAY - day > 90; };
  const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const fdate = t => { const d = new Date(t); return MONTHS[d.getUTCMonth()] + " " + d.getUTCDate() + ", " + d.getUTCFullYear(); };
  const licLabel = l => !l ? "No license" : l === "NOASSERTION" ? "Other" : l;
  const nf = n => n.toLocaleString("en-US");

  // ---------------------------------------------------------------- vocab
  const TIERS = [
    { id: "anthropic", label: "Anthropic", long: "Made by Anthropic" },
    { id: "official", label: "Official", long: "Official marketplace · 3rd-party" },
    { id: "listed", label: "Community", long: "Community marketplace · 3rd-party" },
    { id: "verified", label: "Verified", long: "In a curated list" },
    { id: "watch", label: "Watch", long: "Unvetted, stale or failing checks" },
  ];
  const TIER = Object.fromEntries(TIERS.map(t => [t.id, t]));
  const TORD = Object.fromEntries(TIERS.map((t, i) => [t.id, i]));
  const TYPES = ["plugin", "skill", "agent", "marketplace", "collection"];
  const METHOD = { r: "keyword rules", e: "embeddings", er: "embeddings + rules" };

  // ---------------------------------------------------------------- data prep
  const STR = C.strings || {};
  const TAX = C.taxonomy || {};
  const R = C.repos;
  const BY = new Map();
  const mkTree = list => (Array.isArray(list) ? list : []).map(n => ({ id: n.id, label: n.label || n.id, kids: (n.children || []).map(k => ({ id: k.id, label: k.label || k.id, kids: [] })) }));
  const TREES = { tech: mkTree(TAX.technologies), area: mkTree(TAX.areas) };
  const LABEL = { tech: Object.create(null), area: Object.create(null) };
  const PARENT = { tech: Object.create(null), area: Object.create(null) };
  for (const g of ["tech", "area"]) TREES[g].forEach(n => { LABEL[g][n.id] = n.label; n.kids.forEach(k => { LABEL[g][k.id] = k.label; PARENT[g][k.id] = n.id; }); });
  const flagLabel = f => f === "archived" ? "Archived" : f.replace(/[-_]+/g, " ").replace(/^./, c => c.toUpperCase());
  const flagSet = new Set();
  const deref = (arr, table) => (Array.isArray(arr) ? arr : []).map(x => typeof x === "number" ? (table && table[x]) || "" : String(x)).filter(Boolean);

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
    r.fl = Array.isArray(r.fl) ? r.fl : [];
    r.tg = Array.isArray(r.tg) ? r.tg : [];
    r.ar = Array.isArray(r.ar) ? r.ar : [];
    r.t7 = isNum(r.t7) ? r.t7 : null;
    r.t30 = isNum(r.t30) ? r.t30 : null;
    r.s = isNum(r.s) ? r.s : null;
    r.tr = TIER[r.tr] ? r.tr : "watch";
    r.url = safeUrl(r.u || (r.r ? "https://github.com/" + r.r : ""));
    r.own = r.r.includes("/") ? r.r.split("/")[0] : r.url ? new URL(r.url).hostname.replace(/^www\./, "") : "";
    r.disp = r.r ? (r.k !== r.r ? r.k : r.r) : (r.url || r.k).replace(/^https?:\/\/(www\.)?/, "");
    r.flg = r.a ? r.fl.concat("archived") : r.fl;
    r.flg.forEach(f => flagSet.add(f));
    const fd = r.fs && dayOf(r.fs);
    r.age = fd == null ? Infinity : REFDAY - fd;
    for (const g of ["tech", "area"]) {
      const tags = g === "tech" ? r.tg : r.ar;
      tags.forEach(t => { if (!(t in LABEL[g])) { LABEL[g][t] = t; TREES[g].push({ id: t, label: t, kids: [] }); } });
    }
    const hit = (g, tags) => [...new Set(tags.flatMap(t => PARENT[g][t] ? [t, PARENT[g][t]] : [t]))];
    r.hitTech = hit("tech", r.tg);
    r.hitArea = hit("area", r.ar);
    r.hay = [r.n, r.k, r.d, r.t, ...r.it.map(x => (x.n || "") + " " + (x.d || "")), ...r.tg.map(t => LABEL.tech[t]), ...r.ar.map(t => LABEL.area[t])].join(" ").toLowerCase();
    BY.set(r.k, r);
  });

  const ADDED = [{ id: "1", label: "Latest run", days: 1 }, { id: "7", label: "Last 7 days", days: 7 }, { id: "30", label: "Last 30 days", days: 30 }];
  const GROUPS = [
    { key: "tier", label: "Tier", nodes: TIERS.map(t => ({ id: t.id, label: t.label, dot: t.id, kids: [] })), tags: r => [r.tr], hits: r => [r.tr] },
    { key: "type", label: "Type", nodes: TYPES.map(t => ({ id: t, label: t[0].toUpperCase() + t.slice(1), icon: t, kids: [] })), tags: r => [r.t], hits: r => [r.t] },
    { key: "tech", label: "Technologies", tree: true, nodes: TREES.tech, tags: r => r.tg, hits: r => r.hitTech },
    { key: "area", label: "Areas", tree: true, nodes: TREES.area, tags: r => r.ar, hits: r => r.hitArea },
    { key: "flag", label: "Flags", nodes: [...flagSet].sort().map(f => ({ id: f, label: flagLabel(f), icon: f === "archived" ? "archive" : "flag", kids: [] })), tags: r => r.flg, hits: r => r.flg },
    { key: "added", label: "New in", radio: true, nodes: ADDED.map(a => ({ ...a, kids: [] })) },
  ];
  const GROUP = Object.fromEntries(GROUPS.map(g => [g.key, g]));
  const ALLIDS = Object.fromEntries(GROUPS.map(g => [g.key, new Set(g.nodes.flatMap(n => [n.id, ...n.kids.map(k => k.id)]))]));

  const SORTS = [
    { id: "stars", label: "Stars", get: r => r.s, dir: -1 },
    { id: "t7", label: "Trending · 7d", get: r => r.t7, dir: -1 },
    { id: "t30", label: "Trending · 30d", get: r => r.t30, dir: -1 },
    { id: "pushed", label: "Last activity", get: r => r.p || null, dir: -1 },
    { id: "added", label: "Recently added", get: r => r.fs || null, dir: -1 },
    { id: "name", label: "Name", get: r => r.nl, dir: 1 },
    { id: "tier", label: "Tier", get: r => TORD[r.tr], dir: 1 },
    { id: "type", label: "Type", get: r => r.t || null, dir: 1 },
    { id: "items", label: "Items", get: r => r.nit, dir: -1 },
  ];
  const SORT = Object.fromEntries(SORTS.map(s => [s.id, s]));

  // ---------------------------------------------------------------- state
  const S = {
    view: "table", q: "", sort: "stars", dir: -1, added: 0,
    sel: Object.fromEntries(GROUPS.filter(g => !g.radio).map(g => [g.key, new Set()])),
    flip: new Set(), open: new Set(), openCard: null,
  };
  let LIST = [], COUNTS = null, shown = 0;
  const PERF = window.__ccPerf = { updates: [] };

  // ---------------------------------------------------------------- filtering
  function passes(g, r) {
    if (g.radio) return !S.added || r.age < S.added;
    const sel = S.sel[g.key];
    if (!sel.size) return true;
    const t = g.tags(r);
    for (let i = 0; i < t.length; i++) if (sel.has(t[i])) return true;
    return false;
  }
  function addCounts(cnt, g, r) {
    const c = cnt[g.key];
    if (g.radio) { c.any = (c.any || 0) + 1; for (const a of ADDED) if (r.age < a.days) c[a.id] = (c[a.id] || 0) + 1; return; }
    const hs = g.hits(r);
    for (let i = 0; i < hs.length; i++) c[hs[i]] = (c[hs[i]] || 0) + 1;
  }
  function compute() {
    const words = S.q ? S.q.toLowerCase().split(/\s+/).filter(Boolean) : [];
    const res = [], cnt = {};
    GROUPS.forEach(g => (cnt[g.key] = Object.create(null)));
    outer: for (let i = 0; i < R.length; i++) {
      const r = R[i];
      for (let w = 0; w < words.length; w++) if (!r.hay.includes(words[w])) continue outer;
      let fails = 0, fg = null;
      for (let k = 0; k < GROUPS.length; k++) if (!passes(GROUPS[k], r)) { fails++; fg = GROUPS[k]; if (fails > 1) break; }
      if (fails === 0) { res.push(r); for (let k = 0; k < GROUPS.length; k++) addCounts(cnt, GROUPS[k], r); }
      else if (fails === 1) addCounts(cnt, fg, r);
    }
    const s = SORT[S.sort], dir = S.dir;
    res.sort((a, b) => {
      const x = s.get(a), y = s.get(b);
      if (x == null || y == null) { if (x != null) return -1; if (y != null) return 1; }
      else { const c = (x < y ? -1 : x > y ? 1 : 0) * dir; if (c) return c; }
      return ((b.s ?? -1) - (a.s ?? -1)) || a.i - b.i;
    });
    return { res, cnt };
  }

  // ---------------------------------------------------------------- pieces
  function tierBadge(r) {
    return h("span", { class: "tier tier-" + r.tr, "data-tip": "tier" }, TIER[r.tr].label);
  }
  function typeTag(r, withItems) {
    return h("span", { class: "type" }, ic(TYPES.includes(r.t) ? r.t : "collection"), r.t || "—",
      withItems ? h("span", { class: "ni", title: r.nit + (r.nit === 1 ? " item" : " items"), "aria-label": r.nit + (r.nit === 1 ? " item" : " items") }, "· " + r.nit) : null);
  }
  function flagIcons(r) {
    const out = [];
    if (r.fl.length) out.push(h("span", { class: "fic", title: r.fl.map(flagLabel).join(", "), role: "img", "aria-label": "Flag: " + r.fl.map(flagLabel).join(", ") }, ic("flag")));
    if (r.a) out.push(h("span", { class: "fic arch", title: "Archived", role: "img", "aria-label": "Archived" }, ic("archive")));
    return out;
  }
  function nameLink(r) {
    return r.url
      ? h("a", { class: "nm", href: r.url, target: "_blank", rel: "noopener noreferrer", "data-tip": "desc" }, r.n)
      : h("span", { class: "nm", tabindex: "0", "data-tip": "desc" }, r.n);
  }
  function tagList(r) {
    return [...r.tg.map(t => ["tech", t]), ...r.ar.map(t => ["area", t])];
  }
  function tagsEl(r, max) {
    const all = tagList(r), box = h("div", { class: "tags" });
    if (!all.length) { box.append(h("span", { class: "tag none", title: "Not classified yet" }, "—")); return box; }
    all.slice(0, max).forEach(([g, t]) => box.append(h("span", { class: "tag " + g, title: (g === "tech" ? "Technology: " : "Area: ") + LABEL[g][t] }, LABEL[g][t])));
    if (all.length > max) {
      const rest = all.slice(max).map(([g, t]) => LABEL[g][t]);
      box.append(h("span", { class: "tag plus", title: rest.join(", "), "aria-label": rest.length + " more: " + rest.join(", ") }, "+" + rest.length));
    }
    return box;
  }
  function trendBtn(r, both) {
    const label = "Star trend " + (r.t7 == null ? "not available" : signed(r.t7) + " in 7 days") + (r.t30 == null ? "" : ", " + signed(r.t30) + " in 30 days") + ". Show star history for " + r.n;
    const tv = h("span", { class: "tv" }, h("span", { class: trendCls(r.t7) }, signed(r.t7)), both ? h("span", { class: trendCls(r.t30) }, signed(r.t30)) : h("span", { class: "nd", style: "min-width:0" }, "7d"));
    return h("button", { class: "trend", type: "button", "data-act": "hist", "aria-pressed": String(S.flip.has(r.k)), "aria-label": label, title: S.flip.has(r.k) ? "Back to details" : "Show star history" }, ic("trend"), tv);
  }
  function expandBtn(r, open, ctrl) {
    return h("button", { class: "exp", type: "button", "data-act": "expand", "aria-expanded": String(open), "aria-controls": open ? ctrl : null, "aria-label": "Details and install for " + r.n }, ic("chev"));
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
    svg.append(
      sv("line", { class: "grid", x1: 0, x2: cw, y1: T + 0.5, y2: T + 0.5 }),
      sv("line", { class: "grid dash", x1: 0, x2: cw, y1: Math.round(T + ch / 2) + 0.5, y2: Math.round(T + ch / 2) + 0.5 }),
      sv("line", { class: "grid", x1: 0, x2: cw, y1: T + ch + 0.5, y2: T + ch + 0.5 }),
      sv("path", { class: "a", d: line + "L" + X(t1).toFixed(1) + " " + (T + ch) + "L" + X(t0).toFixed(1) + " " + (T + ch) + "Z" }),
      sv("path", { class: "l", d: line }),
      sv("circle", { cx: X(t1).toFixed(1), cy: Y(pts[pts.length - 1].v).toFixed(1), r: 3 }));
    const txt = (x, y, s, anchor) => { const t = sv("text", { x, y }); if (anchor) t.setAttribute("text-anchor", anchor); t.textContent = s; return t; };
    svg.append(txt(cw + 6, T + 4, fmt(hi)), txt(cw + 6, T + ch + 3, fmt(lo)),
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
  const rangeText = pts => pts.length + " points";

  // ---------------------------------------------------------------- detail
  function installSteps(hint) {
    if (!hint) return [];
    const m = /^see\s+(\S+)/i.exec(hint);
    if (m) return [{ kind: "link", url: safeUrl(m[1]) }];
    return hint.split(/\s*;\s*/).filter(Boolean).map(s => s.startsWith("/") ? { kind: "cmd", text: s } : { kind: "hint", text: s });
  }
  function copyBtn(text, no, what) {
    const b = h("button", { class: "copy", type: "button", "data-act": "copy", title: text, "aria-label": "Copy " + (what ? "install step for " + what + ": " : "") + text },
      h("span", { class: "cmd" }, no ? h("span", { class: "no" }, no) : null, text), h("span", { class: "ic" }, ic("copy")));
    b.dataset.copy = text;
    return b;
  }
  function itemEl(r, it) {
    const steps = installSteps(it.i), cmds = steps.filter(s => s.kind === "cmd").length;
    let n = 0;
    const box = h("div", { class: "steps" }, steps.map(s => {
      if (s.kind === "cmd") return copyBtn(s.text, cmds > 1 ? String(++n) : null, it.n);
      if (s.kind === "hint") return h("div", { class: "hintx" }, s.text);
      const url = s.url || r.url;
      return url ? h("a", { class: "copy none", href: url, target: "_blank", rel: "noopener noreferrer" }, ic("ext"), h("span", { class: "cmd" }, "See README for install")) : null;
    }));
    if (!steps.length) box.append(h("div", { class: "hintx" }, "No install hint"));
    return h("li", null, h("div", { class: "in" }, it.n || r.n, " ", h("span", null, it.t || "")), box, h("div", { class: "id" }, it.d || ""));
  }
  function detailEl(r) {
    const items = h("ul", { class: "items" }, r.it.map(it => itemEl(r, it)));
    if (r.nit > r.it.length) items.append(h("li", { class: "morei" }, "+ " + (r.nit - r.it.length) + " more items in the repository"));
    const tagPills = (g, list) => list.length ? list.map(t => h("span", { class: "tag " + g }, LABEL[g][t])) : h("span", { class: "nd" }, "—");
    const kv = h("dl", { class: "kv" });
    const row = (k, ...v) => kv.append(h("dt", null, k), h("dd", null, ...v));
    row("Tier", TIER[r.tr].long, r.tx.length ? h("ul", { class: "reasons" }, r.tx.map(x => h("li", null, x))) : null);
    row("Stars", nf(r.s || 0), r.f ? h("span", { class: "nd" }, " · " + nf(r.f) + " forks") : null);
    row("Activity", r.p ? "pushed " + rel(r.p) + " (" + r.p + ")" : "—");
    row("License", licLabel(r.l));
    row("Tech", tagPills("tech", r.tg));
    row("Areas", tagPills("area", r.ar));
    if (r.cm || r.tg.length || r.ar.length) row("Tagged by", (METHOD[r.cm] || "auto") + (TAX.placeholder ? " · provisional taxonomy" : ""));
    if (r.src.length) row("Sources", r.src.map(s => h("span", { class: "pill" }, s)));
    if (r.flg.length) row("Flags", r.flg.map(f => h("span", { class: "flag" }, ic(f === "archived" ? "archive" : "flag"), flagLabel(f))));
    if (r.fs) row("First seen", r.fs);
    if (r.url) row("Repo", h("a", { href: r.url, target: "_blank", rel: "noopener noreferrer" }, r.url.replace(/^https?:\/\/(www\.)?/, "")));
    return h("div", { class: "detail" },
      h("div", null, h("p", { class: "dd" }, r.d || "No description provided."), h("h4", null, "Install · " + r.nit + (r.nit === 1 ? " item" : " items")), items),
      h("div", null, h("h4", null, "Details"), kv));
  }

  // ---------------------------------------------------------------- table
  const tbody = $("tbody"), cardsEl = $("cardview");
  function rowEl(r) {
    const flipped = S.flip.has(r.k), open = S.open.has(r.k);
    const tr = h("tr", { class: "r", "data-id": r.k, "data-view": flipped ? "hist" : "norm", "data-open": String(open) });
    tr.append(
      h("td", { class: "ec" }, expandBtn(r, open, "d-" + r.i)),
      h("td", { class: "nmc" }, h("div", { class: "nmcell" }, nameLink(r), r.own ? h("span", { class: "ow" }, r.own) : null, flagIcons(r))));
    if (flipped) tr.append(h("td", { class: "histcell", colspan: "4" }, histEl(r)));
    else tr.append(
      h("td", null, tierBadge(r)),
      h("td", null, h("div", { class: "typec" }, typeTag(r, true))),
      h("td", null, tagsEl(r, 3)),
      h("td", { class: "num" }, fmt(r.s)));
    const old = stale(r.p);
    tr.append(
      h("td", { class: "trc" }, trendBtn(r, true)),
      h("td", { class: "ac" }, h("div", { class: "act" },
        h("span", { class: old ? "old" : null, title: r.p ? "Last push " + r.p : "Last push unknown" }, rel(r.p)),
        h("span", { class: "lic", title: !r.l ? "No license detected" : r.l === "NOASSERTION" ? "Unrecognized / custom license (NOASSERTION)" : r.l }, licLabel(r.l)))));
    return tr;
  }
  const moreRow = r => h("tr", { class: "more", id: "d-" + r.i, "data-for": r.k }, h("td", { colspan: "8" }, detailEl(r)));

  // ---------------------------------------------------------------- cards
  function cardEl(r) {
    const flipped = S.flip.has(r.k), open = S.openCard === r.k;
    const swap = h("div", { class: "swap" });
    if (flipped) swap.append(histEl(r));
    else swap.append(h("p", { class: "d" + (r.d ? "" : " nodesc") }, r.d || "No description provided."), tagsEl(r, 3));
    const old = stale(r.p);
    return h("article", { class: "card", role: "listitem", "data-id": r.k, "data-view": flipped ? "hist" : "norm", "data-open": String(open), "aria-label": r.n },
      h("div", { class: "ch" }, h("div", { class: "who" }, nameLink(r), h("span", { class: "ow" }, r.own)), tierBadge(r)),
      swap,
      h("div", { class: "meta" }, typeTag(r, r.nit > 1),
        h("span", { class: "s", "aria-label": nf(r.s || 0) + " stars" }, ic("star"), fmt(r.s)),
        h("span", { class: old ? "old" : null, title: r.p ? "Last push " + r.p : "Last push unknown" }, rel(r.p)),
        flagIcons(r), h("span", { class: "grow" }), trendBtn(r, false), expandBtn(r, open, "panel")));
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
      h("div", { class: "ph" }, h("b", null, r.n), h("span", { class: "ow" }, r.disp), tierBadge(r), typeTag(r, false),
        h("button", { class: "exp x", type: "button", "data-act": "close", "aria-label": "Close details" }, ic("x"))),
      detailEl(r));
    p.dataset.for = r.k;
    last.after(p);
  }

  // ---------------------------------------------------------------- results rendering
  const CHUNK = 60, NEXT = 120;
  function emptyEl() {
    return h("div", { class: "empty" }, h("b", null, "No extensions match"),
      S.q ? "Nothing matches “" + S.q + "” with the current filters." : "No repository has this combination of filters.",
      h("br"), h("button", { class: "btn", type: "button", "data-act": "clearall" }, "Clear search and filters"));
  }
  function renderResults() {
    shown = 0;
    tbody.textContent = "";
    cardsEl.textContent = "";
    if (!LIST.length) {
      if (S.view === "table") tbody.append(h("tr", null, h("td", { colspan: "8", style: "height:auto" }, emptyEl())));
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
        if (S.view === "table") { frag.append(rowEl(r)); if (S.open.has(r.k)) frag.append(moreRow(r)); }
        else frag.append(cardEl(r));
      }
      (S.view === "table" ? tbody : cardsEl).append(frag);
      const had = shown; shown = end;
      if (S.view === "cards" && S.openCard && !$("panel") && LIST.slice(had, end).some(r => r.k === S.openCard)) placePanel();
    }
    $("loadmore").textContent = !LIST.length ? "" : shown < LIST.length ? "Showing " + nf(shown) + " of " + nf(LIST.length) + " · scroll for more" : nf(LIST.length) + (LIST.length === 1 ? " result" : " results");
    if (shown < LIST.length) requestAnimationFrame(() => { if ($("sentinel").getBoundingClientRect().top < innerHeight + 1200) more(); });
  }
  new IntersectionObserver(es => { if (es.some(e => e.isIntersecting) && shown < LIST.length) more(); }, { rootMargin: "0px 0px 1200px 0px" }).observe($("sentinel"));

  // ---------------------------------------------------------------- sidebar
  const sideRows = new Map(); // "g:id" -> {row, input, c}
  const groupHeads = {};
  function nodeLi(g, n) {
    const hasKids = n.kids.length > 0, id = "f-" + g.key + "-" + n.id.replace(/[^\w-]/g, "_");
    const input = g.radio ? h("input", { type: "radio", name: "f-" + g.key, value: n.id, id }) : h("input", { type: "checkbox", id });
    input.dataset.g = g.key; input.dataset.id = n.id;
    const c = h("span", { class: "c" });
    const row = h("div", { class: "frow" },
      g.tree ? (hasKids ? h("button", { class: "tw", type: "button", "data-act": "fold", "aria-expanded": "false", "aria-controls": id + "-k", "aria-label": "Show " + n.label + " subcategories" }, ic("chev")) : h("span", { class: "tw ph" })) : null,
      h("label", { for: id }, input, n.dot ? h("span", { class: "dot d-" + n.dot }) : n.icon ? ic(n.icon) : null, h("span", { class: "lbl" }, n.label), c));
    sideRows.set(g.key + ":" + n.id, { row, input, c });
    const li = h("li", null, row);
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
      if (g.key === "tech" && TAX.placeholder) body.append(h("p", { class: "fnote prov" }, ic("info"), h("span", null, "Technologies and areas use a provisional taxonomy; tags are auto-classified and may change.")));
      const ul = h("ul", { class: "facets", role: g.radio ? "radiogroup" : null, "aria-label": g.label });
      if (g.radio) {
        const any = { id: "", label: "Any time", kids: [] };
        ul.append(nodeLi(g, any));
      }
      g.nodes.forEach(nd => ul.append(nodeLi(g, nd)));
      body.append(ul);
      side.append(h("section", { class: "fgroup", "aria-label": g.label + " filter" },
        h("button", { class: "fhead", type: "button", "data-act": "fold", "aria-expanded": "true", "aria-controls": bodyId }, ic("chev", "chev"), h("span", null, g.label), n), body));
    });
    if (location.protocol === "file:") side.append(h("p", { class: "side-foot" }, "Opened from a file, so star history is off. Run ", h("code", null, "python -m http.server -d site"), " to enable it."));
    side.addEventListener("change", onFacet);
  }
  function onFacet(e) {
    const inp = e.target; if (!inp.dataset || !inp.dataset.g) return;
    const g = GROUP[inp.dataset.g], id = inp.dataset.id;
    if (g.radio) { S.added = +id || 0; return update(); }
    const sel = S.sel[g.key], node = g.nodes.find(n => n.id === id);
    if (node && node.kids.length) [node.id, ...node.kids.map(k => k.id)].forEach(k => inp.checked ? sel.add(k) : sel.delete(k));
    else {
      inp.checked ? sel.add(id) : sel.delete(id);
      const par = g.nodes.find(n => n.kids.some(k => k.id === id));
      if (par) par.kids.every(k => sel.has(k.id)) ? sel.add(par.id) : sel.delete(par.id);
    }
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
        x.row.classList.toggle("zero", !v && !sel.has(nd.id));
        if (nd.kids.length) {
          const k = nd.kids.filter(z => sel.has(z.id)).length;
          x.input.checked = sel.has(nd.id) && k === nd.kids.length;
          x.input.indeterminate = !x.input.checked && (k > 0 || (sel.has(nd.id) && k < nd.kids.length));
        } else x.input.checked = sel.has(nd.id);
      }));
      const nsel = chipsFor(g).length;
      if (groupHeads[g.key]) groupHeads[g.key].textContent = nsel ? nsel + " selected" : "";
    });
  }
  function chipsFor(g) {
    const chips = [];
    if (g.radio) { if (S.added) chips.push([g, String(S.added), ADDED.find(a => a.days === S.added).label]); return chips; }
    const sel = S.sel[g.key];
    g.nodes.forEach(n => {
      if (n.kids.length && sel.has(n.id) && n.kids.every(k => sel.has(k.id))) chips.push([g, n.id, n.label + " (all)"]);
      else { if (sel.has(n.id)) chips.push([g, n.id, n.label]); n.kids.forEach(k => sel.has(k.id) && chips.push([g, k.id, k.label])); }
    });
    return chips;
  }
  function syncChips() {
    const el = $("chips"); el.textContent = "";
    const chips = GROUPS.flatMap(chipsFor);
    if (!chips.length) return;
    chips.forEach(([g, id, l]) => {
      const b = h("button", { class: "chip", type: "button", "data-act": "unchip", "aria-label": "Remove filter " + g.label + ": " + l }, h("span", { class: "k" }, g.label + ":"), " " + l, ic("x"));
      b.dataset.g = g.key; b.dataset.id = id;
      el.append(b);
    });
    el.append(h("button", { class: "clear", type: "button", "data-act": "clearall" }, "Clear all"));
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
      const mk = (id, text) => { const b = h("button", { type: "button", "data-act": "sort", "data-sort": id }, text, ic("chev", "ar")); return b; };
      if (sorts.length === 1) cell.append(mk(sorts[0], label));
      else cell.append(h("span", { class: "pair" }, h("span", { class: "plbl" }, label), ...sorts.map(([id, t]) => mk(id, t))));
    };
    th("name", "Name", ["name"]); th("tier", "Tier", ["tier"]); th("type", "Type · items", ["type"]);
    th("stars", "Stars", ["stars"]); th("trend", "Trend", [["t7", "7d"], ["t30", "30d"]]); th("pushed", "Activity · license", ["pushed"]);
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
    for (const k in S.sel) if (S.sel[k].size) p.set(k, [...S.sel[k]].join(","));
    if (S.added) p.set("added", String(S.added));
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
    for (const k in S.sel) { S.sel[k].clear(); (p.get(k) || "").split(",").forEach(id => { if (ALLIDS[k].has(id)) S.sel[k].add(id); }); }
    const a = +p.get("added"); S.added = ADDED.some(x => x.days === a) ? a : 0;
    $("q").value = S.q;
    setView(p.get("view"), true);
  }

  // ---------------------------------------------------------------- update
  function update() {
    const t0 = performance.now();
    const { res, cnt } = compute();
    LIST = res; COUNTS = cnt;
    const t1 = performance.now();
    syncSide(cnt); syncChips(); syncCount(); syncHeaders();
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
    const icn = btn.querySelector(".ic");
    btn.classList.add("ok"); if (icn) icn.replaceChildren(ic("check"));
    setTimeout(() => { btn.classList.remove("ok"); if (icn) icn.replaceChildren(ic("copy")); }, 1400);
    toast(ok ? "Copied: " + (text.length > 60 ? text.slice(0, 59) + "…" : text) : "Copy blocked by the browser; select the command manually.", ok);
  }
  function toggleHist(id) {
    S.flip.has(id) ? S.flip.delete(id) : S.flip.add(id);
    const r = BY.get(id);
    const old = (S.view === "table" ? tbody : cardsEl).querySelector('[data-id="' + CSS.escape(id) + '"]:not(.panel)');
    if (!old) return;
    const fresh = S.view === "table" ? rowEl(r) : cardEl(r);
    old.replaceWith(fresh);
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

  // popover for description (name) and tier reasons (tier badge)
  let pop = null, popT = 0, popFor = null;
  function showPop(anchor) {
    const host = anchor.closest("[data-id]"); const r = host && BY.get(host.dataset.id); if (!r) return;
    if (!pop) {
      pop = h("div", { class: "pop", role: "tooltip", id: "pop" });
      pop.addEventListener("mouseenter", () => clearTimeout(popT));
      pop.addEventListener("mouseleave", hidePop);
      document.body.append(pop);
    }
    if (anchor.dataset.tip === "tier") {
      pop.replaceChildren(h("div", { style: "display:flex;gap:8px;align-items:center;margin-bottom:8px" }, h("span", { class: "tier tier-" + r.tr }, TIER[r.tr].label), h("span", { style: "color:var(--ink-2)" }, TIER[r.tr].long)),
        r.tx.length ? h("ul", { class: "reasons" }, r.tx.map(x => h("li", null, x))) : null);
    } else {
      pop.replaceChildren(h("p", { class: "pd" }, r.d || "No description provided."),
        h("div", { class: "pm" }, r.disp + " · " + r.nit + (r.nit === 1 ? " item" : " items") + (r.url ? " · opens GitHub" : "")));
    }
    pop.style.width = anchor.dataset.tip === "tier" ? "340px" : "";
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
    const go = () => { if (pop) pop.classList.remove("on"); if (popFor) { popFor.removeAttribute("aria-describedby"); popFor = null; } };
    now === true ? go() : (popT = setTimeout(go, 100));
  }

  function onClick(e) {
    const a = e.target.closest("[data-act]"); if (!a) return;
    const act = a.dataset.act, host = a.closest("[data-id]");
    switch (act) {
      case "copy": e.preventDefault(); return copy(a.dataset.copy, a);
      case "hist": return host && toggleHist(host.dataset.id);
      case "expand": return host && toggleOpen(host.dataset.id);
      case "close": { const id = S.openCard; S.openCard = null; closePanel(); const b = cardsEl.querySelector('.card[data-id="' + CSS.escape(id) + '"] [data-act=expand]'); if (b) b.focus(); return; }
      case "sort": { const id = a.dataset.sort; return setSort(id, S.sort === id ? -S.dir : SORT[id].dir); }
      case "view": return setView(a.dataset.v);
      case "theme": return setTheme(isDark() ? "light" : "dark");
      case "drawer": { const s = $("side"), o = !s.classList.contains("open"); s.classList.toggle("open", o); a.setAttribute("aria-expanded", String(o)); if (o) { const f = s.querySelector("input,button"); if (f) f.focus(); } return; }
      case "fold": { const t = $(a.getAttribute("aria-controls")), o = a.getAttribute("aria-expanded") !== "true"; a.setAttribute("aria-expanded", String(o)); t.hidden = !o; return; }
      case "unchip": {
        const g = GROUP[a.dataset.g], id = a.dataset.id;
        if (g.radio) S.added = 0;
        else {
          const sel = S.sel[g.key], n = g.nodes.find(x => x.id === id);
          sel.delete(id); if (n) n.kids.forEach(k => sel.delete(k.id));
          const par = g.nodes.find(p => p.kids.some(k => k.id === id)); if (par) sel.delete(par.id);
        }
        update();
        const next = $("chips").querySelector(".chip"); (next || $("q")).focus();
        return;
      }
      case "clearall": {
        for (const k in S.sel) S.sel[k].clear(); S.added = 0; S.q = ""; $("q").value = "";
        update(); $("q").focus(); return;
      }
    }
  }

  function init() {
    buildSide(); buildTop(); setTheme();
    readHash();
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
    document.addEventListener("mouseover", e => { const a = e.target.closest("[data-tip]"); if (a && !a.closest(".pop")) { clearTimeout(popT); popT = setTimeout(() => showPop(a), a.dataset.tip === "desc" ? 350 : 150); } });
    document.addEventListener("mouseout", e => { const a = e.target.closest("[data-tip]"); if (a && !a.contains(e.relatedTarget)) hidePop(); });
    document.addEventListener("focusin", e => { const a = e.target.closest("[data-tip]"); if (a && !a.closest(".pop")) { clearTimeout(popT); showPop(a); } });
    document.addEventListener("focusout", e => { if (e.target.closest("[data-tip]")) hidePop(true); });
    addEventListener("scroll", () => { if (pop && pop.classList.contains("on")) hidePop(true); }, { passive: true });
    addEventListener("hashchange", () => { readHash(); update(); });
    matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => setTheme());
    let rt; addEventListener("resize", () => { clearTimeout(rt); rt = setTimeout(() => { if (S.view === "cards" && S.openCard) placePanel(); }, 150); });
    update();
    PERF.init = +performance.now().toFixed(1);
  }
  init();
})();
