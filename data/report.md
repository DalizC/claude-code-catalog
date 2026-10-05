# Catalog report 2026-10-05
Mode: **token**; run time 3958s
Repos (deduped): 6887; flat entries before dedup: 8623

## Tier x type BEFORE dedup (flat entries)
- watch/mcp-server: 2605
- listed/plugin: 2283
- watch/skill: 702
- verified/mcp-server: 603
- watch/marketplace: 593
- watch/plugin: 552
- official/plugin: 276
- verified/skill: 241
- watch/agent: 240
- verified/collection: 163
- verified/marketplace: 112
- verified/plugin: 109
- anthropic/plugin: 57
- verified/agent: 29
- anthropic/marketplace: 5
- anthropic/collection: 4
- anthropic/agent: 1
- watch/collection: 1

## Tier AFTER dedup (repos)
- watch: 3732
- listed: 1950
- verified: 901
- official: 241
- anthropic: 63

## Type AFTER dedup (items)
- plugin: 3277
- mcp-server: 3177
- skill: 943
- marketplace: 687
- agent: 270
- collection: 168

## Primary type AFTER dedup (repos)
- plugin: 2784
- mcp-server: 2242
- skill: 873
- marketplace: 601
- agent: 253
- collection: 134

## Repos by discovery source family
- mcp-registry: 2444
- anthropic: 2252
- topic: 1238
- code: 1077
- curated: 197
- marketplace-expansion: 50

## Flags (all tiers)
- star-anomaly: 24

## star-anomaly by tier
- watch: 24

## Metadata gaps
- repos without metadata: 144
- reasons: {'unfetched': 77, 'repo not found': 54, 'no repo (non-github link)': 13}

## MCP-only repos excluded: 47
- pascalorg/editor *24635* ['3d', 'architecture', 'bim', 'cad', 'editor'] - Open-source 3D architectural editor with a local CLI, MCP tools, and practical w
- mcp-use/mcp-use *10719* ['mcp', 'model-context-protocol', 'apps-sdk', 'mcp-apps', 'mcp-inspector'] - The fullstack MCP framework to develop MCP Apps for ChatGPT / Claude & MCP Serve
- Agents365-ai/drawio-skill *9937* ['drawio', 'diagram', 'agent-skills', 'architecture-diagram', 'claude-code'] - Agent skill that turns natural language, code, Terraform/K8s, SQL, OpenAPI, Asyn
- jordan-gibbs/hyperresearch *3779* ['agents', 'agentskills', 'claude-code', 'deep-research', 'deep-research-agent'] - Convert Claude Code or Codex into the most intelligent Deep Research Agent. Coll
- taylorwilsdon/google_workspace_mcp *3285* ['ai', 'gmail', 'google-calendar', 'google-workspace', 'llm'] - Control Gmail, Google Calendar, Docs, Sheets, Slides, Chat, Forms, Tasks, Search
- duty1g/x64dbg-mcp-server *2196* ['ai-agents', 'ai-debugging', 'binary-analysis', 'claude', 'claude-code'] - x64dbg-MCP Server is a native MCP (Model Context Protocol) plugin for x64dbg tha
- jau123/MeiGen-AI-Design-MCP *1778* ['ai-image-generation', 'claude', 'claude-code', 'comfyui', 'mcp'] - Supports GPT Image 2, Seedance & ComfyUI, with a 1,400+ prompt library, carefull
- yzfly/douyin-mcp-server *1275* ['douyin', 'mcp', 'llm', 'video', 'video-processing'] - 提取抖音无水印视频链接，视频文案，douyin-mcp-server，mcp，claude skill，支持龙虾
- agentrq/agentrq *1137* ['agentic-ai', 'agentic-workflow', 'agents', 'task', 'task-manager'] - AgentRQ: Human-in-loop realtime conversational task manager for AI Agents. Self-
- CodeAbra/iai-personal-memory-engine *901* ['claude', 'claude-code', 'local-first', 'mcp', 'mcp-server'] - A cyber brain for your AI. It never forgets a detail, remembers exactly what you
- agentic-box/memora *730* ['ai-agent', 'claude', 'knowledge-graph', 'llms', 'mcp'] - Give your AI agents persistent, collective memory — with deduplicating absorb, s
- swarmclawai/swarmvault *708* ['local-first', 'obsidian', 'karpathy', 'knowledge-graph', 'claude-code'] - The local-first LLM Wiki: open-source knowledge graph builder, RAG knowledge bas
- ruvnet/metaharness *686* ['agent-harness', 'agent-scaffolding', 'agentic-ai', 'agentic-framework', 'autonomous-agents'] - 🛠️ The meta-harness for AI agents — scaffold your own focused, branded agent har
- hetpatel-11/Adobe_Premiere_Pro_MCP *650* ['adobe', 'adobe-premiere-pro', 'adobe-mcp', 'adobe-premiere-pro-mcp', 'ai-video-editing'] - Adobe Premiere Pro MCP. Tools for AI-driven video editing via MCP, for Codex, Cl
- VikashLoomba/copilot-mcp *504* ['copilot', 'copilot-chat', 'mcp-server', 'modelcontextprotocol', 'vscode-extension'] - A VSCode extension that lets you find and install Agent Skills and MCP Apps to u

