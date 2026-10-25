# Catalog report 2026-10-25
Mode: **token**; run time 1149s
Repos (deduped): 3087; flat entries before dedup: 22061

## Tier x type BEFORE dedup (flat entries)
- new/mcp-server: 12366
- watch/mcp-server: 2409
- listed/plugin: 2283
- verified/mcp-server: 1176
- watch/skill: 502
- verified/skill: 457
- official/plugin: 376
- watch/marketplace: 358
- verified/plugin: 355
- verified/marketplace: 341
- watch/plugin: 317
- watch/agent: 214
- verified/collection: 197
- new/skill: 161
- anthropic/plugin: 146
- new/plugin: 125
- new/marketplace: 125
- verified/agent: 52
- new/agent: 28
- anthropic/marketplace: 14
- anthropic/collection: 4
- anthropic/agent: 1
- watch/collection: 1

## Tier AFTER dedup (repos)
- verified: 1739
- watch: 468
- new: 302
- official: 256
- listed: 166
- anthropic: 156

## Type AFTER dedup (items)
- mcp-server: 1610
- plugin: 1393
- skill: 755
- marketplace: 480
- collection: 122
- agent: 50

## Primary type AFTER dedup (repos)
- mcp-server: 1019
- plugin: 839
- skill: 691
- marketplace: 413
- collection: 89
- agent: 36

## Repos by discovery source family
- topic: 1260
- mcp-registry: 1144
- anthropic: 475
- code: 189
- anthropic-org: 186
- curated: 148
- marketplace-expansion: 39

## Flags (all tiers)
- product-stars: 218
- star-spike: 14
- star-anomaly: 2

## star-anomaly by tier
- new: 1
- watch: 1

## Metadata gaps
- repos without metadata: 162
- reasons: {'unfetched': 162}

## MCP-only repos excluded: 53
- assafelovic/gpt-researcher *30285* ['ai', 'python', 'agent', 'automation', 'research'] - An autonomous agent that conducts deep research on any data using any LLM provid
- mrexodia/ida-pro-mcp *13133* ['ida-plugin', 'ida-pro', 'mcp', 'mcp-server', 'modelcontextprotocol'] - AI-powered reverse engineering assistant that bridges IDA Pro with language mode
- mcp-use/mcp-use *10811* ['mcp', 'model-context-protocol', 'apps-sdk', 'mcp-apps', 'mcp-inspector'] - The fullstack MCP framework to develop MCP Apps for ChatGPT / Claude & MCP Serve
- Agents365-ai/drawio-skill *10341* ['drawio', 'diagram', 'agent-skills', 'architecture-diagram', 'claude-code'] - Agent skill that turns natural language, code, Terraform/K8s, SQL, OpenAPI, Asyn
- jordan-gibbs/hyperresearch *4070* ['agents', 'agentskills', 'claude-code', 'deep-research', 'deep-research-agent'] - Convert Claude Code or Codex into the most intelligent Deep Research Agent. Coll
- stickerdaniel/linkedin-mcp-server *4009* ['linkedin', 'linkedin-scraper', 'mcp', 'mcp-server', 'linkedin-mcp'] - Open-source MCP server for LinkedIn. Give Claude and any MCP-compatible AI agent
- taylorwilsdon/google_workspace_mcp *3407* ['ai', 'gmail', 'google-calendar', 'google-workspace', 'llm'] - Control Gmail, Google Calendar, Docs, Sheets, Slides, Chat, Forms, Tasks, Search
- kajisho5/ffmpeg-skill *2640* ['audio-processing', 'captions', 'ffmpeg', 'subtitles', 'video'] - Local video editor for coding agents: 42 FFmpeg tools with a machine-readable co
- duty1g/x64dbg-mcp-server *2601* ['ai-agents', 'ai-debugging', 'binary-analysis', 'claude', 'claude-code'] - x64dbg-MCP Server is a native MCP (Model Context Protocol) plugin for x64dbg tha
- alpic-ai/skybridge *2177* ['agent', 'ai', 'apps-sdk', 'chatgpt', 'claude'] - Skybridge is a full-stack TypeScript framework for MCP Apps and ChatGPT Apps. Ty
- study8677/repobrain *1354* ['claude-code', 'codex-cli', 'developer-tools', 'mcp-server', 'windsurf'] - 🧠 RepoBrain (formerly Antigravity) — Give your repo a brain. ChatGPT for your co
- agentrq/agentrq *1167* ['agentic-ai', 'agentic-workflow', 'agents', 'task', 'task-manager'] - AgentRQ: Human-in-loop realtime conversational task manager for AI Agents. Self-
- CodeAbra/iai-personal-memory-engine *913* ['claude', 'claude-code', 'local-first', 'mcp', 'mcp-server'] - A cyber brain for your AI. It never forgets a detail, remembers exactly what you
- vostride/agent-qa *893* ['playwright', 'end-to-end-testing', 'ai-testing', 'ai-agents', 'mcp'] - Open-source self-improving QA agent for software teams. A test harness with memo
- Storybloq/storybloq *781* ['agentic-development', 'ai-development', 'anthropic', 'claude-code', 'claude-skill'] - Project memory and workflows for Claude Code and Codex. Keep stories, plans, han

