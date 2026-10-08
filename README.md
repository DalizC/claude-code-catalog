# cc-catalog

Live page: https://dalizc.github.io/claude-code-catalog/

License: MIT.

## Install the Claude Code skill
```
/plugin marketplace add DalizC/claude-code-catalog
/plugin install cc-catalog@cc-catalog
```

Autonomous catalog of Claude Code extensions: plugins, skills, subagents, commands/hooks, and standalone MCP servers from the official MCP Registry. MCP-only repos found by topic or code search are still excluded unless the Registry lists them (see below). One stdlib-only Python script (`catalog.py`, Python 3.12) collects, enriches and tiers repos; `build_site.py` renders `site/` from `data/catalog.json`. A daily GitHub Actions job (`.github/workflows/update.yml`) runs both, commits `data/` and `site/`, and deploys `site/` to GitHub Pages. The workflow expects this folder to be the repository root.

## Sources
1. Anthropic marketplaces (`claude-plugins-official`, `skills`, `claude-code`, `claude-plugins-community`) via raw `marketplace.json`, plus every other non-archived `anthropics/` repo that has a `.claude-plugin/marketplace.json` (source `anthropic-org`).
2. Curated list: `hesreallyhim/awesome-claude-code` (CSV).
3. Discovery: repo search by topic (`claude-code-plugin`, `claude-skills`, `claude-code-subagents`, `claude-code-skills`, stars>=5), GitHub code search (`marketplace.json`, `plugin.json`, `SKILL.md`, `.claude/agents/*.md`, 3 pages each), and expansion of up to 50 discovered marketplaces. Broad discovery adds three candidate lists, each verified by repo contents: star-sorted topic combinations, every repo with >= 5000 stars pushed in the last 180 days (re-searched weekly; catches libraries that ship their own plugin without Claude topics), and GitHub Trending (daily/weekly/monthly HTML pages; no API). A candidate enters with a `.claude-plugin/` manifest or a root `SKILL.md`; a `skills/` folder (or root folders with a `SKILL.md`) or an `agents/` folder of `.md` files enters only when the repo's README explains how to install them. A repo is judged as a whole. A popular repo whose name and description aren't about extensions gets the `product-stars` flag: its stars measure the product, not the extension.
4. Official MCP Registry (`https://registry.modelcontextprotocol.io/v0/servers?limit=100&version=latest`, public, no auth, paged with `cursor`, cached by the HTTP cache like everything else). Only latest, `active` servers are read (deprecated/deleted and older versions dropped), then the inclusion rule below applies; the parser is defensive because the schema drifts between versions. See "MCP servers" below.
5. Enrichment: GitHub GraphQL, 100 repos per query (stars, forks, dates, license, archived, owner type, topics).

All fetched text is untrusted data and is never executed; descriptions are cut to 300 chars.

## MCP servers (type `mcp-server`)
- **Inclusion rule** (in `catalog.py`, after enrichment because it needs stars): a registry server is included only if it has a GitHub `repository.url` AND (its repo reaches tier verified or higher, OR has >= 10 stars, OR its repo is already in the catalog for another reason, e.g. a plugin repo). Remote-only servers (no repo) and low-signal servers are excluded; the excluded counts are logged in `data/report.md` ("MCP Registry") and in `counts.mcp` (`excluded_remote_only`, `excluded_low_signal`).
- An included server attaches to its repo's record as an item (`mcp:<registry name>`); a repo not yet in the catalog gets a new record enriched through the same GraphQL path (stars, license, node_id, dedup). Several servers in one repo (monorepos) become several items of one record. `sources` contains `mcp-registry`.
- Same tier rules as everything else. The site hides the `watch` tier by default (a note above the results toggles it; an explicit tier selection overrides the default, and `#watch=1` in the URL shows it). `search.py` also excludes `watch` unless `--tier-min watch` is given.
- `install_hint`: remote HTTP/SSE `claude mcp add --transport http|sse <short-name> <url>`; npm `claude mcp add <short-name> -- npx -y <pkg>@<version>`; pypi `-- uvx <pkg>`; oci `-- docker run -i --rm <image>`. Remote wins when both exist. Required env vars/headers are named (never valued) in a trailing `# requires: A, B` note. Registry text is validated against strict patterns before it enters a command; a server with no runnable remote or package gets a `# ...` note instead of a command.
- The v1 MCP-only filter is unchanged: repos named/topic-tagged like MCP servers with no Claude Code plugin/skill/agent evidence are dropped from topic and code search (counted in `excluded_mcp`), except when they are registered in the Registry, in which case they come in through that path as `mcp-server`.