## Degradation
- registry complete: True (398 pages, 39759 entries)
- MCP servers merged from the previous catalog (not re-fetched): 0
- GraphQL 403s: 0 (secondary rate limit: 0); retries: 12; queries that gave up: 0
- HTTP retries (5xx/network): 0
- repos with stale metadata reused from the previous catalog (meta_stale): 0

## MCP Registry
- {"pages": 398, "fetched": 39759, "kept": 39279, "dropped": 480, "bad": 0, "complete": true, "excluded_remote_only": 10706, "excluded_low_signal": 25365, "fallback_merged": 0, "records": 2444, "attached_existing": 210, "new_repo": 2234, "remote_only": 0, "tiers": {"official": 24, "listed": 109, "verified": 363, "watch": 1948}}

## Top 20 by trend_7d
- n/a (no snapshot >=7 days old yet)

## Code search vs topic search
- repos found by code search: 1077
- also in topic search: 9
- code-only: 1036; tiers: {'watch': 1004, 'verified': 32}

## Top 30 by stars: anthropic
- anthropics/skills [marketplace,collection] *179783*  items=2 - Anthropic example skills
- anthropics/claude-code [marketplace,agent] *149516*  items=2 - Bundled plugins for Claude Code including Agent SDK development tools, PR review
- anthropics/claude-plugins-official [marketplace,collection] *37430*  items=2 - Directory of popular Claude Code extensions including development tools, product
- anthropics/claude-code-action [collection] *9426*  items=1 - The official GitHub Action for running Claude Code in CI: mention @claude in iss
- anthropics/claude-code-security-review [collection] *6307*  items=1 - An official AI-powered security-review GitHub Action that uses Claude to analyze
- anthropics/claude-plugins-community [marketplace] *4475*  items=1 - 
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
- obra/superpowers [plugin,skill] *295631*  items=3 - Superpowers teaches Claude brainstorming, subagent driven development with built
- mattpocock/skills [plugin] *277032*  items=2 - Matt Pocock's agent skills for real engineering — grilling, spec/ticket flows, T
- heygen-com/hyperframes [plugin] *57275*  items=2 - HyperFrames by HeyGen. Write HTML, render video. Compositions, GSAP and runtime 
- ChromeDevTools/chrome-devtools-mcp [plugin,mcp-server] *53005*  items=3 - Control and inspect a live Chrome browser from your coding agent. Record perform
- confident-ai/deepeval [plugin] *18646*  items=1 - Skills for adding DeepEval evaluations, tracing, datasets, Confident AI reports,
- huggingface/skills [plugin] *11138*  items=2 - Build, train, evaluate, and use open source AI models, datasets, and spaces.
- wonderwhy-er/DesktopCommanderMCP [plugin,mcp-server] *9928*  items=3 - MCP server for terminal commands, process management, and file operations across
- Eigenwise/atomic-agents [plugin] *6269*  items=2 - Comprehensive development workflow for building AI agents with the Atomic Agents
- exa-labs/exa-mcp-server [plugin,mcp-server] *5081*  items=2 - Exa AI web search, deep research, and content extraction. Provides MCP tools and
- NVIDIA/skills [plugin] *3522*  items=2 - Find the right NVIDIA skill for GPU acceleration, CUDA, AI agents, data loading,
- cloudflare/skills [plugin] *2990*  items=2 - Skills for the Cloudflare developer platform: Workers, Durable Objects, Agents S
- modelcontextprotocol/ext-apps [plugin] *2902*  items=3 - Skills for creating MCP Apps with the MCP Apps SDK
- aws/agent-toolkit-for-aws [plugin] *2807*  items=8 - Build, deploy, and operate AI agents on AWS. Skills for scaffolding agents with 
- expo/skills [plugin] *2657*  items=2 - Official Expo skills for building, deploying, upgrading, and debugging React Nat
- GoogleChrome/modern-web-guidance [plugin] *2392*  items=1 - Keep your coding agent up to date with the latest web best practices
- figma/mcp-server-guide [plugin,mcp-server] *2049*  items=3 - Figma design platform integration. Access design files, extract component inform
- MicrosoftDocs/mcp [plugin,mcp-server] *1930*  items=3 - Access official Microsoft documentation, API references, and code samples for Az
- stripe/ai [plugin,mcp-server] *1856*  items=3 - Stripe development plugin for Claude
- microsoft/azure-skills [plugin] *1540*  items=2 - Transform Claude into an Azure expert. This plugin integrates the Azure MCP serv
- atlassian/atlassian-mcp-server [plugin,mcp-server] *1083*  items=3 - Connect to Atlassian products including Jira and Confluence. Search and create i
- forcedotcom/sf-skills [plugin] *1056*  items=1 - Build Salesforce apps and agents using these core building blocks: metadata, Ape
- awslabs/agent-plugins [plugin] *911*  items=10 - Guide developers through adding maps, places search, geocoding, routing, and oth
- superdesigndev/superdesign-skill [plugin,skill] *624*  items=2 - Design or redesign frontend UI and marketing graphics on the Superdesign infinit
- duckdb/duckdb-skills [plugin] *599*  items=2 - DuckDB-powered skills for Claude Code: read any data file, attach and query Duck
- Shopify/Shopify-AI-Toolkit [plugin] *587*  items=2 - Shopify's AI Toolkit provides 18 development skills for building on the Shopify 
- ClickHouse/agent-skills [plugin] *544*  items=2 - 28 best practice rules for ClickHouse schema design, query optimization, and dat
- gitroomhq/postiz-agent [plugin] *501*  items=2 - Social media automation CLI for scheduling posts, managing integrations, uploadi
- makenotion/claude-code-notion-plugin [plugin] *492*  items=2 - Notion workspace integration. Search pages, create and update documents, manage 
- tavily-ai/skills [plugin] *487*  items=2 - Build AI applications with real-time web data using Tavily's search, extract, cr
- TheQtCompanyRnD/agent-skills [plugin] *457*  items=2 - Agentic engineering skills for Qt software development — Qt C++/QML code review,

