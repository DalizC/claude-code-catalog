# Catalog report 2026-11-13
Mode: **token**; run time 1806s
Repos (deduped): 3275; flat entries before dedup: 25505

## Tier x type BEFORE dedup (flat entries)
- new/mcp-server: 15441
- watch/mcp-server: 2513
- listed/plugin: 2283
- verified/mcp-server: 1296
- verified/skill: 491
- watch/skill: 477
- watch/marketplace: 421
- official/plugin: 375
- verified/marketplace: 356
- verified/plugin: 334
- watch/plugin: 287
- watch/agent: 258
- verified/collection: 196
- new/skill: 162
- new/marketplace: 154
- new/plugin: 152
- anthropic/plugin: 149
- verified/agent: 47
- new/agent: 38
- anthropic/marketplace: 15
- anthropic/collection: 4
- watch/collection: 2
- anthropic/agent: 1

## Tier AFTER dedup (repos)
- verified: 1878
- watch: 499
- new: 332
- official: 256
- listed: 163
- anthropic: 147

## Type AFTER dedup (items)
- mcp-server: 1762
- plugin: 1357
- skill: 791
- marketplace: 499
- collection: 122
- agent: 48

## Primary type AFTER dedup (repos)
- mcp-server: 1149
- plugin: 831
- skill: 732
- marketplace: 440
- collection: 88
- agent: 35

## Repos by discovery source family
- topic: 1331
- mcp-registry: 1296
- anthropic: 461
- anthropic-org: 188
- code: 186
- curated: 149
- marketplace-expansion: 36

## Flags (all tiers)
- product-stars: 230
- star-spike: 14

## star-anomaly by tier
- none: 0

## Metadata gaps
- repos without metadata: 153
- reasons: {'unfetched': 153}

## MCP-only repos excluded: 53
- n8n-io/n8n *210344* ['automation', 'ipaas', 'n8n', 'workflow', 'typescript'] - Fair-code workflow automation platform with native AI capabilities. Combine visu
- assafelovic/gpt-researcher *30659* ['ai', 'python', 'agent', 'automation', 'research'] - An autonomous agent that conducts deep research on any data using any LLM provid
- mrexodia/ida-pro-mcp *13459* ['ida-plugin', 'ida-pro', 'mcp', 'mcp-server', 'modelcontextprotocol'] - AI-powered reverse engineering assistant that bridges IDA Pro with language mode
- mcp-use/mcp-use *10914* ['mcp', 'model-context-protocol', 'apps-sdk', 'mcp-apps', 'mcp-inspector'] - The fullstack MCP framework to develop MCP Apps for ChatGPT / Claude & MCP Serve
- Agents365-ai/drawio-skill *10746* ['drawio', 'diagram', 'agent-skills', 'architecture-diagram', 'claude-code'] - Agent skill that turns natural language, code, Terraform/K8s, SQL, OpenAPI, Asyn
- 21st-dev/magic-mcp *6478* ['21st', 'claude', 'cursor', 'mcp', 'model-context-protocol'] - It's like v0, but in your Cursor / Claude Code / Windsurf: search 10,000+ React/
- Marker-Inc-Korea/AutoRAG *5742* ['document-parser', 'embeddings', 'llm', 'open-source', 'rag'] - Your Personal Librarian Agent. Ask anything on your computer, organize files, re
- jordan-gibbs/hyperresearch *4707* ['agents', 'agentskills', 'claude-code', 'deep-research', 'deep-research-agent'] - Convert Claude Code or Codex into the most intelligent Deep Research Agent. Coll
- stickerdaniel/linkedin-mcp-server *4202* ['linkedin', 'linkedin-scraper', 'mcp', 'mcp-server', 'linkedin-mcp'] - Open-source MCP server for LinkedIn. Give Claude and any MCP-compatible AI agent
- taylorwilsdon/google_workspace_mcp *3509* ['ai', 'gmail', 'google-calendar', 'google-workspace', 'llm'] - Control Gmail, Google Calendar, Docs, Sheets, Slides, Chat, Forms, Tasks, Search
- duty1g/x64dbg-mcp-server *2824* ['ai-agents', 'ai-debugging', 'binary-analysis', 'claude', 'claude-code'] - x64dbg-MCP Server is a native MCP (Model Context Protocol) plugin for x64dbg tha
- alpic-ai/skybridge *2188* ['agent', 'ai', 'apps-sdk', 'chatgpt', 'claude'] - Skybridge is a full-stack TypeScript framework for MCP Apps and ChatGPT Apps. Ty
- study8677/repobrain *1362* ['claude-code', 'codex-cli', 'developer-tools', 'mcp-server', 'windsurf'] - 🧠 RepoBrain (formerly Antigravity) — Give your repo a brain. ChatGPT for your co
- CodeAbra/iai-personal-memory-engine *923* ['claude', 'claude-code', 'local-first', 'mcp', 'mcp-server'] - A cyber brain for your AI. It never forgets a detail, remembers exactly what you
- hetpatel-11/Adobe_Premiere_Pro_MCP *865* ['adobe', 'adobe-premiere-pro', 'adobe-mcp', 'adobe-premiere-pro-mcp', 'ai-video-editing'] - Adobe Premiere Pro MCP. Tools for AI-driven video editing via MCP, for Codex, Cl

