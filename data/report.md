# Catalog report 2026-11-19
Mode: **token**; run time 1805s
Repos (deduped): 3378; flat entries before dedup: 25822

## Tier x type BEFORE dedup (flat entries)
- new/mcp-server: 15651
- watch/mcp-server: 2570
- listed/plugin: 2283
- verified/mcp-server: 1347
- verified/skill: 507
- watch/skill: 463
- watch/marketplace: 419
- official/plugin: 375
- verified/marketplace: 365
- verified/plugin: 355
- watch/plugin: 295
- watch/agent: 208
- verified/collection: 195
- new/marketplace: 168
- new/skill: 162
- anthropic/plugin: 150
- new/plugin: 143
- verified/agent: 57
- new/agent: 34
- anthropic/marketplace: 15
- anthropic/collection: 4
- watch/collection: 2
- anthropic/agent: 1

## Tier AFTER dedup (repos)
- verified: 1955
- watch: 500
- new: 357
- official: 256
- listed: 162
- anthropic: 148

## Type AFTER dedup (items)
- mcp-server: 1829
- plugin: 1397
- skill: 804
- marketplace: 523
- collection: 121
- agent: 62

## Primary type AFTER dedup (repos)
- mcp-server: 1202
- plugin: 840
- skill: 745
- marketplace: 456
- collection: 86
- agent: 49

## Repos by discovery source family
- mcp-registry: 1361
- topic: 1349
- anthropic: 461
- code: 227
- anthropic-org: 188
- curated: 149
- marketplace-expansion: 39

## Flags (all tiers)
- product-stars: 238
- star-spike: 19

## star-anomaly by tier
- none: 0

## Metadata gaps
- repos without metadata: 154
- reasons: {'unfetched': 154}

## MCP-only repos excluded: 53
- n8n-io/n8n *211195* ['automation', 'ipaas', 'n8n', 'workflow', 'typescript'] - Fair-code workflow automation platform with native AI capabilities. Combine visu
- assafelovic/gpt-researcher *30776* ['ai', 'python', 'agent', 'automation', 'research'] - An autonomous agent that conducts deep research on any data using any LLM provid
- mrexodia/ida-pro-mcp *13524* ['ida-plugin', 'ida-pro', 'mcp', 'mcp-server', 'modelcontextprotocol'] - AI-powered reverse engineering assistant that bridges IDA Pro with language mode
- mcp-use/mcp-use *10993* ['mcp', 'model-context-protocol', 'apps-sdk', 'mcp-apps', 'mcp-inspector'] - The fullstack MCP framework to develop MCP Apps for ChatGPT / Claude & MCP Serve
- Agents365-ai/drawio-skill *10854* ['drawio', 'diagram', 'agent-skills', 'architecture-diagram', 'claude-code'] - Agent skill that turns natural language, code, Terraform/K8s, SQL, OpenAPI, Asyn
- qybaihe/bla *6154* ['adversarial-ai', 'claude-code', 'cursor', 'electron-security', 'llm-security'] - 🛡️ BLA (bla-agents / Blind LLM Agents) — Open-source Blue Defense MCP server & C
- Marker-Inc-Korea/AutoRAG *6015* ['document-parser', 'embeddings', 'llm', 'open-source', 'rag'] - Your Personal Librarian Agent. Ask anything on your computer, organize files, re
- jordan-gibbs/hyperresearch *4901* ['agents', 'agentskills', 'claude-code', 'deep-research', 'deep-research-agent'] - Convert Claude Code or Codex into the most intelligent Deep Research Agent. Coll
- stickerdaniel/linkedin-mcp-server *4248* ['linkedin', 'linkedin-scraper', 'mcp', 'mcp-server', 'linkedin-mcp'] - Open-source MCP server for LinkedIn. Give Claude and any MCP-compatible AI agent
- taylorwilsdon/google_workspace_mcp *3546* ['ai', 'gmail', 'google-calendar', 'google-workspace', 'llm'] - Control Gmail, Google Calendar, Docs, Sheets, Slides, Chat, Forms, Tasks, Search
- duty1g/x64dbg-mcp-server *2842* ['ai-agents', 'ai-debugging', 'binary-analysis', 'claude', 'claude-code'] - x64dbg-MCP Server is a native MCP (Model Context Protocol) plugin for x64dbg tha
- alpic-ai/skybridge *2198* ['agent', 'ai', 'apps-sdk', 'chatgpt', 'claude'] - Skybridge is a full-stack TypeScript framework for MCP Apps and ChatGPT Apps. Ty
- study8677/repobrain *1363* ['claude-code', 'codex-cli', 'developer-tools', 'mcp-server', 'windsurf'] - 🧠 RepoBrain (formerly Antigravity) — Give your repo a brain. ChatGPT for your co
- dansugc/reverse-engineer-marketing *933* ['ad-library', 'ai-agents', 'claude-code', 'codex', 'competitor-analysis'] - Paste a link, get the whole marketing machine behind it: paid ads, organic socia
- CodeAbra/iai-personal-memory-engine *924* ['claude', 'claude-code', 'local-first', 'mcp', 'mcp-server'] - A cyber brain for your AI. It never forgets a detail, remembers exactly what you

