'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { gsapRevealEase } from '@/lib/easing'

/* ─────────────────────────────────────────────────────
   Journey Grid C: "The Horizon Line"

   A horizontal timeline metaphor — scenarios arranged
   as stepping stones along a flowing horizontal line,
   like waypoints on a map. The learner's progress is
   shown as a traveler moving along the path. Evokes
   a sense of forward momentum and personal growth.
   ───────────────────────────────────────────────────── */

interface Waypoint {
  label: string
  short: string
  status: 'done' | 'active' | 'ahead'
}

const waypoints: Waypoint[] = [
  { label: 'Poor performance talk', short: 'Completed', status: 'done' },
  { label: 'Stressed employee', short: 'Completed', status: 'done' },
  { label: 'Promotion rejection', short: 'In progress', status: 'active' },
  { label: 'Team conflict', short: 'Locked', status: 'ahead' },
]

export function JourneyGridAnimatedC() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const el = containerRef.current
      if (!el) return

      const title = el.querySelector('[data-title]')
      const subtitle = el.querySelector('[data-subtitle]')
      const horizonLine = el.querySelector('[data-horizon]')
      const segments = el.querySelectorAll('[data-segment]')
      const waypointNodes = el.querySelectorAll('[data-waypoint]')
      const waypointLabels = el.querySelectorAll('[data-waypoint-label]')
      const traveler = el.querySelector('[data-traveler]')
      const summaryCard = el.querySelector('[data-summary]')
      const streak = el.querySelector('[data-streak]')

      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.8,
        defaults: { ease: gsapRevealEase },
      })

      /* Initial state */
      tl.set(title, { opacity: 0, y: 10 })
      tl.set(subtitle, { opacity: 0 })
      tl.set(horizonLine, { scaleX: 0 })
      tl.set(segments, { scaleX: 0 })
      tl.set(waypointNodes, { opacity: 0, scale: 0 })
      tl.set(waypointLabels, { opacity: 0, y: 8 })
      tl.set(traveler, { opacity: 0, scale: 0, x: 0 })
      tl.set(summaryCard, { opacity: 0, y: 16 })
      tl.set(streak, { opacity: 0, scale: 0.9 })

      /* Phase 1: Title */
      tl.to(title, { opacity: 1, y: 0, duration: 0.45 })
      tl.to(subtitle, { opacity: 1, duration: 0.3 }, '-=0.15')

      /* Phase 2: Horizon line draws */
      tl.to(horizonLine, {
        scaleX: 1,
        duration: 0.7,
        ease: 'power2.inOut',
      })

      /* Phase 3: Colored segments fill in sequence */
      segments.forEach((seg, i) => {
        tl.to(seg, {
          scaleX: 1,
          duration: 0.35,
          ease: 'power2.out',
        }, `-=${i === 0 ? 0 : 0.2}`)
      })

      /* Phase 4: Waypoint nodes pop */
      waypointNodes.forEach((node, i) => {
        tl.to(node, {
          opacity: 1,
          scale: 1,
          duration: 0.25,
          ease: 'back.out(2.5)',
        }, `-=${i === 0 ? 0 : 0.15}`)
      })

      /* Phase 5: Labels appear */
      tl.to(waypointLabels, {
        opacity: 1,
        y: 0,
        duration: 0.35,
        stagger: 0.08,
      })

      /* Phase 6: Traveler appears at the active waypoint */
      tl.to(traveler, {
        opacity: 1,
        scale: 1,
        duration: 0.4,
        ease: 'back.out(3)',
      })

      /* Phase 7: Summary card slides up */
      tl.to(summaryCard, {
        opacity: 1,
        y: 0,
        duration: 0.45,
      })

      /* Phase 8: Streak badge */
      tl.to(streak, {
        opacity: 1,
        scale: 1,
        duration: 0.3,
        ease: 'back.out(2)',
      }, '-=0.2')

      /* Phase 9: Hold */
      tl.to({}, { duration: 2.8 })

      /* Phase 10: Fade out */
      tl.to(el.children, {
        opacity: 0,
        duration: 0.8,
        ease: 'power1.inOut',
      })
    },
    { scope: containerRef }
  )

  /* Calculate positions for 4 waypoints spread horizontally */
  const positions = [10, 33, 58, 85] /* % from left */

  return (
    <div ref={containerRef} className="relative min-h-[420px]">
      {/* Header */}
      <div className="mb-6">
        <h3
          data-title=""
          className="font-heading text-body tracking-heading text-dark leading-snug"
          style={{ opacity: 0 }}
        >
          Mastering Difficult Conversations
        </h3>
        <p
          data-subtitle=""
          className="text-caption text-copy-light mt-1"
          style={{ opacity: 0 }}
        >
          4 scenarios &middot; 2 completed &middot; ~40 minutes total
        </p>
      </div>

      {/* Horizon map area */}
      <div className="relative h-[200px] mt-2">
        {/* Base line */}
        <div
          data-horizon=""
          className="absolute left-0 right-0 top-[80px] h-px bg-accent-soft/30 origin-left"
          style={{ transform: 'scaleX(0)' }}
        />

        {/* Colored segments showing progress */}
        {waypoints.map((wp, i) => {
          if (i === waypoints.length - 1) return null
          const startX = positions[i]
          const endX = positions[i + 1]
          return (
            <div
              key={`seg-${i}`}
              data-segment=""
              className={`absolute top-[80px] h-[2px] origin-left ${
                wp.status === 'done' ? 'bg-accent' : wp.status === 'active' ? 'bg-accent-soft' : 'bg-accent-soft/20'
              }`}
              style={{
                left: `${startX}%`,
                width: `${endX - startX}%`,
                transform: 'scaleX(0)',
              }}
            />
          )
        })}

        {/* Waypoint nodes */}
        {waypoints.map((wp, i) => (
          <div
            key={wp.label}
            className="absolute"
            style={{ left: `${positions[i]}%`, top: '68px', transform: 'translateX(-50%)' }}
          >
            {/* Node */}
            <div
              data-waypoint=""
              className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mx-auto ${
                wp.status === 'done'
                  ? 'border-accent bg-accent'
                  : wp.status === 'active'
                    ? 'border-accent bg-accent-whisper'
                    : 'border-accent-soft/30 bg-surface'
              }`}
              style={{ opacity: 0 }}
            >
              {wp.status === 'done' && (
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M2 5.5L4 7.5L8 3" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
              {wp.status === 'active' && (
                <div className="w-2 h-2 rounded-full bg-accent" />
              )}
              {wp.status === 'ahead' && (
                <div className="w-1.5 h-1.5 rounded-full bg-accent-soft/40" />
              )}
            </div>

            {/* Traveler indicator - sits above the active node */}
            {wp.status === 'active' && (
              <div
                data-traveler=""
                className="absolute -top-8 left-1/2 -translate-x-1/2"
                style={{ opacity: 0 }}
              >
                <div className="bg-accent text-surface-white text-[8px] font-body-medium px-2 py-0.5 rounded-full whitespace-nowrap">
                  You are here
                </div>
                <div className="w-0 h-0 border-l-[4px] border-r-[4px] border-t-[4px] border-l-transparent border-r-transparent border-t-accent mx-auto" />
              </div>
            )}

            {/* Label below */}
            <div
              data-waypoint-label=""
              className="mt-3 text-center"
              style={{ opacity: 0 }}
            >
              <p className={`text-[10px] leading-tight max-w-[80px] mx-auto ${
                wp.status === 'ahead' ? 'text-copy-faint' : 'text-copy-mid'
              }`}>
                {wp.label}
              </p>
              <p className={`text-[8px] mt-0.5 ${
                wp.status === 'done'
                  ? 'text-accent'
                  : wp.status === 'active'
                    ? 'text-accent font-body-medium'
                    : 'text-copy-faint'
              }`}>
                {wp.short}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Summary card */}
      <div
        data-summary=""
        className="mt-2 p-3.5 rounded-brand-sm bg-accent-whisper border border-accent/10"
        style={{ opacity: 0 }}
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-caption font-body-medium text-dark">Next: Promotion rejection</p>
            <p className="text-[10px] text-copy-light mt-0.5">
              Deliver promotion rejection news while encouraging future growth.
            </p>
          </div>
          <span className="text-[10px] font-body-medium text-surface-white bg-accent px-3 py-1 rounded-full shrink-0">
            Start
          </span>
        </div>
      </div>

      {/* Streak */}
      <div
        data-streak=""
        className="mt-3 flex items-center gap-2 justify-center"
        style={{ opacity: 0 }}
      >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-accent">
          <path d="M6 1L7.5 4.5L11 5L8.5 7.5L9.5 11L6 9L2.5 11L3.5 7.5L1 5L4.5 4.5L6 1Z" fill="currentColor" />
        </svg>
        <span className="text-[10px] text-copy-light">
          11-week streak &middot; Keep it going!
        </span>
      </div>
    </div>
  )
}
