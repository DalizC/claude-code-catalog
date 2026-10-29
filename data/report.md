# Catalog report 2026-10-29
Mode: **token**; run time 1732s
Repos (deduped): 3135; flat entries before dedup: 23033

## Tier x type BEFORE dedup (flat entries)
- new/mcp-server: 13521
- listed/plugin: 2283
- watch/mcp-server: 2264
- verified/mcp-server: 1204
- watch/skill: 493
- verified/skill: 458
- watch/marketplace: 388
- official/plugin: 376
- verified/marketplace: 353
- watch/plugin: 271
- watch/agent: 237
- verified/plugin: 224
- verified/collection: 196
- new/skill: 168
- anthropic/plugin: 145
- new/marketplace: 142
- new/plugin: 141
- verified/agent: 55
- new/agent: 41
- anthropic/marketplace: 15
- anthropic/collection: 4
- watch/collection: 2
- anthropic/agent: 1

## Tier AFTER dedup (repos)
- verified: 1782
- watch: 467
- new: 320
- official: 256
- listed: 167
- anthropic: 143

## Type AFTER dedup (items)
- mcp-server: 1619
- plugin: 1245
- skill: 758
- marketplace: 493
- collection: 123
- agent: 54

## Primary type AFTER dedup (repos)
- mcp-server: 1048
- plugin: 847
- skill: 691
- marketplace: 418
- collection: 90
- agent: 41

## Repos by discovery source family
- topic: 1256
- mcp-registry: 1183
- anthropic: 463
- code: 231
- anthropic-org: 186
- curated: 149
- marketplace-expansion: 41

## Flags (all tiers)
- product-stars: 220
- star-spike: 13

## star-anomaly by tier
- none: 0

## Metadata gaps
- repos without metadata: 149
- reasons: {'unfetched': 149}

## MCP-only repos excluded: 51
- assafelovic/gpt-researcher *30342* ['ai', 'python', 'agent', 'automation', 'research'] - An autonomous agent that conducts deep research on any data using any LLM provid
- mrexodia/ida-pro-mcp *13196* ['ida-plugin', 'ida-pro', 'mcp', 'mcp-server', 'modelcontextprotocol'] - AI-powered reverse engineering assistant that bridges IDA Pro with language mode
- mcp-use/mcp-use *10828* ['mcp', 'model-context-protocol', 'apps-sdk', 'mcp-apps', 'mcp-inspector'] - The fullstack MCP framework to develop MCP Apps for ChatGPT / Claude & MCP Serve
- Agents365-ai/drawio-skill *10429* ['drawio', 'diagram', 'agent-skills', 'architecture-diagram', 'claude-code'] - Agent skill that turns natural language, code, Terraform/K8s, SQL, OpenAPI, Asyn
- jordan-gibbs/hyperresearch *4180* ['agents', 'agentskills', 'claude-code', 'deep-research', 'deep-research-agent'] - Convert Claude Code or Codex into the most intelligent Deep Research Agent. Coll
- stickerdaniel/linkedin-mcp-server *4038* ['linkedin', 'linkedin-scraper', 'mcp', 'mcp-server', 'linkedin-mcp'] - Open-source MCP server for LinkedIn. Give Claude and any MCP-compatible AI agent
- kajisho5/ffmpeg-skill *3615* ['audio-processing', 'captions', 'ffmpeg', 'subtitles', 'video'] - Local video editor for coding agents: 42 FFmpeg tools with a machine-readable co
- taylorwilsdon/google_workspace_mcp *3433* ['ai', 'gmail', 'google-calendar', 'google-workspace', 'llm'] - Control Gmail, Google Calendar, Docs, Sheets, Slides, Chat, Forms, Tasks, Search
- duty1g/x64dbg-mcp-server *2626* ['ai-agents', 'ai-debugging', 'binary-analysis', 'claude', 'claude-code'] - x64dbg-MCP Server is a native MCP (Model Context Protocol) plugin for x64dbg tha
- alpic-ai/skybridge *2178* ['agent', 'ai', 'apps-sdk', 'chatgpt', 'claude'] - Skybridge is a full-stack TypeScript framework for MCP Apps and ChatGPT Apps. Ty
- study8677/repobrain *1356* ['claude-code', 'codex-cli', 'developer-tools', 'mcp-server', 'windsurf'] - 🧠 RepoBrain (formerly Antigravity) — Give your repo a brain. ChatGPT for your co
- CodeAbra/iai-personal-memory-engine *916* ['claude', 'claude-code', 'local-first', 'mcp', 'mcp-server'] - A cyber brain for your AI. It never forgets a detail, remembers exactly what you
- Storybloq/storybloq *782* ['agentic-development', 'ai-development', 'anthropic', 'claude-code', 'claude-skill'] - Project memory and workflows for Claude Code and Codex. Keep stories, plans, han
- hetpatel-11/Adobe_Premiere_Pro_MCP *775* ['adobe', 'adobe-premiere-pro', 'adobe-mcp', 'adobe-premiere-pro-mcp', 'ai-video-editing'] - Adobe Premiere Pro MCP. Tools for AI-driven video editing via MCP, for Codex, Cl
- agentic-box/memora *746* ['ai-agent', 'claude', 'knowledge-graph', 'llms', 'mcp'] - Give your AI agents persistent, collective memory — with deduplicating absorb, s

