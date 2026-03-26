import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";

export const metadata: Metadata = {
  title: "The Stack for Dummies — VSCode · Claude Code · GitHub · Vercel",
  description:
    "A plain-English playground for learning how AI, LLMs, and modern dev tools actually work. No fluff. Prompts included.",
  openGraph: {
    title: "The Stack for Dummies",
    description: "Learn VSCode, Claude Code, GitHub & Vercel — with AI prompts baked in.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <NavBar />
        <main>{children}</main>
        <footer className="border-t border-white/10 py-10 mt-20">
          <div className="max-w-4xl mx-auto px-6 text-center text-gray-500 text-sm">
            <p>Built with Next.js · Tailwind · Deployed on Vercel</p>
            <p className="mt-1">
              This guide <em>is</em> the stack it teaches. How meta.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
