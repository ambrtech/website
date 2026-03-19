'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { gsapRevealEase } from '@/lib/easing'

/* ─────────────────────────────────────────────────────
   Dashboard A: "The Competency Bloom"

   Abstract representation of competency growth. Uses
   petal/bloom shapes that expand outward as people
   improve at different skills. Each petal represents
   a competency area, and they unfurl organically to
   show team-wide improvement over time. Warm, organic,
   distinctly non-techy.
   ───────────────────────────────────────────────────── */

interface CompetencyPetal {
  label: string
  before: number /* 0-1, how much of petal was filled before */
  after: number  /* 0-1, how much of petal is filled now */
  angle: number  /* degrees, rotation around center */
}

const petals: CompetencyPetal[] = [
  { label: 'Empathy', before: 0.4, after: 0.82, angle: 0 },
  { label: 'Clarity', before: 0.5, after: 0.75, angle: 60 },
  { label: 'Confidence', before: 0.3, after: 0.68, angle: 120 },
  { label: 'Active listening', before: 0.45, after: 0.88, angle: 180 },
  { label: 'De-escalation', before: 0.25, after: 0.7, angle: 240 },
  { label: 'Structure', before: 0.55, after: 0.78, angle: 300 },
]

export function DashboardAnimatedA() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const el = containerRef.current
      if (!el) return

      const header = el.querySelector('[data-header]')
      const periodLabel = el.querySelector('[data-period]')
      const beforePaths = el.querySelectorAll('[data-before-path]')
      const afterPaths = el.querySelectorAll('[data-after-path]')
      const labels = el.querySelectorAll('[data-comp-label]')
      const dots = el.querySelectorAll('[data-dot]')
      const legend = el.querySelector('[data-legend]')
      const insight = el.querySelector('[data-insight]')
      const growthBadges = el.querySelectorAll('[data-growth]')

      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.8,
        defaults: { ease: gsapRevealEase },
      })

      /* Initial state */
      tl.set(header, { opacity: 0, y: 10 })
      tl.set(periodLabel, { opacity: 0 })
      tl.set(beforePaths, { opacity: 0, attr: { r: 0 } })
      tl.set(afterPaths, { opacity: 0, attr: { r: 0 } })
      tl.set(labels, { opacity: 0 })
      tl.set(dots, { opacity: 0, scale: 0 })
      tl.set(legend, { opacity: 0, y: 8 })
      tl.set(insight, { opacity: 0, y: 10 })
      tl.set(growthBadges, { opacity: 0, scale: 0.8 })

      /* Phase 1: Header */
      tl.to(header, { opacity: 1, y: 0, duration: 0.45 })
      tl.to(periodLabel, { opacity: 1, duration: 0.3 }, '-=0.15')

      /* Phase 2: "Before" radar shape appears */
      tl.to(beforePaths, {
        opacity: 1,
        duration: 0.6,
        ease: 'power2.out',
      })

      /* Phase 3: Axis labels appear */
      tl.to(labels, {
        opacity: 1,
        duration: 0.35,
        stagger: 0.06,
      })

      /* Phase 4: Hold on "before" state */
      tl.to({}, { duration: 0.8 })

      /* Phase 5: "After" radar shape blooms outward */
      tl.to(afterPaths, {
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out',
      })

      /* Phase 6: Dots appear at after positions */
      tl.to(dots, {
        opacity: 1,
        scale: 1,
        duration: 0.25,
        stagger: 0.06,
        ease: 'back.out(2)',
      })

      /* Phase 7: Growth badges pop */
      tl.to(growthBadges, {
        opacity: 1,
        scale: 1,
        duration: 0.3,
        stagger: 0.08,
        ease: 'back.out(2)',
      })

      /* Phase 8: Legend appears */
      tl.to(legend, { opacity: 1, y: 0, duration: 0.35 })

      /* Phase 9: Insight text */
      tl.to(insight, { opacity: 1, y: 0, duration: 0.4 })

      /* Phase 10: Hold */
      tl.to({}, { duration: 2.5 })

      /* Phase 11: Fade */
      tl.to(el.children, {
        opacity: 0,
        duration: 0.8,
        ease: 'power1.inOut',
      })
    },
    { scope: containerRef }
  )

  /* Radar chart geometry */
  const cx = 140
  const cy = 125
  const maxR = 85

  function polarToCart(angle: number, radius: number): [number, number] {
    const rad = ((angle - 90) * Math.PI) / 180
    return [cx + radius * Math.cos(rad), cy + radius * Math.sin(rad)]
  }

  function makePolygon(values: number[]): string {
    return values
      .map((v, i) => {
        const [x, y] = polarToCart(petals[i].angle, v * maxR)
        return `${x},${y}`
      })
      .join(' ')
  }

  const beforePoints = makePolygon(petals.map((p) => p.before))
  const afterPoints = makePolygon(petals.map((p) => p.after))

  return (
    <div ref={containerRef} className="relative min-h-[420px]">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div data-header="" style={{ opacity: 0 }}>
          <span className="text-eyebrow-sm font-body-medium uppercase tracking-eyebrow text-copy-light">
            Team Competency Growth
          </span>
        </div>
        <span
          data-period=""
          className="text-caption text-copy-faint"
          style={{ opacity: 0 }}
        >
          12-week program
        </span>
      </div>

      {/* Radar Chart */}
      <div className="flex justify-center">
        <svg width="280" height="250" viewBox="0 0 280 250">
          {/* Grid rings */}
          {[0.25, 0.5, 0.75, 1].map((r) => (
            <circle
              key={r}
              cx={cx}
              cy={cy}
              r={maxR * r}
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-border"
              opacity={0.5}
            />
          ))}

          {/* Axis lines */}
          {petals.map((p) => {
            const [x, y] = polarToCart(p.angle, maxR)
            return (
              <line
                key={p.angle}
                x1={cx}
                y1={cy}
                x2={x}
                y2={y}
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-border"
                opacity={0.3}
              />
            )
          })}

          {/* "Before" polygon */}
          <polygon
            data-before-path=""
            points={beforePoints}
            fill="currentColor"
            className="text-accent-soft"
            opacity={0}
            fillOpacity={0.3}
            stroke="currentColor"
            strokeWidth="1"
          />

          {/* "After" polygon */}
          <polygon
            data-after-path=""
            points={afterPoints}
            fill="currentColor"
            className="text-accent"
            opacity={0}
            fillOpacity={0.15}
            stroke="currentColor"
            strokeWidth="1.5"
          />

          {/* Dots at after positions */}
          {petals.map((p) => {
            const [x, y] = polarToCart(p.angle, p.after * maxR)
            return (
              <circle
                key={`dot-${p.angle}`}
                data-dot=""
                cx={x}
                cy={y}
                r="3.5"
                fill="currentColor"
                className="text-accent"
                style={{ opacity: 0 }}
              />
            )
          })}

          {/* Labels */}
          {petals.map((p) => {
            const labelR = maxR + 18
            const [x, y] = polarToCart(p.angle, labelR)
            return (
              <text
                key={`label-${p.angle}`}
                data-comp-label=""
                x={x}
                y={y}
                textAnchor="middle"
                dominantBaseline="middle"
                className="fill-copy-mid font-body"
                fontSize="9"
                style={{ opacity: 0 }}
              >
                {p.label}
              </text>
            )
          })}

          {/* Growth badges */}
          {petals.map((p) => {
            const growth = Math.round((p.after - p.before) * 100)
            const badgeR = maxR * p.after + 8
            const [x, y] = polarToCart(p.angle, badgeR)
            return (
              <g key={`growth-${p.angle}`} data-growth="" style={{ opacity: 0 }}>
                <rect
                  x={x - 12}
                  y={y - 7}
                  width="24"
                  height="14"
                  rx="7"
                  fill="currentColor"
                  className="text-accent-whisper"
                />
                <text
                  x={x}
                  y={y + 1}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="fill-accent font-body"
                  fontSize="7"
                  fontWeight="500"
                >
                  +{growth}%
                </text>
              </g>
            )
          })}
        </svg>
      </div>

      {/* Legend */}
      <div
        data-legend=""
        className="flex items-center justify-center gap-5 mt-1"
        style={{ opacity: 0 }}
      >
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-accent-soft/50" />
          <span className="text-[9px] text-copy-light">Week 1</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-accent" />
          <span className="text-[9px] text-copy-light">Week 12</span>
        </div>
      </div>

      {/* Insight */}
      <div
        data-insight=""
        className="mt-3 p-3 rounded-brand-sm bg-accent-whisper border border-accent/10 text-center"
        style={{ opacity: 0 }}
      >
        <p className="text-caption text-copy-mid leading-relaxed">
          <span className="font-body-medium text-dark">Every competency improved.</span>{' '}
          Active listening showed the strongest growth at +43%.
        </p>
      </div>
    </div>
  )
}
