'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { gsapRevealEase } from '@/lib/easing'
import { MockFrame } from '@/components/ui/mock-frame'

/* ─────────────────────────────────────────────────────
   Concept A: "Competency Radar"

   A radar/spider chart that fills outward to show team
   competency levels across multiple skills, with a
   before/after overlay showing improvement over time.
   Focus: the team is getting better at specific things.
   ───────────────────────────────────────────────────── */

const skills = [
  { label: 'Active listening', before: 0.48, after: 0.82 },
  { label: 'Objection handling', before: 0.35, after: 0.68 },
  { label: 'Empathy', before: 0.62, after: 0.85 },
  { label: 'Closing', before: 0.30, after: 0.59 },
  { label: 'Building rapport', before: 0.55, after: 0.92 },
  { label: 'Tone control', before: 0.42, after: 0.76 },
]

function polarToXY(angle: number, radius: number, cx: number, cy: number) {
  const rad = (angle - 90) * (Math.PI / 180)
  return { x: cx + radius * Math.cos(rad), y: cy + radius * Math.sin(rad) }
}

function makePolygonPoints(values: number[], maxR: number, cx: number, cy: number) {
  const step = 360 / values.length
  return values
    .map((v, i) => {
      const { x, y } = polarToXY(i * step, v * maxR, cx, cy)
      return `${x},${y}`
    })
    .join(' ')
}

function makeGridPolygon(level: number, count: number, maxR: number, cx: number, cy: number) {
  const step = 360 / count
  return Array.from({ length: count })
    .map((_, i) => {
      const { x, y } = polarToXY(i * step, level * maxR, cx, cy)
      return `${x},${y}`
    })
    .join(' ')
}

export function UsageAnalyticsAnimatedA() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const el = containerRef.current
      if (!el) return

      const bg = el.querySelector('[data-bg]')
      const eyebrow = el.querySelector('[data-eyebrow]')
      const title = el.querySelector('[data-title]')
      const gridLines = el.querySelectorAll('[data-grid]')
      const axisLines = el.querySelectorAll('[data-axis]')
      const beforePoly = el.querySelector('[data-before]')
      const afterPoly = el.querySelector('[data-after]')
      const labels = el.querySelectorAll('[data-skill-label]')
      const legend = el.querySelector('[data-legend]')
      const summary = el.querySelector('[data-summary]')

      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.8,
        defaults: { ease: gsapRevealEase },
      })

      /* Initial state */
      tl.set(bg, { opacity: 0 })
      tl.set(eyebrow, { opacity: 0, y: 6 })
      tl.set(title, { opacity: 0, y: 10 })
      tl.set(gridLines, { opacity: 0 })
      tl.set(axisLines, { opacity: 0 })
      tl.set(beforePoly, { opacity: 0 })
      tl.set(afterPoly, { opacity: 0 })
      tl.set(labels, { opacity: 0 })
      tl.set(legend, { opacity: 0, y: 6 })
      tl.set(summary, { opacity: 0, y: 6 })

      /* Phase 1: Card appears */
      tl.to(bg, { opacity: 1, duration: 0.5, ease: 'power1.out' })

      /* Phase 2: Header */
      tl.to(eyebrow, { opacity: 1, y: 0, duration: 0.35 }, '-=0.2')
      tl.to(title, { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out' }, '-=0.15')

      /* Phase 3: Grid structure fades in */
      tl.to(gridLines, { opacity: 1, duration: 0.4, stagger: 0.08 })
      tl.to(axisLines, { opacity: 0.3, duration: 0.3 }, '-=0.3')
      tl.to(labels, { opacity: 1, duration: 0.3, stagger: 0.05 }, '-=0.2')

      /* Phase 4: "Before" polygon draws — the starting point */
      tl.to(beforePoly, { opacity: 1, duration: 0.6, ease: 'power2.out' })

      /* Phase 5: "After" polygon expands over it — the improvement */
      tl.to(afterPoly, { opacity: 1, duration: 0.8, ease: 'power2.out' })

      /* Phase 6: Legend and summary */
      tl.to(legend, { opacity: 1, y: 0, duration: 0.35 }, '-=0.3')
      tl.to(summary, { opacity: 1, y: 0, duration: 0.4 }, '-=0.15')

      /* Phase 7: Hold for reading */
      tl.to({}, { duration: 3.2 })

      /* Phase 8: Fade out */
      tl.to(
        el.querySelectorAll('[data-bg], [data-eyebrow], [data-title], [data-grid], [data-axis], [data-before], [data-after], [data-skill-label], [data-legend], [data-summary]'),
        { opacity: 0, duration: 0.9, ease: 'power1.inOut' }
      )
    },
    { scope: containerRef }
  )

  const cx = 100
  const cy = 100
  const maxR = 75
  const step = 360 / skills.length

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
          className="font-heading text-body text-dark tracking-heading leading-snug mb-4"
          style={{ opacity: 0 }}
        >
          Competency growth over time
        </h3>

        {/* Radar chart */}
        <div className="flex justify-center mb-4">
          <svg viewBox="0 0 200 200" className="w-[200px] h-[200px]">
            {/* Grid rings */}
            {[0.33, 0.66, 1].map((level, i) => (
              <polygon
                key={i}
                data-grid=""
                points={makeGridPolygon(level, skills.length, maxR, cx, cy)}
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-accent-soft/40"
                style={{ opacity: 0 }}
              />
            ))}

            {/* Axis lines */}
            {skills.map((_, i) => {
              const { x, y } = polarToXY(i * step, maxR, cx, cy)
              return (
                <line
                  key={i}
                  data-axis=""
                  x1={cx}
                  y1={cy}
                  x2={x}
                  y2={y}
                  stroke="currentColor"
                  strokeWidth="0.5"
                  className="text-accent-soft/30"
                  style={{ opacity: 0 }}
                />
              )
            })}

            {/* "Before" polygon */}
            <polygon
              data-before=""
              points={makePolygonPoints(skills.map((s) => s.before), maxR, cx, cy)}
              fill="currentColor"
              fillOpacity="0.08"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="3 3"
              className="text-copy-faint"
              style={{ opacity: 0 }}
            />

            {/* "After" polygon */}
            <polygon
              data-after=""
              points={makePolygonPoints(skills.map((s) => s.after), maxR, cx, cy)}
              fill="currentColor"
              fillOpacity="0.1"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-accent"
              style={{ opacity: 0 }}
            />
          </svg>
        </div>

        {/* Skill labels around the chart */}
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 mb-4">
          {skills.map((s) => (
            <span
              key={s.label}
              data-skill-label=""
              className="text-detail text-copy-mid"
              style={{ opacity: 0 }}
            >
              {s.label}
            </span>
          ))}
        </div>

        {/* Legend */}
        <div data-legend="" className="flex items-center justify-center gap-5 mb-2" style={{ opacity: 0 }}>
          <span className="flex items-center gap-1.5 text-detail text-copy-faint">
            <span className="w-3 h-px border-t border-dashed border-copy-faint" />
            Before
          </span>
          <span className="flex items-center gap-1.5 text-detail text-accent">
            <span className="w-3 h-0.5 rounded-full bg-accent" />
            Current
          </span>
        </div>

        {/* Summary */}
        <p
          data-summary=""
          className="text-caption text-center text-copy-mid"
          style={{ opacity: 0 }}
        >
          <span className="text-accent font-body-medium">+34%</span> average competency improvement across 6 skills
        </p>
      </div>
    </MockFrame>
  )
}
