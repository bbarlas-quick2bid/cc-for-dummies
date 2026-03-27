# CLAUDE.md — Quick2Bid AI Guide

## Project Overview

Educational site (quick2bid.ai) teaching complete beginners to build and deploy real web projects using VSCode, Claude Code, GitHub, and Vercel. Tone: friendly, plain-English, zero jargon, approachable. No coding experience assumed from the reader.

**Stack:** Next.js 15 (App Router), TypeScript, Tailwind CSS, deployed on Vercel.

---

## Content Audit Plan

*Recorded 2026-03-27 — re-run this audit whenever adding a new section or after major content updates.*

### Audit Methodology

When performing a content audit of this site, follow these steps in order:

1. **Inventory all pages** — Read every `app/**/page.tsx` file. Note: title, eyebrow/section number, h2 headings, AskYourAI prompts, navigation CTAs (prev/next links), and any hardcoded model names or version numbers.

2. **Check the learning path flow** — Trace the "next →" CTAs from Home → through each section → Hello World. Verify no sections are skipped or unreachable from the main flow. Compare against the NavBar link order.

3. **Flag accuracy issues** — Search for any hardcoded model names (`grep -r "Claude 3\|GPT-4\|Gemini 1"`) and verify they are still current. Model families change quickly.

4. **Assess content completeness against target audience** — Ask: does a true beginner have everything they need to go from zero to live URL? Identify any assumed knowledge gaps.

5. **Check section numbering consistency** — Each section page has an `eyebrow` prop. Ensure numbers match the position in the nav and in the Home page section cards.

6. **Review AskYourAI prompts** — Ensure every major concept has at least one prompt. Ensure prompts are copy-pasteable without editing.

7. **Identify content gaps** — Compare current coverage against the "Recommended Content" list below.

### Findings from 2026-03-27 Audit

See `CONTENT-RECOMMENDATIONS.md` for the full recommendations report generated from this audit.

**Critical issues found:**
- Section numbering mismatch: Context Engineering is "Deep Dive" (unnumbered) but Setup calls itself "Section 03" — it should be Section 04, and Hello World should be Section 05. Home page section cards match the pages but prompt-engineering's "Next →" skips context engineering entirely.
- Context Engineering page references "Claude 3.5 Sonnet" — outdated, should reference Claude 4.x (Sonnet 4.6 / Opus 4.6).
- Footer tagline "Smart Quotes for Complex Deals" is Quick2Bid's commercial product copy — misaligned with the educational tone of this guide.

---

## Content Sections (Current)

| Route | Section # | Title |
|---|---|---|
| `/` | — | Home |
| `/understanding-ai` | 01 | How AI Actually Works |
| `/prompt-engineering` | 02 | Prompt Engineering, Skills & Agents |
| `/context-engineering` | Deep Dive | Context Engineering |
| `/setup` | 03 (should be 04) | Set Up Your Stack |
| `/hello-world` | 04 (should be 05) | Hello World — Build & Deploy |

---

## Key Components

- `AskYourAI` — Expandable prompt copy box. Props: `label`, `context`, `prompt`.
- `ConceptCard` — Highlighted concept box. Props: `icon`, `title`, `accent` (`brand` | `blue` | `green` | `amber`).
- `StepCard` — Numbered step card for tutorials. Props: `step`, `title`, `note?`.
- `CodeBlock` — Syntax-highlighted code. Props: `code`, `language`, `filename?`.
- `OSTab` — Tab switcher for Mac/Linux/Windows. Props: `content: { mac, linux, windows }`.
- `PageHeader` — Section header. Props: `eyebrow`, `title`, `subtitle`.

---

## Brand & Style

- Brand color: `#032B5A` (navy) — Tailwind token `brand-500`
- Font: Montserrat
- Theme: Light, clean, professional but approachable
- Tone: "No PhD required" — explain everything from first principles, no jargon without definition

---

## Development Notes

- Always run `npm run dev` to preview changes locally before pushing.
- Every `git push` to `main` triggers an automatic Vercel deployment.
- No database or API routes — this is a purely static/SSG site.
- All section content is in the page component file, not a CMS.
