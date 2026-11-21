# Catalog report 2026-11-21
Mode: **token**; run time 1295s
Repos (deduped): 3376; flat entries before dedup: 25918

## Tier x type BEFORE dedup (flat entries)
- new/mcp-server: 15839
- watch/mcp-server: 2625
- listed/plugin: 2283
- verified/mcp-server: 1357
- verified/skill: 501
- watch/skill: 464
- watch/marketplace: 421
- official/plugin: 375
- verified/marketplace: 360
- watch/plugin: 282
- watch/agent: 210
- verified/plugin: 206
- verified/collection: 194
- new/marketplace: 170
- new/skill: 167
- anthropic/plugin: 150
- new/plugin: 141
- verified/agent: 56
- new/agent: 38
- anthropic/marketplace: 15
- anthropic/collection: 4
- watch/collection: 3
- anthropic/agent: 1

## Tier AFTER dedup (repos)
- verified: 1950
- watch: 499
- new: 361
- official: 256
- listed: 162
- anthropic: 148

## Type AFTER dedup (items)
- mcp-server: 1838
- plugin: 1226
- skill: 799
- marketplace: 517
- collection: 121
- agent: 60

## Primary type AFTER dedup (repos)
- mcp-server: 1208
- plugin: 838
- skill: 740
- marketplace: 457
- collection: 86
- agent: 47

## Repos by discovery source family
- mcp-registry: 1369
- topic: 1347
- anthropic: 461
- code: 214
- anthropic-org: 188
- curated: 149
- marketplace-expansion: 36

## Flags (all tiers)
- product-stars: 236
- star-spike: 17
- star-anomaly: 1

## star-anomaly by tier
- new: 1

## Metadata gaps
- repos without metadata: 154
- reasons: {'unfetched': 154}

## MCP-only repos excluded: 56
- n8n-io/n8n *211562* ['automation', 'ipaas', 'n8n', 'workflow', 'typescript'] - Fair-code workflow automation platform with native AI capabilities. Combine visu
- assafelovic/gpt-researcher *30806* ['ai', 'python', 'agent', 'automation', 'research'] - An autonomous agent that conducts deep research on any data using any LLM provid
- rocketride-org/rocketride-server *20007* ['cpp', 'mcp', 'vscode-extension', 'agent-framework', 'agent-harness'] - High-performance AI pipeline engine with a C++ core and 50+ Python-extensible no
- mrexodia/ida-pro-mcp *13538* ['ida-plugin', 'ida-pro', 'mcp', 'mcp-server', 'modelcontextprotocol'] - AI-powered reverse engineering assistant that bridges IDA Pro with language mode
- mcp-use/mcp-use *11001* ['mcp', 'model-context-protocol', 'apps-sdk', 'mcp-apps', 'mcp-inspector'] - The fullstack MCP framework to develop MCP Apps for ChatGPT / Claude & MCP Serve
- Agents365-ai/drawio-skill *10885* ['drawio', 'diagram', 'agent-skills', 'architecture-diagram', 'claude-code'] - Agent skill that turns natural language, code, Terraform/K8s, SQL, OpenAPI, Asyn
- qybaihe/bla *6333* ['adversarial-ai', 'claude-code', 'cursor', 'electron-security', 'llm-security'] - 🛡️ BLA (bla-agents / Blind LLM Agents) — Open-source Blue Defense MCP server & C
- Marker-Inc-Korea/AutoRAG *6095* ['document-parser', 'embeddings', 'llm', 'open-source', 'rag'] - Your Personal Librarian Agent. Ask anything on your computer, organize files, re
- jordan-gibbs/hyperresearch *4953* ['agents', 'agentskills', 'claude-code', 'deep-research', 'deep-research-agent'] - Convert Claude Code or Codex into the most intelligent Deep Research Agent. Coll
- stickerdaniel/linkedin-mcp-server *4267* ['linkedin', 'linkedin-scraper', 'mcp', 'mcp-server', 'linkedin-mcp'] - Open-source MCP server for LinkedIn. Give Claude and any MCP-compatible AI agent
- taylorwilsdon/google_workspace_mcp *3556* ['ai', 'gmail', 'google-calendar', 'google-workspace', 'llm'] - Control Gmail, Google Calendar, Docs, Sheets, Slides, Chat, Forms, Tasks, Search
- duty1g/x64dbg-mcp-server *2850* ['ai-agents', 'ai-debugging', 'binary-analysis', 'claude', 'claude-code'] - x64dbg-MCP Server is a native MCP (Model Context Protocol) plugin for x64dbg tha
- alpic-ai/skybridge *2199* ['agent', 'ai', 'apps-sdk', 'chatgpt', 'claude'] - Skybridge is a full-stack TypeScript framework for MCP Apps and ChatGPT Apps. Ty
- study8677/repobrain *1362* ['claude-code', 'codex-cli', 'developer-tools', 'mcp-server', 'windsurf'] - 🧠 RepoBrain (formerly Antigravity) — Give your repo a brain. ChatGPT for your co
- dansugc/reverse-engineer-marketing *1010* ['ad-library', 'ai-agents', 'claude-code', 'codex', 'competitor-analysis'] - Paste a link, get the whole marketing machine behind it: paid ads, organic socia

