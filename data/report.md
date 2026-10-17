# Catalog report 2026-10-17
Mode: **token**; run time 1473s
Repos (deduped): 3017; flat entries before dedup: 21127

## Tier x type BEFORE dedup (flat entries)
- new/mcp-server: 11839
- listed/plugin: 2283
- watch/mcp-server: 2097
- verified/mcp-server: 1120
- watch/skill: 505
- verified/skill: 444
- official/plugin: 376
- verified/plugin: 365
- watch/marketplace: 347
- verified/marketplace: 326
- watch/plugin: 300
- watch/agent: 215
- verified/collection: 193
- anthropic/plugin: 165
- new/skill: 156
- new/marketplace: 127
- new/plugin: 113
- verified/agent: 54
- new/agent: 29
- anthropic/marketplace: 14
- anthropic/collection: 4
- anthropic/agent: 1
- watch/collection: 1

## Tier AFTER dedup (repos)
- verified: 1676
- watch: 464
- new: 278
- official: 256
- anthropic: 175
- listed: 168

## Type AFTER dedup (items)
- mcp-server: 1525
- plugin: 1425
- skill: 739
- marketplace: 470
- collection: 120
- agent: 52

## Primary type AFTER dedup (repos)
- mcp-server: 953
- plugin: 866
- skill: 675
- marketplace: 397
- collection: 88
- agent: 38

## Repos by discovery source family
- topic: 1224
- mcp-registry: 1074
- anthropic: 477
- code: 213
- anthropic-org: 205
- curated: 145
- marketplace-expansion: 41

## Flags (all tiers)
- product-stars: 210
- star-spike: 14

## star-anomaly by tier
- none: 0

## Metadata gaps
- repos without metadata: 181
- reasons: {'unfetched': 181}

## MCP-only repos excluded: 53
- assafelovic/gpt-researcher *30133* ['ai', 'python', 'agent', 'automation', 'research'] - An autonomous agent that conducts deep research on any data using any LLM provid
- pascalorg/editor *24918* ['3d', 'architecture', 'bim', 'cad', 'editor'] - Open-source 3D architectural editor with a local CLI, MCP tools, and practical w
- mrexodia/ida-pro-mcp *12962* ['ida-plugin', 'ida-pro', 'mcp', 'mcp-server', 'modelcontextprotocol'] - AI-powered reverse engineering assistant that bridges IDA Pro with language mode
- mcp-use/mcp-use *10774* ['mcp', 'model-context-protocol', 'apps-sdk', 'mcp-apps', 'mcp-inspector'] - The fullstack MCP framework to develop MCP Apps for ChatGPT / Claude & MCP Serve
- Agents365-ai/drawio-skill *10193* ['drawio', 'diagram', 'agent-skills', 'architecture-diagram', 'claude-code'] - Agent skill that turns natural language, code, Terraform/K8s, SQL, OpenAPI, Asyn
- stickerdaniel/linkedin-mcp-server *3900* ['linkedin', 'linkedin-scraper', 'mcp', 'mcp-server', 'linkedin-mcp'] - Open-source MCP server for LinkedIn. Give Claude and any MCP-compatible AI agent
- jordan-gibbs/hyperresearch *3869* ['agents', 'agentskills', 'claude-code', 'deep-research', 'deep-research-agent'] - Convert Claude Code or Codex into the most intelligent Deep Research Agent. Coll
- taylorwilsdon/google_workspace_mcp *3352* ['ai', 'gmail', 'google-calendar', 'google-workspace', 'llm'] - Control Gmail, Google Calendar, Docs, Sheets, Slides, Chat, Forms, Tasks, Search
- duty1g/x64dbg-mcp-server *2524* ['ai-agents', 'ai-debugging', 'binary-analysis', 'claude', 'claude-code'] - x64dbg-MCP Server is a native MCP (Model Context Protocol) plugin for x64dbg tha
- redhat-et/ripwire *2450* ['ai-agents', 'claude', 'cli', 'coding-agents', 'context-engineering'] - The ripgrep of AI context: a zero-dependency C++23 CLI + MCP server for coding a
- alpic-ai/skybridge *2160* ['agent', 'ai', 'apps-sdk', 'chatgpt', 'claude'] - Skybridge is a full-stack TypeScript framework for MCP Apps and ChatGPT Apps. Ty
- kajisho5/ffmpeg-skill *1980* ['audio-processing', 'captions', 'ffmpeg', 'subtitles', 'video'] - Local video editor for coding agents: 42 FFmpeg tools with a machine-readable co
- study8677/repobrain *1333* ['claude-code', 'codex-cli', 'developer-tools', 'mcp-server', 'windsurf'] - 🧠 RepoBrain (formerly Antigravity) — Give your repo a brain. ChatGPT for your co
- agentrq/agentrq *1160* ['agentic-ai', 'agentic-workflow', 'agents', 'task', 'task-manager'] - AgentRQ: Human-in-loop realtime conversational task manager for AI Agents. Self-
- CodeAbra/iai-personal-memory-engine *909* ['claude', 'claude-code', 'local-first', 'mcp', 'mcp-server'] - A cyber brain for your AI. It never forgets a detail, remembers exactly what you