## Degradation
- registry complete: True (632 pages, 63116 entries)
- MCP servers merged from the previous catalog (not re-fetched): 0
- GraphQL 403s: 0 (secondary rate limit: 0); retries: 23; queries that gave up: 1
- HTTP retries (5xx/network): 0
- repos with stale metadata reused from the previous catalog (meta_stale): 0

## MCP Registry
- {"pages": 632, "fetched": 63116, "kept": 62118, "dropped": 998, "bad": 0, "complete": true, "excluded_remote_only": 22193, "excluded_low_signal": 20675, "fallback_merged": 0, "records": 1296, "attached_existing": 152, "new_repo": 1144, "remote_only": 0, "tiers": {"official": 25, "listed": 20, "verified": 930, "new": 126, "watch": 195}}

## Top 20 by trend_7d
- morluto/rea +20650 (4.75%) []
- cloudflare/security-audit-skill +9351 (15.09%) []
- mattpocock/skills +7583 (2.4%) []
- debpalash/VoiceStudio +7250 (7.1%) ['product-stars']
- anthropics/skills +5955 (3.17%) []
- google/elephant-goldfish-model +5740 (45.8%) ['star-spike']
- vercel-labs/agent-desktop +5655 (32.87%) ['star-spike', 'product-stars']
- JuneYaooo/rea-video +5345 (236.09%) ['star-spike']
- Nutlope/hallmark +5199 (10.62%) []
- GoogleChrome/modern-web-guidance +5187 (197.22%) ['star-spike']
- pbakaus/impeccable +5000 (4.8%) []
- NVIDIA/auto-ontology +4580 (59.18%) ['star-spike', 'product-stars']
- DietrichGebert/ponytail +4534 (2.45%) []
- vercel-labs/agent-browser +4362 (9.47%) ['product-stars']
- affaan-m/ECC +4121 (1.38%) []
- D4Vinci/Scrapling +4007 (4.08%) []
- heygen-com/hyperframes +3858 (4.84%) []
- obra/superpowers +3766 (1.2%) []
- Leonxlnx/taste-skill +3649 (3.29%) []
- ZhuLinsen/daily_stock_analysis +3505 (5.18%) ['product-stars']

## Code search vs topic search
- repos found by code search: 186
- also in topic search: 10
- code-only: 163; tiers: {'anthropic': 1, 'verified': 80, 'watch': 62, 'new': 20}