## Degradation
- registry complete: True (694 pages, 69390 entries)
- MCP servers merged from the previous catalog (not re-fetched): 0
- GraphQL 403s: 0 (secondary rate limit: 0); retries: 9; queries that gave up: 1
- HTTP retries (5xx/network): 0
- repos with stale metadata reused from the previous catalog (meta_stale): 0

## MCP Registry
- {"pages": 694, "fetched": 69390, "kept": 68276, "dropped": 1114, "bad": 0, "complete": true, "excluded_remote_only": 25050, "excluded_low_signal": 23405, "fallback_merged": 0, "records": 1369, "attached_existing": 167, "new_repo": 1202, "remote_only": 0, "tiers": {"official": 27, "listed": 20, "verified": 983, "new": 141, "watch": 198}}

## Top 20 by trend_7d
- morluto/rea +13673 (2.98%) []
- GoogleChrome/modern-web-guidance +12459 (107.68%) ['star-spike', 'product-stars']
- elementalsouls/Claude-BugHunter +8834 (153.29%) ['star-spike']
- obra/superpowers +5653 (1.78%) []
- debpalash/VoiceStudio +5432 (4.93%) ['product-stars']
- affaan-m/ECC +5403 (1.79%) []
- DietrichGebert/ponytail +5302 (2.78%) []
- mattpocock/skills +5180 (1.6%) []
- pbakaus/impeccable +4421 (4.03%) []
- cloudflare/security-audit-skill +4327 (6.01%) []
- nexu-io/openmotion +4271 (43.32%) ['star-spike']
- Leonxlnx/taste-skill +4266 (3.7%) []
- Nutlope/hallmark +4099 (7.51%) []
- alibaba/open-code-review +4045 (7.96%) []
- mvanhorn/last30days-skill +3967 (5.87%) []
- anthropics/skills +3920 (2.02%) []
- firecrawl/firecrawl +3852 (1.91%) ['product-stars']
- ag-ui-protocol/ag-ui +3674 (21.4%) ['product-stars']
- heydamir/unslop +3606 (22.9%) []
- heygen-com/hyperframes +3518 (4.19%) []

## Code search vs topic search
- repos found by code search: 214
- also in topic search: 11
- code-only: 189; tiers: {'anthropic': 1, 'verified': 97, 'watch': 57, 'new': 34}