## Degradation
- registry complete: True (450 pages, 44976 entries)
- MCP servers merged from the previous catalog (not re-fetched): 0
- GraphQL 403s: 0 (secondary rate limit: 0); retries: 3; queries that gave up: 0
- HTTP retries (5xx/network): 0
- repos with stale metadata reused from the previous catalog (meta_stale): 0

## MCP Registry
- {"pages": 450, "fetched": 44976, "kept": 44434, "dropped": 542, "bad": 0, "complete": true, "excluded_remote_only": 13294, "excluded_low_signal": 16084, "fallback_merged": 0, "records": 1074, "attached_existing": 125, "new_repo": 949, "remote_only": 0, "tiers": {"official": 24, "listed": 20, "verified": 773, "new": 104, "watch": 153}}

## Top 20 by trend_7d
- morluto/rea +241714 (461.12%) ['star-spike']
- debpalash/VoiceStudio +15089 (26.7%) ['star-spike', 'product-stars']
- mattpocock/skills +11189 (3.95%) []
- cathrynlavery/diagram-design +8409 (17.47%) []
- ifixai-ai/iFixAi +5715 (24.73%) ['product-stars']
- affaan-m/ECC +5600 (2.03%) []
- heygen-com/hyperframes +5537 (9.24%) ['product-stars']
- DietrichGebert/ponytail +5530 (3.46%) []
- mksglu/context-mode +4299 (16.53%) []
- rohitg00/ai-engineering-from-scratch +4120 (6.22%) ['product-stars']
- lexmount/moli +4034 (26.83%) ['star-spike', 'product-stars']
- hugohe3/ppt-master +4019 (6.83%) ['product-stars']
- paperclipai/paperclip +3936 (3.96%) []
- Leonxlnx/taste-skill +3932 (4.18%) []
- obra/superpowers +3834 (1.29%) []
- K-Dense-AI/scientific-agent-skills +3471 (7.2%) []
- addyosmani/agent-skills +3341 (3.21%) []
- cloudflare/security-audit-skill +3289 (12.17%) []
- tt-a1i/archify +3226 (3.97%) []
- anthropics/claude-plugins-official +3218 (8.56%) []

## Code search vs topic search
- repos found by code search: 213
- also in topic search: 16
- code-only: 179; tiers: {'official': 1, 'verified': 91, 'watch': 68, 'new': 19}

