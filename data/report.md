# Catalog report 2026-11-06
Mode: **token**; run time 1383s
Repos (deduped): 3216; flat entries before dedup: 24820

## Tier x type BEFORE dedup (flat entries)
- new/mcp-server: 14951
- watch/mcp-server: 2393
- listed/plugin: 2283
- verified/mcp-server: 1258
- watch/skill: 487
- verified/skill: 478
- watch/marketplace: 408
- official/plugin: 376
- verified/marketplace: 352
- verified/plugin: 341
- watch/plugin: 316
- watch/agent: 219
- verified/collection: 196
- new/skill: 168
- new/plugin: 152
- anthropic/plugin: 149
- new/marketplace: 141
- verified/agent: 49
- new/agent: 30
- anthropic/marketplace: 15
- anthropic/collection: 4
- watch/collection: 2
- anthropic/agent: 1

## Tier AFTER dedup (repos)
- verified: 1837
- watch: 489
- new: 321
- official: 256
- listed: 166
- anthropic: 147

## Type AFTER dedup (items)
- mcp-server: 1703
- plugin: 1405
- skill: 777
- marketplace: 490
- collection: 122
- agent: 48

## Primary type AFTER dedup (repos)
- mcp-server: 1110
- plugin: 838
- skill: 713
- marketplace: 430
- collection: 90
- agent: 35

## Repos by discovery source family
- topic: 1294
- mcp-registry: 1247
- anthropic: 464
- code: 205
- anthropic-org: 188
- curated: 148
- marketplace-expansion: 37

## Flags (all tiers)
- product-stars: 224
- star-spike: 14
- star-anomaly: 4

## star-anomaly by tier
- new: 4

## Metadata gaps
- repos without metadata: 153
- reasons: {'unfetched': 153}

## MCP-only repos excluded: 51
- assafelovic/gpt-researcher *30511* ['ai', 'python', 'agent', 'automation', 'research'] - An autonomous agent that conducts deep research on any data using any LLM provid
- mrexodia/ida-pro-mcp *13381* ['ida-plugin', 'ida-pro', 'mcp', 'mcp-server', 'modelcontextprotocol'] - AI-powered reverse engineering assistant that bridges IDA Pro with language mode
- mcp-use/mcp-use *10849* ['mcp', 'model-context-protocol', 'apps-sdk', 'mcp-apps', 'mcp-inspector'] - The fullstack MCP framework to develop MCP Apps for ChatGPT / Claude & MCP Serve
- Agents365-ai/drawio-skill *10606* ['drawio', 'diagram', 'agent-skills', 'architecture-diagram', 'claude-code'] - Agent skill that turns natural language, code, Terraform/K8s, SQL, OpenAPI, Asyn
- kajisho5/ffmpeg-skill *4624* ['audio-processing', 'captions', 'ffmpeg', 'subtitles', 'video'] - Local video editor for coding agents: 42 FFmpeg tools with a machine-readable co
- jordan-gibbs/hyperresearch *4413* ['agents', 'agentskills', 'claude-code', 'deep-research', 'deep-research-agent'] - Convert Claude Code or Codex into the most intelligent Deep Research Agent. Coll
- stickerdaniel/linkedin-mcp-server *4121* ['linkedin', 'linkedin-scraper', 'mcp', 'mcp-server', 'linkedin-mcp'] - Open-source MCP server for LinkedIn. Give Claude and any MCP-compatible AI agent
- taylorwilsdon/google_workspace_mcp *3478* ['ai', 'gmail', 'google-calendar', 'google-workspace', 'llm'] - Control Gmail, Google Calendar, Docs, Sheets, Slides, Chat, Forms, Tasks, Search
- duty1g/x64dbg-mcp-server *2790* ['ai-agents', 'ai-debugging', 'binary-analysis', 'claude', 'claude-code'] - x64dbg-MCP Server is a native MCP (Model Context Protocol) plugin for x64dbg tha
- alpic-ai/skybridge *2185* ['agent', 'ai', 'apps-sdk', 'chatgpt', 'claude'] - Skybridge is a full-stack TypeScript framework for MCP Apps and ChatGPT Apps. Ty
- study8677/repobrain *1359* ['claude-code', 'codex-cli', 'developer-tools', 'mcp-server', 'windsurf'] - 🧠 RepoBrain (formerly Antigravity) — Give your repo a brain. ChatGPT for your co
- CodeAbra/iai-personal-memory-engine *919* ['claude', 'claude-code', 'local-first', 'mcp', 'mcp-server'] - A cyber brain for your AI. It never forgets a detail, remembers exactly what you
- hetpatel-11/Adobe_Premiere_Pro_MCP *824* ['adobe', 'adobe-premiere-pro', 'adobe-mcp', 'adobe-premiere-pro-mcp', 'ai-video-editing'] - Adobe Premiere Pro MCP. Tools for AI-driven video editing via MCP, for Codex, Cl
- Storybloq/storybloq *788* ['agentic-development', 'ai-development', 'anthropic', 'claude-code', 'claude-skill'] - Project memory and workflows for Claude Code and Codex. Keep stories, plans, han
- agentic-box/memora *746* ['ai-agent', 'claude', 'knowledge-graph', 'llms', 'mcp'] - Give your AI agents persistent, collective memory — with deduplicating absorb, s

