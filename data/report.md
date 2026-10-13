# Catalog report 2026-10-13
Mode: **token**; run time 1806s
Repos (deduped): 2945; flat entries before dedup: 20701

## Tier x type BEFORE dedup (flat entries)
- new/mcp-server: 11652
- listed/plugin: 2284
- watch/mcp-server: 1993
- verified/mcp-server: 1092
- watch/skill: 503
- verified/skill: 448
- watch/marketplace: 390
- official/plugin: 376
- verified/marketplace: 311
- watch/plugin: 304
- verified/plugin: 249
- watch/agent: 206
- verified/collection: 187
- anthropic/plugin: 165
- new/skill: 140
- new/marketplace: 140
- new/plugin: 113
- verified/agent: 46
- new/agent: 30
- anthropic/marketplace: 14
- anthropic/collection: 4
- anthropic/agent: 1
- watch/collection: 1

## Tier AFTER dedup (repos)
- verified: 1634
- watch: 460
- official: 256
- new: 250
- anthropic: 175
- listed: 170

## Type AFTER dedup (items)
- mcp-server: 1375
- plugin: 1306
- skill: 726
- marketplace: 450
- collection: 115
- agent: 44

## Primary type AFTER dedup (repos)
- mcp-server: 922
- plugin: 863
- skill: 662
- marketplace: 382
- collection: 84
- agent: 32

## Repos by discovery source family
- topic: 1208
- mcp-registry: 1032
- anthropic: 479
- anthropic-org: 205
- code: 180
- curated: 138
- marketplace-expansion: 39

## Flags (all tiers)
- product-stars: 206
- star-spike: 11
- star-anomaly: 1

## star-anomaly by tier
- new: 1

## Metadata gaps
- repos without metadata: 181
- reasons: {'unfetched': 181}

## MCP-only repos excluded: 52
- assafelovic/gpt-researcher *30058* ['ai', 'python', 'agent', 'automation', 'research'] - An autonomous agent that conducts deep research on any data using any LLM provid
- pascalorg/editor *24829* ['3d', 'architecture', 'bim', 'cad', 'editor'] - Open-source 3D architectural editor with a local CLI, MCP tools, and practical w
- mrexodia/ida-pro-mcp *12712* ['ida-plugin', 'ida-pro', 'mcp', 'mcp-server', 'modelcontextprotocol'] - AI-powered reverse engineering assistant that bridges IDA Pro with language mode
- mcp-use/mcp-use *10751* ['mcp', 'model-context-protocol', 'apps-sdk', 'mcp-apps', 'mcp-inspector'] - The fullstack MCP framework to develop MCP Apps for ChatGPT / Claude & MCP Serve
- Agents365-ai/drawio-skill *10102* ['drawio', 'diagram', 'agent-skills', 'architecture-diagram', 'claude-code'] - Agent skill that turns natural language, code, Terraform/K8s, SQL, OpenAPI, Asyn
- 21st-dev/magic-mcp *5998* ['21st', 'claude', 'cursor', 'mcp', 'model-context-protocol'] - It's like v0, but in your Cursor / Claude Code / Windsurf: search 10,000+ React/
- jordan-gibbs/hyperresearch *3844* ['agents', 'agentskills', 'claude-code', 'deep-research', 'deep-research-agent'] - Convert Claude Code or Codex into the most intelligent Deep Research Agent. Coll
- taylorwilsdon/google_workspace_mcp *3329* ['ai', 'gmail', 'google-calendar', 'google-workspace', 'llm'] - Control Gmail, Google Calendar, Docs, Sheets, Slides, Chat, Forms, Tasks, Search
- duty1g/x64dbg-mcp-server *2473* ['ai-agents', 'ai-debugging', 'binary-analysis', 'claude', 'claude-code'] - x64dbg-MCP Server is a native MCP (Model Context Protocol) plugin for x64dbg tha
- redhat-et/ripwire *2438* ['ai-agents', 'claude', 'cli', 'coding-agents', 'context-engineering'] - The ripgrep of AI context: a zero-dependency C++23 CLI + MCP server for coding a
- alpic-ai/skybridge *2156* ['agent', 'ai', 'apps-sdk', 'chatgpt', 'claude'] - Skybridge is a full-stack TypeScript framework for MCP Apps and ChatGPT Apps. Ty
- jau123/MeiGen-AI-Design-MCP *1781* ['ai-image-generation', 'claude', 'claude-code', 'comfyui', 'mcp'] - Supports GPT Image 2, Seedance & ComfyUI, with a 1,400+ prompt library, carefull
- study8677/repobrain *1324* ['claude-code', 'codex-cli', 'developer-tools', 'mcp-server', 'windsurf'] - 🧠 RepoBrain (formerly Antigravity) — Give your repo a brain. ChatGPT for your co
- agentrq/agentrq *1150* ['agentic-ai', 'agentic-workflow', 'agents', 'task', 'task-manager'] - AgentRQ: Human-in-loop realtime conversational task manager for AI Agents. Self-
- CodeAbra/iai-personal-memory-engine *907* ['claude', 'claude-code', 'local-first', 'mcp', 'mcp-server'] - A cyber brain for your AI. It never forgets a detail, remembers exactly what you

