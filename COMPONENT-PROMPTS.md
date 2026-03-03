# Component Prompts for Gemini

Each prompt below creates one React section component for the Ambr AI marketing site. Use them independently — each produces a single `.tsx` file.

---

## Shared context (include with every prompt)

Paste this block at the start of every prompt:

> **Project context.** You are building a reusable React section component for the Ambr AI marketing website — an enterprise training platform that sells to L&D leaders at companies like Deloitte and Skyscanner. The site is Next.js 16 App Router, TypeScript strict mode, Tailwind CSS v4.
>
> **Brand personality.** Warm, sophisticated, editorially confident. Think Sunday supplement, not SaaS landing page. The human is the hero, not the technology. Quiet authority with warmth. Everything must feel credible in an enterprise procurement review — if Deloitte dropped us into a vendor shortlist deck, we should look like we belong there. The primary risk is blandness — the design must be warm AND distinctive, not just warm.
>
> **Visual direction.** Serif headings (Lora, weight 400) for all h1/h2/h3 — use the class `font-heading`. Body text in Outfit (inherited from `font-body` on the body element). Generous white space — emptiness is intentional. Palette built on off-whites, creams, and warm beiges. Accent colour is a warm terracotta orange. Never: neon, dark themes on light pages, high-contrast tech aesthetics, abstract 3D, morphing blobs, sci-fi imagery, corporate stock photography vibes.
>
> **Technical rules (non-negotiable):**
> - TypeScript strict mode. No `any`. No `@ts-ignore`.
> - Only use `"use client"` if the component genuinely needs browser interactivity (useState, event handlers). Otherwise, keep it as a Server Component.
> - All colours must use Tailwind token classes — never raw hex codes or rgba in component files. Available colour tokens: `accent`, `accent-hover`, `accent-soft`, `accent-tint`, `accent-whisper`, `surface`, `surface-alt`, `surface-white`, `dark`, `dark-mid`, `copy`, `copy-mid`, `copy-light`, `copy-faint`, `border`.
> - All headings must use the `font-heading` class. Body text inherits `font-body` from the page.
> - Font sizes: use these Tailwind classes — `text-display`, `text-headline`, `text-title`, `text-section`, `text-quote`, `text-stat`, `text-body`, `text-body-sm`, `text-label`, `text-nav`, `text-caption`, `text-eyebrow`, `text-eyebrow-sm`. Never use raw `text-xl`, `text-2xl` etc.
> - Letter spacing: `tracking-heading` on headings, `tracking-eyebrow` on eyebrow/label text.
> - Spacing: use token classes — `py-section-mobile md:py-section`, `px-container-mobile md:px-container`, `max-w-site` for container. Available section padding: `section-mobile` (3.5rem), `section` (6rem), `section-lg` (8rem), `section-xl` (10rem), `section-2xl` (13rem).
> - Border radius: `rounded-brand-sm` (6px), `rounded-brand` (12px), `rounded-brand-lg` (1rem).
> - Shadows: `shadow-card`, `shadow-dropdown`.
> - Animations: wrap content in `<Reveal>` from `@/components/reveal` for scroll-triggered fade-in. Import: `import { Reveal } from '@/components/reveal'`. For section containers, use `<Section>` from `@/components/sections/section`. Import: `import { Section } from './section'`.
> - Use `next/link` for all internal links. Use `next/image` for all images.
> - Imports use `@/*` path alias for anything from `src/`.
> - Export as a named export (not default).
> - Place the file in `src/components/sections/`.
> - Include a clear TypeScript props interface.
> - Use placeholder/lorem ipsum content for any demo data within the component — the real content will be passed via props.
>
> **The litmus test for your design:** Would this component look at home in a Monocle or Financial Times editorial layout? Is there at least one distinctive design detail that makes it memorable without being gimmicky? Does it have enough breathing room?

---

## Prompt 1: Comparison Layout

Create a React section component called `ComparisonLayout` for comparing approaches side by side — for example, comparing "classroom roleplay" vs "e-learning" vs "coaching" vs "AI roleplay."

This is NOT a feature comparison grid with checkmarks. It should feel editorial — like a magazine layout that walks the reader through options with short, opinionated descriptions. Think about how a design magazine might present "four schools of thought" — each getting a brief, distinctive treatment.

Props should accept an array of items, each with a label, description, and an optional `highlighted` boolean for the recommended option. The highlighted item should feel subtly elevated without being garish.

Give it personality. Consider asymmetry, typography contrast, or a subtle visual device that makes it feel considered rather than templated.

---

## Prompt 2: Use Case Card Grid

Create a React section component called `UseCaseCards` for displaying 3-4 use case categories — each with a heading, short description, and its own CTA link.

Each card should feel like an invitation, not a data dump. Think about how a high-end restaurant menu presents categories — confident, spacious, with just enough information to make you want more. The cards need hover states that feel tactile and considered.

Props: an optional section eyebrow, optional section heading, and an array of card items (heading, description, href, ctaLabel). The CTA on each card should feel like a natural next step, not a hard sell.

Avoid: rounded corners that feel app-like, drop shadows that feel SaaS-y, icon placeholders, gradient backgrounds.

---

## Prompt 3: Scenario Cards

Create a React section component called `ScenarioCards` for displaying interactive scenario options — for example, "Management & Leadership", "Sales & Negotiations", "Customer Service" — each with a scenario description and a "Start Conversation" CTA.

These cards represent something the user will actually DO (start a voice simulation), so they should feel slightly more interactive and inviting than informational cards. Think about the energy of a theatre programme — you're choosing which performance to experience.