## Degradation
- registry complete: True (575 pages, 57418 entries)
- MCP servers merged from the previous catalog (not re-fetched): 0
- GraphQL 403s: 0 (secondary rate limit: 0); retries: 16; queries that gave up: 1
- HTTP retries (5xx/network): 0
- repos with stale metadata reused from the previous catalog (meta_stale): 0

## MCP Registry
- {"pages": 575, "fetched": 57418, "kept": 56540, "dropped": 878, "bad": 0, "complete": true, "excluded_remote_only": 19574, "excluded_low_signal": 18364, "fallback_merged": 0, "records": 1247, "attached_existing": 141, "new_repo": 1106, "remote_only": 0, "tiers": {"official": 25, "listed": 20, "verified": 896, "new": 122, "watch": 184}}

## Top 20 by trend_7d
- morluto/rea +26323 (6.44%) []
- cloudflare/security-audit-skill +8913 (16.79%) []
- mattpocock/skills +8817 (2.87%) []
- thedotmack/claude-mem +8642 (8.23%) []
- pbakaus/impeccable +8349 (8.72%) []
- D4Vinci/Scrapling +7893 (8.74%) []
- debpalash/VoiceStudio +7544 (7.98%) ['product-stars']
- Nutlope/hallmark +6702 (15.87%) []
- google/elephant-goldfish-model +6402 (104.44%) ['star-spike']
- ifixai-ai/iFixAi +5713 (15.04%) ['product-stars']
- affaan-m/ECC +5145 (1.76%) []
- Leonxlnx/taste-skill +5108 (4.83%) []
- DietrichGebert/ponytail +4996 (2.77%) []
- HKUDS/DeepTutor +4957 (9.79%) ['product-stars']
- obra/superpowers +4354 (1.41%) []
- calesthio/OpenMontage +4199 (5.75%) []
- heygen-com/hyperframes +4099 (5.42%) []
- lemomo-ai/lemo-opuscar +3242 (34.14%) ['star-spike']
- nextlevelbuilder/ui-ux-pro-max-skill +3160 (2.22%) []
- hugohe3/ppt-master +3067 (4.32%) ['product-stars']

## Code search vs topic search
- repos found by code search: 205
- also in topic search: 14
- code-only: 177; tiers: {'anthropic': 1, 'verified': 87, 'watch': 63, 'new': 26}

