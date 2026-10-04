# Catalog report 2026-10-04
Mode: **token**; run time 653s
Repos (deduped): 4028; flat entries before dedup: 4720

## Tier x type BEFORE dedup (flat entries)
- listed/plugin: 2283
- watch/plugin: 495
- watch/skill: 477
- watch/marketplace: 340
- official/plugin: 276
- watch/agent: 246
- verified/collection: 169
- verified/skill: 166
- verified/plugin: 81
- watch/mcp-server: 71
- anthropic/plugin: 57
- verified/agent: 25
- verified/mcp-server: 15
- anthropic/marketplace: 5
- anthropic/collection: 4
- verified/marketplace: 2
- anthropic/agent: 1

## Tier AFTER dedup (repos)
- listed: 1956
- watch: 1385
- verified: 383
- official: 241
- anthropic: 63

## Type AFTER dedup (items)
- plugin: 3192
- skill: 643
- marketplace: 324
- agent: 272
- collection: 173
- mcp-server: 86

## Primary type AFTER dedup (repos)
- plugin: 2751
- skill: 575
- agent: 256
- marketplace: 240
- collection: 149
- mcp-server: 57

## Repos by discovery source family
- anthropic: 2258
- code: 1077
- topic: 537
- curated: 202
- mcp-registry: 86
- marketplace-expansion: 50

## Flags (all tiers)
- star-anomaly: 1

## star-anomaly by tier
- watch: 1

## Metadata gaps
- repos without metadata: 2092
- reasons: {'unfetched': 2052, 'repo not found': 27, 'no repo (non-github link)': 13}

## MCP-only repos excluded: 7
- feder-cr/invisible_playwright_mcp *31769* ['agentic-ai', 'ai-agent', 'ai-automation', 'autonomous-agents', 'browser'] - Playwright MCP server undetected by anti-bots and captchas: AI agent browses the
- VikashLoomba/copilot-mcp *504* ['agent-skills', 'claude-code-skills', 'claude-skills', 'codex-skills', 'copilot'] - A VSCode extension that lets you find and install Agent Skills and MCP Apps to u
- nikolai-vysotskyi/trace-mcp *185* ['ai-agents', 'claude', 'claude-ai', 'claude-code', 'claude-code-plugin'] - Framework-aware code intelligence MCP server — 88 framework integrations, 81 lan
- damionrashford/RivalSearchMCP *131* ['agent-skills', 'ai-agent', 'ai-assistant', 'claude-code', 'claude-code-skills'] - Deterministic research MCP server on FastMCP 3 — 5-engine web search, 9-platform
- covagashi/eplan-rag-mcp *108* ['claude-code', 'claude-code-plugin', 'claude-skills', 'codex', 'cursor'] - EPLAN Electric P8 2026 2027 + AI: MCP servers, docs RAG, and a Claude Code skill
- ngmeyer/librarian-mcp *None* [] - A standalone MCP server that gives Claude a markdown second-brain over any Obsid
- roomi-fields/notebooklm-mcp *None* [] - A mature MCP server (plus a 33-endpoint REST API) that drives Google NotebookLM 

## MCP Registry
- {"pages": 116, "fetched": 11600, "kept": 11398, "dropped": 202, "bad": 0, "complete": false, "excluded_remote_only": 6406, "excluded_low_signal": 4906, "records": 86, "attached_existing": 29, "new_repo": 57, "remote_only": 0, "tiers": {"official": 11, "listed": 13, "watch": 52, "verified": 10}}

## Top 20 by trend_7d
- n/a (no snapshot >=7 days old yet)

## Code search vs topic search
- repos found by code search: 1077
- also in topic search: 9
- code-only: 1034; tiers: {'watch': 1034}

## Top 30 by stars: anthropic
- anthropics/skills [marketplace,collection] *179598*  items=2 - Anthropic example skills
- anthropics/claude-code [marketplace,agent] *149372*  items=2 - Bundled plugins for Claude Code including Agent SDK development tools, PR review
- anthropics/claude-plugins-official [marketplace,collection] *37373*  items=2 - Directory of popular Claude Code extensions including development tools, product
- anthropics/claude-plugins-community [marketplace] *4465*  items=1 - 
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
- anthropics/claude-plugins-official [plugin] *None*  items=1 - PHP language server (Intelephense) for code intelligence
- anthropics/claude-plugins-official [plugin] *None*  items=1 - Creates interactive HTML playgrounds — self-contained single-file explorers with

