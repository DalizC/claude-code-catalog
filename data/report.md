# Catalog report 2026-11-03
Mode: **token**; run time 1511s
Repos (deduped): 3200; flat entries before dedup: 24305

## Tier x type BEFORE dedup (flat entries)
- new/mcp-server: 14539
- watch/mcp-server: 2311
- listed/plugin: 2283
- verified/mcp-server: 1245
- watch/skill: 492
- verified/skill: 473
- watch/marketplace: 391
- official/plugin: 376
- verified/plugin: 357
- verified/marketplace: 355
- watch/plugin: 304
- watch/agent: 214
- verified/collection: 196
- new/skill: 165
- new/plugin: 152
- new/marketplace: 149
- anthropic/plugin: 147
- verified/agent: 51
- new/agent: 33
- anthropic/marketplace: 15
- anthropic/collection: 4
- watch/collection: 2
- anthropic/agent: 1

## Tier AFTER dedup (repos)
- verified: 1826
- watch: 478
- new: 328
- official: 256
- listed: 167
- anthropic: 145

## Type AFTER dedup (items)
- mcp-server: 1671
- plugin: 1420
- skill: 773
- marketplace: 501
- collection: 123
- agent: 51

## Primary type AFTER dedup (repos)
- mcp-server: 1090
- plugin: 846
- skill: 705
- marketplace: 431
- collection: 90
- agent: 38

## Repos by discovery source family
- topic: 1288
- mcp-registry: 1231
- anthropic: 463
- code: 223
- anthropic-org: 188
- curated: 149
- marketplace-expansion: 40

## Flags (all tiers)
- product-stars: 225
- star-spike: 14
- star-anomaly: 2

## star-anomaly by tier
- new: 2

## Metadata gaps
- repos without metadata: 151
- reasons: {'unfetched': 151}

## MCP-only repos excluded: 50
- assafelovic/gpt-researcher *30444* ['ai', 'python', 'agent', 'automation', 'research'] - An autonomous agent that conducts deep research on any data using any LLM provid
- mrexodia/ida-pro-mcp *13309* ['ida-plugin', 'ida-pro', 'mcp', 'mcp-server', 'modelcontextprotocol'] - AI-powered reverse engineering assistant that bridges IDA Pro with language mode
- mcp-use/mcp-use *10842* ['mcp', 'model-context-protocol', 'apps-sdk', 'mcp-apps', 'mcp-inspector'] - The fullstack MCP framework to develop MCP Apps for ChatGPT / Claude & MCP Serve
- Agents365-ai/drawio-skill *10533* ['drawio', 'diagram', 'agent-skills', 'architecture-diagram', 'claude-code'] - Agent skill that turns natural language, code, Terraform/K8s, SQL, OpenAPI, Asyn
- kajisho5/ffmpeg-skill *4394* ['audio-processing', 'captions', 'ffmpeg', 'subtitles', 'video'] - Local video editor for coding agents: 42 FFmpeg tools with a machine-readable co
- jordan-gibbs/hyperresearch *4349* ['agents', 'agentskills', 'claude-code', 'deep-research', 'deep-research-agent'] - Convert Claude Code or Codex into the most intelligent Deep Research Agent. Coll
- stickerdaniel/linkedin-mcp-server *4095* ['linkedin', 'linkedin-scraper', 'mcp', 'mcp-server', 'linkedin-mcp'] - Open-source MCP server for LinkedIn. Give Claude and any MCP-compatible AI agent
- taylorwilsdon/google_workspace_mcp *3466* ['ai', 'gmail', 'google-calendar', 'google-workspace', 'llm'] - Control Gmail, Google Calendar, Docs, Sheets, Slides, Chat, Forms, Tasks, Search
- duty1g/x64dbg-mcp-server *2754* ['ai-agents', 'ai-debugging', 'binary-analysis', 'claude', 'claude-code'] - x64dbg-MCP Server is a native MCP (Model Context Protocol) plugin for x64dbg tha
- alpic-ai/skybridge *2183* ['agent', 'ai', 'apps-sdk', 'chatgpt', 'claude'] - Skybridge is a full-stack TypeScript framework for MCP Apps and ChatGPT Apps. Ty
- study8677/repobrain *1356* ['claude-code', 'codex-cli', 'developer-tools', 'mcp-server', 'windsurf'] - 🧠 RepoBrain (formerly Antigravity) — Give your repo a brain. ChatGPT for your co
- CodeAbra/iai-personal-memory-engine *918* ['claude', 'claude-code', 'local-first', 'mcp', 'mcp-server'] - A cyber brain for your AI. It never forgets a detail, remembers exactly what you
- hetpatel-11/Adobe_Premiere_Pro_MCP *807* ['adobe', 'adobe-premiere-pro', 'adobe-mcp', 'adobe-premiere-pro-mcp', 'ai-video-editing'] - Adobe Premiere Pro MCP. Tools for AI-driven video editing via MCP, for Codex, Cl
- Storybloq/storybloq *788* ['agentic-development', 'ai-development', 'anthropic', 'claude-code', 'claude-skill'] - Project memory and workflows for Claude Code and Codex. Keep stories, plans, han
- agentic-box/memora *746* ['ai-agent', 'claude', 'knowledge-graph', 'llms', 'mcp'] - Give your AI agents persistent, collective memory — with deduplicating absorb, s

