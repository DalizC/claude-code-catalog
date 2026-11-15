# Catalog report 2026-11-15
Mode: **token**; run time 1638s
Repos (deduped): 3294; flat entries before dedup: 25647

## Tier x type BEFORE dedup (flat entries)
- new/mcp-server: 15603
- watch/mcp-server: 2512
- listed/plugin: 2283
- verified/mcp-server: 1319
- verified/skill: 491
- watch/skill: 479
- watch/marketplace: 416
- official/plugin: 375
- verified/marketplace: 360
- verified/plugin: 339
- watch/plugin: 291
- watch/agent: 221
- verified/collection: 196
- new/skill: 159
- new/marketplace: 158
- anthropic/plugin: 150
- new/plugin: 143
- verified/agent: 47
- new/agent: 32
- anthropic/marketplace: 15
- anthropic/collection: 4
- watch/collection: 2
- anthropic/agent: 1

## Tier AFTER dedup (repos)
- verified: 1904
- watch: 495
- new: 328
- official: 256
- listed: 163
- anthropic: 148

## Type AFTER dedup (items)
- mcp-server: 1788
- plugin: 1357
- skill: 788
- marketplace: 499
- collection: 122
- agent: 48

## Primary type AFTER dedup (repos)
- mcp-server: 1172
- plugin: 832
- skill: 727
- marketplace: 440
- collection: 88
- agent: 35

## Repos by discovery source family
- topic: 1328
- mcp-registry: 1322
- anthropic: 462
- anthropic-org: 188
- code: 182
- curated: 150
- marketplace-expansion: 36

## Flags (all tiers)
- product-stars: 232
- star-spike: 16
- star-anomaly: 1

## star-anomaly by tier
- new: 1

## Metadata gaps
- repos without metadata: 154
- reasons: {'unfetched': 154}

## MCP-only repos excluded: 51
- n8n-io/n8n *210535* ['automation', 'ipaas', 'n8n', 'workflow', 'typescript'] - Fair-code workflow automation platform with native AI capabilities. Combine visu
- assafelovic/gpt-researcher *30695* ['ai', 'python', 'agent', 'automation', 'research'] - An autonomous agent that conducts deep research on any data using any LLM provid
- mrexodia/ida-pro-mcp *13481* ['ida-plugin', 'ida-pro', 'mcp', 'mcp-server', 'modelcontextprotocol'] - AI-powered reverse engineering assistant that bridges IDA Pro with language mode
- mcp-use/mcp-use *10965* ['mcp', 'model-context-protocol', 'apps-sdk', 'mcp-apps', 'mcp-inspector'] - The fullstack MCP framework to develop MCP Apps for ChatGPT / Claude & MCP Serve
- Agents365-ai/drawio-skill *10775* ['drawio', 'diagram', 'agent-skills', 'architecture-diagram', 'claude-code'] - Agent skill that turns natural language, code, Terraform/K8s, SQL, OpenAPI, Asyn
- 21st-dev/magic-mcp *6549* ['21st', 'claude', 'cursor', 'mcp', 'model-context-protocol'] - It's like v0, but in your Cursor / Claude Code / Windsurf: search 10,000+ React/
- Marker-Inc-Korea/AutoRAG *5839* ['document-parser', 'embeddings', 'llm', 'open-source', 'rag'] - Your Personal Librarian Agent. Ask anything on your computer, organize files, re
- jordan-gibbs/hyperresearch *4775* ['agents', 'agentskills', 'claude-code', 'deep-research', 'deep-research-agent'] - Convert Claude Code or Codex into the most intelligent Deep Research Agent. Coll
- stickerdaniel/linkedin-mcp-server *4216* ['linkedin', 'linkedin-scraper', 'mcp', 'mcp-server', 'linkedin-mcp'] - Open-source MCP server for LinkedIn. Give Claude and any MCP-compatible AI agent
- taylorwilsdon/google_workspace_mcp *3518* ['ai', 'gmail', 'google-calendar', 'google-workspace', 'llm'] - Control Gmail, Google Calendar, Docs, Sheets, Slides, Chat, Forms, Tasks, Search
- duty1g/x64dbg-mcp-server *2828* ['ai-agents', 'ai-debugging', 'binary-analysis', 'claude', 'claude-code'] - x64dbg-MCP Server is a native MCP (Model Context Protocol) plugin for x64dbg tha
- alpic-ai/skybridge *2192* ['agent', 'ai', 'apps-sdk', 'chatgpt', 'claude'] - Skybridge is a full-stack TypeScript framework for MCP Apps and ChatGPT Apps. Ty
- study8677/repobrain *1362* ['claude-code', 'codex-cli', 'developer-tools', 'mcp-server', 'windsurf'] - 🧠 RepoBrain (formerly Antigravity) — Give your repo a brain. ChatGPT for your co
- CodeAbra/iai-personal-memory-engine *922* ['claude', 'claude-code', 'local-first', 'mcp', 'mcp-server'] - A cyber brain for your AI. It never forgets a detail, remembers exactly what you
- hetpatel-11/Adobe_Premiere_Pro_MCP *876* ['adobe', 'adobe-premiere-pro', 'adobe-mcp', 'adobe-premiere-pro-mcp', 'ai-video-editing'] - Adobe Premiere Pro MCP. Tools for AI-driven video editing via MCP, for Codex, Cl