## Degradation
- registry complete: True (523 pages, 52208 entries)
- MCP servers merged from the previous catalog (not re-fetched): 0
- GraphQL 403s: 0 (secondary rate limit: 0); retries: 8; queries that gave up: 1
- HTTP retries (5xx/network): 0
- repos with stale metadata reused from the previous catalog (meta_stale): 0

## MCP Registry
- {"pages": 523, "fetched": 52208, "kept": 51517, "dropped": 691, "bad": 0, "complete": true, "excluded_remote_only": 16986, "excluded_low_signal": 17542, "fallback_merged": 0, "records": 1183, "attached_existing": 139, "new_repo": 1044, "remote_only": 0, "tiers": {"official": 25, "listed": 19, "verified": 846, "new": 124, "watch": 169}}

## Top 20 by trend_7d
- morluto/rea +44144 (12.27%) []
- cloudflare/security-audit-skill +14735 (39.64%) ['star-spike']
- debpalash/VoiceStudio +12529 (15.52%) ['product-stars']
- Nutlope/hallmark +10405 (34.02%) ['star-spike']
- pbakaus/impeccable +8744 (10.34%) []
- DietrichGebert/ponytail +7354 (4.27%) []
- HKUDS/DeepTutor +6395 (15.2%) ['product-stars']
- affaan-m/ECC +6061 (2.12%) []
- mattpocock/skills +5839 (1.95%) []
- heygen-com/hyperframes +5520 (7.96%) []
- ifixai-ai/iFixAi +5226 (16.34%) ['product-stars']
- hugohe3/ppt-master +5011 (7.66%) ['product-stars']
- obra/superpowers +4384 (1.45%) []
- lemomo-ai/lemo-opuscar +4154 (82.95%) ['star-spike']
- Leonxlnx/taste-skill +4038 (4.01%) []
- tt-a1i/archify +3901 (4.47%) []
- AgriciDaniel/claude-seo +3886 (19.81%) []
- nextlevelbuilder/ui-ux-pro-max-skill +3586 (2.59%) []
- NVIDIA/OpenShell +3566 (20.91%) ['product-stars']
- wheresryan22/anatomy +3565 (19.09%) []

## Code search vs topic search
- repos found by code search: 231
- also in topic search: 16
- code-only: 198; tiers: {'anthropic': 1, 'verified': 108, 'watch': 61, 'new': 28}

