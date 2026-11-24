# Catalog report 2026-11-24
Mode: **token**; run time 1473s
Repos (deduped): 3401; flat entries before dedup: 26135

## Tier x type BEFORE dedup (flat entries)
- new/mcp-server: 15968
- watch/mcp-server: 2704
- listed/plugin: 2280
- verified/mcp-server: 1366
- verified/skill: 497
- watch/skill: 464
- watch/marketplace: 424
- official/plugin: 375
- verified/marketplace: 364
- watch/plugin: 290
- watch/agent: 212
- verified/collection: 194
- verified/plugin: 186
- new/skill: 173
- new/marketplace: 173
- anthropic/plugin: 150
- new/plugin: 144
- verified/agent: 56
- new/agent: 37
- anthropic/marketplace: 15
- anthropic/collection: 4
- watch/collection: 3
- anthropic/agent: 1

## Tier AFTER dedup (repos)
- verified: 1957
- watch: 509
- new: 369
- official: 256
- listed: 162
- anthropic: 148

## Type AFTER dedup (items)
- mcp-server: 1856
- plugin: 1210
- skill: 798
- marketplace: 520
- collection: 122
- agent: 60

## Primary type AFTER dedup (repos)
- mcp-server: 1228
- plugin: 837
- skill: 739
- marketplace: 464
- collection: 86
- agent: 47

## Repos by discovery source family
- mcp-registry: 1388
- topic: 1357
- anthropic: 461
- code: 208
- anthropic-org: 188
- curated: 150
- marketplace-expansion: 35

## Flags (all tiers)
- product-stars: 240
- star-spike: 16
- star-anomaly: 2

## star-anomaly by tier
- new: 2

## Metadata gaps
- repos without metadata: 154
- reasons: {'unfetched': 154}

## MCP-only repos excluded: 55
- n8n-io/n8n *211883* ['automation', 'ipaas', 'n8n', 'workflow', 'typescript'] - Fair-code workflow automation platform with native AI capabilities. Combine visu
- assafelovic/gpt-researcher *30882* ['ai', 'python', 'agent', 'automation', 'research'] - An autonomous agent that conducts deep research on any data using any LLM provid
- rocketride-org/rocketride-server *19991* ['cpp', 'mcp', 'vscode-extension', 'agent-framework', 'agent-harness'] - High-performance AI pipeline engine with a C++ core and 50+ Python-extensible no
- mrexodia/ida-pro-mcp *13555* ['ida-plugin', 'ida-pro', 'mcp', 'mcp-server', 'modelcontextprotocol'] - AI-powered reverse engineering assistant that bridges IDA Pro with language mode
- mcp-use/mcp-use *11004* ['mcp', 'model-context-protocol', 'apps-sdk', 'mcp-apps', 'mcp-inspector'] - The fullstack MCP framework to develop MCP Apps for ChatGPT / Claude & MCP Serve
- Agents365-ai/drawio-skill *10917* ['drawio', 'diagram', 'agent-skills', 'architecture-diagram', 'claude-code'] - Agent skill that turns natural language, code, Terraform/K8s, SQL, OpenAPI, Asyn
- Marker-Inc-Korea/AutoRAG *6269* ['document-parser', 'embeddings', 'llm', 'open-source', 'rag'] - Your Personal Librarian Agent. Ask anything on your computer, organize files, re
- jordan-gibbs/hyperresearch *5051* ['agents', 'agentskills', 'claude-code', 'deep-research', 'deep-research-agent'] - Convert Claude Code or Codex into the most intelligent Deep Research Agent. Coll
- stickerdaniel/linkedin-mcp-server *4290* ['linkedin', 'linkedin-scraper', 'mcp', 'mcp-server', 'linkedin-mcp'] - Open-source MCP server for LinkedIn. Give Claude and any MCP-compatible AI agent
- taylorwilsdon/google_workspace_mcp *3573* ['ai', 'gmail', 'google-calendar', 'google-workspace', 'llm'] - Control Gmail, Google Calendar, Docs, Sheets, Slides, Chat, Forms, Tasks, Search
- duty1g/x64dbg-mcp-server *2862* ['ai-agents', 'ai-debugging', 'binary-analysis', 'claude', 'claude-code'] - x64dbg-MCP Server is a native MCP (Model Context Protocol) plugin for x64dbg tha
- alpic-ai/skybridge *2203* ['agent', 'ai', 'apps-sdk', 'chatgpt', 'claude'] - Skybridge is a full-stack TypeScript framework for MCP Apps and ChatGPT Apps. Ty
- study8677/repobrain *1361* ['claude-code', 'codex-cli', 'developer-tools', 'mcp-server', 'windsurf'] - 🧠 RepoBrain (formerly Antigravity) — Give your repo a brain. ChatGPT for your co
- dansugc/reverse-engineer-marketing *1083* ['ad-library', 'ai-agents', 'claude-code', 'codex', 'competitor-analysis'] - Paste a link, get the whole marketing machine behind it: paid ads, organic socia
- codepawl/crucible *935* ['3d', '3d-engine', 'ai-agents', 'gltf', 'javascript'] - 3D engine that AI agents drive

