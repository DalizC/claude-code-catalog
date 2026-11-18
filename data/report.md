# Catalog report 2026-11-18
Mode: **token**; run time 1705s
Repos (deduped): 3368; flat entries before dedup: 25865

## Tier x type BEFORE dedup (flat entries)
- new/mcp-server: 15704
- watch/mcp-server: 2576
- listed/plugin: 2283
- verified/mcp-server: 1338
- verified/skill: 508
- watch/skill: 456
- watch/marketplace: 417
- official/plugin: 375
- verified/marketplace: 366
- verified/plugin: 360
- watch/plugin: 291
- watch/agent: 208
- verified/collection: 195
- new/marketplace: 168
- new/skill: 164
- anthropic/plugin: 150
- new/plugin: 143
- verified/agent: 56
- new/agent: 34
- anthropic/marketplace: 15
- anthropic/collection: 4
- watch/collection: 2
- anthropic/agent: 1

## Tier AFTER dedup (repos)
- verified: 1950
- watch: 503
- new: 349
- official: 256
- listed: 162
- anthropic: 148

## Type AFTER dedup (items)
- mcp-server: 1813
- plugin: 1401
- skill: 807
- marketplace: 524
- collection: 121
- agent: 61

## Primary type AFTER dedup (repos)
- mcp-server: 1187
- plugin: 843
- skill: 748
- marketplace: 457
- collection: 85
- agent: 48

## Repos by discovery source family
- topic: 1347
- mcp-registry: 1345
- anthropic: 461
- code: 237
- anthropic-org: 188
- curated: 149
- marketplace-expansion: 39

## Flags (all tiers)
- product-stars: 236
- star-spike: 17
- star-anomaly: 2

## star-anomaly by tier
- new: 2

## Metadata gaps
- repos without metadata: 154
- reasons: {'unfetched': 154}

## MCP-only repos excluded: 51
- n8n-io/n8n *210904* ['automation', 'ipaas', 'n8n', 'workflow', 'typescript'] - Fair-code workflow automation platform with native AI capabilities. Combine visu
- assafelovic/gpt-researcher *30768* ['ai', 'python', 'agent', 'automation', 'research'] - An autonomous agent that conducts deep research on any data using any LLM provid
- mrexodia/ida-pro-mcp *13506* ['ida-plugin', 'ida-pro', 'mcp', 'mcp-server', 'modelcontextprotocol'] - AI-powered reverse engineering assistant that bridges IDA Pro with language mode
- mcp-use/mcp-use *10991* ['mcp', 'model-context-protocol', 'apps-sdk', 'mcp-apps', 'mcp-inspector'] - The fullstack MCP framework to develop MCP Apps for ChatGPT / Claude & MCP Serve
- Agents365-ai/drawio-skill *10829* ['drawio', 'diagram', 'agent-skills', 'architecture-diagram', 'claude-code'] - Agent skill that turns natural language, code, Terraform/K8s, SQL, OpenAPI, Asyn
- Marker-Inc-Korea/AutoRAG *6008* ['document-parser', 'embeddings', 'llm', 'open-source', 'rag'] - Your Personal Librarian Agent. Ask anything on your computer, organize files, re
- jordan-gibbs/hyperresearch *4867* ['agents', 'agentskills', 'claude-code', 'deep-research', 'deep-research-agent'] - Convert Claude Code or Codex into the most intelligent Deep Research Agent. Coll
- stickerdaniel/linkedin-mcp-server *4245* ['linkedin', 'linkedin-scraper', 'mcp', 'mcp-server', 'linkedin-mcp'] - Open-source MCP server for LinkedIn. Give Claude and any MCP-compatible AI agent
- taylorwilsdon/google_workspace_mcp *3540* ['ai', 'gmail', 'google-calendar', 'google-workspace', 'llm'] - Control Gmail, Google Calendar, Docs, Sheets, Slides, Chat, Forms, Tasks, Search
- duty1g/x64dbg-mcp-server *2841* ['ai-agents', 'ai-debugging', 'binary-analysis', 'claude', 'claude-code'] - x64dbg-MCP Server is a native MCP (Model Context Protocol) plugin for x64dbg tha
- alpic-ai/skybridge *2198* ['agent', 'ai', 'apps-sdk', 'chatgpt', 'claude'] - Skybridge is a full-stack TypeScript framework for MCP Apps and ChatGPT Apps. Ty
- study8677/repobrain *1363* ['claude-code', 'codex-cli', 'developer-tools', 'mcp-server', 'windsurf'] - 🧠 RepoBrain (formerly Antigravity) — Give your repo a brain. ChatGPT for your co
- CodeAbra/iai-personal-memory-engine *923* ['claude', 'claude-code', 'local-first', 'mcp', 'mcp-server'] - A cyber brain for your AI. It never forgets a detail, remembers exactly what you
- hetpatel-11/Adobe_Premiere_Pro_MCP *895* ['adobe', 'adobe-premiere-pro', 'adobe-mcp', 'adobe-premiere-pro-mcp', 'ai-video-editing'] - Adobe Premiere Pro MCP. Tools for AI-driven video editing via MCP, for Codex, Cl
- krakenfx/kraken-cli *814* ['ai-agents', 'algorithmic-trading', 'claude', 'claude-code', 'cli'] - Trade crypto, tokenized stocks, forex and futures on Kraken from your terminal o

