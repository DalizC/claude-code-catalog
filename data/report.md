# Catalog report 2026-10-04
Mode: **token**; run time 143s
Repos (deduped): 6204; flat entries before dedup: 7836

## Tier x type BEFORE dedup (flat entries)
- watch/mcp-server: 2588
- listed/plugin: 2283
- verified/mcp-server: 571
- watch/plugin: 518
- watch/skill: 469
- watch/marketplace: 331
- official/plugin: 276
- watch/agent: 242
- verified/skill: 174
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
- watch: 3232
- listed: 1950
- verified: 718
- official: 241
- anthropic: 63

## Type AFTER dedup (items)
- plugin: 3236
- mcp-server: 3139
- skill: 643
- marketplace: 325
- agent: 272
- collection: 168

## Primary type AFTER dedup (repos)
- plugin: 2746
- mcp-server: 2254
- skill: 573
- agent: 256
- marketplace: 240
- collection: 135

## Repos by discovery source family
- mcp-registry: 2424
- anthropic: 2252
- code: 1078
- topic: 539
- curated: 197
- marketplace-expansion: 50

## Flags (all tiers)
- star-anomaly: 4

## star-anomaly by tier
- watch: 4

## Metadata gaps
- repos without metadata: 409
- reasons: {'unfetched': 342, 'repo not found': 54, 'no repo (non-github link)': 13}

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

## MCP Registry
- {"pages": 390, "fetched": 38979, "kept": 38508, "dropped": 471, "bad": 0, "complete": true, "excluded_remote_only": 10330, "excluded_low_signal": 25019, "records": 2424, "attached_existing": 178, "new_repo": 2246, "remote_only": 0, "tiers": {"official": 24, "listed": 109, "verified": 343, "watch": 1948}}

## Top 20 by trend_7d
- n/a (no snapshot >=7 days old yet)

## Code search vs topic search
- repos found by code search: 1078
- also in topic search: 9
- code-only: 1034; tiers: {'watch': 1002, 'verified': 32}

