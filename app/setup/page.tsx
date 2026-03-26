import PageHeader from "@/components/PageHeader";
import StepCard from "@/components/StepCard";
import AskYourAI from "@/components/AskYourAI";
import CodeBlock from "@/components/CodeBlock";
import OSTab from "@/components/OSTab";
import Link from "next/link";

export const metadata = {
  title: "Setup Guide — Quick2Bid Developer Guide",
  description: "Install and configure VSCode, Claude Code, GitHub, and Vercel on Mac, Linux, or Windows.",
};

function NodeMac() {
  return (
    <div className="space-y-4 text-sm text-slate-700">
      <p>The easiest way on macOS is via <strong className="text-brand-500">Homebrew</strong>, the de-facto package manager for the Mac.</p>
      <p className="font-semibold text-brand-500">1. Install Homebrew (if you don&apos;t have it):</p>
      <CodeBlock code={`/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`} language="bash" />
      <p className="font-semibold text-brand-500">2. Install Node.js via nvm (Node Version Manager):</p>
      <CodeBlock code={`brew install nvm\nmkdir ~/.nvm\n# Add to ~/.zshrc:\nexport NVM_DIR="$HOME/.nvm"\n[ -s "/opt/homebrew/opt/nvm/nvm.sh" ] && \\. "/opt/homebrew/opt/nvm/nvm.sh"\n\n# Reload shell, then:\nnvm install --lts\nnvm use --lts`} language="bash" />
      <p className="font-semibold text-brand-500">3. Verify:</p>
      <CodeBlock code={`node --version  # should print v20.x or higher\nnpm --version`} language="bash" />
    </div>
  );
}

function NodeLinux() {
  return (
    <div className="space-y-4 text-sm text-slate-700">
      <p>Use <strong className="text-brand-500">nvm</strong> (Node Version Manager) — works on any Linux distro.</p>
      <CodeBlock code={`curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash\n# Restart terminal, then:\nnvm install --lts\nnvm use --lts\n\nnode --version\nnpm --version`} language="bash" />
    </div>
  );
}

function NodeWindows() {
  return (
    <div className="space-y-4 text-sm text-slate-700">
      <p>Use <strong className="text-brand-500">nvm-windows</strong> — a separate project from nvm that works on Windows.</p>
      <ol className="list-decimal list-inside space-y-2">
        <li>Download the installer from <code className="bg-brand-50 border border-brand-100 px-1 rounded text-brand-500">github.com/coreybutler/nvm-windows/releases</code> (get <code className="bg-brand-50 px-1 rounded">nvm-setup.exe</code>)</li>
        <li>Run the installer, follow the prompts</li>
        <li>Open a new terminal (PowerShell as Administrator) and run:</li>
      </ol>
      <CodeBlock code={`nvm install lts\nnvm use lts\n\nnode --version\nnpm --version`} language="powershell" />
      <p className="text-amber-700 text-xs">💡 If you hit permission errors, make sure you&apos;re running PowerShell as Administrator.</p>
    </div>
  );
}

function GitMac() {
  return (
    <div className="space-y-4 text-sm text-slate-700">
      <p>macOS ships with a (usually outdated) git. Get the latest via Homebrew:</p>
      <CodeBlock code={`brew install git\ngit --version  # should print 2.40+\n\n# Configure your identity (required for commits)\ngit config --global user.name "Your Name"\ngit config --global user.email "you@example.com"`} language="bash" />
    </div>
  );
}

function GitLinux() {
  return (
    <div className="space-y-4 text-sm text-slate-700">
      <CodeBlock code={`# Ubuntu / Debian\nsudo apt update && sudo apt install git -y\n\n# Fedora\nsudo dnf install git -y\n\n# Arch\nsudo pacman -S git\n\ngit --version\ngit config --global user.name "Your Name"\ngit config --global user.email "you@example.com"`} language="bash" />
    </div>
  );
}

