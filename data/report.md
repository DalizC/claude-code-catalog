# Catalog report 2026-11-01
Mode: **token**; run time 1562s
Repos (deduped): 3181; flat entries before dedup: 23805

## Tier x type BEFORE dedup (flat entries)
- new/mcp-server: 14015
- watch/mcp-server: 2311
- listed/plugin: 2283
- verified/mcp-server: 1229
- watch/skill: 487
- verified/skill: 468
- watch/marketplace: 392
- official/plugin: 376
- verified/plugin: 359
- verified/marketplace: 351
- watch/plugin: 298
- watch/agent: 253
- verified/collection: 196
- new/skill: 173
- new/plugin: 157
- anthropic/plugin: 145
- new/marketplace: 145
- verified/agent: 52
- new/agent: 43
- anthropic/marketplace: 15
- anthropic/collection: 4
- watch/collection: 2
- anthropic/agent: 1

## Tier AFTER dedup (repos)
- verified: 1809
- watch: 474
- new: 330
- official: 256
- listed: 169
- anthropic: 143

## Type AFTER dedup (items)
- mcp-server: 1651
- plugin: 1424
- skill: 770
- marketplace: 494
- collection: 124
- agent: 52

## Primary type AFTER dedup (repos)
- mcp-server: 1076
- plugin: 850
- skill: 703
- marketplace: 424
- collection: 90
- agent: 38

## Repos by discovery source family
- topic: 1277
- mcp-registry: 1214
- anthropic: 465
- code: 227
- anthropic-org: 186
- curated: 150
- marketplace-expansion: 40

## Flags (all tiers)
- product-stars: 223
- star-spike: 16
- star-anomaly: 6

## star-anomaly by tier
- new: 4
- watch: 2

## Metadata gaps
- repos without metadata: 149
- reasons: {'unfetched': 149}

## MCP-only repos excluded: 50
- assafelovic/gpt-researcher *30410* ['ai', 'python', 'agent', 'automation', 'research'] - An autonomous agent that conducts deep research on any data using any LLM provid
- mrexodia/ida-pro-mcp *13256* ['ida-plugin', 'ida-pro', 'mcp', 'mcp-server', 'modelcontextprotocol'] - AI-powered reverse engineering assistant that bridges IDA Pro with language mode
- mcp-use/mcp-use *10835* ['mcp', 'model-context-protocol', 'apps-sdk', 'mcp-apps', 'mcp-inspector'] - The fullstack MCP framework to develop MCP Apps for ChatGPT / Claude & MCP Serve
- Agents365-ai/drawio-skill *10484* ['drawio', 'diagram', 'agent-skills', 'architecture-diagram', 'claude-code'] - Agent skill that turns natural language, code, Terraform/K8s, SQL, OpenAPI, Asyn
- jordan-gibbs/hyperresearch *4235* ['agents', 'agentskills', 'claude-code', 'deep-research', 'deep-research-agent'] - Convert Claude Code or Codex into the most intelligent Deep Research Agent. Coll
- kajisho5/ffmpeg-skill *4205* ['audio-processing', 'captions', 'ffmpeg', 'subtitles', 'video'] - Local video editor for coding agents: 42 FFmpeg tools with a machine-readable co
- stickerdaniel/linkedin-mcp-server *4071* ['linkedin', 'linkedin-scraper', 'mcp', 'mcp-server', 'linkedin-mcp'] - Open-source MCP server for LinkedIn. Give Claude and any MCP-compatible AI agent
- taylorwilsdon/google_workspace_mcp *3451* ['ai', 'gmail', 'google-calendar', 'google-workspace', 'llm'] - Control Gmail, Google Calendar, Docs, Sheets, Slides, Chat, Forms, Tasks, Search
- duty1g/x64dbg-mcp-server *2661* ['ai-agents', 'ai-debugging', 'binary-analysis', 'claude', 'claude-code'] - x64dbg-MCP Server is a native MCP (Model Context Protocol) plugin for x64dbg tha
- alpic-ai/skybridge *2182* ['agent', 'ai', 'apps-sdk', 'chatgpt', 'claude'] - Skybridge is a full-stack TypeScript framework for MCP Apps and ChatGPT Apps. Ty
- study8677/repobrain *1356* ['claude-code', 'codex-cli', 'developer-tools', 'mcp-server', 'windsurf'] - 🧠 RepoBrain (formerly Antigravity) — Give your repo a brain. ChatGPT for your co
- CodeAbra/iai-personal-memory-engine *918* ['claude', 'claude-code', 'local-first', 'mcp', 'mcp-server'] - A cyber brain for your AI. It never forgets a detail, remembers exactly what you
- hetpatel-11/Adobe_Premiere_Pro_MCP *798* ['adobe', 'adobe-premiere-pro', 'adobe-mcp', 'adobe-premiere-pro-mcp', 'ai-video-editing'] - Adobe Premiere Pro MCP. Tools for AI-driven video editing via MCP, for Codex, Cl
- Storybloq/storybloq *787* ['agentic-development', 'ai-development', 'anthropic', 'claude-code', 'claude-skill'] - Project memory and workflows for Claude Code and Codex. Keep stories, plans, han
- agentic-box/memora *745* ['ai-agent', 'claude', 'knowledge-graph', 'llms', 'mcp'] - Give your AI agents persistent, collective memory — with deduplicating absorb, s