## Degradation
- registry complete: True (666 pages, 66541 entries)
- MCP servers merged from the previous catalog (not re-fetched): 0
- GraphQL 403s: 0 (secondary rate limit: 0); retries: 9; queries that gave up: 1
- HTTP retries (5xx/network): 0
- repos with stale metadata reused from the previous catalog (meta_stale): 0

## MCP Registry
- {"pages": 666, "fetched": 66541, "kept": 65479, "dropped": 1062, "bad": 0, "complete": true, "excluded_remote_only": 23826, "excluded_low_signal": 22035, "fallback_merged": 0, "records": 1345, "attached_existing": 164, "new_repo": 1181, "remote_only": 0, "tiers": {"official": 26, "listed": 20, "verified": 967, "new": 135, "watch": 197}}

## Top 20 by trend_7d
- GoogleChrome/modern-web-guidance +18835 (548.49%) ['star-spike', 'product-stars']
- morluto/rea +16163 (3.59%) []
- mattpocock/skills +5758 (1.79%) []
- debpalash/VoiceStudio +5536 (5.15%) ['product-stars']
- cloudflare/security-audit-skill +5394 (7.76%) []
- affaan-m/ECC +4834 (1.61%) []
- Leonxlnx/taste-skill +4833 (4.27%) []
- DietrichGebert/ponytail +4800 (2.55%) []
- pbakaus/impeccable +4633 (4.3%) []
- anthropics/skills +4306 (2.24%) []
- Nutlope/hallmark +4282 (8.12%) []
- elementalsouls/Claude-BugHunter +4195 (75.98%) ['star-spike']
- alibaba/open-code-review +4078 (8.19%) []
- heydamir/unslop +3948 (28.32%) ['star-spike']
- JuneYaooo/rea-video +3809 (57.99%) ['star-spike']
- heygen-com/hyperframes +3705 (4.5%) []
- obra/superpowers +3642 (1.15%) []
- google/elephant-goldfish-model +3611 (20.93%) []
- vercel-labs/agent-desktop +3536 (16.42%) ['product-stars']
- ZhuLinsen/daily_stock_analysis +3532 (5.07%) ['product-stars']

## Code search vs topic search
- repos found by code search: 237
- also in topic search: 17
- code-only: 202; tiers: {'anthropic': 1, 'verified': 106, 'watch': 65, 'new': 30}

