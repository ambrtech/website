---
paths:
  - "public/images/**"
  - "src/components/**"
  - "src/app/**"
---

# Image Pipeline

## Storage & Naming
- Photography stored in `/public/images/photography/` with descriptive kebab-case names indicating scene and page context (e.g. `hero-solo-conversation.jpg`, `solutions-phone-booth-practice.jpg`)
- Blog images in `/public/images/blog/`

## Style
- **Human-first, always.** People are the subject, not the product. The AI should be invisible in imagery.
- Photography should feel candid and analog — natural light, film grain, warmth. Think lomography, not studio lighting.
- Never use: corporate stock photography, staged/perfect compositions, tech-aesthetic imagery, abstract AI visuals, sci-fi tropes.

## Usage
- **Always use `next/image`** — never raw `<img>` tags. Provides automatic WebP/AVIF conversion, responsive srcset, lazy loading, and layout shift prevention.
- Use `priority` prop only for above-fold hero images
- Always provide explicit `width` and `height`

## Alt Text
- Every image must have descriptive alt text that conveys the scene, not the marketing message
- **Good:** "A woman removing headphones and exhaling with relief at her desk"
- **Bad:** "Ambr AI simulation practice"
- This is both an accessibility requirement and an SEO/GEO signal

## Optimization
- Vercel's built-in image optimization via `next/image` is sufficient — no external image CDN needed
- If consistent post-processing (warmth/grain) is needed across all photos, Cloudinary's free tier is an option
