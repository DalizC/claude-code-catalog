# Catalog report 2026-10-14
Mode: **token**; run time 2008s
Repos (deduped): 2960; flat entries before dedup: 20839

## Tier x type BEFORE dedup (flat entries)
- new/mcp-server: 11764
- listed/plugin: 2283
- watch/mcp-server: 2011
- verified/mcp-server: 1099
- watch/skill: 507
- verified/skill: 444
- watch/marketplace: 397
- official/plugin: 376
- watch/plugin: 312
- verified/marketplace: 307
- verified/plugin: 249
- watch/agent: 201
- verified/collection: 190
- anthropic/plugin: 165
- new/skill: 142
- new/marketplace: 136
- new/plugin: 105
- verified/agent: 46
- new/agent: 32
- anthropic/marketplace: 14
- anthropic/collection: 4
- anthropic/agent: 1
- watch/collection: 1

## Tier AFTER dedup (repos)
- verified: 1638
- watch: 464
- new: 257
- official: 256
- anthropic: 175
- listed: 170

## Type AFTER dedup (items)
- mcp-server: 1418
- plugin: 1310
- skill: 724
- marketplace: 449
- collection: 119
- agent: 44

## Primary type AFTER dedup (repos)
- mcp-server: 931
- plugin: 868
- skill: 661
- marketplace: 381
- collection: 87
- agent: 32

## Repos by discovery source family
- topic: 1209
- mcp-registry: 1043
- anthropic: 479
- anthropic-org: 205
- code: 179
- curated: 142
- marketplace-expansion: 39

## Flags (all tiers)
- product-stars: 206
- star-spike: 11
- star-anomaly: 4

## star-anomaly by tier
- new: 4

## Metadata gaps
- repos without metadata: 181
- reasons: {'unfetched': 181}

## MCP-only repos excluded: 53
- assafelovic/gpt-researcher *30081* ['ai', 'python', 'agent', 'automation', 'research'] - An autonomous agent that conducts deep research on any data using any LLM provid
- pascalorg/editor *24848* ['3d', 'architecture', 'bim', 'cad', 'editor'] - Open-source 3D architectural editor with a local CLI, MCP tools, and practical w
- mrexodia/ida-pro-mcp *12829* ['ida-plugin', 'ida-pro', 'mcp', 'mcp-server', 'modelcontextprotocol'] - AI-powered reverse engineering assistant that bridges IDA Pro with language mode
- mcp-use/mcp-use *10756* ['mcp', 'model-context-protocol', 'apps-sdk', 'mcp-apps', 'mcp-inspector'] - The fullstack MCP framework to develop MCP Apps for ChatGPT / Claude & MCP Serve
- Agents365-ai/drawio-skill *10122* ['drawio', 'diagram', 'agent-skills', 'architecture-diagram', 'claude-code'] - Agent skill that turns natural language, code, Terraform/K8s, SQL, OpenAPI, Asyn
- 21st-dev/magic-mcp *6008* ['21st', 'claude', 'cursor', 'mcp', 'model-context-protocol'] - It's like v0, but in your Cursor / Claude Code / Windsurf: search 10,000+ React/
- jordan-gibbs/hyperresearch *3853* ['agents', 'agentskills', 'claude-code', 'deep-research', 'deep-research-agent'] - Convert Claude Code or Codex into the most intelligent Deep Research Agent. Coll
- taylorwilsdon/google_workspace_mcp *3336* ['ai', 'gmail', 'google-calendar', 'google-workspace', 'llm'] - Control Gmail, Google Calendar, Docs, Sheets, Slides, Chat, Forms, Tasks, Search
- duty1g/x64dbg-mcp-server *2492* ['ai-agents', 'ai-debugging', 'binary-analysis', 'claude', 'claude-code'] - x64dbg-MCP Server is a native MCP (Model Context Protocol) plugin for x64dbg tha
- redhat-et/ripwire *2445* ['ai-agents', 'claude', 'cli', 'coding-agents', 'context-engineering'] - The ripgrep of AI context: a zero-dependency C++23 CLI + MCP server for coding a
- alpic-ai/skybridge *2160* ['agent', 'ai', 'apps-sdk', 'chatgpt', 'claude'] - Skybridge is a full-stack TypeScript framework for MCP Apps and ChatGPT Apps. Ty
- jau123/MeiGen-AI-Design-MCP *1781* ['ai-image-generation', 'claude', 'claude-code', 'comfyui', 'mcp'] - Supports GPT Image 2, Seedance & ComfyUI, with a 1,400+ prompt library, carefull
- study8677/repobrain *1324* ['claude-code', 'codex-cli', 'developer-tools', 'mcp-server', 'windsurf'] - 🧠 RepoBrain (formerly Antigravity) — Give your repo a brain. ChatGPT for your co
- agentrq/agentrq *1152* ['agentic-ai', 'agentic-workflow', 'agents', 'task', 'task-manager'] - AgentRQ: Human-in-loop realtime conversational task manager for AI Agents. Self-
- CodeAbra/iai-personal-memory-engine *906* ['claude', 'claude-code', 'local-first', 'mcp', 'mcp-server'] - A cyber brain for your AI. It never forgets a detail, remembers exactly what you

