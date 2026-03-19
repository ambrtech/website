'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { gsapRevealEase } from '@/lib/easing'

/* ─────────────────────────────────────────────────────
   Concept C: "The Reflective Summary"

   A calm, letter-like editorial layout. Two compact
   metric pills for talk-listen and pace sit at the top
   like postmarks. Below, a warm serif coaching summary
   unfolds line by line — the qualitative feedback
   distilled to its essence, presented as editorial
   prose. Feels like receiving a thoughtful letter from
   a coach, not reading a dashboard.
   ───────────────────────────────────────────────────── */

export function FeedbackPanelAnimatedC() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const el = containerRef.current
      if (!el) return

      const bg = el.querySelector('[data-bg]')
      const eyebrow = el.querySelector('[data-eyebrow]')

      // Metric pills
      const pill1 = el.querySelector('[data-pill-1]')
      const pill2 = el.querySelector('[data-pill-2]')

      // Divider
      const divider = el.querySelector('[data-divider]')

      // Editorial summary lines
      const summaryLines = el.querySelectorAll('[data-summary-line]')

      // Strengths and growth
      const strengthLabel = el.querySelector('[data-strength-label]')
      const strengthItems = el.querySelectorAll('[data-strength]')
      const growthLabel = el.querySelector('[data-growth-label]')
      const growthItems = el.querySelectorAll('[data-growth]')

      // Bottom accent line
      const closingLine = el.querySelector('[data-closing]')

      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.8,
        defaults: { ease: gsapRevealEase },
      })

      /* Initial states */
      tl.set(bg, { opacity: 0 })
      tl.set(eyebrow, { opacity: 0, y: 6 })
      tl.set([pill1, pill2], { opacity: 0, scale: 0.85, y: 4 })
      tl.set(divider, { scaleX: 0 })
      tl.set(summaryLines, { opacity: 0, y: 8 })
      tl.set(strengthLabel, { opacity: 0 })
      tl.set(strengthItems, { opacity: 0, x: -8 })
      tl.set(growthLabel, { opacity: 0 })
      tl.set(growthItems, { opacity: 0, x: -8 })
      tl.set(closingLine, { scaleX: 0 })

      /* Phase 1: Background */
      tl.to(bg, { opacity: 1, duration: 0.5, ease: 'power1.out' })

      /* Phase 2: Eyebrow */
      tl.to(eyebrow, { opacity: 1, y: 0, duration: 0.35 })

      /* Phase 3: Metric pills pop in like postmarks */
      tl.to(pill1, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.4,
        ease: 'back.out(2)',
      })
      tl.to(pill2, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.4,
        ease: 'back.out(2)',
      }, '-=0.25')

      /* Phase 4: Divider draws */
      tl.to(divider, { scaleX: 1, duration: 0.5, ease: 'power2.inOut' })

      /* Phase 5: Editorial summary reveals line by line */
      summaryLines.forEach((line, i) => {
        tl.to(line, {
          opacity: 1,
          y: 0,
          duration: 0.45,
        }, i === 0 ? undefined : '-=0.25')
      })

      /* Phase 6: Strengths */
      tl.to(strengthLabel, { opacity: 1, duration: 0.25 })
      strengthItems.forEach((item, i) => {
        tl.to(item, {
          opacity: 1,
          x: 0,
          duration: 0.3,
        }, i === 0 ? '-=0.1' : '-=0.15')
      })

      /* Phase 7: Growth areas */
      tl.to(growthLabel, { opacity: 1, duration: 0.25 }, '-=0.1')
      growthItems.forEach((item, i) => {
        tl.to(item, {
          opacity: 1,
          x: 0,
          duration: 0.3,
        }, i === 0 ? '-=0.1' : '-=0.15')
      })

      /* Phase 8: Closing accent line */
      tl.to(closingLine, {
        scaleX: 1,
        duration: 0.6,
        ease: 'power2.inOut',
      })

      /* Phase 9: Hold */
      tl.to({}, { duration: 3 })

      /* Phase 10: Fade out */
      tl.to(el.children, {
        opacity: 0,
        duration: 0.9,
        ease: 'power1.inOut',
      })
    },
    { scope: containerRef }
  )

  return (
    <div ref={containerRef} className="relative min-h-[420px]">
      {/* Background */}
      <div
        data-bg=""
        className="absolute inset-0 rounded-brand bg-accent-whisper"
        style={{ opacity: 0 }}
      />

      <div className="relative px-6 py-7 md:px-8">
        {/* Eyebrow */}
        <div data-eyebrow="" className="flex items-center gap-2 mb-5" style={{ opacity: 0 }}>
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span className="text-eyebrow-sm font-body-medium uppercase tracking-eyebrow text-accent">
            Your Feedback
          </span>
        </div>

        {/* Metric pills */}
        <div className="flex flex-wrap gap-3 mb-5">
          <div
            data-pill-1=""
            className="flex items-center gap-2 bg-surface-white border border-border rounded-full px-3.5 py-1.5"
            style={{ opacity: 0 }}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-accent" />
            <span className="text-caption font-body-medium text-dark">36% talk</span>
            <span className="text-detail text-copy-light">/</span>
            <span className="text-caption text-copy-mid">64% listen</span>
          </div>

          <div
            data-pill-2=""
            className="flex items-center gap-2 bg-surface-white border border-border rounded-full px-3.5 py-1.5"
            style={{ opacity: 0 }}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-accent-soft" />
            <span className="text-caption font-body-medium text-dark">105</span>
            <span className="text-caption text-copy-mid">wpm</span>
          </div>
        </div>

        {/* Divider */}
        <div
          data-divider=""
          className="h-[1.5px] bg-gradient-to-r from-accent-soft via-accent-soft/40 to-transparent mb-5 origin-left"
          style={{ transform: 'scaleX(0)' }}
        />

        {/* Editorial summary */}
        <div className="mb-6">
          <p
            data-summary-line=""
            className="font-heading text-body text-dark tracking-heading leading-[1.6] mb-1"
            style={{ opacity: 0 }}
          >
            You navigated this conversation with empathy,
          </p>
          <p
            data-summary-line=""
            className="font-heading text-body text-dark tracking-heading leading-[1.6] mb-1"
            style={{ opacity: 0 }}
          >
            opening with genuine acknowledgement and
          </p>
          <p
            data-summary-line=""
            className="font-heading text-body text-dark tracking-heading leading-[1.6]"
            style={{ opacity: 0 }}
          >
            keeping a measured pace throughout.
          </p>
        </div>

        {/* Two-column: Strengths + Growth */}
        <div className="grid grid-cols-2 gap-5">
          {/* Strengths */}
          <div>
            <p
              data-strength-label=""
              className="text-detail font-body-medium text-copy-light uppercase tracking-eyebrow mb-2.5"
              style={{ opacity: 0 }}
            >
              Strengths
            </p>
            <div className="space-y-2">
              {['Active listening', 'Empathic framing'].map((item, i) => (
                <div
                  key={i}
                  data-strength=""
                  className="flex items-center gap-2"
                  style={{ opacity: 0 }}
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="text-accent shrink-0">
                    <path d="M2 5.5L4 7.5L8 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-caption text-copy-mid">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Growth */}
          <div>
            <p
              data-growth-label=""
              className="text-detail font-body-medium text-copy-light uppercase tracking-eyebrow mb-2.5"
              style={{ opacity: 0 }}
            >
              Growth Areas
            </p>
            <div className="space-y-2">
              {['Pause after responses', 'Clearer next steps'].map((item, i) => (
                <div
                  key={i}
                  data-growth=""
                  className="flex items-center gap-2"
                  style={{ opacity: 0 }}
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="text-accent-soft shrink-0">
                    <circle cx="5" cy="5" r="3.5" stroke="currentColor" strokeWidth="1" />
                  </svg>
                  <span className="text-caption text-copy-mid">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Closing accent line */}
        <div
          data-closing=""
          className="h-[1.5px] w-16 bg-accent-soft mt-5 origin-left"
          style={{ transform: 'scaleX(0)' }}
        />
      </div>
    </div>
  )
}
