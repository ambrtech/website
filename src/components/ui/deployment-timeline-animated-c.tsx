'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { gsapRevealEase } from '@/lib/easing'
import { MockFrame } from '@/components/ui/mock-frame'

/* ─────────────────────────────────────────────────────
   Deployment Timeline C: "The Calendar Pages"

   Animated calendar pages that flip/morph through the
   five-day deployment window. Each "day" reveals what
   happens: brief arrives, simulations take shape, team
   begins. The calendar page turns with a subtle paper
   metaphor — warm, tactile, editorial. Like watching
   a week unfold in fast-forward.
   ───────────────────────────────────────────────────── */

interface CalendarDay {
  day: number
  weekday: string
  headline: string
  detail: string
  milestone: boolean
}

const days: CalendarDay[] = [
  { day: 1, weekday: 'Mon', headline: 'Brief lands', detail: 'Your scenarios and objectives captured.', milestone: true },
  { day: 2, weekday: 'Tue', headline: 'Building begins', detail: 'AI characters and feedback criteria drafted.', milestone: false },
  { day: 3, weekday: 'Wed', headline: 'Simulations ready', detail: 'Bespoke conversations tailored to your world.', milestone: true },
  { day: 4, weekday: 'Thu', headline: 'Review & refine', detail: 'You approve. We polish.', milestone: false },
  { day: 5, weekday: 'Fri', headline: 'Team practicing', detail: 'Real conversations. Real improvement. Day one.', milestone: true },
]