## Top 30 by stars: anthropic
- anthropics/skills [marketplace,collection] *181640*  items=2 - Anthropic example skills
- anthropics/claude-code [marketplace,agent] *151281*  items=2 - Bundled plugins for Claude Code including Agent SDK development tools, PR review
- anthropics/claude-plugins-official [plugin,marketplace,collection] *40811*  items=3 - Directory of popular Claude Code extensions including development tools, product
- anthropics/financial-services [marketplace] *40113*  items=1 - 
- anthropics/knowledge-work-plugins [marketplace] *29909*  items=1 - 
- anthropics/claude-for-legal [marketplace] *9714*  items=1 - Reference agents, skills, and data connectors for the legal workflows we see mos
- anthropics/claude-code-action [collection] *9545*  items=1 - The official GitHub Action for running Claude Code in CI: mention @claude in iss
- anthropics/claude-code-security-review [collection] *6403*  items=1 - An official AI-powered security-review GitHub Action that uses Claude to analyze
- anthropics/claude-plugins-community [marketplace] *4671*  items=1 - 
- anthropics/commerce-agents [marketplace] *3253*  items=1 - Claude Commerce Agents: the commerce-builder plugin for building shopping and me
- anthropics/life-sciences [marketplace] *621*  items=1 - MCP servers and skills for life sciences research, data analysis, and discovery
- anthropics/k12-teacher-skills [marketplace] *568*  items=1 - Plugin marketplace for K-12 Education and Claude for Teachers.
- anthropics/healthcare [marketplace] *425*  items=1 - Claude for Healthcare — one plugin bundling payer, provider, pharma, and general
- anthropics/oncall-kit [marketplace] *238*  items=1 - 
- anthropics/claude-for-financial-advisors [plugin,marketplace] *105*  items=2 - Ready-to-run workflows for financial advisors in Claude Cowork, drawing live dat
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
- obra/superpowers [plugin,skill] *300776*  items=3 - Superpowers teaches Claude brainstorming, subagent driven development with built
- mattpocock/skills [plugin] *294257*  items=2 - Matt Pocock's agent skills for real engineering — grilling, spec/ticket flows, T
- heygen-com/hyperframes [plugin] *65449* ['product-stars'] items=2 - HyperFrames by HeyGen. Write HTML, render video. Compositions, GSAP and runtime 
- ChromeDevTools/chrome-devtools-mcp [plugin,mcp-server] *53697*  items=4 - Control and inspect a live Chrome browser from your coding agent. Record perform
- confident-ai/deepeval [plugin] *18916* ['product-stars'] items=1 - Skills for adding DeepEval evaluations, tracing, datasets, Confident AI reports,
- huggingface/skills [plugin] *11176*  items=2 - Build, train, evaluate, and use open source AI models, datasets, and spaces.
- wonderwhy-er/DesktopCommanderMCP [plugin,mcp-server] *10074*  items=4 - MCP server for terminal commands, process management, and file operations across
- Eigenwise/atomic-agents [plugin,marketplace] *6288* ['product-stars'] items=3 - Comprehensive development workflow for building AI agents with the Atomic Agents
- exa-labs/exa-mcp-server [plugin,mcp-server] *5139*  items=3 - Exa AI web search, deep research, and content extraction. Provides MCP tools and
- NVIDIA/skills [plugin] *3622*  items=2 - Find the right NVIDIA skill for GPU acceleration, CUDA, AI agents, data loading,
- cloudflare/skills [plugin] *3080*  items=2 - Skills for the Cloudflare developer platform: Workers, Durable Objects, Agents S
- modelcontextprotocol/ext-apps [plugin] *2964*  items=3 - Skills for creating MCP Apps with the MCP Apps SDK
- aws/agent-toolkit-for-aws [plugin] *2896*  items=8 - Build, deploy, and operate AI agents on AWS. Skills for scaffolding agents with 
- expo/skills [plugin] *2889*  items=2 - Official Expo skills for building, deploying, upgrading, and debugging React Nat
- GoogleChrome/modern-web-guidance [plugin] *2489*  items=2 - Keep your coding agent up to date with the latest web best practices
- figma/mcp-server-guide [plugin,mcp-server] *2079*  items=4 - Figma design platform integration. Access design files, extract component inform
- stripe/ai [plugin,mcp-server] *1953*  items=3 - Stripe development plugin for Claude
- MicrosoftDocs/mcp [plugin,mcp-server] *1950*  items=3 - Access official Microsoft documentation, API references, and code samples for Az
- microsoft/azure-skills [plugin] *1573*  items=2 - Transform Claude into an Azure expert. This plugin integrates the Azure MCP serv
- atlassian/atlassian-mcp-server [plugin,mcp-server] *1101*  items=3 - Connect to Atlassian products including Jira and Confluence. Search and create i
- forcedotcom/sf-skills [plugin] *1097*  items=1 - Build Salesforce apps and agents using these core building blocks: metadata, Ape
- awslabs/agent-plugins [plugin] *923*  items=10 - Guide developers through adding maps, places search, geocoding, routing, and oth
- superdesigndev/superdesign-skill [plugin,skill] *822*  items=2 - Design or redesign frontend UI and marketing graphics on the Superdesign infinit
- duckdb/duckdb-skills [plugin] *609*  items=2 - DuckDB-powered skills for Claude Code: read any data file, attach and query Duck
- Shopify/Shopify-AI-Toolkit [plugin] *602*  items=2 - Shopify's AI Toolkit provides 18 development skills for building on the Shopify 
- ClickHouse/agent-skills [plugin] *550*  items=2 - 28 best practice rules for ClickHouse schema design, query optimization, and dat
- EpicGames/unreal-engine-skills-for-claude-code-plugin [plugin] *548*  items=2 - Control Unreal Editor directly from Claude Code via MCP. Hundreds of tools expos
- gitroomhq/postiz-agent [plugin] *520*  items=4 - Social media automation CLI for scheduling posts, managing integrations, uploadi
- makenotion/claude-code-notion-plugin [plugin] *496*  items=2 - Notion workspace integration. Search pages, create and update documents, manage 
- tavily-ai/skills [plugin] *487*  items=3 - Build AI applications with real-time web data using Tavily's search, extract, cr