function GitWindows() {
  return (
    <div className="space-y-4 text-sm text-slate-700">
      <p>
        Download Git for Windows from <code className="bg-brand-50 border border-brand-100 px-1 rounded text-brand-500">git-scm.com/download/win</code>.
        During install, choose <em>&ldquo;Git from the command line and also from 3rd-party software&rdquo;</em>.
      </p>
      <CodeBlock code={`git --version\ngit config --global user.name "Your Name"\ngit config --global user.email "you@example.com"`} language="powershell" />
    </div>
  );
}

function VSCodeMac() {
  return (
    <div className="space-y-4 text-sm text-slate-700">
      <p>Download from <code className="bg-brand-50 border border-brand-100 px-1 rounded text-brand-500">code.visualstudio.com</code> and drag to Applications. Then enable the terminal command:</p>
      <ol className="list-decimal list-inside space-y-1">
        <li>Open VSCode</li>
        <li>Press <kbd className="bg-brand-50 border border-brand-200 px-1.5 py-0.5 rounded text-xs text-brand-500">⌘ + Shift + P</kbd></li>
        <li>Type <code className="bg-brand-50 px-1 rounded">Shell Command: Install &apos;code&apos; command in PATH</code></li>
        <li>Hit Enter</li>
      </ol>
      <CodeBlock code={`code .       # open current folder\ncode ~/projects/my-app`} language="bash" />
    </div>
  );
}

function VSCodeLinux() {
  return (
    <div className="space-y-4 text-sm text-slate-700">
      <CodeBlock code={`# Ubuntu/Debian — snap\nsudo snap install code --classic\n\n# Or via apt:\nwget -qO- https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > packages.microsoft.gpg\nsudo install -D -o root -g root -m 644 packages.microsoft.gpg /etc/apt/keyrings/packages.microsoft.gpg\necho "deb [arch=amd64,arm64,armhf signed-by=/etc/apt/keyrings/packages.microsoft.gpg] https://packages.microsoft.com/repos/code stable main" | sudo tee /etc/apt/sources.list.d/vscode.list > /dev/null\nsudo apt update && sudo apt install code`} language="bash" />
    </div>
  );
}

function VSCodeWindows() {
  return (
    <div className="space-y-4 text-sm text-slate-700">
      <p>Download the installer from <code className="bg-brand-50 border border-brand-100 px-1 rounded text-brand-500">code.visualstudio.com</code>. During install, check these options:</p>
      <ul className="list-disc list-inside space-y-1">
        <li>Add to PATH</li>
        <li>&ldquo;Open with Code&rdquo; context menu</li>
      </ul>
      <CodeBlock code={`code --version`} language="powershell" />
    </div>
  );
}

function ClaudeCodeMac() {
  return (
    <div className="space-y-4 text-sm text-slate-700">
      <CodeBlock code={`npm install -g @anthropic-ai/claude-code\nclaude --version`} language="bash" />
      <p>Then start it in any project folder:</p>
      <CodeBlock code={`cd ~/projects/my-app\nclaude`} language="bash" />
      <p>On first launch it will ask you to log in with your Anthropic account or API key.</p>
    </div>
  );
}

function ClaudeCodeLinux() {
  return (
    <div className="space-y-4 text-sm text-slate-700">
      <CodeBlock code={`npm install -g @anthropic-ai/claude-code\nclaude --version\n\ncd ~/projects/my-app\nclaude`} language="bash" />
      <p className="text-amber-700 text-xs">💡 If you get a permissions error with npm install -g, use nvm&apos;s node — it installs to your home directory and never needs sudo.</p>
    </div>
  );
}

function ClaudeCodeWindows() {
  return (
    <div className="space-y-4 text-sm text-slate-700">
      <CodeBlock code={`npm install -g @anthropic-ai/claude-code\nclaude --version`} language="powershell" />
      <CodeBlock code={`cd C:\Users\YourName\projects\my-app\nclaude`} language="powershell" />
      <p className="text-amber-700 text-xs">💡 Run PowerShell as Administrator if you see permission errors. Or use WSL2 for a smoother experience.</p>
    </div>
  );
}