## Degradation
- registry complete: True (673 pages, 67222 entries)
- MCP servers merged from the previous catalog (not re-fetched): 0
- GraphQL 403s: 0 (secondary rate limit: 0); retries: 15; queries that gave up: 1
- HTTP retries (5xx/network): 0
- repos with stale metadata reused from the previous catalog (meta_stale): 0

## MCP Registry
- {"pages": 673, "fetched": 67222, "kept": 66136, "dropped": 1086, "bad": 0, "complete": true, "excluded_remote_only": 24156, "excluded_low_signal": 22412, "fallback_merged": 0, "records": 1361, "attached_existing": 165, "new_repo": 1196, "remote_only": 0, "tiers": {"official": 27, "listed": 20, "verified": 976, "new": 142, "watch": 196}}

## Top 20 by trend_7d
- GoogleChrome/modern-web-guidance +17632 (329.39%) ['star-spike', 'product-stars']
- morluto/rea +15338 (3.38%) []
- elementalsouls/Claude-BugHunter +5981 (108.19%) ['star-spike']
- mattpocock/skills +5386 (1.67%) []
- affaan-m/ECC +5192 (1.72%) []
- debpalash/VoiceStudio +5147 (4.74%) ['product-stars']
- obra/superpowers +5053 (1.6%) []
- cloudflare/security-audit-skill +4944 (7.01%) []
- DietrichGebert/ponytail +4927 (2.6%) []
- Leonxlnx/taste-skill +4831 (4.25%) []
- pbakaus/impeccable +4549 (4.19%) []
- alibaba/open-code-review +4361 (8.75%) []
- Nutlope/hallmark +4099 (7.66%) []
- anthropics/skills +4056 (2.1%) []
- heydamir/unslop +3694 (25.18%) ['star-spike']
- heygen-com/hyperframes +3607 (4.34%) []
- JuneYaooo/rea-video +3605 (50.28%) ['star-spike']
- google/elephant-goldfish-model +3464 (19.52%) []
- lemomo-ai/lemo-opuscar +3441 (22.97%) []
- backnotprop/plannotator +3402 (33.68%) ['star-spike']

## Code search vs topic search
- repos found by code search: 227
- also in topic search: 16
- code-only: 195; tiers: {'anthropic': 1, 'verified': 99, 'watch': 63, 'new': 32}

