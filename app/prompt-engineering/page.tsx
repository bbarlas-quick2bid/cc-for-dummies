import PageHeader from "@/components/PageHeader";
import ConceptCard from "@/components/ConceptCard";
import AskYourAI from "@/components/AskYourAI";
import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";

export const metadata = {
  title: "Prompt Engineering — The Stack for Dummies",
  description: "Learn how to talk to AI effectively. Prompting basics, chain-of-thought, skills, and agents.",
};

export default function PromptEngineering() {
  return (
    <div className="section-container prose-custom">
      <PageHeader
        eyebrow="Section 02"
        title="Prompt Engineering, Skills & Agents"
        subtitle="Talking to AI is a skill. Here's how to get dramatically better results — and how AI systems go from chatbots to autonomous agents."
      />

      <div className="mt-10 space-y-4 text-gray-300 leading-relaxed">
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
        prompt={`What is prompt engineering and why does it matter? Give me a beginner-friendly overview of the most important techniques — things like being specific, giving context, using roles, and chain-of-thought. Use before/after examples to show the difference.`}
      />

      {/* --- SECTION: The basics --- */}
      <h2>The Basics: What Makes a Good Prompt?</h2>

      <div className="grid sm:grid-cols-2 gap-4 my-6">
        {[
          {
            icon: "🎯",
            title: "Be specific",
            desc: "Vague in = vague out. Tell the model exactly what you want, in what format, at what length.",
            accent: "violet" as const,
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
            desc: "\"Give me a numbered list\", \"Respond in JSON\", \"Format as a table\" — models follow formatting instructions well.",
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
        <div className="rounded-xl border border-red-500/20 bg-red-950/10 p-4">
          <div className="text-xs font-semibold text-red-400 uppercase tracking-wide mb-2">❌ Weak prompt</div>
          <p className="text-gray-300 text-sm font-mono">
            &ldquo;Make a button in React&rdquo;
          </p>
        </div>
        <div className="rounded-xl border border-green-500/20 bg-green-950/10 p-4">
          <div className="text-xs font-semibold text-green-400 uppercase tracking-wide mb-2">✅ Strong prompt</div>
          <p className="text-gray-300 text-sm font-mono">
            &ldquo;Create a React button component using TypeScript and Tailwind CSS. It should accept a variant prop of &lsquo;primary&rsquo; or &lsquo;secondary&rsquo;, a disabled state, and an onClick handler. Use functional components and export it as default.&rdquo;
          </p>
        </div>
      </div>

      <AskYourAI
        label="Practice prompting"
        context="Practice prompt"
        prompt={`I want to practice prompt engineering. Give me 5 examples of vague prompts and their improved versions. Then give me 3 "exercises" — tasks where I write a weak prompt first, then you'll show me how to improve it. Start with software-related topics.`}
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
        Most LLM APIs accept a &ldquo;system prompt&rdquo; — a special instruction that sets the
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
        A plain LLM can only generate text. But modern AI systems can be given <strong className="text-white">tools</strong> —
        also called <strong className="text-white">skills</strong> — that let them take real actions in the world.
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
          <div key={t.name} className="flex gap-3 p-4 rounded-xl border border-white/10 bg-white/5">
            <span className="text-xl flex-shrink-0">{t.icon}</span>
            <div>
              <div className="font-semibold text-white text-sm">{t.name}</div>
              <div className="text-gray-400 text-xs mt-0.5">{t.desc}</div>
            </div>
          </div>
        ))}
      </div>

      <p>
        When you use Claude Code, you&apos;re using an LLM with tools. Claude can read your files,
        run terminal commands, edit code, and remember context — all because it has been given
        those capabilities as tools.
      </p>

      <AskYourAI
        label="AI tools & skills"
        context="Deep-dive prompt"
        prompt={`How do "tools" or "function calling" work in LLMs? What happens technically when an AI uses a tool like web search or a file system? How does the model decide when to use a tool? Explain the tool-use loop with a concrete example.`}
      />

      {/* --- SECTION: Agents --- */}
      <h2>Agents</h2>

      <p>
        An <strong className="text-white">AI agent</strong> is an LLM that can act autonomously in a loop:
        observe → think → act → observe → think → act — until it completes a goal.
      </p>

      <ConceptCard icon="🔄" title="The agent loop" accent="violet">
        <ol className="list-decimal list-inside space-y-2">
          <li><strong className="text-violet-200">Observe:</strong> Read the current state (files, terminal output, messages)</li>
          <li><strong className="text-violet-200">Think:</strong> Reason about what to do next using the LLM</li>
          <li><strong className="text-violet-200">Act:</strong> Use a tool (write a file, run a command, search the web)</li>
          <li><strong className="text-violet-200">Repeat:</strong> Feed the result back and keep going until done</li>
        </ol>
      </ConceptCard>

      <p>
        Claude Code is an agent. When you tell it &ldquo;build me a login page&rdquo; — it reads
        your codebase, plans the component, writes files, runs the linter, fixes errors, and
        reports back. That&apos;s the agent loop running.
      </p>

      <h3>Multi-Agent Systems</h3>
      <p>
        You can chain agents together — one agent plans, another writes code, a third runs
        tests, a fourth handles deployment. Claude Code&apos;s &ldquo;subagent&rdquo; system works exactly
        this way, spinning up specialized agents for different parts of a task.
      </p>

      <AskYourAI
        label="Understand agents"
        context="Deep-dive prompt"
        prompt={`Explain AI agents to me. What makes something an "agent" vs. just a chatbot? What is the ReAct pattern? What are multi-agent systems? Give me real examples of what agents can accomplish that a single LLM prompt cannot. Also — what are the risks of agents acting autonomously?`}
      />

      {/* --- SECTION: Claude Code specifics --- */}
      <h2>Claude Code: An Agent Built Into Your Terminal</h2>

      <p>
        Claude Code is a CLI tool that turns your terminal into an AI-powered development environment.
        It&apos;s not just autocomplete — it&apos;s a full agent with access to:
      </p>

      <ul>
        <li>Your entire codebase (reads files, follows imports)</li>
        <li>Your terminal (runs commands, sees output)</li>
        <li>Git (reads history, creates commits)</li>
        <li>A persistent memory system (remembers things across sessions)</li>
        <li>Sub-agents it can delegate tasks to</li>
      </ul>

      <p>
        It uses skills (configured in <code className="text-violet-300 bg-white/10 px-1 rounded text-sm">settings.json</code>)
        to control what tools it&apos;s allowed to use automatically vs. what requires your approval.
      </p>

      <AskYourAI
        label="Claude Code deep dive"
        context="Research prompt"
        prompt={`Explain how Claude Code works as an AI agent for software development. What makes it different from GitHub Copilot or ChatGPT? How does it use tools to interact with the file system and terminal? What's the "agent loop" in a coding context? What should I know before using it on a real project?`}
      />

      {/* --- SECTION: Prompt templates for devs --- */}
      <h2>Prompt Templates for Developers</h2>
      <p>
        Steal these. Adapt them. Use them every day.
      </p>

      <div className="space-y-4 my-6">
        {[
          {
            title: "Code Review",
            prompt: `Review this code for bugs, security issues, and performance problems. Be specific — point to line numbers and explain why each issue matters. Then suggest improvements.\n\n[paste your code here]`,
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
          <div key={t.title} className="rounded-xl border border-white/10 bg-white/5 overflow-hidden">
            <div className="px-4 py-2.5 border-b border-white/10 bg-white/5">
              <span className="text-sm font-semibold text-gray-200">{t.title}</span>
            </div>
            <pre className="px-4 py-4 text-sm text-gray-300 font-mono whitespace-pre-wrap leading-relaxed overflow-x-auto">
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
      <div className="mt-16 pt-8 border-t border-white/10 flex items-center justify-between">
        <Link
          href="/understanding-ai"
          className="text-gray-500 text-sm hover:text-gray-300 transition-colors"
        >
          ← How AI Works
        </Link>
        <Link
          href="/setup"
          className="flex items-center gap-2 px-5 py-2.5 bg-violet-600/20 hover:bg-violet-600/30 border border-violet-500/30 rounded-xl text-violet-300 font-medium text-sm transition-colors"
        >
          Set Up Your Stack →
        </Link>
      </div>
    </div>
  );
}
