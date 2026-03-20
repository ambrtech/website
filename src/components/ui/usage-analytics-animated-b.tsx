'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { gsapRevealEase } from '@/lib/easing'
import { MockFrame } from '@/components/ui/mock-frame'

/* ─────────────────────────────────────────────────────
   Concept B: "Before & After Improvement Bars"

   Side-by-side horizontal bars that animate from a
   "before" state to an "after" state for each competency,
   with the delta called out. Feels like a team report
   card showing measurable growth.
   ───────────────────────────────────────────────────── */

const competencies = [
  { label: 'Active listening', before: 52, after: 82 },
  { label: 'Objection handling', before: 38, after: 68 },
  { label: 'Building rapport', before: 60, after: 92 },
  { label: 'Closing technique', before: 34, after: 59 },
  { label: 'Empathy and tone', before: 55, after: 85 },
]

export function UsageAnalyticsAnimatedB() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const el = containerRef.current
      if (!el) return

      const bg = el.querySelector('[data-bg]')
      const eyebrow = el.querySelector('[data-eyebrow]')
      const title = el.querySelector('[data-title]')
      const rows = el.querySelectorAll('[data-row]')
      const beforeBars = el.querySelectorAll('[data-before-bar]')
      const afterBars = el.querySelectorAll('[data-after-bar]')
      const deltas = el.querySelectorAll('[data-delta]')
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
      tl.set(rows, { opacity: 0, x: -8 })
      tl.set(beforeBars, { scaleX: 0 })
      tl.set(afterBars, { scaleX: 0 })
      tl.set(deltas, { opacity: 0, scale: 0.5 })
      tl.set(divider, { scaleX: 0 })
      tl.set(footer, { opacity: 0, y: 6 })

      /* Phase 1: Card */
      tl.to(bg, { opacity: 1, duration: 0.5, ease: 'power1.out' })

      /* Phase 2: Header */
      tl.to(eyebrow, { opacity: 1, y: 0, duration: 0.35 }, '-=0.2')
      tl.to(title, { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out' }, '-=0.15')

      /* Phase 3: Rows appear and "before" bars fill */
      rows.forEach((row, i) => {
        tl.to(row, { opacity: 1, x: 0, duration: 0.3 }, i === 0 ? '+=0.1' : '-=0.2')
        tl.to(beforeBars[i], { scaleX: 1, duration: 0.5, ease: 'power2.out' }, '-=0.2')
      })

      /* Phase 4: Brief pause, then "after" bars fill over them */
      tl.to({}, { duration: 0.4 })
      afterBars.forEach((bar, i) => {
        tl.to(bar, { scaleX: 1, duration: 0.6, ease: 'power2.out' }, i === 0 ? undefined : '-=0.45')
      })

      /* Phase 5: Delta badges pop in */
      deltas.forEach((d, i) => {
        tl.to(d, { opacity: 1, scale: 1, duration: 0.25, ease: 'back.out(2.5)' }, i === 0 ? '-=0.2' : '-=0.15')
      })

      /* Phase 6: Divider + footer */
      tl.to(divider, { scaleX: 1, duration: 0.5, ease: 'power2.inOut' })
      tl.to(footer, { opacity: 1, y: 0, duration: 0.4 }, '-=0.2')

      /* Phase 7: Hold */
      tl.to({}, { duration: 3 })

      /* Phase 8: Fade out */
      tl.to(
        el.querySelectorAll('[data-bg], [data-eyebrow], [data-title], [data-row], [data-before-bar], [data-after-bar], [data-delta], [data-divider], [data-footer]'),
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
            Team Performance
          </span>
        </div>

        {/* Title */}
        <h3
          data-title=""
          className="font-heading text-body text-dark tracking-heading leading-snug mb-5"
          style={{ opacity: 0 }}
        >
          Skills improvement this quarter
        </h3>

        {/* Competency rows */}
        <div className="space-y-3.5">
          {competencies.map((c) => (
            <div key={c.label} data-row="" style={{ opacity: 0 }}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-caption text-copy-mid">{c.label}</span>
                <span
                  data-delta=""
                  className="text-detail text-accent font-body-medium bg-accent-whisper px-1.5 py-0.5 rounded-brand-sm"
                  style={{ opacity: 0 }}
                >
                  +{c.after - c.before}%
                </span>
              </div>
              <div className="relative h-2 rounded-full bg-surface-alt overflow-hidden">
                {/* Before bar (muted) */}
                <div
                  data-before-bar=""
                  className="absolute inset-y-0 left-0 rounded-full bg-copy-faint/30"
                  style={{ width: `${c.before}%`, transformOrigin: 'left', transform: 'scaleX(0)' }}
                />
                {/* After bar (accent) */}
                <div
                  data-after-bar=""
                  className="absolute inset-y-0 left-0 rounded-full bg-accent-soft"
                  style={{ width: `${c.after}%`, transformOrigin: 'left', transform: 'scaleX(0)' }}
                />
              </div>
              <div className="flex justify-between mt-0.5">
                <span className="text-detail text-copy-faint">{c.before}% start</span>
                <span className="text-detail text-copy-mid">{c.after}% current</span>
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div
          data-divider=""
          className="h-[1.5px] bg-gradient-to-r from-accent-soft via-accent-soft/40 to-transparent mt-5 mb-3 origin-left"
          style={{ transform: 'scaleX(0)' }}
        />

        {/* Footer summary */}
        <div data-footer="" className="flex items-center gap-2" style={{ opacity: 0 }}>
          <span className="text-caption text-accent font-body-medium">89%</span>
          <span className="text-caption text-copy-light">of team members are improving</span>
        </div>
      </div>
    </MockFrame>
  )
}
