# Catalog report 2026-10-31
Mode: **token**; run time 1167s
Repos (deduped): 3160; flat entries before dedup: 23659

## Tier x type BEFORE dedup (flat entries)
- new/mcp-server: 13944
- watch/mcp-server: 2291
- listed/plugin: 2283
- verified/mcp-server: 1221
- watch/skill: 489
- verified/skill: 466
- watch/marketplace: 391
- official/plugin: 376
- verified/plugin: 363
- verified/marketplace: 352
- watch/plugin: 259
- watch/agent: 253
- verified/collection: 196
- new/skill: 167
- new/plugin: 154
- anthropic/plugin: 145
- new/marketplace: 141
- verified/agent: 52
- new/agent: 44
- anthropic/marketplace: 15
- anthropic/collection: 4
- watch/collection: 2
- anthropic/agent: 1

## Tier AFTER dedup (repos)
- verified: 1799
- watch: 470
- new: 323
- official: 256
- listed: 169
- anthropic: 143

## Type AFTER dedup (items)
- mcp-server: 1641
- plugin: 1388
- skill: 763
- marketplace: 494
- collection: 124
- agent: 51

## Primary type AFTER dedup (repos)
- mcp-server: 1067
- plugin: 849
- skill: 694
- marketplace: 422
- collection: 91
- agent: 37

## Repos by discovery source family
- topic: 1263
- mcp-registry: 1205
- anthropic: 465
- code: 231
- anthropic-org: 186
- curated: 150
- marketplace-expansion: 40

## Flags (all tiers)
- product-stars: 220
- star-spike: 15
- star-anomaly: 1

## star-anomaly by tier
- new: 1

## Metadata gaps
- repos without metadata: 149
- reasons: {'unfetched': 149}

## MCP-only repos excluded: 50
- assafelovic/gpt-researcher *30392* ['ai', 'python', 'agent', 'automation', 'research'] - An autonomous agent that conducts deep research on any data using any LLM provid
- mrexodia/ida-pro-mcp *13228* ['ida-plugin', 'ida-pro', 'mcp', 'mcp-server', 'modelcontextprotocol'] - AI-powered reverse engineering assistant that bridges IDA Pro with language mode
- mcp-use/mcp-use *10830* ['mcp', 'model-context-protocol', 'apps-sdk', 'mcp-apps', 'mcp-inspector'] - The fullstack MCP framework to develop MCP Apps for ChatGPT / Claude & MCP Serve
- Agents365-ai/drawio-skill *10472* ['drawio', 'diagram', 'agent-skills', 'architecture-diagram', 'claude-code'] - Agent skill that turns natural language, code, Terraform/K8s, SQL, OpenAPI, Asyn
- jordan-gibbs/hyperresearch *4197* ['agents', 'agentskills', 'claude-code', 'deep-research', 'deep-research-agent'] - Convert Claude Code or Codex into the most intelligent Deep Research Agent. Coll
- kajisho5/ffmpeg-skill *4125* ['audio-processing', 'captions', 'ffmpeg', 'subtitles', 'video'] - Local video editor for coding agents: 42 FFmpeg tools with a machine-readable co
- stickerdaniel/linkedin-mcp-server *4056* ['linkedin', 'linkedin-scraper', 'mcp', 'mcp-server', 'linkedin-mcp'] - Open-source MCP server for LinkedIn. Give Claude and any MCP-compatible AI agent
- taylorwilsdon/google_workspace_mcp *3449* ['ai', 'gmail', 'google-calendar', 'google-workspace', 'llm'] - Control Gmail, Google Calendar, Docs, Sheets, Slides, Chat, Forms, Tasks, Search
- duty1g/x64dbg-mcp-server *2639* ['ai-agents', 'ai-debugging', 'binary-analysis', 'claude', 'claude-code'] - x64dbg-MCP Server is a native MCP (Model Context Protocol) plugin for x64dbg tha
- alpic-ai/skybridge *2180* ['agent', 'ai', 'apps-sdk', 'chatgpt', 'claude'] - Skybridge is a full-stack TypeScript framework for MCP Apps and ChatGPT Apps. Ty
- study8677/repobrain *1356* ['claude-code', 'codex-cli', 'developer-tools', 'mcp-server', 'windsurf'] - 🧠 RepoBrain (formerly Antigravity) — Give your repo a brain. ChatGPT for your co
- CodeAbra/iai-personal-memory-engine *918* ['claude', 'claude-code', 'local-first', 'mcp', 'mcp-server'] - A cyber brain for your AI. It never forgets a detail, remembers exactly what you
- hetpatel-11/Adobe_Premiere_Pro_MCP *790* ['adobe', 'adobe-premiere-pro', 'adobe-mcp', 'adobe-premiere-pro-mcp', 'ai-video-editing'] - Adobe Premiere Pro MCP. Tools for AI-driven video editing via MCP, for Codex, Cl
- Storybloq/storybloq *785* ['agentic-development', 'ai-development', 'anthropic', 'claude-code', 'claude-skill'] - Project memory and workflows for Claude Code and Codex. Keep stories, plans, han
- agentic-box/memora *745* ['ai-agent', 'claude', 'knowledge-graph', 'llms', 'mcp'] - Give your AI agents persistent, collective memory — with deduplicating absorb, s

