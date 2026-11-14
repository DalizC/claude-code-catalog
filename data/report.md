# Catalog report 2026-11-14
Mode: **token**; run time 1628s
Repos (deduped): 3284; flat entries before dedup: 25488

## Tier x type BEFORE dedup (flat entries)
- new/mcp-server: 15451
- watch/mcp-server: 2518
- listed/plugin: 2283
- verified/mcp-server: 1304
- verified/skill: 492
- watch/skill: 482
- watch/marketplace: 422
- official/plugin: 375
- verified/marketplace: 355
- verified/plugin: 336
- watch/plugin: 290
- watch/agent: 219
- verified/collection: 196
- new/skill: 159
- new/marketplace: 155
- anthropic/plugin: 150
- new/plugin: 149
- verified/agent: 47
- new/agent: 31
- anthropic/marketplace: 15
- anthropic/collection: 4
- watch/collection: 2
- anthropic/agent: 1

## Tier AFTER dedup (repos)
- verified: 1880
- watch: 503
- new: 334
- official: 256
- listed: 163
- anthropic: 148

## Type AFTER dedup (items)
- mcp-server: 1776
- plugin: 1357
- skill: 795
- marketplace: 497
- collection: 122
- agent: 47

## Primary type AFTER dedup (repos)
- mcp-server: 1162
- plugin: 829
- skill: 734
- marketplace: 437
- collection: 88
- agent: 34

## Repos by discovery source family
- topic: 1330
- mcp-registry: 1311
- anthropic: 462
- anthropic-org: 188
- code: 181
- curated: 149
- marketplace-expansion: 36

## Flags (all tiers)
- product-stars: 231
- star-spike: 15
- star-anomaly: 1

## star-anomaly by tier
- new: 1

## Metadata gaps
- repos without metadata: 154
- reasons: {'unfetched': 154}

## MCP-only repos excluded: 52
- n8n-io/n8n *210428* ['automation', 'ipaas', 'n8n', 'workflow', 'typescript'] - Fair-code workflow automation platform with native AI capabilities. Combine visu
- assafelovic/gpt-researcher *30676* ['ai', 'python', 'agent', 'automation', 'research'] - An autonomous agent that conducts deep research on any data using any LLM provid
- mrexodia/ida-pro-mcp *13470* ['ida-plugin', 'ida-pro', 'mcp', 'mcp-server', 'modelcontextprotocol'] - AI-powered reverse engineering assistant that bridges IDA Pro with language mode
- mcp-use/mcp-use *10956* ['mcp', 'model-context-protocol', 'apps-sdk', 'mcp-apps', 'mcp-inspector'] - The fullstack MCP framework to develop MCP Apps for ChatGPT / Claude & MCP Serve
- Agents365-ai/drawio-skill *10766* ['drawio', 'diagram', 'agent-skills', 'architecture-diagram', 'claude-code'] - Agent skill that turns natural language, code, Terraform/K8s, SQL, OpenAPI, Asyn
- 21st-dev/magic-mcp *6484* ['21st', 'claude', 'cursor', 'mcp', 'model-context-protocol'] - It's like v0, but in your Cursor / Claude Code / Windsurf: search 10,000+ React/
- Marker-Inc-Korea/AutoRAG *5733* ['document-parser', 'embeddings', 'llm', 'open-source', 'rag'] - Your Personal Librarian Agent. Ask anything on your computer, organize files, re
- jordan-gibbs/hyperresearch *4742* ['agents', 'agentskills', 'claude-code', 'deep-research', 'deep-research-agent'] - Convert Claude Code or Codex into the most intelligent Deep Research Agent. Coll
- stickerdaniel/linkedin-mcp-server *4211* ['linkedin', 'linkedin-scraper', 'mcp', 'mcp-server', 'linkedin-mcp'] - Open-source MCP server for LinkedIn. Give Claude and any MCP-compatible AI agent
- taylorwilsdon/google_workspace_mcp *3515* ['ai', 'gmail', 'google-calendar', 'google-workspace', 'llm'] - Control Gmail, Google Calendar, Docs, Sheets, Slides, Chat, Forms, Tasks, Search
- duty1g/x64dbg-mcp-server *2825* ['ai-agents', 'ai-debugging', 'binary-analysis', 'claude', 'claude-code'] - x64dbg-MCP Server is a native MCP (Model Context Protocol) plugin for x64dbg tha
- alpic-ai/skybridge *2191* ['agent', 'ai', 'apps-sdk', 'chatgpt', 'claude'] - Skybridge is a full-stack TypeScript framework for MCP Apps and ChatGPT Apps. Ty
- study8677/repobrain *1362* ['claude-code', 'codex-cli', 'developer-tools', 'mcp-server', 'windsurf'] - 🧠 RepoBrain (formerly Antigravity) — Give your repo a brain. ChatGPT for your co
- CodeAbra/iai-personal-memory-engine *923* ['claude', 'claude-code', 'local-first', 'mcp', 'mcp-server'] - A cyber brain for your AI. It never forgets a detail, remembers exactly what you
- hetpatel-11/Adobe_Premiere_Pro_MCP *870* ['adobe', 'adobe-premiere-pro', 'adobe-mcp', 'adobe-premiere-pro-mcp', 'ai-video-editing'] - Adobe Premiere Pro MCP. Tools for AI-driven video editing via MCP, for Codex, Cl

