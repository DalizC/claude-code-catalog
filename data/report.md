# Catalog report 2026-11-28
Mode: **token**; run time 1448s
Repos (deduped): 3438; flat entries before dedup: 27146

## Tier x type BEFORE dedup (flat entries)
- new/mcp-server: 16934
- watch/mcp-server: 2715
- listed/plugin: 2280
- verified/mcp-server: 1397
- verified/skill: 494
- watch/skill: 474
- watch/marketplace: 422
- verified/marketplace: 376
- official/plugin: 375
- watch/plugin: 298
- watch/agent: 213
- verified/collection: 194
- verified/plugin: 188
- new/skill: 169
- new/marketplace: 168
- anthropic/plugin: 150
- new/plugin: 133
- verified/agent: 57
- new/agent: 32
- anthropic/marketplace: 15
- anthropic/collection: 4
- watch/collection: 3
- anthropic/agent: 1

## Tier AFTER dedup (repos)
- verified: 1980
- watch: 520
- new: 371
- official: 256
- listed: 163
- anthropic: 148

## Type AFTER dedup (items)
- mcp-server: 1903
- plugin: 1205
- skill: 799
- marketplace: 533
- collection: 121
- agent: 59

## Primary type AFTER dedup (repos)
- mcp-server: 1253
- plugin: 833
- skill: 742
- marketplace: 478
- collection: 86
- agent: 46

## Repos by discovery source family
- mcp-registry: 1417
- topic: 1370
- anthropic: 462
- code: 201
- anthropic-org: 188
- curated: 149
- marketplace-expansion: 35

## Flags (all tiers)
- product-stars: 245
- star-spike: 13
- star-anomaly: 1

## star-anomaly by tier
- new: 1

## Metadata gaps
- repos without metadata: 154
- reasons: {'unfetched': 154}

## MCP-only repos excluded: 54
- n8n-io/n8n *212349* ['automation', 'ipaas', 'n8n', 'workflow', 'typescript'] - Fair-code workflow automation platform with native AI capabilities. Combine visu
- assafelovic/gpt-researcher *30969* ['ai', 'python', 'agent', 'automation', 'research'] - An autonomous agent that conducts deep research on any data using any LLM provid
- rocketride-org/rocketride-server *19972* ['cpp', 'mcp', 'vscode-extension', 'agent-framework', 'agent-harness'] - RocketRide is an open source AI meta-harness with the only enterprise-grade runt
- mrexodia/ida-pro-mcp *13607* ['ida-plugin', 'ida-pro', 'mcp', 'mcp-server', 'modelcontextprotocol'] - AI-powered reverse engineering assistant that bridges IDA Pro with language mode
- mcp-use/mcp-use *11015* ['mcp', 'model-context-protocol', 'apps-sdk', 'mcp-apps', 'mcp-inspector'] - The fullstack MCP framework to develop MCP Apps for ChatGPT / Claude & MCP Serve
- Agents365-ai/drawio-skill *10968* ['drawio', 'diagram', 'agent-skills', 'architecture-diagram', 'claude-code'] - Agent skill that turns natural language, code, Terraform/K8s, SQL, OpenAPI, Asyn
- qybaihe/bla *7092* ['adversarial-ai', 'claude-code', 'cursor', 'electron-security', 'llm-security'] - 🛡️ BLA (bla-agents / Blind LLM Agents) — Open-source Blue Defense MCP server & C
- Marker-Inc-Korea/AutoRAG *6095* ['document-parser', 'embeddings', 'llm', 'open-source', 'rag'] - Your Personal Librarian Agent. Ask anything on your computer, organize files, re
- jordan-gibbs/hyperresearch *5152* ['agents', 'agentskills', 'claude-code', 'deep-research', 'deep-research-agent'] - Convert Claude Code or Codex into the most intelligent Deep Research Agent. Coll
- stickerdaniel/linkedin-mcp-server *4328* ['linkedin', 'linkedin-scraper', 'mcp', 'mcp-server', 'linkedin-mcp'] - Open-source MCP server for LinkedIn. Give Claude and any MCP-compatible AI agent
- taylorwilsdon/google_workspace_mcp *3597* ['ai', 'gmail', 'google-calendar', 'google-workspace', 'llm'] - Control Gmail, Google Calendar, Docs, Sheets, Slides, Chat, Forms, Tasks, Search
- duty1g/x64dbg-mcp-server *2887* ['ai-agents', 'ai-debugging', 'binary-analysis', 'claude', 'claude-code'] - x64dbg-MCP Server is a native MCP (Model Context Protocol) plugin for x64dbg tha
- alpic-ai/skybridge *2206* ['agent', 'ai', 'apps-sdk', 'chatgpt', 'claude'] - Skybridge is a full-stack TypeScript framework for MCP Apps and ChatGPT Apps. Ty
- study8677/repobrain *1363* ['claude-code', 'codex-cli', 'developer-tools', 'mcp-server', 'windsurf'] - 🧠 RepoBrain (formerly Antigravity) — Give your repo a brain. ChatGPT for your co
- dansugc/reverse-engineer-marketing *1206* ['ad-library', 'ai-agents', 'claude-code', 'codex', 'competitor-analysis'] - Paste a link, get the whole marketing machine behind it: paid ads, organic socia