## Top 30 by stars: official
- obra/superpowers [plugin,skill] *295147*  items=3 - Superpowers teaches Claude brainstorming, subagent driven development with built
- mattpocock/skills [plugin] *275789*  items=2 - Matt Pocock's agent skills for real engineering — grilling, spec/ticket flows, T
- heygen-com/hyperframes [plugin] *56547*  items=2 - HyperFrames by HeyGen. Write HTML, render video. Compositions, GSAP and runtime 
- ChromeDevTools/chrome-devtools-mcp [plugin] *52944*  items=2 - Control and inspect a live Chrome browser from your coding agent. Record perform
- confident-ai/deepeval [plugin] *18620*  items=1 - Skills for adding DeepEval evaluations, tracing, datasets, Confident AI reports,
- huggingface/skills [plugin] *11137*  items=2 - Build, train, evaluate, and use open source AI models, datasets, and spaces.
- wonderwhy-er/DesktopCommanderMCP [plugin] *9911*  items=2 - MCP server for terminal commands, process management, and file operations across
- Eigenwise/atomic-agents [plugin] *6268*  items=2 - Comprehensive development workflow for building AI agents with the Atomic Agents
- exa-labs/exa-mcp-server [plugin,mcp-server] *5076*  items=2 - Exa AI web search, deep research, and content extraction. Provides MCP tools and
- NVIDIA/skills [plugin] *3519*  items=2 - Find the right NVIDIA skill for GPU acceleration, CUDA, AI agents, data loading,
- cloudflare/skills [plugin] *2978*  items=2 - Skills for the Cloudflare developer platform: Workers, Durable Objects, Agents S
- modelcontextprotocol/ext-apps [plugin] *2895*  items=3 - Skills for creating MCP Apps with the MCP Apps SDK
- aws/agent-toolkit-for-aws [plugin] *2796*  items=8 - Build, deploy, and operate AI agents on AWS. Skills for scaffolding agents with 
- expo/skills [plugin] *2656*  items=2 - Official Expo skills for building, deploying, upgrading, and debugging React Nat
- GoogleChrome/modern-web-guidance [plugin] *2385*  items=1 - Keep your coding agent up to date with the latest web best practices
- figma/mcp-server-guide [plugin,mcp-server] *2044*  items=3 - Figma design platform integration. Access design files, extract component inform
- MicrosoftDocs/mcp [plugin,mcp-server] *1926*  items=3 - Access official Microsoft documentation, API references, and code samples for Az
- stripe/ai [plugin] *1853*  items=2 - Stripe development plugin for Claude
- microsoft/azure-skills [plugin] *1536*  items=2 - Transform Claude into an Azure expert. This plugin integrates the Azure MCP serv
- atlassian/atlassian-mcp-server [plugin,mcp-server] *1078*  items=3 - Connect to Atlassian products including Jira and Confluence. Search and create i
- forcedotcom/sf-skills [plugin] *1055*  items=1 - Build Salesforce apps and agents using these core building blocks: metadata, Ape
- awslabs/agent-plugins [plugin] *909*  items=10 - Guide developers through adding maps, places search, geocoding, routing, and oth
- superdesigndev/superdesign-skill [plugin,skill] *622*  items=2 - Design or redesign frontend UI and marketing graphics on the Superdesign infinit
- duckdb/duckdb-skills [plugin] *598*  items=2 - DuckDB-powered skills for Claude Code: read any data file, attach and query Duck
- Shopify/Shopify-AI-Toolkit [plugin] *585*  items=2 - Shopify's AI Toolkit provides 18 development skills for building on the Shopify 
- ClickHouse/agent-skills [plugin] *543*  items=2 - 28 best practice rules for ClickHouse schema design, query optimization, and dat
- gitroomhq/postiz-agent [plugin] *501*  items=2 - Social media automation CLI for scheduling posts, managing integrations, uploadi
- makenotion/claude-code-notion-plugin [plugin] *491*  items=2 - Notion workspace integration. Search pages, create and update documents, manage 
- tavily-ai/skills [plugin] *486*  items=2 - Build AI applications with real-time web data using Tavily's search, extract, cr
- TheQtCompanyRnD/agent-skills [plugin] *458*  items=2 - Agentic engineering skills for Qt software development — Qt C++/QML code review,

