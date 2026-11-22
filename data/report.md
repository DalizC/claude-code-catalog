# Catalog report 2026-11-22
Mode: **token**; run time 1633s
Repos (deduped): 3377; flat entries before dedup: 26058

## Tier x type BEFORE dedup (flat entries)
- new/mcp-server: 15891
- watch/mcp-server: 2703
- listed/plugin: 2283
- verified/mcp-server: 1358
- verified/skill: 498
- watch/skill: 467
- watch/marketplace: 419
- official/plugin: 375
- verified/marketplace: 361
- watch/plugin: 285
- watch/agent: 210
- verified/plugin: 200
- verified/collection: 194
- new/marketplace: 175
- new/skill: 170
- anthropic/plugin: 150
- new/plugin: 146
- verified/agent: 56
- new/agent: 38
- anthropic/marketplace: 15
- anthropic/collection: 4
- watch/collection: 3
- anthropic/agent: 1

## Tier AFTER dedup (repos)
- verified: 1947
- watch: 504
- new: 360
- official: 256
- listed: 162
- anthropic: 148

## Type AFTER dedup (items)
- mcp-server: 1839
- plugin: 1221
- skill: 798
- marketplace: 518
- collection: 122
- agent: 61

## Primary type AFTER dedup (repos)
- mcp-server: 1210
- plugin: 834
- skill: 740
- marketplace: 459
- collection: 86
- agent: 48

## Repos by discovery source family
- mcp-registry: 1370
- topic: 1352
- anthropic: 461
- code: 208
- anthropic-org: 188
- curated: 150
- marketplace-expansion: 35

## Flags (all tiers)
- product-stars: 238
- star-spike: 18
- star-anomaly: 1

## star-anomaly by tier
- new: 1

## Metadata gaps
- repos without metadata: 154
- reasons: {'unfetched': 154}

## MCP-only repos excluded: 56
- n8n-io/n8n *211678* ['automation', 'ipaas', 'n8n', 'workflow', 'typescript'] - Fair-code workflow automation platform with native AI capabilities. Combine visu
- assafelovic/gpt-researcher *30820* ['ai', 'python', 'agent', 'automation', 'research'] - An autonomous agent that conducts deep research on any data using any LLM provid
- rocketride-org/rocketride-server *19999* ['cpp', 'mcp', 'vscode-extension', 'agent-framework', 'agent-harness'] - High-performance AI pipeline engine with a C++ core and 50+ Python-extensible no
- mrexodia/ida-pro-mcp *13540* ['ida-plugin', 'ida-pro', 'mcp', 'mcp-server', 'modelcontextprotocol'] - AI-powered reverse engineering assistant that bridges IDA Pro with language mode
- mcp-use/mcp-use *11003* ['mcp', 'model-context-protocol', 'apps-sdk', 'mcp-apps', 'mcp-inspector'] - The fullstack MCP framework to develop MCP Apps for ChatGPT / Claude & MCP Serve
- Agents365-ai/drawio-skill *10890* ['drawio', 'diagram', 'agent-skills', 'architecture-diagram', 'claude-code'] - Agent skill that turns natural language, code, Terraform/K8s, SQL, OpenAPI, Asyn
- qybaihe/bla *6389* ['adversarial-ai', 'claude-code', 'cursor', 'electron-security', 'llm-security'] - 🛡️ BLA (bla-agents / Blind LLM Agents) — Open-source Blue Defense MCP server & C
- Marker-Inc-Korea/AutoRAG *6145* ['document-parser', 'embeddings', 'llm', 'open-source', 'rag'] - Your Personal Librarian Agent. Ask anything on your computer, organize files, re
- jordan-gibbs/hyperresearch *4981* ['agents', 'agentskills', 'claude-code', 'deep-research', 'deep-research-agent'] - Convert Claude Code or Codex into the most intelligent Deep Research Agent. Coll
- stickerdaniel/linkedin-mcp-server *4275* ['linkedin', 'linkedin-scraper', 'mcp', 'mcp-server', 'linkedin-mcp'] - Open-source MCP server for LinkedIn. Give Claude and any MCP-compatible AI agent
- taylorwilsdon/google_workspace_mcp *3561* ['ai', 'gmail', 'google-calendar', 'google-workspace', 'llm'] - Control Gmail, Google Calendar, Docs, Sheets, Slides, Chat, Forms, Tasks, Search
- duty1g/x64dbg-mcp-server *2855* ['ai-agents', 'ai-debugging', 'binary-analysis', 'claude', 'claude-code'] - x64dbg-MCP Server is a native MCP (Model Context Protocol) plugin for x64dbg tha
- alpic-ai/skybridge *2200* ['agent', 'ai', 'apps-sdk', 'chatgpt', 'claude'] - Skybridge is a full-stack TypeScript framework for MCP Apps and ChatGPT Apps. Ty
- study8677/repobrain *1361* ['claude-code', 'codex-cli', 'developer-tools', 'mcp-server', 'windsurf'] - 🧠 RepoBrain (formerly Antigravity) — Give your repo a brain. ChatGPT for your co
- dansugc/reverse-engineer-marketing *1033* ['ad-library', 'ai-agents', 'claude-code', 'codex', 'competitor-analysis'] - Paste a link, get the whole marketing machine behind it: paid ads, organic socia

