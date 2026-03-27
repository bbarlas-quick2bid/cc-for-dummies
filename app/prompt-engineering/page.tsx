import PageHeader from "@/components/PageHeader";
import ConceptCard from "@/components/ConceptCard";
import AskYourAI from "@/components/AskYourAI";
import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";

export const metadata = {
  title: "Prompt Engineering | Quick2Bid AI Guide",
  description: "Learn how to talk to AI effectively. Prompting basics, chain-of-thought, skills, and agents.",
  openGraph: {
    title: "Prompt Engineering | Quick2Bid AI Guide",
    description: "Learn how to talk to AI effectively. Prompting basics, chain-of-thought, skills, and agents.",
    type: "website" as const,
  },
  twitter: { card: "summary_large_image" as const },
};

export default function PromptEngineering() {
  return (
    <div className="section-container prose-custom">
      <PageHeader
        eyebrow="Section 02"
        step={2}
        totalSteps={5}
        title="Prompt Engineering, Skills & Agents"
        subtitle="Talking to AI is a skill. Here's how to get dramatically better results, and how AI systems go from chatbots to autonomous agents."
      />

      <div className="mt-10 space-y-4 text-slate-700 leading-relaxed">
        <p>
          Most people use AI like a Google search. They type a vague question and hope for the
          best. But the difference between a mediocre AI response and a great one often comes
          down entirely to how you framed the input.
        </p>
        <p>
          Prompt engineering is the practice of structuring your inputs to an LLM to reliably
          get better outputs. It&apos;s part art, part science.
        </p>
      </div>

      <AskYourAI
        label="Intro to prompting"
        context="Orientation prompt"
        prompt={`What is prompt engineering and why does it matter? Give me a beginner-friendly overview of the most important techniques, things like being specific, giving context, using roles, and chain-of-thought. Use before/after examples to show the difference.`}
      />

      {/* --- SECTION: The basics --- */}
      <h2>The Basics: What Makes a Good Prompt?</h2>

      <div className="grid sm:grid-cols-2 gap-4 my-6">
        {[
          {
            icon: "🎯",
            title: "Be specific",
            desc: "Vague in = vague out. Tell the model exactly what you want, in what format, at what length.",
            accent: "brand" as const,
          },
          {
            icon: "🎭",
            title: "Give it a role",
            desc: "\"You are a senior software engineer...\" primes the model to respond with that perspective and vocabulary.",
            accent: "blue" as const,
          },
          {
            icon: "📋",
            title: "Show, don't just tell",
            desc: "Examples are powerful. If you show the model what good output looks like, it will match the pattern.",
            accent: "green" as const,
          },
          {
            icon: "🔢",
            title: "Ask for structure",
            desc: "\"Give me a numbered list\", \"Respond in JSON\", \"Format as a table\": models follow formatting instructions well.",
            accent: "amber" as const,
          },
        ].map((c) => (
          <ConceptCard key={c.title} icon={c.icon} title={c.title} accent={c.accent}>
            <p>{c.desc}</p>
          </ConceptCard>
        ))}
      </div>

      {/* Before/After */}
      <h3>Before and After</h3>
      <div className="grid sm:grid-cols-2 gap-4 my-4">
        <div className="rounded-xl border border-red-200 bg-red-50 p-4">
          <div className="text-xs font-bold text-red-600 uppercase tracking-wide mb-2">❌ Weak prompt</div>
          <p className="text-slate-700 text-sm font-mono">
            &ldquo;Make a button in React&rdquo;
          </p>
        </div>
        <div className="rounded-xl border border-green-200 bg-green-50 p-4">
          <div className="text-xs font-bold text-green-600 uppercase tracking-wide mb-2">✅ Strong prompt</div>
          <p className="text-slate-700 text-sm font-mono">
            &ldquo;Create a React button component using TypeScript and Tailwind CSS. It should accept a variant prop of &lsquo;primary&rsquo; or &lsquo;secondary&rsquo;, a disabled state, and an onClick handler. Use functional components and export it as default.&rdquo;
          </p>
        </div>
      </div>

      <AskYourAI
        label="Practice prompting"
        context="Practice prompt"
        prompt={`I want to practice prompt engineering. Give me 5 examples of vague prompts and their improved versions. Then give me 3 "exercises": tasks where I write a weak prompt first, then you'll show me how to improve it. Start with software-related topics.`}
      />

      {/* --- SECTION: Techniques --- */}
      <h2>Core Prompting Techniques</h2>

      <h3>Chain-of-Thought (CoT)</h3>
      <p>
        Instead of asking for an answer directly, ask the model to <em>think step by step</em>.
        This dramatically improves accuracy on reasoning tasks because it forces the model to
        &ldquo;show its work&rdquo; and catch mistakes mid-generation.
      </p>

      <CodeBlock
        language="text"
        filename="chain-of-thought.txt"
        code={`// Without CoT
"What is 17 × 23?"

// With CoT — much more reliable
"Calculate 17 × 23. Think step by step before giving the final answer."`}
      />

      <h3>Few-Shot Prompting</h3>
      <p>
        Give the model examples of what you want before asking it to do the task. This is called
        &ldquo;few-shot&rdquo; learning. The model infers the pattern from the examples.
      </p>

      <CodeBlock
        language="text"
        filename="few-shot.txt"
        code={`Input: "The weather today is great."
Sentiment: Positive

Input: "I missed the bus and now I'm late."
Sentiment: Negative

Input: "The package arrived on time."
Sentiment: ???`}
      />

      <h3>System Prompts</h3>
      <p>
        Most LLM APIs accept a &ldquo;system prompt&rdquo;, a special instruction that sets the
        model&apos;s behavior before the conversation starts. Think of it as the model&apos;s
        job description and personality.
      </p>

      <CodeBlock
        language="text"
        filename="system-prompt.txt"
        code={`You are a senior TypeScript engineer at a startup. You write clean, idiomatic code.
You always:
- Use TypeScript strict mode
- Prefer functional patterns
- Add brief comments on non-obvious logic
- Flag potential security issues

You never add unnecessary boilerplate or over-engineer simple solutions.`}
      />

      <AskYourAI
        label="Learn the techniques"
        context="Deep-dive prompt"
        prompt={`Explain these prompting techniques with examples: chain-of-thought, few-shot prompting, zero-shot prompting, role prompting, and instruction following. Which ones work best for coding tasks vs. creative writing vs. analysis?`}
      />

      {/* --- SECTION: Skills / Tools --- */}
      <h2>Skills (Tools)</h2>

      <p>
        A plain LLM can only generate text. But modern AI systems can be given <strong className="text-brand-500">tools</strong>,
        also called <strong className="text-brand-500">skills</strong>, that let them take real actions in the world.
      </p>

      <div className="grid sm:grid-cols-2 gap-4 my-6">
        {[
          { icon: "🔍", name: "Web search", desc: "Look up current information beyond the training cutoff" },
          { icon: "💻", name: "Code execution", desc: "Run Python/JS code and see the real output" },
          { icon: "📁", name: "File system", desc: "Read, write, and edit files on your computer" },
          { icon: "🌐", name: "Browser", desc: "Open URLs, click buttons, fill forms" },
          { icon: "🔌", name: "APIs", desc: "Call external services: databases, GitHub, Slack, etc." },
          { icon: "🧠", name: "Memory", desc: "Store and retrieve information across sessions" },
        ].map((t) => (
          <div key={t.name} className="flex gap-3 p-4 rounded-xl border border-brand-100 bg-brand-50">
            <span className="text-xl flex-shrink-0">{t.icon}</span>
            <div>
              <div className="font-bold text-brand-500 text-sm">{t.name}</div>
              <div className="text-slate-500 text-xs mt-0.5">{t.desc}</div>
            </div>
          </div>
        ))}
      </div>

      <p>
        When you use Claude Code, you&apos;re using an LLM with tools. Claude can read your files,
        run terminal commands, edit code, and remember context, all because it has been given
        those capabilities as tools.
      </p>

      <div className="mt-4 p-4 rounded-xl bg-blue-50 border border-blue-200 text-sm text-blue-800 flex gap-3">
        <span className="flex-shrink-0">💡</span>
        <p>
          <strong>Important:</strong> Claude decides when to use tools automatically. You don&apos;t call them directly.
          You just give Claude a goal (<em>&ldquo;fix the bug in pricing.ts&rdquo;</em>) and it figures out which tools to use and when.
          Slash commands (below) are different: those are workflows <em>you</em> invoke explicitly.
        </p>
      </div>

      <AskYourAI
        label="AI tools & skills"
        context="Deep-dive prompt"
        prompt={`How do "tools" or "function calling" work in LLMs? What happens technically when an AI uses a tool like web search or a file system? How does the model decide when to use a tool? Explain the tool-use loop with a concrete example.`}
      />

      {/* --- SECTION: MCP --- */}
      <h2>MCP: Model Context Protocol</h2>

      <p>
        Tools give AI agents abilities. <strong className="text-brand-500">MCP (Model Context Protocol)</strong> is
        the standard that lets those tools be shared, discovered, and connected across different AI systems.
        Think of it as a universal plug: instead of every AI tool being custom-wired to one specific AI,
        MCP lets any compatible AI agent connect to any compatible tool server.
      </p>

      <div className="grid sm:grid-cols-2 gap-4 my-6">
        {[
          { icon: "🗄️", name: "Databases", desc: "Connect to Postgres, SQLite, or your company's database. Claude can query it directly." },
          { icon: "📅", name: "Calendars & email", desc: "Read your calendar, draft emails, check availability, all from your AI chat." },
          { icon: "🐙", name: "GitHub", desc: "Create PRs, review issues, search code. Claude can interact with your repos." },
          { icon: "🔧", name: "Custom tools", desc: "Build your own MCP server to give Claude access to anything your business uses" },
        ].map((t) => (
          <div key={t.name} className="flex gap-3 p-4 rounded-xl border border-brand-100 bg-brand-50">
            <span className="text-xl flex-shrink-0">{t.icon}</span>
            <div>
              <div className="font-bold text-brand-500 text-sm">{t.name}</div>
              <div className="text-slate-500 text-xs mt-0.5">{t.desc}</div>
            </div>
          </div>
        ))}
      </div>

      <p>
        To enable MCP servers in Claude Code, add them to your{" "}
        <code className="text-brand-500 bg-brand-50 border border-brand-100 px-1 rounded text-sm">settings.json</code> file
        (found at <code className="text-brand-500 bg-brand-50 border border-brand-100 px-1 rounded text-sm">~/.claude/settings.json</code>).
        The Claude Code docs maintain a growing list of community MCP servers you can add in minutes.
      </p>

      <AskYourAI
        label="MCP explained"
        context="Deep-dive prompt"
        prompt={`Explain the Model Context Protocol (MCP) to me in plain English. What problem does it solve? How is it different from regular AI tools/function calling? What MCP servers are available out of the box with Claude Code? How do I add an MCP server to Claude Code? Give me a step-by-step example of connecting Claude to a database using MCP.`}
      />

      {/* --- SECTION: Native slash commands + skill builder --- */}
      <h2>Claude Code Slash Commands & the Skill Builder</h2>

      <p>
        Beyond tools Claude uses automatically, Claude Code ships with built-in{" "}
        <strong className="text-brand-500">slash commands</strong>, pre-built workflows you trigger
        yourself by typing <code className="text-brand-500 bg-brand-50 border border-brand-100 px-1 rounded text-sm">/</code> in
        the terminal. Think of them as keyboard shortcuts for common dev tasks.
      </p>

      <div className="my-6 overflow-hidden rounded-xl border border-brand-100">
        <div className="px-4 py-2.5 bg-brand-50 border-b border-brand-100">
          <span className="text-xs font-bold text-brand-500 uppercase tracking-wide">Native slash commands (built in)</span>
        </div>
        <div className="divide-y divide-brand-50">
          {[
            { cmd: "/commit", desc: "Writes a git commit message and commits your staged changes" },
            { cmd: "/review-pr", desc: "Reviews an open pull request with AI feedback" },
            { cmd: "/simplify", desc: "Reviews recently changed code for quality and suggests improvements" },
            { cmd: "/schedule", desc: "Creates a scheduled remote agent that runs on a cron schedule" },
            { cmd: "/loop", desc: "Runs a prompt or command on a recurring interval" },
            { cmd: "/claude-api", desc: "Scaffolds apps that use the Claude API / Anthropic SDK" },
          ].map((k) => (
            <div key={k.cmd} className="flex items-start gap-4 px-4 py-3">
              <code className="text-brand-500 text-sm font-mono flex-shrink-0 pt-0.5 w-32">{k.cmd}</code>
              <span className="text-slate-600 text-sm">{k.desc}</span>
            </div>
          ))}
        </div>
      </div>

      <h3>The Skill Builder: Create Your Own Slash Commands</h3>
      <p>
        Claude Code lets you create <strong className="text-brand-500">custom skills</strong>, your own slash commands
        that encode repeatable workflows. A skill is just a Markdown file you save to{" "}
        <code className="text-brand-500 bg-brand-50 border border-brand-100 px-1 rounded text-sm">~/.claude/skills/</code>.
        Once saved, it shows up in the <code className="text-brand-500 bg-brand-50 border border-brand-100 px-1 rounded text-sm">/</code> menu
        just like a native command.
      </p>
      <p>
        This is a huge win for beginners: instead of re-explaining your preferences every session,
        you bake them into a skill once and reuse them forever.
      </p>

      <CodeBlock
        language="markdown"
        filename="~/.claude/skills/explain-this.md"
        code={`---
name: explain-this
description: Explain the current file to me in plain English
---

Read the file I'm currently working on and explain it like I've never seen it before.
Walk through:
1. What this file does
2. How it's structured
3. The key functions or components and what they do
4. What I'd need to understand to safely modify it

Use plain English. No jargon without definition.`}
      />

      <p>
        Save that file, then type <code className="text-brand-500 bg-brand-50 border border-brand-100 px-1 rounded text-sm">/explain-this</code> in
        any Claude Code session and it just works.
      </p>

      <AskYourAI
        label="Build your own skill"
        context="Practical prompt"
        prompt={`Show me how to create a custom Claude Code skill (slash command). What does the skill file look like? Where do I save it? Walk me through creating 3 useful beginner skills: one for explaining code, one for writing commit messages in a specific style, and one for reviewing a file for security issues. Show me the full file contents for each.`}
      />

      {/* --- SECTION: Agents --- */}
      <h2>Agents</h2>

      <p>
        An <strong className="text-brand-500">AI agent</strong> is an LLM that can act autonomously in a loop:
        observe → think → act → observe → think → act, until it completes a goal.
      </p>

      <ConceptCard icon="🔄" title="The agent loop" accent="brand">
        <ol className="list-decimal list-inside space-y-2">
          <li><strong className="text-brand-600">Observe:</strong> Read the current state (files, terminal output, messages)</li>
          <li><strong className="text-brand-600">Think:</strong> Reason about what to do next using the LLM</li>
          <li><strong className="text-brand-600">Act:</strong> Use a tool (write a file, run a command, search the web)</li>
          <li><strong className="text-brand-600">Repeat:</strong> Feed the result back and keep going until done</li>
        </ol>
      </ConceptCard>

      <p>
        Claude Code is an agent. When you tell it &ldquo;build me a login page,&rdquo; it reads
        your codebase, plans the component, writes files, runs the linter, fixes errors, and
        reports back. That&apos;s the agent loop running.
      </p>

      <h3>Multi-Agent Systems</h3>
      <p>
        You can chain agents together: one agent plans, another writes code, a third runs
        tests, a fourth handles deployment. Claude Code&apos;s &ldquo;subagent&rdquo; system works exactly
        this way, spinning up specialized agents for different parts of a task.
      </p>

      <AskYourAI
        label="Understand agents"
        context="Deep-dive prompt"
        prompt={`Explain AI agents to me. What makes something an "agent" vs. just a chatbot? What is the ReAct pattern? What are multi-agent systems? Give me real examples of what agents can accomplish that a single LLM prompt cannot. Also, what are the risks of agents acting autonomously?`}
      />

      {/* --- SECTION: Claude Code specifics --- */}
      <h2>Claude Code: An Agent Built Into Your Terminal</h2>

      <p>
        Claude Code is a CLI tool that turns your terminal into an AI-powered development environment.
        It&apos;s not just autocomplete. It&apos;s a full agent with access to:
      </p>

      <ul>
        <li>Your entire codebase (reads files, follows imports)</li>
        <li>Your terminal (runs commands, sees output)</li>
        <li>Git (reads history, creates commits)</li>
        <li>A persistent memory system (remembers things across sessions)</li>
        <li>Sub-agents it can delegate tasks to</li>
      </ul>

      <p>
        It uses skills (configured in <code className="text-brand-500 bg-brand-50 border border-brand-100 px-1 rounded text-sm">settings.json</code>)
        to control what tools it&apos;s allowed to use automatically vs. what requires your approval.
      </p>

      <AskYourAI
        label="Claude Code deep dive"
        context="Research prompt"
        prompt={`Explain how Claude Code works as an AI agent for software development. What makes it different from GitHub Copilot or ChatGPT? How does it use tools to interact with the file system and terminal? What's the "agent loop" in a coding context? What should I know before using it on a real project?`}
      />

      <h3>Claude Code vs. Cursor vs. GitHub Copilot</h3>
      <p>
        Every beginner asks this. They&apos;re all AI coding tools, but they&apos;re built differently and shine in different situations.
      </p>
      <div className="my-4 overflow-hidden rounded-xl border border-brand-100">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-brand-50 border-b border-brand-100">
              <th className="text-left px-4 py-2.5 text-xs font-bold text-brand-500 uppercase tracking-wide">Tool</th>
              <th className="text-left px-4 py-2.5 text-xs font-bold text-brand-500 uppercase tracking-wide">What it is</th>
              <th className="text-left px-4 py-2.5 text-xs font-bold text-brand-500 uppercase tracking-wide">Best for</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-brand-50">
            {[
              { tool: "Claude Code", what: "Terminal-based AI agent, full codebase access", best: "Multi-file tasks, autonomous refactoring, agentic workflows" },
              { tool: "Cursor", what: "VS Code fork with AI built in", best: "In-editor autocomplete + chat, familiar IDE feel" },
              { tool: "GitHub Copilot", what: "VS Code extension, autocomplete + chat", best: "Line-by-line suggestions while you type" },
            ].map((r) => (
              <tr key={r.tool}>
                <td className="px-4 py-3 font-bold text-brand-500">{r.tool}</td>
                <td className="px-4 py-3 text-slate-600">{r.what}</td>
                <td className="px-4 py-3 text-slate-600">{r.best}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-slate-500 text-sm">
        They&apos;re not mutually exclusive. Many developers use Cursor for in-editor work and Claude Code for bigger agentic tasks.
        For this guide we&apos;re focusing on Claude Code because it teaches the agent model most clearly.
      </p>

      {/* --- SECTION: Prompt templates for devs --- */}
      <h2>Prompt Templates for Developers</h2>
      <p>
        Steal these. Adapt them. Use them every day.
      </p>

      <div className="space-y-4 my-6">
        {[
          {
            title: "Code Review",
            prompt: `Review this code for bugs, security issues, and performance problems. Be specific: point to line numbers and explain why each issue matters. Then suggest improvements.\n\n[paste your code here]`,
          },
          {
            title: "Explain Like I'm New",
            prompt: `Explain this code to me like I've never seen it before. Walk through what it does, why it's structured this way, and what I'd need to know to modify it safely.\n\n[paste your code here]`,
          },
          {
            title: "Debug Mode",
            prompt: `I'm getting this error: [paste error]. Here's the relevant code: [paste code]. Here's what I've already tried: [what you tried]. What's causing this and how do I fix it?`,
          },
          {
            title: "Implementation Plan",
            prompt: `I want to build [feature]. My stack is [stack]. Before writing any code, give me a step-by-step implementation plan. Point out the hard parts and any libraries that would help. Only then write the code.`,
          },
        ].map((t) => (
          <div key={t.title} className="rounded-xl border border-brand-100 bg-white overflow-hidden shadow-sm">
            <div className="px-4 py-2.5 border-b border-brand-100 bg-brand-50">
              <span className="text-sm font-bold text-brand-500">{t.title}</span>
            </div>
            <pre className="px-4 py-4 text-sm text-slate-700 font-mono whitespace-pre-wrap leading-relaxed overflow-x-auto">
              {t.prompt}
            </pre>
          </div>
        ))}
      </div>

      <AskYourAI
        label="Build your prompt library"
        context="Practice prompt"
        prompt={`Help me build a personal prompt engineering library for software development. I want reusable templates for: code review, debugging, explaining code, writing tests, refactoring, and architecture planning. For each, give me a template with [placeholders] and explain what makes it effective.`}
      />

      {/* Next section CTA */}
      <div className="mt-16 pt-8 border-t border-brand-100 flex items-center justify-between">
        <Link
          href="/understanding-ai"
          className="text-slate-400 text-sm hover:text-brand-500 transition-colors"
        >
          ← How AI Works
        </Link>
        <Link
          href="/context-engineering"
          className="flex items-center gap-2 px-5 py-2.5 bg-brand-500 hover:bg-brand-600 rounded-[10000px] text-white font-semibold text-sm transition-colors shadow-sm"
        >
          Context Engineering →
        </Link>
      </div>
    </div>
  );
}