## Degradation
- registry complete: True (497 pages, 49697 entries)
- MCP servers merged from the previous catalog (not re-fetched): 0
- GraphQL 403s: 0 (secondary rate limit: 0); retries: 3; queries that gave up: 0
- HTTP retries (5xx/network): 0
- repos with stale metadata reused from the previous catalog (meta_stale): 0

## MCP Registry
- {"pages": 497, "fetched": 49697, "kept": 49054, "dropped": 643, "bad": 0, "complete": true, "excluded_remote_only": 15745, "excluded_low_signal": 17358, "fallback_merged": 0, "records": 1144, "attached_existing": 129, "new_repo": 1015, "remote_only": 0, "tiers": {"official": 25, "listed": 19, "verified": 818, "new": 116, "watch": 166}}

## Top 20 by trend_7d
- morluto/rea +68969 (22.19%) []
- cloudflare/security-audit-skill +14287 (46.42%) ['star-spike']
- debpalash/VoiceStudio +11523 (15.63%) ['product-stars']
- DietrichGebert/ponytail +9265 (5.57%) []
- mattpocock/skills +7342 (2.49%) []
- affaan-m/ECC +5543 (1.96%) []
- heygen-com/hyperframes +5482 (8.29%) []
- wheresryan22/anatomy +4918 (32.09%) ['star-spike']
- ifixai-ai/iFixAi +4900 (16.79%) ['product-stars']
- hugohe3/ppt-master +4360 (6.9%) ['product-stars']
- pbakaus/impeccable +4177 (5.07%) []
- tt-a1i/archify +3849 (4.53%) []
- lemomo-ai/lemo-opuscar +3826 (130.76%) ['star-spike']
- cathrynlavery/diagram-design +3635 (6.36%) []
- Leonxlnx/taste-skill +3574 (3.63%) []
- obra/superpowers +3403 (1.13%) []
- paperclipai/paperclip +3291 (3.17%) []
- akitaonrails/ai-memory +3281 (32.66%) ['star-spike', 'product-stars']
- nextlevelbuilder/ui-ux-pro-max-skill +3055 (2.23%) []
- NVIDIA/OpenShell +3035 (18.33%) ['product-stars']

## Code search vs topic search
- repos found by code search: 189
- also in topic search: 10
- code-only: 163; tiers: {'verified': 82, 'watch': 62, 'new': 19}

