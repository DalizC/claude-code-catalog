# Catalog report 2026-10-12
Mode: **token**; run time 1783s
Repos (deduped): 2937; flat entries before dedup: 20623

## Tier x type BEFORE dedup (flat entries)
- new/mcp-server: 11573
- listed/plugin: 2284
- watch/mcp-server: 1996
- verified/mcp-server: 1088
- watch/skill: 504
- verified/skill: 452
- watch/marketplace: 393
- official/plugin: 376
- verified/marketplace: 308
- watch/plugin: 308
- verified/plugin: 253
- watch/agent: 203
- verified/collection: 187
- anthropic/plugin: 165
- new/skill: 139
- new/marketplace: 139
- new/plugin: 107
- verified/agent: 46
- new/agent: 30
- anthropic/marketplace: 14
- anthropic/collection: 4
- anthropic/agent: 1
- watch/collection: 1

## Tier AFTER dedup (repos)
- verified: 1638
- watch: 456
- official: 256
- new: 241
- anthropic: 175
- listed: 171

## Type AFTER dedup (items)
- mcp-server: 1359
- plugin: 1314
- skill: 727
- marketplace: 449
- collection: 115
- agent: 44

## Primary type AFTER dedup (repos)
- mcp-server: 909
- plugin: 871
- skill: 662
- marketplace: 379
- collection: 84
- agent: 32

## Repos by discovery source family
- topic: 1205
- mcp-registry: 1018
- anthropic: 480
- anthropic-org: 205
- code: 186
- curated: 138
- marketplace-expansion: 40

## Flags (all tiers)
- product-stars: 206
- star-spike: 9

## star-anomaly by tier
- none: 0

## Metadata gaps
- repos without metadata: 181
- reasons: {'unfetched': 181}

## MCP-only repos excluded: 52
- assafelovic/gpt-researcher *30030* ['ai', 'python', 'agent', 'automation', 'research'] - An autonomous agent that conducts deep research on any data using any LLM provid
- pascalorg/editor *24804* ['3d', 'architecture', 'bim', 'cad', 'editor'] - Open-source 3D architectural editor with a local CLI, MCP tools, and practical w
- mrexodia/ida-pro-mcp *12667* ['ida-plugin', 'ida-pro', 'mcp', 'mcp-server', 'modelcontextprotocol'] - AI-powered reverse engineering assistant that bridges IDA Pro with language mode
- mcp-use/mcp-use *10745* ['mcp', 'model-context-protocol', 'apps-sdk', 'mcp-apps', 'mcp-inspector'] - The fullstack MCP framework to develop MCP Apps for ChatGPT / Claude & MCP Serve
- Agents365-ai/drawio-skill *10073* ['drawio', 'diagram', 'agent-skills', 'architecture-diagram', 'claude-code'] - Agent skill that turns natural language, code, Terraform/K8s, SQL, OpenAPI, Asyn
- 21st-dev/magic-mcp *5996* ['21st', 'claude', 'cursor', 'mcp', 'model-context-protocol'] - It's like v0, but in your Cursor / Claude Code / Windsurf: search 10,000+ React/
- jordan-gibbs/hyperresearch *3832* ['agents', 'agentskills', 'claude-code', 'deep-research', 'deep-research-agent'] - Convert Claude Code or Codex into the most intelligent Deep Research Agent. Coll
- taylorwilsdon/google_workspace_mcp *3324* ['ai', 'gmail', 'google-calendar', 'google-workspace', 'llm'] - Control Gmail, Google Calendar, Docs, Sheets, Slides, Chat, Forms, Tasks, Search
- duty1g/x64dbg-mcp-server *2455* ['ai-agents', 'ai-debugging', 'binary-analysis', 'claude', 'claude-code'] - x64dbg-MCP Server is a native MCP (Model Context Protocol) plugin for x64dbg tha
- redhat-et/ripwire *2435* ['ai-agents', 'claude', 'cli', 'coding-agents', 'context-engineering'] - The ripgrep of AI context: a zero-dependency C++23 CLI + MCP server for coding a
- alpic-ai/skybridge *2155* ['agent', 'ai', 'apps-sdk', 'chatgpt', 'claude'] - Skybridge is a full-stack TypeScript framework for MCP Apps and ChatGPT Apps. Ty
- jau123/MeiGen-AI-Design-MCP *1781* ['ai-image-generation', 'claude', 'claude-code', 'comfyui', 'mcp'] - Supports GPT Image 2, Seedance & ComfyUI, with a 1,400+ prompt library, carefull
- study8677/repobrain *1325* ['claude-code', 'codex-cli', 'developer-tools', 'mcp-server', 'windsurf'] - 🧠 RepoBrain (formerly Antigravity) — Give your repo a brain. ChatGPT for your co
- agentrq/agentrq *1143* ['agentic-ai', 'agentic-workflow', 'agents', 'task', 'task-manager'] - AgentRQ: Human-in-loop realtime conversational task manager for AI Agents. Self-
- CodeAbra/iai-personal-memory-engine *906* ['claude', 'claude-code', 'local-first', 'mcp', 'mcp-server'] - A cyber brain for your AI. It never forgets a detail, remembers exactly what you