## Degradation
- registry complete: True (540 pages, 53982 entries)
- MCP servers merged from the previous catalog (not re-fetched): 0
- GraphQL 403s: 0 (secondary rate limit: 0); retries: 4; queries that gave up: 1
- HTTP retries (5xx/network): 0
- repos with stale metadata reused from the previous catalog (meta_stale): 0

## MCP Registry
- {"pages": 540, "fetched": 53982, "kept": 53139, "dropped": 843, "bad": 0, "complete": true, "excluded_remote_only": 17854, "excluded_low_signal": 17730, "fallback_merged": 0, "records": 1214, "attached_existing": 142, "new_repo": 1072, "remote_only": 0, "tiers": {"official": 25, "listed": 20, "verified": 869, "new": 122, "watch": 178}}

## Top 20 by trend_7d
- morluto/rea +36344 (9.57%) []
- pbakaus/impeccable +11883 (13.72%) []
- debpalash/VoiceStudio +11789 (13.83%) ['product-stars']
- Nutlope/hallmark +11679 (36.04%) ['star-spike']
- HKUDS/DeepTutor +10462 (24.57%) ['product-stars']
- cloudflare/security-audit-skill +10460 (23.21%) []
- ifixai-ai/iFixAi +7588 (22.27%) ['product-stars']
- google/elephant-goldfish-model +7503 (1521.91%) ['star-spike']
- DietrichGebert/ponytail +5982 (3.41%) []
- affaan-m/ECC +5968 (2.07%) []
- mattpocock/skills +5951 (1.97%) []
- obra/superpowers +5474 (1.8%) []
- thedotmack/claude-mem +5238 (5.09%) []
- Leonxlnx/taste-skill +5083 (4.98%) []
- heygen-com/hyperframes +5060 (7.07%) []
- AgriciDaniel/claude-seo +5003 (24.87%) []
- hugohe3/ppt-master +4166 (6.16%) ['product-stars']
- vectorize-io/hindsight +3534 (6.61%) ['product-stars']
- nextlevelbuilder/ui-ux-pro-max-skill +3498 (2.5%) []
- lemomo-ai/lemo-opuscar +3407 (50.46%) ['star-spike']

## Code search vs topic search
- repos found by code search: 227
- also in topic search: 16
- code-only: 194; tiers: {'anthropic': 1, 'verified': 103, 'watch': 62, 'new': 28}

