# Catalog report 2026-10-15
Mode: **token**; run time 1975s
Repos (deduped): 2997; flat entries before dedup: 20451

## Tier x type BEFORE dedup (flat entries)
- new/mcp-server: 11600
- listed/plugin: 2283
- watch/mcp-server: 2031
- verified/mcp-server: 1103
- watch/skill: 498
- verified/skill: 444
- verified/plugin: 387
- official/plugin: 376
- verified/marketplace: 333
- watch/marketplace: 248
- watch/agent: 216
- verified/collection: 190
- anthropic/plugin: 165
- watch/plugin: 156
- new/skill: 150
- new/marketplace: 71
- verified/agent: 52
- new/plugin: 47
- new/agent: 29
- anthropic/marketplace: 14
- anthropic/collection: 4
- anthropic/agent: 1
- watch/collection: 1

## Tier AFTER dedup (repos)
- verified: 1663
- watch: 462
- new: 270
- official: 256
- anthropic: 175
- listed: 171

## Type AFTER dedup (items)
- mcp-server: 1497
- plugin: 1434
- skill: 731
- marketplace: 474
- collection: 119
- agent: 52

## Primary type AFTER dedup (repos)
- mcp-server: 938
- plugin: 872
- skill: 665
- marketplace: 397
- collection: 86
- agent: 39

## Repos by discovery source family
- topic: 1216
- mcp-registry: 1055
- anthropic: 480
- code: 214
- anthropic-org: 205
- curated: 142
- marketplace-expansion: 41

## Flags (all tiers)
- product-stars: 208
- star-spike: 13
- star-anomaly: 2

## star-anomaly by tier
- new: 2

## Metadata gaps
- repos without metadata: 181
- reasons: {'unfetched': 181}

## MCP-only repos excluded: 52
- assafelovic/gpt-researcher *30100* ['ai', 'python', 'agent', 'automation', 'research'] - An autonomous agent that conducts deep research on any data using any LLM provid
- pascalorg/editor *24875* ['3d', 'architecture', 'bim', 'cad', 'editor'] - Open-source 3D architectural editor with a local CLI, MCP tools, and practical w
- mrexodia/ida-pro-mcp *12874* ['ida-plugin', 'ida-pro', 'mcp', 'mcp-server', 'modelcontextprotocol'] - AI-powered reverse engineering assistant that bridges IDA Pro with language mode
- mcp-use/mcp-use *10763* ['mcp', 'model-context-protocol', 'apps-sdk', 'mcp-apps', 'mcp-inspector'] - The fullstack MCP framework to develop MCP Apps for ChatGPT / Claude & MCP Serve
- Agents365-ai/drawio-skill *10155* ['drawio', 'diagram', 'agent-skills', 'architecture-diagram', 'claude-code'] - Agent skill that turns natural language, code, Terraform/K8s, SQL, OpenAPI, Asyn
- stickerdaniel/linkedin-mcp-server *3875* ['linkedin', 'linkedin-scraper', 'mcp', 'mcp-server', 'linkedin-mcp'] - Open-source MCP server for LinkedIn. Give Claude and any MCP-compatible AI agent
- jordan-gibbs/hyperresearch *3856* ['agents', 'agentskills', 'claude-code', 'deep-research', 'deep-research-agent'] - Convert Claude Code or Codex into the most intelligent Deep Research Agent. Coll
- taylorwilsdon/google_workspace_mcp *3339* ['ai', 'gmail', 'google-calendar', 'google-workspace', 'llm'] - Control Gmail, Google Calendar, Docs, Sheets, Slides, Chat, Forms, Tasks, Search
- duty1g/x64dbg-mcp-server *2506* ['ai-agents', 'ai-debugging', 'binary-analysis', 'claude', 'claude-code'] - x64dbg-MCP Server is a native MCP (Model Context Protocol) plugin for x64dbg tha
- redhat-et/ripwire *2447* ['ai-agents', 'claude', 'cli', 'coding-agents', 'context-engineering'] - The ripgrep of AI context: a zero-dependency C++23 CLI + MCP server for coding a
- alpic-ai/skybridge *2162* ['agent', 'ai', 'apps-sdk', 'chatgpt', 'claude'] - Skybridge is a full-stack TypeScript framework for MCP Apps and ChatGPT Apps. Ty
- jau123/MeiGen-AI-Design-MCP *1783* ['ai-image-generation', 'claude', 'claude-code', 'comfyui', 'mcp'] - Supports GPT Image 2, Seedance & ComfyUI, with a 1,400+ prompt library, carefull
- study8677/repobrain *1326* ['claude-code', 'codex-cli', 'developer-tools', 'mcp-server', 'windsurf'] - 🧠 RepoBrain (formerly Antigravity) — Give your repo a brain. ChatGPT for your co
- agentrq/agentrq *1155* ['agentic-ai', 'agentic-workflow', 'agents', 'task', 'task-manager'] - AgentRQ: Human-in-loop realtime conversational task manager for AI Agents. Self-
- CodeAbra/iai-personal-memory-engine *908* ['claude', 'claude-code', 'local-first', 'mcp', 'mcp-server'] - A cyber brain for your AI. It never forgets a detail, remembers exactly what you

