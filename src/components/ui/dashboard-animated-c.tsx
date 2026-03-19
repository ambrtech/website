'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { gsapRevealEase } from '@/lib/easing'

/* ─────────────────────────────────────────────────────
   Dashboard C: "The Garden"

   An organic, metaphorical take: competency growth
   visualized as plants growing in a garden. Each
   "plot" represents a competency area. Stems grow
   taller, leaves unfurl, and small blooms appear as
   people improve. The admin sees their team's garden
   flourishing. Abstract enough for a marketing mock,
   warm and distinctly non-dashboard.
   ───────────────────────────────────────────────────── */

interface GardenPlot {
  competency: string
  growthLabel: string
  stemHeight: number   /* 0-100, final height percentage */
  hasBloom: boolean
  leafCount: number    /* 1-3 */
}

const plots: GardenPlot[] = [
  { competency: 'Empathy', growthLabel: '+42%', stemHeight: 85, hasBloom: true, leafCount: 3 },
  { competency: 'Clarity', growthLabel: '+31%', stemHeight: 68, hasBloom: true, leafCount: 2 },
  { competency: 'Confidence', growthLabel: '+38%', stemHeight: 75, hasBloom: false, leafCount: 3 },
  { competency: 'Listening', growthLabel: '+45%', stemHeight: 90, hasBloom: true, leafCount: 3 },
  { competency: 'Structure', growthLabel: '+26%', stemHeight: 58, hasBloom: false, leafCount: 2 },
]

