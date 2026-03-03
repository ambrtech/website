'use client'

import { useState, useEffect, useCallback } from 'react'

/* ─────────────────────────────────────────────────────
   Experiment definitions
   ───────────────────────────────────────────────────── */

interface Experiment {
  id: string
  name: string
  description: string
  group?: string
}

const experiments: Experiment[] = [
  {
    id: 'hairlines',
    name: 'Editorial Hairlines',
    description:
      'Clean accent-coloured bars above section eyebrow labels. Left border on testimonial blockquote.',
  },
  {
    id: 'hairlines-organic',
    name: 'Organic Hairlines',
    description:
      'Hand-drawn, slightly imperfect wavy lines above eyebrow labels. Implies analog warmth.',
  },
  {
    id: 'rough-edges',
    name: 'Rough Section Edges',
    description:
      'Irregular, torn-paper style borders between sections instead of clean hairline dividers.',
  },
  {
    id: 'ink-bleed',
    name: 'Ink Bleed Accents',
    description:
      'Soft, slightly blurred edges on accent-coloured elements — as if printed on absorbent paper.',
  },
  {
    id: 'cinematic',
    name: 'Cinematic — Blur',
    description:
      'Slower scroll reveals with blur-to-sharp transition. More dramatic and filmic.',
    group: 'motion',
  },
  {
    id: 'cinematic-slide',
    name: 'Cinematic — Editorial Slide',
    description:
      'Longer slide-up distances with staggered timing. Magazine editorial feel.',
    group: 'motion',
  },
  {
    id: 'cinematic-fade',
    name: 'Cinematic — Pure Fade',
    description:
      'Ultra-minimal opacity fades with no movement. Things simply appear.',
    group: 'motion',
  },
]

const STORAGE_KEY = 'texture-lab-active'

/* ─────────────────────────────────────────────────────
   Experiment CSS (injected at runtime)
   ───────────────────────────────────────────────────── */

