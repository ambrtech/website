# Ambr AI Website

## Project Overview
Marketing/company website for Ambr AI. Built with Next.js (App Router), TypeScript, and Tailwind CSS. Deployed on Vercel.

## About Ambr AI
Ambr AI builds bespoke voice-based AI conversation simulations for enterprise workplace training. The product is invisible (voice, not visual), highly customised per client, and sold to L&D leaders, sales enablement teams, and HR directors at organisations like Deloitte, Skyscanner, and IWG.

## Brand

### Personality
Quiet authority with warmth. Evidence over empathy. Show, don't tell. Sophisticated enough for a CISO review, warm enough for an L&D champion to feel excited about.

### Pillars
- **Critical:** Trustworthy, Credible, Expert
- **Valued:** Boutique, Innovative, Approachable

### Core Differentiator
Customisation. Lead with it in almost every context. Every simulation is bespoke to the client's scenarios, language, and culture. This is not off-the-shelf.

### Voice Guidelines
- Lead with evidence and outcomes, not hype
- Confident but never boastful — let the work speak
- Warm and human, never corporate or generic
- Speak to practitioners (L&D, sales enablement, HR) as peers, not prospects
- AI is mentioned contextually but never positioned as the primary value proposition — the value is the training outcome, not the technology

### Design & Content Rules
- **Never:** gimmicky, techy, childish, generic, or bland
- Everything must feel credible in an enterprise procurement review — if a client like Deloitte included us in a vendor shortlist deck, we should look like we belong there
- Quality must match the calibre of our clients — never punch below our weight
- Must be distinctive and memorable — if it could belong to any other company, it's not good enough

### Brand Enemies (avoid at all costs)
1. **Too startup-y for enterprise** — every page should hold up if a client dropped us into a vendor shortlist deck
2. **Punching below our weight** — does the quality match the calibre of clients like Deloitte, Skyscanner, IWG?
3. **Forgettable** — would anyone remember us tomorrow? Is there anything distinctive?

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
    globals.css       — Tailwind imports + @config directive
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
- If personalisation or gated content is added later, use ISR (Incremental Static Regeneration) rather than switching to full SSR

### SEO & Metadata
- Use `createMetadata()` from `@/lib/metadata` for every page — ensures consistent OG, Twitter, and canonical URL generation
- The root layout sets `metadataBase`, `title.template` (`%s | Ambr AI`), and fallback OG/Twitter defaults
- Every page must have a unique `title` and `description` via `createMetadata()`
- Sitemap auto-generates from `src/app/sitemap.ts` — new content types should be added there
- Robots.txt generated via `src/app/robots.ts`

### Structured Data (JSON-LD)
- Use components from `@/components/json-ld` — never write raw JSON-LD script tags
- **`OrganizationJsonLd`** — homepage and about page
- **`ArticleJsonLd`** — every blog post (headline, author, dates, publisher, image)
- **`BreadcrumbJsonLd`** — all pages with depth > 1
- **`FaqJsonLd`** — any page with FAQ content (high GEO citation rate)
- **`JsonLd`** — generic component for custom schemas (e.g. Product on feature pages)
- HTML `<` characters are escaped to `\u003c` to prevent XSS in JSON-LD payloads

### OG Images
- Dynamic OG images generated via `@vercel/og` at `/og?title=...&subtitle=...`
- Uses brand colours and typography (Lora heading on surface background)
- Shared frequently on LinkedIn — branded OG images are critical for professional appearance
- For blog posts, pass the post title as `title` and a short description as `subtitle`

### Vercel Optimizations
- Use `next/image` for all images — provides automatic format negotiation (AVIF/WebP), lazy loading, and responsive sizing via Vercel's Image Optimization API
- Use `next/font` for all fonts — self-hosted with `display: "swap"` for zero layout shift
- Static assets get `Cache-Control: public, max-age=31536000, immutable` headers
- Next.js handles code splitting per-route automatically; keep page components lean
- Use `next/link` for all internal navigation to enable client-side transitions and prefetching

### Design Tokens
- `tailwind.config.ts` is the single source of truth — exports `brand` object and extends Tailwind theme from it
- `src/lib/tokens.ts` re-exports `brand` for use in app code (`import { brand } from '@/lib/tokens'`)
- Semantic class names: `bg-surface`, `text-accent`, `font-heading`, `rounded-brand`, etc.
- **No raw hex codes, font names, or spacing values anywhere else in the codebase** — always use token-derived Tailwind classes or reference `brand.*` from tokens
- If a brand value changes, update `tailwind.config.ts` and everything propagates

### Component Rules
- **No hex codes in page/component files.** If a file contains a colour value, it's bypassing the system.
- **No `font-family` declarations in page/component files.** Use `font-heading` or `font-body` classes only.
- **No magic spacing numbers.** Use the Tailwind spacing scale or section component defaults.
- **Every heading** on the site uses `font-heading` (Lora). No exceptions.
- **Every body text** uses `font-body` (Karla). No exceptions.

### Styling
- Tailwind CSS v4 with `@config` directive in `globals.css` loading `tailwind.config.ts`
- Fonts: Lora (headings, weight 400) and Karla (body, weights 400/500), loaded via `next/font/google`
- Font CSS variables: `--font-heading`, `--font-body` — set on `<html>` via next/font `variable` prop

