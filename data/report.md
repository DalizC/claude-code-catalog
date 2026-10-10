# Catalog report 2026-10-10
Mode: **token**; run time 981s
Repos (deduped): 2919; flat entries before dedup: 20390

## Tier x type BEFORE dedup (flat entries)
- new/mcp-server: 11396
- listed/plugin: 2284
- watch/mcp-server: 1976
- verified/mcp-server: 1073
- watch/skill: 499
- verified/skill: 453
- watch/marketplace: 385
- official/plugin: 376
- watch/plugin: 314
- verified/marketplace: 309
- verified/plugin: 257
- watch/agent: 199
- verified/collection: 171
- anthropic/plugin: 165
- new/marketplace: 149
- new/skill: 138
- new/plugin: 100
- verified/agent: 42
- new/agent: 33
- anthropic/marketplace: 14
- anthropic/collection: 4
- anthropic/agent: 1
- watch/collection: 1

## Tier AFTER dedup (repos)
- verified: 1620
- watch: 458
- official: 256
- new: 239
- anthropic: 175
- listed: 171

## Type AFTER dedup (items)
- mcp-server: 1345
- plugin: 1315
- skill: 732
- marketplace: 450
- collection: 105
- agent: 44

## Primary type AFTER dedup (repos)
- mcp-server: 895
- plugin: 872
- skill: 665
- marketplace: 381
- collection: 75
- agent: 31

## Repos by discovery source family
- topic: 1209
- mcp-registry: 1006
- anthropic: 480
- anthropic-org: 205
- code: 187
- curated: 128
- marketplace-expansion: 40

## Flags (all tiers)
- product-stars: 207
- star-spike: 8
- star-anomaly: 1

## star-anomaly by tier
- new: 1

## Metadata gaps
- repos without metadata: 181
- reasons: {'unfetched': 181}

## MCP-only repos excluded: 51
- assafelovic/gpt-researcher *29983* ['ai', 'python', 'agent', 'automation', 'research'] - An autonomous agent that conducts deep research on any data using any LLM provid
- pascalorg/editor *24751* ['3d', 'architecture', 'bim', 'cad', 'editor'] - Open-source 3D architectural editor with a local CLI, MCP tools, and practical w
- mrexodia/ida-pro-mcp *12598* ['ida-plugin', 'ida-pro', 'mcp', 'mcp-server', 'modelcontextprotocol'] - AI-powered reverse engineering assistant that bridges IDA Pro with language mode
- mcp-use/mcp-use *10738* ['mcp', 'model-context-protocol', 'apps-sdk', 'mcp-apps', 'mcp-inspector'] - The fullstack MCP framework to develop MCP Apps for ChatGPT / Claude & MCP Serve
- Agents365-ai/drawio-skill *10040* ['drawio', 'diagram', 'agent-skills', 'architecture-diagram', 'claude-code'] - Agent skill that turns natural language, code, Terraform/K8s, SQL, OpenAPI, Asyn
- 21st-dev/magic-mcp *5989* ['21st', 'claude', 'cursor', 'mcp', 'model-context-protocol'] - It's like v0, but in your Cursor / Claude Code / Windsurf: search 10,000+ React/
- jordan-gibbs/hyperresearch *3816* ['agents', 'agentskills', 'claude-code', 'deep-research', 'deep-research-agent'] - Convert Claude Code or Codex into the most intelligent Deep Research Agent. Coll
- taylorwilsdon/google_workspace_mcp *3314* ['ai', 'gmail', 'google-calendar', 'google-workspace', 'llm'] - Control Gmail, Google Calendar, Docs, Sheets, Slides, Chat, Forms, Tasks, Search
- redhat-et/ripwire *2430* ['ai-agents', 'claude', 'cli', 'coding-agents', 'context-engineering'] - The ripgrep of AI context: a zero-dependency C++23 CLI + MCP server for coding a
- duty1g/x64dbg-mcp-server *2427* ['ai-agents', 'ai-debugging', 'binary-analysis', 'claude', 'claude-code'] - x64dbg-MCP Server is a native MCP (Model Context Protocol) plugin for x64dbg tha
- alpic-ai/skybridge *2152* ['agent', 'ai', 'apps-sdk', 'chatgpt', 'claude'] - Skybridge is a full-stack TypeScript framework for MCP Apps and ChatGPT Apps. Ty
- jau123/MeiGen-AI-Design-MCP *1781* ['ai-image-generation', 'claude', 'claude-code', 'comfyui', 'mcp'] - Supports GPT Image 2, Seedance & ComfyUI, with a 1,400+ prompt library, carefull
- study8677/repobrain *1325* ['claude-code', 'codex-cli', 'developer-tools', 'mcp-server', 'windsurf'] - 🧠 RepoBrain (formerly Antigravity) — Give your repo a brain. ChatGPT for your co
- agentrq/agentrq *1140* ['agentic-ai', 'agentic-workflow', 'agents', 'task', 'task-manager'] - AgentRQ: Human-in-loop realtime conversational task manager for AI Agents. Self-
- vostride/agent-qa *904* ['playwright', 'end-to-end-testing', 'ai-testing', 'ai-agents', 'mcp'] - Open-source self-improving QA agent for software teams. A test harness with memo

