'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { gsapRevealEase } from '@/lib/easing'
import { MockFrame } from '@/components/ui/mock-frame'

/* ─────────────────────────────────────────────────────
   Concept C: "The Team Report"

   An editorial, magazine-style insights summary that
   assembles like a printed report. A headline stat,
   a curated list of findings with circular gauge
   indicators, and a recommended action. Feels like
   a polished executive briefing, not a dashboard.
   ───────────────────────────────────────────────────── */

const findings = [
  {
    skill: 'Rapport building',
    score: 92,
    status: 'Strength',
    note: 'Consistently high across all cohorts',
  },
  {
    skill: 'Active listening',
    score: 88,
    status: 'Strength',
    note: 'Improved 14% since last quarter',
  },
  {
    skill: 'Handling objections',
    score: 48,
    status: 'Gap',
    note: 'Lowest-scoring skill across all teams',
  },
]

/** Small inline ring gauge */
function MiniGauge({ score, isStrength }: { score: number; isStrength: boolean }) {
  const radius = 14
  const circumference = 2 * Math.PI * radius
  const filled = (score / 100) * circumference
  return (
    <svg viewBox="0 0 36 36" className="w-9 h-9 shrink-0">
      <circle
        cx="18"
        cy="18"
        r={radius}
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        className="text-surface-alt"
      />
      <circle
        cx="18"
        cy="18"
        r={radius}
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeDasharray={`${filled} ${circumference}`}
        strokeLinecap="round"
        className={isStrength ? 'text-accent-soft' : 'text-copy-faint'}
        style={{ transformOrigin: 'center', transform: 'rotate(-90deg)' }}
      />
      <text
        x="18"
        y="19"
        textAnchor="middle"
        dominantBaseline="central"
        className="fill-dark text-[7px] font-body-medium"
      >
        {score}
      </text>
    </svg>
  )
}

