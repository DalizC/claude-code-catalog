# Catalog report 2026-11-27
Mode: **token**; run time 1794s
Repos (deduped): 3428; flat entries before dedup: 26905

## Tier x type BEFORE dedup (flat entries)
- new/mcp-server: 16668
- watch/mcp-server: 2759
- listed/plugin: 2280
- verified/mcp-server: 1375
- verified/skill: 492
- watch/skill: 473
- watch/marketplace: 424
- verified/marketplace: 377
- official/plugin: 375
- watch/plugin: 295
- watch/agent: 212
- verified/collection: 194
- verified/plugin: 186
- new/skill: 171
- new/marketplace: 168
- anthropic/plugin: 150
- new/plugin: 137
- verified/agent: 57
- new/agent: 35
- anthropic/marketplace: 15
- anthropic/collection: 4
- watch/collection: 3
- anthropic/agent: 1

## Tier AFTER dedup (repos)
- verified: 1971
- watch: 515
- new: 376
- official: 256
- listed: 162
- anthropic: 148

## Type AFTER dedup (items)
- mcp-server: 1876
- plugin: 1204
- skill: 798
- marketplace: 531
- collection: 121
- agent: 59

## Primary type AFTER dedup (repos)
- mcp-server: 1245
- plugin: 832
- skill: 742
- marketplace: 477
- collection: 86
- agent: 46

## Repos by discovery source family
- mcp-registry: 1408
- topic: 1368
- anthropic: 461
- code: 202
- anthropic-org: 188
- curated: 149
- marketplace-expansion: 34

## Flags (all tiers)
- product-stars: 244
- star-spike: 15
- star-anomaly: 2

## star-anomaly by tier
- new: 2

## Metadata gaps
- repos without metadata: 154
- reasons: {'unfetched': 154}

## MCP-only repos excluded: 54
- n8n-io/n8n *212353* ['automation', 'ipaas', 'n8n', 'workflow', 'typescript'] - Fair-code workflow automation platform with native AI capabilities. Combine visu
- assafelovic/gpt-researcher *30941* ['ai', 'python', 'agent', 'automation', 'research'] - An autonomous agent that conducts deep research on any data using any LLM provid
- rocketride-org/rocketride-server *19974* ['cpp', 'mcp', 'vscode-extension', 'agent-framework', 'agent-harness'] - RocketRide is an open source AI meta-harness with the only enterprise-grade runt
- mrexodia/ida-pro-mcp *13596* ['ida-plugin', 'ida-pro', 'mcp', 'mcp-server', 'modelcontextprotocol'] - AI-powered reverse engineering assistant that bridges IDA Pro with language mode
- mcp-use/mcp-use *11015* ['mcp', 'model-context-protocol', 'apps-sdk', 'mcp-apps', 'mcp-inspector'] - The fullstack MCP framework to develop MCP Apps for ChatGPT / Claude & MCP Serve
- Agents365-ai/drawio-skill *10962* ['drawio', 'diagram', 'agent-skills', 'architecture-diagram', 'claude-code'] - Agent skill that turns natural language, code, Terraform/K8s, SQL, OpenAPI, Asyn
- qybaihe/bla *7025* ['adversarial-ai', 'claude-code', 'cursor', 'electron-security', 'llm-security'] - 🛡️ BLA (bla-agents / Blind LLM Agents) — Open-source Blue Defense MCP server & C
- Marker-Inc-Korea/AutoRAG *6228* ['document-parser', 'embeddings', 'llm', 'open-source', 'rag'] - Your Personal Librarian Agent. Ask anything on your computer, organize files, re
- jordan-gibbs/hyperresearch *5138* ['agents', 'agentskills', 'claude-code', 'deep-research', 'deep-research-agent'] - Convert Claude Code or Codex into the most intelligent Deep Research Agent. Coll
- stickerdaniel/linkedin-mcp-server *4320* ['linkedin', 'linkedin-scraper', 'mcp', 'mcp-server', 'linkedin-mcp'] - Open-source MCP server for LinkedIn. Give Claude and any MCP-compatible AI agent
- taylorwilsdon/google_workspace_mcp *3595* ['ai', 'gmail', 'google-calendar', 'google-workspace', 'llm'] - Control Gmail, Google Calendar, Docs, Sheets, Slides, Chat, Forms, Tasks, Search
- duty1g/x64dbg-mcp-server *2883* ['ai-agents', 'ai-debugging', 'binary-analysis', 'claude', 'claude-code'] - x64dbg-MCP Server is a native MCP (Model Context Protocol) plugin for x64dbg tha
- alpic-ai/skybridge *2204* ['agent', 'ai', 'apps-sdk', 'chatgpt', 'claude'] - Skybridge is a full-stack TypeScript framework for MCP Apps and ChatGPT Apps. Ty
- study8677/repobrain *1363* ['claude-code', 'codex-cli', 'developer-tools', 'mcp-server', 'windsurf'] - 🧠 RepoBrain (formerly Antigravity) — Give your repo a brain. ChatGPT for your co
- dansugc/reverse-engineer-marketing *1188* ['ad-library', 'ai-agents', 'claude-code', 'codex', 'competitor-analysis'] - Paste a link, get the whole marketing machine behind it: paid ads, organic socia

