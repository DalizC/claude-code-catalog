# Catalog report 2026-11-25
Mode: **token**; run time 2184s
Repos (deduped): 3411; flat entries before dedup: 26359

## Tier x type BEFORE dedup (flat entries)
- new/mcp-server: 16174
- watch/mcp-server: 2720
- listed/plugin: 2280
- verified/mcp-server: 1366
- verified/skill: 496
- watch/skill: 462
- watch/marketplace: 419
- official/plugin: 375
- verified/marketplace: 368
- watch/plugin: 293
- watch/agent: 214
- verified/collection: 194
- verified/plugin: 188
- new/marketplace: 178
- new/skill: 172
- anthropic/plugin: 150
- new/plugin: 138
- verified/agent: 56
- new/agent: 37
- anthropic/marketplace: 15
- anthropic/collection: 4
- watch/collection: 3
- anthropic/agent: 1

## Tier AFTER dedup (repos)
- verified: 1962
- watch: 511
- new: 372
- official: 256
- listed: 162
- anthropic: 148

## Type AFTER dedup (items)
- mcp-server: 1861
- plugin: 1209
- skill: 794
- marketplace: 529
- collection: 121
- agent: 59

## Primary type AFTER dedup (repos)
- mcp-server: 1233
- plugin: 836
- skill: 737
- marketplace: 473
- collection: 86
- agent: 46

## Repos by discovery source family
- mcp-registry: 1393
- topic: 1361
- anthropic: 461
- code: 206
- anthropic-org: 188
- curated: 149
- marketplace-expansion: 35

## Flags (all tiers)
- product-stars: 240
- star-spike: 16

## star-anomaly by tier
- none: 0

## Metadata gaps
- repos without metadata: 154
- reasons: {'unfetched': 154}

## MCP-only repos excluded: 56
- n8n-io/n8n *212059* ['automation', 'ipaas', 'n8n', 'workflow', 'typescript'] - Fair-code workflow automation platform with native AI capabilities. Combine visu
- assafelovic/gpt-researcher *30895* ['ai', 'python', 'agent', 'automation', 'research'] - An autonomous agent that conducts deep research on any data using any LLM provid
- rocketride-org/rocketride-server *19989* ['cpp', 'mcp', 'vscode-extension', 'agent-framework', 'agent-harness'] - RocketRide is an open source AI meta-harness with the only enterprise-grade runt
- mrexodia/ida-pro-mcp *13570* ['ida-plugin', 'ida-pro', 'mcp', 'mcp-server', 'modelcontextprotocol'] - AI-powered reverse engineering assistant that bridges IDA Pro with language mode
- mcp-use/mcp-use *11005* ['mcp', 'model-context-protocol', 'apps-sdk', 'mcp-apps', 'mcp-inspector'] - The fullstack MCP framework to develop MCP Apps for ChatGPT / Claude & MCP Serve
- Agents365-ai/drawio-skill *10930* ['drawio', 'diagram', 'agent-skills', 'architecture-diagram', 'claude-code'] - Agent skill that turns natural language, code, Terraform/K8s, SQL, OpenAPI, Asyn
- qybaihe/bla *6770* ['adversarial-ai', 'claude-code', 'cursor', 'electron-security', 'llm-security'] - 🛡️ BLA (bla-agents / Blind LLM Agents) — Open-source Blue Defense MCP server & C
- Marker-Inc-Korea/AutoRAG *6164* ['document-parser', 'embeddings', 'llm', 'open-source', 'rag'] - Your Personal Librarian Agent. Ask anything on your computer, organize files, re
- jordan-gibbs/hyperresearch *5089* ['agents', 'agentskills', 'claude-code', 'deep-research', 'deep-research-agent'] - Convert Claude Code or Codex into the most intelligent Deep Research Agent. Coll
- stickerdaniel/linkedin-mcp-server *4306* ['linkedin', 'linkedin-scraper', 'mcp', 'mcp-server', 'linkedin-mcp'] - Open-source MCP server for LinkedIn. Give Claude and any MCP-compatible AI agent
- taylorwilsdon/google_workspace_mcp *3580* ['ai', 'gmail', 'google-calendar', 'google-workspace', 'llm'] - Control Gmail, Google Calendar, Docs, Sheets, Slides, Chat, Forms, Tasks, Search
- duty1g/x64dbg-mcp-server *2868* ['ai-agents', 'ai-debugging', 'binary-analysis', 'claude', 'claude-code'] - x64dbg-MCP Server is a native MCP (Model Context Protocol) plugin for x64dbg tha
- alpic-ai/skybridge *2203* ['agent', 'ai', 'apps-sdk', 'chatgpt', 'claude'] - Skybridge is a full-stack TypeScript framework for MCP Apps and ChatGPT Apps. Ty
- study8677/repobrain *1362* ['claude-code', 'codex-cli', 'developer-tools', 'mcp-server', 'windsurf'] - 🧠 RepoBrain (formerly Antigravity) — Give your repo a brain. ChatGPT for your co
- dansugc/reverse-engineer-marketing *1130* ['ad-library', 'ai-agents', 'claude-code', 'codex', 'competitor-analysis'] - Paste a link, get the whole marketing machine behind it: paid ads, organic socia

