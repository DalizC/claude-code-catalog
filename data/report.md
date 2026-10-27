# Catalog report 2026-10-27
Mode: **token**; run time 1530s
Repos (deduped): 3073; flat entries before dedup: 22498

## Tier x type BEFORE dedup (flat entries)
- new/mcp-server: 13033
- listed/plugin: 2283
- watch/mcp-server: 2234
- verified/mcp-server: 1190
- watch/skill: 461
- verified/skill: 449
- official/plugin: 376
- verified/plugin: 353
- watch/marketplace: 351
- verified/marketplace: 341
- watch/plugin: 316
- watch/agent: 216
- verified/collection: 197
- new/skill: 158
- anthropic/plugin: 145
- new/plugin: 126
- new/marketplace: 122
- verified/agent: 51
- new/agent: 27
- anthropic/marketplace: 14
- anthropic/collection: 4
- anthropic/agent: 1
- watch/collection: 1

## Tier AFTER dedup (repos)
- verified: 1745
- watch: 453
- new: 298
- official: 256
- listed: 166
- anthropic: 155

## Type AFTER dedup (items)
- mcp-server: 1594
- plugin: 1389
- skill: 734
- marketplace: 469
- collection: 123
- agent: 50

## Primary type AFTER dedup (repos)
- mcp-server: 1035
- plugin: 835
- skill: 671
- marketplace: 406
- collection: 90
- agent: 36

## Repos by discovery source family
- topic: 1232
- mcp-registry: 1159
- anthropic: 474
- anthropic-org: 186
- code: 186
- curated: 149
- marketplace-expansion: 38

## Flags (all tiers)
- product-stars: 217
- star-spike: 13
- star-anomaly: 1

## star-anomaly by tier
- new: 1

## Metadata gaps
- repos without metadata: 161
- reasons: {'unfetched': 161}

## MCP-only repos excluded: 49
- assafelovic/gpt-researcher *30310* ['ai', 'python', 'agent', 'automation', 'research'] - An autonomous agent that conducts deep research on any data using any LLM provid
- mrexodia/ida-pro-mcp *13168* ['ida-plugin', 'ida-pro', 'mcp', 'mcp-server', 'modelcontextprotocol'] - AI-powered reverse engineering assistant that bridges IDA Pro with language mode
- mcp-use/mcp-use *10816* ['mcp', 'model-context-protocol', 'apps-sdk', 'mcp-apps', 'mcp-inspector'] - The fullstack MCP framework to develop MCP Apps for ChatGPT / Claude & MCP Serve
- Agents365-ai/drawio-skill *10383* ['drawio', 'diagram', 'agent-skills', 'architecture-diagram', 'claude-code'] - Agent skill that turns natural language, code, Terraform/K8s, SQL, OpenAPI, Asyn
- jordan-gibbs/hyperresearch *4147* ['agents', 'agentskills', 'claude-code', 'deep-research', 'deep-research-agent'] - Convert Claude Code or Codex into the most intelligent Deep Research Agent. Coll
- stickerdaniel/linkedin-mcp-server *4022* ['linkedin', 'linkedin-scraper', 'mcp', 'mcp-server', 'linkedin-mcp'] - Open-source MCP server for LinkedIn. Give Claude and any MCP-compatible AI agent
- taylorwilsdon/google_workspace_mcp *3420* ['ai', 'gmail', 'google-calendar', 'google-workspace', 'llm'] - Control Gmail, Google Calendar, Docs, Sheets, Slides, Chat, Forms, Tasks, Search
- kajisho5/ffmpeg-skill *3076* ['audio-processing', 'captions', 'ffmpeg', 'subtitles', 'video'] - Local video editor for coding agents: 42 FFmpeg tools with a machine-readable co
- duty1g/x64dbg-mcp-server *2612* ['ai-agents', 'ai-debugging', 'binary-analysis', 'claude', 'claude-code'] - x64dbg-MCP Server is a native MCP (Model Context Protocol) plugin for x64dbg tha
- alpic-ai/skybridge *2177* ['agent', 'ai', 'apps-sdk', 'chatgpt', 'claude'] - Skybridge is a full-stack TypeScript framework for MCP Apps and ChatGPT Apps. Ty
- study8677/repobrain *1355* ['claude-code', 'codex-cli', 'developer-tools', 'mcp-server', 'windsurf'] - 🧠 RepoBrain (formerly Antigravity) — Give your repo a brain. ChatGPT for your co
- agentrq/agentrq *1169* ['agentic-ai', 'agentic-workflow', 'agents', 'task', 'task-manager'] - AgentRQ: Human-in-loop realtime conversational task manager for AI Agents. Self-
- CodeAbra/iai-personal-memory-engine *915* ['claude', 'claude-code', 'local-first', 'mcp', 'mcp-server'] - A cyber brain for your AI. It never forgets a detail, remembers exactly what you
- Storybloq/storybloq *782* ['agentic-development', 'ai-development', 'anthropic', 'claude-code', 'claude-skill'] - Project memory and workflows for Claude Code and Codex. Keep stories, plans, han
- hetpatel-11/Adobe_Premiere_Pro_MCP *762* ['adobe', 'adobe-premiere-pro', 'adobe-mcp', 'adobe-premiere-pro-mcp', 'ai-video-editing'] - Adobe Premiere Pro MCP. Tools for AI-driven video editing via MCP, for Codex, Cl