## Degradation
- registry complete: True (438 pages, 43798 entries)
- MCP servers merged from the previous catalog (not re-fetched): 0
- GraphQL 403s: 0 (secondary rate limit: 0); retries: 14; queries that gave up: 0
- HTTP retries (5xx/network): 0
- repos with stale metadata reused from the previous catalog (meta_stale): 0

## MCP Registry
- {"pages": 438, "fetched": 43798, "kept": 43264, "dropped": 534, "bad": 0, "complete": true, "excluded_remote_only": 12649, "excluded_low_signal": 15881, "fallback_merged": 0, "records": 1055, "attached_existing": 121, "new_repo": 934, "remote_only": 0, "tiers": {"official": 24, "listed": 18, "verified": 758, "new": 102, "watch": 153}}

## Top 20 by trend_7d
- morluto/rea +232819 (1377.63%) ['star-spike']
- debpalash/VoiceStudio +11938 (21.67%) ['product-stars']
- mattpocock/skills +11639 (4.16%) []
- cathrynlavery/diagram-design +10246 (22.66%) []
- DietrichGebert/ponytail +5990 (3.8%) []
- heygen-com/hyperframes +5193 (8.85%) ['product-stars']
- ifixai-ai/iFixAi +5153 (22.8%) ['product-stars']
- lexmount/moli +4786 (34.91%) ['star-spike', 'product-stars']
- affaan-m/ECC +4571 (1.66%) []
- tt-a1i/archify +4301 (5.42%) []
- hugohe3/ppt-master +3868 (6.64%) ['product-stars']
- addyosmani/agent-skills +3789 (3.68%) []
- paperclipai/paperclip +3721 (3.78%) []
- mksglu/context-mode +3662 (14.28%) []
- rohitg00/ai-engineering-from-scratch +3466 (5.27%) ['product-stars']
- cloudflare/security-audit-skill +3180 (12.01%) []
- Leonxlnx/taste-skill +3076 (3.29%) []
- calesthio/OpenMontage +2968 (4.54%) []
- pbakaus/impeccable +2963 (3.78%) []
- thedotmack/claude-mem +2933 (3.0%) []

## Code search vs topic search
- repos found by code search: 214
- also in topic search: 17
- code-only: 179; tiers: {'verified': 96, 'watch': 65, 'new': 18}

