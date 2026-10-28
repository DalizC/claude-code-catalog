# Catalog report 2026-10-28
Mode: **token**; run time 1441s
Repos (deduped): 3123; flat entries before dedup: 22837

## Tier x type BEFORE dedup (flat entries)
- new/mcp-server: 13344
- listed/plugin: 2283
- watch/mcp-server: 2258
- verified/mcp-server: 1195
- watch/skill: 494
- verified/skill: 461
- watch/marketplace: 382
- official/plugin: 376
- verified/marketplace: 349
- watch/plugin: 271
- watch/agent: 236
- verified/plugin: 226
- verified/collection: 197
- new/skill: 167
- anthropic/plugin: 145
- new/marketplace: 143
- new/plugin: 140
- verified/agent: 56
- new/agent: 41
- anthropic/marketplace: 15
- anthropic/collection: 4
- anthropic/agent: 1
- watch/collection: 1

## Tier AFTER dedup (repos)
- verified: 1779
- watch: 465
- new: 314
- official: 256
- listed: 166
- anthropic: 143

## Type AFTER dedup (items)
- mcp-server: 1605
- plugin: 1246
- skill: 762
- marketplace: 486
- collection: 123
- agent: 55

## Primary type AFTER dedup (repos)
- mcp-server: 1038
- plugin: 848
- skill: 695
- marketplace: 411
- collection: 90
- agent: 41

## Repos by discovery source family
- topic: 1254
- mcp-registry: 1169
- anthropic: 462
- code: 233
- anthropic-org: 186
- curated: 149
- marketplace-expansion: 41

## Flags (all tiers)
- product-stars: 219
- star-spike: 15
- star-anomaly: 3

## star-anomaly by tier
- new: 2
- watch: 1

## Metadata gaps
- repos without metadata: 149
- reasons: {'unfetched': 149}

## MCP-only repos excluded: 52
- assafelovic/gpt-researcher *30319* ['ai', 'python', 'agent', 'automation', 'research'] - An autonomous agent that conducts deep research on any data using any LLM provid
- mrexodia/ida-pro-mcp *13180* ['ida-plugin', 'ida-pro', 'mcp', 'mcp-server', 'modelcontextprotocol'] - AI-powered reverse engineering assistant that bridges IDA Pro with language mode
- mcp-use/mcp-use *10818* ['mcp', 'model-context-protocol', 'apps-sdk', 'mcp-apps', 'mcp-inspector'] - The fullstack MCP framework to develop MCP Apps for ChatGPT / Claude & MCP Serve
- Agents365-ai/drawio-skill *10404* ['drawio', 'diagram', 'agent-skills', 'architecture-diagram', 'claude-code'] - Agent skill that turns natural language, code, Terraform/K8s, SQL, OpenAPI, Asyn
- jordan-gibbs/hyperresearch *4166* ['agents', 'agentskills', 'claude-code', 'deep-research', 'deep-research-agent'] - Convert Claude Code or Codex into the most intelligent Deep Research Agent. Coll
- stickerdaniel/linkedin-mcp-server *4029* ['linkedin', 'linkedin-scraper', 'mcp', 'mcp-server', 'linkedin-mcp'] - Open-source MCP server for LinkedIn. Give Claude and any MCP-compatible AI agent
- taylorwilsdon/google_workspace_mcp *3424* ['ai', 'gmail', 'google-calendar', 'google-workspace', 'llm'] - Control Gmail, Google Calendar, Docs, Sheets, Slides, Chat, Forms, Tasks, Search
- kajisho5/ffmpeg-skill *3124* ['audio-processing', 'captions', 'ffmpeg', 'subtitles', 'video'] - Local video editor for coding agents: 42 FFmpeg tools with a machine-readable co
- duty1g/x64dbg-mcp-server *2622* ['ai-agents', 'ai-debugging', 'binary-analysis', 'claude', 'claude-code'] - x64dbg-MCP Server is a native MCP (Model Context Protocol) plugin for x64dbg tha
- alpic-ai/skybridge *2178* ['agent', 'ai', 'apps-sdk', 'chatgpt', 'claude'] - Skybridge is a full-stack TypeScript framework for MCP Apps and ChatGPT Apps. Ty
- study8677/repobrain *1354* ['claude-code', 'codex-cli', 'developer-tools', 'mcp-server', 'windsurf'] - 🧠 RepoBrain (formerly Antigravity) — Give your repo a brain. ChatGPT for your co
- agentrq/agentrq *1169* ['agentic-ai', 'agentic-workflow', 'agents', 'task', 'task-manager'] - AgentRQ: Human-in-loop realtime conversational task manager for AI Agents. Self-
- CodeAbra/iai-personal-memory-engine *916* ['claude', 'claude-code', 'local-first', 'mcp', 'mcp-server'] - A cyber brain for your AI. It never forgets a detail, remembers exactly what you
- Storybloq/storybloq *782* ['agentic-development', 'ai-development', 'anthropic', 'claude-code', 'claude-skill'] - Project memory and workflows for Claude Code and Codex. Keep stories, plans, han
- hetpatel-11/Adobe_Premiere_Pro_MCP *771* ['adobe', 'adobe-premiere-pro', 'adobe-mcp', 'adobe-premiere-pro-mcp', 'ai-video-editing'] - Adobe Premiere Pro MCP. Tools for AI-driven video editing via MCP, for Codex, Cl

