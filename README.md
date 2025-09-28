<div align="center">

# Adentic – Open Source Platform to Build, Manage and Train AI Agents

![Adentic Screenshot](frontend/public/banner.png)

**The complete platform for creating autonomous AI agents that work for you**

Adentic is a comprehensive open source platform that empowers you to build, manage, and train sophisticated AI agents for any use case. Create powerful agents that act autonomously on your behalf, from general-purpose assistants to specialized automation tools.

[![License](https://img.shields.io/badge/License-Apache--2.0-blue)](./license)
[![Discord Follow](https://dcbadge.limes.pink/api/server/Py6pCBUUPw?style=flat)](https://discord.gg/Py6pCBUUPw)
[![Twitter Follow](https://img.shields.io/twitter/follow/adenticai)](https://x.com/adenticai)
[![GitHub Repo stars](https://img.shields.io/github/stars/adentic-ai/adentic)](https://github.com/adentic-ai/adentic)
[![Issues](https://img.shields.io/github/issues/adentic-ai/adentic)](https://github.com/adentic-ai/adentic/labels/bug)

<!-- Keep these links. Translations will automatically update with the README. -->
[Deutsch](https://www.readme-i18n.com/adentic-ai/adentic?lang=de) | 
[Español](https://www.readme-i18n.com/adentic-ai/adentic?lang=es) | 
[français](https://www.readme-i18n.com/adentic-ai/adentic?lang=fr) | 
[日本語](https://www.readme-i18n.com/adentic-ai/adentic?lang=ja) | 
[한국어](https://www.readme-i18n.com/adentic-ai/adentic?lang=ko) | 
[Português](https://www.readme-i18n.com/adentic-ai/adentic?lang=pt) | 
[Русский](https://www.readme-i18n.com/adentic-ai/adentic?lang=ru) | 
[中文](https://www.readme-i18n.com/adentic-ai/adentic?lang=zh)

</div>

## 🌟 What Makes Adentic Special

### 🤖 Includes Adentic – Flagship Generalist AI Worker
Meet Adentic, our showcase agent that demonstrates the full power of the Adentic platform. Through natural conversation, Adentic handles research, data analysis, browser automation, file management, and complex workflows – showing you what's possible when you build with Adentic.

### 🔧 Build Custom Adentic-Type Agents
Create your own specialized agents tailored to specific domains, workflows, or business needs. Whether you need agents for customer service, data processing, content creation, or industry-specific tasks, Adentic provides the infrastructure and tools to build, deploy, and scale them.

### 🚀 Complete Platform Capabilities
- **Browser Automation**: Navigate websites, extract data, fill forms, automate web workflows
- **File Management**: Create, edit, and organize documents, spreadsheets, presentations, code
- **Web Intelligence**: Crawling, search capabilities, data extraction and synthesis
- **System Operations**: Command-line execution, system administration, DevOps tasks
- **API Integrations**: Connect with external services and automate cross-platform workflows
- **Agent Builder**: Visual tools to configure, customize, and deploy agents

## 📋 Table of Contents

- [🌟 What Makes Adentic Special](#-what-makes-adentic-special)
- [🎯 Agent Examples & Use Cases](#-agent-examples--use-cases)
- [🏗️ Platform Architecture](#️-platform-architecture)
- [🚀 Quick Start](#-quick-start)
- [🏠 Self-Hosting](#-self-hosting)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

## 🎯 Agent Examples & Use Cases

### Adentic - Your Generalist AI Worker

Adentic demonstrates the full capabilities of the Adentic platform as a versatile AI worker that can:

**🔍 Research & Analysis**
- Conduct comprehensive web research across multiple sources
- Analyze documents, reports, and datasets
- Synthesize information and create detailed summaries
- Market research and competitive intelligence

**🌐 Browser Automation**
- Navigate complex websites and web applications
- Extract data from multiple pages automatically
- Fill forms and submit information
- Automate repetitive web-based workflows

**📁 File & Document Management**
- Create and edit documents, spreadsheets, presentations
- Organize and structure file systems
- Convert between different file formats
- Generate reports and documentation

**📊 Data Processing & Analysis**
- Clean and transform datasets from various sources
- Perform statistical analysis and create visualizations
- Monitor KPIs and generate insights
- Integrate data from multiple APIs and databases

**⚙️ System Administration**
- Execute command-line operations safely
- Manage system configurations and deployments
- Automate DevOps workflows
- Monitor system health and performance

### Build Your Own Specialized Agents

The Adentic platform enables you to create agents tailored to specific needs:

**🎧 Customer Service Agents**
- Handle support tickets and FAQ responses
- Manage user onboarding and training
- Escalate complex issues to human agents
- Track customer satisfaction and feedback

**✍️ Content Creation Agents**
- Generate marketing copy and social media posts
- Create technical documentation and tutorials
- Develop educational content and training materials
- Maintain content calendars and publishing schedules

**📈 Sales & Marketing Agents**
- Qualify leads and manage CRM systems
- Schedule meetings and follow up with prospects
- Create personalized outreach campaigns
- Generate sales reports and forecasts

**🔬 Research & Development Agents**
- Conduct academic and scientific research
- Monitor industry trends and innovations
- Analyze patents and competitive landscapes
- Generate research reports and recommendations

**🏭 Industry-Specific Agents**
- Healthcare: Patient data analysis, appointment scheduling
- Finance: Risk assessment, compliance monitoring
- Legal: Document review, case research
- Education: Curriculum development, student assessment

Each agent can be configured with custom tools, workflows, knowledge bases, and integrations specific to your requirements.

## 🏗️ Platform Architecture

![Architecture Diagram](docs/images/diagram.png)

Adentic consists of four main components that work together to provide a complete AI agent development platform:

### 🔧 Backend API
Python/FastAPI service that powers the agent platform with REST endpoints, thread management, agent orchestration, and LLM integration with Anthropic, OpenAI, and others via LiteLLM. Includes agent builder tools, workflow management, and extensible tool system.

### 🖥️ Frontend Dashboard
Next.js/React application providing a comprehensive agent management interface with chat interfaces, agent configuration dashboards, workflow builders, monitoring tools, and deployment controls.

### 🐳 Agent Runtime
Isolated Docker execution environments for each agent instance featuring browser automation, code interpreter, file system access, tool integration, security sandboxing, and scalable agent deployment.

### 🗄️ Database & Storage
Supabase-powered data layer handling authentication, user management, agent configurations, conversation history, file storage, workflow state, analytics, and real-time subscriptions for live agent monitoring.

## 🚀 Quick Start

Get your Adentic platform running in minutes with our automated setup wizard:

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/adentic-ai/adentic.git
cd adentic
```

### 2️⃣ Run the Setup Wizard
```bash
python setup.py
```
The wizard will guide you through 14 steps with progress saving, so you can resume if interrupted.

### 3️⃣ Start the Platform
```bash
python start.py
```

That's it! Your Adentic platform will be running with Adentic ready to assist you.

## 🏠 Self-Hosting

Adentic can be self-hosted on your own infrastructure using our comprehensive setup wizard, giving you complete control over your AI agent platform. For a complete guide to self-hosting Adentic, please refer to our [Self-Hosting Guide](./docs/SELF-HOSTING.md).

### 🔧 Setup Process Includes

- **🏗️ Infrastructure**: Supabase project setup for database and authentication
- **⚡ Performance**: Redis configuration for caching and session management
- **🛡️ Security**: Daytona setup for secure agent execution environments
- **🤖 AI Integration**: LLM providers (Anthropic, OpenAI, OpenRouter, etc.)
- **🌐 Web Capabilities**: Search and scraping (Tavily, Firecrawl)
- **📋 Workflows**: QStash for background job processing
- **🔗 Automation**: Webhook handling for automated tasks
- **📊 Data Sources**: Optional RapidAPI integrations

### 📚 Manual Setup

For advanced users who prefer manual configuration, see the [Self-Hosting Guide](./docs/SELF-HOSTING.md) for detailed manual setup instructions.

The wizard will guide you through all necessary steps to get your Adentic platform up and running. For detailed instructions, troubleshooting tips, and advanced configuration options, see the [Self-Hosting Guide](./docs/SELF-HOSTING.md).

## 🤝 Contributing

We welcome contributions from the community! Whether you're fixing bugs, adding features, or improving documentation, your help makes Adentic better for everyone.

Please see our [Contributing Guide](./CONTRIBUTING.md) for more details on:
- How to set up your development environment
- Code style and standards
- Pull request process
- Community guidelines

## 📄 License

Adentic is licensed under the Apache License, Version 2.0. See [LICENSE](./LICENSE) for the full license text.

---

<div align="center">

**Ready to build your first AI agent?** 

[Get Started](./docs/SELF-HOSTING.md) • [Join Discord](https://discord.gg/Py6pCBUUPw) • [Follow on Twitter](https://x.com/adenticai)

</div>

una Setup Complete! ✨

ℹ️  Adentic is configured with your LLM API keys and ready to use.
ℹ️  Delete the .setup_progress file to reset the setup.
ℹ️  Your Adentic instance is ready to use!

Useful Docker commands:
  docker compose ps         - Check service status
  docker compose logs -f    - Follow logs
  docker compose down       - Stop Adentic services
  python start.py           - To start or stop Adentic services