## Top 30 by stars: anthropic
- anthropics/skills [marketplace,collection] *198131*  items=2 - Anthropic example skills
- anthropics/claude-code [marketplace,agent] *156486*  items=2 - Anthropic's Claude Code plugins, installed from the claude-plugins-official repo
- anthropics/claude-plugins-official [plugin,marketplace,collection] *47852*  items=15 - Directory of popular Claude Code extensions including development tools, product
- anthropics/financial-services [marketplace] *41423*  items=1 - 
- anthropics/knowledge-work-plugins [marketplace] *36630*  items=1 - 
- anthropics/claude-for-legal [marketplace] *10056*  items=1 - Reference agents, skills, and data connectors for the legal workflows we see mos
- anthropics/claude-code-action [collection] *10030*  items=1 - The official GitHub Action for running Claude Code in CI: mention @claude in iss
- anthropics/claude-code-security-review [collection] *7044*  items=1 - An official AI-powered security-review GitHub Action that uses Claude to analyze
- anthropics/claude-plugins-community [marketplace] *4930*  items=1 - 
- anthropics/commerce-agents [marketplace] *3497*  items=1 - Claude Commerce Agents: the commerce-builder plugin for building shopping and me
- anthropics/life-sciences [marketplace] *653*  items=1 - Skills for life sciences research, data analysis, and discovery
- anthropics/k12-teacher-skills [marketplace] *634*  items=1 - Plugin marketplace for K-12 Education and Claude for Teachers.
- anthropics/healthcare [marketplace] *456*  items=1 - Claude for Healthcare — one plugin bundling payer, provider, pharma, and general
- anthropics/oncall-kit [marketplace] *276*  items=1 - 
- anthropics/claude-for-financial-advisors [plugin,marketplace] *164*  items=2 - Ready-to-run workflows for financial advisors in Claude Cowork, drawing live dat
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
- mattpocock/skills [plugin] *329099*  items=2 - Matt Pocock's agent skills for real engineering — grilling, spec/ticket flows, T
- obra/superpowers [plugin,skill] *322959*  items=4 - Superpowers teaches Claude brainstorming, subagent driven development with built
- heygen-com/hyperframes [plugin,mcp-server] *87542*  items=3 - HyperFrames by HeyGen. Write HTML, render video. Compositions, GSAP and runtime 
- ChromeDevTools/chrome-devtools-mcp [plugin,mcp-server] *58573*  items=4 - Control and inspect a live Chrome browser from your coding agent. Record perform
- GoogleChrome/modern-web-guidance [plugin] *24029* ['star-spike', 'product-stars'] items=2 - Keep your coding agent up to date with the latest web best practices
- confident-ai/deepeval [plugin] *19580* ['product-stars'] items=1 - Skills for adding DeepEval evaluations, tracing, datasets, Confident AI reports,
- huggingface/skills [plugin] *11370*  items=2 - Build, train, evaluate, and use open source AI models, datasets, and spaces.
- wonderwhy-er/DesktopCommanderMCP [plugin,mcp-server] *10379*  items=4 - MCP server for terminal commands, process management, and file operations across
- Eigenwise/atomic-agents [plugin,marketplace] *6343* ['product-stars'] items=3 - Comprehensive development workflow for building AI agents with the Atomic Agents
- exa-labs/exa-mcp-server [plugin,mcp-server] *5249*  items=3 - Exa AI web search, deep research, and content extraction. Provides MCP tools and
- expo/skills [plugin] *4198*  items=2 - Official Expo skills for building, deploying, upgrading, and debugging React Nat
- NVIDIA/skills [plugin] *4099*  items=2 - Find the right NVIDIA skill for GPU acceleration, CUDA, AI agents, data loading,
- aws/agent-toolkit-for-aws [plugin] *3530*  items=8 - Build, deploy, and operate AI agents on AWS. Skills for scaffolding agents with 
- cloudflare/skills [plugin] *3416*  items=2 - Skills for the Cloudflare developer platform: Workers, Durable Objects, Agents S
- modelcontextprotocol/ext-apps [plugin] *3129*  items=3 - Skills for creating MCP Apps with the MCP Apps SDK
- figma/mcp-server-guide [plugin,mcp-server] *2217*  items=4 - Figma design platform integration. Access design files, extract component inform
- stripe/ai [plugin,mcp-server] *2076*  items=3 - Stripe development plugin for Claude
- MicrosoftDocs/mcp [plugin,mcp-server] *2002*  items=3 - Access official Microsoft documentation, API references, and code samples for Az
- EpicGames/unreal-engine-skills-for-claude-code-plugin [plugin] *2002*  items=2 - Control Unreal Editor directly from Claude Code via MCP. Hundreds of tools expos
- microsoft/azure-skills [plugin] *1662*  items=2 - Transform Claude into an Azure expert. This plugin integrates the Azure MCP serv
- atlassian/atlassian-mcp-server [plugin,mcp-server] *1184*  items=3 - Connect to Atlassian products including Jira and Confluence. Search and create i
- forcedotcom/sf-skills [plugin,skill] *1179*  items=2 - Build Salesforce apps and agents using these core building blocks: metadata, Ape
- superdesigndev/superdesign-skill [plugin,skill] *1037*  items=2 - Design or redesign frontend UI and marketing graphics on the Superdesign infinit
- awslabs/agent-plugins [plugin] *948*  items=10 - Guide developers through adding maps, places search, geocoding, routing, and oth
- Unity-Technologies/unity-agent-plugin [plugin] *661*  items=2 - Unity's official plugin for Claude Code, with curated skills for game developmen
- Shopify/Shopify-AI-Toolkit [plugin] *652*  items=2 - Shopify's AI Toolkit provides 18 development skills for building on the Shopify 
- duckdb/duckdb-skills [plugin] *618*  items=2 - DuckDB-powered skills for Claude Code: read any data file, attach and query Duck
- gitroomhq/postiz-agent [plugin] *583*  items=3 - Social media automation CLI for scheduling posts, managing integrations, uploadi
- ClickHouse/agent-skills [plugin] *573*  items=2 - 28 best practice rules for ClickHouse schema design, query optimization, and dat
- TheQtCompanyRnD/agent-skills [plugin] *555*  items=3 - Agentic engineering skills for Qt software development — Qt C++/QML code review,