## Degradation
- registry complete: True (724 pages, 72314 entries)
- MCP servers merged from the previous catalog (not re-fetched): 0
- GraphQL 403s: 0 (secondary rate limit: 0); retries: 12; queries that gave up: 1
- HTTP retries (5xx/network): 0
- repos with stale metadata reused from the previous catalog (meta_stale): 0

## MCP Registry
- {"pages": 724, "fetched": 72314, "kept": 71214, "dropped": 1100, "bad": 0, "complete": true, "excluded_remote_only": 26407, "excluded_low_signal": 24769, "fallback_merged": 0, "records": 1388, "attached_existing": 167, "new_repo": 1221, "remote_only": 0, "tiers": {"official": 27, "listed": 20, "verified": 992, "new": 145, "watch": 204}}

## Top 20 by trend_7d
- elementalsouls/Claude-BugHunter +12427 (162.32%) ['star-spike']
- morluto/rea +11304 (2.43%) []
- obra/superpowers +6480 (2.03%) []
- nexu-io/openmotion +5703 (56.52%) ['star-spike']
- firecrawl/firecrawl +5681 (2.81%) ['product-stars']
- mattpocock/skills +5482 (1.68%) []
- DietrichGebert/ponytail +5296 (2.75%) []
- mvanhorn/last30days-skill +5281 (7.73%) []
- debpalash/VoiceStudio +5212 (4.65%) ['product-stars']
- HKUDS/CLI-Anything +5041 (8.56%) ['product-stars']
- affaan-m/ECC +4912 (1.61%) []
- GoogleChrome/modern-web-guidance +4684 (22.38%) ['product-stars']
- pbakaus/impeccable +4241 (3.8%) []
- zhouxiaoka/autoclip +4035 (38.01%) ['star-spike', 'product-stars']
- Nutlope/hallmark +3913 (6.95%) []
- heygen-com/hyperframes +3720 (4.36%) []
- Leonxlnx/taste-skill +3710 (3.17%) []
- heydamir/unslop +3577 (20.61%) []
- cloudflare/security-audit-skill +3515 (4.74%) []
- cathrynlavery/diagram-design +3451 (5.1%) []

## Code search vs topic search
- repos found by code search: 208
- also in topic search: 11
- code-only: 183; tiers: {'anthropic': 1, 'verified': 91, 'watch': 56, 'new': 35}