function GitHubMac() {
  return (
    <div className="space-y-4 text-sm text-slate-700">
      <CodeBlock code={`brew install gh\ngh auth login    # follow prompts to authenticate via browser`} language="bash" />
      <p>Set up SSH keys (recommended over HTTPS):</p>
      <CodeBlock code={`ssh-keygen -t ed25519 -C "you@example.com"\ncat ~/.ssh/id_ed25519.pub   # copy this output\n# Then go to github.com → Settings → SSH Keys → New SSH Key → paste`} language="bash" />
    </div>
  );
}

function GitHubLinux() {
  return (
    <div className="space-y-4 text-sm text-slate-700">
      <CodeBlock code={`(type -p curl >/dev/null || (sudo apt update && sudo apt install curl -y)) \\\n&& curl -fsSL https://cli.github.com/packages/githubcli-archive-keyring.gpg | sudo dd of=/usr/share/keyrings/githubcli-archive-keyring.gpg \\\n&& sudo chmod go+r /usr/share/keyrings/githubcli-archive-keyring.gpg \\\n&& echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" | sudo tee /etc/apt/sources.list.d/github-cli.list > /dev/null \\\n&& sudo apt update && sudo apt install gh -y\n\ngh auth login`} language="bash" />
      <CodeBlock code={`ssh-keygen -t ed25519 -C "you@example.com"\ncat ~/.ssh/id_ed25519.pub`} language="bash" />
    </div>
  );
}

function GitHubWindows() {
  return (
    <div className="space-y-4 text-sm text-slate-700">
      <CodeBlock code={`winget install --id GitHub.cli\ngh auth login`} language="powershell" />
      <CodeBlock code={`ssh-keygen -t ed25519 -C "you@example.com"\nGet-Content ~\.ssh\id_ed25519.pub`} language="powershell" />
    </div>
  );
}

function VercelAll() {
  return (
    <div className="space-y-4 text-sm text-slate-700">
      <CodeBlock code={`npm install -g vercel\nvercel login    # opens browser to authenticate`} language="bash" />
      <CodeBlock code={`cd my-project\nvercel          # first time: follow prompts to link project\nvercel --prod   # deploy to production`} language="bash" />
    </div>
  );
}