export function DeploymentTimelineAnimatedC() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const el = containerRef.current
      if (!el) return

      const header = el.querySelector('[data-header]')
      const calendarFrame = el.querySelector('[data-calendar-frame]')
      const dayPages = el.querySelectorAll('[data-day-page]')
      const dayNumbers = el.querySelectorAll('[data-day-num]')
      const dayWeekdays = el.querySelectorAll('[data-day-weekday]')
      const dayHeadlines = el.querySelectorAll('[data-day-headline]')
      const dayDetails = el.querySelectorAll('[data-day-detail]')
      const milestoneMarkers = el.querySelectorAll('[data-milestone]')
      const miniDots = el.querySelectorAll('[data-mini-dot]')
      const closingLine = el.querySelector('[data-closing]')

      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.8,
        defaults: { ease: gsapRevealEase },
      })

      /* Initial state */
      tl.set(header, { opacity: 0, y: 10 })
      tl.set(calendarFrame, { opacity: 0, scale: 0.95 })
      tl.set(dayPages, { opacity: 0, y: 30, rotationX: -15 })
      tl.set(dayNumbers, { opacity: 0, scale: 0.5 })
      tl.set(dayWeekdays, { opacity: 0 })
      tl.set(dayHeadlines, { opacity: 0, y: 8 })
      tl.set(dayDetails, { opacity: 0 })
      tl.set(milestoneMarkers, { opacity: 0, scale: 0 })
      tl.set(miniDots, { opacity: 0, scale: 0 })
      tl.set(closingLine, { opacity: 0, y: 10 })

      /* Phase 1: Header */
      tl.to(header, { opacity: 1, y: 0, duration: 0.45 })

      /* Phase 2: Calendar frame appears */
      tl.to(calendarFrame, {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: 'power2.out',
      })

      /* Phase 3: Days flip in one by one */
      days.forEach((day, i) => {
        /* Page turns in */
        tl.to(dayPages[i], {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 0.45,
          ease: 'power2.out',
        })

        /* Day number scales up */
        tl.to(dayNumbers[i], {
          opacity: 1,
          scale: 1,
          duration: 0.3,
          ease: 'back.out(2)',
        }, '-=0.25')

        /* Weekday */
        tl.to(dayWeekdays[i], {
          opacity: 1,
          duration: 0.2,
        }, '-=0.15')

        /* Headline */
        tl.to(dayHeadlines[i], {
          opacity: 1,
          y: 0,
          duration: 0.3,
        }, '-=0.1')

        /* Detail */
        tl.to(dayDetails[i], {
          opacity: 1,
          duration: 0.25,
        }, '-=0.1')

        /* Milestone marker (if applicable) */
        if (day.milestone) {
          tl.to(milestoneMarkers[i], {
            opacity: 1,
            scale: 1,
            duration: 0.2,
            ease: 'back.out(3)',
          }, '-=0.1')
        }

        /* Mini dot at bottom */
        tl.to(miniDots[i], {
          opacity: 1,
          scale: 1,
          duration: 0.15,
          ease: 'back.out(2)',
        }, '-=0.1')

        /* Pause between days */
        if (i < days.length - 1) {
          tl.to({}, { duration: 0.2 })

          /* Previous page fades slightly */
          tl.to(dayPages[i], {
            opacity: 0.3,
            y: -4,
            scale: 0.97,
            duration: 0.3,
          }, '+=0')
        }
      })

      /* Phase 4: Closing */
      tl.to(closingLine, {
        opacity: 1,
        y: 0,
        duration: 0.4,
      })

      /* Phase 5: Hold */
      tl.to({}, { duration: 2.5 })

      /* Phase 6: Fade */
      tl.to(el.children, {
        opacity: 0,
        duration: 0.8,
        ease: 'power1.inOut',
      })
    },
    { scope: containerRef }
  )

  /* Track which milestone index we're at for milestone markers */
  let milestoneIdx = -1

  return (
    <MockFrame ref={containerRef} height="compact">
      {/* Header */}
      <div data-header="" className="mb-4" style={{ opacity: 0 }}>
        <div className="flex items-center gap-2 mb-1">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span className="text-eyebrow-sm font-body-medium uppercase tracking-eyebrow text-accent">
            Your First Week
          </span>
        </div>
        <p className="text-caption text-copy-light">
          Monday to Friday. Brief to practice.
        </p>
      </div>

      {/* Calendar frame */}
      <div
        data-calendar-frame=""
        className="rounded-brand bg-surface-white border border-border overflow-hidden"
        style={{ opacity: 0 }}
      >
        {/* Calendar header strip */}
        <div className="bg-accent/5 px-4 py-2 border-b border-border flex items-center justify-between">
          <span className="text-[10px] font-body-medium text-copy-mid uppercase tracking-eyebrow">
            Week 1
          </span>
          <div className="flex items-center gap-1">
            {days.map((_, i) => (
              <div
                key={i}
                data-mini-dot=""
                className={`w-1.5 h-1.5 rounded-full ${
                  i === days.length - 1 ? 'bg-accent' : 'bg-accent-soft/50'
                }`}
                style={{ opacity: 0 }}
              />
            ))}
          </div>
        </div>

        {/* Day pages stack */}
        <div className="relative p-4" style={{ minHeight: '240px' }}>
          {days.map((day) => {
            if (day.milestone) milestoneIdx++
            const currentMilestoneIdx = day.milestone ? milestoneIdx : -1

            return (
              <div
                key={day.day}
                data-day-page=""
                className="absolute inset-x-4 top-4"
                style={{ opacity: 0, perspective: '400px' }}
              >
                <div className="p-4 rounded-brand-sm bg-accent-whisper/50 border border-accent/5">
                  {/* Day number + weekday */}
                  <div className="flex items-baseline gap-2 mb-3">
                    <span
                      data-day-num=""
                      className="font-heading text-section tracking-heading text-accent leading-none"
                      style={{ opacity: 0 }}
                    >
                      {day.day}
                    </span>
                    <span
                      data-day-weekday=""
                      className="text-[10px] font-body-medium text-copy-light uppercase tracking-eyebrow"
                      style={{ opacity: 0 }}
                    >
                      {day.weekday}
                    </span>

                    {/* Milestone marker */}
                    {day.milestone && (
                      <span
                        data-milestone=""
                        className="ml-auto text-[8px] font-body-medium text-accent bg-accent/10 px-2 py-0.5 rounded-full"
                        style={{ opacity: 0 }}
                        data-milestone-index={currentMilestoneIdx}
                      >
                        Milestone
                      </span>
                    )}
                  </div>

                  {/* Headline */}
                  <h4
                    data-day-headline=""
                    className="font-heading text-body tracking-heading text-dark leading-snug mb-1.5"
                    style={{ opacity: 0 }}
                  >
                    {day.headline}
                  </h4>

                  {/* Detail */}
                  <p
                    data-day-detail=""
                    className="text-caption text-copy-mid leading-relaxed"
                    style={{ opacity: 0 }}
                  >
                    {day.detail}
                  </p>

                  {/* Visual accent line */}
                  <div className="mt-3 h-px bg-gradient-to-r from-accent-soft/30 to-transparent" />
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Closing line */}
      <div
        data-closing=""
        className="mt-4 text-center"
        style={{ opacity: 0 }}
      >
        <p className="text-caption text-copy-mid">
          <span className="font-body-medium text-dark">One working week.</span>{' '}
          From your brief to your team practicing real conversations.
        </p>
      </div>
    </MockFrame>
  )
}
