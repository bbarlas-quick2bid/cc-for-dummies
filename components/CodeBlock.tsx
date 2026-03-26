"use client";

import { useState } from "react";

interface Props {
  code: string;
  language?: string;
  filename?: string;
}

export default function CodeBlock({ code, language = "bash", filename }: Props) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-4 rounded-xl overflow-hidden border border-slate-200 shadow-sm">
      {/* Toolbar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-brand-500 border-b border-brand-600">
        <div className="flex items-center gap-3">
          {/* Traffic lights */}
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-400/80" />
            <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
            <span className="w-3 h-3 rounded-full bg-green-400/80" />
          </div>
          {filename && (
            <span className="text-xs text-brand-200 font-mono">{filename}</span>
          )}
          {!filename && (
            <span className="text-xs text-brand-300 font-mono">{language}</span>
          )}
        </div>
        <button
          onClick={handleCopy}
          className={`text-xs px-2.5 py-1 rounded-md font-medium transition-all ${
            copied
              ? "text-green-300"
              : "text-brand-200 hover:text-white"
          }`}
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>

      {/* Code */}
      <pre className="bg-brand-800 px-4 py-4 overflow-x-auto text-sm leading-relaxed">
        <code className={`language-${language} text-slate-200 font-mono`}>
          {code}
        </code>
      </pre>
    </div>
  );
}
