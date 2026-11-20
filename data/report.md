# Catalog report 2026-11-20
Mode: **token**; run time 1674s
Repos (deduped): 3372; flat entries before dedup: 25906

## Tier x type BEFORE dedup (flat entries)
- new/mcp-server: 15717
- watch/mcp-server: 2605
- listed/plugin: 2283
- verified/mcp-server: 1353
- verified/skill: 505
- watch/skill: 458
- watch/marketplace: 417
- official/plugin: 375
- verified/marketplace: 362
- verified/plugin: 350
- watch/plugin: 284
- watch/agent: 206
- verified/collection: 194
- new/marketplace: 171
- new/skill: 165
- anthropic/plugin: 150
- new/plugin: 140
- verified/agent: 57
- new/agent: 36
- anthropic/marketplace: 15
- anthropic/collection: 4
- watch/collection: 3
- anthropic/agent: 1

## Tier AFTER dedup (repos)
- verified: 1950
- watch: 500
- new: 356
- official: 256
- listed: 162
- anthropic: 148

## Type AFTER dedup (items)
- mcp-server: 1833
- plugin: 1371
- skill: 802
- marketplace: 517
- collection: 121
- agent: 61

## Primary type AFTER dedup (repos)
- mcp-server: 1204
- plugin: 837
- skill: 743
- marketplace: 454
- collection: 86
- agent: 48

## Repos by discovery source family
- mcp-registry: 1362
- topic: 1345
- anthropic: 461
- code: 220
- anthropic-org: 188
- curated: 149
- marketplace-expansion: 37

## Flags (all tiers)
- product-stars: 237
- star-spike: 18
- star-anomaly: 1

## star-anomaly by tier
- new: 1

## Metadata gaps
- repos without metadata: 154
- reasons: {'unfetched': 154}

## MCP-only repos excluded: 55
- n8n-io/n8n *211461* ['automation', 'ipaas', 'n8n', 'workflow', 'typescript'] - Fair-code workflow automation platform with native AI capabilities. Combine visu
- assafelovic/gpt-researcher *30788* ['ai', 'python', 'agent', 'automation', 'research'] - An autonomous agent that conducts deep research on any data using any LLM provid
- mrexodia/ida-pro-mcp *13532* ['ida-plugin', 'ida-pro', 'mcp', 'mcp-server', 'modelcontextprotocol'] - AI-powered reverse engineering assistant that bridges IDA Pro with language mode
- mcp-use/mcp-use *10999* ['mcp', 'model-context-protocol', 'apps-sdk', 'mcp-apps', 'mcp-inspector'] - The fullstack MCP framework to develop MCP Apps for ChatGPT / Claude & MCP Serve
- Agents365-ai/drawio-skill *10873* ['drawio', 'diagram', 'agent-skills', 'architecture-diagram', 'claude-code'] - Agent skill that turns natural language, code, Terraform/K8s, SQL, OpenAPI, Asyn
- qybaihe/bla *6229* ['adversarial-ai', 'claude-code', 'cursor', 'electron-security', 'llm-security'] - 🛡️ BLA (bla-agents / Blind LLM Agents) — Open-source Blue Defense MCP server & C
- Marker-Inc-Korea/AutoRAG *6080* ['document-parser', 'embeddings', 'llm', 'open-source', 'rag'] - Your Personal Librarian Agent. Ask anything on your computer, organize files, re
- jordan-gibbs/hyperresearch *4917* ['agents', 'agentskills', 'claude-code', 'deep-research', 'deep-research-agent'] - Convert Claude Code or Codex into the most intelligent Deep Research Agent. Coll
- stickerdaniel/linkedin-mcp-server *4262* ['linkedin', 'linkedin-scraper', 'mcp', 'mcp-server', 'linkedin-mcp'] - Open-source MCP server for LinkedIn. Give Claude and any MCP-compatible AI agent
- taylorwilsdon/google_workspace_mcp *3554* ['ai', 'gmail', 'google-calendar', 'google-workspace', 'llm'] - Control Gmail, Google Calendar, Docs, Sheets, Slides, Chat, Forms, Tasks, Search
- duty1g/x64dbg-mcp-server *2848* ['ai-agents', 'ai-debugging', 'binary-analysis', 'claude', 'claude-code'] - x64dbg-MCP Server is a native MCP (Model Context Protocol) plugin for x64dbg tha
- alpic-ai/skybridge *2198* ['agent', 'ai', 'apps-sdk', 'chatgpt', 'claude'] - Skybridge is a full-stack TypeScript framework for MCP Apps and ChatGPT Apps. Ty
- study8677/repobrain *1363* ['claude-code', 'codex-cli', 'developer-tools', 'mcp-server', 'windsurf'] - 🧠 RepoBrain (formerly Antigravity) — Give your repo a brain. ChatGPT for your co
- dansugc/reverse-engineer-marketing *974* ['ad-library', 'ai-agents', 'claude-code', 'codex', 'competitor-analysis'] - Paste a link, get the whole marketing machine behind it: paid ads, organic socia
- CodeAbra/iai-personal-memory-engine *924* ['claude', 'claude-code', 'local-first', 'mcp', 'mcp-server'] - A cyber brain for your AI. It never forgets a detail, remembers exactly what you

