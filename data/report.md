# Catalog report 2026-10-21
Mode: **token**; run time 2090s
Repos (deduped): 3075; flat entries before dedup: 21617

## Tier x type BEFORE dedup (flat entries)
- new/mcp-server: 12024
- watch/mcp-server: 2333
- listed/plugin: 2283
- verified/mcp-server: 1142
- watch/skill: 503
- verified/skill: 458
- official/plugin: 376
- verified/plugin: 359
- watch/marketplace: 352
- verified/marketplace: 337
- watch/plugin: 322
- watch/agent: 216
- verified/collection: 195
- anthropic/plugin: 165
- new/skill: 153
- new/marketplace: 127
- new/plugin: 116
- verified/agent: 54
- new/agent: 27
- anthropic/marketplace: 14
- anthropic/collection: 4
- anthropic/agent: 1
- watch/collection: 1

## Tier AFTER dedup (repos)
- verified: 1714
- watch: 471
- new: 291
- official: 256
- anthropic: 175
- listed: 168

## Type AFTER dedup (items)
- mcp-server: 1574
- plugin: 1438
- skill: 746
- marketplace: 478
- collection: 121
- agent: 52

## Primary type AFTER dedup (repos)
- mcp-server: 993
- plugin: 864
- skill: 684
- marketplace: 408
- collection: 88
- agent: 38

## Repos by discovery source family
- topic: 1241
- mcp-registry: 1118
- anthropic: 477
- code: 207
- anthropic-org: 205
- curated: 146
- marketplace-expansion: 39

## Flags (all tiers)
- product-stars: 215
- star-spike: 12
- star-anomaly: 1

## star-anomaly by tier
- new: 1

## Metadata gaps
- repos without metadata: 181
- reasons: {'unfetched': 181}

## MCP-only repos excluded: 55
- assafelovic/gpt-researcher *30207* ['ai', 'python', 'agent', 'automation', 'research'] - An autonomous agent that conducts deep research on any data using any LLM provid
- pascalorg/editor *25017* ['3d', 'architecture', 'bim', 'cad', 'editor'] - Open-source 3D architectural editor with a local CLI, MCP tools, and practical w
- mrexodia/ida-pro-mcp *13062* ['ida-plugin', 'ida-pro', 'mcp', 'mcp-server', 'modelcontextprotocol'] - AI-powered reverse engineering assistant that bridges IDA Pro with language mode
- mcp-use/mcp-use *10791* ['mcp', 'model-context-protocol', 'apps-sdk', 'mcp-apps', 'mcp-inspector'] - The fullstack MCP framework to develop MCP Apps for ChatGPT / Claude & MCP Serve
- Agents365-ai/drawio-skill *10274* ['drawio', 'diagram', 'agent-skills', 'architecture-diagram', 'claude-code'] - Agent skill that turns natural language, code, Terraform/K8s, SQL, OpenAPI, Asyn
- stickerdaniel/linkedin-mcp-server *3962* ['linkedin', 'linkedin-scraper', 'mcp', 'mcp-server', 'linkedin-mcp'] - Open-source MCP server for LinkedIn. Give Claude and any MCP-compatible AI agent
- jordan-gibbs/hyperresearch *3896* ['agents', 'agentskills', 'claude-code', 'deep-research', 'deep-research-agent'] - Convert Claude Code or Codex into the most intelligent Deep Research Agent. Coll
- taylorwilsdon/google_workspace_mcp *3386* ['ai', 'gmail', 'google-calendar', 'google-workspace', 'llm'] - Control Gmail, Google Calendar, Docs, Sheets, Slides, Chat, Forms, Tasks, Search
- duty1g/x64dbg-mcp-server *2579* ['ai-agents', 'ai-debugging', 'binary-analysis', 'claude', 'claude-code'] - x64dbg-MCP Server is a native MCP (Model Context Protocol) plugin for x64dbg tha
- alpic-ai/skybridge *2170* ['agent', 'ai', 'apps-sdk', 'chatgpt', 'claude'] - Skybridge is a full-stack TypeScript framework for MCP Apps and ChatGPT Apps. Ty
- kajisho5/ffmpeg-skill *2030* ['audio-processing', 'captions', 'ffmpeg', 'subtitles', 'video'] - Local video editor for coding agents: 42 FFmpeg tools with a machine-readable co
- study8677/repobrain *1351* ['claude-code', 'codex-cli', 'developer-tools', 'mcp-server', 'windsurf'] - 🧠 RepoBrain (formerly Antigravity) — Give your repo a brain. ChatGPT for your co
- agentrq/agentrq *1161* ['agentic-ai', 'agentic-workflow', 'agents', 'task', 'task-manager'] - AgentRQ: Human-in-loop realtime conversational task manager for AI Agents. Self-
- vostride/agent-qa *913* ['playwright', 'end-to-end-testing', 'ai-testing', 'ai-agents', 'mcp'] - Open-source self-improving QA agent for software teams. A test harness with memo
- CodeAbra/iai-personal-memory-engine *911* ['claude', 'claude-code', 'local-first', 'mcp', 'mcp-server'] - A cyber brain for your AI. It never forgets a detail, remembers exactly what you