## Top 30 by stars: anthropic
- anthropics/skills [marketplace,collection] *197323*  items=2 - Anthropic example skills
- anthropics/claude-code [marketplace,agent] *156201*  items=2 - Anthropic's Claude Code plugins, installed from the claude-plugins-official repo
- anthropics/claude-plugins-official [plugin,marketplace,collection] *47678*  items=15 - Directory of popular Claude Code extensions including development tools, product
- anthropics/financial-services [marketplace] *41392*  items=1 - 
- anthropics/knowledge-work-plugins [marketplace] *36538*  items=1 - 
- anthropics/claude-for-legal [marketplace] *10039*  items=1 - Reference agents, skills, and data connectors for the legal workflows we see mos
- anthropics/claude-code-action [collection] *10012*  items=1 - The official GitHub Action for running Claude Code in CI: mention @claude in iss
- anthropics/claude-code-security-review [collection] *7009*  items=1 - An official AI-powered security-review GitHub Action that uses Claude to analyze
- anthropics/claude-plugins-community [marketplace] *4926*  items=1 - 
- anthropics/commerce-agents [marketplace] *3491*  items=1 - Claude Commerce Agents: the commerce-builder plugin for building shopping and me
- anthropics/life-sciences [marketplace] *653*  items=1 - Skills for life sciences research, data analysis, and discovery
- anthropics/k12-teacher-skills [marketplace] *633*  items=1 - Plugin marketplace for K-12 Education and Claude for Teachers.
- anthropics/healthcare [marketplace] *454*  items=1 - Claude for Healthcare — one plugin bundling payer, provider, pharma, and general
- anthropics/oncall-kit [marketplace] *275*  items=1 - 
- anthropics/claude-for-financial-advisors [plugin,marketplace] *159*  items=2 - Ready-to-run workflows for financial advisors in Claude Cowork, drawing live dat
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
- mattpocock/skills [plugin] *327590*  items=2 - Matt Pocock's agent skills for real engineering — grilling, spec/ticket flows, T
- obra/superpowers [plugin,skill] *321444*  items=4 - Superpowers teaches Claude brainstorming, subagent driven development with built
- heygen-com/hyperframes [plugin,mcp-server] *86631*  items=3 - HyperFrames by HeyGen. Write HTML, render video. Compositions, GSAP and runtime 
- ChromeDevTools/chrome-devtools-mcp [plugin,mcp-server] *58248*  items=4 - Control and inspect a live Chrome browser from your coding agent. Record perform
- GoogleChrome/modern-web-guidance [plugin] *22985* ['star-spike', 'product-stars'] items=2 - Keep your coding agent up to date with the latest web best practices
- confident-ai/deepeval [plugin] *19551* ['product-stars'] items=1 - Skills for adding DeepEval evaluations, tracing, datasets, Confident AI reports,
- huggingface/skills [plugin] *11363*  items=2 - Build, train, evaluate, and use open source AI models, datasets, and spaces.
- wonderwhy-er/DesktopCommanderMCP [plugin,mcp-server] *10357*  items=4 - MCP server for terminal commands, process management, and file operations across
- Eigenwise/atomic-agents [plugin,marketplace] *6341* ['product-stars'] items=3 - Comprehensive development workflow for building AI agents with the Atomic Agents
- exa-labs/exa-mcp-server [plugin,mcp-server] *5244*  items=3 - Exa AI web search, deep research, and content extraction. Provides MCP tools and
- expo/skills [plugin] *4189*  items=2 - Official Expo skills for building, deploying, upgrading, and debugging React Nat
- NVIDIA/skills [plugin] *4072*  items=2 - Find the right NVIDIA skill for GPU acceleration, CUDA, AI agents, data loading,
- aws/agent-toolkit-for-aws [plugin] *3527*  items=8 - Build, deploy, and operate AI agents on AWS. Skills for scaffolding agents with 
- cloudflare/skills [plugin] *3398*  items=2 - Skills for the Cloudflare developer platform: Workers, Durable Objects, Agents S
- modelcontextprotocol/ext-apps [plugin] *3119*  items=3 - Skills for creating MCP Apps with the MCP Apps SDK
- figma/mcp-server-guide [plugin,mcp-server] *2211*  items=4 - Figma design platform integration. Access design files, extract component inform
- stripe/ai [plugin,mcp-server] *2072*  items=3 - Stripe development plugin for Claude
- MicrosoftDocs/mcp [plugin,mcp-server] *1999*  items=3 - Access official Microsoft documentation, API references, and code samples for Az
- EpicGames/unreal-engine-skills-for-claude-code-plugin [plugin] *1994*  items=2 - Control Unreal Editor directly from Claude Code via MCP. Hundreds of tools expos
- microsoft/azure-skills [plugin] *1656*  items=2 - Transform Claude into an Azure expert. This plugin integrates the Azure MCP serv
- atlassian/atlassian-mcp-server [plugin,mcp-server] *1177*  items=3 - Connect to Atlassian products including Jira and Confluence. Search and create i
- forcedotcom/sf-skills [plugin,skill] *1171*  items=2 - Build Salesforce apps and agents using these core building blocks: metadata, Ape
- superdesigndev/superdesign-skill [plugin,skill] *1027*  items=2 - Design or redesign frontend UI and marketing graphics on the Superdesign infinit
- awslabs/agent-plugins [plugin] *947*  items=10 - Guide developers through adding maps, places search, geocoding, routing, and oth
- Unity-Technologies/unity-agent-plugin [plugin] *657*  items=2 - Unity's official plugin for Claude Code, with curated skills for game developmen
- Shopify/Shopify-AI-Toolkit [plugin] *650*  items=2 - Shopify's AI Toolkit provides 18 development skills for building on the Shopify 
- duckdb/duckdb-skills [plugin] *618*  items=2 - DuckDB-powered skills for Claude Code: read any data file, attach and query Duck
- gitroomhq/postiz-agent [plugin] *576*  items=3 - Social media automation CLI for scheduling posts, managing integrations, uploadi
- ClickHouse/agent-skills [plugin] *571*  items=2 - 28 best practice rules for ClickHouse schema design, query optimization, and dat
- TheQtCompanyRnD/agent-skills [plugin] *552*  items=3 - Agentic engineering skills for Qt software development — Qt C++/QML code review,

