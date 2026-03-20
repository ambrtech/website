'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { gsapRevealEase } from '@/lib/easing'
import { MockFrame } from '@/components/ui/mock-frame'

/* ─────────────────────────────────────────────────────
   Journey Grid B: "The Storyboard"

   Inspired by the real product screenshots — shows
   multiple journey cards like a learner's home view,
   then zooms into one journey to reveal its scenario
   sequence. Two-phase animation: overview → detail.
   ───────────────────────────────────────────────────── */

interface JourneyCard {
  title: string
  description: string
  progress: number
  total: number
  overdue?: boolean
}

const journeys: JourneyCard[] = [
  {
    title: 'Mastering Difficult Conversations',
    description: 'Performance, support, conflict resolution',
    progress: 2,
    total: 4,
    overdue: true,
  },
  {
    title: 'Professional Development Series',
    description: 'Role boundaries, inconsistent performance',
    progress: 2,
    total: 3,
  },
  {
    title: 'Manager Excellence Path',
    description: 'Work quality, termination, compensation',
    progress: 2,
    total: 3,
  },
]

const detailScenarios = [
  { title: 'Addressing poor performance', done: true },
  { title: 'Supporting stressed employee', done: true },
  { title: 'Unsuccessful promotion news', done: false, next: true },
  { title: 'Resolving team conflict', done: false },
]

function ProgressDots({ progress, total }: { progress: number; total: number }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className={`w-1.5 h-1.5 rounded-full ${
            i < progress ? 'bg-accent' : 'bg-accent-soft/40'
          }`}
        />
      ))}
    </div>
  )
}

