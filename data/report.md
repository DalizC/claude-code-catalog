# Catalog report 2026-10-11
Mode: **token**; run time 1391s
Repos (deduped): 2926; flat entries before dedup: 20472

## Tier x type BEFORE dedup (flat entries)
- new/mcp-server: 11450
- listed/plugin: 2284
- watch/mcp-server: 1982
- verified/mcp-server: 1083
- watch/skill: 498
- verified/skill: 451
- watch/marketplace: 382
- official/plugin: 376
- watch/plugin: 314
- verified/marketplace: 308
- verified/plugin: 254
- watch/agent: 201
- verified/collection: 187
- anthropic/plugin: 165
- new/marketplace: 147
- new/skill: 139
- new/plugin: 101
- verified/agent: 46
- new/agent: 32
- anthropic/marketplace: 14
- anthropic/collection: 4
- anthropic/agent: 1
- watch/collection: 1

## Tier AFTER dedup (repos)
- verified: 1630
- watch: 453
- official: 256
- new: 241
- anthropic: 175
- listed: 171

## Type AFTER dedup (items)
- mcp-server: 1353
- plugin: 1312
- skill: 727
- marketplace: 448
- collection: 115
- agent: 44

## Primary type AFTER dedup (repos)
- mcp-server: 902
- plugin: 869
- skill: 661
- marketplace: 379
- collection: 84
- agent: 31

## Repos by discovery source family
- topic: 1203
- mcp-registry: 1011
- anthropic: 480
- anthropic-org: 205
- code: 184
- curated: 138
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

## MCP-only repos excluded: 52
- assafelovic/gpt-researcher *30010* ['ai', 'python', 'agent', 'automation', 'research'] - An autonomous agent that conducts deep research on any data using any LLM provid
- pascalorg/editor *24783* ['3d', 'architecture', 'bim', 'cad', 'editor'] - Open-source 3D architectural editor with a local CLI, MCP tools, and practical w
- mrexodia/ida-pro-mcp *12630* ['ida-plugin', 'ida-pro', 'mcp', 'mcp-server', 'modelcontextprotocol'] - AI-powered reverse engineering assistant that bridges IDA Pro with language mode
- mcp-use/mcp-use *10742* ['mcp', 'model-context-protocol', 'apps-sdk', 'mcp-apps', 'mcp-inspector'] - The fullstack MCP framework to develop MCP Apps for ChatGPT / Claude & MCP Serve
- Agents365-ai/drawio-skill *10056* ['drawio', 'diagram', 'agent-skills', 'architecture-diagram', 'claude-code'] - Agent skill that turns natural language, code, Terraform/K8s, SQL, OpenAPI, Asyn
- 21st-dev/magic-mcp *5992* ['21st', 'claude', 'cursor', 'mcp', 'model-context-protocol'] - It's like v0, but in your Cursor / Claude Code / Windsurf: search 10,000+ React/
- jordan-gibbs/hyperresearch *3827* ['agents', 'agentskills', 'claude-code', 'deep-research', 'deep-research-agent'] - Convert Claude Code or Codex into the most intelligent Deep Research Agent. Coll
- taylorwilsdon/google_workspace_mcp *3317* ['ai', 'gmail', 'google-calendar', 'google-workspace', 'llm'] - Control Gmail, Google Calendar, Docs, Sheets, Slides, Chat, Forms, Tasks, Search
- duty1g/x64dbg-mcp-server *2441* ['ai-agents', 'ai-debugging', 'binary-analysis', 'claude', 'claude-code'] - x64dbg-MCP Server is a native MCP (Model Context Protocol) plugin for x64dbg tha
- redhat-et/ripwire *2433* ['ai-agents', 'claude', 'cli', 'coding-agents', 'context-engineering'] - The ripgrep of AI context: a zero-dependency C++23 CLI + MCP server for coding a
- alpic-ai/skybridge *2152* ['agent', 'ai', 'apps-sdk', 'chatgpt', 'claude'] - Skybridge is a full-stack TypeScript framework for MCP Apps and ChatGPT Apps. Ty
- jau123/MeiGen-AI-Design-MCP *1781* ['ai-image-generation', 'claude', 'claude-code', 'comfyui', 'mcp'] - Supports GPT Image 2, Seedance & ComfyUI, with a 1,400+ prompt library, carefull
- study8677/repobrain *1325* ['claude-code', 'codex-cli', 'developer-tools', 'mcp-server', 'windsurf'] - 🧠 RepoBrain (formerly Antigravity) — Give your repo a brain. ChatGPT for your co
- agentrq/agentrq *1139* ['agentic-ai', 'agentic-workflow', 'agents', 'task', 'task-manager'] - AgentRQ: Human-in-loop realtime conversational task manager for AI Agents. Self-
- vostride/agent-qa *904* ['playwright', 'end-to-end-testing', 'ai-testing', 'ai-agents', 'mcp'] - Open-source self-improving QA agent for software teams. A test harness with memo