Props: optional section heading, optional subtitle, and an array of scenario items (category, scenarioTitle, description, href). Keep the data structure simple but the visual treatment distinctive.

Each card needs a clear sense of what you'll experience. Consider how the layout changes between mobile (stacked) and desktop (side by side or three-across).

---

## Prompt 4: Testimonial Grid

Create a React section component called `TestimonialGrid` for displaying multiple testimonials — typically 3-6 quotes with attribution (name, role, company).

The current site has a single large testimonial section. This component is for showing breadth of social proof — multiple voices, different perspectives. Think about how a book's praise page looks, or how Aesop displays press quotes — understated, typographically rich, and arranged with intentional asymmetry.

Props: an array of testimonial items (quote, name, role, company). Some testimonials may be anonymous (role + company type only, no name).

Consider a layout that isn't a perfect grid — staggered heights, varied quote lengths handled gracefully, perhaps a masonry feel. The opening quotation mark is a design element the brand already uses (giant faded serif quote mark) — consider how to echo this without repeating the exact same treatment.

---

## Prompt 5: Stat Highlight Bar

Create a React section component called `StatBar` for displaying 1-3 statistics prominently inline — for example, "93% of users report feeling better prepared" or key metrics from a case study.

This is NOT a full stats section (the site already has one with giant numbers on a dark background). This is a compact, inline confidence-builder that can sit between content sections. Think about how The Economist presents a key data point mid-article — it's authoritative, not decorative.

Props: an array of stat items (value, label, optional source). The component should work with 1, 2, or 3 stats.

Consider: a subtle background treatment (not dark, more like a refined strip), typography that makes the number feel weighty without being enormous, and a source attribution that adds credibility without cluttering.

---

## Prompt 6: Trust Badge Bar

Create a React section component called `TrustBadges` for displaying certification and compliance badges — ISO 27001, GDPR, EU AI Act, and similar.

This is a credibility strip, not a features section. It should feel institutional and matter-of-fact — like the certifications displayed in a law firm's lobby. Think about how financial institutions present their regulatory badges — serious, compact, authoritative.

Props: an array of badge items (label, optional description). The component should also accept an optional CTA link (e.g., "Learn more about security").

Keep it tight. This shouldn't demand attention — it should reward attention. Consider how to make certification names feel authoritative through typography and spacing rather than logos or icons.

---

## Prompt 7: Action Picker (Three-Option CTA)

Create a React section component called `ActionPicker` for presenting 3 equally weighted action options — for example, "Book a Meeting", "Ask a Question", "Get a Quote."

This is a conversion section for buyers who want to engage but in different ways. Each option should feel equally valid and accessible — no visual hierarchy that pushes one over the others. Think about how a luxury hotel presents booking options (phone, email, concierge) — all paths are first-class.

Props: an optional heading, optional subtitle, and an array of 3 action items (heading, description, href, ctaLabel).

The three cards should feel like peers. Consider how to make them visually cohesive while giving each enough presence. Hover states should feel inviting. The overall section should feel low-pressure and warm — this is the moment the buyer commits to a conversation, and it shouldn't feel like a hard sell.

---

## Prompt 8: Numbered Steps

Create a React section component called `NumberedSteps` for displaying a sequential process — typically 3-4 steps like "Tell us what you need", "See it in action", "Go live."

This should NOT feel like a SaaS onboarding wizard with circles and connecting lines. Think about how an architectural firm presents their design process, or how a Michelin guide describes how restaurants are evaluated — numbered steps that feel editorial and considered, not diagrammatic.

Props: optional eyebrow, optional heading, and an array of step items (title, description). The step number should be a visual element but not dominate.

Consider how the numbers themselves become a typographic feature — perhaps oversized and faded, or set in the serif heading font for editorial character. The layout should work vertically on mobile and could shift to a more interesting arrangement on desktop.

---

## Prompt 9: Expandable Detail Cards

Create a React section component called `DetailCards` for displaying 4-6 items that each have a heading and a paragraph of description — more content per item than a feature grid, but not full sections.

Use case: "Built for how consulting firms actually work" with items like "Client pitch preparation" (heading) + a paragraph of detail. The content is too substantial for a grid label but doesn't warrant its own SplitContent section.

This component needs `"use client"` because each card should be expandable — show the heading by default, reveal the description on click/tap. Think about how a high-end product catalogue reveals detail — not an aggressive accordion, but a gentle unfold.

Props: optional section eyebrow, optional section heading, and an array of items (heading, description). Consider whether the expand/collapse should be per-card or show-all.

The collapsed state should feel complete (not like something is hidden). The expanded state should feel like a natural extension. Transition animation should use `grid-template-rows` for smooth height changes.

---

## Prompt 10: Pull Quote

Create a React section component called `PullQuote` for displaying a single highlighted quotation inline between sections — smaller and more contextual than a full testimonial section.

Think about how The New York Times Magazine uses pull quotes — they break the visual rhythm of the page, draw the eye, and add a human voice to the narrative. This is not a testimonial block — it's a design element that makes a page feel editorially crafted.

Props: quote (string), name (optional), role (optional), company (optional). Attribution may be partial or absent for anonymous quotes.

Consider: how the serif heading font feels for the quote text, a subtle accent-coloured element (a fine rule, a faded mark) that ties it to the brand without being heavy, and generous vertical spacing that gives it room to breathe. The quote should feel like it interrupts the page flow intentionally — a pause that carries weight.
