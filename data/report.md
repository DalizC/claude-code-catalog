# Catalog report 2026-10-19
Mode: **token**; run time 1534s
Repos (deduped): 3046; flat entries before dedup: 21552

## Tier x type BEFORE dedup (flat entries)
- new/mcp-server: 12007
- watch/mcp-server: 2316
- listed/plugin: 2283
- verified/mcp-server: 1127
- watch/skill: 505
- verified/skill: 451
- official/plugin: 376
- verified/plugin: 362
- watch/marketplace: 345
- verified/marketplace: 332
- watch/plugin: 320
- watch/agent: 215
- verified/collection: 195
- anthropic/plugin: 165
- new/skill: 155
- new/marketplace: 126
- new/plugin: 117
- verified/agent: 53
- new/agent: 28
- anthropic/marketplace: 14
- anthropic/collection: 4
- anthropic/agent: 1
- watch/collection: 1

## Tier AFTER dedup (repos)
- verified: 1691
- watch: 468
- new: 287
- official: 256
- anthropic: 175
- listed: 169

## Type AFTER dedup (items)
- mcp-server: 1549
- plugin: 1444
- skill: 742
- marketplace: 473
- collection: 121
- agent: 50

## Primary type AFTER dedup (repos)
- mcp-server: 975
- plugin: 867
- skill: 678
- marketplace: 402
- collection: 88
- agent: 36

## Repos by discovery source family
- topic: 1231
- mcp-registry: 1098
- anthropic: 478
- code: 207
- anthropic-org: 205
- curated: 146
- marketplace-expansion: 40

## Flags (all tiers)
- product-stars: 214
- star-spike: 13
- star-anomaly: 2

## star-anomaly by tier
- new: 2

## Metadata gaps
- repos without metadata: 181
- reasons: {'unfetched': 181}

## MCP-only repos excluded: 54
- assafelovic/gpt-researcher *30163* ['ai', 'python', 'agent', 'automation', 'research'] - An autonomous agent that conducts deep research on any data using any LLM provid
- pascalorg/editor *24974* ['3d', 'architecture', 'bim', 'cad', 'editor'] - Open-source 3D architectural editor with a local CLI, MCP tools, and practical w
- mrexodia/ida-pro-mcp *13002* ['ida-plugin', 'ida-pro', 'mcp', 'mcp-server', 'modelcontextprotocol'] - AI-powered reverse engineering assistant that bridges IDA Pro with language mode
- mcp-use/mcp-use *10784* ['mcp', 'model-context-protocol', 'apps-sdk', 'mcp-apps', 'mcp-inspector'] - The fullstack MCP framework to develop MCP Apps for ChatGPT / Claude & MCP Serve
- Agents365-ai/drawio-skill *10230* ['drawio', 'diagram', 'agent-skills', 'architecture-diagram', 'claude-code'] - Agent skill that turns natural language, code, Terraform/K8s, SQL, OpenAPI, Asyn
- stickerdaniel/linkedin-mcp-server *3924* ['linkedin', 'linkedin-scraper', 'mcp', 'mcp-server', 'linkedin-mcp'] - Open-source MCP server for LinkedIn. Give Claude and any MCP-compatible AI agent
- jordan-gibbs/hyperresearch *3883* ['agents', 'agentskills', 'claude-code', 'deep-research', 'deep-research-agent'] - Convert Claude Code or Codex into the most intelligent Deep Research Agent. Coll
- taylorwilsdon/google_workspace_mcp *3370* ['ai', 'gmail', 'google-calendar', 'google-workspace', 'llm'] - Control Gmail, Google Calendar, Docs, Sheets, Slides, Chat, Forms, Tasks, Search
- duty1g/x64dbg-mcp-server *2555* ['ai-agents', 'ai-debugging', 'binary-analysis', 'claude', 'claude-code'] - x64dbg-MCP Server is a native MCP (Model Context Protocol) plugin for x64dbg tha
- redhat-et/ripwire *2457* ['ai-agents', 'claude', 'cli', 'coding-agents', 'context-engineering'] - The ripgrep of AI context: a zero-dependency C++23 CLI + MCP server for coding a
- alpic-ai/skybridge *2163* ['agent', 'ai', 'apps-sdk', 'chatgpt', 'claude'] - Skybridge is a full-stack TypeScript framework for MCP Apps and ChatGPT Apps. Ty
- kajisho5/ffmpeg-skill *1991* ['audio-processing', 'captions', 'ffmpeg', 'subtitles', 'video'] - Local video editor for coding agents: 42 FFmpeg tools with a machine-readable co
- study8677/repobrain *1350* ['claude-code', 'codex-cli', 'developer-tools', 'mcp-server', 'windsurf'] - 🧠 RepoBrain (formerly Antigravity) — Give your repo a brain. ChatGPT for your co
- agentrq/agentrq *1162* ['agentic-ai', 'agentic-workflow', 'agents', 'task', 'task-manager'] - AgentRQ: Human-in-loop realtime conversational task manager for AI Agents. Self-
- CodeAbra/iai-personal-memory-engine *912* ['claude', 'claude-code', 'local-first', 'mcp', 'mcp-server'] - A cyber brain for your AI. It never forgets a detail, remembers exactly what you