## Degradation
- registry complete: True (700 pages, 69945 entries)
- MCP servers merged from the previous catalog (not re-fetched): 0
- GraphQL 403s: 0 (secondary rate limit: 0); retries: 6; queries that gave up: 1
- HTTP retries (5xx/network): 0
- repos with stale metadata reused from the previous catalog (meta_stale): 0

## MCP Registry
- {"pages": 700, "fetched": 69945, "kept": 68821, "dropped": 1124, "bad": 0, "complete": true, "excluded_remote_only": 25353, "excluded_low_signal": 23516, "fallback_merged": 0, "records": 1370, "attached_existing": 167, "new_repo": 1203, "remote_only": 0, "tiers": {"official": 27, "listed": 20, "verified": 984, "new": 140, "watch": 199}}

## Top 20 by trend_7d
- morluto/rea +12735 (2.77%) []
- elementalsouls/Claude-BugHunter +10487 (179.02%) ['star-spike']
- GoogleChrome/modern-web-guidance +8960 (56.98%) ['star-spike', 'product-stars']
- obra/superpowers +6130 (1.93%) []
- DietrichGebert/ponytail +5461 (2.86%) []
- mattpocock/skills +5293 (1.63%) []
- debpalash/VoiceStudio +5264 (4.75%) ['product-stars']
- affaan-m/ECC +5220 (1.72%) []
- nexu-io/openmotion +4857 (48.74%) ['star-spike']
- firecrawl/firecrawl +4518 (2.24%) ['product-stars']
- mvanhorn/last30days-skill +4449 (6.57%) []
- pbakaus/impeccable +4297 (3.9%) []
- Leonxlnx/taste-skill +4055 (3.5%) []
- Nutlope/hallmark +4025 (7.3%) []
- cloudflare/security-audit-skill +4021 (5.53%) []
- anthropics/skills +3891 (2.0%) []
- kajisho5/ffmpeg-skill +3740 (66.55%) ['star-spike']
- heydamir/unslop +3723 (23.09%) []
- alibaba/open-code-review +3642 (7.07%) []
- meta/astryx +3625 (12.82%) ['product-stars']

## Code search vs topic search
- repos found by code search: 208
- also in topic search: 11
- code-only: 183; tiers: {'anthropic': 1, 'verified': 91, 'watch': 57, 'new': 34}

