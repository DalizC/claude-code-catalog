# Catalog report 2026-11-04
Mode: **token**; run time 1426s
Repos (deduped): 3208; flat entries before dedup: 24509

## Tier x type BEFORE dedup (flat entries)
- new/mcp-server: 14710
- watch/mcp-server: 2328
- listed/plugin: 2283
- verified/mcp-server: 1252
- watch/skill: 489
- verified/skill: 473
- watch/marketplace: 392
- official/plugin: 376
- verified/plugin: 358
- verified/marketplace: 355
- watch/plugin: 307
- watch/agent: 223
- verified/collection: 196
- new/skill: 169
- new/plugin: 150
- new/marketplace: 149
- anthropic/plugin: 147
- verified/agent: 49
- new/agent: 30
- anthropic/marketplace: 15
- anthropic/collection: 4
- watch/collection: 2
- anthropic/agent: 1

## Tier AFTER dedup (repos)
- verified: 1832
- watch: 480
- new: 329
- official: 256
- listed: 166
- anthropic: 145

## Type AFTER dedup (items)
- mcp-server: 1678
- plugin: 1419
- skill: 774
- marketplace: 497
- collection: 123
- agent: 50

## Primary type AFTER dedup (repos)
- mcp-server: 1101
- plugin: 842
- skill: 708
- marketplace: 430
- collection: 90
- agent: 37

## Repos by discovery source family
- topic: 1291
- mcp-registry: 1239
- anthropic: 462
- code: 216
- anthropic-org: 188
- curated: 149
- marketplace-expansion: 40

## Flags (all tiers)
- product-stars: 224
- star-spike: 17
- star-anomaly: 2

## star-anomaly by tier
- new: 2

## Metadata gaps
- repos without metadata: 151
- reasons: {'unfetched': 151}

## MCP-only repos excluded: 51
- assafelovic/gpt-researcher *30471* ['ai', 'python', 'agent', 'automation', 'research'] - An autonomous agent that conducts deep research on any data using any LLM provid
- mrexodia/ida-pro-mcp *13344* ['ida-plugin', 'ida-pro', 'mcp', 'mcp-server', 'modelcontextprotocol'] - AI-powered reverse engineering assistant that bridges IDA Pro with language mode
- mcp-use/mcp-use *10844* ['mcp', 'model-context-protocol', 'apps-sdk', 'mcp-apps', 'mcp-inspector'] - The fullstack MCP framework to develop MCP Apps for ChatGPT / Claude & MCP Serve
- Agents365-ai/drawio-skill *10556* ['drawio', 'diagram', 'agent-skills', 'architecture-diagram', 'claude-code'] - Agent skill that turns natural language, code, Terraform/K8s, SQL, OpenAPI, Asyn
- kajisho5/ffmpeg-skill *4469* ['audio-processing', 'captions', 'ffmpeg', 'subtitles', 'video'] - Local video editor for coding agents: 42 FFmpeg tools with a machine-readable co
- jordan-gibbs/hyperresearch *4374* ['agents', 'agentskills', 'claude-code', 'deep-research', 'deep-research-agent'] - Convert Claude Code or Codex into the most intelligent Deep Research Agent. Coll
- stickerdaniel/linkedin-mcp-server *4110* ['linkedin', 'linkedin-scraper', 'mcp', 'mcp-server', 'linkedin-mcp'] - Open-source MCP server for LinkedIn. Give Claude and any MCP-compatible AI agent
- taylorwilsdon/google_workspace_mcp *3473* ['ai', 'gmail', 'google-calendar', 'google-workspace', 'llm'] - Control Gmail, Google Calendar, Docs, Sheets, Slides, Chat, Forms, Tasks, Search
- duty1g/x64dbg-mcp-server *2771* ['ai-agents', 'ai-debugging', 'binary-analysis', 'claude', 'claude-code'] - x64dbg-MCP Server is a native MCP (Model Context Protocol) plugin for x64dbg tha
- alpic-ai/skybridge *2185* ['agent', 'ai', 'apps-sdk', 'chatgpt', 'claude'] - Skybridge is a full-stack TypeScript framework for MCP Apps and ChatGPT Apps. Ty
- study8677/repobrain *1357* ['claude-code', 'codex-cli', 'developer-tools', 'mcp-server', 'windsurf'] - 🧠 RepoBrain (formerly Antigravity) — Give your repo a brain. ChatGPT for your co
- CodeAbra/iai-personal-memory-engine *917* ['claude', 'claude-code', 'local-first', 'mcp', 'mcp-server'] - A cyber brain for your AI. It never forgets a detail, remembers exactly what you
- hetpatel-11/Adobe_Premiere_Pro_MCP *811* ['adobe', 'adobe-premiere-pro', 'adobe-mcp', 'adobe-premiere-pro-mcp', 'ai-video-editing'] - Adobe Premiere Pro MCP. Tools for AI-driven video editing via MCP, for Codex, Cl
- Storybloq/storybloq *788* ['agentic-development', 'ai-development', 'anthropic', 'claude-code', 'claude-skill'] - Project memory and workflows for Claude Code and Codex. Keep stories, plans, han
- agentic-box/memora *746* ['ai-agent', 'claude', 'knowledge-graph', 'llms', 'mcp'] - Give your AI agents persistent, collective memory — with deduplicating absorb, s