## Degradation
- registry complete: True (643 pages, 64294 entries)
- MCP servers merged from the previous catalog (not re-fetched): 0
- GraphQL 403s: 0 (secondary rate limit: 0); retries: 7; queries that gave up: 1
- HTTP retries (5xx/network): 0
- repos with stale metadata reused from the previous catalog (meta_stale): 0

## MCP Registry
- {"pages": 643, "fetched": 64294, "kept": 63276, "dropped": 1018, "bad": 0, "complete": true, "excluded_remote_only": 22792, "excluded_low_signal": 21050, "fallback_merged": 0, "records": 1322, "attached_existing": 155, "new_repo": 1167, "remote_only": 0, "tiers": {"official": 26, "listed": 20, "verified": 951, "new": 130, "watch": 195}}

## Top 20 by trend_7d
- morluto/rea +18764 (4.25%) []
- GoogleChrome/modern-web-guidance +13086 (496.06%) ['star-spike']
- cloudflare/security-audit-skill +6751 (10.23%) []
- debpalash/VoiceStudio +6713 (6.45%) ['product-stars']
- mattpocock/skills +6694 (2.11%) []
- anthropics/skills +5787 (3.06%) []
- google/elephant-goldfish-model +5173 (36.66%) ['star-spike']
- JuneYaooo/rea-video +4933 (130.92%) ['star-spike']
- vercel-labs/agent-desktop +4779 (25.07%) ['star-spike', 'product-stars']
- Nutlope/hallmark +4719 (9.36%) []
- pbakaus/impeccable +4638 (4.39%) []
- DietrichGebert/ponytail +4528 (2.43%) []
- ZhuLinsen/daily_stock_analysis +4452 (6.56%) ['product-stars']
- vercel-labs/agent-browser +4315 (9.19%) ['product-stars']
- Leonxlnx/taste-skill +4023 (3.6%) []
- affaan-m/ECC +3979 (1.33%) []
- heygen-com/hyperframes +3755 (4.66%) []
- addyosmani/agent-skills +3700 (3.25%) []
- D4Vinci/Scrapling +3611 (3.63%) []
- obra/superpowers +3523 (1.12%) []

## Code search vs topic search
- repos found by code search: 182
- also in topic search: 10
- code-only: 160; tiers: {'anthropic': 1, 'verified': 82, 'watch': 60, 'new': 17}

