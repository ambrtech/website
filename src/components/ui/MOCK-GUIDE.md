# Animated Mock Component Guide

How to create, size, and place animated mock illustrations on the Ambr AI website.

## Architecture: Three layers

```
MockFrame          — inside each mock, controls height category
ProductScreenshot  — shared chrome wrapper (border, chrome bar, padding)
MockDisplay        — placement wrapper for density scaling (animated mocks only)
```

Each layer has a single responsibility. Don't mix them.

## Creating a new animated mock

### File naming
```
src/components/ui/{name}-animated-{a|b|c}.tsx
```
- `a`, `b`, `c` = three meaningfully different concept variants
- Export a named function: `{Name}Animated{A|B|C}`
- Example: `feedback-panel-animated-a.tsx` exports `FeedbackPanelAnimatedA`

### Template
```tsx
'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { gsapRevealEase } from '@/lib/easing'
import { MockFrame } from '@/components/ui/mock-frame'

export function MyMockAnimatedA() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const el = containerRef.current
    if (!el) return

    const tl = gsap.timeline({
      repeat: -1,
      repeatDelay: 0.8,
      defaults: { ease: gsapRevealEase },
    })

    // Query with data-* attributes
    const title = el.querySelector('[data-title]')

    // Set initial state
    tl.set(title, { opacity: 0, y: 10 })

    // Animate phases
    tl.to(title, { opacity: 1, y: 0, duration: 0.5 })

    // Hold for reading
    tl.to({}, { duration: 3 })

    // Fade out before loop
    tl.to(title, { opacity: 0, duration: 0.9, ease: 'power1.inOut' })
  }, { scope: containerRef })

  return (
    <MockFrame ref={containerRef} height="standard">
      <h3 data-title="" style={{ opacity: 0 }}>...</h3>
    </MockFrame>
  )
}
```

## Choosing a MockFrame height

| Category | Min height | Use when |
|---|---|---|
| `compact` | 280px | Short content — timelines, single notifications |
| `standard` | 360px | Most mocks — feedback panels, rubrics, builders, creators |
| `tall` | 420px | Dense content — dashboards, screensharing, presentations, LMS |
| `fill` | 420px fixed | Full-bleed panels using `absolute inset-0` — voice calls, dark UIs |

If your mock uses `absolute inset-0` on its main content panel, use `fill`.
Otherwise, pick based on content density. When in doubt, use `standard`.

### Extra layout classes

Some mocks need flexbox centering on the root container. Pass via `className`:

```tsx
<MockFrame ref={containerRef} height="standard" className="flex items-center justify-center">
```

## Placing mocks on pages

Always wrap animated mocks in `MockDisplay` (for density scaling) inside `ProductScreenshot` (for chrome):

```tsx
import { ProductScreenshot } from '@/components/sections/product-screenshot'
import { MockDisplay } from '@/components/ui/mock-display'
import { FeedbackPanelAnimatedA } from '@/components/ui/feedback-panel-animated-a'

<SplitContent
  visualContent={
    <ProductScreenshot tint>
      <MockDisplay>
        <FeedbackPanelAnimatedA />
      </MockDisplay>
    </ProductScreenshot>
  }
/>
```

### Authored width

`MockDisplay` defaults to `authoredWidth={470}` — this is the design width the mocks were created for. The wrapper scales content down when its container is narrower.

Override for special contexts:
```tsx
<MockDisplay authoredWidth={600}>  {/* hero-scale placement */}
<MockDisplay authoredWidth={350}>  {/* compact sidebar */}
```

470px is a sensible default, not a universal contract.

### Compact grid layouts

For three-up grids (e.g., customization page), use `ProductScreenshot`'s `compact` prop:

```tsx
<ProductScreenshot compact>
  <MockDisplay authoredWidth={350}>
    <AdminBuilderAnimatedA />
  </MockDisplay>
</ProductScreenshot>
```

## Animation rules

- **Cycle time**: 5-10 seconds per loop
- **Loop delay**: `repeatDelay: 0.8` (breathing room between cycles)
- **Easing**: `gsapRevealEase` from `@/lib/easing` as default
- **Initial state**: Set `style={{ opacity: 0 }}` on animated elements to prevent flash
- **End each loop**: Fade everything out before restart
- **No hydration mismatches**: Never use `Math.random()` or `Math.sin()` in render

## What NOT to do

- No responsive breakpoints (md:, lg:) inside mocks — they're fixed-density illustrations
- No container queries inside mocks — scaling is handled by MockDisplay
- No hex codes — use Tailwind brand tokens (`text-accent`, `bg-surface`, etc.)
- No `any` types, no `@ts-ignore`
- No `font-family` declarations — use `font-heading` (Lora) or `font-body` (Outfit)

## Reference mocks by category

| Category | Example file |
|---|---|
| `compact` | `deployment-timeline-animated-a.tsx` |
| `standard` | `feedback-panel-animated-a.tsx` |
| `tall` | `dashboard-animated-a.tsx` |
| `fill` | `voice-conversation-animated-a.tsx` |
