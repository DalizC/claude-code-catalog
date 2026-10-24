# Catalog report 2026-10-24
Mode: **token**; run time 1608s
Repos (deduped): 3078; flat entries before dedup: 21912

## Tier x type BEFORE dedup (flat entries)
- new/mcp-server: 12443
- listed/plugin: 2283
- watch/mcp-server: 2192
- verified/mcp-server: 1173
- watch/skill: 503
- verified/skill: 456
- official/plugin: 376
- verified/plugin: 358
- watch/marketplace: 356
- verified/marketplace: 337
- watch/plugin: 324
- watch/agent: 215
- verified/collection: 197
- new/skill: 159
- anthropic/plugin: 146
- new/marketplace: 125
- new/plugin: 116
- verified/agent: 52
- new/agent: 28
- anthropic/marketplace: 14
- anthropic/collection: 4
- anthropic/agent: 1
- watch/collection: 1

## Tier AFTER dedup (repos)
- verified: 1735
- watch: 469
- new: 297
- official: 256
- listed: 165
- anthropic: 156

## Type AFTER dedup (items)
- mcp-server: 1601
- plugin: 1393
- skill: 755
- marketplace: 477
- collection: 122
- agent: 51

## Primary type AFTER dedup (repos)
- mcp-server: 1010
- plugin: 839
- skill: 693
- marketplace: 410
- collection: 89
- agent: 37

## Repos by discovery source family
- topic: 1257
- mcp-registry: 1136
- anthropic: 474
- code: 194
- anthropic-org: 186
- curated: 148
- marketplace-expansion: 39

## Flags (all tiers)
- product-stars: 219
- star-spike: 13
- star-anomaly: 5

## star-anomaly by tier
- new: 4
- watch: 1

## Metadata gaps
- repos without metadata: 162
- reasons: {'unfetched': 162}

## MCP-only repos excluded: 53
- assafelovic/gpt-researcher *30269* ['ai', 'python', 'agent', 'automation', 'research'] - An autonomous agent that conducts deep research on any data using any LLM provid
- mrexodia/ida-pro-mcp *13124* ['ida-plugin', 'ida-pro', 'mcp', 'mcp-server', 'modelcontextprotocol'] - AI-powered reverse engineering assistant that bridges IDA Pro with language mode
- mcp-use/mcp-use *10805* ['mcp', 'model-context-protocol', 'apps-sdk', 'mcp-apps', 'mcp-inspector'] - The fullstack MCP framework to develop MCP Apps for ChatGPT / Claude & MCP Serve
- Agents365-ai/drawio-skill *10324* ['drawio', 'diagram', 'agent-skills', 'architecture-diagram', 'claude-code'] - Agent skill that turns natural language, code, Terraform/K8s, SQL, OpenAPI, Asyn
- stickerdaniel/linkedin-mcp-server *4002* ['linkedin', 'linkedin-scraper', 'mcp', 'mcp-server', 'linkedin-mcp'] - Open-source MCP server for LinkedIn. Give Claude and any MCP-compatible AI agent
- jordan-gibbs/hyperresearch *3940* ['agents', 'agentskills', 'claude-code', 'deep-research', 'deep-research-agent'] - Convert Claude Code or Codex into the most intelligent Deep Research Agent. Coll
- taylorwilsdon/google_workspace_mcp *3405* ['ai', 'gmail', 'google-calendar', 'google-workspace', 'llm'] - Control Gmail, Google Calendar, Docs, Sheets, Slides, Chat, Forms, Tasks, Search
- duty1g/x64dbg-mcp-server *2598* ['ai-agents', 'ai-debugging', 'binary-analysis', 'claude', 'claude-code'] - x64dbg-MCP Server is a native MCP (Model Context Protocol) plugin for x64dbg tha
- alpic-ai/skybridge *2177* ['agent', 'ai', 'apps-sdk', 'chatgpt', 'claude'] - Skybridge is a full-stack TypeScript framework for MCP Apps and ChatGPT Apps. Ty
- kajisho5/ffmpeg-skill *2166* ['audio-processing', 'captions', 'ffmpeg', 'subtitles', 'video'] - Local video editor for coding agents: 42 FFmpeg tools with a machine-readable co
- study8677/repobrain *1353* ['claude-code', 'codex-cli', 'developer-tools', 'mcp-server', 'windsurf'] - 🧠 RepoBrain (formerly Antigravity) — Give your repo a brain. ChatGPT for your co
- agentrq/agentrq *1166* ['agentic-ai', 'agentic-workflow', 'agents', 'task', 'task-manager'] - AgentRQ: Human-in-loop realtime conversational task manager for AI Agents. Self-
- CodeAbra/iai-personal-memory-engine *912* ['claude', 'claude-code', 'local-first', 'mcp', 'mcp-server'] - A cyber brain for your AI. It never forgets a detail, remembers exactly what you
- vostride/agent-qa *899* ['playwright', 'end-to-end-testing', 'ai-testing', 'ai-agents', 'mcp'] - Open-source self-improving QA agent for software teams. A test harness with memo
- Storybloq/storybloq *781* ['agentic-development', 'ai-development', 'anthropic', 'claude-code', 'claude-skill'] - Project memory and workflows for Claude Code and Codex. Keep stories, plans, han

