---
title: B2B Marketing Website Redesign and Design Polish
type: feat
status: completed
date: 2026-03-07
---

# B2B Marketing Website Redesign and Design Polish

## Enhancement Summary

**Deepened on:** 2026-03-07
**Sections enhanced:** Proposed Solution, Technical Considerations, System-Wide Impact

### Key Improvements
1. Added fluid typography and measure constraints for editorial feel.
2. Defined semantic and accessible accordion patterns (CSS grid transitions, ARIA).
3. Leveraged Tailwind v4 `@theme` and `@container` queries for better component design.

### New Considerations Discovered
- Accordions should avoid JS animation overhead in favor of `grid-template-rows: 1fr/0fr`.
- Micro vs. Macro whitespace needs distinct spacing token assignments to ensure deliberate "emptiness."

## Overview

A comprehensive design review and polish of the entire Ambr AI website to ensure it looks like the best B2B Marketing website in the world. The focus is on improving page layouts, design elements, typography, component spacing, and interactive affordances to drive B2B customer acquisition. The design must reflect "Quiet authority with warmth," feeling sophisticated enough for enterprise procurement while remaining human and accessible.

## Problem Statement / Motivation

The current website design has several issues that detract from its professionalism and effectiveness as a B2B acquisition tool:
- Headings are too large in certain contexts, harming visual hierarchy.
- Interactive elements (like expandable items in black boxes/accordions) lack clear affordances, confusing users.
- Component spacing is inconsistent ("a mess" in some areas), creating a disjointed user experience.
- As a bespoke AI solution for enterprise clients like Deloitte and Skyscanner, the brand must avoid looking "startup-y" or punching below its weight. The design needs to be flawless to signal trust and credibility.

## Proposed Solution

Conduct a meticulous, component-by-component and page-by-page visual review in the browser to refine the design system and its application.

Key improvements will include:
1. **Typography Tuning:** Adjust heading sizes (`font-heading`, Lora) to ensure they are elegant, readable, and appropriately scaled across viewports.
2. **Interactive Affordances:** Redesign expandable elements (e.g., in `detail-cards.tsx` or `faq-section.tsx`) to clearly indicate interactivity (e.g., hover states, clearer icons, background transitions).
3. **Spacing and Rhythm:** Standardize whitespace using the Tailwind spacing scale. Ensure `Section` components and grid layouts provide generous, deliberate breathing room without feeling disconnected.
4. **Color & Contrast:** Ensure the palette (off-whites, creams, warm beiges, muted accents) is applied consistently, avoiding stark blacks or neons unless explicitly used as a refined accent. Ensure "black box" elements fit the warm, organic aesthetic.

### Research Insights

**Best Practices (Typography & Whitespace):**
- **Fluid Typography Scale:** Implement a fluid type scale using `clamp()` for headings (Lora) to ensure graceful scaling between mobile and large desktop viewports.
- **Optimal Line Length:** Constrain body copy (Outfit) to 60-75 characters per line (`max-w-prose` or `max-w-[65ch]`) to dramatically improve readability.
- **Macro vs. Micro Whitespace:** Define strict, generous vertical spacing multipliers for macro whitespace (between sections, e.g., `py-24` or `py-32`). Use tighter micro whitespace (between related elements, e.g., `gap-4`).

**Interactive Components (Accordions/"Black Boxes"):**
- **Semantic HTML:** Use a `<button>` element for the trigger, never a `<div>` with an onClick handler.
- **Clear Affordances:** Use a recognizable toggle icon (plus/minus or chevron) on the right side. Animate rotation when expanded. The entire row must be clickable with adequate padding (e.g., `p-6`).
- **Performance-Friendly Animation:** Avoid JavaScript height calculations or Framer Motion for simple accordions. Use CSS Grid:
  ```css
  /* Closed state */
  display: grid; grid-template-rows: 0fr;
  /* Open state */
  display: grid; grid-template-rows: 1fr;
  /* Inner content wrapper */
  overflow: hidden;
  ```

## Technical Considerations

- **Visual Testing Required:** Code review is insufficient. All changes must be verified visually in the browser across mobile, tablet, and desktop viewports.
- **Tailwind v4 Configuration:** All spacing, color, and typography changes must be managed through `tailwind.config.ts` and the `@theme` directive in `src/app/globals.css`. Magic numbers are strictly prohibited.
- **Component Reusability:** Fixes to spacing and typography should be applied at the component level (e.g., `src/components/sections/section.tsx`, `hero.tsx`, `detail-cards.tsx`) to propagate site-wide.

### Research Insights

**Tailwind v4 Implementation:**
- **CSS-First Configuration:** Rely heavily on the `@theme` block in `globals.css` as the ultimate source of truth, aligning with Tailwind v4's CSS-first approach.
- **Container Queries:** Utilize native `@container` support (`@container`, `@md`, etc.) for highly reusable components (feature cards, detail cards) so they adapt to their parent container rather than the viewport.
- **Color Opacity:** Use Tailwind v4's simplified color opacity syntax (e.g., `bg-surface/90`) for subtle layering, fitting the soft, slightly romantic brand aesthetic.

## System-Wide Impact

- **Interaction graph**: Updating core components like `Section`, `Grid`, and typography utilities will affect every page on the site.
- **Error propagation**: N/A for CSS/Design changes, though extreme layout shifts could impact CLS scores.
- **State lifecycle risks**: Ensure any React state changes for expandable components (e.g., `expandedIndex` in `detail-cards.tsx`) do not introduce hydration mismatches or jank.
- **API surface parity**: Any updates to component props (e.g., adding sizing variants to headers) must be updated wherever those components are invoked.
- **Integration test scenarios**: Browser-based visual regression testing is critical.

### Research Insights

**Edge Cases & Accessibility:**
- **Focus Management:** Ensure focus states for interactive components (accordions) are highly visible for keyboard users (e.g., `focus-visible:ring-2 focus-visible:ring-accent`).
- **ARIA Attributes:** Implement strict `aria-expanded` and `aria-controls` for all toggleable "black box" elements to ensure screen reader compliance.

## Acceptance Criteria

- [x] All headings are scaled appropriately and maintain a sophisticated editorial feel.
- [x] Expandable components (FAQs, detail cards, "black boxes") have clear visual affordances indicating they can be clicked.
- [x] Component spacing is consistent, deliberate, and uses established Tailwind tokens.
- [x] The overall aesthetic aligns with the CLAUDE.md brand guidelines: warm, credible, human-first, and enterprise-ready.
- [x] No magic numbers or hardcoded hex values exist in the updated component files.
- [x] Visual hierarchy is clear and guides the user toward conversion actions.

## Success Metrics

- Improved visual consistency across the site.
- Positive qualitative feedback on design professionalism.
- (Post-launch) Increased conversion rate or time-on-site due to improved readability and UX.

## Dependencies & Risks

- **Risk:** "Blandness through excessive warmth" - ensuring the design remains distinctive while softening the tech aesthetic.
- **Dependency:** Requires local browser testing to accurately gauge whitespace and typography impact.

## Sources & References

- Brand Guidelines: `CLAUDE.md` (Pillars, Voice, Design & Content Rules)
- Core Config: `tailwind.config.ts`, `src/app/globals.css`
- Suspect Components: `src/components/sections/detail-cards.tsx`, `src/components/sections/faq-section.tsx`