## Degradation
- registry complete: True (757 pages, 75601 entries)
- MCP servers merged from the previous catalog (not re-fetched): 0
- GraphQL 403s: 0 (secondary rate limit: 0); retries: 15; queries that gave up: 1
- HTTP retries (5xx/network): 0
- repos with stale metadata reused from the previous catalog (meta_stale): 0

## MCP Registry
- {"pages": 757, "fetched": 75601, "kept": 74469, "dropped": 1132, "bad": 0, "complete": true, "excluded_remote_only": 27588, "excluded_low_signal": 26079, "fallback_merged": 0, "records": 1408, "attached_existing": 169, "new_repo": 1239, "remote_only": 0, "tiers": {"official": 28, "listed": 20, "verified": 999, "new": 152, "watch": 209}}

## Top 20 by trend_7d
- elementalsouls/Claude-BugHunter +12069 (93.95%) ['star-spike']
- morluto/rea +9760 (2.08%) []
- firecrawl/firecrawl +6653 (3.25%) ['product-stars']
- HKUDS/CLI-Anything +5788 (9.53%) ['product-stars']
- zhouxiaoka/autoclip +5647 (49.19%) ['star-spike']
- mattpocock/skills +5443 (1.66%) []
- obra/superpowers +5406 (1.68%) []
- cathrynlavery/diagram-design +5226 (7.6%) []
- mvanhorn/last30days-skill +4957 (6.99%) []
- erkamyaman/rust-anything +4869 (88.75%) ['star-spike']
- DietrichGebert/ponytail +4478 (2.3%) []
- debpalash/VoiceStudio +4457 (3.89%) ['product-stars']
- XinaTian/MROffice +4307 (1087.63%) ['star-spike']
- pbakaus/impeccable +4045 (3.56%) []
- affaan-m/ECC +4018 (1.31%) []
- heygen-com/hyperframes +3884 (4.46%) []
- xerj-org/xerj +3732 (20.79%) []
- Nutlope/hallmark +3588 (6.17%) []
- nexu-io/openmotion +3581 (27.13%) ['star-spike']
- heydamir/unslop +3518 (18.74%) []

## Code search vs topic search
- repos found by code search: 202
- also in topic search: 8
- code-only: 180; tiers: {'anthropic': 1, 'verified': 95, 'watch': 55, 'new': 29}

