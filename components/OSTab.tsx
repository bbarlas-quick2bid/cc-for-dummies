"use client";

import { useState } from "react";

type OS = "mac" | "linux" | "windows";

interface TabContent {
  mac: React.ReactNode;
  linux: React.ReactNode;
  windows: React.ReactNode;
}

interface Props {
  content: TabContent;
}

const osLabels: { id: OS; label: string; icon: string }[] = [
  { id: "mac", label: "macOS", icon: "" },
  { id: "linux", label: "Linux", icon: "🐧" },
  { id: "windows", label: "Windows", icon: "🪟" },
];

export default function OSTab({ content }: Props) {
  const [active, setActive] = useState<OS>("mac");

  return (
    <div className="my-6 rounded-xl border border-white/10 overflow-hidden">
      {/* Tab bar */}
      <div className="flex border-b border-white/10 bg-white/5">
        {osLabels.map((os) => (
          <button
            key={os.id}
            onClick={() => setActive(os.id)}
            className={`flex items-center gap-1.5 px-5 py-3 text-sm font-medium transition-colors ${
              active === os.id
                ? "text-white border-b-2 border-violet-500 bg-white/5"
                : "text-gray-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <span>{os.icon}</span>
            {os.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="p-6">{content[active]}</div>
    </div>
  );
}