export function DashboardAnimatedC() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const el = containerRef.current
      if (!el) return

      const header = el.querySelector('[data-header]')
      const season = el.querySelector('[data-season]')
      const soilLine = el.querySelector('[data-soil]')
      const stems = el.querySelectorAll('[data-stem]')
      const leaves = el.querySelectorAll('[data-leaf]')
      const blooms = el.querySelectorAll('[data-bloom]')
      const plotLabels = el.querySelectorAll('[data-plot-label]')
      const growthTags = el.querySelectorAll('[data-growth-tag]')
      const summaryCard = el.querySelector('[data-summary-card]')
      const sunElement = el.querySelector('[data-sun]')

      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.8,
        defaults: { ease: gsapRevealEase },
      })

      /* Initial state */
      tl.set(header, { opacity: 0, y: 10 })
      tl.set(season, { opacity: 0 })
      tl.set(soilLine, { scaleX: 0 })
      tl.set(stems, { scaleY: 0 })
      tl.set(leaves, { opacity: 0, scale: 0, rotation: -30 })
      tl.set(blooms, { opacity: 0, scale: 0 })
      tl.set(plotLabels, { opacity: 0, y: 6 })
      tl.set(growthTags, { opacity: 0, y: -4 })
      tl.set(summaryCard, { opacity: 0, y: 14 })
      tl.set(sunElement, { opacity: 0, scale: 0.5, rotation: -45 })

      /* Phase 1: Header */
      tl.to(header, { opacity: 1, y: 0, duration: 0.45 })
      tl.to(season, { opacity: 1, duration: 0.3 }, '-=0.15')

      /* Phase 2: Sun rises */
      tl.to(sunElement, {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 0.6,
        ease: 'power2.out',
      })

      /* Phase 3: Soil line draws */
      tl.to(soilLine, {
        scaleX: 1,
        duration: 0.5,
        ease: 'power2.inOut',
      })

      /* Phase 4: Stems grow upward */
      tl.to(stems, {
        scaleY: 1,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power2.out',
      })

      /* Phase 5: Leaves unfurl */
      tl.to(leaves, {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 0.4,
        stagger: 0.05,
        ease: 'back.out(2)',
      })

      /* Phase 6: Blooms appear */
      tl.to(blooms, {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        stagger: 0.15,
        ease: 'back.out(3)',
      })

      /* Phase 7: Labels appear */
      tl.to(plotLabels, {
        opacity: 1,
        y: 0,
        duration: 0.3,
        stagger: 0.06,
      })

      /* Phase 8: Growth tags float up */
      tl.to(growthTags, {
        opacity: 1,
        y: 0,
        duration: 0.35,
        stagger: 0.08,
        ease: 'back.out(1.5)',
      })

      /* Phase 9: Summary */
      tl.to(summaryCard, {
        opacity: 1,
        y: 0,
        duration: 0.4,
      })

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

  const gardenWidth = 320
  const plotSpacing = gardenWidth / (plots.length + 1)
  const soilY = 220
  const maxStemH = 130

  return (
    <div ref={containerRef} className="relative min-h-[420px]">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <span
          data-header=""
          className="text-eyebrow-sm font-body-medium uppercase tracking-eyebrow text-copy-light"
          style={{ opacity: 0 }}
        >
          Your Team&apos;s Growth
        </span>
        <span
          data-season=""
          className="text-caption text-copy-faint flex items-center gap-1"
          style={{ opacity: 0 }}
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="text-accent">
            <path d="M5 1v3M1 5h3M5 9V7M9 5H7" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
            <circle cx="5" cy="5" r="1.5" fill="currentColor" />
          </svg>
          12-week program
        </span>
      </div>

      {/* Garden visualization */}
      <div className="flex justify-center">
        <svg width={gardenWidth} height="270" viewBox={`0 0 ${gardenWidth} 270`}>
          {/* Sun */}
          <g data-sun="" style={{ opacity: 0 }}>
            <circle cx="280" cy="30" r="16" fill="currentColor" className="text-accent-tint" />
            <circle cx="280" cy="30" r="10" fill="currentColor" className="text-accent-soft" />
            {/* Sun rays */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
              const rad = (angle * Math.PI) / 180
              const x1 = 280 + 20 * Math.cos(rad)
              const y1 = 30 + 20 * Math.sin(rad)
              const x2 = 280 + 26 * Math.cos(rad)
              const y2 = 30 + 26 * Math.sin(rad)
              return (
                <line
                  key={angle}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  className="text-accent-soft"
                />
              )
            })}
          </g>

          {/* Soil line */}
          <line
            data-soil=""
            x1="10"
            y1={soilY}
            x2={gardenWidth - 10}
            y2={soilY}
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-accent-soft/60"
            strokeLinecap="round"
            style={{ transformOrigin: '10px 220px', transform: 'scaleX(0)' }}
          />

          {/* Soil dots for texture */}
          {Array.from({ length: 12 }).map((_, i) => (
            <circle
              key={`soil-${i}`}
              cx={20 + i * 25 + (i % 2 === 0 ? 5 : 0)}
              cy={soilY + 6 + (i % 3) * 3}
              r="1"
              fill="currentColor"
              className="text-accent-soft/30"
            />
          ))}

          {/* Plants */}
          {plots.map((plot, i) => {
            const cx = plotSpacing * (i + 1)
            const stemH = (plot.stemHeight / 100) * maxStemH
            const stemTop = soilY - stemH

            return (
              <g key={plot.competency}>
                {/* Stem */}
                <line
                  data-stem=""
                  x1={cx}
                  y1={soilY}
                  x2={cx}
                  y2={stemTop}
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="text-accent-soft"
                  style={{ transformOrigin: `${cx}px ${soilY}px`, transform: 'scaleY(0)' }}
                />

                {/* Leaves */}
                {Array.from({ length: plot.leafCount }).map((_, li) => {
                  const leafY = soilY - stemH * ((li + 1) / (plot.leafCount + 1))
                  const side = li % 2 === 0 ? 1 : -1
                  return (
                    <ellipse
                      key={`leaf-${i}-${li}`}
                      data-leaf=""
                      cx={cx + side * 8}
                      cy={leafY}
                      rx="6"
                      ry="3"
                      fill="currentColor"
                      className="text-accent-soft/60"
                      transform={`rotate(${side * 25} ${cx + side * 8} ${leafY})`}
                      style={{ opacity: 0 }}
                    />
                  )
                })}

                {/* Bloom */}
                {plot.hasBloom && (
                  <g data-bloom="" style={{ opacity: 0 }}>
                    {/* Petals */}
                    {[0, 72, 144, 216, 288].map((angle) => {
                      const rad = ((angle - 90) * Math.PI) / 180
                      const px = cx + 6 * Math.cos(rad)
                      const py = stemTop - 4 + 6 * Math.sin(rad)
                      return (
                        <ellipse
                          key={angle}
                          cx={px}
                          cy={py}
                          rx="3.5"
                          ry="5"
                          fill="currentColor"
                          className="text-accent-tint"
                          transform={`rotate(${angle} ${px} ${py})`}
                        />
                      )
                    })}
                    {/* Center */}
                    <circle
                      cx={cx}
                      cy={stemTop - 4}
                      r="3"
                      fill="currentColor"
                      className="text-accent"
                    />
                  </g>
                )}

                {/* Non-bloom top (bud) */}
                {!plot.hasBloom && (
                  <g data-bloom="" style={{ opacity: 0 }}>
                    <ellipse
                      cx={cx}
                      cy={stemTop - 2}
                      rx="4"
                      ry="5"
                      fill="currentColor"
                      className="text-accent-soft/50"
                    />
                  </g>
                )}

                {/* Growth tag */}
                <g data-growth-tag="" style={{ opacity: 0 }}>
                  <rect
                    x={cx - 14}
                    y={stemTop - 24}
                    width="28"
                    height="14"
                    rx="7"
                    fill="currentColor"
                    className="text-accent-whisper"
                  />
                  <text
                    x={cx}
                    y={stemTop - 15}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="fill-accent font-body"
                    fontSize="8"
                    fontWeight="500"
                  >
                    {plot.growthLabel}
                  </text>
                </g>

                {/* Plot label */}
                <text
                  data-plot-label=""
                  x={cx}
                  y={soilY + 18}
                  textAnchor="middle"
                  className="fill-copy-mid font-body"
                  fontSize="9"
                  style={{ opacity: 0 }}
                >
                  {plot.competency}
                </text>
              </g>
            )
          })}
        </svg>
      </div>

      {/* Summary */}
      <div
        data-summary-card=""
        className="mt-1 p-3 rounded-brand-sm bg-accent-whisper border border-accent/10 text-center"
        style={{ opacity: 0 }}
      >
        <p className="text-caption text-copy-mid leading-relaxed">
          <span className="font-body-medium text-dark">Your team is flourishing.</span>{' '}
          5 competency areas measured, all showing meaningful growth.
        </p>
      </div>
    </div>
  )
}