## Degradation
- registry complete: True (556 pages, 55586 entries)
- MCP servers merged from the previous catalog (not re-fetched): 0
- GraphQL 403s: 0 (secondary rate limit: 0); retries: 11; queries that gave up: 1
- HTTP retries (5xx/network): 0
- repos with stale metadata reused from the previous catalog (meta_stale): 0

## MCP Registry
- {"pages": 556, "fetched": 55586, "kept": 54730, "dropped": 856, "bad": 0, "complete": true, "excluded_remote_only": 18580, "excluded_low_signal": 18055, "fallback_merged": 0, "records": 1231, "attached_existing": 145, "new_repo": 1086, "remote_only": 0, "tiers": {"official": 25, "listed": 20, "verified": 884, "new": 122, "watch": 180}}

## Top 20 by trend_7d
- morluto/rea +30805 (7.84%) []
- pbakaus/impeccable +11229 (12.55%) []
- HKUDS/DeepTutor +10150 (22.94%) ['product-stars']
- debpalash/VoiceStudio +9544 (10.64%) ['product-stars']
- Nutlope/hallmark +9214 (24.92%) []
- google/elephant-goldfish-model +8867 (470.9%) ['star-spike']
- cloudflare/security-audit-skill +8733 (17.88%) []
- ifixai-ai/iFixAi +7818 (22.21%) ['product-stars']
- thedotmack/claude-mem +7490 (7.24%) []
- mattpocock/skills +6210 (2.04%) []
- affaan-m/ECC +5785 (1.99%) []
- Leonxlnx/taste-skill +5779 (5.6%) []
- DietrichGebert/ponytail +5659 (3.19%) []
- obra/superpowers +5629 (1.84%) []
- heygen-com/hyperframes +4568 (6.23%) []
- vectorize-io/hindsight +3929 (7.25%) ['product-stars']
- AgriciDaniel/claude-seo +3779 (16.97%) []
- hugohe3/ppt-master +3610 (5.22%) ['product-stars']
- nextlevelbuilder/ui-ux-pro-max-skill +3343 (2.37%) []
- D4Vinci/Scrapling +3338 (3.71%) []

## Code search vs topic search
- repos found by code search: 223
- also in topic search: 19
- code-only: 188; tiers: {'anthropic': 1, 'verified': 98, 'watch': 60, 'new': 29}

