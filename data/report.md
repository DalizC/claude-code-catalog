# Catalog report 2026-11-11
Mode: **token**; run time 1695s
Repos (deduped): 3266; flat entries before dedup: 25140

## Tier x type BEFORE dedup (flat entries)
- new/mcp-server: 15162
- watch/mcp-server: 2473
- listed/plugin: 2283
- verified/mcp-server: 1287
- verified/skill: 487
- watch/skill: 471
- watch/marketplace: 420
- official/plugin: 376
- verified/marketplace: 354
- verified/plugin: 337
- watch/plugin: 289
- watch/agent: 260
- verified/collection: 196
- new/skill: 166
- anthropic/plugin: 149
- new/marketplace: 149
- new/plugin: 117
- verified/agent: 48
- new/agent: 40
- anthropic/marketplace: 15
- anthropic/collection: 4
- watch/collection: 2
- anthropic/agent: 1

## Tier AFTER dedup (repos)
- verified: 1874
- watch: 493
- new: 333
- official: 256
- listed: 163
- anthropic: 147

## Type AFTER dedup (items)
- mcp-server: 1750
- plugin: 1398
- skill: 787
- marketplace: 496
- collection: 122
- agent: 48

## Primary type AFTER dedup (repos)
- mcp-server: 1144
- plugin: 833
- skill: 727
- marketplace: 438
- collection: 89
- agent: 35

## Repos by discovery source family
- topic: 1322
- mcp-registry: 1287
- anthropic: 461
- code: 193
- anthropic-org: 188
- curated: 149
- marketplace-expansion: 36

## Flags (all tiers)
- product-stars: 227
- star-spike: 14
- star-anomaly: 3

## star-anomaly by tier
- new: 2
- watch: 1

## Metadata gaps
- repos without metadata: 153
- reasons: {'unfetched': 153}

## MCP-only repos excluded: 54
- n8n-io/n8n *210058* ['automation', 'ipaas', 'n8n', 'workflow', 'typescript'] - Fair-code workflow automation platform with native AI capabilities. Combine visu
- assafelovic/gpt-researcher *30623* ['ai', 'python', 'agent', 'automation', 'research'] - An autonomous agent that conducts deep research on any data using any LLM provid
- mrexodia/ida-pro-mcp *13437* ['ida-plugin', 'ida-pro', 'mcp', 'mcp-server', 'modelcontextprotocol'] - AI-powered reverse engineering assistant that bridges IDA Pro with language mode
- mcp-use/mcp-use *10866* ['mcp', 'model-context-protocol', 'apps-sdk', 'mcp-apps', 'mcp-inspector'] - The fullstack MCP framework to develop MCP Apps for ChatGPT / Claude & MCP Serve
- Agents365-ai/drawio-skill *10686* ['drawio', 'diagram', 'agent-skills', 'architecture-diagram', 'claude-code'] - Agent skill that turns natural language, code, Terraform/K8s, SQL, OpenAPI, Asyn
- 21st-dev/magic-mcp *6455* ['21st', 'claude', 'cursor', 'mcp', 'model-context-protocol'] - It's like v0, but in your Cursor / Claude Code / Windsurf: search 10,000+ React/
- Marker-Inc-Korea/AutoRAG *5650* ['document-parser', 'embeddings', 'llm', 'open-source', 'rag'] - Your Personal Librarian Agent. Ask anything on your computer, organize files, re
- kajisho5/ffmpeg-skill *5032* ['audio-processing', 'captions', 'ffmpeg', 'subtitles', 'video'] - Local video editor for coding agents: 42 FFmpeg tools with a machine-readable co
- jordan-gibbs/hyperresearch *4544* ['agents', 'agentskills', 'claude-code', 'deep-research', 'deep-research-agent'] - Convert Claude Code or Codex into the most intelligent Deep Research Agent. Coll
- stickerdaniel/linkedin-mcp-server *4178* ['linkedin', 'linkedin-scraper', 'mcp', 'mcp-server', 'linkedin-mcp'] - Open-source MCP server for LinkedIn. Give Claude and any MCP-compatible AI agent
- taylorwilsdon/google_workspace_mcp *3503* ['ai', 'gmail', 'google-calendar', 'google-workspace', 'llm'] - Control Gmail, Google Calendar, Docs, Sheets, Slides, Chat, Forms, Tasks, Search
- duty1g/x64dbg-mcp-server *2813* ['ai-agents', 'ai-debugging', 'binary-analysis', 'claude', 'claude-code'] - x64dbg-MCP Server is a native MCP (Model Context Protocol) plugin for x64dbg tha
- alpic-ai/skybridge *2185* ['agent', 'ai', 'apps-sdk', 'chatgpt', 'claude'] - Skybridge is a full-stack TypeScript framework for MCP Apps and ChatGPT Apps. Ty
- study8677/repobrain *1361* ['claude-code', 'codex-cli', 'developer-tools', 'mcp-server', 'windsurf'] - 🧠 RepoBrain (formerly Antigravity) — Give your repo a brain. ChatGPT for your co
- CodeAbra/iai-personal-memory-engine *923* ['claude', 'claude-code', 'local-first', 'mcp', 'mcp-server'] - A cyber brain for your AI. It never forgets a detail, remembers exactly what you

