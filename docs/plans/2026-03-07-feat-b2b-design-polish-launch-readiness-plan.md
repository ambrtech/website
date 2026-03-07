---
title: "B2B Design Polish & Launch Readiness"
type: feat
status: active
date: 2026-03-07
---

# B2B Design Polish & Launch Readiness

## Overview

Comprehensive visual design review and improvement of the entire Ambr AI marketing website to make it launch-ready for B2B customer acquisition. The site has solid foundations (design tokens, component architecture, brand system) but needs visual polish at the layout, spacing, typography, and interaction level to pass the "enterprise vendor shortlist" test.

This plan requires browser-based visual review — code-only changes won't catch layout and spacing issues. Every change must be verified in the browser.

## Problem Statement

The site has several visual issues that undermine credibility for enterprise B2B buyers:

1. **Interior page hero headings are too large** — `text-headline` at `clamp(2.5rem, 5vw, 4.5rem)` creates oversized headings on full-width interior pages (industries, solutions). The homepage hero is fine because it's in a 50/50 split layout, but PageHero renders full-width headings at the same massive size.
2. **AccordionShowcase items lack interactive affordance** — No chevron, plus icon, or visual cue indicating items are clickable/expandable. In the dark variant, this is especially problematic.
3. **Inconsistent vertical spacing** — Uniform `py-section` padding between all sections creates awkward gaps. Some section pairs need tighter coupling (e.g., heading section followed by SplitContent, or TrialScenario followed by SplitContent).
4. **LogoBar uses text names instead of actual logos** — Looks startup-y, which is the #1 brand enemy.
5. **Various polish issues** — Missing company names in testimonials, inconsistent eyebrow colors, interactive elements that don't communicate interactivity.

## Proposed Solution

A phased approach working from the design system foundation up to page-level composition, with browser verification at every step.

## Technical Approach

### Architecture

All changes are CSS/component-level. No new dependencies. No structural changes to the app router or data layer.

### Implementation Phases

#### Phase 1: Typography & Spacing Foundation

Fix the design token layer and base components that affect every page.

**1a. Fix interior page hero heading size** (`src/components/sections/page-hero.tsx`, `src/app/globals.css`)
- Add a new font size token `--text-page-hero` at approximately `clamp(2rem, 4vw, 3.2rem)` — roughly matching `text-title` but possibly slightly larger
- Update `PageHero` to use `text-page-hero` instead of `text-headline` for `h1`
- `text-headline` stays for the homepage hero and large display headings
- The `compact` prop should further reduce to `text-section` size
- Max-width constraint of `max-w-[700px]` instead of `max-w-[800px]` to keep lines tighter

**1b. Refine section vertical spacing** (`src/components/sections/section.tsx`, `src/app/globals.css`)
- Add a `spacing` prop to `Section`: `'default' | 'tight' | 'flush'`
  - `default`: current `py-section-mobile md:py-section` (3.5rem / 6rem)
  - `tight`: `py-6 md:py-10` — for sections that logically pair (heading + content)
  - `flush`: `py-0` — for sections that butt up against each other
- Review each page and assign appropriate spacing to section pairs
- Specifically fix: the gap between TrialScenario and its neighboring sections, the gap between standalone heading sections and their content sections

**1c. Review the heading hierarchy** (`src/app/globals.css`)
- `text-display`: homepage hero only (if used)
- `text-headline`: `clamp(2.5rem, 5vw, 4.5rem)` — large section headings, CTA sections
- `text-title`: `clamp(2rem, 3.5vw, 3.2rem)` — page hero headings on interior pages
- `text-section`: `clamp(1.75rem, 3vw, 2.5rem)` — component-level headings (SplitContent, AccordionShowcase, FeatureGrid)
- Verify each component uses the correct level

**Success criteria:**
- Interior page hero headings visually fit within the viewport without overwhelming
- Section spacing creates clear visual rhythm without excessive gaps
- Heading sizes create a clear hierarchy that communicates page structure

#### Phase 2: Component Interaction Polish

Fix individual components that need better visual communication.

