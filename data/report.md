# Catalog report 2026-10-07
Mode: **token**; run time 356s
Repos (deduped): 2531; flat entries before dedup: 19523

## Tier x type BEFORE dedup (flat entries)
- new/mcp-server: 11085
- listed/plugin: 2284
- watch/mcp-server: 1950
- verified/mcp-server: 1062
- watch/skill: 476
- watch/marketplace: 351
- verified/skill: 343
- watch/plugin: 315
- official/plugin: 276
- verified/plugin: 251
- verified/marketplace: 214
- watch/agent: 199
- verified/collection: 164
- new/marketplace: 143
- new/skill: 127
- new/plugin: 99
- anthropic/plugin: 57
- verified/agent: 36
- new/agent: 35
- anthropic/marketplace: 4
- anthropic/collection: 4
- anthropic/agent: 1
- watch/collection: 1

## Tier AFTER dedup (repos)
- verified: 1415
- watch: 420
- official: 241
- new: 229
- listed: 163
- anthropic: 63

## Type AFTER dedup (items)
- mcp-server: 1336
- plugin: 1088
- skill: 593
- marketplace: 316
- collection: 102
- agent: 40

## Primary type AFTER dedup (repos)
- mcp-server: 909
- plugin: 742
- skill: 528
- marketplace: 252
- collection: 73
- agent: 27

## Repos by discovery source family
- mcp-registry: 995
- topic: 940
- anthropic: 465
- code: 189
- curated: 125
- marketplace-expansion: 39

## Flags (all tiers)
- star-anomaly: 2

## star-anomaly by tier
- new: 2

## Metadata gaps
- repos without metadata: 86
- reasons: {'unfetched': 86}

## MCP-only repos excluded: 46
- pascalorg/editor *24700* ['3d', 'architecture', 'bim', 'cad', 'editor'] - Open-source 3D architectural editor with a local CLI, MCP tools, and practical w
- mcp-use/mcp-use *10726* ['mcp', 'model-context-protocol', 'apps-sdk', 'mcp-apps', 'mcp-inspector'] - The fullstack MCP framework to develop MCP Apps for ChatGPT / Claude & MCP Serve
- Agents365-ai/drawio-skill *9960* ['drawio', 'diagram', 'agent-skills', 'architecture-diagram', 'claude-code'] - Agent skill that turns natural language, code, Terraform/K8s, SQL, OpenAPI, Asyn
- jordan-gibbs/hyperresearch *3794* ['agents', 'agentskills', 'claude-code', 'deep-research', 'deep-research-agent'] - Convert Claude Code or Codex into the most intelligent Deep Research Agent. Coll
- taylorwilsdon/google_workspace_mcp *3291* ['ai', 'gmail', 'google-calendar', 'google-workspace', 'llm'] - Control Gmail, Google Calendar, Docs, Sheets, Slides, Chat, Forms, Tasks, Search
- duty1g/x64dbg-mcp-server *2337* ['ai-agents', 'ai-debugging', 'binary-analysis', 'claude', 'claude-code'] - x64dbg-MCP Server is a native MCP (Model Context Protocol) plugin for x64dbg tha
- jau123/MeiGen-AI-Design-MCP *1779* ['ai-image-generation', 'claude', 'claude-code', 'comfyui', 'mcp'] - Supports GPT Image 2, Seedance & ComfyUI, with a 1,400+ prompt library, carefull
- yzfly/douyin-mcp-server *1276* ['douyin', 'mcp', 'llm', 'video', 'video-processing'] - 提取抖音无水印视频链接，视频文案，douyin-mcp-server，mcp，claude skill，支持龙虾
- agentrq/agentrq *1139* ['agentic-ai', 'agentic-workflow', 'agents', 'task', 'task-manager'] - AgentRQ: Human-in-loop realtime conversational task manager for AI Agents. Self-
- CodeAbra/iai-personal-memory-engine *901* ['claude', 'claude-code', 'local-first', 'mcp', 'mcp-server'] - A cyber brain for your AI. It never forgets a detail, remembers exactly what you
- agentic-box/memora *731* ['ai-agent', 'claude', 'knowledge-graph', 'llms', 'mcp'] - Give your AI agents persistent, collective memory — with deduplicating absorb, s
- swarmclawai/swarmvault *708* ['local-first', 'obsidian', 'karpathy', 'knowledge-graph', 'claude-code'] - The local-first LLM Wiki: open-source knowledge graph builder, RAG knowledge bas
- ruvnet/metaharness *688* ['agent-harness', 'agent-scaffolding', 'agentic-ai', 'agentic-framework', 'autonomous-agents'] - 🛠️ The meta-harness for AI agents — scaffold your own focused, branded agent har
- hetpatel-11/Adobe_Premiere_Pro_MCP *660* ['adobe', 'adobe-premiere-pro', 'adobe-mcp', 'adobe-premiere-pro-mcp', 'ai-video-editing'] - Adobe Premiere Pro MCP. Tools for AI-driven video editing via MCP, for Codex, Cl
- VikashLoomba/copilot-mcp *505* ['copilot', 'copilot-chat', 'mcp-server', 'modelcontextprotocol', 'vscode-extension'] - A VSCode extension that lets you find and install Agent Skills and MCP Apps to u

