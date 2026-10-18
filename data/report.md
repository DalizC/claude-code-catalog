# Catalog report 2026-10-18
Mode: **token**; run time 1646s
Repos (deduped): 3042; flat entries before dedup: 21417

## Tier x type BEFORE dedup (flat entries)
- new/mcp-server: 12100
- listed/plugin: 2283
- watch/mcp-server: 2092
- verified/mcp-server: 1124
- watch/skill: 504
- verified/skill: 450
- official/plugin: 376
- verified/plugin: 365
- watch/marketplace: 346
- verified/marketplace: 327
- watch/plugin: 316
- watch/agent: 217
- verified/collection: 193
- anthropic/plugin: 165
- new/skill: 157
- new/marketplace: 129
- new/plugin: 118
- verified/agent: 54
- new/agent: 27
- anthropic/marketplace: 14
- anthropic/collection: 4
- anthropic/agent: 1
- watch/collection: 1

## Tier AFTER dedup (repos)
- verified: 1687
- watch: 469
- new: 287
- official: 256
- anthropic: 175
- listed: 168

## Type AFTER dedup (items)
- mcp-server: 1542
- plugin: 1445
- skill: 745
- marketplace: 471
- collection: 120
- agent: 52

## Primary type AFTER dedup (repos)
- mcp-server: 969
- plugin: 867
- skill: 681
- marketplace: 399
- collection: 88
- agent: 38

## Repos by discovery source family
- topic: 1232
- mcp-registry: 1091
- anthropic: 477
- code: 211
- anthropic-org: 205
- curated: 145
- marketplace-expansion: 40

## Flags (all tiers)
- product-stars: 214
- star-spike: 13
- star-anomaly: 1

## star-anomaly by tier
- new: 1

## Metadata gaps
- repos without metadata: 181
- reasons: {'unfetched': 181}

## MCP-only repos excluded: 54
- assafelovic/gpt-researcher *30151* ['ai', 'python', 'agent', 'automation', 'research'] - An autonomous agent that conducts deep research on any data using any LLM provid
- pascalorg/editor *24947* ['3d', 'architecture', 'bim', 'cad', 'editor'] - Open-source 3D architectural editor with a local CLI, MCP tools, and practical w
- mrexodia/ida-pro-mcp *12989* ['ida-plugin', 'ida-pro', 'mcp', 'mcp-server', 'modelcontextprotocol'] - AI-powered reverse engineering assistant that bridges IDA Pro with language mode
- mcp-use/mcp-use *10779* ['mcp', 'model-context-protocol', 'apps-sdk', 'mcp-apps', 'mcp-inspector'] - The fullstack MCP framework to develop MCP Apps for ChatGPT / Claude & MCP Serve
- Agents365-ai/drawio-skill *10210* ['drawio', 'diagram', 'agent-skills', 'architecture-diagram', 'claude-code'] - Agent skill that turns natural language, code, Terraform/K8s, SQL, OpenAPI, Asyn
- stickerdaniel/linkedin-mcp-server *3913* ['linkedin', 'linkedin-scraper', 'mcp', 'mcp-server', 'linkedin-mcp'] - Open-source MCP server for LinkedIn. Give Claude and any MCP-compatible AI agent
- jordan-gibbs/hyperresearch *3874* ['agents', 'agentskills', 'claude-code', 'deep-research', 'deep-research-agent'] - Convert Claude Code or Codex into the most intelligent Deep Research Agent. Coll
- taylorwilsdon/google_workspace_mcp *3360* ['ai', 'gmail', 'google-calendar', 'google-workspace', 'llm'] - Control Gmail, Google Calendar, Docs, Sheets, Slides, Chat, Forms, Tasks, Search
- duty1g/x64dbg-mcp-server *2532* ['ai-agents', 'ai-debugging', 'binary-analysis', 'claude', 'claude-code'] - x64dbg-MCP Server is a native MCP (Model Context Protocol) plugin for x64dbg tha
- redhat-et/ripwire *2454* ['ai-agents', 'claude', 'cli', 'coding-agents', 'context-engineering'] - The ripgrep of AI context: a zero-dependency C++23 CLI + MCP server for coding a
- alpic-ai/skybridge *2162* ['agent', 'ai', 'apps-sdk', 'chatgpt', 'claude'] - Skybridge is a full-stack TypeScript framework for MCP Apps and ChatGPT Apps. Ty
- kajisho5/ffmpeg-skill *1984* ['audio-processing', 'captions', 'ffmpeg', 'subtitles', 'video'] - Local video editor for coding agents: 42 FFmpeg tools with a machine-readable co
- study8677/repobrain *1346* ['claude-code', 'codex-cli', 'developer-tools', 'mcp-server', 'windsurf'] - 🧠 RepoBrain (formerly Antigravity) — Give your repo a brain. ChatGPT for your co
- agentrq/agentrq *1162* ['agentic-ai', 'agentic-workflow', 'agents', 'task', 'task-manager'] - AgentRQ: Human-in-loop realtime conversational task manager for AI Agents. Self-
- CodeAbra/iai-personal-memory-engine *911* ['claude', 'claude-code', 'local-first', 'mcp', 'mcp-server'] - A cyber brain for your AI. It never forgets a detail, remembers exactly what you

