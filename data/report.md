# Catalog report 2026-10-08
Mode: **token**; run time 2904s
Repos (deduped): 2861; flat entries before dedup: 20120

## Tier x type BEFORE dedup (flat entries)
- new/mcp-server: 11161
- listed/plugin: 2284
- watch/mcp-server: 1999
- verified/mcp-server: 1031
- watch/skill: 509
- verified/skill: 440
- watch/marketplace: 385
- official/plugin: 376
- watch/plugin: 308
- verified/marketplace: 301
- verified/plugin: 258
- watch/agent: 197
- verified/collection: 171
- anthropic/plugin: 165
- new/marketplace: 148
- new/skill: 136
- new/plugin: 102
- verified/agent: 42
- new/agent: 36
- anthropic/marketplace: 14
- anthropic/collection: 4
- anthropic/agent: 1
- watch/collection: 1

## Tier AFTER dedup (repos)
- verified: 1552
- watch: 473
- official: 256
- new: 243
- anthropic: 175
- listed: 162

## Type AFTER dedup (items)
- plugin: 1312
- mcp-server: 1296
- skill: 729
- marketplace: 450
- collection: 99
- agent: 43

## Primary type AFTER dedup (repos)
- plugin: 867
- mcp-server: 849
- skill: 664
- marketplace: 382
- collection: 69
- agent: 30

## Repos by discovery source family
- topic: 1207
- mcp-registry: 957
- anthropic: 471
- anthropic-org: 205
- code: 194
- curated: 121
- marketplace-expansion: 40

## Flags (all tiers)
- product-stars: 235
- star-anomaly: 58

## star-anomaly by tier
- watch: 24
- new: 18
- anthropic: 15
- official: 1

## Metadata gaps
- repos without metadata: 190
- reasons: {'unfetched': 190}

## MCP-only repos excluded: 51
- assafelovic/gpt-researcher *29953* ['ai', 'python', 'agent', 'automation', 'research'] - An autonomous agent that conducts deep research on any data using any LLM provid
- pascalorg/editor *24721* ['3d', 'architecture', 'bim', 'cad', 'editor'] - Open-source 3D architectural editor with a local CLI, MCP tools, and practical w
- mrexodia/ida-pro-mcp *12539* ['ida-plugin', 'ida-pro', 'mcp', 'mcp-server', 'modelcontextprotocol'] - AI-powered reverse engineering assistant that bridges IDA Pro with language mode
- mcp-use/mcp-use *10730* ['mcp', 'model-context-protocol', 'apps-sdk', 'mcp-apps', 'mcp-inspector'] - The fullstack MCP framework to develop MCP Apps for ChatGPT / Claude & MCP Serve
- Agents365-ai/drawio-skill *9993* ['drawio', 'diagram', 'agent-skills', 'architecture-diagram', 'claude-code'] - Agent skill that turns natural language, code, Terraform/K8s, SQL, OpenAPI, Asyn
- 21st-dev/magic-mcp *5982* ['21st', 'claude', 'cursor', 'mcp', 'model-context-protocol'] - It's like v0, but in your Cursor / Claude Code / Windsurf: search 10,000+ React/
- jordan-gibbs/hyperresearch *3803* ['agents', 'agentskills', 'claude-code', 'deep-research', 'deep-research-agent'] - Convert Claude Code or Codex into the most intelligent Deep Research Agent. Coll
- taylorwilsdon/google_workspace_mcp *3302* ['ai', 'gmail', 'google-calendar', 'google-workspace', 'llm'] - Control Gmail, Google Calendar, Docs, Sheets, Slides, Chat, Forms, Tasks, Search
- redhat-et/ripwire *2423* ['ai-agents', 'claude', 'cli', 'coding-agents', 'context-engineering'] - The ripgrep of AI context: a zero-dependency C++23 CLI + MCP server for coding a
- duty1g/x64dbg-mcp-server *2396* ['ai-agents', 'ai-debugging', 'binary-analysis', 'claude', 'claude-code'] - x64dbg-MCP Server is a native MCP (Model Context Protocol) plugin for x64dbg tha
- alpic-ai/skybridge *2150* ['agent', 'ai', 'apps-sdk', 'chatgpt', 'claude'] - Skybridge is a full-stack TypeScript framework for MCP Apps and ChatGPT Apps. Ty
- jau123/MeiGen-AI-Design-MCP *1781* ['ai-image-generation', 'claude', 'claude-code', 'comfyui', 'mcp'] - Supports GPT Image 2, Seedance & ComfyUI, with a 1,400+ prompt library, carefull
- agentrq/agentrq *1139* ['agentic-ai', 'agentic-workflow', 'agents', 'task', 'task-manager'] - AgentRQ: Human-in-loop realtime conversational task manager for AI Agents. Self-
- vostride/agent-qa *902* ['playwright', 'end-to-end-testing', 'ai-testing', 'ai-agents', 'mcp'] - Open-source self-improving QA agent for software teams. A test harness with memo
- CodeAbra/iai-personal-memory-engine *901* ['claude', 'claude-code', 'local-first', 'mcp', 'mcp-server'] - A cyber brain for your AI. It never forgets a detail, remembers exactly what you

