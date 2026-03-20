'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { gsapRevealEase } from '@/lib/easing'
import { MockFrame } from '@/components/ui/mock-frame'

/* ─────────────────────────────────────────────────────
   Concept A: "The Timeline"

   Animates the static delivery mock as a vertical
   timeline. Brief card lands at the top, a timeline
   line draws downward through a 48h marker, then
   scenario rows materialize with status badges.
   ───────────────────────────────────────────────────── */

const scenarios = [
  { title: 'Enterprise renewal — CFO pushback', status: 'Ready' as const },
  { title: 'Discovery call — cold prospect', status: 'Ready' as const },
  { title: 'Competitive displacement — VP Ops', status: 'In review' as const },
]

export function CustomizationDeliveryAnimatedA() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const el = containerRef.current
      if (!el) return

      const header = el.querySelector('[data-header]')
      const briefCard = el.querySelector('[data-brief]')
      const timelineLine = el.querySelector('[data-timeline-line]')
      const timeMarker = el.querySelector('[data-time-marker]')
      const timeLabel = el.querySelector('[data-time-label]')
      const scenarioRows = el.querySelectorAll('[data-scenario]')
      const statusBadges = el.querySelectorAll('[data-status]')
      const checks = el.querySelectorAll('[data-check]')

      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 1.5,
        defaults: { ease: gsapRevealEase },
      })

      /* Initial states */
      tl.set(header, { opacity: 0, y: -8 })
      tl.set(briefCard, { opacity: 0, y: -20, scale: 0.95 })
      tl.set(timelineLine, { scaleY: 0 })
      tl.set(timeMarker, { opacity: 0, scale: 0 })
      tl.set(timeLabel, { opacity: 0 })
      tl.set(scenarioRows, { opacity: 0, x: -16 })
      tl.set(statusBadges, { opacity: 0, scale: 0.7 })
      tl.set(checks, { opacity: 0, scale: 0 })

      /* Phase 1: Header appears */
      tl.to(header, {
        opacity: 1,
        y: 0,
        duration: 0.4,
      })

      /* Phase 2: Brief card drops in */
      tl.to(briefCard, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        ease: 'power2.out',
      })

      /* Phase 3: Hold — read the brief */
      tl.to({}, { duration: 0.8 })

      /* Phase 4: Timeline draws downward */
      tl.to(timelineLine, {
        scaleY: 1,
        duration: 0.7,
        ease: 'power2.inOut',
      })

      /* Phase 5: Time marker appears at midpoint */
      tl.to(timeMarker, {
        opacity: 1,
        scale: 1,
        duration: 0.35,
        ease: 'back.out(2)',
      }, '-=0.3')
      tl.to(timeLabel, {
        opacity: 1,
        duration: 0.3,
      }, '-=0.15')

      /* Phase 6: Brief fades slightly (it's been processed) */
      tl.to(briefCard, {
        opacity: 0.5,
        duration: 0.4,
      })

      /* Phase 7: Scenario rows slide in with stagger */
      scenarioRows.forEach((row, i) => {
        tl.to(
          row,
          {
            opacity: 1,
            x: 0,
            duration: 0.4,
          },
          `-=${i === 0 ? 0 : 0.2}`
        )
        tl.to(
          checks[i],
          {
            opacity: 1,
            scale: 1,
            duration: 0.2,
            ease: 'back.out(3)',
          },
          '-=0.15'
        )
        tl.to(
          statusBadges[i],
          {
            opacity: 1,
            scale: 1,
            duration: 0.25,
            ease: 'back.out(2)',
          },
          '-=0.15'
        )
      })

      /* Phase 8: Hold for reading */
      tl.to({}, { duration: 2.5 })

      /* Phase 9: Fade out for loop */
      tl.to(
        [
          header,
          briefCard,
          timelineLine,
          timeMarker,
          timeLabel,
          ...scenarioRows,
          ...statusBadges,
          ...checks,
        ],
        {
          opacity: 0,
          duration: 0.8,
          ease: 'power1.inOut',
        }
      )
    },
    { scope: containerRef }
  )

  return (
    <MockFrame ref={containerRef} height="standard">
      <div className="px-2 py-4">
        {/* ── Header ── */}
        <div
          data-header
          className="flex items-center gap-2 mb-5"
          style={{ opacity: 0 }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span className="text-[10px] font-body-medium uppercase tracking-eyebrow text-accent">
            Customization Service
          </span>
        </div>

        {/* ── Brief card ── */}
        <div
          data-brief
          className="flex items-center gap-4 p-4 rounded-brand-sm bg-surface border border-border mb-0"
          style={{ opacity: 0 }}
        >
          <div className="w-10 h-10 rounded-full bg-accent-soft/30 flex items-center justify-center shrink-0">
            <span className="text-caption font-body-medium text-accent">AB</span>
          </div>
          <div>
            <p className="text-caption font-body-medium text-dark">Brief received</p>
            <p className="text-[11px] text-copy-light leading-relaxed">
              &ldquo;We need scenarios for our Q2 sales kickoff covering new pricing...&rdquo;
            </p>
          </div>
        </div>

        {/* ── Timeline connector ── */}
        <div className="relative flex justify-center py-1">
          {/* Vertical line */}
          <div
            data-timeline-line
            className="w-px h-14 bg-gradient-to-b from-border via-accent-soft/50 to-border origin-top"
            style={{ transform: 'scaleY(0)' }}
          />

          {/* Time marker (centered on the line) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-2">
            <div
              data-time-marker
              className="w-6 h-6 rounded-full bg-accent-whisper border border-accent-soft/40 flex items-center justify-center"
              style={{ opacity: 0 }}
            >
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="text-accent">
                <circle cx="5" cy="5" r="4" stroke="currentColor" strokeWidth="1" />
                <path d="M5 3V5.5L6.5 6.5" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
              </svg>
            </div>
            <span
              data-time-label
              className="text-caption text-copy-faint whitespace-nowrap"
              style={{ opacity: 0 }}
            >
              48 hours
            </span>
          </div>
        </div>

        {/* ── Scenario rows ── */}
        <div className="space-y-2">
          {scenarios.map((scenario, i) => (
            <div
              key={i}
              data-scenario
              className="flex items-center gap-3 p-3 rounded-brand-sm border border-border bg-surface-white"
              style={{ opacity: 0 }}
            >
              <span
                data-check
                className={`text-caption font-body-medium shrink-0 ${
                  scenario.status === 'Ready' ? 'text-accent' : 'text-copy-faint'
                }`}
                style={{ opacity: 0 }}
              >
                {scenario.status === 'Ready' ? '✓' : '○'}
              </span>
              <span className="text-caption text-copy-mid flex-1">
                {scenario.title}
              </span>
              <span
                data-status
                className={`text-[10px] font-body-medium px-2 py-0.5 rounded-full ${
                  scenario.status === 'Ready'
                    ? 'text-accent bg-accent-whisper border border-accent-soft/30'
                    : 'text-copy-faint bg-surface border border-border'
                }`}
                style={{ opacity: 0 }}
              >
                {scenario.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </MockFrame>
  )
}