## Top 30 by stars: anthropic
- anthropics/skills [marketplace,collection] *201135*  items=2 - Anthropic example skills
- anthropics/claude-code [marketplace,agent] *157251*  items=2 - Anthropic's Claude Code plugins, installed from the claude-plugins-official repo
- anthropics/claude-plugins-official [plugin,marketplace,collection] *48380*  items=15 - Directory of popular Claude Code extensions including development tools, product
- anthropics/financial-services [marketplace] *41546*  items=1 - 
- anthropics/knowledge-work-plugins [marketplace] *37111*  items=1 - 
- anthropics/claude-for-legal [marketplace] *10105*  items=1 - Reference agents, skills, and data connectors for the legal workflows we see mos
- anthropics/claude-code-action [collection] *10099*  items=1 - The official GitHub Action for running Claude Code in CI: mention @claude in iss
- anthropics/claude-code-security-review [collection] *7142*  items=1 - An official AI-powered security-review GitHub Action that uses Claude to analyze
- anthropics/claude-plugins-community [marketplace] *4961*  items=1 - 
- anthropics/commerce-agents [marketplace] *3536*  items=1 - Claude Commerce Agents: the commerce-builder plugin for building shopping and me
- anthropics/life-sciences [marketplace] *660*  items=1 - Skills for life sciences research, data analysis, and discovery
- anthropics/k12-teacher-skills [marketplace] *648*  items=1 - Plugin marketplace for K-12 Education and Claude for Teachers.
- anthropics/healthcare [marketplace] *462*  items=1 - Claude for Healthcare — one plugin bundling payer, provider, pharma, and general
- anthropics/oncall-kit [marketplace] *278*  items=1 - 
- anthropics/claude-for-financial-advisors [plugin,marketplace] *176*  items=2 - Ready-to-run workflows for financial advisors in Claude Cowork, drawing live dat
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
- mattpocock/skills [plugin] *333737*  items=2 - Matt Pocock's agent skills for real engineering — grilling, spec/ticket flows, T
- obra/superpowers [plugin,skill] *327649*  items=4 - Superpowers teaches Claude brainstorming, subagent driven development with built
- heygen-com/hyperframes [plugin,mcp-server] *91004*  items=3 - HyperFrames by HeyGen. Write HTML, render video. Compositions, GSAP and runtime 
- ChromeDevTools/chrome-devtools-mcp [plugin,mcp-server] *59530*  items=4 - Control and inspect a live Chrome browser from your coding agent. Record perform
- GoogleChrome/modern-web-guidance [plugin] *26759* ['product-stars'] items=2 - Keep your coding agent up to date with the latest web best practices
- confident-ai/deepeval [plugin] *19697* ['product-stars'] items=1 - Skills for adding DeepEval evaluations, tracing, datasets, Confident AI reports,
- huggingface/skills [plugin] *11411*  items=2 - Build, train, evaluate, and use open source AI models, datasets, and spaces.
- wonderwhy-er/DesktopCommanderMCP [plugin,mcp-server] *10437*  items=4 - MCP server for terminal commands, process management, and file operations across
- Eigenwise/atomic-agents [plugin,marketplace] *6349* ['product-stars'] items=3 - Comprehensive development workflow for building AI agents with the Atomic Agents
- exa-labs/exa-mcp-server [plugin,mcp-server] *5273*  items=3 - Exa AI web search, deep research, and content extraction. Provides MCP tools and
- expo/skills [plugin] *4247*  items=2 - Official Expo skills for building, deploying, upgrading, and debugging React Nat
- NVIDIA/skills [plugin] *4170*  items=2 - Find the right NVIDIA skill for GPU acceleration, CUDA, AI agents, data loading,
- aws/agent-toolkit-for-aws [plugin] *3594*  items=8 - Build, deploy, and operate AI agents on AWS. Skills for scaffolding agents with 
- cloudflare/skills [plugin] *3469*  items=2 - Skills for the Cloudflare developer platform: Workers, Durable Objects, Agents S
- modelcontextprotocol/ext-apps [plugin] *3161*  items=3 - Skills for creating MCP Apps with the MCP Apps SDK
- figma/mcp-server-guide [plugin,mcp-server] *2241*  items=4 - Figma design platform integration. Access design files, extract component inform
- stripe/ai [plugin,mcp-server] *2099*  items=3 - Stripe development plugin for Claude
- EpicGames/unreal-engine-skills-for-claude-code-plugin [plugin] *2033*  items=2 - Control Unreal Editor directly from Claude Code via MCP. Hundreds of tools expos
- MicrosoftDocs/mcp [plugin,mcp-server] *2010*  items=3 - Access official Microsoft documentation, API references, and code samples for Az
- microsoft/azure-skills [plugin] *1680*  items=2 - Transform Claude into an Azure expert. This plugin integrates the Azure MCP serv
- atlassian/atlassian-mcp-server [plugin,mcp-server] *1194*  items=3 - Connect to Atlassian products including Jira and Confluence. Search and create i
- forcedotcom/sf-skills [plugin,skill] *1192*  items=2 - Build Salesforce apps and agents using these core building blocks: metadata, Ape
- superdesigndev/superdesign-skill [plugin,skill] *1083*  items=2 - Design or redesign frontend UI and marketing graphics on the Superdesign infinit
- awslabs/agent-plugins [plugin] *950*  items=10 - Guide developers through adding maps, places search, geocoding, routing, and oth
- Unity-Technologies/unity-agent-plugin [plugin] *678*  items=2 - Unity's official plugin for Claude Code, with curated skills for game developmen
- Shopify/Shopify-AI-Toolkit [plugin] *654*  items=2 - Shopify's AI Toolkit provides 18 development skills for building on the Shopify 
- duckdb/duckdb-skills [plugin] *623*  items=2 - DuckDB-powered skills for Claude Code: read any data file, attach and query Duck
- gitroomhq/postiz-agent [plugin] *593*  items=3 - Social media automation CLI for scheduling posts, managing integrations, uploadi
- ClickHouse/agent-skills [plugin] *576*  items=2 - 28 best practice rules for ClickHouse schema design, query optimization, and dat
- TheQtCompanyRnD/agent-skills [plugin] *572*  items=3 - Agentic engineering skills for Qt software development — Qt C++/QML code review,

