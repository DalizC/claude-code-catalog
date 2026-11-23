# Catalog report 2026-11-23
Mode: **token**; run time 1925s
Repos (deduped): 3386; flat entries before dedup: 25991

## Tier x type BEFORE dedup (flat entries)
- new/mcp-server: 15835
- watch/mcp-server: 2688
- listed/plugin: 2283
- verified/mcp-server: 1363
- verified/skill: 498
- watch/skill: 464
- watch/marketplace: 422
- official/plugin: 375
- verified/marketplace: 365
- watch/plugin: 292
- watch/agent: 210
- verified/plugin: 196
- verified/collection: 194
- new/skill: 172
- new/marketplace: 171
- anthropic/plugin: 150
- new/plugin: 140
- verified/agent: 56
- new/agent: 38
- anthropic/marketplace: 15
- anthropic/collection: 4
- watch/collection: 3
- anthropic/agent: 1

## Tier AFTER dedup (repos)
- verified: 1955
- watch: 505
- new: 360
- official: 256
- listed: 162
- anthropic: 148

## Type AFTER dedup (items)
- mcp-server: 1847
- plugin: 1216
- skill: 797
- marketplace: 520
- collection: 122
- agent: 60

## Primary type AFTER dedup (repos)
- mcp-server: 1218
- plugin: 835
- skill: 738
- marketplace: 462
- collection: 86
- agent: 47

## Repos by discovery source family
- mcp-registry: 1378
- topic: 1354
- anthropic: 461
- code: 207
- anthropic-org: 188
- curated: 150
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
- n8n-io/n8n *211867* ['automation', 'ipaas', 'n8n', 'workflow', 'typescript'] - Fair-code workflow automation platform with native AI capabilities. Combine visu
- assafelovic/gpt-researcher *30869* ['ai', 'python', 'agent', 'automation', 'research'] - An autonomous agent that conducts deep research on any data using any LLM provid
- rocketride-org/rocketride-server *19992* ['cpp', 'mcp', 'vscode-extension', 'agent-framework', 'agent-harness'] - High-performance AI pipeline engine with a C++ core and 50+ Python-extensible no
- mrexodia/ida-pro-mcp *13545* ['ida-plugin', 'ida-pro', 'mcp', 'mcp-server', 'modelcontextprotocol'] - AI-powered reverse engineering assistant that bridges IDA Pro with language mode
- mcp-use/mcp-use *11004* ['mcp', 'model-context-protocol', 'apps-sdk', 'mcp-apps', 'mcp-inspector'] - The fullstack MCP framework to develop MCP Apps for ChatGPT / Claude & MCP Serve
- Agents365-ai/drawio-skill *10906* ['drawio', 'diagram', 'agent-skills', 'architecture-diagram', 'claude-code'] - Agent skill that turns natural language, code, Terraform/K8s, SQL, OpenAPI, Asyn
- qybaihe/bla *6437* ['adversarial-ai', 'claude-code', 'cursor', 'electron-security', 'llm-security'] - 🛡️ BLA (bla-agents / Blind LLM Agents) — Open-source Blue Defense MCP server & C
- Marker-Inc-Korea/AutoRAG *6232* ['document-parser', 'embeddings', 'llm', 'open-source', 'rag'] - Your Personal Librarian Agent. Ask anything on your computer, organize files, re
- jordan-gibbs/hyperresearch *5010* ['agents', 'agentskills', 'claude-code', 'deep-research', 'deep-research-agent'] - Convert Claude Code or Codex into the most intelligent Deep Research Agent. Coll
- stickerdaniel/linkedin-mcp-server *4285* ['linkedin', 'linkedin-scraper', 'mcp', 'mcp-server', 'linkedin-mcp'] - Open-source MCP server for LinkedIn. Give Claude and any MCP-compatible AI agent
- taylorwilsdon/google_workspace_mcp *3566* ['ai', 'gmail', 'google-calendar', 'google-workspace', 'llm'] - Control Gmail, Google Calendar, Docs, Sheets, Slides, Chat, Forms, Tasks, Search
- duty1g/x64dbg-mcp-server *2859* ['ai-agents', 'ai-debugging', 'binary-analysis', 'claude', 'claude-code'] - x64dbg-MCP Server is a native MCP (Model Context Protocol) plugin for x64dbg tha
- alpic-ai/skybridge *2203* ['agent', 'ai', 'apps-sdk', 'chatgpt', 'claude'] - Skybridge is a full-stack TypeScript framework for MCP Apps and ChatGPT Apps. Ty
- study8677/repobrain *1361* ['claude-code', 'codex-cli', 'developer-tools', 'mcp-server', 'windsurf'] - 🧠 RepoBrain (formerly Antigravity) — Give your repo a brain. ChatGPT for your co
- dansugc/reverse-engineer-marketing *1062* ['ad-library', 'ai-agents', 'claude-code', 'codex', 'competitor-analysis'] - Paste a link, get the whole marketing machine behind it: paid ads, organic socia