## Degradation
- registry complete: True (617 pages, 61660 entries)
- MCP servers merged from the previous catalog (not re-fetched): 0
- GraphQL 403s: 0 (secondary rate limit: 0); retries: 10; queries that gave up: 1
- HTTP retries (5xx/network): 0
- repos with stale metadata reused from the previous catalog (meta_stale): 0

## MCP Registry
- {"pages": 617, "fetched": 61660, "kept": 60691, "dropped": 969, "bad": 0, "complete": true, "excluded_remote_only": 21426, "excluded_low_signal": 20343, "fallback_merged": 0, "records": 1287, "attached_existing": 148, "new_repo": 1139, "remote_only": 0, "tiers": {"official": 25, "listed": 20, "verified": 924, "new": 128, "watch": 190}}

## Top 20 by trend_7d
- morluto/rea +22715 (5.31%) []
- cloudflare/security-audit-skill +11195 (19.19%) []
- mattpocock/skills +9438 (3.03%) []
- vercel-labs/agent-desktop +8266 (62.3%) ['star-spike', 'product-stars']
- debpalash/VoiceStudio +7197 (7.18%) ['product-stars']
- D4Vinci/Scrapling +6052 (6.36%) []
- pbakaus/impeccable +5984 (5.88%) []
- google/elephant-goldfish-model +5866 (51.52%) ['star-spike']
- Nutlope/hallmark +5597 (11.87%) []
- anthropics/skills +5364 (2.87%) []
- DietrichGebert/ponytail +4633 (2.52%) []
- affaan-m/ECC +4227 (1.42%) []
- vercel-labs/agent-browser +3958 (8.71%) ['product-stars']
- heygen-com/hyperframes +3920 (4.99%) []
- obra/superpowers +3859 (1.24%) []
- thedotmack/claude-mem +3783 (3.37%) []
- Leonxlnx/taste-skill +3460 (3.16%) []
- HKUDS/DeepTutor +3251 (5.93%) ['product-stars']
- blader/humanizer +3145 (4.88%) []
- nextlevelbuilder/ui-ux-pro-max-skill +3025 (2.09%) []

## Code search vs topic search
- repos found by code search: 193
- also in topic search: 13
- code-only: 168; tiers: {'anthropic': 1, 'verified': 83, 'watch': 64, 'new': 20}