## Degradation
- registry complete: True (535 pages, 53465 entries)
- MCP servers merged from the previous catalog (not re-fetched): 0
- GraphQL 403s: 0 (secondary rate limit: 0); retries: 9; queries that gave up: 1
- HTTP retries (5xx/network): 0
- repos with stale metadata reused from the previous catalog (meta_stale): 0

## MCP Registry
- {"pages": 535, "fetched": 53465, "kept": 52628, "dropped": 837, "bad": 0, "complete": true, "excluded_remote_only": 17587, "excluded_low_signal": 17585, "fallback_merged": 0, "records": 1205, "attached_existing": 142, "new_repo": 1063, "remote_only": 0, "tiers": {"official": 25, "listed": 20, "verified": 862, "new": 122, "watch": 176}}

## Top 20 by trend_7d
- morluto/rea +38741 (10.35%) []
- debpalash/VoiceStudio +12308 (14.72%) ['product-stars']
- cloudflare/security-audit-skill +11825 (27.82%) ['star-spike']
- Nutlope/hallmark +11753 (37.43%) ['star-spike']
- pbakaus/impeccable +11641 (13.59%) []
- HKUDS/DeepTutor +9612 (22.7%) ['product-stars']
- google/elephant-goldfish-model +6314 (1773.6%) ['star-spike']
- DietrichGebert/ponytail +6135 (3.51%) []
- affaan-m/ECC +6066 (2.11%) []
- ifixai-ai/iFixAi +5741 (16.97%) ['product-stars']
- mattpocock/skills +5694 (1.89%) []
- obra/superpowers +5223 (1.72%) []
- heygen-com/hyperframes +5204 (7.34%) []
- Leonxlnx/taste-skill +4762 (4.68%) []
- AgriciDaniel/claude-seo +4698 (23.59%) []
- hugohe3/ppt-master +4478 (6.69%) ['product-stars']
- thedotmack/claude-mem +3954 (3.85%) []
- lemomo-ai/lemo-opuscar +3623 (58.44%) ['star-spike']
- nextlevelbuilder/ui-ux-pro-max-skill +3588 (2.57%) []
- vectorize-io/hindsight +3521 (6.62%) ['product-stars']

## Code search vs topic search
- repos found by code search: 231
- also in topic search: 18
- code-only: 195; tiers: {'anthropic': 1, 'verified': 104, 'watch': 61, 'new': 29}