## Top 30 by stars: anthropic
- anthropics/skills [marketplace,collection] *186846*  items=2 - Anthropic example skills
- anthropics/claude-code [marketplace,agent] *154328*  items=2 - Anthropic's Claude Code plugins, installed from the claude-plugins-official repo
- anthropics/claude-plugins-official [plugin,marketplace,collection] *45878*  items=15 - Directory of popular Claude Code extensions including development tools, product
- anthropics/financial-services [marketplace] *41001*  items=1 - 
- anthropics/knowledge-work-plugins [marketplace] *34507*  items=1 - 
- anthropics/claude-for-legal [marketplace] *9875*  items=1 - Reference agents, skills, and data connectors for the legal workflows we see mos
- anthropics/claude-code-action [collection] *9767*  items=1 - The official GitHub Action for running Claude Code in CI: mention @claude in iss
- anthropics/claude-code-security-review [collection] *6691*  items=1 - An official AI-powered security-review GitHub Action that uses Claude to analyze
- anthropics/claude-plugins-community [marketplace] *4815*  items=1 - 
- anthropics/commerce-agents [marketplace] *3399*  items=1 - Claude Commerce Agents: the commerce-builder plugin for building shopping and me
- anthropics/life-sciences [marketplace] *639*  items=1 - Skills for life sciences research, data analysis, and discovery
- anthropics/k12-teacher-skills [marketplace] *610*  items=1 - Plugin marketplace for K-12 Education and Claude for Teachers.
- anthropics/healthcare [marketplace] *435*  items=1 - Claude for Healthcare — one plugin bundling payer, provider, pharma, and general
- anthropics/oncall-kit [marketplace] *256*  items=1 - 
- anthropics/claude-for-financial-advisors [plugin,marketplace] *135*  items=2 - Ready-to-run workflows for financial advisors in Claude Cowork, drawing live dat
- anthropics/claude-tag-plugins [marketplace] *76*  items=1 - Plugins that connect Claude Tag to common SaaS services, plus charting and confi
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
- obra/superpowers [plugin,skill] *311349*  items=3 - Superpowers teaches Claude brainstorming, subagent driven development with built
- mattpocock/skills [plugin] *310447*  items=2 - Matt Pocock's agent skills for real engineering — grilling, spec/ticket flows, T
- heygen-com/hyperframes [plugin] *77855*  items=2 - HyperFrames by HeyGen. Write HTML, render video. Compositions, GSAP and runtime 
- ChromeDevTools/chrome-devtools-mcp [plugin,mcp-server] *54689*  items=4 - Control and inspect a live Chrome browser from your coding agent. Record perform
- confident-ai/deepeval [plugin] *19263* ['product-stars'] items=1 - Skills for adding DeepEval evaluations, tracing, datasets, Confident AI reports,
- huggingface/skills [plugin] *11260*  items=2 - Build, train, evaluate, and use open source AI models, datasets, and spaces.
- wonderwhy-er/DesktopCommanderMCP [plugin,mcp-server] *10201*  items=4 - MCP server for terminal commands, process management, and file operations across
- Eigenwise/atomic-agents [plugin,marketplace] *6314* ['product-stars'] items=3 - Comprehensive development workflow for building AI agents with the Atomic Agents
- exa-labs/exa-mcp-server [plugin,mcp-server] *5209*  items=3 - Exa AI web search, deep research, and content extraction. Provides MCP tools and
- expo/skills [plugin] *4031* ['star-spike'] items=2 - Official Expo skills for building, deploying, upgrading, and debugging React Nat
- NVIDIA/skills [plugin] *3835*  items=2 - Find the right NVIDIA skill for GPU acceleration, CUDA, AI agents, data loading,
- aws/agent-toolkit-for-aws [plugin] *3382*  items=8 - Build, deploy, and operate AI agents on AWS. Skills for scaffolding agents with 
- cloudflare/skills [plugin] *3259*  items=2 - Skills for the Cloudflare developer platform: Workers, Durable Objects, Agents S
- modelcontextprotocol/ext-apps [plugin] *3042*  items=3 - Skills for creating MCP Apps with the MCP Apps SDK
- GoogleChrome/modern-web-guidance [plugin] *2606*  items=2 - Keep your coding agent up to date with the latest web best practices
- figma/mcp-server-guide [plugin,mcp-server] *2145*  items=4 - Figma design platform integration. Access design files, extract component inform
- stripe/ai [plugin,mcp-server] *2032*  items=3 - Stripe development plugin for Claude
- MicrosoftDocs/mcp [plugin,mcp-server] *1969*  items=3 - Access official Microsoft documentation, API references, and code samples for Az
- EpicGames/unreal-engine-skills-for-claude-code-plugin [plugin] *1875*  items=2 - Control Unreal Editor directly from Claude Code via MCP. Hundreds of tools expos
- microsoft/azure-skills [plugin] *1613*  items=2 - Transform Claude into an Azure expert. This plugin integrates the Azure MCP serv
- atlassian/atlassian-mcp-server [plugin,mcp-server] *1141*  items=3 - Connect to Atlassian products including Jira and Confluence. Search and create i
- forcedotcom/sf-skills [plugin,skill] *1140*  items=2 - Build Salesforce apps and agents using these core building blocks: metadata, Ape
- superdesigndev/superdesign-skill [plugin,skill] *937*  items=2 - Design or redesign frontend UI and marketing graphics on the Superdesign infinit
- awslabs/agent-plugins [plugin] *933*  items=10 - Guide developers through adding maps, places search, geocoding, routing, and oth
- Shopify/Shopify-AI-Toolkit [plugin] *627*  items=2 - Shopify's AI Toolkit provides 18 development skills for building on the Shopify 
- duckdb/duckdb-skills [plugin] *614*  items=2 - DuckDB-powered skills for Claude Code: read any data file, attach and query Duck
- Unity-Technologies/unity-agent-plugin [plugin] *603*  items=2 - Unity's official plugin for Claude Code, with curated skills for game developmen
- ClickHouse/agent-skills [plugin] *564*  items=2 - 28 best practice rules for ClickHouse schema design, query optimization, and dat
- gitroomhq/postiz-agent [plugin] *563*  items=3 - Social media automation CLI for scheduling posts, managing integrations, uploadi
- TheQtCompanyRnD/agent-skills [plugin] *522*  items=3 - Agentic engineering skills for Qt software development — Qt C++/QML code review,