## Degradation
- registry complete: True (517 pages, 51609 entries)
- MCP servers merged from the previous catalog (not re-fetched): 0
- GraphQL 403s: 0 (secondary rate limit: 0); retries: 15; queries that gave up: 1
- HTTP retries (5xx/network): 0
- repos with stale metadata reused from the previous catalog (meta_stale): 0

## MCP Registry
- {"pages": 517, "fetched": 51609, "kept": 50928, "dropped": 681, "bad": 0, "complete": true, "excluded_remote_only": 16633, "excluded_low_signal": 17498, "fallback_merged": 0, "records": 1169, "attached_existing": 135, "new_repo": 1034, "remote_only": 0, "tiers": {"official": 25, "listed": 19, "verified": 837, "new": 119, "watch": 169}}

## Top 20 by trend_7d
- morluto/rea +48040 (13.71%) []
- cloudflare/security-audit-skill +15855 (45.79%) ['star-spike']
- debpalash/VoiceStudio +12445 (15.69%) ['product-stars']
- Nutlope/hallmark +8882 (29.14%) ['star-spike']
- DietrichGebert/ponytail +8207 (4.82%) []
- pbakaus/impeccable +6904 (8.22%) []
- mattpocock/skills +6116 (2.05%) []
- affaan-m/ECC +6032 (2.12%) []
- heygen-com/hyperframes +5451 (7.94%) []
- ifixai-ai/iFixAi +5315 (17.27%) ['product-stars']
- hugohe3/ppt-master +5079 (7.85%) ['product-stars']
- HKUDS/DeepTutor +4505 (10.74%) ['product-stars']
- lemomo-ai/lemo-opuscar +4310 (96.38%) ['star-spike']
- tt-a1i/archify +3991 (4.61%) []
- obra/superpowers +3942 (1.3%) []
- Leonxlnx/taste-skill +3818 (3.82%) []
- wheresryan22/anatomy +3766 (21.17%) []
- nextlevelbuilder/ui-ux-pro-max-skill +3581 (2.59%) []
- NVIDIA/OpenShell +3508 (20.84%) ['product-stars']
- luongnv89/claude-howto +3375 (7.99%) []

## Code search vs topic search
- repos found by code search: 233
- also in topic search: 16
- code-only: 199; tiers: {'anthropic': 1, 'verified': 110, 'watch': 60, 'new': 28}

