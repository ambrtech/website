'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { gsapRevealEase } from '@/lib/easing'
import { MockFrame } from '@/components/ui/mock-frame'

/* ─────────────────────────────────────────────────────
   Concept A: "Strength & Gap Cards"

   Two stacked editorial sections — strengths on top with
   warm accent fill, gaps below with muted treatment. Cards
   appear one by one like a curated report assembling.
   ───────────────────────────────────────────────────── */

const strengths = [
  { label: 'Building rapport', score: 92 },
  { label: 'Active listening', score: 88 },
  { label: 'Empathy and tone', score: 85 },
]

const gaps = [
  { label: 'Handling objections', score: 52 },
  { label: 'Closing and next steps', score: 48 },
  { label: 'Navigating silence', score: 41 },
]

function ArrowUpIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="text-accent">
      <path d="M5 8V2M5 2L2.5 4.5M5 2L7.5 4.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ArrowDownIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="text-copy-faint">
      <path d="M5 2V8M5 8L2.5 5.5M5 8L7.5 5.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function LearningInsightsAnimatedA() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const el = containerRef.current
      if (!el) return

      const bg = el.querySelector('[data-bg]')
      const eyebrow = el.querySelector('[data-eyebrow]')
      const title = el.querySelector('[data-title]')
      const strengthLabel = el.querySelector('[data-strength-label]')
      const strengthCards = el.querySelectorAll('[data-strength]')
      const strengthBars = el.querySelectorAll('[data-strength-bar]')
      const gapLabel = el.querySelector('[data-gap-label]')
      const gapCards = el.querySelectorAll('[data-gap]')
      const gapBars = el.querySelectorAll('[data-gap-bar]')
      const divider = el.querySelector('[data-divider]')
      const footer = el.querySelector('[data-footer]')

      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.8,
        defaults: { ease: gsapRevealEase },
      })

      /* Initial states */
      tl.set(bg, { opacity: 0 })
      tl.set(eyebrow, { opacity: 0, y: 6 })
      tl.set(title, { opacity: 0, y: 10 })
      tl.set(strengthLabel, { opacity: 0, y: 4 })
      tl.set(strengthCards, { opacity: 0, y: 8 })
      tl.set(strengthBars, { scaleX: 0 })
      tl.set(gapLabel, { opacity: 0, y: 4 })
      tl.set(gapCards, { opacity: 0, y: 8 })
      tl.set(gapBars, { scaleX: 0 })
      tl.set(divider, { scaleX: 0 })
      tl.set(footer, { opacity: 0, y: 6 })

      /* Phase 1: Card */
      tl.to(bg, { opacity: 1, duration: 0.5, ease: 'power1.out' })

      /* Phase 2: Header */
      tl.to(eyebrow, { opacity: 1, y: 0, duration: 0.35 }, '-=0.2')
      tl.to(title, { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out' }, '-=0.15')

      /* Phase 3: Strengths section */
      tl.to(strengthLabel, { opacity: 1, y: 0, duration: 0.3 })
      strengthCards.forEach((card, i) => {
        tl.to(card, { opacity: 1, y: 0, duration: 0.3 }, i === 0 ? '-=0.1' : '-=0.15')
        tl.to(strengthBars[i], { scaleX: 1, duration: 0.5, ease: 'power2.out' }, '-=0.2')
      })

      /* Phase 4: Divider */
      tl.to(divider, { scaleX: 1, duration: 0.4, ease: 'power2.inOut' })

      /* Phase 5: Gaps section */
      tl.to(gapLabel, { opacity: 1, y: 0, duration: 0.3 })
      gapCards.forEach((card, i) => {
        tl.to(card, { opacity: 1, y: 0, duration: 0.3 }, i === 0 ? '-=0.1' : '-=0.15')
        tl.to(gapBars[i], { scaleX: 1, duration: 0.5, ease: 'power2.out' }, '-=0.2')
      })

      /* Phase 6: Footer */
      tl.to(footer, { opacity: 1, y: 0, duration: 0.4 })

      /* Phase 7: Hold */
      tl.to({}, { duration: 3 })

      /* Phase 8: Fade out */
      tl.to(
        el.querySelectorAll('[data-bg], [data-eyebrow], [data-title], [data-strength-label], [data-strength], [data-strength-bar], [data-gap-label], [data-gap], [data-gap-bar], [data-divider], [data-footer]'),
        { opacity: 0, duration: 0.9, ease: 'power1.inOut' }
      )
    },
    { scope: containerRef }
  )

  return (
    <MockFrame ref={containerRef} height="tall">
      {/* Background */}
      <div
        data-bg=""
        className="absolute inset-0 rounded-brand bg-accent-whisper"
        style={{ opacity: 0 }}
      />

      <div className="relative px-6 py-6">
        {/* Eyebrow */}
        <div data-eyebrow="" className="flex items-center gap-2 mb-2" style={{ opacity: 0 }}>
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span className="text-eyebrow-sm font-body-medium uppercase tracking-eyebrow text-accent">
            Learning Insights
          </span>
        </div>

        {/* Title */}
        <h3
          data-title=""
          className="font-heading text-body text-dark tracking-heading leading-snug mb-5"
          style={{ opacity: 0 }}
        >
          Team strengths and development areas
        </h3>

        {/* Strengths */}
        <p
          data-strength-label=""
          className="text-caption font-body-medium text-copy-mid mb-2.5 flex items-center gap-2"
          style={{ opacity: 0 }}
        >
          <ArrowUpIcon />
          Strengths
        </p>
        <div className="space-y-2 mb-4">
          {strengths.map((s) => (
            <div key={s.label} data-strength="" style={{ opacity: 0 }}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-caption text-copy-mid">{s.label}</span>
                <span className="text-caption text-accent font-body-medium">{s.score}%</span>
              </div>
              <div className="h-1.5 rounded-full bg-surface-alt overflow-hidden">
                <div
                  data-strength-bar=""
                  className="h-full rounded-full bg-accent-soft"
                  style={{ width: `${s.score}%`, transformOrigin: 'left', transform: 'scaleX(0)' }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div
          data-divider=""
          className="h-[1.5px] bg-gradient-to-r from-accent-soft via-accent-soft/40 to-transparent mb-4 origin-left"
          style={{ transform: 'scaleX(0)' }}
        />

        {/* Gaps */}
        <p
          data-gap-label=""
          className="text-caption font-body-medium text-copy-mid mb-2.5 flex items-center gap-2"
          style={{ opacity: 0 }}
        >
          <ArrowDownIcon />
          Areas for development
        </p>
        <div className="space-y-2 mb-4">
          {gaps.map((g) => (
            <div key={g.label} data-gap="" style={{ opacity: 0 }}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-caption text-copy-mid">{g.label}</span>
                <span className="text-caption text-copy-light">{g.score}%</span>
              </div>
              <div className="h-1.5 rounded-full bg-surface-alt overflow-hidden">
                <div
                  data-gap-bar=""
                  className="h-full rounded-full bg-copy-faint/40"
                  style={{ width: `${g.score}%`, transformOrigin: 'left', transform: 'scaleX(0)' }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div data-footer="" className="flex items-center gap-2" style={{ opacity: 0 }}>
          <span className="text-caption text-accent font-body-medium">+12%</span>
          <span className="text-caption text-copy-light">overall improvement since last quarter</span>
        </div>
      </div>
    </MockFrame>
  )
}
