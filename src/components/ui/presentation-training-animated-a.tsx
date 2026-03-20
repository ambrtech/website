'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { gsapRevealEase } from '@/lib/easing'
import { MockFrame } from '@/components/ui/mock-frame'

/* ─────────────────────────────────────────────────────
   Presentation Training A: "The Slide & Speaker View"

   A presenter's-eye view of the experience. Shows a slide
   deck area with speaker notes, a live timer counting up,
   and subtle audience reaction indicators at the bottom.
   The slide advances mid-cycle, notes update, and a
   real-time coaching tip slides in. Feels like watching
   someone mid-presentation from the speaker's perspective.
   ───────────────────────────────────────────────────── */

export function PresentationTrainingAnimatedA() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const el = containerRef.current
      if (!el) return

      const panel = el.querySelector('[data-panel]')
      const topBar = el.querySelector('[data-top-bar]')
      const slide1 = el.querySelector('[data-slide-1]')
      const slide2 = el.querySelector('[data-slide-2]')
      const slideCounter = el.querySelector('[data-slide-counter]')
      const notes1 = el.querySelector('[data-notes-1]')
      const notes2 = el.querySelector('[data-notes-2]')
      const timer = el.querySelector('[data-timer]')
      const reactions = el.querySelectorAll('[data-reaction]')
      const coachTip = el.querySelector('[data-coach-tip]')

      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.8,
        defaults: { ease: gsapRevealEase },
      })

      /* Reset timer each loop */
      const timerObj = { val: 0 }
      tl.call(() => {
        timerObj.val = 0
        if (timer) timer.textContent = '4:32'
        if (slideCounter) slideCounter.textContent = 'Slide 3 / 8'
      })

      /* Initial state */
      tl.set(panel, { opacity: 0, scale: 0.97 })
      tl.set(topBar, { opacity: 0, y: -6 })
      tl.set(slide1, { opacity: 0, scale: 0.98 })
      tl.set(slide2, { opacity: 0, scale: 0.98 })
      tl.set(notes1, { opacity: 0, y: 10 })
      tl.set(notes2, { opacity: 0, y: 10 })
      tl.set(reactions, { opacity: 0, y: 6 })
      tl.set(coachTip, { opacity: 0, x: 20 })

      /* Phase 1: Panel + top bar appear */
      tl.to(panel, { opacity: 1, scale: 1, duration: 0.4, ease: 'power2.out' })
      tl.to(topBar, { opacity: 1, y: 0, duration: 0.3 }, '-=0.2')

      /* Phase 2: Slide 1 + notes appear */
      tl.to(slide1, { opacity: 1, scale: 1, duration: 0.5, ease: 'power2.out' }, '-=0.1')
      tl.to(notes1, { opacity: 1, y: 0, duration: 0.4 }, '-=0.2')

      /* Phase 3: Timer counts up */
      const timerTl = gsap.timeline()
      timerTl.to(timerObj, {
        val: 8,
        duration: 10,
        ease: 'none',
        onUpdate: () => {
          const v = Math.floor(timerObj.val)
          if (timer) timer.textContent = `${4 + Math.floor(v / 60)}:${String(32 + (v % 60)).padStart(2, '0')}`
        },
      })

      /* Phase 4: Audience reactions appear staggered */
      tl.to(reactions, {
        opacity: 1,
        y: 0,
        duration: 0.3,
        stagger: 0.12,
        ease: 'power2.out',
      })

      /* Hold slide 1 */
      tl.to({}, { duration: 2.0 })

      /* Phase 5: Slide transition — 1 fades, 2 appears */
      tl.to([slide1, notes1], { opacity: 0, duration: 0.3, ease: 'power1.in' })
      tl.call(() => {
        if (slideCounter) slideCounter.textContent = 'Slide 4 / 8'
      })
      tl.to(slide2, { opacity: 1, scale: 1, duration: 0.5, ease: 'power2.out' })
      tl.to(notes2, { opacity: 1, y: 0, duration: 0.4 }, '-=0.2')

      /* Phase 6: Coach tip slides in */
      tl.to(coachTip, { opacity: 1, x: 0, duration: 0.4, ease: 'power2.out' }, '-=0.1')

      /* Hold slide 2 + coach tip */
      tl.to({}, { duration: 2.5 })

      /* Phase 7: Everything fades out */
      tl.call(() => { timerTl.kill() })
      tl.to(
        [panel, topBar, slide2, notes2, ...reactions, coachTip],
        { opacity: 0, duration: 0.8, ease: 'power1.inOut' }
      )
    },
    { scope: containerRef }
  )

  return (
    <MockFrame ref={containerRef} height="tall">
      {/* Panel background */}
      <div
        data-panel=""
        className="absolute inset-0 rounded-brand bg-surface-white border border-border overflow-hidden"
        style={{ opacity: 0 }}
      >
        {/* Top bar */}
        <div
          data-top-bar=""
          className="flex items-center justify-between px-5 pt-4 pb-3 border-b border-border"
          style={{ opacity: 0 }}
        >
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="text-eyebrow-sm font-body-medium uppercase tracking-eyebrow text-accent">
              Presentation Mode
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span
              data-timer=""
              className="text-caption font-body-medium text-copy-light tabular-nums"
            >
              4:32
            </span>
            <span className="text-caption text-copy-faint">/</span>
            <span className="text-caption text-copy-faint">15:00</span>
          </div>
        </div>

        {/* Content area */}
        <div className="px-5 pt-4 pb-4">
          {/* Slide area — stacked, only one visible at a time */}
          <div className="relative aspect-[16/9] rounded-brand-sm bg-dark/[0.03] border border-border mb-3 overflow-hidden">
            {/* Slide 1: Q3 Revenue Overview */}
            <div
              data-slide-1=""
              className="absolute inset-0 flex flex-col items-center justify-center p-6"
              style={{ opacity: 0 }}
            >
              <div className="text-center space-y-3">
                <p className="font-heading text-ui tracking-heading text-dark">Q3 Revenue Overview</p>
                <div className="flex items-end justify-center gap-3 h-16">
                  <div className="w-6 rounded-t bg-accent-soft/50 h-8" />
                  <div className="w-6 rounded-t bg-accent-soft/70 h-11" />
                  <div className="w-6 rounded-t bg-accent h-16" />
                </div>
                <div className="flex justify-center gap-3">
                  <span className="text-[9px] text-copy-faint">Q1</span>
                  <span className="text-[9px] text-copy-faint">Q2</span>
                  <span className="text-[9px] text-copy-light font-body-medium">Q3</span>
                </div>
              </div>
            </div>

            {/* Slide 2: Implementation Timeline */}
            <div
              data-slide-2=""
              className="absolute inset-0 flex flex-col items-center justify-center p-6"
              style={{ opacity: 0 }}
            >
              <div className="text-center space-y-3 w-full max-w-[200px]">
                <p className="font-heading text-ui tracking-heading text-dark">Implementation Timeline</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <div className="flex-1 h-1.5 rounded-full bg-accent-soft/40">
                      <div className="h-full rounded-full bg-accent" style={{ width: '100%' }} />
                    </div>
                    <span className="text-[8px] text-copy-faint">Phase 1</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent-soft" />
                    <div className="flex-1 h-1.5 rounded-full bg-accent-soft/40">
                      <div className="h-full rounded-full bg-accent-soft" style={{ width: '60%' }} />
                    </div>
                    <span className="text-[8px] text-copy-faint">Phase 2</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-copy-faint/30" />
                    <div className="flex-1 h-1.5 rounded-full bg-accent-soft/40" />
                    <span className="text-[8px] text-copy-faint">Phase 3</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide counter */}
            <div className="absolute bottom-2 right-2">
              <span
                data-slide-counter=""
                className="text-[10px] bg-surface-white/90 border border-border rounded-brand-sm px-2 py-0.5 text-copy-faint tabular-nums"
              >
                Slide 3 / 8
              </span>
            </div>
          </div>

          {/* Speaker notes — stacked, only one visible at a time */}
          <div className="relative min-h-[52px] mb-3">
            <div
              data-notes-1=""
              className="absolute inset-x-0 top-0 px-3.5 py-2.5 rounded-brand-sm bg-surface border border-border"
              style={{ opacity: 0 }}
            >
              <p className="text-[9px] font-body-medium text-copy-faint uppercase tracking-eyebrow mb-1">
                Speaker Notes
              </p>
              <p className="text-caption text-copy-mid leading-relaxed">
                Emphasize the 24% quarter-over-quarter growth. Pause before the revenue figure for impact.
              </p>
            </div>
            <div
              data-notes-2=""
              className="absolute inset-x-0 top-0 px-3.5 py-2.5 rounded-brand-sm bg-surface border border-border"
              style={{ opacity: 0 }}
            >
              <p className="text-[9px] font-body-medium text-copy-faint uppercase tracking-eyebrow mb-1">
                Speaker Notes
              </p>
              <p className="text-caption text-copy-mid leading-relaxed">
                Walk through each phase deliberately. Mark will likely ask about Phase 2 resourcing.
              </p>
            </div>
          </div>

          {/* Audience reactions */}
          <div className="grid grid-cols-3 gap-2 mb-3">
            {[
              { name: 'Sarah (CFO)', state: 'Nodding' },
              { name: 'Mark (CTO)', state: 'Attentive' },
              { name: 'Lisa (VP Ops)', state: 'Taking notes' },
            ].map((person) => (
              <div
                key={person.name}
                data-reaction=""
                className="flex items-center gap-2 px-2.5 py-2 rounded-brand-sm bg-surface border border-border"
                style={{ opacity: 0 }}
              >
                <div className="w-5 h-5 rounded-full bg-accent-soft/30 shrink-0" />
                <div className="min-w-0">
                  <p className="text-[9px] font-body-medium text-copy-mid truncate">{person.name}</p>
                  <p className="text-[8px] text-copy-faint">{person.state}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Coaching tip */}
          <div
            data-coach-tip=""
            className="flex items-start gap-2 px-3.5 py-2.5 rounded-brand-sm bg-accent-whisper border border-accent-soft/30"
            style={{ opacity: 0 }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-accent shrink-0 mt-0.5">
              <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.2" />
              <path d="M7 4v3.5M7 9.5v.01" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
            </svg>
            <p className="text-[11px] text-accent/90 leading-relaxed">
              Slow down before the timeline slide. Let each phase land before moving on.
            </p>
          </div>
        </div>
      </div>
    </MockFrame>
  )
}
