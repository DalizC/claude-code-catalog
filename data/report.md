# Catalog report 2026-10-04
Mode: **token**; run time 2115s
Repos (deduped): 6208; flat entries before dedup: 7801

## Tier x type BEFORE dedup (flat entries)
- watch/mcp-server: 2582
- listed/plugin: 2283
- verified/mcp-server: 585
- watch/plugin: 476
- watch/skill: 467
- watch/marketplace: 330
- official/plugin: 276
- watch/agent: 242
- verified/skill: 176
- verified/collection: 163
- verified/plugin: 102
- anthropic/plugin: 57
- verified/agent: 29
- verified/marketplace: 12
- anthropic/marketplace: 5
- anthropic/collection: 4
- anthropic/agent: 1
- watch/collection: 1

## Tier AFTER dedup (repos)
- watch: 3221
- listed: 1950
- verified: 733
- official: 241
- anthropic: 63

## Type AFTER dedup (items)
- plugin: 3194
- mcp-server: 3147
- skill: 643
- marketplace: 324
- agent: 272
- collection: 168

## Primary type AFTER dedup (repos)
- plugin: 2745
- mcp-server: 2260
- skill: 573
- agent: 256
- marketplace: 239
- collection: 135

## Repos by discovery source family
- mcp-registry: 2432
- anthropic: 2252
- code: 1077
- topic: 539
- curated: 197
- marketplace-expansion: 50

## Flags (all tiers)
- star-anomaly: 1

## star-anomaly by tier
- watch: 1

## Metadata gaps
- repos without metadata: 239
- reasons: {'unfetched': 171, 'repo not found': 55, 'no repo (non-github link)': 13}

