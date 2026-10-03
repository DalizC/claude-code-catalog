# cc-catalog: UX critique for the next version

- **Reviewed:** live site https://dalizc.github.io/claude-code-catalog/ (catalog generated 2026-10-03, 3,971 repos), plus the source in `tools/cc-catalog/site/`.
- **Method:** Playwright/Chromium at 1440x900 (and 1024x768 / 1280x800). I looked at every screenshot. I also ran DOM measurements and ran the catalog data through node to check tag coverage and tier-reason strings.
- **Lens:** the `impeccable` skill is not installed in this project. Its criteria (hierarchy, density, type, color, affordances, empty states, a11y, performance feel) were applied manually, together with `ux-designer` (WCAG 2.2 AA).
- **Screenshots** are in this folder:
  - `01` default
  - `02`/`02b` React-testing task
  - `03` expanded row
  - `04` history flip
  - `05`/`05b` tier and name popovers
  - `06` zero results
  - `07` trending 7d
  - `08` area/subarea
  - `09`/`09b` cards
  - `10` keyboard focus
  - `11`/`11b` dark
  - `12`/`12b` 1024px
  - `12c` 1280px

**User decisions respected.** These stay as they are: the table is the default and cards are the alternative, and summary rows carry no description or install. Nothing below reverts them. Items that touch them are marked **[decision check]**.

**What works.** The table's density and alignment are good. Numbers are tabular, and facet counts are live with zero-count dimming. The `/` shortcut, URL-hash state, chip bar with Clear all, focus rings and dark mode are all solid. Performance feels instant (an update takes about 8 ms, and a cold load about 3.3 s on 2.7 MB of catalog.js).

---

## Prioritized improvements

### 1. Make tiers explain themselves (trust is the core job). Impact H, effort S-M
- **Observed (01, 03, 05):**
  - The five tiers have no legend.
  - The sidebar order (Anthropic, Official, Community, Verified, Watch) implies a ranking, but nothing says whether "Community" (listed in a community marketplace) is more or less trustworthy than "Verified" (in a curated list).
  - The expanded-row reasons are raw rule strings: `stars>=200 (286)`, `age>=90d (276)`, `pushed<=90d (0)`, `no star-anomaly`. The data also contains strings like `fails: age>=90d (88)` and `pushed<=90d (-1)`.
  - The tier badge is a `span` with tabIndex -1, so its reasons popover can't be reached by keyboard.
- **Why it matters:** "Judge trust" is half of the user's goal. Right now the tier reads like a colour label, not a verdict.
- **Change:**
  - Add a "?" on the Tier facet header. It opens a 5-line legend: one sentence per tier, plus an explicit statement of what is ranked above what.
  - Rewrite the reasons as plain check/cross lines, for example: "✓ 286 stars (needs 200+)", "✓ Updated today", "✓ MIT license", "✗ Repo is younger than 90 days".
  - Render the badge as a focusable `button` that opens the same popover.

### 2. Fix the 1024-1439px layout: trust columns are cut off. Impact H, effort M
- **Observed (12, 12c):**
  - At 1024px the table is 1,000px wide inside a 760px wrapper with `overflow-x: clip`. About 240px is unreachable: the 7d, 30d, Activity and License columns, which are exactly the trust signals.
  - The search input shrinks to 118px ("Searc").
  - The drawer only kicks in at 900px or narrower.
- **Why it matters:** laptop and split-screen use is common even for a desktop-first tool, and the hidden columns are the ones used to compare candidates.
- **Change:**
  - Add column priorities. Below about 1280px, merge 7d/30d into one trend cell, fold license into the Activity tooltip, and cap Technologies·Areas at 1 to 2 chips.
  - Below about 1100px, collapse the sidebar to the existing drawer.
  - Give the search input `min-width: 220px`.
  - As a safety net, use `overflow-x: auto` instead of `clip`.

### 3. Stop star anomalies from leading "Trending". Impact H, effort S
- **Observed (07):**
  - In the top 20 by "Trending · 7d", 8 rows carry Star anomaly / Star spike flags (ponytail, brag, autoharness, universal-modder, i-have-adhd, logo-design-skill, Filtmall, open-seo).
  - The flag is a roughly 10px icon whose meaning only appears in a hover `title`.
  - Trend values are absolute, which favours already-large repos.