## Degradation
- registry complete: True (765 pages, 76444 entries)
- MCP servers merged from the previous catalog (not re-fetched): 0
- GraphQL 403s: 0 (secondary rate limit: 0); retries: 8; queries that gave up: 1
- HTTP retries (5xx/network): 0
- repos with stale metadata reused from the previous catalog (meta_stale): 0

## MCP Registry
- {"pages": 765, "fetched": 76444, "kept": 75296, "dropped": 1148, "bad": 0, "complete": true, "excluded_remote_only": 27954, "excluded_low_signal": 26296, "fallback_merged": 0, "records": 1417, "attached_existing": 170, "new_repo": 1247, "remote_only": 0, "tiers": {"official": 28, "listed": 20, "verified": 1008, "new": 148, "watch": 213}}

## Top 20 by trend_7d
- elementalsouls/Claude-BugHunter +11740 (80.43%) ['star-spike']
- morluto/rea +9600 (2.04%) []
- firecrawl/firecrawl +6335 (3.08%) ['product-stars']
- HKUDS/CLI-Anything +5580 (9.07%) ['product-stars']
- obra/superpowers +5502 (1.7%) []
- zhouxiaoka/autoclip +5375 (43.63%) ['star-spike']
- mattpocock/skills +5266 (1.6%) []
- cathrynlavery/diagram-design +5140 (7.41%) []
- mvanhorn/last30days-skill +4903 (6.85%) []
- DietrichGebert/ponytail +4497 (2.3%) []
- XinaTian/MROffice +4104 (388.27%) ['star-spike']
- heygen-com/hyperframes +4079 (4.66%) []
- erkamyaman/rust-anything +4058 (59.63%) ['star-spike']
- affaan-m/ECC +4038 (1.31%) []
- pbakaus/impeccable +4001 (3.51%) []
- debpalash/VoiceStudio +3919 (3.39%) ['product-stars']
- anthropics/skills +3472 (1.75%) []
- Nutlope/hallmark +3472 (5.91%) []
- heydamir/unslop +3356 (17.34%) []
- xerj-org/xerj +3266 (17.09%) []

## Code search vs topic search
- repos found by code search: 201
- also in topic search: 7
- code-only: 179; tiers: {'anthropic': 1, 'verified': 93, 'watch': 55, 'new': 30}