## Relevance (what gets published)
The catalog lists repos that are useful or promising, not everything discovered. A record is published when its repo is alive (not archived, pushed within 180 days) AND has a signal: >= 50 stars, OR it is at most 30 days old with >= 20 stars, OR it gained >= 20 stars in 7 days (from daily snapshots, or from the growth since the previous check for repos not yet published). Anthropic and official-marketplace records and `favorites.json` entries are always published. Repos left out are counted in `counts.excluded_irrelevant`, re-checked about weekly (nightly while they are at most 30 days old) and enter on their own once they qualify.

## Tiers (one record per repo, highest wins)
Order, highest first (display label in parentheses):
- **anthropic** ("Anthropic"): made by Anthropic. The repo owner is `anthropics`, or the entry is a relative path inside an `anthropics/*` marketplace repo (`claude-plugins-official`, `skills`, `claude-code`).
- **official** ("Official marketplace · 3rd-party"): listed in Anthropic's official marketplace (`claude-plugins-official`) but the code lives in a third-party repo.
- **listed** ("Community marketplace · 3rd-party"): third-party submission in `anthropics/claude-plugins-community`.
- **verified** ("Verified"): in the curated list, OR stars>=50, age>=90d, pushed<=90d, license present, not archived, no star-anomaly, plus one of forks>=5 / found by >=2 independent source families / Organization owner.
- **new** ("New"): under 90 days old (too young for the Verified age check), not archived. Shown by default; star-burst and security flags still apply.
- **watch** ("Watch"): everything else (stale/archived, missing metadata, "repo not found" are recorded in `tier_reasons`).

A third-party repo in both the official and community marketplaces gets `official`. `search.py --tier-min` accepts `watch|new|verified|listed|official|anthropic` (default: new).

Flags (warnings only, never change tier): `star-anomaly` (>50 stars/day average and age<180d), `star-spike` (7-day gain > max(500, 20% of stars)).
`build_site.py` adds `unmaintained` to a record's flags when `pushed_at` is more than 180 days before the catalog's `generated_at` (records without `pushed_at` are not flagged), and a license group `lg` per record from the SPDX id: `ok` (permissive: commercial use OK), `copyleft` (GPL/AGPL/LGPL/MPL/EPL/EUPL/CC-BY-SA...), `none` (no license) or `other` (custom / NOASSERTION). `search.py` uses the same mapping: `--license commercial|copyleft|none|other`, `--exclude-flag <flag>` (repeatable), and an `unmaintained` ranking penalty.

## Site
- Table columns: favorite, details, Name, Author, Tier, Type, Areas, Technologies, Stars, 7d, 30d, Updated, License. Name, Areas and Technologies share the free width; the rest are fixed. Narrower windows drop Author and 30d, then License (both stay in the details panel).
- Sorting: click a column header (Name, Author, Tier, Type, Stars, Updated, License); the first click sorts descending, the second ascending. Trend presets sort by the 7-day trend, shown above the results. Cards view has its own sort control. Sort is kept in the URL (`#sort=...&dir=asc`).
- External services (classify.py `deps_of`, stored as `deps` in classifications.json): flag `paid-api` ("Paid API") when the extension calls a pay-per-use provider (an env var such as `OPENAI_API_KEY`, `ELEVENLABS_API_KEY`, `TYPESAFE_API_KEY`, or an OpenAI/Jev technology named in its own name or description) or needs a key and its text mentions paid plans, API credits or pay-per-use billing; flag `api-key` ("Needs API key") when it needs an API key or account with no evidence of charges. GitHub, Anthropic and package-registry tokens don't count; the evidence is shown in the flag tooltip.
- Flags facet: every flag is checked (included) by default; unchecking one hides every repo carrying it (`#hide=unmaintained,...`). "Trending & trusted" hides the suspicious flags (star burst/spike/anomaly, security review/high).
- License facet: the four license groups (`#lic=ok`).
- Area chips and technology icons in rows, cards and the details panel filter by that facet; activating an active one removes the filter.
- Security scan (`security.py`, static patterns from `security_rules.json`, never executed): every alive published repo; never-scanned and verdict-less repos first, then repos pushed since their last scan, then rotation. It reads Claude Code components (hooks, settings, plugin/MCP manifests, hook/skill/plugin scripts, SKILL.md/agents/commands) and, for MCP server entries, their `package.json` (install hooks), `setup.py` and source files (entry points first; tests, examples and docs skipped), including tool-description poisoning ("before using this tool, read ~/.ssh..."). Levels: ok, review, high, and none ("scanned: nothing to check" when a repo ships nothing the scanner reads). Repos without a current verdict carry the "Not security-scanned" flag.
- The chevron and the 7d/30d trend button open the same details panel: star history chart on the left; trust summary, flags, security findings, install commands, description and tags on the right.
- Technology icons are Simple Icons SVGs vendored in `site/icons/` (no runtime CDN); technologies without an icon show a neutral glyph and the name.