## Degradation
- registry complete: True (401 pages, 40087 entries)
- MCP servers merged from the previous catalog (not re-fetched): 0
- GraphQL 403s: 0 (secondary rate limit: 0); retries: 1; queries that gave up: 0
- HTTP retries (5xx/network): 0
- repos with stale metadata reused from the previous catalog (meta_stale): 0

## MCP Registry
- {"pages": 401, "fetched": 40087, "kept": 39604, "dropped": 483, "bad": 0, "complete": true, "excluded_remote_only": 10853, "excluded_low_signal": 14654, "fallback_merged": 0, "records": 995, "attached_existing": 90, "new_repo": 905, "remote_only": 0, "tiers": {"official": 24, "listed": 18, "verified": 718, "new": 90, "watch": 145}}

## Top 20 by trend_7d
- n/a (no snapshot >=7 days old yet)

## Code search vs topic search
- repos found by code search: 189
- also in topic search: 8
- code-only: 165; tiers: {'watch': 66, 'verified': 85, 'new': 14}

## Top 30 by stars: anthropic
- anthropics/skills [marketplace,collection] *179880*  items=2 - Anthropic example skills
- anthropics/claude-code [marketplace,agent] *149603*  items=2 - Bundled plugins for Claude Code including Agent SDK development tools, PR review
- anthropics/claude-plugins-official [marketplace,collection] *37465*  items=2 - Directory of popular Claude Code extensions including development tools, product
- anthropics/claude-code-action [collection] *9434*  items=1 - The official GitHub Action for running Claude Code in CI: mention @claude in iss
- anthropics/claude-code-security-review [collection] *6319*  items=1 - An official AI-powered security-review GitHub Action that uses Claude to analyze
- anthropics/claude-plugins-community [marketplace] *4513*  items=1 - 
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
- anthropics/claude-plugins-official [plugin] *None*  items=1 - Go language server for code intelligence and refactoring
- anthropics/claude-plugins-official [plugin] *None*  items=1 - Easily create custom hooks to prevent unwanted behaviors by analyzing conversati
- anthropics/claude-plugins-official [plugin] *None*  items=1 - Java language server (Eclipse JDT.LS) for code intelligence
- anthropics/claude-plugins-official [plugin] *None*  items=1 - Kotlin language server for code intelligence
- anthropics/claude-plugins-official [plugin] *None*  items=1 - Interactive learning mode that requests meaningful code contributions at decisio
- anthropics/claude-plugins-official [plugin] *None*  items=1 - Lua language server for code intelligence
- anthropics/claude-plugins-official [plugin] *None*  items=1 - Solve competition math (IMO, Putnam, USAMO) with adversarial verification that c
- anthropics/claude-plugins-official [plugin] *None*  items=1 - Two skills for hard mathematics problems, each ending in a self-contained proof.
- anthropics/claude-plugins-official [plugin] *None*  items=1 - Skills for designing and building MCP servers that work seamlessly with Claude. 
- anthropics/claude-plugins-official [plugin] *None*  items=1 - Connect Claude to a private MCP server through an Anthropic MCP tunnel. The /cre