## Degradation
- registry complete: True (408 pages, 40752 entries)
- MCP servers merged from the previous catalog (not re-fetched): 0
- GraphQL 403s: 0 (secondary rate limit: 0); retries: 5; queries that gave up: 0
- HTTP retries (5xx/network): 0
- repos with stale metadata reused from the previous catalog (meta_stale): 0

## MCP Registry
- {"pages": 408, "fetched": 40752, "kept": 40259, "dropped": 493, "bad": 0, "complete": true, "excluded_remote_only": 11242, "excluded_low_signal": 14826, "fallback_merged": 0, "records": 957, "attached_existing": 111, "new_repo": 846, "remote_only": 0, "tiers": {"official": 24, "listed": 18, "verified": 689, "new": 89, "watch": 137}}

## Top 20 by trend_7d
- n/a (no snapshot >=7 days old yet)

## Code search vs topic search
- repos found by code search: 194
- also in topic search: 8
- code-only: 169; tiers: {'watch': 68, 'verified': 87, 'new': 14}

## Top 30 by stars: anthropic
- anthropics/skills [marketplace,collection] *180085*  items=2 - Anthropic example skills
- anthropics/claude-code [marketplace,agent] *149803*  items=2 - Bundled plugins for Claude Code including Agent SDK development tools, PR review
- anthropics/financial-services [marketplace] *39023* ['product-stars'] items=1 - 
- anthropics/claude-plugins-official [plugin,marketplace,collection] *37513*  items=3 - Directory of popular Claude Code extensions including development tools, product
- anthropics/knowledge-work-plugins [marketplace] *27366*  items=1 - 
- anthropics/claude-for-legal [marketplace] *9625* ['star-anomaly'] items=1 - Reference agents, skills, and data connectors for the legal workflows we see mos
- anthropics/claude-code-action [collection] *9443*  items=1 - The official GitHub Action for running Claude Code in CI: mention @claude in iss
- anthropics/claude-code-security-review [collection] *6318*  items=1 - An official AI-powered security-review GitHub Action that uses Claude to analyze
- anthropics/claude-plugins-community [marketplace] *4565*  items=1 - 
- anthropics/commerce-agents [marketplace] *3187* ['star-anomaly'] items=1 - Claude Commerce Agents: the commerce-builder plugin for building shopping and me
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
- obra/superpowers [plugin,skill] *296461*  items=3 - Superpowers teaches Claude brainstorming, subagent driven development with built
- mattpocock/skills [plugin] *279964*  items=2 - Matt Pocock's agent skills for real engineering — grilling, spec/ticket flows, T
- heygen-com/hyperframes [plugin] *58684* ['product-stars'] items=2 - HyperFrames by HeyGen. Write HTML, render video. Compositions, GSAP and runtime 
- ChromeDevTools/chrome-devtools-mcp [plugin,mcp-server] *53094* ['product-stars'] items=3 - Control and inspect a live Chrome browser from your coding agent. Record perform
- confident-ai/deepeval [plugin] *18689* ['product-stars'] items=1 - Skills for adding DeepEval evaluations, tracing, datasets, Confident AI reports,
- huggingface/skills [plugin] *11148*  items=2 - Build, train, evaluate, and use open source AI models, datasets, and spaces.
- wonderwhy-er/DesktopCommanderMCP [plugin,mcp-server] *9958*  items=4 - MCP server for terminal commands, process management, and file operations across
- Eigenwise/atomic-agents [plugin,marketplace] *6273* ['product-stars'] items=3 - Comprehensive development workflow for building AI agents with the Atomic Agents
- exa-labs/exa-mcp-server [plugin,mcp-server] *5092* ['product-stars'] items=3 - Exa AI web search, deep research, and content extraction. Provides MCP tools and
- NVIDIA/skills [plugin] *3539*  items=2 - Find the right NVIDIA skill for GPU acceleration, CUDA, AI agents, data loading,
- cloudflare/skills [plugin] *3005*  items=2 - Skills for the Cloudflare developer platform: Workers, Durable Objects, Agents S
- modelcontextprotocol/ext-apps [plugin] *2916*  items=3 - Skills for creating MCP Apps with the MCP Apps SDK
- aws/agent-toolkit-for-aws [plugin] *2826*  items=8 - Build, deploy, and operate AI agents on AWS. Skills for scaffolding agents with 
- expo/skills [plugin] *2681*  items=2 - Official Expo skills for building, deploying, upgrading, and debugging React Nat
- GoogleChrome/modern-web-guidance [plugin] *2407*  items=2 - Keep your coding agent up to date with the latest web best practices
- figma/mcp-server-guide [plugin,mcp-server] *2053*  items=4 - Figma design platform integration. Access design files, extract component inform
- MicrosoftDocs/mcp [plugin,mcp-server] *1937*  items=3 - Access official Microsoft documentation, API references, and code samples for Az
- stripe/ai [plugin,mcp-server] *1863*  items=3 - Stripe development plugin for Claude
- microsoft/azure-skills [plugin] *1546*  items=2 - Transform Claude into an Azure expert. This plugin integrates the Azure MCP serv
- atlassian/atlassian-mcp-server [plugin,mcp-server] *1085*  items=3 - Connect to Atlassian products including Jira and Confluence. Search and create i
- forcedotcom/sf-skills [plugin] *1060*  items=1 - Build Salesforce apps and agents using these core building blocks: metadata, Ape
- awslabs/agent-plugins [plugin] *915*  items=10 - Guide developers through adding maps, places search, geocoding, routing, and oth
- superdesigndev/superdesign-skill [plugin,skill] *630*  items=2 - Design or redesign frontend UI and marketing graphics on the Superdesign infinit
- duckdb/duckdb-skills [plugin] *601*  items=2 - DuckDB-powered skills for Claude Code: read any data file, attach and query Duck
- Shopify/Shopify-AI-Toolkit [plugin] *589*  items=2 - Shopify's AI Toolkit provides 18 development skills for building on the Shopify 
- ClickHouse/agent-skills [plugin] *544*  items=2 - 28 best practice rules for ClickHouse schema design, query optimization, and dat
- gitroomhq/postiz-agent [plugin] *506*  items=3 - Social media automation CLI for scheduling posts, managing integrations, uploadi
- makenotion/claude-code-notion-plugin [plugin] *491*  items=2 - Notion workspace integration. Search pages, create and update documents, manage 
- tavily-ai/skills [plugin] *487*  items=3 - Build AI applications with real-time web data using Tavily's search, extract, cr
- TheQtCompanyRnD/agent-skills [plugin] *466*  items=3 - Agentic engineering skills for Qt software development — Qt C++/QML code review,