## Degradation
- registry complete: True (475 pages, 47400 entries)
- MCP servers merged from the previous catalog (not re-fetched): 0
- GraphQL 403s: 0 (secondary rate limit: 0); retries: 7; queries that gave up: 0
- HTTP retries (5xx/network): 4
- repos with stale metadata reused from the previous catalog (meta_stale): 0

## MCP Registry
- {"pages": 475, "fetched": 47400, "kept": 46794, "dropped": 606, "bad": 0, "complete": true, "excluded_remote_only": 14591, "excluded_low_signal": 16704, "fallback_merged": 0, "records": 1118, "attached_existing": 129, "new_repo": 989, "remote_only": 0, "tiers": {"official": 25, "listed": 20, "verified": 794, "new": 115, "watch": 164}}

## Top 20 by trend_7d
- morluto/rea +133744 (61.74%) ['star-spike']
- debpalash/VoiceStudio +15270 (23.85%) ['product-stars']
- mattpocock/skills +8902 (3.07%) []
- DietrichGebert/ponytail +7228 (4.44%) []
- affaan-m/ECC +6317 (2.27%) []
- heygen-com/hyperframes +5644 (8.96%) []
- anthropics/claude-plugins-official +5586 (14.75%) []
- cloudflare/security-audit-skill +5278 (17.98%) []
- cathrynlavery/diagram-design +4607 (8.45%) []
- K-Dense-AI/scientific-agent-skills +4572 (9.38%) []
- ifixai-ai/iFixAi +4523 (17.23%) ['product-stars']
- Leonxlnx/taste-skill +4276 (4.47%) []
- obra/superpowers +3918 (1.31%) []
- paperclipai/paperclip +3640 (3.58%) []
- HKUDS/CLI-Anything +3607 (6.92%) ['product-stars']
- tt-a1i/archify +3424 (4.12%) []
- ruvnet/ruflo +3366 (4.51%) []
- pbakaus/impeccable +3118 (3.86%) []
- rohitg00/ai-engineering-from-scratch +3089 (4.49%) ['product-stars']
- mksglu/context-mode +2992 (10.52%) []

## Code search vs topic search
- repos found by code search: 207
- also in topic search: 15
- code-only: 178; tiers: {'verified': 91, 'watch': 67, 'new': 20}