## Degradation
- registry complete: True (563 pages, 56279 entries)
- MCP servers merged from the previous catalog (not re-fetched): 0
- GraphQL 403s: 0 (secondary rate limit: 0); retries: 11; queries that gave up: 2
- HTTP retries (5xx/network): 0
- repos with stale metadata reused from the previous catalog (meta_stale): 13

## MCP Registry
- {"pages": 563, "fetched": 56279, "kept": 55416, "dropped": 863, "bad": 0, "complete": true, "excluded_remote_only": 18957, "excluded_low_signal": 18169, "fallback_merged": 0, "records": 1239, "attached_existing": 142, "new_repo": 1097, "remote_only": 0, "tiers": {"official": 25, "listed": 20, "verified": 892, "new": 123, "watch": 179}}

## Top 20 by trend_7d
- morluto/rea +29454 (7.39%) []
- pbakaus/impeccable +10852 (11.94%) []
- debpalash/VoiceStudio +8521 (9.29%) ['product-stars']
- HKUDS/DeepTutor +8366 (18.01%) ['product-stars']
- thedotmack/claude-mem +8348 (8.04%) []
- cloudflare/security-audit-skill +7858 (15.57%) []
- google/elephant-goldfish-model +7816 (219.0%) ['star-spike']
- Nutlope/hallmark +7800 (19.81%) []
- ifixai-ai/iFixAi +7084 (19.63%) ['product-stars']
- mattpocock/skills +6679 (2.19%) []
- Leonxlnx/taste-skill +5796 (5.58%) []
- affaan-m/ECC +5604 (1.93%) []
- DietrichGebert/ponytail +5537 (3.1%) []
- obra/superpowers +5358 (1.75%) []
- D4Vinci/Scrapling +5114 (5.68%) []
- heygen-com/hyperframes +4384 (5.92%) []
- elayadesign/ai-design-skills +4150 (42.1%) ['star-spike']
- vectorize-io/hindsight +4076 (7.48%) ['product-stars']
- calesthio/OpenMontage +3553 (4.9%) []
- AgriciDaniel/claude-seo +3544 (15.51%) []

## Code search vs topic search
- repos found by code search: 216
- also in topic search: 17
- code-only: 182; tiers: {'anthropic': 1, 'verified': 93, 'watch': 62, 'new': 26}