## Top 30 by stars: listed
- DietrichGebert/ponytail [plugin] *157785*  items=2 - Lazy senior dev mode. Forces the simplest, shortest solution that actually works
- JuliusBrussee/caveman [plugin,skill] *110450*  items=2 - Auto-activation works differently per agent: Claude Code uses SessionStart hooks
- thedotmack/claude-mem [plugin,skill] *97885*  items=3 - Persistent memory system for Claude Code - seamlessly preserve context across se
- Egonex-AI/Understand-Anything [plugin,skill] *85544*  items=2 - Understand Anything is a Claude Code plugin that analyzes your project with a mu
- pbakaus/impeccable [plugin] *78332* ['product-stars'] items=1 - Great design prompts require design vocabulary. Most people don't have it. You c
- mem0ai/mem0 [plugin] *66795* ['product-stars'] items=1 - Connect Mem0 to Claude to give your agent persistent memory across sessions. Cla
- mvanhorn/last30days-skill [plugin] *63713*  items=2 - last-30-days is a Claude Code skill that searches the web and delivers a structu
- coreyhaines31/marketingskills [plugin,skill] *53620*  items=3 - coreyhaines31
- DayuanJiang/next-ai-draw-io [plugin] *36136* ['product-stars'] items=1 - AI-powered Draw.io diagram generation with real-time browser preview. Create flo
- jarrodwatts/claude-hud [plugin,collection] *28384*  items=2 - Real-time statusline HUD for Claude Code - context health, tool activity, agent 
- alirezarezvani/claude-skills [plugin,skill] *27829*  items=2 - Playwright Pro turns your AI coding agent into a senior test automation engineer
- promptfoo/promptfoo [plugin] *25801*  items=1 - Teaches AI coding agents to create and maintain promptfoo eval suites. Encodes b
- mksglu/context-mode [plugin] *25650*  items=1 - MCP is the protocol for tool access. We're the virtualization layer for context.
- AgriciDaniel/claude-seo [plugin] *18496*  items=1 - Comprehensive SEO analysis plugin for Claude Code. Performs full site audits wit
- browser-use/browser-harness [plugin] *18342* ['product-stars'] items=1 - Open-source browser agent driven via CDP — direct browser control, 79K stars, YC
- Jeffallan/claude-skills [plugin,skill,collection] *11767*  items=3 - 66 specialized skills for full-stack development: 12 language experts (Python, T
- nicobailon/visual-explainer [plugin,collection] *10291*  items=3 - An agent skill that turns complex terminal output into styled HTML pages you act
- revfactory/harness [plugin,agent] *9136*  items=3 - Harness leverages Claude Code's agent team system to decompose complex tasks int
- Eventual-Inc/Daft [plugin] *5791* ['product-stars'] items=1 - Skills for working with Daft, a high-performance data engine for AI and multimod
- clidey/whodb [plugin] *5029* ['product-stars'] items=1 - Database management tools for Claude Code. Query databases, explore schemas, ana
- nyldn/claude-octopus [plugin] *4184*  items=2 - Multi-LLM orchestration for Claude Code and Cowork. Coordinates 8 AI providers (
- giancarloerra/SocratiCode [plugin,mcp-server] *3336*  items=2 - Enterprise-grade (40m+ lines) codebase intelligence in a zero-setup, private and
- Chachamaru127/claude-code-harness [plugin,agent] *3154*  items=2 - Autonomous Plan → Work → Review cycle for Claude Code. Go-native engine with 25×
- nizos/tdd-guard [plugin,collection] *2359*  items=2 - Enforces Test-Driven Development by intercepting file operations in Claude Code.
- AgriciDaniel/claude-blog [plugin] *2342*  items=1 - AI-powered blog creation and optimization skill with 20 commands, 4 specialized 
- severity1/claude-code-prompt-improver [plugin] *1939*  items=1 - Intelligent prompt optimization using skill-based architecture. Enriches vague p
- AminForou/mcp-gsc [plugin] *1879*  items=1 - Connect Google Search Console to Claude Code. Query rankings, inspect URLs, audi
- codeaholicguy/ai-devkit [plugin] *1642*  items=1 - A structured software development toolkit that helps Claude Code follow senior-e
- activeloopai/hivemind [plugin,skill,collection] *1622*  items=5 - Cloud-backed persistent memory for Claude Code powered by Deeplake. Automaticall
- kenryu42/cc-safety-net [plugin,collection] *1582*  items=3 - Block destructive git and filesystem commands before execution

## Top 30 by stars: verified
- affaan-m/ECC [collection] *275043*  items=1 - Top-notch, well-written resources covering "just about everything" from core eng
- multica-ai/andrej-karpathy-skills [collection] *217479*  items=1 - A drop-in CLAUDE.md distilling four behavioral guidelines for LLM-assisted codin
- firecrawl/firecrawl [skill] *189748* ['product-stars'] items=1 - Supercharge your AI agents with data from the web and beyond. Building the libra
- vercel/next.js [marketplace] *143227* ['product-stars'] items=1 - The React Framework
- garrytan/gstack [agent] *135725*  items=1 - Garry Tan's (Y Combinator) Claude Code setup and "open source software factory" 
- nextlevelbuilder/ui-ux-pro-max-skill [marketplace] *134022*  items=1 - An AI skill that provides design intelligence for building professional UI/UX ac
- browser-use/browser-use [mcp-server] *117427*  items=1 - Control a real Chrome browser to complete any task: fill forms, extract data, bo
- addyosmani/agent-skills [marketplace] *102972*  items=1 - Production-grade engineering skills for AI coding agents.
- nexu-io/open-design [marketplace] *99911*  items=1 - 🎨 Best DeepSeek Harness Design Plugin. The open-source Claude Design alternative
- paperclipai/paperclip [mcp-server] *98550*  items=1 - Trending hip-hop artist momentum scores across four cultural dimensions.
- ruvnet/RuView [marketplace] *96845*  items=1 - π RuView turns commodity WiFi signals into real-time spatial intelligence, vital
- Leonxlnx/taste-skill [marketplace] *93575*  items=1 - Taste-Skill - gives your AI good taste. stops the AI from generating boring, gen
- storybookjs/storybook [marketplace] *91208* ['product-stars'] items=1 - Storybook is the industry standard workshop for building, documenting, and testi
- koala73/worldmonitor [skill,mcp-server] *88007* ['product-stars'] items=2 - Real-time global intelligence dashboard. AI-powered news aggregation, geopolitic
- D4Vinci/Scrapling [mcp-server] *86238*  items=1 - Web scraping with stealth HTTP, real browsers, and Cloudflare bypass. CSS select
- bytedance/deer-flow [skill] *83522*  items=1 - An open-source long-horizon SuperAgent harness that researches, codes, and creat
- netdata/netdata [mcp-server] *80838*  items=1 - Real-time infrastructure monitoring with metrics, logs, alerts, and ML-based ano
- tt-a1i/archify [skill,collection] *79397*  items=2 - An Agent Skill for Claude Code that generates interactive architecture, workflow
- shareAI-lab/learn-claude-code [collection] *78141*  items=1 - A really interesting analysis of how coding agents like Claude Code are designed
- ComposioHQ/awesome-claude-skills [skill] *76684*  items=1 - A curated list of awesome Claude Skills, resources, and tools for customizing Cl
- headroomlabs-ai/headroom [marketplace] *74617*  items=1 - Compress tool outputs, logs, files, and RAG chunks before they reach the LLM. 20
- thedaviddias/Front-End-Checklist [marketplace,mcp-server] *74399* ['product-stars'] items=2 - 🗂 The essential checklist for modern web development, for humans and AI agents
- ruvnet/ruflo [marketplace,mcp-server] *74093*  items=2 - 🌊 The original agent harness. Deploy intelligent multi-player swarms, coordinate
- career-ops-hq/career-ops [marketplace] *73742*  items=1 - Open-source AI job search agent and job finder: scan job boards, score each job 
- usestrix/strix [skill] *67256* ['product-stars'] items=1 - Open-source AI penetration testing tool to find and fix your app’s vulnerabiliti
- shanraisshan/claude-code-best-practice [skill] *67248*  items=1 - from vibe coding to agentic engineering - practice makes claude perfect
- xtekky/gpt4free [skill] *66772* ['product-stars'] items=1 - The official gpt4free repository | various collection of powerful language model
- ZhuLinsen/daily_stock_analysis [skill] *66044* ['product-stars'] items=1 - LLM 驱动的多市场股票智能分析系统：多源行情、实时新闻、决策看板与自动推送，支持零成本定时运行。 LLM-powered multi-market stock
- rohitg00/ai-engineering-from-scratch [skill] *65782* ['product-stars'] items=1 - Learn it. Build it. Ship it for others.
- calesthio/OpenMontage [skill] *65377*  items=1 - World's first open-source, agentic video production system. 12 production pipeli

## Top 30 by stars: watch
- f/prompts.chat [marketplace] *172366* ['product-stars'] items=1 - f.k.a. Awesome ChatGPT Prompts. Share, discover, and collect prompts from the co
- opendatalab/MinerU [skill] *81302* ['product-stars'] items=1 - Transforms complex documents like PDFs and Office docs into LLM-ready markdown/J
- code-yeongyu/oh-my-openagent [skill] *69885* ['product-stars'] items=1 - OmO: Just type "mass ulw" keyword with your prompt. Now you are the master of gr
- bmad-code-org/BMAD-METHOD [skill] *53939* ['product-stars'] items=1 - Breakthrough Method for Agile Ai Driven Development
- Imbad0202/academic-research-skills [marketplace] *50921*  items=1 - Academic Research Skills for Claude Code: research → write → review → revise → f
- tldraw/tldraw [mcp-server] *50801*  items=1 - Draw and visually collaborate with your agents on tldraw's canvas.
- metabase/metabase [mcp-server] *49571*  items=1 - Lets AI clients search, explore, query, and visualize data in a Metabase instanc
- abhigyanpatwari/GitNexus [marketplace] *47779* ['product-stars'] items=1 - GitNexus: The Zero-Server Code Intelligence Engine
- Yuan1z0825/nature-skills [skill] *46631* ['star-anomaly'] items=1 - 符合nature论文学术表达和科研绘图的Skill
- PostHog/posthog [mcp-server] *40182*  items=1 - Official PostHog MCP Server for product analytics, feature flags, experiments, a
- freestylefly/awesome-gpt-image-2 [marketplace] *34087* ['star-anomaly'] items=1 - Prompt as Code | GPT Image 2 / 2.5 提示词与案例库，530+ 个案例、20+ 套工业级模板与可复用 Skills，新增 2.5
- openai/codex-plugin-cc [marketplace] *33972*  items=1 - Use Codex from Claude Code to review code or delegate tasks.
- zarazhangrui/frontend-slides [marketplace] *30309*  items=1 - Create beautiful slides on the web using a coding agent's frontend skills
- oraios/serena [mcp-server] *30090*  items=1 - A powerful toolkit for coding, providing semantic retrieval and editing capabili
- Nutlope/hallmark [skill] *29769* ['star-anomaly'] items=1 - Anti-AI-slop design skill for Claude Code, Cursor, and Codex.
- browser-use/video-use [skill] *28435* ['star-anomaly', 'product-stars'] items=1 - Edit videos with coding agents
- eyaltoledano/claude-task-master [marketplace] *28185*  items=1 - An AI-powered task-management system you can drop into Cursor, Lovable, Windsurf
- openai/skills [skill] *27941*  items=1 - Skills Catalog for Codex
- vercel/ai [skill] *27174* ['product-stars'] items=1 - The AI Toolkit for TypeScript. From the creators of Next.js, the AI SDK is a fre
- cloudflare/security-audit-skill [skill] *26488* ['star-anomaly'] items=1 - A coding-agent skill for multi-phase security audits with independently verified
- clockworklabs/SpacetimeDB [marketplace] *25263* ['product-stars'] items=1 - Development at the speed of light
- alchaincyf/huashu-design [skill] *24689* ['star-anomaly'] items=1 - Huashu Design · HTML-native design skill for Claude Code · Claude Code 里 HTML 原生
- different-ai/openwork [mcp-server] *23943*  items=1 - Your OpenWork org's skills, plugins, workflows, and connections through one OAut
- HKUDS/AI-Trader [skill] *22700* ['product-stars'] items=1 - "AI-Trader: 100% Fully-Automated Agent-Native Trading"
- ifixai-ai/iFixAi [marketplace] *22605* ['star-anomaly', 'product-stars'] items=1 - Independent Auditing of AI Agents. Run by human or the agent itself, to answer t
- screenpipe/screenpipe [mcp-server] *21857*  items=1 - Search your local screen recordings, audio transcripts, and computer activity fr
- getpaseo/paseo [skill] *20137*  items=1 - Orchestrate multiple coding agents from desktop and mobile
- agent0ai/agent-zero [skill] *19399* ['product-stars'] items=1 - Agent Zero AI framework
- earthtojake/text-to-cad [marketplace] *18407* ['star-anomaly', 'product-stars'] items=1 - Give your agent CAD superpowers.
- bradautomates/claude-video [marketplace] *18231* ['star-anomaly'] items=1 - Give Claude the ability to watch any video. /watch downloads, extracts frames, t

## Random sample of 20 watch repos (of 473)
- V-Songbird/hush [plugin] *51*  items=1 - Quieter sessions for Claude Code: less narration, shorter tool output and concis reasons=['no corroborating signal'] src=['topic']
- nxtg-ai/forge-orchestrator [mcp-server] *162*  items=1 - AI orchestration: Claude Code, Codex, Gemini on shared repos. 11 MCP tools, stdi reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- Yuan1z0825/nature-skills [skill] *46631* ['star-anomaly'] items=1 - 符合nature论文学术表达和科研绘图的Skill reasons=['fails: no star-anomaly'] src=['topic']
- mgwalkerjr95/texas-grocery-mcp [mcp-server] *64*  items=1 - MCP server for HEB grocery store integration - search products, manage carts, cl reasons=['fails: pushed<=90d (149)'] src=['mcp-registry']
- ahmedEid1/lumen [mcp-server] *88*  items=1 - Self-hostable agentic-AI LMS: catalog, RAG tutor, FSRS reviews, AI authoring, in reasons=['fails: pushed<=90d (123)'] src=['mcp-registry']
- OdradekAI/bundles-forge [marketplace] *229*  items=1 - An agentic skills framework & bundle-plugin engineering toolkit that works. reasons=['fails: pushed<=90d (164)'] src=['topic']
- Snailclimb/AIGuide [skill] *669*  items=1 - AI 应用开发、AI 编程实战与面试指南，涵盖 LLM、Agent、RAG、MCP、Claude Code、Codex 等核心技术与工程实践。 reasons=['fails: pushed<=90d (93)', 'fails: license (None)'] src=['topic']
- metabase/metabase [mcp-server] *49571*  items=1 - Lets AI clients search, explore, query, and visualize data in a Metabase instanc reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- agent0ai/agent-zero [skill] *19399* ['product-stars'] items=1 - Agent Zero AI framework reasons=['fails: license (NOASSERTION)'] src=['topic']
- gaasher/Agent-Loop-Skills [plugin,marketplace] *174*  items=3 - Loop until it's better — drop-in agentic loops (autoresearch, scientific writing reasons=['fails: pushed<=90d (100)'] src=['code', 'marketplace-expansion']
- dfkai/xtquantai [plugin,marketplace] *164*  items=2 - 迅投 QMT 量化 AI 技能集（Agent Skills）：研报因子回测脚本生成等，适用于 Claude Code / Cursor / Codex / Ki reasons=['fails: pushed<=90d (119)'] src=['code', 'marketplace-expansion']
- cyberlife-coder/VelesDB [mcp-server] *97*  items=1 - Offline agentic memory: remember/recall/relate/forget/why over a fused vector+gr reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- blacktwist/social-media-skills [marketplace] *560*  items=1 - AI agent skills for social media content strategy, creation, and analysis across reasons=['fails: pushed<=90d (160)'] src=['topic']
- peakspec/marshal [skill] *53*  items=1 - Open-source multi-agent PM-ops team — associate PM, GTM, QA, data-analyst subage reasons=['fails: license (None)'] src=['topic']
- oso95/scroll-world [marketplace] *9759* ['star-anomaly'] items=1 - A skill that turn any brand into a scrollable 3D world landing page reasons=['fails: no star-anomaly'] src=['topic']
- Arize-ai/phoenix [marketplace] *11755* ['product-stars'] items=1 - AI Observability & Evaluation reasons=['fails: license (NOASSERTION)'] src=['topic']
- thebriangao/totem [mcp-server] *125*  items=3 - Totem — talk to your wearables with AI. Today: full Whoop access (48 tools). reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- jdforsythe/forge [plugin,marketplace] *151*  items=2 - Skills for creating high quality skills and agents reasons=['fails: pushed<=90d (97)'] src=['code', 'marketplace-expansion']
- Ar9av/PaperOrchestra [skill] *677*  items=1 - An automated AI research-paper writer based off Google's PaperOrchestra paper's  reasons=['fails: license (NOASSERTION)'] src=['topic']
- netil/oh-my-hi [marketplace] *58*  items=1 - 👋 Claude Code & Codex harness insights dashboard — visual catalog and token anal reasons=['fails: pushed<=90d (94)', 'no corroborating signal'] src=['topic']

## Errors
- marketplace obra/claude-session-driver: no plugins list

## Rate limit
- REST calls this run (uncached): {"core": 538, "search": 83}; last seen: {"core": {"remaining": "4461", "limit": "5000"}, "search": {"remaining": "27", "limit": "30"}}
- GraphQL: 345 calls, cost 4, remaining 4632/5000, stopped early: False
- REST stopped early: False
- repos lacking metadata: 3447; enriched this run: 28204