## Degradation
- registry complete: True (685 pages, 68488 entries)
- MCP servers merged from the previous catalog (not re-fetched): 0
- GraphQL 403s: 0 (secondary rate limit: 0); retries: 6; queries that gave up: 1
- HTTP retries (5xx/network): 0
- repos with stale metadata reused from the previous catalog (meta_stale): 0

## MCP Registry
- {"pages": 685, "fetched": 68488, "kept": 67392, "dropped": 1096, "bad": 0, "complete": true, "excluded_remote_only": 24676, "excluded_low_signal": 23041, "fallback_merged": 0, "records": 1362, "attached_existing": 164, "new_repo": 1198, "remote_only": 0, "tiers": {"official": 27, "listed": 20, "verified": 979, "new": 139, "watch": 197}}

## Top 20 by trend_7d
- GoogleChrome/modern-web-guidance +15745 (201.42%) ['star-spike', 'product-stars']
- morluto/rea +14528 (3.19%) []
- elementalsouls/Claude-BugHunter +7204 (127.69%) ['star-spike']
- obra/superpowers +5351 (1.69%) []
- affaan-m/ECC +5279 (1.75%) []
- debpalash/VoiceStudio +5170 (4.73%) ['product-stars']
- mattpocock/skills +5126 (1.59%) []
- DietrichGebert/ponytail +5109 (2.69%) []
- cloudflare/security-audit-skill +4589 (6.43%) []
- Leonxlnx/taste-skill +4518 (3.95%) []
- pbakaus/impeccable +4470 (4.1%) []
- alibaba/open-code-review +4381 (8.75%) []
- Nutlope/hallmark +4024 (7.43%) []
- anthropics/skills +3998 (2.06%) []
- heygen-com/hyperframes +3587 (4.29%) []
- JuneYaooo/rea-video +3535 (46.46%) ['star-spike']
- heydamir/unslop +3528 (23.14%) []
- ag-ui-protocol/ag-ui +3519 (20.51%) ['product-stars']
- backnotprop/plannotator +3501 (34.26%) ['star-spike']
- mvanhorn/last30days-skill +3489 (5.17%) []

## Code search vs topic search
- repos found by code search: 220
- also in topic search: 14
- code-only: 191; tiers: {'anthropic': 1, 'verified': 97, 'watch': 61, 'new': 32}