## Top 30 by stars: anthropic
- anthropics/skills [marketplace,collection] *196848*  items=2 - Anthropic example skills
- anthropics/claude-code [marketplace,agent] *156065*  items=2 - Anthropic's Claude Code plugins, installed from the claude-plugins-official repo
- anthropics/claude-plugins-official [plugin,marketplace,collection] *47599*  items=15 - Directory of popular Claude Code extensions including development tools, product
- anthropics/financial-services [marketplace] *41373*  items=1 - 
- anthropics/knowledge-work-plugins [marketplace] *36461*  items=1 - 
- anthropics/claude-for-legal [marketplace] *10033*  items=1 - Reference agents, skills, and data connectors for the legal workflows we see mos
- anthropics/claude-code-action [collection] *9999*  items=1 - The official GitHub Action for running Claude Code in CI: mention @claude in iss
- anthropics/claude-code-security-review [collection] *6983*  items=1 - An official AI-powered security-review GitHub Action that uses Claude to analyze
- anthropics/claude-plugins-community [marketplace] *4915*  items=1 - 
- anthropics/commerce-agents [marketplace] *3483*  items=1 - Claude Commerce Agents: the commerce-builder plugin for building shopping and me
- anthropics/life-sciences [marketplace] *652*  items=1 - Skills for life sciences research, data analysis, and discovery
- anthropics/k12-teacher-skills [marketplace] *633*  items=1 - Plugin marketplace for K-12 Education and Claude for Teachers.
- anthropics/healthcare [marketplace] *453*  items=1 - Claude for Healthcare — one plugin bundling payer, provider, pharma, and general
- anthropics/oncall-kit [marketplace] *273*  items=1 - 
- anthropics/claude-for-financial-advisors [plugin,marketplace] *157*  items=2 - Ready-to-run workflows for financial advisors in Claude Cowork, drawing live dat
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
- mattpocock/skills [plugin] *326902*  items=2 - Matt Pocock's agent skills for real engineering — grilling, spec/ticket flows, T
- obra/superpowers [plugin,skill] *319489*  items=4 - Superpowers teaches Claude brainstorming, subagent driven development with built
- heygen-com/hyperframes [plugin,mcp-server] *86107*  items=3 - HyperFrames by HeyGen. Write HTML, render video. Compositions, GSAP and runtime 
- ChromeDevTools/chrome-devtools-mcp [plugin,mcp-server] *58090*  items=4 - Control and inspect a live Chrome browser from your coding agent. Record perform
- GoogleChrome/modern-web-guidance [plugin] *22269* ['star-spike', 'product-stars'] items=2 - Keep your coding agent up to date with the latest web best practices
- confident-ai/deepeval [plugin] *19536* ['product-stars'] items=1 - Skills for adding DeepEval evaluations, tracing, datasets, Confident AI reports,
- huggingface/skills [plugin] *11363*  items=2 - Build, train, evaluate, and use open source AI models, datasets, and spaces.
- wonderwhy-er/DesktopCommanderMCP [plugin,mcp-server] *10347*  items=4 - MCP server for terminal commands, process management, and file operations across
- Eigenwise/atomic-agents [plugin,marketplace] *6339* ['product-stars'] items=3 - Comprehensive development workflow for building AI agents with the Atomic Agents
- exa-labs/exa-mcp-server [plugin,mcp-server] *5241*  items=3 - Exa AI web search, deep research, and content extraction. Provides MCP tools and
- expo/skills [plugin] *4186*  items=2 - Official Expo skills for building, deploying, upgrading, and debugging React Nat
- NVIDIA/skills [plugin] *4054*  items=2 - Find the right NVIDIA skill for GPU acceleration, CUDA, AI agents, data loading,
- aws/agent-toolkit-for-aws [plugin] *3520*  items=8 - Build, deploy, and operate AI agents on AWS. Skills for scaffolding agents with 
- cloudflare/skills [plugin] *3385*  items=2 - Skills for the Cloudflare developer platform: Workers, Durable Objects, Agents S
- modelcontextprotocol/ext-apps [plugin] *3114*  items=3 - Skills for creating MCP Apps with the MCP Apps SDK
- figma/mcp-server-guide [plugin,mcp-server] *2205*  items=4 - Figma design platform integration. Access design files, extract component inform
- stripe/ai [plugin,mcp-server] *2072*  items=3 - Stripe development plugin for Claude
- MicrosoftDocs/mcp [plugin,mcp-server] *1997*  items=3 - Access official Microsoft documentation, API references, and code samples for Az
- EpicGames/unreal-engine-skills-for-claude-code-plugin [plugin] *1990*  items=2 - Control Unreal Editor directly from Claude Code via MCP. Hundreds of tools expos
- microsoft/azure-skills [plugin] *1655*  items=2 - Transform Claude into an Azure expert. This plugin integrates the Azure MCP serv
- atlassian/atlassian-mcp-server [plugin,mcp-server] *1174*  items=3 - Connect to Atlassian products including Jira and Confluence. Search and create i
- forcedotcom/sf-skills [plugin,skill] *1169*  items=2 - Build Salesforce apps and agents using these core building blocks: metadata, Ape
- superdesigndev/superdesign-skill [plugin,skill] *1024*  items=2 - Design or redesign frontend UI and marketing graphics on the Superdesign infinit
- awslabs/agent-plugins [plugin] *947*  items=10 - Guide developers through adding maps, places search, geocoding, routing, and oth
- Unity-Technologies/unity-agent-plugin [plugin] *652*  items=2 - Unity's official plugin for Claude Code, with curated skills for game developmen
- Shopify/Shopify-AI-Toolkit [plugin] *649*  items=2 - Shopify's AI Toolkit provides 18 development skills for building on the Shopify 
- duckdb/duckdb-skills [plugin] *617*  items=2 - DuckDB-powered skills for Claude Code: read any data file, attach and query Duck
- gitroomhq/postiz-agent [plugin] *576*  items=3 - Social media automation CLI for scheduling posts, managing integrations, uploadi
- ClickHouse/agent-skills [plugin] *572*  items=2 - 28 best practice rules for ClickHouse schema design, query optimization, and dat
- TheQtCompanyRnD/agent-skills [plugin] *550*  items=3 - Agentic engineering skills for Qt software development — Qt C++/QML code review,

