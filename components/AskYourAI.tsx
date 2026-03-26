"use client";

import { useState } from "react";

interface Props {
  prompt: string;
  label?: string;
  context?: string;
}

export default function AskYourAI({ prompt, label, context }: Props) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-8 rounded-xl border border-violet-500/30 bg-violet-950/20 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-violet-900/20 border-b border-violet-500/20">
        <div className="flex items-center gap-2">
          <span className="text-lg">🤖</span>
          <span className="text-sm font-semibold text-violet-300">
            {label ?? "Ask Your AI"}
          </span>
          <span className="text-xs text-violet-500 hidden sm:inline">
            — paste this into Claude, ChatGPT, or Gemini
          </span>
        </div>
        <button
          onClick={handleCopy}
          className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-all ${
            copied
              ? "bg-green-600/30 text-green-300 border border-green-500/30"
              : "bg-violet-600/30 text-violet-300 border border-violet-500/30 hover:bg-violet-600/50"
          }`}
        >
          {copied ? "Copied!" : "Copy Prompt"}
        </button>
      </div>

      {/* Context label */}
      {context && (
        <div className="px-4 pt-3 text-xs text-violet-400 font-medium uppercase tracking-wide">
          {context}
        </div>
      )}

      {/* Prompt text */}
      <div className="px-4 py-3">
        <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-wrap font-mono">
          {prompt}
        </p>
      </div>
    </div>
  );
}