## Top 30 by stars: anthropic
- anthropics/skills [marketplace,collection] *198591*  items=2 - Anthropic example skills
- anthropics/claude-code [marketplace,agent] *156599*  items=2 - Anthropic's Claude Code plugins, installed from the claude-plugins-official repo
- anthropics/claude-plugins-official [plugin,marketplace,collection] *47923*  items=15 - Directory of popular Claude Code extensions including development tools, product
- anthropics/financial-services [marketplace] *41446*  items=1 - 
- anthropics/knowledge-work-plugins [marketplace] *36660*  items=1 - 
- anthropics/claude-for-legal [marketplace] *10060*  items=1 - Reference agents, skills, and data connectors for the legal workflows we see mos
- anthropics/claude-code-action [collection] *10044*  items=1 - The official GitHub Action for running Claude Code in CI: mention @claude in iss
- anthropics/claude-code-security-review [collection] *7050*  items=1 - An official AI-powered security-review GitHub Action that uses Claude to analyze
- anthropics/claude-plugins-community [marketplace] *4931*  items=1 - 
- anthropics/commerce-agents [marketplace] *3499*  items=1 - Claude Commerce Agents: the commerce-builder plugin for building shopping and me
- anthropics/life-sciences [marketplace] *654*  items=1 - Skills for life sciences research, data analysis, and discovery
- anthropics/k12-teacher-skills [marketplace] *635*  items=1 - Plugin marketplace for K-12 Education and Claude for Teachers.
- anthropics/healthcare [marketplace] *456*  items=1 - Claude for Healthcare — one plugin bundling payer, provider, pharma, and general
- anthropics/oncall-kit [marketplace] *276*  items=1 - 
- anthropics/claude-for-financial-advisors [plugin,marketplace] *164*  items=2 - Ready-to-run workflows for financial advisors in Claude Cowork, drawing live dat
- anthropics/claude-tag-plugins [marketplace] *77*  items=1 - Plugins that connect Claude Tag to common SaaS services, plus charting and confi
- anthropics/claude-plugins-official [plugin] *None*  items=1 - Development kit for working with the Claude Agent SDK
- anthropics/claude-plugins-official [plugin] *None*  items=1 - Help Claude Code champions run hackathons and office hours, find patterns worth 
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

