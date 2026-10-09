# Catalog report 2026-10-09
Mode: **token**; run time 724s
Repos (deduped): 2918; flat entries before dedup: 20282

## Tier x type BEFORE dedup (flat entries)
- new/mcp-server: 11309
- listed/plugin: 2284
- watch/mcp-server: 1970
- verified/mcp-server: 1067
- watch/skill: 496
- verified/skill: 449
- watch/marketplace: 380
- official/plugin: 376
- verified/marketplace: 313
- watch/plugin: 308
- verified/plugin: 256
- watch/agent: 198
- verified/collection: 171
- anthropic/plugin: 165
- new/marketplace: 148
- new/skill: 140
- new/plugin: 103
- verified/agent: 42
- new/agent: 35
- anthropic/marketplace: 14
- anthropic/collection: 4
- anthropic/agent: 1
- watch/collection: 1

## Tier AFTER dedup (repos)
- verified: 1612
- watch: 459
- official: 256
- new: 244
- anthropic: 175
- listed: 172

## Type AFTER dedup (items)
- mcp-server: 1343
- plugin: 1317
- skill: 729
- marketplace: 450
- collection: 105
- agent: 44

## Primary type AFTER dedup (repos)
- mcp-server: 895
- plugin: 873
- skill: 663
- marketplace: 381
- collection: 75
- agent: 31

## Repos by discovery source family
- topic: 1206
- mcp-registry: 1003
- anthropic: 481
- anthropic-org: 205
- code: 189
- curated: 128
- marketplace-expansion: 40

## Flags (all tiers)
- product-stars: 206
- star-spike: 8
- star-anomaly: 1

## star-anomaly by tier
- new: 1

## Metadata gaps
- repos without metadata: 181
- reasons: {'unfetched': 181}

## MCP-only repos excluded: 52
- assafelovic/gpt-researcher *29953* ['ai', 'python', 'agent', 'automation', 'research'] - An autonomous agent that conducts deep research on any data using any LLM provid
- pascalorg/editor *24744* ['3d', 'architecture', 'bim', 'cad', 'editor'] - Open-source 3D architectural editor with a local CLI, MCP tools, and practical w
- mrexodia/ida-pro-mcp *12539* ['ida-plugin', 'ida-pro', 'mcp', 'mcp-server', 'modelcontextprotocol'] - AI-powered reverse engineering assistant that bridges IDA Pro with language mode
- mcp-use/mcp-use *10733* ['mcp', 'model-context-protocol', 'apps-sdk', 'mcp-apps', 'mcp-inspector'] - The fullstack MCP framework to develop MCP Apps for ChatGPT / Claude & MCP Serve
- Agents365-ai/drawio-skill *10012* ['drawio', 'diagram', 'agent-skills', 'architecture-diagram', 'claude-code'] - Agent skill that turns natural language, code, Terraform/K8s, SQL, OpenAPI, Asyn
- 21st-dev/magic-mcp *5982* ['21st', 'claude', 'cursor', 'mcp', 'model-context-protocol'] - It's like v0, but in your Cursor / Claude Code / Windsurf: search 10,000+ React/
- jordan-gibbs/hyperresearch *3807* ['agents', 'agentskills', 'claude-code', 'deep-research', 'deep-research-agent'] - Convert Claude Code or Codex into the most intelligent Deep Research Agent. Coll
- taylorwilsdon/google_workspace_mcp *3307* ['ai', 'gmail', 'google-calendar', 'google-workspace', 'llm'] - Control Gmail, Google Calendar, Docs, Sheets, Slides, Chat, Forms, Tasks, Search
- redhat-et/ripwire *2423* ['ai-agents', 'claude', 'cli', 'coding-agents', 'context-engineering'] - The ripgrep of AI context: a zero-dependency C++23 CLI + MCP server for coding a
- duty1g/x64dbg-mcp-server *2411* ['ai-agents', 'ai-debugging', 'binary-analysis', 'claude', 'claude-code'] - x64dbg-MCP Server is a native MCP (Model Context Protocol) plugin for x64dbg tha
- alpic-ai/skybridge *2150* ['agent', 'ai', 'apps-sdk', 'chatgpt', 'claude'] - Skybridge is a full-stack TypeScript framework for MCP Apps and ChatGPT Apps. Ty
- jau123/MeiGen-AI-Design-MCP *1780* ['ai-image-generation', 'claude', 'claude-code', 'comfyui', 'mcp'] - Supports GPT Image 2, Seedance & ComfyUI, with a 1,400+ prompt library, carefull
- study8677/repobrain *1325* ['claude-code', 'codex-cli', 'developer-tools', 'mcp-server', 'windsurf'] - 🧠 RepoBrain (formerly Antigravity) — Give your repo a brain. ChatGPT for your co
- agentrq/agentrq *1141* ['agentic-ai', 'agentic-workflow', 'agents', 'task', 'task-manager'] - AgentRQ: Human-in-loop realtime conversational task manager for AI Agents. Self-
- vostride/agent-qa *902* ['playwright', 'end-to-end-testing', 'ai-testing', 'ai-agents', 'mcp'] - Open-source self-improving QA agent for software teams. A test harness with memo