## Degradation
- registry complete: True (423 pages, 42203 entries)
- MCP servers merged from the previous catalog (not re-fetched): 0
- GraphQL 403s: 0 (secondary rate limit: 0); retries: 5; queries that gave up: 0
- HTTP retries (5xx/network): 2
- repos with stale metadata reused from the previous catalog (meta_stale): 0

## MCP Registry
- {"pages": 423, "fetched": 42203, "kept": 41687, "dropped": 516, "bad": 0, "complete": true, "excluded_remote_only": 11818, "excluded_low_signal": 15212, "fallback_merged": 0, "records": 1018, "attached_existing": 112, "new_repo": 906, "remote_only": 0, "tiers": {"official": 24, "listed": 18, "verified": 743, "new": 90, "watch": 143}}

## Top 20 by trend_7d
- morluto/rea +111546 (2062.99%) ['star-spike']
- mattpocock/skills +9595 (3.46%) []
- cathrynlavery/diagram-design +7428 (17.1%) []
- DietrichGebert/ponytail +5325 (3.41%) []
- tt-a1i/archify +4577 (5.9%) []
- heygen-com/hyperframes +3877 (6.77%) ['product-stars']
- affaan-m/ECC +3777 (1.38%) []
- addyosmani/agent-skills +3627 (3.57%) []
- thedotmack/claude-mem +3218 (3.33%) []
- tigerless-labs/autoharness +3066 (38.62%) ['star-spike']
- pbakaus/impeccable +2943 (3.82%) []
- rehan-remade/universal-modder +2929 (76.92%) ['star-spike']
- paperclipai/paperclip +2869 (2.94%) []
- ayghri/i-have-adhd +2623 (4.87%) []
- alibaba/open-code-review +2431 (5.54%) []
- obra/superpowers +2204 (0.75%) []
- Leonxlnx/taste-skill +1993 (2.15%) []
- multica-ai/andrej-karpathy-skills +1933 (0.89%) []
- mvschwarz/openrig +1832 (35.22%) ['star-spike']
- blader/humanizer +1698 (3.13%) []

## Code search vs topic search
- repos found by code search: 186
- also in topic search: 10
- code-only: 163; tiers: {'watch': 72, 'verified': 77, 'new': 14}

