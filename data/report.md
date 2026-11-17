# Catalog report 2026-11-17
Mode: **token**; run time 2175s
Repos (deduped): 3322; flat entries before dedup: 26118

## Tier x type BEFORE dedup (flat entries)
- new/mcp-server: 16018
- watch/mcp-server: 2544
- listed/plugin: 2283
- verified/mcp-server: 1330
- verified/skill: 499
- watch/skill: 476
- watch/marketplace: 423
- official/plugin: 375
- verified/marketplace: 361
- verified/plugin: 338
- watch/plugin: 296
- watch/agent: 218
- verified/collection: 196
- new/marketplace: 160
- new/skill: 157
- anthropic/plugin: 150
- new/plugin: 142
- verified/agent: 49
- new/agent: 31
- anthropic/marketplace: 15
- anthropic/collection: 4
- watch/collection: 2
- anthropic/agent: 1

## Tier AFTER dedup (repos)
- verified: 1921
- watch: 501
- new: 333
- official: 256
- listed: 163
- anthropic: 148

## Type AFTER dedup (items)
- mcp-server: 1805
- plugin: 1358
- skill: 795
- marketplace: 508
- collection: 122
- agent: 50

## Primary type AFTER dedup (repos)
- mcp-server: 1185
- plugin: 830
- skill: 736
- marketplace: 448
- collection: 87
- agent: 36

## Repos by discovery source family
- topic: 1347
- mcp-registry: 1337
- anthropic: 462
- anthropic-org: 188
- code: 180
- curated: 150
- marketplace-expansion: 36

## Flags (all tiers)
- product-stars: 237
- star-spike: 18
- star-anomaly: 2

## star-anomaly by tier
- new: 1
- watch: 1

## Metadata gaps
- repos without metadata: 154
- reasons: {'unfetched': 154}

## MCP-only repos excluded: 50
- n8n-io/n8n *210692* ['automation', 'ipaas', 'n8n', 'workflow', 'typescript'] - Fair-code workflow automation platform with native AI capabilities. Combine visu
- assafelovic/gpt-researcher *30750* ['ai', 'python', 'agent', 'automation', 'research'] - An autonomous agent that conducts deep research on any data using any LLM provid
- mrexodia/ida-pro-mcp *13493* ['ida-plugin', 'ida-pro', 'mcp', 'mcp-server', 'modelcontextprotocol'] - AI-powered reverse engineering assistant that bridges IDA Pro with language mode
- mcp-use/mcp-use *10983* ['mcp', 'model-context-protocol', 'apps-sdk', 'mcp-apps', 'mcp-inspector'] - The fullstack MCP framework to develop MCP Apps for ChatGPT / Claude & MCP Serve
- Agents365-ai/drawio-skill *10802* ['drawio', 'diagram', 'agent-skills', 'architecture-diagram', 'claude-code'] - Agent skill that turns natural language, code, Terraform/K8s, SQL, OpenAPI, Asyn
- 21st-dev/magic-mcp *6574* ['21st', 'claude', 'cursor', 'mcp', 'model-context-protocol'] - It's like v0, but in your Cursor / Claude Code / Windsurf: search 10,000+ React/
- Marker-Inc-Korea/AutoRAG *5902* ['document-parser', 'embeddings', 'llm', 'open-source', 'rag'] - Your Personal Librarian Agent. Ask anything on your computer, organize files, re
- jordan-gibbs/hyperresearch *4835* ['agents', 'agentskills', 'claude-code', 'deep-research', 'deep-research-agent'] - Convert Claude Code or Codex into the most intelligent Deep Research Agent. Coll
- stickerdaniel/linkedin-mcp-server *4230* ['linkedin', 'linkedin-scraper', 'mcp', 'mcp-server', 'linkedin-mcp'] - Open-source MCP server for LinkedIn. Give Claude and any MCP-compatible AI agent
- taylorwilsdon/google_workspace_mcp *3533* ['ai', 'gmail', 'google-calendar', 'google-workspace', 'llm'] - Control Gmail, Google Calendar, Docs, Sheets, Slides, Chat, Forms, Tasks, Search
- duty1g/x64dbg-mcp-server *2836* ['ai-agents', 'ai-debugging', 'binary-analysis', 'claude', 'claude-code'] - x64dbg-MCP Server is a native MCP (Model Context Protocol) plugin for x64dbg tha
- alpic-ai/skybridge *2195* ['agent', 'ai', 'apps-sdk', 'chatgpt', 'claude'] - Skybridge is a full-stack TypeScript framework for MCP Apps and ChatGPT Apps. Ty
- study8677/repobrain *1363* ['claude-code', 'codex-cli', 'developer-tools', 'mcp-server', 'windsurf'] - 🧠 RepoBrain (formerly Antigravity) — Give your repo a brain. ChatGPT for your co
- CodeAbra/iai-personal-memory-engine *923* ['claude', 'claude-code', 'local-first', 'mcp', 'mcp-server'] - A cyber brain for your AI. It never forgets a detail, remembers exactly what you
- hetpatel-11/Adobe_Premiere_Pro_MCP *885* ['adobe', 'adobe-premiere-pro', 'adobe-mcp', 'adobe-premiere-pro-mcp', 'ai-video-editing'] - Adobe Premiere Pro MCP. Tools for AI-driven video editing via MCP, for Codex, Cl