## Top 30 by stars: anthropic
- anthropics/skills [marketplace,collection] *181215*  items=2 - Anthropic example skills
- anthropics/claude-code [marketplace,agent] *150924*  items=2 - Bundled plugins for Claude Code including Agent SDK development tools, PR review
- anthropics/financial-services [marketplace] *39890*  items=1 - 
- anthropics/claude-plugins-official [plugin,marketplace,collection] *38133*  items=3 - Directory of popular Claude Code extensions including development tools, product
- anthropics/knowledge-work-plugins [marketplace] *29708*  items=1 - 
- anthropics/claude-for-legal [marketplace] *9682*  items=1 - Reference agents, skills, and data connectors for the legal workflows we see mos
- anthropics/claude-code-action [collection] *9518*  items=1 - The official GitHub Action for running Claude Code in CI: mention @claude in iss
- anthropics/claude-code-security-review [collection] *6385*  items=1 - An official AI-powered security-review GitHub Action that uses Claude to analyze
- anthropics/claude-plugins-community [marketplace] *4652*  items=1 - 
- anthropics/commerce-agents [marketplace] *3239*  items=1 - Claude Commerce Agents: the commerce-builder plugin for building shopping and me
- anthropics/life-sciences [marketplace] *621*  items=1 - MCP servers and skills for life sciences research, data analysis, and discovery
- anthropics/k12-teacher-skills [marketplace] *565*  items=1 - Plugin marketplace for K-12 Education and Claude for Teachers.
- anthropics/healthcare [marketplace] *425*  items=1 - Claude for Healthcare — one plugin bundling payer, provider, pharma, and general
- anthropics/oncall-kit [marketplace] *222*  items=1 - 
- anthropics/claude-for-financial-advisors [plugin,marketplace] *102*  items=2 - Ready-to-run workflows for financial advisors in Claude Cowork, drawing live dat
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
- obra/superpowers [plugin,skill] *299257*  items=3 - Superpowers teaches Claude brainstorming, subagent driven development with built
- mattpocock/skills [plugin] *291603*  items=2 - Matt Pocock's agent skills for real engineering — grilling, spec/ticket flows, T
- heygen-com/hyperframes [plugin] *63877* ['product-stars'] items=2 - HyperFrames by HeyGen. Write HTML, render video. Compositions, GSAP and runtime 
- ChromeDevTools/chrome-devtools-mcp [plugin,mcp-server] *53560*  items=4 - Control and inspect a live Chrome browser from your coding agent. Record perform
- confident-ai/deepeval [plugin] *18875* ['product-stars'] items=1 - Skills for adding DeepEval evaluations, tracing, datasets, Confident AI reports,
- huggingface/skills [plugin] *11169*  items=2 - Build, train, evaluate, and use open source AI models, datasets, and spaces.
- wonderwhy-er/DesktopCommanderMCP [plugin,mcp-server] *10058*  items=4 - MCP server for terminal commands, process management, and file operations across
- Eigenwise/atomic-agents [plugin,marketplace] *6283* ['product-stars'] items=3 - Comprehensive development workflow for building AI agents with the Atomic Agents
- exa-labs/exa-mcp-server [plugin,mcp-server] *5131*  items=3 - Exa AI web search, deep research, and content extraction. Provides MCP tools and
- NVIDIA/skills [plugin] *3603*  items=2 - Find the right NVIDIA skill for GPU acceleration, CUDA, AI agents, data loading,
- cloudflare/skills [plugin] *3063*  items=2 - Skills for the Cloudflare developer platform: Workers, Durable Objects, Agents S
- modelcontextprotocol/ext-apps [plugin] *2958*  items=3 - Skills for creating MCP Apps with the MCP Apps SDK
- aws/agent-toolkit-for-aws [plugin] *2878*  items=8 - Build, deploy, and operate AI agents on AWS. Skills for scaffolding agents with 
- expo/skills [plugin] *2856*  items=2 - Official Expo skills for building, deploying, upgrading, and debugging React Nat
- GoogleChrome/modern-web-guidance [plugin] *2474*  items=2 - Keep your coding agent up to date with the latest web best practices
- figma/mcp-server-guide [plugin,mcp-server] *2073*  items=4 - Figma design platform integration. Access design files, extract component inform
- MicrosoftDocs/mcp [plugin,mcp-server] *1948*  items=3 - Access official Microsoft documentation, API references, and code samples for Az
- stripe/ai [plugin,mcp-server] *1943*  items=3 - Stripe development plugin for Claude
- microsoft/azure-skills [plugin] *1571*  items=2 - Transform Claude into an Azure expert. This plugin integrates the Azure MCP serv
- atlassian/atlassian-mcp-server [plugin,mcp-server] *1098*  items=3 - Connect to Atlassian products including Jira and Confluence. Search and create i
- forcedotcom/sf-skills [plugin] *1091*  items=1 - Build Salesforce apps and agents using these core building blocks: metadata, Ape
- awslabs/agent-plugins [plugin] *919*  items=10 - Guide developers through adding maps, places search, geocoding, routing, and oth
- superdesigndev/superdesign-skill [plugin,skill] *714*  items=2 - Design or redesign frontend UI and marketing graphics on the Superdesign infinit
- duckdb/duckdb-skills [plugin] *608*  items=2 - DuckDB-powered skills for Claude Code: read any data file, attach and query Duck
- Shopify/Shopify-AI-Toolkit [plugin] *596*  items=2 - Shopify's AI Toolkit provides 18 development skills for building on the Shopify 
- ClickHouse/agent-skills [plugin] *548*  items=2 - 28 best practice rules for ClickHouse schema design, query optimization, and dat
- EpicGames/unreal-engine-skills-for-claude-code-plugin [plugin] *542*  items=2 - Control Unreal Editor directly from Claude Code via MCP. Hundreds of tools expos
- gitroomhq/postiz-agent [plugin] *517*  items=3 - Social media automation CLI for scheduling posts, managing integrations, uploadi
- makenotion/claude-code-notion-plugin [plugin] *495*  items=2 - Notion workspace integration. Search pages, create and update documents, manage 
- tavily-ai/skills [plugin] *488*  items=3 - Build AI applications with real-time web data using Tavily's search, extract, cr