## Degradation
- registry complete: True (433 pages, 43232 entries)
- MCP servers merged from the previous catalog (not re-fetched): 0
- GraphQL 403s: 0 (secondary rate limit: 0); retries: 5; queries that gave up: 0
- HTTP retries (5xx/network): 0
- repos with stale metadata reused from the previous catalog (meta_stale): 0

## MCP Registry
- {"pages": 433, "fetched": 43232, "kept": 42708, "dropped": 524, "bad": 0, "complete": true, "excluded_remote_only": 12392, "excluded_low_signal": 15442, "fallback_merged": 0, "records": 1043, "attached_existing": 116, "new_repo": 927, "remote_only": 0, "tiers": {"official": 24, "listed": 18, "verified": 753, "new": 98, "watch": 150}}

## Top 20 by trend_7d
- morluto/rea +206329 (2002.42%) ['star-spike']
- mattpocock/skills +12147 (4.37%) []
- cathrynlavery/diagram-design +10346 (23.42%) []
- DietrichGebert/ponytail +5953 (3.79%) []
- heygen-com/hyperframes +5223 (9.04%) ['product-stars']
- tt-a1i/archify +4400 (5.59%) []
- affaan-m/ECC +4311 (1.57%) []
- addyosmani/agent-skills +4148 (4.06%) []
- paperclipai/paperclip +3545 (3.61%) []
- thedotmack/claude-mem +3494 (3.6%) []
- pbakaus/impeccable +3332 (4.3%) []
- alibaba/open-code-review +2905 (6.59%) []
- mksglu/context-mode +2904 (11.37%) []
- obra/superpowers +2831 (0.96%) []
- rehan-remade/universal-modder +2720 (57.47%) ['star-spike']
- Leonxlnx/taste-skill +2527 (2.71%) []
- ayghri/i-have-adhd +2454 (4.5%) []
- multica-ai/andrej-karpathy-skills +2252 (1.04%) []
- blader/humanizer +2210 (4.06%) []
- tigerless-labs/autoharness +1902 (20.76%) []

## Code search vs topic search
- repos found by code search: 179
- also in topic search: 9
- code-only: 158; tiers: {'watch': 72, 'verified': 72, 'new': 14}

