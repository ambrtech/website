'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { gsapRevealEase } from '@/lib/easing'

/* ─────────────────────────────────────────────────────
   Concept A: "The Demo in Motion"

   Focuses on the cursor + screen inception effect.
   A mock product screen with an animated cursor moving
   between elements while a conversation transcript
   flows beneath. The cursor pauses on UI elements and
   the AI responds contextually to what's being shown.
   ───────────────────────────────────────────────────── */

function CursorIcon({ className }: { className?: string }) {
  return (
    <svg
      width="16"
      height="20"
      viewBox="0 0 16 20"
      fill="none"
      className={className}
    >
      <path
        d="M1 1L1 14.5L4.5 11L8.5 18L10.5 17L6.5 10L11.5 10L1 1Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function ScreensharingAnimatedA() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const el = containerRef.current
      if (!el) return

      const bg = el.querySelector('[data-bg]')
      const screenHeader = el.querySelector('[data-screen-header]')
      const screenContent = el.querySelector('[data-screen-content]')
      const cursor = el.querySelector('[data-cursor]')
      const liveIndicator = el.querySelector('[data-live]')
      const aiChip = el.querySelector('[data-ai-chip]')
      const transcript1 = el.querySelector('[data-transcript-1]')
      const transcript2 = el.querySelector('[data-transcript-2]')
      const highlight1 = el.querySelector('[data-hl-1]')
      const highlight2 = el.querySelector('[data-hl-2]')

      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.8,
        defaults: { ease: gsapRevealEase },
      })

      /* Initial state */
      tl.set(bg, { opacity: 0 })
      tl.set(screenHeader, { opacity: 0, y: -8 })
      tl.set(screenContent, { opacity: 0 })
      tl.set(cursor, { opacity: 0, x: 60, y: 40 })
      tl.set(liveIndicator, { opacity: 0, scale: 0.8 })
      tl.set(aiChip, { opacity: 0, y: 8 })
      tl.set(transcript1, { opacity: 0, clipPath: 'inset(0 100% 0 0)' })
      tl.set(transcript2, { opacity: 0, clipPath: 'inset(0 100% 0 0)' })
      tl.set(highlight1, { opacity: 0 })
      tl.set(highlight2, { opacity: 0 })

      /* Phase 1: Screen appears */
      tl.to(bg, { opacity: 1, duration: 0.5, ease: 'power1.out' })
      tl.to(screenHeader, { opacity: 1, y: 0, duration: 0.4 }, '-=0.2')
      tl.to(screenContent, { opacity: 1, duration: 0.4 }, '-=0.2')
      tl.to(liveIndicator, { opacity: 1, scale: 1, duration: 0.3, ease: 'back.out(2)' }, '-=0.2')

      /* Phase 2: AI watching chip appears */
      tl.to(aiChip, { opacity: 1, y: 0, duration: 0.35 })

      /* Phase 3: Cursor appears and moves to first element */
      tl.to(cursor, { opacity: 1, duration: 0.2 })
      tl.to(cursor, {
        x: 30,
        y: 55,
        duration: 0.8,
        ease: 'power2.inOut',
      })

      /* Phase 3b: First element highlights on hover */
      tl.to(highlight1, { opacity: 1, duration: 0.2 })

      /* Phase 4: User speaks about first element — transcript reveals */
      tl.to(transcript1, {
        opacity: 1,
        clipPath: 'inset(0 0% 0 0)',
        duration: 1.2,
        ease: 'power1.inOut',
      })

      /* Hold on first element */
      tl.to({}, { duration: 1.8 })

      /* Phase 5: Cursor moves to second element */
      tl.to(highlight1, { opacity: 0, duration: 0.2 })
      tl.to(transcript1, { opacity: 0, duration: 0.3 }, '-=0.1')
      tl.to(cursor, {
        x: 155,
        y: 85,
        duration: 0.9,
        ease: 'power2.inOut',
      })
      tl.to(highlight2, { opacity: 1, duration: 0.2 })

      /* Phase 6: AI responds — second transcript */
      tl.to(transcript2, {
        opacity: 1,
        clipPath: 'inset(0 0% 0 0)',
        duration: 1.2,
        ease: 'power1.inOut',
      })

      /* Hold */
      tl.to({}, { duration: 2 })

      /* Phase 7: Fade out */
      tl.to(
        [bg, screenHeader, screenContent, cursor, liveIndicator, aiChip, transcript2, highlight2],
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
    <div ref={containerRef} className="relative min-h-[420px]">
      {/* Background */}
      <div
        data-bg=""
        className="absolute inset-0 rounded-brand bg-accent-whisper"
        style={{ opacity: 0 }}
      />

      <div className="relative px-5 py-6 md:px-7">
        {/* Live indicator + share label */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="text-eyebrow-sm font-body-medium uppercase tracking-eyebrow text-accent">
              Screen Share Active
            </span>
          </div>
          <div
            data-live=""
            className="flex items-center gap-1.5 bg-surface-white px-2.5 py-1 rounded-full border border-border"
            style={{ opacity: 0 }}
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-[10px] text-copy-mid font-body-medium">Live</span>
          </div>
        </div>

        {/* Mock shared screen */}
        <div className="relative rounded-brand-sm bg-surface-white border border-border overflow-hidden">
          {/* Browser-like header bar */}
          <div
            data-screen-header=""
            className="flex items-center gap-2 px-3 py-2 border-b border-border bg-surface"
            style={{ opacity: 0 }}
          >
            <div className="flex gap-1.5">
              <span className="w-2 h-2 rounded-full bg-copy-faint/30" />
              <span className="w-2 h-2 rounded-full bg-copy-faint/30" />
              <span className="w-2 h-2 rounded-full bg-copy-faint/30" />
            </div>
            <div className="flex-1 h-4 rounded bg-surface-alt mx-6 flex items-center px-2">
              <span className="text-[8px] text-copy-faint">app.acmecorp.io/dashboard</span>
            </div>
          </div>

          {/* Screen content — mock dashboard */}
          <div
            data-screen-content=""
            className="relative px-4 py-4 min-h-[180px]"
            style={{ opacity: 0 }}
          >
            {/* Nav tabs */}
            <div className="flex items-center gap-3 mb-4">
              <div className="h-2 w-16 rounded bg-dark/10" />
              <div className="h-2 w-12 rounded bg-dark/5" />
              <div className="h-2 w-14 rounded bg-dark/5" />
            </div>

            {/* Dashboard grid */}
            <div className="grid grid-cols-3 gap-3">
              {/* Card 1 — highlight target */}
              <div className="relative">
                <div
                  data-hl-1=""
                  className="absolute inset-0 rounded-brand-sm ring-2 ring-accent/50 bg-accent/[0.04]"
                  style={{ opacity: 0 }}
                />
                <div className="aspect-[4/3] rounded-brand-sm bg-accent-whisper border border-accent-soft/30 p-2.5 flex flex-col justify-between">
                  <span className="text-[8px] font-body-medium text-copy-light">Revenue</span>
                  <span className="font-heading text-caption text-dark">$2.4M</span>
                  <div className="h-1 w-full rounded bg-accent-soft/30 overflow-hidden">
                    <div className="h-full w-[72%] rounded bg-accent-soft" />
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="aspect-[4/3] rounded-brand-sm bg-surface border border-border p-2.5 flex flex-col justify-between">
                <span className="text-[8px] font-body-medium text-copy-light">Users</span>
                <span className="font-heading text-caption text-dark">12.8k</span>
                <div className="h-1 w-full rounded bg-surface-alt overflow-hidden">
                  <div className="h-full w-[58%] rounded bg-copy-faint/40" />
                </div>
              </div>

              {/* Card 3 — highlight target */}
              <div className="relative">
                <div
                  data-hl-2=""
                  className="absolute inset-0 rounded-brand-sm ring-2 ring-accent/50 bg-accent/[0.04]"
                  style={{ opacity: 0 }}
                />
                <div className="aspect-[4/3] rounded-brand-sm bg-surface border border-border p-2.5 flex flex-col justify-between">
                  <span className="text-[8px] font-body-medium text-copy-light">Retention</span>
                  <span className="font-heading text-caption text-dark">94.2%</span>
                  <div className="h-1 w-full rounded bg-surface-alt overflow-hidden">
                    <div className="h-full w-[94%] rounded bg-accent-soft" />
                  </div>
                </div>
              </div>
            </div>

            {/* Chart placeholder row */}
            <div className="mt-3 flex items-end gap-1 h-10">
              {[28, 42, 35, 52, 38, 48, 55, 60, 45, 52, 58, 64].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t bg-accent-soft/25"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>

            {/* Cursor */}
            <div
              data-cursor=""
              className="absolute text-dark z-10"
              style={{ opacity: 0, left: 0, top: 0 }}
            >
              <CursorIcon />
            </div>
          </div>
        </div>

        {/* AI watching indicator */}
        <div
          data-ai-chip=""
          className="flex items-center gap-2 mt-3 px-3 py-2 rounded-brand-sm bg-surface-white border border-border"
          style={{ opacity: 0 }}
        >
          <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="text-accent">
              <ellipse cx="5" cy="5" rx="4" ry="2.8" stroke="currentColor" strokeWidth="0.8" />
              <circle cx="5" cy="5" r="1.5" fill="currentColor" />
            </svg>
          </div>
          <span className="text-[10px] text-copy-mid">
            AI is observing your screen
          </span>
        </div>

        {/* Transcript area */}
        <div className="relative min-h-[52px] mt-3">
          {/* User speaking about dashboard */}
          <div
            data-transcript-1=""
            className="absolute inset-x-0 top-0 flex items-center gap-3 px-3.5 py-2.5 rounded-brand-sm bg-surface-white border border-border"
            style={{ opacity: 0 }}
          >
            <div className="w-6 h-6 rounded-full bg-surface-alt flex items-center justify-center shrink-0">
              <span className="text-[8px] font-body-medium text-copy-mid">You</span>
            </div>
            <p className="text-caption text-copy-mid leading-relaxed">
              &ldquo;So here you can see our revenue has hit $2.4M this quarter...&rdquo;
            </p>
          </div>

          {/* AI response */}
          <div
            data-transcript-2=""
            className="absolute inset-x-0 top-0 flex items-center gap-3 px-3.5 py-2.5 rounded-brand-sm bg-accent-whisper border border-accent-soft/30"
            style={{ opacity: 0 }}
          >
            <div className="w-6 h-6 rounded-full bg-accent-soft/30 flex items-center justify-center shrink-0">
              <span className="text-[8px] font-body-medium text-accent">AI</span>
            </div>
            <p className="text-caption text-copy-mid leading-relaxed">
              &ldquo;Impressive retention at 94%. What&apos;s driving that number?&rdquo;
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