**2a. AccordionShowcase expand indicators** (`src/components/sections/accordion-showcase.tsx`)
- Add a chevron or `+`/`-` icon to each accordion item button
- Icon should be right-aligned, subtle (use `text-copy-light` or `text-copy-faint`)
- Active item shows `-` or rotated chevron; inactive shows `+` or default chevron
- Consider a subtle left-border accent on the active item for stronger visual signal
- Increase heading size from `text-label` (0.9rem) to `text-body` or slightly larger for better scannability

**2b. LogoBar visual upgrade** (`src/components/sections/logo-bar.tsx`)
- Replace text client names with actual logo images using `next/image`
- Use the logos in `public/logos/` directory (from git status: `?? public/logos/`)
- Apply `filter-badge-light` (grayscale + reduced opacity) for understated enterprise feel
- Add hover state: increase opacity slightly
- If logos aren't all available, at minimum improve typography treatment — use consistent weight and size, add subtle separators

**2c. Testimonial attribution consistency** (`src/components/sections/testimonial-grid.tsx`)
- Fix empty company strings: either remove the comma-company pattern or ensure every testimonial has a company
- Update the footer rendering to handle missing company gracefully (no trailing comma)
- The testimonials on the homepage and company page need company names filled in

**2d. Eyebrow standardization**
- Standardize: eyebrows on content sections use `text-copy-light`, eyebrows on accent/highlighted sections use `text-accent`
- Audit all pages for consistency
- The `eyebrow-hairline` pseudo-element should always appear on eyebrows (some pages skip it)

**2e. Interactive element affordance audit**
- All clickable cards (UseCaseCards, ScenarioCards) should have clear hover states
- CTAs should look like buttons — verify consistent styling
- Links with arrows should animate the arrow on hover (most already do this)

**Success criteria:**
- AccordionShowcase clearly communicates "click to expand"
- LogoBar conveys enterprise credibility
- Consistent visual language across all components

#### Phase 3: Page-by-Page Layout Review (Browser Required)

Start the dev server and review each page in the browser. This is the core of the work.

**Methodology:**
1. Start dev server with `npm run dev`
2. Open each page at 1440px viewport width (standard desktop)
3. Also check at 768px (tablet) and 375px (mobile)
4. Screenshot key issues
5. Fix and verify

**Pages to review (priority order):**

**3a. Homepage** (`src/app/page.tsx`)
- Hero section layout, CTA prominence, image loading
- LogoBar visual weight
- StatBar alignment and readability
- Customization section flow (heading → 3 SplitContent → link)
- Voice AI section flow
- ShowcaseSplit visual balance
- SecurityBadges section weight
- GrainCta closing impact
- Overall vertical rhythm — does the page flow or does it feel like stacked boxes?

**3b. Industry pages** (retail-hospitality, consulting-advisory, professional-services, etc.)
- PageHero heading size (the identified issue)
- AccordionShowcase interaction clarity
- TrialScenario visual weight and spacing
- Section transitions and flow
- FeatureGrid spacing

**3c. Solutions pages** (management-leadership, sales-negotiations, customer-service)
- Same heading size issues as industry pages
- SimulationCard visual integration
- StrategyOutcomes spacing
- Overall flow from hero → use cases → features → CTA

**3d. Product pages** (how-it-works, ai-roleplay, admin-experience, integrations, languages)
- NumberedSteps visual clarity
- Multiple SplitContent sections in sequence — do they feel rhythmic or repetitive?
- FeatureGrid density
- Section backgrounds (alt vs default) creating visual breaks

**3e. Trust/Security pages** (compliance, data-protection, responsible-ai)
- Dense informational content readability
- SecurityBadges component in page context

**3f. Company, FAQ, Try for Free, Find Out More**
- Company page narrative flow
- FAQ section scanability
- Try for Free conversion optimization — is the CTA prominent? Is the path clear?
- Find Out More form/content (if exists)

**3g. Blog infrastructure** (blog index, blog post, tag pages)
- Post grid layout
- Individual post prose readability
- Tag page layout

**Success criteria:**
- Every page passes the "vendor shortlist deck" test — looks like it belongs alongside Deloitte, McKinsey, Bain vendor materials
- Clear visual hierarchy on every page
- Consistent spacing and rhythm
- No layout breaks at any viewport size