## Top 30 by stars: anthropic
- anthropics/skills [marketplace,collection] *194700*  items=2 - Anthropic example skills
- anthropics/claude-code [marketplace,agent] *155703*  items=2 - Anthropic's Claude Code plugins, installed from the claude-plugins-official repo
- anthropics/claude-plugins-official [plugin,marketplace,collection] *47321*  items=15 - Directory of popular Claude Code extensions including development tools, product
- anthropics/financial-services [marketplace] *41295*  items=1 - 
- anthropics/knowledge-work-plugins [marketplace] *35926*  items=1 - 
- anthropics/claude-for-legal [marketplace] *10009*  items=1 - Reference agents, skills, and data connectors for the legal workflows we see mos
- anthropics/claude-code-action [collection] *9962*  items=1 - The official GitHub Action for running Claude Code in CI: mention @claude in iss
- anthropics/claude-code-security-review [collection] *6909*  items=1 - An official AI-powered security-review GitHub Action that uses Claude to analyze
- anthropics/claude-plugins-community [marketplace] *4894*  items=1 - 
- anthropics/commerce-agents [marketplace] *3474*  items=1 - Claude Commerce Agents: the commerce-builder plugin for building shopping and me
- anthropics/life-sciences [marketplace] *651*  items=1 - Skills for life sciences research, data analysis, and discovery
- anthropics/k12-teacher-skills [marketplace] *630*  items=1 - Plugin marketplace for K-12 Education and Claude for Teachers.
- anthropics/healthcare [marketplace] *450*  items=1 - Claude for Healthcare — one plugin bundling payer, provider, pharma, and general
- anthropics/oncall-kit [marketplace] *274*  items=1 - 
- anthropics/claude-for-financial-advisors [plugin,marketplace] *153*  items=2 - Ready-to-run workflows for financial advisors in Claude Cowork, drawing live dat
- anthropics/claude-tag-plugins [marketplace] *78*  items=1 - Plugins that connect Claude Tag to common SaaS services, plus charting and confi
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
- mattpocock/skills [plugin] *324585*  items=2 - Matt Pocock's agent skills for real engineering — grilling, spec/ticket flows, T
- obra/superpowers [plugin,skill] *317719*  items=4 - Superpowers teaches Claude brainstorming, subagent driven development with built
- heygen-com/hyperframes [plugin,mcp-server] *84415*  items=3 - HyperFrames by HeyGen. Write HTML, render video. Compositions, GSAP and runtime 
- ChromeDevTools/chrome-devtools-mcp [plugin,mcp-server] *56420*  items=4 - Control and inspect a live Chrome browser from your coding agent. Record perform
- confident-ai/deepeval [plugin] *19482* ['product-stars'] items=1 - Skills for adding DeepEval evaluations, tracing, datasets, Confident AI reports,
- GoogleChrome/modern-web-guidance [plugin] *15724* ['star-spike'] items=2 - Keep your coding agent up to date with the latest web best practices
- huggingface/skills [plugin] *11351*  items=2 - Build, train, evaluate, and use open source AI models, datasets, and spaces.
- wonderwhy-er/DesktopCommanderMCP [plugin,mcp-server] *10318*  items=4 - MCP server for terminal commands, process management, and file operations across
- Eigenwise/atomic-agents [plugin,marketplace] *6329* ['product-stars'] items=3 - Comprehensive development workflow for building AI agents with the Atomic Agents
- exa-labs/exa-mcp-server [plugin,mcp-server] *5234*  items=3 - Exa AI web search, deep research, and content extraction. Provides MCP tools and
- expo/skills [plugin] *4153*  items=2 - Official Expo skills for building, deploying, upgrading, and debugging React Nat
- NVIDIA/skills [plugin] *3994*  items=2 - Find the right NVIDIA skill for GPU acceleration, CUDA, AI agents, data loading,
- aws/agent-toolkit-for-aws [plugin] *3492*  items=8 - Build, deploy, and operate AI agents on AWS. Skills for scaffolding agents with 
- cloudflare/skills [plugin] *3369*  items=2 - Skills for the Cloudflare developer platform: Workers, Durable Objects, Agents S
- modelcontextprotocol/ext-apps [plugin] *3100*  items=3 - Skills for creating MCP Apps with the MCP Apps SDK
- figma/mcp-server-guide [plugin,mcp-server] *2191*  items=4 - Figma design platform integration. Access design files, extract component inform
- stripe/ai [plugin,mcp-server] *2063*  items=3 - Stripe development plugin for Claude
- MicrosoftDocs/mcp [plugin,mcp-server] *1992*  items=3 - Access official Microsoft documentation, API references, and code samples for Az
- EpicGames/unreal-engine-skills-for-claude-code-plugin [plugin] *1970*  items=2 - Control Unreal Editor directly from Claude Code via MCP. Hundreds of tools expos
- microsoft/azure-skills [plugin] *1643*  items=2 - Transform Claude into an Azure expert. This plugin integrates the Azure MCP serv
- forcedotcom/sf-skills [plugin,skill] *1167*  items=2 - Build Salesforce apps and agents using these core building blocks: metadata, Ape
- atlassian/atlassian-mcp-server [plugin,mcp-server] *1163*  items=3 - Connect to Atlassian products including Jira and Confluence. Search and create i
- superdesigndev/superdesign-skill [plugin,skill] *1007*  items=2 - Design or redesign frontend UI and marketing graphics on the Superdesign infinit
- awslabs/agent-plugins [plugin] *942*  items=10 - Guide developers through adding maps, places search, geocoding, routing, and oth
- Shopify/Shopify-AI-Toolkit [plugin] *640*  items=2 - Shopify's AI Toolkit provides 18 development skills for building on the Shopify 
- Unity-Technologies/unity-agent-plugin [plugin] *640*  items=2 - Unity's official plugin for Claude Code, with curated skills for game developmen
- duckdb/duckdb-skills [plugin] *617*  items=2 - DuckDB-powered skills for Claude Code: read any data file, attach and query Duck
- gitroomhq/postiz-agent [plugin] *573*  items=3 - Social media automation CLI for scheduling posts, managing integrations, uploadi
- ClickHouse/agent-skills [plugin] *567*  items=2 - 28 best practice rules for ClickHouse schema design, query optimization, and dat
- TheQtCompanyRnD/agent-skills [plugin] *541*  items=3 - Agentic engineering skills for Qt software development — Qt C++/QML code review,