## Top 30 by stars: anthropic
- anthropics/skills [marketplace,collection] *187833*  items=2 - Anthropic example skills
- anthropics/claude-code [marketplace,agent] *154699*  items=2 - Anthropic's Claude Code plugins, installed from the claude-plugins-official repo
- anthropics/claude-plugins-official [plugin,marketplace,collection] *46241*  items=15 - Directory of popular Claude Code extensions including development tools, product
- anthropics/financial-services [marketplace] *41066*  items=1 - 
- anthropics/knowledge-work-plugins [marketplace] *34896*  items=1 - 
- anthropics/claude-for-legal [marketplace] *9910*  items=1 - Reference agents, skills, and data connectors for the legal workflows we see mos
- anthropics/claude-code-action [collection] *9801*  items=1 - The official GitHub Action for running Claude Code in CI: mention @claude in iss
- anthropics/claude-code-security-review [collection] *6748*  items=1 - An official AI-powered security-review GitHub Action that uses Claude to analyze
- anthropics/claude-plugins-community [marketplace] *4833*  items=1 - 
- anthropics/commerce-agents [marketplace] *3426*  items=1 - Claude Commerce Agents: the commerce-builder plugin for building shopping and me
- anthropics/life-sciences [marketplace] *642*  items=1 - Skills for life sciences research, data analysis, and discovery
- anthropics/k12-teacher-skills [marketplace] *613*  items=1 - Plugin marketplace for K-12 Education and Claude for Teachers.
- anthropics/healthcare [marketplace] *440*  items=1 - Claude for Healthcare — one plugin bundling payer, provider, pharma, and general
- anthropics/oncall-kit [marketplace] *265*  items=1 - 
- anthropics/claude-for-financial-advisors [plugin,marketplace] *140*  items=2 - Ready-to-run workflows for financial advisors in Claude Cowork, drawing live dat
- anthropics/claude-tag-plugins [marketplace] *76*  items=1 - Plugins that connect Claude Tag to common SaaS services, plus charting and confi
- anthropics/claude-plugins-official [plugin] *None*  items=1 - Development kit for working with the Claude Agent SDK
- anthropics/claude-plugins-official [plugin] *None*  items=1 - Help Claude Code champions run hackathons and office hours, find patterns worth 
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

