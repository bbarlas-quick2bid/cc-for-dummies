import PageHeader from "@/components/PageHeader";
import StepCard from "@/components/StepCard";
import AskYourAI from "@/components/AskYourAI";
import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";

export const metadata = {
  title: "Hello World — Quick2Bid AI Guide",
  description: "Build and deploy a real landing page from scratch using Next.js, GitHub, and Vercel.",
  openGraph: {
    title: "Hello World — Quick2Bid AI Guide",
    description: "Build and deploy a real landing page from scratch using Next.js, GitHub, and Vercel.",
    type: "website" as const,
  },
  twitter: { card: "summary_large_image" as const },
};

export default function HelloWorld() {
  return (
    <div className="section-container prose-custom">
      <PageHeader
        eyebrow="Section 05"
        step={5}
        totalSteps={5}
        title="Hello World — Build & Deploy a Landing Page"
        subtitle="Go from empty folder to live URL in under an hour. We'll build a real page, push it to GitHub, and deploy it on Vercel."
      />

      {/* What you'll build */}
      <div className="mt-8 rounded-2xl border border-brand-100 bg-brand-50 p-6">
        <h3 className="text-brand-500 font-bold mb-3 m-0">What you&apos;ll build</h3>
        <div className="grid sm:grid-cols-3 gap-4 text-sm">
          <div>
            <div className="text-2xl mb-2">🖼️</div>
            <p className="font-semibold text-brand-500">A real landing page</p>
            <p className="text-slate-500 mt-1">Hero section, features, and a call-to-action button. Built with Next.js + Tailwind CSS.</p>
          </div>
          <div>
            <div className="text-2xl mb-2">📦</div>
            <p className="font-semibold text-brand-500">Pushed to GitHub</p>
            <p className="text-slate-500 mt-1">Your code versioned and stored in the cloud, ready for collaboration.</p>
          </div>
          <div>
            <div className="text-2xl mb-2">🌐</div>
            <p className="font-semibold text-brand-500">Live on the internet</p>
            <p className="text-slate-500 mt-1">A real public URL you can share — deployed automatically via Vercel.</p>
          </div>
        </div>
      </div>

      <AskYourAI
        label="Before you start"
        context="Orientation prompt"
        prompt={`I'm about to build my first web project with Next.js. Can you explain what Next.js is, how it relates to React, and why it's the go-to choice for deploying on Vercel? What are pages, components, and routing? Give me a mental model before I write any code.`}
      />

      <StepCard
        step={1}
        title="Create a new Next.js project"
        note="create-next-app scaffolds the entire project for you — folder structure, config files, everything."
      >
        <p>
          Open your terminal, navigate to where you keep projects, and run:
        </p>
        <CodeBlock
          language="bash"
          code={`npx create-next-app@latest my-landing-page\n\n# When prompted:\n# ✔ Would you like to use TypeScript? › Yes\n# ✔ Would you like to use ESLint? › Yes\n# ✔ Would you like to use Tailwind CSS? › Yes\n# ✔ Would you like to use the src/ directory? › No\n# ✔ Would you like to use App Router? › Yes\n# ✔ Would you like to customize the import alias? › No`}
        />
        <CodeBlock
          language="bash"
          code={`cd my-landing-page\ncode .          # opens VSCode\nnpm run dev     # starts local dev server at http://localhost:3000`}
        />
        <p>
          Open <code className="text-brand-500 bg-brand-50 border border-brand-100 px-1 rounded text-xs">http://localhost:3000</code> in
          your browser. You should see the default Next.js page. That&apos;s your dev server running locally.
        </p>
      </StepCard>

      <div className="my-4 p-4 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-700 flex gap-3">
        <span className="flex-shrink-0 text-slate-400">🔷</span>
        <div>
          <strong className="text-slate-700">What&apos;s TypeScript?</strong> You&apos;ll notice the files end in{" "}
          <code className="bg-white border border-slate-200 px-1 rounded text-xs">.tsx</code> and contain things like{" "}
          <code className="bg-white border border-slate-200 px-1 rounded text-xs">: string</code> or{" "}
          <code className="bg-white border border-slate-200 px-1 rounded text-xs">interface Props</code>.
          That&apos;s TypeScript — JavaScript with type annotations that catch errors before they happen.
          <strong className="text-slate-800"> You don&apos;t need to understand it to follow this guide.</strong>{" "}
          Claude Code writes valid TypeScript for you.
        </div>
      </div>

      <AskYourAI
        label="Understand the project structure"
        context="Exploration prompt"
        prompt={`I just created a Next.js project with create-next-app. Can you walk me through what all the files and folders do? What is app/page.tsx, layout.tsx, globals.css? What is package.json? What is tailwind.config.ts? What actually happens when I run "npm run dev"?`}
      />

      <StepCard
        step={2}
        title="Use Claude Code to build your landing page"
        note="This is the moment where AI does the heavy lifting. Watch what it does — read the files it writes. You'll learn faster by reading AI-generated code than by writing boilerplate from scratch."
      >
        <p>
          In a new terminal tab (keep <code className="text-brand-500 bg-brand-50 border border-brand-100 px-1 rounded text-xs">npm run dev</code> running),
          navigate to your project and start Claude Code:
        </p>
        <CodeBlock language="bash" code={`cd my-landing-page\nclaude`} />
        <p>Then give Claude Code this prompt (or customize it for your own idea):</p>
        <div className="rounded-xl border border-brand-200 bg-brand-50 p-4 my-4">
          <div className="text-xs font-bold text-brand-500 uppercase tracking-wide mb-2">
            Prompt to paste into Claude Code
          </div>
          <p className="text-brand-700 text-sm font-mono leading-relaxed">
            {`Build a landing page for a fictional product called "LaunchPad — The Fastest Way to Ship Ideas". Use the existing Next.js + Tailwind setup. The page should include:

1. A hero section with a headline, subheadline, and a "Get Started Free" button
2. A features section with 3 cards (icons + title + description)
3. A simple footer with the product name and a fake copyright

Keep it clean and modern with a dark background. Use only Tailwind utility classes — no custom CSS.`}
          </p>
        </div>
        <p>
          Claude Code will read your project, generate the page, and write the files. Your browser at{" "}
          <code className="text-brand-500 bg-brand-50 border border-brand-100 px-1 rounded text-xs">localhost:3000</code> will
          automatically refresh to show the new page.
        </p>
      </StepCard>

      <AskYourAI
        label="Understand what was built"
        context="Code explanation prompt"
        prompt={`Look at this Next.js page component I just generated. Can you walk me through how it works? Explain what JSX is, how Tailwind CSS classes work, what the "use client" directive does, and how Next.js renders this as a web page. I want to understand what I'm looking at.\n\n[paste the contents of app/page.tsx here]`}
      />

      <StepCard
        step={3}
        title="Make it yours"
        note="Don't be afraid to break things. git is your safety net — you can always revert to the last working state."
      >
        <p>
          Open <code className="text-brand-500 bg-brand-50 border border-brand-100 px-1 rounded text-xs">app/page.tsx</code> in VSCode and try changing:
        </p>
        <ul>
          <li>The headline text</li>
          <li>A Tailwind color class (e.g. change <code className="text-brand-500 bg-brand-50 px-1 rounded text-xs">bg-violet-600</code> to <code className="text-brand-500 bg-brand-50 px-1 rounded text-xs">bg-blue-600</code>)</li>
          <li>The button text</li>
        </ul>
        <p>Save the file and watch <code className="text-brand-500 bg-brand-50 border border-brand-100 px-1 rounded text-xs">localhost:3000</code> update instantly. That&apos;s Hot Module Replacement.</p>
        <CodeBlock
          language="text"
          code={`# Example Claude Code prompts for iteration:\n"Make the hero section taller with more padding"\n"Change the button to use a gradient from purple to blue"\n"Add a testimonials section below the features with 2 fake quotes"\n"Make the page mobile-responsive — it looks broken on small screens"`}
        />
      </StepCard>

      <AskYourAI
        label="Tailwind CSS basics"
        context="Deep-dive prompt"
        prompt={`I'm looking at a page built with Tailwind CSS for the first time. Can you explain how Tailwind works? What are utility classes? How is this different from writing regular CSS? What are the most common Tailwind classes I'll use every day for layout, spacing, typography, and color?`}
      />

      <StepCard
        step={4}
        title="Initialize Git and make your first commit"
        note="The .gitignore file that create-next-app generates already excludes node_modules and .next."
      >
        <CodeBlock
          language="bash"
          code={`# Check what's changed\ngit status\ngit diff\n\n# Stage all changes\ngit add .\n\n# Commit with a message\ngit commit -m "feat: build landing page with hero, features, footer"\n\n# Verify\ngit log --oneline`}
        />
        <p>
          Good commit messages follow the <strong className="text-brand-500">Conventional Commits</strong> format:
          <code className="text-brand-500 bg-brand-50 border border-brand-100 px-1 rounded text-xs ml-2">type: description</code>.
          Common types: <code className="text-brand-500 bg-brand-50 px-1 rounded text-xs">feat</code>,{" "}
          <code className="text-brand-500 bg-brand-50 px-1 rounded text-xs">fix</code>,{" "}
          <code className="text-brand-500 bg-brand-50 px-1 rounded text-xs">chore</code>.
        </p>
      </StepCard>

      <StepCard
        step={5}
        title="Create a GitHub repo and push"
        note="Make the repo public so Vercel can access it on the free tier."
      >
        <CodeBlock
          language="bash"
          code={`gh repo create my-landing-page --public --source=. --remote=origin --push\n\n# Verify it uploaded\ngh repo view --web   # opens your GitHub repo in the browser`}
        />
        <p>Or manually:</p>
        <CodeBlock
          language="bash"
          code={`git remote add origin git@github.com:YOUR_USERNAME/my-landing-page.git\ngit branch -M main\ngit push -u origin main`}
        />
      </StepCard>

      <AskYourAI
        label="Git workflows"
        context="Deep-dive prompt"
        prompt={`Explain the Git workflow I just followed: init, add, commit, push. What is the difference between "staging" and "committing"? What is a remote? What does "origin" mean? What is the "main" branch and why does it matter? Also explain what branching is and when I'd want to create a new branch.`}
      />

      <StepCard
        step={6}
        title="Deploy to Vercel"
        note="Once connected, every future git push will automatically redeploy your site."
      >
        <CodeBlock
          language="bash"
          code={`vercel\n\n# Follow the prompts:\n# Set up and deploy? › Yes\n# Which scope? › (your username)\n# Link to existing project? › No\n# What's your project's name? › my-landing-page\n# In which directory is your code located? › ./`}
        />
        <p>
          You&apos;ll get a preview URL like{" "}
          <code className="text-brand-500 bg-brand-50 border border-brand-100 px-1 rounded text-xs">my-landing-page-abc123.vercel.app</code>.
          Open it — your page is live on the internet!
        </p>
        <CodeBlock language="bash" code={`vercel --prod`} />
      </StepCard>

      <StepCard step={7} title="The everyday deploy loop">
        <CodeBlock
          language="bash"
          code={`# Make changes in VSCode (or via Claude Code)\n# ...\n\ngit add .\ngit commit -m "fix: update hero headline"\ngit push\n\n# That's it. Vercel detects the push and redeploys automatically.\n# Your live site updates in ~30 seconds.`}
        />
      </StepCard>

      <AskYourAI
        label="Vercel & deployment"
        context="Deep-dive prompt"
        prompt={`Explain how Vercel works under the hood. What happens when I push code to GitHub and Vercel redeploys? What is a "build"? What are preview deployments vs. production deployments? What is a CDN and how does Vercel use one to serve my site fast globally?`}
      />

      {/* Git branching */}
      <div className="my-8 rounded-xl border border-amber-200 bg-amber-50 p-5">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xl">🌿</span>
          <h3 className="font-bold text-amber-800 text-base m-0">Protect yourself: branches and recovery</h3>
        </div>
        <p className="text-slate-700 text-sm leading-relaxed mb-3">
          You now know how to push code live. Here&apos;s how to make sure a bad push doesn&apos;t break your site.
        </p>
        <div className="space-y-3">
          <div>
            <p className="text-xs font-bold text-amber-700 uppercase tracking-wide mb-1">Work on a branch, not main</p>
            <p className="text-slate-600 text-sm mb-2">A branch is a parallel copy of your code. Build there, then merge to <code className="bg-white border border-amber-200 px-1 rounded text-xs">main</code> only when it&apos;s ready.</p>
            <CodeBlock
              language="bash"
              code={`git checkout -b my-new-feature  # create + switch to a new branch\n# ... make changes ...\ngit add . && git commit -m "feat: add my feature"\ngit checkout main\ngit merge my-new-feature\ngit push`}
            />
          </div>
          <div>
            <p className="text-xs font-bold text-amber-700 uppercase tracking-wide mb-1">Undo a bad commit safely</p>
            <CodeBlock
              language="bash"
              code={`git revert HEAD   # creates a new commit that undoes the last one — safe, doesn't rewrite history\ngit push          # Vercel redeploys with the revert`}
            />
          </div>
          <div>
            <p className="text-xs font-bold text-amber-700 uppercase tracking-wide mb-1">Preview before promoting</p>
            <p className="text-slate-600 text-sm">
              Every push to a non-main branch creates a <strong className="text-amber-800">Vercel preview URL</strong> automatically.
              Check it before merging to main so you never ship something broken to your live site.
            </p>
          </div>
        </div>
      </div>

      {/* Env vars */}
      <div className="my-8 rounded-xl border border-slate-200 bg-slate-50 p-5">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xl">🔑</span>
          <h3 className="font-bold text-slate-700 text-base m-0">Environment variables & secrets</h3>
        </div>
        <p className="text-slate-600 text-sm leading-relaxed mb-3">
          The moment your next project calls an API (an LLM, a database, an email service), you&apos;ll have API keys.
          Here&apos;s the rule every developer learns the hard way:
        </p>
        <div className="rounded-lg border-2 border-red-300 bg-red-50 px-4 py-3 mb-3">
          <p className="text-sm font-bold text-red-700">Never put API keys directly in your code or commit them to GitHub.</p>
          <p className="text-xs text-red-600 mt-1">Public GitHub repos are scanned by bots within seconds. A leaked key can rack up thousands of dollars in charges before you notice.</p>
        </div>
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">Instead, use a <code className="bg-white border border-slate-200 px-1 rounded">.env.local</code> file:</p>
        <CodeBlock
          language="bash"
          filename=".env.local (never commit this)"
          code={`OPENAI_API_KEY=sk-...\nNEXT_PUBLIC_SITE_URL=https://my-site.vercel.app`}
        />
        <p className="text-slate-600 text-sm mt-3 mb-2">
          Next.js reads <code className="bg-white border border-slate-200 px-1 rounded text-xs">.env.local</code> automatically.
          The <code className="bg-white border border-slate-200 px-1 rounded text-xs">.gitignore</code> that <code className="bg-white border border-slate-200 px-1 rounded text-xs">create-next-app</code> generates already excludes it — so it stays on your machine only.
        </p>
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">For your Vercel deployment, add the same variables in the Vercel dashboard:</p>
        <p className="text-slate-600 text-sm">
          Vercel Dashboard → Your Project → <strong>Settings</strong> → <strong>Environment Variables</strong> → add each key there.
          Vercel injects them at build time — your deployed site gets the values without them ever touching your git repo.
        </p>
      </div>

      <h2>What to Build Next</h2>
      <div className="grid sm:grid-cols-2 gap-3 my-6">
        {[
          {
            level: "Beginner",
            color: "text-green-700",
            dot: "bg-green-500",
            border: "border-green-200 bg-green-50",
            ideas: [
              "Add a contact form (use Formspree or Resend)",
              "Add a second page with a blog post",
              "Animate the hero section with CSS transitions",
            ],
          },
          {
            level: "Intermediate",
            color: "text-blue-700",
            dot: "bg-blue-500",
            border: "border-blue-200 bg-blue-50",
            ideas: [
              "Fetch and display data from a public API",
              "Add a dark/light mode toggle",
              "Integrate Vercel Analytics",
            ],
          },
          {
            level: "Advanced",
            color: "text-brand-600",
            dot: "bg-brand-500",
            border: "border-brand-200 bg-brand-50",
            ideas: [
              "Add a CMS (Contentlayer, Sanity, or Notion as a backend)",
              "Build an API route that calls an LLM",
              "Add auth with NextAuth.js",
            ],
          },
          {
            level: "Claude Code challenge",
            color: "text-amber-700",
            dot: "bg-amber-500",
            border: "border-amber-200 bg-amber-50",
            ideas: [
              "Tell Claude Code: 'Add a pricing section with 3 tiers and a toggle between monthly/annual'",
              "Tell Claude Code: 'Convert this to a portfolio site for a designer'",
              "Tell Claude Code: 'Add SEO meta tags and generate a sitemap.xml'",
            ],
          },
        ].map((g) => (
          <div key={g.level} className={`p-4 rounded-xl border ${g.border}`}>
            <div className="flex items-center gap-2 mb-3">
              <span className={`w-2 h-2 rounded-full ${g.dot}`} />
              <span className={`text-xs font-bold ${g.color}`}>{g.level}</span>
            </div>
            <ul className="space-y-2">
              {g.ideas.map((idea) => (
                <li key={idea} className="text-sm text-slate-600 flex gap-2">
                  <span className="text-slate-300 flex-shrink-0 mt-0.5">•</span>
                  {idea}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <AskYourAI
        label="Plan your next project"
        context="Project planning prompt"
        prompt={`I just built and deployed a simple landing page with Next.js, GitHub, and Vercel. What should I build next to level up my skills? I want to stay in this stack. Give me 5 project ideas at different difficulty levels, and for each one: what new skills I'd learn, what libraries or tools I'd need, and the key challenges I'd face.`}
      />

      {/* Congrats */}
      <div className="mt-12 rounded-2xl border border-brand-200 bg-brand-500 p-8 text-center">
        <div className="text-4xl mb-4">🎉</div>
        <h3 className="text-xl font-bold text-white mb-2">You shipped something real.</h3>
        <p className="text-brand-100 text-sm max-w-md mx-auto">
          You went from zero to a live web page using the same stack professional developers use.
          A code editor, an AI agent, version control, and a deployment platform.
          That&apos;s the whole thing.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="px-5 py-2.5 bg-white/20 hover:bg-white/30 border border-white/20 rounded-[10000px] text-white font-semibold text-sm transition-colors"
          >
            Back to Home
          </Link>
          <Link
            href="/understanding-ai"
            className="px-5 py-2.5 bg-white text-brand-500 font-bold rounded-[10000px] hover:bg-brand-50 transition-colors text-sm shadow-sm"
          >
            Re-read: How AI Works
          </Link>
        </div>
      </div>

      {/* Get help */}
      <div className="mt-10 rounded-xl border border-brand-100 bg-brand-50 p-5">
        <h3 className="font-bold text-brand-500 text-base mb-3 mt-0">Get help & go further</h3>
        <div className="grid sm:grid-cols-2 gap-3 text-sm">
          {[
            { label: "Claude documentation", url: "https://docs.anthropic.com", desc: "Official docs for Claude and Claude Code" },
            { label: "Claude Code GitHub", url: "https://github.com/anthropics/claude-code", desc: "Bug reports, feature requests, open source" },
            { label: "Anthropic Discord", url: "https://discord.gg/anthropic", desc: "Community, tips, and help from other users" },
            { label: "r/ClaudeAI", url: "https://reddit.com/r/ClaudeAI", desc: "Reddit community for Claude users" },
          ].map((l) => (
            <a
              key={l.label}
              href={l.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col p-3 rounded-lg border border-brand-200 bg-white hover:border-brand-400 transition-colors"
            >
              <span className="font-semibold text-brand-500 text-sm">{l.label} →</span>
              <span className="text-slate-500 text-xs mt-0.5">{l.desc}</span>
            </a>
          ))}
        </div>
      </div>

      <div className="mt-10 pt-8 border-t border-brand-100">
        <Link href="/setup" className="text-slate-400 text-sm hover:text-brand-500 transition-colors">
          ← Back to Setup
        </Link>
      </div>
    </div>
  );
}
