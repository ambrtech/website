---
review_agents: [kieran-typescript-reviewer, code-simplicity-reviewer, security-sentinel, performance-oracle]
plan_review_agents: [kieran-typescript-reviewer, code-simplicity-reviewer]
---

# Review Context

Enterprise marketing site for Ambr AI (voice-based AI training simulations). Deployed on Vercel.

## Stack
- Next.js 16 (App Router) with Static Site Generation — no SSR
- TypeScript (strict mode, no `any`, no `@ts-ignore`)
- Tailwind CSS v4 with native `@theme` directive (no `@config`)
- Fonts: Lora (headings) and Outfit (body) via `next/font/google`

## Key Review Focus Areas
- **No raw hex codes, font names, or magic spacing values** — all styling must use design token-derived Tailwind classes or `brand.*` from `@/lib/tokens`
- **No `"use client"` at page level** — only on leaf components that genuinely need interactivity
- **All images must use `next/image`** — never raw `<img>` tags. Require `width`, `height`, and descriptive alt text
- **All internal links must use `next/link`**
- **Every heading uses `font-heading`, every body text uses `font-body`** — no exceptions
- **JSON-LD structured data** must use components from `@/components/json-ld` — never raw script tags. HTML `<` chars escaped to `\u003c`
- **SEO**: every page needs `createMetadata()` from `@/lib/metadata` with unique title and description
- **Security**: escape user-facing content in JSON-LD, no XSS vectors, no command injection
- **Performance budgets**: Lighthouse 95+, LCP < 2.5s, CLS < 0.1, page weight < 500KB (excl. images), hero images < 200KB with `priority` prop

## Brand Rules (affects code review)
- American English (US spelling) throughout all copy
- Accent emphasis in headings: `<em className="text-accent">` on one word max per heading, not every heading
- Design tokens defined in both `tailwind.config.ts` and `globals.css` `@theme` block — changes must update both
- `@/*` path alias for all imports from `src/`