## Degradation
- registry complete: True (638 pages, 63771 entries)
- MCP servers merged from the previous catalog (not re-fetched): 0
- GraphQL 403s: 0 (secondary rate limit: 0); retries: 6; queries that gave up: 1
- HTTP retries (5xx/network): 0
- repos with stale metadata reused from the previous catalog (meta_stale): 0

## MCP Registry
- {"pages": 638, "fetched": 63771, "kept": 62752, "dropped": 1019, "bad": 0, "complete": true, "excluded_remote_only": 22504, "excluded_low_signal": 20975, "fallback_merged": 0, "records": 1311, "attached_existing": 154, "new_repo": 1157, "remote_only": 0, "tiers": {"official": 26, "listed": 20, "verified": 937, "new": 130, "watch": 198}}

## Top 20 by trend_7d
- morluto/rea +19467 (4.44%) []
- GoogleChrome/modern-web-guidance +8938 (339.59%) ['star-spike']
- cloudflare/security-audit-skill +7682 (11.94%) []
- debpalash/VoiceStudio +7036 (6.83%) ['product-stars']
- mattpocock/skills +7023 (2.22%) []
- anthropics/skills +5962 (3.17%) []
- google/elephant-goldfish-model +5528 (41.96%) ['star-spike']
- vercel-labs/agent-desktop +5140 (28.15%) ['star-spike', 'product-stars']
- JuneYaooo/rea-video +4859 (150.71%) ['star-spike']
- Nutlope/hallmark +4859 (9.77%) []
- pbakaus/impeccable +4793 (4.57%) []
- DietrichGebert/ponytail +4498 (2.42%) []
- vercel-labs/agent-browser +4460 (9.63%) ['product-stars']
- ZhuLinsen/daily_stock_analysis +4155 (6.14%) ['product-stars']
- affaan-m/ECC +3862 (1.29%) []
- Leonxlnx/taste-skill +3857 (3.47%) []
- heygen-com/hyperframes +3840 (4.79%) []
- D4Vinci/Scrapling +3631 (3.67%) []
- obra/superpowers +3602 (1.15%) []
- addyosmani/agent-skills +3453 (3.04%) []

## Code search vs topic search
- repos found by code search: 181
- also in topic search: 10
- code-only: 159; tiers: {'anthropic': 1, 'verified': 79, 'watch': 61, 'new': 18}