## Degradation
- registry complete: True (457 pages, 45631 entries)
- MCP servers merged from the previous catalog (not re-fetched): 0
- GraphQL 403s: 0 (secondary rate limit: 0); retries: 5; queries that gave up: 0
- HTTP retries (5xx/network): 1
- repos with stale metadata reused from the previous catalog (meta_stale): 0

## MCP Registry
- {"pages": 457, "fetched": 45631, "kept": 45080, "dropped": 551, "bad": 0, "complete": true, "excluded_remote_only": 13652, "excluded_low_signal": 16112, "fallback_merged": 0, "records": 1091, "attached_existing": 126, "new_repo": 965, "remote_only": 0, "tiers": {"official": 24, "listed": 20, "verified": 777, "new": 112, "watch": 158}}

## Top 20 by trend_7d
- morluto/rea +232640 (297.78%) ['star-spike']
- debpalash/VoiceStudio +16156 (28.06%) ['star-spike', 'product-stars']
- mattpocock/skills +10492 (3.68%) []
- cathrynlavery/diagram-design +7969 (16.2%) []
- affaan-m/ECC +6056 (2.19%) []
- DietrichGebert/ponytail +5772 (3.59%) []
- heygen-com/hyperframes +5680 (9.4%) ['product-stars']
- ifixai-ai/iFixAi +5579 (23.64%) ['product-stars']
- anthropics/claude-plugins-official +4328 (11.5%) []
- mksglu/context-mode +4136 (15.66%) []
- K-Dense-AI/scientific-agent-skills +4067 (8.42%) []
- Leonxlnx/taste-skill +4041 (4.28%) []
- obra/superpowers +3987 (1.34%) []
- paperclipai/paperclip +3882 (3.89%) []
- rohitg00/ai-engineering-from-scratch +3855 (5.76%) ['product-stars']
- hugohe3/ppt-master +3537 (5.93%) ['product-stars']
- lexmount/moli +3526 (22.34%) ['product-stars']
- addyosmani/agent-skills +3327 (3.18%) []
- tt-a1i/archify +3244 (3.97%) []
- pbakaus/impeccable +2927 (3.68%) []

## Code search vs topic search
- repos found by code search: 211
- also in topic search: 15
- code-only: 179; tiers: {'official': 1, 'verified': 91, 'watch': 68, 'new': 19}