## Degradation
- registry complete: True (462 pages, 46114 entries)
- MCP servers merged from the previous catalog (not re-fetched): 0
- GraphQL 403s: 0 (secondary rate limit: 0); retries: 3; queries that gave up: 0
- HTTP retries (5xx/network): 0
- repos with stale metadata reused from the previous catalog (meta_stale): 0

## MCP Registry
- {"pages": 462, "fetched": 46114, "kept": 45518, "dropped": 596, "bad": 0, "complete": true, "excluded_remote_only": 13863, "excluded_low_signal": 16205, "fallback_merged": 0, "records": 1098, "attached_existing": 127, "new_repo": 971, "remote_only": 0, "tiers": {"official": 24, "listed": 20, "verified": 780, "new": 114, "watch": 160}}

## Top 20 by trend_7d
- morluto/rea +208886 (178.61%) ['star-spike']
- debpalash/VoiceStudio +16873 (28.54%) ['star-spike', 'product-stars']
- mattpocock/skills +9840 (3.43%) []
- cathrynlavery/diagram-design +7021 (13.8%) []
- affaan-m/ECC +6077 (2.19%) []
- DietrichGebert/ponytail +5956 (3.69%) []
- ifixai-ai/iFixAi +5801 (24.3%) ['product-stars']
- heygen-com/hyperframes +5786 (9.46%) ['product-stars']
- anthropics/claude-plugins-official +5153 (13.67%) []
- K-Dense-AI/scientific-agent-skills +4257 (8.79%) []
- Leonxlnx/taste-skill +4139 (4.36%) []
- mksglu/context-mode +4106 (15.36%) []
- obra/superpowers +3902 (1.31%) []
- paperclipai/paperclip +3765 (3.75%) []
- rohitg00/ai-engineering-from-scratch +3482 (5.15%) ['product-stars']
- tt-a1i/archify +3310 (4.03%) []
- addyosmani/agent-skills +3123 (2.97%) []
- hugohe3/ppt-master +3022 (4.99%) ['product-stars']
- lexmount/moli +2894 (17.4%) ['product-stars']
- cloudflare/security-audit-skill +2841 (10.0%) []

## Code search vs topic search
- repos found by code search: 207
- also in topic search: 15
- code-only: 176; tiers: {'verified': 90, 'watch': 66, 'new': 20}

