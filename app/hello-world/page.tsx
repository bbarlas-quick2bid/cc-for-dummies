import PageHeader from "@/components/PageHeader";
import StepCard from "@/components/StepCard";
import AskYourAI from "@/components/AskYourAI";
import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";

export const metadata = {
  title: "Hello World — The Stack for Dummies",
  description: "Build and deploy a real landing page from scratch using Next.js, GitHub, and Vercel.",
};

export default function HelloWorld() {
  return (
    <div className="section-container prose-custom">
      <PageHeader
        eyebrow="Section 04"
        title='Hello World — Build & Deploy a Landing Page'
        subtitle="Go from empty folder to live URL in under an hour. We'll build a real page, push it to GitHub, and deploy it on Vercel."
      />

      {/* What you'll build */}
      <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
        <h3 className="text-white font-semibold mb-3 m-0">What you&apos;ll build</h3>
        <div className="grid sm:grid-cols-3 gap-4 text-sm">
          <div>
            <div className="text-2xl mb-2">🖼️</div>
            <p className="font-medium text-gray-200">A real landing page</p>
            <p className="text-gray-400 mt-1">Hero section, features, and a call-to-action button. Built with Next.js + Tailwind CSS.</p>
          </div>
          <div>
            <div className="text-2xl mb-2">📦</div>
            <p className="font-medium text-gray-200">Pushed to GitHub</p>
            <p className="text-gray-400 mt-1">Your code versioned and stored in the cloud, ready for collaboration.</p>
          </div>
          <div>
            <div className="text-2xl mb-2">🌐</div>
            <p className="font-medium text-gray-200">Live on the internet</p>
            <p className="text-gray-400 mt-1">A real public URL you can share — deployed automatically via Vercel.</p>
          </div>
        </div>
      </div>

      <AskYourAI
        label="Before you start"
        context="Orientation prompt"
        prompt={`I'm about to build my first web project with Next.js. Can you explain what Next.js is, how it relates to React, and why it's the go-to choice for deploying on Vercel? What are pages, components, and routing? Give me a mental model before I write any code.`}
      />

      {/* ── Step 1: Create the project ── */}
      <StepCard
        step={1}
        title="Create a new Next.js project"
        note="create-next-app scaffolds the entire project for you — folder structure, config files, everything. Just like Claude Code can scaffold projects, npm tools can too."
      >
        <p>
          Open your terminal and navigate to where you keep your projects (e.g.{" "}
          <code className="text-violet-300 bg-white/10 px-1 rounded text-xs">~/projects</code> or{" "}
          <code className="text-violet-300 bg-white/10 px-1 rounded text-xs">C:\Users\you\projects</code>).
          Then run:
        </p>
        <CodeBlock
          language="bash"
          code={`npx create-next-app@latest my-landing-page\n\n# When prompted:\n# ✔ Would you like to use TypeScript? › Yes\n# ✔ Would you like to use ESLint? › Yes\n# ✔ Would you like to use Tailwind CSS? › Yes\n# ✔ Would you like to use the src/ directory? › No\n# ✔ Would you like to use App Router? › Yes\n# ✔ Would you like to customize the import alias? › No`}
        />
        <p>Then open the project:</p>
        <CodeBlock
          language="bash"
          code={`cd my-landing-page\ncode .          # opens VSCode\nnpm run dev     # starts local dev server at http://localhost:3000`}
        />
        <p>
          Open <code className="text-violet-300 bg-white/10 px-1 rounded text-xs">http://localhost:3000</code> in
          your browser. You should see the default Next.js page. That&apos;s your dev server running locally.
        </p>
      </StepCard>

      <AskYourAI
        label="Understand the project structure"
        context="Exploration prompt"
        prompt={`I just created a Next.js project with create-next-app. Can you walk me through what all the files and folders do? What is app/page.tsx, layout.tsx, globals.css? What is package.json? What is tailwind.config.ts? What actually happens when I run "npm run dev"?`}
      />

      {/* ── Step 2: Build with Claude Code ── */}
      <StepCard
        step={2}
        title="Use Claude Code to build your landing page"
        note="This is the moment where AI does the heavy lifting. Watch what it does — read the files it writes. You'll learn faster by reading AI-generated code than by writing boilerplate from scratch."
      >
        <p>
          In a new terminal tab (keep <code className="text-violet-300 bg-white/10 px-1 rounded text-xs">npm run dev</code> running),
          navigate to your project and start Claude Code:
        </p>
        <CodeBlock
          language="bash"
          code={`cd my-landing-page\nclaude`}
        />
        <p>
          Then give Claude Code this prompt (or customize it for your own idea):
        </p>
        <div className="rounded-xl border border-violet-500/30 bg-violet-950/20 p-4 my-4">
          <div className="text-xs font-semibold text-violet-400 uppercase tracking-wide mb-2">
            Prompt to paste into Claude Code
          </div>
          <p className="text-gray-300 text-sm font-mono leading-relaxed">
            {`Build a landing page for a fictional product called "LaunchPad — The Fastest Way to Ship Ideas". Use the existing Next.js + Tailwind setup. The page should include:

1. A hero section with a headline, subheadline, and a "Get Started Free" button
2. A features section with 3 cards (icons + title + description)
3. A simple footer with the product name and a fake copyright

Keep it clean and modern with a dark background. Use only Tailwind utility classes — no custom CSS.`}
          </p>
        </div>
        <p>
          Claude Code will read your project, generate the page, and write the files. Watch the terminal as it works.
          Your browser at <code className="text-violet-300 bg-white/10 px-1 rounded text-xs">localhost:3000</code> will
          automatically refresh to show the new page.
        </p>
      </StepCard>

      <AskYourAI
        label="Understand what was built"
        context="Code explanation prompt"
        prompt={`Look at this Next.js page component I just generated. Can you walk me through how it works? Explain what JSX is, how Tailwind CSS classes work, what the "use client" directive does, and how Next.js renders this as a web page. I want to understand what I'm looking at.

[paste the contents of app/page.tsx here]`}
      />

      {/* ── Step 3: Customize it ── */}
      <StepCard
        step={3}
        title="Make it yours"
        note="Don't be afraid to break things. git is your safety net — you can always revert to the last working state."
      >
        <p>
          Now try editing the page yourself. Open{" "}
          <code className="text-violet-300 bg-white/10 px-1 rounded text-xs">app/page.tsx</code> in
          VSCode and try changing:
        </p>
        <ul>
          <li>The headline text</li>
          <li>A Tailwind color class (e.g. change <code className="text-violet-300 bg-white/10 px-1 rounded text-xs">bg-violet-600</code> to <code className="text-violet-300 bg-white/10 px-1 rounded text-xs">bg-blue-600</code>)</li>
          <li>The button text</li>
        </ul>
        <p>Save the file and watch <code className="text-violet-300 bg-white/10 px-1 rounded text-xs">localhost:3000</code> update instantly. That&apos;s Hot Module Replacement — one of the best features of modern dev tooling.</p>

        <p>
          If you want Claude Code to make changes based on what you see, just describe it:
        </p>
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

      {/* ── Step 4: Git init and first commit ── */}
      <StepCard
        step={4}
        title="Initialize Git and make your first commit"
        note="The .gitignore file that create-next-app generates already excludes node_modules and .next — so you don't accidentally commit hundreds of megabytes of dependencies."
      >
        <p>
          Your project already has a <code className="text-violet-300 bg-white/10 px-1 rounded text-xs">.git</code> folder
          from <code className="text-violet-300 bg-white/10 px-1 rounded text-xs">create-next-app</code>. Let&apos;s
          make our first commit with the work we&apos;ve done:
        </p>
        <CodeBlock
          language="bash"
          code={`# Check what's changed\ngit status\ngit diff\n\n# Stage all changes\ngit add .\n\n# Commit with a message\ngit commit -m "feat: build landing page with hero, features, footer"\n\n# Verify\ngit log --oneline`}
        />
        <p>
          Good commit messages follow the <strong className="text-white">Conventional Commits</strong> format:
          <code className="text-violet-300 bg-white/10 px-1 rounded text-xs ml-2">type: description</code>.
          Common types: <code className="text-violet-300 bg-white/10 px-1 rounded text-xs">feat</code>,{" "}
          <code className="text-violet-300 bg-white/10 px-1 rounded text-xs">fix</code>,{" "}
          <code className="text-violet-300 bg-white/10 px-1 rounded text-xs">chore</code>,{" "}
          <code className="text-violet-300 bg-white/10 px-1 rounded text-xs">docs</code>.
        </p>
      </StepCard>

      {/* ── Step 5: Push to GitHub ── */}
      <StepCard
        step={5}
        title="Create a GitHub repo and push"
        note="Make the repo public so Vercel can access it on the free tier. You can make it private if you upgrade Vercel."
      >
        <p>Use the GitHub CLI to create a repo and push in one command:</p>
        <CodeBlock
          language="bash"
          code={`gh repo create my-landing-page --public --source=. --remote=origin --push\n\n# Verify it uploaded\ngh repo view --web   # opens your GitHub repo in the browser`}
        />
        <p>
          Or do it manually: go to <code className="text-violet-300 bg-white/10 px-1 rounded text-xs">github.com/new</code>,
          create the repo, then:
        </p>
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

      {/* ── Step 6: Deploy to Vercel ── */}
      <StepCard
        step={6}
        title="Deploy to Vercel"
        note="Once connected, every future git push will automatically redeploy your site. No manual deploy steps needed."
      >
        <p>There are two ways to deploy — CLI or the Vercel dashboard. Start with the CLI:</p>
        <CodeBlock
          language="bash"
          code={`vercel\n\n# Follow the prompts:\n# Set up and deploy? › Yes\n# Which scope? › (your username)\n# Link to existing project? › No\n# What's your project's name? › my-landing-page\n# In which directory is your code located? › ./\n\n# Vercel detects Next.js automatically and configures everything.`}
        />
        <p>
          You&apos;ll get a preview URL like{" "}
          <code className="text-violet-300 bg-white/10 px-1 rounded text-xs">my-landing-page-abc123.vercel.app</code>.
          Open it — your page is live on the internet!
        </p>
        <p>To deploy to production (your permanent URL):</p>
        <CodeBlock
          language="bash"
          code={`vercel --prod`}
        />
        <p>
          <strong className="text-white">Or use the dashboard:</strong> Go to{" "}
          <code className="text-violet-300 bg-white/10 px-1 rounded text-xs">vercel.com</code> → New Project →
          Import from GitHub → select your repo → Deploy. Vercel auto-detects Next.js.
        </p>
      </StepCard>

      {/* ── Step 7: The deploy loop ── */}
      <StepCard
        step={7}
        title="The everyday deploy loop"
      >
        <p>
          From now on, shipping changes to your live site is this simple:
        </p>
        <CodeBlock
          language="bash"
          code={`# Make changes in VSCode (or via Claude Code)\n# ...\n\ngit add .\ngit commit -m "fix: update hero headline"\ngit push\n\n# That's it. Vercel detects the push and redeploys automatically.\n# Your live site updates in ~30 seconds.`}
        />
        <p>
          Check deployment status in the Vercel dashboard or via CLI:
        </p>
        <CodeBlock
          language="bash"
          code={`vercel ls                 # list deployments\nvercel inspect [url]      # inspect a specific deployment`}
        />
      </StepCard>

      <AskYourAI
        label="Vercel & deployment"
        context="Deep-dive prompt"
        prompt={`Explain how Vercel works under the hood. What happens when I push code to GitHub and Vercel redeploys? What is a "build"? What are preview deployments vs. production deployments? What is a CDN and how does Vercel use one to serve my site fast globally?`}
      />

      {/* ── What to build next ── */}
      <h2>What to Build Next</h2>
      <p>
        You have a working stack. Here are some ideas for where to take it, in order of complexity:
      </p>
      <div className="grid sm:grid-cols-2 gap-3 my-6">
        {[
          {
            level: "Beginner",
            color: "text-green-400",
            dot: "bg-green-400",
            ideas: [
              "Add a contact form (no backend needed — use Formspree or Resend)",
              "Add a second page with a blog post",
              "Animate the hero section with CSS transitions",
            ],
          },
          {
            level: "Intermediate",
            color: "text-blue-400",
            dot: "bg-blue-400",
            ideas: [
              "Fetch and display data from a public API (weather, GitHub, crypto prices)",
              "Add a dark/light mode toggle",
              "Integrate Vercel Analytics to see real traffic",
            ],
          },
          {
            level: "Advanced",
            color: "text-violet-400",
            dot: "bg-violet-400",
            ideas: [
              "Add a CMS (Contentlayer, Sanity, or Notion as a backend)",
              "Build an API route that calls an LLM",
              "Add auth with NextAuth.js",
            ],
          },
          {
            level: "Claude Code challenge",
            color: "text-amber-400",
            dot: "bg-amber-400",
            ideas: [
              "Tell Claude Code: 'Add a pricing section with 3 tiers and a toggle between monthly/annual'",
              "Tell Claude Code: 'Convert this to a portfolio site for a designer'",
              "Tell Claude Code: 'Add SEO meta tags and generate a sitemap.xml'",
            ],
          },
        ].map((g) => (
          <div key={g.level} className="p-4 rounded-xl border border-white/10 bg-white/5">
            <div className="flex items-center gap-2 mb-3">
              <span className={`w-2 h-2 rounded-full ${g.dot}`} />
              <span className={`text-xs font-semibold ${g.color}`}>{g.level}</span>
            </div>
            <ul className="space-y-2">
              {g.ideas.map((idea) => (
                <li key={idea} className="text-sm text-gray-400 flex gap-2">
                  <span className="text-gray-600 flex-shrink-0 mt-0.5">•</span>
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
      <div className="mt-12 rounded-2xl border border-violet-500/30 bg-violet-950/20 p-8 text-center">
        <div className="text-4xl mb-4">🎉</div>
        <h3 className="text-xl font-bold text-white mb-2">You shipped something real.</h3>
        <p className="text-gray-400 text-sm max-w-md mx-auto">
          You went from zero to a live web page using the same stack professional developers use.
          A code editor, an AI agent, version control, and a deployment platform.
          That&apos;s the whole thing.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="px-5 py-2.5 bg-white/10 hover:bg-white/15 border border-white/10 rounded-xl text-white font-medium text-sm transition-colors"
          >
            Back to Home
          </Link>
          <Link
            href="/understanding-ai"
            className="px-5 py-2.5 bg-violet-600/20 hover:bg-violet-600/30 border border-violet-500/30 rounded-xl text-violet-300 font-medium text-sm transition-colors"
          >
            Re-read: How AI Works
          </Link>
        </div>
      </div>

      {/* Prev */}
      <div className="mt-10 pt-8 border-t border-white/10">
        <Link
          href="/setup"
          className="text-gray-500 text-sm hover:text-gray-300 transition-colors"
        >
          ← Back to Setup
        </Link>
      </div>
    </div>
  );
}