## Top 30 by stars: official
- mattpocock/skills [plugin] *329878*  items=2 - Matt Pocock's agent skills for real engineering — grilling, spec/ticket flows, T
- obra/superpowers [plugin,skill] *323849*  items=4 - Superpowers teaches Claude brainstorming, subagent driven development with built
- heygen-com/hyperframes [plugin,mcp-server] *87917*  items=3 - HyperFrames by HeyGen. Write HTML, render video. Compositions, GSAP and runtime 
- ChromeDevTools/chrome-devtools-mcp [plugin,mcp-server] *58721*  items=4 - Control and inspect a live Chrome browser from your coding agent. Record perform
- GoogleChrome/modern-web-guidance [plugin] *24684* ['star-spike', 'product-stars'] items=2 - Keep your coding agent up to date with the latest web best practices
- confident-ai/deepeval [plugin] *19588* ['product-stars'] items=1 - Skills for adding DeepEval evaluations, tracing, datasets, Confident AI reports,
- huggingface/skills [plugin] *11381*  items=2 - Build, train, evaluate, and use open source AI models, datasets, and spaces.
- wonderwhy-er/DesktopCommanderMCP [plugin,mcp-server] *10385*  items=4 - MCP server for terminal commands, process management, and file operations across
- Eigenwise/atomic-agents [plugin,marketplace] *6344* ['product-stars'] items=3 - Comprehensive development workflow for building AI agents with the Atomic Agents
- exa-labs/exa-mcp-server [plugin,mcp-server] *5253*  items=3 - Exa AI web search, deep research, and content extraction. Provides MCP tools and
- expo/skills [plugin] *4206*  items=2 - Official Expo skills for building, deploying, upgrading, and debugging React Nat
- NVIDIA/skills [plugin] *4107*  items=2 - Find the right NVIDIA skill for GPU acceleration, CUDA, AI agents, data loading,
- aws/agent-toolkit-for-aws [plugin] *3538*  items=8 - Build, deploy, and operate AI agents on AWS. Skills for scaffolding agents with 
- cloudflare/skills [plugin] *3425*  items=2 - Skills for the Cloudflare developer platform: Workers, Durable Objects, Agents S
- modelcontextprotocol/ext-apps [plugin] *3131*  items=3 - Skills for creating MCP Apps with the MCP Apps SDK
- figma/mcp-server-guide [plugin,mcp-server] *2221*  items=4 - Figma design platform integration. Access design files, extract component inform
- stripe/ai [plugin,mcp-server] *2077*  items=3 - Stripe development plugin for Claude
- EpicGames/unreal-engine-skills-for-claude-code-plugin [plugin] *2009*  items=2 - Control Unreal Editor directly from Claude Code via MCP. Hundreds of tools expos
- MicrosoftDocs/mcp [plugin,mcp-server] *2002*  items=3 - Access official Microsoft documentation, API references, and code samples for Az
- microsoft/azure-skills [plugin] *1664*  items=2 - Transform Claude into an Azure expert. This plugin integrates the Azure MCP serv
- atlassian/atlassian-mcp-server [plugin,mcp-server] *1185*  items=3 - Connect to Atlassian products including Jira and Confluence. Search and create i
- forcedotcom/sf-skills [plugin,skill] *1183*  items=2 - Build Salesforce apps and agents using these core building blocks: metadata, Ape
- superdesigndev/superdesign-skill [plugin,skill] *1044*  items=2 - Design or redesign frontend UI and marketing graphics on the Superdesign infinit
- awslabs/agent-plugins [plugin] *948*  items=10 - Guide developers through adding maps, places search, geocoding, routing, and oth
- Unity-Technologies/unity-agent-plugin [plugin] *662*  items=2 - Unity's official plugin for Claude Code, with curated skills for game developmen
- Shopify/Shopify-AI-Toolkit [plugin] *652*  items=2 - Shopify's AI Toolkit provides 18 development skills for building on the Shopify 
- duckdb/duckdb-skills [plugin] *619*  items=2 - DuckDB-powered skills for Claude Code: read any data file, attach and query Duck
- gitroomhq/postiz-agent [plugin] *586*  items=3 - Social media automation CLI for scheduling posts, managing integrations, uploadi
- ClickHouse/agent-skills [plugin] *574*  items=2 - 28 best practice rules for ClickHouse schema design, query optimization, and dat
- TheQtCompanyRnD/agent-skills [plugin] *556*  items=3 - Agentic engineering skills for Qt software development — Qt C++/QML code review,