## Top 30 by stars: listed
- DietrichGebert/ponytail [plugin] *155933*  items=2 - Lazy senior dev mode. Forces the simplest, shortest solution that actually works
- JuliusBrussee/caveman [plugin,skill] *109991*  items=2 - Auto-activation works differently per agent: Claude Code uses SessionStart hooks
- thedotmack/claude-mem [plugin,skill] *96594*  items=3 - Persistent memory system for Claude Code - seamlessly preserve context across se
- Egonex-AI/Understand-Anything [plugin,skill] *85358*  items=2 - Understand Anything is a Claude Code plugin that analyzes your project with a mu
- pbakaus/impeccable [plugin] *77025*  items=1 - Great design prompts require design vocabulary. Most people don't have it. You c
- mem0ai/mem0 [plugin] *66610*  items=1 - Connect Mem0 to Claude to give your agent persistent memory across sessions. Cla
- mvanhorn/last30days-skill [plugin] *63579*  items=1 - last-30-days is a Claude Code skill that searches the web and delivers a structu
- coreyhaines31/marketingskills [plugin] *53360*  items=1 - coreyhaines31
- DayuanJiang/next-ai-draw-io [plugin] *36110*  items=1 - AI-powered Draw.io diagram generation with real-time browser preview. Create flo
- jarrodwatts/claude-hud [plugin,collection] *28313*  items=2 - Real-time statusline HUD for Claude Code - context health, tool activity, agent 
- alirezarezvani/claude-skills [plugin,skill] *27696*  items=2 - Playwright Pro turns your AI coding agent into a senior test automation engineer
- promptfoo/promptfoo [plugin] *25729*  items=1 - Teaches AI coding agents to create and maintain promptfoo eval suites. Encodes b
- mksglu/context-mode [plugin] *25470*  items=1 - MCP is the protocol for tool access. We're the virtualization layer for context.
- AgriciDaniel/claude-seo [plugin] *18320*  items=1 - Comprehensive SEO analysis plugin for Claude Code. Performs full site audits wit
- browser-use/browser-harness [plugin] *18292*  items=1 - Open-source browser agent driven via CDP — direct browser control, 79K stars, YC
- Jeffallan/claude-skills [plugin,skill,collection] *11741*  items=3 - 66 specialized skills for full-stack development: 12 language experts (Python, T
- nicobailon/visual-explainer [plugin,collection] *10263*  items=3 - An agent skill that turns complex terminal output into styled HTML pages you act
- revfactory/harness [plugin,agent] *9119*  items=3 - Harness leverages Claude Code's agent team system to decompose complex tasks int
- Eventual-Inc/Daft [plugin] *5789*  items=1 - Skills for working with Daft, a high-performance data engine for AI and multimod
- clidey/whodb [plugin] *5030*  items=1 - Database management tools for Claude Code. Query databases, explore schemas, ana
- nyldn/claude-octopus [plugin] *4159*  items=2 - Multi-LLM orchestration for Claude Code and Cowork. Coordinates 8 AI providers (
- giancarloerra/SocratiCode [plugin,mcp-server] *3333*  items=2 - Enterprise-grade (40m+ lines) codebase intelligence in a zero-setup, private and
- Chachamaru127/claude-code-harness [plugin,agent] *3148*  items=2 - Autonomous Plan → Work → Review cycle for Claude Code. Go-native engine with 25×
- nizos/tdd-guard [plugin,collection] *2354*  items=2 - Enforces Test-Driven Development by intercepting file operations in Claude Code.
- AgriciDaniel/claude-blog [plugin] *2329*  items=1 - AI-powered blog creation and optimization skill with 20 commands, 4 specialized 
- severity1/claude-code-prompt-improver [plugin] *1936*  items=1 - Intelligent prompt optimization using skill-based architecture. Enriches vague p
- AminForou/mcp-gsc [plugin] *1850*  items=1 - Connect Google Search Console to Claude Code. Query rankings, inspect URLs, audi
- codeaholicguy/ai-devkit [plugin] *1640*  items=1 - A structured software development toolkit that helps Claude Code follow senior-e
- activeloopai/hivemind [plugin,skill,collection] *1622*  items=5 - Cloud-backed persistent memory for Claude Code powered by Deeplake. Automaticall
- kenryu42/cc-safety-net [plugin,collection] *1574*  items=3 - Block destructive git and filesystem commands before execution

## Top 30 by stars: verified
- affaan-m/ECC [collection] *273584*  items=1 - Top-notch, well-written resources covering "just about everything" from core eng
- multica-ai/andrej-karpathy-skills [collection] *217056*  items=1 - A drop-in CLAUDE.md distilling four behavioral guidelines for LLM-assisted codin
- garrytan/gstack [agent] *135358*  items=1 - Garry Tan's (Y Combinator) Claude Code setup and "open source software factory" 
- browser-use/browser-use [mcp-server] *117207*  items=1 - Control a real Chrome browser to complete any task: fill forms, extract data, bo
- addyosmani/agent-skills [marketplace] *101533*  items=1 - Production-grade engineering skills for AI coding agents.
- paperclipai/paperclip [mcp-server] *97623*  items=1 - Trending hip-hop artist momentum scores across four cultural dimensions.
- ruvnet/RuView [marketplace] *96554*  items=1 - π RuView turns commodity WiFi signals into real-time spatial intelligence, vital
- Leonxlnx/taste-skill [marketplace] *92832*  items=1 - Taste-Skill - gives your AI good taste. stops the AI from generating boring, gen
- koala73/worldmonitor [mcp-server] *87830*  items=1 - Live markets, conflicts, country risk, chokepoints, energy, and China decision s
- D4Vinci/Scrapling [mcp-server] *85836*  items=1 - Web scraping with stealth HTTP, real browsers, and Cloudflare bypass. CSS select
- netdata/netdata [mcp-server] *80800*  items=1 - Real-time infrastructure monitoring with metrics, logs, alerts, and ML-based ano
- shareAI-lab/learn-claude-code [collection] *78036*  items=1 - A really interesting analysis of how coding agents like Claude Code are designed
- ComposioHQ/awesome-claude-skills [skill] *76551*  items=1 - A curated list of awesome Claude Skills, resources, and tools for customizing Cl
- headroomlabs-ai/headroom [marketplace] *74456*  items=1 - Compress tool outputs, logs, files, and RAG chunks before they reach the LLM. 20
- thedaviddias/Front-End-Checklist [mcp-server] *74373*  items=1 - Review frontend code and live pages against 386 quality-gated web development ru
- ruvnet/ruflo [marketplace,mcp-server] *73933*  items=2 - 🌊 The original agent harness. Deploy intelligent multi-player swarms, coordinate
- career-ops-hq/career-ops [marketplace] *73561*  items=1 - Open-source AI job search agent and job finder: scan job boards, score each job 
- diegosouzapw/OmniRoute [skill] *73326*  items=1 - Never stop coding. Free MIT AI gateway: one endpoint, 359 providers (150+ free),
- shanraisshan/claude-code-best-practice [skill] *67133*  items=1 - from vibe coding to agentic engineering - practice makes claude perfect
- upstash/context7 [mcp-server] *62717*  items=1 - Up-to-date code docs for any prompt
- blader/humanizer [marketplace] *54180*  items=1 - Agent skill that removes signs of AI-generated writing from text
- ayghri/i-have-adhd [plugin,skill] *53908*  items=2 - A skill to stop your coding agent from burying the answer. ADHD-friendly output.
- kepano/obsidian-skills [marketplace] *49171*  items=1 - Agent skills for Obsidian. Teach your agent to use Obsidian CLI and open formats
- K-Dense-AI/scientific-agent-skills [skill,collection] *47687*  items=2 - "A set of ready-to-use Agent Skills for research, science, engineering, analysis
- sickn33/agentic-awesome-skills [skill] *47278*  items=1 - AAS Core is the local, agent-first control plane for complete catalog discovery,
- zhayujie/CowAgent [skill] *47229*  items=1 - Open-source personal AI assistant & Agent Harness. Plans tasks, runs tools and s
- DeusData/codebase-memory-mcp [mcp-server] *45834*  items=1 - Codebase knowledge graph for AI agents — 162 languages, sub-ms queries, 99% fewe
- ccxt/ccxt [mcp-server] *44255*  items=1 - Official CCXT MCP server - Market data and trading across 100+ exchanges and pre
- reactive-resume/reactive-resume [mcp-server] *43847*  items=1 - Free open-source resume builder with remote MCP tools for resumes and job applic
- HeyPuter/puter [mcp-server] *43651*  items=1 - Puter MCP enables AI tools to interact with Puter: manage files, websites, worke

## Top 30 by stars: watch
- nexu-io/open-design [marketplace] *99560* ['star-anomaly'] items=1 - 🎨 Best DeepSeek Harness Design Plugin. The open-source Claude Design alternative
- tt-a1i/archify [skill] *77610* ['star-anomaly'] items=1 - Turn any idea, plan, or codebase into a beautiful interactive diagram. An agent 
- code-yeongyu/oh-my-openagent [skill] *69827*  items=1 - OmO: Just type "mass ulw" keyword with your prompt. Now you are the master of gr
- tldraw/tldraw [mcp-server] *50767*  items=1 - Draw and visually collaborate with your agents on tldraw's canvas.
- metabase/metabase [mcp-server] *49545*  items=1 - Lets AI clients search, explore, query, and visualize data in a Metabase instanc
- alibaba/open-code-review [marketplace] *43854* ['star-anomaly'] items=1 - Secure, fast, efficient, battle-tested at Alibaba's scale. Hybrid architecture c
- PostHog/posthog [mcp-server] *40152*  items=1 - Official PostHog MCP Server for product analytics, feature flags, experiments, a
- virgiliojr94/book-to-skill [skill] *33842* ['star-anomaly'] items=1 - Turn any technical book PDF into a Claude Code skill — ready to study, reference
- oraios/serena [mcp-server] *30023*  items=1 - A powerful toolkit for coding, providing semantic retrieval and editing capabili
- op7418/guizang-ppt-skill [skill] *27261* ['star-anomaly'] items=1 - AI-agent Skill for generating polished HTML slide decks: editorial magazine and 
- different-ai/openwork [mcp-server] *23872*  items=1 - Your OpenWork org's skills, plugins, workflows, and connections through one OAut
- screenpipe/screenpipe [mcp-server] *21823*  items=1 - Search your local screen recordings, audio transcripts, and computer activity fr
- citrolabs/ego-lite [marketplace] *16850* ['star-anomaly'] items=1 - The fastest browser for AI agents to run browser automation, built for sharing y
- travisvn/awesome-claude-skills [skill] *15279*  items=1 - A curated list of awesome Claude Skills, resources, and tools for customizing Cl
- kyegomez/OpenMythos [plugin] *14902*  items=1 - A theoretical reconstruction of the Claude Mythos architecture, built from first
- NevaMind-AI/memU [skill] *14494*  items=1 - Personal memory across agents
- Orchestra-Research/AI-Research-SKILLs [skill] *13277*  items=1 - Comprehensive open-source library of AI research and engineering skills for any 
- ConardLi/garden-skills [marketplace] *12746* ['star-anomaly'] items=1 - ConardLi's open-source Skills collection, featuring web design, knowledge retrie
- elie222/inbox-zero [mcp-server] *12417*  items=1 - Search Gmail and Outlook, save drafts, manage email rules, and view email stats.
- cobusgreyling/loop-engineering [marketplace] *11421* ['star-anomaly'] items=1 - Practical patterns, starters & CLI tools for loop engineering with AI coding age
- Vincentwei1021/video-shotcraft [skill] *10300* ['star-anomaly'] items=1 - AI video skill for Claude Code & Codex — cinematic product videos with Remotion:
- chuspeeism/dashi-ppt-skill [marketplace] *9162* ['star-anomaly'] items=1 - An AI-agent skill that generates browser-editable presentations from multiple vi
- max-sixty/worktrunk [marketplace] *8848*  items=1 - Worktrunk is a CLI for Git worktree management, designed for parallel AI agent w
- genspark-ai/genoffice [skill] *8713* ['star-anomaly'] items=1 - Free, open-source AI Office suite: Docs, Sheets, Slides, PDF, Markdown and HTML 
- anbeime/skill [skill] *7567*  items=1 - 收录最全、更新最快的技能Skills商店：精选原创技能包（涵盖文档处理、内容创作、编程开发、机器学习、自动化工作流），全部打包好可直接安装使用！同时自动抓取Gi
- modelcontextprotocol/registry [mcp-server] *7318*  items=7 - Check how to contact a business website, and whether that contact path actually 
- deanpeters/Product-Manager-Skills [skill] *7169*  items=1 - Product Management skills framework built on battle-tested methods for Claude Co
- tech-leads-club/agent-skills [marketplace] *7031*  items=1 - The secure, validated skill registry for professional AI coding agents. Extend A
- airweave-ai/airweave [mcp-server] *6558*  items=1 - MCP server for searching Airweave collections with natural language queries.
- internet-court/internet-court-skill [marketplace] *6387* ['star-anomaly'] items=1 - The trust layer for agent-to-agent commerce — natural-language mandates, ERC-771

## Random sample of 20 watch repos (of 3732)
- RoboFinSystems/robosystems [mcp-server] *28*  items=1 - Accounting knowledge graphs: SEC XBRL filings, QuickBooks ledgers, reports and f reasons=['fails: stars>=200 (28)'] src=['mcp-registry']
- tenequm/pond [mcp-server] *76*  items=1 - Lossless archive and search for AI agent sessions across clients, exposed to age reasons=['fails: stars>=200 (76)', 'no corroborating signal'] src=['mcp-registry']
- Krzysztof318/MailFathom [mcp-server] *14*  items=1 - Security-first, self-hosted email archive with search, cited answers, and sendin reasons=['fails: stars>=200 (14)', 'fails: age>=90d (75)', 'no corroborating signal'] src=['mcp-registry']
- starloghq/index [mcp-server] *10*  items=1 - Vet a package (CVEs, license, maintenance) before your AI agent uses it, plus ca reasons=['fails: stars>=200 (10)', 'fails: license (NOASSERTION)'] src=['mcp-registry']
- moira-mcp/moira [mcp-server] *115*  items=1 - Agent Workflow Engine — multi-step MCP workflows with per-step directives and va reasons=['fails: stars>=200 (115)'] src=['mcp-registry']
- thoughtspot/mcp-server [mcp-server] *34*  items=1 - MCP Server for ThoughtSpot - provides OAuth authentication and tools for queryin reasons=['fails: stars>=200 (34)', 'fails: license (NOASSERTION)'] src=['mcp-registry']
- parallel-web/search-mcp [mcp-server] *20*  items=1 - The best web search for your AI Agent reasons=['fails: stars>=200 (20)', 'fails: age>=90d (32)'] src=['mcp-registry']
- 26zl/cybersec-toolkit [mcp-server] *65*  items=1 - Authorization-gated MCP server to discover and run 670+ security tools for CTF,  reasons=['fails: stars>=200 (65)', 'no corroborating signal'] src=['mcp-registry']
- srmorete/mobile-device-mcp [mcp-server] *48*  items=1 - Control iOS and Android devices with multi-device and seamless Native/WebView su reasons=['fails: stars>=200 (48)', 'no corroborating signal'] src=['mcp-registry']
- RdyGaming/hated-wow-mcp [mcp-server] *11*  items=1 - MCP server for WoW addons: Lua API, Blizzard UI source, CVars, art lookup, linti reasons=['fails: stars>=200 (11)', 'fails: age>=90d (55)', 'no corroborating signal'] src=['mcp-registry']
- northseadev/northsea-plugin [plugin] *0*  items=1 -  reasons=['fails: stars>=200 (0)', 'fails: age>=90d (4)'] src=['code']
- shuji-bonji/pdf-reader-mcp [plugin,mcp-server] *2*  items=2 - An MCP (Model Context Protocol) server specialized in deciphering PDF internal s reasons=['fails: stars>=200 (2)'] src=['code', 'mcp-registry']
- ooples/mcp-console-automation [mcp-server] *50*  items=1 - MCP server for AI-driven console application automation and monitoring reasons=['fails: stars>=200 (50)', 'no corroborating signal'] src=['mcp-registry']
- voxel51/fiftyone-mcp-server [mcp-server] *25*  items=1 - Control FiftyOne computer vision datasets through AI assistants using 80+ operat reasons=['fails: stars>=200 (25)'] src=['mcp-registry']
- gleanwork/remote-mcp-server [mcp-server] *165*  items=1 - Remote MCP Server that securely connects Glean Enterprise Knowledge with your ID reasons=['fails: stars>=200 (165)', 'fails: pushed<=90d (171)'] src=['mcp-registry']
- amol21p/mcp-interactive-terminal [mcp-server] *18*  items=1 - MCP server for real interactive terminal sessions — REPLs, SSH, databases, Docke reasons=['fails: stars>=200 (18)', 'fails: pushed<=90d (231)', 'no corroborating signal'] src=['mcp-registry']
- YGao2005/scholar-feed-mcp [mcp-server] *12*  items=1 - Rank CS/AI/ML papers by citations, forecast impact, or code adoption; trace 23.2 reasons=['fails: stars>=200 (12)', 'no corroborating signal'] src=['mcp-registry']
- nirholas/fresh-start [mcp-server] *6229*  items=1 - Explore the Claude Code CLI source — browse tools, commands, search code, and mo reasons=['fails: license (NOASSERTION)', 'no corroborating signal'] src=['mcp-registry']
- luckmanqasim/sota-anchor [plugin,mcp-server] *0*  items=2 - Finds what shipped after your coding agent's training, before it rebuilds it fro reasons=['fails: stars>=200 (0)', 'fails: age>=90d (15)'] src=['code', 'mcp-registry']
- codearranger/claude-legal [marketplace] *23*  items=1 - Pro-se / civil-practice drafting plugins for Claude Code: pleadings, motions, an reasons=['fails: stars>=200 (23)', 'fails: license (NOASSERTION)', 'no corroborating signal'] src=['code']

## Errors
- marketplace obra/claude-session-driver: no plugins list

## Rate limit
- REST calls this run (uncached): {"core": 0, "search": 22}; last seen: {"search": {"remaining": "28", "limit": "30"}}
- GraphQL: 693 calls, cost 275, remaining 4486/5000, stopped early: False
- REST stopped early: False
- repos lacking metadata: 3427; enriched this run: 24092