## Top 30 by stars: anthropic
- anthropics/skills [marketplace,collection] *194211*  items=2 - Anthropic example skills
- anthropics/claude-code [marketplace,agent] *155592*  items=2 - Anthropic's Claude Code plugins, installed from the claude-plugins-official repo
- anthropics/claude-plugins-official [plugin,marketplace,collection] *47219*  items=15 - Directory of popular Claude Code extensions including development tools, product
- anthropics/financial-services [marketplace] *41279*  items=1 - 
- anthropics/knowledge-work-plugins [marketplace] *35683*  items=1 - 
- anthropics/claude-for-legal [marketplace] *10000*  items=1 - Reference agents, skills, and data connectors for the legal workflows we see mos
- anthropics/claude-code-action [collection] *9927*  items=1 - The official GitHub Action for running Claude Code in CI: mention @claude in iss
- anthropics/claude-code-security-review [collection] *6888*  items=1 - An official AI-powered security-review GitHub Action that uses Claude to analyze
- anthropics/claude-plugins-community [marketplace] *4889*  items=1 - 
- anthropics/commerce-agents [marketplace] *3466*  items=1 - Claude Commerce Agents: the commerce-builder plugin for building shopping and me
- anthropics/life-sciences [marketplace] *649*  items=1 - Skills for life sciences research, data analysis, and discovery
- anthropics/k12-teacher-skills [marketplace] *628*  items=1 - Plugin marketplace for K-12 Education and Claude for Teachers.
- anthropics/healthcare [marketplace] *447*  items=1 - Claude for Healthcare — one plugin bundling payer, provider, pharma, and general
- anthropics/oncall-kit [marketplace] *273*  items=1 - 
- anthropics/claude-for-financial-advisors [plugin,marketplace] *151*  items=2 - Ready-to-run workflows for financial advisors in Claude Cowork, drawing live dat
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
- mattpocock/skills [plugin] *323919*  items=2 - Matt Pocock's agent skills for real engineering — grilling, spec/ticket flows, T
- obra/superpowers [plugin,skill] *317306*  items=4 - Superpowers teaches Claude brainstorming, subagent driven development with built
- heygen-com/hyperframes [plugin,mcp-server] *84024*  items=3 - HyperFrames by HeyGen. Write HTML, render video. Compositions, GSAP and runtime 
- ChromeDevTools/chrome-devtools-mcp [plugin,mcp-server] *55630*  items=4 - Control and inspect a live Chrome browser from your coding agent. Record perform
- confident-ai/deepeval [plugin] *19474* ['product-stars'] items=1 - Skills for adding DeepEval evaluations, tracing, datasets, Confident AI reports,
- GoogleChrome/modern-web-guidance [plugin] *11570* ['star-spike'] items=2 - Keep your coding agent up to date with the latest web best practices
- huggingface/skills [plugin] *11343*  items=2 - Build, train, evaluate, and use open source AI models, datasets, and spaces.
- wonderwhy-er/DesktopCommanderMCP [plugin,mcp-server] *10306*  items=4 - MCP server for terminal commands, process management, and file operations across
- Eigenwise/atomic-agents [plugin,marketplace] *6328* ['product-stars'] items=3 - Comprehensive development workflow for building AI agents with the Atomic Agents
- exa-labs/exa-mcp-server [plugin,mcp-server] *5232*  items=3 - Exa AI web search, deep research, and content extraction. Provides MCP tools and
- expo/skills [plugin] *4141*  items=2 - Official Expo skills for building, deploying, upgrading, and debugging React Nat
- NVIDIA/skills [plugin] *3974*  items=2 - Find the right NVIDIA skill for GPU acceleration, CUDA, AI agents, data loading,
- aws/agent-toolkit-for-aws [plugin] *3488*  items=8 - Build, deploy, and operate AI agents on AWS. Skills for scaffolding agents with 
- cloudflare/skills [plugin] *3366*  items=2 - Skills for the Cloudflare developer platform: Workers, Durable Objects, Agents S
- modelcontextprotocol/ext-apps [plugin] *3096*  items=3 - Skills for creating MCP Apps with the MCP Apps SDK
- figma/mcp-server-guide [plugin,mcp-server] *2184*  items=4 - Figma design platform integration. Access design files, extract component inform
- stripe/ai [plugin,mcp-server] *2060*  items=3 - Stripe development plugin for Claude
- MicrosoftDocs/mcp [plugin,mcp-server] *1989*  items=3 - Access official Microsoft documentation, API references, and code samples for Az
- EpicGames/unreal-engine-skills-for-claude-code-plugin [plugin] *1969*  items=2 - Control Unreal Editor directly from Claude Code via MCP. Hundreds of tools expos
- microsoft/azure-skills [plugin] *1639*  items=2 - Transform Claude into an Azure expert. This plugin integrates the Azure MCP serv
- forcedotcom/sf-skills [plugin,skill] *1166*  items=2 - Build Salesforce apps and agents using these core building blocks: metadata, Ape
- atlassian/atlassian-mcp-server [plugin,mcp-server] *1163*  items=3 - Connect to Atlassian products including Jira and Confluence. Search and create i
- superdesigndev/superdesign-skill [plugin,skill] *1007*  items=2 - Design or redesign frontend UI and marketing graphics on the Superdesign infinit
- awslabs/agent-plugins [plugin] *941*  items=10 - Guide developers through adding maps, places search, geocoding, routing, and oth
- Shopify/Shopify-AI-Toolkit [plugin] *637*  items=2 - Shopify's AI Toolkit provides 18 development skills for building on the Shopify 
- Unity-Technologies/unity-agent-plugin [plugin] *637*  items=2 - Unity's official plugin for Claude Code, with curated skills for game developmen
- duckdb/duckdb-skills [plugin] *617*  items=2 - DuckDB-powered skills for Claude Code: read any data file, attach and query Duck
- gitroomhq/postiz-agent [plugin] *570*  items=3 - Social media automation CLI for scheduling posts, managing integrations, uploadi
- ClickHouse/agent-skills [plugin] *567*  items=2 - 28 best practice rules for ClickHouse schema design, query optimization, and dat
- TheQtCompanyRnD/agent-skills [plugin] *539*  items=3 - Agentic engineering skills for Qt software development — Qt C++/QML code review,