## Top 30 by stars: listed
- DietrichGebert/ponytail [plugin] *195747*  items=2 - Lazy senior dev mode. Forces the simplest, shortest solution that actually works
- JuliusBrussee/caveman [plugin,skill] *121818*  items=2 - Auto-activation works differently per agent: Claude Code uses SessionStart hooks
- thedotmack/claude-mem [plugin,skill] *118697*  items=3 - Persistent memory system for Claude Code - seamlessly preserve context across se
- pbakaus/impeccable [plugin] *114150*  items=1 - Great design prompts require design vocabulary. Most people don't have it. You c
- Egonex-AI/Understand-Anything [plugin,skill] *93464*  items=2 - Understand Anything is a Claude Code plugin that analyzes your project with a mu
- mvanhorn/last30days-skill [plugin] *71548*  items=1 - last-30-days is a Claude Code skill that searches the web and delivers a structu
- mem0ai/mem0 [plugin] *69291* ['product-stars'] items=1 - Connect Mem0 to Claude to give your agent persistent memory across sessions. Cla
- coreyhaines31/marketingskills [plugin,skill] *61762*  items=3 - coreyhaines31
- DayuanJiang/next-ai-draw-io [plugin,mcp-server] *37098*  items=2 - AI-powered Draw.io diagram generation with real-time browser preview. Create flo
- mksglu/context-mode [plugin] *34345*  items=1 - MCP is the protocol for tool access. We're the virtualization layer for context.
- AgriciDaniel/claude-seo [plugin] *31214*  items=1 - Comprehensive SEO analysis plugin for Claude Code. Performs full site audits wit
- alirezarezvani/claude-skills [plugin,skill] *30205*  items=2 - Playwright Pro turns your AI coding agent into a senior test automation engineer
- jarrodwatts/claude-hud [plugin,collection] *29278*  items=2 - Real-time statusline HUD for Claude Code - context health, tool activity, agent 
- promptfoo/promptfoo [plugin] *27506*  items=1 - Teaches AI coding agents to create and maintain promptfoo eval suites. Encodes b
- browser-use/browser-harness [plugin] *19177*  items=1 - Open-source browser agent driven via CDP — direct browser control, 79K stars, YC
- Jeffallan/claude-skills [plugin,skill,collection] *12473*  items=3 - 66 specialized skills for full-stack development: 12 language experts (Python, T
- nicobailon/visual-explainer [plugin,collection] *11206*  items=3 - An agent skill that turns complex terminal output into styled HTML pages you act
- revfactory/harness [plugin,agent] *9386*  items=3 - Harness leverages Claude Code's agent team system to decompose complex tasks int
- Eventual-Inc/Daft [plugin] *5856* ['product-stars'] items=1 - Skills for working with Daft, a high-performance data engine for AI and multimod
- clidey/whodb [plugin] *5065* ['product-stars'] items=1 - Database management tools for Claude Code. Query databases, explore schemas, ana
- nyldn/claude-octopus [plugin] *4483*  items=2 - Multi-LLM orchestration for Claude Code and Cowork. Coordinates 8 AI providers (
- giancarloerra/SocratiCode [plugin,mcp-server] *3382*  items=2 - Enterprise-grade (40m+ lines) codebase intelligence in a zero-setup, private and
- Chachamaru127/claude-code-harness [plugin,marketplace,agent] *3216*  items=5 - Autonomous Plan → Work → Review cycle for Claude Code. Go-native engine with 25×
- fabio-rovai/open-ontologies [plugin] *2938*  items=1 - AI-native ontology engineering with 39 MCP tools backed by an in-memory Oxigraph
- AgriciDaniel/claude-blog [plugin] *2830*  items=1 - AI-powered blog creation and optimization skill with 20 commands, 4 specialized 
- nizos/tdd-guard [plugin,collection] *2384*  items=2 - Enforces Test-Driven Development by intercepting file operations in Claude Code.
- AminForou/mcp-gsc [plugin] *2251*  items=1 - Connect Google Search Console to Claude Code. Query rankings, inspect URLs, audi
- kenryu42/cc-safety-net [plugin,collection] *2083*  items=3 - Block destructive git and filesystem commands before execution
- severity1/claude-code-prompt-improver [plugin] *1973*  items=1 - Intelligent prompt optimization using skill-based architecture. Enriches vague p
- aklofas/kicad-happy [plugin] *1718*  items=1 - KiCad electronics design skills. Analyze schematics, review PCB layouts, downloa

## Top 30 by stars: verified
- morluto/rea [marketplace,mcp-server] *471731*  items=2 - Reverse engineer anything with agents, from app behavior down to native binaries
- affaan-m/ECC [collection] *307945*  items=1 - Top-notch, well-written resources covering "just about everything" from core eng
- firecrawl/firecrawl [skill] *205471* ['product-stars'] items=1 - Supercharge your AI agents with data from the web and beyond. Building the libra
- nextlevelbuilder/ui-ux-pro-max-skill [marketplace] *152222*  items=1 - An AI skill that provides design intelligence for building professional UI/UX ac
- vercel/next.js [marketplace] *143627* ['product-stars'] items=1 - The React Framework
- garrytan/gstack [agent] *142230*  items=1 - Garry Tan's (Y Combinator) Claude Code setup and "open source software factory" 
- browser-use/browser-use [mcp-server] *121633*  items=1 - Browser agents and stealth cloud browsers for AI: run web tasks, fill forms, ext
- addyosmani/agent-skills [marketplace] *119429*  items=1 - Production-grade engineering skills for AI coding agents.
- Leonxlnx/taste-skill [marketplace] *119415*  items=1 - Agent skills that give coding agents taste: art direction, reference images and 
- debpalash/VoiceStudio [skill] *115536* ['product-stars'] items=1 - VoiceStudio is the open-source, fully-local ElevenLabs alternative — voice cloni
- paperclipai/paperclip [skill,mcp-server] *115533*  items=2 - The open-source app everyone uses to manage agents at work
- nexu-io/open-design [marketplace] *108724*  items=1 - The 1st Collaborative AI Design Agent Workspace. Local-first and open source. Cr
- ruvnet/RuView [marketplace] *104705*  items=1 - π RuView turns commodity WiFi signals into real-time spatial intelligence, vital
- D4Vinci/Scrapling [mcp-server] *104698*  items=1 - Web scraping with stealth HTTP, real browsers, and Cloudflare bypass. CSS select
- tt-a1i/archify [skill,collection] *98394*  items=2 - An Agent Skill for Claude Code that generates interactive architecture, workflow
- storybookjs/storybook [marketplace] *91672* ['product-stars'] items=1 - Storybook is the industry standard workshop for building, documenting, and testi
- koala73/worldmonitor [skill,mcp-server] *91002* ['product-stars'] items=2 - Real-time global intelligence dashboard. AI-powered news aggregation, geopolitic
- career-ops-hq/career-ops [plugin] *83976*  items=1 - Open-source AI job search agent and job finder: scan job boards, score each job 
- ruvnet/ruflo [marketplace,mcp-server] *82173*  items=3 - 🌊 The original agent harness. Deploy intelligent multi-player swarms, coordinate
- OpenMontageInc/OpenMontage [skill] *81982*  items=1 - World's first open-source, agentic video production system. 12 production pipeli
- netdata/netdata [mcp-server] *81562*  items=1 - Real-time infrastructure monitoring with metrics, logs, alerts, and ML-based ano
- shareAI-lab/learn-claude-code [collection] *80687*  items=1 - A really interesting analysis of how coding agents like Claude Code are designed
- headroomlabs-ai/headroom [marketplace] *80224*  items=1 - Compress tool outputs, logs, files, and RAG chunks before they reach the LLM. 20
- ComposioHQ/awesome-claude-skills [skill] *79965*  items=1 - A curated list of awesome Claude Skills, resources, and tools for customizing Cl
- rohitg00/ai-engineering-from-scratch [skill] *79704* ['product-stars'] items=1 - Learn AI Engineering! Learn it. Build it. Ship it for others.
- hugohe3/ppt-master [marketplace] *78915* ['product-stars'] items=1 - AI turns documents or topics into real, native PowerPoint decks—with native shap
- usestrix/strix [skill] *76842* ['product-stars'] items=1 - Open-source AI penetration testing tool to find and fix your app’s vulnerabiliti
- cloudflare/security-audit-skill [skill] *76371*  items=1 - A coding-agent skill for multi-phase security audits with independently verified
- tw93/Mole [marketplace] *75734* ['product-stars'] items=1 - 🐹 Open-source Mac and PC cleaner. Keep your machine clean, light, and running li
- thedaviddias/Front-End-Checklist [marketplace,mcp-server] *74787* ['product-stars'] items=2 - 🗂 The essential checklist for modern web development, for humans and AI agents

## Top 30 by stars: watch
- f/prompts.chat [marketplace] *178081* ['product-stars'] items=1 - f.k.a. Awesome ChatGPT Prompts. Share, discover, and collect prompts from the co
- opendatalab/MinerU [skill] *84076* ['product-stars'] items=1 - Transforms complex documents like PDFs and Office docs into LLM-ready markdown/J
- code-yeongyu/oh-my-openagent [skill] *71034* ['product-stars'] items=1 - OmO: Just type "mass ulw" keyword with your prompt. Now you are the master of gr
- Imbad0202/academic-research-skills [marketplace] *57904*  items=1 - Academic Research Skills for Claude Code: research → write → review → revise → f
- bmad-code-org/BMAD-METHOD [skill] *55581* ['product-stars'] items=1 - Breakthrough Method for Agile Ai Driven Development
- tldraw/tldraw [mcp-server] *51517*  items=1 - Draw and visually collaborate with your agents on tldraw's canvas.
- metabase/metabase [mcp-server] *50457*  items=1 - Lets AI clients search, explore, query, and visualize data in a Metabase instanc
- abhigyanpatwari/GitNexus [marketplace] *48701* ['product-stars'] items=1 - GitNexus: The Zero-Server Code Intelligence Engine
- serverless/serverless [skill] *46932* ['product-stars'] items=1 - ⚡ Serverless Framework – Effortlessly build apps that auto-scale, incur zero cos
- PostHog/posthog [mcp-server] *40996*  items=1 - Official PostHog MCP Server for product analytics, feature flags, experiments, a
- phaserjs/phaser [skill] *40753* ['product-stars'] items=1 - Phaser is a fun, free and fast 2D game framework for making HTML5 games for desk
- openai/codex-plugin-cc [marketplace] *35315*  items=1 - Use Codex from Claude Code to review code or delegate tasks.
- zarazhangrui/frontend-slides [marketplace] *32709*  items=1 - Create beautiful slides on the web using a coding agent's frontend skills
- oraios/serena [mcp-server] *31560*  items=1 - A powerful toolkit for coding, providing semantic retrieval and editing capabili
- hypit-ai/hypit [skill] *30893* ['product-stars'] items=1 - Clone any viral video with AI agents. Not just a script, the whole workflow: swa
- openai/skills [skill] *28859*  items=1 - Skills Catalog for Codex
- vercel/ai [skill] *28117* ['product-stars'] items=1 - The AI Toolkit for TypeScript. From the creators of Next.js, the AI SDK is a fre
- clockworklabs/SpacetimeDB [marketplace] *25571* ['product-stars'] items=1 - Development at the speed of light
- nocobase/nocobase [skill] *24974*  items=1 - NocoBase is the open-source platform for building, running, and evolving busines
- different-ai/openwork [mcp-server] *24573*  items=1 - Your OpenWork org's skills, plugins, workflows, and connections through one OAut
- getpaseo/paseo [skill] *24556*  items=1 - Orchestrate multiple coding agents from desktop and mobile
- HKUDS/AI-Trader [skill] *23340* ['product-stars'] items=1 - "AI-Trader: 100% Fully-Automated Agent-Native Trading"
- screenpipe/screenpipe [mcp-server] *22490*  items=1 - Search your local screen recordings, audio transcripts, and computer activity fr
- longbridge/gpui-kit [skill] *21111* ['product-stars'] items=1 - Rust GUI components for building fantastic cross-platform desktop application by
- greensock/gsap-skills [marketplace] *18833*  items=1 - Official AI skills for GSAP. These skills teach AI coding agents how to correctl
- windmill-labs/windmill [mcp-server] *18663*  items=1 - Run Windmill scripts and flows and manage jobs, schedules, resources and variabl
- Canner/WrenAI [skill] *18354* ['product-stars'] items=1 - GenBI (Generative BI) for AI agents, an open-source, governed text-to-SQL throug
- architecture-decision-record/architecture-decision-record [skill] *17498* ['product-stars'] items=1 - Architecture decision record (ADR) examples for software planning, IT leadership
- composio-community/awesome-codex-skills [skill] *17376*  items=1 - A curated list of practical Codex skills for automating workflows across the Cod
- millionco/react-doctor [skill] *15175* ['product-stars'] items=1 - Your agent writes bad React. This catches it

## Random sample of 20 watch repos (of 499)
- dtormoen/tsk-tsk [marketplace] *172*  items=1 - Keeping your agents out of trouble with sandboxed coding agent automation reasons=['fails: pushed<=90d (114)'] src=['topic']
- melonelish/context-engine [mcp-server] *324*  items=1 - Compress logs, retrieval chunks, and code context into structured LLM-ready sign reasons=['fails: pushed<=90d (132)', 'no corroborating signal'] src=['mcp-registry']
- Arize-ai/phoenix [marketplace] *12366* ['product-stars'] items=1 - AI Observability & Evaluation reasons=['fails: license (NOASSERTION)'] src=['topic']
- marcimastro98/Xenon [mcp-server] *124*  items=1 - Build widgets for the Xenon dashboard: SDK reference, install, runtime errors, t reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- sfrangulov/minirag-mcp [mcp-server] *60*  items=1 - Local-first RAG MCP server: hybrid search over a folder of your own documents reasons=['no corroborating signal'] src=['mcp-registry']
- bromoket/x64dbg_mcp [mcp-server] *141*  items=1 - MCP server for x64dbg debugger - 23 mega-tools for AI-powered reverse engineerin reasons=['fails: pushed<=90d (165)'] src=['mcp-registry']
- RedPlanetHQ/core [marketplace] *2027*  items=1 - Your Personal AI OS reasons=['fails: license (NOASSERTION)'] src=['topic']
- vanillaflava/llm-wiki-skills [skill] *73*  items=1 - Turn your markdown vault into a compounding knowledge wiki (Karpathy inspired).  reasons=['fails: pushed<=90d (132)'] src=['topic']
- manusa/podman-mcp-server [mcp-server] *87*  items=1 - A Model Context Protocol (MCP) server for container runtimes (Podman and Docker) reasons=['fails: pushed<=90d (92)'] src=['mcp-registry']
- remotion-dev/skills [skill] *7676*  items=1 - Agent Skills reasons=['fails: license (None)'] src=['topic']
- agent-data/job-search [plugin] *58*  items=1 - Turn any coding agent into a job search assistant. reasons=['fails: pushed<=90d (93)'] src=['code']
- brunoborges/jdb-agentic-debugger [plugin] *69*  items=1 - Agent Skill for debugging Java applications in real time using JDB (Java Debugge reasons=['fails: pushed<=90d (94)'] src=['code']
- estruyf/vscode-demo-time [mcp-server] *250*  items=1 - Enables AI assistants to interact with Demo Time and helps build presentations a reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- devallibus/shiplog [marketplace] *56*  items=1 - SUPERCHARGE AI-assisted development by using Git. Cross-model review gates, evid reasons=['no corroborating signal'] src=['topic']
- asgard-ai-platform/skills [skill] *249*  items=1 - 301 open-source coding agent skills across 22 domains — methodology, judgment &  reasons=['fails: pushed<=90d (167)'] src=['topic']
- spronta/crawlie [mcp-server] *131*  items=1 - Technical SEO + GEO (AI-search) site audits: hosted crawls, prioritized fixes, r reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- frumu-ai/tandem [mcp-server] *125*  items=1 - Remote MCP server for Tandem docs, install guides, SDKs, workflows, and agent se reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- dengyier/OpenWorkProof [mcp-server] *261*  items=2 - Verifiable agent evidence; opt-in Codex guard and reference SOC alert review. reasons=['no corroborating signal'] src=['mcp-registry']
- jh941213/ADLC-harness [plugin] *125*  items=1 - ADLC Harness — AI SDLC 루프(의도→설계→계획→구현→검증→리뷰→출시→학습)를 Claude Code·Codex·Copilot CL reasons=['fails: license (None)'] src=['code']
- shanraisshan/claude-code-hooks [skill] *572*  items=1 - claude code hooks - adding voice on each hook reasons=['fails: pushed<=90d (169)'] src=['topic']

## Errors
- graphql: HTTP 504 after 4 retries <!DOCTYPE html>
<!--

Hello future GitHubber! I bet you're here to remove tho
- broad verify subfolders chunk 4: no data None

## Rate limit
- REST calls this run (uncached): {"core": 62, "search": 42}; last seen: {"core": {"remaining": "4938", "limit": "5000"}, "search": {"remaining": "29", "limit": "30"}}
- GraphQL: 121 calls, cost 57, remaining 4835/5000, stopped early: False
- REST stopped early: False
- repos lacking metadata: 4190; enriched this run: 37924