## Degradation
- registry complete: True (492 pages, 49186 entries)
- MCP servers merged from the previous catalog (not re-fetched): 0
- GraphQL 403s: 0 (secondary rate limit: 0); retries: 1; queries that gave up: 0
- HTTP retries (5xx/network): 0
- repos with stale metadata reused from the previous catalog (meta_stale): 0

## MCP Registry
- {"pages": 492, "fetched": 49186, "kept": 48558, "dropped": 628, "bad": 0, "complete": true, "excluded_remote_only": 15506, "excluded_low_signal": 17244, "fallback_merged": 0, "records": 1136, "attached_existing": 130, "new_repo": 1006, "remote_only": 0, "tiers": {"official": 25, "listed": 19, "verified": 816, "new": 113, "watch": 163}}

## Top 20 by trend_7d
- morluto/rea +80062 (27.22%) ['star-spike']
- cloudflare/security-audit-skill +12194 (40.22%) ['star-spike']
- debpalash/VoiceStudio +12025 (16.79%) ['product-stars']
- DietrichGebert/ponytail +9605 (5.81%) []
- mattpocock/skills +7671 (2.61%) []
- affaan-m/ECC +5774 (2.05%) []
- wheresryan22/anatomy +5638 (39.87%) ['star-spike']
- heygen-com/hyperframes +5484 (8.38%) []
- ifixai-ai/iFixAi +5010 (17.38%) ['product-stars']
- hugohe3/ppt-master +4070 (6.48%) ['product-stars']
- cathrynlavery/diagram-design +3880 (6.86%) []
- tt-a1i/archify +3827 (4.53%) []
- Leonxlnx/taste-skill +3585 (3.65%) []
- pbakaus/impeccable +3566 (4.34%) []
- obra/superpowers +3542 (1.18%) []
- akitaonrails/ai-memory +3463 (35.93%) ['star-spike', 'product-stars']
- lemomo-ai/lemo-opuscar +3452 (125.62%) ['star-spike']
- paperclipai/paperclip +3411 (3.3%) []
- anthropics/claude-plugins-official +3358 (8.23%) []
- ruvnet/ruflo +3109 (4.11%) []

## Code search vs topic search
- repos found by code search: 194
- also in topic search: 11
- code-only: 167; tiers: {'verified': 83, 'watch': 65, 'new': 19}