## Degradation
- registry complete: True (410 pages, 40964 entries)
- MCP servers merged from the previous catalog (not re-fetched): 0
- GraphQL 403s: 1 (secondary rate limit: 1); retries: 1; queries that gave up: 0
- HTTP retries (5xx/network): 0
- repos with stale metadata reused from the previous catalog (meta_stale): 0

## MCP Registry
- {"pages": 410, "fetched": 40964, "kept": 40460, "dropped": 504, "bad": 0, "complete": true, "excluded_remote_only": 11227, "excluded_low_signal": 14887, "fallback_merged": 0, "records": 1003, "attached_existing": 111, "new_repo": 892, "remote_only": 0, "tiers": {"official": 24, "listed": 18, "verified": 724, "new": 91, "watch": 146}}

## Top 20 by trend_7d
- DietrichGebert/ponytail +7055 (4.65%) []
- mattpocock/skills +6756 (2.46%) []
- pbakaus/impeccable +4456 (6.0%) []
- affaan-m/ECC +4247 (1.57%) []
- rehan-remade/universal-modder +3650 (176.33%) ['star-spike']
- cathrynlavery/diagram-design +3644 (8.46%) []
- heygen-com/hyperframes +3478 (6.23%) ['product-stars']
- thedotmack/claude-mem +3464 (3.64%) []
- ayghri/i-have-adhd +2936 (5.55%) []
- tigerless-labs/autoharness +2870 (39.41%) ['star-spike']
- obra/superpowers +2209 (0.75%) []
- JuliusBrussee/caveman +1555 (1.43%) []
- Ryze-AI-Adgent/open-seo-mcp-skills +1462 (46.66%) ['star-spike']
- coreyhaines31/marketingskills +1428 (2.73%) []
- latent-spaces/brag +1400 (10.72%) []
- irinabuht12-oss/marketing-skills +964 (32.04%) ['star-spike']
- multica-ai/andrej-karpathy-skills +943 (0.44%) []
- michael-denyer/pstack-claude +899 (117.21%) ['star-spike']
- garrytan/gstack +881 (0.65%) []
- kaankiziltug/logo-design-skill +875 (57.83%) ['star-spike']

## Code search vs topic search
- repos found by code search: 189
- also in topic search: 8
- code-only: 165; tiers: {'watch': 68, 'verified': 85, 'new': 12}