## Top 30 by stars: anthropic
- anthropics/skills [marketplace,collection] *185457*  items=2 - Anthropic example skills
- anthropics/claude-code [marketplace,agent] *153995*  items=2 - Anthropic's Claude Code plugins, installed from the claude-plugins-official repo
- anthropics/claude-plugins-official [plugin,marketplace,collection] *45468*  items=15 - Directory of popular Claude Code extensions including development tools, product
- anthropics/financial-services [marketplace] *40939*  items=1 - 
- anthropics/knowledge-work-plugins [marketplace] *34070*  items=1 - 
- anthropics/claude-for-legal [marketplace] *9850*  items=1 - Reference agents, skills, and data connectors for the legal workflows we see mos
- anthropics/claude-code-action [collection] *9725*  items=1 - The official GitHub Action for running Claude Code in CI: mention @claude in iss
- anthropics/claude-code-security-review [collection] *6655*  items=1 - An official AI-powered security-review GitHub Action that uses Claude to analyze
- anthropics/claude-plugins-community [marketplace] *4795*  items=1 - 
- anthropics/commerce-agents [marketplace] *3384*  items=1 - Claude Commerce Agents: the commerce-builder plugin for building shopping and me
- anthropics/life-sciences [marketplace] *636*  items=1 - Skills for life sciences research, data analysis, and discovery
- anthropics/k12-teacher-skills [marketplace] *606*  items=1 - Plugin marketplace for K-12 Education and Claude for Teachers.
- anthropics/healthcare [marketplace] *431*  items=1 - Claude for Healthcare — one plugin bundling payer, provider, pharma, and general
- anthropics/oncall-kit [marketplace] *254*  items=1 - 
- anthropics/claude-for-financial-advisors [plugin,marketplace] *131*  items=2 - Ready-to-run workflows for financial advisors in Claude Cowork, drawing live dat
- anthropics/claude-tag-plugins [marketplace] *74*  items=1 - Plugins that connect Claude Tag to common SaaS services, plus charting and confi
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
- obra/superpowers [plugin,skill] *309541*  items=3 - Superpowers teaches Claude brainstorming, subagent driven development with built
- mattpocock/skills [plugin] *307622*  items=2 - Matt Pocock's agent skills for real engineering — grilling, spec/ticket flows, T
- heygen-com/hyperframes [plugin] *76137*  items=2 - HyperFrames by HeyGen. Write HTML, render video. Compositions, GSAP and runtime 
- ChromeDevTools/chrome-devtools-mcp [plugin,mcp-server] *54515*  items=4 - Control and inspect a live Chrome browser from your coding agent. Record perform
- confident-ai/deepeval [plugin] *19207* ['product-stars'] items=1 - Skills for adding DeepEval evaluations, tracing, datasets, Confident AI reports,
- huggingface/skills [plugin] *11241*  items=2 - Build, train, evaluate, and use open source AI models, datasets, and spaces.
- wonderwhy-er/DesktopCommanderMCP [plugin,mcp-server] *10176*  items=4 - MCP server for terminal commands, process management, and file operations across
- Eigenwise/atomic-agents [plugin,marketplace] *6314* ['product-stars'] items=3 - Comprehensive development workflow for building AI agents with the Atomic Agents
- exa-labs/exa-mcp-server [plugin,mcp-server] *5204*  items=3 - Exa AI web search, deep research, and content extraction. Provides MCP tools and
- expo/skills [plugin] *3923* ['star-spike'] items=2 - Official Expo skills for building, deploying, upgrading, and debugging React Nat
- NVIDIA/skills [plugin] *3800*  items=2 - Find the right NVIDIA skill for GPU acceleration, CUDA, AI agents, data loading,
- aws/agent-toolkit-for-aws [plugin] *3355*  items=8 - Build, deploy, and operate AI agents on AWS. Skills for scaffolding agents with 
- cloudflare/skills [plugin] *3226*  items=2 - Skills for the Cloudflare developer platform: Workers, Durable Objects, Agents S
- modelcontextprotocol/ext-apps [plugin] *3029*  items=3 - Skills for creating MCP Apps with the MCP Apps SDK
- GoogleChrome/modern-web-guidance [plugin] *2584*  items=2 - Keep your coding agent up to date with the latest web best practices
- figma/mcp-server-guide [plugin,mcp-server] *2131*  items=4 - Figma design platform integration. Access design files, extract component inform
- stripe/ai [plugin,mcp-server] *2009*  items=3 - Stripe development plugin for Claude
- MicrosoftDocs/mcp [plugin,mcp-server] *1960*  items=3 - Access official Microsoft documentation, API references, and code samples for Az
- EpicGames/unreal-engine-skills-for-claude-code-plugin [plugin] *1736*  items=2 - Control Unreal Editor directly from Claude Code via MCP. Hundreds of tools expos
- microsoft/azure-skills [plugin] *1604*  items=2 - Transform Claude into an Azure expert. This plugin integrates the Azure MCP serv
- atlassian/atlassian-mcp-server [plugin,mcp-server] *1139*  items=3 - Connect to Atlassian products including Jira and Confluence. Search and create i
- forcedotcom/sf-skills [plugin,skill] *1133*  items=2 - Build Salesforce apps and agents using these core building blocks: metadata, Ape
- awslabs/agent-plugins [plugin] *932*  items=10 - Guide developers through adding maps, places search, geocoding, routing, and oth
- superdesigndev/superdesign-skill [plugin,skill] *923*  items=2 - Design or redesign frontend UI and marketing graphics on the Superdesign infinit
- Shopify/Shopify-AI-Toolkit [plugin] *621*  items=2 - Shopify's AI Toolkit provides 18 development skills for building on the Shopify 
- duckdb/duckdb-skills [plugin] *613*  items=2 - DuckDB-powered skills for Claude Code: read any data file, attach and query Duck
- Unity-Technologies/unity-agent-plugin [plugin] *588*  items=2 - Unity's official plugin for Claude Code, with curated skills for game developmen
- ClickHouse/agent-skills [plugin] *562*  items=2 - 28 best practice rules for ClickHouse schema design, query optimization, and dat
- gitroomhq/postiz-agent [plugin] *559*  items=3 - Social media automation CLI for scheduling posts, managing integrations, uploadi
- TheQtCompanyRnD/agent-skills [plugin] *515*  items=3 - Agentic engineering skills for Qt software development — Qt C++/QML code review,