## MCP-only repos excluded: 10
- VikashLoomba/copilot-mcp *504* ['copilot', 'copilot-chat', 'mcp-server', 'modelcontextprotocol', 'vscode-extension'] - A VSCode extension that lets you find and install Agent Skills and MCP Apps to u
- damionrashford/RivalSearchMCP *131* ['fastmcp', 'search-engine', 'web-research', 'modelcontextprotocol', 'ai-assistant'] - Deterministic research MCP server on FastMCP 3 — 5-engine web search, 9-platform
- covagashi/eplan-rag-mcp *108* ['eplan', 'eplan-api', 'mcp-server', 'claude-code', 'claude-skills'] - EPLAN Electric P8 2026 2027 + AI: MCP servers, docs RAG, and a Claude Code skill
- Rich627/whatsapp-claude-plugin *100* ['anthropic', 'baileys', 'chatbot', 'claude', 'claude-code'] - Connects WhatsApp as a native Claude Code channel via Baileys linked-device (no 
- ypollak2/llm-router *93* ['ai-routing', 'anthropic', 'claude', 'claude-code', 'cost-optimization'] - A local-first router that sits under Claude Code (and Codex/Gemini CLI) and send
- roampal-ai/roampal-core *52* ['ai-memory', 'claude-code', 'llm', 'mcp', 'mcp-server'] - Outcome-based persistent memory MCP server for Claude Code and OpenCode. Good ad
- ngmeyer/librarian-mcp *32* ['claude', 'claude-code', 'karpathy', 'knowledge-graph', 'knowledge-management'] - A standalone MCP server that gives Claude a markdown second-brain over any Obsid
- jungjaehoon-lifegamez/MAMA *15* ['claude-code', 'claude-code-plugins', 'decision-tracking', 'embeddings', 'mcp-server'] - Always-on companion for Claude that remembers your decisions and their evolution
- grooverLab/fable *14* ['claude-code', 'llm', 'mcp', 'memory', 'sqlite'] - High-fidelity transcript memory for Claude Code — index every session, recall by
- sara-star-quant/presence *7* ['anthropic', 'claude', 'claude-code', 'claude-code-plugin', 'hooks'] - Per-repo memory, outcome telemetry, and a calibrated-confidence gate for Claude 

## Degradation
- registry complete: True (393 pages, 39249 entries)
- MCP servers merged from the previous catalog (not re-fetched): 0
- GraphQL 403s: 1 (secondary rate limit: 1); retries: 2; queries that gave up: 0
- HTTP retries (5xx/network): 0
- repos with stale metadata reused from the previous catalog (meta_stale): 0

## MCP Registry
- {"pages": 393, "fetched": 39249, "kept": 38775, "dropped": 474, "bad": 0, "complete": true, "excluded_remote_only": 10467, "excluded_low_signal": 25141, "fallback_merged": 0, "records": 2432, "attached_existing": 180, "new_repo": 2252, "remote_only": 0, "tiers": {"official": 24, "listed": 109, "verified": 356, "watch": 1943}}

## Top 20 by trend_7d
- n/a (no snapshot >=7 days old yet)

## Code search vs topic search
- repos found by code search: 1077
- also in topic search: 9
- code-only: 1032; tiers: {'watch': 1000, 'verified': 32}

## Top 30 by stars: anthropic
- anthropics/skills [marketplace,collection] *179598*  items=2 - Anthropic example skills
- anthropics/claude-code [marketplace,agent] *149372*  items=2 - Bundled plugins for Claude Code including Agent SDK development tools, PR review
- anthropics/claude-plugins-official [marketplace,collection] *37373*  items=2 - Directory of popular Claude Code extensions including development tools, product
- anthropics/claude-code-action [collection] *9413*  items=1 - The official GitHub Action for running Claude Code in CI: mention @claude in iss
- anthropics/claude-code-security-review [collection] *6298*  items=1 - An official AI-powered security-review GitHub Action that uses Claude to analyze
- anthropics/claude-plugins-community [marketplace] *4465*  items=1 - 
- anthropics/claude-plugins-official [plugin] *None*  items=1 - Development kit for working with the Claude Agent SDK
- anthropics/claude-plugins-official [plugin] *None*  items=1 - C/C++ language server (clangd) for code intelligence
- anthropics/claude-plugins-official [plugin] *None*  items=1 - Analyze codebases and recommend tailored Claude Code automations such as hooks, 
- anthropics/claude-plugins-official [plugin] *None*  items=1 - Tools to maintain and improve CLAUDE.md files - audit quality, capture session l
- anthropics/claude-plugins-official [plugin] *None*  items=1 - Deep vulnerability scanning of your own code, run entirely inside your Claude Co
- anthropics/claude-plugins-official [plugin] *None*  items=1 - Guided modernization for any legacy codebase: start with /modernize, get an asse
- anthropics/claude-plugins-official [plugin] *None*  items=1 - Automated code review for pull requests using multiple specialized agents with c
- anthropics/claude-plugins-official [plugin] *None*  items=1 - Agent that simplifies and refines code for clarity, consistency, and maintainabi
- anthropics/claude-plugins-official [plugin] *None*  items=1 - Commands for git commit workflows including commit, push, and PR creation
- anthropics/claude-plugins-official [plugin] *None*  items=1 - C# language server for code intelligence
- anthropics/claude-plugins-official [plugin] *None*  items=1 - Onboard a Code-with-Claude Makers Cardputer with one /maker-setup command — clon
- anthropics/claude-plugins-official [plugin] *None*  items=1 - Adds educational insights about implementation choices and codebase patterns (mi
- anthropics/claude-plugins-official [plugin] *None*  items=1 - Comprehensive feature development workflow with specialized agents for codebase 
- anthropics/claude-plugins-official [plugin] *None*  items=1 - Create distinctive, production-grade frontend interfaces with high design qualit
- anthropics/claude-plugins-official [plugin] *None*  items=1 - Go language server for code intelligence and refactoring
- anthropics/claude-plugins-official [plugin] *None*  items=1 - Easily create custom hooks to prevent unwanted behaviors by analyzing conversati
- anthropics/claude-plugins-official [plugin] *None*  items=1 - Java language server (Eclipse JDT.LS) for code intelligence
- anthropics/claude-plugins-official [plugin] *None*  items=1 - Kotlin language server for code intelligence
- anthropics/claude-plugins-official [plugin] *None*  items=1 - Interactive learning mode that requests meaningful code contributions at decisio
- anthropics/claude-plugins-official [plugin] *None*  items=1 - Lua language server for code intelligence
- anthropics/claude-plugins-official [plugin] *None*  items=1 - Solve competition math (IMO, Putnam, USAMO) with adversarial verification that c
- anthropics/claude-plugins-official [plugin] *None*  items=1 - Two skills for hard mathematics problems, each ending in a self-contained proof.
- anthropics/claude-plugins-official [plugin] *None*  items=1 - Skills for designing and building MCP servers that work seamlessly with Claude. 
- anthropics/claude-plugins-official [plugin] *None*  items=1 - Connect Claude to a private MCP server through an Anthropic MCP tunnel. The /cre

## Top 30 by stars: official
- obra/superpowers [plugin,skill] *295147*  items=3 - Superpowers teaches Claude brainstorming, subagent driven development with built
- mattpocock/skills [plugin] *275789*  items=2 - Matt Pocock's agent skills for real engineering — grilling, spec/ticket flows, T
- heygen-com/hyperframes [plugin] *56547*  items=2 - HyperFrames by HeyGen. Write HTML, render video. Compositions, GSAP and runtime 
- ChromeDevTools/chrome-devtools-mcp [plugin,mcp-server] *52944*  items=3 - Control and inspect a live Chrome browser from your coding agent. Record perform
- confident-ai/deepeval [plugin] *18620*  items=1 - Skills for adding DeepEval evaluations, tracing, datasets, Confident AI reports,
- huggingface/skills [plugin] *11137*  items=2 - Build, train, evaluate, and use open source AI models, datasets, and spaces.
- wonderwhy-er/DesktopCommanderMCP [plugin,mcp-server] *9911*  items=3 - MCP server for terminal commands, process management, and file operations across
- exa-labs/exa-mcp-server [plugin,mcp-server] *5076*  items=2 - Exa AI web search, deep research, and content extraction. Provides MCP tools and
- NVIDIA/skills [plugin] *3519*  items=2 - Find the right NVIDIA skill for GPU acceleration, CUDA, AI agents, data loading,
- cloudflare/skills [plugin] *2978*  items=2 - Skills for the Cloudflare developer platform: Workers, Durable Objects, Agents S
- modelcontextprotocol/ext-apps [plugin] *2895*  items=3 - Skills for creating MCP Apps with the MCP Apps SDK
- aws/agent-toolkit-for-aws [plugin] *2796*  items=8 - Build, deploy, and operate AI agents on AWS. Skills for scaffolding agents with 
- expo/skills [plugin] *2656*  items=2 - Official Expo skills for building, deploying, upgrading, and debugging React Nat
- GoogleChrome/modern-web-guidance [plugin] *2385*  items=1 - Keep your coding agent up to date with the latest web best practices
- figma/mcp-server-guide [plugin,mcp-server] *2044*  items=3 - Figma design platform integration. Access design files, extract component inform
- MicrosoftDocs/mcp [plugin,mcp-server] *1926*  items=3 - Access official Microsoft documentation, API references, and code samples for Az
- stripe/ai [plugin,mcp-server] *1853*  items=3 - Stripe development plugin for Claude
- microsoft/azure-skills [plugin] *1536*  items=2 - Transform Claude into an Azure expert. This plugin integrates the Azure MCP serv
- atlassian/atlassian-mcp-server [plugin,mcp-server] *1078*  items=3 - Connect to Atlassian products including Jira and Confluence. Search and create i
- forcedotcom/sf-skills [plugin] *1055*  items=1 - Build Salesforce apps and agents using these core building blocks: metadata, Ape
- awslabs/agent-plugins [plugin] *909*  items=10 - Guide developers through adding maps, places search, geocoding, routing, and oth
- superdesigndev/superdesign-skill [plugin,skill] *622*  items=2 - Design or redesign frontend UI and marketing graphics on the Superdesign infinit
- duckdb/duckdb-skills [plugin] *598*  items=2 - DuckDB-powered skills for Claude Code: read any data file, attach and query Duck
- Shopify/Shopify-AI-Toolkit [plugin] *585*  items=2 - Shopify's AI Toolkit provides 18 development skills for building on the Shopify 
- ClickHouse/agent-skills [plugin] *543*  items=2 - 28 best practice rules for ClickHouse schema design, query optimization, and dat
- gitroomhq/postiz-agent [plugin] *501*  items=2 - Social media automation CLI for scheduling posts, managing integrations, uploadi
- makenotion/claude-code-notion-plugin [plugin] *491*  items=2 - Notion workspace integration. Search pages, create and update documents, manage 
- tavily-ai/skills [plugin] *486*  items=2 - Build AI applications with real-time web data using Tavily's search, extract, cr
- TheQtCompanyRnD/agent-skills [plugin] *458*  items=2 - Agentic engineering skills for Qt software development — Qt C++/QML code review,
- astronomer/agents [plugin] *448*  items=6 - Data engineering for Apache Airflow and Astronomer. Author DAGs with best practi

## Top 30 by stars: listed
- DietrichGebert/ponytail [plugin] *154418*  items=2 - Lazy senior dev mode. Forces the simplest, shortest solution that actually works
- JuliusBrussee/caveman [plugin,skill] *109738*  items=2 - Auto-activation works differently per agent: Claude Code uses SessionStart hooks
- thedotmack/claude-mem [plugin,skill] *95920*  items=3 - Persistent memory system for Claude Code - seamlessly preserve context across se
- Egonex-AI/Understand-Anything [plugin,skill] *85252*  items=2 - Understand Anything is a Claude Code plugin that analyzes your project with a mu
- pbakaus/impeccable [plugin] *75924*  items=1 - Great design prompts require design vocabulary. Most people don't have it. You c
- mem0ai/mem0 [plugin] *66558*  items=1 - Connect Mem0 to Claude to give your agent persistent memory across sessions. Cla
- mvanhorn/last30days-skill [plugin] *63489*  items=1 - last-30-days is a Claude Code skill that searches the web and delivers a structu
- coreyhaines31/marketingskills [plugin] *52845*  items=1 - coreyhaines31
- DayuanJiang/next-ai-draw-io [plugin] *36105*  items=1 - AI-powered Draw.io diagram generation with real-time browser preview. Create flo
- jarrodwatts/claude-hud [plugin,collection] *28298*  items=2 - Real-time statusline HUD for Claude Code - context health, tool activity, agent 
- alirezarezvani/claude-skills [plugin,skill] *27568*  items=2 - Playwright Pro turns your AI coding agent into a senior test automation engineer
- promptfoo/promptfoo [plugin] *25699*  items=1 - Teaches AI coding agents to create and maintain promptfoo eval suites. Encodes b
- mksglu/context-mode [plugin] *25352*  items=1 - MCP is the protocol for tool access. We're the virtualization layer for context.
- browser-use/browser-harness [plugin] *18280*  items=1 - Open-source browser agent driven via CDP — direct browser control, 79K stars, YC
- AgriciDaniel/claude-seo [plugin] *18264*  items=1 - Comprehensive SEO analysis plugin for Claude Code. Performs full site audits wit
- Jeffallan/claude-skills [plugin,skill,collection] *11727*  items=3 - 66 specialized skills for full-stack development: 12 language experts (Python, T
- nicobailon/visual-explainer [plugin,collection] *10242*  items=3 - An agent skill that turns complex terminal output into styled HTML pages you act
- revfactory/harness [plugin,agent] *9118*  items=3 - Harness leverages Claude Code's agent team system to decompose complex tasks int
- Eventual-Inc/Daft [plugin] *5790*  items=1 - Skills for working with Daft, a high-performance data engine for AI and multimod
- clidey/whodb [plugin] *5032*  items=1 - Database management tools for Claude Code. Query databases, explore schemas, ana
- nyldn/claude-octopus [plugin] *4146*  items=2 - Multi-LLM orchestration for Claude Code and Cowork. Coordinates 8 AI providers (
- giancarloerra/SocratiCode [plugin,mcp-server] *3333*  items=2 - Enterprise-grade (40m+ lines) codebase intelligence in a zero-setup, private and
- Chachamaru127/claude-code-harness [plugin,agent] *3147*  items=2 - Autonomous Plan → Work → Review cycle for Claude Code. Go-native engine with 25×
- nizos/tdd-guard [plugin,collection] *2354*  items=2 - Enforces Test-Driven Development by intercepting file operations in Claude Code.
- AgriciDaniel/claude-blog [plugin] *2320*  items=1 - AI-powered blog creation and optimization skill with 20 commands, 4 specialized 
- severity1/claude-code-prompt-improver [plugin] *1936*  items=1 - Intelligent prompt optimization using skill-based architecture. Enriches vague p
- AminForou/mcp-gsc [plugin] *1842*  items=1 - Connect Google Search Console to Claude Code. Query rankings, inspect URLs, audi
- codeaholicguy/ai-devkit [plugin] *1639*  items=1 - A structured software development toolkit that helps Claude Code follow senior-e
- activeloopai/hivemind [plugin,skill,collection] *1621*  items=5 - Cloud-backed persistent memory for Claude Code powered by Deeplake. Automaticall
- kenryu42/cc-safety-net [plugin,collection] *1576*  items=3 - Block destructive git and filesystem commands before execution

## Top 30 by stars: verified
- affaan-m/ECC [collection] *272692*  items=1 - Top-notch, well-written resources covering "just about everything" from core eng
- multica-ai/andrej-karpathy-skills [collection] *216817*  items=1 - A drop-in CLAUDE.md distilling four behavioral guidelines for LLM-assisted codin
- garrytan/gstack [agent] *135054*  items=1 - Garry Tan's (Y Combinator) Claude Code setup and "open source software factory" 
- browser-use/browser-use [mcp-server] *117120*  items=1 - Control a real Chrome browser to complete any task: fill forms, extract data, bo
- paperclipai/paperclip [mcp-server] *97024*  items=1 - Trending hip-hop artist momentum scores across four cultural dimensions.
- koala73/worldmonitor [mcp-server] *87759*  items=1 - Live markets, conflicts, country risk, chokepoints, energy, and China decision s
- D4Vinci/Scrapling [mcp-server] *85622*  items=1 - Web scraping with stealth HTTP, real browsers, and Cloudflare bypass. CSS select
- netdata/netdata [mcp-server] *80790*  items=1 - Real-time infrastructure monitoring with metrics, logs, alerts, and ML-based ano
- shareAI-lab/learn-claude-code [collection] *77989*  items=1 - A really interesting analysis of how coding agents like Claude Code are designed
- ruvnet/ruflo [mcp-server] *73838*  items=1 - AI orchestration with hive-mind swarms, neural networks, and 87 MCP tools for en
- shanraisshan/claude-code-best-practice [skill] *67072*  items=1 - from vibe coding to agentic engineering - practice makes claude perfect
- upstash/context7 [mcp-server] *62668*  items=1 - Up-to-date code docs for any prompt
- ayghri/i-have-adhd [plugin,skill] *53440*  items=2 - A skill to stop your coding agent from burying the answer. ADHD-friendly output.
- K-Dense-AI/scientific-agent-skills [skill,collection] *47569*  items=2 - "A set of ready-to-use Agent Skills for research, science, engineering, analysis
- sickn33/agentic-awesome-skills [skill] *47243*  items=1 - AAS Core is the local, agent-first control plane for complete catalog discovery,
- DeusData/codebase-memory-mcp [mcp-server] *45785*  items=1 - Codebase knowledge graph for AI agents — 162 languages, sub-ms queries, 99% fewe
- ccxt/ccxt [mcp-server] *44250*  items=1 - Official CCXT MCP server - Market data and trading across 100+ exchanges and pre
- reactive-resume/reactive-resume [mcp-server] *43753*  items=1 - Free open-source resume builder with remote MCP tools for resumes and job applic
- HeyPuter/puter [mcp-server] *43649*  items=1 - Puter MCP enables AI tools to interact with Puter: manage files, websites, worke
- cathrynlavery/diagram-design [collection] *43303*  items=1 - Another welcome contribution to the domain of making Claude Code output look sty
- luongnv89/claude-howto [collection] *41742*  items=1 - A structured, chapter-based getting-started guide for Claude Code with a self-as
- wshobson/agents [plugin,skill] *40188*  items=2 - Multi-harness agentic plugin marketplace for Claude Code, Codex, Cursor, OpenCod
- Yeachan-Heo/oh-my-claudecode [plugin] *39574*  items=1 - Teams-first Multi-agent orchestration for Claude Code
- bytedance/UI-TARS-desktop [mcp-server] *39207*  items=4 - MCP server for browser use access
- microsoft/playwright-mcp [mcp-server] *37810*  items=1 - Playwright Tools for MCP
- VoltAgent/awesome-agent-skills [skill] *35190*  items=1 - A curated collection of 1000+ agent skills from official dev teams and the commu
- github/github-mcp-server [mcp-server] *33356*  items=1 - Connect AI assistants to GitHub - manage repos, issues, PRs, and workflows throu
- feder-cr/invisible_playwright_mcp [plugin,mcp-server] *31773*  items=3 - Playwright MCP server undetected by anti-bots and captchas: AI agent browses the
- nanocoai/nanoclaw [skill] *30875*  items=1 - A lightweight alternative to OpenClaw that runs in containers for security. Conn
- yamadashy/repomix [mcp-server] *28684*  items=1 - Pack local or remote codebases into AI-friendly files that LLMs and coding agent

## Top 30 by stars: watch
- thedaviddias/Front-End-Checklist [mcp-server] *74355*  items=1 - Review frontend code and live pages against 386 quality-gated web development ru
- code-yeongyu/oh-my-openagent [skill] *69790*  items=1 - OmO: Just type "mass ulw" keyword with your prompt. Now you are the master of gr
- tldraw/tldraw [mcp-server] *50741*  items=1 - Draw and visually collaborate with your agents on tldraw's canvas.
- metabase/metabase [mcp-server] *49536*  items=1 - Lets AI clients search, explore, query, and visualize data in a Metabase instanc
- PostHog/posthog [mcp-server] *40133*  items=1 - Official PostHog MCP Server for product analytics, feature flags, experiments, a
- oraios/serena [mcp-server] *29983*  items=1 - A powerful toolkit for coding, providing semantic retrieval and editing capabili
- different-ai/openwork [mcp-server] *23842*  items=1 - Your OpenWork org's skills, plugins, workflows, and connections through one OAut
- screenpipe/screenpipe [mcp-server] *21812*  items=1 - Search your local screen recordings, audio transcripts, and computer activity fr
- travisvn/awesome-claude-skills [skill] *15262*  items=1 - A curated list of awesome Claude Skills, resources, and tools for customizing Cl
- kyegomez/OpenMythos [plugin] *14902*  items=1 - A theoretical reconstruction of the Claude Mythos architecture, built from first
- NevaMind-AI/memU [skill] *14493*  items=1 - Personal memory across agents
- Orchestra-Research/AI-Research-SKILLs [skill] *13238*  items=1 - Comprehensive open-source library of AI research and engineering skills for any 
- elie222/inbox-zero [mcp-server] *12407*  items=1 - Search Gmail and Outlook, save drafts, manage email rules, and view email stats.
- anbeime/skill [skill] *7528*  items=1 - 收录最全、更新最快的技能Skills商店：精选原创技能包（涵盖文档处理、内容创作、编程开发、机器学习、自动化工作流），全部打包好可直接安装使用！同时自动抓取Gi
- modelcontextprotocol/registry [mcp-server] *7314*  items=7 - Check how to contact a business website, and whether that contact path actually 
- deanpeters/Product-Manager-Skills [skill] *7157*  items=1 - Product Management skills framework built on battle-tested methods for Claude Co
- BuilderIO/agent-native [mcp-server] *7057*  items=13 - Agent-Native Amplitude/Mixpanel - connect data sources, prompt for charts
- airweave-ai/airweave [mcp-server] *6560*  items=1 - MCP server for searching Airweave collections with natural language queries.
- nirholas/fresh-start [mcp-server] *6231*  items=1 - Explore the Claude Code CLI source — browse tools, commands, search code, and mo
- Klavis-AI/klavis [mcp-server] *5808*  items=1 - MCP server for progressive tool usage at any scale (see https://klavis.ai)
- KnockOutEZ/wigolo [mcp-server] *5445*  items=1 - Local-first web intelligence MCP server for AI coding agents
- tolgee/tolgee-platform [mcp-server] *4119*  items=1 - Your app's translations in Tolgee: search keys, create translations, trigger mac
- superdesigndev/treg [mcp-server] *4118*  items=1 - OpenRouter for tools and data. Compare catalog providers and call them from one 
- parcadei/Continuous-Claude-v3 [skill,agent] *3939*  items=2 - Context management for Claude Code. Hooks maintain state via ledgers and handoff
- geekjourneyx/md2wechat-skill [skill] *3687*  items=1 - 面向 AI Agent 的微信公众号创作与发布 CLI：Markdown 排版、AI 配图、预览与草稿创建；支持由浏览器 Agent 保存知乎、CSDN、头条未
- Ryze-AI-Adgent/open-seo-mcp-skills [skill] *3642*  items=1 - Free SEO MCP server + open-source SEO and GEO skills for Claude: keyword researc
- zenbu-labs/terminal-browser [plugin,skill] *3632*  items=2 - A browser inside your terminal
- agenticnotetaking/arscontexta [plugin] *3492*  items=1 - Claude Code plugin that generates individualized knowledge systems from conversa
- jangviktor-web/nihaixia [skill] *3426*  items=1 - 倪海厦视角的中医Agent Skill，基于倪海厦教学资料开发，蒸馏倪师伤寒论、金匮要略、黄帝内经、神农本草经、针灸篇等，人纪/医案/经方思维，六经辨证，八纲辨
- browserbase/mcp-server-browserbase [mcp-server] *3411*  items=2 - Provides cloud browser automation capabilities using Stagehand and Browserbase, 

## Random sample of 20 watch repos (of 3221)
- PSU3D0/agent-spreadsheet [mcp-server] *58*  items=2 - Agent-safe Excel workbook analysis, editing, recalc, and verification tools. reasons=['fails: stars>=200 (58)', 'no corroborating signal'] src=['mcp-registry']
- dshakes/distil [mcp-server] *18*  items=1 - Reversibly compress tool outputs to recoverable handles; expand to exact origina reasons=['fails: stars>=200 (18)', 'fails: license (NOASSERTION)', 'no corroborating signal'] src=['mcp-registry']
- decoded-cipher/nodrix [mcp-server] *42*  items=1 - Read live and historical IoT telemetry and actuate ESP32/Arduino hardware from a reasons=['fails: stars>=200 (42)', 'no corroborating signal'] src=['mcp-registry']
- SeanFDZ/agentbridge [mcp-server] *26*  items=1 - Control Classic Mac OS (System 7-9) from AI agents via shared folder protocol. reasons=['fails: stars>=200 (26)', 'fails: pushed<=90d (167)', 'no corroborating signal'] src=['mcp-registry']
- PSPDFKit/nutrient-document-engine-mcp-server [mcp-server] *62*  items=1 - MCP server for self-hosted Nutrient Document Engine: extract, edit, redact, and  reasons=['fails: stars>=200 (62)'] src=['mcp-registry']
- ariffazil/arifOS [mcp-server] *52*  items=3 - Constitutional AI Governance with 13 enforced floors (F1-F13) and tri-witness co reasons=['fails: stars>=200 (52)', 'no corroborating signal'] src=['mcp-registry']
- halflifezyf2680/MPM-Coding [mcp-server] *17*  items=1 - Tool-first MCP: AST nav, impact/flow, task chains, memo/recall. reasons=['fails: stars>=200 (17)', 'no corroborating signal'] src=['mcp-registry']
- patinaproject/skills [plugin] *1*  items=1 - Agentic engineering skills from the Patina Project team reasons=['fails: stars>=200 (1)'] src=['code']
- leewayworks/guochuang-gps [plugin] *106*  items=1 - GPS (Guochuang Preparation Skills) — A multi-agent AI toolkit for competition pl reasons=['fails: stars>=200 (106)', 'fails: age>=90d (53)', 'no corroborating signal'] src=['code']
- asklokesh/loki-mode [mcp-server] *1082*  items=1 - Autonomous spec-to-product coding-agent CLI with an MCP server exposing 39 tools reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- The-OpenROAD-Project/OpenROAD-MCP [mcp-server] *23*  items=2 - The OpenROAD MCP server - interactive EDA sessions via Model Context Protocol reasons=['fails: stars>=200 (23)'] src=['mcp-registry']
- leonardosepulvedat/mcp-n8n [mcp-server] *21*  items=1 - Operate and build n8n: 61 tools, 560-node catalog, validation, autofix, snapshot reasons=['fails: stars>=200 (21)', 'no corroborating signal'] src=['mcp-registry']
- jonradoff/lastsaas [mcp-server] *173*  items=1 - Read-only admin MCP server for LastSaaS — dashboards, users, tenants, billing, l reasons=['fails: stars>=200 (173)', 'fails: pushed<=90d (212)'] src=['mcp-registry']
- crouton-labs/capture [plugin] *2*  items=1 - Browser automation and UI validation via CDP — session-based screenshots, HAR, a reasons=['fails: stars>=200 (2)'] src=['code']
- NYCU-Chung/claude-line-channel [marketplace] *46*  items=1 - LINE Messaging API channel plugin for Claude Code reasons=['fails: stars>=200 (46)', 'fails: pushed<=90d (181)', 'fails: license (None)', 'no corroborating signal'] src=['code']
- NikolaNddTesla/ssh-mcp-server [mcp-server] *11*  items=1 - SSH server management with zero-token SFTP file transfer and SOCKS proxy support reasons=['fails: stars>=200 (11)', 'fails: pushed<=90d (130)', 'fails: license (NOASSERTION)', 'no corroborating signal'] src=['mcp-registry']
- louisburroughs/durion [agent] *1*  items=1 -  reasons=['fails: stars>=200 (1)', 'fails: license (None)', 'no corroborating signal'] src=['code']
- komal-SkyNET/claude-skill-homeassistant [plugin] *963*  items=1 - Claude Code skill to supercharge and manage all Home Assistant workflows reasons=['fails: pushed<=90d (91)'] src=['code']
- rohittcodes/claude-plugin-suite [marketplace] *29*  items=1 -  reasons=['fails: stars>=200 (29)', 'fails: pushed<=90d (355)', 'no corroborating signal'] src=['code']
- conaman/unreal-mcp-ue4 [mcp-server] *25*  items=1 - UE4.27 MCP server for controlling Unreal Editor sessions over Python Remote Exec reasons=['fails: stars>=200 (25)', 'fails: pushed<=90d (131)', 'no corroborating signal'] src=['mcp-registry']

## Errors
- marketplace obra/claude-session-driver: no plugins list
- graphql: HTTP 403 secondary rate limit, waiting 60s (retry 1/4)

## Rate limit
- REST calls this run (uncached): {"core": 0, "search": 0}; last seen: {}
- GraphQL: 453 calls, cost 451, remaining 4779/5000, stopped early: False
- REST stopped early: False
- repos lacking metadata: 3412; enriched this run: 23293