## Top 30 by stars: anthropic
- anthropics/skills [marketplace,collection] *180031*  items=2 - Anthropic example skills
- anthropics/claude-code [marketplace,agent] *149759*  items=2 - Bundled plugins for Claude Code including Agent SDK development tools, PR review
- anthropics/financial-services [marketplace] *39023*  items=1 - 
- anthropics/claude-plugins-official [plugin,marketplace,collection] *37563*  items=3 - Directory of popular Claude Code extensions including development tools, product
- anthropics/knowledge-work-plugins [marketplace] *27366*  items=1 - 
- anthropics/claude-for-legal [marketplace] *9625*  items=1 - Reference agents, skills, and data connectors for the legal workflows we see mos
- anthropics/claude-code-action [collection] *9454*  items=1 - The official GitHub Action for running Claude Code in CI: mention @claude in iss
- anthropics/claude-code-security-review [collection] *6324*  items=1 - An official AI-powered security-review GitHub Action that uses Claude to analyze
- anthropics/claude-plugins-community [marketplace] *4593*  items=1 - 
- anthropics/commerce-agents [marketplace] *3187*  items=1 - Claude Commerce Agents: the commerce-builder plugin for building shopping and me
- anthropics/life-sciences [marketplace] *612*  items=1 - MCP servers and skills for life sciences research, data analysis, and discovery
- anthropics/k12-teacher-skills [marketplace] *559*  items=1 - Plugin marketplace for K-12 Education and Claude for Teachers.
- anthropics/healthcare [marketplace] *422*  items=1 - Claude for Healthcare — one plugin bundling payer, provider, pharma, and general
- anthropics/oncall-kit [marketplace] *211*  items=1 - 
- anthropics/claude-for-financial-advisors [plugin,marketplace] *96*  items=2 - Ready-to-run workflows for financial advisors in Claude Cowork, drawing live dat
- anthropics/claude-tag-plugins [marketplace] *58*  items=1 - Plugins that connect Claude Tag to common SaaS services, plus charting and confi
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
- obra/superpowers [plugin,skill] *296636*  items=3 - Superpowers teaches Claude brainstorming, subagent driven development with built
- mattpocock/skills [plugin] *281422*  items=2 - Matt Pocock's agent skills for real engineering — grilling, spec/ticket flows, T
- heygen-com/hyperframes [plugin] *59330* ['product-stars'] items=2 - HyperFrames by HeyGen. Write HTML, render video. Compositions, GSAP and runtime 
- ChromeDevTools/chrome-devtools-mcp [plugin,mcp-server] *53150*  items=3 - Control and inspect a live Chrome browser from your coding agent. Record perform
- confident-ai/deepeval [plugin] *18710* ['product-stars'] items=1 - Skills for adding DeepEval evaluations, tracing, datasets, Confident AI reports,
- huggingface/skills [plugin] *11151*  items=2 - Build, train, evaluate, and use open source AI models, datasets, and spaces.
- wonderwhy-er/DesktopCommanderMCP [plugin,mcp-server] *9971*  items=4 - MCP server for terminal commands, process management, and file operations across
- Eigenwise/atomic-agents [plugin,marketplace] *6273* ['product-stars'] items=3 - Comprehensive development workflow for building AI agents with the Atomic Agents
- exa-labs/exa-mcp-server [plugin,mcp-server] *5097*  items=3 - Exa AI web search, deep research, and content extraction. Provides MCP tools and
- NVIDIA/skills [plugin] *3545*  items=2 - Find the right NVIDIA skill for GPU acceleration, CUDA, AI agents, data loading,
- cloudflare/skills [plugin] *3016*  items=2 - Skills for the Cloudflare developer platform: Workers, Durable Objects, Agents S
- modelcontextprotocol/ext-apps [plugin] *2926*  items=3 - Skills for creating MCP Apps with the MCP Apps SDK
- aws/agent-toolkit-for-aws [plugin] *2830*  items=8 - Build, deploy, and operate AI agents on AWS. Skills for scaffolding agents with 
- expo/skills [plugin] *2685*  items=2 - Official Expo skills for building, deploying, upgrading, and debugging React Nat
- GoogleChrome/modern-web-guidance [plugin] *2453*  items=2 - Keep your coding agent up to date with the latest web best practices
- figma/mcp-server-guide [plugin,mcp-server] *2057*  items=4 - Figma design platform integration. Access design files, extract component inform
- MicrosoftDocs/mcp [plugin,mcp-server] *1937*  items=3 - Access official Microsoft documentation, API references, and code samples for Az
- stripe/ai [plugin,mcp-server] *1864*  items=3 - Stripe development plugin for Claude
- microsoft/azure-skills [plugin] *1553*  items=2 - Transform Claude into an Azure expert. This plugin integrates the Azure MCP serv
- atlassian/atlassian-mcp-server [plugin,mcp-server] *1087*  items=3 - Connect to Atlassian products including Jira and Confluence. Search and create i
- forcedotcom/sf-skills [plugin] *1065*  items=1 - Build Salesforce apps and agents using these core building blocks: metadata, Ape
- awslabs/agent-plugins [plugin] *915*  items=10 - Guide developers through adding maps, places search, geocoding, routing, and oth
- superdesigndev/superdesign-skill [plugin,skill] *635*  items=2 - Design or redesign frontend UI and marketing graphics on the Superdesign infinit
- duckdb/duckdb-skills [plugin] *604*  items=2 - DuckDB-powered skills for Claude Code: read any data file, attach and query Duck
- Shopify/Shopify-AI-Toolkit [plugin] *591*  items=2 - Shopify's AI Toolkit provides 18 development skills for building on the Shopify 
- ClickHouse/agent-skills [plugin] *544*  items=2 - 28 best practice rules for ClickHouse schema design, query optimization, and dat
- gitroomhq/postiz-agent [plugin] *508*  items=3 - Social media automation CLI for scheduling posts, managing integrations, uploadi
- makenotion/claude-code-notion-plugin [plugin] *491*  items=2 - Notion workspace integration. Search pages, create and update documents, manage 
- tavily-ai/skills [plugin] *488*  items=3 - Build AI applications with real-time web data using Tavily's search, extract, cr
- TheQtCompanyRnD/agent-skills [plugin] *469*  items=3 - Agentic engineering skills for Qt software development — Qt C++/QML code review,

