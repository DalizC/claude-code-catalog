# Catalog report 2026-10-16
Mode: **token**; run time 2014s
Repos (deduped): 3003; flat entries before dedup: 20849

## Tier x type BEFORE dedup (flat entries)
- new/mcp-server: 11735
- listed/plugin: 2283
- watch/mcp-server: 2054
- verified/mcp-server: 1120
- watch/skill: 515
- verified/skill: 446
- official/plugin: 376
- watch/marketplace: 363
- verified/marketplace: 309
- watch/plugin: 306
- verified/plugin: 247
- watch/agent: 204
- verified/collection: 191
- anthropic/plugin: 165
- new/skill: 144
- new/marketplace: 125
- new/plugin: 116
- verified/agent: 49
- new/agent: 27
- anthropic/marketplace: 14
- anthropic/collection: 4
- anthropic/agent: 1
- watch/collection: 1

## Tier AFTER dedup (repos)
- verified: 1662
- watch: 470
- new: 271
- official: 256
- anthropic: 175
- listed: 169

## Type AFTER dedup (items)
- mcp-server: 1519
- plugin: 1306
- skill: 734
- marketplace: 459
- collection: 120
- agent: 46

## Primary type AFTER dedup (repos)
- mcp-server: 955
- plugin: 865
- skill: 671
- marketplace: 391
- collection: 88
- agent: 33

## Repos by discovery source family
- topic: 1226
- mcp-registry: 1070
- anthropic: 478
- anthropic-org: 205
- code: 179
- curated: 145
- marketplace-expansion: 39

## Flags (all tiers)
- product-stars: 210
- star-spike: 15
- star-anomaly: 4

## star-anomaly by tier
- new: 3
- watch: 1

## Metadata gaps
- repos without metadata: 181
- reasons: {'unfetched': 181}

## MCP-only repos excluded: 54
- assafelovic/gpt-researcher *30121* ['ai', 'python', 'agent', 'automation', 'research'] - An autonomous agent that conducts deep research on any data using any LLM provid
- pascalorg/editor *24902* ['3d', 'architecture', 'bim', 'cad', 'editor'] - Open-source 3D architectural editor with a local CLI, MCP tools, and practical w
- mrexodia/ida-pro-mcp *12925* ['ida-plugin', 'ida-pro', 'mcp', 'mcp-server', 'modelcontextprotocol'] - AI-powered reverse engineering assistant that bridges IDA Pro with language mode
- mcp-use/mcp-use *10771* ['mcp', 'model-context-protocol', 'apps-sdk', 'mcp-apps', 'mcp-inspector'] - The fullstack MCP framework to develop MCP Apps for ChatGPT / Claude & MCP Serve
- Agents365-ai/drawio-skill *10177* ['drawio', 'diagram', 'agent-skills', 'architecture-diagram', 'claude-code'] - Agent skill that turns natural language, code, Terraform/K8s, SQL, OpenAPI, Asyn
- 21st-dev/magic-mcp *6044* ['21st', 'claude', 'cursor', 'mcp', 'model-context-protocol'] - It's like v0, but in your Cursor / Claude Code / Windsurf: search 10,000+ React/
- stickerdaniel/linkedin-mcp-server *3889* ['linkedin', 'linkedin-scraper', 'mcp', 'mcp-server', 'linkedin-mcp'] - Open-source MCP server for LinkedIn. Give Claude and any MCP-compatible AI agent
- jordan-gibbs/hyperresearch *3865* ['agents', 'agentskills', 'claude-code', 'deep-research', 'deep-research-agent'] - Convert Claude Code or Codex into the most intelligent Deep Research Agent. Coll
- taylorwilsdon/google_workspace_mcp *3344* ['ai', 'gmail', 'google-calendar', 'google-workspace', 'llm'] - Control Gmail, Google Calendar, Docs, Sheets, Slides, Chat, Forms, Tasks, Search
- duty1g/x64dbg-mcp-server *2517* ['ai-agents', 'ai-debugging', 'binary-analysis', 'claude', 'claude-code'] - x64dbg-MCP Server is a native MCP (Model Context Protocol) plugin for x64dbg tha
- redhat-et/ripwire *2449* ['ai-agents', 'claude', 'cli', 'coding-agents', 'context-engineering'] - The ripgrep of AI context: a zero-dependency C++23 CLI + MCP server for coding a
- alpic-ai/skybridge *2160* ['agent', 'ai', 'apps-sdk', 'chatgpt', 'claude'] - Skybridge is a full-stack TypeScript framework for MCP Apps and ChatGPT Apps. Ty
- kajisho5/ffmpeg-skill *1965* ['audio-processing', 'captions', 'ffmpeg', 'subtitles', 'video'] - Local video editor for coding agents: 42 FFmpeg tools with a machine-readable co
- study8677/repobrain *1327* ['claude-code', 'codex-cli', 'developer-tools', 'mcp-server', 'windsurf'] - 🧠 RepoBrain (formerly Antigravity) — Give your repo a brain. ChatGPT for your co
- agentrq/agentrq *1158* ['agentic-ai', 'agentic-workflow', 'agents', 'task', 'task-manager'] - AgentRQ: Human-in-loop realtime conversational task manager for AI Agents. Self-