## Top 30 by stars: anthropic
- anthropics/skills [marketplace,collection] *184304*  items=2 - Anthropic example skills
- anthropics/claude-code [marketplace,agent] *153636*  items=2 - Anthropic's Claude Code plugins, installed from the claude-plugins-official repo
- anthropics/claude-plugins-official [plugin,marketplace,collection] *44984*  items=15 - Directory of popular Claude Code extensions including development tools, product
- anthropics/financial-services [marketplace] *40869*  items=1 - 
- anthropics/knowledge-work-plugins [marketplace] *33487*  items=1 - 
- anthropics/claude-for-legal [marketplace] *9813*  items=1 - Reference agents, skills, and data connectors for the legal workflows we see mos
- anthropics/claude-code-action [collection] *9676*  items=1 - The official GitHub Action for running Claude Code in CI: mention @claude in iss
- anthropics/claude-code-security-review [collection] *6600*  items=1 - An official AI-powered security-review GitHub Action that uses Claude to analyze
- anthropics/claude-plugins-community [marketplace] *4786*  items=1 - 
- anthropics/commerce-agents [marketplace] *3362*  items=1 - Claude Commerce Agents: the commerce-builder plugin for building shopping and me
- anthropics/life-sciences [marketplace] *629*  items=1 - Skills for life sciences research, data analysis, and discovery
- anthropics/k12-teacher-skills [marketplace] *595*  items=1 - Plugin marketplace for K-12 Education and Claude for Teachers.
- anthropics/healthcare [marketplace] *432*  items=1 - Claude for Healthcare — one plugin bundling payer, provider, pharma, and general
- anthropics/oncall-kit [marketplace] *251*  items=1 - 
- anthropics/claude-for-financial-advisors [plugin,marketplace] *122*  items=2 - Ready-to-run workflows for financial advisors in Claude Cowork, drawing live dat
- anthropics/claude-tag-plugins [marketplace] *73*  items=1 - Plugins that connect Claude Tag to common SaaS services, plus charting and confi
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
- obra/superpowers [plugin,skill] *306630*  items=3 - Superpowers teaches Claude brainstorming, subagent driven development with built
- mattpocock/skills [plugin] *305027*  items=2 - Matt Pocock's agent skills for real engineering — grilling, spec/ticket flows, T
- heygen-com/hyperframes [plugin] *74098*  items=2 - HyperFrames by HeyGen. Write HTML, render video. Compositions, GSAP and runtime 
- ChromeDevTools/chrome-devtools-mcp [plugin,mcp-server] *54315*  items=4 - Control and inspect a live Chrome browser from your coding agent. Record perform
- confident-ai/deepeval [plugin] *19150* ['product-stars'] items=1 - Skills for adding DeepEval evaluations, tracing, datasets, Confident AI reports,
- huggingface/skills [plugin] *11227*  items=2 - Build, train, evaluate, and use open source AI models, datasets, and spaces.
- wonderwhy-er/DesktopCommanderMCP [plugin,mcp-server] *10145*  items=4 - MCP server for terminal commands, process management, and file operations across
- Eigenwise/atomic-agents [plugin,marketplace] *6311* ['product-stars'] items=3 - Comprehensive development workflow for building AI agents with the Atomic Agents
- exa-labs/exa-mcp-server [plugin,mcp-server] *5190*  items=3 - Exa AI web search, deep research, and content extraction. Provides MCP tools and
- NVIDIA/skills [plugin] *3765*  items=2 - Find the right NVIDIA skill for GPU acceleration, CUDA, AI agents, data loading,
- expo/skills [plugin] *3329*  items=2 - Official Expo skills for building, deploying, upgrading, and debugging React Nat
- aws/agent-toolkit-for-aws [plugin] *3318*  items=8 - Build, deploy, and operate AI agents on AWS. Skills for scaffolding agents with 
- cloudflare/skills [plugin] *3194*  items=2 - Skills for the Cloudflare developer platform: Workers, Durable Objects, Agents S
- modelcontextprotocol/ext-apps [plugin] *3014*  items=3 - Skills for creating MCP Apps with the MCP Apps SDK
- GoogleChrome/modern-web-guidance [plugin] *2565*  items=2 - Keep your coding agent up to date with the latest web best practices
- figma/mcp-server-guide [plugin,mcp-server] *2124*  items=4 - Figma design platform integration. Access design files, extract component inform
- stripe/ai [plugin,mcp-server] *1977*  items=3 - Stripe development plugin for Claude
- MicrosoftDocs/mcp [plugin,mcp-server] *1956*  items=3 - Access official Microsoft documentation, API references, and code samples for Az
- EpicGames/unreal-engine-skills-for-claude-code-plugin [plugin] *1704*  items=2 - Control Unreal Editor directly from Claude Code via MCP. Hundreds of tools expos
- microsoft/azure-skills [plugin] *1601*  items=2 - Transform Claude into an Azure expert. This plugin integrates the Azure MCP serv
- atlassian/atlassian-mcp-server [plugin,mcp-server] *1124*  items=3 - Connect to Atlassian products including Jira and Confluence. Search and create i
- forcedotcom/sf-skills [plugin] *1122*  items=1 - Build Salesforce apps and agents using these core building blocks: metadata, Ape
- awslabs/agent-plugins [plugin] *932*  items=10 - Guide developers through adding maps, places search, geocoding, routing, and oth
- superdesigndev/superdesign-skill [plugin,skill] *908*  items=2 - Design or redesign frontend UI and marketing graphics on the Superdesign infinit
- Shopify/Shopify-AI-Toolkit [plugin] *615*  items=2 - Shopify's AI Toolkit provides 18 development skills for building on the Shopify 
- duckdb/duckdb-skills [plugin] *613*  items=2 - DuckDB-powered skills for Claude Code: read any data file, attach and query Duck
- Unity-Technologies/unity-agent-plugin [plugin] *574*  items=2 - Unity's official plugin for Claude Code, with curated skills for game developmen
- ClickHouse/agent-skills [plugin] *561*  items=2 - 28 best practice rules for ClickHouse schema design, query optimization, and dat
- gitroomhq/postiz-agent [plugin] *556*  items=3 - Social media automation CLI for scheduling posts, managing integrations, uploadi
- TheQtCompanyRnD/agent-skills [plugin] *510*  items=3 - Agentic engineering skills for Qt software development — Qt C++/QML code review,

