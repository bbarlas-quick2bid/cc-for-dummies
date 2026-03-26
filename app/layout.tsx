import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";

export const metadata: Metadata = {
  title: "Quick2Bid Guide — Anyone Can Build with AI",
  description:
    "A plain-English guide to AI tools — no experience needed. Learn how to use VSCode, Claude Code, GitHub, and Vercel to build and ship something real.",
  openGraph: {
    title: "Quick2Bid Guide — Anyone Can Build with AI",
    description: "No coding experience required. Learn AI tools and build a real webpage — with ready-made prompts for Claude, ChatGPT, and Gemini baked in.",
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
      <body className="min-h-screen bg-white">
        <NavBar />
        <main>{children}</main>
        <footer className="border-t border-brand-100 bg-brand-500 py-10 mt-20">
          <div className="max-w-4xl mx-auto px-6 text-center text-brand-200 text-sm">
            <p className="font-semibold text-white text-base mb-1">Quick2Bid</p>
            <p className="text-brand-200">Smart Quotes for Complex Deals</p>
            <p className="mt-3 text-brand-300 text-xs">
              Built with Next.js · Tailwind · Deployed on Vercel
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