#### Phase 4: Final Polish

**4a. Transition and animation review**
- Reveal animations feel smooth, not jumpy
- Hover transitions are consistent (all use `duration-normal` / 300ms)
- No FOUC or layout shifts on page load

**4b. Mobile responsiveness**
- Header mobile menu works smoothly
- All sections collapse gracefully
- Touch targets are at least 44px
- No horizontal scroll

**4c. Dark section transitions**
- SecurityBadges, AccordionShowcase, GrainCta dark sections should transition smoothly from/to light sections
- Border treatments are consistent

**4d. CTA consistency**
- Primary CTAs: dark bg with "Try for Free" → consistent across all pages
- Secondary CTAs: text link with arrow → consistent style
- Every page ends with a strong CTA section (GrainCta or CTA component)

**Success criteria:**
- Polished, professional feel at every interaction
- Consistent CTA hierarchy drives conversion
- Mobile experience matches desktop quality

## Acceptance Criteria

### Functional Requirements
- [ ] Interior page hero headings are appropriately sized (not oversized)
- [ ] AccordionShowcase has clear expand/collapse indicators
- [ ] Section spacing creates proper visual rhythm (no excessive gaps)
- [ ] LogoBar displays actual client logos or significantly improved text treatment
- [ ] All testimonials have complete attribution
- [ ] Eyebrow styling is consistent across all pages
- [ ] Every interactive element has clear hover/focus states

### Non-Functional Requirements
- [ ] Lighthouse Performance stays 95+
- [ ] No layout shifts (CLS < 0.1)
- [ ] All pages responsive at 375px, 768px, 1440px viewports
- [ ] No raw hex codes or magic numbers introduced
- [ ] All changes use existing design tokens or properly added new ones

### Quality Gates
- [ ] Visual review of every page in browser at 3 viewports
- [ ] Brand guidelines compliance (serif headings, warm palette, white space)
- [ ] Enterprise credibility test — would this hold up in a vendor shortlist?

## Key Files

### Design System
- `src/app/globals.css` — theme tokens and utilities
- `tailwind.config.ts` — brand object (keep in sync with globals.css)
- `src/components/sections/section.tsx` — base section wrapper

### Components to Modify
- `src/components/sections/page-hero.tsx` — heading size fix
- `src/components/sections/accordion-showcase.tsx` — expand indicators
- `src/components/sections/logo-bar.tsx` — logo upgrade
- `src/components/sections/testimonial-grid.tsx` — attribution fix
- `src/components/sections/split-content.tsx` — spacing review
- `src/components/sections/feature-grid.tsx` — spacing review
- `src/components/sections/trial-scenario.tsx` — spacing review

### Pages to Review (all)
- `src/app/page.tsx` — homepage
- `src/app/industries/*.tsx` — 7 industry pages
- `src/app/solutions/*.tsx` — 4 solutions pages
- `src/app/product/*.tsx` — 6+ product pages
- `src/app/security/*.tsx` — 3 security pages
- `src/app/company/page.tsx`
- `src/app/try-for-free/page.tsx`
- `src/app/find-out-more/page.tsx`
- `src/app/faq/page.tsx`

## Risk Analysis & Mitigation

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| Typography changes break existing layouts | Medium | High | Change tokens, verify every page in browser |
| Spacing changes create new inconsistencies | Medium | Medium | Use Section `spacing` prop, not ad-hoc overrides |
| Logo files missing or low quality | Medium | Medium | Fall back to improved text treatment |
| Mobile layouts break | Low | High | Check every page at 375px |
| Performance regression from images | Low | Medium | Use next/image, optimize sizes |

## Implementation Notes

- **Browser verification is mandatory** — use Playwright MCP or `npm run dev` + manual checking
- **Work page-by-page** — don't try to batch changes across all pages at once
- **Commit after each phase** — allows rollback if something breaks
- **Keep changes minimal** — this is polish, not a redesign. Don't introduce new components or patterns unless absolutely necessary
- Design tokens first, then components, then pages — cascade changes properly