## Degradation
- registry complete: True (427 pages, 42674 entries)
- MCP servers merged from the previous catalog (not re-fetched): 0
- GraphQL 403s: 0 (secondary rate limit: 0); retries: 4; queries that gave up: 0
- HTTP retries (5xx/network): 3
- repos with stale metadata reused from the previous catalog (meta_stale): 0

## MCP Registry
- {"pages": 427, "fetched": 42674, "kept": 42153, "dropped": 521, "bad": 0, "complete": true, "excluded_remote_only": 12086, "excluded_low_signal": 15330, "fallback_merged": 0, "records": 1032, "attached_existing": 113, "new_repo": 919, "remote_only": 0, "tiers": {"official": 24, "listed": 18, "verified": 747, "new": 96, "watch": 147}}

## Top 20 by trend_7d
- morluto/rea +165664 (3063.88%) ['star-spike']
- mattpocock/skills +10434 (3.76%) []
- cathrynlavery/diagram-design +9558 (22.01%) []
- DietrichGebert/ponytail +6092 (3.91%) []
- affaan-m/ECC +4474 (1.64%) []
- tt-a1i/archify +4445 (5.68%) []
- addyosmani/agent-skills +4232 (4.17%) []
- heygen-com/hyperframes +4207 (7.28%) ['product-stars']
- paperclipai/paperclip +3465 (3.55%) []
- rehan-remade/universal-modder +3340 (87.71%) ['star-spike']
- thedotmack/claude-mem +3156 (3.25%) []
- tigerless-labs/autoharness +3102 (39.08%) ['star-spike']
- pbakaus/impeccable +2858 (3.69%) []
- ayghri/i-have-adhd +2837 (5.26%) []
- alibaba/open-code-review +2782 (6.34%) []
- Leonxlnx/taste-skill +2389 (2.57%) []
- obra/superpowers +2376 (0.8%) []
- multica-ai/andrej-karpathy-skills +2243 (1.03%) []
- blader/humanizer +2112 (3.9%) []
- mvschwarz/openrig +2108 (40.52%) ['star-spike']

## Code search vs topic search
- repos found by code search: 180
- also in topic search: 11
- code-only: 156; tiers: {'watch': 70, 'verified': 73, 'new': 13}