## Top 30 by stars: anthropic
- anthropics/skills [marketplace,collection] *183346*  items=2 - Anthropic example skills
- anthropics/claude-code [marketplace,agent] *153195*  items=2 - Bundled plugins for Claude Code including Agent SDK development tools, PR review
- anthropics/claude-plugins-official [plugin,marketplace,collection] *44169*  items=3 - Directory of popular Claude Code extensions including development tools, product
- anthropics/financial-services [marketplace] *40737*  items=1 - 
- anthropics/knowledge-work-plugins [marketplace] *32337*  items=1 - 
- anthropics/claude-for-legal [marketplace] *9787*  items=1 - Reference agents, skills, and data connectors for the legal workflows we see mos
- anthropics/claude-code-action [collection] *9625*  items=1 - The official GitHub Action for running Claude Code in CI: mention @claude in iss
- anthropics/claude-code-security-review [collection] *6525*  items=1 - An official AI-powered security-review GitHub Action that uses Claude to analyze
- anthropics/claude-plugins-community [marketplace] *4757*  items=1 - 
- anthropics/commerce-agents [marketplace] *3326*  items=1 - Claude Commerce Agents: the commerce-builder plugin for building shopping and me
- anthropics/life-sciences [marketplace] *625*  items=1 - Skills for life sciences research, data analysis, and discovery
- anthropics/k12-teacher-skills [marketplace] *589*  items=1 - Plugin marketplace for K-12 Education and Claude for Teachers.
- anthropics/healthcare [marketplace] *429*  items=1 - Claude for Healthcare — one plugin bundling payer, provider, pharma, and general
- anthropics/oncall-kit [marketplace] *248*  items=1 - 
- anthropics/claude-for-financial-advisors [plugin,marketplace] *112*  items=2 - Ready-to-run workflows for financial advisors in Claude Cowork, drawing live dat
- anthropics/claude-tag-plugins [marketplace] *67*  items=1 - Plugins that connect Claude Tag to common SaaS services, plus charting and confi
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
- obra/superpowers [plugin,skill] *304318*  items=3 - Superpowers teaches Claude brainstorming, subagent driven development with built
- mattpocock/skills [plugin] *301928*  items=2 - Matt Pocock's agent skills for real engineering — grilling, spec/ticket flows, T
- heygen-com/hyperframes [plugin] *70933*  items=2 - HyperFrames by HeyGen. Write HTML, render video. Compositions, GSAP and runtime 
- ChromeDevTools/chrome-devtools-mcp [plugin,mcp-server] *54056*  items=4 - Control and inspect a live Chrome browser from your coding agent. Record perform
- confident-ai/deepeval [plugin] *19072* ['product-stars'] items=1 - Skills for adding DeepEval evaluations, tracing, datasets, Confident AI reports,
- huggingface/skills [plugin] *11204*  items=2 - Build, train, evaluate, and use open source AI models, datasets, and spaces.
- wonderwhy-er/DesktopCommanderMCP [plugin,mcp-server] *10104*  items=4 - MCP server for terminal commands, process management, and file operations across
- Eigenwise/atomic-agents [plugin,marketplace] *6299* ['product-stars'] items=3 - Comprehensive development workflow for building AI agents with the Atomic Agents
- exa-labs/exa-mcp-server [plugin,mcp-server] *5162*  items=3 - Exa AI web search, deep research, and content extraction. Provides MCP tools and
- NVIDIA/skills [plugin] *3712*  items=2 - Find the right NVIDIA skill for GPU acceleration, CUDA, AI agents, data loading,
- cloudflare/skills [plugin] *3156*  items=2 - Skills for the Cloudflare developer platform: Workers, Durable Objects, Agents S
- modelcontextprotocol/ext-apps [plugin] *3005*  items=3 - Skills for creating MCP Apps with the MCP Apps SDK
- expo/skills [plugin] *3000*  items=2 - Official Expo skills for building, deploying, upgrading, and debugging React Nat
- aws/agent-toolkit-for-aws [plugin] *2954*  items=8 - Build, deploy, and operate AI agents on AWS. Skills for scaffolding agents with 
- GoogleChrome/modern-web-guidance [plugin] *2544*  items=2 - Keep your coding agent up to date with the latest web best practices
- figma/mcp-server-guide [plugin,mcp-server] *2107*  items=4 - Figma design platform integration. Access design files, extract component inform
- stripe/ai [plugin,mcp-server] *1966*  items=3 - Stripe development plugin for Claude
- MicrosoftDocs/mcp [plugin,mcp-server] *1951*  items=3 - Access official Microsoft documentation, API references, and code samples for Az
- EpicGames/unreal-engine-skills-for-claude-code-plugin [plugin] *1623* ['star-spike'] items=2 - Control Unreal Editor directly from Claude Code via MCP. Hundreds of tools expos
- microsoft/azure-skills [plugin] *1590*  items=2 - Transform Claude into an Azure expert. This plugin integrates the Azure MCP serv
- atlassian/atlassian-mcp-server [plugin,mcp-server] *1120*  items=3 - Connect to Atlassian products including Jira and Confluence. Search and create i
- forcedotcom/sf-skills [plugin] *1111*  items=1 - Build Salesforce apps and agents using these core building blocks: metadata, Ape
- awslabs/agent-plugins [plugin] *927*  items=10 - Guide developers through adding maps, places search, geocoding, routing, and oth
- superdesigndev/superdesign-skill [plugin,skill] *895*  items=2 - Design or redesign frontend UI and marketing graphics on the Superdesign infinit
- Shopify/Shopify-AI-Toolkit [plugin] *613*  items=2 - Shopify's AI Toolkit provides 18 development skills for building on the Shopify 
- duckdb/duckdb-skills [plugin] *610*  items=2 - DuckDB-powered skills for Claude Code: read any data file, attach and query Duck
- ClickHouse/agent-skills [plugin] *559*  items=2 - 28 best practice rules for ClickHouse schema design, query optimization, and dat
- Unity-Technologies/unity-agent-plugin [plugin] *553*  items=2 - Unity's official plugin for Claude Code, with curated skills for game developmen
- gitroomhq/postiz-agent [plugin] *539*  items=3 - Social media automation CLI for scheduling posts, managing integrations, uploadi
- makenotion/claude-code-notion-plugin [plugin] *499*  items=2 - Notion workspace integration. Search pages, create and update documents, manage 

