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
    <div className="my-8 rounded-xl border border-brand-200 bg-brand-50 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-brand-500 border-b border-brand-600">
        <div className="flex items-center gap-2">
          <span className="text-lg">🤖</span>
          <span className="text-sm font-semibold text-white">
            {label ?? "Ask Your AI"}
          </span>
          <span className="text-xs text-brand-200 hidden sm:inline">
            — paste this into Claude, ChatGPT, or Gemini
          </span>
        </div>
        <button
          onClick={handleCopy}
          className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-all ${
            copied
              ? "bg-green-600 text-white"
              : "bg-white/20 text-white border border-white/30 hover:bg-white/30"
          }`}
        >
          {copied ? "Copied!" : "Copy Prompt"}
        </button>
      </div>

      {/* Context label */}
      {context && (
        <div className="px-4 pt-3 text-xs text-brand-400 font-semibold uppercase tracking-wide">
          {context}
        </div>
      )}

      {/* Prompt text */}
      <div className="px-4 py-3">
        <p className="text-brand-600 text-sm leading-relaxed whitespace-pre-wrap font-mono">
          {prompt}
        </p>
      </div>
    </div>
  );
}