## Top 30 by stars: anthropic
- anthropics/skills [marketplace,collection] *183555*  items=2 - Anthropic example skills
- anthropics/claude-code [marketplace,agent] *153309*  items=2 - Bundled plugins for Claude Code including Agent SDK development tools, PR review
- anthropics/claude-plugins-official [plugin,marketplace,collection] *44397*  items=3 - Directory of popular Claude Code extensions including development tools, product
- anthropics/financial-services [marketplace] *40761*  items=1 - 
- anthropics/knowledge-work-plugins [marketplace] *32702*  items=1 - 
- anthropics/claude-for-legal [marketplace] *9789*  items=1 - Reference agents, skills, and data connectors for the legal workflows we see mos
- anthropics/claude-code-action [collection] *9638*  items=1 - The official GitHub Action for running Claude Code in CI: mention @claude in iss
- anthropics/claude-code-security-review [collection] *6536*  items=1 - An official AI-powered security-review GitHub Action that uses Claude to analyze
- anthropics/claude-plugins-community [marketplace] *4764*  items=1 - 
- anthropics/commerce-agents [marketplace] *3334*  items=1 - Claude Commerce Agents: the commerce-builder plugin for building shopping and me
- anthropics/life-sciences [marketplace] *625*  items=1 - Skills for life sciences research, data analysis, and discovery
- anthropics/k12-teacher-skills [marketplace] *591*  items=1 - Plugin marketplace for K-12 Education and Claude for Teachers.
- anthropics/healthcare [marketplace] *430*  items=1 - Claude for Healthcare — one plugin bundling payer, provider, pharma, and general
- anthropics/oncall-kit [marketplace] *249*  items=1 - 
- anthropics/claude-for-financial-advisors [plugin,marketplace] *113*  items=2 - Ready-to-run workflows for financial advisors in Claude Cowork, drawing live dat
- anthropics/claude-tag-plugins [marketplace] *67*  items=1 - Plugins that connect Claude Tag to common SaaS services, plus charting and confi
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

## Top 30 by stars: official
- obra/superpowers [plugin,skill] *304703*  items=3 - Superpowers teaches Claude brainstorming, subagent driven development with built
- mattpocock/skills [plugin] *302636*  items=2 - Matt Pocock's agent skills for real engineering — grilling, spec/ticket flows, T
- heygen-com/hyperframes [plugin] *71599*  items=2 - HyperFrames by HeyGen. Write HTML, render video. Compositions, GSAP and runtime 
- ChromeDevTools/chrome-devtools-mcp [plugin,mcp-server] *54099*  items=4 - Control and inspect a live Chrome browser from your coding agent. Record perform
- confident-ai/deepeval [plugin] *19087* ['product-stars'] items=1 - Skills for adding DeepEval evaluations, tracing, datasets, Confident AI reports,
- huggingface/skills [plugin] *11210*  items=2 - Build, train, evaluate, and use open source AI models, datasets, and spaces.
- wonderwhy-er/DesktopCommanderMCP [plugin,mcp-server] *10118*  items=4 - MCP server for terminal commands, process management, and file operations across
- Eigenwise/atomic-agents [plugin,marketplace] *6305* ['product-stars'] items=3 - Comprehensive development workflow for building AI agents with the Atomic Agents
- exa-labs/exa-mcp-server [plugin,mcp-server] *5165*  items=3 - Exa AI web search, deep research, and content extraction. Provides MCP tools and
- NVIDIA/skills [plugin] *3722*  items=2 - Find the right NVIDIA skill for GPU acceleration, CUDA, AI agents, data loading,
- aws/agent-toolkit-for-aws [plugin] *3193*  items=8 - Build, deploy, and operate AI agents on AWS. Skills for scaffolding agents with 
- cloudflare/skills [plugin] *3168*  items=2 - Skills for the Cloudflare developer platform: Workers, Durable Objects, Agents S
- expo/skills [plugin] *3009*  items=2 - Official Expo skills for building, deploying, upgrading, and debugging React Nat
- modelcontextprotocol/ext-apps [plugin] *3007*  items=3 - Skills for creating MCP Apps with the MCP Apps SDK
- GoogleChrome/modern-web-guidance [plugin] *2552*  items=2 - Keep your coding agent up to date with the latest web best practices
- figma/mcp-server-guide [plugin,mcp-server] *2110*  items=4 - Figma design platform integration. Access design files, extract component inform
- stripe/ai [plugin,mcp-server] *1966*  items=3 - Stripe development plugin for Claude
- MicrosoftDocs/mcp [plugin,mcp-server] *1952*  items=3 - Access official Microsoft documentation, API references, and code samples for Az
- EpicGames/unreal-engine-skills-for-claude-code-plugin [plugin] *1647* ['star-spike'] items=2 - Control Unreal Editor directly from Claude Code via MCP. Hundreds of tools expos
- microsoft/azure-skills [plugin] *1591*  items=2 - Transform Claude into an Azure expert. This plugin integrates the Azure MCP serv
- atlassian/atlassian-mcp-server [plugin,mcp-server] *1121*  items=3 - Connect to Atlassian products including Jira and Confluence. Search and create i
- forcedotcom/sf-skills [plugin] *1111*  items=1 - Build Salesforce apps and agents using these core building blocks: metadata, Ape
- awslabs/agent-plugins [plugin] *927*  items=10 - Guide developers through adding maps, places search, geocoding, routing, and oth
- superdesigndev/superdesign-skill [plugin,skill] *902*  items=2 - Design or redesign frontend UI and marketing graphics on the Superdesign infinit
- Shopify/Shopify-AI-Toolkit [plugin] *613*  items=2 - Shopify's AI Toolkit provides 18 development skills for building on the Shopify 
- duckdb/duckdb-skills [plugin] *610*  items=2 - DuckDB-powered skills for Claude Code: read any data file, attach and query Duck
- ClickHouse/agent-skills [plugin] *560*  items=2 - 28 best practice rules for ClickHouse schema design, query optimization, and dat
- Unity-Technologies/unity-agent-plugin [plugin] *558*  items=2 - Unity's official plugin for Claude Code, with curated skills for game developmen
- gitroomhq/postiz-agent [plugin] *543*  items=3 - Social media automation CLI for scheduling posts, managing integrations, uploadi
- TheQtCompanyRnD/agent-skills [plugin] *503*  items=3 - Agentic engineering skills for Qt software development — Qt C++/QML code review,