## Degradation
- registry complete: True (659 pages, 65819 entries)
- MCP servers merged from the previous catalog (not re-fetched): 0
- GraphQL 403s: 0 (secondary rate limit: 0); retries: 10; queries that gave up: 1
- HTTP retries (5xx/network): 0
- repos with stale metadata reused from the previous catalog (meta_stale): 0

## MCP Registry
- {"pages": 659, "fetched": 65819, "kept": 64767, "dropped": 1052, "bad": 0, "complete": true, "excluded_remote_only": 23455, "excluded_low_signal": 21420, "fallback_merged": 0, "records": 1337, "attached_existing": 158, "new_repo": 1179, "remote_only": 0, "tiers": {"official": 26, "listed": 20, "verified": 960, "new": 133, "watch": 198}}

## Top 20 by trend_7d
- GoogleChrome/modern-web-guidance +18271 (687.4%) ['star-spike', 'product-stars']
- morluto/rea +16995 (3.8%) []
- mattpocock/skills +6122 (1.91%) []
- cloudflare/security-audit-skill +5816 (8.52%) []
- debpalash/VoiceStudio +5692 (5.35%) ['product-stars']
- anthropics/skills +4890 (2.56%) []
- pbakaus/impeccable +4488 (4.19%) []
- heydamir/unslop +4471 (34.7%) ['star-spike']
- DietrichGebert/ponytail +4450 (2.37%) []
- affaan-m/ECC +4444 (1.48%) []
- Leonxlnx/taste-skill +4430 (3.93%) []
- Nutlope/hallmark +4346 (8.37%) []
- JuneYaooo/rea-video +4073 (71.02%) ['star-spike']
- vercel-labs/agent-desktop +3988 (19.26%) ['product-stars']
- google/elephant-goldfish-model +3854 (23.19%) []
- addyosmani/agent-skills +3756 (3.28%) []
- ZhuLinsen/daily_stock_analysis +3733 (5.4%) ['product-stars']
- heygen-com/hyperframes +3543 (4.33%) []
- obra/superpowers +3512 (1.11%) []
- vercel-labs/agent-browser +3442 (7.07%) ['product-stars']

## Code search vs topic search
- repos found by code search: 180
- also in topic search: 10
- code-only: 157; tiers: {'anthropic': 1, 'verified': 80, 'watch': 58, 'new': 18}