## Top 30 by stars: listed
- DietrichGebert/ponytail [plugin] *163775*  items=2 - Lazy senior dev mode. Forces the simplest, shortest solution that actually works
- JuliusBrussee/caveman [plugin,skill] *111962*  items=2 - Auto-activation works differently per agent: Claude Code uses SessionStart hooks
- thedotmack/claude-mem [plugin,skill] *100818*  items=3 - Persistent memory system for Claude Code - seamlessly preserve context across se
- Egonex-AI/Understand-Anything [plugin,skill] *86343*  items=2 - Understand Anything is a Claude Code plugin that analyzes your project with a mu
- pbakaus/impeccable [plugin] *81295*  items=1 - Great design prompts require design vocabulary. Most people don't have it. You c
- mem0ai/mem0 [plugin] *67210* ['product-stars'] items=1 - Connect Mem0 to Claude to give your agent persistent memory across sessions. Cla
- mvanhorn/last30days-skill [plugin] *64322*  items=1 - last-30-days is a Claude Code skill that searches the web and delivers a structu
- coreyhaines31/marketingskills [plugin,skill] *54787*  items=3 - coreyhaines31
- DayuanJiang/next-ai-draw-io [plugin] *36251* ['product-stars'] items=1 - AI-powered Draw.io diagram generation with real-time browser preview. Create flo
- mksglu/context-mode [plugin] *29312*  items=1 - MCP is the protocol for tool access. We're the virtualization layer for context.
- jarrodwatts/claude-hud [plugin,collection] *28535*  items=2 - Real-time statusline HUD for Claude Code - context health, tool activity, agent 
- alirezarezvani/claude-skills [plugin,skill] *28207*  items=2 - Playwright Pro turns your AI coding agent into a senior test automation engineer
- promptfoo/promptfoo [plugin] *26001*  items=1 - Teaches AI coding agents to create and maintain promptfoo eval suites. Encodes b
- AgriciDaniel/claude-seo [plugin] *18956*  items=1 - Comprehensive SEO analysis plugin for Claude Code. Performs full site audits wit
- browser-use/browser-harness [plugin] *18436*  items=1 - Open-source browser agent driven via CDP — direct browser control, 79K stars, YC
- Jeffallan/claude-skills [plugin,skill,collection] *11877*  items=3 - 66 specialized skills for full-stack development: 12 language experts (Python, T
- nicobailon/visual-explainer [plugin,collection] *10437*  items=3 - An agent skill that turns complex terminal output into styled HTML pages you act
- revfactory/harness [plugin,agent] *9178*  items=3 - Harness leverages Claude Code's agent team system to decompose complex tasks int
- Eventual-Inc/Daft [plugin] *5803* ['product-stars'] items=1 - Skills for working with Daft, a high-performance data engine for AI and multimod
- clidey/whodb [plugin] *5037* ['product-stars'] items=1 - Database management tools for Claude Code. Query databases, explore schemas, ana
- nyldn/claude-octopus [plugin] *4237*  items=2 - Multi-LLM orchestration for Claude Code and Cowork. Coordinates 8 AI providers (
- giancarloerra/SocratiCode [plugin,mcp-server] *3336*  items=2 - Enterprise-grade (40m+ lines) codebase intelligence in a zero-setup, private and
- Chachamaru127/claude-code-harness [plugin,agent] *3164*  items=2 - Autonomous Plan → Work → Review cycle for Claude Code. Go-native engine with 25×
- AgriciDaniel/claude-blog [plugin] *2392*  items=1 - AI-powered blog creation and optimization skill with 20 commands, 4 specialized 
- nizos/tdd-guard [plugin,collection] *2361*  items=2 - Enforces Test-Driven Development by intercepting file operations in Claude Code.
- severity1/claude-code-prompt-improver [plugin] *1952*  items=1 - Intelligent prompt optimization using skill-based architecture. Enriches vague p
- AminForou/mcp-gsc [plugin] *1932*  items=1 - Connect Google Search Console to Claude Code. Query rankings, inspect URLs, audi
- codeaholicguy/ai-devkit [plugin] *1647*  items=1 - A structured software development toolkit that helps Claude Code follow senior-e
- kenryu42/cc-safety-net [plugin,collection] *1632*  items=3 - Block destructive git and filesystem commands before execution
- activeloopai/hivemind [plugin,skill,collection] *1626*  items=5 - Cloud-backed persistent memory for Claude Code powered by Deeplake. Automaticall

## Top 30 by stars: verified
- affaan-m/ECC [collection] *279614*  items=1 - Top-notch, well-written resources covering "just about everything" from core eng
- morluto/rea [mcp-server] *249719* ['star-spike'] items=1 - Reverse engineer anything from your terminal or agent with one CLI and MCP serve
- multica-ai/andrej-karpathy-skills [collection] *219874*  items=1 - A drop-in CLAUDE.md distilling four behavioral guidelines for LLM-assisted codin
- firecrawl/firecrawl [skill] *191639* ['product-stars'] items=1 - Supercharge your AI agents with data from the web and beyond. Building the libra
- vercel/next.js [marketplace] *143017* ['product-stars'] items=1 - The React Framework
- garrytan/gstack [agent] *136438*  items=1 - Garry Tan's (Y Combinator) Claude Code setup and "open source software factory" 
- nextlevelbuilder/ui-ux-pro-max-skill [marketplace] *135937*  items=1 - An AI skill that provides design intelligence for building professional UI/UX ac
- browser-use/browser-use [mcp-server] *118015*  items=1 - Control a real Chrome browser to complete any task: fill forms, extract data, bo
- addyosmani/agent-skills [marketplace] *106761*  items=1 - Production-grade engineering skills for AI coding agents.
- paperclipai/paperclip [skill,mcp-server] *102271*  items=2 - The open-source app everyone uses to manage agents at work
- nexu-io/open-design [marketplace] *101198*  items=1 - The 1st Collaborative AI Design Agent Workspace. Local-first and open source. Cr
- ruvnet/RuView [marketplace] *98028*  items=1 - π RuView turns commodity WiFi signals into real-time spatial intelligence, vital
- Leonxlnx/taste-skill [marketplace] *96651*  items=1 - Agent skills that give coding agents taste: art direction, reference images and 
- storybookjs/storybook [marketplace] *91297* ['product-stars'] items=1 - Storybook is the industry standard workshop for building, documenting, and testi
- koala73/worldmonitor [skill,mcp-server] *88473* ['product-stars'] items=2 - Real-time global intelligence dashboard. AI-powered news aggregation, geopolitic
- D4Vinci/Scrapling [mcp-server] *87680*  items=1 - Web scraping with stealth HTTP, real browsers, and Cloudflare bypass. CSS select
- bytedance/deer-flow [skill] *83878*  items=1 - An open-source long-horizon SuperAgent harness that researches, codes, and creat
- tt-a1i/archify [skill,collection] *83698*  items=2 - An Agent Skill for Claude Code that generates interactive architecture, workflow
- netdata/netdata [mcp-server] *80951*  items=1 - Real-time infrastructure monitoring with metrics, logs, alerts, and ML-based ano
- shareAI-lab/learn-claude-code [collection] *78603*  items=1 - A really interesting analysis of how coding agents like Claude Code are designed
- ComposioHQ/awesome-claude-skills [skill] *77136*  items=1 - A curated list of awesome Claude Skills, resources, and tools for customizing Cl
- headroomlabs-ai/headroom [marketplace] *75383*  items=1 - Compress tool outputs, logs, files, and RAG chunks before they reach the LLM. 20
- ruvnet/ruflo [marketplace,mcp-server] *74716*  items=2 - 🌊 The original agent harness. Deploy intelligent multi-player swarms, coordinate
- career-ops-hq/career-ops [marketplace] *74654*  items=1 - Open-source AI job search agent and job finder: scan job boards, score each job 
- thedaviddias/Front-End-Checklist [marketplace,mcp-server] *74467* ['product-stars'] items=2 - 🗂 The essential checklist for modern web development, for humans and AI agents
- rohitg00/ai-engineering-from-scratch [skill] *69248* ['product-stars'] items=1 - Learn it. Build it. Ship it for others.
- usestrix/strix [skill] *68648* ['product-stars'] items=1 - Open-source AI penetration testing tool to find and fix your app’s vulnerabiliti
- calesthio/OpenMontage [skill] *68345*  items=1 - World's first open-source, agentic video production system. 12 production pipeli
- shanraisshan/claude-code-best-practice [skill] *67559*  items=1 - from vibe coding to agentic engineering - practice makes claude perfect
- debpalash/VoiceStudio [skill] *67033* ['product-stars'] items=1 - VoiceStudio is the open-source, fully-local ElevenLabs alternative — voice cloni

## Top 30 by stars: watch
- f/prompts.chat [marketplace] *173029* ['product-stars'] items=1 - f.k.a. Awesome ChatGPT Prompts. Share, discover, and collect prompts from the co
- opendatalab/MinerU [skill] *81771* ['product-stars'] items=1 - Transforms complex documents like PDFs and Office docs into LLM-ready markdown/J
- code-yeongyu/oh-my-openagent [skill] *70044* ['product-stars'] items=1 - OmO: Just type "mass ulw" keyword with your prompt. Now you are the master of gr
- bmad-code-org/BMAD-METHOD [skill] *54154* ['product-stars'] items=1 - Breakthrough Method for Agile Ai Driven Development
- Imbad0202/academic-research-skills [marketplace] *52033*  items=1 - Academic Research Skills for Claude Code: research → write → review → revise → f
- tldraw/tldraw [mcp-server] *50927*  items=1 - Draw and visually collaborate with your agents on tldraw's canvas.
- metabase/metabase [mcp-server] *49673*  items=1 - Lets AI clients search, explore, query, and visualize data in a Metabase instanc
- abhigyanpatwari/GitNexus [marketplace] *47888* ['product-stars'] items=1 - GitNexus: The Zero-Server Code Intelligence Engine
- PostHog/posthog [mcp-server] *40286*  items=1 - Official PostHog MCP Server for product analytics, feature flags, experiments, a
- openai/codex-plugin-cc [marketplace] *34229*  items=1 - Use Codex from Claude Code to review code or delegate tasks.
- zarazhangrui/frontend-slides [marketplace] *30677*  items=1 - Create beautiful slides on the web using a coding agent's frontend skills
- oraios/serena [mcp-server] *30270*  items=1 - A powerful toolkit for coding, providing semantic retrieval and editing capabili
- eyaltoledano/claude-task-master [marketplace] *28225*  items=1 - An AI-powered task-management system you can drop into Cursor, Lovable, Windsurf
- openai/skills [skill] *28077*  items=1 - Skills Catalog for Codex
- vercel/ai [skill] *27323* ['product-stars'] items=1 - The AI Toolkit for TypeScript. From the creators of Next.js, the AI SDK is a fre
- clockworklabs/SpacetimeDB [marketplace] *25298* ['product-stars'] items=1 - Development at the speed of light
- different-ai/openwork [mcp-server] *24110*  items=1 - Your OpenWork org's skills, plugins, workflows, and connections through one OAut
- HKUDS/AI-Trader [skill] *22794* ['product-stars'] items=1 - "AI-Trader: 100% Fully-Automated Agent-Native Trading"
- screenpipe/screenpipe [mcp-server] *21946*  items=1 - Search your local screen recordings, audio transcripts, and computer activity fr
- getpaseo/paseo [skill] *20921*  items=1 - Orchestrate multiple coding agents from desktop and mobile
- agent0ai/agent-zero [skill] *19476* ['product-stars'] items=1 - Agent Zero AI framework
- Canner/WrenAI [skill] *17873* ['product-stars'] items=1 - GenBI (Generative BI) for AI agents, an open-source, governed text-to-SQL throug
- longbridge/gpui-kit [skill] *17471* ['product-stars'] items=1 - Rust GUI components for building fantastic cross-platform desktop application by
- architecture-decision-record/architecture-decision-record [skill] *17206* ['product-stars'] items=1 - Architecture decision record (ADR) examples for software planning, IT leadership
- composio-community/awesome-codex-skills [skill] *16909*  items=1 - A curated list of practical Codex skills for automating workflows across the Cod
- travisvn/awesome-claude-skills [skill] *15410*  items=1 - A curated list of awesome Claude Skills, resources, and tools for customizing Cl
- superset-sh/superset [marketplace] *15205* ['product-stars'] items=1 - Superset is an agentic IDE to orchestrate 100+ coding agents in parallel. Run an
- millionco/react-doctor [skill] *15004* ['product-stars'] items=1 - Your agent writes bad React. This catches it
- kyegomez/OpenMythos [plugin] *14910*  items=1 - A theoretical reconstruction of the Claude Mythos architecture, built from first
- NevaMind-AI/memU [skill] *14546* ['product-stars'] items=1 - Personal memory across agents

## Random sample of 20 watch repos (of 462)
- DogInfantry/claude-skill-management-consultant-B1 [marketplace] *140*  items=1 - Claude skill & plugin: turn Claude (or any LLM) into an MBB-grade management con reasons=['fails: license (NOASSERTION)'] src=['topic']
- saidutt46/domain-check [mcp-server] *307*  items=1 - Fast domain availability checker with RDAP/WHOIS — batch checks, TLD presets, an reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- eyaltoledano/claude-task-master [marketplace] *28225*  items=1 - An AI-powered task-management system you can drop into Cursor, Lovable, Windsurf reasons=['fails: pushed<=90d (169)', 'fails: license (NOASSERTION)'] src=['topic']
- r-huijts/strava-mcp [mcp-server] *500*  items=1 - MCP server for accessing Strava API reasons=['fails: pushed<=90d (123)'] src=['mcp-registry']
- tight-studio/OpenBrand [mcp-server] *800*  items=1 - Extract brand assets (logos, colors, backdrop images, brand name) from any websi reasons=['fails: pushed<=90d (156)'] src=['mcp-registry']
- getpaseo/paseo [skill] *20921*  items=1 - Orchestrate multiple coding agents from desktop and mobile reasons=['fails: license (NOASSERTION)'] src=['topic']
- pivoshenko/kasetto [skill] *210*  items=1 - 📼 Declarative AI agent environment manager, written in Rust reasons=['fails: license (NOASSERTION)'] src=['topic']
- pyth-network/pyth-crosschain [mcp-server] *248*  items=1 - Real-time and historical price feeds for 500+ crypto, equities, FX, and commodit reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- Arize-ai/phoenix [marketplace] *11840* ['product-stars'] items=1 - AI Observability & Evaluation reasons=['fails: license (NOASSERTION)'] src=['topic']
- djadmin/fort [marketplace] *80*  items=1 - Audit and fix your Mac's security in one command. No agent, no signup, open sour reasons=['fails: pushed<=90d (97)', 'no corroborating signal'] src=['code']
- promptadvisers/claudex [plugin,marketplace] *160*  items=3 - Autonomous Claude + Codex review loop for Claude Code. Plan mode + read-only rev reasons=['fails: pushed<=90d (169)'] src=['code', 'marketplace-expansion']
- kunwar-shah/claudex [mcp-server] *97*  items=1 - Persistent memory + FTS5 search MCP server for Claude Code conversation history. reasons=['fails: pushed<=90d (116)'] src=['mcp-registry']
- Rito-w/skills-manager [skill] *197*  items=1 - A cross-platform skills manager for AI IDEs. Search marketplace, download locall reasons=['fails: pushed<=90d (102)', 'fails: license (None)'] src=['topic']
- av/facts [skill] *205*  items=1 - Antidote for fluffy specs, a toolkit for fact-driven development with AI agents reasons=['fails: pushed<=90d (133)'] src=['topic']
- modelcontextprotocol/registry [mcp-server] *7360*  items=7 - Check how to contact a business website, and whether that contact path actually  reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- Dicklesworthstone/destructive_command_guard [skill] *6174* ['product-stars'] items=1 - The Destructive Command Guard (dcg) is for blocking dangerous git and shell comm reasons=['fails: license (NOASSERTION)'] src=['topic']
- jgravelle/jdocmunch-mcp [mcp-server] *204*  items=1 - Section-level doc search for .md, .rst, .adoc, .ipynb, .html, .yaml, .json, and  reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- dreamrec/LivePilot [plugin,marketplace,mcp-server] *82*  items=4 - Talk to Ableton Live 12 through your AI client. Build, edit, listen, compare, an reasons=['fails: license (NOASSERTION)'] src=['code', 'marketplace-expansion', 'mcp-registry']
- oil-oil/draw-ui [skill] *497*  items=1 - UI design & mockup skill for Claude Code & Codex, from screenshot to code. 帮你出 U reasons=['fails: license (None)'] src=['topic']
- akseolabs-seo/AK-Threads-booster [skill] *277*  items=1 - AK體 · 數據驅動的 Threads 寫文決策系統。用你的歷史貼文、演算法與社媒心理學，協助選題、起草、發文前診斷、表現預估與復盤。Data-driven T reasons=['fails: pushed<=90d (103)'] src=['topic']

## Errors
- none

## Rate limit
- REST calls this run (uncached): {"core": 85, "search": 39}; last seen: {"core": {"remaining": "4915", "limit": "5000"}, "search": {"remaining": "29", "limit": "30"}}
- GraphQL: 181 calls, cost 82, remaining 4724/5000, stopped early: False
- REST stopped early: False
- repos lacking metadata: 3540; enriched this run: 28531