## Top 30 by stars: anthropic
- anthropics/skills [marketplace,collection] *181828*  items=2 - Anthropic example skills
- anthropics/claude-code [marketplace,agent] *151924*  items=2 - Bundled plugins for Claude Code including Agent SDK development tools, PR review
- anthropics/claude-plugins-official [plugin,marketplace,collection] *41969*  items=3 - Directory of popular Claude Code extensions including development tools, product
- anthropics/financial-services [marketplace] *40210*  items=1 - 
- anthropics/knowledge-work-plugins [marketplace] *30035*  items=1 - 
- anthropics/claude-for-legal [marketplace] *9722*  items=1 - Reference agents, skills, and data connectors for the legal workflows we see mos
- anthropics/claude-code-action [collection] *9561*  items=1 - The official GitHub Action for running Claude Code in CI: mention @claude in iss
- anthropics/claude-code-security-review [collection] *6414*  items=1 - An official AI-powered security-review GitHub Action that uses Claude to analyze
- anthropics/claude-plugins-community [marketplace] *4684*  items=1 - 
- anthropics/commerce-agents [marketplace] *3265*  items=1 - Claude Commerce Agents: the commerce-builder plugin for building shopping and me
- anthropics/life-sciences [marketplace] *622*  items=1 - MCP servers and skills for life sciences research, data analysis, and discovery
- anthropics/k12-teacher-skills [marketplace] *570*  items=1 - Plugin marketplace for K-12 Education and Claude for Teachers.
- anthropics/healthcare [marketplace] *426*  items=1 - Claude for Healthcare — one plugin bundling payer, provider, pharma, and general
- anthropics/oncall-kit [marketplace] *241*  items=1 - 
- anthropics/claude-for-financial-advisors [plugin,marketplace] *105*  items=2 - Ready-to-run workflows for financial advisors in Claude Cowork, drawing live dat
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
- obra/superpowers [plugin,skill] *301300*  items=3 - Superpowers teaches Claude brainstorming, subagent driven development with built
- mattpocock/skills [plugin] *295294*  items=2 - Matt Pocock's agent skills for real engineering — grilling, spec/ticket flows, T
- heygen-com/hyperframes [plugin] *66117* ['product-stars'] items=2 - HyperFrames by HeyGen. Write HTML, render video. Compositions, GSAP and runtime 
- ChromeDevTools/chrome-devtools-mcp [plugin,mcp-server] *53747*  items=4 - Control and inspect a live Chrome browser from your coding agent. Record perform
- confident-ai/deepeval [plugin] *18928* ['product-stars'] items=1 - Skills for adding DeepEval evaluations, tracing, datasets, Confident AI reports,
- huggingface/skills [plugin] *11180*  items=2 - Build, train, evaluate, and use open source AI models, datasets, and spaces.
- wonderwhy-er/DesktopCommanderMCP [plugin,mcp-server] *10089*  items=4 - MCP server for terminal commands, process management, and file operations across
- Eigenwise/atomic-agents [plugin,marketplace] *6288* ['product-stars'] items=3 - Comprehensive development workflow for building AI agents with the Atomic Agents
- exa-labs/exa-mcp-server [plugin,mcp-server] *5139*  items=3 - Exa AI web search, deep research, and content extraction. Provides MCP tools and
- NVIDIA/skills [plugin] *3633*  items=2 - Find the right NVIDIA skill for GPU acceleration, CUDA, AI agents, data loading,
- cloudflare/skills [plugin] *3091*  items=2 - Skills for the Cloudflare developer platform: Workers, Durable Objects, Agents S
- modelcontextprotocol/ext-apps [plugin] *2968*  items=3 - Skills for creating MCP Apps with the MCP Apps SDK
- expo/skills [plugin] *2906*  items=2 - Official Expo skills for building, deploying, upgrading, and debugging React Nat
- aws/agent-toolkit-for-aws [plugin] *2902*  items=8 - Build, deploy, and operate AI agents on AWS. Skills for scaffolding agents with 
- GoogleChrome/modern-web-guidance [plugin] *2495*  items=2 - Keep your coding agent up to date with the latest web best practices
- figma/mcp-server-guide [plugin,mcp-server] *2082*  items=4 - Figma design platform integration. Access design files, extract component inform
- stripe/ai [plugin,mcp-server] *1957*  items=3 - Stripe development plugin for Claude
- MicrosoftDocs/mcp [plugin,mcp-server] *1950*  items=3 - Access official Microsoft documentation, API references, and code samples for Az
- microsoft/azure-skills [plugin] *1574*  items=2 - Transform Claude into an Azure expert. This plugin integrates the Azure MCP serv
- atlassian/atlassian-mcp-server [plugin,mcp-server] *1102*  items=3 - Connect to Atlassian products including Jira and Confluence. Search and create i
- forcedotcom/sf-skills [plugin] *1101*  items=1 - Build Salesforce apps and agents using these core building blocks: metadata, Ape
- awslabs/agent-plugins [plugin] *924*  items=10 - Guide developers through adding maps, places search, geocoding, routing, and oth
- superdesigndev/superdesign-skill [plugin,skill] *832*  items=2 - Design or redesign frontend UI and marketing graphics on the Superdesign infinit
- duckdb/duckdb-skills [plugin] *609*  items=2 - DuckDB-powered skills for Claude Code: read any data file, attach and query Duck
- Shopify/Shopify-AI-Toolkit [plugin] *604*  items=2 - Shopify's AI Toolkit provides 18 development skills for building on the Shopify 
- EpicGames/unreal-engine-skills-for-claude-code-plugin [plugin] *552*  items=2 - Control Unreal Editor directly from Claude Code via MCP. Hundreds of tools expos
- ClickHouse/agent-skills [plugin] *550*  items=2 - 28 best practice rules for ClickHouse schema design, query optimization, and dat
- gitroomhq/postiz-agent [plugin] *521*  items=4 - Social media automation CLI for scheduling posts, managing integrations, uploadi
- makenotion/claude-code-notion-plugin [plugin] *496*  items=2 - Notion workspace integration. Search pages, create and update documents, manage 
- tavily-ai/skills [plugin] *489*  items=3 - Build AI applications with real-time web data using Tavily's search, extract, cr