const EXPERIMENT_CSS = `
  /* =============================================
     Editorial Hairlines (clean)
     ============================================= */

  html[data-exp-hairlines] [data-section="hero"] .tracking-eyebrow::before,
  html[data-exp-hairlines] [data-section="how-it-works"] .tracking-eyebrow::before,
  html[data-exp-hairlines] [data-section="impact"] .tracking-eyebrow::before,
  html[data-exp-hairlines] [data-section="why-ambr"] .tracking-eyebrow::before {
    content: '';
    display: block;
    width: 24px;
    height: 1.5px;
    background-color: var(--color-accent-soft);
    margin-bottom: 12px;
  }

  html[data-exp-hairlines] [data-section="testimonial"] blockquote {
    border-left: 2px solid var(--color-accent-soft);
    padding-left: 28px;
  }

  /* =============================================
     Organic Hairlines (hand-drawn)
     ============================================= */

  html[data-exp-hairlines-organic] [data-section="hero"] .tracking-eyebrow::before,
  html[data-exp-hairlines-organic] [data-section="how-it-works"] .tracking-eyebrow::before,
  html[data-exp-hairlines-organic] [data-section="impact"] .tracking-eyebrow::before,
  html[data-exp-hairlines-organic] [data-section="why-ambr"] .tracking-eyebrow::before {
    content: '';
    display: block;
    width: 32px;
    height: 6px;
    margin-bottom: 12px;
    background-image: url("data:image/svg+xml,%3Csvg width='32' height='6' viewBox='0 0 32 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 3.5C3 1.5 5.5 4.5 8 3C10.5 1.5 13 4.8 16 3C19 1.2 21.5 4.5 24 3C26.5 1.5 29 4 31 2.5' stroke='%23EAB99A' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E");
    background-size: contain;
    background-repeat: no-repeat;
  }

  html[data-exp-hairlines-organic] [data-section="testimonial"] blockquote {
    border-left: none;
    padding-left: 28px;
    background-image: url("data:image/svg+xml,%3Csvg width='3' height='60' viewBox='0 0 3 60' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.5 0C2.5 5 0.5 10 1.5 15C2.5 20 0.5 25 1.5 30C2.5 35 0.5 40 1.5 45C2.5 50 0.5 55 1.5 60' stroke='%23EAB99A' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E");
    background-repeat: repeat-y;
    background-position: left center;
    background-size: 3px auto;
  }

  /* =============================================
     Rough Section Edges
     ============================================= */

  html[data-exp-rough-edges] [data-section="statement"],
  html[data-exp-rough-edges] [data-section="testimonial"],
  html[data-exp-rough-edges] [data-section="security"] {
    border-top: none !important;
    position: relative;
  }

  html[data-exp-rough-edges] [data-section="statement"]::before,
  html[data-exp-rough-edges] [data-section="testimonial"]::before,
  html[data-exp-rough-edges] [data-section="security"]::before {
    content: '';
    position: absolute;
    top: -3px;
    left: 0;
    right: 0;
    height: 6px;
    pointer-events: none;
    z-index: 5;
    background-image: url("data:image/svg+xml,%3Csvg width='1200' height='6' viewBox='0 0 1200 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 3C20 1 40 5 60 3C80 1 100 4 120 3C140 2 160 5 180 3C200 1 220 4 240 3C260 2 280 5 300 3C320 1 340 5 360 3C380 1 400 4 420 3C440 2 460 5 480 3C500 1 520 4 540 3C560 2 580 5 600 3C620 1 640 5 660 3C680 1 700 4 720 3C740 2 760 5 780 3C800 1 820 4 840 3C860 2 880 5 900 3C920 1 940 5 960 3C980 1 1000 4 1020 3C1040 2 1060 5 1080 3C1100 1 1120 4 1140 3C1160 2 1180 5 1200 3' stroke='rgba(28,28,26,0.08)' stroke-width='1' stroke-linecap='round'/%3E%3C/svg%3E");
    background-size: 100% 100%;
  }

  /* =============================================
     Ink Bleed Accents
     ============================================= */

  html[data-exp-ink-bleed] [data-section] .text-accent,
  html[data-exp-ink-bleed] [data-section] em {
    text-shadow: 0 0 6px rgba(212, 114, 52, 0.25), 0 0 2px rgba(212, 114, 52, 0.15);
  }

  html[data-exp-ink-bleed] [data-section="testimonial"] blockquote {
    text-shadow: 0 0 1px rgba(28, 28, 26, 0.08);
  }

  html[data-exp-ink-bleed] .bg-accent,
  html[data-exp-ink-bleed] [data-section="cta"] a {
    box-shadow: 0 0 8px rgba(212, 114, 52, 0.3), 0 0 2px rgba(212, 114, 52, 0.15);
  }

  /* =============================================
     Cinematic — Blur (existing)
     ============================================= */

  html[data-exp-cinematic] .duration-slow {
    transition-duration: 1400ms !important;
    transition-property: opacity, transform, translate, filter !important;
  }

  html[data-exp-cinematic] .duration-reveal {
    transition-duration: 1800ms !important;
    transition-property: opacity, transform, translate, filter !important;
  }

  html[data-exp-cinematic] [data-section] .opacity-0 {
    filter: blur(4px);
  }

  html[data-exp-cinematic] [data-section] .opacity-100 {
    filter: blur(0px) !important;
  }

  /* =============================================
     Cinematic — Editorial Slide
     ============================================= */

  html[data-exp-cinematic-slide] .duration-slow {
    transition-duration: 1200ms !important;
    transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1) !important;
  }

  html[data-exp-cinematic-slide] .duration-reveal {
    transition-duration: 1600ms !important;
    transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1) !important;
  }

  html[data-exp-cinematic-slide] [data-section] .opacity-0 {
    transform: translateY(40px) !important;
  }

  html[data-exp-cinematic-slide] [data-section] .opacity-100 {
    transform: translateY(0) !important;
  }

  /* =============================================
     Cinematic — Pure Fade
     ============================================= */

  html[data-exp-cinematic-fade] .duration-slow {
    transition-duration: 1000ms !important;
    transition-property: opacity !important;
  }

  html[data-exp-cinematic-fade] .duration-reveal {
    transition-duration: 1400ms !important;
    transition-property: opacity !important;
  }

  html[data-exp-cinematic-fade] [data-section] .opacity-0 {
    transform: none !important;
  }

  html[data-exp-cinematic-fade] [data-section] .opacity-100 {
    transform: none !important;
  }
`

/* ─────────────────────────────────────────────────────
   Toggle switch
   ───────────────────────────────────────────────────── */

function Toggle({
  checked,
  onToggle,
}: {
  checked: boolean
  onToggle: () => void
}) {
  return (
    <button
      role="switch"
      aria-checked={checked}
      onClick={onToggle}
      className="relative shrink-0 cursor-pointer rounded-full transition-colors"
      style={{
        width: 36,
        height: 20,
        backgroundColor: checked
          ? 'var(--color-accent)'
          : 'var(--color-copy-faint)',
      }}
    >
      <span
        className="block rounded-full bg-surface-white shadow-sm transition-transform"
        style={{
          width: 16,
          height: 16,
          position: 'absolute',
          top: 2,
          left: 2,
          transform: checked ? 'translateX(16px)' : 'translateX(0)',
        }}
      />
    </button>
  )
}

