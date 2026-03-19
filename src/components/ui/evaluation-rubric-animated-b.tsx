'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { gsapRevealEase } from '@/lib/easing'

/* ─────────────────────────────────────────────────────
   Concept B: "The Editorial Scorecard"

   A newspaper-inspired grid where each competency
   occupies its own discrete card. Cards reveal in
   sequence with a grade badge and a one-line editorial
   verdict. Feels like reading a review, not a
   dashboard. Each card has its own personality.
   ───────────────────────────────────────────────────── */

export function EvaluationRubricAnimatedB() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const el = containerRef.current
      if (!el) return

      const bg = el.querySelector('[data-bg]')
      const eyebrow = el.querySelector('[data-eyebrow]')
      const subtitle = el.querySelector('[data-subtitle]')

      // Cards
      const cards = el.querySelectorAll('[data-card]')
      const grades = el.querySelectorAll('[data-grade]')
      const verdicts = el.querySelectorAll('[data-verdict]')

      // Divider + summary
      const divider = el.querySelector('[data-divider]')
      const summaryGrade = el.querySelector('[data-summary-grade]')
      const summaryText = el.querySelector('[data-summary-text]')

      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.8,
        defaults: { ease: gsapRevealEase },
      })

      /* Initial states */
      tl.set(bg, { opacity: 0 })
      tl.set(eyebrow, { opacity: 0, y: 6 })
      tl.set(subtitle, { opacity: 0, y: 6 })
      tl.set(cards, { opacity: 0, y: 12, scale: 0.97 })
      tl.set(grades, { opacity: 0, scale: 0 })
      tl.set(verdicts, { opacity: 0 })
      tl.set(divider, { scaleX: 0 })
      tl.set(summaryGrade, { opacity: 0, scale: 0.5 })
      tl.set(summaryText, { opacity: 0, y: 6 })

      /* Phase 1: Background */
      tl.to(bg, { opacity: 1, duration: 0.5, ease: 'power1.out' })

      /* Phase 2: Eyebrow + subtitle */
      tl.to(eyebrow, { opacity: 1, y: 0, duration: 0.35 })
      tl.to(subtitle, { opacity: 1, y: 0, duration: 0.35 }, '-=0.15')

      /* Phase 3: Cards appear in sequence */
      cards.forEach((card, i) => {
        tl.to(card, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.4,
          ease: 'power2.out',
        }, i === 0 ? undefined : '-=0.2')

        // Grade badge pops
        tl.to(grades[i], {
          opacity: 1,
          scale: 1,
          duration: 0.25,
          ease: 'back.out(3)',
        }, '-=0.15')

        // Verdict text fades
        tl.to(verdicts[i], {
          opacity: 1,
          duration: 0.25,
        }, '-=0.1')
      })

      /* Phase 4: Divider */
      tl.to(divider, { scaleX: 1, duration: 0.5, ease: 'power2.inOut' })

      /* Phase 5: Overall summary */
      tl.to(summaryGrade, {
        opacity: 1,
        scale: 1,
        duration: 0.35,
        ease: 'back.out(2)',
      })
      tl.to(summaryText, {
        opacity: 1,
        y: 0,
        duration: 0.4,
      }, '-=0.15')

      /* Phase 6: Hold */
      tl.to({}, { duration: 3.2 })

      /* Phase 7: Fade out */
      tl.to(el.children, {
        opacity: 0,
        duration: 0.9,
        ease: 'power1.inOut',
      })
    },
    { scope: containerRef }
  )

  const competencies = [
    {
      label: 'Objection Handling',
      grade: 'A',
      gradeColor: 'bg-accent text-surface-white',
      verdict: 'Addressed concerns with clarity and confidence',
    },
    {
      label: 'Product Knowledge',
      grade: 'A-',
      gradeColor: 'bg-accent-soft text-dark',
      verdict: 'Strong command, minor gaps on pricing tiers',
    },
    {
      label: 'Empathy & Tone',
      grade: 'A+',
      gradeColor: 'bg-accent text-surface-white',
      verdict: 'Warm, genuine, and consistently appropriate',
    },
    {
      label: 'Closing Methodology',
      grade: 'B+',
      gradeColor: 'bg-accent-tint text-dark',
      verdict: 'Good structure, could be more decisive',
    },
  ]

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
        <div data-eyebrow="" className="flex items-center gap-2 mb-1.5" style={{ opacity: 0 }}>
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span className="text-eyebrow-sm font-body-medium uppercase tracking-eyebrow text-accent">
            Evaluation Rubric
          </span>
        </div>

        {/* Subtitle */}
        <p
          data-subtitle=""
          className="text-caption text-copy-light mb-5"
          style={{ opacity: 0 }}
        >
          Sales discovery call competencies
        </p>

        {/* Competency grid — 2x2 */}
        <div className="grid grid-cols-2 gap-2.5 mb-5">
          {competencies.map((item, i) => (
            <div
              key={i}
              data-card=""
              className="bg-surface-white border border-border rounded-brand-sm px-3.5 py-3"
              style={{ opacity: 0 }}
            >
              <div className="flex items-start justify-between mb-2">
                <span className="text-caption font-body-medium text-dark leading-tight">
                  {item.label}
                </span>
                <span
                  data-grade=""
                  className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-detail font-body-medium ${item.gradeColor}`}
                  style={{ opacity: 0 }}
                >
                  {item.grade}
                </span>
              </div>
              <p
                data-verdict=""
                className="text-detail text-copy-mid leading-relaxed"
                style={{ opacity: 0 }}
              >
                {item.verdict}
              </p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div
          data-divider=""
          className="h-[1.5px] bg-gradient-to-r from-accent-soft via-accent-soft/40 to-transparent mb-4 origin-left"
          style={{ transform: 'scaleX(0)' }}
        />

        {/* Overall summary */}
        <div className="flex items-start gap-3">
          <span
            data-summary-grade=""
            className="shrink-0 w-10 h-10 rounded-full bg-accent text-surface-white flex items-center justify-center font-heading text-body tracking-heading"
            style={{ opacity: 0 }}
          >
            A
          </span>
          <div>
            <p
              data-summary-text=""
              className="text-caption text-copy-mid leading-relaxed"
              style={{ opacity: 0 }}
            >
              Strong performance across all competencies. Calibrated against your
              internal sales framework and methodology.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