## Top 30 by stars: anthropic
- anthropics/skills [marketplace,collection] *196190*  items=2 - Anthropic example skills
- anthropics/claude-code [marketplace,agent] *155943*  items=2 - Anthropic's Claude Code plugins, installed from the claude-plugins-official repo
- anthropics/claude-plugins-official [plugin,marketplace,collection] *47494*  items=15 - Directory of popular Claude Code extensions including development tools, product
- anthropics/financial-services [marketplace] *41350*  items=1 - 
- anthropics/knowledge-work-plugins [marketplace] *36326*  items=1 - 
- anthropics/claude-for-legal [marketplace] *10025*  items=1 - Reference agents, skills, and data connectors for the legal workflows we see mos
- anthropics/claude-code-action [collection] *9985*  items=1 - The official GitHub Action for running Claude Code in CI: mention @claude in iss
- anthropics/claude-code-security-review [collection] *6955*  items=1 - An official AI-powered security-review GitHub Action that uses Claude to analyze
- anthropics/claude-plugins-community [marketplace] *4906*  items=1 - 
- anthropics/commerce-agents [marketplace] *3481*  items=1 - Claude Commerce Agents: the commerce-builder plugin for building shopping and me
- anthropics/life-sciences [marketplace] *652*  items=1 - Skills for life sciences research, data analysis, and discovery
- anthropics/k12-teacher-skills [marketplace] *634*  items=1 - Plugin marketplace for K-12 Education and Claude for Teachers.
- anthropics/healthcare [marketplace] *451*  items=1 - Claude for Healthcare — one plugin bundling payer, provider, pharma, and general
- anthropics/oncall-kit [marketplace] *273*  items=1 - 
- anthropics/claude-for-financial-advisors [plugin,marketplace] *155*  items=2 - Ready-to-run workflows for financial advisors in Claude Cowork, drawing live dat
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
- mattpocock/skills [plugin] *326076*  items=2 - Matt Pocock's agent skills for real engineering — grilling, spec/ticket flows, T
- obra/superpowers [plugin,skill] *318776*  items=4 - Superpowers teaches Claude brainstorming, subagent driven development with built
- heygen-com/hyperframes [plugin,mcp-server] *85355*  items=3 - HyperFrames by HeyGen. Write HTML, render video. Compositions, GSAP and runtime 
- ChromeDevTools/chrome-devtools-mcp [plugin,mcp-server] *57786*  items=4 - Control and inspect a live Chrome browser from your coding agent. Record perform
- GoogleChrome/modern-web-guidance [plugin] *20929* ['star-spike', 'product-stars'] items=2 - Keep your coding agent up to date with the latest web best practices
- confident-ai/deepeval [plugin] *19519* ['product-stars'] items=1 - Skills for adding DeepEval evaluations, tracing, datasets, Confident AI reports,
- huggingface/skills [plugin] *11356*  items=2 - Build, train, evaluate, and use open source AI models, datasets, and spaces.
- wonderwhy-er/DesktopCommanderMCP [plugin,mcp-server] *10333*  items=4 - MCP server for terminal commands, process management, and file operations across
- Eigenwise/atomic-agents [plugin,marketplace] *6335* ['product-stars'] items=3 - Comprehensive development workflow for building AI agents with the Atomic Agents
- exa-labs/exa-mcp-server [plugin,mcp-server] *5241*  items=3 - Exa AI web search, deep research, and content extraction. Provides MCP tools and
- expo/skills [plugin] *4178*  items=2 - Official Expo skills for building, deploying, upgrading, and debugging React Nat
- NVIDIA/skills [plugin] *4026*  items=2 - Find the right NVIDIA skill for GPU acceleration, CUDA, AI agents, data loading,
- aws/agent-toolkit-for-aws [plugin] *3508*  items=8 - Build, deploy, and operate AI agents on AWS. Skills for scaffolding agents with 
- cloudflare/skills [plugin] *3375*  items=2 - Skills for the Cloudflare developer platform: Workers, Durable Objects, Agents S
- modelcontextprotocol/ext-apps [plugin] *3109*  items=3 - Skills for creating MCP Apps with the MCP Apps SDK
- figma/mcp-server-guide [plugin,mcp-server] *2199*  items=4 - Figma design platform integration. Access design files, extract component inform
- stripe/ai [plugin,mcp-server] *2069*  items=3 - Stripe development plugin for Claude
- MicrosoftDocs/mcp [plugin,mcp-server] *1993*  items=3 - Access official Microsoft documentation, API references, and code samples for Az
- EpicGames/unreal-engine-skills-for-claude-code-plugin [plugin] *1980*  items=2 - Control Unreal Editor directly from Claude Code via MCP. Hundreds of tools expos
- microsoft/azure-skills [plugin] *1647*  items=2 - Transform Claude into an Azure expert. This plugin integrates the Azure MCP serv
- atlassian/atlassian-mcp-server [plugin,mcp-server] *1168*  items=3 - Connect to Atlassian products including Jira and Confluence. Search and create i
- forcedotcom/sf-skills [plugin,skill] *1167*  items=2 - Build Salesforce apps and agents using these core building blocks: metadata, Ape
- superdesigndev/superdesign-skill [plugin,skill] *1018*  items=2 - Design or redesign frontend UI and marketing graphics on the Superdesign infinit
- awslabs/agent-plugins [plugin] *945*  items=10 - Guide developers through adding maps, places search, geocoding, routing, and oth
- Shopify/Shopify-AI-Toolkit [plugin] *649*  items=2 - Shopify's AI Toolkit provides 18 development skills for building on the Shopify 
- Unity-Technologies/unity-agent-plugin [plugin] *646*  items=2 - Unity's official plugin for Claude Code, with curated skills for game developmen
- duckdb/duckdb-skills [plugin] *617*  items=2 - DuckDB-powered skills for Claude Code: read any data file, attach and query Duck
- gitroomhq/postiz-agent [plugin] *575*  items=3 - Social media automation CLI for scheduling posts, managing integrations, uploadi
- ClickHouse/agent-skills [plugin] *569*  items=2 - 28 best practice rules for ClickHouse schema design, query optimization, and dat
- TheQtCompanyRnD/agent-skills [plugin] *549*  items=3 - Agentic engineering skills for Qt software development — Qt C++/QML code review,