/* ─────────────────────────────────────────────────────
   TexturePanel component
   ───────────────────────────────────────────────────── */

export function TexturePanel() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<Set<string>>(new Set())

  /* Restore persisted state from localStorage on mount */
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        const ids: string[] = JSON.parse(stored)
        const valid = ids.filter((id) => experiments.some((e) => e.id === id))
        if (valid.length > 0) setActive(new Set(valid))
      }
    } catch {
      /* ignore parse errors */
    }
  }, [])

  /* Inject experiment CSS on mount */
  useEffect(() => {
    const style = document.createElement('style')
    style.id = 'texture-experiment-css'
    style.textContent = EXPERIMENT_CSS
    document.head.appendChild(style)
    return () => {
      document.getElementById('texture-experiment-css')?.remove()
    }
  }, [])

  /* Sync data attributes with active experiments + persist */
  useEffect(() => {
    const root = document.documentElement
    experiments.forEach((exp) => {
      if (active.has(exp.id)) {
        root.setAttribute(`data-exp-${exp.id}`, '')
      } else {
        root.removeAttribute(`data-exp-${exp.id}`)
      }
    })

    /* Persist to localStorage */
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify([...active]))
    } catch {
      /* ignore storage errors */
    }
  }, [active])

  /* Clean up data attributes on unmount */
  useEffect(() => {
    return () => {
      experiments.forEach((exp) => {
        document.documentElement.removeAttribute(`data-exp-${exp.id}`)
      })
    }
  }, [])

  const toggle = useCallback((id: string) => {
    setActive((prev) => {
      const next = new Set(prev)

      if (next.has(id)) {
        next.delete(id)
      } else {
        /* If this experiment is in a mutual-exclusion group, turn off siblings */
        const exp = experiments.find((e) => e.id === id)
        if (exp?.group) {
          const siblings = experiments
            .filter((e) => e.group === exp.group && e.id !== id)
            .map((e) => e.id)
          siblings.forEach((s) => next.delete(s))
        }
        next.add(id)
      }

      return next
    })
  }, [])

  const reset = useCallback(() => {
    setActive(new Set())
  }, [])

  const count = active.size

  return (
    <div className="fixed bottom-6 right-6 z-[200]" data-texture-panel>
      {/* Closed state — pill button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 rounded-full bg-dark text-surface-white px-5 py-2.5 text-nav font-body-medium shadow-lg transition-all hover:bg-dark-mid hover:-translate-y-px"
        >
          <span
            className="inline-block w-2 h-2 rounded-full bg-accent"
          />
          Texture Lab
          {count > 0 && (
            <span className="inline-flex items-center justify-center min-w-[18px] h-[18px] rounded-full bg-accent text-[10px] font-body-medium text-surface-white px-1">
              {count}
            </span>
          )}
        </button>
      )}

      {/* Open state — panel */}
      {open && (
        <div
          className="rounded-brand border border-border bg-surface-white shadow-card"
          style={{ width: 380, maxHeight: 'calc(100vh - 120px)' }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-border">
            <div>
              <h3 className="font-heading text-base tracking-heading text-dark">
                Texture Lab
              </h3>
              <p className="text-caption text-copy-light mt-0.5">
                Toggle ideas to preview on the homepage
              </p>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="w-7 h-7 flex items-center justify-center rounded-full text-copy-light hover:text-dark hover:bg-surface-alt transition-colors text-sm"
            >
              &times;
            </button>
          </div>

          {/* Experiment list */}
          <div
            className="overflow-y-auto"
            style={{ maxHeight: 'calc(100vh - 240px)' }}
          >
            {experiments.map((exp) => (
              <div
                key={exp.id}
                className="flex items-start gap-4 px-5 py-3.5 border-b border-border last:border-b-0 cursor-pointer hover:bg-surface/50 transition-colors"
                onClick={() => toggle(exp.id)}
              >
                <div className="flex-1 min-w-0">
                  <p className="text-body-sm font-body-medium text-dark leading-snug">
                    {exp.name}
                  </p>
                  <p className="text-caption text-copy-light leading-relaxed mt-1">
                    {exp.description}
                  </p>
                </div>
                <div className="pt-0.5">
                  <Toggle
                    checked={active.has(exp.id)}
                    onToggle={() => toggle(exp.id)}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          {count > 0 && (
            <div className="px-5 py-3 border-t border-border">
              <button
                onClick={reset}
                className="text-caption text-copy-light hover:text-accent transition-colors"
              >
                Reset all ({count} active)
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