## Top 30 by stars: listed
- DietrichGebert/ponytail [plugin] *199475*  items=2 - Lazy senior dev mode. Forces the simplest, shortest solution that actually works
- JuliusBrussee/caveman [plugin,skill] *123123*  items=2 - Auto-activation works differently per agent: Claude Code uses SessionStart hooks
- thedotmack/claude-mem [plugin,skill] *120038*  items=3 - Persistent memory system for Claude Code - seamlessly preserve context across se
- pbakaus/impeccable [plugin] *117636*  items=1 - Great design prompts require design vocabulary. Most people don't have it. You c
- Egonex-AI/Understand-Anything [plugin,skill] *94626*  items=2 - Understand Anything is a Claude Code plugin that analyzes your project with a mu
- mvanhorn/last30days-skill [plugin] *75906*  items=1 - last-30-days is a Claude Code skill that searches the web and delivers a structu
- mem0ai/mem0 [plugin] *69522* ['product-stars'] items=1 - Connect Mem0 to Claude to give your agent persistent memory across sessions. Cla
- coreyhaines31/marketingskills [plugin,skill] *62890*  items=3 - coreyhaines31
- DayuanJiang/next-ai-draw-io [plugin,mcp-server] *37205*  items=2 - AI-powered Draw.io diagram generation with real-time browser preview. Create flo
- mksglu/context-mode [plugin] *34528*  items=1 - MCP is the protocol for tool access. We're the virtualization layer for context.
- AgriciDaniel/claude-seo [plugin] *32699*  items=1 - Comprehensive SEO analysis plugin for Claude Code. Performs full site audits wit
- alirezarezvani/claude-skills [plugin,skill] *30558*  items=2 - Playwright Pro turns your AI coding agent into a senior test automation engineer
- jarrodwatts/claude-hud [plugin,collection] *29311*  items=2 - Real-time statusline HUD for Claude Code - context health, tool activity, agent 
- promptfoo/promptfoo [plugin] *27730*  items=1 - Teaches AI coding agents to create and maintain promptfoo eval suites. Encodes b
- browser-use/browser-harness [plugin] *19264*  items=1 - Open-source browser agent driven via CDP — direct browser control, 79K stars, YC
- Jeffallan/claude-skills [plugin,skill,collection] *12536*  items=3 - 66 specialized skills for full-stack development: 12 language experts (Python, T
- nicobailon/visual-explainer [plugin,collection] *11297*  items=3 - An agent skill that turns complex terminal output into styled HTML pages you act
- revfactory/harness [plugin,agent] *9406*  items=3 - Harness leverages Claude Code's agent team system to decompose complex tasks int
- Eventual-Inc/Daft [plugin] *5869* ['product-stars'] items=1 - Skills for working with Daft, a high-performance data engine for AI and multimod
- clidey/whodb [plugin] *5071* ['product-stars'] items=1 - Database management tools for Claude Code. Query databases, explore schemas, ana
- nyldn/claude-octopus [plugin] *4506*  items=2 - Multi-LLM orchestration for Claude Code and Cowork. Coordinates 8 AI providers (
- giancarloerra/SocratiCode [plugin,mcp-server] *3386*  items=2 - Enterprise-grade (40m+ lines) codebase intelligence in a zero-setup, private and
- Chachamaru127/claude-code-harness [plugin,marketplace,agent] *3225*  items=5 - Autonomous Plan → Work → Review cycle for Claude Code. Go-native engine with 25×
- fabio-rovai/open-ontologies [plugin] *2971*  items=1 - AI-native ontology engineering with 39 MCP tools backed by an in-memory Oxigraph
- AgriciDaniel/claude-blog [plugin] *2869*  items=1 - AI-powered blog creation and optimization skill with 20 commands, 4 specialized 
- nizos/tdd-guard [plugin,collection] *2388*  items=2 - Enforces Test-Driven Development by intercepting file operations in Claude Code.
- AminForou/mcp-gsc [plugin] *2299*  items=1 - Connect Google Search Console to Claude Code. Query rankings, inspect URLs, audi
- kenryu42/cc-safety-net [plugin,collection] *2108*  items=3 - Block destructive git and filesystem commands before execution
- severity1/claude-code-prompt-improver [plugin] *1974*  items=1 - Intelligent prompt optimization using skill-based architecture. Enriches vague p
- aklofas/kicad-happy [plugin] *1768*  items=1 - KiCad electronics design skills. Analyze schematics, review PCB layouts, downloa

## Top 30 by stars: verified
- morluto/rea [marketplace,mcp-server] *480079*  items=2 - Reverse engineer anything with agents, from app behavior down to native binaries
- affaan-m/ECC [collection] *311399*  items=1 - Top-notch, well-written resources covering "just about everything" from core eng
- firecrawl/firecrawl [skill] *211113* ['product-stars'] items=1 - Knowledge infrastructure to make your agents smarter. Search, scrape and access 
- nextlevelbuilder/ui-ux-pro-max-skill [marketplace] *154720*  items=1 - An AI skill that provides design intelligence for building professional UI/UX ac
- vercel/next.js [marketplace] *143748* ['product-stars'] items=1 - The React Framework
- garrytan/gstack [agent] *142760*  items=1 - Garry Tan's (Y Combinator) Claude Code setup and "open source software factory" 
- browser-use/browser-use [mcp-server] *122173*  items=1 - Browser agents and stealth cloud browsers for AI: run web tasks, fill forms, ext
- Leonxlnx/taste-skill [marketplace] *122053*  items=1 - Agent skills that give coding agents taste: art direction, reference images and 
- addyosmani/agent-skills [marketplace] *120646*  items=1 - Production-grade engineering skills for AI coding agents.
- debpalash/VoiceStudio [skill] *118997* ['product-stars'] items=1 - VoiceStudio is the open-source, fully-local ElevenLabs alternative — voice cloni
- paperclipai/paperclip [skill,mcp-server] *117430*  items=2 - The open-source app everyone uses to manage agents at work
- nexu-io/open-design [marketplace] *109710*  items=1 - The 1st Collaborative AI Design Agent Workspace. Local-first and open source. Cr
- D4Vinci/Scrapling [mcp-server] *106035*  items=1 - Web scraping with stealth HTTP, real browsers, and Cloudflare bypass. CSS select
- ruvnet/RuView [marketplace] *105309*  items=1 - π RuView turns commodity WiFi signals into real-time spatial intelligence, vital
- tt-a1i/archify [skill,collection] *100676*  items=2 - An Agent Skill for Claude Code that generates interactive architecture, workflow
- storybookjs/storybook [marketplace] *91737* ['product-stars'] items=1 - Storybook is the industry standard workshop for building, documenting, and testi
- koala73/worldmonitor [skill,mcp-server] *91237* ['product-stars'] items=2 - Real-time global intelligence dashboard. AI-powered news aggregation, geopolitic
- cheaper-inference/OmniRoute [skill] *90603*  items=1 - Never stop coding. Free MIT AI gateway: one endpoint, 375 providers (150+ free),
- career-ops-hq/career-ops [plugin] *85098*  items=1 - Open-source AI job search agent and job finder: scan job boards, score each job 
- OpenMontageInc/OpenMontage [skill] *83701*  items=1 - World's first open-source, agentic video production system. 12 production pipeli
- ruvnet/ruflo [marketplace,mcp-server] *82513*  items=3 - 🌊 The original agent harness. Deploy intelligent multi-player swarms, coordinate
- netdata/netdata [mcp-server] *81658*  items=1 - Real-time infrastructure monitoring with metrics, logs, alerts, and ML-based ano
- shareAI-lab/learn-claude-code [collection] *80966*  items=1 - A really interesting analysis of how coding agents like Claude Code are designed
- headroomlabs-ai/headroom [marketplace] *80955*  items=1 - Compress tool outputs, logs, files, and RAG chunks before they reach the LLM. 20
- rohitg00/ai-engineering-from-scratch [skill] *80670* ['product-stars'] items=1 - Learn AI Engineering! Learn it. Build it. Ship it for others.
- hugohe3/ppt-master [marketplace] *80591* ['product-stars'] items=1 - AI turns documents or topics into real, native PowerPoint decks—with native shap
- ComposioHQ/awesome-claude-skills [skill] *80408*  items=1 - A curated list of awesome Claude Skills, resources, and tools for customizing Cl
- cloudflare/security-audit-skill [skill] *78940*  items=1 - A coding-agent skill for multi-phase security audits with independently verified
- usestrix/strix [skill] *77831* ['product-stars'] items=1 - Open-source AI penetration testing tool to find and fix your app’s vulnerabiliti
- tw93/Mole [marketplace] *76364* ['product-stars'] items=1 - 🐹 Open-source Mac and PC cleaner. Keep your machine clean, light, and running li

## Top 30 by stars: watch
- f/prompts.chat [marketplace] *178620* ['product-stars'] items=1 - f.k.a. Awesome ChatGPT Prompts. Share, discover, and collect prompts from the co
- opendatalab/MinerU [skill] *84398* ['product-stars'] items=1 - Transforms complex documents like PDFs and Office docs into LLM-ready markdown/J
- code-yeongyu/oh-my-openagent [skill] *71149* ['product-stars'] items=1 - OmO: Just type "mass ulw" keyword with your prompt. Now you are the master of gr
- Imbad0202/academic-research-skills [marketplace] *58725*  items=1 - Academic Research Skills for Claude Code: research → write → review → revise → f
- bmad-code-org/BMAD-METHOD [skill] *55806* ['product-stars'] items=1 - Breakthrough Method for Agile Ai Driven Development
- tldraw/tldraw [mcp-server] *51619*  items=1 - Draw and visually collaborate with your agents on tldraw's canvas.
- metabase/metabase [mcp-server] *50603*  items=1 - Lets AI clients search, explore, query, and visualize data in a Metabase instanc
- abhigyanpatwari/GitNexus [marketplace] *48926* ['product-stars'] items=1 - GitNexus: The Zero-Server Code Intelligence Engine
- serverless/serverless [skill] *46935* ['product-stars'] items=1 - ⚡ Serverless Framework – Effortlessly build apps that auto-scale, incur zero cos
- PostHog/posthog [mcp-server] *41182*  items=1 - Query analytics, manage feature flags and experiments, and investigate errors in
- phaserjs/phaser [skill] *40792* ['product-stars'] items=1 - Phaser is a fun, free and fast 2D game framework for making HTML5 games for desk
- openai/codex-plugin-cc [marketplace] *35485*  items=1 - Use Codex from Claude Code to review code or delegate tasks.
- zarazhangrui/frontend-slides [marketplace] *32988*  items=1 - Create beautiful slides on the web using a coding agent's frontend skills
- oraios/serena [mcp-server] *31739*  items=1 - A powerful toolkit for coding, providing semantic retrieval and editing capabili
- hypit-ai/hypit [skill] *31606* ['product-stars'] items=1 - Clone any viral video with AI agents. Not just a script, the whole workflow: swa
- openai/skills [skill] *29166*  items=1 - Skills Catalog for Codex
- vercel/ai [skill] *28240* ['product-stars'] items=1 - The AI Toolkit for TypeScript. From the creators of Next.js, the AI SDK is a fre
- getpaseo/paseo [skill] *25765*  items=1 - Orchestrate multiple coding agents from desktop and mobile
- clockworklabs/SpacetimeDB [marketplace] *25574* ['product-stars'] items=1 - Development at the speed of light
- nocobase/nocobase [skill] *25029* ['product-stars'] items=1 - NocoBase is the open-source platform for building, running, and evolving busines
- different-ai/openwork [mcp-server] *24611*  items=1 - Your OpenWork org's skills, plugins, workflows, and connections through one OAut
- HKUDS/AI-Trader [skill] *23398* ['product-stars'] items=1 - "AI-Trader: 100% Fully-Automated Agent-Native Trading"
- screenpipe/screenpipe [mcp-server] *22564*  items=1 - Search your local screen recordings, audio transcripts, and computer activity fr
- longbridge/gpui-kit [marketplace] *21442* ['product-stars'] items=1 - Rust GUI components for building fantastic cross-platform desktop application by
- greensock/gsap-skills [marketplace] *19133*  items=1 - Official AI skills for GSAP. These skills teach AI coding agents how to correctl
- windmill-labs/windmill [mcp-server] *18741*  items=1 - Run Windmill scripts and flows and manage jobs, schedules, resources and variabl
- Canner/WrenAI [skill] *18414* ['product-stars'] items=1 - GenBI (Generative BI) for AI agents, an open-source, governed text-to-SQL throug
- architecture-decision-record/architecture-decision-record [skill] *17537* ['product-stars'] items=1 - Architecture decision record (ADR) examples for software planning, IT leadership
- composio-community/awesome-codex-skills [skill] *17440*  items=1 - A curated list of practical Codex skills for automating workflows across the Cod
- millionco/react-doctor [skill] *15191* ['product-stars'] items=1 - Your agent writes bad React. This catches it

## Random sample of 20 watch repos (of 515)
- nirholas/pump-fun-sdk [mcp-server] *152*  items=1 - Build extend and maintain pump - Token creation buying selling migration fee col reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- ruvnet/flow-nexus [mcp-server] *108*  items=1 - Cloud-powered AI platform with multi-agent swarms, sandboxes, and workflow autom reasons=['fails: license (None)'] src=['mcp-registry']
- nirholas/fresh-start [mcp-server] *6224*  items=1 - Explore the Claude Code CLI source — browse tools, commands, search code, and mo reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- Lethe044/agentskill-kit [skill] *52*  items=1 - Lint, security scan, audit, test, forge and export agent skills (SKILL.md) for C reasons=['no corroborating signal'] src=['topic']
- aaaronmiller/create-viral-content [skill] *91*  items=1 - Agent Skill for viral social content that reads as human: hooks, titles, thumbna reasons=['fails: license (None)'] src=['topic']
- shkyyy18/mi_fitness_data_bridge [mcp-server] *81*  items=1 - Local-first bridge: export your own Mi Fitness (Xiaomi) health data to SQLite/JS reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- Songzhi-lab/chinese-font-selector [skill] *84*  items=1 - 全网首个中文字体专业知识包：可商用中文字体库（授权三级分类）、场景×气质选字矩阵、中英混排与排版规则。让 AI 选中文设计字体不再甩给你一堆 Inter / C reasons=['fails: pushed<=90d (100)', 'no corroborating signal'] src=['topic']
- wentong2022-arch/flowforge-skill [plugin] *139*  items=1 - Generate professional draw.io diagrams from natural language — a Claude Code ski reasons=['fails: pushed<=90d (145)'] src=['code']
- metabase/metabase [mcp-server] *50603*  items=1 - Lets AI clients search, explore, query, and visualize data in a Metabase instanc reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- Dammyjay93/interface-design [marketplace] *6042*  items=1 - Design engineering for Claude Code. Craft, memory, and enforcement for consisten reasons=['fails: pushed<=90d (159)'] src=['topic']
- oil-oil/oil-cover [skill] *308*  items=1 - Video cover & thumbnail skill for Claude Code & Codex. 帮你用视频画面做小红书和 B 站封面。 reasons=['fails: license (NOASSERTION)'] src=['topic']
- pmwl0128/quark_drive_skills [plugin] *90*  items=1 - Quark Drive Skills: Pokemon Champions Agent Skills for dex and metagame facts, e reasons=['fails: license (NOASSERTION)', 'no corroborating signal'] src=['code']
- LinklyAI/best-skills [skill] *803*  items=1 - Daily-updated Top 100 Agent Skills rankings — installs, growth, and social buzz  reasons=['fails: license (NOASSERTION)'] src=['topic']
- awv-informatik/classcad-ai [mcp-server] *200*  items=1 - Build and verify CAD parts and assemblies with the ClassCAD engine, locally, no  reasons=['fails: license (None)'] src=['mcp-registry']
- op7418/guizang-sports-skill [skill] *156*  items=1 - 🚴 Claude Code / Codex skill for FIT & KML sports analysis — cycling, running, hi reasons=['fails: pushed<=90d (109)'] src=['topic']
- ilindaniel/ponytail-lite [plugin] *257*  items=1 - Stop agents from over-engineering. Inspired by Ponytail, but without the plugin  reasons=['fails: pushed<=90d (123)'] src=['topic']
- ComPDFKit/compdf-skills [skill] *111*  items=1 - ComPDF Skills are AI-agent-ready PDF processing skills for Claude Code, Cursor,  reasons=['fails: pushed<=90d (106)', 'fails: license (None)'] src=['topic']
- motiful/product-shots [skill] *156*  items=1 - Open-source Claude Code skills that turn one product photo into a full set of e- reasons=['fails: pushed<=90d (171)'] src=['topic']
- reticlehq/reticle [skill,mcp-server] *1334*  items=2 - AI agents can generate code, but still struggle to understand what they build. R reasons=['fails: license (NOASSERTION)'] src=['mcp-registry', 'topic']
- BioTender-max/awesome-bio-agent-skills [skill] *229*  items=1 - A curated collection of AI agent skills for biomedical research, covering genomi reasons=['fails: pushed<=90d (148)', 'fails: license (NOASSERTION)'] src=['topic']

## Errors
- graphql: HTTP 504 after 4 retries <!DOCTYPE html>
<!--

Hello future GitHubber! I bet you're here to remove tho
- broad verify subfolders chunk 9: no data None

## Rate limit
- REST calls this run (uncached): {"core": 142, "search": 42}; last seen: {"core": {"remaining": "4827", "limit": "5000"}, "search": {"remaining": "28", "limit": "30"}}
- GraphQL: 195 calls, cost 77, remaining 4700/5000, stopped early: False
- REST stopped early: False
- repos lacking metadata: 4198; enriched this run: 39316