## Top 30 by stars: anthropic
- anthropics/skills [marketplace,collection] *180780*  items=2 - Anthropic example skills
- anthropics/claude-code [marketplace,agent] *150489*  items=2 - Bundled plugins for Claude Code including Agent SDK development tools, PR review
- anthropics/financial-services [marketplace] *39584*  items=1 - 
- anthropics/claude-plugins-official [plugin,marketplace,collection] *37768*  items=3 - Directory of popular Claude Code extensions including development tools, product
- anthropics/knowledge-work-plugins [marketplace] *29391*  items=1 - 
- anthropics/claude-for-legal [marketplace] *9653*  items=1 - Reference agents, skills, and data connectors for the legal workflows we see mos
- anthropics/claude-code-action [collection] *9490*  items=1 - The official GitHub Action for running Claude Code in CI: mention @claude in iss
- anthropics/claude-code-security-review [collection] *6358*  items=1 - An official AI-powered security-review GitHub Action that uses Claude to analyze
- anthropics/claude-plugins-community [marketplace] *4631*  items=1 - 
- anthropics/commerce-agents [marketplace] *3223*  items=1 - Claude Commerce Agents: the commerce-builder plugin for building shopping and me
- anthropics/life-sciences [marketplace] *618*  items=1 - MCP servers and skills for life sciences research, data analysis, and discovery
- anthropics/k12-teacher-skills [marketplace] *562*  items=1 - Plugin marketplace for K-12 Education and Claude for Teachers.
- anthropics/healthcare [marketplace] *425*  items=1 - Claude for Healthcare — one plugin bundling payer, provider, pharma, and general
- anthropics/oncall-kit [marketplace] *221*  items=1 - 
- anthropics/claude-for-financial-advisors [plugin,marketplace] *100*  items=2 - Ready-to-run workflows for financial advisors in Claude Cowork, drawing live dat
- anthropics/claude-tag-plugins [marketplace] *60*  items=1 - Plugins that connect Claude Tag to common SaaS services, plus charting and confi
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
- obra/superpowers [plugin,skill] *298315*  items=3 - Superpowers teaches Claude brainstorming, subagent driven development with built
- mattpocock/skills [plugin] *288296*  items=2 - Matt Pocock's agent skills for real engineering — grilling, spec/ticket flows, T
- heygen-com/hyperframes [plugin] *61987* ['product-stars'] items=2 - HyperFrames by HeyGen. Write HTML, render video. Compositions, GSAP and runtime 
- ChromeDevTools/chrome-devtools-mcp [plugin,mcp-server] *53401*  items=4 - Control and inspect a live Chrome browser from your coding agent. Record perform
- confident-ai/deepeval [plugin] *18776* ['product-stars'] items=1 - Skills for adding DeepEval evaluations, tracing, datasets, Confident AI reports,
- huggingface/skills [plugin] *11161*  items=2 - Build, train, evaluate, and use open source AI models, datasets, and spaces.
- wonderwhy-er/DesktopCommanderMCP [plugin,mcp-server] *10016*  items=4 - MCP server for terminal commands, process management, and file operations across
- Eigenwise/atomic-agents [plugin,marketplace] *6284* ['product-stars'] items=3 - Comprehensive development workflow for building AI agents with the Atomic Agents
- exa-labs/exa-mcp-server [plugin,mcp-server] *5114*  items=3 - Exa AI web search, deep research, and content extraction. Provides MCP tools and
- NVIDIA/skills [plugin] *3573*  items=2 - Find the right NVIDIA skill for GPU acceleration, CUDA, AI agents, data loading,
- cloudflare/skills [plugin] *3048*  items=2 - Skills for the Cloudflare developer platform: Workers, Durable Objects, Agents S
- modelcontextprotocol/ext-apps [plugin] *2945*  items=3 - Skills for creating MCP Apps with the MCP Apps SDK
- aws/agent-toolkit-for-aws [plugin] *2854*  items=8 - Build, deploy, and operate AI agents on AWS. Skills for scaffolding agents with 
- expo/skills [plugin] *2801*  items=2 - Official Expo skills for building, deploying, upgrading, and debugging React Nat
- GoogleChrome/modern-web-guidance [plugin] *2469*  items=2 - Keep your coding agent up to date with the latest web best practices
- figma/mcp-server-guide [plugin,mcp-server] *2069*  items=4 - Figma design platform integration. Access design files, extract component inform
- MicrosoftDocs/mcp [plugin,mcp-server] *1940*  items=3 - Access official Microsoft documentation, API references, and code samples for Az
- stripe/ai [plugin,mcp-server] *1919*  items=3 - Stripe development plugin for Claude
- microsoft/azure-skills [plugin] *1563*  items=2 - Transform Claude into an Azure expert. This plugin integrates the Azure MCP serv
- atlassian/atlassian-mcp-server [plugin,mcp-server] *1090*  items=3 - Connect to Atlassian products including Jira and Confluence. Search and create i
- forcedotcom/sf-skills [plugin] *1078*  items=1 - Build Salesforce apps and agents using these core building blocks: metadata, Ape
- awslabs/agent-plugins [plugin] *918*  items=10 - Guide developers through adding maps, places search, geocoding, routing, and oth
- superdesigndev/superdesign-skill [plugin,skill] *655*  items=2 - Design or redesign frontend UI and marketing graphics on the Superdesign infinit
- duckdb/duckdb-skills [plugin] *607*  items=2 - DuckDB-powered skills for Claude Code: read any data file, attach and query Duck
- Shopify/Shopify-AI-Toolkit [plugin] *596*  items=2 - Shopify's AI Toolkit provides 18 development skills for building on the Shopify 
- ClickHouse/agent-skills [plugin] *547*  items=2 - 28 best practice rules for ClickHouse schema design, query optimization, and dat
- EpicGames/unreal-engine-skills-for-claude-code-plugin [plugin] *531*  items=2 - Control Unreal Editor directly from Claude Code via MCP. Hundreds of tools expos
- gitroomhq/postiz-agent [plugin] *514*  items=3 - Social media automation CLI for scheduling posts, managing integrations, uploadi
- makenotion/claude-code-notion-plugin [plugin] *493*  items=2 - Notion workspace integration. Search pages, create and update documents, manage 
- tavily-ai/skills [plugin] *488*  items=3 - Build AI applications with real-time web data using Tavily's search, extract, cr