## Top 30 by stars: anthropic
- anthropics/skills [marketplace,collection] *199566*  items=2 - Anthropic example skills
- anthropics/claude-code [marketplace,agent] *156847*  items=2 - Anthropic's Claude Code plugins, installed from the claude-plugins-official repo
- anthropics/claude-plugins-official [plugin,marketplace,collection] *48075*  items=15 - Directory of popular Claude Code extensions including development tools, product
- anthropics/financial-services [marketplace] *41487*  items=1 - 
- anthropics/knowledge-work-plugins [marketplace] *36746*  items=1 - 
- anthropics/claude-for-legal [marketplace] *10078*  items=1 - Reference agents, skills, and data connectors for the legal workflows we see mos
- anthropics/claude-code-action [collection] *10061*  items=1 - The official GitHub Action for running Claude Code in CI: mention @claude in iss
- anthropics/claude-code-security-review [collection] *7071*  items=1 - An official AI-powered security-review GitHub Action that uses Claude to analyze
- anthropics/claude-plugins-community [marketplace] *4944*  items=1 - 
- anthropics/commerce-agents [marketplace] *3511*  items=1 - Claude Commerce Agents: the commerce-builder plugin for building shopping and me
- anthropics/life-sciences [marketplace] *655*  items=1 - Skills for life sciences research, data analysis, and discovery
- anthropics/k12-teacher-skills [marketplace] *643*  items=1 - Plugin marketplace for K-12 Education and Claude for Teachers.
- anthropics/healthcare [marketplace] *456*  items=1 - Claude for Healthcare — one plugin bundling payer, provider, pharma, and general
- anthropics/oncall-kit [marketplace] *278*  items=1 - 
- anthropics/claude-for-financial-advisors [plugin,marketplace] *167*  items=2 - Ready-to-run workflows for financial advisors in Claude Cowork, drawing live dat
- anthropics/claude-tag-plugins [marketplace] *79*  items=1 - Plugins that connect Claude Tag to common SaaS services, plus charting and confi
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
- mattpocock/skills [plugin] *331558*  items=2 - Matt Pocock's agent skills for real engineering — grilling, spec/ticket flows, T
- obra/superpowers [plugin,skill] *325256*  items=4 - Superpowers teaches Claude brainstorming, subagent driven development with built
- heygen-com/hyperframes [plugin,mcp-server] *89075*  items=3 - HyperFrames by HeyGen. Write HTML, render video. Compositions, GSAP and runtime 
- ChromeDevTools/chrome-devtools-mcp [plugin,mcp-server] *59076*  items=4 - Control and inspect a live Chrome browser from your coding agent. Record perform
- GoogleChrome/modern-web-guidance [plugin] *25613* ['product-stars'] items=2 - Keep your coding agent up to date with the latest web best practices
- confident-ai/deepeval [plugin] *19617* ['product-stars'] items=1 - Skills for adding DeepEval evaluations, tracing, datasets, Confident AI reports,
- huggingface/skills [plugin] *11390*  items=2 - Build, train, evaluate, and use open source AI models, datasets, and spaces.
- wonderwhy-er/DesktopCommanderMCP [plugin,mcp-server] *10409*  items=4 - MCP server for terminal commands, process management, and file operations across
- Eigenwise/atomic-agents [plugin,marketplace] *6346* ['product-stars'] items=3 - Comprehensive development workflow for building AI agents with the Atomic Agents
- exa-labs/exa-mcp-server [plugin,mcp-server] *5264*  items=3 - Exa AI web search, deep research, and content extraction. Provides MCP tools and
- expo/skills [plugin] *4224*  items=2 - Official Expo skills for building, deploying, upgrading, and debugging React Nat
- NVIDIA/skills [plugin] *4128*  items=2 - Find the right NVIDIA skill for GPU acceleration, CUDA, AI agents, data loading,
- aws/agent-toolkit-for-aws [plugin] *3554*  items=8 - Build, deploy, and operate AI agents on AWS. Skills for scaffolding agents with 
- cloudflare/skills [plugin] *3441*  items=2 - Skills for the Cloudflare developer platform: Workers, Durable Objects, Agents S
- modelcontextprotocol/ext-apps [plugin] *3145*  items=3 - Skills for creating MCP Apps with the MCP Apps SDK
- figma/mcp-server-guide [plugin,mcp-server] *2227*  items=4 - Figma design platform integration. Access design files, extract component inform
- stripe/ai [plugin,mcp-server] *2087*  items=3 - Stripe development plugin for Claude
- EpicGames/unreal-engine-skills-for-claude-code-plugin [plugin] *2021*  items=2 - Control Unreal Editor directly from Claude Code via MCP. Hundreds of tools expos
- MicrosoftDocs/mcp [plugin,mcp-server] *2003*  items=3 - Access official Microsoft documentation, API references, and code samples for Az
- microsoft/azure-skills [plugin] *1669*  items=2 - Transform Claude into an Azure expert. This plugin integrates the Azure MCP serv
- forcedotcom/sf-skills [plugin,skill] *1187*  items=2 - Build Salesforce apps and agents using these core building blocks: metadata, Ape
- atlassian/atlassian-mcp-server [plugin,mcp-server] *1186*  items=3 - Connect to Atlassian products including Jira and Confluence. Search and create i
- superdesigndev/superdesign-skill [plugin,skill] *1059*  items=2 - Design or redesign frontend UI and marketing graphics on the Superdesign infinit
- awslabs/agent-plugins [plugin] *949*  items=10 - Guide developers through adding maps, places search, geocoding, routing, and oth
- Unity-Technologies/unity-agent-plugin [plugin] *667*  items=2 - Unity's official plugin for Claude Code, with curated skills for game developmen
- Shopify/Shopify-AI-Toolkit [plugin] *652*  items=2 - Shopify's AI Toolkit provides 18 development skills for building on the Shopify 
- duckdb/duckdb-skills [plugin] *623*  items=2 - DuckDB-powered skills for Claude Code: read any data file, attach and query Duck
- gitroomhq/postiz-agent [plugin] *589*  items=3 - Social media automation CLI for scheduling posts, managing integrations, uploadi
- ClickHouse/agent-skills [plugin] *574*  items=2 - 28 best practice rules for ClickHouse schema design, query optimization, and dat
- TheQtCompanyRnD/agent-skills [plugin] *564*  items=3 - Agentic engineering skills for Qt software development — Qt C++/QML code review,