## Top 30 by stars: listed
- DietrichGebert/ponytail [plugin] *165326*  items=2 - Lazy senior dev mode. Forces the simplest, shortest solution that actually works
- JuliusBrussee/caveman [plugin,skill] *113093*  items=2 - Auto-activation works differently per agent: Claude Code uses SessionStart hooks
- thedotmack/claude-mem [plugin,skill] *101261*  items=3 - Persistent memory system for Claude Code - seamlessly preserve context across se
- Egonex-AI/Understand-Anything [plugin,skill] *86680*  items=2 - Understand Anything is a Claude Code plugin that analyzes your project with a mu
- pbakaus/impeccable [plugin] *82094*  items=1 - Great design prompts require design vocabulary. Most people don't have it. You c
- mem0ai/mem0 [plugin] *67321* ['product-stars'] items=1 - Connect Mem0 to Claude to give your agent persistent memory across sessions. Cla
- mvanhorn/last30days-skill [plugin] *64520*  items=1 - last-30-days is a Claude Code skill that searches the web and delivers a structu
- coreyhaines31/marketingskills [plugin,skill] *55146*  items=3 - coreyhaines31
- DayuanJiang/next-ai-draw-io [plugin,mcp-server] *36291*  items=2 - AI-powered Draw.io diagram generation with real-time browser preview. Create flo
- mksglu/context-mode [plugin] *30302*  items=1 - MCP is the protocol for tool access. We're the virtualization layer for context.
- jarrodwatts/claude-hud [plugin,collection] *28600*  items=2 - Real-time statusline HUD for Claude Code - context health, tool activity, agent 
- alirezarezvani/claude-skills [plugin,skill] *28296*  items=2 - Playwright Pro turns your AI coding agent into a senior test automation engineer
- promptfoo/promptfoo [plugin] *26074*  items=1 - Teaches AI coding agents to create and maintain promptfoo eval suites. Encodes b
- AgriciDaniel/claude-seo [plugin] *19078*  items=1 - Comprehensive SEO analysis plugin for Claude Code. Performs full site audits wit
- browser-use/browser-harness [plugin] *18456*  items=1 - Open-source browser agent driven via CDP — direct browser control, 79K stars, YC
- Jeffallan/claude-skills [plugin,skill,collection] *11909*  items=3 - 66 specialized skills for full-stack development: 12 language experts (Python, T
- nicobailon/visual-explainer [plugin,collection] *10475*  items=3 - An agent skill that turns complex terminal output into styled HTML pages you act
- revfactory/harness [plugin,agent] *9186*  items=3 - Harness leverages Claude Code's agent team system to decompose complex tasks int
- Eventual-Inc/Daft [plugin] *5804* ['product-stars'] items=1 - Skills for working with Daft, a high-performance data engine for AI and multimod
- clidey/whodb [plugin] *5033* ['product-stars'] items=1 - Database management tools for Claude Code. Query databases, explore schemas, ana
- nyldn/claude-octopus [plugin] *4248*  items=2 - Multi-LLM orchestration for Claude Code and Cowork. Coordinates 8 AI providers (
- giancarloerra/SocratiCode [plugin,mcp-server] *3338*  items=2 - Enterprise-grade (40m+ lines) codebase intelligence in a zero-setup, private and
- Chachamaru127/claude-code-harness [plugin,agent] *3169*  items=2 - Autonomous Plan → Work → Review cycle for Claude Code. Go-native engine with 25×
- AgriciDaniel/claude-blog [plugin] *2409*  items=1 - AI-powered blog creation and optimization skill with 20 commands, 4 specialized 
- nizos/tdd-guard [plugin,collection] *2361*  items=2 - Enforces Test-Driven Development by intercepting file operations in Claude Code.
- severity1/claude-code-prompt-improver [plugin] *1957*  items=1 - Intelligent prompt optimization using skill-based architecture. Enriches vague p
- AminForou/mcp-gsc [plugin] *1951*  items=1 - Connect Google Search Console to Claude Code. Query rankings, inspect URLs, audi
- codeaholicguy/ai-devkit [plugin] *1646*  items=1 - A structured software development toolkit that helps Claude Code follow senior-e
- kenryu42/cc-safety-net [plugin,collection] *1645*  items=3 - Block destructive git and filesystem commands before execution
- activeloopai/hivemind [plugin,skill,collection] *1627*  items=5 - Cloud-backed persistent memory for Claude Code powered by Deeplake. Automaticall

## Top 30 by stars: verified
- morluto/rea [mcp-server] *294133* ['star-spike'] items=1 - Reverse engineer anything from your terminal or agent with one CLI and MCP serve
- affaan-m/ECC [collection] *281670*  items=1 - Top-notch, well-written resources covering "just about everything" from core eng
- multica-ai/andrej-karpathy-skills [collection] *220402*  items=1 - A drop-in CLAUDE.md distilling four behavioral guidelines for LLM-assisted codin
- firecrawl/firecrawl [skill] *192262* ['product-stars'] items=1 - Supercharge your AI agents with data from the web and beyond. Building the libra
- vercel/next.js [marketplace] *143046* ['product-stars'] items=1 - The React Framework
- garrytan/gstack [agent] *136693*  items=1 - Garry Tan's (Y Combinator) Claude Code setup and "open source software factory" 
- nextlevelbuilder/ui-ux-pro-max-skill [marketplace] *136637*  items=1 - An AI skill that provides design intelligence for building professional UI/UX ac
- browser-use/browser-use [mcp-server] *118239*  items=1 - Control a real Chrome browser to complete any task: fill forms, extract data, bo
- addyosmani/agent-skills [marketplace] *107480*  items=1 - Production-grade engineering skills for AI coding agents.
- paperclipai/paperclip [skill,mcp-server] *103254*  items=2 - The open-source app everyone uses to manage agents at work
- nexu-io/open-design [marketplace] *101696*  items=1 - The 1st Collaborative AI Design Agent Workspace. Local-first and open source. Cr
- ruvnet/RuView [marketplace] *98378*  items=1 - π RuView turns commodity WiFi signals into real-time spatial intelligence, vital
- Leonxlnx/taste-skill [marketplace] *98107*  items=1 - Agent skills that give coding agents taste: art direction, reference images and 
- storybookjs/storybook [marketplace] *91323* ['product-stars'] items=1 - Storybook is the industry standard workshop for building, documenting, and testi
- koala73/worldmonitor [skill,mcp-server] *88578* ['product-stars'] items=2 - Real-time global intelligence dashboard. AI-powered news aggregation, geopolitic
- D4Vinci/Scrapling [mcp-server] *88161*  items=1 - Web scraping with stealth HTTP, real browsers, and Cloudflare bypass. CSS select
- tt-a1i/archify [skill,collection] *84548*  items=2 - An Agent Skill for Claude Code that generates interactive architecture, workflow
- bytedance/deer-flow [skill] *83973*  items=1 - An open-source long-horizon SuperAgent harness that researches, codes, and creat
- netdata/netdata [mcp-server] *80981*  items=1 - Real-time infrastructure monitoring with metrics, logs, alerts, and ML-based ano
- shareAI-lab/learn-claude-code [collection] *78724*  items=1 - A really interesting analysis of how coding agents like Claude Code are designed
- ComposioHQ/awesome-claude-skills [skill] *77260*  items=1 - A curated list of awesome Claude Skills, resources, and tools for customizing Cl
- ruvnet/ruflo [marketplace,mcp-server] *75719*  items=2 - 🌊 The original agent harness. Deploy intelligent multi-player swarms, coordinate
- headroomlabs-ai/headroom [marketplace] *75541*  items=1 - Compress tool outputs, logs, files, and RAG chunks before they reach the LLM. 20
- career-ops-hq/career-ops [marketplace] *75269*  items=1 - Open-source AI job search agent and job finder: scan job boards, score each job 
- thedaviddias/Front-End-Checklist [marketplace,mcp-server] *74481* ['product-stars'] items=2 - 🗂 The essential checklist for modern web development, for humans and AI agents
- debpalash/VoiceStudio [skill] *71608* ['star-spike', 'product-stars'] items=1 - VoiceStudio is the open-source, fully-local ElevenLabs alternative — voice cloni
- rohitg00/ai-engineering-from-scratch [skill] *70379* ['product-stars'] items=1 - Learn AI Engineering! Learn it. Build it. Ship it for others.
- usestrix/strix [skill] *69067* ['product-stars'] items=1 - Open-source AI penetration testing tool to find and fix your app’s vulnerabiliti
- calesthio/OpenMontage [skill] *68950*  items=1 - World's first open-source, agentic video production system. 12 production pipeli
- shanraisshan/claude-code-best-practice [skill] *67655*  items=1 - from vibe coding to agentic engineering - practice makes claude perfect

## Top 30 by stars: watch
- f/prompts.chat [marketplace] *173201* ['product-stars'] items=1 - f.k.a. Awesome ChatGPT Prompts. Share, discover, and collect prompts from the co
- opendatalab/MinerU [skill] *81882* ['product-stars'] items=1 - Transforms complex documents like PDFs and Office docs into LLM-ready markdown/J
- code-yeongyu/oh-my-openagent [skill] *70120* ['product-stars'] items=1 - OmO: Just type "mass ulw" keyword with your prompt. Now you are the master of gr
- bmad-code-org/BMAD-METHOD [skill] *54240* ['product-stars'] items=1 - Breakthrough Method for Agile Ai Driven Development
- Imbad0202/academic-research-skills [marketplace] *52447*  items=1 - Academic Research Skills for Claude Code: research → write → review → revise → f
- tldraw/tldraw [mcp-server] *50960*  items=1 - Draw and visually collaborate with your agents on tldraw's canvas.
- metabase/metabase [mcp-server] *49707*  items=1 - Lets AI clients search, explore, query, and visualize data in a Metabase instanc
- abhigyanpatwari/GitNexus [marketplace] *47918* ['product-stars'] items=1 - GitNexus: The Zero-Server Code Intelligence Engine
- PostHog/posthog [mcp-server] *40314*  items=1 - Official PostHog MCP Server for product analytics, feature flags, experiments, a
- openai/codex-plugin-cc [marketplace] *34309*  items=1 - Use Codex from Claude Code to review code or delegate tasks.
- zarazhangrui/frontend-slides [marketplace] *30781*  items=1 - Create beautiful slides on the web using a coding agent's frontend skills
- oraios/serena [mcp-server] *30338*  items=1 - A powerful toolkit for coding, providing semantic retrieval and editing capabili
- eyaltoledano/claude-task-master [marketplace] *28235*  items=1 - An AI-powered task-management system you can drop into Cursor, Lovable, Windsurf
- openai/skills [skill] *28107*  items=1 - Skills Catalog for Codex
- vercel/ai [skill] *27358* ['product-stars'] items=1 - The AI Toolkit for TypeScript. From the creators of Next.js, the AI SDK is a fre
- clockworklabs/SpacetimeDB [marketplace] *25309* ['product-stars'] items=1 - Development at the speed of light
- different-ai/openwork [mcp-server] *24148*  items=1 - Your OpenWork org's skills, plugins, workflows, and connections through one OAut
- HKUDS/AI-Trader [skill] *22814* ['product-stars'] items=1 - "AI-Trader: 100% Fully-Automated Agent-Native Trading"
- screenpipe/screenpipe [mcp-server] *21960*  items=1 - Search your local screen recordings, audio transcripts, and computer activity fr
- getpaseo/paseo [skill] *21165*  items=1 - Orchestrate multiple coding agents from desktop and mobile
- agent0ai/agent-zero [skill] *19491* ['product-stars'] items=1 - Agent Zero AI framework
- Canner/WrenAI [skill] *17883* ['product-stars'] items=1 - GenBI (Generative BI) for AI agents, an open-source, governed text-to-SQL throug
- longbridge/gpui-kit [skill] *17841* ['product-stars'] items=1 - Rust GUI components for building fantastic cross-platform desktop application by
- architecture-decision-record/architecture-decision-record [skill] *17228* ['product-stars'] items=1 - Architecture decision record (ADR) examples for software planning, IT leadership
- composio-community/awesome-codex-skills [skill] *16934*  items=1 - A curated list of practical Codex skills for automating workflows across the Cod
- travisvn/awesome-claude-skills [skill] *15440*  items=1 - A curated list of awesome Claude Skills, resources, and tools for customizing Cl
- superset-sh/superset [marketplace] *15293* ['product-stars'] items=1 - Superset is an agentic IDE to orchestrate 100+ coding agents in parallel. Run an
- millionco/react-doctor [skill] *15010* ['product-stars'] items=1 - Your agent writes bad React. This catches it
- kyegomez/OpenMythos [plugin] *14910*  items=1 - A theoretical reconstruction of the Claude Mythos architecture, built from first
- NevaMind-AI/memU [skill] *14549* ['product-stars'] items=1 - Personal memory across agents

## Random sample of 20 watch repos (of 464)
- akseolabs-seo/AK-Threads-booster [skill] *277*  items=1 - AK體 · 數據驅動的 Threads 寫文決策系統。用你的歷史貼文、演算法與社媒心理學，協助選題、起草、發文前診斷、表現預估與復盤。Data-driven T reasons=['fails: pushed<=90d (105)'] src=['topic']
- rasinmuhammed/misata [mcp-server] *70*  items=1 - Local, offline: multi-table synthetic data with joins that hold and exact totals reasons=['no corroborating signal'] src=['mcp-registry']
- abhigyanpatwari/GitNexus [marketplace] *47918* ['product-stars'] items=1 - GitNexus: The Zero-Server Code Intelligence Engine reasons=['fails: license (NOASSERTION)'] src=['topic']
- pouyahasanamreji/continuum [mcp-server] *98*  items=1 - Shared memory + orchestration for your coding agents. Local-first MCP, vector RA reasons=['fails: pushed<=90d (155)', 'fails: license (None)'] src=['mcp-registry']
- devantler-tech/ksail [mcp-server] *165*  items=1 - SDK for creating, managing, and operating Kubernetes clusters and workloads with reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- VKirill/claude-lane-stack [marketplace] *122*  items=1 - Multi-agent AI coding factory for one person — Claude Code PM + Codex/Qwen/Grok/ reasons=['no corroborating signal'] src=['topic']
- Snailclimb/AIGuide [skill] *689*  items=1 - AI 应用开发、AI 编程实战与面试指南，涵盖 LLM、Agent、RAG、MCP、Claude Code、Codex 等核心技术与工程实践。 reasons=['fails: pushed<=90d (102)', 'fails: license (None)'] src=['topic']
- portel-dev/ncp [mcp-server] *100*  items=1 - N-to-1 MCP Orchestration. Unified gateway for multiple MCP servers with intellig reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- millionco/react-doctor [skill] *15010* ['product-stars'] items=1 - Your agent writes bad React. This catches it reasons=['fails: license (NOASSERTION)'] src=['topic']
- Equilateral-AI/equilateral-agents-open-core [marketplace] *61*  items=1 - Production-ready multi-agent orchestration. Revolutionary architecture for enter reasons=['fails: license (NOASSERTION)'] src=['code']
- djadmin/fort [marketplace] *80*  items=1 - Audit and fix your Mac's security in one command. No agent, no signup, open sour reasons=['fails: pushed<=90d (99)', 'no corroborating signal'] src=['code']
- kentcdodds/kody [mcp-server] *805*  items=1 - Your agents' cloud for individuals and teams. Search, execute, packages, jobs, a reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- blacktwist/social-media-skills [marketplace] *569*  items=1 - AI agent skills for social media content strategy, creation, and analysis across reasons=['fails: pushed<=90d (168)'] src=['topic']
- H-mmer/pentest-agents [skill] *1015*  items=1 - Bug bounty agent framework for Claude Code, Codex, Gemini, Cursor, Windsurf, Cop reasons=['fails: pushed<=90d (126)'] src=['topic']
- superdesigndev/treg [marketplace,mcp-server] *5582* ['product-stars'] items=2 - OpenRouter for agent tools. Join community here: https://discord.gg/6mQYYfFMAn reasons=['fails: license (NOASSERTION)'] src=['mcp-registry', 'topic']
- jihe520/MathModelAgent [skill] *6218*  items=1 - 🤖📐专为数学建模设计的 Agent & skills ,自动完成数学建模，生成一份完整的可以直接提交的论文。 An Agent Designed for Mat reasons=['fails: license (None)'] src=['topic']
- gradion-ai/ipybox [mcp-server] *76*  items=1 - Unified execution environment for Python code, shell commands, and programmatic  reasons=['fails: pushed<=90d (127)'] src=['mcp-registry']
- jurisupport/jurisupport-plugins [marketplace] *85*  items=1 -  reasons=['fails: license (NOASSERTION)'] src=['code']
- geekjourneyx/claude-design-card [skill] *464*  items=1 - Claude Code skill for generating design cards in 14 formats — platform covers, s reasons=['fails: pushed<=90d (142)', 'fails: license (None)'] src=['topic']
- jeremylongshore/excel-analyst-pro-skill-md [plugin] *57*  items=1 - Professional financial modeling toolkit for Claude Code with auto-invoked Skills reasons=['fails: license (NOASSERTION)'] src=['topic']

## Errors
- none

## Rate limit
- REST calls this run (uncached): {"core": 129, "search": 41}; last seen: {"core": {"remaining": "4871", "limit": "5000"}, "search": {"remaining": "8", "limit": "30"}}
- GraphQL: 140 calls, cost 55, remaining 4849/5000, stopped early: False
- REST stopped early: False
- repos lacking metadata: 3621; enriched this run: 29691