## Top 30 by stars: anthropic
- anthropics/skills [marketplace,collection] *180568*  items=2 - Anthropic example skills
- anthropics/claude-code [marketplace,agent] *150269*  items=2 - Bundled plugins for Claude Code including Agent SDK development tools, PR review
- anthropics/financial-services [marketplace] *39427*  items=1 - 
- anthropics/claude-plugins-official [plugin,marketplace,collection] *37706*  items=3 - Directory of popular Claude Code extensions including development tools, product
- anthropics/knowledge-work-plugins [marketplace] *29159*  items=1 - 
- anthropics/claude-for-legal [marketplace] *9641*  items=1 - Reference agents, skills, and data connectors for the legal workflows we see mos
- anthropics/claude-code-action [collection] *9479*  items=1 - The official GitHub Action for running Claude Code in CI: mention @claude in iss
- anthropics/claude-code-security-review [collection] *6347*  items=1 - An official AI-powered security-review GitHub Action that uses Claude to analyze
- anthropics/claude-plugins-community [marketplace] *4628*  items=1 - 
- anthropics/commerce-agents [marketplace] *3216*  items=1 - Claude Commerce Agents: the commerce-builder plugin for building shopping and me
- anthropics/life-sciences [marketplace] *618*  items=1 - MCP servers and skills for life sciences research, data analysis, and discovery
- anthropics/k12-teacher-skills [marketplace] *562*  items=1 - Plugin marketplace for K-12 Education and Claude for Teachers.
- anthropics/healthcare [marketplace] *425*  items=1 - Claude for Healthcare — one plugin bundling payer, provider, pharma, and general
- anthropics/oncall-kit [marketplace] *217*  items=1 - 
- anthropics/claude-for-financial-advisors [plugin,marketplace] *99*  items=2 - Ready-to-run workflows for financial advisors in Claude Cowork, drawing live dat
- anthropics/claude-tag-plugins [marketplace] *60*  items=1 - Plugins that connect Claude Tag to common SaaS services, plus charting and confi
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
- obra/superpowers [plugin,skill] *297835*  items=3 - Superpowers teaches Claude brainstorming, subagent driven development with built
- mattpocock/skills [plugin] *286627*  items=2 - Matt Pocock's agent skills for real engineering — grilling, spec/ticket flows, T
- heygen-com/hyperframes [plugin] *61152* ['product-stars'] items=2 - HyperFrames by HeyGen. Write HTML, render video. Compositions, GSAP and runtime 
- ChromeDevTools/chrome-devtools-mcp [plugin,mcp-server] *53304*  items=4 - Control and inspect a live Chrome browser from your coding agent. Record perform
- confident-ai/deepeval [plugin] *18753* ['product-stars'] items=1 - Skills for adding DeepEval evaluations, tracing, datasets, Confident AI reports,
- huggingface/skills [plugin] *11159*  items=2 - Build, train, evaluate, and use open source AI models, datasets, and spaces.
- wonderwhy-er/DesktopCommanderMCP [plugin,mcp-server] *10001*  items=4 - MCP server for terminal commands, process management, and file operations across
- Eigenwise/atomic-agents [plugin,marketplace] *6284* ['product-stars'] items=3 - Comprehensive development workflow for building AI agents with the Atomic Agents
- exa-labs/exa-mcp-server [plugin,mcp-server] *5108*  items=3 - Exa AI web search, deep research, and content extraction. Provides MCP tools and
- NVIDIA/skills [plugin] *3565*  items=2 - Find the right NVIDIA skill for GPU acceleration, CUDA, AI agents, data loading,
- cloudflare/skills [plugin] *3043*  items=2 - Skills for the Cloudflare developer platform: Workers, Durable Objects, Agents S
- modelcontextprotocol/ext-apps [plugin] *2942*  items=3 - Skills for creating MCP Apps with the MCP Apps SDK
- aws/agent-toolkit-for-aws [plugin] *2847*  items=8 - Build, deploy, and operate AI agents on AWS. Skills for scaffolding agents with 
- expo/skills [plugin] *2761*  items=2 - Official Expo skills for building, deploying, upgrading, and debugging React Nat
- GoogleChrome/modern-web-guidance [plugin] *2463*  items=2 - Keep your coding agent up to date with the latest web best practices
- figma/mcp-server-guide [plugin,mcp-server] *2064*  items=4 - Figma design platform integration. Access design files, extract component inform
- MicrosoftDocs/mcp [plugin,mcp-server] *1937*  items=3 - Access official Microsoft documentation, API references, and code samples for Az
- stripe/ai [plugin,mcp-server] *1897*  items=3 - Stripe development plugin for Claude
- microsoft/azure-skills [plugin] *1559*  items=2 - Transform Claude into an Azure expert. This plugin integrates the Azure MCP serv
- atlassian/atlassian-mcp-server [plugin,mcp-server] *1089*  items=3 - Connect to Atlassian products including Jira and Confluence. Search and create i
- forcedotcom/sf-skills [plugin] *1070*  items=1 - Build Salesforce apps and agents using these core building blocks: metadata, Ape
- awslabs/agent-plugins [plugin] *917*  items=10 - Guide developers through adding maps, places search, geocoding, routing, and oth
- superdesigndev/superdesign-skill [plugin,skill] *648*  items=2 - Design or redesign frontend UI and marketing graphics on the Superdesign infinit
- duckdb/duckdb-skills [plugin] *604*  items=2 - DuckDB-powered skills for Claude Code: read any data file, attach and query Duck
- Shopify/Shopify-AI-Toolkit [plugin] *596*  items=2 - Shopify's AI Toolkit provides 18 development skills for building on the Shopify 
- ClickHouse/agent-skills [plugin] *546*  items=2 - 28 best practice rules for ClickHouse schema design, query optimization, and dat
- EpicGames/unreal-engine-skills-for-claude-code-plugin [plugin] *513*  items=2 - Control Unreal Editor directly from Claude Code via MCP. Hundreds of tools expos
- gitroomhq/postiz-agent [plugin] *511*  items=3 - Social media automation CLI for scheduling posts, managing integrations, uploadi
- makenotion/claude-code-notion-plugin [plugin] *493*  items=2 - Notion workspace integration. Search pages, create and update documents, manage 
- tavily-ai/skills [plugin] *488*  items=3 - Build AI applications with real-time web data using Tavily's search, extract, cr