## Degradation
- registry complete: True (509 pages, 50819 entries)
- MCP servers merged from the previous catalog (not re-fetched): 0
- GraphQL 403s: 0 (secondary rate limit: 0); retries: 7; queries that gave up: 0
- HTTP retries (5xx/network): 0
- repos with stale metadata reused from the previous catalog (meta_stale): 0

## MCP Registry
- {"pages": 509, "fetched": 50819, "kept": 50152, "dropped": 667, "bad": 0, "complete": true, "excluded_remote_only": 16354, "excluded_low_signal": 17341, "fallback_merged": 0, "records": 1159, "attached_existing": 128, "new_repo": 1031, "remote_only": 0, "tiers": {"official": 25, "listed": 19, "verified": 832, "new": 114, "watch": 169}}

## Top 20 by trend_7d
- morluto/rea +53575 (15.79%) []
- cloudflare/security-audit-skill +16085 (49.12%) ['star-spike']
- debpalash/VoiceStudio +11883 (15.26%) ['product-stars']
- DietrichGebert/ponytail +9087 (5.4%) []
- Nutlope/hallmark +6563 (21.58%) []
- mattpocock/skills +6506 (2.19%) []
- pbakaus/impeccable +6127 (7.35%) []
- affaan-m/ECC +5761 (2.03%) []
- heygen-com/hyperframes +5448 (8.03%) []
- hugohe3/ppt-master +5084 (7.94%) ['product-stars']
- ifixai-ai/iFixAi +5001 (16.56%) ['product-stars']
- lemomo-ai/lemo-opuscar +4296 (108.76%) ['star-spike']
- wheresryan22/anatomy +4078 (23.88%) []
- tt-a1i/archify +4004 (4.66%) []
- Leonxlnx/taste-skill +3657 (3.68%) []
- obra/superpowers +3497 (1.16%) []
- luongnv89/claude-howto +3421 (8.15%) []
- NVIDIA/OpenShell +3388 (20.24%) ['product-stars']
- nextlevelbuilder/ui-ux-pro-max-skill +3363 (2.44%) []
- gamedev-skills/awesome-gamedev-agent-skills +3174 (182.83%) ['star-spike']

## Code search vs topic search
- repos found by code search: 186
- also in topic search: 10
- code-only: 161; tiers: {'verified': 84, 'watch': 59, 'new': 18}

