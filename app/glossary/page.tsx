import PageHeader from "@/components/PageHeader";
import Link from "next/link";

export const metadata = {
  title: "Glossary — Quick2Bid AI Guide",
  description: "Plain-English definitions of every technical term used in the Quick2Bid AI Guide.",
  openGraph: {
    title: "Glossary — Quick2Bid AI Guide",
    description: "Plain-English definitions of every technical term used in the Quick2Bid AI Guide.",
    type: "website",
  },
};

const terms: { term: string; definition: string; section?: string }[] = [
  // AI fundamentals
  { term: "LLM (Large Language Model)", definition: "The AI system behind tools like Claude, ChatGPT, and Gemini. It's trained on huge amounts of text and learns to predict the most likely next word — which turns out to be enough to hold conversations, write code, reason, and much more.", section: "How AI Works" },
  { term: "Token", definition: "The unit an LLM works in. Not quite a word — it's more like a word chunk. 'unbelievable' is one token; 'I am happy' is three. Models have a maximum number of tokens they can process at once (the context window), and they charge based on how many tokens you use.", section: "How AI Works" },
  { term: "Context window", definition: "The total amount of text (measured in tokens) that an AI can 'see' at once. Everything in the context window is what the model knows during that response. Claude Sonnet 4.6 has a 200,000-token context window — roughly 150,000 words.", section: "How AI Works" },
  { term: "Temperature", definition: "A setting that controls how creative or random an AI's output is. Low temperature (0.0–0.3) = more predictable, factual, consistent. High temperature (0.8–1.0) = more creative, varied, surprising. Most coding tasks use low temperature.", section: "How AI Works" },
  { term: "Hallucination", definition: "When an AI confidently states something that's false. It's not lying — it's pattern-matching gone wrong. The model generates plausible-sounding text even when it doesn't 'know' the right answer. Always verify AI output on factual claims.", section: "How AI Works" },
  { term: "Inference", definition: "The act of running a trained AI model to generate a response. When you send a message to Claude, the servers are doing inference — using the trained model weights to compute what comes next.", section: "How AI Works" },
  { term: "Training / Fine-tuning", definition: "Training is how an LLM is built — feeding it enormous amounts of text so it learns patterns. Fine-tuning is additional training on a smaller, specific dataset to specialize the model for a particular task or style.", section: "How AI Works" },
  { term: "Parameters / Weights", definition: "The numerical values inside an LLM that encode its 'knowledge'. A model with 70 billion parameters has 70 billion numbers that were tuned during training. More parameters generally means more capability — but also more compute to run.", section: "How AI Works" },

  // Prompt engineering
  { term: "Prompt", definition: "The input you give an AI — your question, instruction, or request. Prompt engineering is the practice of writing prompts that consistently get better outputs.", section: "Prompt Engineering" },
  { term: "System prompt", definition: "A special instruction that's set before a conversation starts and shapes the model's entire behavior — its role, personality, constraints, and output format. Think of it as the model's job description.", section: "Prompt Engineering" },
  { term: "Chain-of-thought (CoT)", definition: "A prompting technique where you ask the model to 'think step by step' before answering. This dramatically improves accuracy on reasoning tasks because the model catches mistakes during generation rather than after.", section: "Prompt Engineering" },
  { term: "Few-shot prompting", definition: "Giving the model 2–5 examples of what you want before asking it to do the task. The model infers the pattern from the examples. 'Few-shot' means a few examples; 'zero-shot' means none.", section: "Prompt Engineering" },
  { term: "Tool / Function calling", definition: "A capability that lets LLMs take real actions — searching the web, running code, reading files, calling APIs. The model decides when to use a tool, calls it, gets the result back in context, and continues.", section: "Prompt Engineering" },
  { term: "Agent", definition: "An LLM that runs autonomously in a loop: observe → think → act → repeat. Claude Code is an agent — it reads your codebase, decides what to do, takes action (edits files, runs commands), and continues until the task is done.", section: "Prompt Engineering" },
  { term: "MCP (Model Context Protocol)", definition: "A standard protocol that lets AI agents connect to external tools and data sources. Like a universal plug — any MCP-compatible AI can connect to any MCP-compatible server (databases, calendars, GitHub, etc.).", section: "Prompt Engineering" },
  { term: "Slash command / Skill", definition: "A pre-built workflow in Claude Code that you invoke by typing / in the terminal. Examples: /commit (writes a git commit), /review-pr (reviews a pull request). You can also create your own custom slash commands.", section: "Prompt Engineering" },
  { term: "Multi-agent system", definition: "A setup where multiple AI agents work together — one planning, one writing code, one reviewing, one deploying. Each has its own context and specialty. Claude Code's subagent system works this way.", section: "Prompt Engineering" },

  // Context engineering
  { term: "Context engineering", definition: "The practice of deliberately designing what information goes into an AI's context window — not just the prompt, but the system prompt, conversation history, retrieved documents, tool results, and memory files. Where the real leverage in AI systems is.", section: "Context Engineering" },
  { term: "RAG (Retrieval Augmented Generation)", definition: "A technique for giving an AI access to a large knowledge base without fitting it all in the context window. You store documents as vector embeddings, and at query time you retrieve only the most relevant chunks and inject them into context.", section: "Context Engineering" },
  { term: "Vector embedding", definition: "A numerical representation of a piece of text that captures its meaning. Similar texts produce similar vectors. This is what makes semantic search possible — you can find documents that mean the same thing as a query even if they don't share the same words.", section: "Context Engineering" },
  { term: "Vector database", definition: "A database optimized for storing and searching vector embeddings. When building RAG systems, your documents live here. Examples: Pinecone, Weaviate, pgvector (PostgreSQL extension).", section: "Context Engineering" },
  { term: "Lost in the middle", definition: "A phenomenon where LLMs pay less attention to content in the middle of a long context window compared to the beginning and end. Practical implication: put your most important instructions at the top (system prompt) or bottom (just before your question).", section: "Context Engineering" },
  { term: "CLAUDE.md", definition: "A file you create in your project root that Claude Code reads at the start of every session. It's persistent, version-controlled context — your project's architecture, coding standards, current goals, and any standing instructions for the AI.", section: "Context Engineering" },
  { term: "Prompt injection", definition: "A security attack where malicious content in the context (e.g., user input) contains hidden instructions that try to override your system prompt. Important to guard against in any AI system that processes untrusted user content.", section: "Context Engineering" },

  // Dev tools
  { term: "Node.js", definition: "A runtime that lets you run JavaScript outside the browser — on a server or your local machine. You need it to run npm, install packages, and run Next.js projects locally.", section: "Setup" },
  { term: "npm", definition: "Node Package Manager — the tool for installing JavaScript libraries and tools. When you run npm install, npm downloads packages from a registry into your project's node_modules folder.", section: "Setup" },
  { term: "nvm (Node Version Manager)", definition: "A tool for installing and switching between different versions of Node.js. Strongly recommended over installing Node directly — it puts everything in your home directory so you never need sudo.", section: "Setup" },
  { term: "Git", definition: "Version control software. It tracks every change to your code, lets you go back in time, and enables collaboration. It's local — it runs on your machine and stores history in a hidden .git folder in your project.", section: "Setup" },
  { term: "GitHub", definition: "A cloud hosting service for Git repositories. You push your local Git history to GitHub so it's backed up, shareable, and usable for automated deployments. Git ≠ GitHub — Git is the tool, GitHub is one place to host your Git repos.", section: "Setup" },
  { term: "Repository (repo)", definition: "A project folder that's tracked by Git. Everything inside it — code, config, history — is the repository.", section: "Setup" },
  { term: "Commit", definition: "A saved snapshot of your code at a specific point in time. Each commit has a message describing what changed. Commits are the atoms of Git history.", section: "Setup" },
  { term: "Branch", definition: "A parallel version of your codebase. You create a branch to work on a feature without touching the main codebase. When it's ready, you merge it back. This is how you avoid breaking your live site while building new things.", section: "Setup" },
  { term: "VSCode (Visual Studio Code)", definition: "A free, open-source code editor built by Microsoft. The most popular editor for web development. It has extensions for almost everything and integrates well with Git, terminal, and Claude Code.", section: "Setup" },
  { term: "SSH key", definition: "A pair of cryptographic keys (public + private) used to authenticate with GitHub without a password. You share the public key with GitHub; the private key stays on your machine. Much more secure than passwords.", section: "Setup" },

  // Web / Next.js
  { term: "Next.js", definition: "A React framework built by Vercel that adds server-side rendering, file-based routing, and deployment optimization on top of React. It's the standard starting point for modern web apps deployed on Vercel.", section: "Hello World" },
  { term: "React", definition: "A JavaScript library for building user interfaces with reusable components. Next.js is built on React — every Next.js page is a React component.", section: "Hello World" },
  { term: "Component", definition: "A reusable piece of UI in React/Next.js. A button, a nav bar, a card — each is a component. Components are functions that return HTML-like code (JSX) and can accept props (inputs).", section: "Hello World" },
  { term: "JSX", definition: "The HTML-like syntax you write inside JavaScript/TypeScript React components. It looks like HTML but is actually JavaScript. Your browser never sees JSX directly — it gets compiled to regular JS first.", section: "Hello World" },
  { term: "TypeScript", definition: "JavaScript with type annotations. Instead of just writing x = 5, you write x: number = 5. TypeScript catches type errors before your code runs. Claude Code writes valid TypeScript — you don't need to master it to use this guide.", section: "Hello World" },
  { term: "Tailwind CSS", definition: "A CSS framework where you style things by adding class names directly to your HTML/JSX — like className='text-blue-600 font-bold p-4'. No separate CSS files needed. Claude Code is excellent at writing Tailwind.", section: "Hello World" },
  { term: "Vercel", definition: "A cloud hosting platform built for Next.js and modern web apps. Connect your GitHub repo and Vercel automatically deploys every push to main. Free tier (Hobby plan) is very generous for personal projects.", section: "Hello World" },
  { term: "Deployment", definition: "The process of making your code live on the internet. When you push to GitHub and Vercel rebuilds your site, that's a deployment.", section: "Hello World" },
  { term: "CDN (Content Delivery Network)", definition: "A network of servers distributed around the world that serve your site's files from the location closest to each visitor. Vercel uses a CDN — that's why a site hosted in the US loads fast in Europe too.", section: "Hello World" },
  { term: "Environment variable", definition: "A value (like an API key) stored outside your code, so it's not accidentally committed to GitHub. In Next.js you put them in a .env.local file. In Vercel you add them in the project dashboard under Settings → Environment Variables.", section: "Hello World" },
  { term: "Hot Module Replacement (HMR)", definition: "When you save a file during npm run dev, your browser updates instantly without a full page refresh. That's HMR — the dev server pushes just the changed module to the browser.", section: "Hello World" },
];