- **Why it matters:** "What's trending this week" is a primary discovery task, and the top of the list is partly gamed.
- **Change:**
  - In the Trending sorts, demote flagged repos below unflagged ones by default, and show a note: "8 flagged repos hidden · show".
  - Render flags as a visible amber text pill ("Star spike").
  - Let the Flags facet exclude as well as include ("Hide flagged").
  - Optionally add a "Trending % (7d)" sort: growth relative to the repo's size.

### 4. Make the Technologies·Areas column carry real information. Impact H, effort S
- **Observed (01, 07, 09):**
  - "General purpose (stack-agnostic)" is on 2,180 of 3,971 repos (55%). It is the widest chip, set in monospace, and usually comes first, so it pushes the useful area chips out.
  - Those chips are then hard-clipped mid-word ("AI agents & tc", "General purpo", "Promp").
  - Many rows show both the tech "General purpose (stack-agnostic)" and the area "General purpose", which is redundant.
- **Why it matters:** this is the only "what is it for" signal in the summary row, because descriptions are intentionally absent.
- **Change:**
  - Hide general-purpose tags in summary rows, or show them as a tiny muted "any stack" mark.
  - Put specific area/tech chips first.
  - Compute "+N" from the width that actually fits rather than a fixed 3, so no chip is ever clipped.
  - Shorten the label to "Any stack".
- **[decision check]** This adds no description, so it is compatible.