## Top 30 by stars: listed
- DietrichGebert/ponytail [plugin] *153813*  items=2 - Lazy senior dev mode. Forces the simplest, shortest solution that actually works
- JuliusBrussee/caveman [plugin,skill] *109738*  items=2 - Auto-activation works differently per agent: Claude Code uses SessionStart hooks
- thedotmack/claude-mem [plugin,skill] *95920*  items=3 - Persistent memory system for Claude Code - seamlessly preserve context across se
- pbakaus/impeccable [plugin] *75924*  items=1 - Great design prompts require design vocabulary. Most people don't have it. You c
- mem0ai/mem0 [plugin] *66558*  items=1 - Connect Mem0 to Claude to give your agent persistent memory across sessions. Cla
- mvanhorn/last30days-skill [plugin] *63489*  items=1 - last-30-days is a Claude Code skill that searches the web and delivers a structu
- coreyhaines31/marketingskills [plugin] *52845*  items=1 - coreyhaines31
- jarrodwatts/claude-hud [plugin,collection] *28298*  items=2 - Real-time statusline HUD for Claude Code - context health, tool activity, agent 
- alirezarezvani/claude-skills [plugin,skill] *27523*  items=2 - Playwright Pro turns your AI coding agent into a senior test automation engineer
- mksglu/context-mode [plugin] *25352*  items=1 - MCP is the protocol for tool access. We're the virtualization layer for context.
- browser-use/browser-harness [plugin] *18280*  items=1 - Open-source browser agent driven via CDP — direct browser control, 79K stars, YC
- AgriciDaniel/claude-seo [plugin] *18264*  items=1 - Comprehensive SEO analysis plugin for Claude Code. Performs full site audits wit
- Jeffallan/claude-skills [plugin,skill,collection] *11725*  items=3 - 66 specialized skills for full-stack development: 12 language experts (Python, T
- revfactory/harness [plugin,agent] *9118*  items=3 - Harness leverages Claude Code's agent team system to decompose complex tasks int
- Eventual-Inc/Daft [plugin] *5790*  items=1 - Skills for working with Daft, a high-performance data engine for AI and multimod
- nyldn/claude-octopus [plugin] *4142*  items=2 - Multi-LLM orchestration for Claude Code and Cowork. Coordinates 8 AI providers (
- Chachamaru127/claude-code-harness [plugin,agent] *3147*  items=2 - Autonomous Plan → Work → Review cycle for Claude Code. Go-native engine with 25×
- AgriciDaniel/claude-blog [plugin] *2320*  items=1 - AI-powered blog creation and optimization skill with 20 commands, 4 specialized 
- codeaholicguy/ai-devkit [plugin] *1639*  items=1 - A structured software development toolkit that helps Claude Code follow senior-e
- activeloopai/hivemind [plugin,skill,collection] *1621*  items=5 - Cloud-backed persistent memory for Claude Code powered by Deeplake. Automaticall
- cookiy-ai/user-research-skill [plugin] *1560*  items=1 - Cookiy is a Claude Code plugin for end-to-end user research. It provides skills 
- hyhmrright/brooks-lint [plugin] *1503*  items=2 - Code quality diagnosis using principles from six classic software engineering bo
- mohitagw15856/pm-claude-skills [plugin,skill] *1420*  items=2 - 90 Claude Skills across 14 professions — the largest open-source professional sk
- jordanrendric/claude-video-vision [plugin] *1342*  items=2 - A perception layer that gives Claude Code the ability to watch and understand vi
- aklofas/kicad-happy [plugin] *1330*  items=1 - KiCad electronics design skills. Analyze schematics, review PCB layouts, downloa
- suboss87/FDEOps [plugin,skill] *950*  items=2 - FDEOS makes Claude operate like an experienced Forward Deployed Engineer. It bri
- borghei/Claude-Skills [plugin,skill] *859*  items=2 - 8 flagship engineering skills curated from the Claude Skills library, covering t
- GarethManning/education-agent-skills [plugin] *821*  items=1 - 108 evidence-based pedagogical skills for educators — the only education-specifi
- jame581/GodotPrompter [plugin] *783*  items=1 - Agentic skills framework for Godot 4.x game development — 41 domain-specific ski
- inference-sh/skills [plugin] *759*  items=1 - AI agent skills for 150+ models via inference.sh CLI - generate images with FLUX

## Top 30 by stars: verified
- Egonex-AI/Understand-Anything [skill] *85210*  items=1 - Graphs that teach > graphs that impress. Turn any code into an interactive knowl
- shanraisshan/claude-code-best-practice [skill] *67047*  items=1 - from vibe coding to agentic engineering - practice makes claude perfect
- ayghri/i-have-adhd [plugin,skill] *53232*  items=2 - A skill to stop your coding agent from burying the answer. ADHD-friendly output.
- K-Dense-AI/scientific-agent-skills [skill] *47514*  items=1 - Turn any AI agent into an AI Scientist. The #1 Agent Skills library for science,
- sickn33/agentic-awesome-skills [skill] *47230*  items=1 - AAS Core is the local, agent-first control plane for complete catalog discovery,
- wshobson/agents [plugin,skill] *40183*  items=2 - Multi-harness agentic plugin marketplace for Claude Code, Codex, Cursor, OpenCod
- VoltAgent/awesome-agent-skills [skill] *35176*  items=1 - A curated collection of 1000+ agent skills from official dev teams and the commu
- nanocoai/nanoclaw [skill] *30876*  items=1 - A lightweight alternative to OpenClaw that runs in containers for security. Conn
- OthmanAdi/planning-with-files [skill] *27277*  items=1 - Persistent file-based planning for AI coding agents and long-running tasks. Cras
- JimLiu/baoyu-skills [skill] *26326*  items=1 - 
- VoltAgent/awesome-claude-code-subagents [agent] *25489*  items=1 - A collection of 100+ specialized Claude Code subagents covering a wide range of 
- titanwings/distilly [skill] *25278*  items=1 - Distilly — Distill how they think into reusable Skills for any Agent or Bot. For
- teng-lin/notebooklm-py [skill] *19596*  items=1 - Unofficial Python API and agentic skill for Google Gemini Notebook. Full program
- wanshuiyin/Auto-claude-code-research-in-sleep [skill] *16945*  items=1 - ARIS ⚔️ (Auto-Research-In-Sleep) — Lightweight Markdown-only skills for autonomo
- yusufkaraaslan/Skill_Seekers [skill] *15096*  items=1 - Convert documentation websites, GitHub repositories, and PDFs into Claude AI ski
- nidhinjs/prompt-master [skill] *14026*  items=1 - A Claude skill that writes the accurate prompts for any AI tool. Zero tokens or 
- latent-spaces/brag [skill] *13327*  items=1 - You built it. Now brag. Turn the project you just created into a short, shareabl
- nexu-io/html-anything [skill] *8998*  items=1 - ✨ The agentic HTML editor — your local AI agent writes the HTML, you ship it. 🚀 
- tigerless-labs/autoharness [plugin] *7610*  items=1 - Autoharness — a self-learning skill layer for Claude Code — distills skills from
- WenyuChiou/awesome-agentic-ai-zh [skill] *7341*  items=1 - A trilingual (繁中 / English / 简中) learning roadmap for agentic AI: from LLM basic
- zenstory-ai/oh-story-claudecode [skill] *7239*  items=1 - Claude Code / Codex / OpenCode agent skills for writing Chinese web novels (网文):
- SnailSploit/Claude-Red [skill] *7229*  items=1 - claude-red is a curated library of offensive security skills designed for the Cl
- gosom/google-maps-scraper [skill] *6264*  items=1 - scrape data from Google Maps. Extracts data such as the name, address, phone num
- ikaijua/Awesome-AITools [skill] *6207*  items=1 - Collection of AI-related utilities. Welcome to submit pull requests /收藏AI相关的实用工具
- browser-act/skills [skill] *6092*  items=1 - Browser automation CLI built for AI agents. Break through anti-bot walls, hand o
- 54yyyu/zotero-mcp [mcp-server] *5234*  items=1 - Search, read, annotate, and add to your Zotero research library, local or web.
- elementalsouls/Claude-BugHunter [skill] *4762*  items=1 - A Claude Code skill bundle for bug hunting and external red-team work - 82 skill
- zebbern/claude-code-guide [skill,collection] *4647*  items=2 - A current single-page reference for Claude Code: install, environment variables,
- Manavarya09/design-extract [plugin] *4167*  items=1 - Extract any website's complete design system with one command. DTCG tokens, sema
- liustack/modlens [skill] *4116*  items=1 - The first vision plugin for DeepSeek Harness, and the vision bridge for every te

## Top 30 by stars: watch
- code-yeongyu/oh-my-openagent [skill] *69781*  items=1 - OmO: Just type "mass ulw" keyword with your prompt. Now you are the master of gr
- travisvn/awesome-claude-skills [skill] *15258*  items=1 - A curated list of awesome Claude Skills, resources, and tools for customizing Cl
- kyegomez/OpenMythos [plugin] *14903*  items=1 - A theoretical reconstruction of the Claude Mythos architecture, built from first
- NevaMind-AI/memU [skill] *14492*  items=1 - Personal memory across agents
- Orchestra-Research/AI-Research-SKILLs [skill] *13233*  items=1 - Comprehensive open-source library of AI research and engineering skills for any 
- anbeime/skill [skill] *7517*  items=1 - 收录最全、更新最快的技能Skills商店：精选原创技能包（涵盖文档处理、内容创作、编程开发、机器学习、自动化工作流），全部打包好可直接安装使用！同时自动抓取Gi
- deanpeters/Product-Manager-Skills [skill] *7154*  items=1 - Product Management skills framework built on battle-tested methods for Claude Co
- parcadei/Continuous-Claude-v3 [skill,agent] *3939*  items=2 - Context management for Claude Code. Hooks maintain state via ledgers and handoff
- geekjourneyx/md2wechat-skill [skill] *3687*  items=1 - 面向 AI Agent 的微信公众号创作与发布 CLI：Markdown 排版、AI 配图、预览与草稿创建；支持由浏览器 Agent 保存知乎、CSDN、头条未
- zenbu-labs/terminal-browser [plugin,skill] *3626*  items=2 - A browser inside your terminal
- Ryze-AI-Adgent/open-seo-mcp-skills [skill] *3609*  items=1 - Free SEO MCP server + open-source SEO and GEO skills for Claude: keyword researc
- agenticnotetaking/arscontexta [plugin] *3492*  items=1 - Claude Code plugin that generates individualized knowledge systems from conversa
- jangviktor-web/nihaixia [skill] *3413*  items=1 - 倪海厦视角的中医Agent Skill，基于倪海厦教学资料开发，蒸馏倪师伤寒论、金匮要略、黄帝内经、神农本草经、针灸篇等，人纪/医案/经方思维，六经辨证，八纲辨
- codeaashu/claude-code [skill] *3368*  items=1 - Claude Code is an agentic coding tool that lives in your terminal, understands y
- irinabuht12-oss/marketing-skills [skill] *3310*  items=1 - Claude skills for marketing: 49 free marketing skills for Claude Code and claude
- nateherkai/scroll-craft [plugin] *2930*  items=1 - An agent skill for building premium, immersive, scroll-driven websites. Works wi
- rohitg00/pro-workflow [plugin,skill] *2900*  items=2 - Claude Code learns from your corrections: self-correcting memory that compounds 
- rehan-remade/universal-modder [plugin] *2724*  items=1 - Point Claude at any game. Skills, tools and the fal MCP that let Claude Code mod
- Natively-AI-assistant/natively-cluely-ai-assistant [skill] *2661*  items=1 - Natively — Free open-source AI meeting assistant, interview copilot, and note ta
- zenstory-ai/drama-skills [skill] *2480*  items=1 - 开源 AI 短剧/漫剧创作 skill 合集：剧本、角色资产、分镜 storyboard、图片/视频提示词、审查，适配 Claude Code 与 Codex 
- Appllama/appllama-skills [skill,mcp-server] *2311*  items=2 - A builder, not just a researcher. Agent skills that turn top-grossing app patter
- JuneYaooo/nihaisha-nishi-tcm [skill] *2145*  items=1 - 倪海厦中医课程资料的 Agent Skill：支持课程检索、方证穴位辨析、学习笔记整理与板书截图证据索引。 | An Agent Skill for Ni Ha
- A9T9/RPA [mcp-server] *2062*  items=1 - MCP server for browser and desktop automation: OCR, image recognition, real mous
- cbrock84/headcount [plugin,skill] *1947*  items=2 - An agent organization structured as a company — 15+ departments, 125+ skills, ea
- composio-community/awesome-claude-plugins [plugin,skill] *1930*  items=2 - A curated list of Plugins that let you extend Claude Code with custom commands, 
- coldteadotai/pr-lens [skill] *1851*  items=1 - Review code 100X faster. Lens draws every PR as animated architecture and data-f
- XiaoMaColtAI/math-modeling-skill [skill] *1848*  items=1 - 数学建模技能 - 面向 CUMCM、MCM/ICM 等数学建模竞赛的三阶段工作流：建模分析、Python/MATLAB 编程与 DOCX 论文生成。包含丰富的算
- Prat011/awesome-llm-skills [skill] *1778*  items=1 - A curated list of awesome LLM and AI Agent Skills, resources and tools for custo
- kaankiziltug/logo-design-skill [skill] *1733*  items=1 - A comprehensive logo-design skill for Claude, Gemini CLI, Codex and other AI age
- hesamsheikh/octogent [skill] *1420*  items=1 - A thin orchestration dashboard over Claude Code for managing context, automation

## Random sample of 20 watch repos (of 1385)
- pearyj/sillytavern-cards-skill [skill] *None*  items=1 - OpenClaw skill for importing & roleplaying with SillyTavern character cards (Tav reasons=['no metadata'] src=['code']
- navox-labs/agents [agent] *None*  items=1 - 19 AI agents for Claude Code that run your full sprint cycle: strategy, spec, ar reasons=['no metadata'] src=['code']
- majiayu000/claude-skill-registry [skill] *None*  items=1 - Searchable Claude Code skills catalog with source-linked guides and generated re reasons=['no metadata'] src=['code']
- AgentTestingClamp/r02-alirezarezvani-claude-skills-seo [skill] *None*  items=1 - 📈 SEO & Content Marketing skill suite derived from alirezarezvani/claude-skills. reasons=['no metadata'] src=['code']
- omega-bred/bluebubbles-chatgpt-agent [skill] *None*  items=1 - An agent that bridges BlueBubbles + ChatGPT to bring ChatGPT directly in to iMes reasons=['no metadata'] src=['code']
- doozMen/tech-conf-agent [agent] *None*  items=1 - Swift 6.2 MCP server for technical conference navigation with natural language q reasons=['no metadata'] src=['code']
- Nevaberry/nevaberry-plugins [marketplace] *None*  items=1 - Knowledge Patch is a fleet of SKILL.md files that fill the gap between an LLM's  reasons=['no metadata'] src=['code']
- Infisical/ai-skills [marketplace] *None*  items=1 - AI skills and MCP connection for Infisical -- Stop your AI from hallucinating ab reasons=['no metadata'] src=['code']
- vertivolatam/monorepo [skill] *None*  items=1 - Vertivo IoT monorepo — Serverpod backend, Flutter app, Raspberry Pi orchestrator reasons=['no metadata'] src=['code']
- eminbayrak/ai-architecture [skill] *None*  items=1 - AI Architect kit: LangGraph crew, cost-aware routing, portable agent skills reasons=['no metadata'] src=['code']
- kumaran-is/claude-code-onboarding [agent] *None*  items=1 - 🤖 Team onboarding kit for Claude Code AI coding assistant. Pre-configured with a reasons=['no metadata'] src=['code']
- Juanpacol/Nab- [agent] *None*  items=1 -  reasons=['no metadata'] src=['code']
- progmodEK/flow-driven-domain [marketplace] *None*  items=1 - Flow Driven Domain Library, a spring Library that helps you develop DDD process- reasons=['no metadata'] src=['code']
- nilukush/plan-do-check-verify-retrospect [agent] *6*  items=1 - A framework for AI Assisted Coding reasons=['fails: stars>=200 (6)', 'no corroborating signal'] src=['topic']
- tbdavid2019/openclaw-docs-skill [skill] *None*  items=1 - 自動每日更新, 讓你的LLM有面對openclaw疑難雜症處理的能力。This is an Agent Skill designed for AI coding reasons=['no metadata'] src=['code']
- gotalab/goal-setter-skill [plugin] *None*  items=1 - Shape rough requests into evidence-backed /goal completion contracts — an Agent  reasons=['no metadata'] src=['code']
- lool-ventures/founder-skills [skill] *42*  items=1 - AI agent skills for high-velocity startup founders reasons=['fails: stars>=200 (42)'] src=['topic']
- didvc/claude-code-jsonl-editor [agent] *14*  items=1 - 🚀 Interactive JSONL editor for Claude Code conversation files with real-time fil reasons=['fails: stars>=200 (14)', 'no corroborating signal'] src=['topic']
- mariadb-corporation/ai-plugins [skill] *None*  items=1 - First-class MariaDB support for AI coding agents, provided on top of a MariaDB S reasons=['no metadata'] src=['code']
- sagerstack/agentic-workflows [agent] *None*  items=1 - Agentic workflows triggered programmatically that enable A2A communication reasons=['no metadata'] src=['code']

## Errors
- marketplace obra/claude-session-driver: no plugins list
- https://registry.modelcontextprotocol.io/v0/servers?limit=100&version=latest&cursor=io.github.Ayush-yadav11%2Fquillrag%3A0.1.3: HTTP 500
- mcp registry: page 117 HTTP 500
- graphql: HTTP 403
- graphql chunk 1400: no data None
- graphql: HTTP 403
- graphql chunk 1500: no data None
- graphql: HTTP 403
- graphql chunk 1600: no data None
- graphql: HTTP 403
- graphql chunk 1700: no data None
- graphql: HTTP 403
- graphql chunk 1800: no data None
- graphql: HTTP 403
- graphql chunk 1900: no data None
- graphql: HTTP 403
- graphql chunk 2000: no data None
- graphql: HTTP 403
- graphql chunk 2100: no data None
- graphql: HTTP 403
- graphql chunk 2200: no data None
- graphql: HTTP 403
- graphql chunk 2300: no data None
- graphql: HTTP 403
- graphql chunk 2400: no data None
- graphql: HTTP 403
- graphql chunk 2500: no data None
- graphql: HTTP 403
- graphql chunk 2600: no data None
- graphql: HTTP 403
- graphql chunk 2700: no data None
- graphql: HTTP 403
- graphql chunk 2800: no data None
- graphql: HTTP 403
- graphql chunk 2900: no data None
- graphql: HTTP 403
- graphql chunk 3000: no data None
- graphql: HTTP 403
- graphql chunk 3100: no data None
- graphql: HTTP 403
- graphql chunk 3200: no data None
- graphql: HTTP 403
- graphql chunk 3300: no data None
- graphql: HTTP 403
- graphql chunk 3400: no data None
- graphql: HTTP 403
- graphql chunk 3500: no data None
- graphql: HTTP 403
- graphql chunk 3600: no data None
- graphql: HTTP 403
- graphql chunk 3700: no data None
- graphql: HTTP 403
- graphql chunk 3800: no data None
- graphql: HTTP 403
- graphql chunk 3900: no data None
- graphql: HTTP 403
- graphql chunk 4000: no data None
- graphql: HTTP 403
- graphql chunk 4100: no data None
- graphql: HTTP 403

## Rate limit
- REST calls this run (uncached): {"core": 0, "search": 0}; last seen: {}
- GraphQL: 82 calls, cost 21, remaining 4977/5000, stopped early: False
- REST stopped early: False
- repos lacking metadata: 5681; enriched this run: 1904