## Top 30 by stars: listed
- DietrichGebert/ponytail [plugin] *183036*  items=2 - Lazy senior dev mode. Forces the simplest, shortest solution that actually works
- JuliusBrussee/caveman [plugin,skill] *116989*  items=2 - Auto-activation works differently per agent: Claude Code uses SessionStart hooks
- thedotmack/claude-mem [plugin,skill] *110986*  items=3 - Persistent memory system for Claude Code - seamlessly preserve context across se
- pbakaus/impeccable [plugin] *100693*  items=1 - Great design prompts require design vocabulary. Most people don't have it. You c
- Egonex-AI/Understand-Anything [plugin,skill] *90015*  items=2 - Understand Anything is a Claude Code plugin that analyzes your project with a mu
- mem0ai/mem0 [plugin] *68304* ['product-stars'] items=1 - Connect Mem0 to Claude to give your agent persistent memory across sessions. Cla
- mvanhorn/last30days-skill [plugin] *66390*  items=1 - last-30-days is a Claude Code skill that searches the web and delivers a structu
- coreyhaines31/marketingskills [plugin,skill] *58145*  items=3 - coreyhaines31
- DayuanJiang/next-ai-draw-io [plugin,mcp-server] *36609*  items=2 - AI-powered Draw.io diagram generation with real-time browser preview. Create flo
- mksglu/context-mode [plugin] *33308*  items=1 - MCP is the protocol for tool access. We're the virtualization layer for context.
- alirezarezvani/claude-skills [plugin,skill] *29186*  items=2 - Playwright Pro turns your AI coding agent into a senior test automation engineer
- jarrodwatts/claude-hud [plugin,collection] *29085*  items=2 - Real-time statusline HUD for Claude Code - context health, tool activity, agent 
- promptfoo/promptfoo [plugin] *26765*  items=1 - Teaches AI coding agents to create and maintain promptfoo eval suites. Encodes b
- AgriciDaniel/claude-seo [plugin] *26054*  items=1 - Comprehensive SEO analysis plugin for Claude Code. Performs full site audits wit
- browser-use/browser-harness [plugin] *18827*  items=1 - Open-source browser agent driven via CDP — direct browser control, 79K stars, YC
- Jeffallan/claude-skills [plugin,skill,collection] *12192*  items=3 - 66 specialized skills for full-stack development: 12 language experts (Python, T
- nicobailon/visual-explainer [plugin,collection] *10754*  items=3 - An agent skill that turns complex terminal output into styled HTML pages you act
- revfactory/harness [plugin,agent] *9311*  items=3 - Harness leverages Claude Code's agent team system to decompose complex tasks int
- Eventual-Inc/Daft [plugin] *5823* ['product-stars'] items=1 - Skills for working with Daft, a high-performance data engine for AI and multimod
- clidey/whodb [plugin] *5049* ['product-stars'] items=1 - Database management tools for Claude Code. Query databases, explore schemas, ana
- nyldn/claude-octopus [plugin] *4361*  items=2 - Multi-LLM orchestration for Claude Code and Cowork. Coordinates 8 AI providers (
- giancarloerra/SocratiCode [plugin,mcp-server] *3364*  items=2 - Enterprise-grade (40m+ lines) codebase intelligence in a zero-setup, private and
- Chachamaru127/claude-code-harness [plugin,agent] *3193*  items=2 - Autonomous Plan → Work → Review cycle for Claude Code. Go-native engine with 25×
- fabio-rovai/open-ontologies [plugin] *2783* ['star-spike'] items=1 - AI-native ontology engineering with 39 MCP tools backed by an in-memory Oxigraph
- AgriciDaniel/claude-blog [plugin] *2623*  items=1 - AI-powered blog creation and optimization skill with 20 commands, 4 specialized 
- nizos/tdd-guard [plugin,collection] *2373*  items=2 - Enforces Test-Driven Development by intercepting file operations in Claude Code.
- AminForou/mcp-gsc [plugin] *2096*  items=1 - Connect Google Search Console to Claude Code. Query rankings, inspect URLs, audi
- severity1/claude-code-prompt-improver [plugin] *1966*  items=1 - Intelligent prompt optimization using skill-based architecture. Enriches vague p
- kenryu42/cc-safety-net [plugin,collection] *1902*  items=3 - Block destructive git and filesystem commands before execution
- codeaholicguy/ai-devkit [plugin] *1656*  items=1 - A structured software development toolkit that helps Claude Code follow senior-e

## Top 30 by stars: verified
- morluto/rea [marketplace,mcp-server] *423745*  items=2 - Reverse engineer anything with agents, from app behavior down to native binaries
- affaan-m/ECC [collection] *295818*  items=1 - Top-notch, well-written resources covering "just about everything" from core eng
- firecrawl/firecrawl [skill] *198081* ['product-stars'] items=1 - Supercharge your AI agents with data from the web and beyond. Building the libra
- nextlevelbuilder/ui-ux-pro-max-skill [marketplace] *144398*  items=1 - An AI skill that provides design intelligence for building professional UI/UX ac
- vercel/next.js [marketplace] *143241* ['product-stars'] items=1 - The React Framework
- garrytan/gstack [agent] *138714*  items=1 - Garry Tan's (Y Combinator) Claude Code setup and "open source software factory" 
- browser-use/browser-use [mcp-server] *119890*  items=1 - Browser agents and stealth cloud browsers for AI: run web tasks, fill forms, ext
- addyosmani/agent-skills [marketplace] *112864*  items=1 - Production-grade engineering skills for AI coding agents.
- paperclipai/paperclip [skill,mcp-server] *110534*  items=2 - The open-source app everyone uses to manage agents at work
- Leonxlnx/taste-skill [marketplace] *108915*  items=1 - Agent skills that give coding agents taste: art direction, reference images and 
- nexu-io/open-design [marketplace] *105576*  items=1 - The 1st Collaborative AI Design Agent Workspace. Local-first and open source. Cr
- ruvnet/RuView [marketplace] *102138*  items=1 - π RuView turns commodity WiFi signals into real-time spatial intelligence, vital
- debpalash/VoiceStudio [skill] *99285* ['product-stars'] items=1 - VoiceStudio is the open-source, fully-local ElevenLabs alternative — voice cloni
- D4Vinci/Scrapling [mcp-server] *93258*  items=1 - Web scraping with stealth HTTP, real browsers, and Cloudflare bypass. CSS select
- tt-a1i/archify [skill,collection] *92827*  items=2 - An Agent Skill for Claude Code that generates interactive architecture, workflow
- storybookjs/storybook [marketplace] *91433* ['product-stars'] items=1 - Storybook is the industry standard workshop for building, documenting, and testi
- koala73/worldmonitor [skill,mcp-server] *90036* ['product-stars'] items=2 - Real-time global intelligence dashboard. AI-powered news aggregation, geopolitic
- bytedance/deer-flow [skill] *84907*  items=1 - An open-source long-horizon SuperAgent harness that researches, codes, and creat
- netdata/netdata [mcp-server] *81256*  items=1 - Real-time infrastructure monitoring with metrics, logs, alerts, and ML-based ano
- ruvnet/ruflo [marketplace,mcp-server] *80683*  items=2 - 🌊 The original agent harness. Deploy intelligent multi-player swarms, coordinate
- shareAI-lab/learn-claude-code [collection] *79779*  items=1 - A really interesting analysis of how coding agents like Claude Code are designed
- career-ops-hq/career-ops [plugin] *79633*  items=1 - Open-source AI job search agent and job finder: scan job boards, score each job 
- headroomlabs-ai/headroom [marketplace] *78684*  items=1 - Compress tool outputs, logs, files, and RAG chunks before they reach the LLM. 20
- ComposioHQ/awesome-claude-skills [skill] *78614*  items=1 - A curated list of awesome Claude Skills, resources, and tools for customizing Cl
- rohitg00/ai-engineering-from-scratch [skill] *76424* ['product-stars'] items=1 - Learn AI Engineering! Learn it. Build it. Ship it for others.
- calesthio/OpenMontage [skill] *75467*  items=1 - World's first open-source, agentic video production system. 12 production pipeli
- thedaviddias/Front-End-Checklist [marketplace,mcp-server] *74638* ['product-stars'] items=2 - 🗂 The essential checklist for modern web development, for humans and AI agents
- tw93/Mole [marketplace] *73669* ['product-stars'] items=1 - 🐹 Keep your Mac and PC clean, light, and running like new. Fast open-source CLI,
- usestrix/strix [skill] *73447* ['product-stars'] items=1 - Open-source AI penetration testing tool to find and fix your app’s vulnerabiliti
- hugohe3/ppt-master [marketplace] *72711* ['product-stars'] items=1 - AI turns documents or topics into real, native PowerPoint decks—with native shap

## Top 30 by stars: watch
- f/prompts.chat [marketplace] *175647* ['product-stars'] items=1 - f.k.a. Awesome ChatGPT Prompts. Share, discover, and collect prompts from the co
- opendatalab/MinerU [skill] *83017* ['product-stars'] items=1 - Transforms complex documents like PDFs and Office docs into LLM-ready markdown/J
- code-yeongyu/oh-my-openagent [skill] *70641* ['product-stars'] items=1 - OmO: Just type "mass ulw" keyword with your prompt. Now you are the master of gr
- Imbad0202/academic-research-skills [marketplace] *55083*  items=1 - Academic Research Skills for Claude Code: research → write → review → revise → f
- bmad-code-org/BMAD-METHOD [skill] *54915* ['product-stars'] items=1 - Breakthrough Method for Agile Ai Driven Development
- tldraw/tldraw [mcp-server] *51210*  items=1 - Draw and visually collaborate with your agents on tldraw's canvas.
- metabase/metabase [mcp-server] *50120*  items=1 - Lets AI clients search, explore, query, and visualize data in a Metabase instanc
- abhigyanpatwari/GitNexus [marketplace] *48229* ['product-stars'] items=1 - GitNexus: The Zero-Server Code Intelligence Engine
- serverless/serverless [skill] *46927* ['product-stars'] items=1 - ⚡ Serverless Framework – Effortlessly build apps that auto-scale, incur zero cos
- PostHog/posthog [mcp-server] *40605*  items=1 - Official PostHog MCP Server for product analytics, feature flags, experiments, a
- openai/codex-plugin-cc [marketplace] *34824*  items=1 - Use Codex from Claude Code to review code or delegate tasks.
- zarazhangrui/frontend-slides [marketplace] *31772*  items=1 - Create beautiful slides on the web using a coding agent's frontend skills
- oraios/serena [mcp-server] *31035*  items=1 - A powerful toolkit for coding, providing semantic retrieval and editing capabili
- openai/skills [skill] *28477*  items=1 - Skills Catalog for Codex
- vercel/ai [skill] *27696* ['product-stars'] items=1 - The AI Toolkit for TypeScript. From the creators of Next.js, the AI SDK is a fre
- hypit-ai/hypit [skill] *27609* ['product-stars'] items=1 - Clone any viral video with AI agents. Not just a script, the whole workflow: swa
- clockworklabs/SpacetimeDB [marketplace] *25519* ['product-stars'] items=1 - Development at the speed of light
- nocobase/nocobase [skill] *24823*  items=1 - NocoBase is the open-source platform for building, running, and evolving busines
- different-ai/openwork [mcp-server] *24379*  items=1 - Your OpenWork org's skills, plugins, workflows, and connections through one OAut
- HKUDS/AI-Trader [skill] *23085* ['product-stars'] items=1 - "AI-Trader: 100% Fully-Automated Agent-Native Trading"
- getpaseo/paseo [skill] *22858*  items=1 - Orchestrate multiple coding agents from desktop and mobile
- screenpipe/screenpipe [mcp-server] *22210*  items=1 - Search your local screen recordings, audio transcripts, and computer activity fr
- agent0ai/agent-zero [skill] *19670* ['product-stars'] items=1 - Agent Zero AI framework
- longbridge/gpui-kit [skill] *18921* ['product-stars'] items=1 - Rust GUI components for building fantastic cross-platform desktop application by
- Canner/WrenAI [skill] *18046* ['product-stars'] items=1 - GenBI (Generative BI) for AI agents, an open-source, governed text-to-SQL throug
- greensock/gsap-skills [marketplace] *17768*  items=1 - Official AI skills for GSAP. These skills teach AI coding agents how to correctl
- architecture-decision-record/architecture-decision-record [skill] *17382* ['product-stars'] items=1 - Architecture decision record (ADR) examples for software planning, IT leadership
- composio-community/awesome-codex-skills [skill] *17176*  items=1 - A curated list of practical Codex skills for automating workflows across the Cod
- ParadevAI/Paradev [marketplace] *15860* ['product-stars'] items=1 - Paradev (formerly Superset) is an agentic IDE to orchestrate 100+ coding agents 
- millionco/react-doctor [skill] *15075* ['product-stars'] items=1 - Your agent writes bad React. This catches it

## Random sample of 20 watch repos (of 478)
- dtormoen/tsk-tsk [marketplace] *171*  items=1 - Keeping your agents out of trouble with sandboxed coding agent automation reasons=['fails: pushed<=90d (96)'] src=['topic']
- ralforion/orionbelt-analytics [mcp-server] *56*  items=1 - Ontology-based MCP server for database schema analysis and RDF/OWL ontology gene reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- MiniMax-AI/MiniMax-H3 [skill] *11247* ['product-stars'] items=1 -  reasons=['fails: license (None)'] src=['topic']
- portel-dev/ncp [mcp-server] *101*  items=1 - 1 MCP to rule them all. Orchestrate, discover, and run any tool instantly. reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- zhuzhaoyun/Molio [mcp-server] *446*  items=1 - Read-only access to your Molio local knowledge base: search, read, browse, and A reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- elie222/inbox-zero [mcp-server] *12894*  items=1 - Search Gmail and Outlook, save drafts, manage email rules, and view email stats. reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- jgravelle/jcodemunch-mcp [marketplace,mcp-server] *2831*  items=2 - Symbol-level code retrieval for AI agents: fetch the function you need, not the  reasons=['fails: license (NOASSERTION)'] src=['mcp-registry', 'topic']
- Ted0321/kotetsu-work-ai-skills [skill] *56*  items=1 - 仕事が前に進むAIスキル配布（@kotetsu_0321） reasons=['no corroborating signal'] src=['topic']
- planetabhi/riseofmachine [mcp-server] *117*  items=1 - MCP server for the Rise of Machine AI tools directory. reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- ZzzLc0405/photo-abstract-editorial [skill] *6038* ['product-stars'] items=1 -  reasons=['fails: license (NOASSERTION)'] src=['topic']
- m-mizutani/goast [plugin] *79*  items=1 - Go AST based static analysis tool with Rego reasons=['fails: pushed<=90d (115)', 'no corroborating signal'] src=['code']
- popmechanic/VibesOS [plugin] *135*  items=1 - A GUI for Claude Code that makes it easy to vibe code simple, un-hackable apps reasons=['fails: pushed<=90d (98)'] src=['code']
- jordanburke/microsoft-todo-mcp-server [mcp-server] *120*  items=1 - Microsoft To Do via Graph — task lists, tasks, checklist items and reminders. reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- f/prompts.chat [marketplace] *175647* ['product-stars'] items=1 - f.k.a. Awesome ChatGPT Prompts. Share, discover, and collect prompts from the co reasons=['fails: license (NOASSERTION)'] src=['topic']
- Snailclimb/AIGuide [skill] *719*  items=1 - AI 应用开发、AI 编程实战与面试指南，涵盖 LLM、Agent、RAG、MCP、Claude Code、Codex 等核心技术与工程实践。 reasons=['fails: pushed<=90d (119)', 'fails: license (None)'] src=['topic']
- desktop-commander/remote-desktop-commander [mcp-server] *209*  items=1 - Remote Desktop Commander: use files, terminal and processes on your own computer reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- Klavis-AI/klavis [mcp-server] *5830*  items=1 - MCP server for progressive tool usage at any scale (see https://klavis.ai) reasons=['fails: pushed<=90d (154)'] src=['mcp-registry']
- gradion-ai/ipybox [mcp-server] *76*  items=1 - Unified execution environment for Python code, shell commands, and programmatic  reasons=['fails: pushed<=90d (144)'] src=['mcp-registry']
- sjsyrek/design-council [plugin] *181*  items=1 - Claude Code plugin: convene 11 role-specialized peer agents to debate a technica reasons=['fails: pushed<=90d (159)'] src=['code']
- mliu98/awesome-human-distillation [skill] *761*  items=1 - A curated catalog of human distillliation agent skills reasons=['fails: license (None)'] src=['topic']

## Errors
- graphql: HTTP 504 after 4 retries <!DOCTYPE html>
<!--

Hello future GitHubber! I bet you're here to remove tho
- broad verify subfolders chunk 4: no data None

## Rate limit
- REST calls this run (uncached): {"core": 48, "search": 42}; last seen: {"core": {"remaining": "4952", "limit": "5000"}, "search": {"remaining": "28", "limit": "30"}}
- GraphQL: 162 calls, cost 87, remaining 4960/5000, stopped early: False
- REST stopped early: False
- repos lacking metadata: 3915; enriched this run: 33224