## Top 30 by stars: anthropic
- anthropics/skills [marketplace,collection] *185983*  items=2 - Anthropic example skills
- anthropics/claude-code [marketplace,agent] *154094*  items=2 - Anthropic's Claude Code plugins, installed from the claude-plugins-official repo
- anthropics/claude-plugins-official [plugin,marketplace,collection] *45602*  items=15 - Directory of popular Claude Code extensions including development tools, product
- anthropics/financial-services [marketplace] *40960*  items=1 - 
- anthropics/knowledge-work-plugins [marketplace] *34232*  items=1 - 
- anthropics/claude-for-legal [marketplace] *9859*  items=1 - Reference agents, skills, and data connectors for the legal workflows we see mos
- anthropics/claude-code-action [collection] *9733*  items=1 - The official GitHub Action for running Claude Code in CI: mention @claude in iss
- anthropics/claude-code-security-review [collection] *6665*  items=1 - An official AI-powered security-review GitHub Action that uses Claude to analyze
- anthropics/claude-plugins-community [marketplace] *4803*  items=1 - 
- anthropics/commerce-agents [marketplace] *3390*  items=1 - Claude Commerce Agents: the commerce-builder plugin for building shopping and me
- anthropics/life-sciences [marketplace] *637*  items=1 - Skills for life sciences research, data analysis, and discovery
- anthropics/k12-teacher-skills [marketplace] *606*  items=1 - Plugin marketplace for K-12 Education and Claude for Teachers.
- anthropics/healthcare [marketplace] *432*  items=1 - Claude for Healthcare — one plugin bundling payer, provider, pharma, and general
- anthropics/oncall-kit [marketplace] *254*  items=1 - 
- anthropics/claude-for-financial-advisors [plugin,marketplace] *131*  items=2 - Ready-to-run workflows for financial advisors in Claude Cowork, drawing live dat
- anthropics/claude-tag-plugins [marketplace] *74*  items=1 - Plugins that connect Claude Tag to common SaaS services, plus charting and confi
- anthropics/claude-plugins-official [plugin] *None*  items=1 - Development kit for working with the Claude Agent SDK
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
- anthropics/claude-plugins-official [plugin] *None*  items=1 - Create distinctive, production-grade frontend interfaces with high design qualit