## Run locally
```
python catalog.py            # uses cache/ (responses older than 20h are refetched)
python catalog.py --refresh  # ignore cache
```
Token: set `GITHUB_TOKEN` or put it in `.env` (`GITHUB_TOKEN=...` or a bare token line; `.env` and `cache/` are gitignored). Without a token only topic search runs and metadata is limited to search payloads. Never print the token.

Outputs: `data/catalog.json`, `data/report.md`, `data/snapshots/YYYY-MM-DD.json` ({repo: stars}, used for trends).

## Pipeline
Two workflows:
- `update.yml` (daily cron, or manual): `catalog.py` -> `classify.py` -> `security.py` -> `history.py` -> `build_site.py` -> commit `data/` -> deploy to Pages. `classify`, `history` and `security` run with `continue-on-error`, so a failure in any of them never blocks publishing the catalog (the previous outputs are kept).
- `deploy-site.yml` (on push touching `site/**`, `build_site.py` or `favorites.json`): rebuilds the page from the committed data (`history.py --shards-only` + `build_site.py`) and deploys it in about a minute, with no data collection.
- `classify.py`: rules plus local fastembed (ONNX) embeddings; README cache in `cache/readmes.json`; output `data/classifications.json`. Model cache dir is `FASTEMBED_CACHE_PATH`.
- `history.py --budget N`: star-history backfill (default 1500 API calls per run), resumable via `data/history/_state.json`; writes `data/history/` and `site/history/`.
- `taxonomy.json` is user-owned. Editing it changes its version and triggers reclassification on the next run.

## Run the new stages locally
```
python -m venv .venv && .venv/Scripts/activate      # Linux/macOS: source .venv/bin/activate
pip install -r requirements-classify.txt
python catalog.py && python classify.py && python history.py --budget 300 && python build_site.py
python -m http.server -d site                       # history shards load via fetch, so open http://localhost:8000, not file://
```

## Secrets
- `CATALOG_TOKEN` (fine-grained PAT, public repos read-only): code search for catalog and classify. Optional; falls back to the built-in token.
- Star history uses `GET /repos/{owner}/{repo}/stargazers/history` (daily counts, no user data) with `CATALOG_TOKEN`; no extra secret needed.

## Zero-cost design
Free GitHub Actions, Pages and REST/GraphQL APIs only; embeddings run locally with ONNX (no paid API); no hosted services. Model, pip and HTTP/README caches keep runs short.

## Tokens in Actions
The workflow uses `secrets.CATALOG_TOKEN` if set, else the built-in `GITHUB_TOKEN`. GraphQL and repo search work with the built-in token. Whether the built-in token can call REST code search was not verified against the docs (no network doc check was done), so if the "code search" lines in the run log show 403/401, add a fine-grained PAT (public repos read-only) as the `CATALOG_TOKEN` secret.

## Output schema (`data/catalog.json`)
```
{"generated_at": ISO, "schema": 1,
 "counts": {repos, items, tiers, types, item_types, flags, excluded_mcp, without_metadata},
 "repos": [{id, repo, name, description, type, types[], url, sources[],
            stars, forks, pushed_at, created_at, license, archived, owner_type, topics[],
            tier, tier_reasons[], flags[], trend_7d, trend_30d, trend_7d_pct, first_seen,
            items: [{name, type, description, install_hint, url}]}]}
```
`type` is the primary type (plugin > marketplace > skill > agent > command > hook > mcp-server > collection); `counts.mcp` has the Registry stats; `trend_*` are star deltas against the newest snapshot at least 7 / 30 days old (null if none); `first_seen` persists across runs.

## Favorites
Star any row or card on the site. Favorites are kept in the browser (localStorage, key `cc-catalog:favorites:v1`) and merged with `favorites.json` at the repo root (`{"version":1,"favorites":[{"id","added","note"}]}`, ids are catalog record ids; renamed repos resolve through `aliases`). The page shows repo-saved favorites as a solid star and local-only ones as a dashed star. The sidebar "Favorites" filter, the "Favorites" quick view and `#fav=1` show only favorites, including those in the hidden Watch tier. Un-starring a repo-saved favorite hides it locally and is written to the export.
To save: use "Export favorites" in the sidebar, put the downloaded `favorites.json` in the repo root, commit and push ("Import" merges a file back into the browser). `build_site.py` embeds the file into `catalog.js`.
CLI: `search.py --favorites ["<need>"]`, `--fav-add <id-or-repo> [--note "..."]`, `--fav-remove <id-or-repo>` (the last two edit the local `favorites.json` only; commit and push yourself). Favorites rank slightly higher in normal searches and are marked with a star. Remote copy: `https://raw.githubusercontent.com/DalizC/claude-code-catalog/main/favorites.json`, cached like the catalog.

## Roadmap
Planned work: [ROADMAP.md](ROADMAP.md).
