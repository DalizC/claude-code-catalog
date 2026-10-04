# Roadmap

Constraint for every item: **zero monetary cost** (free GitHub API, Actions, Pages; local models only).

## v3 — next

Status: A1, B2, B3, C4, C5, C7, D8, D9 and E are implemented (marked DONE). C6 is still open.

Priority order: B2 → A1 → B3 → C4 → C7 → C5, with D8 and D9 bundled in. UI/UX items (E) are prioritized separately below; E2 and E9 are bugs and go first.

### A. Catalog scope

**A1. Standalone MCP servers** — effort M — DONE
- Source: official MCP Registry (`GET https://registry.modelcontextprotocol.io/v0/servers`, public, paginated with `cursor`, incremental with `updated_since`).
- Same tiers, classification and trends as the rest of the catalog. Plugins that bundle MCP are already covered.
- Decided inclusion rule (applied in `catalog.py` after enrichment, since it needs stars): a registry server is included only if it has a GitHub repository AND (its repo reaches tier verified or higher, OR has >= 10 stars, OR the repo is already in the catalog for another reason). Remote-only servers (no repo) are excluded. Counts of excluded servers are logged in `data/report.md`. Watch-tier records are hidden by default on the site.
- Install hint: `claude mcp add ...` for remote (HTTP) and local (stdio: npx/uvx/docker) servers.

### B. Trust and security

**B2. Static security scan per extension** — impact H, effort M — DONE
- Free, rule-based scan of SKILL.md, agent files, hooks, commands and bundled scripts.
- Risk patterns: destructive commands, `curl | sh` style remote execution, data exfiltration to external hosts, credential access, hidden prompt-injection instructions, obfuscated code.
- Output: a `security` flag with findings and evidence, shown as a warning badge and weighted in the Claude Code skill ranking.
- Content scanned is untrusted data: never executed.

**B3. Star-farming detection from history** — effort S — DONE
- Use the daily star series: flag sudden single-day jumps with no matching repo activity (pushes, issues, forks).
- Replaces the coarse age-based `star-anomaly` heuristic.

### C. Catalog usefulness

**C4. Runnable install commands for everything** — effort S — DONE
- Replace "copy skills from owner/repo" hints with an executable command (e.g. clone into `.claude/skills/`).

**C5. Deduplicate renamed repos** — effort S — DONE
- Key repos by GitHub node id; merge entries like the two `Understand-Anything` records.

**C6. Comparison view** — effort M
- Side-by-side comparison of 2–4 extensions before choosing.

**C7. Taxonomy-aware Claude Code skill** — effort S — DONE
- `search.py` filters by technology/area/tier, e.g. "testing for React, verified or better".

### D. Maintenance

**D8. Control repo growth** — effort S — DONE
- Stop committing data that only the site needs (`site/history/`, `site/catalog.js`); build it in the workflow and ship it only to Pages.

**D9. Apply sort from URL hash on load** — effort trivial — DONE

### E. UI/UX (all DONE)

Source: UX critique of the live v2 site (2026-10-03), full detail in [docs/ux-critique-v2.md](docs/ux-critique-v2.md). None of these revert the decided layout (table default, cards alternative, no description/install in summary rows).

Bugs — fix first:

| # | Item | Impact | Effort |
|---|---|---|---|
| E2 | 1024–1439px layout: 7d/30d/Activity/License columns cut off and unreachable; search shrinks to ~118px | H | M |
| E9 | Description popover persists after its row re-renders, floating over unrelated rows / empty state | M | S |

Improvements:

| # | Item | Impact | Effort |
|---|---|---|---|
| E1 | Self-explaining tiers: visible legend with ranking, human-readable tier reasons (not `pushed<=90d (0)`), keyboard-reachable badge | H | S–M |
| E3 | Trending must not be led by flagged repos: demote or separate star-anomaly/star-spike, make the flag visible | H | S |
| E4 | Tags column: hide/shorten the `general-purpose` fallback chip, no mid-word clipping, show the most specific tags first | H | S |
| E5 | Need-aware search: suggest matching areas/techs (e.g. "test" → Testing & QA), include stack-agnostic tools | H | M |
| E6 | Recoverable zero results: offer "remove one filter → N results" instead of clear-all | H | S |
| E7 | Unambiguous install: disambiguate same-named items across marketplaces, one "copy both steps" button | M | S |
| E8 | Expanded row leads with a trust summary (verdict, reasons, sparkline); source internals in a muted footer | M | M |
| E10 | Discoverable star history: clearer entry point; keep the row's tier visible while the chart is open | M | M |
| E11 | Checkbox contrast ~1.4:1 fails WCAG 1.4.11 | M | S |
| E12 | Keyboard: ~86 Tab presses to reach search; add skip link / focus order | M | S |
| E13 | Area → subarea counts don't add up; clarify multi-tag counting | L | S |
| E14 | One-click discovery presets (e.g. "Trending & trusted", "New this week") | M | S |
| E15 | Clipping in cards view | L | S |

Suggested order: E2, E9 → E3, E4, E1 → E6, E7 → E5, E8, E10 → rest.