### TypeScript
- Strict mode enabled. No `any` types. No `@ts-ignore`.
- Use the `@/*` path alias for imports from `src/`

### Environment Variables
- `NEXT_PUBLIC_SITE_URL` — canonical site URL (defaults to `https://ambr.ai`)
- Public env vars must be prefixed with `NEXT_PUBLIC_`
- See `.env.example` for reference

## Content System

### Marketing Pages
- Marketing pages are bespoke JSX files assembled from reusable section components
- No content abstraction layer — each page is built directly as a page component
- Section components enforce brand rules; page assembly determines narrative flow
- When creating a new marketing page, reference this handbook and existing pages for structural consistency

### Blog / GEO Content
The blog requires proper infrastructure from the start — volume will grow and each post needs full technical SEO and GEO (Generative Engine Optimization) support.

#### MDX Frontmatter
Every blog post requires complete frontmatter:
```yaml
---
title: "Post Title Here"
slug: "post-slug-here"
description: "Meta description for search. 150-160 characters."
publishedAt: "2026-03-15"
updatedAt: "2026-03-20"
author: "Jamie Wood"
authorRole: "CTO & Co-Founder"
tags: ["sales-training", "ai-simulation"]
featuredImage: "/images/blog/slug-hero.jpg"
featuredImageAlt: "Descriptive alt text for the image"
readingTime: 7
---
```

#### Blog MDX Components
| Component | Purpose |
|---|---|
| `<Callout type="info\|warning">` | Highlighted info or warning block |
| `<StatHighlight value="78%" label="faster onboarding">` | Inline stat callout |
| `<ComparisonTable>` | Side-by-side feature/approach comparison |
| `<AuthorBio>` | Author card at end of post |
| `<RelatedPosts>` | Manually or auto-linked related content |
| `<CTAInline>` | Mid-post CTA (e.g. "See how Ambr handles this") |

#### Taxonomy
- Tags defined in `src/lib/taxonomy.ts` — each tag has a label and description
- Every tag gets an index page (`/blog/tag/[slug]`) with proper meta and structured data
- Supports topic cluster SEO from day one

#### Pagination
- `/blog` index paginates at 12 posts per page from the start
- Build pagination infrastructure even with few posts — retrofitting is painful

#### JSON-LD Structured Data
Every blog post must include JSON-LD structured data rendered as a `<script type="application/ld+json">` tag:
- **`Article` / `BlogPosting` schema** on every post — headline, description, author (as `Person`), datePublished, dateModified, publisher (as `Organization` with logo), image
- **`Organization` schema** on the homepage and about page
- **`BreadcrumbList` schema** on all pages with breadcrumb navigation
- **`FAQPage` schema** on any page with FAQ content (high citation rate in AI-generated answers)

#### GEO (Generative Engine Optimization) Considerations
Content must be optimised for both traditional search engines and AI/LLM citation:
- **Cite sources and include statistics** — content with verifiable claims and data gets cited 30-40% more by AI engines
- **Clear question-and-answer structure** — AI engines heavily favour Q&A pairs; use FAQ sections where natural
- **Original research and proprietary data** — unique benchmarks, frameworks, or datasets give AI engines a reason to cite us specifically
- **Speakable content sections** — write key paragraphs as self-contained, quotable statements that AI can extract cleanly
- **Entity clarity** — consistently refer to "Ambr AI" (not variations) so AI engines build a clear entity graph
- **Update dates matter** — always populate `updatedAt` in frontmatter; AI engines favour recently updated content
- **Topic authority through clusters** — the taxonomy system supports this; each tag cluster builds cumulative authority

## Image Pipeline

### Storage & Naming
- Photography stored in `/public/images/photography/` with descriptive kebab-case names indicating scene and page context (e.g. `hero-solo-conversation.jpg`, `solutions-phone-booth-practice.jpg`)
- Blog images in `/public/images/blog/`

### Usage
- **Always use `next/image`** — never raw `<img>` tags. Provides automatic WebP/AVIF conversion, responsive srcset, lazy loading, and layout shift prevention.
- Use `priority` prop only for above-fold hero images
- Always provide explicit `width` and `height`

### Alt Text
- Every image must have descriptive alt text that conveys the scene, not the marketing message
- **Good:** "A woman removing headphones and exhaling with relief at her desk"
- **Bad:** "Ambr AI simulation practice"
- This is both an accessibility requirement and an SEO/GEO signal

### Optimisation
- Vercel's built-in image optimisation via `next/image` is sufficient — no external image CDN needed
- If consistent post-processing (warmth/grain) is later needed across all photos, Cloudinary's free tier is an option

## Performance Budgets
Every page must meet these targets:

| Metric | Target |
|---|---|
| Lighthouse Performance | 95+ |
| Largest Contentful Paint (LCP) | < 2.5s |
| Cumulative Layout Shift (CLS) | < 0.1 |
| First Input Delay (FID) | < 100ms |
| Total page weight (transferred, excl. images) | < 500KB |
| Hero image | loaded with `priority`, served as WebP, < 200KB |