## Top 30 by stars: anthropic
- anthropics/skills [marketplace,collection] *182047*  items=2 - Anthropic example skills
- anthropics/claude-code [marketplace,agent] *152287*  items=2 - Bundled plugins for Claude Code including Agent SDK development tools, PR review
- anthropics/claude-plugins-official [plugin,marketplace,collection] *42859*  items=3 - Directory of popular Claude Code extensions including development tools, product
- anthropics/financial-services [marketplace] *40304*  items=1 - 
- anthropics/knowledge-work-plugins [marketplace] *30266*  items=1 - 
- anthropics/claude-for-legal [marketplace] *9730*  items=1 - Reference agents, skills, and data connectors for the legal workflows we see mos
- anthropics/claude-code-action [collection] *9567*  items=1 - The official GitHub Action for running Claude Code in CI: mention @claude in iss
- anthropics/claude-code-security-review [collection] *6428*  items=1 - An official AI-powered security-review GitHub Action that uses Claude to analyze
- anthropics/claude-plugins-community [marketplace] *4692*  items=1 - 
- anthropics/commerce-agents [marketplace] *3271*  items=1 - Claude Commerce Agents: the commerce-builder plugin for building shopping and me
- anthropics/life-sciences [marketplace] *623*  items=1 - MCP servers and skills for life sciences research, data analysis, and discovery
- anthropics/k12-teacher-skills [marketplace] *573*  items=1 - Plugin marketplace for K-12 Education and Claude for Teachers.
- anthropics/healthcare [marketplace] *426*  items=1 - Claude for Healthcare — one plugin bundling payer, provider, pharma, and general
- anthropics/oncall-kit [marketplace] *242*  items=1 - 
- anthropics/claude-for-financial-advisors [plugin,marketplace] *108*  items=2 - Ready-to-run workflows for financial advisors in Claude Cowork, drawing live dat
- anthropics/claude-tag-plugins [marketplace] *63*  items=1 - Plugins that connect Claude Tag to common SaaS services, plus charting and confi
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
- obra/superpowers [plugin,skill] *301737*  items=3 - Superpowers teaches Claude brainstorming, subagent driven development with built
- mattpocock/skills [plugin] *296467*  items=2 - Matt Pocock's agent skills for real engineering — grilling, spec/ticket flows, T
- heygen-com/hyperframes [plugin] *66938* ['product-stars'] items=2 - HyperFrames by HeyGen. Write HTML, render video. Compositions, GSAP and runtime 
- ChromeDevTools/chrome-devtools-mcp [plugin,mcp-server] *53813*  items=4 - Control and inspect a live Chrome browser from your coding agent. Record perform
- confident-ai/deepeval [plugin] *18942* ['product-stars'] items=1 - Skills for adding DeepEval evaluations, tracing, datasets, Confident AI reports,
- huggingface/skills [plugin] *11182*  items=2 - Build, train, evaluate, and use open source AI models, datasets, and spaces.
- wonderwhy-er/DesktopCommanderMCP [plugin,mcp-server] *10097*  items=4 - MCP server for terminal commands, process management, and file operations across
- Eigenwise/atomic-agents [plugin,marketplace] *6287* ['product-stars'] items=3 - Comprehensive development workflow for building AI agents with the Atomic Agents
- exa-labs/exa-mcp-server [plugin,mcp-server] *5137*  items=3 - Exa AI web search, deep research, and content extraction. Provides MCP tools and
- NVIDIA/skills [plugin] *3640*  items=2 - Find the right NVIDIA skill for GPU acceleration, CUDA, AI agents, data loading,
- cloudflare/skills [plugin] *3100*  items=2 - Skills for the Cloudflare developer platform: Workers, Durable Objects, Agents S
- modelcontextprotocol/ext-apps [plugin] *2974*  items=3 - Skills for creating MCP Apps with the MCP Apps SDK
- expo/skills [plugin] *2925*  items=2 - Official Expo skills for building, deploying, upgrading, and debugging React Nat
- aws/agent-toolkit-for-aws [plugin] *2907*  items=8 - Build, deploy, and operate AI agents on AWS. Skills for scaffolding agents with 
- GoogleChrome/modern-web-guidance [plugin] *2501*  items=2 - Keep your coding agent up to date with the latest web best practices
- figma/mcp-server-guide [plugin,mcp-server] *2088*  items=4 - Figma design platform integration. Access design files, extract component inform
- stripe/ai [plugin,mcp-server] *1960*  items=3 - Stripe development plugin for Claude
- MicrosoftDocs/mcp [plugin,mcp-server] *1951*  items=3 - Access official Microsoft documentation, API references, and code samples for Az
- microsoft/azure-skills [plugin] *1576*  items=2 - Transform Claude into an Azure expert. This plugin integrates the Azure MCP serv
- atlassian/atlassian-mcp-server [plugin,mcp-server] *1105*  items=3 - Connect to Atlassian products including Jira and Confluence. Search and create i
- forcedotcom/sf-skills [plugin] *1103*  items=1 - Build Salesforce apps and agents using these core building blocks: metadata, Ape
- EpicGames/unreal-engine-skills-for-claude-code-plugin [plugin] *1091* ['star-spike'] items=2 - Control Unreal Editor directly from Claude Code via MCP. Hundreds of tools expos
- awslabs/agent-plugins [plugin] *924*  items=10 - Guide developers through adding maps, places search, geocoding, routing, and oth
- superdesigndev/superdesign-skill [plugin,skill] *841*  items=2 - Design or redesign frontend UI and marketing graphics on the Superdesign infinit
- duckdb/duckdb-skills [plugin] *609*  items=2 - DuckDB-powered skills for Claude Code: read any data file, attach and query Duck
- Shopify/Shopify-AI-Toolkit [plugin] *604*  items=2 - Shopify's AI Toolkit provides 18 development skills for building on the Shopify 
- ClickHouse/agent-skills [plugin] *550*  items=2 - 28 best practice rules for ClickHouse schema design, query optimization, and dat
- gitroomhq/postiz-agent [plugin] *523*  items=4 - Social media automation CLI for scheduling posts, managing integrations, uploadi
- makenotion/claude-code-notion-plugin [plugin] *497*  items=2 - Notion workspace integration. Search pages, create and update documents, manage 
- tavily-ai/skills [plugin] *488*  items=3 - Build AI applications with real-time web data using Tavily's search, extract, cr