export function LearningInsightsAnimatedC() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const el = containerRef.current
      if (!el) return

      const bg = el.querySelector('[data-bg]')
      const eyebrow = el.querySelector('[data-eyebrow]')
      const headlineStat = el.querySelector('[data-headline-stat]')
      const headlineLabel = el.querySelector('[data-headline-label]')
      const divider1 = el.querySelector('[data-divider-1]')
      const findingRows = el.querySelectorAll('[data-finding]')
      const gauges = el.querySelectorAll('[data-gauge]')
      const divider2 = el.querySelector('[data-divider-2]')
      const actionIcon = el.querySelector('[data-action-icon]')
      const actionText = el.querySelector('[data-action-text]')

      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.8,
        defaults: { ease: gsapRevealEase },
      })

      /* Initial states */
      tl.set(bg, { opacity: 0 })
      tl.set(eyebrow, { opacity: 0, y: 6 })
      tl.set(headlineStat, { opacity: 0, scale: 0.6 })
      tl.set(headlineLabel, { opacity: 0, y: 6 })
      tl.set(divider1, { scaleX: 0 })
      tl.set(findingRows, { opacity: 0, x: -10 })
      tl.set(gauges, { opacity: 0, scale: 0.5 })
      tl.set(divider2, { scaleX: 0 })
      tl.set(actionIcon, { opacity: 0, scale: 0 })
      tl.set(actionText, { opacity: 0, y: 6 })

      /* Phase 1: Card */
      tl.to(bg, { opacity: 1, duration: 0.5, ease: 'power1.out' })

      /* Phase 2: Eyebrow */
      tl.to(eyebrow, { opacity: 1, y: 0, duration: 0.35 }, '-=0.2')

      /* Phase 3: Headline stat — big number lands */
      tl.to(headlineStat, { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(1.5)' })
      tl.to(headlineLabel, { opacity: 1, y: 0, duration: 0.35 }, '-=0.2')

      /* Phase 4: First divider */
      tl.to(divider1, { scaleX: 1, duration: 0.4, ease: 'power2.inOut' })

      /* Phase 5: Finding rows assemble */
      findingRows.forEach((row, i) => {
        tl.to(row, { opacity: 1, x: 0, duration: 0.35 }, i === 0 ? undefined : '-=0.2')
        tl.to(gauges[i], { opacity: 1, scale: 1, duration: 0.3, ease: 'back.out(2)' }, '-=0.2')
      })

      /* Phase 6: Second divider + recommended action */
      tl.to(divider2, { scaleX: 1, duration: 0.4, ease: 'power2.inOut' })
      tl.to(actionIcon, { opacity: 1, scale: 1, duration: 0.3, ease: 'back.out(2.5)' })
      tl.to(actionText, { opacity: 1, y: 0, duration: 0.4 }, '-=0.15')

      /* Phase 7: Hold */
      tl.to({}, { duration: 3.2 })

      /* Phase 8: Fade out */
      tl.to(
        el.querySelectorAll('[data-bg], [data-eyebrow], [data-headline-stat], [data-headline-label], [data-divider-1], [data-finding], [data-gauge], [data-divider-2], [data-action-icon], [data-action-text]'),
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
        <div data-eyebrow="" className="flex items-center gap-2 mb-5" style={{ opacity: 0 }}>
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span className="text-eyebrow-sm font-body-medium uppercase tracking-eyebrow text-accent">
            Quarterly Insights Report
          </span>
          <span className="ml-auto text-detail text-copy-faint">Sales Team</span>
        </div>

        {/* Headline stat — the big editorial number */}
        <div className="text-center mb-4">
          <p
            data-headline-stat=""
            className="font-heading text-section tracking-tight text-dark leading-none"
            style={{ opacity: 0 }}
          >
            +12%
          </p>
          <p
            data-headline-label=""
            className="text-caption text-copy-mid mt-1"
            style={{ opacity: 0 }}
          >
            overall improvement since last quarter
          </p>
        </div>

        {/* Divider 1 */}
        <div
          data-divider-1=""
          className="h-[1.5px] bg-gradient-to-r from-accent-soft via-accent-soft/40 to-transparent mb-4 origin-left"
          style={{ transform: 'scaleX(0)' }}
        />

        {/* Findings list */}
        <div className="space-y-3 mb-4">
          {findings.map((f) => (
            <div
              key={f.skill}
              data-finding=""
              className="flex items-center gap-3"
              style={{ opacity: 0 }}
            >
              <div data-gauge="" style={{ opacity: 0 }}>
                <MiniGauge score={f.score} isStrength={f.status === 'Strength'} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-caption font-body-medium text-dark">{f.skill}</span>
                  <span
                    className={`text-detail px-1.5 py-0.5 rounded-brand-sm ${
                      f.status === 'Strength'
                        ? 'bg-accent-tint text-accent'
                        : 'bg-surface-alt text-copy-faint'
                    }`}
                  >
                    {f.status}
                  </span>
                </div>
                <p className="text-detail text-copy-light leading-relaxed">{f.note}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Divider 2 */}
        <div
          data-divider-2=""
          className="h-[1.5px] bg-gradient-to-r from-accent-soft via-accent-soft/40 to-transparent mb-4 origin-left"
          style={{ transform: 'scaleX(0)' }}
        />

        {/* Recommended action */}
        <div className="flex items-start gap-3">
          <div
            data-action-icon=""
            className="shrink-0 w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center mt-0.5"
            style={{ opacity: 0 }}
          >
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="text-accent">
              <path d="M5 2V8M2 5H8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
          </div>
          <p
            data-action-text=""
            className="text-caption text-copy-mid leading-relaxed"
            style={{ opacity: 0 }}
          >
            <span className="font-body-medium text-dark">Recommended:</span>{' '}
            Assign objection-handling scenarios to all three teams to close the most significant skill gap.
          </p>
        </div>
      </div>
    </MockFrame>
  )
}