## Top 30 by stars: listed
- DietrichGebert/ponytail [plugin] *197617*  items=2 - Lazy senior dev mode. Forces the simplest, shortest solution that actually works
- JuliusBrussee/caveman [plugin,skill] *122465*  items=2 - Auto-activation works differently per agent: Claude Code uses SessionStart hooks
- thedotmack/claude-mem [plugin,skill] *119369*  items=3 - Persistent memory system for Claude Code - seamlessly preserve context across se
- pbakaus/impeccable [plugin] *115753*  items=1 - Great design prompts require design vocabulary. Most people don't have it. You c
- Egonex-AI/Understand-Anything [plugin,skill] *93816*  items=2 - Understand Anything is a Claude Code plugin that analyzes your project with a mu
- mvanhorn/last30days-skill [plugin] *73581*  items=1 - last-30-days is a Claude Code skill that searches the web and delivers a structu
- mem0ai/mem0 [plugin] *69398* ['product-stars'] items=1 - Connect Mem0 to Claude to give your agent persistent memory across sessions. Cla
- coreyhaines31/marketingskills [plugin,skill] *62295*  items=3 - coreyhaines31
- DayuanJiang/next-ai-draw-io [plugin,mcp-server] *37148*  items=2 - AI-powered Draw.io diagram generation with real-time browser preview. Create flo
- mksglu/context-mode [plugin] *34426*  items=1 - MCP is the protocol for tool access. We're the virtualization layer for context.
- AgriciDaniel/claude-seo [plugin] *31970*  items=1 - Comprehensive SEO analysis plugin for Claude Code. Performs full site audits wit
- alirezarezvani/claude-skills [plugin,skill] *30371*  items=2 - Playwright Pro turns your AI coding agent into a senior test automation engineer
- jarrodwatts/claude-hud [plugin,collection] *29289*  items=2 - Real-time statusline HUD for Claude Code - context health, tool activity, agent 
- promptfoo/promptfoo [plugin] *27603*  items=1 - Teaches AI coding agents to create and maintain promptfoo eval suites. Encodes b
- browser-use/browser-harness [plugin] *19217*  items=1 - Open-source browser agent driven via CDP — direct browser control, 79K stars, YC
- Jeffallan/claude-skills [plugin,skill,collection] *12502*  items=3 - 66 specialized skills for full-stack development: 12 language experts (Python, T
- nicobailon/visual-explainer [plugin,collection] *11246*  items=3 - An agent skill that turns complex terminal output into styled HTML pages you act
- revfactory/harness [plugin,agent] *9395*  items=3 - Harness leverages Claude Code's agent team system to decompose complex tasks int
- Eventual-Inc/Daft [plugin] *5859* ['product-stars'] items=1 - Skills for working with Daft, a high-performance data engine for AI and multimod
- clidey/whodb [plugin] *5069* ['product-stars'] items=1 - Database management tools for Claude Code. Query databases, explore schemas, ana
- nyldn/claude-octopus [plugin] *4492*  items=2 - Multi-LLM orchestration for Claude Code and Cowork. Coordinates 8 AI providers (
- giancarloerra/SocratiCode [plugin,mcp-server] *3381*  items=2 - Enterprise-grade (40m+ lines) codebase intelligence in a zero-setup, private and
- Chachamaru127/claude-code-harness [plugin,marketplace,agent] *3218*  items=5 - Autonomous Plan → Work → Review cycle for Claude Code. Go-native engine with 25×
- fabio-rovai/open-ontologies [plugin] *2952*  items=1 - AI-native ontology engineering with 39 MCP tools backed by an in-memory Oxigraph
- AgriciDaniel/claude-blog [plugin] *2843*  items=1 - AI-powered blog creation and optimization skill with 20 commands, 4 specialized 
- nizos/tdd-guard [plugin,collection] *2387*  items=2 - Enforces Test-Driven Development by intercepting file operations in Claude Code.
- AminForou/mcp-gsc [plugin] *2278*  items=1 - Connect Google Search Console to Claude Code. Query rankings, inspect URLs, audi
- kenryu42/cc-safety-net [plugin,collection] *2097*  items=3 - Block destructive git and filesystem commands before execution
- severity1/claude-code-prompt-improver [plugin] *1974*  items=1 - Intelligent prompt optimization using skill-based architecture. Enriches vague p
- aklofas/kicad-happy [plugin] *1748*  items=1 - KiCad electronics design skills. Analyze schematics, review PCB layouts, downloa

## Top 30 by stars: verified
- morluto/rea [marketplace,mcp-server] *475893*  items=2 - Reverse engineer anything with agents, from app behavior down to native binaries
- affaan-m/ECC [collection] *309685*  items=1 - Top-notch, well-written resources covering "just about everything" from core eng
- firecrawl/firecrawl [skill] *208101* ['product-stars'] items=1 - Supercharge your AI agents with data from the web and beyond. Building the libra
- nextlevelbuilder/ui-ux-pro-max-skill [marketplace] *153393*  items=1 - An AI skill that provides design intelligence for building professional UI/UX ac
- vercel/next.js [marketplace] *143620* ['product-stars'] items=1 - The React Framework
- garrytan/gstack [agent] *142496*  items=1 - Garry Tan's (Y Combinator) Claude Code setup and "open source software factory" 
- browser-use/browser-use [mcp-server] *121881*  items=1 - Browser agents and stealth cloud browsers for AI: run web tasks, fill forms, ext
- Leonxlnx/taste-skill [marketplace] *120758*  items=1 - Agent skills that give coding agents taste: art direction, reference images and 
- addyosmani/agent-skills [marketplace] *120035*  items=1 - Production-grade engineering skills for AI coding agents.
- debpalash/VoiceStudio [skill] *117300* ['product-stars'] items=1 - VoiceStudio is the open-source, fully-local ElevenLabs alternative — voice cloni
- paperclipai/paperclip [skill,mcp-server] *116441*  items=2 - The open-source app everyone uses to manage agents at work
- nexu-io/open-design [marketplace] *109205*  items=1 - The 1st Collaborative AI Design Agent Workspace. Local-first and open source. Cr
- D4Vinci/Scrapling [mcp-server] *105353*  items=1 - Web scraping with stealth HTTP, real browsers, and Cloudflare bypass. CSS select
- ruvnet/RuView [marketplace] *104986*  items=1 - π RuView turns commodity WiFi signals into real-time spatial intelligence, vital
- tt-a1i/archify [skill,collection] *99201*  items=2 - An Agent Skill for Claude Code that generates interactive architecture, workflow
- storybookjs/storybook [marketplace] *91697* ['product-stars'] items=1 - Storybook is the industry standard workshop for building, documenting, and testi
- koala73/worldmonitor [skill,mcp-server] *91123* ['product-stars'] items=2 - Real-time global intelligence dashboard. AI-powered news aggregation, geopolitic
- career-ops-hq/career-ops [plugin] *84460*  items=1 - Open-source AI job search agent and job finder: scan job boards, score each job 
- OpenMontageInc/OpenMontage [skill] *82823*  items=1 - World's first open-source, agentic video production system. 12 production pipeli
- ruvnet/ruflo [marketplace,mcp-server] *82336*  items=3 - 🌊 The original agent harness. Deploy intelligent multi-player swarms, coordinate
- netdata/netdata [mcp-server] *81599*  items=1 - Real-time infrastructure monitoring with metrics, logs, alerts, and ML-based ano
- shareAI-lab/learn-claude-code [collection] *80811*  items=1 - A really interesting analysis of how coding agents like Claude Code are designed
- headroomlabs-ai/headroom [marketplace] *80684*  items=1 - Compress tool outputs, logs, files, and RAG chunks before they reach the LLM. 20
- ComposioHQ/awesome-claude-skills [skill] *80195*  items=1 - A curated list of awesome Claude Skills, resources, and tools for customizing Cl
- rohitg00/ai-engineering-from-scratch [skill] *79967* ['product-stars'] items=1 - Learn AI Engineering! Learn it. Build it. Ship it for others.
- hugohe3/ppt-master [marketplace] *79644* ['product-stars'] items=1 - AI turns documents or topics into real, native PowerPoint decks—with native shap
- cloudflare/security-audit-skill [skill] *77620*  items=1 - A coding-agent skill for multi-phase security audits with independently verified
- usestrix/strix [skill] *77305* ['product-stars'] items=1 - Open-source AI penetration testing tool to find and fix your app’s vulnerabiliti
- tw93/Mole [marketplace] *75995* ['product-stars'] items=1 - 🐹 Open-source Mac and PC cleaner. Keep your machine clean, light, and running li
- thedaviddias/Front-End-Checklist [marketplace,mcp-server] *74805* ['product-stars'] items=2 - 🗂 The essential checklist for modern web development, for humans and AI agents

## Top 30 by stars: watch
- f/prompts.chat [marketplace] *178341* ['product-stars'] items=1 - f.k.a. Awesome ChatGPT Prompts. Share, discover, and collect prompts from the co
- opendatalab/MinerU [skill] *84229* ['product-stars'] items=1 - Transforms complex documents like PDFs and Office docs into LLM-ready markdown/J
- code-yeongyu/oh-my-openagent [skill] *71089* ['product-stars'] items=1 - OmO: Just type "mass ulw" keyword with your prompt. Now you are the master of gr
- Imbad0202/academic-research-skills [marketplace] *58306*  items=1 - Academic Research Skills for Claude Code: research → write → review → revise → f
- bmad-code-org/BMAD-METHOD [skill] *55672* ['product-stars'] items=1 - Breakthrough Method for Agile Ai Driven Development
- tldraw/tldraw [mcp-server] *51553*  items=1 - Draw and visually collaborate with your agents on tldraw's canvas.
- metabase/metabase [mcp-server] *50493*  items=1 - Lets AI clients search, explore, query, and visualize data in a Metabase instanc
- abhigyanpatwari/GitNexus [marketplace] *48763* ['product-stars'] items=1 - GitNexus: The Zero-Server Code Intelligence Engine
- serverless/serverless [skill] *46933* ['product-stars'] items=1 - ⚡ Serverless Framework – Effortlessly build apps that auto-scale, incur zero cos
- PostHog/posthog [mcp-server] *41058*  items=1 - Query analytics, manage feature flags and experiments, and investigate errors in
- phaserjs/phaser [skill] *40775* ['product-stars'] items=1 - Phaser is a fun, free and fast 2D game framework for making HTML5 games for desk
- openai/codex-plugin-cc [marketplace] *35409*  items=1 - Use Codex from Claude Code to review code or delegate tasks.
- zarazhangrui/frontend-slides [marketplace] *32824*  items=1 - Create beautiful slides on the web using a coding agent's frontend skills
- oraios/serena [mcp-server] *31654*  items=1 - A powerful toolkit for coding, providing semantic retrieval and editing capabili
- hypit-ai/hypit [skill] *31263* ['product-stars'] items=1 - Clone any viral video with AI agents. Not just a script, the whole workflow: swa
- openai/skills [skill] *29046*  items=1 - Skills Catalog for Codex
- vercel/ai [skill] *28157* ['product-stars'] items=1 - The AI Toolkit for TypeScript. From the creators of Next.js, the AI SDK is a fre
- clockworklabs/SpacetimeDB [marketplace] *25571* ['product-stars'] items=1 - Development at the speed of light
- nocobase/nocobase [skill] *24992*  items=1 - NocoBase is the open-source platform for building, running, and evolving busines
- getpaseo/paseo [skill] *24835*  items=1 - Orchestrate multiple coding agents from desktop and mobile
- different-ai/openwork [mcp-server] *24584*  items=1 - Your OpenWork org's skills, plugins, workflows, and connections through one OAut
- HKUDS/AI-Trader [skill] *23363* ['product-stars'] items=1 - "AI-Trader: 100% Fully-Automated Agent-Native Trading"
- screenpipe/screenpipe [mcp-server] *22520*  items=1 - Search your local screen recordings, audio transcripts, and computer activity fr
- longbridge/gpui-kit [skill] *21267* ['product-stars'] items=1 - Rust GUI components for building fantastic cross-platform desktop application by
- greensock/gsap-skills [marketplace] *18976*  items=1 - Official AI skills for GSAP. These skills teach AI coding agents how to correctl
- windmill-labs/windmill [mcp-server] *18704*  items=1 - Run Windmill scripts and flows and manage jobs, schedules, resources and variabl
- Canner/WrenAI [skill] *18378* ['product-stars'] items=1 - GenBI (Generative BI) for AI agents, an open-source, governed text-to-SQL throug
- architecture-decision-record/architecture-decision-record [skill] *17515* ['product-stars'] items=1 - Architecture decision record (ADR) examples for software planning, IT leadership
- composio-community/awesome-codex-skills [skill] *17408*  items=1 - A curated list of practical Codex skills for automating workflows across the Cod
- millionco/react-doctor [skill] *15183* ['product-stars'] items=1 - Your agent writes bad React. This catches it

## Random sample of 20 watch repos (of 509)
- scasella/claude-dynamic-workflows-codex [marketplace] *330*  items=1 - Run Claude Code dynamic workflows on a local Codex (GPT) backend, plus an intera reasons=['fails: pushed<=90d (135)'] src=['topic']
- lukabudik/alza-mcp-community [mcp-server] *103*  items=1 - Unofficial MCP server for Alza.cz: catalog search plus token-guarded account and reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- composio-community/awesome-codex-skills [skill] *17408*  items=1 - A curated list of practical Codex skills for automating workflows across the Cod reasons=['fails: pushed<=90d (121)', 'fails: license (None)'] src=['topic']
- kunwar-shah/claudex [mcp-server] *97*  items=1 - Persistent memory + FTS5 search MCP server for Claude Code conversation history. reasons=['fails: pushed<=90d (156)'] src=['mcp-registry']
- saidutt46/domain-check [mcp-server] *310*  items=1 - Fast domain availability checker with RDAP/WHOIS — batch checks, TLD presets, an reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- awv-informatik/classcad-ai [mcp-server] *195*  items=1 - Build and verify CAD parts and assemblies with the ClassCAD engine, locally, no  reasons=['fails: license (None)'] src=['mcp-registry']
- corey924/ZeroSpec [skill] *65*  items=1 - ZeroSpec is a zero-dependency Markdown framework that helps AI agents understand reasons=['fails: pushed<=90d (136)'] src=['topic']
- apoorvjain25/frontier [marketplace] *80*  items=1 - Make Claude Opus, Sonnet, GPT, or Gemini produce work close to what Claude Fable reasons=['fails: pushed<=90d (142)'] src=['topic']
- kujenga/zotero-mcp [mcp-server] *162*  items=1 - Search your Zotero library, retrieve item metadata, and read full text from AI a reasons=['fails: pushed<=90d (109)'] src=['mcp-registry']
- larashero3-dotcom/lieflat-less-ai-tone [skill] *8688*  items=1 - 一个基于 520 万字语料统计的去 AI 味 skill · An AI-tone removal skill grounded in a 5.2-millio reasons=['fails: license (NOASSERTION)'] src=['topic']
- gotalab/goal-setter-skill [plugin] *107*  items=1 - Shape rough requests into evidence-backed /goal completion contracts — an Agent  reasons=['fails: pushed<=90d (94)', 'no corroborating signal'] src=['code']
- wentong2022-arch/flowforge-skill [plugin] *138*  items=1 - Generate professional draw.io diagrams from natural language — a Claude Code ski reasons=['fails: pushed<=90d (142)'] src=['code']
- cyberlife-coder/VelesDB [mcp-server] *105*  items=1 - Offline agentic memory: remember/recall/relate/forget/why over a fused vector+gr reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- Dicklesworthstone/agent_flywheel_clawdbot_skills_and_integrations [skill] *73*  items=1 - Clawdbot skills for agentic coding workflows - ACFS stack, cloud CLIs, and dev t reasons=['fails: license (NOASSERTION)'] src=['topic']
- chunxiaoxx/nautilus-compass [plugin,mcp-server] *1260*  items=2 - Open memory & reliability layer for AI agents + independent judging/verification reasons=['fails: license (NOASSERTION)'] src=['mcp-registry', 'topic']
- kesslerio/attio-mcp-server [mcp-server] *69*  items=3 - Connect AI to your Attio CRM. Manage contacts, companies, deals, and sales pipel reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- KnockOutEZ/wigolo [skill,mcp-server] *5561*  items=2 - The go-to web for your AI coding agent — local-first search, fetch, crawl & rese reasons=['fails: license (NOASSERTION)'] src=['mcp-registry', 'topic']
- bromoket/x64dbg_mcp [mcp-server] *141*  items=1 - MCP server for x64dbg debugger - 23 mega-tools for AI-powered reverse engineerin reasons=['fails: pushed<=90d (168)'] src=['mcp-registry']
- Mindgard/ai-ide-skills [plugin] *64*  items=1 -  reasons=['fails: pushed<=90d (122)', 'fails: license (NOASSERTION)'] src=['code']
- JuneYaooo/nihaisha-nishi-tcm [skill] *2289*  items=1 - 倪海厦中医课程资料的 Agent Skill：支持课程检索、方证穴位辨析、学习笔记整理与板书截图证据索引。 | An Agent Skill for Ni Ha reasons=['fails: license (None)'] src=['topic']

## Errors
- graphql: HTTP 504 after 4 retries <!DOCTYPE html>
<!--

Hello future GitHubber! I bet you're here to remove tho
- broad verify subfolders chunk 2: no data None

## Rate limit
- REST calls this run (uncached): {"core": 19, "search": 42}; last seen: {"core": {"remaining": "4981", "limit": "5000"}, "search": {"remaining": "28", "limit": "30"}}
- GraphQL: 156 calls, cost 99, remaining 4786/5000, stopped early: False
- REST stopped early: False
- repos lacking metadata: 4154; enriched this run: 37980