## Degradation
- registry complete: True (414 pages, 41367 entries)
- MCP servers merged from the previous catalog (not re-fetched): 0
- GraphQL 403s: 1 (secondary rate limit: 1); retries: 1; queries that gave up: 0
- HTTP retries (5xx/network): 0
- repos with stale metadata reused from the previous catalog (meta_stale): 0

## MCP Registry
- {"pages": 414, "fetched": 41367, "kept": 40858, "dropped": 509, "bad": 0, "complete": true, "excluded_remote_only": 11406, "excluded_low_signal": 15007, "fallback_merged": 0, "records": 1006, "attached_existing": 114, "new_repo": 892, "remote_only": 0, "tiers": {"official": 24, "listed": 18, "verified": 730, "new": 88, "watch": 146}}

## Top 20 by trend_7d
- morluto/rea +51920 (10404.81%) ['star-spike']
- mattpocock/skills +7782 (2.83%) []
- DietrichGebert/ponytail +6637 (4.33%) []
- cathrynlavery/diagram-design +4904 (11.35%) []
- affaan-m/ECC +3945 (1.45%) []
- pbakaus/impeccable +3938 (5.24%) []
- heygen-com/hyperframes +3655 (6.5%) ['product-stars']
- thedotmack/claude-mem +3544 (3.71%) []
- rehan-remade/universal-modder +3543 (138.62%) ['star-spike']
- tigerless-labs/autoharness +3418 (45.55%) ['star-spike']
- ayghri/i-have-adhd +2994 (5.63%) []
- paperclipai/paperclip +2627 (2.72%) []
- obra/superpowers +2086 (0.71%) []
- latent-spaces/brag +1544 (11.65%) []
- JuliusBrussee/caveman +1330 (1.21%) []
- coreyhaines31/marketingskills +1281 (2.43%) []
- Ryze-AI-Adgent/open-seo-mcp-skills +1129 (31.96%) ['star-spike']
- D4Vinci/Scrapling +1124 (1.32%) []
- t8y2/dbx +1099 (4.52%) ['product-stars']
- multica-ai/andrej-karpathy-skills +1094 (0.5%) []

## Code search vs topic search
- repos found by code search: 187
- also in topic search: 8
- code-only: 165; tiers: {'watch': 70, 'verified': 82, 'new': 13}