## Top 30 by stars: listed
- DietrichGebert/ponytail [plugin] *167214*  items=2 - Lazy senior dev mode. Forces the simplest, shortest solution that actually works
- JuliusBrussee/caveman [plugin,skill] *113514*  items=2 - Auto-activation works differently per agent: Claude Code uses SessionStart hooks
- thedotmack/claude-mem [plugin,skill] *101659*  items=3 - Persistent memory system for Claude Code - seamlessly preserve context across se
- Egonex-AI/Understand-Anything [plugin,skill] *86914*  items=2 - Understand Anything is a Claude Code plugin that analyzes your project with a mu
- pbakaus/impeccable [plugin] *82789*  items=1 - Great design prompts require design vocabulary. Most people don't have it. You c
- mem0ai/mem0 [plugin] *67414* ['product-stars'] items=1 - Connect Mem0 to Claude to give your agent persistent memory across sessions. Cla
- mvanhorn/last30days-skill [plugin] *64683*  items=1 - last-30-days is a Claude Code skill that searches the web and delivers a structu
- coreyhaines31/marketingskills [plugin,skill] *55420*  items=3 - coreyhaines31
- DayuanJiang/next-ai-draw-io [plugin,mcp-server] *36317*  items=2 - AI-powered Draw.io diagram generation with real-time browser preview. Create flo
- mksglu/context-mode [plugin] *30833*  items=1 - MCP is the protocol for tool access. We're the virtualization layer for context.
- jarrodwatts/claude-hud [plugin,collection] *28632*  items=2 - Real-time statusline HUD for Claude Code - context health, tool activity, agent 
- alirezarezvani/claude-skills [plugin,skill] *28380*  items=2 - Playwright Pro turns your AI coding agent into a senior test automation engineer
- promptfoo/promptfoo [plugin] *26127*  items=1 - Teaches AI coding agents to create and maintain promptfoo eval suites. Encodes b
- AgriciDaniel/claude-seo [plugin] *19207*  items=1 - Comprehensive SEO analysis plugin for Claude Code. Performs full site audits wit
- browser-use/browser-harness [plugin] *18491*  items=1 - Open-source browser agent driven via CDP — direct browser control, 79K stars, YC
- Jeffallan/claude-skills [plugin,skill,collection] *11935*  items=3 - 66 specialized skills for full-stack development: 12 language experts (Python, T
- nicobailon/visual-explainer [plugin,collection] *10522*  items=3 - An agent skill that turns complex terminal output into styled HTML pages you act
- revfactory/harness [plugin,agent] *9204*  items=3 - Harness leverages Claude Code's agent team system to decompose complex tasks int
- Eventual-Inc/Daft [plugin] *5807* ['product-stars'] items=1 - Skills for working with Daft, a high-performance data engine for AI and multimod
- clidey/whodb [plugin] *5035* ['product-stars'] items=1 - Database management tools for Claude Code. Query databases, explore schemas, ana
- nyldn/claude-octopus [plugin] *4259*  items=2 - Multi-LLM orchestration for Claude Code and Cowork. Coordinates 8 AI providers (
- giancarloerra/SocratiCode [plugin,mcp-server] *3342*  items=2 - Enterprise-grade (40m+ lines) codebase intelligence in a zero-setup, private and
- Chachamaru127/claude-code-harness [plugin,agent] *3174*  items=2 - Autonomous Plan → Work → Review cycle for Claude Code. Go-native engine with 25×
- AgriciDaniel/claude-blog [plugin] *2424*  items=1 - AI-powered blog creation and optimization skill with 20 commands, 4 specialized 
- nizos/tdd-guard [plugin,collection] *2362*  items=2 - Enforces Test-Driven Development by intercepting file operations in Claude Code.
- AminForou/mcp-gsc [plugin] *1974*  items=1 - Connect Google Search Console to Claude Code. Query rankings, inspect URLs, audi
- severity1/claude-code-prompt-improver [plugin] *1958*  items=1 - Intelligent prompt optimization using skill-based architecture. Enriches vague p
- kenryu42/cc-safety-net [plugin,collection] *1670*  items=3 - Block destructive git and filesystem commands before execution
- codeaholicguy/ai-devkit [plugin] *1648*  items=1 - A structured software development toolkit that helps Claude Code follow senior-e
- activeloopai/hivemind [plugin,skill,collection] *1628*  items=5 - Cloud-backed persistent memory for Claude Code powered by Deeplake. Automaticall

## Top 30 by stars: verified
- morluto/rea [mcp-server] *325839* ['star-spike'] items=1 - Reverse engineer anything from your terminal or agent with one CLI and MCP serve
- affaan-m/ECC [collection] *283438*  items=1 - Top-notch, well-written resources covering "just about everything" from core eng
- firecrawl/firecrawl [skill] *192859* ['product-stars'] items=1 - Supercharge your AI agents with data from the web and beyond. Building the libra
- vercel/next.js [marketplace] *143079* ['product-stars'] items=1 - The React Framework
- nextlevelbuilder/ui-ux-pro-max-skill [marketplace] *137320*  items=1 - An AI skill that provides design intelligence for building professional UI/UX ac
- garrytan/gstack [agent] *136878*  items=1 - Garry Tan's (Y Combinator) Claude Code setup and "open source software factory" 
- browser-use/browser-use [mcp-server] *118450*  items=1 - Control a real Chrome browser to complete any task: fill forms, extract data, bo
- addyosmani/agent-skills [marketplace] *108283*  items=1 - Production-grade engineering skills for AI coding agents.
- paperclipai/paperclip [skill,mcp-server] *104257*  items=2 - The open-source app everyone uses to manage agents at work
- nexu-io/open-design [marketplace] *102273*  items=1 - The 1st Collaborative AI Design Agent Workspace. Local-first and open source. Cr
- Leonxlnx/taste-skill [marketplace] *98964*  items=1 - Agent skills that give coding agents taste: art direction, reference images and 
- ruvnet/RuView [marketplace] *98689*  items=1 - π RuView turns commodity WiFi signals into real-time spatial intelligence, vital
- storybookjs/storybook [marketplace] *91331* ['product-stars'] items=1 - Storybook is the industry standard workshop for building, documenting, and testi
- koala73/worldmonitor [skill,mcp-server] *88759* ['product-stars'] items=2 - Real-time global intelligence dashboard. AI-powered news aggregation, geopolitic
- D4Vinci/Scrapling [mcp-server] *88530*  items=1 - Web scraping with stealth HTTP, real browsers, and Cloudflare bypass. CSS select
- tt-a1i/archify [skill,collection] *85497*  items=2 - An Agent Skill for Claude Code that generates interactive architecture, workflow
- bytedance/deer-flow [skill] *84096*  items=1 - An open-source long-horizon SuperAgent harness that researches, codes, and creat
- netdata/netdata [mcp-server] *81006*  items=1 - Real-time infrastructure monitoring with metrics, logs, alerts, and ML-based ano
- shareAI-lab/learn-claude-code [collection] *78800*  items=1 - A really interesting analysis of how coding agents like Claude Code are designed
- ComposioHQ/awesome-claude-skills [skill] *77401*  items=1 - A curated list of awesome Claude Skills, resources, and tools for customizing Cl
- ruvnet/ruflo [marketplace,mcp-server] *76678*  items=2 - 🌊 The original agent harness. Deploy intelligent multi-player swarms, coordinate
- debpalash/VoiceStudio [skill] *75989* ['star-spike', 'product-stars'] items=1 - VoiceStudio is the open-source, fully-local ElevenLabs alternative — voice cloni
- headroomlabs-ai/headroom [marketplace] *75927*  items=1 - Compress tool outputs, logs, files, and RAG chunks before they reach the LLM. 20
- career-ops-hq/career-ops [marketplace] *75535*  items=1 - Open-source AI job search agent and job finder: scan job boards, score each job 
- thedaviddias/Front-End-Checklist [marketplace,mcp-server] *74506* ['product-stars'] items=2 - 🗂 The essential checklist for modern web development, for humans and AI agents
- rohitg00/ai-engineering-from-scratch [skill] *71121* ['product-stars'] items=1 - Learn AI Engineering! Learn it. Build it. Ship it for others.
- usestrix/strix [skill] *69636* ['product-stars'] items=1 - Open-source AI penetration testing tool to find and fix your app’s vulnerabiliti
- calesthio/OpenMontage [skill] *69607*  items=1 - World's first open-source, agentic video production system. 12 production pipeli
- shanraisshan/claude-code-best-practice [skill] *67719*  items=1 - from vibe coding to agentic engineering - practice makes claude perfect
- xtekky/gpt4free [skill] *66894* ['product-stars'] items=1 - The official gpt4free repository | various collection of powerful language model

## Top 30 by stars: watch
- f/prompts.chat [marketplace] *173462* ['product-stars'] items=1 - f.k.a. Awesome ChatGPT Prompts. Share, discover, and collect prompts from the co
- opendatalab/MinerU [skill] *82012* ['product-stars'] items=1 - Transforms complex documents like PDFs and Office docs into LLM-ready markdown/J
- code-yeongyu/oh-my-openagent [skill] *70175* ['product-stars'] items=1 - OmO: Just type "mass ulw" keyword with your prompt. Now you are the master of gr
- bmad-code-org/BMAD-METHOD [skill] *54311* ['product-stars'] items=1 - Breakthrough Method for Agile Ai Driven Development
- Imbad0202/academic-research-skills [marketplace] *52832*  items=1 - Academic Research Skills for Claude Code: research → write → review → revise → f
- tldraw/tldraw [mcp-server] *50975*  items=1 - Draw and visually collaborate with your agents on tldraw's canvas.
- metabase/metabase [mcp-server] *49729*  items=1 - Lets AI clients search, explore, query, and visualize data in a Metabase instanc
- abhigyanpatwari/GitNexus [marketplace] *47939* ['product-stars'] items=1 - GitNexus: The Zero-Server Code Intelligence Engine
- PostHog/posthog [mcp-server] *40340*  items=1 - Official PostHog MCP Server for product analytics, feature flags, experiments, a
- openai/codex-plugin-cc [marketplace] *34369*  items=1 - Use Codex from Claude Code to review code or delegate tasks.
- zarazhangrui/frontend-slides [marketplace] *30872*  items=1 - Create beautiful slides on the web using a coding agent's frontend skills
- oraios/serena [mcp-server] *30374*  items=1 - A powerful toolkit for coding, providing semantic retrieval and editing capabili
- eyaltoledano/claude-task-master [marketplace] *28244*  items=1 - An AI-powered task-management system you can drop into Cursor, Lovable, Windsurf
- openai/skills [skill] *28155*  items=1 - Skills Catalog for Codex
- vercel/ai [skill] *27389* ['product-stars'] items=1 - The AI Toolkit for TypeScript. From the creators of Next.js, the AI SDK is a fre
- clockworklabs/SpacetimeDB [marketplace] *25315* ['product-stars'] items=1 - Development at the speed of light
- different-ai/openwork [mcp-server] *24171*  items=1 - Your OpenWork org's skills, plugins, workflows, and connections through one OAut
- HKUDS/AI-Trader [skill] *22850* ['product-stars'] items=1 - "AI-Trader: 100% Fully-Automated Agent-Native Trading"
- screenpipe/screenpipe [mcp-server] *21982*  items=1 - Search your local screen recordings, audio transcripts, and computer activity fr
- getpaseo/paseo [skill] *21335*  items=1 - Orchestrate multiple coding agents from desktop and mobile
- agent0ai/agent-zero [skill] *19511* ['product-stars'] items=1 - Agent Zero AI framework
- longbridge/gpui-kit [skill] *18162* ['product-stars'] items=1 - Rust GUI components for building fantastic cross-platform desktop application by
- Canner/WrenAI [skill] *17897* ['product-stars'] items=1 - GenBI (Generative BI) for AI agents, an open-source, governed text-to-SQL throug
- architecture-decision-record/architecture-decision-record [skill] *17244* ['product-stars'] items=1 - Architecture decision record (ADR) examples for software planning, IT leadership
- composio-community/awesome-codex-skills [skill] *16957*  items=1 - A curated list of practical Codex skills for automating workflows across the Cod
- travisvn/awesome-claude-skills [skill] *15457*  items=1 - A curated list of awesome Claude Skills, resources, and tools for customizing Cl
- superset-sh/superset [marketplace] *15349* ['product-stars'] items=1 - Superset is an agentic IDE to orchestrate 100+ coding agents in parallel. Run an
- millionco/react-doctor [skill] *15015* ['product-stars'] items=1 - Your agent writes bad React. This catches it
- kyegomez/OpenMythos [plugin] *14907*  items=1 - A theoretical reconstruction of the Claude Mythos architecture, built from first
- NevaMind-AI/memU [skill] *14554* ['product-stars'] items=1 - Personal memory across agents

## Random sample of 20 watch repos (of 468)
- coltonjosephdean-rgb/talk-to-anyone [marketplace] *67*  items=1 - Talk to anyone: /coach persona plugin for Claude Code — research any public figu reasons=['fails: pushed<=90d (103)'] src=['topic']
- rasinmuhammed/misata [mcp-server] *70*  items=1 - Local, offline: multi-table synthetic data with joins that hold and exact totals reasons=['no corroborating signal'] src=['mcp-registry']
- zarazhangrui/frontend-slides [marketplace] *30872*  items=1 - Create beautiful slides on the web using a coding agent's frontend skills reasons=['fails: pushed<=90d (117)'] src=['topic']
- pouyahasanamreji/continuum [mcp-server] *98*  items=1 - Shared memory + orchestration for your coding agents. Local-first MCP, vector RA reasons=['fails: pushed<=90d (157)', 'fails: license (None)'] src=['mcp-registry']
- devantler-tech/ksail [mcp-server] *165*  items=1 - SDK for creating, managing, and operating Kubernetes clusters and workloads with reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- max-sixty/worktrunk [marketplace] *9296*  items=1 - Worktrunk is a CLI for Git worktree management, designed for parallel AI agent w reasons=['fails: license (NOASSERTION)'] src=['topic']
- pivoshenko/kasetto [skill] *210*  items=1 - 📼 Declarative AI agent environment manager, written in Rust reasons=['fails: license (NOASSERTION)'] src=['topic']
- portel-dev/ncp [mcp-server] *100*  items=1 - N-to-1 MCP Orchestration. Unified gateway for multiple MCP servers with intellig reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- Arize-ai/phoenix [marketplace] *11905* ['product-stars'] items=1 - AI Observability & Evaluation reasons=['fails: license (NOASSERTION)'] src=['topic']
- mozilla/firefox-devtools-mcp [marketplace,mcp-server] *502*  items=2 - Model Context Protocol server for Firefox DevTools - enables AI assistants to in reasons=['fails: license (NOASSERTION)'] src=['code', 'mcp-registry']
- sneg55/agent-starter [marketplace] *76*  items=1 - A toolkit of skills, templates, and guides for bootstrapping AI-agent-friendly p reasons=['no corroborating signal'] src=['code']
- kody-hq/kody [mcp-server] *812*  items=1 - Your agents' cloud for individuals and teams. Search, execute, packages, jobs, a reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- Rito-w/skills-manager [skill] *196*  items=1 - A cross-platform skills manager for AI IDEs. Search marketplace, download locall reasons=['fails: pushed<=90d (106)', 'fails: license (None)'] src=['topic']
- amirfish1/claude-command-center [marketplace] *197*  items=1 - One local board for Claude Code, Codex, Cursor and 5 more coding agents. See whi reasons=['fails: license (NOASSERTION)'] src=['topic']
- modelcontextprotocol/registry [mcp-server] *7378*  items=7 - Check how to contact a business website, and whether that contact path actually  reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- tuist/tuist [skill] *5835* ['product-stars'] items=1 - Your platform team, as a service reasons=['fails: license (NOASSERTION)'] src=['topic']
- gradion-ai/ipybox [mcp-server] *76*  items=1 - Unified execution environment for Python code, shell commands, and programmatic  reasons=['fails: pushed<=90d (129)'] src=['mcp-registry']
- Equilateral-AI/equilateral-agents-open-core [marketplace] *61*  items=1 - Production-ready multi-agent orchestration. Revolutionary architecture for enter reasons=['fails: license (NOASSERTION)'] src=['code']
- xr843/Master-skill [skill] *469*  items=1 - FoJin-powered Buddhist AI persona framework — source-grounded, boundary-aware, f reasons=['fails: license (NOASSERTION)'] src=['topic']
- acogood/diffmode_free [marketplace] *165*  items=1 - Free guerrilla growth tactics for startups, the kind your competitors won't come reasons=['no corroborating signal'] src=['topic']

## Errors
- none

## Rate limit
- REST calls this run (uncached): {"core": 106, "search": 41}; last seen: {"core": {"remaining": "4894", "limit": "5000"}, "search": {"remaining": "29", "limit": "30"}}
- GraphQL: 139 calls, cost 51, remaining 4854/5000, stopped early: False
- REST stopped early: False
- repos lacking metadata: 3625; enriched this run: 30195