## Degradation
- registry complete: True (445 pages, 44498 entries)
- MCP servers merged from the previous catalog (not re-fetched): 0
- GraphQL 403s: 0 (secondary rate limit: 0); retries: 10; queries that gave up: 0
- HTTP retries (5xx/network): 0
- repos with stale metadata reused from the previous catalog (meta_stale): 0

## MCP Registry
- {"pages": 445, "fetched": 44498, "kept": 43961, "dropped": 537, "bad": 0, "complete": true, "excluded_remote_only": 13067, "excluded_low_signal": 15985, "fallback_merged": 0, "records": 1070, "attached_existing": 119, "new_repo": 951, "remote_only": 0, "tiers": {"official": 24, "listed": 20, "verified": 772, "new": 102, "watch": 152}}

## Top 20 by trend_7d
- morluto/rea +246176 (818.92%) ['star-spike']
- debpalash/VoiceStudio +14429 (26.19%) ['star-spike', 'product-stars']
- mattpocock/skills +11710 (4.16%) []
- cathrynlavery/diagram-design +9311 (19.92%) []
- DietrichGebert/ponytail +5832 (3.67%) []
- ifixai-ai/iFixAi +5805 (25.68%) ['star-spike', 'product-stars']
- heygen-com/hyperframes +5406 (9.11%) ['product-stars']
- affaan-m/ECC +5095 (1.85%) []
- lexmount/moli +5050 (36.84%) ['star-spike', 'product-stars']
- hugohe3/ppt-master +4220 (7.24%) ['product-stars']
- mksglu/context-mode +4111 (15.95%) []
- rohitg00/ai-engineering-from-scratch +4108 (6.24%) ['product-stars']
- paperclipai/paperclip +3900 (3.94%) []
- tt-a1i/archify +3753 (4.67%) []
- addyosmani/agent-skills +3647 (3.52%) []
- Leonxlnx/taste-skill +3626 (3.86%) []
- cloudflare/security-audit-skill +3468 (13.09%) []
- obra/superpowers +3467 (1.17%) []
- calesthio/OpenMontage +3291 (5.03%) []
- pbakaus/impeccable +2981 (3.79%) []

## Code search vs topic search
- repos found by code search: 179
- also in topic search: 7
- code-only: 159; tiers: {'watch': 72, 'verified': 73, 'new': 14}