## Degradation
- registry complete: True (734 pages, 73336 entries)
- MCP servers merged from the previous catalog (not re-fetched): 0
- GraphQL 403s: 0 (secondary rate limit: 0); retries: 9; queries that gave up: 1
- HTTP retries (5xx/network): 0
- repos with stale metadata reused from the previous catalog (meta_stale): 0

## MCP Registry
- {"pages": 734, "fetched": 73336, "kept": 72225, "dropped": 1111, "bad": 0, "complete": true, "excluded_remote_only": 26796, "excluded_low_signal": 25169, "fallback_merged": 0, "records": 1393, "attached_existing": 166, "new_repo": 1227, "remote_only": 0, "tiers": {"official": 27, "listed": 20, "verified": 992, "new": 148, "watch": 206}}

## Top 20 by trend_7d
- elementalsouls/Claude-BugHunter +12055 (124.07%) ['star-spike']
- morluto/rea +10686 (2.29%) []
- erkamyaman/rust-anything +7566 (434.08%) ['star-spike']
- obra/superpowers +6482 (2.03%) []
- firecrawl/firecrawl +6447 (3.18%) ['product-stars']
- HKUDS/CLI-Anything +5804 (9.8%) ['product-stars']
- mattpocock/skills +5436 (1.66%) []
- mvanhorn/last30days-skill +5153 (7.44%) []
- debpalash/VoiceStudio +4920 (4.35%) ['product-stars']
- zhouxiaoka/autoclip +4874 (45.51%) ['star-spike', 'product-stars']
- nexu-io/openmotion +4866 (43.36%) ['star-spike']
- DietrichGebert/ponytail +4852 (2.51%) []
- affaan-m/ECC +4568 (1.49%) []
- cathrynlavery/diagram-design +4283 (6.3%) []
- pbakaus/impeccable +4059 (3.61%) []
- GoogleChrome/modern-web-guidance +3674 (16.5%) ['product-stars']
- Nutlope/hallmark +3646 (6.39%) []
- heygen-com/hyperframes +3603 (4.18%) []
- heydamir/unslop +3474 (19.42%) []
- Leonxlnx/taste-skill +3305 (2.8%) []

## Code search vs topic search
- repos found by code search: 206
- also in topic search: 9
- code-only: 183; tiers: {'anthropic': 1, 'verified': 93, 'watch': 55, 'new': 34}