## Top 30 by stars: listed
- DietrichGebert/ponytail [plugin] *193331*  items=2 - Lazy senior dev mode. Forces the simplest, shortest solution that actually works
- JuliusBrussee/caveman [plugin,skill] *121123*  items=2 - Auto-activation works differently per agent: Claude Code uses SessionStart hooks
- thedotmack/claude-mem [plugin,skill] *118056*  items=3 - Persistent memory system for Claude Code - seamlessly preserve context across se
- pbakaus/impeccable [plugin] *112357*  items=1 - Great design prompts require design vocabulary. Most people don't have it. You c
- Egonex-AI/Understand-Anything [plugin,skill] *93062*  items=2 - Understand Anything is a Claude Code plugin that analyzes your project with a mu
- mvanhorn/last30days-skill [plugin] *69299*  items=1 - last-30-days is a Claude Code skill that searches the web and delivers a structu
- mem0ai/mem0 [plugin] *69158* ['product-stars'] items=1 - Connect Mem0 to Claude to give your agent persistent memory across sessions. Cla
- coreyhaines31/marketingskills [plugin,skill] *61081*  items=3 - coreyhaines31
- DayuanJiang/next-ai-draw-io [plugin,mcp-server] *37032*  items=2 - AI-powered Draw.io diagram generation with real-time browser preview. Create flo
- mksglu/context-mode [plugin] *34248*  items=1 - MCP is the protocol for tool access. We're the virtualization layer for context.
- AgriciDaniel/claude-seo [plugin] *30450*  items=1 - Comprehensive SEO analysis plugin for Claude Code. Performs full site audits wit
- alirezarezvani/claude-skills [plugin,skill] *30009*  items=2 - Playwright Pro turns your AI coding agent into a senior test automation engineer
- jarrodwatts/claude-hud [plugin,collection] *29237*  items=2 - Real-time statusline HUD for Claude Code - context health, tool activity, agent 
- promptfoo/promptfoo [plugin] *27398*  items=1 - Teaches AI coding agents to create and maintain promptfoo eval suites. Encodes b
- browser-use/browser-harness [plugin] *19137*  items=1 - Open-source browser agent driven via CDP — direct browser control, 79K stars, YC
- Jeffallan/claude-skills [plugin,skill,collection] *12429*  items=3 - 66 specialized skills for full-stack development: 12 language experts (Python, T
- nicobailon/visual-explainer [plugin,collection] *11157*  items=3 - An agent skill that turns complex terminal output into styled HTML pages you act
- revfactory/harness [plugin,agent] *9377*  items=3 - Harness leverages Claude Code's agent team system to decompose complex tasks int
- Eventual-Inc/Daft [plugin] *5852* ['product-stars'] items=1 - Skills for working with Daft, a high-performance data engine for AI and multimod
- clidey/whodb [plugin] *5060* ['product-stars'] items=1 - Database management tools for Claude Code. Query databases, explore schemas, ana
- nyldn/claude-octopus [plugin] *4465*  items=2 - Multi-LLM orchestration for Claude Code and Cowork. Coordinates 8 AI providers (
- giancarloerra/SocratiCode [plugin,mcp-server] *3380*  items=2 - Enterprise-grade (40m+ lines) codebase intelligence in a zero-setup, private and
- Chachamaru127/claude-code-harness [plugin,marketplace,agent] *3214*  items=5 - Autonomous Plan → Work → Review cycle for Claude Code. Go-native engine with 25×
- fabio-rovai/open-ontologies [plugin] *2919*  items=1 - AI-native ontology engineering with 39 MCP tools backed by an in-memory Oxigraph
- AgriciDaniel/claude-blog [plugin] *2795*  items=1 - AI-powered blog creation and optimization skill with 20 commands, 4 specialized 
- nizos/tdd-guard [plugin,collection] *2383*  items=2 - Enforces Test-Driven Development by intercepting file operations in Claude Code.
- AminForou/mcp-gsc [plugin] *2228*  items=1 - Connect Google Search Console to Claude Code. Query rankings, inspect URLs, audi
- kenryu42/cc-safety-net [plugin,collection] *2068*  items=3 - Block destructive git and filesystem commands before execution
- severity1/claude-code-prompt-improver [plugin] *1972*  items=1 - Intelligent prompt optimization using skill-based architecture. Enriches vague p
- aklofas/kicad-happy [plugin] *1697*  items=1 - KiCad electronics design skills. Analyze schematics, review PCB layouts, downloa

## Top 30 by stars: verified
- morluto/rea [marketplace,mcp-server] *466749*  items=2 - Reverse engineer anything with agents, from app behavior down to native binaries
- affaan-m/ECC [collection] *305731*  items=1 - Top-notch, well-written resources covering "just about everything" from core eng
- firecrawl/firecrawl [skill] *202701* ['product-stars'] items=1 - Supercharge your AI agents with data from the web and beyond. Building the libra
- nextlevelbuilder/ui-ux-pro-max-skill [marketplace] *151000*  items=1 - An AI skill that provides design intelligence for building professional UI/UX ac
- vercel/next.js [marketplace] *143714* ['product-stars'] items=1 - The React Framework
- garrytan/gstack [agent] *141947*  items=1 - Garry Tan's (Y Combinator) Claude Code setup and "open source software factory" 
- browser-use/browser-use [mcp-server] *121357*  items=1 - Browser agents and stealth cloud browsers for AI: run web tasks, fill forms, ext
- addyosmani/agent-skills [marketplace] *118718*  items=1 - Production-grade engineering skills for AI coding agents.
- Leonxlnx/taste-skill [marketplace] *117908*  items=1 - Agent skills that give coding agents taste: art direction, reference images and 
- paperclipai/paperclip [skill,mcp-server] *114623*  items=2 - The open-source app everyone uses to manage agents at work
- debpalash/VoiceStudio [skill] *112993* ['product-stars'] items=1 - VoiceStudio is the open-source, fully-local ElevenLabs alternative — voice cloni
- nexu-io/open-design [marketplace] *108156*  items=1 - The 1st Collaborative AI Design Agent Workspace. Local-first and open source. Cr
- ruvnet/RuView [marketplace] *104544*  items=1 - π RuView turns commodity WiFi signals into real-time spatial intelligence, vital
- D4Vinci/Scrapling [mcp-server] *104002*  items=1 - Web scraping with stealth HTTP, real browsers, and Cloudflare bypass. CSS select
- tt-a1i/archify [skill,collection] *97543*  items=2 - An Agent Skill for Claude Code that generates interactive architecture, workflow
- storybookjs/storybook [marketplace] *91621* ['product-stars'] items=1 - Storybook is the industry standard workshop for building, documenting, and testi
- koala73/worldmonitor [skill,mcp-server] *90861* ['product-stars'] items=2 - Real-time global intelligence dashboard. AI-powered news aggregation, geopolitic
- career-ops-hq/career-ops [plugin] *83402*  items=1 - Open-source AI job search agent and job finder: scan job boards, score each job 
- ruvnet/ruflo [marketplace,mcp-server] *81985*  items=3 - 🌊 The original agent harness. Deploy intelligent multi-player swarms, coordinate
- netdata/netdata [mcp-server] *81461*  items=1 - Real-time infrastructure monitoring with metrics, logs, alerts, and ML-based ano
- OpenMontageInc/OpenMontage [skill] *81400*  items=1 - World's first open-source, agentic video production system. 12 production pipeli
- shareAI-lab/learn-claude-code [collection] *80565*  items=1 - A really interesting analysis of how coding agents like Claude Code are designed
- headroomlabs-ai/headroom [marketplace] *79948*  items=1 - Compress tool outputs, logs, files, and RAG chunks before they reach the LLM. 20
- ComposioHQ/awesome-claude-skills [skill] *79757*  items=1 - A curated list of awesome Claude Skills, resources, and tools for customizing Cl
- rohitg00/ai-engineering-from-scratch [skill] *79351* ['product-stars'] items=1 - Learn AI Engineering! Learn it. Build it. Ship it for others.
- hugohe3/ppt-master [marketplace] *78028* ['product-stars'] items=1 - AI turns documents or topics into real, native PowerPoint decks—with native shap
- usestrix/strix [skill] *76376* ['product-stars'] items=1 - Open-source AI penetration testing tool to find and fix your app’s vulnerabiliti
- tw93/Mole [marketplace] *75427* ['product-stars'] items=1 - 🐹 Open-source Mac and PC cleaner. Keep your machine clean, light, and running li
- cloudflare/security-audit-skill [skill] *74931*  items=1 - A coding-agent skill for multi-phase security audits with independently verified
- thedaviddias/Front-End-Checklist [marketplace,mcp-server] *74766* ['product-stars'] items=2 - 🗂 The essential checklist for modern web development, for humans and AI agents

## Top 30 by stars: watch
- f/prompts.chat [marketplace] *177766* ['product-stars'] items=1 - f.k.a. Awesome ChatGPT Prompts. Share, discover, and collect prompts from the co
- opendatalab/MinerU [skill] *83892* ['product-stars'] items=1 - Transforms complex documents like PDFs and Office docs into LLM-ready markdown/J
- code-yeongyu/oh-my-openagent [skill] *70986* ['product-stars'] items=1 - OmO: Just type "mass ulw" keyword with your prompt. Now you are the master of gr
- Imbad0202/academic-research-skills [marketplace] *57363*  items=1 - Academic Research Skills for Claude Code: research → write → review → revise → f
- bmad-code-org/BMAD-METHOD [skill] *55493* ['product-stars'] items=1 - Breakthrough Method for Agile Ai Driven Development
- tldraw/tldraw [mcp-server] *51470*  items=1 - Draw and visually collaborate with your agents on tldraw's canvas.
- metabase/metabase [mcp-server] *50390*  items=1 - Lets AI clients search, explore, query, and visualize data in a Metabase instanc
- abhigyanpatwari/GitNexus [marketplace] *48622* ['product-stars'] items=1 - GitNexus: The Zero-Server Code Intelligence Engine
- serverless/serverless [skill] *46933* ['product-stars'] items=1 - ⚡ Serverless Framework – Effortlessly build apps that auto-scale, incur zero cos
- PostHog/posthog [mcp-server] *40861*  items=1 - Official PostHog MCP Server for product analytics, feature flags, experiments, a
- openai/codex-plugin-cc [marketplace] *35216*  items=1 - Use Codex from Claude Code to review code or delegate tasks.
- zarazhangrui/frontend-slides [marketplace] *32497*  items=1 - Create beautiful slides on the web using a coding agent's frontend skills
- oraios/serena [mcp-server] *31490*  items=1 - A powerful toolkit for coding, providing semantic retrieval and editing capabili
- hypit-ai/hypit [skill] *30490* ['product-stars'] items=1 - Clone any viral video with AI agents. Not just a script, the whole workflow: swa
- openai/skills [skill] *28809*  items=1 - Skills Catalog for Codex
- vercel/ai [skill] *28054* ['product-stars'] items=1 - The AI Toolkit for TypeScript. From the creators of Next.js, the AI SDK is a fre
- clockworklabs/SpacetimeDB [marketplace] *25565* ['product-stars'] items=1 - Development at the speed of light
- nocobase/nocobase [skill] *24957*  items=1 - NocoBase is the open-source platform for building, running, and evolving busines
- different-ai/openwork [mcp-server] *24555*  items=1 - Your OpenWork org's skills, plugins, workflows, and connections through one OAut
- getpaseo/paseo [skill] *24291*  items=1 - Orchestrate multiple coding agents from desktop and mobile
- HKUDS/AI-Trader [skill] *23316* ['product-stars'] items=1 - "AI-Trader: 100% Fully-Automated Agent-Native Trading"
- screenpipe/screenpipe [mcp-server] *22421*  items=1 - Search your local screen recordings, audio transcripts, and computer activity fr
- longbridge/gpui-kit [skill] *20939* ['product-stars'] items=1 - Rust GUI components for building fantastic cross-platform desktop application by
- greensock/gsap-skills [marketplace] *18652*  items=1 - Official AI skills for GSAP. These skills teach AI coding agents how to correctl
- windmill-labs/windmill [mcp-server] *18623*  items=1 - Run Windmill scripts and flows and manage jobs, schedules, resources and variabl
- Canner/WrenAI [skill] *18326* ['product-stars'] items=1 - GenBI (Generative BI) for AI agents, an open-source, governed text-to-SQL throug
- architecture-decision-record/architecture-decision-record [skill] *17486* ['product-stars'] items=1 - Architecture decision record (ADR) examples for software planning, IT leadership
- composio-community/awesome-codex-skills [skill] *17356*  items=1 - A curated list of practical Codex skills for automating workflows across the Cod
- millionco/react-doctor [skill] *15155* ['product-stars'] items=1 - Your agent writes bad React. This catches it
- kyegomez/OpenMythos [plugin] *14927*  items=1 - A theoretical reconstruction of the Claude Mythos architecture, built from first

## Random sample of 20 watch repos (of 503)
- oesoll/gemini-gpt-hybrid [agent] *153*  items=1 - Multi-model orchestration subagents for Claude Code — delegates by task scope to reasons=['fails: pushed<=90d (114)'] src=['topic']
- marcimastro98/Xenon [mcp-server] *124*  items=1 - Build widgets for the Xenon dashboard: SDK reference, install, runtime errors, t reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- clockworklabs/SpacetimeDB [marketplace] *25565* ['product-stars'] items=1 - Development at the speed of light reasons=['fails: license (NOASSERTION)'] src=['topic']
- kvoltmer/Audionaut [mcp-server] *271*  items=1 - Edit Audionaut multitrack projects: cut, fade, analyse, export. Requires the Aud reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- sathergate/sathergate-toolkit [mcp-server] *106*  items=7 - Cron jobs for Next.js. Serverless-native scheduling with retry support. reasons=['no corroborating signal'] src=['mcp-registry']
- depwire/depwire [mcp-server] *73*  items=1 - Dependency graph + 24 MCP tools. Impact analysis, simulation, security, agent co reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- scasella/claude-dynamic-workflows-codex [marketplace] *330*  items=1 - Run Claude Code dynamic workflows on a local Codex (GPT) backend, plus an intera reasons=['fails: pushed<=90d (129)'] src=['topic']
- Wind-Alice/AliceMarket [skill] *160*  items=1 - 将 Wind 丰富的金融数据、专业工具、技能Skill与专家Agent能力开放给各类 Agent 和智能应用。通过 MCP、Skill、API 等标准化方式，为 reasons=['fails: license (None)'] src=['topic']
- kushneryk/join.cloud [mcp-server] *66*  items=1 - Collaboration rooms for AI agents. Real-time messaging + standard git. reasons=['fails: pushed<=90d (125)', 'no corroborating signal'] src=['mcp-registry']
- ykdojo/claude-code-tips [marketplace] *10354*  items=1 - 45+ tips for getting the most out of Claude Code, from basics to advanced - incl reasons=['fails: license (NOASSERTION)'] src=['topic']
- Mindgard/ai-ide-skills [plugin] *64*  items=1 -  reasons=['fails: pushed<=90d (116)', 'fails: license (NOASSERTION)'] src=['code']
- santimattius/structured-coroutines [plugin] *166*  items=1 - The definitive toolkit for enforcing safety, predictability, and efficiency in K reasons=['no corroborating signal'] src=['code']
- deepmemteam/deepmem [mcp-server] *114*  items=1 - Mem0-compatible persistent memory for AI agents: write facts once, recall them s reasons=['fails: pushed<=90d (92)', 'no corroborating signal'] src=['mcp-registry']
- UnitOneAI/SecuritySkills [skill] *113*  items=1 - Open-source security skills for AI coding agents. Grounded in OWASP, NIST, MITRE reasons=['fails: pushed<=90d (152)'] src=['topic']
- stefan-jansen/claude-code-toolkit [skill] *99*  items=1 - Superseded by coding-agent-toolkit — see README. Preserved for reference: Claude reasons=['fails: pushed<=90d (133)'] src=['topic']
- frumu-ai/tandem [mcp-server] *125*  items=1 - Remote MCP server for Tandem docs, install guides, SDKs, workflows, and agent se reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- ZzzLc0405/photo-abstract-editorial [skill] *6138* ['product-stars'] items=1 -  reasons=['fails: pushed<=90d (91)', 'fails: license (NOASSERTION)'] src=['topic']
- cafeTechne/antigravity-link-extension [mcp-server] *223*  items=1 - MCP server and OpenAPI-backed mobile companion for controlling Antigravity IDE s reasons=['fails: pushed<=90d (166)'] src=['mcp-registry']
- m-mizutani/goast [plugin] *79*  items=1 - Go AST based static analysis tool with Rego reasons=['fails: pushed<=90d (130)', 'no corroborating signal'] src=['code']
- mliu98/awesome-human-distillation [skill] *763*  items=1 - A curated catalog of human distillliation agent skills reasons=['fails: license (None)'] src=['topic']

## Errors
- graphql: HTTP 504 after 4 retries <!DOCTYPE html>
<!--

Hello future GitHubber! I bet you're here to remove tho
- broad verify subfolders chunk 10: no data None

## Rate limit
- REST calls this run (uncached): {"core": 143, "search": 42}; last seen: {"core": {"remaining": "4857", "limit": "5000"}, "search": {"remaining": "29", "limit": "30"}}
- GraphQL: 184 calls, cost 66, remaining 4789/5000, stopped early: False
- REST stopped early: False
- repos lacking metadata: 4154; enriched this run: 37129