## Top 30 by stars: anthropic
- anthropics/skills [marketplace,collection] *180202*  items=2 - Anthropic example skills
- anthropics/claude-code [marketplace,agent] *149915*  items=2 - Bundled plugins for Claude Code including Agent SDK development tools, PR review
- anthropics/financial-services [marketplace] *39201*  items=1 - 
- anthropics/claude-plugins-official [plugin,marketplace,collection] *37593*  items=3 - Directory of popular Claude Code extensions including development tools, product
- anthropics/knowledge-work-plugins [marketplace] *28385*  items=1 - 
- anthropics/claude-for-legal [marketplace] *9633*  items=1 - Reference agents, skills, and data connectors for the legal workflows we see mos
- anthropics/claude-code-action [collection] *9457*  items=1 - The official GitHub Action for running Claude Code in CI: mention @claude in iss
- anthropics/claude-code-security-review [collection] *6329*  items=1 - An official AI-powered security-review GitHub Action that uses Claude to analyze
- anthropics/claude-plugins-community [marketplace] *4604*  items=1 - 
- anthropics/commerce-agents [marketplace] *3198*  items=1 - Claude Commerce Agents: the commerce-builder plugin for building shopping and me
- anthropics/life-sciences [marketplace] *615*  items=1 - MCP servers and skills for life sciences research, data analysis, and discovery
- anthropics/k12-teacher-skills [marketplace] *561*  items=1 - Plugin marketplace for K-12 Education and Claude for Teachers.
- anthropics/healthcare [marketplace] *424*  items=1 - Claude for Healthcare — one plugin bundling payer, provider, pharma, and general
- anthropics/oncall-kit [marketplace] *215*  items=1 - 
- anthropics/claude-for-financial-advisors [plugin,marketplace] *99*  items=2 - Ready-to-run workflows for financial advisors in Claude Cowork, drawing live dat
- anthropics/claude-tag-plugins [marketplace] *59*  items=1 - Plugins that connect Claude Tag to common SaaS services, plus charting and confi
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
- obra/superpowers [plugin,skill] *296942*  items=3 - Superpowers teaches Claude brainstorming, subagent driven development with built
- mattpocock/skills [plugin] *283068*  items=2 - Matt Pocock's agent skills for real engineering — grilling, spec/ticket flows, T
- heygen-com/hyperframes [plugin] *59912* ['product-stars'] items=2 - HyperFrames by HeyGen. Write HTML, render video. Compositions, GSAP and runtime 
- ChromeDevTools/chrome-devtools-mcp [plugin,mcp-server] *53192*  items=3 - Control and inspect a live Chrome browser from your coding agent. Record perform
- confident-ai/deepeval [plugin] *18726* ['product-stars'] items=1 - Skills for adding DeepEval evaluations, tracing, datasets, Confident AI reports,
- huggingface/skills [plugin] *11152*  items=2 - Build, train, evaluate, and use open source AI models, datasets, and spaces.
- wonderwhy-er/DesktopCommanderMCP [plugin,mcp-server] *9987*  items=4 - MCP server for terminal commands, process management, and file operations across
- Eigenwise/atomic-agents [plugin,marketplace] *6278* ['product-stars'] items=3 - Comprehensive development workflow for building AI agents with the Atomic Agents
- exa-labs/exa-mcp-server [plugin,mcp-server] *5100*  items=3 - Exa AI web search, deep research, and content extraction. Provides MCP tools and
- NVIDIA/skills [plugin] *3554*  items=2 - Find the right NVIDIA skill for GPU acceleration, CUDA, AI agents, data loading,
- cloudflare/skills [plugin] *3020*  items=2 - Skills for the Cloudflare developer platform: Workers, Durable Objects, Agents S
- modelcontextprotocol/ext-apps [plugin] *2928*  items=3 - Skills for creating MCP Apps with the MCP Apps SDK
- aws/agent-toolkit-for-aws [plugin] *2835*  items=8 - Build, deploy, and operate AI agents on AWS. Skills for scaffolding agents with 
- expo/skills [plugin] *2685*  items=2 - Official Expo skills for building, deploying, upgrading, and debugging React Nat
- GoogleChrome/modern-web-guidance [plugin] *2456*  items=2 - Keep your coding agent up to date with the latest web best practices
- figma/mcp-server-guide [plugin,mcp-server] *2060*  items=4 - Figma design platform integration. Access design files, extract component inform
- MicrosoftDocs/mcp [plugin,mcp-server] *1935*  items=3 - Access official Microsoft documentation, API references, and code samples for Az
- stripe/ai [plugin,mcp-server] *1865*  items=3 - Stripe development plugin for Claude
- microsoft/azure-skills [plugin] *1555*  items=2 - Transform Claude into an Azure expert. This plugin integrates the Azure MCP serv
- atlassian/atlassian-mcp-server [plugin,mcp-server] *1089*  items=3 - Connect to Atlassian products including Jira and Confluence. Search and create i
- forcedotcom/sf-skills [plugin] *1067*  items=1 - Build Salesforce apps and agents using these core building blocks: metadata, Ape
- awslabs/agent-plugins [plugin] *916*  items=10 - Guide developers through adding maps, places search, geocoding, routing, and oth
- superdesigndev/superdesign-skill [plugin,skill] *642*  items=2 - Design or redesign frontend UI and marketing graphics on the Superdesign infinit
- duckdb/duckdb-skills [plugin] *603*  items=2 - DuckDB-powered skills for Claude Code: read any data file, attach and query Duck
- Shopify/Shopify-AI-Toolkit [plugin] *592*  items=2 - Shopify's AI Toolkit provides 18 development skills for building on the Shopify 
- ClickHouse/agent-skills [plugin] *545*  items=2 - 28 best practice rules for ClickHouse schema design, query optimization, and dat
- gitroomhq/postiz-agent [plugin] *508*  items=3 - Social media automation CLI for scheduling posts, managing integrations, uploadi
- makenotion/claude-code-notion-plugin [plugin] *492*  items=2 - Notion workspace integration. Search pages, create and update documents, manage 
- tavily-ai/skills [plugin] *488*  items=3 - Build AI applications with real-time web data using Tavily's search, extract, cr
- TheQtCompanyRnD/agent-skills [plugin] *469*  items=3 - Agentic engineering skills for Qt software development — Qt C++/QML code review,