## Top 30 by stars: anthropic
- anthropics/skills [marketplace,collection] *187178*  items=2 - Anthropic example skills
- anthropics/claude-code [marketplace,agent] *154449*  items=2 - Anthropic's Claude Code plugins, installed from the claude-plugins-official repo
- anthropics/claude-plugins-official [plugin,marketplace,collection] *46016*  items=15 - Directory of popular Claude Code extensions including development tools, product
- anthropics/financial-services [marketplace] *41028*  items=1 - 
- anthropics/knowledge-work-plugins [marketplace] *34638*  items=1 - 
- anthropics/claude-for-legal [marketplace] *9891*  items=1 - Reference agents, skills, and data connectors for the legal workflows we see mos
- anthropics/claude-code-action [collection] *9781*  items=1 - The official GitHub Action for running Claude Code in CI: mention @claude in iss
- anthropics/claude-code-security-review [collection] *6707*  items=1 - An official AI-powered security-review GitHub Action that uses Claude to analyze
- anthropics/claude-plugins-community [marketplace] *4824*  items=1 - 
- anthropics/commerce-agents [marketplace] *3406*  items=1 - Claude Commerce Agents: the commerce-builder plugin for building shopping and me
- anthropics/life-sciences [marketplace] *640*  items=1 - Skills for life sciences research, data analysis, and discovery
- anthropics/k12-teacher-skills [marketplace] *613*  items=1 - Plugin marketplace for K-12 Education and Claude for Teachers.
- anthropics/healthcare [marketplace] *437*  items=1 - Claude for Healthcare — one plugin bundling payer, provider, pharma, and general
- anthropics/oncall-kit [marketplace] *258*  items=1 - 
- anthropics/claude-for-financial-advisors [plugin,marketplace] *137*  items=2 - Ready-to-run workflows for financial advisors in Claude Cowork, drawing live dat
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
- obra/superpowers [plugin,skill] *311988*  items=4 - Superpowers teaches Claude brainstorming, subagent driven development with built
- mattpocock/skills [plugin] *311706*  items=2 - Matt Pocock's agent skills for real engineering — grilling, spec/ticket flows, T
- heygen-com/hyperframes [plugin] *78482*  items=2 - HyperFrames by HeyGen. Write HTML, render video. Compositions, GSAP and runtime 
- ChromeDevTools/chrome-devtools-mcp [plugin,mcp-server] *54752*  items=4 - Control and inspect a live Chrome browser from your coding agent. Record perform
- confident-ai/deepeval [plugin] *19280* ['product-stars'] items=1 - Skills for adding DeepEval evaluations, tracing, datasets, Confident AI reports,
- huggingface/skills [plugin] *11263*  items=2 - Build, train, evaluate, and use open source AI models, datasets, and spaces.
- wonderwhy-er/DesktopCommanderMCP [plugin,mcp-server] *10209*  items=4 - MCP server for terminal commands, process management, and file operations across
- Eigenwise/atomic-agents [plugin,marketplace] *6317* ['product-stars'] items=3 - Comprehensive development workflow for building AI agents with the Atomic Agents
- exa-labs/exa-mcp-server [plugin,mcp-server] *5209*  items=3 - Exa AI web search, deep research, and content extraction. Provides MCP tools and
- expo/skills [plugin] *4040*  items=2 - Official Expo skills for building, deploying, upgrading, and debugging React Nat
- NVIDIA/skills [plugin] *3853*  items=2 - Find the right NVIDIA skill for GPU acceleration, CUDA, AI agents, data loading,
- aws/agent-toolkit-for-aws [plugin] *3389*  items=8 - Build, deploy, and operate AI agents on AWS. Skills for scaffolding agents with 
- cloudflare/skills [plugin] *3273*  items=2 - Skills for the Cloudflare developer platform: Workers, Durable Objects, Agents S
- modelcontextprotocol/ext-apps [plugin] *3044*  items=3 - Skills for creating MCP Apps with the MCP Apps SDK
- GoogleChrome/modern-web-guidance [plugin] *2612*  items=2 - Keep your coding agent up to date with the latest web best practices
- figma/mcp-server-guide [plugin,mcp-server] *2147*  items=4 - Figma design platform integration. Access design files, extract component inform
- stripe/ai [plugin,mcp-server] *2035*  items=3 - Stripe development plugin for Claude
- MicrosoftDocs/mcp [plugin,mcp-server] *1971*  items=3 - Access official Microsoft documentation, API references, and code samples for Az
- EpicGames/unreal-engine-skills-for-claude-code-plugin [plugin] *1886*  items=2 - Control Unreal Editor directly from Claude Code via MCP. Hundreds of tools expos
- microsoft/azure-skills [plugin] *1617*  items=2 - Transform Claude into an Azure expert. This plugin integrates the Azure MCP serv
- atlassian/atlassian-mcp-server [plugin,mcp-server] *1143*  items=3 - Connect to Atlassian products including Jira and Confluence. Search and create i
- forcedotcom/sf-skills [plugin,skill] *1141*  items=2 - Build Salesforce apps and agents using these core building blocks: metadata, Ape
- superdesigndev/superdesign-skill [plugin,skill] *944*  items=2 - Design or redesign frontend UI and marketing graphics on the Superdesign infinit
- awslabs/agent-plugins [plugin] *934*  items=10 - Guide developers through adding maps, places search, geocoding, routing, and oth
- Shopify/Shopify-AI-Toolkit [plugin] *627*  items=2 - Shopify's AI Toolkit provides 18 development skills for building on the Shopify 
- duckdb/duckdb-skills [plugin] *616*  items=2 - DuckDB-powered skills for Claude Code: read any data file, attach and query Duck
- Unity-Technologies/unity-agent-plugin [plugin] *604*  items=2 - Unity's official plugin for Claude Code, with curated skills for game developmen
- ClickHouse/agent-skills [plugin] *564*  items=2 - 28 best practice rules for ClickHouse schema design, query optimization, and dat
- gitroomhq/postiz-agent [plugin] *563*  items=3 - Social media automation CLI for scheduling posts, managing integrations, uploadi
- TheQtCompanyRnD/agent-skills [plugin] *522*  items=3 - Agentic engineering skills for Qt software development — Qt C++/QML code review,