## Top 30 by stars: anthropic
- anthropics/skills [marketplace,collection] *184041*  items=2 - Anthropic example skills
- anthropics/claude-code [marketplace,agent] *153496*  items=2 - Bundled plugins for Claude Code including Agent SDK development tools, PR review
- anthropics/claude-plugins-official [plugin,marketplace,collection] *44789*  items=3 - Directory of popular Claude Code extensions including development tools, product
- anthropics/financial-services [marketplace] *40830*  items=1 - 
- anthropics/knowledge-work-plugins [marketplace] *33270*  items=1 - 
- anthropics/claude-for-legal [marketplace] *9798*  items=1 - Reference agents, skills, and data connectors for the legal workflows we see mos
- anthropics/claude-code-action [collection] *9656*  items=1 - The official GitHub Action for running Claude Code in CI: mention @claude in iss
- anthropics/claude-code-security-review [collection] *6565*  items=1 - An official AI-powered security-review GitHub Action that uses Claude to analyze
- anthropics/claude-plugins-community [marketplace] *4776*  items=1 - 
- anthropics/commerce-agents [marketplace] *3353*  items=1 - Claude Commerce Agents: the commerce-builder plugin for building shopping and me
- anthropics/life-sciences [marketplace] *629*  items=1 - Skills for life sciences research, data analysis, and discovery
- anthropics/k12-teacher-skills [marketplace] *592*  items=1 - Plugin marketplace for K-12 Education and Claude for Teachers.
- anthropics/healthcare [marketplace] *432*  items=1 - Claude for Healthcare — one plugin bundling payer, provider, pharma, and general
- anthropics/oncall-kit [marketplace] *251*  items=1 - 
- anthropics/claude-for-financial-advisors [plugin,marketplace] *118*  items=2 - Ready-to-run workflows for financial advisors in Claude Cowork, drawing live dat
- anthropics/claude-tag-plugins [marketplace] *72*  items=1 - Plugins that connect Claude Tag to common SaaS services, plus charting and confi
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
- obra/superpowers [plugin,skill] *305720*  items=3 - Superpowers teaches Claude brainstorming, subagent driven development with built
- mattpocock/skills [plugin] *304237*  items=2 - Matt Pocock's agent skills for real engineering — grilling, spec/ticket flows, T
- heygen-com/hyperframes [plugin] *73287*  items=2 - HyperFrames by HeyGen. Write HTML, render video. Compositions, GSAP and runtime 
- ChromeDevTools/chrome-devtools-mcp [plugin,mcp-server] *54223*  items=4 - Control and inspect a live Chrome browser from your coding agent. Record perform
- confident-ai/deepeval [plugin] *19128* ['product-stars'] items=1 - Skills for adding DeepEval evaluations, tracing, datasets, Confident AI reports,
- huggingface/skills [plugin] *11222*  items=2 - Build, train, evaluate, and use open source AI models, datasets, and spaces.
- wonderwhy-er/DesktopCommanderMCP [plugin,mcp-server] *10134*  items=4 - MCP server for terminal commands, process management, and file operations across
- Eigenwise/atomic-agents [plugin,marketplace] *6310* ['product-stars'] items=3 - Comprehensive development workflow for building AI agents with the Atomic Agents
- exa-labs/exa-mcp-server [plugin,mcp-server] *5175*  items=3 - Exa AI web search, deep research, and content extraction. Provides MCP tools and
- NVIDIA/skills [plugin] *3753*  items=2 - Find the right NVIDIA skill for GPU acceleration, CUDA, AI agents, data loading,
- aws/agent-toolkit-for-aws [plugin] *3299*  items=8 - Build, deploy, and operate AI agents on AWS. Skills for scaffolding agents with 
- expo/skills [plugin] *3207*  items=2 - Official Expo skills for building, deploying, upgrading, and debugging React Nat
- cloudflare/skills [plugin] *3184*  items=2 - Skills for the Cloudflare developer platform: Workers, Durable Objects, Agents S
- modelcontextprotocol/ext-apps [plugin] *3009*  items=3 - Skills for creating MCP Apps with the MCP Apps SDK
- GoogleChrome/modern-web-guidance [plugin] *2558*  items=2 - Keep your coding agent up to date with the latest web best practices
- figma/mcp-server-guide [plugin,mcp-server] *2121*  items=4 - Figma design platform integration. Access design files, extract component inform
- stripe/ai [plugin,mcp-server] *1975*  items=3 - Stripe development plugin for Claude
- MicrosoftDocs/mcp [plugin,mcp-server] *1955*  items=3 - Access official Microsoft documentation, API references, and code samples for Az
- EpicGames/unreal-engine-skills-for-claude-code-plugin [plugin] *1688*  items=2 - Control Unreal Editor directly from Claude Code via MCP. Hundreds of tools expos
- microsoft/azure-skills [plugin] *1599*  items=2 - Transform Claude into an Azure expert. This plugin integrates the Azure MCP serv
- atlassian/atlassian-mcp-server [plugin,mcp-server] *1123*  items=3 - Connect to Atlassian products including Jira and Confluence. Search and create i
- forcedotcom/sf-skills [plugin] *1117*  items=1 - Build Salesforce apps and agents using these core building blocks: metadata, Ape
- awslabs/agent-plugins [plugin] *932*  items=10 - Guide developers through adding maps, places search, geocoding, routing, and oth
- superdesigndev/superdesign-skill [plugin,skill] *906*  items=2 - Design or redesign frontend UI and marketing graphics on the Superdesign infinit
- Shopify/Shopify-AI-Toolkit [plugin] *614*  items=2 - Shopify's AI Toolkit provides 18 development skills for building on the Shopify 
- duckdb/duckdb-skills [plugin] *611*  items=2 - DuckDB-powered skills for Claude Code: read any data file, attach and query Duck
- Unity-Technologies/unity-agent-plugin [plugin] *566*  items=2 - Unity's official plugin for Claude Code, with curated skills for game developmen
- ClickHouse/agent-skills [plugin] *561*  items=2 - 28 best practice rules for ClickHouse schema design, query optimization, and dat
- gitroomhq/postiz-agent [plugin] *553*  items=3 - Social media automation CLI for scheduling posts, managing integrations, uploadi
- TheQtCompanyRnD/agent-skills [plugin] *508*  items=3 - Agentic engineering skills for Qt software development — Qt C++/QML code review,