## Top 30 by stars: listed
- DietrichGebert/ponytail [plugin] *192321*  items=2 - Lazy senior dev mode. Forces the simplest, shortest solution that actually works
- JuliusBrussee/caveman [plugin,skill] *120806*  items=2 - Auto-activation works differently per agent: Claude Code uses SessionStart hooks
- thedotmack/claude-mem [plugin,skill] *117764*  items=3 - Persistent memory system for Claude Code - seamlessly preserve context across se
- pbakaus/impeccable [plugin] *111512*  items=1 - Great design prompts require design vocabulary. Most people don't have it. You c
- Egonex-AI/Understand-Anything [plugin,skill] *92896*  items=2 - Understand Anything is a Claude Code plugin that analyzes your project with a mu
- mem0ai/mem0 [plugin] *69089* ['product-stars'] items=1 - Connect Mem0 to Claude to give your agent persistent memory across sessions. Cla
- mvanhorn/last30days-skill [plugin,marketplace] *68300*  items=2 - last-30-days is a Claude Code skill that searches the web and delivers a structu
- coreyhaines31/marketingskills [plugin,skill] *60865*  items=3 - coreyhaines31
- DayuanJiang/next-ai-draw-io [plugin,mcp-server] *37005*  items=2 - AI-powered Draw.io diagram generation with real-time browser preview. Create flo
- mksglu/context-mode [plugin] *34195*  items=1 - MCP is the protocol for tool access. We're the virtualization layer for context.
- AgriciDaniel/claude-seo [plugin] *30121*  items=1 - Comprehensive SEO analysis plugin for Claude Code. Performs full site audits wit
- alirezarezvani/claude-skills [plugin,skill] *29928*  items=2 - Playwright Pro turns your AI coding agent into a senior test automation engineer
- jarrodwatts/claude-hud [plugin,collection] *29221*  items=2 - Real-time statusline HUD for Claude Code - context health, tool activity, agent 
- promptfoo/promptfoo [plugin] *27340*  items=1 - Teaches AI coding agents to create and maintain promptfoo eval suites. Encodes b
- browser-use/browser-harness [plugin] *19102*  items=1 - Open-source browser agent driven via CDP — direct browser control, 79K stars, YC
- Jeffallan/claude-skills [plugin,skill,collection] *12416*  items=3 - 66 specialized skills for full-stack development: 12 language experts (Python, T
- nicobailon/visual-explainer [plugin,collection] *11131*  items=3 - An agent skill that turns complex terminal output into styled HTML pages you act
- revfactory/harness [plugin,agent] *9370*  items=3 - Harness leverages Claude Code's agent team system to decompose complex tasks int
- Eventual-Inc/Daft [plugin] *5851* ['product-stars'] items=1 - Skills for working with Daft, a high-performance data engine for AI and multimod
- clidey/whodb [plugin] *5059* ['product-stars'] items=1 - Database management tools for Claude Code. Query databases, explore schemas, ana
- nyldn/claude-octopus [plugin] *4453*  items=2 - Multi-LLM orchestration for Claude Code and Cowork. Coordinates 8 AI providers (
- giancarloerra/SocratiCode [plugin,mcp-server] *3378*  items=2 - Enterprise-grade (40m+ lines) codebase intelligence in a zero-setup, private and
- Chachamaru127/claude-code-harness [plugin,agent] *3210*  items=2 - Autonomous Plan → Work → Review cycle for Claude Code. Go-native engine with 25×
- fabio-rovai/open-ontologies [plugin] *2914*  items=1 - AI-native ontology engineering with 39 MCP tools backed by an in-memory Oxigraph
- AgriciDaniel/claude-blog [plugin] *2772*  items=1 - AI-powered blog creation and optimization skill with 20 commands, 4 specialized 
- nizos/tdd-guard [plugin,collection] *2382*  items=2 - Enforces Test-Driven Development by intercepting file operations in Claude Code.
- AminForou/mcp-gsc [plugin] *2222*  items=1 - Connect Google Search Console to Claude Code. Query rankings, inspect URLs, audi
- kenryu42/cc-safety-net [plugin,collection] *2059*  items=3 - Block destructive git and filesystem commands before execution
- severity1/claude-code-prompt-improver [plugin] *1971*  items=1 - Intelligent prompt optimization using skill-based architecture. Enriches vague p
- aklofas/kicad-happy [plugin] *1689*  items=1 - KiCad electronics design skills. Analyze schematics, review PCB layouts, downloa

## Top 30 by stars: verified
- morluto/rea [marketplace,mcp-server] *464589*  items=2 - Reverse engineer anything with agents, from app behavior down to native binaries
- affaan-m/ECC [collection] *304773*  items=1 - Top-notch, well-written resources covering "just about everything" from core eng
- firecrawl/firecrawl [skill] *202420* ['product-stars'] items=1 - Supercharge your AI agents with data from the web and beyond. Building the libra
- nextlevelbuilder/ui-ux-pro-max-skill [marketplace] *150533*  items=1 - An AI skill that provides design intelligence for building professional UI/UX ac
- vercel/next.js [marketplace] *143656* ['product-stars'] items=1 - The React Framework
- garrytan/gstack [agent] *141835*  items=1 - Garry Tan's (Y Combinator) Claude Code setup and "open source software factory" 
- browser-use/browser-use [mcp-server] *121255*  items=1 - Browser agents and stealth cloud browsers for AI: run web tasks, fill forms, ext
- addyosmani/agent-skills [marketplace] *118398*  items=1 - Production-grade engineering skills for AI coding agents.
- Leonxlnx/taste-skill [marketplace] *117048*  items=1 - Agent skills that give coding agents taste: art direction, reference images and 
- paperclipai/paperclip [skill,mcp-server] *114401*  items=2 - The open-source app everyone uses to manage agents at work
- debpalash/VoiceStudio [skill] *112088* ['product-stars'] items=1 - VoiceStudio is the open-source, fully-local ElevenLabs alternative — voice cloni
- nexu-io/open-design [marketplace] *107982*  items=1 - The 1st Collaborative AI Design Agent Workspace. Local-first and open source. Cr
- ruvnet/RuView [marketplace] *104477*  items=1 - π RuView turns commodity WiFi signals into real-time spatial intelligence, vital
- D4Vinci/Scrapling [mcp-server] *103712*  items=1 - Web scraping with stealth HTTP, real browsers, and Cloudflare bypass. CSS select
- tt-a1i/archify [skill,collection] *97222*  items=2 - An Agent Skill for Claude Code that generates interactive architecture, workflow
- storybookjs/storybook [marketplace] *91597* ['product-stars'] items=1 - Storybook is the industry standard workshop for building, documenting, and testi
- koala73/worldmonitor [skill,mcp-server] *90792* ['product-stars'] items=2 - Real-time global intelligence dashboard. AI-powered news aggregation, geopolitic
- career-ops-hq/career-ops [plugin] *83148*  items=1 - Open-source AI job search agent and job finder: scan job boards, score each job 
- ruvnet/ruflo [marketplace,mcp-server] *81900*  items=3 - 🌊 The original agent harness. Deploy intelligent multi-player swarms, coordinate
- netdata/netdata [mcp-server] *81442*  items=1 - Real-time infrastructure monitoring with metrics, logs, alerts, and ML-based ano
- OpenMontageInc/OpenMontage [skill] *81086*  items=1 - World's first open-source, agentic video production system. 12 production pipeli
- shareAI-lab/learn-claude-code [collection] *80503*  items=1 - A really interesting analysis of how coding agents like Claude Code are designed
- headroomlabs-ai/headroom [marketplace] *79859*  items=1 - Compress tool outputs, logs, files, and RAG chunks before they reach the LLM. 20
- ComposioHQ/awesome-claude-skills [skill] *79673*  items=1 - A curated list of awesome Claude Skills, resources, and tools for customizing Cl
- rohitg00/ai-engineering-from-scratch [skill] *79184* ['product-stars'] items=1 - Learn AI Engineering! Learn it. Build it. Ship it for others.
- hugohe3/ppt-master [marketplace] *77626* ['product-stars'] items=1 - AI turns documents or topics into real, native PowerPoint decks—with native shap
- usestrix/strix [skill] *76112* ['product-stars'] items=1 - Open-source AI penetration testing tool to find and fix your app’s vulnerabiliti
- tw93/Mole [marketplace] *75333* ['product-stars'] items=1 - 🐹 Open-source Mac and PC cleaner. Keep your machine clean, light, and running li
- thedaviddias/Front-End-Checklist [marketplace,mcp-server] *74757* ['product-stars'] items=2 - 🗂 The essential checklist for modern web development, for humans and AI agents
- cloudflare/security-audit-skill [skill] *74105*  items=1 - A coding-agent skill for multi-phase security audits with independently verified

## Top 30 by stars: watch
- f/prompts.chat [marketplace] *177692* ['product-stars'] items=1 - f.k.a. Awesome ChatGPT Prompts. Share, discover, and collect prompts from the co
- opendatalab/MinerU [skill] *83772* ['product-stars'] items=1 - Transforms complex documents like PDFs and Office docs into LLM-ready markdown/J
- code-yeongyu/oh-my-openagent [skill] *70953* ['product-stars'] items=1 - OmO: Just type "mass ulw" keyword with your prompt. Now you are the master of gr
- Imbad0202/academic-research-skills [marketplace] *57187*  items=1 - Academic Research Skills for Claude Code: research → write → review → revise → f
- bmad-code-org/BMAD-METHOD [skill] *55450* ['product-stars'] items=1 - Breakthrough Method for Agile Ai Driven Development
- tldraw/tldraw [mcp-server] *51445*  items=1 - Draw and visually collaborate with your agents on tldraw's canvas.
- metabase/metabase [mcp-server] *50371*  items=1 - Lets AI clients search, explore, query, and visualize data in a Metabase instanc
- abhigyanpatwari/GitNexus [marketplace] *48605* ['product-stars'] items=1 - GitNexus: The Zero-Server Code Intelligence Engine
- serverless/serverless [skill] *46934* ['product-stars'] items=1 - ⚡ Serverless Framework – Effortlessly build apps that auto-scale, incur zero cos
- PostHog/posthog [mcp-server] *40833*  items=1 - Official PostHog MCP Server for product analytics, feature flags, experiments, a
- openai/codex-plugin-cc [marketplace] *35175*  items=1 - Use Codex from Claude Code to review code or delegate tasks.
- zarazhangrui/frontend-slides [marketplace] *32426*  items=1 - Create beautiful slides on the web using a coding agent's frontend skills
- oraios/serena [mcp-server] *31458*  items=1 - A powerful toolkit for coding, providing semantic retrieval and editing capabili
- hypit-ai/hypit [skill] *30236* ['product-stars'] items=1 - Clone any viral video with AI agents. Not just a script, the whole workflow: swa
- openai/skills [skill] *28779*  items=1 - Skills Catalog for Codex
- vercel/ai [skill] *28023* ['product-stars'] items=1 - The AI Toolkit for TypeScript. From the creators of Next.js, the AI SDK is a fre
- clockworklabs/SpacetimeDB [marketplace] *25558* ['product-stars'] items=1 - Development at the speed of light
- nocobase/nocobase [skill] *24950*  items=1 - NocoBase is the open-source platform for building, running, and evolving busines
- different-ai/openwork [mcp-server] *24545*  items=1 - Your OpenWork org's skills, plugins, workflows, and connections through one OAut
- getpaseo/paseo [skill] *24202*  items=1 - Orchestrate multiple coding agents from desktop and mobile
- HKUDS/AI-Trader [skill] *23298* ['product-stars'] items=1 - "AI-Trader: 100% Fully-Automated Agent-Native Trading"
- screenpipe/screenpipe [mcp-server] *22403*  items=1 - Search your local screen recordings, audio transcripts, and computer activity fr
- longbridge/gpui-kit [skill] *20888* ['product-stars'] items=1 - Rust GUI components for building fantastic cross-platform desktop application by
- windmill-labs/windmill [mcp-server] *18615*  items=1 - Run Windmill scripts and flows and manage jobs, schedules, resources and variabl
- greensock/gsap-skills [marketplace] *18570*  items=1 - Official AI skills for GSAP. These skills teach AI coding agents how to correctl
- Canner/WrenAI [skill] *18311* ['product-stars'] items=1 - GenBI (Generative BI) for AI agents, an open-source, governed text-to-SQL throug
- architecture-decision-record/architecture-decision-record [skill] *17476* ['product-stars'] items=1 - Architecture decision record (ADR) examples for software planning, IT leadership
- composio-community/awesome-codex-skills [skill] *17344*  items=1 - A curated list of practical Codex skills for automating workflows across the Cod
- millionco/react-doctor [skill] *15152* ['product-stars'] items=1 - Your agent writes bad React. This catches it
- kyegomez/OpenMythos [plugin] *14929*  items=1 - A theoretical reconstruction of the Claude Mythos architecture, built from first

## Random sample of 20 watch repos (of 501)
- scasella/claude-dynamic-workflows-codex [marketplace] *330*  items=1 - Run Claude Code dynamic workflows on a local Codex (GPT) backend, plus an intera reasons=['fails: pushed<=90d (128)'] src=['topic']
- matlab/matlab-mcp-server [mcp-server] *1835*  items=1 - Connect AI coding agents to MATLAB. Run code, tests, and analysis via MCP. reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- composio-community/awesome-codex-skills [skill] *17344*  items=1 - A curated list of practical Codex skills for automating workflows across the Cod reasons=['fails: pushed<=90d (114)', 'fails: license (None)'] src=['topic']
- lukabudik/alza-mcp-community [mcp-server] *102*  items=1 - Unofficial MCP server for Alza.cz: catalog search plus token-guarded account and reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- sfrangulov/minirag-mcp [mcp-server] *60*  items=1 - Local-first RAG MCP server: hybrid search over a folder of your own documents reasons=['no corroborating signal'] src=['mcp-registry']
- thebriangao/totem [mcp-server] *143*  items=3 - Totem — talk to your wearables with AI. Today: full Whoop access (48 tools). reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- corey924/ZeroSpec [skill] *65*  items=1 - ZeroSpec is a zero-dependency Markdown framework that helps AI agents understand reasons=['fails: pushed<=90d (129)'] src=['topic']
- longranger2/claude-gpt-workflow [skill] *81*  items=1 - Claude Code skills for Claude + GPT collaborative workflows. Adversarial plan re reasons=['fails: pushed<=90d (145)'] src=['topic']
- luffysolution-svg/obsidian-vault-mcp [mcp-server] *95*  items=1 - Local Zotero, MinerU, Obsidian literature workflow with transactional Analysis n reasons=['fails: pushed<=90d (97)'] src=['mcp-registry']
- ranxianglei/billion-context [marketplace] *7692* ['star-spike'] items=1 - A context-compression plugin for month-long single sessions (billions of tokens) reasons=['fails: license (NOASSERTION)'] src=['topic']
- m-mizutani/goast [plugin] *79*  items=1 - Go AST based static analysis tool with Rego reasons=['fails: pushed<=90d (129)', 'no corroborating signal'] src=['code']
- popmechanic/VibesOS [plugin] *135*  items=1 - A GUI for Claude Code that makes it easy to vibe code simple, un-hackable apps reasons=['fails: pushed<=90d (112)'] src=['code']
- drhelius/Geartowns [mcp-server] *37*  items=1 - MCP server for the Geartowns FM Towns emulator reasons=['fails: stars>=50 (37)', 'no corroborating signal'] src=['mcp-registry']
- apoorvjain25/frontier [marketplace] *80*  items=1 - Make Claude Opus, Sonnet, GPT, or Gemini produce work close to what Claude Fable reasons=['fails: pushed<=90d (135)'] src=['topic']
- RedPlanetHQ/core [marketplace] *2024*  items=1 - Your Personal AI OS reasons=['fails: license (NOASSERTION)'] src=['topic']
- kesslerio/attio-mcp-server [mcp-server] *68*  items=3 - Connect AI to your Attio CRM. Manage contacts, companies, deals, and sales pipel reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- KnockOutEZ/wigolo [skill,mcp-server] *5549*  items=2 - The go-to web for your AI coding agent — local-first search, fetch, crawl & rese reasons=['fails: license (NOASSERTION)'] src=['mcp-registry', 'topic']
- deepmemteam/deepmem [mcp-server] *114*  items=1 - Mem0-compatible persistent memory for AI agents: write facts once, recall them s reasons=['fails: pushed<=90d (91)', 'no corroborating signal'] src=['mcp-registry']
- sjsyrek/design-council [plugin] *183*  items=1 - Claude Code plugin: convene 11 role-specialized peer agents to debate a technica reasons=['fails: pushed<=90d (173)'] src=['code']
- JuneYaooo/nihaisha-nishi-tcm [skill] *2265*  items=1 - 倪海厦中医课程资料的 Agent Skill：支持课程检索、方证穴位辨析、学习笔记整理与板书截图证据索引。 | An Agent Skill for Ni Ha reasons=['fails: license (None)'] src=['topic']

## Errors
- graphql: HTTP 504 after 4 retries <!DOCTYPE html>
<!--

Hello future GitHubber! I bet you're here to remove tho
- broad verify subfolders chunk 9: no data None

## Rate limit
- REST calls this run (uncached): {"core": 149, "search": 128}; last seen: {"core": {"remaining": "4851", "limit": "5000"}, "search": {"remaining": "12", "limit": "30"}}
- GraphQL: 231 calls, cost 99, remaining 4756/5000, stopped early: False
- REST stopped early: False
- repos lacking metadata: 4140; enriched this run: 36355