## Top 30 by stars: listed
- DietrichGebert/ponytail [plugin] *175639*  items=2 - Lazy senior dev mode. Forces the simplest, shortest solution that actually works
- JuliusBrussee/caveman [plugin,skill] *114855*  items=2 - Auto-activation works differently per agent: Claude Code uses SessionStart hooks
- thedotmack/claude-mem [plugin,skill] *102877*  items=3 - Persistent memory system for Claude Code - seamlessly preserve context across se
- Egonex-AI/Understand-Anything [plugin,skill] *88108*  items=2 - Understand Anything is a Claude Code plugin that analyzes your project with a mu
- pbakaus/impeccable [plugin] *86602*  items=1 - Great design prompts require design vocabulary. Most people don't have it. You c
- mem0ai/mem0 [plugin] *67759* ['product-stars'] items=1 - Connect Mem0 to Claude to give your agent persistent memory across sessions. Cla
- mvanhorn/last30days-skill [plugin] *65346*  items=1 - last-30-days is a Claude Code skill that searches the web and delivers a structu
- coreyhaines31/marketingskills [plugin,skill] *56400*  items=3 - coreyhaines31
- DayuanJiang/next-ai-draw-io [plugin,mcp-server] *36403*  items=2 - AI-powered Draw.io diagram generation with real-time browser preview. Create flo
- mksglu/context-mode [plugin] *32148*  items=1 - MCP is the protocol for tool access. We're the virtualization layer for context.
- jarrodwatts/claude-hud [plugin,collection] *28852*  items=2 - Real-time statusline HUD for Claude Code - context health, tool activity, agent 
- alirezarezvani/claude-skills [plugin,skill] *28666*  items=2 - Playwright Pro turns your AI coding agent into a senior test automation engineer
- promptfoo/promptfoo [plugin] *26394*  items=1 - Teaches AI coding agents to create and maintain promptfoo eval suites. Encodes b
- AgriciDaniel/claude-seo [plugin] *20117*  items=1 - Comprehensive SEO analysis plugin for Claude Code. Performs full site audits wit
- browser-use/browser-harness [plugin] *18599*  items=1 - Open-source browser agent driven via CDP — direct browser control, 79K stars, YC
- Jeffallan/claude-skills [plugin,skill,collection] *12043*  items=3 - 66 specialized skills for full-stack development: 12 language experts (Python, T
- nicobailon/visual-explainer [plugin,collection] *10619*  items=3 - An agent skill that turns complex terminal output into styled HTML pages you act
- revfactory/harness [plugin,agent] *9250*  items=3 - Harness leverages Claude Code's agent team system to decompose complex tasks int
- Eventual-Inc/Daft [plugin] *5811* ['product-stars'] items=1 - Skills for working with Daft, a high-performance data engine for AI and multimod
- clidey/whodb [plugin] *5041* ['product-stars'] items=1 - Database management tools for Claude Code. Query databases, explore schemas, ana
- nyldn/claude-octopus [plugin] *4300*  items=2 - Multi-LLM orchestration for Claude Code and Cowork. Coordinates 8 AI providers (
- giancarloerra/SocratiCode [plugin,mcp-server] *3354*  items=2 - Enterprise-grade (40m+ lines) codebase intelligence in a zero-setup, private and
- Chachamaru127/claude-code-harness [plugin,agent] *3183*  items=2 - Autonomous Plan → Work → Review cycle for Claude Code. Go-native engine with 25×
- AgriciDaniel/claude-blog [plugin] *2517*  items=1 - AI-powered blog creation and optimization skill with 20 commands, 4 specialized 
- nizos/tdd-guard [plugin,collection] *2367*  items=2 - Enforces Test-Driven Development by intercepting file operations in Claude Code.
- AminForou/mcp-gsc [plugin] *2023*  items=1 - Connect Google Search Console to Claude Code. Query rankings, inspect URLs, audi
- severity1/claude-code-prompt-improver [plugin] *1963*  items=1 - Intelligent prompt optimization using skill-based architecture. Enriches vague p
- kenryu42/cc-safety-net [plugin,collection] *1778*  items=3 - Block destructive git and filesystem commands before execution
- codeaholicguy/ai-devkit [plugin] *1652*  items=1 - A structured software development toolkit that helps Claude Code follow senior-e
- activeloopai/hivemind [plugin,skill,collection] *1635*  items=5 - Cloud-backed persistent memory for Claude Code powered by Deeplake. Automaticall

## Top 30 by stars: verified
- morluto/rea [mcp-server] *379735*  items=1 - Reverse engineer anything from your terminal or agent with one CLI and MCP serve
- affaan-m/ECC [collection] *288230*  items=1 - Top-notch, well-written resources covering "just about everything" from core eng
- firecrawl/firecrawl [skill] *195071* ['product-stars'] items=1 - Supercharge your AI agents with data from the web and beyond. Building the libra
- vercel/next.js [marketplace] *143225* ['product-stars'] items=1 - The React Framework
- nextlevelbuilder/ui-ux-pro-max-skill [marketplace] *140002*  items=1 - An AI skill that provides design intelligence for building professional UI/UX ac
- garrytan/gstack [agent] *137570*  items=1 - Garry Tan's (Y Combinator) Claude Code setup and "open source software factory" 
- browser-use/browser-use [mcp-server] *119073*  items=1 - Browser agents and stealth cloud browsers for AI: run web tasks, fill forms, ext
- addyosmani/agent-skills [marketplace] *110260*  items=1 - Production-grade engineering skills for AI coding agents.
- paperclipai/paperclip [skill,mcp-server] *107036*  items=2 - The open-source app everyone uses to manage agents at work
- nexu-io/open-design [marketplace] *103804*  items=1 - The 1st Collaborative AI Design Agent Workspace. Local-first and open source. Cr
- Leonxlnx/taste-skill [marketplace] *102095*  items=1 - Agent skills that give coding agents taste: art direction, reference images and 
- ruvnet/RuView [marketplace] *99475*  items=1 - π RuView turns commodity WiFi signals into real-time spatial intelligence, vital
- storybookjs/storybook [marketplace] *91368* ['product-stars'] items=1 - Storybook is the industry standard workshop for building, documenting, and testi
- D4Vinci/Scrapling [mcp-server] *89538*  items=1 - Web scraping with stealth HTTP, real browsers, and Cloudflare bypass. CSS select
- koala73/worldmonitor [skill,mcp-server] *89452* ['product-stars'] items=2 - Real-time global intelligence dashboard. AI-powered news aggregation, geopolitic
- tt-a1i/archify [skill,collection] *88839*  items=2 - An Agent Skill for Claude Code that generates interactive architecture, workflow
- debpalash/VoiceStudio [skill] *85254* ['product-stars'] items=1 - VoiceStudio is the open-source, fully-local ElevenLabs alternative — voice cloni
- bytedance/deer-flow [skill] *84392*  items=1 - An open-source long-horizon SuperAgent harness that researches, codes, and creat
- netdata/netdata [mcp-server] *81121*  items=1 - Real-time infrastructure monitoring with metrics, logs, alerts, and ML-based ano
- shareAI-lab/learn-claude-code [collection] *79179*  items=1 - A really interesting analysis of how coding agents like Claude Code are designed
- ruvnet/ruflo [marketplace,mcp-server] *79093*  items=2 - 🌊 The original agent harness. Deploy intelligent multi-player swarms, coordinate
- ComposioHQ/awesome-claude-skills [skill] *77859*  items=1 - A curated list of awesome Claude Skills, resources, and tools for customizing Cl
- headroomlabs-ai/headroom [marketplace] *77748*  items=1 - Compress tool outputs, logs, files, and RAG chunks before they reach the LLM. 20
- career-ops-hq/career-ops [marketplace] *77062*  items=1 - Open-source AI job search agent and job finder: scan job boards, score each job 
- thedaviddias/Front-End-Checklist [marketplace,mcp-server] *74563* ['product-stars'] items=2 - 🗂 The essential checklist for modern web development, for humans and AI agents
- rohitg00/ai-engineering-from-scratch [skill] *73385* ['product-stars'] items=1 - Learn AI Engineering! Learn it. Build it. Ship it for others.
- tw93/Mole [marketplace] *72763* ['product-stars'] items=1 - 🐹 Keep your Mac and PC clean, light, and running like new. Fast open-source CLI,
- usestrix/strix [skill] *71709* ['product-stars'] items=1 - Open-source AI penetration testing tool to find and fix your app’s vulnerabiliti
- calesthio/OpenMontage [skill] *71660*  items=1 - World's first open-source, agentic video production system. 12 production pipeli
- shanraisshan/claude-code-best-practice [skill] *67984*  items=1 - from vibe coding to agentic engineering - practice makes claude perfect

## Top 30 by stars: watch
- f/prompts.chat [marketplace] *174425* ['product-stars'] items=1 - f.k.a. Awesome ChatGPT Prompts. Share, discover, and collect prompts from the co
- opendatalab/MinerU [skill] *82429* ['product-stars'] items=1 - Transforms complex documents like PDFs and Office docs into LLM-ready markdown/J
- code-yeongyu/oh-my-openagent [skill] *70318* ['product-stars'] items=1 - OmO: Just type "mass ulw" keyword with your prompt. Now you are the master of gr
- bmad-code-org/BMAD-METHOD [skill] *54523* ['product-stars'] items=1 - Breakthrough Method for Agile Ai Driven Development
- Imbad0202/academic-research-skills [marketplace] *53763*  items=1 - Academic Research Skills for Claude Code: research → write → review → revise → f
- tldraw/tldraw [mcp-server] *51074*  items=1 - Draw and visually collaborate with your agents on tldraw's canvas.
- metabase/metabase [mcp-server] *49834*  items=1 - Lets AI clients search, explore, query, and visualize data in a Metabase instanc
- abhigyanpatwari/GitNexus [marketplace] *48025* ['product-stars'] items=1 - GitNexus: The Zero-Server Code Intelligence Engine
- PostHog/posthog [mcp-server] *40420*  items=1 - Official PostHog MCP Server for product analytics, feature flags, experiments, a
- openai/codex-plugin-cc [marketplace] *34541*  items=1 - Use Codex from Claude Code to review code or delegate tasks.
- zarazhangrui/frontend-slides [marketplace] *31228*  items=1 - Create beautiful slides on the web using a coding agent's frontend skills
- oraios/serena [mcp-server] *30688*  items=1 - A powerful toolkit for coding, providing semantic retrieval and editing capabili
- openai/skills [skill] *28289*  items=1 - Skills Catalog for Codex
- eyaltoledano/claude-task-master [marketplace] *28273*  items=1 - An AI-powered task-management system you can drop into Cursor, Lovable, Windsurf
- vercel/ai [skill] *27501* ['product-stars'] items=1 - The AI Toolkit for TypeScript. From the creators of Next.js, the AI SDK is a fre
- clockworklabs/SpacetimeDB [marketplace] *25379* ['product-stars'] items=1 - Development at the speed of light
- different-ai/openwork [mcp-server] *24249*  items=1 - Your OpenWork org's skills, plugins, workflows, and connections through one OAut
- HKUDS/AI-Trader [skill] *22947* ['product-stars'] items=1 - "AI-Trader: 100% Fully-Automated Agent-Native Trading"
- screenpipe/screenpipe [mcp-server] *22061*  items=1 - Search your local screen recordings, audio transcripts, and computer activity fr
- getpaseo/paseo [skill] *21909*  items=1 - Orchestrate multiple coding agents from desktop and mobile
- agent0ai/agent-zero [skill] *19561* ['product-stars'] items=1 - Agent Zero AI framework
- longbridge/gpui-kit [skill] *18596* ['product-stars'] items=1 - Rust GUI components for building fantastic cross-platform desktop application by
- Canner/WrenAI [skill] *17964* ['product-stars'] items=1 - GenBI (Generative BI) for AI agents, an open-source, governed text-to-SQL throug
- architecture-decision-record/architecture-decision-record [skill] *17299* ['product-stars'] items=1 - Architecture decision record (ADR) examples for software planning, IT leadership
- composio-community/awesome-codex-skills [skill] *17035*  items=1 - A curated list of practical Codex skills for automating workflows across the Cod
- travisvn/awesome-claude-skills [skill] *15546*  items=1 - A curated list of awesome Claude Skills, resources, and tools for customizing Cl
- superset-sh/superset [marketplace] *15530* ['product-stars'] items=1 - Superset is an agentic IDE to orchestrate 100+ coding agents in parallel. Run an
- xerj-org/xerj [mcp-server] *15363* ['star-anomaly'] items=1 - The search engine for AI agents: cited answers from your local code, docs, specs
- millionco/react-doctor [skill] *15047* ['product-stars'] items=1 - Your agent writes bad React. This catches it
- kyegomez/OpenMythos [plugin] *14911*  items=1 - A theoretical reconstruction of the Claude Mythos architecture, built from first

## Random sample of 20 watch repos (of 468)
- getpaseo/paseo [skill] *21909*  items=1 - Orchestrate multiple coding agents from desktop and mobile reasons=['fails: license (NOASSERTION)'] src=['topic']
- sethblack/black-seo-analyzer [mcp-server] *60*  items=1 - Audit a page or crawl a whole site for technical SEO issues, locally. Compares c reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- Canner/WrenAI [skill] *17964* ['product-stars'] items=1 - GenBI (Generative BI) for AI agents, an open-source, governed text-to-SQL throug reasons=['fails: license (NOASSERTION)'] src=['topic']
- rasinmuhammed/misata [mcp-server] *70*  items=1 - Local, offline: multi-table synthetic data with joins that hold and exact totals reasons=['no corroborating signal'] src=['mcp-registry']
- tight-studio/OpenBrand [mcp-server] *801*  items=1 - Extract brand assets (logos, colors, backdrop images, brand name) from any websi reasons=['fails: pushed<=90d (166)'] src=['mcp-registry']
- matlab/agent-skills-playground [skill] *190*  items=1 - A sandbox for prototyping and demonstrating Agent Skills for MATLAB and Simulink reasons=['fails: license (NOASSERTION)'] src=['topic']
- UnitOneAI/SecuritySkills [skill] *94*  items=1 - Open-source security skills for AI coding agents. Grounded in OWASP, NIST, MITRE reasons=['fails: pushed<=90d (128)'] src=['topic']
- ralforion/orionbelt-semantic-layer [mcp-server] *101*  items=1 - API-first semantic layer MCP server compiling YAML models into dialect-specific  reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- op7418/guizang-social-card-skill [skill] *7718*  items=1 - 🪧 Claude Code / Codex skill — generate Xiaohongshu carousels & WeChat 21:9+1:1 c reasons=['fails: pushed<=90d (115)'] src=['topic']
- 0xnyn/canary [plugin] *493*  items=1 - QA harness built for Claude Code | E2E testing with screen recordings, console l reasons=['fails: license (NOASSERTION)'] src=['code']
- komal-SkyNET/claude-skill-homeassistant [plugin] *976*  items=1 - Claude Code skill to supercharge and manage all Home Assistant workflows reasons=['fails: pushed<=90d (112)'] src=['code']
- kunwar-shah/claudex [mcp-server] *97*  items=1 - Persistent memory + FTS5 search MCP server for Claude Code conversation history. reasons=['fails: pushed<=90d (126)'] src=['mcp-registry']
- longranger2/claude-gpt-workflow [skill] *81*  items=1 - Claude Code skills for Claude + GPT collaborative workflows. Adversarial plan re reasons=['fails: pushed<=90d (122)'] src=['topic']
- e0ipso/strikethroo [plugin] *58*  items=1 - Task management for AI coding assistants reasons=['no corroborating signal'] src=['topic']
- hustcc/mcp-mermaid [mcp-server] *646*  items=1 - Generate dynamic Mermaid diagrams and charts with AI assistance. Customize style reasons=['fails: pushed<=90d (162)'] src=['mcp-registry']
- zLanqing/codex-claude-academic-skills [skill] *5268*  items=1 - 本仓库包含三个面向学术科研人员的Skills，覆盖从文献阅读、论文写作到科学计算的完整研究工作流。office-academic-skill 负责论文阅读报告与 reasons=['fails: pushed<=90d (163)'] src=['topic']
- jgravelle/jdocmunch-mcp [mcp-server] *207*  items=1 - Section-level doc search for .md, .rst, .adoc, .ipynb, .html, .yaml, .json, and  reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- Pratiyush/llm-wiki [plugin] *399*  items=1 - LLM-powered knowledge base from your Claude Code, Codex CLI, Copilot, Cursor & G reasons=['fails: pushed<=90d (128)'] src=['code']
- geekjourneyx/claude-design-card [skill] *470*  items=1 - Claude Code skill for generating design cards in 14 formats — platform covers, s reasons=['fails: pushed<=90d (150)', 'fails: license (None)'] src=['topic']
- VKirill/claude-lane-stack [marketplace] *124*  items=1 - Multi-agent AI coding factory for one person — Claude Code PM + Codex/Qwen/Grok/ reasons=['no corroborating signal'] src=['topic']

## Errors
- none

## Rate limit
- REST calls this run (uncached): {"core": 80, "search": 42}; last seen: {"core": {"remaining": "4920", "limit": "5000"}, "search": {"remaining": "7", "limit": "30"}}
- GraphQL: 129 calls, cost 62, remaining 4883/5000, stopped early: False
- REST stopped early: False
- repos lacking metadata: 4204; enriched this run: 31386