## Top 30 by stars: anthropic
- anthropics/skills [marketplace,collection] *197786*  items=2 - Anthropic example skills
- anthropics/claude-code [marketplace,agent] *156356*  items=2 - Anthropic's Claude Code plugins, installed from the claude-plugins-official repo
- anthropics/claude-plugins-official [plugin,marketplace,collection] *47741*  items=15 - Directory of popular Claude Code extensions including development tools, product
- anthropics/financial-services [marketplace] *41412*  items=1 - 
- anthropics/knowledge-work-plugins [marketplace] *36585*  items=1 - 
- anthropics/claude-for-legal [marketplace] *10049*  items=1 - Reference agents, skills, and data connectors for the legal workflows we see mos
- anthropics/claude-code-action [collection] *10024*  items=1 - The official GitHub Action for running Claude Code in CI: mention @claude in iss
- anthropics/claude-code-security-review [collection] *7031*  items=1 - An official AI-powered security-review GitHub Action that uses Claude to analyze
- anthropics/claude-plugins-community [marketplace] *4924*  items=1 - 
- anthropics/commerce-agents [marketplace] *3492*  items=1 - Claude Commerce Agents: the commerce-builder plugin for building shopping and me
- anthropics/life-sciences [marketplace] *653*  items=1 - Skills for life sciences research, data analysis, and discovery
- anthropics/k12-teacher-skills [marketplace] *633*  items=1 - Plugin marketplace for K-12 Education and Claude for Teachers.
- anthropics/healthcare [marketplace] *455*  items=1 - Claude for Healthcare — one plugin bundling payer, provider, pharma, and general
- anthropics/oncall-kit [marketplace] *276*  items=1 - 
- anthropics/claude-for-financial-advisors [plugin,marketplace] *163*  items=2 - Ready-to-run workflows for financial advisors in Claude Cowork, drawing live dat
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
- mattpocock/skills [plugin] *328294*  items=2 - Matt Pocock's agent skills for real engineering — grilling, spec/ticket flows, T
- obra/superpowers [plugin,skill] *322243*  items=4 - Superpowers teaches Claude brainstorming, subagent driven development with built
- heygen-com/hyperframes [plugin,mcp-server] *87120*  items=3 - HyperFrames by HeyGen. Write HTML, render video. Compositions, GSAP and runtime 
- ChromeDevTools/chrome-devtools-mcp [plugin,mcp-server] *58405*  items=4 - Control and inspect a live Chrome browser from your coding agent. Record perform
- GoogleChrome/modern-web-guidance [plugin] *23562* ['star-spike', 'product-stars'] items=2 - Keep your coding agent up to date with the latest web best practices
- confident-ai/deepeval [plugin] *19569* ['product-stars'] items=1 - Skills for adding DeepEval evaluations, tracing, datasets, Confident AI reports,
- huggingface/skills [plugin] *11366*  items=2 - Build, train, evaluate, and use open source AI models, datasets, and spaces.
- wonderwhy-er/DesktopCommanderMCP [plugin,mcp-server] *10371*  items=4 - MCP server for terminal commands, process management, and file operations across
- Eigenwise/atomic-agents [plugin,marketplace] *6342* ['product-stars'] items=3 - Comprehensive development workflow for building AI agents with the Atomic Agents
- exa-labs/exa-mcp-server [plugin,mcp-server] *5245*  items=3 - Exa AI web search, deep research, and content extraction. Provides MCP tools and
- expo/skills [plugin] *4194*  items=2 - Official Expo skills for building, deploying, upgrading, and debugging React Nat
- NVIDIA/skills [plugin] *4089*  items=2 - Find the right NVIDIA skill for GPU acceleration, CUDA, AI agents, data loading,
- aws/agent-toolkit-for-aws [plugin] *3526*  items=8 - Build, deploy, and operate AI agents on AWS. Skills for scaffolding agents with 
- cloudflare/skills [plugin] *3407*  items=2 - Skills for the Cloudflare developer platform: Workers, Durable Objects, Agents S
- modelcontextprotocol/ext-apps [plugin] *3123*  items=3 - Skills for creating MCP Apps with the MCP Apps SDK
- figma/mcp-server-guide [plugin,mcp-server] *2215*  items=4 - Figma design platform integration. Access design files, extract component inform
- stripe/ai [plugin,mcp-server] *2074*  items=3 - Stripe development plugin for Claude
- MicrosoftDocs/mcp [plugin,mcp-server] *2002*  items=3 - Access official Microsoft documentation, API references, and code samples for Az
- EpicGames/unreal-engine-skills-for-claude-code-plugin [plugin] *2001*  items=2 - Control Unreal Editor directly from Claude Code via MCP. Hundreds of tools expos
- microsoft/azure-skills [plugin] *1659*  items=2 - Transform Claude into an Azure expert. This plugin integrates the Azure MCP serv
- atlassian/atlassian-mcp-server [plugin,mcp-server] *1183*  items=3 - Connect to Atlassian products including Jira and Confluence. Search and create i
- forcedotcom/sf-skills [plugin,skill] *1174*  items=2 - Build Salesforce apps and agents using these core building blocks: metadata, Ape
- superdesigndev/superdesign-skill [plugin,skill] *1031*  items=2 - Design or redesign frontend UI and marketing graphics on the Superdesign infinit
- awslabs/agent-plugins [plugin] *947*  items=10 - Guide developers through adding maps, places search, geocoding, routing, and oth
- Unity-Technologies/unity-agent-plugin [plugin] *659*  items=2 - Unity's official plugin for Claude Code, with curated skills for game developmen
- Shopify/Shopify-AI-Toolkit [plugin] *652*  items=2 - Shopify's AI Toolkit provides 18 development skills for building on the Shopify 
- duckdb/duckdb-skills [plugin] *618*  items=2 - DuckDB-powered skills for Claude Code: read any data file, attach and query Duck
- gitroomhq/postiz-agent [plugin] *580*  items=3 - Social media automation CLI for scheduling posts, managing integrations, uploadi
- ClickHouse/agent-skills [plugin] *572*  items=2 - 28 best practice rules for ClickHouse schema design, query optimization, and dat
- TheQtCompanyRnD/agent-skills [plugin] *553*  items=3 - Agentic engineering skills for Qt software development — Qt C++/QML code review,