## Degradation
- registry complete: True (704 pages, 70338 entries)
- MCP servers merged from the previous catalog (not re-fetched): 0
- GraphQL 403s: 0 (secondary rate limit: 0); retries: 11; queries that gave up: 1
- HTTP retries (5xx/network): 0
- repos with stale metadata reused from the previous catalog (meta_stale): 0

## MCP Registry
- {"pages": 704, "fetched": 70338, "kept": 69258, "dropped": 1080, "bad": 0, "complete": true, "excluded_remote_only": 25681, "excluded_low_signal": 23691, "fallback_merged": 0, "records": 1378, "attached_existing": 167, "new_repo": 1211, "remote_only": 0, "tiers": {"official": 27, "listed": 20, "verified": 988, "new": 141, "watch": 202}}

## Top 20 by trend_7d
- morluto/rea +12067 (2.61%) []
- elementalsouls/Claude-BugHunter +11545 (173.01%) ['star-spike']
- GoogleChrome/modern-web-guidance +6862 (37.49%) ['star-spike', 'product-stars']
- obra/superpowers +6175 (1.94%) []
- DietrichGebert/ponytail +5445 (2.84%) []
- nexu-io/openmotion +5440 (54.35%) ['star-spike']
- mattpocock/skills +5364 (1.65%) []
- affaan-m/ECC +5182 (1.7%) []
- debpalash/VoiceStudio +5166 (4.63%) ['product-stars']
- mvanhorn/last30days-skill +5101 (7.52%) []
- firecrawl/firecrawl +5093 (2.52%) ['product-stars']
- pbakaus/impeccable +4276 (3.86%) []
- HKUDS/CLI-Anything +4165 (7.09%) ['product-stars']
- Nutlope/hallmark +4036 (7.26%) []
- Leonxlnx/taste-skill +3889 (3.34%) []
- cloudflare/security-audit-skill +3838 (5.23%) []
- kajisho5/ffmpeg-skill +3803 (62.9%) ['star-spike']
- anthropics/skills +3633 (1.86%) []
- heygen-com/hyperframes +3567 (4.2%) []
- heydamir/unslop +3530 (20.94%) []

## Code search vs topic search
- repos found by code search: 207
- also in topic search: 11
- code-only: 182; tiers: {'anthropic': 1, 'verified': 92, 'watch': 56, 'new': 33}

