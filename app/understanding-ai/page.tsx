import PageHeader from "@/components/PageHeader";
import ConceptCard from "@/components/ConceptCard";
import AskYourAI from "@/components/AskYourAI";
import Link from "next/link";

export const metadata = {
  title: "How AI Works — The Stack for Dummies",
  description: "Plain-English explanations of LLMs, tokens, temperature, context windows, and more.",
};

export default function UnderstandingAI() {
  return (
    <div className="section-container prose-custom">
      <PageHeader
        eyebrow="Section 01"
        title="How AI Actually Works"
        subtitle="LLMs, tokens, weights, and all that stuff — explained without a computer science degree."
      />

      {/* Intro */}
      <div className="mt-10 space-y-4 text-gray-300 leading-relaxed">
        <p>
          Before you start building with AI tools, it helps to understand what&apos;s
          actually happening under the hood. Not because you need to be an expert,
          but because a mental model makes you a better prompter — and a better debugger
          when things go sideways.
        </p>
        <p>
          Let&apos;s start at the very beginning and build up from there.
        </p>
      </div>

      <AskYourAI
        label="Set the stage"
        context="Orientation prompt"
        prompt={`I'm just getting started learning about AI and large language models. Can you give me a simple, friendly overview of how a modern LLM like you actually works? Skip the math — focus on intuition and analogies. What is it actually doing when I send you a message?`}
      />

      {/* --- SECTION: What is an LLM --- */}
      <h2>What Is an LLM?</h2>

      <p>
        LLM stands for <strong className="text-white">Large Language Model</strong>. At the
        most basic level, it&apos;s a system trained to predict: <em>&ldquo;given everything I&apos;ve
        seen so far, what word (token) comes next?&rdquo;</em>
      </p>
      <p>
        That sounds almost too simple, right? But it turns out that if you train a model on
        enough text — like, essentially most of the internet — and you make it large enough (hundreds
        of billions of parameters), it develops an uncanny ability to reason, summarize, translate,
        write code, and hold conversations. All from next-token prediction.
      </p>

      <ConceptCard icon="🎲" title="The core idea: next-token prediction" accent="violet">
        <p>
          Imagine autocomplete on your phone, but trained on hundreds of billions of words. The model
          has learned the statistical patterns of human language so deeply that it can generate
          coherent paragraphs, solve math problems, and write working code — all by continuously
          predicting the most plausible next word.
        </p>
      </ConceptCard>

      <AskYourAI
        label="Go deeper on LLMs"
        context="Deep-dive prompt"
        prompt={`Can you explain how a large language model is trained? What is a neural network, what are "parameters" or "weights", and how does a model learn from a massive dataset? Use simple analogies — I don't have a math background.`}
      />

      {/* --- SECTION: Tokens --- */}
      <h2>What Is a Token?</h2>

      <p>
        Models don&apos;t read text the way humans do. They break everything into chunks called{" "}
        <strong className="text-white">tokens</strong>. A token is roughly 3–4 characters, or
        about ¾ of a word on average. The word &ldquo;hamburger&rdquo; might be one or two tokens.
        &ldquo;unhappiness&rdquo; might be three.
      </p>

      <ConceptCard icon="🪙" title="Why tokens matter" accent="blue">
        <p>
          Every AI model has a <strong className="text-blue-200">context window</strong> — the maximum
          number of tokens it can see and &ldquo;remember&rdquo; in a single conversation. Claude&apos;s
          context window is 200,000 tokens (about 150,000 words). GPT-4o&apos;s is around 128,000.
        </p>
        <p className="mt-2">
          Tokens also determine <strong className="text-blue-200">cost</strong>. Most AI APIs charge per
          token — typically a few cents per million tokens. Longer prompts = more tokens = higher cost.
        </p>
      </ConceptCard>

      <div className="my-6 p-5 rounded-xl bg-white/5 border border-white/10">
        <p className="text-sm font-semibold text-gray-300 mb-3">Token approximations:</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-sm">
          {[
            { label: "1 token", val: "~4 characters" },
            { label: "100 tokens", val: "~75 words" },
            { label: "1,000 tokens", val: "~750 words" },
            { label: "1M tokens", val: "~750,000 words" },
          ].map((i) => (
            <div key={i.label} className="bg-white/5 rounded-lg px-3 py-2">
              <div className="font-semibold text-violet-300">{i.label}</div>
              <div className="text-gray-400 text-xs mt-0.5">{i.val}</div>
            </div>
          ))}
        </div>
      </div>

      <AskYourAI
        label="Understand tokens"
        context="Deep-dive prompt"
        prompt={`Can you explain what tokens are in the context of LLMs? How does tokenization work? Why do some words take more tokens than others? And how does the context window limit affect what a model can "remember" during a conversation?`}
      />

      {/* --- SECTION: How the model generates --- */}
      <h2>How Does It Actually Generate a Response?</h2>

      <p>
        When you send a message, here&apos;s (roughly) what happens:
      </p>

      <ol className="list-none space-y-4 my-6">
        {[
          { n: 1, t: "Tokenize", d: "Your message is broken into tokens." },
          { n: 2, t: "Attend", d: "The model looks at all tokens — including the entire conversation history — and weighs how they relate to each other. This is the famous \"attention\" mechanism." },
          { n: 3, t: "Predict", d: "The model computes a probability distribution over every possible next token (all ~100,000 of them)." },
          { n: 4, t: "Sample", d: "It picks one token based on that distribution. Then it repeats, using the new token as input, until it decides it's done." },
        ].map((step) => (
          <li key={step.n} className="flex gap-4">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-violet-600/30 border border-violet-500/30 text-xs font-bold text-violet-300 flex items-center justify-center">
              {step.n}
            </span>
            <div>
              <span className="font-semibold text-white">{step.t} — </span>
              <span className="text-gray-300">{step.d}</span>
            </div>
          </li>
        ))}
      </ol>

      {/* --- SECTION: Temperature --- */}
      <h2>Temperature: How Random Is the Model?</h2>

      <p>
        Remember that probability distribution over the next token? <strong className="text-white">Temperature</strong>{" "}
        controls how &ldquo;peaked&rdquo; or &ldquo;flat&rdquo; that distribution is.
      </p>

      <div className="grid sm:grid-cols-3 gap-4 my-6">
        {[
          {
            temp: "Low (0.1–0.3)",
            emoji: "🎯",
            label: "Precise",
            desc: "Almost always picks the highest-probability token. Deterministic, consistent. Good for code, facts, JSON.",
          },
          {
            temp: "Medium (0.7)",
            emoji: "⚖️",
            label: "Balanced",
            desc: "Some randomness. Reads naturally. Good for writing and conversation. The typical default.",
          },
          {
            temp: "High (1.0+)",
            emoji: "🎨",
            label: "Creative",
            desc: "Lots of randomness. More surprising, but can go off the rails. Good for brainstorming.",
          },
        ].map((t) => (
          <div
            key={t.temp}
            className="rounded-xl border border-white/10 bg-white/5 p-4 text-center"
          >
            <div className="text-2xl mb-2">{t.emoji}</div>
            <div className="text-sm font-semibold text-white mb-1">{t.label}</div>
            <div className="text-xs font-mono text-violet-400 mb-2">{t.temp}</div>
            <div className="text-xs text-gray-400 leading-relaxed">{t.desc}</div>
          </div>
        ))}
      </div>

      <AskYourAI
        label="Temperature & sampling"
        context="Deep-dive prompt"
        prompt={`Explain temperature in LLMs to me like I'm a curious beginner. What does it actually control mathematically? What's the difference between temperature, top-p, and top-k sampling? When would I want to change these settings?`}
      />

      {/* --- SECTION: Models --- */}
      <h2>The Big Models You&apos;ll Encounter</h2>

      <div className="grid sm:grid-cols-2 gap-4 my-6">
        {[
          {
            name: "Claude (Anthropic)",
            models: "Claude 4 Sonnet / Opus",
            strength: "Long context, reasoning, code, safe",
            accent: "violet" as const,
          },
          {
            name: "GPT (OpenAI)",
            models: "GPT-4o / o1 / o3",
            strength: "Broad capability, huge ecosystem, images",
            accent: "green" as const,
          },
          {
            name: "Gemini (Google)",
            models: "Gemini 1.5 Pro / 2.0 Flash",
            strength: "Very long context (1M+), multimodal",
            accent: "blue" as const,
          },
          {
            name: "Open Source",
            models: "Llama 3, Mistral, Qwen",
            strength: "Run locally, no API costs, full control",
            accent: "amber" as const,
          },
        ].map((m) => (
          <ConceptCard key={m.name} icon="🤖" title={m.name} accent={m.accent}>
            <p className="text-xs font-mono text-gray-400">{m.models}</p>
            <p className="mt-1">{m.strength}</p>
          </ConceptCard>
        ))}
      </div>

      <AskYourAI
        label="Compare the models"
        context="Research prompt"
        prompt={`What are the key differences between Claude, GPT-4, and Gemini as of 2024–2025? How do they differ in context window size, reasoning ability, coding ability, and price? Help me understand when I'd choose one over another.`}
      />

      {/* --- SECTION: What it can't do --- */}
      <h2>What LLMs Can&apos;t Do (Yet)</h2>

      <ul>
        <li>
          <strong className="text-white">They don&apos;t &ldquo;know&rdquo; things in real-time.</strong>{" "}
          Training data has a cutoff. Without tools like web search, they&apos;re frozen in time.
        </li>
        <li>
          <strong className="text-white">They can hallucinate.</strong>{" "}
          They&apos;ll generate plausible-sounding but completely wrong answers — confidently. Always verify
          facts from a real source.
        </li>
        <li>
          <strong className="text-white">They don&apos;t have persistent memory</strong> between sessions
          (unless a tool like Claude Code&apos;s memory system is used).
        </li>
        <li>
          <strong className="text-white">They&apos;re not deterministic.</strong> Same prompt twice can give
          different answers.
        </li>
      </ul>

      <AskYourAI
        label="LLM limitations"
        context="Critical thinking prompt"
        prompt={`What are the most important limitations of current LLMs that a developer should know? I want to understand hallucinations, context limits, reasoning gaps, and when NOT to trust an AI's output. Give me practical examples of where AI goes wrong.`}
      />

      {/* Next section CTA */}
      <div className="mt-16 pt-8 border-t border-white/10 flex items-center justify-between">
        <p className="text-gray-500 text-sm">Next up</p>
        <Link
          href="/prompt-engineering"
          className="flex items-center gap-2 px-5 py-2.5 bg-violet-600/20 hover:bg-violet-600/30 border border-violet-500/30 rounded-xl text-violet-300 font-medium text-sm transition-colors"
        >
          Prompt Engineering, Skills & Agents →
        </Link>
      </div>
    </div>
  );
}