## Top 30 by stars: listed
- DietrichGebert/ponytail [plugin] *178361*  items=2 - Lazy senior dev mode. Forces the simplest, shortest solution that actually works
- JuliusBrussee/caveman [plugin,skill] *115590*  items=2 - Auto-activation works differently per agent: Claude Code uses SessionStart hooks
- thedotmack/claude-mem [plugin,skill] *103789*  items=3 - Persistent memory system for Claude Code - seamlessly preserve context across se
- pbakaus/impeccable [plugin] *90888*  items=1 - Great design prompts require design vocabulary. Most people don't have it. You c
- Egonex-AI/Understand-Anything [plugin,skill] *88616*  items=2 - Understand Anything is a Claude Code plugin that analyzes your project with a mu
- mem0ai/mem0 [plugin] *67953* ['product-stars'] items=1 - Connect Mem0 to Claude to give your agent persistent memory across sessions. Cla
- mvanhorn/last30days-skill [plugin] *65711*  items=1 - last-30-days is a Claude Code skill that searches the web and delivers a structu
- coreyhaines31/marketingskills [plugin,skill] *56948*  items=3 - coreyhaines31
- DayuanJiang/next-ai-draw-io [plugin,mcp-server] *36452*  items=2 - AI-powered Draw.io diagram generation with real-time browser preview. Create flo
- mksglu/context-mode [plugin] *32577*  items=1 - MCP is the protocol for tool access. We're the virtualization layer for context.
- jarrodwatts/claude-hud [plugin,collection] *28963*  items=2 - Real-time statusline HUD for Claude Code - context health, tool activity, agent 
- alirezarezvani/claude-skills [plugin,skill] *28860*  items=2 - Playwright Pro turns your AI coding agent into a senior test automation engineer
- promptfoo/promptfoo [plugin] *26524*  items=1 - Teaches AI coding agents to create and maintain promptfoo eval suites. Encodes b
- AgriciDaniel/claude-seo [plugin] *22854*  items=1 - Comprehensive SEO analysis plugin for Claude Code. Performs full site audits wit
- browser-use/browser-harness [plugin] *18666*  items=1 - Open-source browser agent driven via CDP — direct browser control, 79K stars, YC
- Jeffallan/claude-skills [plugin,skill,collection] *12100*  items=3 - 66 specialized skills for full-stack development: 12 language experts (Python, T
- nicobailon/visual-explainer [plugin,collection] *10658*  items=3 - An agent skill that turns complex terminal output into styled HTML pages you act
- revfactory/harness [plugin,agent] *9275*  items=3 - Harness leverages Claude Code's agent team system to decompose complex tasks int
- Eventual-Inc/Daft [plugin] *5817* ['product-stars'] items=1 - Skills for working with Daft, a high-performance data engine for AI and multimod
- clidey/whodb [plugin] *5043* ['product-stars'] items=1 - Database management tools for Claude Code. Query databases, explore schemas, ana
- nyldn/claude-octopus [plugin] *4322*  items=2 - Multi-LLM orchestration for Claude Code and Cowork. Coordinates 8 AI providers (
- giancarloerra/SocratiCode [plugin,mcp-server] *3356*  items=2 - Enterprise-grade (40m+ lines) codebase intelligence in a zero-setup, private and
- Chachamaru127/claude-code-harness [plugin,marketplace,agent] *3189*  items=5 - Autonomous Plan → Work → Review cycle for Claude Code. Go-native engine with 25×
- AgriciDaniel/claude-blog [plugin] *2555*  items=1 - AI-powered blog creation and optimization skill with 20 commands, 4 specialized 
- nizos/tdd-guard [plugin,collection] *2369*  items=2 - Enforces Test-Driven Development by intercepting file operations in Claude Code.
- AminForou/mcp-gsc [plugin] *2043*  items=1 - Connect Google Search Console to Claude Code. Query rankings, inspect URLs, audi
- severity1/claude-code-prompt-improver [plugin] *1963*  items=1 - Intelligent prompt optimization using skill-based architecture. Enriches vague p
- fabio-rovai/open-ontologies [plugin] *1828* ['star-spike'] items=1 - AI-native ontology engineering with 39 MCP tools backed by an in-memory Oxigraph
- kenryu42/cc-safety-net [plugin,collection] *1827*  items=3 - Block destructive git and filesystem commands before execution
- codeaholicguy/ai-devkit [plugin] *1654*  items=1 - A structured software development toolkit that helps Claude Code follow senior-e

## Top 30 by stars: verified
- morluto/rea [mcp-server] *398417*  items=1 - Reverse engineer anything from your terminal or agent with one CLI and MCP serve
- affaan-m/ECC [collection] *291066*  items=1 - Top-notch, well-written resources covering "just about everything" from core eng
- firecrawl/firecrawl [skill] *196152* ['product-stars'] items=1 - Supercharge your AI agents with data from the web and beyond. Building the libra
- vercel/next.js [marketplace] *143175* ['product-stars'] items=1 - The React Framework
- nextlevelbuilder/ui-ux-pro-max-skill [marketplace] *141685*  items=1 - An AI skill that provides design intelligence for building professional UI/UX ac
- garrytan/gstack [agent] *137969*  items=1 - Garry Tan's (Y Combinator) Claude Code setup and "open source software factory" 
- browser-use/browser-use [mcp-server] *119336*  items=1 - Browser agents and stealth cloud browsers for AI: run web tasks, fill forms, ext
- addyosmani/agent-skills [marketplace] *111226*  items=1 - Production-grade engineering skills for AI coding agents.
- paperclipai/paperclip [skill,mcp-server] *108086*  items=2 - The open-source app everyone uses to manage agents at work
- nexu-io/open-design [marketplace] *104450*  items=1 - The 1st Collaborative AI Design Agent Workspace. Local-first and open source. Cr
- Leonxlnx/taste-skill [marketplace] *103819*  items=1 - Agent skills that give coding agents taste: art direction, reference images and 
- ruvnet/RuView [marketplace] *100413*  items=1 - π RuView turns commodity WiFi signals into real-time spatial intelligence, vital
- debpalash/VoiceStudio [skill] *91739* ['product-stars'] items=1 - VoiceStudio is the open-source, fully-local ElevenLabs alternative — voice cloni
- storybookjs/storybook [marketplace] *91395* ['product-stars'] items=1 - Storybook is the industry standard workshop for building, documenting, and testi
- tt-a1i/archify [skill,collection] *90593*  items=2 - An Agent Skill for Claude Code that generates interactive architecture, workflow
- D4Vinci/Scrapling [mcp-server] *90095*  items=1 - Web scraping with stealth HTTP, real browsers, and Cloudflare bypass. CSS select
- koala73/worldmonitor [skill,mcp-server] *89687* ['product-stars'] items=2 - Real-time global intelligence dashboard. AI-powered news aggregation, geopolitic
- bytedance/deer-flow [skill] *84515*  items=1 - An open-source long-horizon SuperAgent harness that researches, codes, and creat
- netdata/netdata [mcp-server] *81197*  items=1 - Real-time infrastructure monitoring with metrics, logs, alerts, and ML-based ano
- ruvnet/ruflo [marketplace,mcp-server] *79829*  items=2 - 🌊 The original agent harness. Deploy intelligent multi-player swarms, coordinate
- shareAI-lab/learn-claude-code [collection] *79385*  items=1 - A really interesting analysis of how coding agents like Claude Code are designed
- ComposioHQ/awesome-claude-skills [skill] *78111*  items=1 - A curated list of awesome Claude Skills, resources, and tools for customizing Cl
- headroomlabs-ai/headroom [marketplace] *78061*  items=1 - Compress tool outputs, logs, files, and RAG chunks before they reach the LLM. 20
- career-ops-hq/career-ops [marketplace] *77967*  items=1 - Open-source AI job search agent and job finder: scan job boards, score each job 
- rohitg00/ai-engineering-from-scratch [skill] *74770* ['product-stars'] items=1 - Learn AI Engineering! Learn it. Build it. Ship it for others.
- thedaviddias/Front-End-Checklist [marketplace,mcp-server] *74577* ['product-stars'] items=2 - 🗂 The essential checklist for modern web development, for humans and AI agents
- tw93/Mole [marketplace] *73122* ['product-stars'] items=1 - 🐹 Keep your Mac and PC clean, light, and running like new. Fast open-source CLI,
- calesthio/OpenMontage [skill] *72521*  items=1 - World's first open-source, agentic video production system. 12 production pipeli
- usestrix/strix [skill] *72393* ['product-stars'] items=1 - Open-source AI penetration testing tool to find and fix your app’s vulnerabiliti
- hugohe3/ppt-master [marketplace] *69749* ['product-stars'] items=1 - AI turns documents or topics into real, native PowerPoint decks—with native shap

## Top 30 by stars: watch
- f/prompts.chat [marketplace] *174858* ['product-stars'] items=1 - f.k.a. Awesome ChatGPT Prompts. Share, discover, and collect prompts from the co
- opendatalab/MinerU [skill] *82643* ['product-stars'] items=1 - Transforms complex documents like PDFs and Office docs into LLM-ready markdown/J
- code-yeongyu/oh-my-openagent [skill] *70415* ['product-stars'] items=1 - OmO: Just type "mass ulw" keyword with your prompt. Now you are the master of gr
- bmad-code-org/BMAD-METHOD [skill] *54650* ['product-stars'] items=1 - Breakthrough Method for Agile Ai Driven Development
- Imbad0202/academic-research-skills [marketplace] *54215*  items=1 - Academic Research Skills for Claude Code: research → write → review → revise → f
- tldraw/tldraw [mcp-server] *51121*  items=1 - Draw and visually collaborate with your agents on tldraw's canvas.
- metabase/metabase [mcp-server] *49879*  items=1 - Lets AI clients search, explore, query, and visualize data in a Metabase instanc
- abhigyanpatwari/GitNexus [marketplace] *48086* ['product-stars'] items=1 - GitNexus: The Zero-Server Code Intelligence Engine
- serverless/serverless [skill] *46922* ['product-stars'] items=1 - ⚡ Serverless Framework – Effortlessly build apps that auto-scale, incur zero cos
- PostHog/posthog [mcp-server] *40483*  items=1 - Official PostHog MCP Server for product analytics, feature flags, experiments, a
- openai/codex-plugin-cc [marketplace] *34651*  items=1 - Use Codex from Claude Code to review code or delegate tasks.
- zarazhangrui/frontend-slides [marketplace] *31449*  items=1 - Create beautiful slides on the web using a coding agent's frontend skills
- oraios/serena [mcp-server] *30791*  items=1 - A powerful toolkit for coding, providing semantic retrieval and editing capabili
- openai/skills [skill] *28351*  items=1 - Skills Catalog for Codex
- vercel/ai [skill] *27556* ['product-stars'] items=1 - The AI Toolkit for TypeScript. From the creators of Next.js, the AI SDK is a fre
- hypit-ai/hypit [skill] *26146* ['product-stars'] items=1 - Clone any viral video with AI agents. Not just a script, the whole workflow: swa
- clockworklabs/SpacetimeDB [marketplace] *25399* ['product-stars'] items=1 - Development at the speed of light
- different-ai/openwork [mcp-server] *24295*  items=1 - Your OpenWork org's skills, plugins, workflows, and connections through one OAut
- HKUDS/AI-Trader [skill] *22995* ['product-stars'] items=1 - "AI-Trader: 100% Fully-Automated Agent-Native Trading"
- getpaseo/paseo [skill] *22239*  items=1 - Orchestrate multiple coding agents from desktop and mobile
- screenpipe/screenpipe [mcp-server] *22101*  items=1 - Search your local screen recordings, audio transcripts, and computer activity fr
- agent0ai/agent-zero [skill] *19588* ['product-stars'] items=1 - Agent Zero AI framework
- longbridge/gpui-kit [skill] *18708* ['product-stars'] items=1 - Rust GUI components for building fantastic cross-platform desktop application by
- Canner/WrenAI [skill] *17994* ['product-stars'] items=1 - GenBI (Generative BI) for AI agents, an open-source, governed text-to-SQL throug
- architecture-decision-record/architecture-decision-record [skill] *17338* ['product-stars'] items=1 - Architecture decision record (ADR) examples for software planning, IT leadership
- composio-community/awesome-codex-skills [skill] *17085*  items=1 - A curated list of practical Codex skills for automating workflows across the Cod
- ParadevAI/Paradev [marketplace] *15651*  items=1 - Superset is an agentic IDE to orchestrate 100+ coding agents in parallel. Run an
- millionco/react-doctor [skill] *15055* ['product-stars'] items=1 - Your agent writes bad React. This catches it
- kyegomez/OpenMythos [plugin] *14907*  items=1 - A theoretical reconstruction of the Claude Mythos architecture, built from first
- NevaMind-AI/memU [skill] *14570* ['product-stars'] items=1 - Personal memory across agents

## Random sample of 20 watch repos (of 465)
- stefan-jansen/claude-code-toolkit [skill] *90*  items=1 - Superseded by coding-agent-toolkit — see README. Preserved for reference: Claude reasons=['fails: pushed<=90d (112)'] src=['topic']
- smith-horn/skillsmith [mcp-server] *78*  items=1 - Share agent skills across your team, scan them for risk, and track what's actual reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- dontbesilent2025/dbskill [marketplace] *10918*  items=1 - dontbesilent 的商业诊断 Skills reasons=['fails: license (NOASSERTION)'] src=['topic']
- sathergate/sathergate-toolkit [mcp-server] *107*  items=7 - Cron jobs for Next.js. Serverless-native scheduling with retry support. reasons=['no corroborating signal'] src=['mcp-registry']
- gradion-ai/ipybox [mcp-server] *76*  items=1 - Unified execution environment for Python code, shell commands, and programmatic  reasons=['fails: pushed<=90d (138)'] src=['mcp-registry']
- tractorjuice/arc-kit [marketplace] *2265*  items=1 - The Enterprise Architecture Governance Harness — strategy, architecture, deliver reasons=['fails: license (NOASSERTION)'] src=['topic']
- spboyer/sensei [skill] *60*  items=1 - Skill for iteratively improving SKILL.md frontmatter compliance using the Ralph  reasons=['fails: pushed<=90d (148)'] src=['topic']
- saidutt46/domain-check [mcp-server] *306*  items=1 - Fast domain availability checker with RDAP/WHOIS — batch checks, TLD presets, an reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- tuist/tuist [skill] *5852* ['product-stars'] items=1 - Your platform team, as a service reasons=['fails: license (NOASSERTION)'] src=['topic']
- popmechanic/VibesOS [plugin] *135*  items=1 - A GUI for Claude Code that makes it easy to vibe code simple, un-hackable apps reasons=['fails: pushed<=90d (92)'] src=['code']
- lynxlangya/techne [plugin] *106*  items=1 - Forcing-function skills for AI agents — validated to improve behavior, not just  reasons=['fails: pushed<=90d (117)'] src=['code']
- lukabudik/alza-mcp-community [mcp-server] *93*  items=1 - Unofficial MCP server for Alza.cz: catalog search plus token-guarded account and reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- joshua-zyy/academic-paper-writer [marketplace] *115*  items=1 - 面向 CS / AI / ML 领域的证据驱动、分节推进的论文写作 Agent Skill。 reasons=['no corroborating signal'] src=['topic']
- blacktwist/social-media-skills [marketplace] *602*  items=1 - AI agent skills for social media content strategy, creation, and analysis across reasons=['fails: pushed<=90d (179)'] src=['topic']
- LetsFG/LetsFG [mcp-server] *2202*  items=2 - Flight search & booking for AI agents. 400+ airlines, $20-50 cheaper than OTAs. reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- ScrapeGraphAI/scrapegraph-mcp [mcp-server] *119*  items=2 - Enable language models to perform advanced AI-powered web scraping with enterpri reasons=['fails: pushed<=90d (102)'] src=['mcp-registry']
- kubeshop/testkube [mcp-server] *1676*  items=1 - MCP server for Testkube - Manage test workflows, executions, and artifacts via A reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- smnandre/symfony-ux-skills [plugin] *180*  items=1 - Symfony UX skills for Claude, Gemini, Codex, ... Live Component, Twig Component, reasons=['fails: pushed<=90d (135)'] src=['code']
- mikesheehan54/Claude-Code-Design-AI [skill,agent] *86*  items=2 - Claude Design: AI UI/UX architect. Screenshot to React, Figma components, Tailwi reasons=['fails: pushed<=90d (167)', 'no corroborating signal'] src=['topic']
- amirfish1/claude-command-center [marketplace] *212*  items=1 - One local board for Claude Code, Codex, Cursor and 5 more coding agents. See whi reasons=['fails: license (NOASSERTION)'] src=['topic']

## Errors
- graphql: HTTP 504 after 4 retries <!DOCTYPE html>
<!--

Hello future GitHubber! I bet you're here to remove tho
- broad verify subfolders chunk 7: no data None

## Rate limit
- REST calls this run (uncached): {"core": 103, "search": 42}; last seen: {"core": {"remaining": "4897", "limit": "5000"}, "search": {"remaining": "29", "limit": "30"}}
- GraphQL: 139 calls, cost 53, remaining 4864/5000, stopped early: False
- REST stopped early: False
- repos lacking metadata: 4029; enriched this run: 32281