## Top 30 by stars: anthropic
- anthropics/skills [marketplace,collection] *193788*  items=2 - Anthropic example skills
- anthropics/claude-code [marketplace,agent] *155479*  items=2 - Anthropic's Claude Code plugins, installed from the claude-plugins-official repo
- anthropics/claude-plugins-official [plugin,marketplace,collection] *47078*  items=15 - Directory of popular Claude Code extensions including development tools, product
- anthropics/financial-services [marketplace] *41260*  items=1 - 
- anthropics/knowledge-work-plugins [marketplace] *35601*  items=1 - 
- anthropics/claude-for-legal [marketplace] *9991*  items=1 - Reference agents, skills, and data connectors for the legal workflows we see mos
- anthropics/claude-code-action [collection] *9912*  items=1 - The official GitHub Action for running Claude Code in CI: mention @claude in iss
- anthropics/claude-code-security-review [collection] *6863*  items=1 - An official AI-powered security-review GitHub Action that uses Claude to analyze
- anthropics/claude-plugins-community [marketplace] *4878*  items=1 - 
- anthropics/commerce-agents [marketplace] *3460*  items=1 - Claude Commerce Agents: the commerce-builder plugin for building shopping and me
- anthropics/life-sciences [marketplace] *649*  items=1 - Skills for life sciences research, data analysis, and discovery
- anthropics/k12-teacher-skills [marketplace] *626*  items=1 - Plugin marketplace for K-12 Education and Claude for Teachers.
- anthropics/healthcare [marketplace] *446*  items=1 - Claude for Healthcare — one plugin bundling payer, provider, pharma, and general
- anthropics/oncall-kit [marketplace] *272*  items=1 - 
- anthropics/claude-for-financial-advisors [plugin,marketplace] *150*  items=2 - Ready-to-run workflows for financial advisors in Claude Cowork, drawing live dat
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
- mattpocock/skills [plugin] *323168*  items=2 - Matt Pocock's agent skills for real engineering — grilling, spec/ticket flows, T
- obra/superpowers [plugin,skill] *316892*  items=4 - Superpowers teaches Claude brainstorming, subagent driven development with built
- heygen-com/hyperframes [plugin] *83533*  items=2 - HyperFrames by HeyGen. Write HTML, render video. Compositions, GSAP and runtime 
- ChromeDevTools/chrome-devtools-mcp [plugin,mcp-server] *55184*  items=4 - Control and inspect a live Chrome browser from your coding agent. Record perform
- confident-ai/deepeval [plugin] *19468* ['product-stars'] items=1 - Skills for adding DeepEval evaluations, tracing, datasets, Confident AI reports,
- huggingface/skills [plugin] *11341*  items=2 - Build, train, evaluate, and use open source AI models, datasets, and spaces.
- wonderwhy-er/DesktopCommanderMCP [plugin,mcp-server] *10299*  items=4 - MCP server for terminal commands, process management, and file operations across
- GoogleChrome/modern-web-guidance [plugin] *7817* ['star-spike'] items=2 - Keep your coding agent up to date with the latest web best practices
- Eigenwise/atomic-agents [plugin,marketplace] *6328* ['product-stars'] items=3 - Comprehensive development workflow for building AI agents with the Atomic Agents
- exa-labs/exa-mcp-server [plugin,mcp-server] *5229*  items=3 - Exa AI web search, deep research, and content extraction. Provides MCP tools and
- expo/skills [plugin] *4128*  items=2 - Official Expo skills for building, deploying, upgrading, and debugging React Nat
- NVIDIA/skills [plugin] *3954*  items=2 - Find the right NVIDIA skill for GPU acceleration, CUDA, AI agents, data loading,
- aws/agent-toolkit-for-aws [plugin] *3478*  items=8 - Build, deploy, and operate AI agents on AWS. Skills for scaffolding agents with 
- cloudflare/skills [plugin] *3355*  items=2 - Skills for the Cloudflare developer platform: Workers, Durable Objects, Agents S
- modelcontextprotocol/ext-apps [plugin] *3093*  items=3 - Skills for creating MCP Apps with the MCP Apps SDK
- figma/mcp-server-guide [plugin,mcp-server] *2182*  items=4 - Figma design platform integration. Access design files, extract component inform
- stripe/ai [plugin,mcp-server] *2059*  items=3 - Stripe development plugin for Claude
- MicrosoftDocs/mcp [plugin,mcp-server] *1986*  items=3 - Access official Microsoft documentation, API references, and code samples for Az
- EpicGames/unreal-engine-skills-for-claude-code-plugin [plugin] *1959*  items=2 - Control Unreal Editor directly from Claude Code via MCP. Hundreds of tools expos
- microsoft/azure-skills [plugin] *1637*  items=2 - Transform Claude into an Azure expert. This plugin integrates the Azure MCP serv
- forcedotcom/sf-skills [plugin,skill] *1163*  items=2 - Build Salesforce apps and agents using these core building blocks: metadata, Ape
- atlassian/atlassian-mcp-server [plugin,mcp-server] *1157*  items=3 - Connect to Atlassian products including Jira and Confluence. Search and create i
- superdesigndev/superdesign-skill [plugin,skill] *994*  items=2 - Design or redesign frontend UI and marketing graphics on the Superdesign infinit
- awslabs/agent-plugins [plugin] *941*  items=10 - Guide developers through adding maps, places search, geocoding, routing, and oth
- Shopify/Shopify-AI-Toolkit [plugin] *637*  items=2 - Shopify's AI Toolkit provides 18 development skills for building on the Shopify 
- Unity-Technologies/unity-agent-plugin [plugin] *635*  items=2 - Unity's official plugin for Claude Code, with curated skills for game developmen
- duckdb/duckdb-skills [plugin] *617*  items=2 - DuckDB-powered skills for Claude Code: read any data file, attach and query Duck
- gitroomhq/postiz-agent [plugin] *569*  items=3 - Social media automation CLI for scheduling posts, managing integrations, uploadi
- ClickHouse/agent-skills [plugin] *565*  items=2 - 28 best practice rules for ClickHouse schema design, query optimization, and dat
- TheQtCompanyRnD/agent-skills [plugin] *538*  items=3 - Agentic engineering skills for Qt software development — Qt C++/QML code review,

