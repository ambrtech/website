# Ambr AI Website

## Project Overview
Marketing/company website for Ambr AI. Built with Next.js (App Router), TypeScript, and Tailwind CSS. Deployed on Vercel.

## About Ambr AI
Ambr AI builds bespoke voice-based AI conversation simulations for enterprise workplace training. The product is highly customised per client, and sold to L&D leaders, sales enablement teams, and HR directors at organisations like Deloitte, Skyscanner, and IWG.

## Brand

### Personality
The human is the hero, not the technology. Everything in the visual system should communicate that AI exists to serve people, not the other way around.

Warm, soft, slightly romantic. Think "a good friend who happens to be very capable" rather than "powerful system you should be impressed by." There should be zero intimidation in anything we produce. The brand should feel like it could exist in a Sunday supplement.

Quiet authority with warmth. Evidence over empathy. Show, don't tell. Sophisticated enough for a CISO review, warm enough for an L&D champion to feel excited about.

**The litmus test:** If someone saw this brand with no context, they should think "this company cares about people" before they think "this is an AI company." The technology should feel like background infrastructure, not the point.

### Pillars
- **Critical Pillars To Bear In Mind:** Trustworthy, Credible, Expert
- **Note on Innovative:** The product and company name are inherently innovative — branding doesn't need to push this. Over-signalling "innovation" can feel risky to enterprise buyers saturated with AI marketing. Let the product speak; the brand signals trust.

### Core Differentiator
Customisation. Lead with it in most contexts. Every simulation can be bespoke to the client's scenarios, language, culture and other context. This is not off-the-shelf.

### Voice Guidelines
- **American English** — use US spelling throughout all copy (customize, organization, color, etc.)
- Lead with evidence and outcomes, not hype
- Confident but never boastful — let the work speak
- Warm and human, never corporate or generic
- Speak to practitioners (L&D, sales enablement, HR) as peers, not prospects
- AI is mentioned contextually but never positioned as the primary value proposition — the value is the training outcome, not the technology. Enterprise buyers are saturated with AI marketing; many who don't understand AI assume we're "just ChatGPT." Don't big up AI. It's the means, never the message.

### Design & Content Rules
- **Never:** gimmicky, techy, childish, generic, or bland
- Everything must feel credible in an enterprise procurement review — if a client like Deloitte included us in a vendor shortlist deck, we should look like we belong there
- Quality must match the calibre of our clients — never punch below our weight
- Must be distinctive and memorable — if it could belong to any other company, it's not good enough

### Visual Direction
- **Serif headings** — sophisticated, editorial feel
- **Generous white space** — deliberate breathing room signals confidence. Don't fill every gap. Emptiness is intentional.
- **Palette:** Built on off-whites, creams, and warm beiges as the foundation. Accent colours should feel organic and slightly muted — never saturated or electric. If a colour feels like it belongs on a screen, pull it back. If it feels like it belongs on linen or watercolour paper, you're closer.
- **Lead with proof, not persuasion** — client logos, testimonials with photos, stats, and security badges should be prominent and matter-of-fact, not hard-sell.

### Imagery
- **Human-first, always.** When photography is used, it should feel candid and analog — lomography, film grain, natural light. The AI product should rarely if ever be the visual subject.
- Never use: dark palettes, neon, high-contrast tech aesthetics, abstract 3D shapes, morphing blobs, generative patterns, corporate polish, stock-photo perfection, sci-fi or space imagery.

### Key Risk: Blandness
The risk with this direction is blandness through excessive warmth. The brands that do it well (Pi, Notion) find a distinctive visual hook within the softness rather than just defaulting to beige everything. When designing pages and components, always ask: is this warm AND distinctive, or just warm?

### Brand Enemies (avoid at all costs)
1. **Too startup-y for enterprise** (PRIMARY ENEMY) — every page should hold up if a client dropped us into a vendor shortlist deck. This encompasses "too playful" and "too casual." At World of Learning, people assumed we were smaller than we are. The brand must never contribute to that perception. Imagine a buyer with Ambr AI and Yoodli open in two browser tabs — we must look like the grown-up option.
2. **Punching below our weight** — does the quality match the calibre of clients like Deloitte, Skyscanner, IWG? This is closely linked to #1. Our current customers would be impressed by a brand that signals "Ambr AI is really growing up." The credibility of our client list must be reflected in the brand.
3. **Forgettable** — would anyone remember us tomorrow? Is there anything distinctive? Note: there is a productive tension between #1 and #3. Optimising purely against "too startup-y" risks becoming bland. The brand must be sophisticated AND distinctive. Memorability through craft and confidence.

## Tech Stack
- **Framework:** Next.js 16 (App Router) with Static Site Generation
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4
- **Deployment:** Vercel
- **Package manager:** npm

## Commands
- `npm run dev` — start dev server (Turbopack)
- `npm run build` — production build
- `npm run start` — serve production build locally
- `npm run lint` — run ESLint

**Do NOT run `npm run build` automatically** — it kills the dev server. The user runs `npm run dev` and relies on Turbopack hot-reload to see changes. Only run build if explicitly asked or to verify static generation.