## Top 30 by stars: listed
- DietrichGebert/ponytail [plugin] *183898*  items=2 - Lazy senior dev mode. Forces the simplest, shortest solution that actually works
- JuliusBrussee/caveman [plugin,skill] *117285*  items=2 - Auto-activation works differently per agent: Claude Code uses SessionStart hooks
- thedotmack/claude-mem [plugin,skill] *112137*  items=3 - Persistent memory system for Claude Code - seamlessly preserve context across se
- pbakaus/impeccable [plugin] *101740*  items=1 - Great design prompts require design vocabulary. Most people don't have it. You c
- Egonex-AI/Understand-Anything [plugin,skill] *90345*  items=2 - Understand Anything is a Claude Code plugin that analyzes your project with a mu
- mem0ai/mem0 [plugin] *68363* ['product-stars'] items=1 - Connect Mem0 to Claude to give your agent persistent memory across sessions. Cla
- mvanhorn/last30days-skill [plugin] *66516*  items=1 - last-30-days is a Claude Code skill that searches the web and delivers a structu
- coreyhaines31/marketingskills [plugin,skill] *58356*  items=3 - coreyhaines31
- DayuanJiang/next-ai-draw-io [plugin,mcp-server] *36662*  items=2 - AI-powered Draw.io diagram generation with real-time browser preview. Create flo
- mksglu/context-mode [plugin] *33406*  items=1 - MCP is the protocol for tool access. We're the virtualization layer for context.
- alirezarezvani/claude-skills [plugin,skill] *29257*  items=2 - Playwright Pro turns your AI coding agent into a senior test automation engineer
- jarrodwatts/claude-hud [plugin,collection] *29098*  items=2 - Real-time statusline HUD for Claude Code - context health, tool activity, agent 
- promptfoo/promptfoo [plugin] *26809*  items=1 - Teaches AI coding agents to create and maintain promptfoo eval suites. Encodes b
- AgriciDaniel/claude-seo [plugin] *26398*  items=1 - Comprehensive SEO analysis plugin for Claude Code. Performs full site audits wit
- browser-use/browser-harness [plugin] *18853*  items=1 - Open-source browser agent driven via CDP — direct browser control, 79K stars, YC
- Jeffallan/claude-skills [plugin,skill,collection] *12208*  items=3 - 66 specialized skills for full-stack development: 12 language experts (Python, T
- nicobailon/visual-explainer [plugin,collection] *10779*  items=3 - An agent skill that turns complex terminal output into styled HTML pages you act
- revfactory/harness [plugin,agent] *9317*  items=3 - Harness leverages Claude Code's agent team system to decompose complex tasks int
- Eventual-Inc/Daft [plugin] *5826* ['product-stars'] items=1 - Skills for working with Daft, a high-performance data engine for AI and multimod
- clidey/whodb [plugin] *5049* ['product-stars'] items=1 - Database management tools for Claude Code. Query databases, explore schemas, ana
- nyldn/claude-octopus [plugin] *4370*  items=2 - Multi-LLM orchestration for Claude Code and Cowork. Coordinates 8 AI providers (
- giancarloerra/SocratiCode [plugin,mcp-server] *3365*  items=2 - Enterprise-grade (40m+ lines) codebase intelligence in a zero-setup, private and
- Chachamaru127/claude-code-harness [plugin,agent] *3195*  items=2 - Autonomous Plan → Work → Review cycle for Claude Code. Go-native engine with 25×
- fabio-rovai/open-ontologies [plugin] *2802* ['star-spike'] items=1 - AI-native ontology engineering with 39 MCP tools backed by an in-memory Oxigraph
- AgriciDaniel/claude-blog [plugin] *2638*  items=1 - AI-powered blog creation and optimization skill with 20 commands, 4 specialized 
- nizos/tdd-guard [plugin,collection] *2373*  items=2 - Enforces Test-Driven Development by intercepting file operations in Claude Code.
- AminForou/mcp-gsc [plugin] *2099*  items=1 - Connect Google Search Console to Claude Code. Query rankings, inspect URLs, audi
- severity1/claude-code-prompt-improver [plugin] *1966*  items=1 - Intelligent prompt optimization using skill-based architecture. Enriches vague p
- kenryu42/cc-safety-net [plugin,collection] *1909*  items=3 - Block destructive git and filesystem commands before execution
- codeaholicguy/ai-devkit [plugin] *1656*  items=1 - A structured software development toolkit that helps Claude Code follow senior-e

## Top 30 by stars: verified
- morluto/rea [marketplace,mcp-server] *427871*  items=2 - Reverse engineer anything with agents, from app behavior down to native binaries
- affaan-m/ECC [collection] *296670*  items=1 - Top-notch, well-written resources covering "just about everything" from core eng
- firecrawl/firecrawl [skill] *198385* ['product-stars'] items=1 - Supercharge your AI agents with data from the web and beyond. Building the libra
- nextlevelbuilder/ui-ux-pro-max-skill [marketplace] *144857*  items=1 - An AI skill that provides design intelligence for building professional UI/UX ac
- vercel/next.js [marketplace] *143250* ['product-stars'] items=1 - The React Framework
- garrytan/gstack [agent] *138936*  items=1 - Garry Tan's (Y Combinator) Claude Code setup and "open source software factory" 
- browser-use/browser-use [mcp-server] *119978*  items=1 - Browser agents and stealth cloud browsers for AI: run web tasks, fill forms, ext
- addyosmani/agent-skills [marketplace] *113100*  items=1 - Production-grade engineering skills for AI coding agents.
- paperclipai/paperclip [skill,mcp-server] *110879*  items=2 - The open-source app everyone uses to manage agents at work
- Leonxlnx/taste-skill [marketplace] *109615*  items=1 - Agent skills that give coding agents taste: art direction, reference images and 
- nexu-io/open-design [marketplace] *105808*  items=1 - The 1st Collaborative AI Design Agent Workspace. Local-first and open source. Cr
- ruvnet/RuView [marketplace] *102293*  items=1 - π RuView turns commodity WiFi signals into real-time spatial intelligence, vital
- debpalash/VoiceStudio [skill] *100260* ['product-stars'] items=1 - VoiceStudio is the open-source, fully-local ElevenLabs alternative — voice cloni
- D4Vinci/Scrapling [mcp-server] *95209*  items=1 - Web scraping with stealth HTTP, real browsers, and Cloudflare bypass. CSS select
- tt-a1i/archify [skill,collection] *93196*  items=2 - An Agent Skill for Claude Code that generates interactive architecture, workflow
- storybookjs/storybook [marketplace] *91447* ['product-stars'] items=1 - Storybook is the industry standard workshop for building, documenting, and testi
- koala73/worldmonitor [skill,mcp-server] *90120* ['product-stars'] items=2 - Real-time global intelligence dashboard. AI-powered news aggregation, geopolitic
- bytedance/deer-flow [skill] *84963*  items=1 - An open-source long-horizon SuperAgent harness that researches, codes, and creat
- netdata/netdata [mcp-server] *81265*  items=1 - Real-time infrastructure monitoring with metrics, logs, alerts, and ML-based ano
- ruvnet/ruflo [marketplace,mcp-server] *80818*  items=2 - 🌊 The original agent harness. Deploy intelligent multi-player swarms, coordinate
- career-ops-hq/career-ops [plugin] *79931*  items=1 - Open-source AI job search agent and job finder: scan job boards, score each job 
- shareAI-lab/learn-claude-code [collection] *79839*  items=1 - A really interesting analysis of how coding agents like Claude Code are designed
- headroomlabs-ai/headroom [marketplace] *78775*  items=1 - Compress tool outputs, logs, files, and RAG chunks before they reach the LLM. 20
- ComposioHQ/awesome-claude-skills [skill] *78694*  items=1 - A curated list of awesome Claude Skills, resources, and tools for customizing Cl
- rohitg00/ai-engineering-from-scratch [skill] *76728* ['product-stars'] items=1 - Learn AI Engineering! Learn it. Build it. Ship it for others.
- calesthio/OpenMontage [skill] *76074*  items=1 - World's first open-source, agentic video production system. 12 production pipeli
- thedaviddias/Front-End-Checklist [marketplace,mcp-server] *74644* ['product-stars'] items=2 - 🗂 The essential checklist for modern web development, for humans and AI agents
- tw93/Mole [marketplace] *73788* ['product-stars'] items=1 - 🐹 Keep your Mac and PC clean, light, and running like new. Fast open-source CLI,
- usestrix/strix [skill] *73629* ['product-stars'] items=1 - Open-source AI penetration testing tool to find and fix your app’s vulnerabiliti
- hugohe3/ppt-master [marketplace] *73210* ['product-stars'] items=1 - AI turns documents or topics into real, native PowerPoint decks—with native shap

## Top 30 by stars: watch
- f/prompts.chat [marketplace] *175744* ['product-stars'] items=1 - f.k.a. Awesome ChatGPT Prompts. Share, discover, and collect prompts from the co
- opendatalab/MinerU [skill] *83079* ['product-stars'] items=1 - Transforms complex documents like PDFs and Office docs into LLM-ready markdown/J
- code-yeongyu/oh-my-openagent [skill] *70677* ['product-stars'] items=1 - OmO: Just type "mass ulw" keyword with your prompt. Now you are the master of gr
- Imbad0202/academic-research-skills [marketplace] *55260*  items=1 - Academic Research Skills for Claude Code: research → write → review → revise → f
- bmad-code-org/BMAD-METHOD [skill] *54969* ['product-stars'] items=1 - Breakthrough Method for Agile Ai Driven Development
- tldraw/tldraw [mcp-server] *51232*  items=1 - Draw and visually collaborate with your agents on tldraw's canvas.
- metabase/metabase [mcp-server] *50146*  items=1 - Lets AI clients search, explore, query, and visualize data in a Metabase instanc
- abhigyanpatwari/GitNexus [marketplace] *48259* ['product-stars'] items=1 - GitNexus: The Zero-Server Code Intelligence Engine
- serverless/serverless [skill] *46928* ['product-stars'] items=1 - ⚡ Serverless Framework – Effortlessly build apps that auto-scale, incur zero cos
- PostHog/posthog [mcp-server] *40630*  items=1 - Official PostHog MCP Server for product analytics, feature flags, experiments, a
- openai/codex-plugin-cc [marketplace] *34859*  items=1 - Use Codex from Claude Code to review code or delegate tasks.
- zarazhangrui/frontend-slides [marketplace] *31837*  items=1 - Create beautiful slides on the web using a coding agent's frontend skills
- oraios/serena [mcp-server] *31072*  items=1 - A powerful toolkit for coding, providing semantic retrieval and editing capabili
- openai/skills [skill] *28503*  items=1 - Skills Catalog for Codex
- hypit-ai/hypit [skill] *27819* ['product-stars'] items=1 - Clone any viral video with AI agents. Not just a script, the whole workflow: swa
- vercel/ai [skill] *27720* ['product-stars'] items=1 - The AI Toolkit for TypeScript. From the creators of Next.js, the AI SDK is a fre
- clockworklabs/SpacetimeDB [marketplace] *25519* ['product-stars'] items=1 - Development at the speed of light
- nocobase/nocobase [skill] *24835*  items=1 - NocoBase is the open-source platform for building, running, and evolving busines
- different-ai/openwork [mcp-server] *24390*  items=1 - Your OpenWork org's skills, plugins, workflows, and connections through one OAut
- HKUDS/AI-Trader [skill] *23097* ['product-stars'] items=1 - "AI-Trader: 100% Fully-Automated Agent-Native Trading"
- getpaseo/paseo [skill] *22978*  items=1 - Orchestrate multiple coding agents from desktop and mobile
- screenpipe/screenpipe [mcp-server] *22227*  items=1 - Search your local screen recordings, audio transcripts, and computer activity fr
- agent0ai/agent-zero [skill] *19704* ['product-stars'] items=1 - Agent Zero AI framework
- longbridge/gpui-kit [skill] *18980* ['product-stars'] items=1 - Rust GUI components for building fantastic cross-platform desktop application by
- Canner/WrenAI [skill] *18063* ['product-stars'] items=1 - GenBI (Generative BI) for AI agents, an open-source, governed text-to-SQL throug
- greensock/gsap-skills [marketplace] *17835*  items=1 - Official AI skills for GSAP. These skills teach AI coding agents how to correctl
- architecture-decision-record/architecture-decision-record [skill] *17390* ['product-stars'] items=1 - Architecture decision record (ADR) examples for software planning, IT leadership
- composio-community/awesome-codex-skills [skill] *17190*  items=1 - A curated list of practical Codex skills for automating workflows across the Cod
- ParadevAI/Paradev [marketplace] *15887* ['product-stars'] items=1 - Paradev (formerly Superset) is an agentic IDE to orchestrate 100+ coding agents 
- millionco/react-doctor [skill] *15083* ['product-stars'] items=1 - Your agent writes bad React. This catches it

## Random sample of 20 watch repos (of 480)
- amirfish1/claude-command-center [marketplace] *215*  items=1 - One local board for Claude Code, Codex, Cursor and 5 more coding agents. See whi reasons=['fails: license (NOASSERTION)'] src=['topic']
- r-huijts/strava-mcp [mcp-server] *502*  items=1 - MCP server for accessing Strava API reasons=['fails: pushed<=90d (143)'] src=['mcp-registry']
- Imbad0202/academic-research-skills-codex [skill] *13995*  items=1 - Codex-native Academic Research Skills suite for human-in-the-loop academic resea reasons=['fails: license (NOASSERTION)'] src=['topic']
- pantalytics/odoo-mcp-pro [mcp-server] *89*  items=1 - Connect AI to Odoo ERP 14-20: search, create, update and manage records in natur reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- yuque/yuque-mcp-server [mcp-server] *262*  items=1 - MCP server for Yuque — expose your knowledge base to AI assistants. reasons=['fails: pushed<=90d (112)'] src=['mcp-registry']
- devantler-tech/ksail [mcp-server] *164*  items=1 - SDK for creating, managing, and operating Kubernetes clusters and workloads with reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- corey924/ZeroSpec [skill] *65*  items=1 - ZeroSpec is a zero-dependency Markdown framework that helps AI agents understand reasons=['fails: pushed<=90d (116)'] src=['topic']
- ianho7/ai-friendly-web-design-skill [skill] *77*  items=1 - A skill for coding agents that build, review, and refactor Web UI that should be reasons=['fails: pushed<=90d (135)', 'no corroborating signal'] src=['topic']
- oraios/serena [mcp-server] *31072*  items=1 - A powerful toolkit for coding, providing semantic retrieval and editing capabili reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- jihe520/MathModelAgent [skill] *6288*  items=1 - 🤖📐专为数学建模设计的 Agent & skills ,自动完成数学建模，生成一份完整的可以直接提交的论文。 An Agent Designed for Mat reasons=['fails: license (None)'] src=['topic']
- sjsyrek/design-council [plugin] *181*  items=1 - Claude Code plugin: convene 11 role-specialized peer agents to debate a technica reasons=['fails: pushed<=90d (160)'] src=['code']
- smnandre/symfony-ux-skills [plugin] *183*  items=1 - Symfony UX skills for Claude, Gemini, Codex, ... Live Component, Twig Component, reasons=['fails: pushed<=90d (142)'] src=['code']
- gybob/aai-gateway [mcp-server] *91*  items=1 - Unified MCP & Skill management gateway, shared across AI agents, 99% context tok reasons=['fails: pushed<=90d (94)'] src=['mcp-registry']
- vanillaflava/llm-wiki-skills [skill] *71*  items=1 - Turn your markdown vault into a compounding knowledge wiki (Karpathy inspired).  reasons=['fails: pushed<=90d (115)'] src=['topic']
- RedPlanetHQ/core [marketplace] *2012*  items=1 - Your Personal AI OS reasons=['fails: license (NOASSERTION)'] src=['topic']
- yuna0x0/anilist-mcp [mcp-server] *91*  items=2 - Access and interact with anime and manga data seamlessly. Retrieve detailed info reasons=['fails: pushed<=90d (113)'] src=['mcp-registry']
- frumu-ai/tandem [mcp-server] *125*  items=1 - Remote MCP server for Tandem docs, install guides, SDKs, workflows, and agent se reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- firish/webfetch [mcp-server] *60*  items=1 - Self-hosted web search for LLM agents: search -> fetch -> rank pipeline with sem reasons=['fails: pushed<=90d (104)'] src=['mcp-registry']
- pmwl0128/quark_drive_skills [plugin] *65*  items=1 - Quark Drive Skills: Pokemon Champions Agent Skills for dex and metagame facts, e reasons=['fails: license (NOASSERTION)', 'no corroborating signal'] src=['code']
- mliu98/awesome-human-distillation [skill] *761*  items=1 - A curated catalog of human distillliation agent skills reasons=['fails: license (None)'] src=['topic']

## Errors
- graphql: HTTP 504 after 4 retries <!DOCTYPE html>
<!--

Hello future GitHubber! I bet you're here to remove tho
- broad verify subfolders chunk 5: no data None
- graphql: HTTP 502 after 4 retries <html>
<head><title>502 Bad Gateway</title></head>
<body>
<center><h1>502 Bad
- graphql chunk 14: no data None

## Rate limit
- REST calls this run (uncached): {"core": 67, "search": 42}; last seen: {"core": {"remaining": "4933", "limit": "5000"}, "search": {"remaining": "29", "limit": "30"}}
- GraphQL: 150 calls, cost 77, remaining 4964/5000, stopped early: False
- REST stopped early: False
- repos lacking metadata: 3933; enriched this run: 33504