## Top 30 by stars: anthropic
- anthropics/skills [marketplace,collection] *199112*  items=2 - Anthropic example skills
- anthropics/claude-code [marketplace,agent] *156731*  items=2 - Anthropic's Claude Code plugins, installed from the claude-plugins-official repo
- anthropics/claude-plugins-official [plugin,marketplace,collection] *48002*  items=15 - Directory of popular Claude Code extensions including development tools, product
- anthropics/financial-services [marketplace] *41466*  items=1 - 
- anthropics/knowledge-work-plugins [marketplace] *36709*  items=1 - 
- anthropics/claude-for-legal [marketplace] *10070*  items=1 - Reference agents, skills, and data connectors for the legal workflows we see mos
- anthropics/claude-code-action [collection] *10053*  items=1 - The official GitHub Action for running Claude Code in CI: mention @claude in iss
- anthropics/claude-code-security-review [collection] *7060*  items=1 - An official AI-powered security-review GitHub Action that uses Claude to analyze
- anthropics/claude-plugins-community [marketplace] *4940*  items=1 - 
- anthropics/commerce-agents [marketplace] *3503*  items=1 - Claude Commerce Agents: the commerce-builder plugin for building shopping and me
- anthropics/life-sciences [marketplace] *654*  items=1 - Skills for life sciences research, data analysis, and discovery
- anthropics/k12-teacher-skills [marketplace] *639*  items=1 - Plugin marketplace for K-12 Education and Claude for Teachers.
- anthropics/healthcare [marketplace] *456*  items=1 - Claude for Healthcare — one plugin bundling payer, provider, pharma, and general
- anthropics/oncall-kit [marketplace] *277*  items=1 - 
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
- mattpocock/skills [plugin] *330702*  items=2 - Matt Pocock's agent skills for real engineering — grilling, spec/ticket flows, T
- obra/superpowers [plugin,skill] *324326*  items=4 - Superpowers teaches Claude brainstorming, subagent driven development with built
- heygen-com/hyperframes [plugin,mcp-server] *88410*  items=3 - HyperFrames by HeyGen. Write HTML, render video. Compositions, GSAP and runtime 
- ChromeDevTools/chrome-devtools-mcp [plugin,mcp-server] *58891*  items=4 - Control and inspect a live Chrome browser from your coding agent. Record perform
- GoogleChrome/modern-web-guidance [plugin] *25164* ['star-spike', 'product-stars'] items=2 - Keep your coding agent up to date with the latest web best practices
- confident-ai/deepeval [plugin] *19599* ['product-stars'] items=1 - Skills for adding DeepEval evaluations, tracing, datasets, Confident AI reports,
- huggingface/skills [plugin] *11384*  items=2 - Build, train, evaluate, and use open source AI models, datasets, and spaces.
- wonderwhy-er/DesktopCommanderMCP [plugin,mcp-server] *10399*  items=4 - MCP server for terminal commands, process management, and file operations across
- Eigenwise/atomic-agents [plugin,marketplace] *6346* ['product-stars'] items=3 - Comprehensive development workflow for building AI agents with the Atomic Agents
- exa-labs/exa-mcp-server [plugin,mcp-server] *5261*  items=3 - Exa AI web search, deep research, and content extraction. Provides MCP tools and
- expo/skills [plugin] *4217*  items=2 - Official Expo skills for building, deploying, upgrading, and debugging React Nat
- NVIDIA/skills [plugin] *4116*  items=2 - Find the right NVIDIA skill for GPU acceleration, CUDA, AI agents, data loading,
- aws/agent-toolkit-for-aws [plugin] *3543*  items=8 - Build, deploy, and operate AI agents on AWS. Skills for scaffolding agents with 
- cloudflare/skills [plugin] *3431*  items=2 - Skills for the Cloudflare developer platform: Workers, Durable Objects, Agents S
- modelcontextprotocol/ext-apps [plugin] *3139*  items=3 - Skills for creating MCP Apps with the MCP Apps SDK
- figma/mcp-server-guide [plugin,mcp-server] *2225*  items=4 - Figma design platform integration. Access design files, extract component inform
- stripe/ai [plugin,mcp-server] *2081*  items=3 - Stripe development plugin for Claude
- EpicGames/unreal-engine-skills-for-claude-code-plugin [plugin] *2014*  items=2 - Control Unreal Editor directly from Claude Code via MCP. Hundreds of tools expos
- MicrosoftDocs/mcp [plugin,mcp-server] *2003*  items=3 - Access official Microsoft documentation, API references, and code samples for Az
- microsoft/azure-skills [plugin] *1667*  items=2 - Transform Claude into an Azure expert. This plugin integrates the Azure MCP serv
- atlassian/atlassian-mcp-server [plugin,mcp-server] *1186*  items=3 - Connect to Atlassian products including Jira and Confluence. Search and create i
- forcedotcom/sf-skills [plugin,skill] *1184*  items=2 - Build Salesforce apps and agents using these core building blocks: metadata, Ape
- superdesigndev/superdesign-skill [plugin,skill] *1051*  items=2 - Design or redesign frontend UI and marketing graphics on the Superdesign infinit
- awslabs/agent-plugins [plugin] *948*  items=10 - Guide developers through adding maps, places search, geocoding, routing, and oth
- Unity-Technologies/unity-agent-plugin [plugin] *664*  items=2 - Unity's official plugin for Claude Code, with curated skills for game developmen
- Shopify/Shopify-AI-Toolkit [plugin] *652*  items=2 - Shopify's AI Toolkit provides 18 development skills for building on the Shopify 
- duckdb/duckdb-skills [plugin] *621*  items=2 - DuckDB-powered skills for Claude Code: read any data file, attach and query Duck
- gitroomhq/postiz-agent [plugin] *588*  items=3 - Social media automation CLI for scheduling posts, managing integrations, uploadi
- ClickHouse/agent-skills [plugin] *574*  items=2 - 28 best practice rules for ClickHouse schema design, query optimization, and dat
- TheQtCompanyRnD/agent-skills [plugin] *558*  items=3 - Agentic engineering skills for Qt software development — Qt C++/QML code review,