## Top 30 by stars: anthropic
- anthropics/skills [marketplace,collection] *192542*  items=2 - Anthropic example skills
- anthropics/claude-code [marketplace,agent] *155224*  items=2 - Anthropic's Claude Code plugins, installed from the claude-plugins-official repo
- anthropics/claude-plugins-official [plugin,marketplace,collection] *46797*  items=15 - Directory of popular Claude Code extensions including development tools, product
- anthropics/financial-services [marketplace] *41214*  items=1 - 
- anthropics/knowledge-work-plugins [marketplace] *35388*  items=1 - 
- anthropics/claude-for-legal [marketplace] *9970*  items=1 - Reference agents, skills, and data connectors for the legal workflows we see mos
- anthropics/claude-code-action [collection] *9881*  items=1 - The official GitHub Action for running Claude Code in CI: mention @claude in iss
- anthropics/claude-code-security-review [collection] *6837*  items=1 - An official AI-powered security-review GitHub Action that uses Claude to analyze
- anthropics/claude-plugins-community [marketplace] *4859*  items=1 - 
- anthropics/commerce-agents [marketplace] *3451*  items=1 - Claude Commerce Agents: the commerce-builder plugin for building shopping and me
- anthropics/life-sciences [marketplace] *646*  items=1 - Skills for life sciences research, data analysis, and discovery
- anthropics/k12-teacher-skills [marketplace] *623*  items=1 - Plugin marketplace for K-12 Education and Claude for Teachers.
- anthropics/healthcare [marketplace] *443*  items=1 - Claude for Healthcare — one plugin bundling payer, provider, pharma, and general
- anthropics/oncall-kit [marketplace] *272*  items=1 - 
- anthropics/claude-for-financial-advisors [plugin,marketplace] *148*  items=2 - Ready-to-run workflows for financial advisors in Claude Cowork, drawing live dat
- anthropics/claude-tag-plugins [marketplace] *77*  items=1 - Plugins that connect Claude Tag to common SaaS services, plus charting and confi
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
- mattpocock/skills [plugin] *321144*  items=2 - Matt Pocock's agent skills for real engineering — grilling, spec/ticket flows, T
- obra/superpowers [plugin,skill] *315847*  items=4 - Superpowers teaches Claude brainstorming, subagent driven development with built
- heygen-com/hyperframes [plugin] *82402*  items=2 - HyperFrames by HeyGen. Write HTML, render video. Compositions, GSAP and runtime 
- ChromeDevTools/chrome-devtools-mcp [plugin,mcp-server] *55084*  items=4 - Control and inspect a live Chrome browser from your coding agent. Record perform
- confident-ai/deepeval [plugin] *19424* ['product-stars'] items=1 - Skills for adding DeepEval evaluations, tracing, datasets, Confident AI reports,
- huggingface/skills [plugin] *11332*  items=2 - Build, train, evaluate, and use open source AI models, datasets, and spaces.
- wonderwhy-er/DesktopCommanderMCP [plugin,mcp-server] *10283*  items=4 - MCP server for terminal commands, process management, and file operations across
- Eigenwise/atomic-agents [plugin,marketplace] *6325* ['product-stars'] items=3 - Comprehensive development workflow for building AI agents with the Atomic Agents
- exa-labs/exa-mcp-server [plugin,mcp-server] *5224*  items=3 - Exa AI web search, deep research, and content extraction. Provides MCP tools and
- expo/skills [plugin] *4111*  items=2 - Official Expo skills for building, deploying, upgrading, and debugging React Nat
- NVIDIA/skills [plugin] *3930*  items=2 - Find the right NVIDIA skill for GPU acceleration, CUDA, AI agents, data loading,
- aws/agent-toolkit-for-aws [plugin] *3460*  items=8 - Build, deploy, and operate AI agents on AWS. Skills for scaffolding agents with 
- GoogleChrome/modern-web-guidance [plugin] *3434* ['star-spike'] items=2 - Keep your coding agent up to date with the latest web best practices
- cloudflare/skills [plugin] *3337*  items=2 - Skills for the Cloudflare developer platform: Workers, Durable Objects, Agents S
- modelcontextprotocol/ext-apps [plugin] *3071*  items=3 - Skills for creating MCP Apps with the MCP Apps SDK
- figma/mcp-server-guide [plugin,mcp-server] *2171*  items=4 - Figma design platform integration. Access design files, extract component inform
- stripe/ai [plugin,mcp-server] *2054*  items=3 - Stripe development plugin for Claude
- MicrosoftDocs/mcp [plugin,mcp-server] *1981*  items=3 - Access official Microsoft documentation, API references, and code samples for Az
- EpicGames/unreal-engine-skills-for-claude-code-plugin [plugin] *1941*  items=2 - Control Unreal Editor directly from Claude Code via MCP. Hundreds of tools expos
- microsoft/azure-skills [plugin] *1636*  items=2 - Transform Claude into an Azure expert. This plugin integrates the Azure MCP serv
- forcedotcom/sf-skills [plugin,skill] *1154*  items=2 - Build Salesforce apps and agents using these core building blocks: metadata, Ape
- atlassian/atlassian-mcp-server [plugin,mcp-server] *1153*  items=3 - Connect to Atlassian products including Jira and Confluence. Search and create i
- superdesigndev/superdesign-skill [plugin,skill] *976*  items=2 - Design or redesign frontend UI and marketing graphics on the Superdesign infinit
- awslabs/agent-plugins [plugin] *938*  items=10 - Guide developers through adding maps, places search, geocoding, routing, and oth
- Shopify/Shopify-AI-Toolkit [plugin] *636*  items=2 - Shopify's AI Toolkit provides 18 development skills for building on the Shopify 
- Unity-Technologies/unity-agent-plugin [plugin] *629*  items=2 - Unity's official plugin for Claude Code, with curated skills for game developmen
- duckdb/duckdb-skills [plugin] *616*  items=2 - DuckDB-powered skills for Claude Code: read any data file, attach and query Duck
- ClickHouse/agent-skills [plugin] *565*  items=2 - 28 best practice rules for ClickHouse schema design, query optimization, and dat
- gitroomhq/postiz-agent [plugin] *565*  items=3 - Social media automation CLI for scheduling posts, managing integrations, uploadi
- TheQtCompanyRnD/agent-skills [plugin] *537*  items=3 - Agentic engineering skills for Qt software development — Qt C++/QML code review,

