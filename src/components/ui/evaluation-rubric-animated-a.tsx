'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { gsapRevealEase } from '@/lib/easing'
import { MockFrame } from '@/components/ui/mock-frame'

/* ─────────────────────────────────────────────────────
   Concept A: "The Competency Dial"

   A single central radial gauge that fills to reveal
   the overall score, flanked by individual competency
   rows with animated fill bars. The dial dominates —
   a confident, at-a-glance summary. Individual
   competencies reveal below in sequence.
   ───────────────────────────────────────────────────── */

export function EvaluationRubricAnimatedA() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const el = containerRef.current
      if (!el) return

      const bg = el.querySelector('[data-bg]')
      const eyebrow = el.querySelector('[data-eyebrow]')

      // Central dial
      const dialTrack = el.querySelector('[data-dial-track]')
      const dialArc = el.querySelector('[data-dial-arc]')
      const dialScore = el.querySelector('[data-dial-score]')
      const dialLabel = el.querySelector('[data-dial-label]')

      // Competency rows
      const rows = el.querySelectorAll('[data-row]')
      const bars = el.querySelectorAll('[data-bar]')
      const scores = el.querySelectorAll('[data-score]')

      // Footer
      const footer = el.querySelector('[data-footer]')

      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.8,
        defaults: { ease: gsapRevealEase },
      })

      /* Initial states */
      tl.set(bg, { opacity: 0 })
      tl.set(eyebrow, { opacity: 0, y: 6 })
      tl.set(dialTrack, { opacity: 0, scale: 0.8 })
      tl.set(dialArc, { opacity: 0 })
      tl.set([dialScore, dialLabel], { opacity: 0, scale: 0.5 })
      tl.set(rows, { opacity: 0, y: 8 })
      tl.set(bars, { scaleX: 0 })
      tl.set(scores, { opacity: 0 })
      tl.set(footer, { opacity: 0, y: 6 })

      /* Phase 1: Background */
      tl.to(bg, { opacity: 1, duration: 0.5, ease: 'power1.out' })

      /* Phase 2: Eyebrow */
      tl.to(eyebrow, { opacity: 1, y: 0, duration: 0.35 })

      /* Phase 3: Central dial appears */
      tl.to(dialTrack, { opacity: 1, scale: 1, duration: 0.5, ease: 'power2.out' })

      /* Phase 4: Arc fills — animated via strokeDasharray */
      const radius = 52
      const circumference = 2 * Math.PI * radius
      const overallScore = 0.9 // 90%

      tl.to(dialArc, { opacity: 1, duration: 0.05 })
      tl.fromTo(
        dialArc,
        { strokeDasharray: `0 ${circumference}` },
        {
          strokeDasharray: `${overallScore * circumference} ${circumference}`,
          duration: 1.2,
          ease: 'power2.out',
        },
        '-=0.05'
      )

      /* Phase 5: Score number pops in */
      tl.to(dialScore, {
        opacity: 1,
        scale: 1,
        duration: 0.4,
        ease: 'back.out(2)',
      }, '-=0.6')
      tl.to(dialLabel, {
        opacity: 1,
        scale: 1,
        duration: 0.3,
      }, '-=0.2')

      /* Phase 6: Competency rows stagger */
      const barWidths = [92, 88, 95, 85]
      rows.forEach((row, i) => {
        tl.to(row, {
          opacity: 1,
          y: 0,
          duration: 0.3,
        }, i === 0 ? undefined : '-=0.15')
        tl.to(bars[i], {
          scaleX: 1,
          duration: 0.6,
          ease: 'power2.out',
        }, '-=0.2')
        tl.to(scores[i], {
          opacity: 1,
          duration: 0.2,
        }, `-=${0.6 - barWidths[i] / 200}`)
      })

      /* Phase 7: Footer */
      tl.to(footer, { opacity: 1, y: 0, duration: 0.4 })

      /* Phase 8: Hold */
      tl.to({}, { duration: 3 })

      /* Phase 9: Fade out */
      tl.to(el.children, {
        opacity: 0,
        duration: 0.9,
        ease: 'power1.inOut',
      })
    },
    { scope: containerRef }
  )

  const competencies = [
    { label: 'Objection Handling', score: 92 },
    { label: 'Product Knowledge', score: 88 },
    { label: 'Empathy & Tone', score: 95 },
    { label: 'Closing Methodology', score: 85 },
  ]

  const circumference = 2 * Math.PI * 52

  return (
    <MockFrame ref={containerRef} height="standard">
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
            Evaluation Rubric
          </span>
        </div>

        {/* Central dial */}
        <div className="flex justify-center mb-6">
          <div className="relative w-[120px] h-[120px]">
            <svg
              data-dial-track=""
              viewBox="0 0 120 120"
              className="w-full h-full"
              style={{ opacity: 0 }}
            >
              <circle
                cx="60"
                cy="60"
                r="52"
                fill="none"
                stroke="currentColor"
                strokeWidth="6"
                className="text-accent-soft/25"
              />
            </svg>
            <svg
              viewBox="0 0 120 120"
              className="absolute inset-0 w-full h-full"
            >
              <circle
                data-dial-arc=""
                cx="60"
                cy="60"
                r="52"
                fill="none"
                stroke="currentColor"
                strokeWidth="6"
                strokeDasharray={`0 ${circumference}`}
                strokeLinecap="round"
                className="text-accent"
                style={{
                  transformOrigin: 'center',
                  transform: 'rotate(-90deg)',
                  opacity: 0,
                }}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span
                data-dial-score=""
                className="font-heading text-section text-dark tracking-heading leading-none"
                style={{ opacity: 0 }}
              >
                90
              </span>
              <span
                data-dial-label=""
                className="text-detail text-copy-light mt-1"
                style={{ opacity: 0 }}
              >
                overall
              </span>
            </div>
          </div>
        </div>

        {/* Competency rows */}
        <div className="space-y-3.5">
          {competencies.map((item, i) => (
            <div key={i} data-row="" style={{ opacity: 0 }}>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-caption font-body-medium text-copy-mid">
                  {item.label}
                </span>
                <span
                  data-score=""
                  className="text-caption text-accent font-body-medium"
                  style={{ opacity: 0 }}
                >
                  {item.score}%
                </span>
              </div>
              <div className="h-1.5 rounded-full bg-surface-alt overflow-hidden">
                <div
                  data-bar=""
                  className="h-full rounded-full bg-accent-soft origin-left"
                  style={{ width: `${item.score}%`, transform: 'scaleX(0)' }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div data-footer="" className="mt-5 pt-4 border-t border-border" style={{ opacity: 0 }}>
          <p className="text-caption text-copy-light leading-relaxed">
            Scored against your internal sales competency framework
          </p>
        </div>
      </div>
    </MockFrame>
  )
}
