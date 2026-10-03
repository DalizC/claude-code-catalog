# cc-catalog

Live page: https://dalizc.github.io/claude-code-catalog/

License: MIT.

## Install the Claude Code skill
```
/plugin marketplace add DalizC/claude-code-catalog
/plugin install cc-catalog@cc-catalog
```

Autonomous catalog of Claude Code extensions: plugins, skills, subagents, commands/hooks. MCP-only servers are excluded. One stdlib-only Python script (`catalog.py`, Python 3.12) collects, enriches and tiers repos; `build_site.py` renders `site/` from `data/catalog.json`. A daily GitHub Actions job (`.github/workflows/update.yml`) runs both, commits `data/` and `site/`, and deploys `site/` to GitHub Pages. The workflow expects this folder to be the repository root.

## Sources
1. Anthropic marketplaces (`claude-plugins-official`, `skills`, `claude-code`, `claude-plugins-community`) via raw `marketplace.json`.
2. Curated list: `hesreallyhim/awesome-claude-code` (CSV).
3. Discovery: repo search by topic (`claude-code-plugin`, `claude-skills`, `claude-code-subagents`, `claude-code-skills`, stars>=5), GitHub code search (`marketplace.json`, `plugin.json`, `SKILL.md`, `.claude/agents/*.md`, 3 pages each), and expansion of up to 50 discovered marketplaces.
4. Enrichment: GitHub GraphQL, 100 repos per query (stars, forks, dates, license, archived, owner type, topics).

All fetched text is untrusted data and is never executed; descriptions are cut to 300 chars.

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
`type` is the primary type (plugin > marketplace > skill > agent > command > hook > collection); `trend_*` are star deltas against the newest snapshot at least 7 / 30 days old (null if none); `first_seen` persists across runs.
