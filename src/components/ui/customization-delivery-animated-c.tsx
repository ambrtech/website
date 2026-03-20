'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { gsapRevealEase } from '@/lib/easing'
import { MockFrame } from '@/components/ui/mock-frame'

/* ─────────────────────────────────────────────────────
   Concept C: "The Progress Board"

   The entire delivery appears as a kanban-style
   progress tracker. The brief lands in "Received",
   a progress bar fills over 48h, then items shift
   through columns: Received → Building → Ready.
   ───────────────────────────────────────────────────── */

const scenarios = [
  { title: 'Enterprise renewal — CFO pushback', shortTitle: 'CFO pushback' },
  { title: 'Discovery call — cold prospect', shortTitle: 'Cold prospect' },
  { title: 'Competitive displacement — VP Ops', shortTitle: 'VP Ops displacement' },
]

export function CustomizationDeliveryAnimatedC() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const el = containerRef.current
      if (!el) return

      const header = el.querySelector('[data-header]')
      const briefCard = el.querySelector('[data-brief]')
      const progressBar = el.querySelector('[data-progress-bar]')
      const progressFill = el.querySelector('[data-progress-fill]')
      const progressLabel = el.querySelector('[data-progress-label]')
      const columnHeaders = el.querySelectorAll('[data-col-header]')
      const scenarioCards = el.querySelectorAll('[data-card]')
      const buildingIndicators = el.querySelectorAll('[data-building]')
      const readyIndicators = el.querySelectorAll('[data-ready]')
      const completionBanner = el.querySelector('[data-complete]')

      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 1.5,
        defaults: { ease: gsapRevealEase },
      })

      /* Initial states */
      tl.set(header, { opacity: 0 })
      tl.set(briefCard, { opacity: 0, y: -12 })
      tl.set(progressBar, { opacity: 0 })
      tl.set(progressFill, { scaleX: 0 })
      tl.set(progressLabel, { opacity: 0 })
      tl.set(columnHeaders, { opacity: 0 })
      tl.set(scenarioCards, { opacity: 0, y: 8 })
      tl.set(buildingIndicators, { opacity: 0 })
      tl.set(readyIndicators, { opacity: 0, scale: 0 })
      tl.set(completionBanner, { opacity: 0, y: 4 })

      /* Phase 1: Header + brief card appear */
      tl.to(header, { opacity: 1, duration: 0.3 })
      tl.to(briefCard, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: 'power2.out',
      })

      /* Phase 2: Hold — read the brief */
      tl.to({}, { duration: 0.6 })

      /* Phase 3: Progress bar appears and starts filling */
      tl.to(progressBar, { opacity: 1, duration: 0.3 })
      tl.to(progressLabel, { opacity: 1, duration: 0.2 })
      tl.to(progressFill, {
        scaleX: 0.33,
        duration: 0.4,
        ease: 'power1.inOut',
      })

      /* Phase 4: Column headers + cards appear */
      tl.to(columnHeaders, {
        opacity: 1,
        duration: 0.3,
        stagger: 0.1,
      })
      tl.to(scenarioCards, {
        opacity: 1,
        y: 0,
        duration: 0.35,
        stagger: 0.15,
      })

      /* Phase 5: Progress advances, building indicators show */
      tl.to(progressFill, {
        scaleX: 0.66,
        duration: 0.5,
        ease: 'power1.inOut',
      })
      tl.to(buildingIndicators, {
        opacity: 1,
        duration: 0.3,
        stagger: 0.1,
      }, '-=0.3')

      /* Phase 6: Progress completes */
      tl.to(progressFill, {
        scaleX: 1,
        duration: 0.5,
        ease: 'power1.inOut',
      })

      /* Phase 7: Building indicators fade, ready checks appear */
      tl.to(buildingIndicators, {
        opacity: 0,
        duration: 0.3,
      })

      /* Ready indicators pop in one by one */
      tl.to(readyIndicators[0], {
        opacity: 1,
        scale: 1,
        duration: 0.25,
        ease: 'back.out(3)',
      })
      tl.to(readyIndicators[1], {
        opacity: 1,
        scale: 1,
        duration: 0.25,
        ease: 'back.out(3)',
      }, '-=0.1')
      /* Third stays as "in review" — no ready indicator */

      /* Phase 8: Completion banner */
      tl.to(completionBanner, {
        opacity: 1,
        y: 0,
        duration: 0.4,
      })

      /* Phase 9: Hold for reading */
      tl.to({}, { duration: 2.5 })

      /* Phase 10: Fade out for loop */
      tl.to(
        [
          header,
          briefCard,
          progressBar,
          progressLabel,
          ...columnHeaders,
          ...scenarioCards,
          ...readyIndicators,
          completionBanner,
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
          className="flex items-center gap-2 mb-4"
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
          className="flex items-center gap-4 p-4 rounded-brand-sm bg-surface border border-border mb-4"
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

        {/* ── Progress bar ── */}
        <div
          data-progress-bar
          className="mb-5"
          style={{ opacity: 0 }}
        >
          <div className="flex items-center justify-between mb-1.5">
            <span
              data-progress-label
              className="text-[10px] font-body-medium text-copy-light"
              style={{ opacity: 0 }}
            >
              48-hour delivery
            </span>
          </div>
          <div className="h-1.5 rounded-full bg-surface-alt overflow-hidden">
            <div
              data-progress-fill
              className="h-full rounded-full bg-gradient-to-r from-accent-soft to-accent origin-left"
              style={{ transform: 'scaleX(0)' }}
            />
          </div>
        </div>

        {/* ── Scenario board ── */}
        <div className="space-y-2">
          {/* Column headers as inline labels */}
          <div className="flex items-center gap-3 mb-1">
            <span
              data-col-header
              className="text-[9px] font-body-medium uppercase tracking-eyebrow text-copy-faint"
              style={{ opacity: 0 }}
            >
              Scenarios
            </span>
            <span className="flex-1" />
            <span
              data-col-header
              className="text-[9px] font-body-medium uppercase tracking-eyebrow text-copy-faint"
              style={{ opacity: 0 }}
            >
              Status
            </span>
          </div>

          {scenarios.map((scenario, i) => (
            <div
              key={i}
              data-card
              className="flex items-center gap-3 p-3 rounded-brand-sm border border-border bg-surface-white"
              style={{ opacity: 0 }}
            >
              {/* Status icon area */}
              <div className="relative w-5 h-5 flex items-center justify-center shrink-0">
                <span
                  data-building
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ opacity: 0 }}
                >
                  <span className="w-3 h-3 rounded-full border-2 border-accent-soft border-t-accent animate-spin" />
                </span>
                <span
                  data-ready
                  className="absolute inset-0 flex items-center justify-center text-accent font-body-medium text-caption"
                  style={{ opacity: 0 }}
                >
                  ✓
                </span>
              </div>

              <span className="text-caption text-copy-mid flex-1">
                {scenario.title}
              </span>

              {/* Status label — changes visually but not via animation for simplicity */}
              <span className="text-[10px] font-body-medium text-copy-faint">
                {i < 2 ? 'Ready' : 'In review'}
              </span>
            </div>
          ))}
        </div>

        {/* ── Completion banner ── */}
        <div
          data-complete
          className="mt-4 flex items-center gap-2 px-3 py-2 rounded-brand-sm bg-accent-whisper/60 border border-accent-soft/30"
          style={{ opacity: 0 }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-accent shrink-0">
            <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.2" />
            <path d="M4 7.2L6 9.2L10 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-[11px] font-body-medium text-accent">
            2 of 3 scenarios ready for your team
          </span>
        </div>
      </div>
    </MockFrame>
  )
}