## Top 30 by stars: anthropic
- anthropics/skills [marketplace,collection] *181441*  items=2 - Anthropic example skills
- anthropics/claude-code [marketplace,agent] *151109*  items=2 - Bundled plugins for Claude Code including Agent SDK development tools, PR review
- anthropics/financial-services [marketplace] *40026*  items=1 - 
- anthropics/claude-plugins-official [plugin,marketplace,collection] *39383*  items=3 - Directory of popular Claude Code extensions including development tools, product
- anthropics/knowledge-work-plugins [marketplace] *29822*  items=1 - 
- anthropics/claude-for-legal [marketplace] *9695*  items=1 - Reference agents, skills, and data connectors for the legal workflows we see mos
- anthropics/claude-code-action [collection] *9528*  items=1 - The official GitHub Action for running Claude Code in CI: mention @claude in iss
- anthropics/claude-code-security-review [collection] *6395*  items=1 - An official AI-powered security-review GitHub Action that uses Claude to analyze
- anthropics/claude-plugins-community [marketplace] *4662*  items=1 - 
- anthropics/commerce-agents [marketplace] *3247*  items=1 - Claude Commerce Agents: the commerce-builder plugin for building shopping and me
- anthropics/life-sciences [marketplace] *621*  items=1 - MCP servers and skills for life sciences research, data analysis, and discovery
- anthropics/k12-teacher-skills [marketplace] *565*  items=1 - Plugin marketplace for K-12 Education and Claude for Teachers.
- anthropics/healthcare [marketplace] *425*  items=1 - Claude for Healthcare — one plugin bundling payer, provider, pharma, and general
- anthropics/oncall-kit [marketplace] *231*  items=1 - 
- anthropics/claude-for-financial-advisors [plugin,marketplace] *103*  items=2 - Ready-to-run workflows for financial advisors in Claude Cowork, drawing live dat
- anthropics/claude-tag-plugins [marketplace] *61*  items=1 - Plugins that connect Claude Tag to common SaaS services, plus charting and confi
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
- obra/superpowers [plugin,skill] *300103*  items=3 - Superpowers teaches Claude brainstorming, subagent driven development with built
- mattpocock/skills [plugin] *293132*  items=2 - Matt Pocock's agent skills for real engineering — grilling, spec/ticket flows, T
- heygen-com/hyperframes [plugin] *64736* ['product-stars'] items=2 - HyperFrames by HeyGen. Write HTML, render video. Compositions, GSAP and runtime 
- ChromeDevTools/chrome-devtools-mcp [plugin,mcp-server] *53622*  items=4 - Control and inspect a live Chrome browser from your coding agent. Record perform
- confident-ai/deepeval [plugin] *18897* ['product-stars'] items=1 - Skills for adding DeepEval evaluations, tracing, datasets, Confident AI reports,
- huggingface/skills [plugin] *11173*  items=2 - Build, train, evaluate, and use open source AI models, datasets, and spaces.
- wonderwhy-er/DesktopCommanderMCP [plugin,mcp-server] *10070*  items=4 - MCP server for terminal commands, process management, and file operations across
- Eigenwise/atomic-agents [plugin,marketplace] *6286* ['product-stars'] items=3 - Comprehensive development workflow for building AI agents with the Atomic Agents
- exa-labs/exa-mcp-server [plugin,mcp-server] *5135*  items=3 - Exa AI web search, deep research, and content extraction. Provides MCP tools and
- NVIDIA/skills [plugin] *3610*  items=2 - Find the right NVIDIA skill for GPU acceleration, CUDA, AI agents, data loading,
- cloudflare/skills [plugin] *3072*  items=2 - Skills for the Cloudflare developer platform: Workers, Durable Objects, Agents S
- modelcontextprotocol/ext-apps [plugin] *2963*  items=3 - Skills for creating MCP Apps with the MCP Apps SDK
- aws/agent-toolkit-for-aws [plugin] *2888*  items=8 - Build, deploy, and operate AI agents on AWS. Skills for scaffolding agents with 
- expo/skills [plugin] *2870*  items=2 - Official Expo skills for building, deploying, upgrading, and debugging React Nat
- GoogleChrome/modern-web-guidance [plugin] *2482*  items=2 - Keep your coding agent up to date with the latest web best practices
- figma/mcp-server-guide [plugin,mcp-server] *2078*  items=4 - Figma design platform integration. Access design files, extract component inform
- stripe/ai [plugin,mcp-server] *1952*  items=3 - Stripe development plugin for Claude
- MicrosoftDocs/mcp [plugin,mcp-server] *1948*  items=3 - Access official Microsoft documentation, API references, and code samples for Az
- microsoft/azure-skills [plugin] *1572*  items=2 - Transform Claude into an Azure expert. This plugin integrates the Azure MCP serv
- atlassian/atlassian-mcp-server [plugin,mcp-server] *1100*  items=3 - Connect to Atlassian products including Jira and Confluence. Search and create i
- forcedotcom/sf-skills [plugin] *1094*  items=1 - Build Salesforce apps and agents using these core building blocks: metadata, Ape
- awslabs/agent-plugins [plugin] *921*  items=10 - Guide developers through adding maps, places search, geocoding, routing, and oth
- superdesigndev/superdesign-skill [plugin,skill] *787*  items=2 - Design or redesign frontend UI and marketing graphics on the Superdesign infinit
- duckdb/duckdb-skills [plugin] *609*  items=2 - DuckDB-powered skills for Claude Code: read any data file, attach and query Duck
- Shopify/Shopify-AI-Toolkit [plugin] *599*  items=2 - Shopify's AI Toolkit provides 18 development skills for building on the Shopify 
- ClickHouse/agent-skills [plugin] *549*  items=2 - 28 best practice rules for ClickHouse schema design, query optimization, and dat
- EpicGames/unreal-engine-skills-for-claude-code-plugin [plugin] *545*  items=2 - Control Unreal Editor directly from Claude Code via MCP. Hundreds of tools expos
- gitroomhq/postiz-agent [plugin] *519*  items=4 - Social media automation CLI for scheduling posts, managing integrations, uploadi
- makenotion/claude-code-notion-plugin [plugin] *496*  items=2 - Notion workspace integration. Search pages, create and update documents, manage 
- tavily-ai/skills [plugin] *488*  items=3 - Build AI applications with real-time web data using Tavily's search, extract, cr