## Top 30 by stars: listed
- DietrichGebert/ponytail [plugin] *194211*  items=2 - Lazy senior dev mode. Forces the simplest, shortest solution that actually works
- JuliusBrussee/caveman [plugin,skill] *121359*  items=2 - Auto-activation works differently per agent: Claude Code uses SessionStart hooks
- thedotmack/claude-mem [plugin,skill] *118283*  items=3 - Persistent memory system for Claude Code - seamlessly preserve context across se
- pbakaus/impeccable [plugin] *113010*  items=1 - Great design prompts require design vocabulary. Most people don't have it. You c
- Egonex-AI/Understand-Anything [plugin,skill] *93201*  items=2 - Understand Anything is a Claude Code plugin that analyzes your project with a mu
- mvanhorn/last30days-skill [plugin] *70208*  items=1 - last-30-days is a Claude Code skill that searches the web and delivers a structu
- mem0ai/mem0 [plugin] *69220* ['product-stars'] items=1 - Connect Mem0 to Claude to give your agent persistent memory across sessions. Cla
- coreyhaines31/marketingskills [plugin,skill] *61306*  items=3 - coreyhaines31
- DayuanJiang/next-ai-draw-io [plugin,mcp-server] *37059*  items=2 - AI-powered Draw.io diagram generation with real-time browser preview. Create flo
- mksglu/context-mode [plugin] *34285*  items=1 - MCP is the protocol for tool access. We're the virtualization layer for context.
- AgriciDaniel/claude-seo [plugin] *30724*  items=1 - Comprehensive SEO analysis plugin for Claude Code. Performs full site audits wit
- alirezarezvani/claude-skills [plugin,skill] *30085*  items=2 - Playwright Pro turns your AI coding agent into a senior test automation engineer
- jarrodwatts/claude-hud [plugin,collection] *29251*  items=2 - Real-time statusline HUD for Claude Code - context health, tool activity, agent 
- promptfoo/promptfoo [plugin] *27437*  items=1 - Teaches AI coding agents to create and maintain promptfoo eval suites. Encodes b
- browser-use/browser-harness [plugin] *19152*  items=1 - Open-source browser agent driven via CDP — direct browser control, 79K stars, YC
- Jeffallan/claude-skills [plugin,skill,collection] *12450*  items=3 - 66 specialized skills for full-stack development: 12 language experts (Python, T
- nicobailon/visual-explainer [plugin,collection] *11173*  items=3 - An agent skill that turns complex terminal output into styled HTML pages you act
- revfactory/harness [plugin,agent] *9378*  items=3 - Harness leverages Claude Code's agent team system to decompose complex tasks int
- Eventual-Inc/Daft [plugin] *5854* ['product-stars'] items=1 - Skills for working with Daft, a high-performance data engine for AI and multimod
- clidey/whodb [plugin] *5064* ['product-stars'] items=1 - Database management tools for Claude Code. Query databases, explore schemas, ana
- nyldn/claude-octopus [plugin] *4471*  items=2 - Multi-LLM orchestration for Claude Code and Cowork. Coordinates 8 AI providers (
- giancarloerra/SocratiCode [plugin,mcp-server] *3381*  items=2 - Enterprise-grade (40m+ lines) codebase intelligence in a zero-setup, private and
- Chachamaru127/claude-code-harness [plugin,marketplace,agent] *3217*  items=5 - Autonomous Plan → Work → Review cycle for Claude Code. Go-native engine with 25×
- fabio-rovai/open-ontologies [plugin] *2927*  items=1 - AI-native ontology engineering with 39 MCP tools backed by an in-memory Oxigraph
- AgriciDaniel/claude-blog [plugin] *2816*  items=1 - AI-powered blog creation and optimization skill with 20 commands, 4 specialized 
- nizos/tdd-guard [plugin,collection] *2383*  items=2 - Enforces Test-Driven Development by intercepting file operations in Claude Code.
- AminForou/mcp-gsc [plugin] *2238*  items=1 - Connect Google Search Console to Claude Code. Query rankings, inspect URLs, audi
- kenryu42/cc-safety-net [plugin,collection] *2076*  items=3 - Block destructive git and filesystem commands before execution
- severity1/claude-code-prompt-improver [plugin] *1972*  items=1 - Intelligent prompt optimization using skill-based architecture. Enriches vague p
- aklofas/kicad-happy [plugin] *1702*  items=1 - KiCad electronics design skills. Analyze schematics, review PCB layouts, downloa

## Top 30 by stars: verified
- morluto/rea [marketplace,mcp-server] *468616*  items=2 - Reverse engineer anything with agents, from app behavior down to native binaries
- affaan-m/ECC [collection] *306698*  items=1 - Top-notch, well-written resources covering "just about everything" from core eng
- firecrawl/firecrawl [skill] *203341* ['product-stars'] items=1 - Supercharge your AI agents with data from the web and beyond. Building the libra
- nextlevelbuilder/ui-ux-pro-max-skill [marketplace] *151446*  items=1 - An AI skill that provides design intelligence for building professional UI/UX ac
- vercel/next.js [marketplace] *143570* ['product-stars'] items=1 - The React Framework
- garrytan/gstack [agent] *142045*  items=1 - Garry Tan's (Y Combinator) Claude Code setup and "open source software factory" 
- browser-use/browser-use [mcp-server] *121457*  items=1 - Browser agents and stealth cloud browsers for AI: run web tasks, fill forms, ext
- addyosmani/agent-skills [marketplace] *118999*  items=1 - Production-grade engineering skills for AI coding agents.
- Leonxlnx/taste-skill [marketplace] *118552*  items=1 - Agent skills that give coding agents taste: art direction, reference images and 
- paperclipai/paperclip [skill,mcp-server] *114861*  items=2 - The open-source app everyone uses to manage agents at work
- debpalash/VoiceStudio [skill] *113655* ['product-stars'] items=1 - VoiceStudio is the open-source, fully-local ElevenLabs alternative — voice cloni
- nexu-io/open-design [marketplace] *108376*  items=1 - The 1st Collaborative AI Design Agent Workspace. Local-first and open source. Cr
- ruvnet/RuView [marketplace] *104598*  items=1 - π RuView turns commodity WiFi signals into real-time spatial intelligence, vital
- D4Vinci/Scrapling [mcp-server] *104260*  items=1 - Web scraping with stealth HTTP, real browsers, and Cloudflare bypass. CSS select
- tt-a1i/archify [skill,collection] *97820*  items=2 - An Agent Skill for Claude Code that generates interactive architecture, workflow
- storybookjs/storybook [marketplace] *91639* ['product-stars'] items=1 - Storybook is the industry standard workshop for building, documenting, and testi
- koala73/worldmonitor [skill,mcp-server] *90916* ['product-stars'] items=2 - Real-time global intelligence dashboard. AI-powered news aggregation, geopolitic
- career-ops-hq/career-ops [plugin] *83598*  items=1 - Open-source AI job search agent and job finder: scan job boards, score each job 
- ruvnet/ruflo [marketplace,mcp-server] *82066*  items=3 - 🌊 The original agent harness. Deploy intelligent multi-player swarms, coordinate
- OpenMontageInc/OpenMontage [skill] *81597*  items=1 - World's first open-source, agentic video production system. 12 production pipeli
- netdata/netdata [mcp-server] *81469*  items=1 - Real-time infrastructure monitoring with metrics, logs, alerts, and ML-based ano
- shareAI-lab/learn-claude-code [collection] *80611*  items=1 - A really interesting analysis of how coding agents like Claude Code are designed
- headroomlabs-ai/headroom [marketplace] *80116*  items=1 - Compress tool outputs, logs, files, and RAG chunks before they reach the LLM. 20
- ComposioHQ/awesome-claude-skills [skill] *79837*  items=1 - A curated list of awesome Claude Skills, resources, and tools for customizing Cl
- rohitg00/ai-engineering-from-scratch [skill] *79529* ['product-stars'] items=1 - Learn AI Engineering! Learn it. Build it. Ship it for others.
- hugohe3/ppt-master [marketplace] *78374* ['product-stars'] items=1 - AI turns documents or topics into real, native PowerPoint decks—with native shap
- usestrix/strix [skill] *76573* ['product-stars'] items=1 - Open-source AI penetration testing tool to find and fix your app’s vulnerabiliti
- tw93/Mole [marketplace] *75548* ['product-stars'] items=1 - 🐹 Open-source Mac and PC cleaner. Keep your machine clean, light, and running li
- cloudflare/security-audit-skill [skill] *75446*  items=1 - A coding-agent skill for multi-phase security audits with independently verified
- thedaviddias/Front-End-Checklist [marketplace,mcp-server] *74776* ['product-stars'] items=2 - 🗂 The essential checklist for modern web development, for humans and AI agents

## Top 30 by stars: watch
- f/prompts.chat [marketplace] *177823* ['product-stars'] items=1 - f.k.a. Awesome ChatGPT Prompts. Share, discover, and collect prompts from the co
- opendatalab/MinerU [skill] *83966* ['product-stars'] items=1 - Transforms complex documents like PDFs and Office docs into LLM-ready markdown/J
- code-yeongyu/oh-my-openagent [skill] *70994* ['product-stars'] items=1 - OmO: Just type "mass ulw" keyword with your prompt. Now you are the master of gr
- Imbad0202/academic-research-skills [marketplace] *57621*  items=1 - Academic Research Skills for Claude Code: research → write → review → revise → f
- bmad-code-org/BMAD-METHOD [skill] *55530* ['product-stars'] items=1 - Breakthrough Method for Agile Ai Driven Development
- tldraw/tldraw [mcp-server] *51487*  items=1 - Draw and visually collaborate with your agents on tldraw's canvas.
- metabase/metabase [mcp-server] *50412*  items=1 - Lets AI clients search, explore, query, and visualize data in a Metabase instanc
- abhigyanpatwari/GitNexus [marketplace] *48643* ['product-stars'] items=1 - GitNexus: The Zero-Server Code Intelligence Engine
- serverless/serverless [skill] *46933* ['product-stars'] items=1 - ⚡ Serverless Framework – Effortlessly build apps that auto-scale, incur zero cos
- PostHog/posthog [mcp-server] *40940*  items=1 - Official PostHog MCP Server for product analytics, feature flags, experiments, a
- openai/codex-plugin-cc [marketplace] *35269*  items=1 - Use Codex from Claude Code to review code or delegate tasks.
- zarazhangrui/frontend-slides [marketplace] *32570*  items=1 - Create beautiful slides on the web using a coding agent's frontend skills
- oraios/serena [mcp-server] *31519*  items=1 - A powerful toolkit for coding, providing semantic retrieval and editing capabili
- hypit-ai/hypit [skill] *30641* ['product-stars'] items=1 - Clone any viral video with AI agents. Not just a script, the whole workflow: swa
- openai/skills [skill] *28831*  items=1 - Skills Catalog for Codex
- vercel/ai [skill] *28078* ['product-stars'] items=1 - The AI Toolkit for TypeScript. From the creators of Next.js, the AI SDK is a fre
- clockworklabs/SpacetimeDB [marketplace] *25567* ['product-stars'] items=1 - Development at the speed of light
- nocobase/nocobase [skill] *24968*  items=1 - NocoBase is the open-source platform for building, running, and evolving busines
- different-ai/openwork [mcp-server] *24566*  items=1 - Your OpenWork org's skills, plugins, workflows, and connections through one OAut
- getpaseo/paseo [skill] *24411*  items=1 - Orchestrate multiple coding agents from desktop and mobile
- HKUDS/AI-Trader [skill] *23326* ['product-stars'] items=1 - "AI-Trader: 100% Fully-Automated Agent-Native Trading"
- screenpipe/screenpipe [mcp-server] *22457*  items=1 - Search your local screen recordings, audio transcripts, and computer activity fr
- longbridge/gpui-kit [skill] *20994* ['product-stars'] items=1 - Rust GUI components for building fantastic cross-platform desktop application by
- greensock/gsap-skills [marketplace] *18706*  items=1 - Official AI skills for GSAP. These skills teach AI coding agents how to correctl
- windmill-labs/windmill [mcp-server] *18638*  items=1 - Run Windmill scripts and flows and manage jobs, schedules, resources and variabl
- Canner/WrenAI [skill] *18333* ['product-stars'] items=1 - GenBI (Generative BI) for AI agents, an open-source, governed text-to-SQL throug
- architecture-decision-record/architecture-decision-record [skill] *17490* ['product-stars'] items=1 - Architecture decision record (ADR) examples for software planning, IT leadership
- composio-community/awesome-codex-skills [skill] *17360*  items=1 - A curated list of practical Codex skills for automating workflows across the Cod
- millionco/react-doctor [skill] *15159* ['product-stars'] items=1 - Your agent writes bad React. This catches it
- kyegomez/OpenMythos [plugin] *14929*  items=1 - A theoretical reconstruction of the Claude Mythos architecture, built from first

## Random sample of 20 watch repos (of 500)
- peakspec/marshal [skill] *53*  items=1 - Open-source multi-agent PM-ops team — associate PM, GTM, QA, data-analyst subage reasons=['fails: license (None)'] src=['topic']
- master-co/css [mcp-server] *1957*  items=1 - Inspect Master CSS classes, generated CSS, and project stylesheets from your AI  reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- Canner/WrenAI [skill] *18333* ['product-stars'] items=1 - GenBI (Generative BI) for AI agents, an open-source, governed text-to-SQL throug reasons=['fails: license (NOASSERTION)'] src=['topic']
- luffysolution-svg/obsidian-vault-mcp [mcp-server] *95*  items=1 - Local Zotero, MinerU, Obsidian literature workflow with transactional Analysis n reasons=['fails: pushed<=90d (99)'] src=['mcp-registry']
- sfrangulov/minirag-mcp [mcp-server] *60*  items=1 - Local-first RAG MCP server: hybrid search over a folder of your own documents reasons=['no corroborating signal'] src=['mcp-registry']
- bergside/typeui [mcp-server] *2263*  items=1 - Design systems, UI prompts, and layout variations for AI coding tools. reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- dtormoen/tsk-tsk [marketplace] *172*  items=1 - Keeping your agents out of trouble with sandboxed coding agent automation reasons=['fails: pushed<=90d (112)'] src=['topic']
- southleft/figma-console-mcp-skills [marketplace] *98*  items=1 - The most powerful Figma Console MCP capabilities, repackaged as Markdown skills  reasons=['fails: pushed<=90d (94)'] src=['topic']
- leeguooooo/iphone-use [mcp-server] *510*  items=1 - Drive a real iPhone from a Mac: read the screen as text, tap, type, scroll, repl reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- superdesigndev/treg [marketplace,mcp-server] *8454* ['product-stars'] items=2 - OpenRouter for agent tools. Join community here: https://discord.gg/6mQYYfFMAn reasons=['fails: license (NOASSERTION)'] src=['mcp-registry', 'topic']
- NVIDIA-AI-IOT/inference_builder [plugin] *83*  items=1 - A tool for generating python inference pipeline reasons=['fails: pushed<=90d (127)'] src=['code']
- Mindgard/ai-ide-skills [plugin] *64*  items=1 -  reasons=['fails: pushed<=90d (117)', 'fails: license (NOASSERTION)'] src=['code']
- devantler-tech/ksail [mcp-server] *164*  items=1 - SDK for creating, managing, and operating Kubernetes clusters and workloads with reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- longranger2/claude-gpt-workflow [skill] *81*  items=1 - Claude Code skills for Claude + GPT collaborative workflows. Adversarial plan re reasons=['fails: pushed<=90d (147)'] src=['topic']
- roberto-mello/lavra [marketplace] *53*  items=1 - A plugin with compound engineering workflows and memory for AI coding agents reasons=['no corroborating signal'] src=['topic']
- mixelpixx/Nimrod [mcp-server] *262*  items=1 - Web search with quality scores; web pages are read on your computer by the local reasons=['fails: license (None)'] src=['mcp-registry']
- diffusionstudio/lottie [skill] *5785*  items=1 - Generate production-ready Lottie animations with Claude Code or Codex reasons=['fails: pushed<=90d (116)'] src=['topic']
- clarilayer/clarilayer [mcp-server] *71*  items=1 - Individual-analyst context layer: recall, remember, and reconcile your data and  reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- gotalab/goal-setter-skill [plugin] *107*  items=1 - Shape rough requests into evidence-backed /goal completion contracts — an Agent  reasons=['no corroborating signal'] src=['code']
- mliu98/awesome-human-distillation [skill] *763*  items=1 - A curated catalog of human distillliation agent skills reasons=['fails: license (None)'] src=['topic']

## Errors
- graphql: HTTP 504 after 4 retries <!DOCTYPE html>
<!--

Hello future GitHubber! I bet you're here to remove tho
- broad verify subfolders chunk 7: no data None

## Rate limit
- REST calls this run (uncached): {"core": 90, "search": 42}; last seen: {"core": {"remaining": "4910", "limit": "5000"}, "search": {"remaining": "28", "limit": "30"}}
- GraphQL: 201 calls, cost 97, remaining 4716/5000, stopped early: False
- REST stopped early: False
- repos lacking metadata: 4161; enriched this run: 36901