## Top 30 by stars: listed
- DietrichGebert/ponytail [plugin] *190445*  items=2 - Lazy senior dev mode. Forces the simplest, shortest solution that actually works
- JuliusBrussee/caveman [plugin,skill] *119726*  items=2 - Auto-activation works differently per agent: Claude Code uses SessionStart hooks
- thedotmack/claude-mem [plugin,skill] *116894*  items=3 - Persistent memory system for Claude Code - seamlessly preserve context across se
- pbakaus/impeccable [plugin] *109729*  items=1 - Great design prompts require design vocabulary. Most people don't have it. You c
- Egonex-AI/Understand-Anything [plugin,skill] *92565*  items=2 - Understand Anything is a Claude Code plugin that analyzes your project with a mu
- mem0ai/mem0 [plugin] *68930* ['product-stars'] items=1 - Connect Mem0 to Claude to give your agent persistent memory across sessions. Cla
- mvanhorn/last30days-skill [plugin] *67581*  items=1 - last-30-days is a Claude Code skill that searches the web and delivers a structu
- coreyhaines31/marketingskills [plugin,skill] *60203*  items=3 - coreyhaines31
- DayuanJiang/next-ai-draw-io [plugin,mcp-server] *36932*  items=2 - AI-powered Draw.io diagram generation with real-time browser preview. Create flo
- mksglu/context-mode [plugin] *34063*  items=1 - MCP is the protocol for tool access. We're the virtualization layer for context.
- alirezarezvani/claude-skills [plugin,skill] *29772*  items=2 - Playwright Pro turns your AI coding agent into a senior test automation engineer
- jarrodwatts/claude-hud [plugin,collection] *29198*  items=2 - Real-time statusline HUD for Claude Code - context health, tool activity, agent 
- AgriciDaniel/claude-seo [plugin] *29117*  items=1 - Comprehensive SEO analysis plugin for Claude Code. Performs full site audits wit
- promptfoo/promptfoo [plugin] *27152*  items=1 - Teaches AI coding agents to create and maintain promptfoo eval suites. Encodes b
- browser-use/browser-harness [plugin] *19071*  items=1 - Open-source browser agent driven via CDP — direct browser control, 79K stars, YC
- Jeffallan/claude-skills [plugin,skill,collection] *12355*  items=3 - 66 specialized skills for full-stack development: 12 language experts (Python, T
- nicobailon/visual-explainer [plugin,collection] *11077*  items=3 - An agent skill that turns complex terminal output into styled HTML pages you act
- revfactory/harness [plugin,agent] *9360*  items=3 - Harness leverages Claude Code's agent team system to decompose complex tasks int
- Eventual-Inc/Daft [plugin] *5849* ['product-stars'] items=1 - Skills for working with Daft, a high-performance data engine for AI and multimod
- clidey/whodb [plugin] *5056* ['product-stars'] items=1 - Database management tools for Claude Code. Query databases, explore schemas, ana
- nyldn/claude-octopus [plugin] *4441*  items=2 - Multi-LLM orchestration for Claude Code and Cowork. Coordinates 8 AI providers (
- giancarloerra/SocratiCode [plugin,mcp-server] *3375*  items=2 - Enterprise-grade (40m+ lines) codebase intelligence in a zero-setup, private and
- Chachamaru127/claude-code-harness [plugin,agent] *3209*  items=2 - Autonomous Plan → Work → Review cycle for Claude Code. Go-native engine with 25×
- fabio-rovai/open-ontologies [plugin] *2895*  items=1 - AI-native ontology engineering with 39 MCP tools backed by an in-memory Oxigraph
- AgriciDaniel/claude-blog [plugin] *2748*  items=1 - AI-powered blog creation and optimization skill with 20 commands, 4 specialized 
- nizos/tdd-guard [plugin,collection] *2377*  items=2 - Enforces Test-Driven Development by intercepting file operations in Claude Code.
- AminForou/mcp-gsc [plugin] *2200*  items=1 - Connect Google Search Console to Claude Code. Query rankings, inspect URLs, audi
- kenryu42/cc-safety-net [plugin,collection] *2027*  items=3 - Block destructive git and filesystem commands before execution
- severity1/claude-code-prompt-improver [plugin] *1969*  items=1 - Intelligent prompt optimization using skill-based architecture. Enriches vague p
- aklofas/kicad-happy [plugin] *1669*  items=1 - KiCad electronics design skills. Analyze schematics, review PCB layouts, downloa

## Top 30 by stars: verified
- morluto/rea [marketplace,mcp-server] *458058*  items=2 - Reverse engineer anything with agents, from app behavior down to native binaries
- affaan-m/ECC [collection] *302542*  items=1 - Top-notch, well-written resources covering "just about everything" from core eng
- firecrawl/firecrawl [skill] *201619* ['product-stars'] items=1 - Supercharge your AI agents with data from the web and beyond. Building the libra
- nextlevelbuilder/ui-ux-pro-max-skill [marketplace] *149174*  items=1 - An AI skill that provides design intelligence for building professional UI/UX ac
- vercel/next.js [marketplace] *143507* ['product-stars'] items=1 - The React Framework
- garrytan/gstack [agent] *141481*  items=1 - Garry Tan's (Y Combinator) Claude Code setup and "open source software factory" 
- browser-use/browser-use [mcp-server] *120967*  items=1 - Browser agents and stealth cloud browsers for AI: run web tasks, fill forms, ext
- addyosmani/agent-skills [marketplace] *117219*  items=1 - Production-grade engineering skills for AI coding agents.
- Leonxlnx/taste-skill [marketplace] *115149*  items=1 - Agent skills that give coding agents taste: art direction, reference images and 
- paperclipai/paperclip [skill,mcp-server] *113740*  items=2 - The open-source app everyone uses to manage agents at work
- debpalash/VoiceStudio [skill] *110104* ['product-stars'] items=1 - VoiceStudio is the open-source, fully-local ElevenLabs alternative — voice cloni
- nexu-io/open-design [marketplace] *107550*  items=1 - The 1st Collaborative AI Design Agent Workspace. Local-first and open source. Cr
- ruvnet/RuView [marketplace] *104250*  items=1 - π RuView turns commodity WiFi signals into real-time spatial intelligence, vital
- D4Vinci/Scrapling [mcp-server] *102559*  items=1 - Web scraping with stealth HTTP, real browsers, and Cloudflare bypass. CSS select
- tt-a1i/archify [skill,collection] *96259*  items=2 - An Agent Skill for Claude Code that generates interactive architecture, workflow
- storybookjs/storybook [marketplace] *91558* ['product-stars'] items=1 - Storybook is the industry standard workshop for building, documenting, and testi
- koala73/worldmonitor [skill,mcp-server] *90612* ['product-stars'] items=2 - Real-time global intelligence dashboard. AI-powered news aggregation, geopolitic
- career-ops-hq/career-ops [plugin] *82432*  items=1 - Open-source AI job search agent and job finder: scan job boards, score each job 
- ruvnet/ruflo [marketplace,mcp-server] *81656*  items=3 - 🌊 The original agent harness. Deploy intelligent multi-player swarms, coordinate
- netdata/netdata [mcp-server] *81406*  items=1 - Real-time infrastructure monitoring with metrics, logs, alerts, and ML-based ano
- shareAI-lab/learn-claude-code [collection] *80383*  items=1 - A really interesting analysis of how coding agents like Claude Code are designed
- OpenMontageInc/OpenMontage [skill] *80321*  items=1 - World's first open-source, agentic video production system. 12 production pipeli
- headroomlabs-ai/headroom [marketplace] *79614*  items=1 - Compress tool outputs, logs, files, and RAG chunks before they reach the LLM. 20
- ComposioHQ/awesome-claude-skills [skill] *79451*  items=1 - A curated list of awesome Claude Skills, resources, and tools for customizing Cl
- rohitg00/ai-engineering-from-scratch [skill] *78712* ['product-stars'] items=1 - Learn AI Engineering! Learn it. Build it. Ship it for others.
- hugohe3/ppt-master [marketplace] *76648* ['product-stars'] items=1 - AI turns documents or topics into real, native PowerPoint decks—with native shap
- usestrix/strix [skill] *75437* ['product-stars'] items=1 - Open-source AI penetration testing tool to find and fix your app’s vulnerabiliti
- tw93/Mole [marketplace] *74949* ['product-stars'] items=1 - 🐹 Open-source Mac and PC cleaner. Keep your machine clean, light, and running li
- thedaviddias/Front-End-Checklist [marketplace,mcp-server] *74728* ['product-stars'] items=2 - 🗂 The essential checklist for modern web development, for humans and AI agents
- cloudflare/security-audit-skill [skill] *72044*  items=1 - A coding-agent skill for multi-phase security audits with independently verified

## Top 30 by stars: watch
- f/prompts.chat [marketplace] *177127* ['product-stars'] items=1 - f.k.a. Awesome ChatGPT Prompts. Share, discover, and collect prompts from the co
- opendatalab/MinerU [skill] *83645* ['product-stars'] items=1 - Transforms complex documents like PDFs and Office docs into LLM-ready markdown/J
- code-yeongyu/oh-my-openagent [skill] *70897* ['product-stars'] items=1 - OmO: Just type "mass ulw" keyword with your prompt. Now you are the master of gr
- Imbad0202/academic-research-skills [marketplace] *56823*  items=1 - Academic Research Skills for Claude Code: research → write → review → revise → f
- bmad-code-org/BMAD-METHOD [skill] *55351* ['product-stars'] items=1 - Breakthrough Method for Agile Ai Driven Development
- tldraw/tldraw [mcp-server] *51413*  items=1 - Draw and visually collaborate with your agents on tldraw's canvas.
- metabase/metabase [mcp-server] *50320*  items=1 - Lets AI clients search, explore, query, and visualize data in a Metabase instanc
- abhigyanpatwari/GitNexus [marketplace] *48521* ['product-stars'] items=1 - GitNexus: The Zero-Server Code Intelligence Engine
- serverless/serverless [skill] *46933* ['product-stars'] items=1 - ⚡ Serverless Framework – Effortlessly build apps that auto-scale, incur zero cos
- PostHog/posthog [mcp-server] *40776*  items=1 - Official PostHog MCP Server for product analytics, feature flags, experiments, a
- openai/codex-plugin-cc [marketplace] *35119*  items=1 - Use Codex from Claude Code to review code or delegate tasks.
- zarazhangrui/frontend-slides [marketplace] *32308*  items=1 - Create beautiful slides on the web using a coding agent's frontend skills
- oraios/serena [mcp-server] *31368*  items=1 - A powerful toolkit for coding, providing semantic retrieval and editing capabili
- hypit-ai/hypit [skill] *29726* ['product-stars'] items=1 - Clone any viral video with AI agents. Not just a script, the whole workflow: swa
- openai/skills [skill] *28729*  items=1 - Skills Catalog for Codex
- vercel/ai [skill] *27927* ['product-stars'] items=1 - The AI Toolkit for TypeScript. From the creators of Next.js, the AI SDK is a fre
- clockworklabs/SpacetimeDB [marketplace] *25546* ['product-stars'] items=1 - Development at the speed of light
- nocobase/nocobase [skill] *24921*  items=1 - NocoBase is the open-source platform for building, running, and evolving busines
- different-ai/openwork [mcp-server] *24510*  items=1 - Your OpenWork org's skills, plugins, workflows, and connections through one OAut
- getpaseo/paseo [skill] *24024*  items=1 - Orchestrate multiple coding agents from desktop and mobile
- HKUDS/AI-Trader [skill] *23260* ['product-stars'] items=1 - "AI-Trader: 100% Fully-Automated Agent-Native Trading"
- screenpipe/screenpipe [mcp-server] *22371*  items=1 - Search your local screen recordings, audio transcripts, and computer activity fr
- longbridge/gpui-kit [skill] *20634* ['product-stars'] items=1 - Rust GUI components for building fantastic cross-platform desktop application by
- windmill-labs/windmill [mcp-server] *18577*  items=1 - Run Windmill scripts and flows and manage jobs, schedules, resources and variabl
- greensock/gsap-skills [marketplace] *18423*  items=1 - Official AI skills for GSAP. These skills teach AI coding agents how to correctl
- Canner/WrenAI [skill] *18178* ['product-stars'] items=1 - GenBI (Generative BI) for AI agents, an open-source, governed text-to-SQL throug
- architecture-decision-record/architecture-decision-record [skill] *17463* ['product-stars'] items=1 - Architecture decision record (ADR) examples for software planning, IT leadership
- composio-community/awesome-codex-skills [skill] *17314*  items=1 - A curated list of practical Codex skills for automating workflows across the Cod
- millionco/react-doctor [skill] *15132* ['product-stars'] items=1 - Your agent writes bad React. This catches it
- kyegomez/OpenMythos [plugin] *14925*  items=1 - A theoretical reconstruction of the Claude Mythos architecture, built from first

## Random sample of 20 watch repos (of 503)
- peakspec/marshal [skill] *53*  items=1 - Open-source multi-agent PM-ops team — associate PM, GTM, QA, data-analyst subage reasons=['fails: license (None)'] src=['topic']
- master-co/css [mcp-server] *1957*  items=1 - Inspect Master CSS classes, generated CSS, and project stylesheets from your AI  reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- longbridge/gpui-kit [skill] *20634* ['product-stars'] items=1 - Rust GUI components for building fantastic cross-platform desktop application by reasons=['fails: license (NOASSERTION)'] src=['topic']
- luffysolution-svg/obsidian-vault-mcp [mcp-server] *95*  items=1 - Local Zotero, MinerU, Obsidian literature workflow with transactional Analysis n reasons=['fails: pushed<=90d (94)'] src=['mcp-registry']
- sethblack/black-seo-analyzer [mcp-server] *61*  items=1 - Audit a page or crawl a whole site for technical SEO issues, locally. Compares c reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- blitzdotdev/blitz-mac [mcp-server] *1770*  items=1 - Give AI agents full control over iOS/macOS development via a native macOS app wi reasons=['fails: pushed<=90d (123)'] src=['mcp-registry']
- matlab/agent-skills-playground [skill] *202*  items=1 - A sandbox for prototyping and demonstrating Agent Skills for MATLAB and Simulink reasons=['fails: license (NOASSERTION)'] src=['topic']
- aakashg/pm-claude-skills [skill] *116*  items=1 - 5 Claude Code skills for product managers. Drop them in your .claude/skills/ fol reasons=['fails: pushed<=90d (98)'] src=['topic']
- leeguooooo/iphone-use [mcp-server] *497*  items=1 - Drive a real iPhone from a Mac: read the screen as text, tap, type, scroll, repl reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- redpanda-data/connect [marketplace] *8800* ['product-stars'] items=1 - Fancy stream processing made operationally mundane reasons=['fails: license (None)'] src=['topic']
- sjsyrek/design-council [plugin] *183*  items=1 - Claude Code plugin: convene 11 role-specialized peer agents to debate a technica reasons=['fails: pushed<=90d (170)'] src=['code']
- pmwl0128/quark_drive_skills [plugin] *174*  items=1 - Quark Drive Skills: Pokemon Champions Agent Skills for dex and metagame facts, e reasons=['fails: license (NOASSERTION)', 'no corroborating signal'] src=['code']
- dreamrec/LivePilot [mcp-server] *96*  items=1 - Ableton Live 12: 474 tools, 57 domains, nested devices, native modulation, and a reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- UnitOneAI/SecuritySkills [skill] *107*  items=1 - Open-source security skills for AI coding agents. Grounded in OWASP, NIST, MITRE reasons=['fails: pushed<=90d (148)'] src=['topic']
- e0ipso/strikethroo [plugin] *59*  items=1 - Task management for AI coding assistants reasons=['no corroborating signal'] src=['topic']
- mixelpixx/Nimrod [mcp-server] *261*  items=1 - Web search with quality scores; web pages are read on your computer by the local reasons=['fails: license (None)'] src=['mcp-registry']
- diffusionstudio/lottie [skill] *5743*  items=1 - Generate production-ready Lottie animations with Claude Code or Codex reasons=['fails: pushed<=90d (111)'] src=['topic']
- cyberlife-coder/VelesDB [mcp-server] *104*  items=1 - Offline agentic memory: remember/recall/relate/forget/why over a fused vector+gr reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- lynxlangya/techne [plugin] *106*  items=1 - Forcing-function skills for AI agents — validated to improve behavior, not just  reasons=['fails: pushed<=90d (134)'] src=['code']
- jangviktor-web/nihaixia [skill] *4098*  items=1 - 倪海厦视角的中医Agent Skill，基于倪海厦教学资料开发，蒸馏倪师伤寒论、金匮要略、黄帝内经、神农本草经、针灸篇等，人纪/医案/经方思维，六经辨证，八纲辨 reasons=['fails: license (None)'] src=['topic']

## Errors
- graphql: HTTP 504 after 4 retries <!DOCTYPE html>
<!--

Hello future GitHubber! I bet you're here to remove tho
- broad verify subfolders chunk 9: no data None

## Rate limit
- REST calls this run (uncached): {"core": 108, "search": 42}; last seen: {"core": {"remaining": "4892", "limit": "5000"}, "search": {"remaining": "29", "limit": "30"}}
- GraphQL: 189 calls, cost 82, remaining 4894/5000, stopped early: False
- REST stopped early: False
- repos lacking metadata: 4090; enriched this run: 35775