## Top 30 by stars: listed
- DietrichGebert/ponytail [plugin] *189888*  items=2 - Lazy senior dev mode. Forces the simplest, shortest solution that actually works
- JuliusBrussee/caveman [plugin,skill] *119497*  items=2 - Auto-activation works differently per agent: Claude Code uses SessionStart hooks
- thedotmack/claude-mem [plugin,skill] *116631*  items=3 - Persistent memory system for Claude Code - seamlessly preserve context across se
- pbakaus/impeccable [plugin] *109121*  items=1 - Great design prompts require design vocabulary. Most people don't have it. You c
- Egonex-AI/Understand-Anything [plugin,skill] *92435*  items=2 - Understand Anything is a Claude Code plugin that analyzes your project with a mu
- mem0ai/mem0 [plugin] *68898* ['product-stars'] items=1 - Connect Mem0 to Claude to give your agent persistent memory across sessions. Cla
- mvanhorn/last30days-skill [plugin] *67460*  items=1 - last-30-days is a Claude Code skill that searches the web and delivers a structu
- coreyhaines31/marketingskills [plugin,skill] *60006*  items=3 - coreyhaines31
- DayuanJiang/next-ai-draw-io [plugin,mcp-server] *36919*  items=2 - AI-powered Draw.io diagram generation with real-time browser preview. Create flo
- mksglu/context-mode [plugin] *34006*  items=1 - MCP is the protocol for tool access. We're the virtualization layer for context.
- alirezarezvani/claude-skills [plugin,skill] *29728*  items=2 - Playwright Pro turns your AI coding agent into a senior test automation engineer
- jarrodwatts/claude-hud [plugin,collection] *29182*  items=2 - Real-time statusline HUD for Claude Code - context health, tool activity, agent 
- AgriciDaniel/claude-seo [plugin] *28758*  items=1 - Comprehensive SEO analysis plugin for Claude Code. Performs full site audits wit
- promptfoo/promptfoo [plugin] *27118*  items=1 - Teaches AI coding agents to create and maintain promptfoo eval suites. Encodes b
- browser-use/browser-harness [plugin] *19051*  items=1 - Open-source browser agent driven via CDP — direct browser control, 79K stars, YC
- Jeffallan/claude-skills [plugin,skill,collection] *12346*  items=3 - 66 specialized skills for full-stack development: 12 language experts (Python, T
- nicobailon/visual-explainer [plugin,collection] *11034*  items=3 - An agent skill that turns complex terminal output into styled HTML pages you act
- revfactory/harness [plugin,agent] *9355*  items=3 - Harness leverages Claude Code's agent team system to decompose complex tasks int
- Eventual-Inc/Daft [plugin] *5848* ['product-stars'] items=1 - Skills for working with Daft, a high-performance data engine for AI and multimod
- clidey/whodb [plugin] *5056* ['product-stars'] items=1 - Database management tools for Claude Code. Query databases, explore schemas, ana
- nyldn/claude-octopus [plugin] *4439*  items=2 - Multi-LLM orchestration for Claude Code and Cowork. Coordinates 8 AI providers (
- giancarloerra/SocratiCode [plugin,mcp-server] *3372*  items=2 - Enterprise-grade (40m+ lines) codebase intelligence in a zero-setup, private and
- Chachamaru127/claude-code-harness [plugin,agent] *3207*  items=2 - Autonomous Plan → Work → Review cycle for Claude Code. Go-native engine with 25×
- fabio-rovai/open-ontologies [plugin] *2886*  items=1 - AI-native ontology engineering with 39 MCP tools backed by an in-memory Oxigraph
- AgriciDaniel/claude-blog [plugin] *2734*  items=1 - AI-powered blog creation and optimization skill with 20 commands, 4 specialized 
- nizos/tdd-guard [plugin,collection] *2376*  items=2 - Enforces Test-Driven Development by intercepting file operations in Claude Code.
- AminForou/mcp-gsc [plugin] *2190*  items=1 - Connect Google Search Console to Claude Code. Query rankings, inspect URLs, audi
- kenryu42/cc-safety-net [plugin,collection] *2010*  items=3 - Block destructive git and filesystem commands before execution
- severity1/claude-code-prompt-improver [plugin] *1969*  items=1 - Intelligent prompt optimization using skill-based architecture. Enriches vague p
- codeaholicguy/ai-devkit [plugin] *1666*  items=1 - A structured software development toolkit that helps Claude Code follow senior-e

## Top 30 by stars: verified
- morluto/rea [marketplace,mcp-server] *455791*  items=2 - Reverse engineer anything with agents, from app behavior down to native binaries
- affaan-m/ECC [collection] *302102*  items=1 - Top-notch, well-written resources covering "just about everything" from core eng
- firecrawl/firecrawl [skill] *201334* ['product-stars'] items=1 - Supercharge your AI agents with data from the web and beyond. Building the libra
- nextlevelbuilder/ui-ux-pro-max-skill [marketplace] *148784*  items=1 - An AI skill that provides design intelligence for building professional UI/UX ac
- vercel/next.js [marketplace] *143497* ['product-stars'] items=1 - The React Framework
- garrytan/gstack [agent] *141401*  items=1 - Garry Tan's (Y Combinator) Claude Code setup and "open source software factory" 
- browser-use/browser-use [mcp-server] *120870*  items=1 - Browser agents and stealth cloud browsers for AI: run web tasks, fill forms, ext
- addyosmani/agent-skills [marketplace] *116808*  items=1 - Production-grade engineering skills for AI coding agents.
- Leonxlnx/taste-skill [marketplace] *114469*  items=1 - Agent skills that give coding agents taste: art direction, reference images and 
- paperclipai/paperclip [skill,mcp-server] *113464*  items=2 - The open-source app everyone uses to manage agents at work
- debpalash/VoiceStudio [skill] *109370* ['product-stars'] items=1 - VoiceStudio is the open-source, fully-local ElevenLabs alternative — voice cloni
- nexu-io/open-design [marketplace] *107415*  items=1 - The 1st Collaborative AI Design Agent Workspace. Local-first and open source. Cr
- ruvnet/RuView [marketplace] *104186*  items=1 - π RuView turns commodity WiFi signals into real-time spatial intelligence, vital
- D4Vinci/Scrapling [mcp-server] *102249*  items=1 - Web scraping with stealth HTTP, real browsers, and Cloudflare bypass. CSS select
- tt-a1i/archify [skill,collection] *96002*  items=2 - An Agent Skill for Claude Code that generates interactive architecture, workflow
- storybookjs/storybook [marketplace] *91552* ['product-stars'] items=1 - Storybook is the industry standard workshop for building, documenting, and testi
- koala73/worldmonitor [skill,mcp-server] *90550* ['product-stars'] items=2 - Real-time global intelligence dashboard. AI-powered news aggregation, geopolitic
- bytedance/deer-flow [skill] *85294*  items=1 - An open-source long-horizon SuperAgent harness that researches, codes, and creat
- career-ops-hq/career-ops [plugin] *82266*  items=1 - Open-source AI job search agent and job finder: scan job boards, score each job 
- ruvnet/ruflo [marketplace,mcp-server] *81591*  items=3 - 🌊 The original agent harness. Deploy intelligent multi-player swarms, coordinate
- netdata/netdata [mcp-server] *81387*  items=1 - Real-time infrastructure monitoring with metrics, logs, alerts, and ML-based ano
- shareAI-lab/learn-claude-code [collection] *80347*  items=1 - A really interesting analysis of how coding agents like Claude Code are designed
- OpenMontageInc/OpenMontage [skill] *80077*  items=1 - World's first open-source, agentic video production system. 12 production pipeli
- headroomlabs-ai/headroom [marketplace] *79513*  items=1 - Compress tool outputs, logs, files, and RAG chunks before they reach the LLM. 20
- ComposioHQ/awesome-claude-skills [skill] *79369*  items=1 - A curated list of awesome Claude Skills, resources, and tools for customizing Cl
- rohitg00/ai-engineering-from-scratch [skill] *78611* ['product-stars'] items=1 - Learn AI Engineering! Learn it. Build it. Ship it for others.
- hugohe3/ppt-master [marketplace] *76394* ['product-stars'] items=1 - AI turns documents or topics into real, native PowerPoint decks—with native shap
- usestrix/strix [skill] *75213* ['product-stars'] items=1 - Open-source AI penetration testing tool to find and fix your app’s vulnerabiliti
- tw93/Mole [marketplace] *74816* ['product-stars'] items=1 - 🐹 Open-source Mac and PC cleaner. Keep your machine clean, light, and running li
- thedaviddias/Front-End-Checklist [marketplace,mcp-server] *74714* ['product-stars'] items=2 - 🗂 The essential checklist for modern web development, for humans and AI agents

## Top 30 by stars: watch
- f/prompts.chat [marketplace] *177030* ['product-stars'] items=1 - f.k.a. Awesome ChatGPT Prompts. Share, discover, and collect prompts from the co
- opendatalab/MinerU [skill] *83582* ['product-stars'] items=1 - Transforms complex documents like PDFs and Office docs into LLM-ready markdown/J
- code-yeongyu/oh-my-openagent [skill] *70885* ['product-stars'] items=1 - OmO: Just type "mass ulw" keyword with your prompt. Now you are the master of gr
- Imbad0202/academic-research-skills [marketplace] *56708*  items=1 - Academic Research Skills for Claude Code: research → write → review → revise → f
- bmad-code-org/BMAD-METHOD [skill] *55324* ['product-stars'] items=1 - Breakthrough Method for Agile Ai Driven Development
- tldraw/tldraw [mcp-server] *51399*  items=1 - Draw and visually collaborate with your agents on tldraw's canvas.
- metabase/metabase [mcp-server] *50306*  items=1 - Lets AI clients search, explore, query, and visualize data in a Metabase instanc
- abhigyanpatwari/GitNexus [marketplace] *48482* ['product-stars'] items=1 - GitNexus: The Zero-Server Code Intelligence Engine
- serverless/serverless [skill] *46928* ['product-stars'] items=1 - ⚡ Serverless Framework – Effortlessly build apps that auto-scale, incur zero cos
- PostHog/posthog [mcp-server] *40768*  items=1 - Official PostHog MCP Server for product analytics, feature flags, experiments, a
- openai/codex-plugin-cc [marketplace] *35102*  items=1 - Use Codex from Claude Code to review code or delegate tasks.
- zarazhangrui/frontend-slides [marketplace] *32277*  items=1 - Create beautiful slides on the web using a coding agent's frontend skills
- oraios/serena [mcp-server] *31337*  items=1 - A powerful toolkit for coding, providing semantic retrieval and editing capabili
- hypit-ai/hypit [skill] *29574* ['product-stars'] items=1 - Clone any viral video with AI agents. Not just a script, the whole workflow: swa
- openai/skills [skill] *28716*  items=1 - Skills Catalog for Codex
- vercel/ai [skill] *27905* ['product-stars'] items=1 - The AI Toolkit for TypeScript. From the creators of Next.js, the AI SDK is a fre
- clockworklabs/SpacetimeDB [marketplace] *25544* ['product-stars'] items=1 - Development at the speed of light
- nocobase/nocobase [skill] *24909*  items=1 - NocoBase is the open-source platform for building, running, and evolving busines
- different-ai/openwork [mcp-server] *24504*  items=1 - Your OpenWork org's skills, plugins, workflows, and connections through one OAut
- getpaseo/paseo [skill] *23929*  items=1 - Orchestrate multiple coding agents from desktop and mobile
- HKUDS/AI-Trader [skill] *23255* ['product-stars'] items=1 - "AI-Trader: 100% Fully-Automated Agent-Native Trading"
- screenpipe/screenpipe [mcp-server] *22356*  items=1 - Search your local screen recordings, audio transcripts, and computer activity fr
- longbridge/gpui-kit [skill] *20547* ['product-stars'] items=1 - Rust GUI components for building fantastic cross-platform desktop application by
- windmill-labs/windmill [mcp-server] *18559*  items=1 - Run Windmill scripts and flows and manage jobs, schedules, resources and variabl
- greensock/gsap-skills [marketplace] *18374*  items=1 - Official AI skills for GSAP. These skills teach AI coding agents how to correctl
- Canner/WrenAI [skill] *18150* ['product-stars'] items=1 - GenBI (Generative BI) for AI agents, an open-source, governed text-to-SQL throug
- architecture-decision-record/architecture-decision-record [skill] *17461* ['product-stars'] items=1 - Architecture decision record (ADR) examples for software planning, IT leadership
- composio-community/awesome-codex-skills [skill] *17306*  items=1 - A curated list of practical Codex skills for automating workflows across the Cod
- millionco/react-doctor [skill] *15129* ['product-stars'] items=1 - Your agent writes bad React. This catches it
- kyegomez/OpenMythos [plugin] *14922*  items=1 - A theoretical reconstruction of the Claude Mythos architecture, built from first

## Random sample of 20 watch repos (of 499)
- peakspec/marshal [skill] *53*  items=1 - Open-source multi-agent PM-ops team — associate PM, GTM, QA, data-analyst subage reasons=['fails: license (None)'] src=['topic']
- metabase/metabase [mcp-server] *50306*  items=1 - Lets AI clients search, explore, query, and visualize data in a Metabase instanc reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- greensock/gsap-skills [marketplace] *18374*  items=1 - Official AI skills for GSAP. These skills teach AI coding agents how to correctl reasons=['fails: pushed<=90d (106)'] src=['topic']
- marckohlbrugge/sessy [mcp-server] *945*  items=1 - Read-only Amazon SES observability: search events, inspect bounces, pull deliver reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- srmorete/mobile-device-mcp [mcp-server] *53*  items=1 - Control iOS and Android devices with multi-device and seamless Native/WebView su reasons=['fails: pushed<=90d (102)', 'no corroborating signal'] src=['mcp-registry']
- bromoket/x64dbg_mcp [mcp-server] *139*  items=1 - MCP server for x64dbg debugger - 23 mega-tools for AI-powered reverse engineerin reasons=['fails: pushed<=90d (157)'] src=['mcp-registry']
- matlab/agent-skills-playground [skill] *200*  items=1 - A sandbox for prototyping and demonstrating Agent Skills for MATLAB and Simulink reasons=['fails: license (NOASSERTION)'] src=['topic']
- jdevalk/skills [skill] *110*  items=1 - Agent skills for GitHub repos and profiles, WordPress and EmDash plugins, Astro  reasons=['fails: pushed<=90d (131)'] src=['topic']
- marcimastro98/Xenon [mcp-server] *121*  items=1 - Build widgets for the Xenon dashboard: SDK reference, install, runtime errors, t reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- Master-cai/Research-Paper-Writing-Skills [skill] *8319*  items=1 - Skill package for ML/CV/NLP paper writing, curated and adapted from Prof. Peng S reasons=['fails: pushed<=90d (143)'] src=['topic']
- lynxlangya/techne [plugin] *106*  items=1 - Forcing-function skills for AI agents — validated to improve behavior, not just  reasons=['fails: pushed<=90d (133)'] src=['code']
- Owl-Listener/designpowers [plugin] *256*  items=1 - An agent design team you control: 10 agents that run an inclusive design process reasons=['fails: pushed<=90d (142)'] src=['code']
- estruyf/vscode-demo-time [mcp-server] *250*  items=1 - Enables AI assistants to interact with Demo Time and helps build presentations a reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- spences10/svelte-skills-kit [marketplace] *96*  items=1 - 🦀 Claude Code Skills for Svelte and SvelteKit reasons=['fails: license (None)', 'no corroborating signal'] src=['topic']
- e0ipso/strikethroo [plugin] *59*  items=1 - Task management for AI coding assistants reasons=['no corroborating signal'] src=['topic']
- ScrapeGraphAI/scrapegraph-mcp [mcp-server] *122*  items=2 - Enable language models to perform advanced AI-powered web scraping with enterpri reasons=['fails: pushed<=90d (118)'] src=['mcp-registry']
- KnockOutEZ/wigolo [skill,mcp-server] *5539*  items=2 - The go-to web for your AI coding agent — local-first search, fetch, crawl & rese reasons=['fails: license (NOASSERTION)'] src=['mcp-registry', 'topic']
- dengyier/OpenWorkProof [mcp-server] *261*  items=2 - Verifiable agent evidence; opt-in Codex guard and reference SOC alert review. reasons=['no corroborating signal'] src=['mcp-registry']
- 0xnyn/canary [plugin] *496*  items=1 - QA harness built for Claude Code | E2E testing with screen recordings, console l reasons=['fails: license (NOASSERTION)'] src=['code']
- jangviktor-web/nihaixia [skill] *4086*  items=1 - 倪海厦视角的中医Agent Skill，基于倪海厦教学资料开发，蒸馏倪师伤寒论、金匮要略、黄帝内经、神农本草经、针灸篇等，人纪/医案/经方思维，六经辨证，八纲辨 reasons=['fails: license (None)'] src=['topic']

## Errors
- graphql: HTTP 504 after 4 retries <!DOCTYPE html>
<!--

Hello future GitHubber! I bet you're here to remove tho
- broad verify subfolders chunk 12: no data None

## Rate limit
- REST calls this run (uncached): {"core": 186, "search": 42}; last seen: {"core": {"remaining": "4814", "limit": "5000"}, "search": {"remaining": "28", "limit": "30"}}
- GraphQL: 187 calls, cost 52, remaining 4686/5000, stopped early: False
- REST stopped early: False
- repos lacking metadata: 4084; enriched this run: 36092