## Top 30 by stars: listed
- DietrichGebert/ponytail [plugin] *159796*  items=2 - Lazy senior dev mode. Forces the simplest, shortest solution that actually works
- JuliusBrussee/caveman [plugin,skill] *110802*  items=2 - Auto-activation works differently per agent: Claude Code uses SessionStart hooks
- thedotmack/claude-mem [plugin,skill] *99033*  items=3 - Persistent memory system for Claude Code - seamlessly preserve context across se
- Egonex-AI/Understand-Anything [plugin,skill] *85776*  items=2 - Understand Anything is a Claude Code plugin that analyzes your project with a mu
- pbakaus/impeccable [plugin] *79080*  items=1 - Great design prompts require design vocabulary. Most people don't have it. You c
- mem0ai/mem0 [plugin] *66918* ['product-stars'] items=1 - Connect Mem0 to Claude to give your agent persistent memory across sessions. Cla
- mvanhorn/last30days-skill [plugin] *63855*  items=1 - last-30-days is a Claude Code skill that searches the web and delivers a structu
- coreyhaines31/marketingskills [plugin,skill] *53956*  items=3 - coreyhaines31
- DayuanJiang/next-ai-draw-io [plugin] *36155* ['product-stars'] items=1 - AI-powered Draw.io diagram generation with real-time browser preview. Create flo
- jarrodwatts/claude-hud [plugin,collection] *28426*  items=2 - Real-time statusline HUD for Claude Code - context health, tool activity, agent 
- alirezarezvani/claude-skills [plugin,skill] *27937*  items=2 - Playwright Pro turns your AI coding agent into a senior test automation engineer
- mksglu/context-mode [plugin] *26003*  items=1 - MCP is the protocol for tool access. We're the virtualization layer for context.
- promptfoo/promptfoo [plugin] *25857*  items=1 - Teaches AI coding agents to create and maintain promptfoo eval suites. Encodes b
- AgriciDaniel/claude-seo [plugin] *18626*  items=1 - Comprehensive SEO analysis plugin for Claude Code. Performs full site audits wit
- browser-use/browser-harness [plugin] *18365* ['product-stars'] items=1 - Open-source browser agent driven via CDP — direct browser control, 79K stars, YC
- Jeffallan/claude-skills [plugin,skill,collection] *11801*  items=3 - 66 specialized skills for full-stack development: 12 language experts (Python, T
- nicobailon/visual-explainer [plugin,collection] *10327*  items=3 - An agent skill that turns complex terminal output into styled HTML pages you act
- revfactory/harness [plugin,agent] *9143*  items=3 - Harness leverages Claude Code's agent team system to decompose complex tasks int
- Eventual-Inc/Daft [plugin] *5793* ['product-stars'] items=1 - Skills for working with Daft, a high-performance data engine for AI and multimod
- clidey/whodb [plugin] *5033* ['product-stars'] items=1 - Database management tools for Claude Code. Query databases, explore schemas, ana
- nyldn/claude-octopus [plugin] *4198*  items=2 - Multi-LLM orchestration for Claude Code and Cowork. Coordinates 8 AI providers (
- giancarloerra/SocratiCode [plugin,mcp-server] *3336*  items=2 - Enterprise-grade (40m+ lines) codebase intelligence in a zero-setup, private and
- Chachamaru127/claude-code-harness [plugin,agent] *3156*  items=2 - Autonomous Plan → Work → Review cycle for Claude Code. Go-native engine with 25×
- nizos/tdd-guard [plugin,collection] *2360*  items=2 - Enforces Test-Driven Development by intercepting file operations in Claude Code.
- AgriciDaniel/claude-blog [plugin] *2348*  items=1 - AI-powered blog creation and optimization skill with 20 commands, 4 specialized 
- severity1/claude-code-prompt-improver [plugin] *1944*  items=1 - Intelligent prompt optimization using skill-based architecture. Enriches vague p
- AminForou/mcp-gsc [plugin] *1886*  items=1 - Connect Google Search Console to Claude Code. Query rankings, inspect URLs, audi
- codeaholicguy/ai-devkit [plugin] *1645*  items=1 - A structured software development toolkit that helps Claude Code follow senior-e
- activeloopai/hivemind [plugin,skill,collection] *1621*  items=5 - Cloud-backed persistent memory for Claude Code powered by Deeplake. Automaticall
- kenryu42/cc-safety-net [plugin,collection] *1582*  items=3 - Block destructive git and filesystem commands before execution

## Top 30 by stars: verified
- affaan-m/ECC [collection] *276070*  items=1 - Top-notch, well-written resources covering "just about everything" from core eng
- multica-ai/andrej-karpathy-skills [collection] *217788*  items=1 - A drop-in CLAUDE.md distilling four behavioral guidelines for LLM-assisted codin
- firecrawl/firecrawl [skill] *189997* ['product-stars'] items=1 - Supercharge your AI agents with data from the web and beyond. Building the libra
- vercel/next.js [marketplace] *143100* ['product-stars'] items=1 - The React Framework
- garrytan/gstack [agent] *135757*  items=1 - Garry Tan's (Y Combinator) Claude Code setup and "open source software factory" 
- nextlevelbuilder/ui-ux-pro-max-skill [marketplace] *134284*  items=1 - An AI skill that provides design intelligence for building professional UI/UX ac
- browser-use/browser-use [mcp-server] *117456*  items=1 - Control a real Chrome browser to complete any task: fill forms, extract data, bo
- addyosmani/agent-skills [marketplace] *104139*  items=1 - Production-grade engineering skills for AI coding agents.
- nexu-io/open-design [marketplace] *100256*  items=1 - 🎨 Best DeepSeek Harness Design Plugin. The open-source Claude Design alternative
- paperclipai/paperclip [mcp-server] *99318*  items=1 - Trending hip-hop artist momentum scores across four cultural dimensions.
- ruvnet/RuView [marketplace] *97075*  items=1 - π RuView turns commodity WiFi signals into real-time spatial intelligence, vital
- Leonxlnx/taste-skill [marketplace] *94175*  items=1 - Taste-Skill - gives your AI good taste. stops the AI from generating boring, gen
- storybookjs/storybook [marketplace] *91217* ['product-stars'] items=1 - Storybook is the industry standard workshop for building, documenting, and testi
- koala73/worldmonitor [skill,mcp-server] *88154* ['product-stars'] items=2 - Real-time global intelligence dashboard. AI-powered news aggregation, geopolitic
- D4Vinci/Scrapling [mcp-server] *86567*  items=1 - Web scraping with stealth HTTP, real browsers, and Cloudflare bypass. CSS select
- bytedance/deer-flow [skill] *83602*  items=1 - An open-source long-horizon SuperAgent harness that researches, codes, and creat
- tt-a1i/archify [skill,collection] *81322*  items=2 - An Agent Skill for Claude Code that generates interactive architecture, workflow
- netdata/netdata [mcp-server] *80863*  items=1 - Real-time infrastructure monitoring with metrics, logs, alerts, and ML-based ano
- shareAI-lab/learn-claude-code [collection] *78263*  items=1 - A really interesting analysis of how coding agents like Claude Code are designed
- ComposioHQ/awesome-claude-skills [skill] *76770*  items=1 - A curated list of awesome Claude Skills, resources, and tools for customizing Cl
- headroomlabs-ai/headroom [marketplace] *74855*  items=1 - Compress tool outputs, logs, files, and RAG chunks before they reach the LLM. 20
- thedaviddias/Front-End-Checklist [marketplace,mcp-server] *74419* ['product-stars'] items=2 - 🗂 The essential checklist for modern web development, for humans and AI agents
- ruvnet/ruflo [marketplace,mcp-server] *74218*  items=2 - 🌊 The original agent harness. Deploy intelligent multi-player swarms, coordinate
- career-ops-hq/career-ops [marketplace] *73923*  items=1 - Open-source AI job search agent and job finder: scan job boards, score each job 
- usestrix/strix [skill] *67621* ['product-stars'] items=1 - Open-source AI penetration testing tool to find and fix your app’s vulnerabiliti
- shanraisshan/claude-code-best-practice [skill] *67317*  items=1 - from vibe coding to agentic engineering - practice makes claude perfect
- xtekky/gpt4free [skill] *66778* ['product-stars'] items=1 - The official gpt4free repository | various collection of powerful language model
- rohitg00/ai-engineering-from-scratch [skill] *66259* ['product-stars'] items=1 - Learn it. Build it. Ship it for others.
- ZhuLinsen/daily_stock_analysis [skill] *66118* ['product-stars'] items=1 - LLM 驱动的多市场股票智能分析系统：多源行情、实时新闻、决策看板与自动推送，支持零成本定时运行。 LLM-powered multi-market stock
- calesthio/OpenMontage [skill] *65911*  items=1 - World's first open-source, agentic video production system. 12 production pipeli

## Top 30 by stars: watch
- f/prompts.chat [marketplace] *172294* ['product-stars'] items=1 - f.k.a. Awesome ChatGPT Prompts. Share, discover, and collect prompts from the co
- opendatalab/MinerU [skill] *81361* ['product-stars'] items=1 - Transforms complex documents like PDFs and Office docs into LLM-ready markdown/J
- code-yeongyu/oh-my-openagent [skill] *69923* ['product-stars'] items=1 - OmO: Just type "mass ulw" keyword with your prompt. Now you are the master of gr
- bmad-code-org/BMAD-METHOD [skill] *53995* ['product-stars'] items=1 - Breakthrough Method for Agile Ai Driven Development
- Imbad0202/academic-research-skills [marketplace] *51109*  items=1 - Academic Research Skills for Claude Code: research → write → review → revise → f
- tldraw/tldraw [mcp-server] *50825*  items=1 - Draw and visually collaborate with your agents on tldraw's canvas.
- metabase/metabase [mcp-server] *49598*  items=1 - Lets AI clients search, explore, query, and visualize data in a Metabase instanc
- abhigyanpatwari/GitNexus [marketplace] *47815* ['product-stars'] items=1 - GitNexus: The Zero-Server Code Intelligence Engine
- PostHog/posthog [mcp-server] *40208*  items=1 - Official PostHog MCP Server for product analytics, feature flags, experiments, a
- openai/codex-plugin-cc [marketplace] *34029*  items=1 - Use Codex from Claude Code to review code or delegate tasks.
- zarazhangrui/frontend-slides [marketplace] *30373*  items=1 - Create beautiful slides on the web using a coding agent's frontend skills
- oraios/serena [mcp-server] *30141*  items=1 - A powerful toolkit for coding, providing semantic retrieval and editing capabili
- eyaltoledano/claude-task-master [marketplace] *28184*  items=1 - An AI-powered task-management system you can drop into Cursor, Lovable, Windsurf
- openai/skills [skill] *27966*  items=1 - Skills Catalog for Codex
- vercel/ai [skill] *27220* ['product-stars'] items=1 - The AI Toolkit for TypeScript. From the creators of Next.js, the AI SDK is a fre
- clockworklabs/SpacetimeDB [marketplace] *25271* ['product-stars'] items=1 - Development at the speed of light
- different-ai/openwork [mcp-server] *23985*  items=1 - Your OpenWork org's skills, plugins, workflows, and connections through one OAut
- HKUDS/AI-Trader [skill] *22722* ['product-stars'] items=1 - "AI-Trader: 100% Fully-Automated Agent-Native Trading"
- screenpipe/screenpipe [mcp-server] *21892*  items=1 - Search your local screen recordings, audio transcripts, and computer activity fr
- getpaseo/paseo [skill] *20313*  items=1 - Orchestrate multiple coding agents from desktop and mobile
- agent0ai/agent-zero [skill] *19405* ['product-stars'] items=1 - Agent Zero AI framework
- Canner/WrenAI [skill] *17832* ['product-stars'] items=1 - GenBI (Generative BI) for AI agents, an open-source, governed text-to-SQL throug
- architecture-decision-record/architecture-decision-record [skill] *17145* ['product-stars'] items=1 - Architecture decision record (ADR) examples for software planning, IT leadership
- composio-community/awesome-codex-skills [skill] *16834*  items=1 - A curated list of practical Codex skills for automating workflows across the Cod
- longbridge/gpui-kit [skill] *16695* ['product-stars'] items=1 - Rust GUI components for building fantastic cross-platform desktop application by
- travisvn/awesome-claude-skills [skill] *15339*  items=1 - A curated list of awesome Claude Skills, resources, and tools for customizing Cl
- superset-sh/superset [marketplace] *15039* ['product-stars'] items=1 - Superset is an agentic IDE to orchestrate 100+ coding agents in parallel. Run an
- millionco/react-doctor [skill] *14990* ['product-stars'] items=1 - Your agent writes bad React. This catches it
- kyegomez/OpenMythos [plugin] *14912*  items=1 - A theoretical reconstruction of the Claude Mythos architecture, built from first
- NevaMind-AI/memU [skill] *14519* ['product-stars'] items=1 - Personal memory across agents

## Random sample of 20 watch repos (of 458)
- jeremylongshore/excel-analyst-pro-skill-md [plugin] *57*  items=1 - Professional financial modeling toolkit for Claude Code with auto-invoked Skills reasons=['fails: license (NOASSERTION)'] src=['topic']
- sethblack/black-seo-analyzer [mcp-server] *60*  items=1 - Audit a page or crawl a whole site for technical SEO issues, locally. Compares c reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- eyaltoledano/claude-task-master [marketplace] *28184*  items=1 - An AI-powered task-management system you can drop into Cursor, Lovable, Windsurf reasons=['fails: pushed<=90d (164)', 'fails: license (NOASSERTION)'] src=['topic']
- rosasynthesiz/flstudio-mcp [mcp-server] *75*  items=1 - Control FL Studio with Claude: in-DAW mixing, diagnosis, routing, and compositio reasons=['fails: pushed<=90d (98)'] src=['mcp-registry']
- getsentry/toolkit [mcp-server] *919*  items=1 - MCP server for Sentry - error monitoring, issue tracking, and debugging for AI a reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- proyecto26/system-design-skills [marketplace] *85*  items=1 - A divide-and-conquer wiki of system-design skills for Claude Code — reason about reasons=['fails: pushed<=90d (129)'] src=['topic']
- aldefy/compose-skill [marketplace] *596*  items=1 - Jetpack Compose Agent Skill — AI-powered coding guidance with actual androidx/an reasons=['fails: license (NOASSERTION)'] src=['topic']
- rasinmuhammed/misata [mcp-server] *69*  items=1 - Local, offline: multi-table synthetic data with joins that hold and exact totals reasons=['no corroborating signal'] src=['mcp-registry']
- Arize-ai/phoenix [marketplace] *11770* ['product-stars'] items=1 - AI Observability & Evaluation reasons=['fails: license (NOASSERTION)'] src=['topic']
- LichAmnesia/lich-skills [plugin,marketplace] *234*  items=2 - skills-map router (picks which skill to use) + go-no-go Stage 0 gate (NO-GO is t reasons=['fails: pushed<=90d (122)'] src=['code', 'marketplace-expansion']
- getsentry/warden [plugin,marketplace] *417*  items=2 - Your code is under new management. Agents that review your code. reasons=['fails: license (NOASSERTION)'] src=['code', 'marketplace-expansion']
- kvoltmer/Audionaut [mcp-server] *246*  items=1 - Edit Audionaut multitrack audio projects: cut, arrange, fade, analyse, auto-edit reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- Rito-w/skills-manager [skill] *197*  items=1 - A cross-platform skills manager for AI IDEs. Search marketplace, download locall reasons=['fails: pushed<=90d (97)', 'fails: license (None)'] src=['topic']
- max-sixty/worktrunk [marketplace] *9145*  items=1 - Worktrunk is a CLI for Git worktree management, designed for parallel AI agent w reasons=['fails: license (NOASSERTION)'] src=['topic']
- modelcontextprotocol/registry [mcp-server] *7333*  items=7 - Check how to contact a business website, and whether that contact path actually  reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- Dicklesworthstone/destructive_command_guard [skill] *6125* ['product-stars'] items=1 - The Destructive Command Guard (dcg) is for blocking dangerous git and shell comm reasons=['fails: license (NOASSERTION)'] src=['topic']
- kentcdodds/kody [mcp-server] *754*  items=1 - Your agents' cloud. MCP server with search, execute, packages, jobs, secrets, an reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- wakatime/claude-code-wakatime [plugin,marketplace] *93*  items=3 - Track how much time you spend using Claude Code to AI-code reasons=['fails: pushed<=90d (91)'] src=['code', 'marketplace-expansion']
- Austin1serb/Anthropic-Leaked-Source-Code [skill] *573*  items=1 - CLAUDE LEAK - Full Claude Leaked Source Code reasons=['fails: pushed<=90d (118)', 'fails: license (None)'] src=['topic']
- V-Songbird/hush [plugin] *51*  items=1 - Quieter sessions for Claude Code: less narration, shorter tool output and concis reasons=['no corroborating signal'] src=['topic']

## Errors
- graphql: HTTP 403 secondary rate limit, waiting 60s (retry 1/4)

## Rate limit
- REST calls this run (uncached): {"core": 11, "search": 41}; last seen: {"core": {"remaining": "4989", "limit": "5000"}, "search": {"remaining": "8", "limit": "30"}}
- GraphQL: 118 calls, cost 93, remaining 4911/5000, stopped early: False
- REST stopped early: False
- repos lacking metadata: 3462; enriched this run: 28165