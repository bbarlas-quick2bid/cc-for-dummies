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
    title: "Prompt Engineering, Skills & Agents",
    description:
      "How to talk to an LLM like a pro. Chain-of-thought, roles, tools, agents — all of it.",
    time: "~20 min read",
  },
  {
    href: "/setup",
    icon: "⚙️",
    number: "03",
    title: "Set Up Your Stack",
    description:
      "VSCode, Claude Code, GitHub, and Vercel — installed and configured on Mac, Linux, or Windows.",
    time: "~30 min setup",
  },
  {
    href: "/hello-world",
    icon: "🚀",
    number: "04",
    title: 'Hello World — Launch a Landing Page',
    description:
      "Build a real page, push it to GitHub, and deploy it live on Vercel. Zero-to-deployed.",
    time: "~45 min project",
  },
];

const tools = [
  { name: "VSCode", role: "Code editor", color: "text-blue-400" },
  { name: "Claude Code", role: "AI coding assistant", color: "text-violet-400" },
  { name: "GitHub", role: "Version control + hosting", color: "text-gray-300" },
  { name: "Vercel", role: "Deploy in seconds", color: "text-white" },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-16 text-center">
        <div className="inline-flex items-center gap-2 bg-violet-600/10 border border-violet-500/20 rounded-full px-4 py-2 mb-8">
          <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
          <span className="text-sm text-violet-300 font-medium">
            A playground, not a course
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl font-extrabold text-white leading-[1.1] mb-6">
          The Stack{" "}
          <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
            for Dummies
          </span>
        </h1>

        <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto mb-10">
          Learn how AI works, how to prompt it well, and how to build and ship
          real software — using VSCode, Claude Code, GitHub, and Vercel. AI
          prompts baked in so you can dig deeper on anything, any time.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/understanding-ai"
            className="px-6 py-3 bg-violet-600 hover:bg-violet-500 text-white font-semibold rounded-xl transition-colors"
          >
            Start from the beginning
          </Link>
          <Link
            href="/setup"
            className="px-6 py-3 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-xl border border-white/10 transition-colors"
          >
            Jump to setup
          </Link>
        </div>
      </section>

      {/* Tool stack strip */}
      <section className="border-y border-white/10 bg-white/[0.02] py-6">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-8">
            {tools.map((t) => (
              <div key={t.name} className="flex flex-col items-center gap-1">
                <span className={`text-base font-bold ${t.color}`}>
                  {t.name}
                </span>
                <span className="text-xs text-gray-500">{t.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-8">
          What&apos;s Inside
        </h2>
        <div className="grid gap-4">
          {sections.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group flex gap-5 p-5 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-violet-500/30 transition-all"
            >
              {/* Number */}
              <div className="flex-shrink-0 text-sm font-mono text-gray-600 group-hover:text-violet-500 transition-colors pt-0.5 w-6">
                {s.number}
              </div>

              {/* Icon */}
              <div className="flex-shrink-0 text-2xl">{s.icon}</div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-semibold text-white group-hover:text-violet-300 transition-colors">
                    {s.title}
                  </h3>
                  <span className="flex-shrink-0 text-xs text-gray-500 mt-0.5">
                    {s.time}
                  </span>
                </div>
                <p className="text-gray-400 text-sm mt-1 leading-relaxed">
                  {s.description}
                </p>
              </div>

              {/* Arrow */}
              <div className="flex-shrink-0 text-gray-600 group-hover:text-violet-400 transition-all group-hover:translate-x-1 pt-0.5">
                →
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* How to use this guide */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8">
          <h2 className="text-xl font-bold text-white mb-4">
            How to use this playground 🎮
          </h2>
          <div className="grid sm:grid-cols-3 gap-6 text-sm text-gray-400">
            <div>
              <div className="text-2xl mb-2">📖</div>
              <p className="font-medium text-gray-200 mb-1">Read the explainer</p>
              <p>
                Each section has a plain-English breakdown of the concept — no jargon, no
                assumptions.
              </p>
            </div>
            <div>
              <div className="text-2xl mb-2">🤖</div>
              <p className="font-medium text-gray-200 mb-1">Copy the AI prompt</p>
              <p>
                Every page has pre-written prompts you can drop straight into Claude,
                ChatGPT, or Gemini for a deeper dive.
              </p>
            </div>
            <div>
              <div className="text-2xl mb-2">🛠️</div>
              <p className="font-medium text-gray-200 mb-1">Build something real</p>
              <p>
                Follow the Hello World section to go from zero to a live, deployed web page
                using the actual stack.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