## Top 30 by stars: anthropic
- anthropics/skills [marketplace,collection] *184568*  items=2 - Anthropic example skills
- anthropics/claude-code [marketplace,agent] *153772*  items=2 - Anthropic's Claude Code plugins, installed from the claude-plugins-official repo
- anthropics/claude-plugins-official [plugin,marketplace,collection] *45167*  items=15 - Directory of popular Claude Code extensions including development tools, product
- anthropics/financial-services [marketplace] *40894*  items=1 - 
- anthropics/knowledge-work-plugins [marketplace] *33691*  items=1 - 
- anthropics/claude-for-legal [marketplace] *9824*  items=1 - Reference agents, skills, and data connectors for the legal workflows we see mos
- anthropics/claude-code-action [collection] *9696*  items=1 - The official GitHub Action for running Claude Code in CI: mention @claude in iss
- anthropics/claude-code-security-review [collection] *6632*  items=1 - An official AI-powered security-review GitHub Action that uses Claude to analyze
- anthropics/claude-plugins-community [marketplace] *4787*  items=1 - 
- anthropics/commerce-agents [marketplace] *3372*  items=1 - Claude Commerce Agents: the commerce-builder plugin for building shopping and me
- anthropics/life-sciences [marketplace] *632*  items=1 - Skills for life sciences research, data analysis, and discovery
- anthropics/k12-teacher-skills [marketplace] *601*  items=1 - Plugin marketplace for K-12 Education and Claude for Teachers.
- anthropics/healthcare [marketplace] *431*  items=1 - Claude for Healthcare — one plugin bundling payer, provider, pharma, and general
- anthropics/oncall-kit [marketplace] *253*  items=1 - 
- anthropics/claude-for-financial-advisors [plugin,marketplace] *126*  items=2 - Ready-to-run workflows for financial advisors in Claude Cowork, drawing live dat
- anthropics/claude-tag-plugins [marketplace] *74*  items=1 - Plugins that connect Claude Tag to common SaaS services, plus charting and confi
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
- obra/superpowers [plugin,skill] *307631*  items=3 - Superpowers teaches Claude brainstorming, subagent driven development with built
- mattpocock/skills [plugin] *305917*  items=2 - Matt Pocock's agent skills for real engineering — grilling, spec/ticket flows, T
- heygen-com/hyperframes [plugin] *74897*  items=2 - HyperFrames by HeyGen. Write HTML, render video. Compositions, GSAP and runtime 
- ChromeDevTools/chrome-devtools-mcp [plugin,mcp-server] *54379*  items=4 - Control and inspect a live Chrome browser from your coding agent. Record perform
- confident-ai/deepeval [plugin] *19173* ['product-stars'] items=1 - Skills for adding DeepEval evaluations, tracing, datasets, Confident AI reports,
- huggingface/skills [plugin] *11233*  items=2 - Build, train, evaluate, and use open source AI models, datasets, and spaces.
- wonderwhy-er/DesktopCommanderMCP [plugin,mcp-server] *10156*  items=4 - MCP server for terminal commands, process management, and file operations across
- Eigenwise/atomic-agents [plugin,marketplace] *6312* ['product-stars'] items=3 - Comprehensive development workflow for building AI agents with the Atomic Agents
- exa-labs/exa-mcp-server [plugin,mcp-server] *5200*  items=3 - Exa AI web search, deep research, and content extraction. Provides MCP tools and
- NVIDIA/skills [plugin] *3778*  items=2 - Find the right NVIDIA skill for GPU acceleration, CUDA, AI agents, data loading,
- expo/skills [plugin] *3653*  items=2 - Official Expo skills for building, deploying, upgrading, and debugging React Nat
- aws/agent-toolkit-for-aws [plugin] *3332*  items=8 - Build, deploy, and operate AI agents on AWS. Skills for scaffolding agents with 
- cloudflare/skills [plugin] *3199*  items=2 - Skills for the Cloudflare developer platform: Workers, Durable Objects, Agents S
- modelcontextprotocol/ext-apps [plugin] *3020*  items=3 - Skills for creating MCP Apps with the MCP Apps SDK
- GoogleChrome/modern-web-guidance [plugin] *2572*  items=2 - Keep your coding agent up to date with the latest web best practices
- figma/mcp-server-guide [plugin,mcp-server] *2126*  items=4 - Figma design platform integration. Access design files, extract component inform
- stripe/ai [plugin,mcp-server] *1988*  items=3 - Stripe development plugin for Claude
- MicrosoftDocs/mcp [plugin,mcp-server] *1957*  items=3 - Access official Microsoft documentation, API references, and code samples for Az
- EpicGames/unreal-engine-skills-for-claude-code-plugin [plugin] *1714*  items=2 - Control Unreal Editor directly from Claude Code via MCP. Hundreds of tools expos
- microsoft/azure-skills [plugin] *1603*  items=2 - Transform Claude into an Azure expert. This plugin integrates the Azure MCP serv
- atlassian/atlassian-mcp-server [plugin,mcp-server] *1132*  items=3 - Connect to Atlassian products including Jira and Confluence. Search and create i
- forcedotcom/sf-skills [plugin] *1128*  items=1 - Build Salesforce apps and agents using these core building blocks: metadata, Ape
- awslabs/agent-plugins [plugin] *932*  items=10 - Guide developers through adding maps, places search, geocoding, routing, and oth
- superdesigndev/superdesign-skill [plugin,skill] *914*  items=2 - Design or redesign frontend UI and marketing graphics on the Superdesign infinit
- Shopify/Shopify-AI-Toolkit [plugin] *617*  items=2 - Shopify's AI Toolkit provides 18 development skills for building on the Shopify 
- duckdb/duckdb-skills [plugin] *613*  items=2 - DuckDB-powered skills for Claude Code: read any data file, attach and query Duck
- Unity-Technologies/unity-agent-plugin [plugin] *578*  items=2 - Unity's official plugin for Claude Code, with curated skills for game developmen
- ClickHouse/agent-skills [plugin] *562*  items=2 - 28 best practice rules for ClickHouse schema design, query optimization, and dat
- gitroomhq/postiz-agent [plugin] *556*  items=3 - Social media automation CLI for scheduling posts, managing integrations, uploadi
- TheQtCompanyRnD/agent-skills [plugin] *513*  items=3 - Agentic engineering skills for Qt software development — Qt C++/QML code review,