## Top 30 by stars: listed
- DietrichGebert/ponytail [plugin] *162025*  items=2 - Lazy senior dev mode. Forces the simplest, shortest solution that actually works
- JuliusBrussee/caveman [plugin,skill] *111282*  items=2 - Auto-activation works differently per agent: Claude Code uses SessionStart hooks
- thedotmack/claude-mem [plugin,skill] *100178*  items=3 - Persistent memory system for Claude Code - seamlessly preserve context across se
- Egonex-AI/Understand-Anything [plugin,skill] *86101*  items=2 - Understand Anything is a Claude Code plugin that analyzes your project with a mu
- pbakaus/impeccable [plugin] *80392*  items=1 - Great design prompts require design vocabulary. Most people don't have it. You c
- mem0ai/mem0 [plugin] *67075* ['product-stars'] items=1 - Connect Mem0 to Claude to give your agent persistent memory across sessions. Cla
- mvanhorn/last30days-skill [plugin] *64110*  items=1 - last-30-days is a Claude Code skill that searches the web and delivers a structu
- coreyhaines31/marketingskills [plugin,skill] *54418*  items=3 - coreyhaines31
- DayuanJiang/next-ai-draw-io [plugin] *36195* ['product-stars'] items=1 - AI-powered Draw.io diagram generation with real-time browser preview. Create flo
- jarrodwatts/claude-hud [plugin,collection] *28483*  items=2 - Real-time statusline HUD for Claude Code - context health, tool activity, agent 
- alirezarezvani/claude-skills [plugin,skill] *28088*  items=2 - Playwright Pro turns your AI coding agent into a senior test automation engineer
- mksglu/context-mode [plugin] *27505*  items=1 - MCP is the protocol for tool access. We're the virtualization layer for context.
- promptfoo/promptfoo [plugin] *25951*  items=1 - Teaches AI coding agents to create and maintain promptfoo eval suites. Encodes b
- AgriciDaniel/claude-seo [plugin] *18795*  items=1 - Comprehensive SEO analysis plugin for Claude Code. Performs full site audits wit
- browser-use/browser-harness [plugin] *18406* ['product-stars'] items=1 - Open-source browser agent driven via CDP — direct browser control, 79K stars, YC
- Jeffallan/claude-skills [plugin,skill,collection] *11847*  items=3 - 66 specialized skills for full-stack development: 12 language experts (Python, T
- nicobailon/visual-explainer [plugin,collection] *10382*  items=3 - An agent skill that turns complex terminal output into styled HTML pages you act
- revfactory/harness [plugin,agent] *9167*  items=3 - Harness leverages Claude Code's agent team system to decompose complex tasks int
- Eventual-Inc/Daft [plugin] *5796* ['product-stars'] items=1 - Skills for working with Daft, a high-performance data engine for AI and multimod
- clidey/whodb [plugin] *5037* ['product-stars'] items=1 - Database management tools for Claude Code. Query databases, explore schemas, ana
- nyldn/claude-octopus [plugin] *4214*  items=2 - Multi-LLM orchestration for Claude Code and Cowork. Coordinates 8 AI providers (
- giancarloerra/SocratiCode [plugin,mcp-server] *3336*  items=2 - Enterprise-grade (40m+ lines) codebase intelligence in a zero-setup, private and
- Chachamaru127/claude-code-harness [plugin,agent] *3160*  items=2 - Autonomous Plan → Work → Review cycle for Claude Code. Go-native engine with 25×
- AgriciDaniel/claude-blog [plugin] *2372*  items=1 - AI-powered blog creation and optimization skill with 20 commands, 4 specialized 
- nizos/tdd-guard [plugin,collection] *2360*  items=2 - Enforces Test-Driven Development by intercepting file operations in Claude Code.
- severity1/claude-code-prompt-improver [plugin] *1950*  items=1 - Intelligent prompt optimization using skill-based architecture. Enriches vague p
- AminForou/mcp-gsc [plugin] *1912*  items=1 - Connect Google Search Console to Claude Code. Query rankings, inspect URLs, audi
- codeaholicguy/ai-devkit [plugin] *1646*  items=1 - A structured software development toolkit that helps Claude Code follow senior-e
- activeloopai/hivemind [plugin,skill,collection] *1621*  items=5 - Cloud-backed persistent memory for Claude Code powered by Deeplake. Automaticall
- kenryu42/cc-safety-net [plugin,collection] *1608*  items=3 - Block destructive git and filesystem commands before execution

## Top 30 by stars: verified
- affaan-m/ECC [collection] *278058*  items=1 - Top-notch, well-written resources covering "just about everything" from core eng
- multica-ai/andrej-karpathy-skills [collection] *219299*  items=1 - A drop-in CLAUDE.md distilling four behavioral guidelines for LLM-assisted codin
- firecrawl/firecrawl [skill] *190925* ['product-stars'] items=1 - Supercharge your AI agents with data from the web and beyond. Building the libra
- morluto/rea [mcp-server] *171071* ['star-spike'] items=1 - Reverse engineer anything from your terminal or agent with one CLI and MCP serve
- vercel/next.js [marketplace] *143153* ['product-stars'] items=1 - The React Framework
- garrytan/gstack [agent] *136186*  items=1 - Garry Tan's (Y Combinator) Claude Code setup and "open source software factory" 
- nextlevelbuilder/ui-ux-pro-max-skill [marketplace] *135252*  items=1 - An AI skill that provides design intelligence for building professional UI/UX ac
- browser-use/browser-use [mcp-server] *117777*  items=1 - Control a real Chrome browser to complete any task: fill forms, extract data, bo
- addyosmani/agent-skills [marketplace] *105765*  items=1 - Production-grade engineering skills for AI coding agents.
- paperclipai/paperclip [skill,mcp-server] *101088*  items=2 - The open-source app everyone uses to manage agents at work
- nexu-io/open-design [marketplace] *100807*  items=1 - 🎨 Best DeepSeek Harness Design Plugin. The open-source Claude Design alternative
- ruvnet/RuView [marketplace] *97657*  items=1 - π RuView turns commodity WiFi signals into real-time spatial intelligence, vital
- Leonxlnx/taste-skill [marketplace] *95221*  items=1 - Taste-Skill - gives your AI good taste. stops the AI from generating boring, gen
- storybookjs/storybook [marketplace] *91260* ['product-stars'] items=1 - Storybook is the industry standard workshop for building, documenting, and testi
- koala73/worldmonitor [skill,mcp-server] *88337* ['product-stars'] items=2 - Real-time global intelligence dashboard. AI-powered news aggregation, geopolitic
- D4Vinci/Scrapling [mcp-server] *87101*  items=1 - Web scraping with stealth HTTP, real browsers, and Cloudflare bypass. CSS select
- bytedance/deer-flow [skill] *83772*  items=1 - An open-source long-horizon SuperAgent harness that researches, codes, and creat
- tt-a1i/archify [skill,collection] *82679*  items=2 - An Agent Skill for Claude Code that generates interactive architecture, workflow
- netdata/netdata [mcp-server] *80909*  items=1 - Real-time infrastructure monitoring with metrics, logs, alerts, and ML-based ano
- shareAI-lab/learn-claude-code [collection] *78466*  items=1 - A really interesting analysis of how coding agents like Claude Code are designed
- ComposioHQ/awesome-claude-skills [skill] *76965*  items=1 - A curated list of awesome Claude Skills, resources, and tools for customizing Cl
- headroomlabs-ai/headroom [marketplace] *75158*  items=1 - Compress tool outputs, logs, files, and RAG chunks before they reach the LLM. 20
- ruvnet/ruflo [marketplace,mcp-server] *74473*  items=2 - 🌊 The original agent harness. Deploy intelligent multi-player swarms, coordinate
- thedaviddias/Front-End-Checklist [marketplace,mcp-server] *74442* ['product-stars'] items=2 - 🗂 The essential checklist for modern web development, for humans and AI agents
- career-ops-hq/career-ops [marketplace] *74213*  items=1 - Open-source AI job search agent and job finder: scan job boards, score each job 
- usestrix/strix [skill] *68246* ['product-stars'] items=1 - Open-source AI penetration testing tool to find and fix your app’s vulnerabiliti
- rohitg00/ai-engineering-from-scratch [skill] *68234* ['product-stars'] items=1 - Learn it. Build it. Ship it for others.
- calesthio/OpenMontage [skill] *67660*  items=1 - World's first open-source, agentic video production system. 12 production pipeli
- shanraisshan/claude-code-best-practice [skill] *67474*  items=1 - from vibe coding to agentic engineering - practice makes claude perfect
- xtekky/gpt4free [skill] *66807* ['product-stars'] items=1 - The official gpt4free repository | various collection of powerful language model

## Top 30 by stars: watch
- f/prompts.chat [marketplace] *172777* ['product-stars'] items=1 - f.k.a. Awesome ChatGPT Prompts. Share, discover, and collect prompts from the co
- opendatalab/MinerU [skill] *81586* ['product-stars'] items=1 - Transforms complex documents like PDFs and Office docs into LLM-ready markdown/J
- code-yeongyu/oh-my-openagent [skill] *69986* ['product-stars'] items=1 - OmO: Just type "mass ulw" keyword with your prompt. Now you are the master of gr
- bmad-code-org/BMAD-METHOD [skill] *54070* ['product-stars'] items=1 - Breakthrough Method for Agile Ai Driven Development
- Imbad0202/academic-research-skills [marketplace] *51630*  items=1 - Academic Research Skills for Claude Code: research → write → review → revise → f
- tldraw/tldraw [mcp-server] *50881*  items=1 - Draw and visually collaborate with your agents on tldraw's canvas.
- metabase/metabase [mcp-server] *49635*  items=1 - Lets AI clients search, explore, query, and visualize data in a Metabase instanc
- abhigyanpatwari/GitNexus [marketplace] *47859* ['product-stars'] items=1 - GitNexus: The Zero-Server Code Intelligence Engine
- PostHog/posthog [mcp-server] *40247*  items=1 - Official PostHog MCP Server for product analytics, feature flags, experiments, a
- openai/codex-plugin-cc [marketplace] *34145*  items=1 - Use Codex from Claude Code to review code or delegate tasks.
- zarazhangrui/frontend-slides [marketplace] *30560*  items=1 - Create beautiful slides on the web using a coding agent's frontend skills
- oraios/serena [mcp-server] *30214*  items=1 - A powerful toolkit for coding, providing semantic retrieval and editing capabili
- eyaltoledano/claude-task-master [marketplace] *28211*  items=1 - An AI-powered task-management system you can drop into Cursor, Lovable, Windsurf
- openai/skills [skill] *28033*  items=1 - Skills Catalog for Codex
- vercel/ai [skill] *27285* ['product-stars'] items=1 - The AI Toolkit for TypeScript. From the creators of Next.js, the AI SDK is a fre
- clockworklabs/SpacetimeDB [marketplace] *25282* ['product-stars'] items=1 - Development at the speed of light
- different-ai/openwork [mcp-server] *24055*  items=1 - Your OpenWork org's skills, plugins, workflows, and connections through one OAut
- HKUDS/AI-Trader [skill] *22759* ['product-stars'] items=1 - "AI-Trader: 100% Fully-Automated Agent-Native Trading"
- screenpipe/screenpipe [mcp-server] *21927*  items=1 - Search your local screen recordings, audio transcripts, and computer activity fr
- getpaseo/paseo [skill] *20683*  items=1 - Orchestrate multiple coding agents from desktop and mobile
- agent0ai/agent-zero [skill] *19446* ['product-stars'] items=1 - Agent Zero AI framework
- Canner/WrenAI [skill] *17857* ['product-stars'] items=1 - GenBI (Generative BI) for AI agents, an open-source, governed text-to-SQL throug
- architecture-decision-record/architecture-decision-record [skill] *17185* ['product-stars'] items=1 - Architecture decision record (ADR) examples for software planning, IT leadership
- longbridge/gpui-kit [skill] *17015* ['product-stars'] items=1 - Rust GUI components for building fantastic cross-platform desktop application by
- composio-community/awesome-codex-skills [skill] *16882*  items=1 - A curated list of practical Codex skills for automating workflows across the Cod
- travisvn/awesome-claude-skills [skill] *15383*  items=1 - A curated list of awesome Claude Skills, resources, and tools for customizing Cl
- superset-sh/superset [marketplace] *15107* ['product-stars'] items=1 - Superset is an agentic IDE to orchestrate 100+ coding agents in parallel. Run an
- millionco/react-doctor [skill] *14994* ['product-stars'] items=1 - Your agent writes bad React. This catches it
- kyegomez/OpenMythos [plugin] *14907*  items=1 - A theoretical reconstruction of the Claude Mythos architecture, built from first
- NevaMind-AI/memU [skill] *14536* ['product-stars'] items=1 - Personal memory across agents

## Random sample of 20 watch repos (of 460)
- jeremylongshore/excel-analyst-pro-skill-md [plugin] *57*  items=1 - Professional financial modeling toolkit for Claude Code with auto-invoked Skills reasons=['fails: license (NOASSERTION)'] src=['topic']
- sathergate/sathergate-toolkit [mcp-server] *107*  items=7 - Cron jobs for Next.js. Serverless-native scheduling with retry support. reasons=['no corroborating signal'] src=['mcp-registry']
- abhigyanpatwari/GitNexus [marketplace] *47859* ['product-stars'] items=1 - GitNexus: The Zero-Server Code Intelligence Engine reasons=['fails: license (NOASSERTION)'] src=['topic']
- ralforion/orionbelt-semantic-layer [mcp-server] *100*  items=1 - API-first semantic layer MCP server compiling YAML models into dialect-specific  reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- tight-studio/OpenBrand [mcp-server] *799*  items=1 - Extract brand assets (logos, colors, backdrop images, brand name) from any websi reasons=['fails: pushed<=90d (154)'] src=['mcp-registry']
- proyecto26/system-design-skills [marketplace] *86*  items=1 - A divide-and-conquer wiki of system-design skills for Claude Code — reason about reasons=['fails: pushed<=90d (132)'] src=['topic']
- chunxiaoxx/nautilus-compass [plugin,mcp-server] *1260*  items=2 - Open memory & reliability layer for AI agents + independent judging/verification reasons=['fails: license (NOASSERTION)'] src=['mcp-registry', 'topic']
- ralforion/orionbelt-analytics [mcp-server] *50*  items=1 - Ontology-based MCP server for database schema analysis and RDF/OWL ontology gene reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- millionco/react-doctor [skill] *14994* ['product-stars'] items=1 - Your agent writes bad React. This catches it reasons=['fails: license (NOASSERTION)'] src=['topic']
- djadmin/fort [plugin,marketplace] *80*  items=2 - Audit and fix your Mac's security in one command. No agent, no signup, open sour reasons=['fails: pushed<=90d (95)'] src=['code', 'marketplace-expansion']
- LichAmnesia/lich-skills [plugin,marketplace] *234*  items=2 - skills-map router (picks which skill to use) + go-no-go Stage 0 gate (NO-GO is t reasons=['fails: pushed<=90d (125)'] src=['code', 'marketplace-expansion']
- kushneryk/join.cloud [mcp-server] *65*  items=1 - Collaboration rooms for AI agents. Real-time messaging + standard git. reasons=['no corroborating signal'] src=['mcp-registry']
- aldefy/compose-skill [marketplace] *596*  items=1 - Jetpack Compose Agent Skill — AI-powered coding guidance with actual androidx/an reasons=['fails: license (NOASSERTION)'] src=['topic']
- max-sixty/worktrunk [marketplace] *9210*  items=1 - Worktrunk is a CLI for Git worktree management, designed for parallel AI agent w reasons=['fails: license (NOASSERTION)'] src=['topic']
- frumu-ai/tandem [mcp-server] *121*  items=1 - Remote MCP server for Tandem docs, install guides, SDKs, workflows, and agent se reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- jihe520/MathModelAgent [skill] *6201*  items=1 - 🤖📐专为数学建模设计的 Agent & skills ,自动完成数学建模，生成一份完整的可以直接提交的论文。 An Agent Designed for Mat reasons=['fails: license (None)'] src=['topic']
- jumodada/Drissionpage-MCP-Server [mcp-server] *488*  items=1 - Local browser automation for MCP clients powered by DrissionPage. reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- promptadvisers/claudex [plugin,marketplace] *158*  items=3 - Autonomous Claude + Codex review loop for Claude Code. Plan mode + read-only rev reasons=['fails: pushed<=90d (167)'] src=['code', 'marketplace-expansion']
- AIScientists-Dev/Flowtrace [skill] *485*  items=1 - Run a task with AI as a flow of steps you keep, reuse, and refine, not a one-off reasons=['fails: pushed<=90d (125)'] src=['topic']
- Koroqe/claude-code-sdlc [marketplace] *52*  items=1 - Turn Claude Code into an autonomous software development team — 16 specialized a reasons=['no corroborating signal'] src=['topic']

## Errors
- none

## Rate limit
- REST calls this run (uncached): {"core": 71, "search": 41}; last seen: {"core": {"remaining": "4929", "limit": "5000"}, "search": {"remaining": "29", "limit": "30"}}
- GraphQL: 153 calls, cost 70, remaining 4844/5000, stopped early: False
- REST stopped early: False
- repos lacking metadata: 3485; enriched this run: 28556