## Top 30 by stars: official
- mattpocock/skills [plugin] *315585*  items=2 - Matt Pocock's agent skills for real engineering — grilling, spec/ticket flows, T
- obra/superpowers [plugin,skill] *313126*  items=4 - Superpowers teaches Claude brainstorming, subagent driven development with built
- heygen-com/hyperframes [plugin] *79675*  items=2 - HyperFrames by HeyGen. Write HTML, render video. Compositions, GSAP and runtime 
- ChromeDevTools/chrome-devtools-mcp [plugin,mcp-server] *54859*  items=4 - Control and inspect a live Chrome browser from your coding agent. Record perform
- confident-ai/deepeval [plugin] *19322* ['product-stars'] items=1 - Skills for adding DeepEval evaluations, tracing, datasets, Confident AI reports,
- huggingface/skills [plugin] *11286*  items=2 - Build, train, evaluate, and use open source AI models, datasets, and spaces.
- wonderwhy-er/DesktopCommanderMCP [plugin,mcp-server] *10233*  items=4 - MCP server for terminal commands, process management, and file operations across
- Eigenwise/atomic-agents [plugin,marketplace] *6319* ['product-stars'] items=3 - Comprehensive development workflow for building AI agents with the Atomic Agents
- exa-labs/exa-mcp-server [plugin,mcp-server] *5215*  items=3 - Exa AI web search, deep research, and content extraction. Provides MCP tools and
- expo/skills [plugin] *4067*  items=2 - Official Expo skills for building, deploying, upgrading, and debugging React Nat
- NVIDIA/skills [plugin] *3874*  items=2 - Find the right NVIDIA skill for GPU acceleration, CUDA, AI agents, data loading,
- aws/agent-toolkit-for-aws [plugin] *3415*  items=8 - Build, deploy, and operate AI agents on AWS. Skills for scaffolding agents with 
- cloudflare/skills [plugin] *3287*  items=2 - Skills for the Cloudflare developer platform: Workers, Durable Objects, Agents S
- modelcontextprotocol/ext-apps [plugin] *3051*  items=3 - Skills for creating MCP Apps with the MCP Apps SDK
- GoogleChrome/modern-web-guidance [plugin] *2630*  items=2 - Keep your coding agent up to date with the latest web best practices
- figma/mcp-server-guide [plugin,mcp-server] *2154*  items=4 - Figma design platform integration. Access design files, extract component inform
- stripe/ai [plugin,mcp-server] *2046*  items=3 - Stripe development plugin for Claude
- MicrosoftDocs/mcp [plugin,mcp-server] *1975*  items=3 - Access official Microsoft documentation, API references, and code samples for Az
- EpicGames/unreal-engine-skills-for-claude-code-plugin [plugin] *1904*  items=2 - Control Unreal Editor directly from Claude Code via MCP. Hundreds of tools expos
- microsoft/azure-skills [plugin] *1622*  items=2 - Transform Claude into an Azure expert. This plugin integrates the Azure MCP serv
- forcedotcom/sf-skills [plugin,skill] *1150*  items=2 - Build Salesforce apps and agents using these core building blocks: metadata, Ape
- atlassian/atlassian-mcp-server [plugin,mcp-server] *1149*  items=3 - Connect to Atlassian products including Jira and Confluence. Search and create i
- superdesigndev/superdesign-skill [plugin,skill] *949*  items=2 - Design or redesign frontend UI and marketing graphics on the Superdesign infinit
- awslabs/agent-plugins [plugin] *937*  items=10 - Guide developers through adding maps, places search, geocoding, routing, and oth
- Shopify/Shopify-AI-Toolkit [plugin] *628*  items=2 - Shopify's AI Toolkit provides 18 development skills for building on the Shopify 
- duckdb/duckdb-skills [plugin] *616*  items=2 - DuckDB-powered skills for Claude Code: read any data file, attach and query Duck
- Unity-Technologies/unity-agent-plugin [plugin] *613*  items=2 - Unity's official plugin for Claude Code, with curated skills for game developmen
- gitroomhq/postiz-agent [plugin] *565*  items=3 - Social media automation CLI for scheduling posts, managing integrations, uploadi
- ClickHouse/agent-skills [plugin] *564*  items=2 - 28 best practice rules for ClickHouse schema design, query optimization, and dat
- TheQtCompanyRnD/agent-skills [plugin] *523*  items=3 - Agentic engineering skills for Qt software development — Qt C++/QML code review,