const sections = [...new Set(terms.map((t) => t.section).filter(Boolean))];

export default function Glossary() {
  return (
    <div className="section-container prose-custom">
      <PageHeader
        eyebrow="Reference"
        title="Glossary"
        subtitle="Plain-English definitions for every term used across this guide. Bookmark this page — it's here whenever you need it."
      />

      <div className="mt-8 p-4 rounded-xl bg-brand-50 border border-brand-100 text-sm text-brand-700">
        <strong>{terms.length} terms</strong> across {sections.length} topic areas. Terms are grouped by the section where they first appear.
      </div>

      {sections.map((section) => (
        <div key={section} className="mt-12">
          <h2 className="text-xs font-bold text-brand-400 uppercase tracking-widest mb-4 !mt-0">{section}</h2>
          <div className="space-y-3">
            {terms
              .filter((t) => t.section === section)
              .map((t) => (
                <div key={t.term} className="rounded-xl border border-brand-100 bg-white p-4 shadow-sm">
                  <dt className="font-bold text-brand-500 text-base mb-1">{t.term}</dt>
                  <dd className="text-slate-600 text-sm leading-relaxed m-0">{t.definition}</dd>
                </div>
              ))}
          </div>
        </div>
      ))}

      <div className="mt-16 pt-8 border-t border-brand-100">
        <Link href="/" className="text-slate-400 text-sm hover:text-brand-500 transition-colors">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