## Degradation
- registry complete: True (418 pages, 41736 entries)
- MCP servers merged from the previous catalog (not re-fetched): 0
- GraphQL 403s: 0 (secondary rate limit: 0); retries: 2; queries that gave up: 0
- HTTP retries (5xx/network): 4
- repos with stale metadata reused from the previous catalog (meta_stale): 0

## MCP Registry
- {"pages": 418, "fetched": 41736, "kept": 41226, "dropped": 510, "bad": 0, "complete": true, "excluded_remote_only": 11593, "excluded_low_signal": 15118, "fallback_merged": 0, "records": 1011, "attached_existing": 112, "new_repo": 899, "remote_only": 0, "tiers": {"official": 24, "listed": 18, "verified": 737, "new": 90, "watch": 142}}

## Top 20 by trend_7d
- morluto/rea +77296 (9312.77%) ['star-spike']
- mattpocock/skills +9013 (3.27%) []
- DietrichGebert/ponytail +6184 (4.0%) []
- cathrynlavery/diagram-design +5881 (13.58%) []
- affaan-m/ECC +3939 (1.44%) []
- heygen-com/hyperframes +3890 (6.88%) ['product-stars']
- pbakaus/impeccable +3574 (4.71%) []
- rehan-remade/universal-modder +3527 (121.37%) ['star-spike']
- thedotmack/claude-mem +3434 (3.58%) []
- tigerless-labs/autoharness +3269 (42.51%) ['star-spike']
- ayghri/i-have-adhd +2895 (5.42%) []
- paperclipai/paperclip +2839 (2.93%) []
- obra/superpowers +2166 (0.73%) []
- multica-ai/andrej-karpathy-skills +1611 (0.74%) []
- latent-spaces/brag +1587 (11.81%) []
- coreyhaines31/marketingskills +1255 (2.37%) []
- JuliusBrussee/caveman +1210 (1.1%) []
- t8y2/dbx +1164 (4.74%) ['product-stars']
- D4Vinci/Scrapling +1104 (1.29%) []
- Ryze-AI-Adgent/open-seo-mcp-skills +1083 (29.74%) ['star-spike']

## Code search vs topic search
- repos found by code search: 184
- also in topic search: 8
- code-only: 162; tiers: {'watch': 70, 'verified': 79, 'new': 13}