## Top 30 by stars: listed
- DietrichGebert/ponytail [plugin] *196474*  items=2 - Lazy senior dev mode. Forces the simplest, shortest solution that actually works
- JuliusBrussee/caveman [plugin,skill] *122013*  items=2 - Auto-activation works differently per agent: Claude Code uses SessionStart hooks
- thedotmack/claude-mem [plugin,skill] *118878*  items=3 - Persistent memory system for Claude Code - seamlessly preserve context across se
- pbakaus/impeccable [plugin] *114614*  items=1 - Great design prompts require design vocabulary. Most people don't have it. You c
- Egonex-AI/Understand-Anything [plugin,skill] *93574*  items=2 - Understand Anything is a Claude Code plugin that analyzes your project with a mu
- mvanhorn/last30days-skill [plugin] *72137*  items=1 - last-30-days is a Claude Code skill that searches the web and delivers a structu
- mem0ai/mem0 [plugin] *69319* ['product-stars'] items=1 - Connect Mem0 to Claude to give your agent persistent memory across sessions. Cla
- coreyhaines31/marketingskills [plugin,skill] *61916*  items=3 - coreyhaines31
- DayuanJiang/next-ai-draw-io [plugin,mcp-server] *37108*  items=2 - AI-powered Draw.io diagram generation with real-time browser preview. Create flo
- mksglu/context-mode [plugin] *34370*  items=1 - MCP is the protocol for tool access. We're the virtualization layer for context.
- AgriciDaniel/claude-seo [plugin] *31442*  items=1 - Comprehensive SEO analysis plugin for Claude Code. Performs full site audits wit
- alirezarezvani/claude-skills [plugin,skill] *30257*  items=2 - Playwright Pro turns your AI coding agent into a senior test automation engineer
- jarrodwatts/claude-hud [plugin,collection] *29283*  items=2 - Real-time statusline HUD for Claude Code - context health, tool activity, agent 
- promptfoo/promptfoo [plugin] *27524*  items=1 - Teaches AI coding agents to create and maintain promptfoo eval suites. Encodes b
- browser-use/browser-harness [plugin] *19188*  items=1 - Open-source browser agent driven via CDP — direct browser control, 79K stars, YC
- Jeffallan/claude-skills [plugin,skill,collection] *12476*  items=3 - 66 specialized skills for full-stack development: 12 language experts (Python, T
- nicobailon/visual-explainer [plugin,collection] *11217*  items=3 - An agent skill that turns complex terminal output into styled HTML pages you act
- revfactory/harness [plugin,agent] *9389*  items=3 - Harness leverages Claude Code's agent team system to decompose complex tasks int
- Eventual-Inc/Daft [plugin] *5858* ['product-stars'] items=1 - Skills for working with Daft, a high-performance data engine for AI and multimod
- clidey/whodb [plugin] *5065* ['product-stars'] items=1 - Database management tools for Claude Code. Query databases, explore schemas, ana
- nyldn/claude-octopus [plugin] *4484*  items=2 - Multi-LLM orchestration for Claude Code and Cowork. Coordinates 8 AI providers (
- giancarloerra/SocratiCode [plugin,mcp-server] *3380*  items=2 - Enterprise-grade (40m+ lines) codebase intelligence in a zero-setup, private and
- Chachamaru127/claude-code-harness [plugin,marketplace,agent] *3219*  items=5 - Autonomous Plan → Work → Review cycle for Claude Code. Go-native engine with 25×
- fabio-rovai/open-ontologies [plugin] *2941*  items=1 - AI-native ontology engineering with 39 MCP tools backed by an in-memory Oxigraph
- AgriciDaniel/claude-blog [plugin] *2835*  items=1 - AI-powered blog creation and optimization skill with 20 commands, 4 specialized 
- nizos/tdd-guard [plugin,collection] *2384*  items=2 - Enforces Test-Driven Development by intercepting file operations in Claude Code.
- AminForou/mcp-gsc [plugin] *2259*  items=1 - Connect Google Search Console to Claude Code. Query rankings, inspect URLs, audi
- kenryu42/cc-safety-net [plugin,collection] *2088*  items=3 - Block destructive git and filesystem commands before execution
- severity1/claude-code-prompt-improver [plugin] *1972*  items=1 - Intelligent prompt optimization using skill-based architecture. Enriches vague p
- aklofas/kicad-happy [plugin] *1725*  items=1 - KiCad electronics design skills. Analyze schematics, review PCB layouts, downloa

## Top 30 by stars: verified
- morluto/rea [marketplace,mcp-server] *473023*  items=2 - Reverse engineer anything with agents, from app behavior down to native binaries
- affaan-m/ECC [collection] *308470*  items=1 - Top-notch, well-written resources covering "just about everything" from core eng
- firecrawl/firecrawl [skill] *206375* ['product-stars'] items=1 - Supercharge your AI agents with data from the web and beyond. Building the libra
- nextlevelbuilder/ui-ux-pro-max-skill [marketplace] *152567*  items=1 - An AI skill that provides design intelligence for building professional UI/UX ac
- vercel/next.js [marketplace] *143601* ['product-stars'] items=1 - The React Framework
- garrytan/gstack [agent] *142298*  items=1 - Garry Tan's (Y Combinator) Claude Code setup and "open source software factory" 
- browser-use/browser-use [mcp-server] *121698*  items=1 - Browser agents and stealth cloud browsers for AI: run web tasks, fill forms, ext
- Leonxlnx/taste-skill [marketplace] *119802*  items=1 - Agent skills that give coding agents taste: art direction, reference images and 
- addyosmani/agent-skills [marketplace] *119621*  items=1 - Production-grade engineering skills for AI coding agents.
- debpalash/VoiceStudio [skill] *116059* ['product-stars'] items=1 - VoiceStudio is the open-source, fully-local ElevenLabs alternative — voice cloni
- paperclipai/paperclip [skill,mcp-server] *115714*  items=2 - The open-source app everyone uses to manage agents at work
- nexu-io/open-design [marketplace] *108868*  items=1 - The 1st Collaborative AI Design Agent Workspace. Local-first and open source. Cr
- D4Vinci/Scrapling [mcp-server] *104866*  items=1 - Web scraping with stealth HTTP, real browsers, and Cloudflare bypass. CSS select
- ruvnet/RuView [marketplace] *104756*  items=1 - π RuView turns commodity WiFi signals into real-time spatial intelligence, vital
- tt-a1i/archify [skill,collection] *98623*  items=2 - An Agent Skill for Claude Code that generates interactive architecture, workflow
- storybookjs/storybook [marketplace] *91675* ['product-stars'] items=1 - Storybook is the industry standard workshop for building, documenting, and testi
- koala73/worldmonitor [skill,mcp-server] *91026* ['product-stars'] items=2 - Real-time global intelligence dashboard. AI-powered news aggregation, geopolitic
- career-ops-hq/career-ops [plugin] *84081*  items=1 - Open-source AI job search agent and job finder: scan job boards, score each job 
- ruvnet/ruflo [marketplace,mcp-server] *82236*  items=3 - 🌊 The original agent harness. Deploy intelligent multi-player swarms, coordinate
- OpenMontageInc/OpenMontage [skill] *82182*  items=1 - World's first open-source, agentic video production system. 12 production pipeli
- netdata/netdata [mcp-server] *81577*  items=1 - Real-time infrastructure monitoring with metrics, logs, alerts, and ML-based ano
- shareAI-lab/learn-claude-code [collection] *80706*  items=1 - A really interesting analysis of how coding agents like Claude Code are designed
- headroomlabs-ai/headroom [marketplace] *80267*  items=1 - Compress tool outputs, logs, files, and RAG chunks before they reach the LLM. 20
- ComposioHQ/awesome-claude-skills [skill] *80023*  items=1 - A curated list of awesome Claude Skills, resources, and tools for customizing Cl
- rohitg00/ai-engineering-from-scratch [skill] *79784* ['product-stars'] items=1 - Learn AI Engineering! Learn it. Build it. Ship it for others.
- hugohe3/ppt-master [marketplace] *79112* ['product-stars'] items=1 - AI turns documents or topics into real, native PowerPoint decks—with native shap
- usestrix/strix [skill] *76944* ['product-stars'] items=1 - Open-source AI penetration testing tool to find and fix your app’s vulnerabiliti
- cloudflare/security-audit-skill [skill] *76764*  items=1 - A coding-agent skill for multi-phase security audits with independently verified
- tw93/Mole [marketplace] *75799* ['product-stars'] items=1 - 🐹 Open-source Mac and PC cleaner. Keep your machine clean, light, and running li
- thedaviddias/Front-End-Checklist [marketplace,mcp-server] *74791* ['product-stars'] items=2 - 🗂 The essential checklist for modern web development, for humans and AI agents

## Top 30 by stars: watch
- f/prompts.chat [marketplace] *178212* ['product-stars'] items=1 - f.k.a. Awesome ChatGPT Prompts. Share, discover, and collect prompts from the co
- opendatalab/MinerU [skill] *84115* ['product-stars'] items=1 - Transforms complex documents like PDFs and Office docs into LLM-ready markdown/J
- code-yeongyu/oh-my-openagent [skill] *71050* ['product-stars'] items=1 - OmO: Just type "mass ulw" keyword with your prompt. Now you are the master of gr
- Imbad0202/academic-research-skills [marketplace] *58016*  items=1 - Academic Research Skills for Claude Code: research → write → review → revise → f
- bmad-code-org/BMAD-METHOD [skill] *55611* ['product-stars'] items=1 - Breakthrough Method for Agile Ai Driven Development
- tldraw/tldraw [mcp-server] *51529*  items=1 - Draw and visually collaborate with your agents on tldraw's canvas.
- metabase/metabase [mcp-server] *50470*  items=1 - Lets AI clients search, explore, query, and visualize data in a Metabase instanc
- abhigyanpatwari/GitNexus [marketplace] *48721* ['product-stars'] items=1 - GitNexus: The Zero-Server Code Intelligence Engine
- serverless/serverless [skill] *46932* ['product-stars'] items=1 - ⚡ Serverless Framework – Effortlessly build apps that auto-scale, incur zero cos
- PostHog/posthog [mcp-server] *41010*  items=1 - Query analytics, manage feature flags and experiments, and investigate errors in
- phaserjs/phaser [skill] *40759* ['product-stars'] items=1 - Phaser is a fun, free and fast 2D game framework for making HTML5 games for desk
- openai/codex-plugin-cc [marketplace] *35341*  items=1 - Use Codex from Claude Code to review code or delegate tasks.
- zarazhangrui/frontend-slides [marketplace] *32744*  items=1 - Create beautiful slides on the web using a coding agent's frontend skills
- oraios/serena [mcp-server] *31589*  items=1 - A powerful toolkit for coding, providing semantic retrieval and editing capabili
- hypit-ai/hypit [skill] *30989* ['product-stars'] items=1 - Clone any viral video with AI agents. Not just a script, the whole workflow: swa
- openai/skills [skill] *28883*  items=1 - Skills Catalog for Codex
- vercel/ai [skill] *28121* ['product-stars'] items=1 - The AI Toolkit for TypeScript. From the creators of Next.js, the AI SDK is a fre
- clockworklabs/SpacetimeDB [marketplace] *25570* ['product-stars'] items=1 - Development at the speed of light
- nocobase/nocobase [skill] *24978*  items=1 - NocoBase is the open-source platform for building, running, and evolving busines
- getpaseo/paseo [skill] *24633*  items=1 - Orchestrate multiple coding agents from desktop and mobile
- different-ai/openwork [mcp-server] *24580*  items=1 - Your OpenWork org's skills, plugins, workflows, and connections through one OAut
- HKUDS/AI-Trader [skill] *23349* ['product-stars'] items=1 - "AI-Trader: 100% Fully-Automated Agent-Native Trading"
- screenpipe/screenpipe [mcp-server] *22501*  items=1 - Search your local screen recordings, audio transcripts, and computer activity fr
- longbridge/gpui-kit [skill] *21165* ['product-stars'] items=1 - Rust GUI components for building fantastic cross-platform desktop application by
- greensock/gsap-skills [marketplace] *18884*  items=1 - Official AI skills for GSAP. These skills teach AI coding agents how to correctl
- windmill-labs/windmill [mcp-server] *18673*  items=1 - Run Windmill scripts and flows and manage jobs, schedules, resources and variabl
- Canner/WrenAI [skill] *18359* ['product-stars'] items=1 - GenBI (Generative BI) for AI agents, an open-source, governed text-to-SQL throug
- architecture-decision-record/architecture-decision-record [skill] *17503* ['product-stars'] items=1 - Architecture decision record (ADR) examples for software planning, IT leadership
- composio-community/awesome-codex-skills [skill] *17385*  items=1 - A curated list of practical Codex skills for automating workflows across the Cod
- millionco/react-doctor [skill] *15176* ['product-stars'] items=1 - Your agent writes bad React. This catches it

## Random sample of 20 watch repos (of 504)
- amirfish1/claude-command-center [marketplace] *221*  items=1 - CCC puts coding agents on call for your product. Bugs from customers and monitor reasons=['fails: license (NOASSERTION)'] src=['topic']
- matlab/matlab-mcp-server [mcp-server] *1850*  items=1 - Connect AI coding agents to MATLAB. Run code, tests, and analysis via MCP. reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- composio-community/awesome-codex-skills [skill] *17385*  items=1 - A curated list of practical Codex skills for automating workflows across the Cod reasons=['fails: pushed<=90d (119)', 'fails: license (None)'] src=['topic']
- lukabudik/alza-mcp-community [mcp-server] *102*  items=1 - Unofficial MCP server for Alza.cz: catalog search plus token-guarded account and reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- screenpipe/screenpipe [mcp-server] *22501*  items=1 - Search your local screen recordings, audio transcripts, and computer activity fr reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- bergside/typeui [mcp-server] *2267*  items=1 - Design systems, UI prompts, and layout variations for AI coding tools. reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- e0ipso/strikethroo [plugin] *61*  items=1 - Task management for AI coding assistants reasons=['no corroborating signal'] src=['topic']
- apoorvjain25/frontier [marketplace] *80*  items=1 - Make Claude Opus, Sonnet, GPT, or Gemini produce work close to what Claude Fable reasons=['fails: pushed<=90d (140)'] src=['topic']
- luffysolution-svg/obsidian-vault-mcp [mcp-server] *95*  items=1 - Local Zotero, MinerU, Obsidian literature workflow with transactional Analysis n reasons=['fails: pushed<=90d (102)'] src=['mcp-registry']
- larashero3-dotcom/lieflat-less-ai-tone [skill] *8580*  items=1 - 一个基于 520 万字语料统计的去 AI 味 skill · An AI-tone removal skill grounded in a 5.2-millio reasons=['fails: license (NOASSERTION)'] src=['topic']
- brunoborges/jdb-agentic-debugger [plugin] *69*  items=1 - Agent Skill for debugging Java applications in real time using JDB (Java Debugge reasons=['fails: pushed<=90d (95)'] src=['code']
- backnotprop/bro [plugin] *194*  items=1 - Useful skills. reasons=['fails: license (None)'] src=['code']
- devantler-tech/ksail [mcp-server] *164*  items=1 - SDK for creating, managing, and operating Kubernetes clusters and workloads with reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- Dicklesworthstone/agent_flywheel_clawdbot_skills_and_integrations [skill] *73*  items=1 - Clawdbot skills for agentic coding workflows - ACFS stack, cloud CLIs, and dev t reasons=['fails: license (NOASSERTION)'] src=['topic']
- voidful/hung-yi-lee-skill [skill] *1323*  items=1 - 蒸餾李宏毅老師的skill，結合Karpathy的LLM，Fable 5和GPT6 加持 以及 本人親自訪談 reasons=['fails: pushed<=90d (102)'] src=['topic']
- kesslerio/attio-mcp-server [mcp-server] *68*  items=3 - Connect AI to your Attio CRM. Manage contacts, companies, deals, and sales pipel reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- KnockOutEZ/wigolo [skill,mcp-server] *5558*  items=2 - The go-to web for your AI coding agent — local-first search, fetch, crawl & rese reasons=['fails: license (NOASSERTION)'] src=['mcp-registry', 'topic']
- clarilayer/clarilayer [mcp-server] *68*  items=1 - Turns selected past conversations into durable context your AI can use across pr reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- NVIDIA-AI-IOT/inference_builder [plugin] *83*  items=1 - A tool for generating python inference pipeline reasons=['fails: pushed<=90d (130)'] src=['code']
- JuneYaooo/gpt-image2-ppt-skills [skill] *1475*  items=1 - Clone any .pptx into your own deck — OpenAI gpt-image-2 mimics the layout, you s reasons=['fails: pushed<=90d (91)'] src=['topic']

## Errors
- graphql: HTTP 504 after 4 retries <!DOCTYPE html>
<!--

Hello future GitHubber! I bet you're here to remove tho
- broad verify subfolders chunk 10: no data None

## Rate limit
- REST calls this run (uncached): {"core": 137, "search": 42}; last seen: {"core": {"remaining": "4863", "limit": "5000"}, "search": {"remaining": "29", "limit": "30"}}
- GraphQL: 184 calls, cost 76, remaining 4935/5000, stopped early: False
- REST stopped early: False
- repos lacking metadata: 4198; enriched this run: 37882