## Top 30 by stars: listed
- DietrichGebert/ponytail [plugin] *191013*  items=2 - Lazy senior dev mode. Forces the simplest, shortest solution that actually works
- JuliusBrussee/caveman [plugin,skill] *120154*  items=2 - Auto-activation works differently per agent: Claude Code uses SessionStart hooks
- thedotmack/claude-mem [plugin,skill] *117163*  items=3 - Persistent memory system for Claude Code - seamlessly preserve context across se
- pbakaus/impeccable [plugin] *110317*  items=1 - Great design prompts require design vocabulary. Most people don't have it. You c
- Egonex-AI/Understand-Anything [plugin,skill] *92651*  items=2 - Understand Anything is a Claude Code plugin that analyzes your project with a mu
- mem0ai/mem0 [plugin] *68987* ['product-stars'] items=1 - Connect Mem0 to Claude to give your agent persistent memory across sessions. Cla
- mvanhorn/last30days-skill [plugin] *67688*  items=1 - last-30-days is a Claude Code skill that searches the web and delivers a structu
- coreyhaines31/marketingskills [plugin,skill] *60381*  items=3 - coreyhaines31
- DayuanJiang/next-ai-draw-io [plugin,mcp-server] *36953*  items=2 - AI-powered Draw.io diagram generation with real-time browser preview. Create flo
- mksglu/context-mode [plugin] *34110*  items=1 - MCP is the protocol for tool access. We're the virtualization layer for context.
- alirezarezvani/claude-skills [plugin,skill] *29826*  items=2 - Playwright Pro turns your AI coding agent into a senior test automation engineer
- AgriciDaniel/claude-seo [plugin] *29439*  items=1 - Comprehensive SEO analysis plugin for Claude Code. Performs full site audits wit
- jarrodwatts/claude-hud [plugin,collection] *29204*  items=2 - Real-time statusline HUD for Claude Code - context health, tool activity, agent 
- promptfoo/promptfoo [plugin] *27202*  items=1 - Teaches AI coding agents to create and maintain promptfoo eval suites. Encodes b
- browser-use/browser-harness [plugin] *19084*  items=1 - Open-source browser agent driven via CDP — direct browser control, 79K stars, YC
- Jeffallan/claude-skills [plugin,skill,collection] *12366*  items=3 - 66 specialized skills for full-stack development: 12 language experts (Python, T
- nicobailon/visual-explainer [plugin,collection] *11097*  items=3 - An agent skill that turns complex terminal output into styled HTML pages you act
- revfactory/harness [plugin,agent] *9364*  items=3 - Harness leverages Claude Code's agent team system to decompose complex tasks int
- Eventual-Inc/Daft [plugin] *5849* ['product-stars'] items=1 - Skills for working with Daft, a high-performance data engine for AI and multimod
- clidey/whodb [plugin] *5057* ['product-stars'] items=1 - Database management tools for Claude Code. Query databases, explore schemas, ana
- nyldn/claude-octopus [plugin] *4443*  items=2 - Multi-LLM orchestration for Claude Code and Cowork. Coordinates 8 AI providers (
- giancarloerra/SocratiCode [plugin,mcp-server] *3375*  items=2 - Enterprise-grade (40m+ lines) codebase intelligence in a zero-setup, private and
- Chachamaru127/claude-code-harness [plugin,agent] *3209*  items=2 - Autonomous Plan → Work → Review cycle for Claude Code. Go-native engine with 25×
- fabio-rovai/open-ontologies [plugin] *2903*  items=1 - AI-native ontology engineering with 39 MCP tools backed by an in-memory Oxigraph
- AgriciDaniel/claude-blog [plugin] *2752*  items=1 - AI-powered blog creation and optimization skill with 20 commands, 4 specialized 
- nizos/tdd-guard [plugin,collection] *2377*  items=2 - Enforces Test-Driven Development by intercepting file operations in Claude Code.
- AminForou/mcp-gsc [plugin] *2204*  items=1 - Connect Google Search Console to Claude Code. Query rankings, inspect URLs, audi
- kenryu42/cc-safety-net [plugin,collection] *2042*  items=3 - Block destructive git and filesystem commands before execution
- severity1/claude-code-prompt-improver [plugin] *1970*  items=1 - Intelligent prompt optimization using skill-based architecture. Enriches vague p
- aklofas/kicad-happy [plugin] *1675*  items=1 - KiCad electronics design skills. Analyze schematics, review PCB layouts, downloa

## Top 30 by stars: verified
- morluto/rea [marketplace,mcp-server] *460288*  items=2 - Reverse engineer anything with agents, from app behavior down to native binaries
- affaan-m/ECC [collection] *303250*  items=1 - Top-notch, well-written resources covering "just about everything" from core eng
- firecrawl/firecrawl [skill] *201857* ['product-stars'] items=1 - Supercharge your AI agents with data from the web and beyond. Building the libra
- nextlevelbuilder/ui-ux-pro-max-skill [marketplace] *149589*  items=1 - An AI skill that provides design intelligence for building professional UI/UX ac
- vercel/next.js [marketplace] *143525* ['product-stars'] items=1 - The React Framework
- garrytan/gstack [agent] *141594*  items=1 - Garry Tan's (Y Combinator) Claude Code setup and "open source software factory" 
- browser-use/browser-use [mcp-server] *121053*  items=1 - Browser agents and stealth cloud browsers for AI: run web tasks, fill forms, ext
- addyosmani/agent-skills [marketplace] *117638*  items=1 - Production-grade engineering skills for AI coding agents.
- Leonxlnx/taste-skill [marketplace] *115747*  items=1 - Agent skills that give coding agents taste: art direction, reference images and 
- paperclipai/paperclip [skill,mcp-server] *113964*  items=2 - The open-source app everyone uses to manage agents at work
- debpalash/VoiceStudio [skill] *110795* ['product-stars'] items=1 - VoiceStudio is the open-source, fully-local ElevenLabs alternative — voice cloni
- nexu-io/open-design [marketplace] *107678*  items=1 - The 1st Collaborative AI Design Agent Workspace. Local-first and open source. Cr
- ruvnet/RuView [marketplace] *104309*  items=1 - π RuView turns commodity WiFi signals into real-time spatial intelligence, vital
- D4Vinci/Scrapling [mcp-server] *103027*  items=1 - Web scraping with stealth HTTP, real browsers, and Cloudflare bypass. CSS select
- tt-a1i/archify [skill,collection] *96502*  items=2 - An Agent Skill for Claude Code that generates interactive architecture, workflow
- storybookjs/storybook [marketplace] *91574* ['product-stars'] items=1 - Storybook is the industry standard workshop for building, documenting, and testi
- koala73/worldmonitor [skill,mcp-server] *90656* ['product-stars'] items=2 - Real-time global intelligence dashboard. AI-powered news aggregation, geopolitic
- career-ops-hq/career-ops [plugin] *82618*  items=1 - Open-source AI job search agent and job finder: scan job boards, score each job 
- ruvnet/ruflo [marketplace,mcp-server] *81730*  items=3 - 🌊 The original agent harness. Deploy intelligent multi-player swarms, coordinate
- netdata/netdata [mcp-server] *81419*  items=1 - Real-time infrastructure monitoring with metrics, logs, alerts, and ML-based ano
- OpenMontageInc/OpenMontage [skill] *80535*  items=1 - World's first open-source, agentic video production system. 12 production pipeli
- shareAI-lab/learn-claude-code [collection] *80412*  items=1 - A really interesting analysis of how coding agents like Claude Code are designed
- headroomlabs-ai/headroom [marketplace] *79683*  items=1 - Compress tool outputs, logs, files, and RAG chunks before they reach the LLM. 20
- ComposioHQ/awesome-claude-skills [skill] *79520*  items=1 - A curated list of awesome Claude Skills, resources, and tools for customizing Cl
- rohitg00/ai-engineering-from-scratch [skill] *78961* ['product-stars'] items=1 - Learn AI Engineering! Learn it. Build it. Ship it for others.
- hugohe3/ppt-master [marketplace] *76893* ['product-stars'] items=1 - AI turns documents or topics into real, native PowerPoint decks—with native shap
- usestrix/strix [skill] *75611* ['product-stars'] items=1 - Open-source AI penetration testing tool to find and fix your app’s vulnerabiliti
- tw93/Mole [marketplace] *75097* ['product-stars'] items=1 - 🐹 Open-source Mac and PC cleaner. Keep your machine clean, light, and running li
- thedaviddias/Front-End-Checklist [marketplace,mcp-server] *74740* ['product-stars'] items=2 - 🗂 The essential checklist for modern web development, for humans and AI agents
- cloudflare/security-audit-skill [skill] *72743*  items=1 - A coding-agent skill for multi-phase security audits with independently verified

## Top 30 by stars: watch
- f/prompts.chat [marketplace] *177414* ['product-stars'] items=1 - f.k.a. Awesome ChatGPT Prompts. Share, discover, and collect prompts from the co
- opendatalab/MinerU [skill] *83685* ['product-stars'] items=1 - Transforms complex documents like PDFs and Office docs into LLM-ready markdown/J
- code-yeongyu/oh-my-openagent [skill] *70915* ['product-stars'] items=1 - OmO: Just type "mass ulw" keyword with your prompt. Now you are the master of gr
- Imbad0202/academic-research-skills [marketplace] *56924*  items=1 - Academic Research Skills for Claude Code: research → write → review → revise → f
- bmad-code-org/BMAD-METHOD [skill] *55375* ['product-stars'] items=1 - Breakthrough Method for Agile Ai Driven Development
- tldraw/tldraw [mcp-server] *51425*  items=1 - Draw and visually collaborate with your agents on tldraw's canvas.
- metabase/metabase [mcp-server] *50335*  items=1 - Lets AI clients search, explore, query, and visualize data in a Metabase instanc
- abhigyanpatwari/GitNexus [marketplace] *48546* ['product-stars'] items=1 - GitNexus: The Zero-Server Code Intelligence Engine
- serverless/serverless [skill] *46932* ['product-stars'] items=1 - ⚡ Serverless Framework – Effortlessly build apps that auto-scale, incur zero cos
- PostHog/posthog [mcp-server] *40792*  items=1 - Official PostHog MCP Server for product analytics, feature flags, experiments, a
- openai/codex-plugin-cc [marketplace] *35127*  items=1 - Use Codex from Claude Code to review code or delegate tasks.
- zarazhangrui/frontend-slides [marketplace] *32329*  items=1 - Create beautiful slides on the web using a coding agent's frontend skills
- oraios/serena [mcp-server] *31385*  items=1 - A powerful toolkit for coding, providing semantic retrieval and editing capabili
- hypit-ai/hypit [skill] *29880* ['product-stars'] items=1 - Clone any viral video with AI agents. Not just a script, the whole workflow: swa
- openai/skills [skill] *28752*  items=1 - Skills Catalog for Codex
- vercel/ai [skill] *27961* ['product-stars'] items=1 - The AI Toolkit for TypeScript. From the creators of Next.js, the AI SDK is a fre
- clockworklabs/SpacetimeDB [marketplace] *25551* ['product-stars'] items=1 - Development at the speed of light
- nocobase/nocobase [skill] *24929*  items=1 - NocoBase is the open-source platform for building, running, and evolving busines
- different-ai/openwork [mcp-server] *24525*  items=1 - Your OpenWork org's skills, plugins, workflows, and connections through one OAut
- getpaseo/paseo [skill] *24073*  items=1 - Orchestrate multiple coding agents from desktop and mobile
- HKUDS/AI-Trader [skill] *23273* ['product-stars'] items=1 - "AI-Trader: 100% Fully-Automated Agent-Native Trading"
- screenpipe/screenpipe [mcp-server] *22379*  items=1 - Search your local screen recordings, audio transcripts, and computer activity fr
- longbridge/gpui-kit [skill] *20706* ['product-stars'] items=1 - Rust GUI components for building fantastic cross-platform desktop application by
- windmill-labs/windmill [mcp-server] *18592*  items=1 - Run Windmill scripts and flows and manage jobs, schedules, resources and variabl
- greensock/gsap-skills [marketplace] *18464*  items=1 - Official AI skills for GSAP. These skills teach AI coding agents how to correctl
- Canner/WrenAI [skill] *18242* ['product-stars'] items=1 - GenBI (Generative BI) for AI agents, an open-source, governed text-to-SQL throug
- architecture-decision-record/architecture-decision-record [skill] *17464* ['product-stars'] items=1 - Architecture decision record (ADR) examples for software planning, IT leadership
- composio-community/awesome-codex-skills [skill] *17324*  items=1 - A curated list of practical Codex skills for automating workflows across the Cod
- millionco/react-doctor [skill] *15136* ['product-stars'] items=1 - Your agent writes bad React. This catches it
- kyegomez/OpenMythos [plugin] *14926*  items=1 - A theoretical reconstruction of the Claude Mythos architecture, built from first

## Random sample of 20 watch repos (of 495)
- scasella/claude-dynamic-workflows-codex [marketplace] *330*  items=1 - Run Claude Code dynamic workflows on a local Codex (GPT) backend, plus an intera reasons=['fails: pushed<=90d (126)'] src=['topic']
- n1m21n/Infinite [mcp-server] *331*  items=1 - Infinite audiovisual engine for AI agents: sound, shaders and video patches. Fre reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- millionco/react-doctor [skill] *15136* ['product-stars'] items=1 - Your agent writes bad React. This catches it reasons=['fails: license (NOASSERTION)'] src=['topic']
- matlab/matlab-mcp-server [mcp-server] *1820*  items=1 - Connect AI coding agents to MATLAB. Run code, tests, and analysis via MCP. reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- sverklo/sverklo [mcp-server] *82*  items=1 - Local-first MCP code intelligence: 37 tools — hybrid search, blast-radius, diff  reasons=['fails: pushed<=90d (94)'] src=['mcp-registry']
- clarilayer/clarilayer [mcp-server] *71*  items=1 - Individual-analyst context layer: recall, remember, and reconcile your data and  reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- corey924/ZeroSpec [skill] *65*  items=1 - ZeroSpec is a zero-dependency Markdown framework that helps AI agents understand reasons=['fails: pushed<=90d (127)'] src=['topic']
- VirtusLab/scala-skill [marketplace] *80*  items=1 - Claude Code & Codex Scala Skills: generate direct-style applications with use-ca reasons=['fails: license (None)'] src=['topic']
- master-co/css [mcp-server] *1957*  items=1 - Inspect Master CSS classes, generated CSS, and project stylesheets from your AI  reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- bda-research/node-crawler [skill] *6798* ['product-stars'] items=1 - Web Crawler/Spider for NodeJS + server-side jQuery ;-) reasons=['fails: pushed<=90d (149)'] src=['topic']
- santimattius/structured-coroutines [plugin] *166*  items=1 - The definitive toolkit for enforcing safety, predictability, and efficiency in K reasons=['no corroborating signal'] src=['code']
- lynxlangya/techne [plugin] *106*  items=1 - Forcing-function skills for AI agents — validated to improve behavior, not just  reasons=['fails: pushed<=90d (135)'] src=['code']
- firish/webfetch [mcp-server] *60*  items=1 - Self-hosted web search for LLM agents: search -> fetch -> rank pipeline with sem reasons=['fails: pushed<=90d (115)'] src=['mcp-registry']
- ianho7/ai-friendly-web-design-skill [skill] *78*  items=1 - A skill for coding agents that build, review, and refactor Web UI that should be reasons=['fails: pushed<=90d (146)', 'no corroborating signal'] src=['topic']
- RedPlanetHQ/core [marketplace] *2023*  items=1 - Your Personal AI OS reasons=['fails: license (NOASSERTION)'] src=['topic']
- spronta/crawlie [mcp-server] *127*  items=1 - Technical SEO + GEO (AI-search) site audits: hosted crawls, prioritized fixes, r reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- frumu-ai/tandem [mcp-server] *126*  items=1 - Remote MCP server for Tandem docs, install guides, SDKs, workflows, and agent se reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- dreamrec/LivePilot [mcp-server] *96*  items=1 - Ableton Live 12: 474 tools, 57 domains, nested devices, native modulation, and a reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- popmechanic/VibesOS [plugin] *135*  items=1 - A GUI for Claude Code that makes it easy to vibe code simple, un-hackable apps reasons=['fails: pushed<=90d (110)'] src=['code']
- JuneYaooo/nihaisha-nishi-tcm [skill] *2257*  items=1 - 倪海厦中医课程资料的 Agent Skill：支持课程检索、方证穴位辨析、学习笔记整理与板书截图证据索引。 | An Agent Skill for Ni Ha reasons=['fails: license (None)'] src=['topic']

## Errors
- graphql: HTTP 504 after 4 retries <!DOCTYPE html>
<!--

Hello future GitHubber! I bet you're here to remove tho
- broad verify subfolders chunk 2: no data None

## Rate limit
- REST calls this run (uncached): {"core": 15, "search": 42}; last seen: {"core": {"remaining": "4985", "limit": "5000"}, "search": {"remaining": "29", "limit": "30"}}
- GraphQL: 208 calls, cost 136, remaining 4890/5000, stopped early: False
- REST stopped early: False
- repos lacking metadata: 4105; enriched this run: 35221