## Top 30 by stars: listed
- DietrichGebert/ponytail [plugin] *194997*  items=2 - Lazy senior dev mode. Forces the simplest, shortest solution that actually works
- JuliusBrussee/caveman [plugin,skill] *121614*  items=2 - Auto-activation works differently per agent: Claude Code uses SessionStart hooks
- thedotmack/claude-mem [plugin,skill] *118489*  items=3 - Persistent memory system for Claude Code - seamlessly preserve context across se
- pbakaus/impeccable [plugin] *113591*  items=1 - Great design prompts require design vocabulary. Most people don't have it. You c
- Egonex-AI/Understand-Anything [plugin,skill] *93347*  items=2 - Understand Anything is a Claude Code plugin that analyzes your project with a mu
- mvanhorn/last30days-skill [plugin] *70949*  items=1 - last-30-days is a Claude Code skill that searches the web and delivers a structu
- mem0ai/mem0 [plugin] *69261* ['product-stars'] items=1 - Connect Mem0 to Claude to give your agent persistent memory across sessions. Cla
- coreyhaines31/marketingskills [plugin,skill] *61558*  items=3 - coreyhaines31
- DayuanJiang/next-ai-draw-io [plugin,mcp-server] *37083*  items=2 - AI-powered Draw.io diagram generation with real-time browser preview. Create flo
- mksglu/context-mode [plugin] *34317*  items=1 - MCP is the protocol for tool access. We're the virtualization layer for context.
- AgriciDaniel/claude-seo [plugin] *30986*  items=1 - Comprehensive SEO analysis plugin for Claude Code. Performs full site audits wit
- alirezarezvani/claude-skills [plugin,skill] *30157*  items=2 - Playwright Pro turns your AI coding agent into a senior test automation engineer
- jarrodwatts/claude-hud [plugin,collection] *29270*  items=2 - Real-time statusline HUD for Claude Code - context health, tool activity, agent 
- promptfoo/promptfoo [plugin] *27477*  items=1 - Teaches AI coding agents to create and maintain promptfoo eval suites. Encodes b
- browser-use/browser-harness [plugin] *19161*  items=1 - Open-source browser agent driven via CDP — direct browser control, 79K stars, YC
- Jeffallan/claude-skills [plugin,skill,collection] *12464*  items=3 - 66 specialized skills for full-stack development: 12 language experts (Python, T
- nicobailon/visual-explainer [plugin,collection] *11191*  items=3 - An agent skill that turns complex terminal output into styled HTML pages you act
- revfactory/harness [plugin,agent] *9386*  items=3 - Harness leverages Claude Code's agent team system to decompose complex tasks int
- Eventual-Inc/Daft [plugin] *5854* ['product-stars'] items=1 - Skills for working with Daft, a high-performance data engine for AI and multimod
- clidey/whodb [plugin] *5063* ['product-stars'] items=1 - Database management tools for Claude Code. Query databases, explore schemas, ana
- nyldn/claude-octopus [plugin] *4474*  items=2 - Multi-LLM orchestration for Claude Code and Cowork. Coordinates 8 AI providers (
- giancarloerra/SocratiCode [plugin,mcp-server] *3382*  items=2 - Enterprise-grade (40m+ lines) codebase intelligence in a zero-setup, private and
- Chachamaru127/claude-code-harness [plugin,marketplace,agent] *3216*  items=5 - Autonomous Plan → Work → Review cycle for Claude Code. Go-native engine with 25×
- fabio-rovai/open-ontologies [plugin] *2933*  items=1 - AI-native ontology engineering with 39 MCP tools backed by an in-memory Oxigraph
- AgriciDaniel/claude-blog [plugin] *2822*  items=1 - AI-powered blog creation and optimization skill with 20 commands, 4 specialized 
- nizos/tdd-guard [plugin,collection] *2384*  items=2 - Enforces Test-Driven Development by intercepting file operations in Claude Code.
- AminForou/mcp-gsc [plugin] *2245*  items=1 - Connect Google Search Console to Claude Code. Query rankings, inspect URLs, audi
- kenryu42/cc-safety-net [plugin,collection] *2078*  items=3 - Block destructive git and filesystem commands before execution
- severity1/claude-code-prompt-improver [plugin] *1972*  items=1 - Intelligent prompt optimization using skill-based architecture. Enriches vague p
- aklofas/kicad-happy [plugin] *1707*  items=1 - KiCad electronics design skills. Analyze schematics, review PCB layouts, downloa

## Top 30 by stars: verified
- morluto/rea [marketplace,mcp-server] *470319*  items=2 - Reverse engineer anything with agents, from app behavior down to native binaries
- affaan-m/ECC [collection] *307381*  items=1 - Top-notch, well-written resources covering "just about everything" from core eng
- firecrawl/firecrawl [skill] *204460* ['product-stars'] items=1 - Supercharge your AI agents with data from the web and beyond. Building the libra
- nextlevelbuilder/ui-ux-pro-max-skill [marketplace] *151863*  items=1 - An AI skill that provides design intelligence for building professional UI/UX ac
- vercel/next.js [marketplace] *143615* ['product-stars'] items=1 - The React Framework
- garrytan/gstack [agent] *142161*  items=1 - Garry Tan's (Y Combinator) Claude Code setup and "open source software factory" 
- browser-use/browser-use [mcp-server] *121543*  items=1 - Browser agents and stealth cloud browsers for AI: run web tasks, fill forms, ext
- addyosmani/agent-skills [marketplace] *119227*  items=1 - Production-grade engineering skills for AI coding agents.
- Leonxlnx/taste-skill [marketplace] *118987*  items=1 - Agent skills that give coding agents taste: art direction, reference images and 
- paperclipai/paperclip [skill,mcp-server] *115271*  items=2 - The open-source app everyone uses to manage agents at work
- debpalash/VoiceStudio [skill] *114540* ['product-stars'] items=1 - VoiceStudio is the open-source, fully-local ElevenLabs alternative — voice cloni
- nexu-io/open-design [marketplace] *108565*  items=1 - The 1st Collaborative AI Design Agent Workspace. Local-first and open source. Cr
- ruvnet/RuView [marketplace] *104652*  items=1 - π RuView turns commodity WiFi signals into real-time spatial intelligence, vital
- D4Vinci/Scrapling [mcp-server] *104480*  items=1 - Web scraping with stealth HTTP, real browsers, and Cloudflare bypass. CSS select
- tt-a1i/archify [skill,collection] *98115*  items=2 - An Agent Skill for Claude Code that generates interactive architecture, workflow
- storybookjs/storybook [marketplace] *91656* ['product-stars'] items=1 - Storybook is the industry standard workshop for building, documenting, and testi
- koala73/worldmonitor [skill,mcp-server] *90968* ['product-stars'] items=2 - Real-time global intelligence dashboard. AI-powered news aggregation, geopolitic
- career-ops-hq/career-ops [plugin] *83829*  items=1 - Open-source AI job search agent and job finder: scan job boards, score each job 
- ruvnet/ruflo [marketplace,mcp-server] *82126*  items=3 - 🌊 The original agent harness. Deploy intelligent multi-player swarms, coordinate
- OpenMontageInc/OpenMontage [skill] *81798*  items=1 - World's first open-source, agentic video production system. 12 production pipeli
- netdata/netdata [mcp-server] *81528*  items=1 - Real-time infrastructure monitoring with metrics, logs, alerts, and ML-based ano
- shareAI-lab/learn-claude-code [collection] *80659*  items=1 - A really interesting analysis of how coding agents like Claude Code are designed
- headroomlabs-ai/headroom [marketplace] *80182*  items=1 - Compress tool outputs, logs, files, and RAG chunks before they reach the LLM. 20
- ComposioHQ/awesome-claude-skills [skill] *79911*  items=1 - A curated list of awesome Claude Skills, resources, and tools for customizing Cl
- rohitg00/ai-engineering-from-scratch [skill] *79627* ['product-stars'] items=1 - Learn AI Engineering! Learn it. Build it. Ship it for others.
- hugohe3/ppt-master [marketplace] *78685* ['product-stars'] items=1 - AI turns documents or topics into real, native PowerPoint decks—with native shap
- usestrix/strix [skill] *76722* ['product-stars'] items=1 - Open-source AI penetration testing tool to find and fix your app’s vulnerabiliti
- cloudflare/security-audit-skill [skill] *75928*  items=1 - A coding-agent skill for multi-phase security audits with independently verified
- tw93/Mole [marketplace] *75645* ['product-stars'] items=1 - 🐹 Open-source Mac and PC cleaner. Keep your machine clean, light, and running li
- thedaviddias/Front-End-Checklist [marketplace,mcp-server] *74783* ['product-stars'] items=2 - 🗂 The essential checklist for modern web development, for humans and AI agents

## Top 30 by stars: watch
- f/prompts.chat [marketplace] *177922* ['product-stars'] items=1 - f.k.a. Awesome ChatGPT Prompts. Share, discover, and collect prompts from the co
- opendatalab/MinerU [skill] *84025* ['product-stars'] items=1 - Transforms complex documents like PDFs and Office docs into LLM-ready markdown/J
- code-yeongyu/oh-my-openagent [skill] *71013* ['product-stars'] items=1 - OmO: Just type "mass ulw" keyword with your prompt. Now you are the master of gr
- Imbad0202/academic-research-skills [marketplace] *57791*  items=1 - Academic Research Skills for Claude Code: research → write → review → revise → f
- bmad-code-org/BMAD-METHOD [skill] *55562* ['product-stars'] items=1 - Breakthrough Method for Agile Ai Driven Development
- tldraw/tldraw [mcp-server] *51501*  items=1 - Draw and visually collaborate with your agents on tldraw's canvas.
- metabase/metabase [mcp-server] *50438*  items=1 - Lets AI clients search, explore, query, and visualize data in a Metabase instanc
- abhigyanpatwari/GitNexus [marketplace] *48672* ['product-stars'] items=1 - GitNexus: The Zero-Server Code Intelligence Engine
- serverless/serverless [skill] *46934* ['product-stars'] items=1 - ⚡ Serverless Framework – Effortlessly build apps that auto-scale, incur zero cos
- PostHog/posthog [mcp-server] *40975*  items=1 - Official PostHog MCP Server for product analytics, feature flags, experiments, a
- openai/codex-plugin-cc [marketplace] *35302*  items=1 - Use Codex from Claude Code to review code or delegate tasks.
- zarazhangrui/frontend-slides [marketplace] *32647*  items=1 - Create beautiful slides on the web using a coding agent's frontend skills
- oraios/serena [mcp-server] *31541*  items=1 - A powerful toolkit for coding, providing semantic retrieval and editing capabili
- hypit-ai/hypit [skill] *30777* ['product-stars'] items=1 - Clone any viral video with AI agents. Not just a script, the whole workflow: swa
- openai/skills [skill] *28849*  items=1 - Skills Catalog for Codex
- vercel/ai [skill] *28102* ['product-stars'] items=1 - The AI Toolkit for TypeScript. From the creators of Next.js, the AI SDK is a fre
- clockworklabs/SpacetimeDB [marketplace] *25568* ['product-stars'] items=1 - Development at the speed of light
- nocobase/nocobase [skill] *24972*  items=1 - NocoBase is the open-source platform for building, running, and evolving busines
- different-ai/openwork [mcp-server] *24569*  items=1 - Your OpenWork org's skills, plugins, workflows, and connections through one OAut
- getpaseo/paseo [skill] *24474*  items=1 - Orchestrate multiple coding agents from desktop and mobile
- HKUDS/AI-Trader [skill] *23334* ['product-stars'] items=1 - "AI-Trader: 100% Fully-Automated Agent-Native Trading"
- screenpipe/screenpipe [mcp-server] *22482*  items=1 - Search your local screen recordings, audio transcripts, and computer activity fr
- longbridge/gpui-kit [skill] *21048* ['product-stars'] items=1 - Rust GUI components for building fantastic cross-platform desktop application by
- greensock/gsap-skills [marketplace] *18782*  items=1 - Official AI skills for GSAP. These skills teach AI coding agents how to correctl
- windmill-labs/windmill [mcp-server] *18647*  items=1 - Run Windmill scripts and flows and manage jobs, schedules, resources and variabl
- Canner/WrenAI [skill] *18347* ['product-stars'] items=1 - GenBI (Generative BI) for AI agents, an open-source, governed text-to-SQL throug
- architecture-decision-record/architecture-decision-record [skill] *17496* ['product-stars'] items=1 - Architecture decision record (ADR) examples for software planning, IT leadership
- composio-community/awesome-codex-skills [skill] *17370*  items=1 - A curated list of practical Codex skills for automating workflows across the Cod
- millionco/react-doctor [skill] *15165* ['product-stars'] items=1 - Your agent writes bad React. This catches it
- kyegomez/OpenMythos [plugin] *14932*  items=1 - A theoretical reconstruction of the Claude Mythos architecture, built from first

## Random sample of 20 watch repos (of 500)
- scasella/claude-dynamic-workflows-codex [marketplace] *330*  items=1 - Run Claude Code dynamic workflows on a local Codex (GPT) backend, plus an intera reasons=['fails: pushed<=90d (131)'] src=['topic']
- maxanatsko/mcp-engine-public [mcp-server] *256*  items=1 - Power BI MCP server (Supports Windows and macOS) reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- millionco/react-doctor [skill] *15165* ['product-stars'] items=1 - Your agent writes bad React. This catches it reasons=['fails: license (NOASSERTION)'] src=['topic']
- manusa/podman-mcp-server [mcp-server] *87*  items=1 - A Model Context Protocol (MCP) server for container runtimes (Podman and Docker) reasons=['fails: pushed<=90d (91)'] src=['mcp-registry']
- sfrangulov/minirag-mcp [mcp-server] *60*  items=1 - Local-first RAG MCP server: hybrid search over a folder of your own documents reasons=['no corroborating signal'] src=['mcp-registry']
- thebriangao/totem [mcp-server] *144*  items=3 - Totem — talk to your wearables with AI. Today: full Whoop access (48 tools). reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- corey924/ZeroSpec [skill] *65*  items=1 - ZeroSpec is a zero-dependency Markdown framework that helps AI agents understand reasons=['fails: pushed<=90d (132)'] src=['topic']
- apoorvjain25/frontier [marketplace] *80*  items=1 - Make Claude Opus, Sonnet, GPT, or Gemini produce work close to what Claude Fable reasons=['fails: pushed<=90d (138)'] src=['topic']
- major7apps/pensyve [mcp-server] *101*  items=1 - Universal memory runtime for AI agents — episodic, semantic, and procedural memo reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- ranxianglei/billion-context [marketplace] *7974*  items=1 - A context-compression plugin for month-long single sessions (billions of tokens) reasons=['fails: license (NOASSERTION)'] src=['topic']
- brunoborges/jdb-agentic-debugger [plugin] *69*  items=1 - Agent Skill for debugging Java applications in real time using JDB (Java Debugge reasons=['fails: pushed<=90d (93)'] src=['code']
- backnotprop/bro [plugin] *192*  items=1 - Useful skills. reasons=['fails: license (None)'] src=['code']
- elie222/inbox-zero [mcp-server] *13071*  items=1 - Search Gmail and Outlook, save drafts, manage email rules, and view email stats. reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- Dicklesworthstone/agent_flywheel_clawdbot_skills_and_integrations [skill] *73*  items=1 - Clawdbot skills for agentic coding workflows - ACFS stack, cloud CLIs, and dev t reasons=['fails: license (NOASSERTION)'] src=['topic']
- chunxiaoxx/nautilus-compass [plugin,mcp-server] *1259*  items=2 - Open memory & reliability layer for AI agents + independent judging/verification reasons=['fails: license (NOASSERTION)'] src=['mcp-registry', 'topic']
- yuna0x0/anilist-mcp [mcp-server] *90*  items=2 - Access and interact with anime and manga data seamlessly. Retrieve detailed info reasons=['fails: pushed<=90d (129)'] src=['mcp-registry']
- AIScientists-Dev/academic-humanizer [skill] *5642*  items=1 - Strip AI-writing tells from papers and grant proposals (NSF/NIH), while keeping  reasons=['fails: pushed<=90d (139)', 'fails: license (NOASSERTION)'] src=['topic']
- deepmemteam/deepmem [mcp-server] *114*  items=1 - Mem0-compatible persistent memory for AI agents: write facts once, recall them s reasons=['fails: pushed<=90d (94)', 'no corroborating signal'] src=['mcp-registry']
- NVIDIA-AI-IOT/inference_builder [plugin] *83*  items=1 - A tool for generating python inference pipeline reasons=['fails: pushed<=90d (128)'] src=['code']
- mliu98/awesome-human-distillation [skill] *764*  items=1 - A curated catalog of human distillliation agent skills reasons=['fails: license (None)'] src=['topic']

## Errors
- graphql: HTTP 504 after 4 retries <!DOCTYPE html>
<!--

Hello future GitHubber! I bet you're here to remove tho
- broad verify subfolders chunk 7: no data None

## Rate limit
- REST calls this run (uncached): {"core": 91, "search": 42}; last seen: {"core": {"remaining": "4909", "limit": "5000"}, "search": {"remaining": "24", "limit": "30"}}
- GraphQL: 195 calls, cost 102, remaining 4811/5000, stopped early: False
- REST stopped early: False
- repos lacking metadata: 4183; enriched this run: 37150