## Top 30 by stars: listed
- DietrichGebert/ponytail [plugin] *161258*  items=2 - Lazy senior dev mode. Forces the simplest, shortest solution that actually works
- JuliusBrussee/caveman [plugin,skill] *111098*  items=2 - Auto-activation works differently per agent: Claude Code uses SessionStart hooks
- thedotmack/claude-mem [plugin,skill] *99812*  items=3 - Persistent memory system for Claude Code - seamlessly preserve context across se
- Egonex-AI/Understand-Anything [plugin,skill] *85955*  items=2 - Understand Anything is a Claude Code plugin that analyzes your project with a mu
- pbakaus/impeccable [plugin] *79968*  items=1 - Great design prompts require design vocabulary. Most people don't have it. You c
- mem0ai/mem0 [plugin] *67013* ['product-stars'] items=1 - Connect Mem0 to Claude to give your agent persistent memory across sessions. Cla
- mvanhorn/last30days-skill [plugin] *63998*  items=1 - last-30-days is a Claude Code skill that searches the web and delivers a structu
- coreyhaines31/marketingskills [plugin,skill] *54261*  items=3 - coreyhaines31
- DayuanJiang/next-ai-draw-io [plugin] *36179* ['product-stars'] items=1 - AI-powered Draw.io diagram generation with real-time browser preview. Create flo
- jarrodwatts/claude-hud [plugin,collection] *28464*  items=2 - Real-time statusline HUD for Claude Code - context health, tool activity, agent 
- alirezarezvani/claude-skills [plugin,skill] *28031*  items=2 - Playwright Pro turns your AI coding agent into a senior test automation engineer
- mksglu/context-mode [plugin] *26727*  items=1 - MCP is the protocol for tool access. We're the virtualization layer for context.
- promptfoo/promptfoo [plugin] *25911*  items=1 - Teaches AI coding agents to create and maintain promptfoo eval suites. Encodes b
- AgriciDaniel/claude-seo [plugin] *18728*  items=1 - Comprehensive SEO analysis plugin for Claude Code. Performs full site audits wit
- browser-use/browser-harness [plugin] *18396* ['product-stars'] items=1 - Open-source browser agent driven via CDP — direct browser control, 79K stars, YC
- Jeffallan/claude-skills [plugin,skill,collection] *11832*  items=3 - 66 specialized skills for full-stack development: 12 language experts (Python, T
- nicobailon/visual-explainer [plugin,collection] *10365*  items=3 - An agent skill that turns complex terminal output into styled HTML pages you act
- revfactory/harness [plugin,agent] *9160*  items=3 - Harness leverages Claude Code's agent team system to decompose complex tasks int
- Eventual-Inc/Daft [plugin] *5795* ['product-stars'] items=1 - Skills for working with Daft, a high-performance data engine for AI and multimod
- clidey/whodb [plugin] *5037* ['product-stars'] items=1 - Database management tools for Claude Code. Query databases, explore schemas, ana
- nyldn/claude-octopus [plugin] *4209*  items=2 - Multi-LLM orchestration for Claude Code and Cowork. Coordinates 8 AI providers (
- giancarloerra/SocratiCode [plugin,mcp-server] *3335*  items=2 - Enterprise-grade (40m+ lines) codebase intelligence in a zero-setup, private and
- Chachamaru127/claude-code-harness [plugin,agent] *3159*  items=2 - Autonomous Plan → Work → Review cycle for Claude Code. Go-native engine with 25×
- AgriciDaniel/claude-blog [plugin] *2362*  items=1 - AI-powered blog creation and optimization skill with 20 commands, 4 specialized 
- nizos/tdd-guard [plugin,collection] *2360*  items=2 - Enforces Test-Driven Development by intercepting file operations in Claude Code.
- severity1/claude-code-prompt-improver [plugin] *1949*  items=1 - Intelligent prompt optimization using skill-based architecture. Enriches vague p
- AminForou/mcp-gsc [plugin] *1903*  items=1 - Connect Google Search Console to Claude Code. Query rankings, inspect URLs, audi
- codeaholicguy/ai-devkit [plugin] *1644*  items=1 - A structured software development toolkit that helps Claude Code follow senior-e
- activeloopai/hivemind [plugin,skill,collection] *1621*  items=5 - Cloud-backed persistent memory for Claude Code powered by Deeplake. Automaticall
- kenryu42/cc-safety-net [plugin,collection] *1594*  items=3 - Block destructive git and filesystem commands before execution

## Top 30 by stars: verified
- affaan-m/ECC [collection] *277361*  items=1 - Top-notch, well-written resources covering "just about everything" from core eng
- multica-ai/andrej-karpathy-skills [collection] *218989*  items=1 - A drop-in CLAUDE.md distilling four behavioral guidelines for LLM-assisted codin
- firecrawl/firecrawl [skill] *190585* ['product-stars'] items=1 - Supercharge your AI agents with data from the web and beyond. Building the libra
- vercel/next.js [marketplace] *143145* ['product-stars'] items=1 - The React Framework
- garrytan/gstack [agent] *136052*  items=1 - Garry Tan's (Y Combinator) Claude Code setup and "open source software factory" 
- nextlevelbuilder/ui-ux-pro-max-skill [marketplace] *134906*  items=1 - An AI skill that provides design intelligence for building professional UI/UX ac
- browser-use/browser-use [mcp-server] *117675*  items=1 - Control a real Chrome browser to complete any task: fill forms, extract data, bo
- morluto/rea [mcp-server] *116953* ['star-spike'] items=1 - Reverse engineer anything from your terminal or agent with one CLI and MCP serve
- addyosmani/agent-skills [marketplace] *105160*  items=1 - Production-grade engineering skills for AI coding agents.
- nexu-io/open-design [marketplace] *100630*  items=1 - 🎨 Best DeepSeek Harness Design Plugin. The open-source Claude Design alternative
- paperclipai/paperclip [mcp-server] *100492*  items=1 - Trending hip-hop artist momentum scores across four cultural dimensions.
- ruvnet/RuView [marketplace] *97409*  items=1 - π RuView turns commodity WiFi signals into real-time spatial intelligence, vital
- Leonxlnx/taste-skill [marketplace] *94825*  items=1 - Taste-Skill - gives your AI good taste. stops the AI from generating boring, gen
- storybookjs/storybook [marketplace] *91246* ['product-stars'] items=1 - Storybook is the industry standard workshop for building, documenting, and testi
- koala73/worldmonitor [skill,mcp-server] *88268* ['product-stars'] items=2 - Real-time global intelligence dashboard. AI-powered news aggregation, geopolitic
- D4Vinci/Scrapling [mcp-server] *86893*  items=1 - Web scraping with stealth HTTP, real browsers, and Cloudflare bypass. CSS select
- bytedance/deer-flow [skill] *83717*  items=1 - An open-source long-horizon SuperAgent harness that researches, codes, and creat
- tt-a1i/archify [skill,collection] *82187*  items=2 - An Agent Skill for Claude Code that generates interactive architecture, workflow
- netdata/netdata [mcp-server] *80890*  items=1 - Real-time infrastructure monitoring with metrics, logs, alerts, and ML-based ano
- shareAI-lab/learn-claude-code [collection] *78390*  items=1 - A really interesting analysis of how coding agents like Claude Code are designed
- ComposioHQ/awesome-claude-skills [skill] *76896*  items=1 - A curated list of awesome Claude Skills, resources, and tools for customizing Cl
- headroomlabs-ai/headroom [marketplace] *75088*  items=1 - Compress tool outputs, logs, files, and RAG chunks before they reach the LLM. 20
- thedaviddias/Front-End-Checklist [marketplace,mcp-server] *74437* ['product-stars'] items=2 - 🗂 The essential checklist for modern web development, for humans and AI agents
- ruvnet/ruflo [marketplace,mcp-server] *74374*  items=2 - 🌊 The original agent harness. Deploy intelligent multi-player swarms, coordinate
- career-ops-hq/career-ops [marketplace] *74086*  items=1 - Open-source AI job search agent and job finder: scan job boards, score each job 
- usestrix/strix [skill] *68005* ['product-stars'] items=1 - Open-source AI penetration testing tool to find and fix your app’s vulnerabiliti
- rohitg00/ai-engineering-from-scratch [skill] *67639* ['product-stars'] items=1 - Learn it. Build it. Ship it for others.
- shanraisshan/claude-code-best-practice [skill] *67421*  items=1 - from vibe coding to agentic engineering - practice makes claude perfect
- calesthio/OpenMontage [skill] *67120*  items=1 - World's first open-source, agentic video production system. 12 production pipeli
- xtekky/gpt4free [skill] *66800* ['product-stars'] items=1 - The official gpt4free repository | various collection of powerful language model

## Top 30 by stars: watch
- f/prompts.chat [marketplace] *172657* ['product-stars'] items=1 - f.k.a. Awesome ChatGPT Prompts. Share, discover, and collect prompts from the co
- opendatalab/MinerU [skill] *81491* ['product-stars'] items=1 - Transforms complex documents like PDFs and Office docs into LLM-ready markdown/J
- code-yeongyu/oh-my-openagent [skill] *69968* ['product-stars'] items=1 - OmO: Just type "mass ulw" keyword with your prompt. Now you are the master of gr
- bmad-code-org/BMAD-METHOD [skill] *54041* ['product-stars'] items=1 - Breakthrough Method for Agile Ai Driven Development
- Imbad0202/academic-research-skills [marketplace] *51409*  items=1 - Academic Research Skills for Claude Code: research → write → review → revise → f
- tldraw/tldraw [mcp-server] *50852*  items=1 - Draw and visually collaborate with your agents on tldraw's canvas.
- metabase/metabase [mcp-server] *49624*  items=1 - Lets AI clients search, explore, query, and visualize data in a Metabase instanc
- abhigyanpatwari/GitNexus [marketplace] *47840* ['product-stars'] items=1 - GitNexus: The Zero-Server Code Intelligence Engine
- PostHog/posthog [mcp-server] *40233*  items=1 - Official PostHog MCP Server for product analytics, feature flags, experiments, a
- openai/codex-plugin-cc [marketplace] *34102*  items=1 - Use Codex from Claude Code to review code or delegate tasks.
- zarazhangrui/frontend-slides [marketplace] *30488*  items=1 - Create beautiful slides on the web using a coding agent's frontend skills
- oraios/serena [mcp-server] *30192*  items=1 - A powerful toolkit for coding, providing semantic retrieval and editing capabili
- eyaltoledano/claude-task-master [marketplace] *28203*  items=1 - An AI-powered task-management system you can drop into Cursor, Lovable, Windsurf
- openai/skills [skill] *28012*  items=1 - Skills Catalog for Codex
- vercel/ai [skill] *27253* ['product-stars'] items=1 - The AI Toolkit for TypeScript. From the creators of Next.js, the AI SDK is a fre
- clockworklabs/SpacetimeDB [marketplace] *25276* ['product-stars'] items=1 - Development at the speed of light
- different-ai/openwork [mcp-server] *24020*  items=1 - Your OpenWork org's skills, plugins, workflows, and connections through one OAut
- HKUDS/AI-Trader [skill] *22745* ['product-stars'] items=1 - "AI-Trader: 100% Fully-Automated Agent-Native Trading"
- screenpipe/screenpipe [mcp-server] *21914*  items=1 - Search your local screen recordings, audio transcripts, and computer activity fr
- getpaseo/paseo [skill] *20560*  items=1 - Orchestrate multiple coding agents from desktop and mobile
- agent0ai/agent-zero [skill] *19429* ['product-stars'] items=1 - Agent Zero AI framework
- Canner/WrenAI [skill] *17846* ['product-stars'] items=1 - GenBI (Generative BI) for AI agents, an open-source, governed text-to-SQL throug
- architecture-decision-record/architecture-decision-record [skill] *17176* ['product-stars'] items=1 - Architecture decision record (ADR) examples for software planning, IT leadership
- longbridge/gpui-kit [skill] *16936* ['product-stars'] items=1 - Rust GUI components for building fantastic cross-platform desktop application by
- composio-community/awesome-codex-skills [skill] *16869*  items=1 - A curated list of practical Codex skills for automating workflows across the Cod
- travisvn/awesome-claude-skills [skill] *15370*  items=1 - A curated list of awesome Claude Skills, resources, and tools for customizing Cl
- superset-sh/superset [marketplace] *15085* ['product-stars'] items=1 - Superset is an agentic IDE to orchestrate 100+ coding agents in parallel. Run an
- millionco/react-doctor [skill] *14992* ['product-stars'] items=1 - Your agent writes bad React. This catches it
- kyegomez/OpenMythos [plugin] *14908*  items=1 - A theoretical reconstruction of the Claude Mythos architecture, built from first
- NevaMind-AI/memU [skill] *14530* ['product-stars'] items=1 - Personal memory across agents

## Random sample of 20 watch repos (of 456)
- alexgreensh/token-optimizer [marketplace] *2539*  items=1 - Find the ghost tokens. Fix them. Survive compaction. Avoid context quality decay reasons=['fails: license (NOASSERTION)'] src=['topic']
- smith-horn/skillsmith [mcp-server] *77*  items=1 - Share agent skills across your team, scan them for risk, and track what's actual reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- zarazhangrui/frontend-slides [marketplace] *30488*  items=1 - Create beautiful slides on the web using a coding agent's frontend skills reasons=['fails: pushed<=90d (110)'] src=['topic']
- saidutt46/domain-check [mcp-server] *308*  items=1 - Fast domain availability checker with RDAP/WHOIS — batch checks, TLD presets, an reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- gradion-ai/ipybox [mcp-server] *76*  items=1 - Unified execution environment for Python code, shell commands, and programmatic  reasons=['fails: pushed<=90d (122)'] src=['mcp-registry']
- coltonjosephdean-rgb/talk-to-anyone [marketplace] *65*  items=1 - Talk to anyone: /coach persona plugin for Claude Code — research any public figu reasons=['fails: pushed<=90d (96)'] src=['topic']
- aldefy/compose-skill [marketplace] *596*  items=1 - Jetpack Compose Agent Skill — AI-powered coding guidance with actual androidx/an reasons=['fails: license (NOASSERTION)'] src=['topic']
- sachitrafa/YourMemory [mcp-server] *270*  items=2 - Ebbinghaus-based persistent memory for Claude. Memories decay with time, strengt reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- Imbad0202/academic-research-skills-codex [skill] *12613*  items=1 - Codex-native Academic Research Skills suite for human-in-the-loop academic resea reasons=['fails: license (NOASSERTION)'] src=['topic']
- TomGranot/hubspot-admin-skills [plugin,marketplace] *75*  items=2 - Claude Code skills for auditing, cleaning, enriching, and automating your HubSpo reasons=['fails: pushed<=90d (91)'] src=['code', 'marketplace-expansion']
- LichAmnesia/lich-skills [plugin,marketplace] *234*  items=2 - skills-map router (picks which skill to use) + go-no-go Stage 0 gate (NO-GO is t reasons=['fails: pushed<=90d (124)'] src=['code', 'marketplace-expansion']
- lukabudik/alza-mcp-community [mcp-server] *75*  items=1 - Unofficial MCP server for Alza.cz: catalog search plus token-guarded account and reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- BioTender-max/awesome-bio-agent-skills [skill] *201*  items=1 - A curated collection of AI agent skills for biomedical research, covering genomi reasons=['fails: pushed<=90d (102)', 'fails: license (NOASSERTION)'] src=['topic']
- H-mmer/pentest-agents [skill] *999*  items=1 - Bug bounty agent framework for Claude Code, Codex, Gemini, Cursor, Windsurf, Cop reasons=['fails: pushed<=90d (121)'] src=['topic']
- frumu-ai/tandem [mcp-server] *121*  items=1 - Remote MCP server for Tandem docs, install guides, SDKs, workflows, and agent se reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- Dicklesworthstone/destructive_command_guard [skill] *6147* ['product-stars'] items=1 - The Destructive Command Guard (dcg) is for blocking dangerous git and shell comm reasons=['fails: license (NOASSERTION)'] src=['topic']
- kubeshop/testkube [mcp-server] *1666*  items=1 - MCP server for Testkube - Manage test workflows, executions, and artifacts via A reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- promptadvisers/claudex [plugin,marketplace] *157*  items=3 - Autonomous Claude + Codex review loop for Claude Code. Plan mode + read-only rev reasons=['fails: pushed<=90d (166)'] src=['code', 'marketplace-expansion']
- geekjourneyx/claude-design-card [skill] *463*  items=1 - Claude Code skill for generating design cards in 14 formats — platform covers, s reasons=['fails: pushed<=90d (137)', 'fails: license (None)'] src=['topic']
- Productfculty-aipm/PM-Copilot-by-Product-Faculty [plugin] *78*  items=1 - PM Copilot: 65+ framework-grounded PM skills across 12 domains, 17 command-based reasons=['fails: pushed<=90d (178)', 'fails: license (NOASSERTION)'] src=['topic']

## Errors
- none

## Rate limit
- REST calls this run (uncached): {"core": 13, "search": 41}; last seen: {"core": {"remaining": "4987", "limit": "5000"}, "search": {"remaining": "29", "limit": "30"}}
- GraphQL: 104 calls, cost 70, remaining 4884/5000, stopped early: False
- REST stopped early: False
- repos lacking metadata: 3477; enriched this run: 28401