---
paths:
  - "src/components/json-ld.tsx"
  - "src/app/og/**"
  - "src/app/sitemap.ts"
  - "src/app/robots.ts"
  - "src/lib/metadata.ts"
---

# SEO, Structured Data & OG Images

## Structured Data (JSON-LD)
- Use components from `@/components/json-ld` — never write raw JSON-LD script tags
- **`OrganizationJsonLd`** — homepage and about page
- **`ArticleJsonLd`** — every blog post (headline, author, dates, publisher, image)
- **`BreadcrumbJsonLd`** — all pages with depth > 1
- **`FaqJsonLd`** — any page with FAQ content (high GEO citation rate)
- **`JsonLd`** — generic component for custom schemas (e.g. Product on feature pages)
- HTML `<` characters are escaped to `\u003c` to prevent XSS in JSON-LD payloads

## OG Images
- Dynamic OG images generated via `@vercel/og` at `/og?title=...&subtitle=...`
- Uses brand colors and typography (Lora heading on surface background)
- Shared frequently on LinkedIn — branded OG images are critical for professional appearance
- For blog posts, pass the post title as `title` and a short description as `subtitle`

## Vercel Optimizations
- Use `next/image` for all images — provides automatic format negotiation (AVIF/WebP), lazy loading, and responsive sizing via Vercel's Image Optimization API
- Use `next/font` for all fonts — self-hosted with `display: "swap"` for zero layout shift
- Static assets get `Cache-Control: public, max-age=31536000, immutable` headers
- Next.js handles code splitting per-route automatically; keep page components lean
- Use `next/link` for all internal navigation to enable client-side transitions and prefetching
