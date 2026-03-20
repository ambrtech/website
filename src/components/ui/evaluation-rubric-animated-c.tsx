'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { gsapRevealEase } from '@/lib/easing'
import { MockFrame } from '@/components/ui/mock-frame'

/* ─────────────────────────────────────────────────────
   Concept C: "The Growth Map"

   A horizontal spectrum from "Developing" to "Mastery".
   Each competency is a dot that animates into position
   along the axis, accompanied by its label. The
   metaphor is a landscape of capability — where you
   stand, and where you're heading. Feels like a
   curated editorial chart, not a data dump.
   ───────────────────────────────────────────────────── */

export function EvaluationRubricAnimatedC() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const el = containerRef.current
      if (!el) return

      const bg = el.querySelector('[data-bg]')
      const eyebrow = el.querySelector('[data-eyebrow]')

      // Axis
      const axisLine = el.querySelector('[data-axis]')
      const axisLabels = el.querySelectorAll('[data-axis-label]')

      // Competency items (dot + label combos)
      const dots = el.querySelectorAll('[data-dot]')
      const dotLabels = el.querySelectorAll('[data-dot-label]')
      const connectors = el.querySelectorAll('[data-connector]')

      // Footer insight
      const footerDivider = el.querySelector('[data-footer-divider]')
      const footerText = el.querySelector('[data-footer-text]')

      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.8,
        defaults: { ease: gsapRevealEase },
      })

      /* Initial states */
      tl.set(bg, { opacity: 0 })
      tl.set(eyebrow, { opacity: 0, y: 6 })
      tl.set(axisLine, { scaleX: 0 })
      tl.set(axisLabels, { opacity: 0 })
      tl.set(dots, { opacity: 0, scale: 0, xPercent: -50 })
      tl.set(dotLabels, { opacity: 0, y: 6 })
      tl.set(connectors, { scaleY: 0 })
      tl.set(footerDivider, { scaleX: 0 })
      tl.set(footerText, { opacity: 0, y: 6 })

      /* Phase 1: Background */
      tl.to(bg, { opacity: 1, duration: 0.5, ease: 'power1.out' })

      /* Phase 2: Eyebrow */
      tl.to(eyebrow, { opacity: 1, y: 0, duration: 0.35 })

      /* Phase 3: Axis draws across */
      tl.to(axisLine, {
        scaleX: 1,
        duration: 0.7,
        ease: 'power2.inOut',
      })

      /* Phase 4: Axis labels appear */
      tl.to(axisLabels, {
        opacity: 1,
        duration: 0.3,
        stagger: 0.1,
      }, '-=0.2')

      /* Phase 5: Dots land on the axis, one by one */
      dots.forEach((dot, i) => {
        // Connector drops down from dot position
        tl.to(connectors[i], {
          scaleY: 1,
          duration: 0.25,
          ease: 'power2.out',
        }, i === 0 ? undefined : '-=0.1')

        // Dot pops into place
        tl.to(dot, {
          opacity: 1,
          scale: 1,
          duration: 0.3,
          ease: 'back.out(3)',
        }, '-=0.15')

        // Label fades in below
        tl.to(dotLabels[i], {
          opacity: 1,
          y: 0,
          duration: 0.3,
        }, '-=0.15')
      })

      /* Phase 6: Footer */
      tl.to(footerDivider, {
        scaleX: 1,
        duration: 0.5,
        ease: 'power2.inOut',
      })
      tl.to(footerText, {
        opacity: 1,
        y: 0,
        duration: 0.4,
      }, '-=0.2')

      /* Phase 7: Hold */
      tl.to({}, { duration: 3.2 })

      /* Phase 8: Fade out */
      tl.to(el.children, {
        opacity: 0,
        duration: 0.9,
        ease: 'power1.inOut',
      })
    },
    { scope: containerRef }
  )

  /* Competencies positioned along 0-100% axis. Score maps to position. */
  const competencies = [
    { label: 'Closing', score: 85 },
    { label: 'Product Knowledge', score: 88 },
    { label: 'Objection Handling', score: 92 },
    { label: 'Empathy & Tone', score: 95 },
  ]

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
        <div data-eyebrow="" className="flex items-center gap-2 mb-6" style={{ opacity: 0 }}>
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span className="text-eyebrow-sm font-body-medium uppercase tracking-eyebrow text-accent">
            Evaluation Rubric
          </span>
        </div>

        {/* Spectrum chart area */}
        <div className="relative pt-2 pb-2">
          {/* Competency labels — positioned above the axis */}
          <div className="space-y-8 mb-8">
            {competencies.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                {/* Label */}
                <div
                  data-dot-label=""
                  className="w-[110px] shrink-0 text-right"
                  style={{ opacity: 0 }}
                >
                  <span className="text-caption font-body-medium text-dark leading-tight">
                    {item.label}
                  </span>
                </div>

                {/* Connector line */}
                <div
                  data-connector=""
                  className="w-[1.5px] h-3 bg-accent-soft/50 origin-top shrink-0"
                  style={{ transform: 'scaleY(0)' }}
                />

                {/* Dot positioned along a bar */}
                <div className="flex-1 relative h-3 flex items-center">
                  {/* Track */}
                  <div className="absolute inset-x-0 h-[2px] bg-surface-alt rounded-full" />
                  {/* Filled portion */}
                  <div
                    className="absolute left-0 h-[2px] bg-accent-soft/60 rounded-full"
                    style={{ width: `${item.score}%` }}
                  />
                  {/* Dot */}
                  <div
                    data-dot=""
                    className="absolute w-3.5 h-3.5 rounded-full bg-accent border-2 border-accent-whisper shadow-sm"
                    style={{
                      left: `${item.score}%`,
                      opacity: 0,
                    }}
                  />
                </div>

                {/* Score */}
                <span className="text-caption text-accent font-body-medium w-8 text-right shrink-0">
                  {item.score}%
                </span>
              </div>
            ))}
          </div>

          {/* Axis line with labels */}
          <div className="relative">
            <div
              data-axis=""
              className="h-[1.5px] bg-gradient-to-r from-accent-soft/20 via-accent-soft to-accent origin-left"
              style={{ transform: 'scaleX(0)' }}
            />
            <div className="flex justify-between mt-2">
              <span
                data-axis-label=""
                className="text-detail text-copy-light"
                style={{ opacity: 0 }}
              >
                Developing
              </span>
              <span
                data-axis-label=""
                className="text-detail text-copy-light"
                style={{ opacity: 0 }}
              >
                Proficient
              </span>
              <span
                data-axis-label=""
                className="text-detail text-accent font-body-medium"
                style={{ opacity: 0 }}
              >
                Mastery
              </span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          data-footer-divider=""
          className="h-[1.5px] bg-gradient-to-r from-accent-soft via-accent-soft/40 to-transparent mt-5 mb-4 origin-left"
          style={{ transform: 'scaleX(0)' }}
        />
        <p
          data-footer-text=""
          className="text-caption text-copy-light leading-relaxed"
          style={{ opacity: 0 }}
        >
          Calibrated to your organization&apos;s competency framework and language
        </p>
      </div>
    </MockFrame>
  )
}