## Project Structure
```
tailwind.config.ts    — brand tokens + Tailwind theme extension (canonical source of truth)
src/
  lib/
    tokens.ts         — re-exports brand from tailwind.config.ts (for app code via @/lib/tokens)
    taxonomy.ts       — blog tag definitions and topic clusters
    metadata.ts       — createMetadata() helper for consistent page metadata
  components/
    json-ld.tsx       — JsonLd, OrganizationJsonLd, BreadcrumbJsonLd, ArticleJsonLd, FaqJsonLd
  app/
    og/
      route.tsx       — dynamic OG image generation via @vercel/og
    layout.tsx        — root layout, global metadata, fonts
    page.tsx          — homepage
    globals.css       — Tailwind imports + @theme block
    sitemap.ts        — dynamic sitemap generation
    robots.ts         — robots.txt generation
```

## Conventions

### Static Site Generation
- **Every page is statically generated at build time.** No SSR needed for a marketing site.
- Deploy model: push to git, Vercel rebuilds all pages automatically
- Use `generateStaticParams` for all dynamic routes (blog posts, use cases, tag pages, etc.)
- Only use `"use client"` on leaf components that genuinely need interactivity — never at page level
- Keep data fetching at the page/layout level using async Server Components

### SEO & Metadata
- Use `createMetadata()` from `@/lib/metadata` for every page — ensures consistent OG, Twitter, and canonical URL generation
- Every page must have a unique `title` and `description` via `createMetadata()`
- Sitemap auto-generates from `src/app/sitemap.ts` — new content types should be added there

### Design Tokens
- Brand values are defined in two places that must stay in sync:
  - `tailwind.config.ts` — exports the `brand` object for use in app code (`@/lib/tokens`)
  - `src/app/globals.css` `@theme` block — defines Tailwind CSS theme variables (what generates utility classes)
- If a brand value changes, update both `tailwind.config.ts` and the `@theme` block in `globals.css`
- Semantic class names: `bg-surface`, `text-accent`, `font-heading`, `rounded-brand`, etc.
- **No raw hex codes, font names, or spacing values anywhere else in the codebase** — always use token-derived Tailwind classes or reference `brand.*` from tokens

### Component Rules
- **No hex codes in page/component files.** If a file contains a colour value, it's bypassing the system.
- **No `font-family` declarations in page/component files.** Use `font-heading` or `font-body` classes only.
- **No magic spacing numbers.** Use the Tailwind spacing scale or section component defaults.
- **Every heading** on the site uses `font-heading` (Lora). No exceptions.
- **Every body text** uses `font-body` (Outfit). No exceptions.
- **Accent emphasis in headings:** Use `<em className="text-accent">` to mark the single word (occasionally two) that carries the emotional weight of a heading. Think of it as the word you'd lean on if reading the sentence aloud. It should feel hand-picked, not formulaic.
  - **One per heading, max.** Two accent spans in the same heading kills the effect.
  - **Not every heading needs one.** Selectivity is what makes it work. Reserve it for hero headings, section titles, and CTAs — not subheadings or labels.
  - **Pick the landing word** — usually the human, emotional, or outcome-oriented word, not the technical or structural one.
  - Examples:
    ```tsx
    // Good — "behaviour" is the outcome, the thing that actually matters
    <>Feedback that actually changes <em className="text-accent">behaviour</em></>

    // Good — "your" makes it personal, pulls the reader in
    <>Built around <em className="text-accent">your</em> world</>

    // Good — "matter" is the payoff word at the end of the thought
    <>Conversations that <em className="text-accent">matter</em></>

    // Bad — accenting the generic/structural word
    <>Feedback that actually <em className="text-accent">changes</em> behaviour</>

    // Bad — too many accented words
    <><em className="text-accent">Feedback</em> that changes <em className="text-accent">behaviour</em></>
    ```

### Styling
- Tailwind CSS v4 with native `@theme` directive in `globals.css` (no `@config` — more reliable with Turbopack)
- Fonts: Lora (headings, weight 400) and Outfit (body, weights 400/500), loaded via `next/font/google`
- Font CSS variables: `--font-heading`, `--font-body` — set on `<html>` via next/font `variable` prop

### TypeScript
- Strict mode enabled. No `any` types. No `@ts-ignore`.
- Use the `@/*` path alias for imports from `src/`

### Environment Variables
- `NEXT_PUBLIC_SITE_URL` — canonical site URL (defaults to `https://ambr.ai`)
- Public env vars must be prefixed with `NEXT_PUBLIC_`

## Workflow Rules

### Design changes
Before making any design-related changes, re-read the brand guidelines above and the existing page styles. Present your implementation plan — including layout approach (grid vs flex), spacing values, and color choices — and wait for approval before writing code.

### Sub-agent coordination
Before spawning sub-agents for parallel work:
1. Commit all current changes with the message `checkpoint before parallel work`
2. List exactly which files each agent will touch and confirm there are no overlaps
3. After all agents complete, show a summary diff of all changes before committing

## Content System
- Marketing pages are bespoke JSX files assembled from reusable section components
- No content abstraction layer — each page is built directly as a page component
- Section components enforce brand rules; page assembly determines narrative flow

## Performance Budgets

| Metric | Target |
|---|---|
| Lighthouse Performance | 95+ |
| Largest Contentful Paint (LCP) | < 2.5s |
| Cumulative Layout Shift (CLS) | < 0.1 |
| First Input Delay (FID) | < 100ms |
| Total page weight (transferred, excl. images) | < 500KB |
| Hero image | loaded with `priority`, served as WebP, < 200KB |