## Top 30 by stars: anthropic
- anthropics/skills [marketplace,collection] *180372*  items=2 - Anthropic example skills
- anthropics/claude-code [marketplace,agent] *150096*  items=2 - Bundled plugins for Claude Code including Agent SDK development tools, PR review
- anthropics/financial-services [marketplace] *39312*  items=1 - 
- anthropics/claude-plugins-official [plugin,marketplace,collection] *37641*  items=3 - Directory of popular Claude Code extensions including development tools, product
- anthropics/knowledge-work-plugins [marketplace] *28901*  items=1 - 
- anthropics/claude-for-legal [marketplace] *9641*  items=1 - Reference agents, skills, and data connectors for the legal workflows we see mos
- anthropics/claude-code-action [collection] *9470*  items=1 - The official GitHub Action for running Claude Code in CI: mention @claude in iss
- anthropics/claude-code-security-review [collection] *6337*  items=1 - An official AI-powered security-review GitHub Action that uses Claude to analyze
- anthropics/claude-plugins-community [marketplace] *4620*  items=1 - 
- anthropics/commerce-agents [marketplace] *3209*  items=1 - Claude Commerce Agents: the commerce-builder plugin for building shopping and me
- anthropics/life-sciences [marketplace] *618*  items=1 - MCP servers and skills for life sciences research, data analysis, and discovery
- anthropics/k12-teacher-skills [marketplace] *562*  items=1 - Plugin marketplace for K-12 Education and Claude for Teachers.
- anthropics/healthcare [marketplace] *424*  items=1 - Claude for Healthcare — one plugin bundling payer, provider, pharma, and general
- anthropics/oncall-kit [marketplace] *216*  items=1 - 
- anthropics/claude-for-financial-advisors [plugin,marketplace] *99*  items=2 - Ready-to-run workflows for financial advisors in Claude Cowork, drawing live dat
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
- obra/superpowers [plugin,skill] *297313*  items=3 - Superpowers teaches Claude brainstorming, subagent driven development with built
- mattpocock/skills [plugin] *284802*  items=2 - Matt Pocock's agent skills for real engineering — grilling, spec/ticket flows, T
- heygen-com/hyperframes [plugin] *60437* ['product-stars'] items=2 - HyperFrames by HeyGen. Write HTML, render video. Compositions, GSAP and runtime 
- ChromeDevTools/chrome-devtools-mcp [plugin,mcp-server] *53254*  items=4 - Control and inspect a live Chrome browser from your coding agent. Record perform
- confident-ai/deepeval [plugin] *18734* ['product-stars'] items=1 - Skills for adding DeepEval evaluations, tracing, datasets, Confident AI reports,
- huggingface/skills [plugin] *11153*  items=2 - Build, train, evaluate, and use open source AI models, datasets, and spaces.
- wonderwhy-er/DesktopCommanderMCP [plugin,mcp-server] *9998*  items=4 - MCP server for terminal commands, process management, and file operations across
- Eigenwise/atomic-agents [plugin,marketplace] *6282* ['product-stars'] items=3 - Comprehensive development workflow for building AI agents with the Atomic Agents
- exa-labs/exa-mcp-server [plugin,mcp-server] *5104*  items=3 - Exa AI web search, deep research, and content extraction. Provides MCP tools and
- NVIDIA/skills [plugin] *3556*  items=2 - Find the right NVIDIA skill for GPU acceleration, CUDA, AI agents, data loading,
- cloudflare/skills [plugin] *3032*  items=2 - Skills for the Cloudflare developer platform: Workers, Durable Objects, Agents S
- modelcontextprotocol/ext-apps [plugin] *2933*  items=3 - Skills for creating MCP Apps with the MCP Apps SDK
- aws/agent-toolkit-for-aws [plugin] *2840*  items=8 - Build, deploy, and operate AI agents on AWS. Skills for scaffolding agents with 
- expo/skills [plugin] *2687*  items=2 - Official Expo skills for building, deploying, upgrading, and debugging React Nat
- GoogleChrome/modern-web-guidance [plugin] *2461*  items=2 - Keep your coding agent up to date with the latest web best practices
- figma/mcp-server-guide [plugin,mcp-server] *2062*  items=4 - Figma design platform integration. Access design files, extract component inform
- MicrosoftDocs/mcp [plugin,mcp-server] *1936*  items=3 - Access official Microsoft documentation, API references, and code samples for Az
- stripe/ai [plugin,mcp-server] *1866*  items=3 - Stripe development plugin for Claude
- microsoft/azure-skills [plugin] *1555*  items=2 - Transform Claude into an Azure expert. This plugin integrates the Azure MCP serv
- atlassian/atlassian-mcp-server [plugin,mcp-server] *1089*  items=3 - Connect to Atlassian products including Jira and Confluence. Search and create i
- forcedotcom/sf-skills [plugin] *1068*  items=1 - Build Salesforce apps and agents using these core building blocks: metadata, Ape
- awslabs/agent-plugins [plugin] *916*  items=10 - Guide developers through adding maps, places search, geocoding, routing, and oth
- superdesigndev/superdesign-skill [plugin,skill] *643*  items=2 - Design or redesign frontend UI and marketing graphics on the Superdesign infinit
- duckdb/duckdb-skills [plugin] *604*  items=2 - DuckDB-powered skills for Claude Code: read any data file, attach and query Duck
- Shopify/Shopify-AI-Toolkit [plugin] *593*  items=2 - Shopify's AI Toolkit provides 18 development skills for building on the Shopify 
- ClickHouse/agent-skills [plugin] *545*  items=2 - 28 best practice rules for ClickHouse schema design, query optimization, and dat
- gitroomhq/postiz-agent [plugin] *509*  items=3 - Social media automation CLI for scheduling posts, managing integrations, uploadi
- makenotion/claude-code-notion-plugin [plugin] *493*  items=2 - Notion workspace integration. Search pages, create and update documents, manage 
- tavily-ai/skills [plugin] *487*  items=3 - Build AI applications with real-time web data using Tavily's search, extract, cr
- TheQtCompanyRnD/agent-skills [plugin] *472*  items=3 - Agentic engineering skills for Qt software development — Qt C++/QML code review,