## Top 30 by stars: listed
- DietrichGebert/ponytail [plugin] *158765*  items=2 - Lazy senior dev mode. Forces the simplest, shortest solution that actually works
- JuliusBrussee/caveman [plugin,skill] *110617*  items=2 - Auto-activation works differently per agent: Claude Code uses SessionStart hooks
- thedotmack/claude-mem [plugin,skill] *98656*  items=3 - Persistent memory system for Claude Code - seamlessly preserve context across se
- Egonex-AI/Understand-Anything [plugin,skill] *85697*  items=2 - Understand Anything is a Claude Code plugin that analyzes your project with a mu
- pbakaus/impeccable [plugin] *78725*  items=1 - Great design prompts require design vocabulary. Most people don't have it. You c
- mem0ai/mem0 [plugin] *66862* ['product-stars'] items=1 - Connect Mem0 to Claude to give your agent persistent memory across sessions. Cla
- mvanhorn/last30days-skill [plugin] *63786*  items=2 - last-30-days is a Claude Code skill that searches the web and delivers a structu
- coreyhaines31/marketingskills [plugin,skill] *53810*  items=3 - coreyhaines31
- DayuanJiang/next-ai-draw-io [plugin] *36149* ['product-stars'] items=1 - AI-powered Draw.io diagram generation with real-time browser preview. Create flo
- jarrodwatts/claude-hud [plugin,collection] *28415*  items=2 - Real-time statusline HUD for Claude Code - context health, tool activity, agent 
- alirezarezvani/claude-skills [plugin,skill] *27886*  items=2 - Playwright Pro turns your AI coding agent into a senior test automation engineer
- promptfoo/promptfoo [plugin] *25828*  items=1 - Teaches AI coding agents to create and maintain promptfoo eval suites. Encodes b
- mksglu/context-mode [plugin] *25780*  items=1 - MCP is the protocol for tool access. We're the virtualization layer for context.
- AgriciDaniel/claude-seo [plugin] *18569*  items=1 - Comprehensive SEO analysis plugin for Claude Code. Performs full site audits wit
- browser-use/browser-harness [plugin] *18362* ['product-stars'] items=1 - Open-source browser agent driven via CDP — direct browser control, 79K stars, YC
- Jeffallan/claude-skills [plugin,skill,collection] *11785*  items=3 - 66 specialized skills for full-stack development: 12 language experts (Python, T
- nicobailon/visual-explainer [plugin,collection] *10308*  items=3 - An agent skill that turns complex terminal output into styled HTML pages you act
- revfactory/harness [plugin,agent] *9141*  items=3 - Harness leverages Claude Code's agent team system to decompose complex tasks int
- Eventual-Inc/Daft [plugin] *5792* ['product-stars'] items=1 - Skills for working with Daft, a high-performance data engine for AI and multimod
- clidey/whodb [plugin] *5032* ['product-stars'] items=1 - Database management tools for Claude Code. Query databases, explore schemas, ana
- nyldn/claude-octopus [plugin] *4192*  items=2 - Multi-LLM orchestration for Claude Code and Cowork. Coordinates 8 AI providers (
- giancarloerra/SocratiCode [plugin,mcp-server] *3336*  items=2 - Enterprise-grade (40m+ lines) codebase intelligence in a zero-setup, private and
- Chachamaru127/claude-code-harness [plugin,agent] *3158*  items=2 - Autonomous Plan → Work → Review cycle for Claude Code. Go-native engine with 25×
- nizos/tdd-guard [plugin,collection] *2361*  items=2 - Enforces Test-Driven Development by intercepting file operations in Claude Code.
- AgriciDaniel/claude-blog [plugin] *2346*  items=1 - AI-powered blog creation and optimization skill with 20 commands, 4 specialized 
- severity1/claude-code-prompt-improver [plugin] *1943*  items=1 - Intelligent prompt optimization using skill-based architecture. Enriches vague p
- AminForou/mcp-gsc [plugin] *1880*  items=1 - Connect Google Search Console to Claude Code. Query rankings, inspect URLs, audi
- codeaholicguy/ai-devkit [plugin] *1643*  items=1 - A structured software development toolkit that helps Claude Code follow senior-e
- activeloopai/hivemind [plugin,skill,collection] *1623*  items=5 - Cloud-backed persistent memory for Claude Code powered by Deeplake. Automaticall
- kenryu42/cc-safety-net [plugin,collection] *1583*  items=3 - Block destructive git and filesystem commands before execution

## Top 30 by stars: verified
- affaan-m/ECC [collection] *275502*  items=1 - Top-notch, well-written resources covering "just about everything" from core eng
- multica-ai/andrej-karpathy-skills [collection] *217517*  items=1 - A drop-in CLAUDE.md distilling four behavioral guidelines for LLM-assisted codin
- firecrawl/firecrawl [skill] *189748* ['product-stars'] items=1 - Supercharge your AI agents with data from the web and beyond. Building the libra
- vercel/next.js [marketplace] *143227* ['product-stars'] items=1 - The React Framework
- garrytan/gstack [agent] *135668*  items=1 - Garry Tan's (Y Combinator) Claude Code setup and "open source software factory" 
- nextlevelbuilder/ui-ux-pro-max-skill [marketplace] *134022*  items=1 - An AI skill that provides design intelligence for building professional UI/UX ac
- browser-use/browser-use [mcp-server] *117336*  items=1 - Control a real Chrome browser to complete any task: fill forms, extract data, bo
- addyosmani/agent-skills [marketplace] *103467*  items=1 - Production-grade engineering skills for AI coding agents.
- nexu-io/open-design [marketplace] *100085*  items=1 - 🎨 Best DeepSeek Harness Design Plugin. The open-source Claude Design alternative
- paperclipai/paperclip [mcp-server] *98939*  items=1 - Trending hip-hop artist momentum scores across four cultural dimensions.
- ruvnet/RuView [marketplace] *96972*  items=1 - π RuView turns commodity WiFi signals into real-time spatial intelligence, vital
- Leonxlnx/taste-skill [marketplace] *93886*  items=1 - Taste-Skill - gives your AI good taste. stops the AI from generating boring, gen
- storybookjs/storybook [marketplace] *91208* ['product-stars'] items=1 - Storybook is the industry standard workshop for building, documenting, and testi
- koala73/worldmonitor [skill,mcp-server] *88101* ['product-stars'] items=2 - Real-time global intelligence dashboard. AI-powered news aggregation, geopolitic
- D4Vinci/Scrapling [mcp-server] *86416*  items=1 - Web scraping with stealth HTTP, real browsers, and Cloudflare bypass. CSS select
- bytedance/deer-flow [skill] *83522*  items=1 - An open-source long-horizon SuperAgent harness that researches, codes, and creat
- netdata/netdata [mcp-server] *80852*  items=1 - Real-time infrastructure monitoring with metrics, logs, alerts, and ML-based ano
- tt-a1i/archify [skill,collection] *80397*  items=2 - An Agent Skill for Claude Code that generates interactive architecture, workflow
- shareAI-lab/learn-claude-code [collection] *78196*  items=1 - A really interesting analysis of how coding agents like Claude Code are designed
- ComposioHQ/awesome-claude-skills [skill] *76721*  items=1 - A curated list of awesome Claude Skills, resources, and tools for customizing Cl
- headroomlabs-ai/headroom [marketplace] *74776*  items=1 - Compress tool outputs, logs, files, and RAG chunks before they reach the LLM. 20
- thedaviddias/Front-End-Checklist [marketplace,mcp-server] *74412* ['product-stars'] items=2 - 🗂 The essential checklist for modern web development, for humans and AI agents
- ruvnet/ruflo [marketplace,mcp-server] *74155*  items=2 - 🌊 The original agent harness. Deploy intelligent multi-player swarms, coordinate
- career-ops-hq/career-ops [marketplace] *73851*  items=1 - Open-source AI job search agent and job finder: scan job boards, score each job 
- shanraisshan/claude-code-best-practice [skill] *67285*  items=1 - from vibe coding to agentic engineering - practice makes claude perfect
- usestrix/strix [skill] *67256* ['product-stars'] items=1 - Open-source AI penetration testing tool to find and fix your app’s vulnerabiliti
- xtekky/gpt4free [skill] *66772* ['product-stars'] items=1 - The official gpt4free repository | various collection of powerful language model
- ZhuLinsen/daily_stock_analysis [skill] *66044* ['product-stars'] items=1 - LLM 驱动的多市场股票智能分析系统：多源行情、实时新闻、决策看板与自动推送，支持零成本定时运行。 LLM-powered multi-market stock
- rohitg00/ai-engineering-from-scratch [skill] *65782* ['product-stars'] items=1 - Learn it. Build it. Ship it for others.
- calesthio/OpenMontage [skill] *65377*  items=1 - World's first open-source, agentic video production system. 12 production pipeli

## Top 30 by stars: watch
- f/prompts.chat [marketplace] *172366* ['product-stars'] items=1 - f.k.a. Awesome ChatGPT Prompts. Share, discover, and collect prompts from the co
- opendatalab/MinerU [skill] *81302* ['product-stars'] items=1 - Transforms complex documents like PDFs and Office docs into LLM-ready markdown/J
- code-yeongyu/oh-my-openagent [skill] *69911* ['product-stars'] items=1 - OmO: Just type "mass ulw" keyword with your prompt. Now you are the master of gr
- bmad-code-org/BMAD-METHOD [skill] *53939* ['product-stars'] items=1 - Breakthrough Method for Agile Ai Driven Development
- Imbad0202/academic-research-skills [marketplace] *50921*  items=1 - Academic Research Skills for Claude Code: research → write → review → revise → f
- tldraw/tldraw [mcp-server] *50820*  items=1 - Draw and visually collaborate with your agents on tldraw's canvas.
- metabase/metabase [mcp-server] *49587*  items=1 - Lets AI clients search, explore, query, and visualize data in a Metabase instanc
- abhigyanpatwari/GitNexus [marketplace] *47779* ['product-stars'] items=1 - GitNexus: The Zero-Server Code Intelligence Engine
- PostHog/posthog [mcp-server] *40198*  items=1 - Official PostHog MCP Server for product analytics, feature flags, experiments, a
- openai/codex-plugin-cc [marketplace] *33972*  items=1 - Use Codex from Claude Code to review code or delegate tasks.
- zarazhangrui/frontend-slides [marketplace] *30309*  items=1 - Create beautiful slides on the web using a coding agent's frontend skills
- oraios/serena [mcp-server] *30111*  items=1 - A powerful toolkit for coding, providing semantic retrieval and editing capabili
- eyaltoledano/claude-task-master [marketplace] *28185*  items=1 - An AI-powered task-management system you can drop into Cursor, Lovable, Windsurf
- openai/skills [skill] *27941*  items=1 - Skills Catalog for Codex
- vercel/ai [skill] *27174* ['product-stars'] items=1 - The AI Toolkit for TypeScript. From the creators of Next.js, the AI SDK is a fre
- clockworklabs/SpacetimeDB [marketplace] *25263* ['product-stars'] items=1 - Development at the speed of light
- different-ai/openwork [mcp-server] *23966*  items=1 - Your OpenWork org's skills, plugins, workflows, and connections through one OAut
- HKUDS/AI-Trader [skill] *22700* ['product-stars'] items=1 - "AI-Trader: 100% Fully-Automated Agent-Native Trading"
- screenpipe/screenpipe [mcp-server] *21883*  items=1 - Search your local screen recordings, audio transcripts, and computer activity fr
- getpaseo/paseo [skill] *20137*  items=1 - Orchestrate multiple coding agents from desktop and mobile
- agent0ai/agent-zero [skill] *19399* ['product-stars'] items=1 - Agent Zero AI framework
- Canner/WrenAI [skill] *17823* ['product-stars'] items=1 - GenBI (Generative BI) for AI agents, an open-source, governed text-to-SQL throug
- architecture-decision-record/architecture-decision-record [skill] *17122* ['product-stars'] items=1 - Architecture decision record (ADR) examples for software planning, IT leadership
- composio-community/awesome-codex-skills [skill] *16809*  items=1 - A curated list of practical Codex skills for automating workflows across the Cod
- longbridge/gpui-kit [skill] *16565* ['product-stars'] items=1 - Rust GUI components for building fantastic cross-platform desktop application by
- travisvn/awesome-claude-skills [skill] *15331*  items=1 - A curated list of awesome Claude Skills, resources, and tools for customizing Cl
- superset-sh/superset [marketplace] *14996* ['product-stars'] items=1 - Superset is an agentic IDE to orchestrate 100+ coding agents in parallel. Run an
- millionco/react-doctor [skill] *14978* ['product-stars'] items=1 - Your agent writes bad React. This catches it
- kyegomez/OpenMythos [plugin] *14913*  items=1 - A theoretical reconstruction of the Claude Mythos architecture, built from first
- NevaMind-AI/memU [skill] *14517* ['product-stars'] items=1 - Personal memory across agents

## Random sample of 20 watch repos (of 459)
- ivan-magda/claude-code-plugin-template [marketplace] *70*  items=1 - GitHub template for creating Claude Code plugin marketplaces. Includes plugin sc reasons=['fails: pushed<=90d (103)'] src=['topic']
- screenpipe/screenpipe [mcp-server] *21883*  items=1 - Search your local screen recordings, audio transcripts, and computer activity fr reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- eyaltoledano/claude-task-master [marketplace] *28185*  items=1 - An AI-powered task-management system you can drop into Cursor, Lovable, Windsurf reasons=['fails: pushed<=90d (163)', 'fails: license (NOASSERTION)'] src=['topic']
- rasinmuhammed/misata [mcp-server] *69*  items=1 - Local, offline: multi-table synthetic data with joins that hold and exact totals reasons=['no corroborating signal'] src=['mcp-registry']
- ethbak/icon-composer-mcp [mcp-server] *57*  items=1 - CLI and MCP server for creating Apple .icon bundles with Liquid Glass effects (i reasons=['no corroborating signal'] src=['mcp-registry']
- DogInfantry/claude-skill-management-consultant-B1 [marketplace] *132*  items=1 - Claude skill & plugin: turn Claude (or any LLM) into an MBB-grade management con reasons=['fails: license (NOASSERTION)'] src=['topic']
- aldefy/compose-skill [marketplace] *596*  items=1 - Jetpack Compose Agent Skill — AI-powered coding guidance with actual androidx/an reasons=['fails: license (NOASSERTION)'] src=['topic']
- ralforion/orionbelt-semantic-layer [mcp-server] *100*  items=1 - API-first semantic layer MCP server compiling YAML models into dialect-specific  reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- Arize-ai/phoenix [marketplace] *11755* ['product-stars'] items=1 - AI Observability & Evaluation reasons=['fails: license (NOASSERTION)'] src=['topic']
- getsentry/warden [plugin,marketplace] *416*  items=2 - Your code is under new management. Agents that review your code. reasons=['fails: license (NOASSERTION)'] src=['code', 'marketplace-expansion']
- jdforsythe/forge [plugin,marketplace] *151*  items=2 - Skills for creating high quality skills and agents reasons=['fails: pushed<=90d (97)'] src=['code', 'marketplace-expansion']
- kushneryk/join.cloud [mcp-server] *65*  items=1 - Collaboration rooms for AI agents. Real-time messaging + standard git. reasons=['no corroborating signal'] src=['mcp-registry']
- BioTender-max/awesome-bio-agent-skills [skill] *198*  items=1 - A curated collection of AI agent skills for biomedical research, covering genomi reasons=['fails: pushed<=90d (99)', 'fails: license (NOASSERTION)'] src=['topic']
- getpaseo/paseo [skill] *20137*  items=1 - Orchestrate multiple coding agents from desktop and mobile reasons=['fails: license (NOASSERTION)'] src=['topic']
- frumu-ai/tandem [mcp-server] *121*  items=1 - Remote MCP server for Tandem docs, install guides, SDKs, workflows, and agent se reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- Dicklesworthstone/destructive_command_guard [skill] *6117* ['product-stars'] items=1 - The Destructive Command Guard (dcg) is for blocking dangerous git and shell comm reasons=['fails: license (NOASSERTION)'] src=['topic']
- jumodada/Drissionpage-MCP-Server [mcp-server] *487*  items=1 - Local browser automation for MCP clients powered by DrissionPage. reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- intellectronica/agent-skills [plugin,marketplace] *295*  items=24 - @intellectronica's agent skills reasons=['fails: pushed<=90d (166)'] src=['code', 'marketplace-expansion']
- Arindam200/cc-lens [skill] *598*  items=1 - Local analytics dashboard for Claude Code. No cloud, no telemetry. reasons=['fails: pushed<=90d (103)'] src=['topic']
- Koroqe/claude-code-sdlc [marketplace] *52*  items=1 - Turn Claude Code into an autonomous software development team — 16 specialized a reasons=['no corroborating signal'] src=['topic']

## Errors
- marketplace obra/claude-session-driver: no plugins list
- graphql: HTTP 403 secondary rate limit, waiting 60s (retry 1/4)

## Rate limit
- REST calls this run (uncached): {"core": 5, "search": 41}; last seen: {"core": {"remaining": "4995", "limit": "5000"}, "search": {"remaining": "8", "limit": "30"}}
- GraphQL: 61 calls, cost 54, remaining 4945/5000, stopped early: False
- REST stopped early: False
- repos lacking metadata: 3455; enriched this run: 28381