## Top 30 by stars: anthropic
- anthropics/skills [marketplace,collection] *179517*  items=2 - Anthropic example skills
- anthropics/claude-code [marketplace,agent] *149167*  items=2 - Bundled plugins for Claude Code including Agent SDK development tools, PR review
- anthropics/claude-plugins-official [marketplace,collection] *37349*  items=2 - Directory of popular Claude Code extensions including development tools, product
- anthropics/claude-code-action [collection] *9407*  items=1 - The official GitHub Action for running Claude Code in CI: mention @claude in iss
- anthropics/claude-code-security-review [collection] *6295*  items=1 - An official AI-powered security-review GitHub Action that uses Claude to analyze
- anthropics/claude-plugins-community [marketplace] *4459*  items=1 - 
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
- obra/superpowers [plugin,skill] *294856*  items=3 - Superpowers teaches Claude brainstorming, subagent driven development with built
- mattpocock/skills [plugin] *275286*  items=2 - Matt Pocock's agent skills for real engineering — grilling, spec/ticket flows, T
- heygen-com/hyperframes [plugin] *56257*  items=2 - HyperFrames by HeyGen. Write HTML, render video. Compositions, GSAP and runtime 
- ChromeDevTools/chrome-devtools-mcp [plugin,mcp-server] *52914*  items=3 - Control and inspect a live Chrome browser from your coding agent. Record perform
- confident-ai/deepeval [plugin] *18600*  items=1 - Skills for adding DeepEval evaluations, tracing, datasets, Confident AI reports,
- huggingface/skills [plugin] *11132*  items=2 - Build, train, evaluate, and use open source AI models, datasets, and spaces.
- wonderwhy-er/DesktopCommanderMCP [plugin,mcp-server] *9899*  items=3 - MCP server for terminal commands, process management, and file operations across
- exa-labs/exa-mcp-server [plugin,mcp-server] *5073*  items=2 - Exa AI web search, deep research, and content extraction. Provides MCP tools and
- NVIDIA/skills [plugin] *3512*  items=2 - Find the right NVIDIA skill for GPU acceleration, CUDA, AI agents, data loading,
- cloudflare/skills [plugin] *2975*  items=2 - Skills for the Cloudflare developer platform: Workers, Durable Objects, Agents S
- modelcontextprotocol/ext-apps [plugin] *2895*  items=3 - Skills for creating MCP Apps with the MCP Apps SDK
- aws/agent-toolkit-for-aws [plugin] *2790*  items=8 - Build, deploy, and operate AI agents on AWS. Skills for scaffolding agents with 
- expo/skills [plugin] *2656*  items=2 - Official Expo skills for building, deploying, upgrading, and debugging React Nat
- GoogleChrome/modern-web-guidance [plugin] *2382*  items=1 - Keep your coding agent up to date with the latest web best practices
- figma/mcp-server-guide [plugin,mcp-server] *2043*  items=3 - Figma design platform integration. Access design files, extract component inform
- MicrosoftDocs/mcp [plugin,mcp-server] *1927*  items=3 - Access official Microsoft documentation, API references, and code samples for Az
- stripe/ai [plugin,mcp-server] *1852*  items=3 - Stripe development plugin for Claude
- microsoft/azure-skills [plugin] *1532*  items=2 - Transform Claude into an Azure expert. This plugin integrates the Azure MCP serv
- atlassian/atlassian-mcp-server [plugin,mcp-server] *1078*  items=3 - Connect to Atlassian products including Jira and Confluence. Search and create i
- forcedotcom/sf-skills [plugin] *1055*  items=1 - Build Salesforce apps and agents using these core building blocks: metadata, Ape
- awslabs/agent-plugins [plugin] *909*  items=10 - Guide developers through adding maps, places search, geocoding, routing, and oth
- superdesigndev/superdesign-skill [plugin,skill] *621*  items=2 - Design or redesign frontend UI and marketing graphics on the Superdesign infinit
- duckdb/duckdb-skills [plugin] *598*  items=2 - DuckDB-powered skills for Claude Code: read any data file, attach and query Duck
- Shopify/Shopify-AI-Toolkit [plugin] *584*  items=2 - Shopify's AI Toolkit provides 18 development skills for building on the Shopify 
- ClickHouse/agent-skills [plugin] *543*  items=2 - 28 best practice rules for ClickHouse schema design, query optimization, and dat
- gitroomhq/postiz-agent [plugin] *501*  items=2 - Social media automation CLI for scheduling posts, managing integrations, uploadi
- makenotion/claude-code-notion-plugin [plugin] *491*  items=2 - Notion workspace integration. Search pages, create and update documents, manage 
- tavily-ai/skills [plugin] *486*  items=2 - Build AI applications with real-time web data using Tavily's search, extract, cr
- TheQtCompanyRnD/agent-skills [plugin] *458*  items=2 - Agentic engineering skills for Qt software development — Qt C++/QML code review,
- astronomer/agents [plugin] *448*  items=6 - Data engineering for Apache Airflow and Astronomer. Author DAGs with best practi