## Top 30 by stars: anthropic
- anthropics/skills [marketplace,collection] *180978*  items=2 - Anthropic example skills
- anthropics/claude-code [marketplace,agent] *150690*  items=2 - Bundled plugins for Claude Code including Agent SDK development tools, PR review
- anthropics/financial-services [marketplace] *39744*  items=1 - 
- anthropics/claude-plugins-official [plugin,marketplace,collection] *37867*  items=3 - Directory of popular Claude Code extensions including development tools, product
- anthropics/knowledge-work-plugins [marketplace] *29572*  items=1 - 
- anthropics/claude-for-legal [marketplace] *9661*  items=1 - Reference agents, skills, and data connectors for the legal workflows we see mos
- anthropics/claude-code-action [collection] *9501*  items=1 - The official GitHub Action for running Claude Code in CI: mention @claude in iss
- anthropics/claude-code-security-review [collection] *6371*  items=1 - An official AI-powered security-review GitHub Action that uses Claude to analyze
- anthropics/claude-plugins-community [marketplace] *4640*  items=1 - 
- anthropics/commerce-agents [marketplace] *3231*  items=1 - Claude Commerce Agents: the commerce-builder plugin for building shopping and me
- anthropics/life-sciences [marketplace] *621*  items=1 - MCP servers and skills for life sciences research, data analysis, and discovery
- anthropics/k12-teacher-skills [marketplace] *562*  items=1 - Plugin marketplace for K-12 Education and Claude for Teachers.
- anthropics/healthcare [marketplace] *425*  items=1 - Claude for Healthcare — one plugin bundling payer, provider, pharma, and general
- anthropics/oncall-kit [marketplace] *221*  items=1 - 
- anthropics/claude-for-financial-advisors [plugin,marketplace] *102*  items=2 - Ready-to-run workflows for financial advisors in Claude Cowork, drawing live dat
- anthropics/claude-tag-plugins [marketplace] *61*  items=1 - Plugins that connect Claude Tag to common SaaS services, plus charting and confi
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
- obra/superpowers [plugin,skill] *298770*  items=3 - Superpowers teaches Claude brainstorming, subagent driven development with built
- mattpocock/skills [plugin] *290009*  items=2 - Matt Pocock's agent skills for real engineering — grilling, spec/ticket flows, T
- heygen-com/hyperframes [plugin] *63003* ['product-stars'] items=2 - HyperFrames by HeyGen. Write HTML, render video. Compositions, GSAP and runtime 
- ChromeDevTools/chrome-devtools-mcp [plugin,mcp-server] *53491*  items=4 - Control and inspect a live Chrome browser from your coding agent. Record perform
- confident-ai/deepeval [plugin] *18841* ['product-stars'] items=1 - Skills for adding DeepEval evaluations, tracing, datasets, Confident AI reports,
- huggingface/skills [plugin] *11166*  items=2 - Build, train, evaluate, and use open source AI models, datasets, and spaces.
- wonderwhy-er/DesktopCommanderMCP [plugin,mcp-server] *10041*  items=4 - MCP server for terminal commands, process management, and file operations across
- Eigenwise/atomic-agents [plugin,marketplace] *6283* ['product-stars'] items=3 - Comprehensive development workflow for building AI agents with the Atomic Agents
- exa-labs/exa-mcp-server [plugin,mcp-server] *5126*  items=3 - Exa AI web search, deep research, and content extraction. Provides MCP tools and
- NVIDIA/skills [plugin] *3587*  items=2 - Find the right NVIDIA skill for GPU acceleration, CUDA, AI agents, data loading,
- cloudflare/skills [plugin] *3056*  items=2 - Skills for the Cloudflare developer platform: Workers, Durable Objects, Agents S
- modelcontextprotocol/ext-apps [plugin] *2952*  items=3 - Skills for creating MCP Apps with the MCP Apps SDK
- aws/agent-toolkit-for-aws [plugin] *2867*  items=8 - Build, deploy, and operate AI agents on AWS. Skills for scaffolding agents with 
- expo/skills [plugin] *2836*  items=2 - Official Expo skills for building, deploying, upgrading, and debugging React Nat
- GoogleChrome/modern-web-guidance [plugin] *2470*  items=2 - Keep your coding agent up to date with the latest web best practices
- figma/mcp-server-guide [plugin,mcp-server] *2070*  items=4 - Figma design platform integration. Access design files, extract component inform
- MicrosoftDocs/mcp [plugin,mcp-server] *1948*  items=3 - Access official Microsoft documentation, API references, and code samples for Az
- stripe/ai [plugin,mcp-server] *1936*  items=3 - Stripe development plugin for Claude
- microsoft/azure-skills [plugin] *1566*  items=2 - Transform Claude into an Azure expert. This plugin integrates the Azure MCP serv
- atlassian/atlassian-mcp-server [plugin,mcp-server] *1091*  items=3 - Connect to Atlassian products including Jira and Confluence. Search and create i
- forcedotcom/sf-skills [plugin] *1083*  items=1 - Build Salesforce apps and agents using these core building blocks: metadata, Ape
- awslabs/agent-plugins [plugin] *918*  items=10 - Guide developers through adding maps, places search, geocoding, routing, and oth
- superdesigndev/superdesign-skill [plugin,skill] *670*  items=2 - Design or redesign frontend UI and marketing graphics on the Superdesign infinit
- duckdb/duckdb-skills [plugin] *607*  items=2 - DuckDB-powered skills for Claude Code: read any data file, attach and query Duck
- Shopify/Shopify-AI-Toolkit [plugin] *596*  items=2 - Shopify's AI Toolkit provides 18 development skills for building on the Shopify 
- ClickHouse/agent-skills [plugin] *547*  items=2 - 28 best practice rules for ClickHouse schema design, query optimization, and dat
- EpicGames/unreal-engine-skills-for-claude-code-plugin [plugin] *539*  items=2 - Control Unreal Editor directly from Claude Code via MCP. Hundreds of tools expos
- gitroomhq/postiz-agent [plugin] *515*  items=3 - Social media automation CLI for scheduling posts, managing integrations, uploadi
- makenotion/claude-code-notion-plugin [plugin] *494*  items=2 - Notion workspace integration. Search pages, create and update documents, manage 
- tavily-ai/skills [plugin] *488*  items=3 - Build AI applications with real-time web data using Tavily's search, extract, cr