## Top 30 by stars: anthropic
- anthropics/skills [marketplace,collection] *200088*  items=2 - Anthropic example skills
- anthropics/claude-code [marketplace,agent] *156975*  items=2 - Anthropic's Claude Code plugins, installed from the claude-plugins-official repo
- anthropics/claude-plugins-official [plugin,marketplace,collection] *48138*  items=15 - Directory of popular Claude Code extensions including development tools, product
- anthropics/financial-services [marketplace] *41505*  items=1 - 
- anthropics/knowledge-work-plugins [marketplace] *36823*  items=1 - 
- anthropics/claude-for-legal [marketplace] *10086*  items=1 - Reference agents, skills, and data connectors for the legal workflows we see mos
- anthropics/claude-code-action [collection] *10078*  items=1 - The official GitHub Action for running Claude Code in CI: mention @claude in iss
- anthropics/claude-code-security-review [collection] *7087*  items=1 - An official AI-powered security-review GitHub Action that uses Claude to analyze
- anthropics/claude-plugins-community [marketplace] *4951*  items=1 - 
- anthropics/commerce-agents [marketplace] *3527*  items=1 - Claude Commerce Agents: the commerce-builder plugin for building shopping and me
- anthropics/life-sciences [marketplace] *657*  items=1 - Skills for life sciences research, data analysis, and discovery
- anthropics/k12-teacher-skills [marketplace] *645*  items=1 - Plugin marketplace for K-12 Education and Claude for Teachers.
- anthropics/healthcare [marketplace] *459*  items=1 - Claude for Healthcare — one plugin bundling payer, provider, pharma, and general
- anthropics/oncall-kit [marketplace] *278*  items=1 - 
- anthropics/claude-for-financial-advisors [plugin,marketplace] *171*  items=2 - Ready-to-run workflows for financial advisors in Claude Cowork, drawing live dat
- anthropics/claude-tag-plugins [marketplace] *79*  items=1 - Plugins that connect Claude Tag to common SaaS services, plus charting and confi
- anthropics/claude-plugins-official [plugin] *None*  items=1 - Development kit for working with the Claude Agent SDK
- anthropics/claude-plugins-official [plugin] *None*  items=1 - Help Claude Code champions run hackathons and office hours, find patterns worth 
- anthropics/claude-plugins-official [plugin] *None*  items=1 - C/C++ language server (clangd) for code intelligence
- anthropics/claude-plugins-official [plugin] *None*  items=1 - Analyze codebases and recommend tailored Claude Code automations such as hooks, 
- anthropics/claude-plugins-official [plugin] *None*  items=1 - Tools to maintain and improve CLAUDE.md files - audit quality, capture session l
- anthropics/claude-plugins-official [plugin] *None*  items=1 - Find and fix vulnerabilities before attackers exploit them. A team of agents map
- anthropics/claude-plugins-official [plugin] *None*  items=1 - Guided modernization for any legacy codebase: start with /modernize, get an asse
- anthropics/claude-plugins-official [plugin] *None*  items=1 - Automated code review for pull requests using multiple specialized agents with c
- anthropics/claude-plugins-official [plugin] *None*  items=1 - Agent that simplifies and refines code for clarity, consistency, and maintainabi
- anthropics/claude-plugins-official [plugin] *None*  items=1 - Commands for git commit workflows including commit, push, and PR creation
- anthropics/claude-plugins-official [plugin] *None*  items=1 - C# language server for code intelligence
- anthropics/claude-plugins-official [plugin] *None*  items=1 - Onboard a Code-with-Claude Makers Cardputer with one /maker-setup command — clon
- anthropics/claude-plugins-official [plugin] *None*  items=1 - Adds educational insights about implementation choices and codebase patterns (mi
- anthropics/claude-plugins-official [plugin] *None*  items=1 - Comprehensive feature development workflow with specialized agents for codebase 

## Top 30 by stars: official
- mattpocock/skills [plugin] *332338*  items=2 - Matt Pocock's agent skills for real engineering — grilling, spec/ticket flows, T
- obra/superpowers [plugin,skill] *325971*  items=4 - Superpowers teaches Claude brainstorming, subagent driven development with built
- heygen-com/hyperframes [plugin,mcp-server] *89710*  items=3 - HyperFrames by HeyGen. Write HTML, render video. Compositions, GSAP and runtime 
- ChromeDevTools/chrome-devtools-mcp [plugin,mcp-server] *59247*  items=4 - Control and inspect a live Chrome browser from your coding agent. Record perform
- GoogleChrome/modern-web-guidance [plugin] *25943* ['product-stars'] items=2 - Keep your coding agent up to date with the latest web best practices
- confident-ai/deepeval [plugin] *19655* ['product-stars'] items=1 - Skills for adding DeepEval evaluations, tracing, datasets, Confident AI reports,
- huggingface/skills [plugin] *11397*  items=2 - Build, train, evaluate, and use open source AI models, datasets, and spaces.
- wonderwhy-er/DesktopCommanderMCP [plugin,mcp-server] *10413*  items=4 - MCP server for terminal commands, process management, and file operations across
- Eigenwise/atomic-agents [plugin,marketplace] *6347* ['product-stars'] items=3 - Comprehensive development workflow for building AI agents with the Atomic Agents
- exa-labs/exa-mcp-server [plugin,mcp-server] *5268*  items=3 - Exa AI web search, deep research, and content extraction. Provides MCP tools and
- expo/skills [plugin] *4231*  items=2 - Official Expo skills for building, deploying, upgrading, and debugging React Nat
- NVIDIA/skills [plugin] *4140*  items=2 - Find the right NVIDIA skill for GPU acceleration, CUDA, AI agents, data loading,
- aws/agent-toolkit-for-aws [plugin] *3565*  items=8 - Build, deploy, and operate AI agents on AWS. Skills for scaffolding agents with 
- cloudflare/skills [plugin] *3450*  items=2 - Skills for the Cloudflare developer platform: Workers, Durable Objects, Agents S
- modelcontextprotocol/ext-apps [plugin] *3155*  items=3 - Skills for creating MCP Apps with the MCP Apps SDK
- figma/mcp-server-guide [plugin,mcp-server] *2230*  items=4 - Figma design platform integration. Access design files, extract component inform
- stripe/ai [plugin,mcp-server] *2089*  items=3 - Stripe development plugin for Claude
- EpicGames/unreal-engine-skills-for-claude-code-plugin [plugin] *2025*  items=2 - Control Unreal Editor directly from Claude Code via MCP. Hundreds of tools expos
- MicrosoftDocs/mcp [plugin,mcp-server] *2005*  items=3 - Access official Microsoft documentation, API references, and code samples for Az
- microsoft/azure-skills [plugin] *1673*  items=2 - Transform Claude into an Azure expert. This plugin integrates the Azure MCP serv
- atlassian/atlassian-mcp-server [plugin,mcp-server] *1189*  items=3 - Connect to Atlassian products including Jira and Confluence. Search and create i
- forcedotcom/sf-skills [plugin,skill] *1187*  items=2 - Build Salesforce apps and agents using these core building blocks: metadata, Ape
- superdesigndev/superdesign-skill [plugin,skill] *1068*  items=2 - Design or redesign frontend UI and marketing graphics on the Superdesign infinit
- awslabs/agent-plugins [plugin] *950*  items=10 - Guide developers through adding maps, places search, geocoding, routing, and oth
- Unity-Technologies/unity-agent-plugin [plugin] *673*  items=2 - Unity's official plugin for Claude Code, with curated skills for game developmen
- Shopify/Shopify-AI-Toolkit [plugin] *653*  items=2 - Shopify's AI Toolkit provides 18 development skills for building on the Shopify 
- duckdb/duckdb-skills [plugin] *623*  items=2 - DuckDB-powered skills for Claude Code: read any data file, attach and query Duck
- gitroomhq/postiz-agent [plugin] *590*  items=3 - Social media automation CLI for scheduling posts, managing integrations, uploadi
- ClickHouse/agent-skills [plugin] *575*  items=2 - 28 best practice rules for ClickHouse schema design, query optimization, and dat
- TheQtCompanyRnD/agent-skills [plugin] *566*  items=3 - Agentic engineering skills for Qt software development — Qt C++/QML code review,

## Top 30 by stars: listed
- DietrichGebert/ponytail [plugin] *198183*  items=2 - Lazy senior dev mode. Forces the simplest, shortest solution that actually works
- JuliusBrussee/caveman [plugin,skill] *122681*  items=2 - Auto-activation works differently per agent: Claude Code uses SessionStart hooks
- thedotmack/claude-mem [plugin,skill] *119599*  items=3 - Persistent memory system for Claude Code - seamlessly preserve context across se
- pbakaus/impeccable [plugin] *116416*  items=1 - Great design prompts require design vocabulary. Most people don't have it. You c
- Egonex-AI/Understand-Anything [plugin,skill] *94186*  items=2 - Understand Anything is a Claude Code plugin that analyzes your project with a mu
- mvanhorn/last30days-skill [plugin] *74452*  items=1 - last-30-days is a Claude Code skill that searches the web and delivers a structu
- mem0ai/mem0 [plugin] *69438* ['product-stars'] items=1 - Connect Mem0 to Claude to give your agent persistent memory across sessions. Cla
- coreyhaines31/marketingskills [plugin,skill] *62499*  items=3 - coreyhaines31
- DayuanJiang/next-ai-draw-io [plugin,mcp-server] *37163*  items=2 - AI-powered Draw.io diagram generation with real-time browser preview. Create flo
- mksglu/context-mode [plugin] *34454*  items=1 - MCP is the protocol for tool access. We're the virtualization layer for context.
- AgriciDaniel/claude-seo [plugin] *32233*  items=1 - Comprehensive SEO analysis plugin for Claude Code. Performs full site audits wit
- alirezarezvani/claude-skills [plugin,skill] *30441*  items=2 - Playwright Pro turns your AI coding agent into a senior test automation engineer
- jarrodwatts/claude-hud [plugin,collection] *29296*  items=2 - Real-time statusline HUD for Claude Code - context health, tool activity, agent 
- promptfoo/promptfoo [plugin] *27649*  items=1 - Teaches AI coding agents to create and maintain promptfoo eval suites. Encodes b
- browser-use/browser-harness [plugin] *19234*  items=1 - Open-source browser agent driven via CDP — direct browser control, 79K stars, YC
- Jeffallan/claude-skills [plugin,skill,collection] *12513*  items=3 - 66 specialized skills for full-stack development: 12 language experts (Python, T
- nicobailon/visual-explainer [plugin,collection] *11266*  items=3 - An agent skill that turns complex terminal output into styled HTML pages you act
- revfactory/harness [plugin,agent] *9398*  items=3 - Harness leverages Claude Code's agent team system to decompose complex tasks int
- Eventual-Inc/Daft [plugin] *5862* ['product-stars'] items=1 - Skills for working with Daft, a high-performance data engine for AI and multimod
- clidey/whodb [plugin] *5069* ['product-stars'] items=1 - Database management tools for Claude Code. Query databases, explore schemas, ana
- nyldn/claude-octopus [plugin] *4498*  items=2 - Multi-LLM orchestration for Claude Code and Cowork. Coordinates 8 AI providers (
- giancarloerra/SocratiCode [plugin,mcp-server] *3382*  items=2 - Enterprise-grade (40m+ lines) codebase intelligence in a zero-setup, private and
- Chachamaru127/claude-code-harness [plugin,marketplace,agent] *3224*  items=5 - Autonomous Plan → Work → Review cycle for Claude Code. Go-native engine with 25×
- fabio-rovai/open-ontologies [plugin] *2959*  items=1 - AI-native ontology engineering with 39 MCP tools backed by an in-memory Oxigraph
- AgriciDaniel/claude-blog [plugin] *2857*  items=1 - AI-powered blog creation and optimization skill with 20 commands, 4 specialized 
- nizos/tdd-guard [plugin,collection] *2389*  items=2 - Enforces Test-Driven Development by intercepting file operations in Claude Code.
- AminForou/mcp-gsc [plugin] *2287*  items=1 - Connect Google Search Console to Claude Code. Query rankings, inspect URLs, audi
- kenryu42/cc-safety-net [plugin,collection] *2100*  items=3 - Block destructive git and filesystem commands before execution
- severity1/claude-code-prompt-improver [plugin] *1975*  items=1 - Intelligent prompt optimization using skill-based architecture. Enriches vague p
- aklofas/kicad-happy [plugin] *1756*  items=1 - KiCad electronics design skills. Analyze schematics, review PCB layouts, downloa

## Top 30 by stars: verified
- morluto/rea [marketplace,mcp-server] *477435*  items=2 - Reverse engineer anything with agents, from app behavior down to native binaries
- affaan-m/ECC [collection] *310299*  items=1 - Top-notch, well-written resources covering "just about everything" from core eng
- firecrawl/firecrawl [skill] *209148* ['product-stars'] items=1 - Knowledge infrastructure to make your agents smarter. Search, scrape and access 
- nextlevelbuilder/ui-ux-pro-max-skill [marketplace] *153836*  items=1 - An AI skill that provides design intelligence for building professional UI/UX ac
- vercel/next.js [marketplace] *143687* ['product-stars'] items=1 - The React Framework
- garrytan/gstack [agent] *142602*  items=1 - Garry Tan's (Y Combinator) Claude Code setup and "open source software factory" 
- browser-use/browser-use [mcp-server] *121966*  items=1 - Browser agents and stealth cloud browsers for AI: run web tasks, fill forms, ext
- Leonxlnx/taste-skill [marketplace] *121213*  items=1 - Agent skills that give coding agents taste: art direction, reference images and 
- addyosmani/agent-skills [marketplace] *120254*  items=1 - Production-grade engineering skills for AI coding agents.
- debpalash/VoiceStudio [skill] *117913* ['product-stars'] items=1 - VoiceStudio is the open-source, fully-local ElevenLabs alternative — voice cloni
- paperclipai/paperclip [skill,mcp-server] *116818*  items=2 - The open-source app everyone uses to manage agents at work
- nexu-io/open-design [marketplace] *109365*  items=1 - The 1st Collaborative AI Design Agent Workspace. Local-first and open source. Cr
- D4Vinci/Scrapling [mcp-server] *105609*  items=1 - Web scraping with stealth HTTP, real browsers, and Cloudflare bypass. CSS select
- ruvnet/RuView [marketplace] *105089*  items=1 - π RuView turns commodity WiFi signals into real-time spatial intelligence, vital
- tt-a1i/archify [skill,collection] *99631*  items=2 - An Agent Skill for Claude Code that generates interactive architecture, workflow
- storybookjs/storybook [marketplace] *91714* ['product-stars'] items=1 - Storybook is the industry standard workshop for building, documenting, and testi
- koala73/worldmonitor [skill,mcp-server] *91154* ['product-stars'] items=2 - Real-time global intelligence dashboard. AI-powered news aggregation, geopolitic
- career-ops-hq/career-ops [plugin] *84680*  items=1 - Open-source AI job search agent and job finder: scan job boards, score each job 
- OpenMontageInc/OpenMontage [skill] *83125*  items=1 - World's first open-source, agentic video production system. 12 production pipeli
- ruvnet/ruflo [marketplace,mcp-server] *82389*  items=3 - 🌊 The original agent harness. Deploy intelligent multi-player swarms, coordinate
- netdata/netdata [mcp-server] *81622*  items=1 - Real-time infrastructure monitoring with metrics, logs, alerts, and ML-based ano
- shareAI-lab/learn-claude-code [collection] *80858*  items=1 - A really interesting analysis of how coding agents like Claude Code are designed
- headroomlabs-ai/headroom [marketplace] *80798*  items=1 - Compress tool outputs, logs, files, and RAG chunks before they reach the LLM. 20
- ComposioHQ/awesome-claude-skills [skill] *80261*  items=1 - A curated list of awesome Claude Skills, resources, and tools for customizing Cl
- rohitg00/ai-engineering-from-scratch [skill] *80064* ['product-stars'] items=1 - Learn AI Engineering! Learn it. Build it. Ship it for others.
- hugohe3/ppt-master [marketplace] *79961* ['product-stars'] items=1 - AI turns documents or topics into real, native PowerPoint decks—with native shap
- cloudflare/security-audit-skill [skill] *78054*  items=1 - A coding-agent skill for multi-phase security audits with independently verified
- usestrix/strix [skill] *77471* ['product-stars'] items=1 - Open-source AI penetration testing tool to find and fix your app’s vulnerabiliti
- tw93/Mole [marketplace] *76112* ['product-stars'] items=1 - 🐹 Open-source Mac and PC cleaner. Keep your machine clean, light, and running li
- thedaviddias/Front-End-Checklist [marketplace,mcp-server] *74813* ['product-stars'] items=2 - 🗂 The essential checklist for modern web development, for humans and AI agents

## Top 30 by stars: watch
- f/prompts.chat [marketplace] *178470* ['product-stars'] items=1 - f.k.a. Awesome ChatGPT Prompts. Share, discover, and collect prompts from the co
- opendatalab/MinerU [skill] *84300* ['product-stars'] items=1 - Transforms complex documents like PDFs and Office docs into LLM-ready markdown/J
- code-yeongyu/oh-my-openagent [skill] *71102* ['product-stars'] items=1 - OmO: Just type "mass ulw" keyword with your prompt. Now you are the master of gr
- Imbad0202/academic-research-skills [marketplace] *58456*  items=1 - Academic Research Skills for Claude Code: research → write → review → revise → f
- bmad-code-org/BMAD-METHOD [skill] *55706* ['product-stars'] items=1 - Breakthrough Method for Agile Ai Driven Development
- tldraw/tldraw [mcp-server] *51580*  items=1 - Draw and visually collaborate with your agents on tldraw's canvas.
- metabase/metabase [mcp-server] *50509*  items=1 - Lets AI clients search, explore, query, and visualize data in a Metabase instanc
- abhigyanpatwari/GitNexus [marketplace] *48780* ['product-stars'] items=1 - GitNexus: The Zero-Server Code Intelligence Engine
- serverless/serverless [skill] *46935* ['product-stars'] items=1 - ⚡ Serverless Framework – Effortlessly build apps that auto-scale, incur zero cos
- PostHog/posthog [mcp-server] *41099*  items=1 - Query analytics, manage feature flags and experiments, and investigate errors in
- phaserjs/phaser [skill] *40779* ['product-stars'] items=1 - Phaser is a fun, free and fast 2D game framework for making HTML5 games for desk
- openai/codex-plugin-cc [marketplace] *35440*  items=1 - Use Codex from Claude Code to review code or delegate tasks.
- zarazhangrui/frontend-slides [marketplace] *32867*  items=1 - Create beautiful slides on the web using a coding agent's frontend skills
- oraios/serena [mcp-server] *31683*  items=1 - A powerful toolkit for coding, providing semantic retrieval and editing capabili
- hypit-ai/hypit [skill] *31429* ['product-stars'] items=1 - Clone any viral video with AI agents. Not just a script, the whole workflow: swa
- openai/skills [skill] *29106*  items=1 - Skills Catalog for Codex
- vercel/ai [skill] *28180* ['product-stars'] items=1 - The AI Toolkit for TypeScript. From the creators of Next.js, the AI SDK is a fre
- clockworklabs/SpacetimeDB [marketplace] *25572* ['product-stars'] items=1 - Development at the speed of light
- getpaseo/paseo [skill] *25132*  items=1 - Orchestrate multiple coding agents from desktop and mobile
- nocobase/nocobase [skill] *25002*  items=1 - NocoBase is the open-source platform for building, running, and evolving busines
- different-ai/openwork [mcp-server] *24589*  items=1 - Your OpenWork org's skills, plugins, workflows, and connections through one OAut
- HKUDS/AI-Trader [skill] *23371* ['product-stars'] items=1 - "AI-Trader: 100% Fully-Automated Agent-Native Trading"
- screenpipe/screenpipe [mcp-server] *22537*  items=1 - Search your local screen recordings, audio transcripts, and computer activity fr
- longbridge/gpui-kit [marketplace] *21329* ['product-stars'] items=1 - Rust GUI components for building fantastic cross-platform desktop application by
- greensock/gsap-skills [marketplace] *19036*  items=1 - Official AI skills for GSAP. These skills teach AI coding agents how to correctl
- windmill-labs/windmill [mcp-server] *18715*  items=1 - Run Windmill scripts and flows and manage jobs, schedules, resources and variabl
- Canner/WrenAI [skill] *18389* ['product-stars'] items=1 - GenBI (Generative BI) for AI agents, an open-source, governed text-to-SQL throug
- architecture-decision-record/architecture-decision-record [skill] *17518* ['product-stars'] items=1 - Architecture decision record (ADR) examples for software planning, IT leadership
- composio-community/awesome-codex-skills [skill] *17423*  items=1 - A curated list of practical Codex skills for automating workflows across the Cod
- millionco/react-doctor [skill] *15183* ['product-stars'] items=1 - Your agent writes bad React. This catches it

## Random sample of 20 watch repos (of 511)
- amirfish1/claude-command-center [marketplace] *221*  items=1 - CCC puts coding agents on call for your product. Bugs from customers and monitor reasons=['fails: license (NOASSERTION)'] src=['topic']
- luffysolution-svg/obsidian-vault-mcp [mcp-server] *95*  items=1 - Local Zotero, MinerU, Obsidian literature workflow with transactional Analysis n reasons=['fails: pushed<=90d (105)'] src=['mcp-registry']
- composio-community/awesome-codex-skills [skill] *17423*  items=1 - A curated list of practical Codex skills for automating workflows across the Cod reasons=['fails: pushed<=90d (122)', 'fails: license (None)'] src=['topic']
- kujenga/zotero-mcp [mcp-server] *162*  items=1 - Search your Zotero library, retrieve item metadata, and read full text from AI a reasons=['fails: pushed<=90d (110)'] src=['mcp-registry']
- sachitrafa/YourMemory [mcp-server] *275*  items=2 - Ebbinghaus-based persistent memory for Claude. Memories decay with time, strengt reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- asklokesh/loki-mode [mcp-server] *1123*  items=1 - Autonomous spec-to-product coding-agent CLI with an MCP server exposing 39 tools reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- e0ipso/strikethroo [plugin] *61*  items=1 - Task management for AI coding assistants reasons=['no corroborating signal'] src=['topic']
- apoorvjain25/frontier [marketplace] *80*  items=1 - Make Claude Opus, Sonnet, GPT, or Gemini produce work close to what Claude Fable reasons=['fails: pushed<=90d (143)'] src=['topic']
- kubeshop/testkube [mcp-server] *1683*  items=1 - MCP server for Testkube - Manage test workflows, executions, and artifacts via A reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- ranxianglei/billion-context [marketplace] *8368*  items=1 - A context-compression plugin for month-long single sessions (billions of tokens) reasons=['fails: license (NOASSERTION)'] src=['topic']
- gotalab/goal-setter-skill [plugin] *107*  items=1 - Shape rough requests into evidence-backed /goal completion contracts — an Agent  reasons=['fails: pushed<=90d (95)', 'no corroborating signal'] src=['code']
- wentong2022-arch/flowforge-skill [plugin] *138*  items=1 - Generate professional draw.io diagrams from natural language — a Claude Code ski reasons=['fails: pushed<=90d (143)'] src=['code']
- clarilayer/clarilayer [mcp-server] *68*  items=1 - Turns selected past conversations into durable context your AI can use across pr reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- Dicklesworthstone/agent_flywheel_clawdbot_skills_and_integrations [skill] *73*  items=1 - Clawdbot skills for agentic coding workflows - ACFS stack, cloud CLIs, and dev t reasons=['fails: license (NOASSERTION)'] src=['topic']
- voidful/hung-yi-lee-skill [skill] *1324*  items=1 - 蒸餾李宏毅老師的skill，結合Karpathy的LLM，Fable 5和GPT6 加持 以及 本人親自訪談 reasons=['fails: pushed<=90d (105)'] src=['topic']
- ScrapeGraphAI/scrapegraph-mcp [mcp-server] *123*  items=2 - Enable language models to perform advanced AI-powered web scraping with enterpri reasons=['fails: pushed<=90d (130)'] src=['mcp-registry']
- geeklee/srt-whiteboard-animation [skill] *5818*  items=1 - 将 SRT 字幕做成暖米黄纸张底的流式笔迹白板手绘动画 skill：mask 分区遮罩编排 + stream 连续笔迹（ink→color）。 reasons=['fails: pushed<=90d (120)'] src=['topic']
- blitzdotdev/blitz-mac [mcp-server] *1768*  items=1 - Give AI agents full control over iOS/macOS development via a native macOS app wi reasons=['fails: pushed<=90d (134)'] src=['mcp-registry']
- Mindgard/ai-ide-skills [plugin] *64*  items=1 -  reasons=['fails: pushed<=90d (123)', 'fails: license (NOASSERTION)'] src=['code']
- JuneYaooo/nihaisha-nishi-tcm [skill] *2297*  items=1 - 倪海厦中医课程资料的 Agent Skill：支持课程检索、方证穴位辨析、学习笔记整理与板书截图证据索引。 | An Agent Skill for Ni Ha reasons=['fails: license (None)'] src=['topic']

## Errors
- graphql: HTTP 504 after 4 retries <!DOCTYPE html>
<!--

Hello future GitHubber! I bet you're here to remove tho
- broad verify subfolders chunk 8: no data None

## Rate limit
- REST calls this run (uncached): {"core": 97, "search": 128}; last seen: {"core": {"remaining": "4903", "limit": "5000"}, "search": {"remaining": "18", "limit": "30"}}
- GraphQL: 214 calls, cost 103, remaining 4942/5000, stopped early: False
- REST stopped early: False
- repos lacking metadata: 4179; enriched this run: 38234