## Top 30 by stars: listed
- DietrichGebert/ponytail [plugin] *188531*  items=2 - Lazy senior dev mode. Forces the simplest, shortest solution that actually works
- JuliusBrussee/caveman [plugin,skill] *118944*  items=2 - Auto-activation works differently per agent: Claude Code uses SessionStart hooks
- thedotmack/claude-mem [plugin,skill] *115920*  items=3 - Persistent memory system for Claude Code - seamlessly preserve context across se
- pbakaus/impeccable [plugin] *107724*  items=1 - Great design prompts require design vocabulary. Most people don't have it. You c
- Egonex-AI/Understand-Anything [plugin,skill] *91933*  items=2 - Understand Anything is a Claude Code plugin that analyzes your project with a mu
- mem0ai/mem0 [plugin] *68777* ['product-stars'] items=1 - Connect Mem0 to Claude to give your agent persistent memory across sessions. Cla
- mvanhorn/last30days-skill [plugin] *67257*  items=1 - last-30-days is a Claude Code skill that searches the web and delivers a structu
- coreyhaines31/marketingskills [plugin,skill] *59614*  items=3 - coreyhaines31
- DayuanJiang/next-ai-draw-io [plugin,mcp-server] *36873*  items=2 - AI-powered Draw.io diagram generation with real-time browser preview. Create flo
- mksglu/context-mode [plugin] *33831*  items=1 - MCP is the protocol for tool access. We're the virtualization layer for context.
- alirezarezvani/claude-skills [plugin,skill] *29608*  items=2 - Playwright Pro turns your AI coding agent into a senior test automation engineer
- jarrodwatts/claude-hud [plugin,collection] *29159*  items=2 - Real-time statusline HUD for Claude Code - context health, tool activity, agent 
- AgriciDaniel/claude-seo [plugin] *27947*  items=1 - Comprehensive SEO analysis plugin for Claude Code. Performs full site audits wit
- promptfoo/promptfoo [plugin] *27043*  items=1 - Teaches AI coding agents to create and maintain promptfoo eval suites. Encodes b
- browser-use/browser-harness [plugin] *19009*  items=1 - Open-source browser agent driven via CDP — direct browser control, 79K stars, YC
- Jeffallan/claude-skills [plugin,skill,collection] *12311*  items=3 - 66 specialized skills for full-stack development: 12 language experts (Python, T
- nicobailon/visual-explainer [plugin,collection] *10952*  items=3 - An agent skill that turns complex terminal output into styled HTML pages you act
- revfactory/harness [plugin,agent] *9349*  items=3 - Harness leverages Claude Code's agent team system to decompose complex tasks int
- Eventual-Inc/Daft [plugin] *5842* ['product-stars'] items=1 - Skills for working with Daft, a high-performance data engine for AI and multimod
- clidey/whodb [plugin] *5053* ['product-stars'] items=1 - Database management tools for Claude Code. Query databases, explore schemas, ana
- nyldn/claude-octopus [plugin] *4430*  items=2 - Multi-LLM orchestration for Claude Code and Cowork. Coordinates 8 AI providers (
- giancarloerra/SocratiCode [plugin,mcp-server] *3368*  items=2 - Enterprise-grade (40m+ lines) codebase intelligence in a zero-setup, private and
- Chachamaru127/claude-code-harness [plugin,agent] *3205*  items=2 - Autonomous Plan → Work → Review cycle for Claude Code. Go-native engine with 25×
- fabio-rovai/open-ontologies [plugin] *2870*  items=1 - AI-native ontology engineering with 39 MCP tools backed by an in-memory Oxigraph
- AgriciDaniel/claude-blog [plugin] *2709*  items=1 - AI-powered blog creation and optimization skill with 20 commands, 4 specialized 
- nizos/tdd-guard [plugin,collection] *2375*  items=2 - Enforces Test-Driven Development by intercepting file operations in Claude Code.
- AminForou/mcp-gsc [plugin] *2174*  items=1 - Connect Google Search Console to Claude Code. Query rankings, inspect URLs, audi
- kenryu42/cc-safety-net [plugin,collection] *1994*  items=3 - Block destructive git and filesystem commands before execution
- severity1/claude-code-prompt-improver [plugin] *1968*  items=1 - Intelligent prompt optimization using skill-based architecture. Enriches vague p
- codeaholicguy/ai-devkit [plugin] *1663*  items=1 - A structured software development toolkit that helps Claude Code follow senior-e

## Top 30 by stars: verified
- morluto/rea [marketplace,mcp-server] *450586*  items=2 - Reverse engineer anything with agents, from app behavior down to native binaries
- affaan-m/ECC [collection] *300897*  items=1 - Top-notch, well-written resources covering "just about everything" from core eng
- firecrawl/firecrawl [skill] *200627* ['product-stars'] items=1 - Supercharge your AI agents with data from the web and beyond. Building the libra
- nextlevelbuilder/ui-ux-pro-max-skill [marketplace] *147882*  items=1 - An AI skill that provides design intelligence for building professional UI/UX ac
- vercel/next.js [marketplace] *143461* ['product-stars'] items=1 - The React Framework
- garrytan/gstack [agent] *141129*  items=1 - Garry Tan's (Y Combinator) Claude Code setup and "open source software factory" 
- browser-use/browser-use [mcp-server] *120642*  items=1 - Browser agents and stealth cloud browsers for AI: run web tasks, fill forms, ext
- addyosmani/agent-skills [marketplace] *115311*  items=1 - Production-grade engineering skills for AI coding agents.
- Leonxlnx/taste-skill [marketplace] *113075*  items=1 - Agent skills that give coding agents taste: art direction, reference images and 
- paperclipai/paperclip [skill,mcp-server] *112992*  items=2 - The open-source app everyone uses to manage agents at work
- debpalash/VoiceStudio [skill] *107457* ['product-stars'] items=1 - VoiceStudio is the open-source, fully-local ElevenLabs alternative — voice cloni
- nexu-io/open-design [marketplace] *107065*  items=1 - The 1st Collaborative AI Design Agent Workspace. Local-first and open source. Cr
- ruvnet/RuView [marketplace] *103943*  items=1 - π RuView turns commodity WiFi signals into real-time spatial intelligence, vital
- D4Vinci/Scrapling [mcp-server] *101261*  items=1 - Web scraping with stealth HTTP, real browsers, and Cloudflare bypass. CSS select
- tt-a1i/archify [skill,collection] *95430*  items=2 - An Agent Skill for Claude Code that generates interactive architecture, workflow
- storybookjs/storybook [marketplace] *91522* ['product-stars'] items=1 - Storybook is the industry standard workshop for building, documenting, and testi
- koala73/worldmonitor [skill,mcp-server] *90467* ['product-stars'] items=2 - Real-time global intelligence dashboard. AI-powered news aggregation, geopolitic
- bytedance/deer-flow [skill] *85233*  items=1 - An open-source long-horizon SuperAgent harness that researches, codes, and creat
- career-ops-hq/career-ops [plugin] *81792*  items=1 - Open-source AI job search agent and job finder: scan job boards, score each job 
- ruvnet/ruflo [marketplace,mcp-server] *81450*  items=3 - 🌊 The original agent harness. Deploy intelligent multi-player swarms, coordinate
- netdata/netdata [mcp-server] *81361*  items=1 - Real-time infrastructure monitoring with metrics, logs, alerts, and ML-based ano
- shareAI-lab/learn-claude-code [collection] *80235*  items=1 - A really interesting analysis of how coding agents like Claude Code are designed
- OpenMontageInc/OpenMontage [skill] *79488*  items=1 - World's first open-source, agentic video production system. 12 production pipeli
- headroomlabs-ai/headroom [marketplace] *79326*  items=1 - Compress tool outputs, logs, files, and RAG chunks before they reach the LLM. 20
- ComposioHQ/awesome-claude-skills [skill] *79233*  items=1 - A curated list of awesome Claude Skills, resources, and tools for customizing Cl
- rohitg00/ai-engineering-from-scratch [skill] *78352* ['product-stars'] items=1 - Learn AI Engineering! Learn it. Build it. Ship it for others.
- hugohe3/ppt-master [marketplace] *75717* ['product-stars'] items=1 - AI turns documents or topics into real, native PowerPoint decks—with native shap
- usestrix/strix [skill] *74896* ['product-stars'] items=1 - Open-source AI penetration testing tool to find and fix your app’s vulnerabiliti
- thedaviddias/Front-End-Checklist [marketplace,mcp-server] *74703* ['product-stars'] items=2 - 🗂 The essential checklist for modern web development, for humans and AI agents
- tw93/Mole [marketplace] *74569* ['product-stars'] items=1 - 🐹 Open-source Mac and PC cleaner. Keep your machine clean, light, and running li

## Top 30 by stars: watch
- f/prompts.chat [marketplace] *176857* ['product-stars'] items=1 - f.k.a. Awesome ChatGPT Prompts. Share, discover, and collect prompts from the co
- opendatalab/MinerU [skill] *83468* ['product-stars'] items=1 - Transforms complex documents like PDFs and Office docs into LLM-ready markdown/J
- code-yeongyu/oh-my-openagent [skill] *70829* ['product-stars'] items=1 - OmO: Just type "mass ulw" keyword with your prompt. Now you are the master of gr
- Imbad0202/academic-research-skills [marketplace] *56386*  items=1 - Academic Research Skills for Claude Code: research → write → review → revise → f
- bmad-code-org/BMAD-METHOD [skill] *55242* ['product-stars'] items=1 - Breakthrough Method for Agile Ai Driven Development
- tldraw/tldraw [mcp-server] *51454*  items=1 - Draw and visually collaborate with your agents on tldraw's canvas.
- metabase/metabase [mcp-server] *50270*  items=1 - Lets AI clients search, explore, query, and visualize data in a Metabase instanc
- abhigyanpatwari/GitNexus [marketplace] *48410* ['product-stars'] items=1 - GitNexus: The Zero-Server Code Intelligence Engine
- serverless/serverless [skill] *46931* ['product-stars'] items=1 - ⚡ Serverless Framework – Effortlessly build apps that auto-scale, incur zero cos
- PostHog/posthog [mcp-server] *40736*  items=1 - Official PostHog MCP Server for product analytics, feature flags, experiments, a
- openai/codex-plugin-cc [marketplace] *35044*  items=1 - Use Codex from Claude Code to review code or delegate tasks.
- zarazhangrui/frontend-slides [marketplace] *32190*  items=1 - Create beautiful slides on the web using a coding agent's frontend skills
- oraios/serena [mcp-server] *31277*  items=1 - A powerful toolkit for coding, providing semantic retrieval and editing capabili
- hypit-ai/hypit [skill] *29190* ['product-stars'] items=1 - Clone any viral video with AI agents. Not just a script, the whole workflow: swa
- openai/skills [skill] *28674*  items=1 - Skills Catalog for Codex
- vercel/ai [skill] *27860* ['product-stars'] items=1 - The AI Toolkit for TypeScript. From the creators of Next.js, the AI SDK is a fre
- clockworklabs/SpacetimeDB [marketplace] *25538* ['product-stars'] items=1 - Development at the speed of light
- nocobase/nocobase [skill] *24892*  items=1 - NocoBase is the open-source platform for building, running, and evolving busines
- different-ai/openwork [mcp-server] *24479*  items=1 - Your OpenWork org's skills, plugins, workflows, and connections through one OAut
- getpaseo/paseo [skill] *23766*  items=1 - Orchestrate multiple coding agents from desktop and mobile
- HKUDS/AI-Trader [skill] *23226* ['product-stars'] items=1 - "AI-Trader: 100% Fully-Automated Agent-Native Trading"
- screenpipe/screenpipe [mcp-server] *22343*  items=1 - Search your local screen recordings, audio transcripts, and computer activity fr
- longbridge/gpui-kit [skill] *20298* ['product-stars'] items=1 - Rust GUI components for building fantastic cross-platform desktop application by
- greensock/gsap-skills [marketplace] *18259*  items=1 - Official AI skills for GSAP. These skills teach AI coding agents how to correctl
- Canner/WrenAI [skill] *18136* ['product-stars'] items=1 - GenBI (Generative BI) for AI agents, an open-source, governed text-to-SQL throug
- architecture-decision-record/architecture-decision-record [skill] *17446* ['product-stars'] items=1 - Architecture decision record (ADR) examples for software planning, IT leadership
- composio-community/awesome-codex-skills [skill] *17284*  items=1 - A curated list of practical Codex skills for automating workflows across the Cod
- millionco/react-doctor [skill] *15117* ['product-stars'] items=1 - Your agent writes bad React. This catches it
- kyegomez/OpenMythos [plugin] *14922*  items=1 - A theoretical reconstruction of the Claude Mythos architecture, built from first
- NevaMind-AI/memU [skill] *14613* ['product-stars'] items=1 - Personal memory across agents

## Random sample of 20 watch repos (of 493)
- H-mmer/pentest-agents [skill] *1075*  items=1 - Bug bounty agent framework for Claude Code, Codex, Gemini, Cursor, Windsurf, Cop reasons=['fails: pushed<=90d (151)'] src=['topic']
- nxtg-ai/forge-orchestrator [mcp-server] *166*  items=1 - Forge orchestrator MCP server for Claude Code (alpha). Codex/Gemini runners are  reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- architecture-decision-record/architecture-decision-record [skill] *17446* ['product-stars'] items=1 - Architecture decision record (ADR) examples for software planning, IT leadership reasons=['fails: license (NOASSERTION)'] src=['topic']
- metabase/metabase [mcp-server] *50270*  items=1 - Lets AI clients search, explore, query, and visualize data in a Metabase instanc reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- taazkareem/clickup-mcp-server [mcp-server] *53*  items=1 - Premium AI integration. Tasks, lists, docs, folders, time. 50+ tools. Instant se reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- clarilayer/clarilayer [mcp-server] *71*  items=1 - Individual-analyst context layer: recall, remember, and reconcile your data and  reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- 001TMF/harness-forge [marketplace] *80*  items=1 - Turn Claude Code into its own Meta-Harness — a skill that evolves the scaffoldin reasons=['fails: pushed<=90d (149)'] src=['topic']
- spences10/svelte-skills-kit [marketplace] *95*  items=1 - 🦀 Claude Code Skills for Svelte and SvelteKit reasons=['fails: license (None)', 'no corroborating signal'] src=['topic']
- melonelish/context-engine [mcp-server] *322*  items=1 - Compress logs, retrieval chunks, and code context into structured LLM-ready sign reasons=['fails: pushed<=90d (122)', 'no corroborating signal'] src=['mcp-registry']
- gilbarbara/react-joyride [skill] *7893* ['product-stars'] items=1 - Create guided tours in your apps reasons=['fails: pushed<=90d (124)'] src=['topic']
- santimattius/structured-coroutines [plugin] *166*  items=1 - The definitive toolkit for enforcing safety, predictability, and efficiency in K reasons=['no corroborating signal'] src=['code']
- smnandre/symfony-ux-skills [plugin] *185*  items=1 - Symfony UX skills for Claude, Gemini, Codex, ... Live Component, Twig Component, reasons=['fails: pushed<=90d (149)'] src=['code']
- firish/webfetch [mcp-server] *60*  items=1 - Self-hosted web search for LLM agents: search -> fetch -> rank pipeline with sem reasons=['fails: pushed<=90d (111)'] src=['mcp-registry']
- VirtusLab/scala-skill [marketplace] *80*  items=1 - Claude Code & Codex Scala Skills: generate direct-style applications with use-ca reasons=['fails: license (None)'] src=['topic']
- tractorjuice/arc-kit [marketplace] *2276*  items=1 - The Enterprise Architecture Governance Harness — strategy, architecture, deliver reasons=['fails: license (NOASSERTION)'] src=['topic']
- hustcc/mcp-mermaid [mcp-server] *649*  items=1 - Generate dynamic Mermaid diagrams and charts with AI assistance. Customize style reasons=['fails: pushed<=90d (179)'] src=['mcp-registry']
- geeklee/srt-whiteboard-animation [skill] *5523*  items=1 - 将 SRT 字幕做成暖米黄纸张底的流式笔迹白板手绘动画 skill：mask 分区遮罩编排 + stream 连续笔迹（ink→color）。 reasons=['fails: pushed<=90d (106)'] src=['topic']
- dreamrec/LivePilot [mcp-server] *96*  items=1 - 317-tool agentic MCP production system for Ableton Live 12 — device atlas, sampl reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- popmechanic/VibesOS [plugin] *135*  items=1 - A GUI for Claude Code that makes it easy to vibe code simple, un-hackable apps reasons=['fails: pushed<=90d (106)'] src=['code']
- alchaincyf/sun-yuchen-perspective [skill] *255*  items=1 - 孙宇晨.skill — 注意力收割操作系统 | Justin Sun Perspective Skill for Claude Code | 由女娲.skill reasons=['fails: license (None)'] src=['topic']

## Errors
- graphql: HTTP 504 after 4 retries <!DOCTYPE html>
<!--

Hello future GitHubber! I bet you're here to remove tho
- broad verify subfolders chunk 2: no data None

## Rate limit
- REST calls this run (uncached): {"core": 18, "search": 42}; last seen: {"core": {"remaining": "4982", "limit": "5000"}, "search": {"remaining": "27", "limit": "30"}}
- GraphQL: 181 calls, cost 113, remaining 4800/5000, stopped early: False
- REST stopped early: False
- repos lacking metadata: 4067; enriched this run: 34674