## Top 30 by stars: official
- obra/superpowers [plugin,skill] *295939*  items=3 - Superpowers teaches Claude brainstorming, subagent driven development with built
- mattpocock/skills [plugin] *277862*  items=2 - Matt Pocock's agent skills for real engineering — grilling, spec/ticket flows, T
- heygen-com/hyperframes [plugin] *57780*  items=2 - HyperFrames by HeyGen. Write HTML, render video. Compositions, GSAP and runtime 
- ChromeDevTools/chrome-devtools-mcp [plugin,mcp-server] *53034*  items=3 - Control and inspect a live Chrome browser from your coding agent. Record perform
- confident-ai/deepeval [plugin] *18659*  items=1 - Skills for adding DeepEval evaluations, tracing, datasets, Confident AI reports,
- huggingface/skills [plugin] *11142*  items=2 - Build, train, evaluate, and use open source AI models, datasets, and spaces.
- wonderwhy-er/DesktopCommanderMCP [plugin,mcp-server] *9936*  items=3 - MCP server for terminal commands, process management, and file operations across
- exa-labs/exa-mcp-server [plugin,mcp-server] *5088*  items=2 - Exa AI web search, deep research, and content extraction. Provides MCP tools and
- NVIDIA/skills [plugin] *3530*  items=2 - Find the right NVIDIA skill for GPU acceleration, CUDA, AI agents, data loading,
- cloudflare/skills [plugin] *2994*  items=2 - Skills for the Cloudflare developer platform: Workers, Durable Objects, Agents S
- modelcontextprotocol/ext-apps [plugin] *2905*  items=3 - Skills for creating MCP Apps with the MCP Apps SDK
- aws/agent-toolkit-for-aws [plugin] *2814*  items=8 - Build, deploy, and operate AI agents on AWS. Skills for scaffolding agents with 
- expo/skills [plugin] *2661*  items=2 - Official Expo skills for building, deploying, upgrading, and debugging React Nat
- GoogleChrome/modern-web-guidance [plugin] *2399*  items=1 - Keep your coding agent up to date with the latest web best practices
- figma/mcp-server-guide [plugin,mcp-server] *2050*  items=3 - Figma design platform integration. Access design files, extract component inform
- MicrosoftDocs/mcp [plugin,mcp-server] *1936*  items=3 - Access official Microsoft documentation, API references, and code samples for Az
- stripe/ai [plugin,mcp-server] *1857*  items=3 - Stripe development plugin for Claude
- microsoft/azure-skills [plugin] *1544*  items=2 - Transform Claude into an Azure expert. This plugin integrates the Azure MCP serv
- atlassian/atlassian-mcp-server [plugin,mcp-server] *1083*  items=3 - Connect to Atlassian products including Jira and Confluence. Search and create i
- forcedotcom/sf-skills [plugin] *1056*  items=1 - Build Salesforce apps and agents using these core building blocks: metadata, Ape
- awslabs/agent-plugins [plugin] *912*  items=10 - Guide developers through adding maps, places search, geocoding, routing, and oth
- superdesigndev/superdesign-skill [plugin,skill] *626*  items=2 - Design or redesign frontend UI and marketing graphics on the Superdesign infinit
- duckdb/duckdb-skills [plugin] *599*  items=2 - DuckDB-powered skills for Claude Code: read any data file, attach and query Duck
- Shopify/Shopify-AI-Toolkit [plugin] *587*  items=2 - Shopify's AI Toolkit provides 18 development skills for building on the Shopify 
- ClickHouse/agent-skills [plugin] *544*  items=2 - 28 best practice rules for ClickHouse schema design, query optimization, and dat
- gitroomhq/postiz-agent [plugin] *503*  items=2 - Social media automation CLI for scheduling posts, managing integrations, uploadi
- makenotion/claude-code-notion-plugin [plugin] *492*  items=2 - Notion workspace integration. Search pages, create and update documents, manage 
- tavily-ai/skills [plugin] *487*  items=2 - Build AI applications with real-time web data using Tavily's search, extract, cr
- TheQtCompanyRnD/agent-skills [plugin] *458*  items=2 - Agentic engineering skills for Qt software development — Qt C++/QML code review,
- astronomer/agents [plugin] *450*  items=6 - Data engineering for Apache Airflow and Astronomer. Author DAGs with best practi