## Top 30 by stars: listed
- DietrichGebert/ponytail [plugin] *160602*  items=2 - Lazy senior dev mode. Forces the simplest, shortest solution that actually works
- JuliusBrussee/caveman [plugin,skill] *110948*  items=2 - Auto-activation works differently per agent: Claude Code uses SessionStart hooks
- thedotmack/claude-mem [plugin,skill] *99354*  items=3 - Persistent memory system for Claude Code - seamlessly preserve context across se
- Egonex-AI/Understand-Anything [plugin,skill] *85861*  items=2 - Understand Anything is a Claude Code plugin that analyzes your project with a mu
- pbakaus/impeccable [plugin] *79498*  items=1 - Great design prompts require design vocabulary. Most people don't have it. You c
- mem0ai/mem0 [plugin] *66963* ['product-stars'] items=1 - Connect Mem0 to Claude to give your agent persistent memory across sessions. Cla
- mvanhorn/last30days-skill [plugin] *63927*  items=1 - last-30-days is a Claude Code skill that searches the web and delivers a structu
- coreyhaines31/marketingskills [plugin,skill] *54100*  items=3 - coreyhaines31
- DayuanJiang/next-ai-draw-io [plugin] *36163* ['product-stars'] items=1 - AI-powered Draw.io diagram generation with real-time browser preview. Create flo
- jarrodwatts/claude-hud [plugin,collection] *28449*  items=2 - Real-time statusline HUD for Claude Code - context health, tool activity, agent 
- alirezarezvani/claude-skills [plugin,skill] *27983*  items=2 - Playwright Pro turns your AI coding agent into a senior test automation engineer
- mksglu/context-mode [plugin] *26417*  items=1 - MCP is the protocol for tool access. We're the virtualization layer for context.
- promptfoo/promptfoo [plugin] *25880*  items=1 - Teaches AI coding agents to create and maintain promptfoo eval suites. Encodes b
- AgriciDaniel/claude-seo [plugin] *18670*  items=1 - Comprehensive SEO analysis plugin for Claude Code. Performs full site audits wit
- browser-use/browser-harness [plugin] *18379* ['product-stars'] items=1 - Open-source browser agent driven via CDP — direct browser control, 79K stars, YC
- Jeffallan/claude-skills [plugin,skill,collection] *11815*  items=3 - 66 specialized skills for full-stack development: 12 language experts (Python, T
- nicobailon/visual-explainer [plugin,collection] *10341*  items=3 - An agent skill that turns complex terminal output into styled HTML pages you act
- revfactory/harness [plugin,agent] *9149*  items=3 - Harness leverages Claude Code's agent team system to decompose complex tasks int
- Eventual-Inc/Daft [plugin] *5794* ['product-stars'] items=1 - Skills for working with Daft, a high-performance data engine for AI and multimod
- clidey/whodb [plugin] *5034* ['product-stars'] items=1 - Database management tools for Claude Code. Query databases, explore schemas, ana
- nyldn/claude-octopus [plugin] *4200*  items=2 - Multi-LLM orchestration for Claude Code and Cowork. Coordinates 8 AI providers (
- giancarloerra/SocratiCode [plugin,mcp-server] *3338*  items=2 - Enterprise-grade (40m+ lines) codebase intelligence in a zero-setup, private and
- Chachamaru127/claude-code-harness [plugin,agent] *3157*  items=2 - Autonomous Plan → Work → Review cycle for Claude Code. Go-native engine with 25×
- nizos/tdd-guard [plugin,collection] *2360*  items=2 - Enforces Test-Driven Development by intercepting file operations in Claude Code.
- AgriciDaniel/claude-blog [plugin] *2354*  items=1 - AI-powered blog creation and optimization skill with 20 commands, 4 specialized 
- severity1/claude-code-prompt-improver [plugin] *1945*  items=1 - Intelligent prompt optimization using skill-based architecture. Enriches vague p
- AminForou/mcp-gsc [plugin] *1894*  items=1 - Connect Google Search Console to Claude Code. Query rankings, inspect URLs, audi
- codeaholicguy/ai-devkit [plugin] *1644*  items=1 - A structured software development toolkit that helps Claude Code follow senior-e
- activeloopai/hivemind [plugin,skill,collection] *1621*  items=5 - Cloud-backed persistent memory for Claude Code powered by Deeplake. Automaticall
- kenryu42/cc-safety-net [plugin,collection] *1583*  items=3 - Block destructive git and filesystem commands before execution

## Top 30 by stars: verified
- affaan-m/ECC [collection] *276631*  items=1 - Top-notch, well-written resources covering "just about everything" from core eng
- multica-ai/andrej-karpathy-skills [collection] *218428*  items=1 - A drop-in CLAUDE.md distilling four behavioral guidelines for LLM-assisted codin
- firecrawl/firecrawl [skill] *190268* ['product-stars'] items=1 - Supercharge your AI agents with data from the web and beyond. Building the libra
- vercel/next.js [marketplace] *143111* ['product-stars'] items=1 - The React Framework
- garrytan/gstack [agent] *135868*  items=1 - Garry Tan's (Y Combinator) Claude Code setup and "open source software factory" 
- nextlevelbuilder/ui-ux-pro-max-skill [marketplace] *134580*  items=1 - An AI skill that provides design intelligence for building professional UI/UX ac
- browser-use/browser-use [mcp-server] *117590*  items=1 - Control a real Chrome browser to complete any task: fill forms, extract data, bo
- addyosmani/agent-skills [marketplace] *104584*  items=1 - Production-grade engineering skills for AI coding agents.
- nexu-io/open-design [marketplace] *100442*  items=1 - 🎨 Best DeepSeek Harness Design Plugin. The open-source Claude Design alternative
- paperclipai/paperclip [mcp-server] *99863*  items=1 - Trending hip-hop artist momentum scores across four cultural dimensions.
- ruvnet/RuView [marketplace] *97199*  items=1 - π RuView turns commodity WiFi signals into real-time spatial intelligence, vital
- Leonxlnx/taste-skill [marketplace] *94480*  items=1 - Taste-Skill - gives your AI good taste. stops the AI from generating boring, gen
- storybookjs/storybook [marketplace] *91220* ['product-stars'] items=1 - Storybook is the industry standard workshop for building, documenting, and testi
- koala73/worldmonitor [skill,mcp-server] *88206* ['product-stars'] items=2 - Real-time global intelligence dashboard. AI-powered news aggregation, geopolitic
- D4Vinci/Scrapling [mcp-server] *86726*  items=1 - Web scraping with stealth HTTP, real browsers, and Cloudflare bypass. CSS select
- bytedance/deer-flow [skill] *83675*  items=1 - An open-source long-horizon SuperAgent harness that researches, codes, and creat
- tt-a1i/archify [skill,collection] *81746*  items=2 - An Agent Skill for Claude Code that generates interactive architecture, workflow
- netdata/netdata [mcp-server] *80875*  items=1 - Real-time infrastructure monitoring with metrics, logs, alerts, and ML-based ano
- shareAI-lab/learn-claude-code [collection] *78329*  items=1 - A really interesting analysis of how coding agents like Claude Code are designed
- morluto/rea [mcp-server] *78126* ['star-spike'] items=1 - Reverse engineer anything from your terminal or agent with one CLI and MCP serve
- ComposioHQ/awesome-claude-skills [skill] *76830*  items=1 - A curated list of awesome Claude Skills, resources, and tools for customizing Cl
- headroomlabs-ai/headroom [marketplace] *74971*  items=1 - Compress tool outputs, logs, files, and RAG chunks before they reach the LLM. 20
- thedaviddias/Front-End-Checklist [marketplace,mcp-server] *74426* ['product-stars'] items=2 - 🗂 The essential checklist for modern web development, for humans and AI agents
- ruvnet/ruflo [marketplace,mcp-server] *74304*  items=2 - 🌊 The original agent harness. Deploy intelligent multi-player swarms, coordinate
- career-ops-hq/career-ops [marketplace] *74000*  items=1 - Open-source AI job search agent and job finder: scan job boards, score each job 
- usestrix/strix [skill] *67795* ['product-stars'] items=1 - Open-source AI penetration testing tool to find and fix your app’s vulnerabiliti
- shanraisshan/claude-code-best-practice [skill] *67363*  items=1 - from vibe coding to agentic engineering - practice makes claude perfect
- rohitg00/ai-engineering-from-scratch [skill] *66889* ['product-stars'] items=1 - Learn it. Build it. Ship it for others.
- xtekky/gpt4free [skill] *66788* ['product-stars'] items=1 - The official gpt4free repository | various collection of powerful language model
- calesthio/OpenMontage [skill] *66370*  items=1 - World's first open-source, agentic video production system. 12 production pipeli

## Top 30 by stars: watch
- f/prompts.chat [marketplace] *172506* ['product-stars'] items=1 - f.k.a. Awesome ChatGPT Prompts. Share, discover, and collect prompts from the co
- opendatalab/MinerU [skill] *81426* ['product-stars'] items=1 - Transforms complex documents like PDFs and Office docs into LLM-ready markdown/J
- code-yeongyu/oh-my-openagent [skill] *69949* ['product-stars'] items=1 - OmO: Just type "mass ulw" keyword with your prompt. Now you are the master of gr
- bmad-code-org/BMAD-METHOD [skill] *54021* ['product-stars'] items=1 - Breakthrough Method for Agile Ai Driven Development
- Imbad0202/academic-research-skills [marketplace] *51230*  items=1 - Academic Research Skills for Claude Code: research → write → review → revise → f
- tldraw/tldraw [mcp-server] *50837*  items=1 - Draw and visually collaborate with your agents on tldraw's canvas.
- metabase/metabase [mcp-server] *49607*  items=1 - Lets AI clients search, explore, query, and visualize data in a Metabase instanc
- abhigyanpatwari/GitNexus [marketplace] *47829* ['product-stars'] items=1 - GitNexus: The Zero-Server Code Intelligence Engine
- PostHog/posthog [mcp-server] *40219*  items=1 - Official PostHog MCP Server for product analytics, feature flags, experiments, a
- openai/codex-plugin-cc [marketplace] *34068*  items=1 - Use Codex from Claude Code to review code or delegate tasks.
- zarazhangrui/frontend-slides [marketplace] *30423*  items=1 - Create beautiful slides on the web using a coding agent's frontend skills
- oraios/serena [mcp-server] *30177*  items=1 - A powerful toolkit for coding, providing semantic retrieval and editing capabili
- eyaltoledano/claude-task-master [marketplace] *28196*  items=1 - An AI-powered task-management system you can drop into Cursor, Lovable, Windsurf
- openai/skills [skill] *27985*  items=1 - Skills Catalog for Codex
- vercel/ai [skill] *27234* ['product-stars'] items=1 - The AI Toolkit for TypeScript. From the creators of Next.js, the AI SDK is a fre
- clockworklabs/SpacetimeDB [marketplace] *25273* ['product-stars'] items=1 - Development at the speed of light
- different-ai/openwork [mcp-server] *23993*  items=1 - Your OpenWork org's skills, plugins, workflows, and connections through one OAut
- HKUDS/AI-Trader [skill] *22732* ['product-stars'] items=1 - "AI-Trader: 100% Fully-Automated Agent-Native Trading"
- screenpipe/screenpipe [mcp-server] *21903*  items=1 - Search your local screen recordings, audio transcripts, and computer activity fr
- getpaseo/paseo [skill] *20432*  items=1 - Orchestrate multiple coding agents from desktop and mobile
- agent0ai/agent-zero [skill] *19421* ['product-stars'] items=1 - Agent Zero AI framework
- Canner/WrenAI [skill] *17840* ['product-stars'] items=1 - GenBI (Generative BI) for AI agents, an open-source, governed text-to-SQL throug
- architecture-decision-record/architecture-decision-record [skill] *17164* ['product-stars'] items=1 - Architecture decision record (ADR) examples for software planning, IT leadership
- longbridge/gpui-kit [skill] *16861* ['product-stars'] items=1 - Rust GUI components for building fantastic cross-platform desktop application by
- composio-community/awesome-codex-skills [skill] *16853*  items=1 - A curated list of practical Codex skills for automating workflows across the Cod
- travisvn/awesome-claude-skills [skill] *15356*  items=1 - A curated list of awesome Claude Skills, resources, and tools for customizing Cl
- superset-sh/superset [marketplace] *15060* ['product-stars'] items=1 - Superset is an agentic IDE to orchestrate 100+ coding agents in parallel. Run an
- millionco/react-doctor [skill] *14992* ['product-stars'] items=1 - Your agent writes bad React. This catches it
- kyegomez/OpenMythos [plugin] *14910*  items=1 - A theoretical reconstruction of the Claude Mythos architecture, built from first
- NevaMind-AI/memU [skill] *14525* ['product-stars'] items=1 - Personal memory across agents

## Random sample of 20 watch repos (of 453)
- zxkane/aws-skills [marketplace] *367*  items=1 - Claude Code plugins and agent skills for AWS development — IaC(CDK/SST), serverl reasons=['fails: pushed<=90d (117)'] src=['topic']
- tiliondev/fortress [mcp-server] *747*  items=1 - Stealth browser for AI agents: fetch pages behind Cloudflare/DataDome/CAPTCHA, e reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- openai/skills [skill] *27985*  items=1 - Skills Catalog for Codex reasons=['fails: license (None)'] src=['topic']
- sethblack/black-seo-analyzer [mcp-server] *60*  items=1 - Audit a page or crawl a whole site for technical SEO issues, locally. Compares c reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- jgravelle/jdatamunch-mcp [mcp-server] *82*  items=1 - Tabular data retrieval. Index CSV/Excel, query rows, aggregate. 99%+ savings vs  reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- VKirill/claude-lane-stack [marketplace] *122*  items=1 - Multi-agent AI coding factory for one person — Claude Code PM + Codex/Qwen/Grok/ reasons=['no corroborating signal'] src=['topic']
- blacktwist/social-media-skills [marketplace] *560*  items=1 - AI agent skills for social media content strategy, creation, and analysis across reasons=['fails: pushed<=90d (162)'] src=['topic']
- screenpipe/screenpipe [mcp-server] *21903*  items=1 - Search your local screen recordings, audio transcripts, and computer activity fr reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- modelcontextprotocol/inspector [skill] *11052* ['product-stars'] items=1 - Visual testing tool for MCP servers reasons=['fails: license (NOASSERTION)'] src=['topic']
- djadmin/fort [plugin,marketplace] *79*  items=2 - Audit and fix your Mac's security in one command. No agent, no signup, open sour reasons=['fails: pushed<=90d (93)'] src=['code', 'marketplace-expansion']
- LichAmnesia/lich-skills [plugin,marketplace] *234*  items=2 - skills-map router (picks which skill to use) + go-no-go Stage 0 gate (NO-GO is t reasons=['fails: pushed<=90d (123)'] src=['code', 'marketplace-expansion']
- marckohlbrugge/sessy [mcp-server] *939*  items=1 - Read-only Amazon SES observability: search events, inspect bounces, pull deliver reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- Infrasity-Labs/dev-gtm-claude-skills [marketplace] *136*  items=1 - Open-source Claude skills for GEO, AI discoverability, and developer GTM workflo reasons=['fails: pushed<=90d (104)'] src=['topic']
- alirezarezvani/claude-code-tresor [skill] *777*  items=1 - A world-class collection of Claude Code utilities: autonomous skills, expert age reasons=['fails: pushed<=90d (99)'] src=['topic']
- ankimcp/anki-mcp-server-addon [mcp-server] *85*  items=1 - Anki addon that exposes your flashcard collection to AI assistants via a local M reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- tuist/tuist [skill] *5825* ['product-stars'] items=1 - Your platform team, as a service reasons=['fails: license (NOASSERTION)'] src=['topic']
- kushneryk/join.cloud [mcp-server] *65*  items=1 - Collaboration rooms for AI agents. Real-time messaging + standard git. reasons=['no corroborating signal'] src=['mcp-registry']
- promptadvisers/claudex [plugin,marketplace] *152*  items=3 - Autonomous Claude + Codex review loop for Claude Code. Plan mode + read-only rev reasons=['fails: pushed<=90d (165)'] src=['code', 'marketplace-expansion']
- AIScientists-Dev/Flowtrace [skill] *485*  items=1 - Run a task with AI as a flow of steps you keep, reuse, and refine, not a one-off reasons=['fails: pushed<=90d (123)'] src=['topic']
- ivan-magda/claude-code-plugin-template [marketplace] *70*  items=1 - GitHub template for creating Claude Code plugin marketplaces. Includes plugin sc reasons=['fails: pushed<=90d (105)'] src=['topic']

## Errors
- none

## Rate limit
- REST calls this run (uncached): {"core": 7, "search": 41}; last seen: {"core": {"remaining": "4993", "limit": "5000"}, "search": {"remaining": "8", "limit": "30"}}
- GraphQL: 99 calls, cost 69, remaining 4917/5000, stopped early: False
- REST stopped early: False
- repos lacking metadata: 3470; enriched this run: 28220