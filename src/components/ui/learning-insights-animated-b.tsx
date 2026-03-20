'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { gsapRevealEase } from '@/lib/easing'
import { MockFrame } from '@/components/ui/mock-frame'

/* ─────────────────────────────────────────────────────
   Concept B: "Skills Heatmap"

   A grid-based heatmap where each cell represents a skill
   for a team/cohort, coloured by proficiency level. Cells
   fill in row by row, painting a picture of where the
   team is strong (warm accent) vs. where it needs work
   (faint/cool). An editorial data visualization.
   ───────────────────────────────────────────────────── */

const cohorts = ['Sales Team', 'New Managers', 'Customer Service']
const skills = ['Listening', 'Rapport', 'Empathy', 'Objections', 'Closing', 'Silence']

// Proficiency levels: 1 = weak, 2 = developing, 3 = good, 4 = strong
const heatData: number[][] = [
  [4, 4, 3, 2, 2, 1], // Sales Team
  [3, 3, 4, 2, 1, 2], // New Managers
  [4, 3, 4, 1, 2, 1], // Customer Service
]

const levelClasses: Record<number, string> = {
  1: 'bg-copy-faint/20',
  2: 'bg-accent-soft/30',
  3: 'bg-accent-soft/60',
  4: 'bg-accent-soft',
}

const levelLabels: Record<number, string> = {
  1: 'Needs work',
  2: 'Developing',
  3: 'Good',
  4: 'Strong',
}

export function LearningInsightsAnimatedB() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const el = containerRef.current
      if (!el) return

      const bg = el.querySelector('[data-bg]')
      const eyebrow = el.querySelector('[data-eyebrow]')
      const title = el.querySelector('[data-title]')
      const colHeaders = el.querySelectorAll('[data-col-header]')
      const rowLabels = el.querySelectorAll('[data-row-label]')
      const cells = el.querySelectorAll('[data-cell]')
      const legend = el.querySelector('[data-legend]')
      const insight = el.querySelector('[data-insight]')

      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.8,
        defaults: { ease: gsapRevealEase },
      })

      /* Initial states */
      tl.set(bg, { opacity: 0 })
      tl.set(eyebrow, { opacity: 0, y: 6 })
      tl.set(title, { opacity: 0, y: 10 })
      tl.set(colHeaders, { opacity: 0, y: -4 })
      tl.set(rowLabels, { opacity: 0, x: -8 })
      tl.set(cells, { opacity: 0, scale: 0.7 })
      tl.set(legend, { opacity: 0, y: 6 })
      tl.set(insight, { opacity: 0, y: 6 })

      /* Phase 1: Card */
      tl.to(bg, { opacity: 1, duration: 0.5, ease: 'power1.out' })

      /* Phase 2: Header */
      tl.to(eyebrow, { opacity: 1, y: 0, duration: 0.35 }, '-=0.2')
      tl.to(title, { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out' }, '-=0.15')

      /* Phase 3: Column headers slide down */
      tl.to(colHeaders, { opacity: 1, y: 0, duration: 0.3, stagger: 0.04 })

      /* Phase 4: Row by row — label + cells */
      for (let row = 0; row < cohorts.length; row++) {
        const rowCells = Array.from(cells).slice(row * skills.length, (row + 1) * skills.length)
        tl.to(rowLabels[row], { opacity: 1, x: 0, duration: 0.25 }, row === 0 ? undefined : '-=0.15')
        tl.to(rowCells, { opacity: 1, scale: 1, duration: 0.25, stagger: 0.04, ease: 'back.out(1.5)' }, '-=0.1')
      }

      /* Phase 5: Legend */
      tl.to(legend, { opacity: 1, y: 0, duration: 0.35 })

      /* Phase 6: Insight callout */
      tl.to(insight, { opacity: 1, y: 0, duration: 0.4 })

      /* Phase 7: Hold */
      tl.to({}, { duration: 3.2 })

      /* Phase 8: Fade out */
      tl.to(
        el.querySelectorAll('[data-bg], [data-eyebrow], [data-title], [data-col-header], [data-row-label], [data-cell], [data-legend], [data-insight]'),
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
          Skills proficiency across teams
        </h3>

        {/* Heatmap grid */}
        <div className="mb-4">
          {/* Column headers */}
          <div className="grid gap-1 mb-2" style={{ gridTemplateColumns: '80px repeat(6, 1fr)' }}>
            <div /> {/* Empty corner cell */}
            {skills.map((skill) => (
              <span
                key={skill}
                data-col-header=""
                className="text-detail text-copy-mid text-center leading-tight"
                style={{ opacity: 0 }}
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Data rows */}
          {cohorts.map((cohort, rowIdx) => (
            <div
              key={cohort}
              className="grid gap-1 mb-1.5"
              style={{ gridTemplateColumns: '80px repeat(6, 1fr)' }}
            >
              <span
                data-row-label=""
                className="text-detail text-copy-mid self-center leading-tight pr-1"
                style={{ opacity: 0 }}
              >
                {cohort}
              </span>
              {heatData[rowIdx].map((level, colIdx) => (
                <div
                  key={colIdx}
                  data-cell=""
                  className={`h-7 rounded-brand-sm ${levelClasses[level]} flex items-center justify-center`}
                  style={{ opacity: 0 }}
                  title={`${cohort} - ${skills[colIdx]}: ${levelLabels[level]}`}
                >
                  <span className="text-detail text-copy-mid">{level === 4 ? '' : ''}</span>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Legend */}
        <div data-legend="" className="flex items-center gap-3 mb-4" style={{ opacity: 0 }}>
          {[1, 2, 3, 4].map((level) => (
            <span key={level} className="flex items-center gap-1">
              <span className={`w-3 h-3 rounded-sm ${levelClasses[level]}`} />
              <span className="text-detail text-copy-faint">{levelLabels[level]}</span>
            </span>
          ))}
        </div>

        {/* Insight callout */}
        <div
          data-insight=""
          className="p-3 rounded-brand-sm bg-surface-white/60 border border-border"
          style={{ opacity: 0 }}
        >
          <p className="text-caption text-copy-mid leading-relaxed">
            <span className="text-accent font-body-medium">Key finding:</span>{' '}
            Objection handling and navigating silence are development gaps across all three teams.
            Consider targeted scenario assignments.
          </p>
        </div>
      </div>
    </MockFrame>
  )
}