## Top 30 by stars: anthropic
- anthropics/skills [marketplace,collection] *201603*  items=2 - Anthropic example skills
- anthropics/claude-code [marketplace,agent] *157340*  items=2 - Anthropic's Claude Code plugins, installed from the claude-plugins-official repo
- anthropics/claude-plugins-official [plugin,marketplace,collection] *48492*  items=15 - Directory of popular Claude Code extensions including development tools, product
- anthropics/financial-services [marketplace] *41564*  items=1 - 
- anthropics/knowledge-work-plugins [marketplace] *37198*  items=1 - 
- anthropics/claude-for-legal [marketplace] *10115*  items=1 - Reference agents, skills, and data connectors for the legal workflows we see mos
- anthropics/claude-code-action [collection] *10105*  items=1 - The official GitHub Action for running Claude Code in CI: mention @claude in iss
- anthropics/claude-code-security-review [collection] *7169*  items=1 - An official AI-powered security-review GitHub Action that uses Claude to analyze
- anthropics/claude-plugins-community [marketplace] *4965*  items=1 - 
- anthropics/commerce-agents [marketplace] *3542*  items=1 - Claude Commerce Agents: the commerce-builder plugin for building shopping and me
- anthropics/life-sciences [marketplace] *660*  items=1 - Skills for life sciences research, data analysis, and discovery
- anthropics/k12-teacher-skills [marketplace] *649*  items=1 - Plugin marketplace for K-12 Education and Claude for Teachers.
- anthropics/healthcare [marketplace] *462*  items=1 - Claude for Healthcare — one plugin bundling payer, provider, pharma, and general
- anthropics/oncall-kit [marketplace] *279*  items=1 - 
- anthropics/claude-for-financial-advisors [plugin,marketplace] *180*  items=2 - Ready-to-run workflows for financial advisors in Claude Cowork, drawing live dat
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
- mattpocock/skills [plugin] *334365*  items=2 - Matt Pocock's agent skills for real engineering — grilling, spec/ticket flows, T
- obra/superpowers [plugin,skill] *328461*  items=4 - Superpowers teaches Claude brainstorming, subagent driven development with built
- heygen-com/hyperframes [plugin,mcp-server] *91621*  items=3 - HyperFrames by HeyGen. Write HTML, render video. Compositions, GSAP and runtime 
- ChromeDevTools/chrome-devtools-mcp [plugin,mcp-server] *59649*  items=4 - Control and inspect a live Chrome browser from your coding agent. Record perform
- GoogleChrome/modern-web-guidance [plugin] *27101* ['product-stars'] items=2 - Keep your coding agent up to date with the latest web best practices
- confident-ai/deepeval [plugin] *19715* ['product-stars'] items=1 - Skills for adding DeepEval evaluations, tracing, datasets, Confident AI reports,
- huggingface/skills [plugin] *11415*  items=2 - Build, train, evaluate, and use open source AI models, datasets, and spaces.
- wonderwhy-er/DesktopCommanderMCP [plugin,mcp-server] *10445*  items=4 - MCP server for terminal commands, process management, and file operations across
- Eigenwise/atomic-agents [plugin,marketplace] *6349* ['product-stars'] items=3 - Comprehensive development workflow for building AI agents with the Atomic Agents
- exa-labs/exa-mcp-server [plugin,mcp-server] *5275*  items=3 - Exa AI web search, deep research, and content extraction. Provides MCP tools and
- expo/skills [plugin] *4249*  items=2 - Official Expo skills for building, deploying, upgrading, and debugging React Nat
- NVIDIA/skills [plugin] *4181*  items=2 - Find the right NVIDIA skill for GPU acceleration, CUDA, AI agents, data loading,
- aws/agent-toolkit-for-aws [plugin] *3597*  items=8 - Build, deploy, and operate AI agents on AWS. Skills for scaffolding agents with 
- cloudflare/skills [plugin] *3480*  items=2 - Skills for the Cloudflare developer platform: Workers, Durable Objects, Agents S
- modelcontextprotocol/ext-apps [plugin] *3167*  items=3 - Skills for creating MCP Apps with the MCP Apps SDK
- figma/mcp-server-guide [plugin,mcp-server] *2242*  items=4 - Figma design platform integration. Access design files, extract component inform
- stripe/ai [plugin,mcp-server] *2101*  items=3 - Stripe development plugin for Claude
- EpicGames/unreal-engine-skills-for-claude-code-plugin [plugin] *2038*  items=2 - Control Unreal Editor directly from Claude Code via MCP. Hundreds of tools expos
- MicrosoftDocs/mcp [plugin,mcp-server] *2015*  items=3 - Access official Microsoft documentation, API references, and code samples for Az
- microsoft/azure-skills [plugin] *1682*  items=2 - Transform Claude into an Azure expert. This plugin integrates the Azure MCP serv
- forcedotcom/sf-skills [plugin,skill] *1198*  items=2 - Build Salesforce apps and agents using these core building blocks: metadata, Ape
- atlassian/atlassian-mcp-server [plugin,mcp-server] *1194*  items=3 - Connect to Atlassian products including Jira and Confluence. Search and create i
- superdesigndev/superdesign-skill [plugin,skill] *1088*  items=2 - Design or redesign frontend UI and marketing graphics on the Superdesign infinit
- awslabs/agent-plugins [plugin] *952*  items=10 - Guide developers through adding maps, places search, geocoding, routing, and oth
- Unity-Technologies/unity-agent-plugin [plugin] *685*  items=2 - Unity's official plugin for Claude Code, with curated skills for game developmen
- Shopify/Shopify-AI-Toolkit [plugin] *655*  items=2 - Shopify's AI Toolkit provides 18 development skills for building on the Shopify 
- duckdb/duckdb-skills [plugin] *623*  items=2 - DuckDB-powered skills for Claude Code: read any data file, attach and query Duck
- gitroomhq/postiz-agent [plugin] *596*  items=3 - Social media automation CLI for scheduling posts, managing integrations, uploadi
- ClickHouse/agent-skills [plugin] *578*  items=2 - 28 best practice rules for ClickHouse schema design, query optimization, and dat
- TheQtCompanyRnD/agent-skills [plugin] *573*  items=3 - Agentic engineering skills for Qt software development — Qt C++/QML code review,