## Top 30 by stars: listed
- DietrichGebert/ponytail [plugin] *177377*  items=2 - Lazy senior dev mode. Forces the simplest, shortest solution that actually works
- JuliusBrussee/caveman [plugin,skill] *115362*  items=2 - Auto-activation works differently per agent: Claude Code uses SessionStart hooks
- thedotmack/claude-mem [plugin,skill] *103496*  items=3 - Persistent memory system for Claude Code - seamlessly preserve context across se
- pbakaus/impeccable [plugin] *89464*  items=1 - Great design prompts require design vocabulary. Most people don't have it. You c
- Egonex-AI/Understand-Anything [plugin,skill] *88452*  items=2 - Understand Anything is a Claude Code plugin that analyzes your project with a mu
- mem0ai/mem0 [plugin] *67874* ['product-stars'] items=1 - Connect Mem0 to Claude to give your agent persistent memory across sessions. Cla
- mvanhorn/last30days-skill [plugin] *65610*  items=1 - last-30-days is a Claude Code skill that searches the web and delivers a structu
- coreyhaines31/marketingskills [plugin,skill] *56737*  items=3 - coreyhaines31
- DayuanJiang/next-ai-draw-io [plugin,mcp-server] *36429*  items=2 - AI-powered Draw.io diagram generation with real-time browser preview. Create flo
- mksglu/context-mode [plugin] *32463*  items=1 - MCP is the protocol for tool access. We're the virtualization layer for context.
- jarrodwatts/claude-hud [plugin,collection] *28919*  items=2 - Real-time statusline HUD for Claude Code - context health, tool activity, agent 
- alirezarezvani/claude-skills [plugin,skill] *28789*  items=2 - Playwright Pro turns your AI coding agent into a senior test automation engineer
- promptfoo/promptfoo [plugin] *26479*  items=1 - Teaches AI coding agents to create and maintain promptfoo eval suites. Encodes b
- AgriciDaniel/claude-seo [plugin] *22275*  items=1 - Comprehensive SEO analysis plugin for Claude Code. Performs full site audits wit
- browser-use/browser-harness [plugin] *18643*  items=1 - Open-source browser agent driven via CDP — direct browser control, 79K stars, YC
- Jeffallan/claude-skills [plugin,skill,collection] *12076*  items=3 - 66 specialized skills for full-stack development: 12 language experts (Python, T
- nicobailon/visual-explainer [plugin,collection] *10644*  items=3 - An agent skill that turns complex terminal output into styled HTML pages you act
- revfactory/harness [plugin,agent] *9262*  items=3 - Harness leverages Claude Code's agent team system to decompose complex tasks int
- Eventual-Inc/Daft [plugin] *5814* ['product-stars'] items=1 - Skills for working with Daft, a high-performance data engine for AI and multimod
- clidey/whodb [plugin] *5042* ['product-stars'] items=1 - Database management tools for Claude Code. Query databases, explore schemas, ana
- nyldn/claude-octopus [plugin] *4313*  items=2 - Multi-LLM orchestration for Claude Code and Cowork. Coordinates 8 AI providers (
- giancarloerra/SocratiCode [plugin,mcp-server] *3356*  items=2 - Enterprise-grade (40m+ lines) codebase intelligence in a zero-setup, private and
- Chachamaru127/claude-code-harness [plugin,agent] *3187*  items=2 - Autonomous Plan → Work → Review cycle for Claude Code. Go-native engine with 25×
- AgriciDaniel/claude-blog [plugin] *2542*  items=1 - AI-powered blog creation and optimization skill with 20 commands, 4 specialized 
- nizos/tdd-guard [plugin,collection] *2367*  items=2 - Enforces Test-Driven Development by intercepting file operations in Claude Code.
- AminForou/mcp-gsc [plugin] *2036*  items=1 - Connect Google Search Console to Claude Code. Query rankings, inspect URLs, audi
- severity1/claude-code-prompt-improver [plugin] *1964*  items=1 - Intelligent prompt optimization using skill-based architecture. Enriches vague p
- kenryu42/cc-safety-net [plugin,collection] *1801*  items=3 - Block destructive git and filesystem commands before execution
- codeaholicguy/ai-devkit [plugin] *1653*  items=1 - A structured software development toolkit that helps Claude Code follow senior-e
- activeloopai/hivemind [plugin,skill,collection] *1639*  items=5 - Cloud-backed persistent memory for Claude Code powered by Deeplake. Automaticall

## Top 30 by stars: verified
- morluto/rea [mcp-server] *392940*  items=1 - Reverse engineer anything from your terminal or agent with one CLI and MCP serve
- affaan-m/ECC [collection] *290033*  items=1 - Top-notch, well-written resources covering "just about everything" from core eng
- firecrawl/firecrawl [skill] *195760* ['product-stars'] items=1 - Supercharge your AI agents with data from the web and beyond. Building the libra
- vercel/next.js [marketplace] *143309* ['product-stars'] items=1 - The React Framework
- nextlevelbuilder/ui-ux-pro-max-skill [marketplace] *141055*  items=1 - An AI skill that provides design intelligence for building professional UI/UX ac
- garrytan/gstack [agent] *137854*  items=1 - Garry Tan's (Y Combinator) Claude Code setup and "open source software factory" 
- browser-use/browser-use [mcp-server] *119240*  items=1 - Browser agents and stealth cloud browsers for AI: run web tasks, fill forms, ext
- addyosmani/agent-skills [marketplace] *110872*  items=1 - Production-grade engineering skills for AI coding agents.
- paperclipai/paperclip [skill,mcp-server] *107739*  items=2 - The open-source app everyone uses to manage agents at work
- nexu-io/open-design [marketplace] *104207*  items=1 - The 1st Collaborative AI Design Agent Workspace. Local-first and open source. Cr
- Leonxlnx/taste-skill [marketplace] *103136*  items=1 - Agent skills that give coding agents taste: art direction, reference images and 
- ruvnet/RuView [marketplace] *99830*  items=1 - π RuView turns commodity WiFi signals into real-time spatial intelligence, vital
- storybookjs/storybook [marketplace] *91390* ['product-stars'] items=1 - Storybook is the industry standard workshop for building, documenting, and testi
- tt-a1i/archify [skill,collection] *89962*  items=2 - An Agent Skill for Claude Code that generates interactive architecture, workflow
- D4Vinci/Scrapling [mcp-server] *89920*  items=1 - Web scraping with stealth HTTP, real browsers, and Cloudflare bypass. CSS select
- debpalash/VoiceStudio [skill] *89741* ['product-stars'] items=1 - VoiceStudio is the open-source, fully-local ElevenLabs alternative — voice cloni
- koala73/worldmonitor [skill,mcp-server] *89617* ['product-stars'] items=2 - Real-time global intelligence dashboard. AI-powered news aggregation, geopolitic
- bytedance/deer-flow [skill] *84458*  items=1 - An open-source long-horizon SuperAgent harness that researches, codes, and creat
- netdata/netdata [mcp-server] *81166*  items=1 - Real-time infrastructure monitoring with metrics, logs, alerts, and ML-based ano
- ruvnet/ruflo [marketplace,mcp-server] *79598*  items=2 - 🌊 The original agent harness. Deploy intelligent multi-player swarms, coordinate
- shareAI-lab/learn-claude-code [collection] *79299*  items=1 - A really interesting analysis of how coding agents like Claude Code are designed
- ComposioHQ/awesome-claude-skills [skill] *78030*  items=1 - A curated list of awesome Claude Skills, resources, and tools for customizing Cl
- headroomlabs-ai/headroom [marketplace] *77955*  items=1 - Compress tool outputs, logs, files, and RAG chunks before they reach the LLM. 20
- career-ops-hq/career-ops [marketplace] *77681*  items=1 - Open-source AI job search agent and job finder: scan job boards, score each job 
- thedaviddias/Front-End-Checklist [marketplace,mcp-server] *74571* ['product-stars'] items=2 - 🗂 The essential checklist for modern web development, for humans and AI agents
- rohitg00/ai-engineering-from-scratch [skill] *74456* ['product-stars'] items=1 - Learn AI Engineering! Learn it. Build it. Ship it for others.
- tw93/Mole [marketplace] *73022* ['product-stars'] items=1 - 🐹 Keep your Mac and PC clean, light, and running like new. Fast open-source CLI,
- calesthio/OpenMontage [skill] *72243*  items=1 - World's first open-source, agentic video production system. 12 production pipeli
- usestrix/strix [skill] *72189* ['product-stars'] items=1 - Open-source AI penetration testing tool to find and fix your app’s vulnerabiliti
- hugohe3/ppt-master [marketplace] *69101* ['product-stars'] items=1 - AI turns documents or topics into real, native PowerPoint decks—with native shap

## Top 30 by stars: watch
- f/prompts.chat [marketplace] *174684* ['product-stars'] items=1 - f.k.a. Awesome ChatGPT Prompts. Share, discover, and collect prompts from the co
- opendatalab/MinerU [skill] *82556* ['product-stars'] items=1 - Transforms complex documents like PDFs and Office docs into LLM-ready markdown/J
- code-yeongyu/oh-my-openagent [skill] *70379* ['product-stars'] items=1 - OmO: Just type "mass ulw" keyword with your prompt. Now you are the master of gr
- bmad-code-org/BMAD-METHOD [skill] *54600* ['product-stars'] items=1 - Breakthrough Method for Agile Ai Driven Development
- Imbad0202/academic-research-skills [marketplace] *54067*  items=1 - Academic Research Skills for Claude Code: research → write → review → revise → f
- tldraw/tldraw [mcp-server] *51106*  items=1 - Draw and visually collaborate with your agents on tldraw's canvas.
- metabase/metabase [mcp-server] *49867*  items=1 - Lets AI clients search, explore, query, and visualize data in a Metabase instanc
- abhigyanpatwari/GitNexus [marketplace] *48057* ['product-stars'] items=1 - GitNexus: The Zero-Server Code Intelligence Engine
- serverless/serverless [skill] *46920* ['product-stars'] items=1 - ⚡ Serverless Framework – Effortlessly build apps that auto-scale, incur zero cos
- PostHog/posthog [mcp-server] *40461*  items=1 - Official PostHog MCP Server for product analytics, feature flags, experiments, a
- openai/codex-plugin-cc [marketplace] *34612*  items=1 - Use Codex from Claude Code to review code or delegate tasks.
- zarazhangrui/frontend-slides [marketplace] *31372*  items=1 - Create beautiful slides on the web using a coding agent's frontend skills
- oraios/serena [mcp-server] *30745*  items=1 - A powerful toolkit for coding, providing semantic retrieval and editing capabili
- openai/skills [skill] *28334*  items=1 - Skills Catalog for Codex
- vercel/ai [skill] *27528* ['product-stars'] items=1 - The AI Toolkit for TypeScript. From the creators of Next.js, the AI SDK is a fre
- clockworklabs/SpacetimeDB [marketplace] *25393* ['product-stars'] items=1 - Development at the speed of light
- different-ai/openwork [mcp-server] *24271*  items=1 - Your OpenWork org's skills, plugins, workflows, and connections through one OAut
- HKUDS/AI-Trader [skill] *22977* ['product-stars'] items=1 - "AI-Trader: 100% Fully-Automated Agent-Native Trading"
- getpaseo/paseo [skill] *22166*  items=1 - Orchestrate multiple coding agents from desktop and mobile
- screenpipe/screenpipe [mcp-server] *22084*  items=1 - Search your local screen recordings, audio transcripts, and computer activity fr
- agent0ai/agent-zero [skill] *19578* ['product-stars'] items=1 - Agent Zero AI framework
- longbridge/gpui-kit [skill] *18672* ['product-stars'] items=1 - Rust GUI components for building fantastic cross-platform desktop application by
- Canner/WrenAI [skill] *17983* ['product-stars'] items=1 - GenBI (Generative BI) for AI agents, an open-source, governed text-to-SQL throug
- architecture-decision-record/architecture-decision-record [skill] *17324* ['product-stars'] items=1 - Architecture decision record (ADR) examples for software planning, IT leadership
- composio-community/awesome-codex-skills [skill] *17074*  items=1 - A curated list of practical Codex skills for automating workflows across the Cod
- ParadevAI/Paradev [marketplace] *15603*  items=1 - Superset is an agentic IDE to orchestrate 100+ coding agents in parallel. Run an
- millionco/react-doctor [skill] *15051* ['product-stars'] items=1 - Your agent writes bad React. This catches it
- kyegomez/OpenMythos [plugin] *14907*  items=1 - A theoretical reconstruction of the Claude Mythos architecture, built from first
- NevaMind-AI/memU [skill] *14563* ['product-stars'] items=1 - Personal memory across agents
- Imbad0202/academic-research-skills-codex [skill] *13572*  items=1 - Codex-native Academic Research Skills suite for human-in-the-loop academic resea

## Random sample of 20 watch repos (of 453)
- coco-research/coco [skill] *792*  items=1 - CoCo Super Intelligence is the orchestration layer that turns Claude Code, Curso reasons=['fails: license (NOASSERTION)'] src=['topic']
- usertour/usertour [mcp-server] *2329*  items=1 - Official Usertour MCP Server for in-app onboarding: flows, checklists, surveys,  reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- Dicklesworthstone/destructive_command_guard [skill] *6215* ['product-stars'] items=1 - The Destructive Command Guard (dcg) is for blocking dangerous git and shell comm reasons=['fails: license (NOASSERTION)'] src=['topic']
- thomasxm/CrowdSentinels-AI-MCP [mcp-server] *204*  items=1 - AI threat hunting & incident response for Elasticsearch/OpenSearch with endpoint reasons=['fails: pushed<=90d (99)'] src=['mcp-registry']
- leeguooooo/iphone-use [mcp-server] *377*  items=1 - Drive a real iPhone from a Mac: read the screen as text, tap, type, scroll, repl reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- Rito-w/skills-manager [skill] *196*  items=1 - A cross-platform skills manager for AI IDEs. Search marketplace, download locall reasons=['fails: pushed<=90d (114)', 'fails: license (None)'] src=['topic']
- openai/codex-plugin-cc [marketplace] *34612*  items=1 - Use Codex from Claude Code to review code or delegate tasks. reasons=['fails: pushed<=90d (111)'] src=['topic']
- taisly/agent [mcp-server] *221*  items=1 - Publish videos to TikTok, Reels, Shorts, X, and Facebook through Taisly. reasons=['no corroborating signal'] src=['mcp-registry']
- Klavis-AI/klavis [mcp-server] *5827*  items=1 - MCP server for progressive tool usage at any scale (see https://klavis.ai) reasons=['fails: pushed<=90d (147)'] src=['mcp-registry']
- sjsyrek/design-council [plugin] *181*  items=1 - Claude Code plugin: convene 11 role-specialized peer agents to debate a technica reasons=['fails: pushed<=90d (152)'] src=['code']
- lynxlangya/techne [plugin] *106*  items=1 - Forcing-function skills for AI agents — validated to improve behavior, not just  reasons=['fails: pushed<=90d (116)'] src=['code']
- nirholas/pump-fun-sdk [mcp-server] *140*  items=1 - Build extend and maintain pump - Token creation buying selling migration fee col reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- openai/skills [skill] *28334*  items=1 - Skills Catalog for Codex reasons=['fails: license (None)'] src=['topic']
- UnitOneAI/SecuritySkills [skill] *94*  items=1 - Open-source security skills for AI coding agents. Grounded in OWASP, NIST, MITRE reasons=['fails: pushed<=90d (130)'] src=['topic']
- twelvedata/mcp [mcp-server] *84*  items=1 - Twelve Data MCP: real-time & historical market data (stocks, crypto, forex, etc) reasons=['fails: license (None)'] src=['mcp-registry']
- gtm-api/linkedin-mcp [mcp-server] *90*  items=1 - Managed LinkedIn MCP server for AI agents: search, connect, message and enrich o reasons=['no corroborating signal'] src=['mcp-registry']
- metabase/metabase [mcp-server] *49867*  items=1 - Lets AI clients search, explore, query, and visualize data in a Metabase instanc reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- smnandre/symfony-ux-skills [plugin] *180*  items=1 - Symfony UX skills for Claude, Gemini, Codex, ... Live Component, Twig Component, reasons=['fails: pushed<=90d (134)'] src=['code']
- mikesheehan54/Claude-Code-Design-AI [skill,agent] *86*  items=2 - Claude Design: AI UI/UX architect. Screenshot to React, Figma components, Tailwi reasons=['fails: pushed<=90d (166)', 'no corroborating signal'] src=['topic']
- tractorjuice/arc-kit [marketplace] *2265*  items=1 - The Enterprise Architecture Governance Harness — strategy, architecture, deliver reasons=['fails: license (NOASSERTION)'] src=['topic']

## Errors
- none

## Rate limit
- REST calls this run (uncached): {"core": 85, "search": 42}; last seen: {"core": {"remaining": "4915", "limit": "5000"}, "search": {"remaining": "27", "limit": "30"}}
- GraphQL: 163 calls, cost 76, remaining 4820/5000, stopped early: False
- REST stopped early: False
- repos lacking metadata: 3963; enriched this run: 31533