## Top 30 by stars: listed
- DietrichGebert/ponytail [plugin] *164597*  items=2 - Lazy senior dev mode. Forces the simplest, shortest solution that actually works
- JuliusBrussee/caveman [plugin,skill] *112750*  items=2 - Auto-activation works differently per agent: Claude Code uses SessionStart hooks
- thedotmack/claude-mem [plugin,skill] *101103*  items=3 - Persistent memory system for Claude Code - seamlessly preserve context across se
- Egonex-AI/Understand-Anything [plugin,skill] *86523*  items=2 - Understand Anything is a Claude Code plugin that analyzes your project with a mu
- pbakaus/impeccable [plugin] *81706*  items=1 - Great design prompts require design vocabulary. Most people don't have it. You c
- mem0ai/mem0 [plugin] *67257* ['product-stars'] items=1 - Connect Mem0 to Claude to give your agent persistent memory across sessions. Cla
- mvanhorn/last30days-skill [plugin] *64453*  items=1 - last-30-days is a Claude Code skill that searches the web and delivers a structu
- coreyhaines31/marketingskills [plugin,skill] *54946*  items=3 - coreyhaines31
- DayuanJiang/next-ai-draw-io [plugin,mcp-server] *36268*  items=2 - AI-powered Draw.io diagram generation with real-time browser preview. Create flo
- mksglu/context-mode [plugin] *29891*  items=1 - MCP is the protocol for tool access. We're the virtualization layer for context.
- jarrodwatts/claude-hud [plugin,collection] *28564*  items=2 - Real-time statusline HUD for Claude Code - context health, tool activity, agent 
- alirezarezvani/claude-skills [plugin,skill] *28250*  items=2 - Playwright Pro turns your AI coding agent into a senior test automation engineer
- promptfoo/promptfoo [plugin] *26031*  items=1 - Teaches AI coding agents to create and maintain promptfoo eval suites. Encodes b
- AgriciDaniel/claude-seo [plugin] *19015*  items=1 - Comprehensive SEO analysis plugin for Claude Code. Performs full site audits wit
- browser-use/browser-harness [plugin] *18452*  items=1 - Open-source browser agent driven via CDP — direct browser control, 79K stars, YC
- Jeffallan/claude-skills [plugin,skill,collection] *11891*  items=3 - 66 specialized skills for full-stack development: 12 language experts (Python, T
- nicobailon/visual-explainer [plugin,collection] *10459*  items=3 - An agent skill that turns complex terminal output into styled HTML pages you act
- revfactory/harness [plugin,agent] *9178*  items=3 - Harness leverages Claude Code's agent team system to decompose complex tasks int
- Eventual-Inc/Daft [plugin] *5804* ['product-stars'] items=1 - Skills for working with Daft, a high-performance data engine for AI and multimod
- clidey/whodb [plugin] *5035* ['product-stars'] items=1 - Database management tools for Claude Code. Query databases, explore schemas, ana
- nyldn/claude-octopus [plugin] *4241*  items=2 - Multi-LLM orchestration for Claude Code and Cowork. Coordinates 8 AI providers (
- giancarloerra/SocratiCode [plugin,mcp-server] *3336*  items=2 - Enterprise-grade (40m+ lines) codebase intelligence in a zero-setup, private and
- Chachamaru127/claude-code-harness [plugin,agent] *3166*  items=2 - Autonomous Plan → Work → Review cycle for Claude Code. Go-native engine with 25×
- AgriciDaniel/claude-blog [plugin] *2399*  items=1 - AI-powered blog creation and optimization skill with 20 commands, 4 specialized 
- nizos/tdd-guard [plugin,collection] *2361*  items=2 - Enforces Test-Driven Development by intercepting file operations in Claude Code.
- severity1/claude-code-prompt-improver [plugin] *1953*  items=1 - Intelligent prompt optimization using skill-based architecture. Enriches vague p
- AminForou/mcp-gsc [plugin] *1941*  items=1 - Connect Google Search Console to Claude Code. Query rankings, inspect URLs, audi
- codeaholicguy/ai-devkit [plugin] *1646*  items=1 - A structured software development toolkit that helps Claude Code follow senior-e
- kenryu42/cc-safety-net [plugin,collection] *1638*  items=3 - Block destructive git and filesystem commands before execution
- activeloopai/hivemind [plugin,skill,collection] *1628*  items=5 - Cloud-backed persistent memory for Claude Code powered by Deeplake. Automaticall

## Top 30 by stars: verified
- affaan-m/ECC [collection] *280597*  items=1 - Top-notch, well-written resources covering "just about everything" from core eng
- morluto/rea [mcp-server] *276237* ['star-spike'] items=1 - Reverse engineer anything from your terminal or agent with one CLI and MCP serve
- multica-ai/andrej-karpathy-skills [collection] *220132*  items=1 - A drop-in CLAUDE.md distilling four behavioral guidelines for LLM-assisted codin
- firecrawl/firecrawl [skill] *191970* ['product-stars'] items=1 - Supercharge your AI agents with data from the web and beyond. Building the libra
- vercel/next.js [marketplace] *143027* ['product-stars'] items=1 - The React Framework
- garrytan/gstack [agent] *136595*  items=1 - Garry Tan's (Y Combinator) Claude Code setup and "open source software factory" 
- nextlevelbuilder/ui-ux-pro-max-skill [marketplace] *136314*  items=1 - An AI skill that provides design intelligence for building professional UI/UX ac
- browser-use/browser-use [mcp-server] *118130*  items=1 - Control a real Chrome browser to complete any task: fill forms, extract data, bo
- addyosmani/agent-skills [marketplace] *107114*  items=1 - Production-grade engineering skills for AI coding agents.
- paperclipai/paperclip [skill,mcp-server] *102839*  items=2 - The open-source app everyone uses to manage agents at work
- nexu-io/open-design [marketplace] *101405*  items=1 - The 1st Collaborative AI Design Agent Workspace. Local-first and open source. Cr
- ruvnet/RuView [marketplace] *98232*  items=1 - π RuView turns commodity WiFi signals into real-time spatial intelligence, vital
- Leonxlnx/taste-skill [marketplace] *97512*  items=1 - Agent skills that give coding agents taste: art direction, reference images and 
- storybookjs/storybook [marketplace] *91315* ['product-stars'] items=1 - Storybook is the industry standard workshop for building, documenting, and testi
- koala73/worldmonitor [skill,mcp-server] *88526* ['product-stars'] items=2 - Real-time global intelligence dashboard. AI-powered news aggregation, geopolitic
- D4Vinci/Scrapling [mcp-server] *87967*  items=1 - Web scraping with stealth HTTP, real browsers, and Cloudflare bypass. CSS select
- tt-a1i/archify [skill,collection] *84150*  items=2 - An Agent Skill for Claude Code that generates interactive architecture, workflow
- bytedance/deer-flow [skill] *83927*  items=1 - An open-source long-horizon SuperAgent harness that researches, codes, and creat
- netdata/netdata [mcp-server] *80968*  items=1 - Real-time infrastructure monitoring with metrics, logs, alerts, and ML-based ano
- shareAI-lab/learn-claude-code [collection] *78658*  items=1 - A really interesting analysis of how coding agents like Claude Code are designed
- ComposioHQ/awesome-claude-skills [skill] *77208*  items=1 - A curated list of awesome Claude Skills, resources, and tools for customizing Cl
- headroomlabs-ai/headroom [marketplace] *75468*  items=1 - Compress tool outputs, logs, files, and RAG chunks before they reach the LLM. 20
- ruvnet/ruflo [marketplace,mcp-server] *75259*  items=2 - 🌊 The original agent harness. Deploy intelligent multi-player swarms, coordinate
- career-ops-hq/career-ops [marketplace] *75079*  items=1 - Open-source AI job search agent and job finder: scan job boards, score each job 
- thedaviddias/Front-End-Checklist [marketplace,mcp-server] *74475* ['product-stars'] items=2 - 🗂 The essential checklist for modern web development, for humans and AI agents
- rohitg00/ai-engineering-from-scratch [skill] *69890* ['product-stars'] items=1 - Learn AI Engineering! Learn it. Build it. Ship it for others.
- debpalash/VoiceStudio [skill] *69524* ['star-spike', 'product-stars'] items=1 - VoiceStudio is the open-source, fully-local ElevenLabs alternative — voice cloni
- usestrix/strix [skill] *68864* ['product-stars'] items=1 - Open-source AI penetration testing tool to find and fix your app’s vulnerabiliti
- calesthio/OpenMontage [skill] *68668*  items=1 - World's first open-source, agentic video production system. 12 production pipeli
- shanraisshan/claude-code-best-practice [skill] *67620*  items=1 - from vibe coding to agentic engineering - practice makes claude perfect

## Top 30 by stars: watch
- f/prompts.chat [marketplace] *173111* ['product-stars'] items=1 - f.k.a. Awesome ChatGPT Prompts. Share, discover, and collect prompts from the co
- opendatalab/MinerU [skill] *81844* ['product-stars'] items=1 - Transforms complex documents like PDFs and Office docs into LLM-ready markdown/J
- code-yeongyu/oh-my-openagent [skill] *70088* ['product-stars'] items=1 - OmO: Just type "mass ulw" keyword with your prompt. Now you are the master of gr
- bmad-code-org/BMAD-METHOD [skill] *54201* ['product-stars'] items=1 - Breakthrough Method for Agile Ai Driven Development
- Imbad0202/academic-research-skills [marketplace] *52301*  items=1 - Academic Research Skills for Claude Code: research → write → review → revise → f
- tldraw/tldraw [mcp-server] *50946*  items=1 - Draw and visually collaborate with your agents on tldraw's canvas.
- metabase/metabase [mcp-server] *49693*  items=1 - Lets AI clients search, explore, query, and visualize data in a Metabase instanc
- abhigyanpatwari/GitNexus [marketplace] *47905* ['product-stars'] items=1 - GitNexus: The Zero-Server Code Intelligence Engine
- PostHog/posthog [mcp-server] *40303*  items=1 - Official PostHog MCP Server for product analytics, feature flags, experiments, a
- openai/codex-plugin-cc [marketplace] *34277*  items=1 - Use Codex from Claude Code to review code or delegate tasks.
- zarazhangrui/frontend-slides [marketplace] *30738*  items=1 - Create beautiful slides on the web using a coding agent's frontend skills
- oraios/serena [mcp-server] *30304*  items=1 - A powerful toolkit for coding, providing semantic retrieval and editing capabili
- eyaltoledano/claude-task-master [marketplace] *28231*  items=1 - An AI-powered task-management system you can drop into Cursor, Lovable, Windsurf
- openai/skills [skill] *28095*  items=1 - Skills Catalog for Codex
- vercel/ai [skill] *27342* ['product-stars'] items=1 - The AI Toolkit for TypeScript. From the creators of Next.js, the AI SDK is a fre
- clockworklabs/SpacetimeDB [marketplace] *25302* ['product-stars'] items=1 - Development at the speed of light
- different-ai/openwork [mcp-server] *24132*  items=1 - Your OpenWork org's skills, plugins, workflows, and connections through one OAut
- HKUDS/AI-Trader [skill] *22802* ['product-stars'] items=1 - "AI-Trader: 100% Fully-Automated Agent-Native Trading"
- screenpipe/screenpipe [mcp-server] *21954*  items=1 - Search your local screen recordings, audio transcripts, and computer activity fr
- getpaseo/paseo [skill] *21036*  items=1 - Orchestrate multiple coding agents from desktop and mobile
- agent0ai/agent-zero [skill] *19485* ['product-stars'] items=1 - Agent Zero AI framework
- Canner/WrenAI [skill] *17877* ['product-stars'] items=1 - GenBI (Generative BI) for AI agents, an open-source, governed text-to-SQL throug
- longbridge/gpui-kit [skill] *17672* ['product-stars'] items=1 - Rust GUI components for building fantastic cross-platform desktop application by
- architecture-decision-record/architecture-decision-record [skill] *17220* ['product-stars'] items=1 - Architecture decision record (ADR) examples for software planning, IT leadership
- composio-community/awesome-codex-skills [skill] *16915*  items=1 - A curated list of practical Codex skills for automating workflows across the Cod
- travisvn/awesome-claude-skills [skill] *15430*  items=1 - A curated list of awesome Claude Skills, resources, and tools for customizing Cl
- superset-sh/superset [marketplace] *15248* ['product-stars'] items=1 - Superset is an agentic IDE to orchestrate 100+ coding agents in parallel. Run an
- millionco/react-doctor [skill] *15007* ['product-stars'] items=1 - Your agent writes bad React. This catches it
- kyegomez/OpenMythos [plugin] *14911*  items=1 - A theoretical reconstruction of the Claude Mythos architecture, built from first
- NevaMind-AI/memU [skill] *14546* ['product-stars'] items=1 - Personal memory across agents

## Random sample of 20 watch repos (of 470)
- Koroqe/claude-code-sdlc [marketplace] *52*  items=1 - Turn Claude Code into an autonomous software development team — 16 specialized a reasons=['no corroborating signal'] src=['topic']
- portel-dev/ncp [mcp-server] *100*  items=1 - N-to-1 MCP Orchestration. Unified gateway for multiple MCP servers with intellig reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- joshua-zyy/academic-paper-writer [marketplace] *115*  items=1 - 面向 CS / AI / ML 领域的证据驱动、分节推进的论文写作 Agent Skill。 reasons=['no corroborating signal'] src=['topic']
- nxtg-ai/forge-orchestrator [mcp-server] *162*  items=1 - Forge orchestrator MCP server for Claude Code (alpha). Codex/Gemini runners are  reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- bromoket/x64dbg_mcp [mcp-server] *131*  items=1 - MCP server for x64dbg debugger - 23 mega-tools for AI-powered reverse engineerin reasons=['fails: pushed<=90d (129)'] src=['mcp-registry']
- acogood/diffmode_free [marketplace] *165*  items=1 - Free guerrilla growth tactics for startups, the kind your competitors won't come reasons=['no corroborating signal'] src=['topic']
- roberto-mello/lavra [marketplace] *52*  items=1 - A plugin with compound engineering workflows and memory for AI coding agents reasons=['no corroborating signal'] src=['topic']
- nirholas/pump-fun-sdk [mcp-server] *134*  items=1 - Build extend and maintain pump - Token creation buying selling migration fee col reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- Canner/WrenAI [skill] *17877* ['product-stars'] items=1 - GenBI (Generative BI) for AI agents, an open-source, governed text-to-SQL throug reasons=['fails: license (NOASSERTION)'] src=['topic']
- califio/skills [plugin,marketplace] *61*  items=3 - Claude Code plugins and Codex skills from Calif.io for AI-assisted security rese reasons=['fails: pushed<=90d (168)'] src=['code', 'marketplace-expansion']
- djadmin/fort [plugin,marketplace] *80*  items=2 - Audit and fix your Mac's security in one command. No agent, no signup, open sour reasons=['fails: pushed<=90d (98)'] src=['code', 'marketplace-expansion']
- getsentry/toolkit [mcp-server] *929*  items=1 - MCP server for Sentry - error monitoring, issue tracking, and debugging for AI a reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- tractorjuice/arc-kit [marketplace] *2258*  items=1 - The Enterprise Architecture Governance Harness — strategy, architecture, deliver reasons=['fails: license (NOASSERTION)'] src=['topic']
- VKirill/claude-lane-stack [marketplace] *122*  items=1 - Multi-agent AI coding factory for one person — Claude Code PM + Codex/Qwen/Grok/ reasons=['no corroborating signal'] src=['topic']
- Dicklesworthstone/destructive_command_guard [skill] *6176* ['product-stars'] items=1 - The Destructive Command Guard (dcg) is for blocking dangerous git and shell comm reasons=['fails: license (NOASSERTION)'] src=['topic']
- gilbarbara/react-joyride [skill] *7877* ['product-stars'] items=1 - Create guided tours in your apps reasons=['fails: pushed<=90d (98)'] src=['topic']
- dreamrec/LivePilot [mcp-server] *83*  items=1 - 317-tool agentic MCP production system for Ableton Live 12 — device atlas, sampl reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- jurisupport/jurisupport-plugins [plugin,marketplace] *85*  items=2 - JuriSupport 송무 워크플로우와 변호사 개인 프로필 완성 플러그인 — 사건기록 분석, 서면 작성, 인용 검증, 직접 읽고 활용할 수 있는 reasons=['fails: license (NOASSERTION)'] src=['code', 'marketplace-expansion']
- AIScientists-Dev/Flowtrace [skill] *485*  items=1 - Run a task with AI as a flow of steps you keep, reuse, and refine, not a one-off reasons=['fails: pushed<=90d (128)'] src=['topic']
- vyayasan/kyc-analyst [plugin] *58*  items=1 - Open-source KYC/AML compliance automation. 17 human-in-the-loop checkpoints, fre reasons=['fails: pushed<=90d (103)'] src=['topic']

## Errors
- none

## Rate limit
- REST calls this run (uncached): {"core": 92, "search": 124}; last seen: {"core": {"remaining": "4908", "limit": "5000"}, "search": {"remaining": "24", "limit": "30"}}
- GraphQL: 206 calls, cost 99, remaining 4744/5000, stopped early: False
- REST stopped early: False
- repos lacking metadata: 3578; enriched this run: 28912