## Top 30 by stars: listed
- DietrichGebert/ponytail [plugin] *181066*  items=2 - Lazy senior dev mode. Forces the simplest, shortest solution that actually works
- JuliusBrussee/caveman [plugin,skill] *116367*  items=2 - Auto-activation works differently per agent: Claude Code uses SessionStart hooks
- thedotmack/claude-mem [plugin,skill] *106572*  items=3 - Persistent memory system for Claude Code - seamlessly preserve context across se
- pbakaus/impeccable [plugin] *97301*  items=1 - Great design prompts require design vocabulary. Most people don't have it. You c
- Egonex-AI/Understand-Anything [plugin,skill] *89161*  items=2 - Understand Anything is a Claude Code plugin that analyzes your project with a mu
- mem0ai/mem0 [plugin] *68129* ['product-stars'] items=1 - Connect Mem0 to Claude to give your agent persistent memory across sessions. Cla
- mvanhorn/last30days-skill [plugin] *66032*  items=1 - last-30-days is a Claude Code skill that searches the web and delivers a structu
- coreyhaines31/marketingskills [plugin,skill] *57548*  items=3 - coreyhaines31
- DayuanJiang/next-ai-draw-io [plugin,mcp-server] *36508*  items=2 - AI-powered Draw.io diagram generation with real-time browser preview. Create flo
- mksglu/context-mode [plugin] *32960*  items=1 - MCP is the protocol for tool access. We're the virtualization layer for context.
- jarrodwatts/claude-hud [plugin,collection] *29042*  items=2 - Real-time statusline HUD for Claude Code - context health, tool activity, agent 
- alirezarezvani/claude-skills [plugin,skill] *29039*  items=2 - Playwright Pro turns your AI coding agent into a senior test automation engineer
- promptfoo/promptfoo [plugin] *26659*  items=1 - Teaches AI coding agents to create and maintain promptfoo eval suites. Encodes b
- AgriciDaniel/claude-seo [plugin] *24613*  items=1 - Comprehensive SEO analysis plugin for Claude Code. Performs full site audits wit
- browser-use/browser-harness [plugin] *18771*  items=1 - Open-source browser agent driven via CDP — direct browser control, 79K stars, YC
- Jeffallan/claude-skills [plugin,skill,collection] *12146*  items=3 - 66 specialized skills for full-stack development: 12 language experts (Python, T
- nicobailon/visual-explainer [plugin,collection] *10707*  items=3 - An agent skill that turns complex terminal output into styled HTML pages you act
- revfactory/harness [plugin,agent] *9293*  items=3 - Harness leverages Claude Code's agent team system to decompose complex tasks int
- Eventual-Inc/Daft [plugin] *5818* ['product-stars'] items=1 - Skills for working with Daft, a high-performance data engine for AI and multimod
- clidey/whodb [plugin] *5048* ['product-stars'] items=1 - Database management tools for Claude Code. Query databases, explore schemas, ana
- nyldn/claude-octopus [plugin] *4340*  items=2 - Multi-LLM orchestration for Claude Code and Cowork. Coordinates 8 AI providers (
- giancarloerra/SocratiCode [plugin,mcp-server] *3362*  items=2 - Enterprise-grade (40m+ lines) codebase intelligence in a zero-setup, private and
- Chachamaru127/claude-code-harness [plugin,marketplace,agent] *3191*  items=5 - Autonomous Plan → Work → Review cycle for Claude Code. Go-native engine with 25×
- AgriciDaniel/claude-blog [plugin] *2592*  items=1 - AI-powered blog creation and optimization skill with 20 commands, 4 specialized 
- fabio-rovai/open-ontologies [plugin] *2456* ['star-spike'] items=1 - AI-native ontology engineering with 39 MCP tools backed by an in-memory Oxigraph
- nizos/tdd-guard [plugin,collection] *2373*  items=2 - Enforces Test-Driven Development by intercepting file operations in Claude Code.
- AminForou/mcp-gsc [plugin] *2072*  items=1 - Connect Google Search Console to Claude Code. Query rankings, inspect URLs, audi
- severity1/claude-code-prompt-improver [plugin] *1965*  items=1 - Intelligent prompt optimization using skill-based architecture. Enriches vague p
- kenryu42/cc-safety-net [plugin,collection] *1860*  items=3 - Block destructive git and filesystem commands before execution
- codeaholicguy/ai-devkit [plugin] *1655*  items=1 - A structured software development toolkit that helps Claude Code follow senior-e

## Top 30 by stars: verified
- morluto/rea [mcp-server] *412936*  items=1 - Reverse engineer anything from your terminal or agent with one CLI and MCP serve
- affaan-m/ECC [collection] *293510*  items=1 - Top-notch, well-written resources covering "just about everything" from core eng
- firecrawl/firecrawl [skill] *197169* ['product-stars'] items=1 - Supercharge your AI agents with data from the web and beyond. Building the libra
- vercel/next.js [marketplace] *143229* ['product-stars'] items=1 - The React Framework
- nextlevelbuilder/ui-ux-pro-max-skill [marketplace] *143103*  items=1 - An AI skill that provides design intelligence for building professional UI/UX ac
- garrytan/gstack [agent] *138356*  items=1 - Garry Tan's (Y Combinator) Claude Code setup and "open source software factory" 
- browser-use/browser-use [mcp-server] *119614*  items=1 - Browser agents and stealth cloud browsers for AI: run web tasks, fill forms, ext
- addyosmani/agent-skills [marketplace] *112029*  items=1 - Production-grade engineering skills for AI coding agents.
- paperclipai/paperclip [skill,mcp-server] *109033*  items=2 - The open-source app everyone uses to manage agents at work
- Leonxlnx/taste-skill [marketplace] *106454*  items=1 - Agent skills that give coding agents taste: art direction, reference images and 
- nexu-io/open-design [marketplace] *105079*  items=1 - The 1st Collaborative AI Design Agent Workspace. Local-first and open source. Cr
- ruvnet/RuView [marketplace] *101788*  items=1 - π RuView turns commodity WiFi signals into real-time spatial intelligence, vital
- debpalash/VoiceStudio [skill] *95941* ['product-stars'] items=1 - VoiceStudio is the open-source, fully-local ElevenLabs alternative — voice cloni
- tt-a1i/archify [skill,collection] *91892*  items=2 - An Agent Skill for Claude Code that generates interactive architecture, workflow
- storybookjs/storybook [marketplace] *91412* ['product-stars'] items=1 - Storybook is the industry standard workshop for building, documenting, and testi
- D4Vinci/Scrapling [mcp-server] *90505*  items=1 - Web scraping with stealth HTTP, real browsers, and Cloudflare bypass. CSS select
- koala73/worldmonitor [skill,mcp-server] *89817* ['product-stars'] items=2 - Real-time global intelligence dashboard. AI-powered news aggregation, geopolitic
- bytedance/deer-flow [skill] *84743*  items=1 - An open-source long-horizon SuperAgent harness that researches, codes, and creat
- netdata/netdata [mcp-server] *81228*  items=1 - Real-time infrastructure monitoring with metrics, logs, alerts, and ML-based ano
- ruvnet/ruflo [marketplace,mcp-server] *80329*  items=2 - 🌊 The original agent harness. Deploy intelligent multi-player swarms, coordinate
- shareAI-lab/learn-claude-code [collection] *79595*  items=1 - A really interesting analysis of how coding agents like Claude Code are designed
- career-ops-hq/career-ops [plugin] *78927*  items=1 - Open-source AI job search agent and job finder: scan job boards, score each job 
- headroomlabs-ai/headroom [marketplace] *78396*  items=1 - Compress tool outputs, logs, files, and RAG chunks before they reach the LLM. 20
- ComposioHQ/awesome-claude-skills [skill] *78369*  items=1 - A curated list of awesome Claude Skills, resources, and tools for customizing Cl
- rohitg00/ai-engineering-from-scratch [skill] *75765* ['product-stars'] items=1 - Learn AI Engineering! Learn it. Build it. Ship it for others.
- thedaviddias/Front-End-Checklist [marketplace,mcp-server] *74609* ['product-stars'] items=2 - 🗂 The essential checklist for modern web development, for humans and AI agents
- calesthio/OpenMontage [skill] *73554*  items=1 - World's first open-source, agentic video production system. 12 production pipeli
- tw93/Mole [marketplace] *73396* ['product-stars'] items=1 - 🐹 Keep your Mac and PC clean, light, and running like new. Fast open-source CLI,
- usestrix/strix [skill] *72976* ['product-stars'] items=1 - Open-source AI penetration testing tool to find and fix your app’s vulnerabiliti
- hugohe3/ppt-master [marketplace] *71397* ['product-stars'] items=1 - AI turns documents or topics into real, native PowerPoint decks—with native shap

## Top 30 by stars: watch
- f/prompts.chat [marketplace] *175328* ['product-stars'] items=1 - f.k.a. Awesome ChatGPT Prompts. Share, discover, and collect prompts from the co
- opendatalab/MinerU [skill] *82834* ['product-stars'] items=1 - Transforms complex documents like PDFs and Office docs into LLM-ready markdown/J
- code-yeongyu/oh-my-openagent [skill] *70511* ['product-stars'] items=1 - OmO: Just type "mass ulw" keyword with your prompt. Now you are the master of gr
- bmad-code-org/BMAD-METHOD [skill] *54795* ['product-stars'] items=1 - Breakthrough Method for Agile Ai Driven Development
- Imbad0202/academic-research-skills [marketplace] *54691*  items=1 - Academic Research Skills for Claude Code: research → write → review → revise → f
- tldraw/tldraw [mcp-server] *51165*  items=1 - Draw and visually collaborate with your agents on tldraw's canvas.
- metabase/metabase [mcp-server] *50039*  items=1 - Lets AI clients search, explore, query, and visualize data in a Metabase instanc
- abhigyanpatwari/GitNexus [marketplace] *48140* ['product-stars'] items=1 - GitNexus: The Zero-Server Code Intelligence Engine
- serverless/serverless [skill] *46927* ['product-stars'] items=1 - ⚡ Serverless Framework – Effortlessly build apps that auto-scale, incur zero cos
- PostHog/posthog [mcp-server] *40537*  items=1 - Official PostHog MCP Server for product analytics, feature flags, experiments, a
- openai/codex-plugin-cc [marketplace] *34745*  items=1 - Use Codex from Claude Code to review code or delegate tasks.
- zarazhangrui/frontend-slides [marketplace] *31622*  items=1 - Create beautiful slides on the web using a coding agent's frontend skills
- oraios/serena [mcp-server] *30891*  items=1 - A powerful toolkit for coding, providing semantic retrieval and editing capabili
- openai/skills [skill] *28423*  items=1 - Skills Catalog for Codex
- vercel/ai [skill] *27637* ['product-stars'] items=1 - The AI Toolkit for TypeScript. From the creators of Next.js, the AI SDK is a fre
- hypit-ai/hypit [skill] *26941* ['product-stars'] items=1 - Clone any viral video with AI agents. Not just a script, the whole workflow: swa
- clockworklabs/SpacetimeDB [marketplace] *25458* ['product-stars'] items=1 - Development at the speed of light
- different-ai/openwork [mcp-server] *24333*  items=1 - Your OpenWork org's skills, plugins, workflows, and connections through one OAut
- HKUDS/AI-Trader [skill] *23048* ['product-stars'] items=1 - "AI-Trader: 100% Fully-Automated Agent-Native Trading"
- getpaseo/paseo [skill] *22561*  items=1 - Orchestrate multiple coding agents from desktop and mobile
- screenpipe/screenpipe [mcp-server] *22184*  items=1 - Search your local screen recordings, audio transcripts, and computer activity fr
- agent0ai/agent-zero [skill] *19611* ['product-stars'] items=1 - Agent Zero AI framework
- longbridge/gpui-kit [skill] *18814* ['product-stars'] items=1 - Rust GUI components for building fantastic cross-platform desktop application by
- Canner/WrenAI [skill] *18022* ['product-stars'] items=1 - GenBI (Generative BI) for AI agents, an open-source, governed text-to-SQL throug
- greensock/gsap-skills [marketplace] *17603*  items=1 - Official AI skills for GSAP. These skills teach AI coding agents how to correctl
- architecture-decision-record/architecture-decision-record [skill] *17368* ['product-stars'] items=1 - Architecture decision record (ADR) examples for software planning, IT leadership
- composio-community/awesome-codex-skills [skill] *17142*  items=1 - A curated list of practical Codex skills for automating workflows across the Cod
- ParadevAI/Paradev [marketplace] *15766*  items=1 - Superset is an agentic IDE to orchestrate 100+ coding agents in parallel. Run an
- millionco/react-doctor [skill] *15070* ['product-stars'] items=1 - Your agent writes bad React. This catches it
- kyegomez/OpenMythos [plugin] *14912*  items=1 - A theoretical reconstruction of the Claude Mythos architecture, built from first

## Random sample of 20 watch repos (of 470)
- stefan-jansen/claude-code-toolkit [skill] *91*  items=1 - Superseded by coding-agent-toolkit — see README. Preserved for reference: Claude reasons=['fails: pushed<=90d (115)'] src=['topic']
- sethblack/black-seo-analyzer [mcp-server] *61*  items=1 - Audit a page or crawl a whole site for technical SEO issues, locally. Compares c reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- MiniMax-AI/MiniMax-H3 [skill] *11014* ['product-stars'] items=1 -  reasons=['fails: license (None)'] src=['topic']
- sachitrafa/YourMemory [mcp-server] *271*  items=2 - Ebbinghaus-based persistent memory for Claude. Memories decay with time, strengt reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- grarcht/Shuttle [mcp-server] *87*  items=1 - Android framework and solution that prevents TransactionTooLargeException crashe reasons=['no corroborating signal'] src=['mcp-registry']
- tractorjuice/arc-kit [marketplace] *2266*  items=1 - The Enterprise Architecture Governance Harness — strategy, architecture, deliver reasons=['fails: license (NOASSERTION)'] src=['topic']
- joshua-zyy/academic-paper-writer [marketplace] *115*  items=1 - 面向 CS / AI / ML 领域的证据驱动、分节推进的论文写作 Agent Skill。 reasons=['no corroborating signal'] src=['topic']
- rasinmuhammed/misata [mcp-server] *72*  items=1 - Declarative synthetic data: multi-table data that holds the facts you declare, c reasons=['no corroborating signal'] src=['mcp-registry']
- Dammyjay93/interface-design [marketplace] *5881*  items=1 - Design engineering for Claude Code. Craft, memory, and enforcement for consisten reasons=['fails: pushed<=90d (132)'] src=['topic']
- santimattius/structured-coroutines [plugin] *165*  items=1 - The definitive toolkit for enforcing safety, predictability, and efficiency in K reasons=['no corroborating signal'] src=['code']
- LeoKemp223/NextBoard [plugin] *395*  items=1 - 面向硬件产品PCB方案设计的AI Agent，Agent会自动帮你进行需求确认，实时分析国内外各类芯片技术方案，进行器件选型，下载datasheet，输出BOM reasons=['fails: pushed<=90d (179)'] src=['code']
- lennney/mcp-slim-guard [mcp-server] *182*  items=1 - 76% fewer MCP tokens in our standard benchmark. Same upstream call. Exact recove reasons=['no corroborating signal'] src=['mcp-registry']
- opendatalab/MinerU [skill] *82834* ['product-stars'] items=1 - Transforms complex documents like PDFs and Office docs into LLM-ready markdown/J reasons=['fails: license (NOASSERTION)'] src=['topic']
- JoelLewis/finance_skills [marketplace] *218*  items=1 - Claude Code skill plugins for financial services — 81 skills across 7 domain plu reasons=['fails: pushed<=90d (104)'] src=['topic']
- igorzheludkov/execbro [mcp-server] *80*  items=2 - Gives AI agents eyes and hands into running React Native apps: logs, REPL, tap,  reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- kesslerio/attio-mcp-server [mcp-server] *69*  items=3 - Connect AI to your Attio CRM. Manage contacts, companies, deals, and sales pipel reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- kubeshop/testkube [mcp-server] *1677*  items=1 - MCP server for Testkube - Manage test workflows, executions, and artifacts via A reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- popmechanic/VibesOS [plugin] *135*  items=1 - A GUI for Claude Code that makes it easy to vibe code simple, un-hackable apps reasons=['fails: pushed<=90d (95)'] src=['code']
- mliu98/awesome-human-distillation [skill] *760*  items=1 - A curated catalog of human distillliation agent skills reasons=['fails: license (None)'] src=['topic']
- av/facts [skill] *207*  items=1 - Antidote for fluffy specs, a toolkit for fact-driven development with AI agents reasons=['fails: pushed<=90d (149)'] src=['topic']

## Errors
- graphql: HTTP 504 after 4 retries <!DOCTYPE html>
<!--

Hello future GitHubber! I bet you're here to remove tho
- broad verify subfolders chunk 2: no data None

## Rate limit
- REST calls this run (uncached): {"core": 13, "search": 42}; last seen: {"core": {"remaining": "4987", "limit": "5000"}, "search": {"remaining": "7", "limit": "30"}}
- GraphQL: 108 calls, cost 68, remaining 4848/5000, stopped early: False
- REST stopped early: False
- repos lacking metadata: 3878; enriched this run: 32653