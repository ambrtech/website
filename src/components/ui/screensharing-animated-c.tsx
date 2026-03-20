'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { gsapRevealEase } from '@/lib/easing'
import { MockFrame } from '@/components/ui/mock-frame'

/* ─────────────────────────────────────────────────────
   Concept C: "The Training Feedback Overlay"

   Shows the screen share from the coaching perspective.
   A shared screen is visible in the background, with
   real-time coaching annotations appearing as overlays
   — timing cues, emphasis suggestions, and a coaching
   sidebar that scores the demo as it progresses.
   ───────────────────────────────────────────────────── */

export function ScreensharingAnimatedC() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const el = containerRef.current
      if (!el) return

      const bg = el.querySelector('[data-bg]')
      const screen = el.querySelector('[data-screen]')
      const sidebar = el.querySelector('[data-sidebar]')
      const timer = el.querySelector('[data-timer]')
      const annotation1 = el.querySelector('[data-ann-1]')
      const annotation2 = el.querySelector('[data-ann-2]')
      const annotation3 = el.querySelector('[data-ann-3]')
      const momentTag1 = el.querySelector('[data-moment-1]')
      const momentTag2 = el.querySelector('[data-moment-2]')
      const momentTag3 = el.querySelector('[data-moment-3]')
      const progressBar = el.querySelector('[data-progress]')
      const coachingCard = el.querySelector('[data-coaching]')

      const timerObj = { val: 0 }

      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.8,
        defaults: { ease: gsapRevealEase },
      })

      /* Reset timer */
      tl.call(() => {
        timerObj.val = 0
        if (timer) timer.textContent = '02:00'
      })

      /* Initial state */
      tl.set(bg, { opacity: 0 })
      tl.set(screen, { opacity: 0, scale: 0.95 })
      tl.set(sidebar, { opacity: 0, x: 20 })
      tl.set(timer, { opacity: 0 })
      tl.set(annotation1, { opacity: 0, scale: 0.8 })
      tl.set(annotation2, { opacity: 0, scale: 0.8 })
      tl.set(annotation3, { opacity: 0, scale: 0.8 })
      tl.set(momentTag1, { opacity: 0, y: 4 })
      tl.set(momentTag2, { opacity: 0, y: 4 })
      tl.set(momentTag3, { opacity: 0, y: 4 })
      tl.set(progressBar, { scaleX: 0 })
      tl.set(coachingCard, { opacity: 0, y: 10 })

      /* Phase 1: Background + screen appear */
      tl.to(bg, { opacity: 1, duration: 0.5, ease: 'power1.out' })
      tl.to(screen, { opacity: 1, scale: 1, duration: 0.5, ease: 'power2.out' }, '-=0.2')
      tl.to(timer, { opacity: 1, duration: 0.2 }, '-=0.1')

      /* Phase 2: Sidebar slides in */
      tl.to(sidebar, { opacity: 1, x: 0, duration: 0.5, ease: 'power2.out' })

      /* Phase 3: Progress bar starts filling */
      const progressTl = gsap.timeline()
      progressTl.to(progressBar, {
        scaleX: 1,
        duration: 10,
        ease: 'none',
      })

      /* Timer counting */
      const timerTl = gsap.timeline()
      timerTl.to(timerObj, {
        val: 35,
        duration: 10,
        ease: 'none',
        onUpdate: () => {
          const v = Math.floor(timerObj.val)
          const mins = Math.floor((120 + v) / 60)
          const secs = (120 + v) % 60
          if (timer) timer.textContent = `0${mins}:${String(secs).padStart(2, '0')}`
        },
      })

      /* Phase 4: First annotation — timing cue */
      tl.to(annotation1, { opacity: 1, scale: 1, duration: 0.35, ease: 'back.out(2)' })
      tl.to(momentTag1, { opacity: 1, y: 0, duration: 0.3 }, '-=0.15')

      /* Hold */
      tl.to({}, { duration: 1.5 })

      /* Phase 5: First fades, second appears */
      tl.to([annotation1, momentTag1], { opacity: 0, duration: 0.3 })
      tl.to(annotation2, { opacity: 1, scale: 1, duration: 0.35, ease: 'back.out(2)' })
      tl.to(momentTag2, { opacity: 1, y: 0, duration: 0.3 }, '-=0.15')

      /* Hold */
      tl.to({}, { duration: 1.5 })

      /* Phase 6: Second fades, third appears */
      tl.to([annotation2, momentTag2], { opacity: 0, duration: 0.3 })
      tl.to(annotation3, { opacity: 1, scale: 1, duration: 0.35, ease: 'back.out(2)' })
      tl.to(momentTag3, { opacity: 1, y: 0, duration: 0.3 }, '-=0.15')

      /* Phase 7: Coaching summary card */
      tl.to(coachingCard, { opacity: 1, y: 0, duration: 0.5 }, '-=0.1')

      /* Hold */
      tl.to({}, { duration: 2 })

      /* Phase 8: Fade out */
      tl.call(() => { progressTl.kill(); timerTl.kill() })
      tl.to(
        [bg, screen, sidebar, timer, annotation3, momentTag3, coachingCard],
        {
          opacity: 0,
          duration: 0.9,
          ease: 'power1.inOut',
        }
      )
    },
    { scope: containerRef }
  )

  return (
    <MockFrame ref={containerRef} height="tall">
      {/* Background */}
      <div
        data-bg=""
        className="absolute inset-0 rounded-brand bg-surface"
        style={{ opacity: 0 }}
      />

      <div className="relative px-5 py-5 md:px-6">
        {/* Top bar: timer + recording label */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="text-eyebrow-sm font-body-medium uppercase tracking-eyebrow text-accent">
              Demo Practice
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span
              data-timer=""
              className="text-[11px] font-body-medium text-copy-light tabular-nums bg-surface-white px-2.5 py-1 rounded border border-border"
              style={{ opacity: 0 }}
            >
              02:00
            </span>
          </div>
        </div>

        {/* Main area: screen + sidebar */}
        <div className="flex gap-3">
          {/* Shared screen mock */}
          <div
            data-screen=""
            className="flex-1 relative rounded-brand-sm bg-surface-white border border-border overflow-hidden"
            style={{ opacity: 0 }}
          >
            {/* Mini browser bar */}
            <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-surface border-b border-border">
              <div className="flex gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-copy-faint/20" />
                <span className="w-1.5 h-1.5 rounded-full bg-copy-faint/20" />
                <span className="w-1.5 h-1.5 rounded-full bg-copy-faint/20" />
              </div>
            </div>

            {/* Screen content — a slide deck */}
            <div className="px-4 py-4 min-h-[200px]">
              {/* Slide title */}
              <div className="h-2.5 w-24 rounded bg-dark/10 mb-3" />
              <div className="h-1.5 w-36 rounded bg-dark/[0.06] mb-5" />

              {/* Slide content — feature comparison */}
              <div className="space-y-2.5">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-accent-soft/40 shrink-0" />
                  <div className="h-1.5 flex-1 rounded bg-dark/[0.06]" />
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-accent-soft/40 shrink-0" />
                  <div className="h-1.5 w-4/5 rounded bg-dark/[0.06]" />
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-accent-soft/40 shrink-0" />
                  <div className="h-1.5 w-3/5 rounded bg-dark/[0.06]" />
                </div>
              </div>

              {/* Chart area */}
              <div className="mt-4 flex items-end gap-1.5 h-12">
                {[30, 45, 55, 70, 65, 80, 75, 85].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t bg-accent-soft/20"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>

              {/* Annotation overlays — positioned on the screen */}
              {/* Annotation 1: Timing cue near the title */}
              <div
                data-ann-1=""
                className="absolute top-12 left-6 flex items-center gap-1.5 px-2 py-1 rounded bg-accent/90 shadow-sm"
                style={{ opacity: 0 }}
              >
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <circle cx="5" cy="5" r="4" stroke="white" strokeWidth="0.8" />
                  <path d="M5 3V5.5L6.5 6.5" stroke="white" strokeWidth="0.8" strokeLinecap="round" />
                </svg>
                <span className="text-[8px] font-body-medium text-surface-white">Spend more time here</span>
              </div>

              {/* Annotation 2: Emphasis suggestion near features */}
              <div
                data-ann-2=""
                className="absolute top-[110px] right-4 flex items-center gap-1.5 px-2 py-1 rounded bg-accent/90 shadow-sm"
                style={{ opacity: 0 }}
              >
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M5 1L6.5 4H8.5L7 6L7.5 9L5 7.5L2.5 9L3 6L1.5 4H3.5L5 1Z" fill="white" />
                </svg>
                <span className="text-[8px] font-body-medium text-surface-white">Lead with this metric</span>
              </div>

              {/* Annotation 3: Pacing note near chart */}
              <div
                data-ann-3=""
                className="absolute bottom-16 left-8 flex items-center gap-1.5 px-2 py-1 rounded bg-accent/90 shadow-sm"
                style={{ opacity: 0 }}
              >
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <rect x="1" y="2" width="8" height="6" rx="1" stroke="white" strokeWidth="0.8" />
                  <path d="M4 4L7 5L4 6V4Z" fill="white" />
                </svg>
                <span className="text-[8px] font-body-medium text-surface-white">Slow down for impact</span>
              </div>
            </div>

            {/* Progress bar at bottom */}
            <div className="h-[3px] bg-surface-alt">
              <div
                data-progress=""
                className="h-full bg-accent origin-left"
                style={{ transform: 'scaleX(0)' }}
              />
            </div>
          </div>

          {/* Coaching sidebar */}
          <div
            data-sidebar=""
            className="w-[130px] shrink-0 flex flex-col gap-2.5"
            style={{ opacity: 0 }}
          >
            {/* Sidebar header */}
            <div className="px-2.5 py-2 rounded-brand-sm bg-surface-white border border-border">
              <p className="text-[9px] font-body-medium uppercase tracking-eyebrow text-copy-light mb-2">
                Coaching
              </p>
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] text-copy-mid">Pacing</span>
                  <span className="w-3 h-3 rounded-full bg-accent-soft/40 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-soft" />
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[9px] text-copy-mid">Clarity</span>
                  <span className="w-3 h-3 rounded-full bg-accent-soft/40 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[9px] text-copy-mid">Structure</span>
                  <span className="w-3 h-3 rounded-full bg-accent-soft/40 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-soft" />
                  </span>
                </div>
              </div>
            </div>

            {/* Moments captured */}
            <div className="px-2.5 py-2 rounded-brand-sm bg-surface-white border border-border">
              <p className="text-[9px] font-body-medium uppercase tracking-eyebrow text-copy-light mb-2">
                Key Moments
              </p>
              <div className="space-y-1.5">
                <div
                  data-moment-1=""
                  className="text-[9px] text-accent leading-tight"
                  style={{ opacity: 0 }}
                >
                  0:12 — Timing note
                </div>
                <div
                  data-moment-2=""
                  className="text-[9px] text-accent leading-tight"
                  style={{ opacity: 0 }}
                >
                  0:24 — Emphasis cue
                </div>
                <div
                  data-moment-3=""
                  className="text-[9px] text-accent leading-tight"
                  style={{ opacity: 0 }}
                >
                  0:31 — Pace feedback
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom coaching summary */}
        <div
          data-coaching=""
          className="mt-3 flex items-start gap-2.5 px-3.5 py-2.5 rounded-brand-sm bg-accent-whisper border border-accent-soft/30"
          style={{ opacity: 0 }}
        >
          <div className="shrink-0 w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center mt-0.5">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="text-accent">
              <path
                d="M5 1.5C3.067 1.5 1.5 3.067 1.5 5S3.067 8.5 5 8.5 8.5 6.933 8.5 5 6.933 1.5 5 1.5Z"
                stroke="currentColor"
                strokeWidth="0.9"
              />
              <path d="M5 3.5V5.5M5 7V7.01" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
            </svg>
          </div>
          <p className="text-caption text-copy-mid leading-relaxed">
            You moved through the pricing section quickly. Try pausing after your retention stat to let it land.
          </p>
        </div>
      </div>
    </MockFrame>
  )
}