export function JourneyGridAnimatedB() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const el = containerRef.current
      if (!el) return

      const pageTitle = el.querySelector('[data-page-title]')
      const tabs = el.querySelector('[data-tabs]')
      const journeyCards = el.querySelectorAll('[data-journey-card]')
      const overviewLayer = el.querySelector('[data-overview]')
      const detailLayer = el.querySelector('[data-detail]')
      const detailHeader = el.querySelector('[data-detail-header]')
      const detailItems = el.querySelectorAll('[data-detail-item]')
      const backButton = el.querySelector('[data-back]')

      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.8,
        defaults: { ease: gsapRevealEase },
      })

      /* Initial state */
      tl.set(pageTitle, { opacity: 0, y: 10 })
      tl.set(tabs, { opacity: 0 })
      tl.set(journeyCards, { opacity: 0, y: 20, scale: 0.95 })
      tl.set(detailLayer, { opacity: 0 })
      tl.set(detailHeader, { opacity: 0, y: 12 })
      tl.set(detailItems, { opacity: 0, x: -10 })
      tl.set(backButton, { opacity: 0, x: -6 })

      /* Phase 1: Page title + tabs */
      tl.to(pageTitle, { opacity: 1, y: 0, duration: 0.45 })
      tl.to(tabs, { opacity: 1, duration: 0.3 }, '-=0.15')

      /* Phase 2: Journey cards appear in grid */
      tl.to(journeyCards, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.5,
        stagger: 0.14,
      })

      /* Phase 3: Hold on overview */
      tl.to({}, { duration: 1.5 })

      /* Phase 4: First card gets highlighted border */
      tl.to(journeyCards[0], {
        borderColor: 'rgba(212, 114, 52, 0.3)',
        boxShadow: '0 0 0 1px rgba(212, 114, 52, 0.15), 0 4px 12px rgba(212, 114, 52, 0.06)',
        duration: 0.35,
        ease: 'power2.out',
      })

      /* Phase 5: Overview fades, detail view appears */
      tl.to({}, { duration: 0.4 })
      tl.to(overviewLayer, {
        opacity: 0,
        scale: 0.96,
        y: -8,
        duration: 0.4,
        ease: 'power2.in',
      })
      tl.set(detailLayer, { opacity: 1 })

      /* Phase 6: Detail header */
      tl.to(backButton, { opacity: 1, x: 0, duration: 0.3 })
      tl.to(detailHeader, { opacity: 1, y: 0, duration: 0.45 }, '-=0.15')

      /* Phase 7: Scenario items appear */
      tl.to(detailItems, {
        opacity: 1,
        x: 0,
        duration: 0.35,
        stagger: 0.1,
      })

      /* Phase 8: Hold on detail */
      tl.to({}, { duration: 2.8 })

      /* Phase 9: Fade all */
      tl.to([detailLayer], {
        opacity: 0,
        duration: 0.8,
        ease: 'power1.inOut',
      })
    },
    { scope: containerRef }
  )

  return (
    <MockFrame ref={containerRef} height="standard">
      {/* ── Overview Layer ── */}
      <div data-overview="" className="absolute inset-0">
        {/* Page title */}
        <div className="mb-4">
          <h3
            data-page-title=""
            className="font-heading text-body tracking-heading text-dark leading-snug"
            style={{ opacity: 0 }}
          >
            My Journeys
          </h3>
          <p className="text-[10px] text-copy-light mt-0.5">
            Track your progress through assigned learning journeys.
          </p>
        </div>

        {/* Tabs */}
        <div data-tabs="" className="flex gap-4 mb-4 border-b border-border pb-2" style={{ opacity: 0 }}>
          <span className="text-[10px] font-body-medium text-accent border-b border-accent pb-1.5 -mb-[9px]">
            Active (3)
          </span>
          <span className="text-[10px] text-copy-faint">
            Completed (0)
          </span>
        </div>

        {/* Journey cards */}
        <div className="space-y-3">
          {journeys.map((journey) => (
            <div
              key={journey.title}
              data-journey-card=""
              className="p-3.5 rounded-brand-sm bg-surface-white border border-border"
              style={{ opacity: 0 }}
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <div className="flex-1 min-w-0">
                  <p className="text-caption font-body-medium text-dark leading-snug truncate">
                    {journey.title}
                  </p>
                  <p className="text-[10px] text-copy-light mt-0.5 truncate">
                    {journey.description}
                  </p>
                </div>
                <span className="text-[10px] font-body-medium text-surface-white bg-accent px-2.5 py-1 rounded-full shrink-0">
                  Continue
                </span>
              </div>
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <ProgressDots progress={journey.progress} total={journey.total} />
                  <span className="text-[10px] text-copy-faint">
                    {journey.progress} of {journey.total}
                  </span>
                </div>
                {journey.overdue && (
                  <span className="text-[9px] text-accent flex items-center gap-1">
                    <span className="w-1 h-1 rounded-full bg-accent" />
                    16 days overdue
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Detail Layer ── */}
      <div data-detail="" className="absolute inset-0" style={{ opacity: 0 }}>
        {/* Back button */}
        <div data-back="" className="flex items-center gap-1.5 mb-4" style={{ opacity: 0 }}>
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="text-accent">
            <path d="M6.5 2L3.5 5L6.5 8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-[10px] text-accent font-body-medium">Back to Home</span>
        </div>

        {/* Detail header */}
        <div data-detail-header="" style={{ opacity: 0 }}>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-5 h-5 rounded bg-accent/10 flex items-center justify-center">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="text-accent">
                <path d="M1 3h8M1 5h6M1 7h7" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
              </svg>
            </div>
            <h3 className="font-heading text-body tracking-heading text-dark leading-snug">
              Mastering Difficult Conversations
            </h3>
          </div>
          <p className="text-[10px] text-copy-light leading-relaxed mb-2 max-w-[300px]">
            Build the skills to manage performance, support stressed staff, and resolve team conflict.
          </p>

          {/* Progress bar */}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[10px] text-copy-faint">Progress:</span>
            <div className="flex-1 h-1 rounded-full bg-accent-soft/30 overflow-hidden">
              <div className="h-full rounded-full bg-accent" style={{ width: '50%' }} />
            </div>
            <span className="text-[10px] font-body-medium text-accent">50%</span>
          </div>

          <p className="text-[10px] font-body-medium text-copy-light uppercase tracking-eyebrow mb-3">
            Scenarios (4)
          </p>
        </div>

        {/* Scenario list */}
        <div className="space-y-2">
          {detailScenarios.map((scenario, i) => (
            <div
              key={scenario.title}
              data-detail-item=""
              className={`flex items-center gap-3 p-2.5 rounded-brand-sm border ${
                scenario.next
                  ? 'border-accent/20 bg-accent-whisper'
                  : 'border-border bg-surface-white'
              }`}
              style={{ opacity: 0 }}
            >
              {/* Number */}
              <div
                className={`w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-body-medium shrink-0 ${
                  scenario.done
                    ? 'bg-accent text-surface-white'
                    : scenario.next
                      ? 'bg-accent/10 text-accent border border-accent/30'
                      : 'bg-surface text-copy-faint border border-border'
                }`}
              >
                {scenario.done ? (
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                    <path d="M1.5 4.5L3 6L6.5 2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                ) : (
                  i + 1
                )}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <p className={`text-caption leading-snug truncate ${
                  scenario.done ? 'text-copy-mid' : scenario.next ? 'text-dark font-body-medium' : 'text-copy-faint'
                }`}>
                  {scenario.title}
                </p>
                {scenario.done && (
                  <p className="text-[9px] text-copy-faint">Completed</p>
                )}
                {scenario.next && (
                  <p className="text-[9px] text-accent">Next up</p>
                )}
              </div>

              {/* Action */}
              {scenario.next && (
                <span className="text-[9px] font-body-medium text-surface-white bg-accent px-2 py-0.5 rounded-full shrink-0">
                  Start
                </span>
              )}
              {scenario.done && (
                <span className="text-[9px] text-copy-faint shrink-0">Review</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </MockFrame>
  )
}