## Top 30 by stars: listed
- DietrichGebert/ponytail [plugin] *200244*  items=2 - Lazy senior dev mode. Forces the simplest, shortest solution that actually works
- JuliusBrussee/caveman [plugin,skill] *123349*  items=2 - Auto-activation works differently per agent: Claude Code uses SessionStart hooks
- thedotmack/claude-mem [plugin,skill] *120247*  items=3 - Persistent memory system for Claude Code - seamlessly preserve context across se
- pbakaus/impeccable [plugin] *118151*  items=1 - Great design prompts require design vocabulary. Most people don't have it. You c
- Egonex-AI/Understand-Anything [plugin,skill] *94741*  items=2 - Understand Anything is a Claude Code plugin that analyzes your project with a mu
- mvanhorn/last30days-skill [plugin] *76451*  items=1 - last-30-days is a Claude Code skill that searches the web and delivers a structu
- mem0ai/mem0 [plugin] *69565* ['product-stars'] items=1 - Connect Mem0 to Claude to give your agent persistent memory across sessions. Cla
- coreyhaines31/marketingskills [plugin,skill] *63059*  items=3 - coreyhaines31
- DayuanJiang/next-ai-draw-io [plugin,mcp-server] *37219*  items=2 - AI-powered Draw.io diagram generation with real-time browser preview. Create flo
- mksglu/context-mode [plugin] *34552*  items=1 - MCP is the protocol for tool access. We're the virtualization layer for context.
- AgriciDaniel/claude-seo [plugin] *32917*  items=1 - Comprehensive SEO analysis plugin for Claude Code. Performs full site audits wit
- alirezarezvani/claude-skills [plugin,skill] *30597*  items=2 - Playwright Pro turns your AI coding agent into a senior test automation engineer
- jarrodwatts/claude-hud [plugin,collection] *29322*  items=2 - Real-time statusline HUD for Claude Code - context health, tool activity, agent 
- promptfoo/promptfoo [plugin] *27768*  items=1 - Teaches AI coding agents to create and maintain promptfoo eval suites. Encodes b
- browser-use/browser-harness [plugin] *19277*  items=1 - Open-source browser agent driven via CDP — direct browser control, 79K stars, YC
- Jeffallan/claude-skills [plugin,skill,collection] *12544*  items=3 - 66 specialized skills for full-stack development: 12 language experts (Python, T
- nicobailon/visual-explainer [plugin,collection] *11316*  items=3 - An agent skill that turns complex terminal output into styled HTML pages you act
- revfactory/harness [plugin,agent] *9409*  items=3 - Harness leverages Claude Code's agent team system to decompose complex tasks int
- Eventual-Inc/Daft [plugin] *5869* ['product-stars'] items=1 - Skills for working with Daft, a high-performance data engine for AI and multimod
- clidey/whodb [plugin] *5071* ['product-stars'] items=1 - Database management tools for Claude Code. Query databases, explore schemas, ana
- nyldn/claude-octopus [plugin] *4515*  items=2 - Multi-LLM orchestration for Claude Code and Cowork. Coordinates 8 AI providers (
- giancarloerra/SocratiCode [plugin,mcp-server] *3390*  items=2 - Enterprise-grade (40m+ lines) codebase intelligence in a zero-setup, private and
- Chachamaru127/claude-code-harness [plugin,marketplace,agent] *3225*  items=5 - Autonomous Plan → Work → Review cycle for Claude Code. Go-native engine with 25×
- fabio-rovai/open-ontologies [plugin] *3031*  items=1 - AI-native ontology engineering with 39 MCP tools backed by an in-memory Oxigraph
- AgriciDaniel/claude-blog [plugin] *2873*  items=1 - AI-powered blog creation and optimization skill with 20 commands, 4 specialized 
- nizos/tdd-guard [plugin,collection] *2388*  items=2 - Enforces Test-Driven Development by intercepting file operations in Claude Code.
- AminForou/mcp-gsc [plugin] *2306*  items=1 - Connect Google Search Console to Claude Code. Query rankings, inspect URLs, audi
- kenryu42/cc-safety-net [plugin,collection] *2114*  items=3 - Block destructive git and filesystem commands before execution
- severity1/claude-code-prompt-improver [plugin] *1975*  items=1 - Intelligent prompt optimization using skill-based architecture. Enriches vague p
- aklofas/kicad-happy [plugin] *1774*  items=1 - KiCad electronics design skills. Analyze schematics, review PCB layouts, downloa

## Top 30 by stars: verified
- morluto/rea [marketplace,mcp-server] *481331*  items=2 - Reverse engineer anything with agents, from app behavior down to native binaries
- affaan-m/ECC [collection] *311983*  items=1 - Top-notch, well-written resources covering "just about everything" from core eng
- firecrawl/firecrawl [skill] *211806* ['product-stars'] items=1 - Knowledge infrastructure to make your agents smarter. Search, scrape and access 
- nextlevelbuilder/ui-ux-pro-max-skill [marketplace] *155251*  items=1 - An AI skill that provides design intelligence for building professional UI/UX ac
- vercel/next.js [marketplace] *143742* ['product-stars'] items=1 - The React Framework
- garrytan/gstack [agent] *142827*  items=1 - Garry Tan's (Y Combinator) Claude Code setup and "open source software factory" 
- Leonxlnx/taste-skill [marketplace] *122400*  items=1 - Agent skills that give coding agents taste: art direction, reference images and 
- browser-use/browser-use [mcp-server] *122250*  items=1 - Browser agents and stealth cloud browsers for AI: run web tasks, fill forms, ext
- addyosmani/agent-skills [marketplace] *120819*  items=1 - Production-grade engineering skills for AI coding agents.
- debpalash/VoiceStudio [skill] *119455* ['product-stars'] items=1 - VoiceStudio is the open-source, fully-local ElevenLabs alternative — voice cloni
- paperclipai/paperclip [skill,mcp-server] *117644*  items=2 - The open-source app everyone uses to manage agents at work
- nexu-io/open-design [marketplace] *109914*  items=1 - The 1st Collaborative AI Design Agent Workspace. Local-first and open source. Cr
- D4Vinci/Scrapling [mcp-server] *106494*  items=1 - Web scraping with stealth HTTP, real browsers, and Cloudflare bypass. CSS select
- ruvnet/RuView [marketplace] *105373*  items=1 - π RuView turns commodity WiFi signals into real-time spatial intelligence, vital
- tt-a1i/archify [skill,collection] *101027*  items=2 - An Agent Skill for Claude Code that generates interactive architecture, workflow
- storybookjs/storybook [marketplace] *91747* ['product-stars'] items=1 - Storybook is the industry standard workshop for building, documenting, and testi
- koala73/worldmonitor [skill,mcp-server] *91276* ['product-stars'] items=2 - Real-time global intelligence dashboard. AI-powered news aggregation, geopolitic
- cheaper-inference/OmniRoute [skill] *90806*  items=1 - Never stop coding. Free MIT AI gateway: one endpoint, 375 providers (150+ free),
- career-ops-hq/career-ops [plugin] *85255*  items=1 - Open-source AI job search agent and job finder: scan job boards, score each job 
- OpenMontageInc/OpenMontage [skill] *83898*  items=1 - World's first open-source, agentic video production system. 12 production pipeli
- ruvnet/ruflo [marketplace,mcp-server] *82567*  items=3 - 🌊 The original agent harness. Deploy intelligent multi-player swarms, coordinate
- netdata/netdata [mcp-server] *81668*  items=1 - Real-time infrastructure monitoring with metrics, logs, alerts, and ML-based ano
- headroomlabs-ai/headroom [marketplace] *81016*  items=1 - Compress tool outputs, logs, files, and RAG chunks before they reach the LLM. 20
- shareAI-lab/learn-claude-code [collection] *81000*  items=1 - A really interesting analysis of how coding agents like Claude Code are designed
- rohitg00/ai-engineering-from-scratch [skill] *80907* ['product-stars'] items=1 - Learn AI Engineering! Learn it. Build it. Ship it for others.
- hugohe3/ppt-master [marketplace] *80827* ['product-stars'] items=1 - AI turns documents or topics into real, native PowerPoint decks—with native shap
- ComposioHQ/awesome-claude-skills [skill] *80477*  items=1 - A curated list of awesome Claude Skills, resources, and tools for customizing Cl
- cloudflare/security-audit-skill [skill] *79340*  items=1 - A coding-agent skill for multi-phase security audits with independently verified
- usestrix/strix [skill] *78050* ['product-stars'] items=1 - Open-source AI penetration testing tool to find and fix your app’s vulnerabiliti
- tw93/Mole [marketplace] *76462* ['product-stars'] items=1 - 🐹 Open-source Mac and PC cleaner. Keep your machine clean, light, and running li

## Top 30 by stars: watch
- f/prompts.chat [marketplace] *178720* ['product-stars'] items=1 - f.k.a. Awesome ChatGPT Prompts. Share, discover, and collect prompts from the co
- modelcontextprotocol/servers [mcp-server] *92305*  items=7 - Reference server that exercises every MCP feature: tools, resources, prompts, sa
- opendatalab/MinerU [skill] *84441* ['product-stars'] items=1 - Transforms complex documents like PDFs and Office docs into LLM-ready markdown/J
- code-yeongyu/oh-my-openagent [skill] *71160* ['product-stars'] items=1 - OmO: Just type "mass ulw" keyword with your prompt. Now you are the master of gr
- Imbad0202/academic-research-skills [marketplace] *58879*  items=1 - Academic Research Skills for Claude Code: research → write → review → revise → f
- bmad-code-org/BMAD-METHOD [skill] *55845* ['product-stars'] items=1 - Breakthrough Method for Agile Ai Driven Development
- tldraw/tldraw [mcp-server] *51641*  items=1 - Draw and visually collaborate with your agents on tldraw's canvas.
- metabase/metabase [mcp-server] *50635*  items=1 - Lets AI clients search, explore, query, and visualize data in a Metabase instanc
- abhigyanpatwari/GitNexus [marketplace] *48939* ['product-stars'] items=1 - GitNexus: The Zero-Server Code Intelligence Engine
- serverless/serverless [skill] *46933* ['product-stars'] items=1 - ⚡ Serverless Framework – Effortlessly build apps that auto-scale, incur zero cos
- PostHog/posthog [mcp-server] *41209*  items=1 - Query analytics, manage feature flags and experiments, and investigate errors in
- phaserjs/phaser [skill] *40802* ['product-stars'] items=1 - Phaser is a fun, free and fast 2D game framework for making HTML5 games for desk
- openai/codex-plugin-cc [marketplace] *35496*  items=1 - Use Codex from Claude Code to review code or delegate tasks.
- zarazhangrui/frontend-slides [marketplace] *33030*  items=1 - Create beautiful slides on the web using a coding agent's frontend skills
- oraios/serena [mcp-server] *31765*  items=1 - A powerful toolkit for coding, providing semantic retrieval and editing capabili
- hypit-ai/hypit [skill] *31697* ['product-stars'] items=1 - Clone any viral video with AI agents. Not just a script, the whole workflow: swa
- openai/skills [skill] *29187*  items=1 - Skills Catalog for Codex
- vercel/ai [skill] *28257* ['product-stars'] items=1 - The AI Toolkit for TypeScript. From the creators of Next.js, the AI SDK is a fre
- getpaseo/paseo [skill] *26016*  items=1 - Orchestrate multiple coding agents from desktop and mobile
- clockworklabs/SpacetimeDB [marketplace] *25572* ['product-stars'] items=1 - Development at the speed of light
- nocobase/nocobase [skill] *25041* ['product-stars'] items=1 - NocoBase is the open-source platform for building, running, and evolving busines
- different-ai/openwork [mcp-server] *24620*  items=1 - Your OpenWork org's skills, plugins, workflows, and connections through one OAut
- HKUDS/AI-Trader [skill] *23407* ['product-stars'] items=1 - "AI-Trader: 100% Fully-Automated Agent-Native Trading"
- screenpipe/screenpipe [mcp-server] *22578*  items=1 - Search your local screen recordings, audio transcripts, and computer activity fr
- longbridge/gpui-kit [marketplace] *21506* ['product-stars'] items=1 - Rust GUI components for building fantastic cross-platform desktop application by
- greensock/gsap-skills [marketplace] *19201*  items=1 - Official AI skills for GSAP. These skills teach AI coding agents how to correctl
- windmill-labs/windmill [mcp-server] *18751*  items=1 - Run Windmill scripts and flows and manage jobs, schedules, resources and variabl
- Canner/WrenAI [skill] *18420* ['product-stars'] items=1 - GenBI (Generative BI) for AI agents, an open-source, governed text-to-SQL throug
- architecture-decision-record/architecture-decision-record [skill] *17544* ['product-stars'] items=1 - Architecture decision record (ADR) examples for software planning, IT leadership
- composio-community/awesome-codex-skills [skill] *17456*  items=1 - A curated list of practical Codex skills for automating workflows across the Cod

## Random sample of 20 watch repos (of 520)
- modelcontextprotocol/servers [mcp-server] *92305*  items=7 - Reference server that exercises every MCP feature: tools, resources, prompts, sa reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- r-huijts/strava-mcp [mcp-server] *509*  items=1 - MCP server for accessing Strava API reasons=['fails: pushed<=90d (167)'] src=['mcp-registry']
- mholzen/workflowy [mcp-server] *73*  items=1 - Create, update, complete nodes, search & replace with regex and dry run, usage r reasons=['fails: pushed<=90d (105)'] src=['mcp-registry']
- Lethe044/agentskill-kit [skill] *52*  items=1 - Lint, security scan, audit, test, forge and export agent skills (SKILL.md) for C reasons=['no corroborating signal'] src=['topic']
- aaaronmiller/create-viral-content [skill] *93*  items=1 - Agent Skill for viral social content that reads as human: hooks, titles, thumbna reasons=['fails: license (None)'] src=['topic']
- scarletkc/Perenna [mcp-server] *60*  items=1 - A lightweight, Git-backed permanent memory for AI agents. reasons=['no corroborating signal'] src=['mcp-registry']
- Songzhi-lab/chinese-font-selector [skill] *84*  items=1 - 全网首个中文字体专业知识包：可商用中文字体库（授权三级分类）、场景×气质选字矩阵、中英混排与排版规则。让 AI 选中文设计字体不再甩给你一堆 Inter / C reasons=['fails: pushed<=90d (101)', 'no corroborating signal'] src=['topic']
- wentong2022-arch/flowforge-skill [plugin] *139*  items=1 - Generate professional draw.io diagrams from natural language — a Claude Code ski reasons=['fails: pushed<=90d (146)'] src=['code']
- master-co/css [mcp-server] *1954*  items=1 - Inspect Master CSS classes, generated CSS, and project stylesheets from your AI  reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- AIScientists-Dev/academic-humanizer [skill] *6516*  items=1 - Strip AI-writing tells from papers and grant proposals (NSF/NIH), while keeping  reasons=['fails: pushed<=90d (147)', 'fails: license (NOASSERTION)'] src=['topic']
- oil-oil/oil-cover [skill] *308*  items=1 - Video cover & thumbnail skill for Claude Code & Codex. 帮你用视频画面做小红书和 B 站封面。 reasons=['fails: license (NOASSERTION)'] src=['topic']
- pmwl0128/quark_drive_skills [plugin] *90*  items=1 - Quark Drive Skills: Pokemon Champions Agent Skills for dex and metagame facts, e reasons=['fails: license (NOASSERTION)', 'no corroborating signal'] src=['code']
- Ar9av/PaperOrchestra [skill] *802*  items=1 - An automated AI research-paper writer based off Google's PaperOrchestra paper's  reasons=['fails: license (NOASSERTION)'] src=['topic']
- antvis/mcp-server-chart [mcp-server] *4424*  items=1 - A Model Context Protocol server for generating charts using AntV. reasons=['fails: pushed<=90d (93)'] src=['mcp-registry']
- op7418/guizang-sports-skill [skill] *157*  items=1 - 🚴 Claude Code / Codex skill for FIT & KML sports analysis — cycling, running, hi reasons=['fails: pushed<=90d (110)'] src=['topic']
- ilindaniel/ponytail-lite [plugin] *258*  items=1 - Stop agents from over-engineering. Inspired by Ponytail, but without the plugin  reasons=['fails: pushed<=90d (124)'] src=['topic']
- chengzhongwei/Prompt-sensei [skill] *107*  items=1 - Local-first prompt coach for Claude Code and Codex that improves prompts, observ reasons=['fails: pushed<=90d (137)'] src=['topic']
- Frappucc1no/recall-loom [skill] *153*  items=1 - Project memory for long-running AI work across agents, models, and sessions. Kee reasons=['fails: pushed<=90d (113)'] src=['topic']
- ferdinandobons/startup-skill [skill] *1327*  items=1 - AI agent skills for startup validation, competitive intelligence, and planning reasons=['fails: pushed<=90d (149)'] src=['topic']
- asgard-ai-platform/skills [skill] *250*  items=1 - 301 open-source coding agent skills across 22 domains — methodology, judgment &  reasons=['fails: pushed<=90d (174)'] src=['topic']

## Errors
- graphql: HTTP 504 after 4 retries <!DOCTYPE html>
<!--

Hello future GitHubber! I bet you're here to remove tho
- broad verify subfolders chunk 8: no data None

## Rate limit
- REST calls this run (uncached): {"core": 76, "search": 42}; last seen: {"core": {"remaining": "4920", "limit": "5000"}, "search": {"remaining": "7", "limit": "30"}}
- GraphQL: 167 calls, cost 79, remaining 4830/5000, stopped early: False
- REST stopped early: False
- repos lacking metadata: 4218; enriched this run: 39564