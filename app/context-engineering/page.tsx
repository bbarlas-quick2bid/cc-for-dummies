import PageHeader from "@/components/PageHeader";
import ConceptCard from "@/components/ConceptCard";
import AskYourAI from "@/components/AskYourAI";
import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";

export const metadata = {
  title: "Context Engineering | Quick2Bid AI Guide",
  description: "The deep-dive guide to context engineering: how to give AI exactly the right information to get dramatically better results.",
  openGraph: {
    title: "Context Engineering | Quick2Bid AI Guide",
    description: "The deep-dive guide to context engineering: how to give AI exactly the right information to get dramatically better results.",
    type: "website" as const,
  },
  twitter: { card: "summary_large_image" as const },
};

export default function ContextEngineering() {
  return (
    <div className="section-container prose-custom">
      <PageHeader
        eyebrow="Section 03"
        step={3}
        totalSteps={5}
        title="Context Engineering"
        subtitle="Prompt engineering tells an AI what to do. Context engineering determines everything it knows while doing it. This is where the real leverage is."
      />

      {/* Intro */}
      <div className="mt-10 space-y-4 text-slate-700 leading-relaxed">
        <p>
          If prompt engineering is about <em>how you ask</em>, context engineering is about{" "}
          <em>everything you put in the room before you ask</em>. It&apos;s the practice of
          deliberately constructing, managing, and optimizing the information that flows into
          an LLM&apos;s context window, so that by the time it starts generating, it has
          exactly what it needs and nothing it doesn&apos;t.
        </p>
        <p>
          Most people spend 90% of their time tweaking prompts and 0% thinking about context.
          The professionals who get consistently extraordinary results from AI flip that ratio.
        </p>
      </div>

      <div className="my-8 rounded-2xl bg-brand-500 text-white p-6">
        <p className="text-xs font-bold uppercase tracking-widest text-white mb-3">The key distinction</p>
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <p className="font-bold text-base mb-1 !text-white">Prompt Engineering</p>
            <p className="!text-white text-sm leading-relaxed">
              Crafting the specific instruction or question you give the model.
              <br /><span className="text-brand-300 italic">What you say to the AI.</span>
            </p>
          </div>
          <div className="sm:border-l sm:border-brand-400 sm:pl-6">
            <p className="font-bold text-base mb-1 !text-white">Context Engineering</p>
            <p className="!text-white text-sm leading-relaxed">
              Designing the entire information environment the model operates in: what it knows,
              what it remembers, what it can see.
              <br /><span className="text-brand-300 italic">Everything the AI knows when you say it.</span>
            </p>
          </div>
        </div>
      </div>

      <AskYourAI
        label="What is context engineering?"
        context="Orientation prompt"
        prompt={`Explain context engineering to me as if I'm completely new to AI. How is it different from prompt engineering? Why do experts say it's where the real leverage in AI systems is? Give me a clear mental model and a concrete real-world example showing the difference between a poorly-engineered context and a well-engineered one.`}
      />

      {/* ── SECTION: The Context Window ── */}
      <h2>The Context Window: The AI&apos;s Entire World</h2>

      <p>
        An LLM doesn&apos;t have memory the way you do. Every time it generates a response,
        it can only work with what&apos;s currently in its <strong className="text-brand-500">context window</strong>,
        a fixed-size buffer measured in tokens. Think of it as a whiteboard. The model can see
        everything written on the whiteboard right now, but nothing that was erased.
      </p>

      <ConceptCard icon="🪟" title="The context window is the AI's entire working memory" accent="brand">
        <p>
          Whatever is in the context window is what the model&quot;knows&quot; for that response.
          Your conversation history, any documents you pasted in, the system prompt, tool
          results. All of it competes for space on that whiteboard. When the window fills up,
          something has to go.
        </p>
        <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
          {[
            { model: "Claude Sonnet 4.6", tokens: "200,000 tokens" },
            { model: "GPT-4o", tokens: "128,000 tokens" },
            { model: "Gemini 1.5 Pro", tokens: "1,000,000 tokens" },
            { model: "Llama 3 (local)", tokens: "8,000–128,000 tokens" },
          ].map((m) => (
            <div key={m.model} className="bg-white rounded-lg px-3 py-2 border border-brand-100">
              <div className="font-bold text-brand-500">{m.model}</div>
              <div className="text-slate-400">{m.tokens}</div>
            </div>
          ))}
        </div>
      </ConceptCard>

      <AskYourAI
        label="Context window mechanics"
        context="Deep-dive prompt"
        prompt={`Explain how the context window works in LLMs at a deeper level. What happens when the context fills up? How do models like Claude handle very long contexts? What is "context compression" and "context summarization"? Are there performance differences between something at the beginning vs end of the context?`}
      />

      {/* ── SECTION: Lost in the Middle ── */}
      <h2>The &ldquo;Lost in the Middle&rdquo; Problem</h2>

      <p>
        Here&apos;s something most people don&apos;t know: LLMs don&apos;t pay equal attention
        to everything in the context window. Research has shown they pay significantly more
        attention to content at the <strong className="text-brand-500">beginning</strong> and{" "}
        <strong className="text-brand-500">end</strong> of the context, and less attention to
        content buried in the middle. This is called the <em>lost in the middle</em> phenomenon.
      </p>

      <div className="my-6 rounded-xl border border-brand-100 bg-brand-50 overflow-hidden">
        <div className="px-5 py-4 border-b border-brand-100">
          <p className="text-xs font-bold text-brand-400 uppercase tracking-wide">Attention distribution across the context window</p>
        </div>
        <div className="px-5 py-4">
          <div className="flex items-end gap-1 h-24 mb-2">
            {[90,75,55,40,35,30,28,30,32,35,38,45,55,70,88].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-sm bg-brand-500 opacity-80"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
          <div className="flex justify-between text-xs text-slate-400">
            <span>↑ Start of context (high attention)</span>
            <span>Middle (lower attention)</span>
            <span>End of context ↑</span>
          </div>
        </div>
      </div>

      <ConceptCard icon="⚠️" title="What this means for you" accent="amber">
        <ul className="list-disc list-inside space-y-1">
          <li>Put your most critical instructions at the <strong className="text-amber-800">beginning</strong> (system prompt) or <strong className="text-amber-800">end</strong> (just before asking)</li>
          <li>Don&apos;t bury key facts in the middle of a massive document paste</li>
          <li>If you paste a long document, summarize the key points and repeat them at the end</li>
          <li>For agents doing long tasks, periodically re-state the goal</li>
        </ul>
      </ConceptCard>

      <AskYourAI
        label="Lost in the middle"
        context="Research prompt"
        prompt={`Explain the "lost in the middle" phenomenon in LLMs. What research showed this? How significant is the effect across different models? What are the practical strategies developers use to work around it, things like positional emphasis, re-stating instructions, and structured context ordering?`}
      />

      {/* ── SECTION: The 6 Types of Context ── */}
      <h2>The 6 Types of Context</h2>

      <p>
        Context isn&apos;t just your prompt. A well-engineered AI system typically assembles
        context from several distinct sources before the model ever sees your question.
      </p>

      {/* Type 1 */}
      <h3>1. System Prompt (Instructions)</h3>
      <p>
        The system prompt is the foundational layer of context, set before the conversation
        begins. It defines the model&apos;s role, constraints, personality, output format,
        and any standing rules. In agent systems like Claude Code, this is where tools,
        capabilities, and behavioral guidelines live.
      </p>
      <CodeBlock
        language="text"
        filename="system-prompt-example.txt"
        code={`You are a senior software engineer at Quick2Bid specializing in Salesforce CPQ integrations.

ROLE:
- Answer questions about CPQ configuration, pricing rules, and quote generation
- Always recommend solutions compatible with Salesforce Spring '24 or later
- Flag anything that could break existing quote templates

OUTPUT FORMAT:
- Lead with the direct answer
- Follow with a code example if relevant
- End with any caveats or gotchas

CONSTRAINTS:
- Never recommend third-party packages without noting they require additional licensing
- If unsure, say so — do not hallucinate Salesforce API names`}
      />

      {/* Type 2 */}
      <h3>2. Conversation History (Memory)</h3>
      <p>
        Every message you&apos;ve exchanged in the conversation gets appended to the context.
        This is why AI can &ldquo;remember&rdquo; what you said earlier in a chat: it&apos;s
        literally still in the window. As conversations grow long, older turns get pushed
        toward the middle (lower attention) or eventually truncated entirely.
      </p>
      <ConceptCard icon="💬" title="Conversation history management" accent="blue">
        <p>Expert systems handle this by:</p>
        <ul className="list-disc list-inside space-y-1 mt-1">
          <li><strong className="text-blue-700">Summarizing</strong> old turns and replacing them with a compressed summary</li>
          <li><strong className="text-blue-700">Pruning</strong> irrelevant exchanges that don&apos;t affect the current task</li>
          <li><strong className="text-blue-700">Pinning</strong> critical facts from earlier in the conversation</li>
        </ul>
      </ConceptCard>

      {/* Type 3 */}
      <h3>3. Retrieved Context (RAG)</h3>
      <p>
        <strong className="text-brand-500">RAG (Retrieval Augmented Generation)</strong> is
        the technique of dynamically fetching relevant information from an external knowledge
        base and injecting it into the context at query time. Instead of trying to put your
        entire company wiki into the context (impossible), you retrieve only the 3-5 most
        relevant chunks and inject those.
      </p>

      <div className="my-6 rounded-xl border border-brand-100 bg-white overflow-hidden shadow-sm">
        <div className="px-5 py-3 bg-brand-50 border-b border-brand-100">
          <p className="text-xs font-bold text-brand-500 uppercase tracking-wide">How RAG works</p>
        </div>
        <div className="p-5">
          <ol className="space-y-4">
            {[
              { n: 1, title: "Embed your knowledge base", desc: "Convert all your documents into vector embeddings (numerical representations of meaning) and store them in a vector database (Pinecone, Weaviate, pgvector)." },
              { n: 2, title: "Embed the user's query", desc: "When a user asks a question, convert that question into the same vector space." },
              { n: 3, title: "Semantic search", desc: "Find the document chunks whose embeddings are most similar to the query embedding (cosine similarity)." },
              { n: 4, title: "Inject and generate", desc: "Prepend the retrieved chunks to the context: \"Here is relevant context: [chunks]. Now answer: [question]\"." },
            ].map((s) => (
              <li key={s.n} className="flex gap-4">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-brand-500 text-xs font-bold text-white flex items-center justify-center">
                  {s.n}
                </span>
                <div>
                  <span className="font-bold text-brand-500 text-sm">{s.title}: </span>
                  <span className="text-slate-600 text-sm">{s.desc}</span>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <AskYourAI
        label="Understand RAG"
        context="Deep-dive prompt"
        prompt={`Explain Retrieval Augmented Generation (RAG) from first principles. What problem does it solve that fine-tuning doesn't? What are vector embeddings and how does semantic search work? What is a vector database? Walk me through building a simple RAG system step by step. What are the main failure modes of RAG systems and how do you fix them?`}
      />

      {/* Type 4 */}
      <h3>4. Tool / Function Call Results</h3>
      <p>
        When an AI agent uses a tool (searches the web, runs code, reads a file), the result
        gets appended back into the context. The model then &ldquo;reads&rdquo; that result and
        decides what to do next. This is the core mechanism that makes agents work: the context
        grows with each action-observation pair.
      </p>
      <CodeBlock
        language="text"
        filename="tool-result-in-context.txt"
        code={`[System]: You have access to the following tools: read_file, run_bash, search_web

[User]: What does the pricing function in our codebase return?

[Assistant → Tool call]: read_file("src/pricing/calculate.ts")

[Tool result]:
  export function calculatePrice(qty: number, unitPrice: number): number {
    const subtotal = qty * unitPrice;
    const discount = qty > 100 ? 0.15 : qty > 50 ? 0.08 : 0;
    return subtotal * (1 - discount);
  }

[Assistant]: The pricing function applies tiered discounts — 8% for 51-100 units,
15% for 100+ units — and returns the discounted total.`}
      />

      {/* Type 5 */}
      <h3>5. Structured Data & Documents</h3>
      <p>
        PDFs, spreadsheets, JSON payloads, database query results, API responses: all of
        these can be injected into context directly. The key skill here is{" "}
        <strong className="text-brand-500">pre-processing</strong>: don&apos;t dump 40 pages of
        raw data. Extract, summarize, and structure it so the model can navigate it efficiently.
      </p>
      <ConceptCard icon="📄" title="Context formatting matters enormously" accent="green">
        <p>The same information structured differently produces dramatically different results:</p>
        <div className="mt-2 grid sm:grid-cols-2 gap-2 text-xs">
          <div className="bg-red-50 border border-red-200 rounded-lg p-2">
            <p className="font-bold text-red-600 mb-1">❌ Raw dump</p>
            <p className="text-red-800 font-mono">Q1 revenue 142000 Q2 revenue 168000 Q3 revenue 201000 expenses Q1 98000 Q2 112000...</p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-2">
            <p className="font-bold text-green-600 mb-1">✅ Structured</p>
            <p className="text-green-800 font-mono">{"Revenue: Q1=$142k, Q2=$168k, Q3=$201k\nExpenses: Q1=$98k, Q2=$112k\nMargin trending up 12% QoQ"}</p>
          </div>
        </div>
      </ConceptCard>

      {/* Type 6 */}
      <h3>6. Long-Term Memory</h3>
      <p>
        The context window is wiped between sessions. But what if the AI needs to remember
        things across days, weeks, or projects? That&apos;s where <strong className="text-brand-500">long-term memory systems</strong> come
        in. These store information externally and retrieve it back into context when relevant.
        Claude Code&apos;s memory system (the <code className="text-brand-500 bg-brand-50 px-1 rounded text-sm">MEMORY.md</code> file)
        is exactly this: a persistent knowledge store that gets loaded into context at the start
        of each session.
      </p>

      <div className="my-6 grid sm:grid-cols-3 gap-4">
        {[
          {
            type: "Episodic memory",
            icon: "📅",
            desc: "Specific past events and interactions. \"Last Tuesday you told me the deadline moved to Friday.\"",
            accent: "bg-brand-50 border-brand-200",
            title: "text-brand-500",
          },
          {
            type: "Semantic memory",
            icon: "🧠",
            desc: "General facts and knowledge. \"This user prefers TypeScript over JavaScript.\"",
            accent: "bg-blue-50 border-blue-200",
            title: "text-blue-700",
          },
          {
            type: "Procedural memory",
            icon: "⚙️",
            desc: "How to do things. \"When this user asks for code, always include tests.\"",
            accent: "bg-green-50 border-green-200",
            title: "text-green-700",
          },
        ].map((m) => (
          <div key={m.type} className={`rounded-xl border p-4 ${m.accent}`}>
            <div className="text-xl mb-2">{m.icon}</div>
            <div className={`font-bold text-sm mb-1 ${m.title}`}>{m.type}</div>
            <p className="text-slate-600 text-xs leading-relaxed">{m.desc}</p>
          </div>
        ))}
      </div>

      <AskYourAI
        label="Memory systems in AI"
        context="Deep-dive prompt"
        prompt={`Explain the different types of memory in AI agent systems. What is the difference between in-context memory, external memory, and parametric memory? How do production AI applications implement persistent memory across sessions? What are the tradeoffs between storing information in context vs. in a vector database vs. fine-tuning it into the model?`}
      />

      {/* ── SECTION: Context Engineering Patterns ── */}
      <h2>Context Engineering Patterns That Actually Work</h2>

      <h3>Pattern 1: The Context Sandwich</h3>
      <p>
        Use the attention distribution to your advantage. Put the most important instructions
        at the very beginning (system prompt), put background/reference material in the middle,
        and re-state the key objective right before the question. The model gets a strong signal
        at both ends.
      </p>
      <CodeBlock
        language="text"
        filename="context-sandwich.txt"
        code={`[SYSTEM — Beginning, high attention]
You are a CPQ specialist. Your job is to find pricing errors.
Always cite the specific line item when flagging an issue.

[MIDDLE — Reference material, lower attention]
Here is the quote data:
Line 1: Widget A, qty 50, unit price $200, total $9,500...
[...hundreds of lines of data...]

[END — Re-stated objective, high attention]
Review the quote data above. List every line item where the
calculated total does not match qty × unit price × applicable
discount. Format as a table.`}
      />

      <h3>Pattern 2: Progressive Context Loading</h3>
      <p>
        Don&apos;t dump everything at once. Start with high-level context, let the model respond,
        then load in the detailed context for the next step. This mirrors how a human expert
        would brief a colleague: overview first, details as needed.
      </p>

      <h3>Pattern 3: Context Distillation</h3>
      <p>
        Use the AI itself to compress context before passing it to another AI call. Long conversation?
        Ask the model to summarize the key decisions and facts, then use that summary as the context
        for the next call instead of the full history. This is how production agent systems handle
        very long tasks.
      </p>
      <CodeBlock
        language="text"
        filename="context-distillation.txt"
        code={`// Step 1: Compress the long conversation history
PROMPT: "Summarize this conversation into bullet points covering:
(1) the original goal, (2) decisions made so far,
(3) open questions, (4) constraints discovered.
Be extremely concise — this summary will replace the full history."

// Step 2: Use the summary as context for the next phase
CONTEXT: [summary from step 1]
PROMPT: "Given the above context, continue with the next phase..."`}
      />

      <h3>Pattern 4: Explicit Context Framing</h3>
      <p>
        Label your context clearly so the model knows what kind of information it&apos;s reading
        and how much to trust it. Unlabeled context blurs together; labeled context gets processed
        with appropriate weight.
      </p>
      <CodeBlock
        language="text"
        filename="context-framing.txt"
        code={`[VERIFIED FACTS — treat as ground truth]
- Product SKU: Q2B-ENT-001
- Current price: $4,200/year
- Contract end date: 2026-09-30

[DRAFT DATA — may contain errors, verify before using]
- Proposed renewal price: $4,800/year
- Discount applied: 10%

[USER'S STATED GOAL]
Generate a renewal quote and flag any pricing inconsistencies.`}
      />

      <AskYourAI
        label="Context engineering patterns"
        context="Deep-dive prompt"
        prompt={`What are the most effective context engineering patterns used in production AI systems? I want to learn about: context sandwiching, progressive context loading, context distillation, explicit context framing, and any other advanced patterns. For each one, give me a concrete example of when and why you'd use it.`}
      />

      {/* ── SECTION: Context for Agents ── */}
      <h2>Context Engineering for Agents (Claude Code)</h2>

      <p>
        Agents are where context engineering gets both most powerful and most complex. An agent
        runs a loop (observe, think, act) and the context window grows with every step.
        Managing that growth is the difference between an agent that completes complex tasks
        and one that loses the plot halfway through.
      </p>

      <h3>CLAUDE.md: Persistent Agent Context</h3>
      <p>
        Claude Code reads a file called <code className="text-brand-500 bg-brand-50 px-1 rounded text-sm">CLAUDE.md</code> from
        your project root at the start of every session and loads it directly into context.
        This is the most powerful context engineering lever available in Claude Code:
        persistent, version-controlled briefing document for the agent.
      </p>

      <CodeBlock
        language="markdown"
        filename="CLAUDE.md"
        code={`# Project: Quick2Bid CPQ Integration

## What this codebase does
Salesforce LWC components for PandaDoc e-signature integration within the CPQ quote flow.

## Architecture
- /force-app/main/default/lwc/ — all Lightning Web Components
- pandaDocPanel — the main signing panel, loads inside the quote record page
- Always check existing components before creating new ones

## Coding standards
- TypeScript-style JSDoc on all public methods
- Never use @wire without a fallback for null data
- All API callouts go through QuoteApiService — never call Salesforce directly from LWC

## Current context (update as you go)
- Sprint goal: PandaDoc webhook status sync
- Known issue: pandaDocPanel throws when quote has no line items — ticket #204
- Do NOT touch anything in /legacy — it's being deprecated

## How I like to work
- Show me a plan before writing code on anything > 50 lines
- Prefer editing existing files over creating new ones
- Run the linter after every change`}
      />

      <ConceptCard icon="💡" title="CLAUDE.md is context engineering in practice" accent="brand">
        <p>
          Every line in CLAUDE.md is context you don&apos;t have to re-explain in every session.
          A well-maintained CLAUDE.md means the agent starts each session already knowing your
          architecture, standards, current sprint goals, and known issues, without you having
          to repeat any of it.
        </p>
        <p className="mt-2">
          Think of it as the briefing document you&apos;d give a new contractor before their first day.
        </p>
      </ConceptCard>

      <h3>The Agent Context Stack</h3>
      <p>When Claude Code starts working on a task, its context is assembled in layers:</p>

      <div className="my-6 space-y-2">
        {[
          { layer: "CLAUDE.md", role: "Project briefing: architecture, standards, current goals", position: "Always present, loaded first", color: "bg-brand-500 text-white" },
          { layer: "System prompt", role: "Claude Code's built-in instructions and tool definitions", position: "Built in by Anthropic", color: "bg-brand-100 text-brand-700" },
          { layer: "File contents", role: "Files Claude reads during the task", position: "Added as needed", color: "bg-blue-50 text-blue-700 border border-blue-200" },
          { layer: "Terminal output", role: "Results of commands Claude runs", position: "Appended after each action", color: "bg-blue-50 text-blue-700 border border-blue-200" },
          { layer: "Memory files", role: "Saved facts from previous sessions", position: "Loaded from ~/.claude/memory/", color: "bg-green-50 text-green-700 border border-green-200" },
          { layer: "Your message", role: "The current task or question", position: "Always at the end (highest attention)", color: "bg-amber-50 text-amber-700 border border-amber-200" },
        ].map((l, i) => (
          <div key={i} className={`flex items-start gap-4 rounded-xl px-4 py-3 ${l.color}`}>
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-black/10 flex items-center justify-center text-xs font-bold">
              {i + 1}
            </div>
            <div className="flex-1">
              <span className="font-bold text-sm">{l.layer}</span>
              <span className="text-xs opacity-75 ml-2">{l.role}</span>
            </div>
            <div className="text-xs opacity-60 hidden sm:block">{l.position}</div>
          </div>
        ))}
      </div>

      <AskYourAI
        label="Agent context management"
        context="Advanced prompt"
        prompt={`How do production AI agent systems manage context across long, multi-step tasks? I want to understand: how does Claude Code's CLAUDE.md work as a context mechanism, how do agents handle context window overflow during long tasks, what strategies do companies like Anthropic and OpenAI recommend for agentic context management, and what does a well-engineered CLAUDE.md look like for a complex software project?`}
      />

      {/* ── SECTION: Anti-patterns ── */}
      <h2>Context Engineering Anti-Patterns</h2>
      <p>These are the mistakes that silently kill the quality of your AI outputs.</p>

      <div className="space-y-4 my-6">
        {[
          {
            title: "Context stuffing",
            icon: "🗑️",
            problem: "Dumping everything you can think of into the context on the theory that more information = better answers.",
            fix: "Be surgical. Every token in context costs attention. Include only what's relevant to the current task. More signal, less noise.",
          },
          {
            title: "Stale context",
            icon: "🕰️",
            problem: "Leaving outdated information in the context that contradicts current reality. The model can't tell what's current.",
            fix: "Update or remove stale facts. Explicitly mark temporal context: \"As of March 2026, the price is X\" rather than just \"the price is X\".",
          },
          {
            title: "Contradictory context",
            icon: "⚡",
            problem: "Providing conflicting instructions or facts in different parts of the context. The model will average them or pick one arbitrarily.",
            fix: "Audit your context for contradictions before sending. Later instructions generally override earlier ones, but don't rely on this.",
          },
          {
            title: "Implicit assumptions",
            icon: "🫥",
            problem: "Assuming the model knows things it doesn't: internal acronyms, project-specific terms, unwritten rules.",
            fix: "Define every domain-specific term. If you wouldn't expect a smart contractor on day one to know it, put it in context.",
          },
          {
            title: "No output anchoring",
            icon: "🎯",
            problem: "Providing great context but not specifying the exact format, length, or structure you need. The model guesses.",
            fix: "Always specify output format explicitly: \"Respond as a JSON array\", \"Write exactly 3 bullet points\", \"Keep the answer under 200 words\".",
          },
          {
            title: "Context injection attacks",
            icon: "🔒",
            problem: "In systems that accept user input, malicious users can inject instructions into the context that override your system prompt.",
            fix: "Sanitize user inputs. Clearly separate user-provided content from trusted instructions. Consider using delimiters and instructing the model to treat user content as data, not instructions.",
          },
        ].map((a) => (
          <div key={a.title} className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
            <div className="flex items-center gap-3 px-4 py-3 border-b border-slate-100 bg-slate-50">
              <span className="text-lg">{a.icon}</span>
              <span className="font-bold text-slate-700 text-sm">{a.title}</span>
            </div>
            <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
              <div className="px-4 py-3">
                <p className="text-xs font-bold text-red-500 uppercase tracking-wide mb-1">The problem</p>
                <p className="text-sm text-slate-600 leading-relaxed">{a.problem}</p>
              </div>
              <div className="px-4 py-3">
                <p className="text-xs font-bold text-green-600 uppercase tracking-wide mb-1">The fix</p>
                <p className="text-sm text-slate-600 leading-relaxed">{a.fix}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <AskYourAI
        label="Context anti-patterns"
        context="Deep-dive prompt"
        prompt={`What are the most common context engineering mistakes that degrade AI performance in production systems? I want detailed explanations of: context stuffing, stale context problems, contradictory instructions, prompt injection attacks, and implicit assumptions. For each one, give me a real-world example and the specific fix.`}
      />

      {/* ── SECTION: Advanced: Multi-Agent Context ── */}
      <h2>Advanced: Context in Multi-Agent Systems</h2>

      <p>
        When multiple AI agents work together (one planning, one coding, one reviewing), context
        engineering becomes a system design problem. Each agent has its own context window, and
        you need to deliberately decide what information flows between them and in what form.
      </p>

      <ConceptCard icon="🔄" title="The multi-agent context problem" accent="rose">
        <p>
          Agent A finishes a task and produces 10,000 tokens of output. Agent B needs to use
          that output. Do you pass all 10,000 tokens? A compressed summary? Structured data extracted
          from it? The wrong choice wastes tokens, loses information, or overwhelms Agent B&apos;s
          context.
        </p>
        <p className="mt-2 font-semibold text-rose-700">
          The rule: pass structured summaries between agents, not raw outputs.
        </p>
      </ConceptCard>

      <CodeBlock
        language="text"
        filename="multi-agent-handoff.txt"
        code={`// ❌ Bad: passing raw agent output between agents
Agent B context: [10,000 tokens of Agent A's raw reasoning and output]

// ✅ Good: structured handoff document
Agent B context:
HANDOFF FROM: Planning Agent
TASK COMPLETED: Architecture design for auth module
DECISIONS MADE:
  - Use JWT with 15min expiry + refresh tokens
  - Store refresh tokens in httpOnly cookies
  - Rate limit: 5 attempts per IP per 15min
ARTIFACTS PRODUCED:
  - /docs/auth-spec.md (full spec, read if needed)
FILES TO CREATE:
  - src/auth/jwt.ts
  - src/auth/middleware.ts
  - src/auth/routes.ts
CONSTRAINTS:
  - Must be compatible with existing User model schema
  - No new npm packages without approval
YOUR TASK: Implement the above spec.`}
      />

      <AskYourAI
        label="Multi-agent context design"
        context="Advanced prompt"
        prompt={`How do you design context passing in multi-agent AI systems? I want to understand: how do you structure handoffs between specialized agents, what information should flow between agents vs. be stored in shared memory, how do orchestrator agents manage subagent contexts, and what are real-world patterns companies use when building systems with multiple LLM agents coordinating on complex tasks?`}
      />

      {/* ── SECTION: Practical Checklist ── */}
      <h2>The Context Engineering Checklist</h2>
      <p>Run through this before any important AI interaction or before building an AI-powered feature:</p>

      <div className="my-6 rounded-xl border border-brand-100 bg-brand-50 p-5">
        <div className="space-y-3">
          {[
            { category: "Content", items: ["Is this information actually relevant to the current task?", "Are there any stale or outdated facts in the context?", "Are there any contradictions between different parts of the context?", "Have I defined all domain-specific terms and acronyms?"] },
            { category: "Structure", items: ["Are the most critical instructions at the beginning or end?", "Is the context labeled and organized so the model knows what it's reading?", "Have I pre-processed any raw data into a cleaner format?", "Is my output format explicitly specified?"] },
            { category: "Size", items: ["Is there anything in the context I can safely remove?", "For long tasks, is there a summarization/compression step?", "Am I within a comfortable margin of the context window limit?"] },
            { category: "Security (for user-facing systems)", items: ["Can user input inject instructions that override my system prompt?", "Is user-provided content clearly separated from trusted instructions?"] },
          ].map((section) => (
            <div key={section.category}>
              <p className="text-xs font-bold text-brand-500 uppercase tracking-wide mb-2">{section.category}</p>
              <ul className="space-y-1.5">
                {section.items.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-slate-600">
                    <span className="flex-shrink-0 w-4 h-4 rounded border-2 border-brand-300 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <AskYourAI
        label="Build a context engineering practice"
        context="Synthesis prompt"
        prompt={`I want to build a strong context engineering practice for my AI work. Can you synthesize the most important principles into a framework I can actually use day-to-day? Cover: how to audit existing context for quality, how to design context for different use cases (chatbots vs. agents vs. RAG systems), and what metrics or signals tell me my context engineering is working well vs. needs improvement.`}
      />

      {/* Further reading */}
      <div className="mt-12 rounded-2xl border border-brand-100 bg-brand-50 p-6">
        <h3 className="text-brand-500 font-bold text-base mb-4 mt-0">Go Even Deeper</h3>
        <p className="text-slate-500 text-sm mb-4">
          Paste any of these prompts into Claude, ChatGPT, or Gemini for a full tutorial on each topic:
        </p>
        <div className="space-y-3">
          {[
            "Teach me how to build a production RAG system from scratch using LangChain and Pinecone. Walk me through every step including chunking strategy, embedding model choice, and retrieval tuning.",
            "Explain vector embeddings and semantic search from first principles. How do word embeddings work? How does cosine similarity find relevant documents? What's the difference between sparse and dense retrieval?",
            "Walk me through designing a CLAUDE.md file for a complex software project. What sections should it have? How detailed should it be? How do I keep it updated without it becoming stale?",
            "What is constitutional AI and RLHF? How do these training techniques affect what ends up in a model's 'parametric memory' vs. what needs to be in context?",
          ].map((p, i) => (
            <div key={i} className="rounded-lg border border-brand-200 bg-white p-3">
              <p className="text-xs text-slate-500 font-mono leading-relaxed">{p}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Nav */}
      <div className="mt-16 pt-8 border-t border-brand-100 flex items-center justify-between">
        <Link href="/prompt-engineering" className="text-slate-400 text-sm hover:text-brand-500 transition-colors">
          ← Prompt Engineering
        </Link>
        <Link
          href="/setup"
          className="flex items-center gap-2 px-5 py-2.5 bg-brand-500 hover:bg-brand-600 rounded-[10000px] text-white font-semibold text-sm transition-colors shadow-sm"
        >
          Set Up Your Stack →
        </Link>
      </div>
    </div>
  );
}