## Top 30 by stars: official
- obra/superpowers [plugin,skill] *310177*  items=3 - Superpowers teaches Claude brainstorming, subagent driven development with built
- mattpocock/skills [plugin] *308587*  items=2 - Matt Pocock's agent skills for real engineering — grilling, spec/ticket flows, T
- heygen-com/hyperframes [plugin] *76659*  items=2 - HyperFrames by HeyGen. Write HTML, render video. Compositions, GSAP and runtime 
- ChromeDevTools/chrome-devtools-mcp [plugin,mcp-server] *54577*  items=4 - Control and inspect a live Chrome browser from your coding agent. Record perform
- confident-ai/deepeval [plugin] *19216* ['product-stars'] items=1 - Skills for adding DeepEval evaluations, tracing, datasets, Confident AI reports,
- huggingface/skills [plugin] *11243*  items=2 - Build, train, evaluate, and use open source AI models, datasets, and spaces.
- wonderwhy-er/DesktopCommanderMCP [plugin,mcp-server] *10181*  items=4 - MCP server for terminal commands, process management, and file operations across
- Eigenwise/atomic-agents [plugin,marketplace] *6315* ['product-stars'] items=3 - Comprehensive development workflow for building AI agents with the Atomic Agents
- exa-labs/exa-mcp-server [plugin,mcp-server] *5207*  items=3 - Exa AI web search, deep research, and content extraction. Provides MCP tools and
- expo/skills [plugin] *3986* ['star-spike'] items=2 - Official Expo skills for building, deploying, upgrading, and debugging React Nat
- NVIDIA/skills [plugin] *3808*  items=2 - Find the right NVIDIA skill for GPU acceleration, CUDA, AI agents, data loading,
- aws/agent-toolkit-for-aws [plugin] *3362*  items=8 - Build, deploy, and operate AI agents on AWS. Skills for scaffolding agents with 
- cloudflare/skills [plugin] *3236*  items=2 - Skills for the Cloudflare developer platform: Workers, Durable Objects, Agents S
- modelcontextprotocol/ext-apps [plugin] *3031*  items=3 - Skills for creating MCP Apps with the MCP Apps SDK
- GoogleChrome/modern-web-guidance [plugin] *2591*  items=2 - Keep your coding agent up to date with the latest web best practices
- figma/mcp-server-guide [plugin,mcp-server] *2137*  items=4 - Figma design platform integration. Access design files, extract component inform
- stripe/ai [plugin,mcp-server] *2021*  items=3 - Stripe development plugin for Claude
- MicrosoftDocs/mcp [plugin,mcp-server] *1962*  items=3 - Access official Microsoft documentation, API references, and code samples for Az
- EpicGames/unreal-engine-skills-for-claude-code-plugin [plugin] *1771*  items=2 - Control Unreal Editor directly from Claude Code via MCP. Hundreds of tools expos
- microsoft/azure-skills [plugin] *1608*  items=2 - Transform Claude into an Azure expert. This plugin integrates the Azure MCP serv
- atlassian/atlassian-mcp-server [plugin,mcp-server] *1139*  items=3 - Connect to Atlassian products including Jira and Confluence. Search and create i
- forcedotcom/sf-skills [plugin,skill] *1134*  items=2 - Build Salesforce apps and agents using these core building blocks: metadata, Ape
- awslabs/agent-plugins [plugin] *933*  items=10 - Guide developers through adding maps, places search, geocoding, routing, and oth
- superdesigndev/superdesign-skill [plugin,skill] *929*  items=2 - Design or redesign frontend UI and marketing graphics on the Superdesign infinit
- Shopify/Shopify-AI-Toolkit [plugin] *621*  items=2 - Shopify's AI Toolkit provides 18 development skills for building on the Shopify 
- duckdb/duckdb-skills [plugin] *613*  items=2 - DuckDB-powered skills for Claude Code: read any data file, attach and query Duck
- Unity-Technologies/unity-agent-plugin [plugin] *592*  items=2 - Unity's official plugin for Claude Code, with curated skills for game developmen
- ClickHouse/agent-skills [plugin] *564*  items=2 - 28 best practice rules for ClickHouse schema design, query optimization, and dat
- gitroomhq/postiz-agent [plugin] *562*  items=3 - Social media automation CLI for scheduling posts, managing integrations, uploadi
- TheQtCompanyRnD/agent-skills [plugin] *519*  items=3 - Agentic engineering skills for Qt software development — Qt C++/QML code review,

