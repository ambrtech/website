---
paths:
  - "src/app/blog/**"
  - "src/lib/taxonomy.ts"
  - "content/**"
---

# Blog / GEO Content

The blog requires proper infrastructure from the start — volume will grow and each post needs full technical SEO and GEO (Generative Engine Optimization) support.

## MDX Frontmatter
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

## Blog MDX Components
| Component | Purpose |
|---|---|
| `<Callout type="info\|warning">` | Highlighted info or warning block |
| `<StatHighlight value="78%" label="faster onboarding">` | Inline stat callout |
| `<ComparisonTable>` | Side-by-side feature/approach comparison |
| `<AuthorBio>` | Author card at end of post |
| `<RelatedPosts>` | Manually or auto-linked related content |
| `<CTAInline>` | Mid-post CTA (e.g. "See how Ambr handles this") |

## Taxonomy
- Tags defined in `src/lib/taxonomy.ts` — each tag has a label and description
- Every tag gets an index page (`/blog/tag/[slug]`) with proper meta and structured data
- Supports topic cluster SEO from day one

## Pagination
- `/blog` index paginates at 12 posts per page from the start
- Build pagination infrastructure even with few posts — retrofitting is painful

## Blog JSON-LD Structured Data
Every blog post must include JSON-LD structured data rendered as a `<script type="application/ld+json">` tag:
- **`Article` / `BlogPosting` schema** on every post — headline, description, author (as `Person`), datePublished, dateModified, publisher (as `Organization` with logo), image
- **`Organization` schema** on the homepage and about page
- **`BreadcrumbList` schema** on all pages with breadcrumb navigation
- **`FAQPage` schema** on any page with FAQ content (high citation rate in AI-generated answers)

## GEO (Generative Engine Optimization) Considerations
Content must be optimized for both traditional search engines and AI/LLM citation:
- **Cite sources and include statistics** — content with verifiable claims and data gets cited 30-40% more by AI engines
- **Clear question-and-answer structure** — AI engines heavily favor Q&A pairs; use FAQ sections where natural
- **Original research and proprietary data** — unique benchmarks, frameworks, or datasets give AI engines a reason to cite us specifically
- **Speakable content sections** — write key paragraphs as self-contained, quotable statements that AI can extract cleanly
- **Entity clarity** — consistently refer to "Ambr AI" (not variations) so AI engines build a clear entity graph
- **Update dates matter** — always populate `updatedAt` in frontmatter; AI engines favor recently updated content
- **Topic authority through clusters** — the taxonomy system supports this; each tag cluster builds cumulative authority