## Top 30 by stars: listed
- DietrichGebert/ponytail [plugin] *162926*  items=2 - Lazy senior dev mode. Forces the simplest, shortest solution that actually works
- JuliusBrussee/caveman [plugin,skill] *111551*  items=2 - Auto-activation works differently per agent: Claude Code uses SessionStart hooks
- thedotmack/claude-mem [plugin,skill] *100516*  items=3 - Persistent memory system for Claude Code - seamlessly preserve context across se
- Egonex-AI/Understand-Anything [plugin,skill] *86203*  items=2 - Understand Anything is a Claude Code plugin that analyzes your project with a mu
- pbakaus/impeccable [plugin] *80866*  items=1 - Great design prompts require design vocabulary. Most people don't have it. You c
- mem0ai/mem0 [plugin] *67142* ['product-stars'] items=1 - Connect Mem0 to Claude to give your agent persistent memory across sessions. Cla
- mvanhorn/last30days-skill [plugin] *64178*  items=1 - last-30-days is a Claude Code skill that searches the web and delivers a structu
- coreyhaines31/marketingskills [plugin,skill] *54606*  items=3 - coreyhaines31
- DayuanJiang/next-ai-draw-io [plugin] *36224* ['product-stars'] items=1 - AI-powered Draw.io diagram generation with real-time browser preview. Create flo
- jarrodwatts/claude-hud [plugin,collection] *28500*  items=2 - Real-time statusline HUD for Claude Code - context health, tool activity, agent 
- mksglu/context-mode [plugin] *28440*  items=1 - MCP is the protocol for tool access. We're the virtualization layer for context.
- alirezarezvani/claude-skills [plugin,skill] *28149*  items=2 - Playwright Pro turns your AI coding agent into a senior test automation engineer
- promptfoo/promptfoo [plugin] *25986*  items=1 - Teaches AI coding agents to create and maintain promptfoo eval suites. Encodes b
- AgriciDaniel/claude-seo [plugin] *18881*  items=1 - Comprehensive SEO analysis plugin for Claude Code. Performs full site audits wit
- browser-use/browser-harness [plugin] *18426* ['product-stars'] items=1 - Open-source browser agent driven via CDP — direct browser control, 79K stars, YC
- Jeffallan/claude-skills [plugin,skill,collection] *11860*  items=3 - 66 specialized skills for full-stack development: 12 language experts (Python, T
- nicobailon/visual-explainer [plugin,collection] *10415*  items=3 - An agent skill that turns complex terminal output into styled HTML pages you act
- revfactory/harness [plugin,agent] *9173*  items=3 - Harness leverages Claude Code's agent team system to decompose complex tasks int
- Eventual-Inc/Daft [plugin] *5799* ['product-stars'] items=1 - Skills for working with Daft, a high-performance data engine for AI and multimod
- clidey/whodb [plugin] *5037* ['product-stars'] items=1 - Database management tools for Claude Code. Query databases, explore schemas, ana
- nyldn/claude-octopus [plugin] *4225*  items=2 - Multi-LLM orchestration for Claude Code and Cowork. Coordinates 8 AI providers (
- giancarloerra/SocratiCode [plugin,mcp-server] *3336*  items=2 - Enterprise-grade (40m+ lines) codebase intelligence in a zero-setup, private and
- Chachamaru127/claude-code-harness [plugin,agent] *3160*  items=2 - Autonomous Plan → Work → Review cycle for Claude Code. Go-native engine with 25×
- AgriciDaniel/claude-blog [plugin] *2382*  items=1 - AI-powered blog creation and optimization skill with 20 commands, 4 specialized 
- nizos/tdd-guard [plugin,collection] *2360*  items=2 - Enforces Test-Driven Development by intercepting file operations in Claude Code.
- severity1/claude-code-prompt-improver [plugin] *1952*  items=1 - Intelligent prompt optimization using skill-based architecture. Enriches vague p
- AminForou/mcp-gsc [plugin] *1918*  items=1 - Connect Google Search Console to Claude Code. Query rankings, inspect URLs, audi
- codeaholicguy/ai-devkit [plugin] *1646*  items=1 - A structured software development toolkit that helps Claude Code follow senior-e
- activeloopai/hivemind [plugin,skill,collection] *1624*  items=5 - Cloud-backed persistent memory for Claude Code powered by Deeplake. Automaticall
- kenryu42/cc-safety-net [plugin,collection] *1619*  items=3 - Block destructive git and filesystem commands before execution

## Top 30 by stars: verified
- affaan-m/ECC [collection] *278717*  items=1 - Top-notch, well-written resources covering "just about everything" from core eng
- multica-ai/andrej-karpathy-skills [collection] *219556*  items=1 - A drop-in CLAUDE.md distilling four behavioral guidelines for LLM-assisted codin
- morluto/rea [mcp-server] *216633* ['star-spike'] items=1 - Reverse engineer anything from your terminal or agent with one CLI and MCP serve
- firecrawl/firecrawl [skill] *191295* ['product-stars'] items=1 - Supercharge your AI agents with data from the web and beyond. Building the libra
- vercel/next.js [marketplace] *143226* ['product-stars'] items=1 - The React Framework
- garrytan/gstack [agent] *136331*  items=1 - Garry Tan's (Y Combinator) Claude Code setup and "open source software factory" 
- nextlevelbuilder/ui-ux-pro-max-skill [marketplace] *135597*  items=1 - An AI skill that provides design intelligence for building professional UI/UX ac
- browser-use/browser-use [mcp-server] *117903*  items=1 - Control a real Chrome browser to complete any task: fill forms, extract data, bo
- addyosmani/agent-skills [marketplace] *106322*  items=1 - Production-grade engineering skills for AI coding agents.
- paperclipai/paperclip [skill,mcp-server] *101685*  items=2 - The open-source app everyone uses to manage agents at work
- nexu-io/open-design [marketplace] *101011*  items=1 - The 1st Collaborative AI Design Agent Workspace. Local-first and open source. Cr
- ruvnet/RuView [marketplace] *97857*  items=1 - π RuView turns commodity WiFi signals into real-time spatial intelligence, vital
- Leonxlnx/taste-skill [marketplace] *95725*  items=1 - Agent skills that give coding agents taste: art direction, reference images and 
- storybookjs/storybook [marketplace] *91283* ['product-stars'] items=1 - Storybook is the industry standard workshop for building, documenting, and testi
- koala73/worldmonitor [skill,mcp-server] *88404* ['product-stars'] items=2 - Real-time global intelligence dashboard. AI-powered news aggregation, geopolitic
- D4Vinci/Scrapling [mcp-server] *87389*  items=1 - Web scraping with stealth HTTP, real browsers, and Cloudflare bypass. CSS select
- bytedance/deer-flow [skill] *83835*  items=1 - An open-source long-horizon SuperAgent harness that researches, codes, and creat
- tt-a1i/archify [skill,collection] *83178*  items=2 - An Agent Skill for Claude Code that generates interactive architecture, workflow
- netdata/netdata [mcp-server] *80930*  items=1 - Real-time infrastructure monitoring with metrics, logs, alerts, and ML-based ano
- shareAI-lab/learn-claude-code [collection] *78530*  items=1 - A really interesting analysis of how coding agents like Claude Code are designed
- ComposioHQ/awesome-claude-skills [skill] *77045*  items=1 - A curated list of awesome Claude Skills, resources, and tools for customizing Cl
- headroomlabs-ai/headroom [marketplace] *75288*  items=1 - Compress tool outputs, logs, files, and RAG chunks before they reach the LLM. 20
- ruvnet/ruflo [marketplace,mcp-server] *74590*  items=2 - 🌊 The original agent harness. Deploy intelligent multi-player swarms, coordinate
- thedaviddias/Front-End-Checklist [marketplace,mcp-server] *74455* ['product-stars'] items=2 - 🗂 The essential checklist for modern web development, for humans and AI agents
- career-ops-hq/career-ops [marketplace] *74415*  items=1 - Open-source AI job search agent and job finder: scan job boards, score each job 
- rohitg00/ai-engineering-from-scratch [skill] *68781* ['product-stars'] items=1 - Learn it. Build it. Ship it for others.
- usestrix/strix [skill] *68440* ['product-stars'] items=1 - Open-source AI penetration testing tool to find and fix your app’s vulnerabiliti
- calesthio/OpenMontage [skill] *68040*  items=1 - World's first open-source, agentic video production system. 12 production pipeli
- shanraisshan/claude-code-best-practice [skill] *67521*  items=1 - from vibe coding to agentic engineering - practice makes claude perfect
- xtekky/gpt4free [skill] *66840* ['product-stars'] items=1 - The official gpt4free repository | various collection of powerful language model

## Top 30 by stars: watch
- f/prompts.chat [marketplace] *172888* ['product-stars'] items=1 - f.k.a. Awesome ChatGPT Prompts. Share, discover, and collect prompts from the co
- opendatalab/MinerU [skill] *81695* ['product-stars'] items=1 - Transforms complex documents like PDFs and Office docs into LLM-ready markdown/J
- code-yeongyu/oh-my-openagent [skill] *70010* ['product-stars'] items=1 - OmO: Just type "mass ulw" keyword with your prompt. Now you are the master of gr
- bmad-code-org/BMAD-METHOD [skill] *54106* ['product-stars'] items=1 - Breakthrough Method for Agile Ai Driven Development
- Imbad0202/academic-research-skills [marketplace] *51857*  items=1 - Academic Research Skills for Claude Code: research → write → review → revise → f
- tldraw/tldraw [mcp-server] *50908*  items=1 - Draw and visually collaborate with your agents on tldraw's canvas.
- metabase/metabase [mcp-server] *49650*  items=1 - Lets AI clients search, explore, query, and visualize data in a Metabase instanc
- abhigyanpatwari/GitNexus [marketplace] *47872* ['product-stars'] items=1 - GitNexus: The Zero-Server Code Intelligence Engine
- PostHog/posthog [mcp-server] *40272*  items=1 - Official PostHog MCP Server for product analytics, feature flags, experiments, a
- openai/codex-plugin-cc [marketplace] *34184*  items=1 - Use Codex from Claude Code to review code or delegate tasks.
- zarazhangrui/frontend-slides [marketplace] *30615*  items=1 - Create beautiful slides on the web using a coding agent's frontend skills
- oraios/serena [mcp-server] *30240*  items=1 - A powerful toolkit for coding, providing semantic retrieval and editing capabili
- eyaltoledano/claude-task-master [marketplace] *28221*  items=1 - An AI-powered task-management system you can drop into Cursor, Lovable, Windsurf
- openai/skills [skill] *28057*  items=1 - Skills Catalog for Codex
- vercel/ai [skill] *27303* ['product-stars'] items=1 - The AI Toolkit for TypeScript. From the creators of Next.js, the AI SDK is a fre
- clockworklabs/SpacetimeDB [marketplace] *25291* ['product-stars'] items=1 - Development at the speed of light
- different-ai/openwork [mcp-server] *24089*  items=1 - Your OpenWork org's skills, plugins, workflows, and connections through one OAut
- HKUDS/AI-Trader [skill] *22775* ['product-stars'] items=1 - "AI-Trader: 100% Fully-Automated Agent-Native Trading"
- screenpipe/screenpipe [mcp-server] *21936*  items=1 - Search your local screen recordings, audio transcripts, and computer activity fr
- getpaseo/paseo [skill] *20814*  items=1 - Orchestrate multiple coding agents from desktop and mobile
- agent0ai/agent-zero [skill] *19457* ['product-stars'] items=1 - Agent Zero AI framework
- Canner/WrenAI [skill] *17867* ['product-stars'] items=1 - GenBI (Generative BI) for AI agents, an open-source, governed text-to-SQL throug
- longbridge/gpui-kit [skill] *17255* ['product-stars'] items=1 - Rust GUI components for building fantastic cross-platform desktop application by
- architecture-decision-record/architecture-decision-record [skill] *17194* ['product-stars'] items=1 - Architecture decision record (ADR) examples for software planning, IT leadership
- composio-community/awesome-codex-skills [skill] *16894*  items=1 - A curated list of practical Codex skills for automating workflows across the Cod
- travisvn/awesome-claude-skills [skill] *15396*  items=1 - A curated list of awesome Claude Skills, resources, and tools for customizing Cl
- superset-sh/superset [marketplace] *15150* ['product-stars'] items=1 - Superset is an agentic IDE to orchestrate 100+ coding agents in parallel. Run an
- millionco/react-doctor [skill] *15003* ['product-stars'] items=1 - Your agent writes bad React. This catches it
- kyegomez/OpenMythos [plugin] *14908*  items=1 - A theoretical reconstruction of the Claude Mythos architecture, built from first
- NevaMind-AI/memU [skill] *14537* ['product-stars'] items=1 - Personal memory across agents

## Random sample of 20 watch repos (of 464)
- Productfculty-aipm/PM-Copilot-by-Product-Faculty [plugin] *78*  items=1 - PM Copilot: 65+ framework-grounded PM skills across 12 domains, 17 command-based reasons=['fails: pushed<=90d (180)', 'fails: license (NOASSERTION)'] src=['topic']
- rasinmuhammed/misata [mcp-server] *70*  items=1 - Local, offline: multi-table synthetic data with joins that hold and exact totals reasons=['no corroborating signal'] src=['mcp-registry']
- bmad-code-org/BMAD-METHOD [skill] *54106* ['product-stars'] items=1 - Breakthrough Method for Agile Ai Driven Development reasons=['fails: license (NOASSERTION)'] src=['topic']
- pouyahasanamreji/continuum [mcp-server] *98*  items=1 - Shared memory + orchestration for your coding agents. Local-first MCP, vector RA reasons=['fails: pushed<=90d (152)', 'fails: license (None)'] src=['mcp-registry']
- dnotitia/akb [mcp-server] *162*  items=1 - Git-backed org memory for AI agents — hybrid search, tables, files & a URI graph reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- acogood/diffmode_free [marketplace] *165*  items=1 - Free guerrilla growth tactics for startups, the kind your competitors won't come reasons=['no corroborating signal'] src=['topic']
- RedPlanetHQ/core [marketplace] *1994*  items=1 - Your Personal AI OS reasons=['fails: license (NOASSERTION)'] src=['topic']
- portel-dev/ncp [mcp-server] *100*  items=1 - N-to-1 MCP Orchestration. Unified gateway for multiple MCP servers with intellig reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- longbridge/gpui-kit [skill] *17255* ['product-stars'] items=1 - Rust GUI components for building fantastic cross-platform desktop application by reasons=['fails: license (NOASSERTION)'] src=['topic']
- djadmin/fort [plugin,marketplace] *80*  items=2 - Audit and fix your Mac's security in one command. No agent, no signup, open sour reasons=['fails: pushed<=90d (96)'] src=['code', 'marketplace-expansion']
- LichAmnesia/lich-skills [plugin,marketplace] *234*  items=2 - skills-map router (picks which skill to use) + go-no-go Stage 0 gate (NO-GO is t reasons=['fails: pushed<=90d (126)'] src=['code', 'marketplace-expansion']
- kentcdodds/kody [mcp-server] *787*  items=1 - Your agents' cloud. MCP server with search, execute, packages, jobs, secrets, an reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- Snailclimb/AIGuide [skill] *682*  items=1 - AI 应用开发、AI 编程实战与面试指南，涵盖 LLM、Agent、RAG、MCP、Claude Code、Codex 等核心技术与工程实践。 reasons=['fails: pushed<=90d (99)', 'fails: license (None)'] src=['topic']
- peakspec/marshal [skill] *53*  items=1 - Open-source multi-agent PM-ops team — associate PM, GTM, QA, data-analyst subage reasons=['fails: license (None)'] src=['topic']
- KnockOutEZ/wigolo [skill,mcp-server] *5476*  items=2 - The go-to web for your AI coding agent — local-first search, fetch, crawl & rese reasons=['fails: license (NOASSERTION)'] src=['mcp-registry', 'topic']
- bda-research/node-crawler [skill] *6797* ['product-stars'] items=1 - Web Crawler/Spider for NodeJS + server-side jQuery ;-) reasons=['fails: pushed<=90d (117)'] src=['topic']
- gradion-ai/ipybox [mcp-server] *76*  items=1 - Unified execution environment for Python code, shell commands, and programmatic  reasons=['fails: pushed<=90d (124)'] src=['mcp-registry']
- promptadvisers/claudex [plugin,marketplace] *159*  items=3 - Autonomous Claude + Codex review loop for Claude Code. Plan mode + read-only rev reasons=['fails: pushed<=90d (168)'] src=['code', 'marketplace-expansion']
- oil-oil/draw-ui [skill] *495*  items=1 - UI design & mockup skill for Claude Code & Codex, from screenshot to code. 帮你出 U reasons=['fails: license (None)'] src=['topic']
- V-Songbird/hush [plugin] *52*  items=1 - Quieter sessions for Claude Code: less narration, shorter tool output and concis reasons=['no corroborating signal'] src=['topic']

## Errors
- none

## Rate limit
- REST calls this run (uncached): {"core": 80, "search": 41}; last seen: {"core": {"remaining": "4920", "limit": "5000"}, "search": {"remaining": "28", "limit": "30"}}
- GraphQL: 184 calls, cost 90, remaining 4813/5000, stopped early: False
- REST stopped early: False
- repos lacking metadata: 3511; enriched this run: 28486