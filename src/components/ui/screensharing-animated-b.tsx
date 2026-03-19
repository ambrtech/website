'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { gsapRevealEase } from '@/lib/easing'

/* ─────────────────────────────────────────────────────
   Concept B: "The AI's Perspective"

   Focuses on how the AI character perceives and reacts
   to the shared screen. Split layout: left shows a
   small inset of the shared screen, right shows the
   AI character's face and thought process — scanning
   lines sweep across the screen, and the AI's reaction
   bubbles appear as contextual observations.
   ───────────────────────────────────────────────────── */

export function ScreensharingAnimatedB() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const el = containerRef.current
      if (!el) return

      const bg = el.querySelector('[data-bg]')
      const eyebrow = el.querySelector('[data-eyebrow]')
      const screenInset = el.querySelector('[data-screen-inset]')
      const scanLine = el.querySelector('[data-scan-line]')
      const aiAvatar = el.querySelector('[data-ai-avatar]')
      const aiName = el.querySelector('[data-ai-name]')
      const processingDots = el.querySelector('[data-processing]')
      const observation1 = el.querySelector('[data-obs-1]')
      const observation2 = el.querySelector('[data-obs-2]')
      const observation3 = el.querySelector('[data-obs-3]')
      const followUp = el.querySelector('[data-follow-up]')

      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.8,
        defaults: { ease: gsapRevealEase },
      })

      /* Initial state */
      tl.set(bg, { opacity: 0 })
      tl.set(eyebrow, { opacity: 0, y: 6 })
      tl.set(screenInset, { opacity: 0, scale: 0.92 })
      tl.set(scanLine, { opacity: 0, top: '0%' })
      tl.set(aiAvatar, { opacity: 0, scale: 0.8 })
      tl.set(aiName, { opacity: 0, y: 4 })
      tl.set(processingDots, { opacity: 0 })
      tl.set(observation1, { opacity: 0, x: 16 })
      tl.set(observation2, { opacity: 0, x: 16 })
      tl.set(observation3, { opacity: 0, x: 16 })
      tl.set(followUp, { opacity: 0, y: 8 })

      /* Phase 1: Background + eyebrow */
      tl.to(bg, { opacity: 1, duration: 0.5, ease: 'power1.out' })
      tl.to(eyebrow, { opacity: 1, y: 0, duration: 0.35 }, '-=0.2')

      /* Phase 2: AI avatar + name appear */
      tl.to(aiAvatar, { opacity: 1, scale: 1, duration: 0.5, ease: 'power2.out' })
      tl.to(aiName, { opacity: 1, y: 0, duration: 0.3 }, '-=0.25')

      /* Phase 3: Screen inset appears */
      tl.to(screenInset, { opacity: 1, scale: 1, duration: 0.5, ease: 'power2.out' })

      /* Phase 4: Scan line sweeps across the screen */
      tl.to(scanLine, { opacity: 0.8, duration: 0.1 })
      tl.to(scanLine, {
        top: '100%',
        duration: 1.8,
        ease: 'power1.inOut',
      })
      tl.to(scanLine, { opacity: 0, duration: 0.2 })

      /* Phase 5: Processing indicator */
      tl.to(processingDots, { opacity: 1, duration: 0.2 })
      tl.to({}, { duration: 0.6 })
      tl.to(processingDots, { opacity: 0, duration: 0.2 })

      /* Phase 6: AI observations appear one by one */
      tl.to(observation1, { opacity: 1, x: 0, duration: 0.4, ease: 'power2.out' })
      tl.to({}, { duration: 0.6 })
      tl.to(observation2, { opacity: 1, x: 0, duration: 0.4, ease: 'power2.out' })
      tl.to({}, { duration: 0.6 })
      tl.to(observation3, { opacity: 1, x: 0, duration: 0.4, ease: 'power2.out' })

      /* Phase 7: Follow-up question */
      tl.to(followUp, { opacity: 1, y: 0, duration: 0.5 })

      /* Hold */
      tl.to({}, { duration: 2.5 })

      /* Phase 8: Fade out */
      tl.to(
        [bg, eyebrow, screenInset, aiAvatar, aiName, observation1, observation2, observation3, followUp],
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
        className="absolute inset-0 rounded-brand bg-dark"
        style={{ opacity: 0 }}
      />

      <div className="relative px-5 py-6 md:px-7">
        {/* Eyebrow */}
        <div data-eyebrow="" className="flex items-center gap-2 mb-5" style={{ opacity: 0 }}>
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span className="text-eyebrow-sm font-body-medium uppercase tracking-eyebrow text-accent">
            AI Vision Active
          </span>
          <span className="ml-auto text-[10px] text-surface-white/30">Screen share</span>
        </div>

        {/* Main layout: AI character + screen */}
        <div className="flex gap-4 mb-5">
          {/* Left column: AI avatar */}
          <div className="flex flex-col items-center shrink-0 w-[72px]">
            <div
              data-ai-avatar=""
              className="w-14 h-14 rounded-full bg-accent/20 border-2 border-accent/40 flex items-center justify-center mb-2"
              style={{ opacity: 0 }}
            >
              {/* Stylized AI eye */}
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <ellipse cx="11" cy="11" rx="9" ry="5.5" stroke="currentColor" strokeWidth="1.2" className="text-accent" />
                <circle cx="11" cy="11" r="3" fill="currentColor" className="text-accent" />
                <circle cx="12" cy="10" r="1" className="text-dark" />
              </svg>
            </div>
            <p
              data-ai-name=""
              className="text-[10px] font-body-medium text-surface-white text-center"
              style={{ opacity: 0 }}
            >
              Sarah Chen
            </p>
            <p className="text-[8px] text-surface-white/35 text-center mt-0.5">
              VP Sales
            </p>
          </div>

          {/* Right column: Screen inset */}
          <div className="flex-1">
            <div
              data-screen-inset=""
              className="relative rounded-brand-sm bg-surface-white/[0.06] border border-surface-white/10 overflow-hidden"
              style={{ opacity: 0 }}
            >
              {/* Mini browser bar */}
              <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-surface-white/[0.04] border-b border-surface-white/[0.06]">
                <span className="w-1.5 h-1.5 rounded-full bg-surface-white/15" />
                <span className="w-1.5 h-1.5 rounded-full bg-surface-white/15" />
                <span className="w-1.5 h-1.5 rounded-full bg-surface-white/15" />
                <div className="flex-1 h-3 rounded bg-surface-white/[0.06] mx-3" />
              </div>

              {/* Mini product demo content */}
              <div className="px-3 py-3 space-y-2.5">
                {/* Product nav */}
                <div className="flex gap-2">
                  <div className="h-1.5 w-10 rounded bg-surface-white/10" />
                  <div className="h-1.5 w-8 rounded bg-accent/20" />
                  <div className="h-1.5 w-6 rounded bg-surface-white/[0.06]" />
                </div>

                {/* Pricing tiers */}
                <div className="grid grid-cols-3 gap-2">
                  <div className="h-10 rounded bg-surface-white/[0.04] border border-surface-white/[0.06] p-1.5">
                    <div className="h-1 w-5 rounded bg-surface-white/10 mb-1" />
                    <div className="h-1.5 w-6 rounded bg-surface-white/10" />
                  </div>
                  <div className="h-10 rounded bg-accent/10 border border-accent/15 p-1.5">
                    <div className="h-1 w-4 rounded bg-accent/25 mb-1" />
                    <div className="h-1.5 w-7 rounded bg-accent/30" />
                  </div>
                  <div className="h-10 rounded bg-surface-white/[0.04] border border-surface-white/[0.06] p-1.5">
                    <div className="h-1 w-7 rounded bg-surface-white/10 mb-1" />
                    <div className="h-1.5 w-5 rounded bg-surface-white/10" />
                  </div>
                </div>

                {/* Feature rows */}
                <div className="space-y-1">
                  <div className="h-1 w-full rounded bg-surface-white/[0.06]" />
                  <div className="h-1 w-3/4 rounded bg-surface-white/[0.06]" />
                </div>
              </div>

              {/* Scan line */}
              <div
                data-scan-line=""
                className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent"
                style={{ opacity: 0, top: '0%' }}
              />
            </div>
          </div>
        </div>

        {/* Processing indicator */}
        <div
          data-processing=""
          className="flex items-center gap-1.5 mb-3 px-3"
          style={{ opacity: 0 }}
        >
          <span className="w-1 h-1 rounded-full bg-accent/60 animate-pulse" />
          <span className="text-[10px] text-surface-white/40">Analyzing screen content...</span>
        </div>

        {/* AI observations — what the AI notices */}
        <div className="space-y-2 mb-4">
          <div
            data-obs-1=""
            className="flex items-start gap-2 px-3 py-2 rounded-brand-sm bg-surface-white/[0.04] border border-surface-white/[0.06]"
            style={{ opacity: 0 }}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-accent shrink-0 mt-0.5">
              <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="0.8" />
              <circle cx="6" cy="6" r="1.5" fill="currentColor" />
            </svg>
            <p className="text-[11px] text-surface-white/70 leading-relaxed">
              Pricing page visible — 3-tier model with Pro highlighted
            </p>
          </div>

          <div
            data-obs-2=""
            className="flex items-start gap-2 px-3 py-2 rounded-brand-sm bg-surface-white/[0.04] border border-surface-white/[0.06]"
            style={{ opacity: 0 }}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-accent shrink-0 mt-0.5">
              <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="0.8" />
              <circle cx="6" cy="6" r="1.5" fill="currentColor" />
            </svg>
            <p className="text-[11px] text-surface-white/70 leading-relaxed">
              Presenter skipped feature comparison — prospect may want detail
            </p>
          </div>

          <div
            data-obs-3=""
            className="flex items-start gap-2 px-3 py-2 rounded-brand-sm bg-accent/[0.08] border border-accent/15"
            style={{ opacity: 0 }}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-accent shrink-0 mt-0.5">
              <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="0.8" />
              <circle cx="6" cy="6" r="1.5" fill="currentColor" />
            </svg>
            <p className="text-[11px] text-accent/90 leading-relaxed">
              Enterprise tier not explained — high-value opportunity missed
            </p>
          </div>
        </div>

        {/* Follow-up question from AI */}
        <div
          data-follow-up=""
          className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-brand-sm bg-accent/[0.08] border border-accent/20"
          style={{ opacity: 0 }}
        >
          <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
            <span className="text-[8px] font-body-medium text-accent">AI</span>
          </div>
          <p className="text-caption text-surface-white/80 leading-relaxed">
            &ldquo;You mentioned custom pricing — can you walk me through what Enterprise includes?&rdquo;
          </p>
        </div>
      </div>
    </div>
  )
}