## Top 30 by stars: listed
- DietrichGebert/ponytail [plugin] *179385*  items=2 - Lazy senior dev mode. Forces the simplest, shortest solution that actually works
- JuliusBrussee/caveman [plugin,skill] *115869*  items=2 - Auto-activation works differently per agent: Claude Code uses SessionStart hooks
- thedotmack/claude-mem [plugin,skill] *104097*  items=3 - Persistent memory system for Claude Code - seamlessly preserve context across se
- pbakaus/impeccable [plugin] *93296*  items=1 - Great design prompts require design vocabulary. Most people don't have it. You c
- Egonex-AI/Understand-Anything [plugin,skill] *88787*  items=2 - Understand Anything is a Claude Code plugin that analyzes your project with a mu
- mem0ai/mem0 [plugin] *68017* ['product-stars'] items=1 - Connect Mem0 to Claude to give your agent persistent memory across sessions. Cla
- mvanhorn/last30days-skill [plugin] *65807*  items=1 - last-30-days is a Claude Code skill that searches the web and delivers a structu
- coreyhaines31/marketingskills [plugin,skill] *57158*  items=3 - coreyhaines31
- DayuanJiang/next-ai-draw-io [plugin,mcp-server] *36473*  items=2 - AI-powered Draw.io diagram generation with real-time browser preview. Create flo
- mksglu/context-mode [plugin] *32742*  items=1 - MCP is the protocol for tool access. We're the virtualization layer for context.
- jarrodwatts/claude-hud [plugin,collection] *28985*  items=2 - Real-time statusline HUD for Claude Code - context health, tool activity, agent 
- alirezarezvani/claude-skills [plugin,skill] *28928*  items=2 - Playwright Pro turns your AI coding agent into a senior test automation engineer
- promptfoo/promptfoo [plugin] *26567*  items=1 - Teaches AI coding agents to create and maintain promptfoo eval suites. Encodes b
- AgriciDaniel/claude-seo [plugin] *23503*  items=1 - Comprehensive SEO analysis plugin for Claude Code. Performs full site audits wit
- browser-use/browser-harness [plugin] *18681*  items=1 - Open-source browser agent driven via CDP — direct browser control, 79K stars, YC
- Jeffallan/claude-skills [plugin,skill,collection] *12120*  items=3 - 66 specialized skills for full-stack development: 12 language experts (Python, T
- nicobailon/visual-explainer [plugin,collection] *10675*  items=3 - An agent skill that turns complex terminal output into styled HTML pages you act
- revfactory/harness [plugin,agent] *9284*  items=3 - Harness leverages Claude Code's agent team system to decompose complex tasks int
- Eventual-Inc/Daft [plugin] *5818* ['product-stars'] items=1 - Skills for working with Daft, a high-performance data engine for AI and multimod
- clidey/whodb [plugin] *5044* ['product-stars'] items=1 - Database management tools for Claude Code. Query databases, explore schemas, ana
- nyldn/claude-octopus [plugin] *4326*  items=2 - Multi-LLM orchestration for Claude Code and Cowork. Coordinates 8 AI providers (
- giancarloerra/SocratiCode [plugin,mcp-server] *3358*  items=2 - Enterprise-grade (40m+ lines) codebase intelligence in a zero-setup, private and
- Chachamaru127/claude-code-harness [plugin,marketplace,agent] *3188*  items=5 - Autonomous Plan → Work → Review cycle for Claude Code. Go-native engine with 25×
- AgriciDaniel/claude-blog [plugin] *2565*  items=1 - AI-powered blog creation and optimization skill with 20 commands, 4 specialized 
- nizos/tdd-guard [plugin,collection] *2369*  items=2 - Enforces Test-Driven Development by intercepting file operations in Claude Code.
- AminForou/mcp-gsc [plugin] *2057*  items=1 - Connect Google Search Console to Claude Code. Query rankings, inspect URLs, audi
- severity1/claude-code-prompt-improver [plugin] *1963*  items=1 - Intelligent prompt optimization using skill-based architecture. Enriches vague p
- fabio-rovai/open-ontologies [plugin] *1919* ['star-spike'] items=1 - AI-native ontology engineering with 39 MCP tools backed by an in-memory Oxigraph
- kenryu42/cc-safety-net [plugin,collection] *1845*  items=3 - Block destructive git and filesystem commands before execution
- codeaholicguy/ai-devkit [plugin] *1653*  items=1 - A structured software development toolkit that helps Claude Code follow senior-e

## Top 30 by stars: verified
- morluto/rea [mcp-server] *403788*  items=1 - Reverse engineer anything from your terminal or agent with one CLI and MCP serve
- affaan-m/ECC [collection] *291933*  items=1 - Top-notch, well-written resources covering "just about everything" from core eng
- firecrawl/firecrawl [skill] *196490* ['product-stars'] items=1 - Supercharge your AI agents with data from the web and beyond. Building the libra
- vercel/next.js [marketplace] *143190* ['product-stars'] items=1 - The React Framework
- nextlevelbuilder/ui-ux-pro-max-skill [marketplace] *142178*  items=1 - An AI skill that provides design intelligence for building professional UI/UX ac
- garrytan/gstack [agent] *138093*  items=1 - Garry Tan's (Y Combinator) Claude Code setup and "open source software factory" 
- browser-use/browser-use [mcp-server] *119425*  items=1 - Browser agents and stealth cloud browsers for AI: run web tasks, fill forms, ext
- addyosmani/agent-skills [marketplace] *111513*  items=1 - Production-grade engineering skills for AI coding agents.
- paperclipai/paperclip [skill,mcp-server] *108362*  items=2 - The open-source app everyone uses to manage agents at work
- Leonxlnx/taste-skill [marketplace] *104732*  items=1 - Agent skills that give coding agents taste: art direction, reference images and 
- nexu-io/open-design [marketplace] *104692*  items=1 - The 1st Collaborative AI Design Agent Workspace. Local-first and open source. Cr
- ruvnet/RuView [marketplace] *101231*  items=1 - π RuView turns commodity WiFi signals into real-time spatial intelligence, vital
- debpalash/VoiceStudio [skill] *93267* ['product-stars'] items=1 - VoiceStudio is the open-source, fully-local ElevenLabs alternative — voice cloni
- storybookjs/storybook [marketplace] *91401* ['product-stars'] items=1 - Storybook is the industry standard workshop for building, documenting, and testi
- tt-a1i/archify [skill,collection] *91101*  items=2 - An Agent Skill for Claude Code that generates interactive architecture, workflow
- D4Vinci/Scrapling [mcp-server] *90236*  items=1 - Web scraping with stealth HTTP, real browsers, and Cloudflare bypass. CSS select
- koala73/worldmonitor [skill,mcp-server] *89728* ['product-stars'] items=2 - Real-time global intelligence dashboard. AI-powered news aggregation, geopolitic
- bytedance/deer-flow [skill] *84611*  items=1 - An open-source long-horizon SuperAgent harness that researches, codes, and creat
- netdata/netdata [mcp-server] *81203*  items=1 - Real-time infrastructure monitoring with metrics, logs, alerts, and ML-based ano
- ruvnet/ruflo [marketplace,mcp-server] *80016*  items=2 - 🌊 The original agent harness. Deploy intelligent multi-player swarms, coordinate
- shareAI-lab/learn-claude-code [collection] *79465*  items=1 - A really interesting analysis of how coding agents like Claude Code are designed
- career-ops-hq/career-ops [marketplace] *78451*  items=1 - Open-source AI job search agent and job finder: scan job boards, score each job 
- ComposioHQ/awesome-claude-skills [skill] *78221*  items=1 - A curated list of awesome Claude Skills, resources, and tools for customizing Cl
- headroomlabs-ai/headroom [marketplace] *78173*  items=1 - Compress tool outputs, logs, files, and RAG chunks before they reach the LLM. 20
- rohitg00/ai-engineering-from-scratch [skill] *75398* ['product-stars'] items=1 - Learn AI Engineering! Learn it. Build it. Ship it for others.
- thedaviddias/Front-End-Checklist [marketplace,mcp-server] *74590* ['product-stars'] items=2 - 🗂 The essential checklist for modern web development, for humans and AI agents
- tw93/Mole [marketplace] *73215* ['product-stars'] items=1 - 🐹 Keep your Mac and PC clean, light, and running like new. Fast open-source CLI,
- calesthio/OpenMontage [skill] *72788*  items=1 - World's first open-source, agentic video production system. 12 production pipeli
- usestrix/strix [skill] *72613* ['product-stars'] items=1 - Open-source AI penetration testing tool to find and fix your app’s vulnerabiliti
- hugohe3/ppt-master [marketplace] *70404* ['product-stars'] items=1 - AI turns documents or topics into real, native PowerPoint decks—with native shap

## Top 30 by stars: watch
- f/prompts.chat [marketplace] *174976* ['product-stars'] items=1 - f.k.a. Awesome ChatGPT Prompts. Share, discover, and collect prompts from the co
- opendatalab/MinerU [skill] *82712* ['product-stars'] items=1 - Transforms complex documents like PDFs and Office docs into LLM-ready markdown/J
- code-yeongyu/oh-my-openagent [skill] *70451* ['product-stars'] items=1 - OmO: Just type "mass ulw" keyword with your prompt. Now you are the master of gr
- bmad-code-org/BMAD-METHOD [skill] *54705* ['product-stars'] items=1 - Breakthrough Method for Agile Ai Driven Development
- Imbad0202/academic-research-skills [marketplace] *54401*  items=1 - Academic Research Skills for Claude Code: research → write → review → revise → f
- tldraw/tldraw [mcp-server] *51136*  items=1 - Draw and visually collaborate with your agents on tldraw's canvas.
- metabase/metabase [mcp-server] *49929*  items=1 - Lets AI clients search, explore, query, and visualize data in a Metabase instanc
- abhigyanpatwari/GitNexus [marketplace] *48099* ['product-stars'] items=1 - GitNexus: The Zero-Server Code Intelligence Engine
- serverless/serverless [skill] *46924* ['product-stars'] items=1 - ⚡ Serverless Framework – Effortlessly build apps that auto-scale, incur zero cos
- PostHog/posthog [mcp-server] *40501*  items=1 - Official PostHog MCP Server for product analytics, feature flags, experiments, a
- openai/codex-plugin-cc [marketplace] *34690*  items=1 - Use Codex from Claude Code to review code or delegate tasks.
- zarazhangrui/frontend-slides [marketplace] *31511*  items=1 - Create beautiful slides on the web using a coding agent's frontend skills
- oraios/serena [mcp-server] *30823*  items=1 - A powerful toolkit for coding, providing semantic retrieval and editing capabili
- openai/skills [skill] *28378*  items=1 - Skills Catalog for Codex
- vercel/ai [skill] *27582* ['product-stars'] items=1 - The AI Toolkit for TypeScript. From the creators of Next.js, the AI SDK is a fre
- hypit-ai/hypit [skill] *26310* ['product-stars'] items=1 - Clone any viral video with AI agents. Not just a script, the whole workflow: swa
- clockworklabs/SpacetimeDB [marketplace] *25402* ['product-stars'] items=1 - Development at the speed of light
- different-ai/openwork [mcp-server] *24312*  items=1 - Your OpenWork org's skills, plugins, workflows, and connections through one OAut
- HKUDS/AI-Trader [skill] *23021* ['product-stars'] items=1 - "AI-Trader: 100% Fully-Automated Agent-Native Trading"
- getpaseo/paseo [skill] *22337*  items=1 - Orchestrate multiple coding agents from desktop and mobile
- screenpipe/screenpipe [mcp-server] *22141*  items=1 - Search your local screen recordings, audio transcripts, and computer activity fr
- agent0ai/agent-zero [skill] *19593* ['product-stars'] items=1 - Agent Zero AI framework
- longbridge/gpui-kit [skill] *18744* ['product-stars'] items=1 - Rust GUI components for building fantastic cross-platform desktop application by
- Canner/WrenAI [skill] *17999* ['product-stars'] items=1 - GenBI (Generative BI) for AI agents, an open-source, governed text-to-SQL throug
- greensock/gsap-skills [marketplace] *17423*  items=1 - Official AI skills for GSAP. These skills teach AI coding agents how to correctl
- architecture-decision-record/architecture-decision-record [skill] *17343* ['product-stars'] items=1 - Architecture decision record (ADR) examples for software planning, IT leadership
- composio-community/awesome-codex-skills [skill] *17104*  items=1 - A curated list of practical Codex skills for automating workflows across the Cod
- ParadevAI/Paradev [marketplace] *15700*  items=2 - Superset is an agentic IDE to orchestrate 100+ coding agents in parallel. Run an
- millionco/react-doctor [skill] *15058* ['product-stars'] items=1 - Your agent writes bad React. This catches it
- kyegomez/OpenMythos [plugin] *14907*  items=1 - A theoretical reconstruction of the Claude Mythos architecture, built from first

## Random sample of 20 watch repos (of 467)
- dtormoen/tsk-tsk [marketplace] *171*  items=1 - Keeping your agents out of trouble with sandboxed coding agent automation reasons=['fails: pushed<=90d (91)'] src=['topic']
- shkyyy18/mi_fitness_data_bridge [mcp-server] *53*  items=1 - Local-first bridge: export your own Mi Fitness (Xiaomi) health data to SQLite/JS reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- Arize-ai/phoenix [marketplace] *12052* ['product-stars'] items=1 - AI Observability & Evaluation reasons=['fails: license (NOASSERTION)'] src=['topic']
- saidutt46/domain-check [mcp-server] *306*  items=1 - Fast domain availability checker with RDAP/WHOIS — batch checks, TLD presets, an reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- goesByhc/cn-scraper-mcp [mcp-server] *72*  items=1 - MCP server for AI agents to search major Chinese internet platforms with local-f reasons=['fails: pushed<=90d (91)'] src=['mcp-registry']
- jgravelle/jcodemunch-mcp [marketplace,mcp-server] *2817*  items=2 - Symbol-level code retrieval for AI agents: fetch the function you need, not the  reasons=['fails: license (NOASSERTION)'] src=['mcp-registry', 'topic']
- vanillaflava/llm-wiki-skills [skill] *70*  items=1 - Turn your markdown vault into a compounding knowledge wiki (Karpathy inspired).  reasons=['fails: pushed<=90d (109)'] src=['topic']
- sachitrafa/YourMemory [mcp-server] *270*  items=2 - Ebbinghaus-based persistent memory for Claude. Memories decay with time, strengt reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- Dicklesworthstone/destructive_command_guard [skill] *6221* ['product-stars'] items=1 - The Destructive Command Guard (dcg) is for blocking dangerous git and shell comm reasons=['fails: license (NOASSERTION)'] src=['topic']
- LeoKemp223/NextBoard [plugin] *394*  items=1 - 面向硬件产品PCB方案设计的AI Agent，Agent会自动帮你进行需求确认，实时分析国内外各类芯片技术方案，进行器件选型，下载datasheet，输出BOM reasons=['fails: pushed<=90d (177)'] src=['code']
- 0xnyn/canary [plugin] *493*  items=1 - QA harness built for Claude Code | E2E testing with screen recordings, console l reasons=['fails: license (NOASSERTION)'] src=['code']
- kvoltmer/Audionaut [mcp-server] *270*  items=1 - Edit Audionaut multitrack projects: cut, fade, analyse, export. Requires the Aud reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- Ted0321/kotetsu-work-ai-skills [skill] *56*  items=1 - 仕事が前に進むAIスキル配布（@kotetsu_0321） reasons=['no corroborating signal'] src=['topic']
- Snailclimb/AIGuide [skill] *711*  items=1 - AI 应用开发、AI 编程实战与面试指南，涵盖 LLM、Agent、RAG、MCP、Claude Code、Codex 等核心技术与工程实践。 reasons=['fails: pushed<=90d (114)', 'fails: license (None)'] src=['topic']
- desktop-commander/remote-desktop-commander [mcp-server] *201*  items=1 - Remote Desktop Commander: use files, terminal and processes on your own computer reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- Klavis-AI/klavis [mcp-server] *5830*  items=1 - MCP server for progressive tool usage at any scale (see https://klavis.ai) reasons=['fails: pushed<=90d (149)'] src=['mcp-registry']
- kody-hq/kody [mcp-server] *864*  items=1 - Your agents' cloud for individuals and teams. Search, execute, packages, jobs, a reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- lynxlangya/techne [plugin] *106*  items=1 - Forcing-function skills for AI agents — validated to improve behavior, not just  reasons=['fails: pushed<=90d (118)'] src=['code']
- Abhi24384/Anthropic-Mythos-Desktop-Studio [agent] *115*  items=1 - Claude 3.5 Sonnet Desktop Client for Windows Mac Linux 2026 reasons=['fails: license (None)', 'no corroborating signal'] src=['topic']
- amirfish1/claude-command-center [marketplace] *212*  items=1 - One local board for Claude Code, Codex, Cursor and 5 more coding agents. See whi reasons=['fails: license (NOASSERTION)'] src=['topic']

## Errors
- graphql: HTTP 504 after 4 retries <!DOCTYPE html>
<!--

Hello future GitHubber! I bet you're here to remove tho
- broad verify subfolders chunk 11: no data None

## Rate limit
- REST calls this run (uncached): {"core": 140, "search": 42}; last seen: {"core": {"remaining": "4860", "limit": "5000"}, "search": {"remaining": "27", "limit": "30"}}
- GraphQL: 187 calls, cost 65, remaining 4803/5000, stopped early: False
- REST stopped early: False
- repos lacking metadata: 3969; enriched this run: 32346