## Top 30 by stars: listed
- DietrichGebert/ponytail [plugin] *166374*  items=2 - Lazy senior dev mode. Forces the simplest, shortest solution that actually works
- JuliusBrussee/caveman [plugin,skill] *113329*  items=2 - Auto-activation works differently per agent: Claude Code uses SessionStart hooks
- thedotmack/claude-mem [plugin,skill] *101460*  items=3 - Persistent memory system for Claude Code - seamlessly preserve context across se
- Egonex-AI/Understand-Anything [plugin,skill] *86826*  items=2 - Understand Anything is a Claude Code plugin that analyzes your project with a mu
- pbakaus/impeccable [plugin] *82425*  items=1 - Great design prompts require design vocabulary. Most people don't have it. You c
- mem0ai/mem0 [plugin] *67370* ['product-stars'] items=1 - Connect Mem0 to Claude to give your agent persistent memory across sessions. Cla
- mvanhorn/last30days-skill [plugin] *64606*  items=1 - last-30-days is a Claude Code skill that searches the web and delivers a structu
- coreyhaines31/marketingskills [plugin,skill] *55273*  items=3 - coreyhaines31
- DayuanJiang/next-ai-draw-io [plugin,mcp-server] *36311*  items=2 - AI-powered Draw.io diagram generation with real-time browser preview. Create flo
- mksglu/context-mode [plugin] *30553*  items=1 - MCP is the protocol for tool access. We're the virtualization layer for context.
- jarrodwatts/claude-hud [plugin,collection] *28618*  items=2 - Real-time statusline HUD for Claude Code - context health, tool activity, agent 
- alirezarezvani/claude-skills [plugin,skill] *28337*  items=2 - Playwright Pro turns your AI coding agent into a senior test automation engineer
- promptfoo/promptfoo [plugin] *26097*  items=1 - Teaches AI coding agents to create and maintain promptfoo eval suites. Encodes b
- AgriciDaniel/claude-seo [plugin] *19143*  items=1 - Comprehensive SEO analysis plugin for Claude Code. Performs full site audits wit
- browser-use/browser-harness [plugin] *18471*  items=1 - Open-source browser agent driven via CDP — direct browser control, 79K stars, YC
- Jeffallan/claude-skills [plugin,skill,collection] *11920*  items=3 - 66 specialized skills for full-stack development: 12 language experts (Python, T
- nicobailon/visual-explainer [plugin,collection] *10491*  items=3 - An agent skill that turns complex terminal output into styled HTML pages you act
- revfactory/harness [plugin,agent] *9196*  items=3 - Harness leverages Claude Code's agent team system to decompose complex tasks int
- Eventual-Inc/Daft [plugin] *5806* ['product-stars'] items=1 - Skills for working with Daft, a high-performance data engine for AI and multimod
- clidey/whodb [plugin] *5035* ['product-stars'] items=1 - Database management tools for Claude Code. Query databases, explore schemas, ana
- nyldn/claude-octopus [plugin] *4253*  items=2 - Multi-LLM orchestration for Claude Code and Cowork. Coordinates 8 AI providers (
- giancarloerra/SocratiCode [plugin,mcp-server] *3341*  items=2 - Enterprise-grade (40m+ lines) codebase intelligence in a zero-setup, private and
- Chachamaru127/claude-code-harness [plugin,agent] *3169*  items=2 - Autonomous Plan → Work → Review cycle for Claude Code. Go-native engine with 25×
- AgriciDaniel/claude-blog [plugin] *2416*  items=1 - AI-powered blog creation and optimization skill with 20 commands, 4 specialized 
- nizos/tdd-guard [plugin,collection] *2361*  items=2 - Enforces Test-Driven Development by intercepting file operations in Claude Code.
- AminForou/mcp-gsc [plugin] *1959*  items=1 - Connect Google Search Console to Claude Code. Query rankings, inspect URLs, audi
- severity1/claude-code-prompt-improver [plugin] *1958*  items=1 - Intelligent prompt optimization using skill-based architecture. Enriches vague p
- kenryu42/cc-safety-net [plugin,collection] *1656*  items=3 - Block destructive git and filesystem commands before execution
- codeaholicguy/ai-devkit [plugin] *1648*  items=1 - A structured software development toolkit that helps Claude Code follow senior-e
- activeloopai/hivemind [plugin,skill,collection] *1627*  items=5 - Cloud-backed persistent memory for Claude Code powered by Deeplake. Automaticall

## Top 30 by stars: verified
- morluto/rea [mcp-server] *310766* ['star-spike'] items=1 - Reverse engineer anything from your terminal or agent with one CLI and MCP serve
- affaan-m/ECC [collection] *282687*  items=1 - Top-notch, well-written resources covering "just about everything" from core eng
- multica-ai/andrej-karpathy-skills [collection] *220725*  items=1 - A drop-in CLAUDE.md distilling four behavioral guidelines for LLM-assisted codin
- firecrawl/firecrawl [skill] *192551* ['product-stars'] items=1 - Supercharge your AI agents with data from the web and beyond. Building the libra
- vercel/next.js [marketplace] *143060* ['product-stars'] items=1 - The React Framework
- nextlevelbuilder/ui-ux-pro-max-skill [marketplace] *136947*  items=1 - An AI skill that provides design intelligence for building professional UI/UX ac
- garrytan/gstack [agent] *136802*  items=1 - Garry Tan's (Y Combinator) Claude Code setup and "open source software factory" 
- browser-use/browser-use [mcp-server] *118353*  items=1 - Control a real Chrome browser to complete any task: fill forms, extract data, bo
- addyosmani/agent-skills [marketplace] *107911*  items=1 - Production-grade engineering skills for AI coding agents.
- paperclipai/paperclip [skill,mcp-server] *103745*  items=2 - The open-source app everyone uses to manage agents at work
- nexu-io/open-design [marketplace] *102009*  items=1 - The 1st Collaborative AI Design Agent Workspace. Local-first and open source. Cr
- ruvnet/RuView [marketplace] *98525*  items=1 - π RuView turns commodity WiFi signals into real-time spatial intelligence, vital
- Leonxlnx/taste-skill [marketplace] *98521*  items=1 - Agent skills that give coding agents taste: art direction, reference images and 
- storybookjs/storybook [marketplace] *91322* ['product-stars'] items=1 - Storybook is the industry standard workshop for building, documenting, and testi
- koala73/worldmonitor [skill,mcp-server] *88652* ['product-stars'] items=2 - Real-time global intelligence dashboard. AI-powered news aggregation, geopolitic
- D4Vinci/Scrapling [mcp-server] *88334*  items=1 - Web scraping with stealth HTTP, real browsers, and Cloudflare bypass. CSS select
- tt-a1i/archify [skill,collection] *84990*  items=2 - An Agent Skill for Claude Code that generates interactive architecture, workflow
- bytedance/deer-flow [skill] *84044*  items=1 - An open-source long-horizon SuperAgent harness that researches, codes, and creat
- netdata/netdata [mcp-server] *80992*  items=1 - Real-time infrastructure monitoring with metrics, logs, alerts, and ML-based ano
- shareAI-lab/learn-claude-code [collection] *78755*  items=1 - A really interesting analysis of how coding agents like Claude Code are designed
- ComposioHQ/awesome-claude-skills [skill] *77323*  items=1 - A curated list of awesome Claude Skills, resources, and tools for customizing Cl
- ruvnet/ruflo [marketplace,mcp-server] *76167*  items=2 - 🌊 The original agent harness. Deploy intelligent multi-player swarms, coordinate
- headroomlabs-ai/headroom [marketplace] *75611*  items=1 - Compress tool outputs, logs, files, and RAG chunks before they reach the LLM. 20
- career-ops-hq/career-ops [marketplace] *75381*  items=1 - Open-source AI job search agent and job finder: scan job boards, score each job 
- thedaviddias/Front-End-Checklist [marketplace,mcp-server] *74491* ['product-stars'] items=2 - 🗂 The essential checklist for modern web development, for humans and AI agents
- debpalash/VoiceStudio [skill] *73731* ['star-spike', 'product-stars'] items=1 - VoiceStudio is the open-source, fully-local ElevenLabs alternative — voice cloni
- rohitg00/ai-engineering-from-scratch [skill] *70744* ['product-stars'] items=1 - Learn AI Engineering! Learn it. Build it. Ship it for others.
- usestrix/strix [skill] *69274* ['product-stars'] items=1 - Open-source AI penetration testing tool to find and fix your app’s vulnerabiliti
- calesthio/OpenMontage [skill] *69253*  items=1 - World's first open-source, agentic video production system. 12 production pipeli
- shanraisshan/claude-code-best-practice [skill] *67679*  items=1 - from vibe coding to agentic engineering - practice makes claude perfect

## Top 30 by stars: watch
- f/prompts.chat [marketplace] *173274* ['product-stars'] items=1 - f.k.a. Awesome ChatGPT Prompts. Share, discover, and collect prompts from the co
- opendatalab/MinerU [skill] *81943* ['product-stars'] items=1 - Transforms complex documents like PDFs and Office docs into LLM-ready markdown/J
- code-yeongyu/oh-my-openagent [skill] *70149* ['product-stars'] items=1 - OmO: Just type "mass ulw" keyword with your prompt. Now you are the master of gr
- bmad-code-org/BMAD-METHOD [skill] *54269* ['product-stars'] items=1 - Breakthrough Method for Agile Ai Driven Development
- Imbad0202/academic-research-skills [marketplace] *52580*  items=1 - Academic Research Skills for Claude Code: research → write → review → revise → f
- tldraw/tldraw [mcp-server] *50965*  items=1 - Draw and visually collaborate with your agents on tldraw's canvas.
- metabase/metabase [mcp-server] *49719*  items=1 - Lets AI clients search, explore, query, and visualize data in a Metabase instanc
- abhigyanpatwari/GitNexus [marketplace] *47930* ['product-stars'] items=1 - GitNexus: The Zero-Server Code Intelligence Engine
- PostHog/posthog [mcp-server] *40331*  items=1 - Official PostHog MCP Server for product analytics, feature flags, experiments, a
- openai/codex-plugin-cc [marketplace] *34354*  items=1 - Use Codex from Claude Code to review code or delegate tasks.
- zarazhangrui/frontend-slides [marketplace] *30826*  items=1 - Create beautiful slides on the web using a coding agent's frontend skills
- oraios/serena [mcp-server] *30353*  items=1 - A powerful toolkit for coding, providing semantic retrieval and editing capabili
- eyaltoledano/claude-task-master [marketplace] *28240*  items=1 - An AI-powered task-management system you can drop into Cursor, Lovable, Windsurf
- openai/skills [skill] *28134*  items=1 - Skills Catalog for Codex
- vercel/ai [skill] *27371* ['product-stars'] items=1 - The AI Toolkit for TypeScript. From the creators of Next.js, the AI SDK is a fre
- clockworklabs/SpacetimeDB [marketplace] *25312* ['product-stars'] items=1 - Development at the speed of light
- different-ai/openwork [mcp-server] *24160*  items=1 - Your OpenWork org's skills, plugins, workflows, and connections through one OAut
- HKUDS/AI-Trader [skill] *22829* ['product-stars'] items=1 - "AI-Trader: 100% Fully-Automated Agent-Native Trading"
- screenpipe/screenpipe [mcp-server] *21970*  items=1 - Search your local screen recordings, audio transcripts, and computer activity fr
- getpaseo/paseo [skill] *21237*  items=1 - Orchestrate multiple coding agents from desktop and mobile
- agent0ai/agent-zero [skill] *19498* ['product-stars'] items=1 - Agent Zero AI framework
- longbridge/gpui-kit [skill] *17998* ['product-stars'] items=1 - Rust GUI components for building fantastic cross-platform desktop application by
- Canner/WrenAI [skill] *17888* ['product-stars'] items=1 - GenBI (Generative BI) for AI agents, an open-source, governed text-to-SQL throug
- architecture-decision-record/architecture-decision-record [skill] *17235* ['product-stars'] items=1 - Architecture decision record (ADR) examples for software planning, IT leadership
- composio-community/awesome-codex-skills [skill] *16945*  items=1 - A curated list of practical Codex skills for automating workflows across the Cod
- travisvn/awesome-claude-skills [skill] *15451*  items=1 - A curated list of awesome Claude Skills, resources, and tools for customizing Cl
- superset-sh/superset [marketplace] *15324* ['product-stars'] items=1 - Superset is an agentic IDE to orchestrate 100+ coding agents in parallel. Run an
- millionco/react-doctor [skill] *15012* ['product-stars'] items=1 - Your agent writes bad React. This catches it
- kyegomez/OpenMythos [plugin] *14912*  items=1 - A theoretical reconstruction of the Claude Mythos architecture, built from first
- NevaMind-AI/memU [skill] *14551* ['product-stars'] items=1 - Personal memory across agents

## Random sample of 20 watch repos (of 469)
- OdradekAI/bundles-forge [marketplace] *228*  items=1 - An agentic skills framework & bundle-plugin engineering toolkit that works. reasons=['fails: pushed<=90d (174)'] src=['topic']
- ralforion/orionbelt-analytics [mcp-server] *50*  items=1 - Ontology-based MCP server for database schema analysis and RDF/OWL ontology gene reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- Imbad0202/academic-research-skills [marketplace] *52580*  items=1 - Academic Research Skills for Claude Code: research → write → review → revise → f reasons=['fails: license (NOASSERTION)'] src=['topic']
- pantalytics/odoo-mcp-pro [mcp-server] *87*  items=1 - Connect AI to Odoo ERP 14-20: search, create, update and manage records in natur reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- clarilayer/clarilayer [mcp-server] *82*  items=1 - Individual-analyst context layer: recall, remember, and reconcile your data and  reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- cozytab/fable5-mode [skill] *106*  items=1 - Make Opus 4.8 (or any Claude model) work like Claude Fable 5 — a Claude Code ski reasons=['fails: pushed<=90d (94)'] src=['topic']
- aldefy/compose-skill [marketplace] *597*  items=1 - Jetpack Compose Agent Skill — AI-powered coding guidance with actual androidx/an reasons=['fails: license (NOASSERTION)'] src=['topic']
- oraios/serena [mcp-server] *30353*  items=1 - A powerful toolkit for coding, providing semantic retrieval and editing capabili reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- superset-sh/superset [marketplace] *15324* ['product-stars'] items=1 - Superset is an agentic IDE to orchestrate 100+ coding agents in parallel. Run an reasons=['fails: license (NOASSERTION)'] src=['topic']
- Equilateral-AI/equilateral-agents-open-core [marketplace] *61*  items=1 - Production-ready multi-agent orchestration. Revolutionary architecture for enter reasons=['fails: license (NOASSERTION)'] src=['code']
- djadmin/fort [marketplace] *80*  items=1 - Audit and fix your Mac's security in one command. No agent, no signup, open sour reasons=['fails: pushed<=90d (100)', 'no corroborating signal'] src=['code']
- jgravelle/jdocmunch-mcp [mcp-server] *205*  items=1 - Section-level doc search for .md, .rst, .adoc, .ipynb, .html, .yaml, .json, and  reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- JoelLewis/finance_skills [marketplace] *211*  items=1 - Claude Code skill plugins for financial services — 81 skills across 7 domain plu reasons=['fails: pushed<=90d (91)'] src=['topic']
- alirezarezvani/claude-code-tresor [skill] *782*  items=1 - A world-class collection of Claude Code utilities: autonomous skills, expert age reasons=['fails: pushed<=90d (106)'] src=['topic']
- superdesigndev/treg [marketplace,mcp-server] *5698* ['product-stars'] items=2 - OpenRouter for agent tools. Join community here: https://discord.gg/6mQYYfFMAn reasons=['fails: license (NOASSERTION)'] src=['mcp-registry', 'topic']
- jihe520/MathModelAgent [skill] *6220*  items=1 - 🤖📐专为数学建模设计的 Agent & skills ,自动完成数学建模，生成一份完整的可以直接提交的论文。 An Agent Designed for Mat reasons=['fails: license (None)'] src=['topic']
- ethbak/icon-composer-mcp [mcp-server] *61*  items=1 - CLI and MCP server for creating Apple .icon bundles with Liquid Glass effects (i reasons=['no corroborating signal'] src=['mcp-registry']
- jurisupport/jurisupport-plugins [marketplace] *85*  items=1 -  reasons=['fails: license (NOASSERTION)'] src=['code']
- geekjourneyx/claude-design-card [skill] *464*  items=1 - Claude Code skill for generating design cards in 14 formats — platform covers, s reasons=['fails: pushed<=90d (143)', 'fails: license (None)'] src=['topic']
- jeremylongshore/excel-analyst-pro-skill-md [plugin] *57*  items=1 - Professional financial modeling toolkit for Claude Code with auto-invoked Skills reasons=['fails: license (NOASSERTION)'] src=['topic']

## Errors
- none

## Rate limit
- REST calls this run (uncached): {"core": 127, "search": 41}; last seen: {"core": {"remaining": "4873", "limit": "5000"}, "search": {"remaining": "8", "limit": "30"}}
- GraphQL: 192 calls, cost 78, remaining 4800/5000, stopped early: False
- REST stopped early: False
- repos lacking metadata: 3613; enriched this run: 29565