'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { gsapRevealEase } from '@/lib/easing'
import { MockFrame } from '@/components/ui/mock-frame'

/* ─────────────────────────────────────────────────────
   Presentation Training C: "The Audience Grid"

   Bird's-eye view of the AI audience. Shows a grid of
   audience member faces with live emotional state
   indicators (engaged, confused, nodding, skeptical).
   An engagement heatmap pulses beneath. Individual
   reactions shift over time as the "presentation"
   progresses, with a summary insight at the bottom.
   Captures the unique value of AI-powered audience
   simulation — reading the room in real-time.
   ───────────────────────────────────────────────────── */

export function PresentationTrainingAnimatedC() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const el = containerRef.current
      if (!el) return

      const panel = el.querySelector('[data-panel]')
      const header = el.querySelector('[data-header]')
      const faces = el.querySelectorAll('[data-face]')
      const states1 = el.querySelectorAll('[data-state-1]')
      const states2 = el.querySelectorAll('[data-state-2]')
      const engagementBar = el.querySelector('[data-engagement-bar]')
      const engagementFill = el.querySelector('[data-engagement-fill]')
      const engagementLabel = el.querySelector('[data-engagement-label]')
      const insight1 = el.querySelector('[data-insight-1]')
      const insight2 = el.querySelector('[data-insight-2]')
      const liveTag = el.querySelector('[data-live-tag]')

      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.8,
        defaults: { ease: gsapRevealEase },
      })

      /* Initial state */
      tl.set(panel, { opacity: 0 })
      tl.set(header, { opacity: 0, y: -8 })
      tl.set(faces, { opacity: 0, scale: 0.8 })
      tl.set(states1, { opacity: 0, y: 4 })
      tl.set(states2, { opacity: 0, y: 4 })
      tl.set(engagementBar, { opacity: 0 })
      tl.set(engagementFill, { scaleX: 0 })
      tl.set(engagementLabel, { opacity: 0 })
      tl.set(insight1, { opacity: 0, y: 10 })
      tl.set(insight2, { opacity: 0, y: 10 })
      tl.set(liveTag, { opacity: 0, scale: 0.8 })

      /* Phase 1: Panel + header appear */
      tl.to(panel, { opacity: 1, duration: 0.5, ease: 'power1.out' })
      tl.to(header, { opacity: 1, y: 0, duration: 0.35 }, '-=0.25')
      tl.to(liveTag, { opacity: 1, scale: 1, duration: 0.3, ease: 'back.out(2)' }, '-=0.1')

      /* Phase 2: Faces appear in a wave */
      tl.to(faces, {
        opacity: 1,
        scale: 1,
        duration: 0.3,
        stagger: 0.06,
        ease: 'power2.out',
      })

      /* Phase 3: First set of reaction states appear */
      tl.to(states1, {
        opacity: 1,
        y: 0,
        duration: 0.25,
        stagger: 0.05,
      })

      /* Phase 4: Engagement bar fills */
      tl.to(engagementBar, { opacity: 1, duration: 0.3 }, '-=0.1')
      tl.to(engagementFill, {
        scaleX: 1,
        duration: 0.8,
        ease: 'power2.out',
      })
      tl.to(engagementLabel, { opacity: 1, duration: 0.25 }, '-=0.3')

      /* Phase 5: Insight 1 appears */
      tl.to(insight1, { opacity: 1, y: 0, duration: 0.4 })

      /* Hold moment 1 */
      tl.to({}, { duration: 2.0 })

      /* Phase 6: Reactions shift — states1 fades, states2 appears */
      tl.to(states1, { opacity: 0, duration: 0.25, ease: 'power1.in' })
      tl.to(states2, { opacity: 1, y: 0, duration: 0.25, stagger: 0.04 })

      /* Insight shifts too */
      tl.to(insight1, { opacity: 0, duration: 0.2, ease: 'power1.in' }, '-=0.2')
      tl.to(insight2, { opacity: 1, y: 0, duration: 0.4 })

      /* Live tag pulses */
      const livePulse = gsap.timeline({ repeat: 3 })
      livePulse
        .to(liveTag, { opacity: 0.5, duration: 0.4, ease: 'sine.inOut' })
        .to(liveTag, { opacity: 1, duration: 0.4, ease: 'sine.inOut' })

      /* Hold moment 2 */
      tl.to({}, { duration: 2.5 })

      /* Phase 7: Everything fades */
      tl.call(() => { livePulse.kill() })
      tl.to(
        [panel, header, ...faces, ...states1, ...states2, engagementBar, engagementFill, engagementLabel, insight1, insight2, liveTag],
        { opacity: 0, duration: 0.8, ease: 'power1.inOut' }
      )
    },
    { scope: containerRef }
  )

  const audience = [
    { initials: 'SC', name: 'Sarah C.', role: 'CFO', state1: 'Engaged', state2: 'Nodding', color1: 'text-accent', color2: 'text-accent' },
    { initials: 'MR', name: 'Mark R.', role: 'CTO', state1: 'Attentive', state2: 'Skeptical', color1: 'text-copy-mid', color2: 'text-accent' },
    { initials: 'LW', name: 'Lisa W.', role: 'VP Ops', state1: 'Taking notes', state2: 'Engaged', color1: 'text-copy-mid', color2: 'text-accent' },
    { initials: 'JP', name: 'James P.', role: 'VP Sales', state1: 'Neutral', state2: 'Interested', color1: 'text-copy-faint', color2: 'text-copy-mid' },
    { initials: 'RK', name: 'Rachel K.', role: 'CHRO', state1: 'Confused', state2: 'Clarified', color1: 'text-accent', color2: 'text-copy-mid' },
    { initials: 'TN', name: 'Tom N.', role: 'COO', state1: 'Engaged', state2: 'Very engaged', color1: 'text-accent', color2: 'text-accent' },
  ]

  return (
    <MockFrame ref={containerRef} height="tall">
      <div
        data-panel=""
        className="absolute inset-0 rounded-brand bg-surface-white border border-border overflow-hidden"
        style={{ opacity: 0 }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 pt-4 pb-3">
          <div
            data-header=""
            className="flex items-center gap-2"
            style={{ opacity: 0 }}
          >
            <span className="text-eyebrow-sm font-body-medium uppercase tracking-eyebrow text-copy-light">
              Audience Reactions
            </span>
          </div>
          <div
            data-live-tag=""
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-accent/10"
            style={{ opacity: 0 }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="text-[9px] font-body-medium text-accent uppercase tracking-eyebrow">Live</span>
          </div>
        </div>

        {/* Audience grid — 3x2 */}
        <div className="px-5 pb-3">
          <div className="grid grid-cols-3 gap-2">
            {audience.map((person, i) => (
              <div
                key={person.name}
                className="relative text-center p-2.5 rounded-brand-sm bg-surface border border-border"
              >
                {/* Face circle */}
                <div
                  data-face=""
                  className="w-9 h-9 rounded-full bg-accent-soft/25 flex items-center justify-center mx-auto mb-1.5"
                  style={{ opacity: 0 }}
                >
                  <span className="text-[10px] font-body-medium text-accent">{person.initials}</span>
                </div>
                <p className="text-[9px] font-body-medium text-dark leading-tight">{person.name}</p>
                <p className="text-[8px] text-copy-faint">{person.role}</p>

                {/* State indicators — overlapping, one visible at a time */}
                <div className="relative h-3.5 mt-1">
                  <span
                    data-state-1=""
                    className={`absolute inset-x-0 text-[8px] font-body-medium ${person.color1}`}
                    style={{ opacity: 0 }}
                  >
                    {person.state1}
                  </span>
                  <span
                    data-state-2=""
                    className={`absolute inset-x-0 text-[8px] font-body-medium ${person.color2}`}
                    style={{ opacity: 0 }}
                  >
                    {person.state2}
                  </span>
                </div>

                {/* Subtle engagement dot */}
                <div
                  data-face=""
                  className={`absolute top-2 right-2 w-1.5 h-1.5 rounded-full ${
                    i < 3 ? 'bg-accent' : 'bg-accent-soft/50'
                  }`}
                  style={{ opacity: 0 }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Engagement bar */}
        <div className="px-5 pb-3">
          <div className="flex items-center gap-3">
            <span className="text-[9px] font-body-medium text-copy-faint uppercase tracking-eyebrow shrink-0">
              Engagement
            </span>
            <div
              data-engagement-bar=""
              className="flex-1 h-2 rounded-full bg-surface-alt overflow-hidden"
              style={{ opacity: 0 }}
            >
              <div
                data-engagement-fill=""
                className="h-full rounded-full bg-gradient-to-r from-accent-soft to-accent origin-left"
                style={{ transform: 'scaleX(0)' }}
              />
            </div>
            <span
              data-engagement-label=""
              className="text-caption font-body-medium text-accent shrink-0 tabular-nums"
              style={{ opacity: 0 }}
            >
              78%
            </span>
          </div>
        </div>

        {/* Insight area — overlapping */}
        <div className="px-5 pb-5">
          <div className="relative min-h-[40px]">
            <div
              data-insight-1=""
              className="absolute inset-x-0 top-0 flex items-start gap-2 px-3.5 py-2.5 rounded-brand-sm bg-accent-whisper border border-accent-soft/30"
              style={{ opacity: 0 }}
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-accent shrink-0 mt-0.5">
                <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.2" />
                <path d="M6 3.5v3M6 8v.01" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
              <p className="text-[10px] text-accent/90 leading-relaxed">
                Rachel looks confused — consider pausing to check understanding before continuing.
              </p>
            </div>
            <div
              data-insight-2=""
              className="absolute inset-x-0 top-0 flex items-start gap-2 px-3.5 py-2.5 rounded-brand-sm bg-accent-whisper border border-accent-soft/30"
              style={{ opacity: 0 }}
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-accent shrink-0 mt-0.5">
                <path d="M2.5 6.5L5 9L9.5 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p className="text-[10px] text-accent/90 leading-relaxed">
                Good recovery. Engagement lifted after you addressed Rachel&apos;s concern directly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </MockFrame>
  )
}