## Top 30 by stars: listed
- DietrichGebert/ponytail [plugin] *185354*  items=2 - Lazy senior dev mode. Forces the simplest, shortest solution that actually works
- JuliusBrussee/caveman [plugin,skill] *117824*  items=2 - Auto-activation works differently per agent: Claude Code uses SessionStart hooks
- thedotmack/claude-mem [plugin,skill] *113649*  items=3 - Persistent memory system for Claude Code - seamlessly preserve context across se
- pbakaus/impeccable [plugin] *104121*  items=1 - Great design prompts require design vocabulary. Most people don't have it. You c
- Egonex-AI/Understand-Anything [plugin,skill] *90989*  items=2 - Understand Anything is a Claude Code plugin that analyzes your project with a mu
- mem0ai/mem0 [plugin] *68487* ['product-stars'] items=1 - Connect Mem0 to Claude to give your agent persistent memory across sessions. Cla
- mvanhorn/last30days-skill [plugin] *66759*  items=1 - last-30-days is a Claude Code skill that searches the web and delivers a structu
- coreyhaines31/marketingskills [plugin,skill] *58764*  items=3 - coreyhaines31
- DayuanJiang/next-ai-draw-io [plugin,mcp-server] *36724*  items=2 - AI-powered Draw.io diagram generation with real-time browser preview. Create flo
- mksglu/context-mode [plugin] *33565*  items=1 - MCP is the protocol for tool access. We're the virtualization layer for context.
- alirezarezvani/claude-skills [plugin,skill] *29374*  items=2 - Playwright Pro turns your AI coding agent into a senior test automation engineer
- jarrodwatts/claude-hud [plugin,collection] *29118*  items=2 - Real-time statusline HUD for Claude Code - context health, tool activity, agent 
- AgriciDaniel/claude-seo [plugin] *26956*  items=1 - Comprehensive SEO analysis plugin for Claude Code. Performs full site audits wit
- promptfoo/promptfoo [plugin] *26887*  items=1 - Teaches AI coding agents to create and maintain promptfoo eval suites. Encodes b
- browser-use/browser-harness [plugin] *18890*  items=1 - Open-source browser agent driven via CDP — direct browser control, 79K stars, YC
- Jeffallan/claude-skills [plugin,skill,collection] *12239*  items=3 - 66 specialized skills for full-stack development: 12 language experts (Python, T
- nicobailon/visual-explainer [plugin,collection] *10815*  items=3 - An agent skill that turns complex terminal output into styled HTML pages you act
- revfactory/harness [plugin,agent] *9328*  items=3 - Harness leverages Claude Code's agent team system to decompose complex tasks int
- Eventual-Inc/Daft [plugin] *5828* ['product-stars'] items=1 - Skills for working with Daft, a high-performance data engine for AI and multimod
- clidey/whodb [plugin] *5050* ['product-stars'] items=1 - Database management tools for Claude Code. Query databases, explore schemas, ana
- nyldn/claude-octopus [plugin] *4389*  items=2 - Multi-LLM orchestration for Claude Code and Cowork. Coordinates 8 AI providers (
- giancarloerra/SocratiCode [plugin,mcp-server] *3367*  items=2 - Enterprise-grade (40m+ lines) codebase intelligence in a zero-setup, private and
- Chachamaru127/claude-code-harness [plugin,agent] *3202*  items=2 - Autonomous Plan → Work → Review cycle for Claude Code. Go-native engine with 25×
- fabio-rovai/open-ontologies [plugin] *2824* ['star-spike'] items=1 - AI-native ontology engineering with 39 MCP tools backed by an in-memory Oxigraph
- AgriciDaniel/claude-blog [plugin] *2657*  items=1 - AI-powered blog creation and optimization skill with 20 commands, 4 specialized 
- nizos/tdd-guard [plugin,collection] *2372*  items=2 - Enforces Test-Driven Development by intercepting file operations in Claude Code.
- AminForou/mcp-gsc [plugin] *2120*  items=1 - Connect Google Search Console to Claude Code. Query rankings, inspect URLs, audi
- severity1/claude-code-prompt-improver [plugin] *1968*  items=1 - Intelligent prompt optimization using skill-based architecture. Enriches vague p
- kenryu42/cc-safety-net [plugin,collection] *1922*  items=3 - Block destructive git and filesystem commands before execution
- codeaholicguy/ai-devkit [plugin] *1657*  items=1 - A structured software development toolkit that helps Claude Code follow senior-e

## Top 30 by stars: verified
- morluto/rea [marketplace,mcp-server] *435141*  items=2 - Reverse engineer anything with agents, from app behavior down to native binaries
- affaan-m/ECC [collection] *297981*  items=1 - Top-notch, well-written resources covering "just about everything" from core eng
- firecrawl/firecrawl [skill] *199020* ['product-stars'] items=1 - Supercharge your AI agents with data from the web and beyond. Building the libra
- nextlevelbuilder/ui-ux-pro-max-skill [marketplace] *145800*  items=1 - An AI skill that provides design intelligence for building professional UI/UX ac
- vercel/next.js [marketplace] *143356* ['product-stars'] items=1 - The React Framework
- garrytan/gstack [agent] *140090*  items=1 - Garry Tan's (Y Combinator) Claude Code setup and "open source software factory" 
- browser-use/browser-use [mcp-server] *120153*  items=1 - Browser agents and stealth cloud browsers for AI: run web tasks, fill forms, ext
- addyosmani/agent-skills [marketplace] *113553*  items=1 - Production-grade engineering skills for AI coding agents.
- paperclipai/paperclip [skill,mcp-server] *111504*  items=2 - The open-source app everyone uses to manage agents at work
- Leonxlnx/taste-skill [marketplace] *110820*  items=1 - Agent skills that give coding agents taste: art direction, reference images and 
- nexu-io/open-design [marketplace] *106167*  items=1 - The 1st Collaborative AI Design Agent Workspace. Local-first and open source. Cr
- ruvnet/RuView [marketplace] *102602*  items=1 - π RuView turns commodity WiFi signals into real-time spatial intelligence, vital
- debpalash/VoiceStudio [skill] *102120* ['product-stars'] items=1 - VoiceStudio is the open-source, fully-local ElevenLabs alternative — voice cloni
- D4Vinci/Scrapling [mcp-server] *98242*  items=1 - Web scraping with stealth HTTP, real browsers, and Cloudflare bypass. CSS select
- tt-a1i/archify [skill,collection] *93952*  items=2 - An Agent Skill for Claude Code that generates interactive architecture, workflow
- storybookjs/storybook [marketplace] *91464* ['product-stars'] items=1 - Storybook is the industry standard workshop for building, documenting, and testi
- koala73/worldmonitor [skill,mcp-server] *90236* ['product-stars'] items=2 - Real-time global intelligence dashboard. AI-powered news aggregation, geopolitic
- bytedance/deer-flow [skill] *85043*  items=1 - An open-source long-horizon SuperAgent harness that researches, codes, and creat
- netdata/netdata [mcp-server] *81288*  items=1 - Real-time infrastructure monitoring with metrics, logs, alerts, and ML-based ano
- ruvnet/ruflo [marketplace,mcp-server] *81009*  items=2 - 🌊 The original agent harness. Deploy intelligent multi-player swarms, coordinate
- career-ops-hq/career-ops [plugin] *80507*  items=1 - Open-source AI job search agent and job finder: scan job boards, score each job 
- shareAI-lab/learn-claude-code [collection] *79958*  items=1 - A really interesting analysis of how coding agents like Claude Code are designed
- headroomlabs-ai/headroom [marketplace] *78957*  items=1 - Compress tool outputs, logs, files, and RAG chunks before they reach the LLM. 20
- ComposioHQ/awesome-claude-skills [skill] *78873*  items=1 - A curated list of awesome Claude Skills, resources, and tools for customizing Cl
- calesthio/OpenMontage [skill] *77285*  items=1 - World's first open-source, agentic video production system. 12 production pipeli
- rohitg00/ai-engineering-from-scratch [skill] *77026* ['product-stars'] items=1 - Learn AI Engineering! Learn it. Build it. Ship it for others.
- thedaviddias/Front-End-Checklist [marketplace,mcp-server] *74659* ['product-stars'] items=2 - 🗂 The essential checklist for modern web development, for humans and AI agents
- tw93/Mole [marketplace] *74053* ['product-stars'] items=1 - 🐹 Keep your Mac and PC clean, light, and running like new. Fast open-source CLI,
- hugohe3/ppt-master [marketplace] *74045* ['product-stars'] items=1 - AI turns documents or topics into real, native PowerPoint decks—with native shap
- usestrix/strix [skill] *73995* ['product-stars'] items=1 - Open-source AI penetration testing tool to find and fix your app’s vulnerabiliti

## Top 30 by stars: watch
- f/prompts.chat [marketplace] *175926* ['product-stars'] items=1 - f.k.a. Awesome ChatGPT Prompts. Share, discover, and collect prompts from the co
- opendatalab/MinerU [skill] *83212* ['product-stars'] items=1 - Transforms complex documents like PDFs and Office docs into LLM-ready markdown/J
- code-yeongyu/oh-my-openagent [skill] *70737* ['product-stars'] items=1 - OmO: Just type "mass ulw" keyword with your prompt. Now you are the master of gr
- Imbad0202/academic-research-skills [marketplace] *55532*  items=1 - Academic Research Skills for Claude Code: research → write → review → revise → f
- bmad-code-org/BMAD-METHOD [skill] *55049* ['product-stars'] items=1 - Breakthrough Method for Agile Ai Driven Development
- tldraw/tldraw [mcp-server] *51287*  items=1 - Draw and visually collaborate with your agents on tldraw's canvas.
- metabase/metabase [mcp-server] *50194*  items=1 - Lets AI clients search, explore, query, and visualize data in a Metabase instanc
- abhigyanpatwari/GitNexus [marketplace] *48294* ['product-stars'] items=1 - GitNexus: The Zero-Server Code Intelligence Engine
- serverless/serverless [skill] *46933* ['product-stars'] items=1 - ⚡ Serverless Framework – Effortlessly build apps that auto-scale, incur zero cos
- PostHog/posthog [mcp-server] *40665*  items=1 - Official PostHog MCP Server for product analytics, feature flags, experiments, a
- openai/codex-plugin-cc [marketplace] *34920*  items=1 - Use Codex from Claude Code to review code or delegate tasks.
- zarazhangrui/frontend-slides [marketplace] *31954*  items=1 - Create beautiful slides on the web using a coding agent's frontend skills
- oraios/serena [mcp-server] *31138*  items=1 - A powerful toolkit for coding, providing semantic retrieval and editing capabili
- openai/skills [skill] *28544*  items=1 - Skills Catalog for Codex
- hypit-ai/hypit [skill] *28210* ['product-stars'] items=1 - Clone any viral video with AI agents. Not just a script, the whole workflow: swa
- vercel/ai [skill] *27770* ['product-stars'] items=1 - The AI Toolkit for TypeScript. From the creators of Next.js, the AI SDK is a fre
- clockworklabs/SpacetimeDB [marketplace] *25523* ['product-stars'] items=1 - Development at the speed of light
- nocobase/nocobase [skill] *24847*  items=1 - NocoBase is the open-source platform for building, running, and evolving busines
- different-ai/openwork [mcp-server] *24418*  items=1 - Your OpenWork org's skills, plugins, workflows, and connections through one OAut
- getpaseo/paseo [skill] *23230*  items=1 - Orchestrate multiple coding agents from desktop and mobile
- HKUDS/AI-Trader [skill] *23116* ['product-stars'] items=1 - "AI-Trader: 100% Fully-Automated Agent-Native Trading"
- screenpipe/screenpipe [mcp-server] *22245*  items=1 - Search your local screen recordings, audio transcripts, and computer activity fr
- agent0ai/agent-zero [skill] *19759* ['product-stars'] items=1 - Agent Zero AI framework
- longbridge/gpui-kit [skill] *19466* ['product-stars'] items=1 - Rust GUI components for building fantastic cross-platform desktop application by
- Canner/WrenAI [skill] *18089* ['product-stars'] items=1 - GenBI (Generative BI) for AI agents, an open-source, governed text-to-SQL throug
- greensock/gsap-skills [marketplace] *17958*  items=1 - Official AI skills for GSAP. These skills teach AI coding agents how to correctl
- architecture-decision-record/architecture-decision-record [skill] *17407* ['product-stars'] items=1 - Architecture decision record (ADR) examples for software planning, IT leadership
- composio-community/awesome-codex-skills [skill] *17213*  items=1 - A curated list of practical Codex skills for automating workflows across the Cod
- millionco/react-doctor [skill] *15101* ['product-stars'] items=1 - Your agent writes bad React. This catches it
- kyegomez/OpenMythos [plugin] *14923*  items=1 - A theoretical reconstruction of the Claude Mythos architecture, built from first

## Random sample of 20 watch repos (of 489)
- max-sixty/worktrunk [marketplace] *11607*  items=1 - Worktrunk is a CLI for Git worktree management, designed for parallel AI agent w reasons=['fails: license (NOASSERTION)'] src=['topic']
- omarmhaimdat/pepe [mcp-server] *97*  items=1 - Load-test a URL, ping it by phase, ramp to find the capacity, compare runs: JSON reasons=['no corroborating signal'] src=['mcp-registry']
- composio-community/awesome-codex-skills [skill] *17213*  items=1 - A curated list of practical Codex skills for automating workflows across the Cod reasons=['fails: pushed<=90d (103)', 'fails: license (None)'] src=['topic']
- n1m21n/Infinite [mcp-server] *315*  items=1 - Infinite audiovisual engine for AI agents: sound, shaders and video patches. Fre reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- tiliondev/fortress [mcp-server] *785*  items=1 - Stealth browser for AI agents: fetch pages behind Cloudflare/DataDome/CAPTCHA, e reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- coroslab/COROS-MCP [mcp-server] *81*  items=1 - Access COROS activity, training and health data, and manage training plans and w reasons=['fails: license (None)'] src=['mcp-registry']
- dtormoen/tsk-tsk [marketplace] *171*  items=1 - Keeping your agents out of trouble with sandboxed coding agent automation reasons=['fails: pushed<=90d (99)'] src=['topic']
- longranger2/claude-gpt-workflow [skill] *81*  items=1 - Claude Code skills for Claude + GPT collaborative workflows. Adversarial plan re reasons=['fails: pushed<=90d (134)'] src=['topic']
- mgwalkerjr95/texas-grocery-mcp [mcp-server] *70*  items=1 - MCP server for HEB grocery store integration - search products, manage carts, cl reasons=['fails: pushed<=90d (178)'] src=['mcp-registry']
- superdesigndev/treg [marketplace,mcp-server] *7251* ['product-stars'] items=2 - OpenRouter for agent tools. Join community here: https://discord.gg/6mQYYfFMAn reasons=['fails: license (NOASSERTION)'] src=['mcp-registry', 'topic']
- smnandre/symfony-ux-skills [plugin] *183*  items=1 - Symfony UX skills for Claude, Gemini, Codex, ... Live Component, Twig Component, reasons=['fails: pushed<=90d (144)'] src=['code']
- Owl-Listener/designpowers [plugin] *256*  items=1 - An agent design team you control: 10 agents that run an inclusive design process reasons=['fails: pushed<=90d (135)'] src=['code']
- getsentry/toolkit [mcp-server] *957*  items=1 - MCP server for Sentry - error monitoring, issue tracking, and debugging for AI a reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- apoorvjain25/frontier [marketplace] *79*  items=1 - Make Claude Opus, Sonnet, GPT, or Gemini produce work close to what Claude Fable reasons=['fails: pushed<=90d (124)'] src=['topic']
- e0ipso/strikethroo [plugin] *58*  items=1 - Task management for AI coding assistants reasons=['no corroborating signal'] src=['topic']
- hustcc/mcp-mermaid [mcp-server] *648*  items=1 - Generate dynamic Mermaid diagrams and charts with AI assistance. Customize style reasons=['fails: pushed<=90d (174)'] src=['mcp-registry']
- geeklee/srt-whiteboard-animation [skill] *5410*  items=1 - 将 SRT 字幕做成暖米黄纸张底的流式笔迹白板手绘动画 skill：mask 分区遮罩编排 + stream 连续笔迹（ink→color）。 reasons=['fails: pushed<=90d (101)'] src=['topic']
- elie222/inbox-zero [mcp-server] *12925*  items=1 - Search Gmail and Outlook, save drafts, manage email rules, and view email stats. reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- 0xnyn/canary [plugin] *495*  items=1 - QA harness built for Claude Code | E2E testing with screen recordings, console l reasons=['fails: license (NOASSERTION)'] src=['code']
- agiwhitelist/auteur [skill] *1045*  items=1 - The Claude Code skill that directs a website like a film. Commit-sheet, generate reasons=['fails: pushed<=90d (91)'] src=['topic']

## Errors
- graphql: HTTP 504 after 4 retries <!DOCTYPE html>
<!--

Hello future GitHubber! I bet you're here to remove tho
- broad verify subfolders chunk 7: no data None

## Rate limit
- REST calls this run (uncached): {"core": 85, "search": 42}; last seen: {"core": {"remaining": "4915", "limit": "5000"}, "search": {"remaining": "7", "limit": "30"}}
- GraphQL: 140 calls, cost 60, remaining 4755/5000, stopped early: False
- REST stopped early: False
- repos lacking metadata: 3991; enriched this run: 34343