## Top 30 by stars: listed
- DietrichGebert/ponytail [plugin] *156973*  items=2 - Lazy senior dev mode. Forces the simplest, shortest solution that actually works
- JuliusBrussee/caveman [plugin,skill] *110171*  items=2 - Auto-activation works differently per agent: Claude Code uses SessionStart hooks
- thedotmack/claude-mem [plugin,skill] *97022*  items=3 - Persistent memory system for Claude Code - seamlessly preserve context across se
- Egonex-AI/Understand-Anything [plugin,skill] *85456*  items=2 - Understand Anything is a Claude Code plugin that analyzes your project with a mu
- pbakaus/impeccable [plugin] *77534*  items=1 - Great design prompts require design vocabulary. Most people don't have it. You c
- mem0ai/mem0 [plugin] *66673*  items=1 - Connect Mem0 to Claude to give your agent persistent memory across sessions. Cla
- mvanhorn/last30days-skill [plugin] *63620*  items=1 - last-30-days is a Claude Code skill that searches the web and delivers a structu
- coreyhaines31/marketingskills [plugin] *53458*  items=1 - coreyhaines31
- DayuanJiang/next-ai-draw-io [plugin] *36128*  items=1 - AI-powered Draw.io diagram generation with real-time browser preview. Create flo
- jarrodwatts/claude-hud [plugin,collection] *28343*  items=2 - Real-time statusline HUD for Claude Code - context health, tool activity, agent 
- alirezarezvani/claude-skills [plugin,skill] *27775*  items=2 - Playwright Pro turns your AI coding agent into a senior test automation engineer
- promptfoo/promptfoo [plugin] *25753*  items=1 - Teaches AI coding agents to create and maintain promptfoo eval suites. Encodes b
- mksglu/context-mode [plugin] *25536*  items=1 - MCP is the protocol for tool access. We're the virtualization layer for context.
- AgriciDaniel/claude-seo [plugin] *18402*  items=1 - Comprehensive SEO analysis plugin for Claude Code. Performs full site audits wit
- browser-use/browser-harness [plugin] *18313*  items=1 - Open-source browser agent driven via CDP — direct browser control, 79K stars, YC
- Jeffallan/claude-skills [plugin,skill,collection] *11754*  items=3 - 66 specialized skills for full-stack development: 12 language experts (Python, T
- nicobailon/visual-explainer [plugin,collection] *10284*  items=3 - An agent skill that turns complex terminal output into styled HTML pages you act
- revfactory/harness [plugin,agent] *9126*  items=3 - Harness leverages Claude Code's agent team system to decompose complex tasks int
- Eventual-Inc/Daft [plugin] *5791*  items=1 - Skills for working with Daft, a high-performance data engine for AI and multimod
- clidey/whodb [plugin] *5029*  items=1 - Database management tools for Claude Code. Query databases, explore schemas, ana
- nyldn/claude-octopus [plugin] *4172*  items=2 - Multi-LLM orchestration for Claude Code and Cowork. Coordinates 8 AI providers (
- giancarloerra/SocratiCode [plugin,mcp-server] *3336*  items=2 - Enterprise-grade (40m+ lines) codebase intelligence in a zero-setup, private and
- Chachamaru127/claude-code-harness [plugin,agent] *3151*  items=2 - Autonomous Plan → Work → Review cycle for Claude Code. Go-native engine with 25×
- nizos/tdd-guard [plugin,collection] *2358*  items=2 - Enforces Test-Driven Development by intercepting file operations in Claude Code.
- AgriciDaniel/claude-blog [plugin] *2334*  items=1 - AI-powered blog creation and optimization skill with 20 commands, 4 specialized 
- severity1/claude-code-prompt-improver [plugin] *1937*  items=1 - Intelligent prompt optimization using skill-based architecture. Enriches vague p
- AminForou/mcp-gsc [plugin] *1859*  items=1 - Connect Google Search Console to Claude Code. Query rankings, inspect URLs, audi
- codeaholicguy/ai-devkit [plugin] *1641*  items=1 - A structured software development toolkit that helps Claude Code follow senior-e
- activeloopai/hivemind [plugin,skill,collection] *1622*  items=5 - Cloud-backed persistent memory for Claude Code powered by Deeplake. Automaticall
- kenryu42/cc-safety-net [plugin,collection] *1578*  items=3 - Block destructive git and filesystem commands before execution

## Top 30 by stars: verified
- affaan-m/ECC [collection] *274406*  items=1 - Top-notch, well-written resources covering "just about everything" from core eng
- multica-ai/andrej-karpathy-skills [collection] *217304*  items=1 - A drop-in CLAUDE.md distilling four behavioral guidelines for LLM-assisted codin
- garrytan/gstack [agent] *135579*  items=1 - Garry Tan's (Y Combinator) Claude Code setup and "open source software factory" 
- browser-use/browser-use [mcp-server] *117308*  items=1 - Control a real Chrome browser to complete any task: fill forms, extract data, bo
- addyosmani/agent-skills [marketplace] *102174*  items=1 - Production-grade engineering skills for AI coding agents.
- nexu-io/open-design [marketplace] *99751*  items=1 - 🎨 Best DeepSeek Harness Design Plugin. The open-source Claude Design alternative
- paperclipai/paperclip [mcp-server] *98140*  items=1 - Trending hip-hop artist momentum scores across four cultural dimensions.
- ruvnet/RuView [marketplace] *96744*  items=1 - π RuView turns commodity WiFi signals into real-time spatial intelligence, vital
- Leonxlnx/taste-skill [marketplace] *93198*  items=1 - Taste-Skill - gives your AI good taste. stops the AI from generating boring, gen
- koala73/worldmonitor [mcp-server] *87921*  items=1 - Live markets, conflicts, country risk, chokepoints, energy, and China decision s
- D4Vinci/Scrapling [mcp-server] *86020*  items=1 - Web scraping with stealth HTTP, real browsers, and Cloudflare bypass. CSS select
- netdata/netdata [mcp-server] *80817*  items=1 - Real-time infrastructure monitoring with metrics, logs, alerts, and ML-based ano
- tt-a1i/archify [skill] *78778*  items=1 - Turn any idea, plan, or codebase into a beautiful interactive diagram. An agent 
- shareAI-lab/learn-claude-code [collection] *78082*  items=1 - A really interesting analysis of how coding agents like Claude Code are designed
- ComposioHQ/awesome-claude-skills [skill] *76615*  items=1 - A curated list of awesome Claude Skills, resources, and tools for customizing Cl
- headroomlabs-ai/headroom [marketplace] *74534*  items=1 - Compress tool outputs, logs, files, and RAG chunks before they reach the LLM. 20
- thedaviddias/Front-End-Checklist [mcp-server] *74390*  items=1 - Review frontend code and live pages against 386 quality-gated web development ru
- ruvnet/ruflo [marketplace,mcp-server] *74017*  items=2 - 🌊 The original agent harness. Deploy intelligent multi-player swarms, coordinate
- diegosouzapw/OmniRoute [skill] *73720*  items=1 - Never stop coding. Free MIT AI gateway: one endpoint, 359 providers (150+ free),
- career-ops-hq/career-ops [marketplace] *73655*  items=1 - Open-source AI job search agent and job finder: scan job boards, score each job 
- shanraisshan/claude-code-best-practice [skill] *67204*  items=1 - from vibe coding to agentic engineering - practice makes claude perfect
- upstash/context7 [mcp-server] *62752*  items=1 - Up-to-date code docs for any prompt
- ayghri/i-have-adhd [plugin,skill] *54516*  items=2 - A skill to stop your coding agent from burying the answer. ADHD-friendly output.
- blader/humanizer [marketplace] *54454*  items=1 - Agent skill that removes signs of AI-generated writing from text
- kepano/obsidian-skills [marketplace] *49221*  items=1 - Agent skills for Obsidian. Teach your agent to use Obsidian CLI and open formats
- K-Dense-AI/scientific-agent-skills [skill,collection] *47813*  items=2 - "A set of ready-to-use Agent Skills for research, science, engineering, analysis
- sickn33/agentic-awesome-skills [skill] *47305*  items=1 - AAS Core is the local, agent-first control plane for complete catalog discovery,
- zhayujie/CowAgent [skill] *47256*  items=1 - Open-source personal AI assistant & Agent Harness. Plans tasks, runs tools and s
- DeusData/codebase-memory-mcp [mcp-server] *45918*  items=1 - Codebase knowledge graph for AI agents — 162 languages, sub-ms queries, 99% fewe
- ccxt/ccxt [mcp-server] *44271*  items=1 - Official CCXT MCP server - Market data and trading across 100+ exchanges and pre

## Top 30 by stars: watch
- code-yeongyu/oh-my-openagent [skill] *69852*  items=1 - OmO: Just type "mass ulw" keyword with your prompt. Now you are the master of gr
- tldraw/tldraw [mcp-server] *50787*  items=1 - Draw and visually collaborate with your agents on tldraw's canvas.
- metabase/metabase [mcp-server] *49558*  items=1 - Lets AI clients search, explore, query, and visualize data in a Metabase instanc
- PostHog/posthog [mcp-server] *40168*  items=1 - Official PostHog MCP Server for product analytics, feature flags, experiments, a
- oraios/serena [mcp-server] *30065*  items=1 - A powerful toolkit for coding, providing semantic retrieval and editing capabili
- different-ai/openwork [mcp-server] *23921*  items=1 - Your OpenWork org's skills, plugins, workflows, and connections through one OAut
- screenpipe/screenpipe [mcp-server] *21840*  items=1 - Search your local screen recordings, audio transcripts, and computer activity fr
- travisvn/awesome-claude-skills [skill] *15296*  items=1 - A curated list of awesome Claude Skills, resources, and tools for customizing Cl
- kyegomez/OpenMythos [plugin] *14907*  items=1 - A theoretical reconstruction of the Claude Mythos architecture, built from first
- NevaMind-AI/memU [skill] *14509*  items=1 - Personal memory across agents
- Orchestra-Research/AI-Research-SKILLs [skill] *13315*  items=1 - Comprehensive open-source library of AI research and engineering skills for any 
- elie222/inbox-zero [mcp-server] *12425*  items=1 - Search Gmail and Outlook, save drafts, manage email rules, and view email stats.
- max-sixty/worktrunk [marketplace] *8924*  items=1 - Worktrunk is a CLI for Git worktree management, designed for parallel AI agent w
- anbeime/skill [skill] *7611*  items=1 - 收录最全、更新最快的技能Skills商店：精选原创技能包（涵盖文档处理、内容创作、编程开发、机器学习、自动化工作流），全部打包好可直接安装使用！同时自动抓取Gi
- modelcontextprotocol/registry [mcp-server] *7322*  items=7 - Check how to contact a business website, and whether that contact path actually 
- deanpeters/Product-Manager-Skills [skill] *7181*  items=1 - Product Management skills framework built on battle-tested methods for Claude Co
- tech-leads-club/agent-skills [marketplace] *7036*  items=1 - The secure, validated skill registry for professional AI coding agents. Extend A
- internet-court/internet-court-skill [marketplace] *6398*  items=1 - The trust layer for agent-to-agent commerce — natural-language mandates, ERC-771
- nirholas/fresh-start [mcp-server] *6226*  items=1 - Explore the Claude Code CLI source — browse tools, commands, search code, and mo
- Klavis-AI/klavis [mcp-server] *5807*  items=1 - MCP server for progressive tool usage at any scale (see https://klavis.ai)
- KnockOutEZ/wigolo [mcp-server] *5445*  items=1 - Local-first web intelligence MCP server for AI coding agents
- brycewang-stanford/Auto-Empirical-Research-Skills [marketplace] *4513*  items=1 - 🔬 A curated collection of 23,000+ agent skills for empirical research across 8 s
- tolgee/tolgee-platform [mcp-server] *4124*  items=1 - Your app's translations in Tolgee: search keys, create translations, trigger mac
- isjiamu/gzh-design-skill [skill] *3916*  items=1 - 把 Markdown 一键排成可直接粘进公众号编辑器的精致 HTML —— 6 套精选主题 + 主题生成器 + 双关卡校验。An AI-agent skill 
- geekjourneyx/md2wechat-skill [skill] *3688*  items=1 - 面向 AI Agent 的微信公众号创作与发布 CLI：Markdown 排版、AI 配图、预览与草稿创建；支持由浏览器 Agent 保存知乎、CSDN、头条未
- jangviktor-web/nihaixia [skill] *3467*  items=1 - 倪海厦视角的中医Agent Skill，基于倪海厦教学资料开发，蒸馏倪师伤寒论、金匮要略、黄帝内经、神农本草经、针灸篇等，人纪/医案/经方思维，六经辨证，八纲辨
- codeaashu/claude-code [skill,mcp-server] *3368*  items=2 - Claude Code is an agentic coding tool that lives in your terminal, understands y
- nexu-io/nexu [skill] *3282*  items=1 - The simplest desktop client for OpenClaw 🦞 — bridge your Agent to WeChat, Feishu
- bergside/awesome-design-skills [skill] *3069*  items=1 - List of 67 awesome DESIGN.md and SKILL.md design skill files for agentic tools l
- FreedomIntelligence/OpenClaw-Medical-Skills [skill] *3050*  items=1 - The largest open-source medical AI skills library for OpenClaw🦞.

## Random sample of 20 watch repos (of 420)
- Productfculty-aipm/PM-Copilot-by-Product-Faculty [plugin] *77*  items=1 - PM Copilot: 65+ framework-grounded PM skills across 12 domains, 17 command-based reasons=['fails: pushed<=90d (173)', 'fails: license (NOASSERTION)'] src=['topic']
- Klavis-AI/klavis [mcp-server] *5807*  items=1 - MCP server for progressive tool usage at any scale (see https://klavis.ai) reasons=['fails: pushed<=90d (127)'] src=['mcp-registry']
- ralforion/orionbelt-semantic-layer [mcp-server] *99*  items=1 - API-first semantic layer MCP server compiling YAML models into dialect-specific  reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- DogInfantry/claude-skill-management-consultant-B1 [marketplace] *129*  items=1 - Claude skill & plugin: turn Claude (or any LLM) into an MBB-grade management con reasons=['fails: license (NOASSERTION)'] src=['topic']
- aldefy/compose-skill [marketplace] *596*  items=1 - Jetpack Compose Agent Skill — AI-powered coding guidance with actual androidx/an reasons=['fails: license (NOASSERTION)'] src=['topic']
- sv-grid/sv-grid [mcp-server] *179*  items=1 - Checks AI-written SvGrid code against the real API, plus version-pinned Svelte 5 reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- intellectronica/agent-skills [plugin,marketplace] *295*  items=24 - @intellectronica's agent skills reasons=['fails: pushed<=90d (164)'] src=['code', 'marketplace-expansion']
- tanweai/wooyun-legacy [plugin,marketplace] *1778*  items=3 - wooyun-legacy skill for claude code reasons=['fails: license (NOASSERTION)'] src=['code', 'marketplace-expansion']
- tldraw/tldraw [mcp-server] *50787*  items=1 - Draw and visually collaborate with your agents on tldraw's canvas. reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- mixpeek/amux [skill] *519*  items=1 - Open-source control plane for AI coding agents. Run an AI engineering team: para reasons=['fails: license (NOASSERTION)'] src=['topic']
- max-sixty/worktrunk [marketplace] *8924*  items=1 - Worktrunk is a CLI for Git worktree management, designed for parallel AI agent w reasons=['fails: license (NOASSERTION)'] src=['topic']
- Mapika/portview [mcp-server] *60*  items=1 - See what's on your ports, the processes behind them, and diagnose conflicts and  reasons=['no corroborating signal'] src=['mcp-registry']
- IMNMV/ClaudeR [mcp-server] *349*  items=1 - Connect RStudio to AI assistants for interactive R coding and data analysis. reasons=['fails: license (NOASSERTION)'] src=['mcp-registry']
- shibayu36/slack-explorer-mcp [mcp-server] *50*  items=1 - MCP server specialized in retrieving information from Slack messages and threads reasons=['fails: pushed<=90d (95)', 'no corroborating signal'] src=['mcp-registry']
- dfkai/xtquantai [plugin,marketplace] *164*  items=2 - 迅投 QMT 量化 AI 技能集（Agent Skills）：研报因子回测脚本生成等，适用于 Claude Code / Cursor / Codex / Ki reasons=['fails: pushed<=90d (117)'] src=['code', 'marketplace-expansion']
- rohitg00/awesome-claude-design [skill] *1123*  items=1 - Claude Design DESIGN.md prompts by aesthetic family, remix recipes, skills, vide reasons=['fails: pushed<=90d (166)'] src=['topic']
- JCodesMore/youtube-for-ai-agents [plugin] *54*  items=1 - Your AI agent can now search Youtube, watch videos, create highlight reels, and  reasons=['fails: pushed<=90d (159)'] src=['topic']
- cas-bigdatalab/piflow [skill] *541*  items=1 - πflow is a big data flow engine with spark support reasons=['fails: license (None)'] src=['code']
- syahiidkamil/Software-Engineer-AI-Agent-Atlas [skill] *397*  items=1 - ATLAS: a senior-engineer layer for Claude Code. Explore with wireframes & protot reasons=['fails: pushed<=90d (104)'] src=['topic']
- ferdinandobons/startup-skill [skill] *1172*  items=1 - AI agent skills for startup validation, competitive intelligence, and planning reasons=['fails: pushed<=90d (97)'] src=['topic']

## Errors
- marketplace obra/claude-session-driver: no plugins list

## Rate limit
- REST calls this run (uncached): {"core": 4, "search": 19}; last seen: {"core": {"remaining": "4996", "limit": "5000"}, "search": {"remaining": "8", "limit": "10"}}
- GraphQL: 29 calls, cost 25, remaining 4962/5000, stopped early: False
- REST stopped early: False
- repos lacking metadata: 3438; enriched this run: 27676