## Top 30 by stars: anthropic
- anthropics/skills [marketplace,collection] *182547*  items=2 - Anthropic example skills
- anthropics/claude-code [marketplace,agent] *152679*  items=2 - Bundled plugins for Claude Code including Agent SDK development tools, PR review
- anthropics/claude-plugins-official [plugin,marketplace,collection] *43453*  items=3 - Directory of popular Claude Code extensions including development tools, product
- anthropics/financial-services [marketplace] *40578*  items=1 - 
- anthropics/knowledge-work-plugins [marketplace] *30888*  items=1 - 
- anthropics/claude-for-legal [marketplace] *9758*  items=1 - Reference agents, skills, and data connectors for the legal workflows we see mos
- anthropics/claude-code-action [collection] *9594*  items=1 - The official GitHub Action for running Claude Code in CI: mention @claude in iss
- anthropics/claude-code-security-review [collection] *6465*  items=1 - An official AI-powered security-review GitHub Action that uses Claude to analyze
- anthropics/claude-plugins-community [marketplace] *4711*  items=1 - 
- anthropics/commerce-agents [marketplace] *3289*  items=1 - Claude Commerce Agents: the commerce-builder plugin for building shopping and me
- anthropics/life-sciences [marketplace] *622*  items=1 - MCP servers and skills for life sciences research, data analysis, and discovery
- anthropics/k12-teacher-skills [marketplace] *579*  items=1 - Plugin marketplace for K-12 Education and Claude for Teachers.
- anthropics/healthcare [marketplace] *427*  items=1 - Claude for Healthcare — one plugin bundling payer, provider, pharma, and general
- anthropics/oncall-kit [marketplace] *243*  items=1 - 
- anthropics/claude-for-financial-advisors [plugin,marketplace] *109*  items=2 - Ready-to-run workflows for financial advisors in Claude Cowork, drawing live dat
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
- obra/superpowers [plugin,skill] *302688*  items=3 - Superpowers teaches Claude brainstorming, subagent driven development with built
- mattpocock/skills [plugin] *298911*  items=2 - Matt Pocock's agent skills for real engineering — grilling, spec/ticket flows, T
- heygen-com/hyperframes [plugin] *68647*  items=2 - HyperFrames by HeyGen. Write HTML, render video. Compositions, GSAP and runtime 
- ChromeDevTools/chrome-devtools-mcp [plugin,mcp-server] *53917*  items=4 - Control and inspect a live Chrome browser from your coding agent. Record perform
- confident-ai/deepeval [plugin] *18999* ['product-stars'] items=1 - Skills for adding DeepEval evaluations, tracing, datasets, Confident AI reports,
- huggingface/skills [plugin] *11191*  items=2 - Build, train, evaluate, and use open source AI models, datasets, and spaces.
- wonderwhy-er/DesktopCommanderMCP [plugin,mcp-server] *10088*  items=4 - MCP server for terminal commands, process management, and file operations across
- Eigenwise/atomic-agents [plugin,marketplace] *6288* ['product-stars'] items=3 - Comprehensive development workflow for building AI agents with the Atomic Agents
- exa-labs/exa-mcp-server [plugin,mcp-server] *5156*  items=3 - Exa AI web search, deep research, and content extraction. Provides MCP tools and
- NVIDIA/skills [plugin] *3672*  items=2 - Find the right NVIDIA skill for GPU acceleration, CUDA, AI agents, data loading,
- cloudflare/skills [plugin] *3120*  items=2 - Skills for the Cloudflare developer platform: Workers, Durable Objects, Agents S
- modelcontextprotocol/ext-apps [plugin] *2987*  items=3 - Skills for creating MCP Apps with the MCP Apps SDK
- expo/skills [plugin] *2964*  items=2 - Official Expo skills for building, deploying, upgrading, and debugging React Nat
- aws/agent-toolkit-for-aws [plugin] *2919*  items=8 - Build, deploy, and operate AI agents on AWS. Skills for scaffolding agents with 
- GoogleChrome/modern-web-guidance [plugin] *2520*  items=2 - Keep your coding agent up to date with the latest web best practices
- figma/mcp-server-guide [plugin,mcp-server] *2094*  items=4 - Figma design platform integration. Access design files, extract component inform
- stripe/ai [plugin,mcp-server] *1964*  items=3 - Stripe development plugin for Claude
- MicrosoftDocs/mcp [plugin,mcp-server] *1950*  items=3 - Access official Microsoft documentation, API references, and code samples for Az
- microsoft/azure-skills [plugin] *1583*  items=2 - Transform Claude into an Azure expert. This plugin integrates the Azure MCP serv
- EpicGames/unreal-engine-skills-for-claude-code-plugin [plugin] *1504* ['star-spike'] items=2 - Control Unreal Editor directly from Claude Code via MCP. Hundreds of tools expos
- atlassian/atlassian-mcp-server [plugin,mcp-server] *1110*  items=3 - Connect to Atlassian products including Jira and Confluence. Search and create i
- forcedotcom/sf-skills [plugin] *1105*  items=1 - Build Salesforce apps and agents using these core building blocks: metadata, Ape
- awslabs/agent-plugins [plugin] *924*  items=10 - Guide developers through adding maps, places search, geocoding, routing, and oth
- superdesigndev/superdesign-skill [plugin,skill] *873*  items=2 - Design or redesign frontend UI and marketing graphics on the Superdesign infinit
- duckdb/duckdb-skills [plugin] *609*  items=2 - DuckDB-powered skills for Claude Code: read any data file, attach and query Duck
- Shopify/Shopify-AI-Toolkit [plugin] *607*  items=2 - Shopify's AI Toolkit provides 18 development skills for building on the Shopify 
- ClickHouse/agent-skills [plugin] *553*  items=2 - 28 best practice rules for ClickHouse schema design, query optimization, and dat
- gitroomhq/postiz-agent [plugin] *531*  items=3 - Social media automation CLI for scheduling posts, managing integrations, uploadi
- Unity-Technologies/unity-agent-plugin [plugin] *525*  items=2 - Unity's official plugin for Claude Code, with curated skills for game developmen
- makenotion/claude-code-notion-plugin [plugin] *498*  items=2 - Notion workspace integration. Search pages, create and update documents, manage 