## Top 30 by stars: listed
- DietrichGebert/ponytail [plugin] *153159*  items=2 - Lazy senior dev mode. Forces the simplest, shortest solution that actually works
- JuliusBrussee/caveman [plugin,skill] *109472*  items=2 - Auto-activation works differently per agent: Claude Code uses SessionStart hooks
- thedotmack/claude-mem [plugin,skill] *95489*  items=3 - Persistent memory system for Claude Code - seamlessly preserve context across se
- Egonex-AI/Understand-Anything [plugin,skill] *85175*  items=2 - Understand Anything is a Claude Code plugin that analyzes your project with a mu
- pbakaus/impeccable [plugin] *75142*  items=1 - Great design prompts require design vocabulary. Most people don't have it. You c
- mem0ai/mem0 [plugin] *66532*  items=1 - Connect Mem0 to Claude to give your agent persistent memory across sessions. Cla
- mvanhorn/last30days-skill [plugin] *63446*  items=1 - last-30-days is a Claude Code skill that searches the web and delivers a structu
- coreyhaines31/marketingskills [plugin] *52675*  items=1 - coreyhaines31
- DayuanJiang/next-ai-draw-io [plugin] *36103*  items=1 - AI-powered Draw.io diagram generation with real-time browser preview. Create flo
- jarrodwatts/claude-hud [plugin,collection] *28283*  items=2 - Real-time statusline HUD for Claude Code - context health, tool activity, agent 
- alirezarezvani/claude-skills [plugin,skill] *27463*  items=2 - Playwright Pro turns your AI coding agent into a senior test automation engineer
- promptfoo/promptfoo [plugin] *25677*  items=1 - Teaches AI coding agents to create and maintain promptfoo eval suites. Encodes b
- mksglu/context-mode [plugin] *25218*  items=1 - MCP is the protocol for tool access. We're the virtualization layer for context.
- browser-use/browser-harness [plugin] *18272*  items=1 - Open-source browser agent driven via CDP — direct browser control, 79K stars, YC
- AgriciDaniel/claude-seo [plugin] *18232*  items=1 - Comprehensive SEO analysis plugin for Claude Code. Performs full site audits wit
- Jeffallan/claude-skills [plugin,skill,collection] *11718*  items=3 - 66 specialized skills for full-stack development: 12 language experts (Python, T
- nicobailon/visual-explainer [plugin,collection] *10232*  items=3 - An agent skill that turns complex terminal output into styled HTML pages you act
- revfactory/harness [plugin,agent] *9114*  items=3 - Harness leverages Claude Code's agent team system to decompose complex tasks int
- Eventual-Inc/Daft [plugin] *5790*  items=1 - Skills for working with Daft, a high-performance data engine for AI and multimod
- clidey/whodb [plugin] *5032*  items=1 - Database management tools for Claude Code. Query databases, explore schemas, ana
- nyldn/claude-octopus [plugin] *4140*  items=2 - Multi-LLM orchestration for Claude Code and Cowork. Coordinates 8 AI providers (
- giancarloerra/SocratiCode [plugin,mcp-server] *3332*  items=2 - Enterprise-grade (40m+ lines) codebase intelligence in a zero-setup, private and
- Chachamaru127/claude-code-harness [plugin,agent] *3147*  items=2 - Autonomous Plan → Work → Review cycle for Claude Code. Go-native engine with 25×
- nizos/tdd-guard [plugin,collection] *2353*  items=2 - Enforces Test-Driven Development by intercepting file operations in Claude Code.
- AgriciDaniel/claude-blog [plugin] *2316*  items=1 - AI-powered blog creation and optimization skill with 20 commands, 4 specialized 
- severity1/claude-code-prompt-improver [plugin] *1937*  items=1 - Intelligent prompt optimization using skill-based architecture. Enriches vague p
- AminForou/mcp-gsc [plugin] *1835*  items=1 - Connect Google Search Console to Claude Code. Query rankings, inspect URLs, audi
- codeaholicguy/ai-devkit [plugin] *1639*  items=1 - A structured software development toolkit that helps Claude Code follow senior-e
- activeloopai/hivemind [plugin,skill,collection] *1620*  items=5 - Cloud-backed persistent memory for Claude Code powered by Deeplake. Automaticall
- kenryu42/cc-safety-net [plugin,collection] *1575*  items=3 - Block destructive git and filesystem commands before execution

## Top 30 by stars: verified
- affaan-m/ECC [collection] *272125*  items=1 - Top-notch, well-written resources covering "just about everything" from core eng
- multica-ai/andrej-karpathy-skills [collection] *216694*  items=1 - A drop-in CLAUDE.md distilling four behavioral guidelines for LLM-assisted codin
- garrytan/gstack [agent] *134926*  items=1 - Garry Tan's (Y Combinator) Claude Code setup and "open source software factory" 
- browser-use/browser-use [mcp-server] *117064*  items=1 - Control a real Chrome browser to complete any task: fill forms, extract data, bo
- paperclipai/paperclip [mcp-server] *96691*  items=1 - Trending hip-hop artist momentum scores across four cultural dimensions.
- koala73/worldmonitor [mcp-server] *87716*  items=1 - Live markets, conflicts, country risk, chokepoints, energy, and China decision s
- D4Vinci/Scrapling [mcp-server] *85443*  items=1 - Web scraping with stealth HTTP, real browsers, and Cloudflare bypass. CSS select
- netdata/netdata [mcp-server] *80787*  items=1 - Real-time infrastructure monitoring with metrics, logs, alerts, and ML-based ano
- shareAI-lab/learn-claude-code [collection] *77953*  items=1 - A really interesting analysis of how coding agents like Claude Code are designed
- shanraisshan/claude-code-best-practice [skill] *67035*  items=1 - from vibe coding to agentic engineering - practice makes claude perfect
- upstash/context7 [mcp-server] *62638*  items=1 - Up-to-date code docs for any prompt
- ayghri/i-have-adhd [plugin,skill] *53160*  items=2 - A skill to stop your coding agent from burying the answer. ADHD-friendly output.
- K-Dense-AI/scientific-agent-skills [skill,collection] *47479*  items=2 - "A set of ready-to-use Agent Skills for research, science, engineering, analysis
- sickn33/agentic-awesome-skills [skill] *47221*  items=1 - AAS Core is the local, agent-first control plane for complete catalog discovery,
- DeusData/codebase-memory-mcp [mcp-server] *45738*  items=1 - Codebase knowledge graph for AI agents — 162 languages, sub-ms queries, 99% fewe
- ccxt/ccxt [mcp-server] *44239*  items=1 - Official CCXT MCP server - Market data and trading across 100+ exchanges and pre
- reactive-resume/reactive-resume [mcp-server] *43726*  items=1 - Free open-source resume builder with remote MCP tools for resumes and job applic
- HeyPuter/puter [mcp-server] *43646*  items=1 - Puter MCP enables AI tools to interact with Puter: manage files, websites, worke
- cathrynlavery/diagram-design [collection] *43224*  items=1 - Another welcome contribution to the domain of making Claude Code output look sty
- luongnv89/claude-howto [collection] *41733*  items=1 - A structured, chapter-based getting-started guide for Claude Code with a self-as
- wshobson/agents [plugin,skill] *40174*  items=2 - Multi-harness agentic plugin marketplace for Claude Code, Codex, Cursor, OpenCod
- Yeachan-Heo/oh-my-claudecode [plugin] *39561*  items=1 - Teams-first Multi-agent orchestration for Claude Code
- bytedance/UI-TARS-desktop [mcp-server] *39199*  items=4 - MCP server for browser use access
- microsoft/playwright-mcp [mcp-server] *37786*  items=1 - Playwright Tools for MCP
- VoltAgent/awesome-agent-skills [skill] *35160*  items=1 - A curated collection of 1000+ agent skills from official dev teams and the commu
- github/github-mcp-server [mcp-server] *33345*  items=1 - Connect AI assistants to GitHub - manage repos, issues, PRs, and workflows throu
- feder-cr/invisible_playwright_mcp [plugin,mcp-server] *31769*  items=3 - Playwright MCP server undetected by anti-bots and captchas: AI agent browses the
- nanocoai/nanoclaw [skill] *30872*  items=1 - A lightweight alternative to OpenClaw that runs in containers for security. Conn
- yamadashy/repomix [mcp-server] *28667*  items=1 - Pack local or remote codebases into AI-friendly files that LLMs and coding agent
- OthmanAdi/planning-with-files [skill] *27267*  items=1 - Persistent file-based planning for AI coding agents and long-running tasks. Cras

## Top 30 by stars: watch
- tt-a1i/archify [skill] *76994* ['star-anomaly'] items=1 - Turn any idea, plan, or codebase into a beautiful interactive diagram. An agent 
- thedaviddias/Front-End-Checklist [mcp-server] *74348*  items=1 - Review frontend code and live pages against 386 quality-gated web development ru
- code-yeongyu/oh-my-openagent [skill] *69771*  items=1 - OmO: Just type "mass ulw" keyword with your prompt. Now you are the master of gr
- tldraw/tldraw [mcp-server] *50731*  items=1 - Draw and visually collaborate with your agents on tldraw's canvas.
- metabase/metabase [mcp-server] *49530*  items=1 - Lets AI clients search, explore, query, and visualize data in a Metabase instanc
- PostHog/posthog [mcp-server] *40122*  items=1 - Official PostHog MCP Server for product analytics, feature flags, experiments, a
- oraios/serena [mcp-server] *29963*  items=1 - A powerful toolkit for coding, providing semantic retrieval and editing capabili
- t8y2/dbx [mcp-server] *24341* ['star-anomaly'] items=1 - Query databases from AI agents using connections configured in DBX.
- different-ai/openwork [mcp-server] *23835*  items=1 - Your OpenWork org's skills, plugins, workflows, and connections through one OAut
- screenpipe/screenpipe [mcp-server] *21804*  items=1 - Search your local screen recordings, audio transcripts, and computer activity fr
- travisvn/awesome-claude-skills [skill] *15254*  items=1 - A curated list of awesome Claude Skills, resources, and tools for customizing Cl
- kyegomez/OpenMythos [plugin] *14903*  items=1 - A theoretical reconstruction of the Claude Mythos architecture, built from first
- NevaMind-AI/memU [skill] *14491*  items=1 - Personal memory across agents
- Orchestra-Research/AI-Research-SKILLs [skill] *13220*  items=1 - Comprehensive open-source library of AI research and engineering skills for any 
- elie222/inbox-zero [mcp-server] *12403*  items=1 - Search Gmail and Outlook, save drafts, manage email rules, and view email stats.
- anbeime/skill [skill] *7506*  items=1 - 收录最全、更新最快的技能Skills商店：精选原创技能包（涵盖文档处理、内容创作、编程开发、机器学习、自动化工作流），全部打包好可直接安装使用！同时自动抓取Gi
- modelcontextprotocol/registry [mcp-server] *7312*  items=7 - Check how to contact a business website, and whether that contact path actually 
- deanpeters/Product-Manager-Skills [skill] *7151*  items=1 - Product Management skills framework built on battle-tested methods for Claude Co
- BuilderIO/agent-native [mcp-server] *7044*  items=13 - Agent-Native Amplitude/Mixpanel - connect data sources, prompt for charts
- airweave-ai/airweave [mcp-server] *6559*  items=1 - MCP server for searching Airweave collections with natural language queries.
- Klavis-AI/klavis [mcp-server] *5808*  items=1 - MCP server for progressive tool usage at any scale (see https://klavis.ai)
- KnockOutEZ/wigolo [mcp-server] *5441*  items=1 - Local-first web intelligence MCP server for AI coding agents
- tolgee/tolgee-platform [mcp-server] *4119*  items=1 - Your app's translations in Tolgee: search keys, create translations, trigger mac
- superdesigndev/treg [mcp-server] *4092* ['star-anomaly'] items=1 - OpenRouter for tools and data. Compare catalog providers and call them from one 
- parcadei/Continuous-Claude-v3 [skill,agent] *3939*  items=2 - Context management for Claude Code. Hooks maintain state via ledgers and handoff
- geekjourneyx/md2wechat-skill [skill] *3687*  items=1 - 面向 AI Agent 的微信公众号创作与发布 CLI：Markdown 排版、AI 配图、预览与草稿创建；支持由浏览器 Agent 保存知乎、CSDN、头条未
- zenbu-labs/terminal-browser [plugin,skill] *3618*  items=2 - A browser inside your terminal
- Ryze-AI-Adgent/open-seo-mcp-skills [skill] *3532*  items=1 - Free SEO MCP server + open-source SEO and GEO skills for Claude: keyword researc
- agenticnotetaking/arscontexta [plugin] *3492*  items=1 - Claude Code plugin that generates individualized knowledge systems from conversa
- browserbase/mcp-server-browserbase [mcp-server] *3411*  items=2 - Provides cloud browser automation capabilities using Stagehand and Browserbase, 

## Random sample of 20 watch repos (of 3232)
- OpenWeb-Ninja/openwebninja-mcp [mcp-server] *36*  items=1 - Official MCP server for OpenWeb Ninja APIs - 40+ real-time web data and SERP API reasons=['fails: stars>=200 (36)'] src=['mcp-registry']
- drQedwards/PPM [mcp-server] *15*  items=1 - PMLL Memory MCP — persistent KV context memory and Q-promise deduplication. reasons=['fails: stars>=200 (15)', 'no corroborating signal'] src=['mcp-registry']
- jsdelivr/globalping-mcp-server [mcp-server] *64*  items=1 - Interact with a global network measurement platform.Run network commands from an reasons=['fails: stars>=200 (64)', 'fails: license (None)'] src=['mcp-registry']
- Samik081/mcp-pve [mcp-server] *24*  items=1 - Manage Proxmox VE through AI assistants reasons=['fails: stars>=200 (24)', 'no corroborating signal'] src=['mcp-registry']
- Oortonaut/mcacp [mcp-server] *11*  items=1 - MCP-to-ACP bridge — let any MCP client drive ACP coding agents reasons=['fails: stars>=200 (11)', 'fails: pushed<=90d (245)', 'no corroborating signal'] src=['mcp-registry']
- apology-is-policy/hyades [mcp-server] *30*  items=1 - Render LaTeX math as pure Unicode text art for terminals, code comments, and ema reasons=['fails: stars>=200 (30)', 'fails: pushed<=90d (193)', 'no corroborating signal'] src=['mcp-registry']
- gregario/warhammer-oracle [mcp-server] *10*  items=1 - Warhammer 40K and Kill Team rules, stats, and game flow MCP server reasons=['fails: stars>=200 (10)', 'no corroborating signal'] src=['mcp-registry']
- noureldeensalama/shipcheck [plugin] *0*  items=1 - Find what your AI-built app leaks — before you ship. Secrets, copyleft licenses, reasons=['fails: stars>=200 (0)', 'fails: age>=90d (39)', 'no corroborating signal'] src=['code']
- elliotbonneville/claude-cothought [plugin] *7*  items=1 - An AI-assisted thinking system — journal, zettelkasten, review, project scaffold reasons=['fails: stars>=200 (7)', 'fails: pushed<=90d (225)', 'no corroborating signal'] src=['code']
- aryamthecodebreaker/FixMap [mcp-server] *21*  items=1 - Deterministic local-first context and impact maps for coding agents from tasks,  reasons=['fails: stars>=200 (21)', 'no corroborating signal'] src=['mcp-registry']
- Sushegaad/MCP-Server-for-ISO27001 [mcp-server] *32*  items=1 - ISO 27001 compliance workspace for Claude. Risks, policies, SoA, evidence, and a reasons=['fails: stars>=200 (32)', 'no corroborating signal'] src=['mcp-registry']
- langcare/langcare-mcp-fhir [mcp-server] *67*  items=1 - An MCP FHIR server written in Go for EMR systems like Epic and Cerner reasons=['fails: stars>=200 (67)', 'fails: pushed<=90d (172)'] src=['mcp-registry']
- jmrplens/libgen-mcp [mcp-server] *19*  items=1 - Federated search of books and papers, BibTeX/RIS citations, open-access retrieva reasons=['fails: stars>=200 (19)', 'fails: age>=90d (78)', 'no corroborating signal'] src=['mcp-registry']
- rmyndharis/aimhooman [plugin] *5*  items=1 - aimhooman teaches coding agents Git etiquette—keeping agent memory, internal ins reasons=['fails: stars>=200 (5)', 'fails: age>=90d (81)', 'no corroborating signal'] src=['code']
- MayR-Labs/skills [marketplace] *0*  items=1 - A comprehensive, modular collection of senior-level agent skills for scaffolding reasons=['fails: stars>=200 (0)'] src=['code']
- NVIDIA/elements [mcp-server] *93*  items=1 - NVIDIA Elements UI design system and agent tools for AI/ML, robotics, and autono reasons=['fails: stars>=200 (93)'] src=['mcp-registry']
- ai-stress-testing/Ges-Talt [agent] *0*  items=1 -  reasons=['fails: stars>=200 (0)', 'fails: age>=90d (79)', 'no corroborating signal'] src=['code']
- SrDmitrov/ddhq-ai-marketplace [marketplace] *0*  items=1 - My marketplace (plugins) for AI agents. reasons=['fails: stars>=200 (0)', 'fails: license (None)', 'no corroborating signal'] src=['code']
- baidubce/skills [marketplace] *30*  items=1 - skills published and maintained by baidu cloud engine reasons=['fails: stars>=200 (30)'] src=['code']
- codelipenghui/mcp-mat [mcp-server] *25*  items=1 - Headless Eclipse MAT MCP server for Java heap dump analysis reasons=['fails: stars>=200 (25)', 'fails: pushed<=90d (199)', 'no corroborating signal'] src=['mcp-registry']

## Errors
- marketplace obra/claude-session-driver: no plugins list

## Rate limit
- REST calls this run (uncached): {"core": 4, "search": 19}; last seen: {"core": {"remaining": "4996", "limit": "5000"}, "search": {"remaining": "8", "limit": "10"}}
- GraphQL: 1 calls, cost 1, remaining 4999/5000, stopped early: False
- REST stopped early: False
- repos lacking metadata: 3409; enriched this run: 26491