## Top 30 by stars: listed
- DietrichGebert/ponytail [plugin] *181621*  items=2 - Lazy senior dev mode. Forces the simplest, shortest solution that actually works
- JuliusBrussee/caveman [plugin,skill] *116562*  items=2 - Auto-activation works differently per agent: Claude Code uses SessionStart hooks
- thedotmack/claude-mem [plugin,skill] *108115*  items=3 - Persistent memory system for Claude Code - seamlessly preserve context across se
- pbakaus/impeccable [plugin] *98485*  items=1 - Great design prompts require design vocabulary. Most people don't have it. You c
- Egonex-AI/Understand-Anything [plugin,skill] *89451*  items=2 - Understand Anything is a Claude Code plugin that analyzes your project with a mu
- mem0ai/mem0 [plugin] *68183* ['product-stars'] items=1 - Connect Mem0 to Claude to give your agent persistent memory across sessions. Cla
- mvanhorn/last30days-skill [plugin] *66143*  items=1 - last-30-days is a Claude Code skill that searches the web and delivers a structu
- coreyhaines31/marketingskills [plugin,skill] *57717*  items=3 - coreyhaines31
- DayuanJiang/next-ai-draw-io [plugin,mcp-server] *36530*  items=2 - AI-powered Draw.io diagram generation with real-time browser preview. Create flo
- mksglu/context-mode [plugin] *33057*  items=1 - MCP is the protocol for tool access. We're the virtualization layer for context.
- alirezarezvani/claude-skills [plugin,skill] *29083*  items=2 - Playwright Pro turns your AI coding agent into a senior test automation engineer
- jarrodwatts/claude-hud [plugin,collection] *29062*  items=2 - Real-time statusline HUD for Claude Code - context health, tool activity, agent 
- promptfoo/promptfoo [plugin] *26683*  items=1 - Teaches AI coding agents to create and maintain promptfoo eval suites. Encodes b
- AgriciDaniel/claude-seo [plugin] *25120*  items=1 - Comprehensive SEO analysis plugin for Claude Code. Performs full site audits wit
- browser-use/browser-harness [plugin] *18789*  items=1 - Open-source browser agent driven via CDP — direct browser control, 79K stars, YC
- Jeffallan/claude-skills [plugin,skill,collection] *12153*  items=3 - 66 specialized skills for full-stack development: 12 language experts (Python, T
- nicobailon/visual-explainer [plugin,collection] *10723*  items=3 - An agent skill that turns complex terminal output into styled HTML pages you act
- revfactory/harness [plugin,agent] *9299*  items=3 - Harness leverages Claude Code's agent team system to decompose complex tasks int
- Eventual-Inc/Daft [plugin] *5820* ['product-stars'] items=1 - Skills for working with Daft, a high-performance data engine for AI and multimod
- clidey/whodb [plugin] *5048* ['product-stars'] items=1 - Database management tools for Claude Code. Query databases, explore schemas, ana
- nyldn/claude-octopus [plugin] *4350*  items=2 - Multi-LLM orchestration for Claude Code and Cowork. Coordinates 8 AI providers (
- giancarloerra/SocratiCode [plugin,mcp-server] *3363*  items=2 - Enterprise-grade (40m+ lines) codebase intelligence in a zero-setup, private and
- Chachamaru127/claude-code-harness [plugin,agent] *3190*  items=2 - Autonomous Plan → Work → Review cycle for Claude Code. Go-native engine with 25×
- fabio-rovai/open-ontologies [plugin] *2631* ['star-spike'] items=1 - AI-native ontology engineering with 39 MCP tools backed by an in-memory Oxigraph
- AgriciDaniel/claude-blog [plugin] *2604*  items=1 - AI-powered blog creation and optimization skill with 20 commands, 4 specialized 
- nizos/tdd-guard [plugin,collection] *2373*  items=2 - Enforces Test-Driven Development by intercepting file operations in Claude Code.
- AminForou/mcp-gsc [plugin] *2081*  items=1 - Connect Google Search Console to Claude Code. Query rankings, inspect URLs, audi
- severity1/claude-code-prompt-improver [plugin] *1966*  items=1 - Intelligent prompt optimization using skill-based architecture. Enriches vague p
- kenryu42/cc-safety-net [plugin,collection] *1876*  items=3 - Block destructive git and filesystem commands before execution
- codeaholicguy/ai-devkit [plugin] *1656*  items=1 - A structured software development toolkit that helps Claude Code follow senior-e

## Top 30 by stars: verified
- morluto/rea [marketplace,mcp-server] *416079*  items=2 - Reverse engineer anything with agents, from app behavior down to native binaries
- affaan-m/ECC [collection] *294198*  items=1 - Top-notch, well-written resources covering "just about everything" from core eng
- firecrawl/firecrawl [skill] *197463* ['product-stars'] items=1 - Supercharge your AI agents with data from the web and beyond. Building the libra
- nextlevelbuilder/ui-ux-pro-max-skill [marketplace] *143500*  items=1 - An AI skill that provides design intelligence for building professional UI/UX ac
- vercel/next.js [marketplace] *143453* ['product-stars'] items=1 - The React Framework
- garrytan/gstack [agent] *138499*  items=1 - Garry Tan's (Y Combinator) Claude Code setup and "open source software factory" 
- browser-use/browser-use [mcp-server] *119697*  items=1 - Browser agents and stealth cloud browsers for AI: run web tasks, fill forms, ext
- addyosmani/agent-skills [marketplace] *112295*  items=1 - Production-grade engineering skills for AI coding agents.
- paperclipai/paperclip [skill,mcp-server] *109572*  items=2 - The open-source app everyone uses to manage agents at work
- Leonxlnx/taste-skill [marketplace] *107178*  items=1 - Agent skills that give coding agents taste: art direction, reference images and 
- nexu-io/open-design [marketplace] *105222*  items=1 - The 1st Collaborative AI Design Agent Workspace. Local-first and open source. Cr
- ruvnet/RuView [marketplace] *101896*  items=1 - π RuView turns commodity WiFi signals into real-time spatial intelligence, vital
- debpalash/VoiceStudio [skill] *97043* ['product-stars'] items=1 - VoiceStudio is the open-source, fully-local ElevenLabs alternative — voice cloni
- tt-a1i/archify [skill,collection] *92189*  items=2 - An Agent Skill for Claude Code that generates interactive architecture, workflow
- storybookjs/storybook [marketplace] *91420* ['product-stars'] items=1 - Storybook is the industry standard workshop for building, documenting, and testi
- D4Vinci/Scrapling [mcp-server] *91138*  items=1 - Web scraping with stealth HTTP, real browsers, and Cloudflare bypass. CSS select
- koala73/worldmonitor [skill,mcp-server] *89877* ['product-stars'] items=2 - Real-time global intelligence dashboard. AI-powered news aggregation, geopolitic
- bytedance/deer-flow [skill] *84792*  items=1 - An open-source long-horizon SuperAgent harness that researches, codes, and creat
- netdata/netdata [mcp-server] *81236*  items=1 - Real-time infrastructure monitoring with metrics, logs, alerts, and ML-based ano
- ruvnet/ruflo [marketplace,mcp-server] *80442*  items=2 - 🌊 The original agent harness. Deploy intelligent multi-player swarms, coordinate
- shareAI-lab/learn-claude-code [collection] *79644*  items=1 - A really interesting analysis of how coding agents like Claude Code are designed
- career-ops-hq/career-ops [plugin] *79098*  items=1 - Open-source AI job search agent and job finder: scan job boards, score each job 
- headroomlabs-ai/headroom [marketplace] *78485*  items=1 - Compress tool outputs, logs, files, and RAG chunks before they reach the LLM. 20
- ComposioHQ/awesome-claude-skills [skill] *78460*  items=1 - A curated list of awesome Claude Skills, resources, and tools for customizing Cl
- rohitg00/ai-engineering-from-scratch [skill] *76125* ['product-stars'] items=1 - Learn AI Engineering! Learn it. Build it. Ship it for others.
- thedaviddias/Front-End-Checklist [marketplace,mcp-server] *74618* ['product-stars'] items=2 - 🗂 The essential checklist for modern web development, for humans and AI agents
- calesthio/OpenMontage [skill] *74065*  items=1 - World's first open-source, agentic video production system. 12 production pipeli
- tw93/Mole [marketplace] *73482* ['product-stars'] items=1 - 🐹 Keep your Mac and PC clean, light, and running like new. Fast open-source CLI,
- usestrix/strix [skill] *73115* ['product-stars'] items=1 - Open-source AI penetration testing tool to find and fix your app’s vulnerabiliti
- hugohe3/ppt-master [marketplace] *71757* ['product-stars'] items=1 - AI turns documents or topics into real, native PowerPoint decks—with native shap

## Top 30 by stars: watch
- f/prompts.chat [marketplace] *175455* ['product-stars'] items=1 - f.k.a. Awesome ChatGPT Prompts. Share, discover, and collect prompts from the co
- opendatalab/MinerU [skill] *82903* ['product-stars'] items=1 - Transforms complex documents like PDFs and Office docs into LLM-ready markdown/J
- code-yeongyu/oh-my-openagent [skill] *70558* ['product-stars'] items=1 - OmO: Just type "mass ulw" keyword with your prompt. Now you are the master of gr
- bmad-code-org/BMAD-METHOD [skill] *54832* ['product-stars'] items=1 - Breakthrough Method for Agile Ai Driven Development
- Imbad0202/academic-research-skills [marketplace] *54781*  items=1 - Academic Research Skills for Claude Code: research → write → review → revise → f
- tldraw/tldraw [mcp-server] *51171*  items=1 - Draw and visually collaborate with your agents on tldraw's canvas.
- metabase/metabase [mcp-server] *50069*  items=1 - Lets AI clients search, explore, query, and visualize data in a Metabase instanc
- abhigyanpatwari/GitNexus [marketplace] *48160* ['product-stars'] items=1 - GitNexus: The Zero-Server Code Intelligence Engine
- serverless/serverless [skill] *46927* ['product-stars'] items=1 - ⚡ Serverless Framework – Effortlessly build apps that auto-scale, incur zero cos
- PostHog/posthog [mcp-server] *40560*  items=1 - Official PostHog MCP Server for product analytics, feature flags, experiments, a
- openai/codex-plugin-cc [marketplace] *34776*  items=1 - Use Codex from Claude Code to review code or delegate tasks.
- zarazhangrui/frontend-slides [marketplace] *31659*  items=1 - Create beautiful slides on the web using a coding agent's frontend skills
- oraios/serena [mcp-server] *30962*  items=1 - A powerful toolkit for coding, providing semantic retrieval and editing capabili
- openai/skills [skill] *28437*  items=1 - Skills Catalog for Codex
- vercel/ai [skill] *27661* ['product-stars'] items=1 - The AI Toolkit for TypeScript. From the creators of Next.js, the AI SDK is a fre
- hypit-ai/hypit [skill] *27182* ['product-stars'] items=1 - Clone any viral video with AI agents. Not just a script, the whole workflow: swa
- clockworklabs/SpacetimeDB [marketplace] *25487* ['product-stars'] items=1 - Development at the speed of light
- different-ai/openwork [mcp-server] *24350*  items=1 - Your OpenWork org's skills, plugins, workflows, and connections through one OAut
- HKUDS/AI-Trader [skill] *23064* ['product-stars'] items=1 - "AI-Trader: 100% Fully-Automated Agent-Native Trading"
- getpaseo/paseo [skill] *22646*  items=1 - Orchestrate multiple coding agents from desktop and mobile
- screenpipe/screenpipe [mcp-server] *22194*  items=1 - Search your local screen recordings, audio transcripts, and computer activity fr
- agent0ai/agent-zero [skill] *19623* ['product-stars'] items=1 - Agent Zero AI framework
- longbridge/gpui-kit [skill] *18836* ['product-stars'] items=1 - Rust GUI components for building fantastic cross-platform desktop application by
- Canner/WrenAI [skill] *18026* ['product-stars'] items=1 - GenBI (Generative BI) for AI agents, an open-source, governed text-to-SQL throug
- greensock/gsap-skills [marketplace] *17652*  items=1 - Official AI skills for GSAP. These skills teach AI coding agents how to correctl
- architecture-decision-record/architecture-decision-record [skill] *17374* ['product-stars'] items=1 - Architecture decision record (ADR) examples for software planning, IT leadership
- composio-community/awesome-codex-skills [skill] *17150*  items=1 - A curated list of practical Codex skills for automating workflows across the Cod
- ParadevAI/Paradev [marketplace] *15799* ['product-stars'] items=1 - Paradev (formerly Superset) is an agentic IDE to orchestrate 100+ coding agents 
- millionco/react-doctor [skill] *15072* ['product-stars'] items=1 - Your agent writes bad React. This catches it
- kyegomez/OpenMythos [plugin] *14913*  items=1 - A theoretical reconstruction of the Claude Mythos architecture, built from first

## Random sample of 20 watch repos (of 474)
- ericgandrade/claude-superskills [marketplace] *85*  items=1 - 18 Universal AI Skills for Claude Code, GitHub Copilot & 6 more platforms. Meta/ reasons=['fails: pushed<=90d (173)'] src=['topic']
- sachitrafa/YourMemory [mcp-server] *271*  items=2 - Ebbinghaus-based persistent memory for Claude. Memories decay with time, strengt reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- dontbesilent2025/dbskill [marketplace] *11019*  items=1 - dontbesilent 的商业诊断 Skills reasons=['fails: license (NOASSERTION)'] src=['topic']
- r-huijts/strava-mcp [mcp-server] *503*  items=1 - MCP server for accessing Strava API reasons=['fails: pushed<=90d (140)'] src=['mcp-registry']
- oooscoos/Benzi [mcp-server] *171*  items=1 - Compiler-backed code intelligence: calls, data flow, references and class hierar reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- firish/webfetch [mcp-server] *60*  items=1 - Self-hosted web search for LLM agents: search -> fetch -> rank pipeline with sem reasons=['fails: pushed<=90d (101)'] src=['mcp-registry']
- RedPlanetHQ/core [marketplace] *2010*  items=1 - Your Personal AI OS reasons=['fails: license (NOASSERTION)'] src=['topic']
- f/prompts.chat [marketplace] *175455* ['product-stars'] items=1 - f.k.a. Awesome ChatGPT Prompts. Share, discover, and collect prompts from the co reasons=['fails: license (NOASSERTION)'] src=['topic']
- pyth-network/pyth-crosschain [mcp-server] *249*  items=1 - Real-time and historical price feeds for 500+ crypto, equities, FX, and commodit reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- Jakubantalik/transitions.dev [skill] *5996*  items=1 - UI motion agent, a library of 43+ crafted transitions, a skill that fits your wo reasons=['fails: license (NOASSERTION)'] src=['topic']
- m-mizutani/goast [plugin] *79*  items=1 - Go AST based static analysis tool with Rego reasons=['fails: pushed<=90d (113)', 'no corroborating signal'] src=['code']
- popmechanic/VibesOS [plugin] *135*  items=1 - A GUI for Claude Code that makes it easy to vibe code simple, un-hackable apps reasons=['fails: pushed<=90d (96)'] src=['code']
- kubeshop/testkube [mcp-server] *1677*  items=1 - MCP server for Testkube - Manage test workflows, executions, and artifacts via A reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- bmad-code-org/BMAD-METHOD [skill] *54832* ['product-stars'] items=1 - Breakthrough Method for Agile Ai Driven Development reasons=['fails: license (NOASSERTION)'] src=['topic']
- BioTender-max/awesome-bio-agent-skills [skill] *212*  items=1 - A curated collection of AI agent skills for biomedical research, covering genomi reasons=['fails: pushed<=90d (122)', 'fails: license (NOASSERTION)'] src=['topic']
- LetsFG/LetsFG [mcp-server] *2215*  items=2 - Flight search & booking for AI agents. 400+ airlines, $20-50 cheaper than OTAs. reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- ScrapeGraphAI/scrapegraph-mcp [mcp-server] *119*  items=2 - Enable language models to perform advanced AI-powered web scraping with enterpri reasons=['fails: pushed<=90d (106)'] src=['mcp-registry']
- jgravelle/jdocmunch-mcp [mcp-server] *207*  items=1 - Section-level doc search for .md, .rst, .adoc, .ipynb, .html, .yaml, .json, and  reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- sjsyrek/design-council [plugin] *181*  items=1 - Claude Code plugin: convene 11 role-specialized peer agents to debate a technica reasons=['fails: pushed<=90d (157)'] src=['code']
- shanraisshan/claude-code-hooks [skill] *563*  items=1 - claude code hooks - adding voice on each hook reasons=['fails: pushed<=90d (149)'] src=['topic']

## Errors
- graphql: HTTP 504 after 4 retries <!DOCTYPE html>
<!--

Hello future GitHubber! I bet you're here to remove tho
- broad verify subfolders chunk 8: no data None

## Rate limit
- REST calls this run (uncached): {"core": 89, "search": 127}; last seen: {"core": {"remaining": "4911", "limit": "5000"}, "search": {"remaining": "20", "limit": "30"}}
- GraphQL: 139 calls, cost 57, remaining 4877/5000, stopped early: False
- REST stopped early: False
- repos lacking metadata: 3904; enriched this run: 32972