import Link from "next/link";

const sections = [
  {
    href: "/understanding-ai",
    icon: "🧠",
    number: "01",
    title: "How AI Actually Works",
    description:
      "Tokens, weights, temperature, context windows — the plain-English version. No PhD required.",
    time: "~15 min read",
  },
  {
    href: "/prompt-engineering",
    icon: "✍️",
    number: "02",
    title: "Talking to AI the Right Way",
    description:
      "The difference between a useless AI answer and an amazing one is usually how you asked. Here's how to ask well.",
    time: "~20 min read",
  },
  {
    href: "/context-engineering",
    icon: "🧩",
    number: "03",
    title: "Context Engineering — The Deep Dive",
    description:
      "Prompt engineering is what you say. Context engineering is everything the AI knows when you say it. This is where the real power is.",
    time: "~30 min read",
  },
  {
    href: "/setup",
    icon: "⚙️",
    number: "04",
    title: "Set Up Your Tools",
    description:
      "VSCode, Claude Code, GitHub, and Vercel — step-by-step install guides for Mac, Windows, and Linux. No experience needed.",
    time: "~30 min setup",
  },
  {
    href: "/hello-world",
    icon: "🚀",
    number: "05",
    title: "Build & Launch Something Real",
    description:
      "Follow along and you'll have a real, live webpage on the internet by the end. I literally promise.",
    time: "~45 min project",
  },
];

const tools = [
  { name: "VSCode", role: "Where you write code", color: "text-blue-600" },
  { name: "Claude Code", role: "Your AI coding helper", color: "text-brand-500" },
  { name: "GitHub", role: "Saves your work safely", color: "text-slate-700" },
  { name: "Vercel", role: "Puts it on the internet", color: "text-slate-900" },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-brand-500 text-white">
        <div className="max-w-4xl mx-auto px-6 pt-20 pb-20 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-brand-200 animate-pulse" />
            <span className="text-sm text-brand-100 font-medium">
              No coding experience required. Seriously.
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl font-extrabold leading-[1.1] mb-6 tracking-tight">
            Anyone can build with{" "}
            <span className="text-brand-200">
              AI tools.
            </span>
          </h1>

          <p className="text-xl text-brand-100 leading-relaxed max-w-2xl mx-auto mb-4">
            This guide will take you from <em className="font-semibold not-italic text-white">"I have no idea what I'm doing"</em> to having a real, live webpage on the internet — using the same tools professional developers use every day.
          </p>
          <p className="text-brand-200 leading-relaxed max-w-xl mx-auto mb-10">
            Stuck on anything? Every section has ready-made prompts you can paste straight into Claude, ChatGPT, or Gemini and get a full explanation instantly.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/understanding-ai"
              className="px-6 py-3 bg-white text-brand-500 font-bold rounded-[10000px] hover:bg-brand-50 transition-colors shadow-sm"
            >
              Start from the beginning
            </Link>
            <Link
              href="/hello-world"
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-[10000px] border border-white/20 transition-colors"
            >
              Skip to building something
            </Link>
          </div>
        </div>
      </section>

      {/* Tool stack strip */}
      <section className="border-y border-brand-100 bg-brand-50 py-6">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-center text-xs font-bold text-brand-300 uppercase tracking-widest mb-4">The 4 tools you&apos;ll use</p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {tools.map((t) => (
              <div key={t.name} className="flex flex-col items-center gap-1">
                <span className={`text-base font-bold ${t.color}`}>
                  {t.name}
                </span>
                <span className="text-xs text-slate-400">{t.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-xs font-bold text-brand-400 uppercase tracking-widest mb-8">
          What&apos;s Inside
        </h2>
        <div className="grid gap-4">
          {sections.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group flex gap-5 p-5 rounded-xl border border-brand-100 bg-white hover:bg-brand-50 hover:border-brand-300 transition-all shadow-sm"
            >
              <div className="flex-shrink-0 text-sm font-mono text-brand-200 group-hover:text-brand-400 transition-colors pt-0.5 w-6">
                {s.number}
              </div>
              <div className="flex-shrink-0 text-2xl">{s.icon}</div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-bold text-brand-500 group-hover:text-brand-600 transition-colors">
                    {s.title}
                  </h3>
                  <span className="flex-shrink-0 text-xs text-slate-400 mt-0.5">
                    {s.time}
                  </span>
                </div>
                <p className="text-slate-500 text-sm mt-1 leading-relaxed">
                  {s.description}
                </p>
              </div>
              <div className="flex-shrink-0 text-brand-200 group-hover:text-brand-500 transition-all group-hover:translate-x-1 pt-0.5">
                →
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <div className="rounded-2xl border border-brand-100 bg-brand-50 p-8">
          <h2 className="text-xl font-bold text-brand-500 mb-2">
            How this works 🎮
          </h2>
          <p className="text-slate-500 text-sm mb-6">You don&apos;t need to memorize anything. Just follow along.</p>
          <div className="grid sm:grid-cols-3 gap-6 text-sm text-slate-500">
            <div>
              <div className="text-2xl mb-2">📖</div>
              <p className="font-semibold text-brand-500 mb-1">Read the plain-English explainer</p>
              <p>
                Every concept is explained like you&apos;ve never heard of it before. No jargon, no assumptions about what you already know.
              </p>
            </div>
            <div>
              <div className="text-2xl mb-2">🤖</div>
              <p className="font-semibold text-brand-500 mb-1">Use the built-in AI prompts</p>
              <p>
                Want to go deeper on anything? Every section has a ready-made prompt — just copy it and paste into any AI chatbot for an instant deep dive.
              </p>
            </div>
            <div>
              <div className="text-2xl mb-2">🛠️</div>
              <p className="font-semibold text-brand-500 mb-1">Build something real</p>
              <p>
                The last section walks you through launching an actual webpage. By the end you&apos;ll have a live URL you can share with anyone.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
