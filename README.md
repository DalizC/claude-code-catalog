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
1. Anthropic marketplaces (`claude-plugins-official`, `skills`, `claude-code`, `claude-plugins-community`) via raw `marketplace.json`.
2. Curated list: `hesreallyhim/awesome-claude-code` (CSV).
3. Discovery: repo search by topic (`claude-code-plugin`, `claude-skills`, `claude-code-subagents`, `claude-code-skills`, stars>=5), GitHub code search (`marketplace.json`, `plugin.json`, `SKILL.md`, `.claude/agents/*.md`, 3 pages each), and expansion of up to 50 discovered marketplaces.
4. Official MCP Registry (`https://registry.modelcontextprotocol.io/v0/servers?limit=100&version=latest`, public, no auth, paged with `cursor`, cached by the HTTP cache like everything else). Only latest, `active` servers are read (deprecated/deleted and older versions dropped), then the inclusion rule below applies; the parser is defensive because the schema drifts between versions. See "MCP servers" below.
5. Enrichment: GitHub GraphQL, 100 repos per query (stars, forks, dates, license, archived, owner type, topics).

All fetched text is untrusted data and is never executed; descriptions are cut to 300 chars.

## MCP servers (type `mcp-server`)
- **Inclusion rule** (in `catalog.py`, after enrichment because it needs stars): a registry server is included only if it has a GitHub `repository.url` AND (its repo reaches tier verified or higher, OR has >= 10 stars, OR its repo is already in the catalog for another reason, e.g. a plugin repo). Remote-only servers (no repo) and low-signal servers are excluded; the excluded counts are logged in `data/report.md` ("MCP Registry") and in `counts.mcp` (`excluded_remote_only`, `excluded_low_signal`).
- An included server attaches to its repo's record as an item (`mcp:<registry name>`); a repo not yet in the catalog gets a new record enriched through the same GraphQL path (stars, license, node_id, dedup). Several servers in one repo (monorepos) become several items of one record. `sources` contains `mcp-registry`.
- Same tier rules as everything else. The site hides the `watch` tier by default (a note above the results toggles it; an explicit tier selection overrides the default, and `#watch=1` in the URL shows it). `search.py` also excludes `watch` unless `--tier-min watch` is given.
- `install_hint`: remote HTTP/SSE `claude mcp add --transport http|sse <short-name> <url>`; npm `claude mcp add <short-name> -- npx -y <pkg>@<version>`; pypi `-- uvx <pkg>`; oci `-- docker run -i --rm <image>`. Remote wins when both exist. Required env vars/headers are named (never valued) in a trailing `# requires: A, B` note. Registry text is validated against strict patterns before it enters a command; a server with no runnable remote or package gets a `# ...` note instead of a command.
- The v1 MCP-only filter is unchanged: repos named/topic-tagged like MCP servers with no Claude Code plugin/skill/agent evidence are dropped from topic and code search (counted in `excluded_mcp`), except when they are registered in the Registry, in which case they come in through that path as `mcp-server`.

## Tiers (one record per repo, highest wins)
Order, highest first (display label in parentheses):
- **anthropic** ("Anthropic"): made by Anthropic. The repo owner is `anthropics`, or the entry is a relative path inside an `anthropics/*` marketplace repo (`claude-plugins-official`, `skills`, `claude-code`).
- **official** ("Official marketplace · 3rd-party"): listed in Anthropic's official marketplace (`claude-plugins-official`) but the code lives in a third-party repo.
- **listed** ("Community marketplace · 3rd-party"): third-party submission in `anthropics/claude-plugins-community`.
- **verified** ("Verified"): in the curated list, OR stars>=200, age>=90d, pushed<=90d, license present, not archived, no star-anomaly, plus one of forks>=20 / found by >=2 independent source families / Organization owner.
- **watch** ("Watch"): everything else (stale/archived, missing metadata, "repo not found" are recorded in `tier_reasons`).

A third-party repo in both the official and community marketplaces gets `official`. `search.py --tier-min` accepts `watch|verified|listed|official|anthropic`.

Flags (warnings only, never change tier): `star-anomaly` (>50 stars/day average and age<180d), `star-spike` (7-day gain > max(500, 20% of stars)).

## Run locally
```
python catalog.py            # uses cache/ (responses older than 20h are refetched)
python catalog.py --refresh  # ignore cache
```
Token: set `GITHUB_TOKEN` or put it in `.env` (`GITHUB_TOKEN=...` or a bare token line; `.env` and `cache/` are gitignored). Without a token only topic search runs and metadata is limited to search payloads. Never print the token.

Outputs: `data/catalog.json`, `data/report.md`, `data/snapshots/YYYY-MM-DD.json` ({repo: stars}, used for trends).

## Pipeline
`catalog.py` -> `classify.py` -> `history.py` -> `build_site.py` -> commit `data/` + `site/` -> deploy to Pages. `classify` and `history` run with `continue-on-error`, so a failure in either never blocks publishing the catalog (the previous outputs are kept).
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