## Top 30 by stars: listed
- DietrichGebert/ponytail [plugin] *174931*  items=2 - Lazy senior dev mode. Forces the simplest, shortest solution that actually works
- JuliusBrussee/caveman [plugin,skill] *114667*  items=2 - Auto-activation works differently per agent: Claude Code uses SessionStart hooks
- thedotmack/claude-mem [plugin,skill] *102618*  items=3 - Persistent memory system for Claude Code - seamlessly preserve context across se
- Egonex-AI/Understand-Anything [plugin,skill] *87960*  items=2 - Understand Anything is a Claude Code plugin that analyzes your project with a mu
- pbakaus/impeccable [plugin] *85660*  items=1 - Great design prompts require design vocabulary. Most people don't have it. You c
- mem0ai/mem0 [plugin] *67717* ['product-stars'] items=1 - Connect Mem0 to Claude to give your agent persistent memory across sessions. Cla
- mvanhorn/last30days-skill [plugin] *65231*  items=1 - last-30-days is a Claude Code skill that searches the web and delivers a structu
- coreyhaines31/marketingskills [plugin,skill] *56256*  items=3 - coreyhaines31
- DayuanJiang/next-ai-draw-io [plugin,mcp-server] *36393*  items=2 - AI-powered Draw.io diagram generation with real-time browser preview. Create flo
- mksglu/context-mode [plugin] *32019*  items=1 - MCP is the protocol for tool access. We're the virtualization layer for context.
- jarrodwatts/claude-hud [plugin,collection] *28832*  items=2 - Real-time statusline HUD for Claude Code - context health, tool activity, agent 
- alirezarezvani/claude-skills [plugin,skill] *28612*  items=2 - Playwright Pro turns your AI coding agent into a senior test automation engineer
- promptfoo/promptfoo [plugin] *26358*  items=1 - Teaches AI coding agents to create and maintain promptfoo eval suites. Encodes b
- AgriciDaniel/claude-seo [plugin] *19915*  items=1 - Comprehensive SEO analysis plugin for Claude Code. Performs full site audits wit
- browser-use/browser-harness [plugin] *18586*  items=1 - Open-source browser agent driven via CDP — direct browser control, 79K stars, YC
- Jeffallan/claude-skills [plugin,skill,collection] *12029*  items=3 - 66 specialized skills for full-stack development: 12 language experts (Python, T
- nicobailon/visual-explainer [plugin,collection] *10610*  items=3 - An agent skill that turns complex terminal output into styled HTML pages you act
- revfactory/harness [plugin,agent] *9242*  items=3 - Harness leverages Claude Code's agent team system to decompose complex tasks int
- Eventual-Inc/Daft [plugin] *5810* ['product-stars'] items=1 - Skills for working with Daft, a high-performance data engine for AI and multimod
- clidey/whodb [plugin] *5041* ['product-stars'] items=1 - Database management tools for Claude Code. Query databases, explore schemas, ana
- nyldn/claude-octopus [plugin] *4296*  items=2 - Multi-LLM orchestration for Claude Code and Cowork. Coordinates 8 AI providers (
- giancarloerra/SocratiCode [plugin,mcp-server] *3354*  items=2 - Enterprise-grade (40m+ lines) codebase intelligence in a zero-setup, private and
- Chachamaru127/claude-code-harness [plugin,agent] *3183*  items=2 - Autonomous Plan → Work → Review cycle for Claude Code. Go-native engine with 25×
- AgriciDaniel/claude-blog [plugin] *2493*  items=1 - AI-powered blog creation and optimization skill with 20 commands, 4 specialized 
- nizos/tdd-guard [plugin,collection] *2367*  items=2 - Enforces Test-Driven Development by intercepting file operations in Claude Code.
- AminForou/mcp-gsc [plugin] *2017*  items=1 - Connect Google Search Console to Claude Code. Query rankings, inspect URLs, audi
- severity1/claude-code-prompt-improver [plugin] *1962*  items=1 - Intelligent prompt optimization using skill-based architecture. Enriches vague p
- kenryu42/cc-safety-net [plugin,collection] *1761*  items=3 - Block destructive git and filesystem commands before execution
- codeaholicguy/ai-devkit [plugin] *1652*  items=1 - A structured software development toolkit that helps Claude Code follow senior-e
- activeloopai/hivemind [plugin,skill,collection] *1634*  items=5 - Cloud-backed persistent memory for Claude Code powered by Deeplake. Automaticall

## Top 30 by stars: verified
- morluto/rea [mcp-server] *374195* ['star-spike'] items=1 - Reverse engineer anything from your terminal or agent with one CLI and MCP serve
- affaan-m/ECC [collection] *287444*  items=1 - Top-notch, well-written resources covering "just about everything" from core eng
- firecrawl/firecrawl [skill] *194744* ['product-stars'] items=1 - Supercharge your AI agents with data from the web and beyond. Building the libra
- vercel/next.js [marketplace] *143214* ['product-stars'] items=1 - The React Framework
- nextlevelbuilder/ui-ux-pro-max-skill [marketplace] *139515*  items=1 - An AI skill that provides design intelligence for building professional UI/UX ac
- garrytan/gstack [agent] *137417*  items=1 - Garry Tan's (Y Combinator) Claude Code setup and "open source software factory" 
- browser-use/browser-use [mcp-server] *118991*  items=1 - Browser agents and stealth cloud browsers for AI: run web tasks, fill forms, ext
- addyosmani/agent-skills [marketplace] *109970*  items=1 - Production-grade engineering skills for AI coding agents.
- paperclipai/paperclip [skill,mcp-server] *106665*  items=2 - The open-source app everyone uses to manage agents at work
- nexu-io/open-design [marketplace] *103625*  items=1 - The 1st Collaborative AI Design Agent Workspace. Local-first and open source. Cr
- Leonxlnx/taste-skill [marketplace] *101692*  items=1 - Agent skills that give coding agents taste: art direction, reference images and 
- ruvnet/RuView [marketplace] *99338*  items=1 - π RuView turns commodity WiFi signals into real-time spatial intelligence, vital
- storybookjs/storybook [marketplace] *91361* ['product-stars'] items=1 - Storybook is the industry standard workshop for building, documenting, and testi
- koala73/worldmonitor [skill,mcp-server] *89376* ['product-stars'] items=2 - Real-time global intelligence dashboard. AI-powered news aggregation, geopolitic
- D4Vinci/Scrapling [mcp-server] *89362*  items=1 - Web scraping with stealth HTTP, real browsers, and Cloudflare bypass. CSS select
- tt-a1i/archify [skill,collection] *88375*  items=2 - An Agent Skill for Claude Code that generates interactive architecture, workflow
- bytedance/deer-flow [skill] *84348*  items=1 - An open-source long-horizon SuperAgent harness that researches, codes, and creat
- debpalash/VoiceStudio [skill] *83633* ['product-stars'] items=1 - VoiceStudio is the open-source, fully-local ElevenLabs alternative — voice cloni
- netdata/netdata [mcp-server] *81111*  items=1 - Real-time infrastructure monitoring with metrics, logs, alerts, and ML-based ano
- shareAI-lab/learn-claude-code [collection] *79112*  items=1 - A really interesting analysis of how coding agents like Claude Code are designed
- ruvnet/ruflo [marketplace,mcp-server] *78828*  items=2 - 🌊 The original agent harness. Deploy intelligent multi-player swarms, coordinate
- ComposioHQ/awesome-claude-skills [skill] *77784*  items=1 - A curated list of awesome Claude Skills, resources, and tools for customizing Cl
- headroomlabs-ai/headroom [marketplace] *77676*  items=1 - Compress tool outputs, logs, files, and RAG chunks before they reach the LLM. 20
- career-ops-hq/career-ops [marketplace] *76865*  items=1 - Open-source AI job search agent and job finder: scan job boards, score each job 
- thedaviddias/Front-End-Checklist [marketplace,mcp-server] *74555* ['product-stars'] items=2 - 🗂 The essential checklist for modern web development, for humans and AI agents
- rohitg00/ai-engineering-from-scratch [skill] *72864* ['product-stars'] items=1 - Learn AI Engineering! Learn it. Build it. Ship it for others.
- tw93/Mole [marketplace] *72632* ['product-stars'] items=1 - 🐹 Keep your Mac and PC clean, light, and running like new. Fast open-source CLI,
- usestrix/strix [skill] *71484* ['product-stars'] items=1 - Open-source AI penetration testing tool to find and fix your app’s vulnerabiliti
- calesthio/OpenMontage [skill] *71238*  items=1 - World's first open-source, agentic video production system. 12 production pipeli
- shanraisshan/claude-code-best-practice [skill] *67948*  items=1 - from vibe coding to agentic engineering - practice makes claude perfect

## Top 30 by stars: watch
- f/prompts.chat [marketplace] *174282* ['product-stars'] items=1 - f.k.a. Awesome ChatGPT Prompts. Share, discover, and collect prompts from the co
- opendatalab/MinerU [skill] *82392* ['product-stars'] items=1 - Transforms complex documents like PDFs and Office docs into LLM-ready markdown/J
- code-yeongyu/oh-my-openagent [skill] *70297* ['product-stars'] items=1 - OmO: Just type "mass ulw" keyword with your prompt. Now you are the master of gr
- bmad-code-org/BMAD-METHOD [skill] *54489* ['product-stars'] items=1 - Breakthrough Method for Agile Ai Driven Development
- Imbad0202/academic-research-skills [marketplace] *53637*  items=1 - Academic Research Skills for Claude Code: research → write → review → revise → f
- tldraw/tldraw [mcp-server] *51059*  items=1 - Draw and visually collaborate with your agents on tldraw's canvas.
- metabase/metabase [mcp-server] *49827*  items=1 - Lets AI clients search, explore, query, and visualize data in a Metabase instanc
- abhigyanpatwari/GitNexus [marketplace] *48014* ['product-stars'] items=1 - GitNexus: The Zero-Server Code Intelligence Engine
- PostHog/posthog [mcp-server] *40397*  items=1 - Official PostHog MCP Server for product analytics, feature flags, experiments, a
- openai/codex-plugin-cc [marketplace] *34525*  items=1 - Use Codex from Claude Code to review code or delegate tasks.
- zarazhangrui/frontend-slides [marketplace] *31161*  items=1 - Create beautiful slides on the web using a coding agent's frontend skills
- oraios/serena [mcp-server] *30669*  items=1 - A powerful toolkit for coding, providing semantic retrieval and editing capabili
- openai/skills [skill] *28273*  items=1 - Skills Catalog for Codex
- eyaltoledano/claude-task-master [marketplace] *28270*  items=1 - An AI-powered task-management system you can drop into Cursor, Lovable, Windsurf
- vercel/ai [skill] *27490* ['product-stars'] items=1 - The AI Toolkit for TypeScript. From the creators of Next.js, the AI SDK is a fre
- clockworklabs/SpacetimeDB [marketplace] *25364* ['product-stars'] items=1 - Development at the speed of light
- different-ai/openwork [mcp-server] *24237*  items=1 - Your OpenWork org's skills, plugins, workflows, and connections through one OAut
- HKUDS/AI-Trader [skill] *22940* ['product-stars'] items=1 - "AI-Trader: 100% Fully-Automated Agent-Native Trading"
- screenpipe/screenpipe [mcp-server] *22048*  items=1 - Search your local screen recordings, audio transcripts, and computer activity fr
- getpaseo/paseo [skill] *21830*  items=1 - Orchestrate multiple coding agents from desktop and mobile
- agent0ai/agent-zero [skill] *19553* ['product-stars'] items=1 - Agent Zero AI framework
- longbridge/gpui-kit [skill] *18567* ['product-stars'] items=1 - Rust GUI components for building fantastic cross-platform desktop application by
- Canner/WrenAI [skill] *17958* ['product-stars'] items=1 - GenBI (Generative BI) for AI agents, an open-source, governed text-to-SQL throug
- architecture-decision-record/architecture-decision-record [skill] *17294* ['product-stars'] items=1 - Architecture decision record (ADR) examples for software planning, IT leadership
- composio-community/awesome-codex-skills [skill] *17008*  items=1 - A curated list of practical Codex skills for automating workflows across the Cod
- travisvn/awesome-claude-skills [skill] *15531*  items=1 - A curated list of awesome Claude Skills, resources, and tools for customizing Cl
- superset-sh/superset [marketplace] *15503* ['product-stars'] items=1 - Superset is an agentic IDE to orchestrate 100+ coding agents in parallel. Run an
- millionco/react-doctor [skill] *15043* ['product-stars'] items=1 - Your agent writes bad React. This catches it
- kyegomez/OpenMythos [plugin] *14911*  items=1 - A theoretical reconstruction of the Claude Mythos architecture, built from first
- NevaMind-AI/memU [skill] *14561* ['product-stars'] items=1 - Personal memory across agents

## Random sample of 20 watch repos (of 469)
- Servosity/msp-skills [marketplace,mcp-server] *62*  items=85 - Free MCP servers + Claude Code Skills for MSP tools - PSA, RMM, backup, M365. Lo reasons=['fails: license (NOASSERTION)'] src=['mcp-registry', 'topic']
- saidutt46/domain-check [mcp-server] *306*  items=1 - Fast domain availability checker with RDAP/WHOIS — batch checks, TLD presets, an reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- clockworklabs/SpacetimeDB [marketplace] *25364* ['product-stars'] items=1 - Development at the speed of light reasons=['fails: license (NOASSERTION)'] src=['topic']
- r-huijts/strava-mcp [mcp-server] *501*  items=1 - MCP server for accessing Strava API reasons=['fails: pushed<=90d (132)'] src=['mcp-registry']
- dnotitia/akb [mcp-server] *163*  items=1 - Git-backed org memory for AI agents — hybrid search, tables, files & a URI graph reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- alirezarezvani/claude-code-tresor [skill] *783*  items=1 - A world-class collection of Claude Code utilities: autonomous skills, expert age reasons=['fails: pushed<=90d (112)'] src=['topic']
- Infrasity-Labs/dev-gtm-claude-skills [marketplace] *143*  items=1 - Open-source Claude skills for GEO, AI discoverability, and developer GTM workflo reasons=['fails: pushed<=90d (117)'] src=['topic']
- pyth-network/pyth-crosschain [mcp-server] *249*  items=1 - Real-time and historical price feeds for 500+ crypto, equities, FX, and commodit reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- modelcontextprotocol/modelcontextprotocol [marketplace] *9523* ['product-stars'] items=1 - Specification and documentation for the Model Context Protocol reasons=['fails: license (NOASSERTION)'] src=['topic']
- 0xnyn/canary [plugin] *493*  items=1 - QA harness built for Claude Code | E2E testing with screen recordings, console l reasons=['fails: pushed<=90d (125)', 'fails: license (NOASSERTION)'] src=['code']
- komal-SkyNET/claude-skill-homeassistant [plugin] *975*  items=1 - Claude Code skill to supercharge and manage all Home Assistant workflows reasons=['fails: pushed<=90d (111)'] src=['code']
- kody-hq/kody [mcp-server] *849*  items=1 - Your agents' cloud for individuals and teams. Search, execute, packages, jobs, a reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- Wind-Alice/AliceMarket [skill] *141*  items=1 - 将 Wind 丰富的金融数据、专业工具、技能Skill与专家Agent能力开放给各类 Agent 和智能应用。通过 MCP、Skill、API 等标准化方式，为 reasons=['fails: license (None)'] src=['topic']
- stefan-jansen/claude-code-toolkit [skill] *90*  items=1 - Superseded by coding-agent-toolkit — see README. Preserved for reference: Claude reasons=['fails: pushed<=90d (108)'] src=['topic']
- Klavis-AI/klavis [mcp-server] *5823*  items=1 - MCP server for progressive tool usage at any scale (see https://klavis.ai) reasons=['fails: pushed<=90d (144)'] src=['mcp-registry']
- remotion-dev/skills [skill] *5583*  items=1 - Agent Skills reasons=['fails: license (None)'] src=['topic']
- gradion-ai/ipybox [mcp-server] *76*  items=1 - Unified execution environment for Python code, shell commands, and programmatic  reasons=['fails: pushed<=90d (134)'] src=['mcp-registry']
- Pratiyush/llm-wiki [plugin] *398*  items=1 - LLM-powered knowledge base from your Claude Code, Codex CLI, Copilot, Cursor & G reasons=['fails: pushed<=90d (127)'] src=['code']
- tizzy916/humanities-writing-companion [skill] *463*  items=1 - End-to-end humanities writing assistant — an Agent Skill (open SKILL.md format). reasons=['fails: license (NOASSERTION)'] src=['topic']
- proyecto26/system-design-skills [marketplace] *96*  items=1 - A divide-and-conquer wiki of system-design skills for Claude Code — reason about reasons=['fails: pushed<=90d (143)'] src=['topic']

## Errors
- none

## Rate limit
- REST calls this run (uncached): {"core": 85, "search": 125}; last seen: {"core": {"remaining": "4915", "limit": "5000"}, "search": {"remaining": "22", "limit": "30"}}
- GraphQL: 182 calls, cost 88, remaining 4883/5000, stopped early: False
- REST stopped early: False
- repos lacking metadata: 4227; enriched this run: 30852