export default function Setup() {
  return (
    <div className="section-container prose-custom">
      <PageHeader
        eyebrow="Section 03"
        title="Set Up Your Stack"
        subtitle="Install and configure everything you need — Node.js, Git, VSCode, Claude Code, GitHub, and Vercel. Tabs for every OS."
      />

      <div className="mt-6 p-4 rounded-xl bg-blue-50 border border-blue-200 text-sm text-blue-800 flex gap-3">
        <span className="text-blue-500 flex-shrink-0">ℹ️</span>
        <p>
          This section uses OS tabs throughout. Pick your platform once and follow the instructions for it.
          If you&apos;re on Windows, consider also setting up <strong>WSL2</strong> (Windows Subsystem for Linux) — it makes everything smoother. There&apos;s a step for that at the end.
        </p>
      </div>

      <AskYourAI
        label="Setup overview"
        context="Orientation prompt"
        prompt={`I'm setting up a development environment for the first time. I need to install Node.js, Git, VSCode, and some CLI tools. Can you explain what each of these things is, why I need it, and how they work together? I want to understand the "why" before I run any commands.`}
      />

      <StepCard
        step={1}
        title="Install Node.js (via nvm)"
        note="Always install Node via nvm rather than directly. It lets you switch versions per project and avoids permission headaches."
      >
        <p>
          Node.js lets you run JavaScript outside the browser. You need it for the npm package
          manager, which is how you install Claude Code, Next.js, and almost everything else in
          the modern web dev stack.
        </p>
        <OSTab content={{ mac: <NodeMac />, linux: <NodeLinux />, windows: <NodeWindows /> }} />
      </StepCard>

      <StepCard
        step={2}
        title="Install and Configure Git"
        note="Set your name and email before making any commits — they get embedded in every commit you make."
      >
        <p>
          Git is version control. It tracks every change to your code, lets you revert mistakes,
          and connects to GitHub so you can collaborate and deploy.
        </p>
        <OSTab content={{ mac: <GitMac />, linux: <GitLinux />, windows: <GitWindows /> }} />
      </StepCard>

      <AskYourAI
        label="Git basics"
        context="Deep-dive prompt"
        prompt={`Explain Git to a complete beginner. What problem does it solve? What are commits, branches, and merges? What's the difference between git and GitHub? Walk me through the basic daily workflow: staging changes, committing, pushing to GitHub.`}
      />

      <StepCard
        step={3}
        title="Install VSCode"
        note="The first extensions you should install: ESLint, Prettier, and GitLens."
      >
        <p>
          Visual Studio Code is a free, open-source code editor built by Microsoft. It&apos;s the
          most popular editor in the world for web development — fast, extensible, and works
          great with all the other tools in this stack.
        </p>
        <OSTab content={{ mac: <VSCodeMac />, linux: <VSCodeLinux />, windows: <VSCodeWindows /> }} />

        <h3 className="!mt-6">Recommended Extensions</h3>
        <p>Open VSCode, press <kbd className="bg-brand-50 border border-brand-200 px-1.5 py-0.5 rounded text-xs text-brand-500">⌘/Ctrl + Shift + X</kbd>, and install:</p>
        <div className="grid sm:grid-cols-2 gap-2 mt-3">
          {[
            { name: "ESLint", id: "dbaeumer.vscode-eslint", desc: "Catches JS/TS errors as you type" },
            { name: "Prettier", id: "esbenp.prettier-vscode", desc: "Auto-formats your code on save" },
            { name: "GitLens", id: "eamodio.gitlens", desc: "See git blame and history inline" },
            { name: "Tailwind CSS IntelliSense", id: "bradlc.vscode-tailwindcss", desc: "Autocomplete for Tailwind classes" },
          ].map((ext) => (
            <div key={ext.name} className="p-3 rounded-lg border border-brand-100 bg-brand-50">
              <div className="font-bold text-brand-500 text-xs">{ext.name}</div>
              <div className="text-slate-400 text-xs font-mono mt-0.5">{ext.id}</div>
              <div className="text-slate-500 text-xs mt-1">{ext.desc}</div>
            </div>
          ))}
        </div>
      </StepCard>

      <StepCard
        step={4}
        title="Install Claude Code"
        note="You need an Anthropic account (claude.ai) to use Claude Code. The free tier has limits; Pro ($20/mo) gives you much more capacity."
      >
        <p>
          Claude Code is an AI coding agent that lives in your terminal. It can read your files,
          edit code, run commands, and work through multi-step tasks — all from natural language instructions.
        </p>
        <OSTab content={{ mac: <ClaudeCodeMac />, linux: <ClaudeCodeLinux />, windows: <ClaudeCodeWindows /> }} />

        <h3 className="!mt-6">Key commands to know</h3>
        <div className="grid sm:grid-cols-2 gap-2 mt-3">
          {[
            { cmd: "claude", desc: "Start Claude Code in the current directory" },
            { cmd: "/help", desc: "Show all slash commands" },
            { cmd: "/clear", desc: "Clear conversation context" },
            { cmd: "/memory", desc: "View and edit Claude's memory" },
            { cmd: "Escape", desc: "Cancel current action" },
            { cmd: "Ctrl+C twice", desc: "Exit Claude Code" },
          ].map((k) => (
            <div key={k.cmd} className="flex gap-3 p-2.5 rounded-lg border border-brand-100 bg-brand-50">
              <code className="text-brand-500 text-xs font-mono flex-shrink-0 pt-0.5">{k.cmd}</code>
              <span className="text-slate-500 text-xs">{k.desc}</span>
            </div>
          ))}
        </div>
      </StepCard>

      <AskYourAI
        label="Getting started with Claude Code"
        context="Practical prompt"
        prompt={`I just installed Claude Code. What are the most important things I should know in the first week? What are the best prompts to start with? How do I give it context about my project? What are common mistakes new users make? Give me a "first week with Claude Code" guide.`}
      />

      <StepCard
        step={5}
        title="Set Up GitHub"
        note="Use SSH keys rather than passwords. Once set up, you'll never need to type credentials again."
      >
        <p>
          GitHub is where your code lives in the cloud. It&apos;s also how Vercel deploys your
          site — push to GitHub, Vercel automatically rebuilds and deploys.
        </p>
        <p>
          First, create a free account at <code className="text-brand-500 bg-brand-50 border border-brand-100 px-1 rounded text-sm">github.com</code>.
        </p>
        <OSTab content={{ mac: <GitHubMac />, linux: <GitHubLinux />, windows: <GitHubWindows /> }} />
      </StepCard>

      <StepCard
        step={6}
        title="Set Up Vercel"
        note="Vercel's free tier (Hobby) is generous enough for personal projects and learning. You don't need a credit card."
      >
        <p>
          Vercel is a hosting platform built for the modern web. It connects to your GitHub
          repo and automatically deploys every time you push code.
        </p>
        <p>
          Create a free account at <code className="text-brand-500 bg-brand-50 border border-brand-100 px-1 rounded text-sm">vercel.com</code>, then install the CLI:
        </p>
        <OSTab content={{ mac: <VercelAll />, linux: <VercelAll />, windows: <VercelAll /> }} />
      </StepCard>

      <div className="my-8 rounded-xl border border-blue-200 bg-blue-50 p-5">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xl">🪟</span>
          <h3 className="font-bold text-blue-700 text-base m-0">Windows Bonus: Set Up WSL2</h3>
        </div>
        <p className="text-slate-600 text-sm leading-relaxed mb-3">
          WSL2 (Windows Subsystem for Linux) lets you run a real Linux environment inside Windows.
          Many dev tools work better on Linux — and WSL2 gives you that without leaving Windows.
        </p>
        <CodeBlock
          language="powershell"
          code={`# Run in PowerShell as Administrator\nwsl --install\n# Restart your computer, then set up your Linux username/password\n\n# After restart, open "Ubuntu" from Start menu\ncurl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash\nnvm install --lts`}
        />
      </div>

      <AskYourAI
        label="The whole stack together"
        context="Integration prompt"
        prompt={`Explain how VSCode, Git, GitHub, and Vercel all work together in a modern web development workflow. What happens step by step when I write code, save it, push it to GitHub, and it deploys on Vercel? What is CI/CD and how does Vercel's automatic deployment relate to that concept?`}
      />

      <h2>Verify Everything Works</h2>
      <CodeBlock
        language="bash"
        filename="verify.sh"
        code={`node --version      # ✅ v20.x or higher\nnpm --version       # ✅ 10.x or higher\ngit --version       # ✅ 2.40+\ncode --version      # ✅ any version\nclaude --version    # ✅ latest\ngh --version        # ✅ 2.x\nvercel --version    # ✅ latest`}
      />

      <div className="mt-16 pt-8 border-t border-brand-100 flex items-center justify-between">
        <Link href="/prompt-engineering" className="text-slate-400 text-sm hover:text-brand-500 transition-colors">
          ← Prompting
        </Link>
        <Link
          href="/hello-world"
          className="flex items-center gap-2 px-5 py-2.5 bg-brand-500 hover:bg-brand-600 rounded-[10000px] text-white font-semibold text-sm transition-colors shadow-sm"
        >
          Build Hello World →
        </Link>
      </div>
    </div>
  );
}