## Top 30 by stars: listed
- DietrichGebert/ponytail [plugin] *170154*  items=2 - Lazy senior dev mode. Forces the simplest, shortest solution that actually works
- JuliusBrussee/caveman [plugin,skill] *113906*  items=2 - Auto-activation works differently per agent: Claude Code uses SessionStart hooks
- thedotmack/claude-mem [plugin,skill] *102004*  items=3 - Persistent memory system for Claude Code - seamlessly preserve context across se
- Egonex-AI/Understand-Anything [plugin,skill] *87295*  items=2 - Understand Anything is a Claude Code plugin that analyzes your project with a mu
- pbakaus/impeccable [plugin] *83984*  items=1 - Great design prompts require design vocabulary. Most people don't have it. You c
- mem0ai/mem0 [plugin] *67551* ['product-stars'] items=1 - Connect Mem0 to Claude to give your agent persistent memory across sessions. Cla
- mvanhorn/last30days-skill [plugin] *64905*  items=1 - last-30-days is a Claude Code skill that searches the web and delivers a structu
- coreyhaines31/marketingskills [plugin,skill] *55717*  items=3 - coreyhaines31
- DayuanJiang/next-ai-draw-io [plugin,mcp-server] *36331*  items=2 - AI-powered Draw.io diagram generation with real-time browser preview. Create flo
- mksglu/context-mode [plugin] *31432*  items=1 - MCP is the protocol for tool access. We're the virtualization layer for context.
- jarrodwatts/claude-hud [plugin,collection] *28699*  items=2 - Real-time statusline HUD for Claude Code - context health, tool activity, agent 
- alirezarezvani/claude-skills [plugin,skill] *28459*  items=2 - Playwright Pro turns your AI coding agent into a senior test automation engineer
- promptfoo/promptfoo [plugin] *26217*  items=1 - Teaches AI coding agents to create and maintain promptfoo eval suites. Encodes b
- AgriciDaniel/claude-seo [plugin] *19490*  items=1 - Comprehensive SEO analysis plugin for Claude Code. Performs full site audits wit
- browser-use/browser-harness [plugin] *18527*  items=1 - Open-source browser agent driven via CDP — direct browser control, 79K stars, YC
- Jeffallan/claude-skills [plugin,skill,collection] *11970*  items=3 - 66 specialized skills for full-stack development: 12 language experts (Python, T
- nicobailon/visual-explainer [plugin,collection] *10564*  items=3 - An agent skill that turns complex terminal output into styled HTML pages you act
- revfactory/harness [plugin,agent] *9227*  items=3 - Harness leverages Claude Code's agent team system to decompose complex tasks int
- Eventual-Inc/Daft [plugin] *5808* ['product-stars'] items=1 - Skills for working with Daft, a high-performance data engine for AI and multimod
- clidey/whodb [plugin] *5036* ['product-stars'] items=1 - Database management tools for Claude Code. Query databases, explore schemas, ana
- nyldn/claude-octopus [plugin] *4269*  items=2 - Multi-LLM orchestration for Claude Code and Cowork. Coordinates 8 AI providers (
- giancarloerra/SocratiCode [plugin,mcp-server] *3348*  items=2 - Enterprise-grade (40m+ lines) codebase intelligence in a zero-setup, private and
- Chachamaru127/claude-code-harness [plugin,agent] *3178*  items=2 - Autonomous Plan → Work → Review cycle for Claude Code. Go-native engine with 25×
- AgriciDaniel/claude-blog [plugin] *2435*  items=1 - AI-powered blog creation and optimization skill with 20 commands, 4 specialized 
- nizos/tdd-guard [plugin,collection] *2363*  items=2 - Enforces Test-Driven Development by intercepting file operations in Claude Code.
- AminForou/mcp-gsc [plugin] *2003*  items=1 - Connect Google Search Console to Claude Code. Query rankings, inspect URLs, audi
- severity1/claude-code-prompt-improver [plugin] *1961*  items=1 - Intelligent prompt optimization using skill-based architecture. Enriches vague p
- kenryu42/cc-safety-net [plugin,collection] *1712*  items=3 - Block destructive git and filesystem commands before execution
- codeaholicguy/ai-devkit [plugin] *1650*  items=1 - A structured software development toolkit that helps Claude Code follow senior-e
- activeloopai/hivemind [plugin,skill,collection] *1629*  items=5 - Cloud-backed persistent memory for Claude Code powered by Deeplake. Automaticall

## Top 30 by stars: verified
- morluto/rea [mcp-server] *350377* ['star-spike'] items=1 - Reverse engineer anything from your terminal or agent with one CLI and MCP serve
- affaan-m/ECC [collection] *285034*  items=1 - Top-notch, well-written resources covering "just about everything" from core eng
- firecrawl/firecrawl [skill] *193550* ['product-stars'] items=1 - Supercharge your AI agents with data from the web and beyond. Building the libra
- vercel/next.js [marketplace] *143098* ['product-stars'] items=1 - The React Framework
- nextlevelbuilder/ui-ux-pro-max-skill [marketplace] *138104*  items=1 - An AI skill that provides design intelligence for building professional UI/UX ac
- garrytan/gstack [agent] *137099*  items=1 - Garry Tan's (Y Combinator) Claude Code setup and "open source software factory" 
- browser-use/browser-use [mcp-server] *118696*  items=1 - Browser agents and stealth cloud browsers for AI: run web tasks, fill forms, ext
- addyosmani/agent-skills [marketplace] *109058*  items=1 - Production-grade engineering skills for AI coding agents.
- paperclipai/paperclip [skill,mcp-server] *105325*  items=2 - The open-source app everyone uses to manage agents at work
- nexu-io/open-design [marketplace] *102868*  items=1 - The 1st Collaborative AI Design Agent Workspace. Local-first and open source. Cr
- Leonxlnx/taste-skill [marketplace] *100001*  items=1 - Agent skills that give coding agents taste: art direction, reference images and 
- ruvnet/RuView [marketplace] *98948*  items=1 - π RuView turns commodity WiFi signals into real-time spatial intelligence, vital
- storybookjs/storybook [marketplace] *91337* ['product-stars'] items=1 - Storybook is the industry standard workshop for building, documenting, and testi
- koala73/worldmonitor [skill,mcp-server] *88974* ['product-stars'] items=2 - Real-time global intelligence dashboard. AI-powered news aggregation, geopolitic
- D4Vinci/Scrapling [mcp-server] *88913*  items=1 - Web scraping with stealth HTTP, real browsers, and Cloudflare bypass. CSS select
- tt-a1i/archify [skill,collection] *86602*  items=2 - An Agent Skill for Claude Code that generates interactive architecture, workflow
- bytedance/deer-flow [skill] *84224*  items=1 - An open-source long-horizon SuperAgent harness that researches, codes, and creat
- netdata/netdata [mcp-server] *81068*  items=1 - Real-time infrastructure monitoring with metrics, logs, alerts, and ML-based ano
- debpalash/VoiceStudio [skill] *79294* ['product-stars'] items=1 - VoiceStudio is the open-source, fully-local ElevenLabs alternative — voice cloni
- shareAI-lab/learn-claude-code [collection] *78919*  items=1 - A really interesting analysis of how coding agents like Claude Code are designed
- ruvnet/ruflo [marketplace,mcp-server] *77956*  items=2 - 🌊 The original agent harness. Deploy intelligent multi-player swarms, coordinate
- ComposioHQ/awesome-claude-skills [skill] *77550*  items=1 - A curated list of awesome Claude Skills, resources, and tools for customizing Cl
- headroomlabs-ai/headroom [marketplace] *76861*  items=1 - Compress tool outputs, logs, files, and RAG chunks before they reach the LLM. 20
- career-ops-hq/career-ops [marketplace] *76063*  items=1 - Open-source AI job search agent and job finder: scan job boards, score each job 
- thedaviddias/Front-End-Checklist [marketplace,mcp-server] *74529* ['product-stars'] items=2 - 🗂 The essential checklist for modern web development, for humans and AI agents
- rohitg00/ai-engineering-from-scratch [skill] *71870* ['product-stars'] items=1 - Learn AI Engineering! Learn it. Build it. Ship it for others.
- usestrix/strix [skill] *70529* ['product-stars'] items=1 - Open-source AI penetration testing tool to find and fix your app’s vulnerabiliti
- calesthio/OpenMontage [skill] *70398*  items=1 - World's first open-source, agentic video production system. 12 production pipeli
- shanraisshan/claude-code-best-practice [skill] *67851*  items=1 - from vibe coding to agentic engineering - practice makes claude perfect
- xtekky/gpt4free [skill] *66915* ['product-stars'] items=1 - The official gpt4free repository | various collection of powerful language model

## Top 30 by stars: watch
- f/prompts.chat [marketplace] *173746* ['product-stars'] items=1 - f.k.a. Awesome ChatGPT Prompts. Share, discover, and collect prompts from the co
- opendatalab/MinerU [skill] *82161* ['product-stars'] items=1 - Transforms complex documents like PDFs and Office docs into LLM-ready markdown/J
- code-yeongyu/oh-my-openagent [skill] *70234* ['product-stars'] items=1 - OmO: Just type "mass ulw" keyword with your prompt. Now you are the master of gr
- bmad-code-org/BMAD-METHOD [skill] *54390* ['product-stars'] items=1 - Breakthrough Method for Agile Ai Driven Development
- Imbad0202/academic-research-skills [marketplace] *53203*  items=1 - Academic Research Skills for Claude Code: research → write → review → revise → f
- tldraw/tldraw [mcp-server] *51017*  items=1 - Draw and visually collaborate with your agents on tldraw's canvas.
- metabase/metabase [mcp-server] *49770*  items=1 - Lets AI clients search, explore, query, and visualize data in a Metabase instanc
- abhigyanpatwari/GitNexus [marketplace] *47981* ['product-stars'] items=1 - GitNexus: The Zero-Server Code Intelligence Engine
- PostHog/posthog [mcp-server] *40366*  items=1 - Official PostHog MCP Server for product analytics, feature flags, experiments, a
- openai/codex-plugin-cc [marketplace] *34419*  items=1 - Use Codex from Claude Code to review code or delegate tasks.
- zarazhangrui/frontend-slides [marketplace] *31005*  items=1 - Create beautiful slides on the web using a coding agent's frontend skills
- oraios/serena [mcp-server] *30527*  items=1 - A powerful toolkit for coding, providing semantic retrieval and editing capabili
- eyaltoledano/claude-task-master [marketplace] *28258*  items=1 - An AI-powered task-management system you can drop into Cursor, Lovable, Windsurf
- openai/skills [skill] *28202*  items=1 - Skills Catalog for Codex
- vercel/ai [skill] *27422* ['product-stars'] items=1 - The AI Toolkit for TypeScript. From the creators of Next.js, the AI SDK is a fre
- clockworklabs/SpacetimeDB [marketplace] *25324* ['product-stars'] items=1 - Development at the speed of light
- different-ai/openwork [mcp-server] *24201*  items=1 - Your OpenWork org's skills, plugins, workflows, and connections through one OAut
- HKUDS/AI-Trader [skill] *22887* ['product-stars'] items=1 - "AI-Trader: 100% Fully-Automated Agent-Native Trading"
- screenpipe/screenpipe [mcp-server] *22008*  items=1 - Search your local screen recordings, audio transcripts, and computer activity fr
- getpaseo/paseo [skill] *21558*  items=1 - Orchestrate multiple coding agents from desktop and mobile
- agent0ai/agent-zero [skill] *19526* ['product-stars'] items=1 - Agent Zero AI framework
- longbridge/gpui-kit [skill] *18436* ['product-stars'] items=1 - Rust GUI components for building fantastic cross-platform desktop application by
- Canner/WrenAI [skill] *17922* ['product-stars'] items=1 - GenBI (Generative BI) for AI agents, an open-source, governed text-to-SQL throug
- architecture-decision-record/architecture-decision-record [skill] *17266* ['product-stars'] items=1 - Architecture decision record (ADR) examples for software planning, IT leadership
- composio-community/awesome-codex-skills [skill] *16973*  items=1 - A curated list of practical Codex skills for automating workflows across the Cod
- travisvn/awesome-claude-skills [skill] *15487*  items=1 - A curated list of awesome Claude Skills, resources, and tools for customizing Cl
- superset-sh/superset [marketplace] *15420* ['product-stars'] items=1 - Superset is an agentic IDE to orchestrate 100+ coding agents in parallel. Run an
- millionco/react-doctor [skill] *15024* ['product-stars'] items=1 - Your agent writes bad React. This catches it
- kyegomez/OpenMythos [plugin] *14907*  items=1 - A theoretical reconstruction of the Claude Mythos architecture, built from first
- NevaMind-AI/memU [skill] *14552* ['product-stars'] items=1 - Personal memory across agents

## Random sample of 20 watch repos (of 471)
- proyecto26/system-design-skills [marketplace] *94*  items=1 - A divide-and-conquer wiki of system-design skills for Claude Code — reason about reasons=['fails: pushed<=90d (140)'] src=['topic']
- rasinmuhammed/misata [mcp-server] *70*  items=1 - Local, offline: multi-table synthetic data with joins that hold and exact totals reasons=['no corroborating signal'] src=['mcp-registry']
- eyaltoledano/claude-task-master [marketplace] *28258*  items=1 - An AI-powered task-management system you can drop into Cursor, Lovable, Windsurf reasons=['fails: pushed<=90d (175)', 'fails: license (NOASSERTION)'] src=['topic']
- pouyahasanamreji/continuum [mcp-server] *98*  items=1 - Shared memory + orchestration for your coding agents. Local-first MCP, vector RA reasons=['fails: pushed<=90d (159)', 'fails: license (None)'] src=['mcp-registry']
- devantler-tech/ksail [mcp-server] *165*  items=1 - SDK for creating, managing, and operating Kubernetes clusters and workloads with reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- getpaseo/paseo [skill] *21558*  items=1 - Orchestrate multiple coding agents from desktop and mobile reasons=['fails: license (NOASSERTION)'] src=['topic']
- pivoshenko/kasetto [skill] *211*  items=1 - 📼 Declarative AI agent environment manager, written in Rust reasons=['fails: license (NOASSERTION)'] src=['topic']
- portel-dev/ncp [mcp-server] *100*  items=1 - 1 MCP to rule them all. Orchestrate, discover, and run any tool instantly. reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- modelcontextprotocol/inspector [skill] *11111* ['product-stars'] items=1 - Visual testing tool for MCP servers reasons=['fails: license (NOASSERTION)'] src=['topic']
- komal-SkyNET/claude-skill-homeassistant [plugin] *973*  items=1 - Claude Code skill to supercharge and manage all Home Assistant workflows reasons=['fails: pushed<=90d (108)'] src=['code']
- YYYYYZhao/Lytskill [marketplace] *69*  items=1 - 一个针对跨境电商业务分析的 skill reasons=['fails: license (None)'] src=['code']
- kody-hq/kody [mcp-server] *831*  items=1 - Your agents' cloud for individuals and teams. Search, execute, packages, jobs, a reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- Rito-w/skills-manager [skill] *196*  items=1 - A cross-platform skills manager for AI IDEs. Search marketplace, download locall reasons=['fails: pushed<=90d (108)', 'fails: license (None)'] src=['topic']
- av/facts [skill] *206*  items=1 - Antidote for fluffy specs, a toolkit for fact-driven development with AI agents reasons=['fails: pushed<=90d (139)'] src=['topic']
- ankimcp/anki-mcp-server-addon [mcp-server] *91*  items=1 - Anki addon that exposes your flashcard collection to AI assistants via a local M reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- Dammyjay93/interface-design [marketplace] *5831*  items=1 - Design engineering for Claude Code. Craft, memory, and enforcement for consisten reasons=['fails: pushed<=90d (122)'] src=['topic']
- gradion-ai/ipybox [mcp-server] *76*  items=1 - Unified execution environment for Python code, shell commands, and programmatic  reasons=['fails: pushed<=90d (131)'] src=['mcp-registry']
- mozilla/firefox-devtools-mcp [marketplace,mcp-server] *508*  items=2 - Model Context Protocol server for Firefox DevTools - enables AI assistants to in reasons=['fails: license (NOASSERTION)'] src=['code', 'mcp-registry']
- geekjourneyx/claude-design-card [skill] *464*  items=1 - Claude Code skill for generating design cards in 14 formats — platform covers, s reasons=['fails: pushed<=90d (146)', 'fails: license (None)'] src=['topic']
- acogood/diffmode_free [marketplace] *165*  items=1 - Free guerrilla growth tactics for startups, the kind your competitors won't come reasons=['no corroborating signal'] src=['topic']

## Errors
- none

## Rate limit
- REST calls this run (uncached): {"core": 73, "search": 41}; last seen: {"core": {"remaining": "4928", "limit": "5000"}, "search": {"remaining": "8", "limit": "30"}}
- GraphQL: 159 calls, cost 76, remaining 4812/5000, stopped early: False
- REST stopped early: False
- repos lacking metadata: 3950; enriched this run: 30195