### 5. Search should understand needs, not just substrings. Impact H, effort M
- **Observed (02, 02b):**
  - For "find a well-trusted tool for React testing", the natural path is React plus `test`. It gives 5 results, and adding Verified leaves 1.
  - Search is a literal AND substring match. It never suggests the "Testing & QA" area (161 repos) or the "Test frameworks" tech (37).
  - Stack-agnostic testing tools (e.g. superpowers' TDD skill) are excluded by the React filter even though they apply.
- **Why it matters:** a thin result set tells the user "nothing proven exists, build it yourself". That is the exact wrong outcome for this catalog.
- **Change:**
  - When query words match taxonomy labels, show suggestion chips under the search box, e.g. "Filter Area: Testing & QA (161)".
  - When a tech filter is active, offer a toggle: "+ include stack-agnostic tools (N)".
  - Highlight the matched terms in the name popover and the expanded row.
- **[decision check]** Do not add matched-text snippets to summary rows. That would bring descriptions back.

### 6. Make zero results recoverable step by step. Impact H, effort S
- **Observed (06):** the empty state offers only "Clear search and filters", which also discards the user's useful constraints.
- **Why it matters:** "Recover from zero results" should take one click and keep the user's context.
- **Change:**
  - List the actions that relax one constraint at a time, each with its result count: "Remove 'zzqxv' → 12", "Remove Technologies: React → 0", "Search all tiers → 3".
  - Keep "Clear all" as the last option.
  - The counts can come from the same `compute()` pass that already counts fails-by-one-group.

### 7. Disambiguate install paths and make copying one action. Impact M, effort S
- **Observed (09b, 11b):**
  - Repos listed in two marketplaces show two identical item names ("mattpocock-skills" twice, "superpowers" twice).
  - The commands are truncated exactly at the part that differs: `…claude-plugins-offici…` vs `…claude-plugins-commun…`.
  - Each path is two separate copy buttons.
- **Why it matters:** "Copy an install command" should not require deciding which of two identical-looking options is right.
- **Change:**
  - Label each path by source ("via Official marketplace · recommended" / "via Community marketplace").
  - Put the official path first and collapse the alternates under "Other ways to install".
  - Add "Copy both steps", which copies the commands joined by a newline.
  - Truncate in the middle, or wrap, so marketplace names are never cut.

### 8. Reorder the expanded row around a trust summary. Impact M, effort M
- **Observed (03, 11b):**
  - The trust facts (tier reasons, stars/forks, activity, license) sit in a long right-hand column.
  - That column gives equal weight to internal provenance: "Tagged by: keyword rules", "Sources: listed / official" (raw ids), "First seen".
  - The left column leaves a large empty area under a single install line.
- **Why it matters:** expanding a row is where the user decides "trust it or not". The verdict should come first.
- **Change:**
  - Put a one-line trust strip at the top: tier verdict, the ✓/✗ reasons, stars · forks, last push, license, flags, plus an inline 90-day star sparkline.
  - Then show install, then the description.
  - Move provenance into a muted footer line and use human labels for the sources.

### 9. Fix the popover that gets left on screen. Impact M, effort S (defect)
- **Observed (06, 07, 08, 09, 09b):**
  - The name/description popover stays visible after its row is re-rendered by search, sort, clear-all or a view switch.
  - It ends up floating over the empty state and over unrelated rows.
  - This was reproduced: hover a name, type in search, and `.pop.on` stays true.
- **Why it matters:** the leftover tooltip shows another repo's description next to the wrong data, which undermines trust in the data.
- **Change:** call `hidePop(true)` in `renderResults()`, and hide it whenever `popFor` is no longer connected.

### 10. Make star history discoverable and keep context while it is open. Impact M, effort M
- **Observed (01, 04):**
  - The only way into history is a small ↗ icon under a "Trend" header. It looks like decoration, not a button.
  - When the row flips, the chart replaces the Tier, Type, Tags and Stars cells, so the user loses the tier while looking at growth.
  - The y-axis labels show only the min and max.
- **Why it matters:** the growth shape (organic vs spike) is a strong trust signal, and right now it is hidden.
- **Change:**
  - Label the column header "History" with a visible chevron or affordance.
  - Show a tiny 30-day sparkline in the cell. It can be drawn from history data loaded lazily for visible rows, or as a t7/t30 micro-bar.
  - In flip state, keep the Tier cell visible and let the chart span Type through Stars.
  - Alternatively, fold the chart into the expanded row (#8) and retire the flip.

### 11. Fix non-text contrast in the sidebar. Impact M, effort S
- **Observed (01, 10, 11):**
  - Checkbox borders use `--line-2` (oklch L 0.86 on white, about 1.4:1). That fails WCAG 1.4.11's 3:1 requirement for controls.
  - Facet counts and "Watch" use `--ink-3` at 11.5px, which is borderline.
- **Why it matters:** the sidebar is the primary navigation surface. Faint controls read as disabled.
- **Change:**
  - Use `--ink-3` or darker for checkbox borders, in both themes.
  - Keep the zero-count dimming distinct from the enabled state.
  - Verify with a contrast checker.

### 12. Shorten the keyboard path and the sidebar. Impact M, effort S
- **Observed (10):**
  - It takes 86 Tab presses from page load to reach the search box, because the sidebar comes first in DOM order.
  - The skip link only targets results.
  - Technologies (25 groups) and Areas (19) make the sidebar several screens tall, and "New in" ends up at the very bottom.
- **Change:**
  - Add "Skip to search" (or put the top bar first in DOM order).
  - Show the top 8 facets per group by count, plus "Show all N".
  - Move "New in" up next to Tier, since it is a discovery control.

### 13. Area → subarea: let the parent be the gateway. Impact M, effort M
- **Observed (08):**
  - Subareas are hidden behind a 20px chevron that is separate from the label.
  - Clicking the parent label selects every child and produces the chip "Frontend (all)".
  - The parent count (Frontend 125) doesn't add up to its children (15 + 15 + 40 + 12 = 82), and nothing explains the 43 repos tagged only at the parent level.
- **Change:**
  - Selecting a parent auto-expands its children.
  - Add an "Other Frontend (43)" child so the counts add up.
  - Make the whole row toggle expansion when the chevron is clicked.
  - Label the chip "Frontend" rather than "Frontend (all)".

### 14. One-click discovery presets. Impact M, effort S
- **Observed (07):** "What's trending this week" means opening the Sort select and picking "Trending · 7d". "New this week" is the "New in → Last 7 days" radio, three screens down the sidebar, and the label "Latest run" is pipeline jargon.
- **Change:**
  - Add a compact preset row under the top bar: Most starred · Trending this week · New this week · Recently updated.
  - Each preset just sets the sort and filters, so the table stays the default.
  - Rename "Latest run" to "Since yesterday".

### 15. Cards: same clipping issues as the table. Impact L, effort S
- **Observed (09, 12b):** tag chips are clipped mid-chip ("Al agents & tooling" followed by a fragment), and at 1024px the meta row truncates "plugin · 2" to "plugin ·".
- **Change:** apply the fit-based "+N" from #4, and give the meta row `flex-wrap` or a smaller set of fields.

---

## Not recommended
- Adding descriptions or install commands to summary rows, or making cards the default. These would revert explicit user decisions. The name-hover popover (05b) and the expanded row already cover descriptions.