## Top 30 by stars: listed
- DietrichGebert/ponytail [plugin] *197014*  items=2 - Lazy senior dev mode. Forces the simplest, shortest solution that actually works
- JuliusBrussee/caveman [plugin,skill] *122213*  items=2 - Auto-activation works differently per agent: Claude Code uses SessionStart hooks
- thedotmack/claude-mem [plugin,skill] *119137*  items=3 - Persistent memory system for Claude Code - seamlessly preserve context across se
- pbakaus/impeccable [plugin] *115157*  items=1 - Great design prompts require design vocabulary. Most people don't have it. You c
- Egonex-AI/Understand-Anything [plugin,skill] *93703*  items=2 - Understand Anything is a Claude Code plugin that analyzes your project with a mu
- mvanhorn/last30days-skill [plugin] *72903*  items=1 - last-30-days is a Claude Code skill that searches the web and delivers a structu
- mem0ai/mem0 [plugin] *69355* ['product-stars'] items=1 - Connect Mem0 to Claude to give your agent persistent memory across sessions. Cla
- coreyhaines31/marketingskills [plugin,skill] *62096*  items=3 - coreyhaines31
- DayuanJiang/next-ai-draw-io [plugin,mcp-server] *37130*  items=2 - AI-powered Draw.io diagram generation with real-time browser preview. Create flo
- mksglu/context-mode [plugin] *34404*  items=1 - MCP is the protocol for tool access. We're the virtualization layer for context.
- AgriciDaniel/claude-seo [plugin] *31697*  items=1 - Comprehensive SEO analysis plugin for Claude Code. Performs full site audits wit
- alirezarezvani/claude-skills [plugin,skill] *30299*  items=2 - Playwright Pro turns your AI coding agent into a senior test automation engineer
- jarrodwatts/claude-hud [plugin,collection] *29293*  items=2 - Real-time statusline HUD for Claude Code - context health, tool activity, agent 
- promptfoo/promptfoo [plugin] *27558*  items=1 - Teaches AI coding agents to create and maintain promptfoo eval suites. Encodes b
- browser-use/browser-harness [plugin] *19204*  items=1 - Open-source browser agent driven via CDP — direct browser control, 79K stars, YC
- Jeffallan/claude-skills [plugin,skill,collection] *12493*  items=3 - 66 specialized skills for full-stack development: 12 language experts (Python, T
- nicobailon/visual-explainer [plugin,collection] *11229*  items=3 - An agent skill that turns complex terminal output into styled HTML pages you act
- revfactory/harness [plugin,agent] *9393*  items=3 - Harness leverages Claude Code's agent team system to decompose complex tasks int
- Eventual-Inc/Daft [plugin] *5858* ['product-stars'] items=1 - Skills for working with Daft, a high-performance data engine for AI and multimod
- clidey/whodb [plugin] *5066* ['product-stars'] items=1 - Database management tools for Claude Code. Query databases, explore schemas, ana
- nyldn/claude-octopus [plugin] *4487*  items=2 - Multi-LLM orchestration for Claude Code and Cowork. Coordinates 8 AI providers (
- giancarloerra/SocratiCode [plugin,mcp-server] *3381*  items=2 - Enterprise-grade (40m+ lines) codebase intelligence in a zero-setup, private and
- Chachamaru127/claude-code-harness [plugin,marketplace,agent] *3220*  items=5 - Autonomous Plan → Work → Review cycle for Claude Code. Go-native engine with 25×
- fabio-rovai/open-ontologies [plugin] *2947*  items=1 - AI-native ontology engineering with 39 MCP tools backed by an in-memory Oxigraph
- AgriciDaniel/claude-blog [plugin] *2837*  items=1 - AI-powered blog creation and optimization skill with 20 commands, 4 specialized 
- nizos/tdd-guard [plugin,collection] *2386*  items=2 - Enforces Test-Driven Development by intercepting file operations in Claude Code.
- AminForou/mcp-gsc [plugin] *2268*  items=1 - Connect Google Search Console to Claude Code. Query rankings, inspect URLs, audi
- kenryu42/cc-safety-net [plugin,collection] *2091*  items=3 - Block destructive git and filesystem commands before execution
- severity1/claude-code-prompt-improver [plugin] *1972*  items=1 - Intelligent prompt optimization using skill-based architecture. Enriches vague p
- aklofas/kicad-happy [plugin] *1730*  items=1 - KiCad electronics design skills. Analyze schematics, review PCB layouts, downloa

## Top 30 by stars: verified
- morluto/rea [marketplace,mcp-server] *474433*  items=2 - Reverse engineer anything with agents, from app behavior down to native binaries
- affaan-m/ECC [collection] *309125*  items=1 - Top-notch, well-written resources covering "just about everything" from core eng
- firecrawl/firecrawl [skill] *207212* ['product-stars'] items=1 - Supercharge your AI agents with data from the web and beyond. Building the libra
- nextlevelbuilder/ui-ux-pro-max-skill [marketplace] *152948*  items=1 - An AI skill that provides design intelligence for building professional UI/UX ac
- vercel/next.js [marketplace] *143606* ['product-stars'] items=1 - The React Framework
- garrytan/gstack [agent] *142402*  items=1 - Garry Tan's (Y Combinator) Claude Code setup and "open source software factory" 
- browser-use/browser-use [mcp-server] *121793*  items=1 - Browser agents and stealth cloud browsers for AI: run web tasks, fill forms, ext
- Leonxlnx/taste-skill [marketplace] *120238*  items=1 - Agent skills that give coding agents taste: art direction, reference images and 
- addyosmani/agent-skills [marketplace] *119829*  items=1 - Production-grade engineering skills for AI coding agents.
- debpalash/VoiceStudio [skill] *116646* ['product-stars'] items=1 - VoiceStudio is the open-source, fully-local ElevenLabs alternative — voice cloni
- paperclipai/paperclip [skill,mcp-server] *116042*  items=2 - The open-source app everyone uses to manage agents at work
- nexu-io/open-design [marketplace] *109028*  items=1 - The 1st Collaborative AI Design Agent Workspace. Local-first and open source. Cr
- D4Vinci/Scrapling [mcp-server] *105095*  items=1 - Web scraping with stealth HTTP, real browsers, and Cloudflare bypass. CSS select
- ruvnet/RuView [marketplace] *104858*  items=1 - π RuView turns commodity WiFi signals into real-time spatial intelligence, vital
- tt-a1i/archify [skill,collection] *98859*  items=2 - An Agent Skill for Claude Code that generates interactive architecture, workflow
- storybookjs/storybook [marketplace] *91688* ['product-stars'] items=1 - Storybook is the industry standard workshop for building, documenting, and testi
- koala73/worldmonitor [skill,mcp-server] *91078* ['product-stars'] items=2 - Real-time global intelligence dashboard. AI-powered news aggregation, geopolitic
- career-ops-hq/career-ops [plugin] *84254*  items=1 - Open-source AI job search agent and job finder: scan job boards, score each job 
- OpenMontageInc/OpenMontage [skill] *82486*  items=1 - World's first open-source, agentic video production system. 12 production pipeli
- ruvnet/ruflo [marketplace,mcp-server] *82292*  items=3 - 🌊 The original agent harness. Deploy intelligent multi-player swarms, coordinate
- netdata/netdata [mcp-server] *81600*  items=1 - Real-time infrastructure monitoring with metrics, logs, alerts, and ML-based ano
- shareAI-lab/learn-claude-code [collection] *80750*  items=1 - A really interesting analysis of how coding agents like Claude Code are designed
- headroomlabs-ai/headroom [marketplace] *80564*  items=1 - Compress tool outputs, logs, files, and RAG chunks before they reach the LLM. 20
- ComposioHQ/awesome-claude-skills [skill] *80088*  items=1 - A curated list of awesome Claude Skills, resources, and tools for customizing Cl
- rohitg00/ai-engineering-from-scratch [skill] *79873* ['product-stars'] items=1 - Learn AI Engineering! Learn it. Build it. Ship it for others.
- hugohe3/ppt-master [marketplace] *79369* ['product-stars'] items=1 - AI turns documents or topics into real, native PowerPoint decks—with native shap
- cloudflare/security-audit-skill [skill] *77187*  items=1 - A coding-agent skill for multi-phase security audits with independently verified
- usestrix/strix [skill] *77126* ['product-stars'] items=1 - Open-source AI penetration testing tool to find and fix your app’s vulnerabiliti
- tw93/Mole [marketplace] *75887* ['product-stars'] items=1 - 🐹 Open-source Mac and PC cleaner. Keep your machine clean, light, and running li
- thedaviddias/Front-End-Checklist [marketplace,mcp-server] *74799* ['product-stars'] items=2 - 🗂 The essential checklist for modern web development, for humans and AI agents

## Top 30 by stars: watch
- f/prompts.chat [marketplace] *178300* ['product-stars'] items=1 - f.k.a. Awesome ChatGPT Prompts. Share, discover, and collect prompts from the co
- opendatalab/MinerU [skill] *84167* ['product-stars'] items=1 - Transforms complex documents like PDFs and Office docs into LLM-ready markdown/J
- code-yeongyu/oh-my-openagent [skill] *71067* ['product-stars'] items=1 - OmO: Just type "mass ulw" keyword with your prompt. Now you are the master of gr
- Imbad0202/academic-research-skills [marketplace] *58148*  items=1 - Academic Research Skills for Claude Code: research → write → review → revise → f
- bmad-code-org/BMAD-METHOD [skill] *55636* ['product-stars'] items=1 - Breakthrough Method for Agile Ai Driven Development
- tldraw/tldraw [mcp-server] *51535*  items=1 - Draw and visually collaborate with your agents on tldraw's canvas.
- metabase/metabase [mcp-server] *50480*  items=1 - Lets AI clients search, explore, query, and visualize data in a Metabase instanc
- abhigyanpatwari/GitNexus [marketplace] *48739* ['product-stars'] items=1 - GitNexus: The Zero-Server Code Intelligence Engine
- serverless/serverless [skill] *46933* ['product-stars'] items=1 - ⚡ Serverless Framework – Effortlessly build apps that auto-scale, incur zero cos
- PostHog/posthog [mcp-server] *41031*  items=1 - Query analytics, manage feature flags and experiments, and investigate errors in
- phaserjs/phaser [skill] *40773* ['product-stars'] items=1 - Phaser is a fun, free and fast 2D game framework for making HTML5 games for desk
- openai/codex-plugin-cc [marketplace] *35370*  items=1 - Use Codex from Claude Code to review code or delegate tasks.
- zarazhangrui/frontend-slides [marketplace] *32783*  items=1 - Create beautiful slides on the web using a coding agent's frontend skills
- oraios/serena [mcp-server] *31622*  items=1 - A powerful toolkit for coding, providing semantic retrieval and editing capabili
- hypit-ai/hypit [skill] *31143* ['product-stars'] items=1 - Clone any viral video with AI agents. Not just a script, the whole workflow: swa
- openai/skills [skill] *28917*  items=1 - Skills Catalog for Codex
- vercel/ai [skill] *28133* ['product-stars'] items=1 - The AI Toolkit for TypeScript. From the creators of Next.js, the AI SDK is a fre
- clockworklabs/SpacetimeDB [marketplace] *25569* ['product-stars'] items=1 - Development at the speed of light
- nocobase/nocobase [skill] *24981*  items=1 - NocoBase is the open-source platform for building, running, and evolving busines
- getpaseo/paseo [skill] *24734*  items=1 - Orchestrate multiple coding agents from desktop and mobile
- different-ai/openwork [mcp-server] *24582*  items=1 - Your OpenWork org's skills, plugins, workflows, and connections through one OAut
- HKUDS/AI-Trader [skill] *23351* ['product-stars'] items=1 - "AI-Trader: 100% Fully-Automated Agent-Native Trading"
- screenpipe/screenpipe [mcp-server] *22509*  items=1 - Search your local screen recordings, audio transcripts, and computer activity fr
- longbridge/gpui-kit [skill] *21207* ['product-stars'] items=1 - Rust GUI components for building fantastic cross-platform desktop application by
- greensock/gsap-skills [marketplace] *18927*  items=1 - Official AI skills for GSAP. These skills teach AI coding agents how to correctl
- windmill-labs/windmill [mcp-server] *18686*  items=1 - Run Windmill scripts and flows and manage jobs, schedules, resources and variabl
- Canner/WrenAI [skill] *18363* ['product-stars'] items=1 - GenBI (Generative BI) for AI agents, an open-source, governed text-to-SQL throug
- architecture-decision-record/architecture-decision-record [skill] *17508* ['product-stars'] items=1 - Architecture decision record (ADR) examples for software planning, IT leadership
- composio-community/awesome-codex-skills [skill] *17395*  items=1 - A curated list of practical Codex skills for automating workflows across the Cod
- millionco/react-doctor [skill] *15180* ['product-stars'] items=1 - Your agent writes bad React. This catches it

## Random sample of 20 watch repos (of 505)
- av/facts [skill] *208*  items=1 - Antidote for fluffy specs, a toolkit for fact-driven development with AI agents reasons=['fails: pushed<=90d (172)'] src=['topic']
- master-co/css [mcp-server] *1955*  items=1 - Inspect Master CSS classes, generated CSS, and project stylesheets from your AI  reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- Imbad0202/academic-research-skills-codex [skill] *14926*  items=1 - Codex-native Academic Research Skills suite for human-in-the-loop academic resea reasons=['fails: license (NOASSERTION)'] src=['topic']
- luffysolution-svg/obsidian-vault-mcp [mcp-server] *95*  items=1 - Local Zotero, MinerU, Obsidian literature workflow with transactional Analysis n reasons=['fails: pushed<=90d (103)'] src=['mcp-registry']
- scarletkc/Perenna [mcp-server] *60*  items=1 - A lightweight, Git-backed permanent memory for AI agents. reasons=['no corroborating signal'] src=['mcp-registry']
- customermates/customermates [mcp-server] *220*  items=1 - CRM: Claude, ChatGPT or any MCP client works with records, inbox and company kno reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- roberto-mello/lavra [marketplace] *53*  items=1 - A plugin with compound engineering workflows and memory for AI coding agents reasons=['no corroborating signal'] src=['topic']
- vanillaflava/llm-wiki-skills [skill] *73*  items=1 - Turn your markdown vault into a compounding knowledge wiki (Karpathy inspired).  reasons=['fails: pushed<=90d (134)'] src=['topic']
- leeguooooo/iphone-use [mcp-server] *515*  items=1 - Drive a real iPhone from a Mac: read the screen as text, tap, type, scroll, repl reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- LiamGvchi/gc-minimal-zine-poster [skill] *7547*  items=1 - Codex skill for generating quiet minimal zine-style editorial poster prompts and reasons=['fails: pushed<=90d (101)'] src=['topic']
- jh941213/ADLC-harness [plugin] *125*  items=1 - ADLC Harness — AI SDLC 루프(의도→설계→계획→구현→검증→리뷰→출시→학습)를 Claude Code·Codex·Copilot CL reasons=['fails: license (None)'] src=['code']
- NVIDIA-AI-IOT/inference_builder [plugin] *83*  items=1 - A tool for generating python inference pipeline reasons=['fails: pushed<=90d (131)'] src=['code']
- dengyier/OpenWorkProof [mcp-server] *261*  items=2 - Verifiable agent evidence; opt-in Codex guard and reference SOC alert review. reasons=['no corroborating signal'] src=['mcp-registry']
- AshExplained/roblox-skills [skill] *66*  items=1 - 34 Claude Code AI skills for Roblox game development: ideas, Luau architecture,  reasons=['fails: pushed<=90d (144)'] src=['topic']
- stevenflanagan1/social-ai-team [skill] *284*  items=1 - Claude Code skills for social media — a complete AI social team for SMBs. Brand  reasons=['fails: license (None)'] src=['topic']
- yuna0x0/hackmd-mcp [mcp-server] *68*  items=2 - Interact with your HackMD notes and teams seamlessly. Manage your notes, view re reasons=['fails: pushed<=90d (132)'] src=['mcp-registry']
- mcncarl/yichen-skills [skill] *5365*  items=1 -  reasons=['fails: license (NOASSERTION)'] src=['topic']
- roboticforce/sugar [mcp-server] *102*  items=1 - Autonomous AI development system with persistent task queue and background execu reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- Case211/skill-remnawave-xray [plugin] *74*  items=1 - Claude Code skill/plugin: Remnawave + Xray Reality/Vision + Caddy selfsteal + mi reasons=['fails: pushed<=90d (103)'] src=['code']
- JuneYaooo/gpt-image2-ppt-skills [skill] *1474*  items=1 - Clone any .pptx into your own deck — OpenAI gpt-image-2 mimics the layout, you s reasons=['fails: pushed<=90d (92)'] src=['topic']

## Errors
- graphql: HTTP 504 after 4 retries <!DOCTYPE html>
<!--

Hello future GitHubber! I bet you're here to remove tho
- broad verify subfolders chunk 7: no data None

## Rate limit
- REST calls this run (uncached): {"core": 77, "search": 42}; last seen: {"core": {"remaining": "4923", "limit": "5000"}, "search": {"remaining": "28", "limit": "30"}}
- GraphQL: 241 calls, cost 127, remaining 4729/5000, stopped early: False
- REST stopped early: False
- repos lacking metadata: 4153; enriched this run: 37301