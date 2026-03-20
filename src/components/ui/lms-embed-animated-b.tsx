'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { gsapRevealEase } from '@/lib/easing'
import { MockFrame } from '@/components/ui/mock-frame'

/* ─────────────────────────────────────────────────────
   LMS Embed B: "Before & After"

   A split-screen comparison. Left side shows traditional
   e-learning (slides, multiple-choice quiz, completion
   certificate). Right side shows Ambr AI (live conversation,
   real-time feedback, practiced skill). The left is grey
   and static; the right pulses with warmth. A divider
   line draws between them. Tells the story of upgrading
   from passive to active learning inside the same LMS.
   ───────────────────────────────────────────────────── */

export function LmsEmbedAnimatedB() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const el = containerRef.current
      if (!el) return

      const bg = el.querySelector('[data-bg]')
      const dividerLine = el.querySelector('[data-divider]')
      const leftLabel = el.querySelector('[data-left-label]')
      const rightLabel = el.querySelector('[data-right-label]')
      const leftItems = el.querySelectorAll('[data-left-item]')
      const rightItems = el.querySelectorAll('[data-right-item]')
      const leftBadge = el.querySelector('[data-left-badge]')
      const rightBadge = el.querySelector('[data-right-badge]')
      const rightGlow = el.querySelector('[data-right-glow]')
      const verdictLine = el.querySelector('[data-verdict]')

      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.8,
        defaults: { ease: gsapRevealEase },
      })

      /* Initial state */
      tl.set(bg, { opacity: 0 })
      tl.set(dividerLine, { scaleY: 0 })
      tl.set(leftLabel, { opacity: 0, y: -6 })
      tl.set(rightLabel, { opacity: 0, y: -6 })
      tl.set(leftItems, { opacity: 0, x: -10 })
      tl.set(rightItems, { opacity: 0, x: 10 })
      tl.set(leftBadge, { opacity: 0, scale: 0.7 })
      tl.set(rightBadge, { opacity: 0, scale: 0.7 })
      tl.set(rightGlow, { opacity: 0 })
      tl.set(verdictLine, { opacity: 0, y: 8 })

      /* Phase 1: Background */
      tl.to(bg, { opacity: 1, duration: 0.5, ease: 'power1.out' })

      /* Phase 2: Divider draws down the center */
      tl.to(dividerLine, { scaleY: 1, duration: 0.6, ease: 'power2.inOut' })

      /* Phase 3: Labels appear */
      tl.to(leftLabel, { opacity: 1, y: 0, duration: 0.3 }, '-=0.2')
      tl.to(rightLabel, { opacity: 1, y: 0, duration: 0.3 }, '-=0.2')

      /* Phase 4: Left side items (traditional) appear — grey, flat */
      tl.to(leftItems, {
        opacity: 1,
        x: 0,
        duration: 0.3,
        stagger: 0.12,
      })

      /* Phase 5: Left badge */
      tl.to(leftBadge, { opacity: 1, scale: 1, duration: 0.3 })

      /* Hold left side */
      tl.to({}, { duration: 0.8 })

      /* Phase 6: Right side items (Ambr AI) appear — warm, alive */
      tl.to(rightGlow, { opacity: 1, duration: 0.4, ease: 'power1.out' })
      tl.to(rightItems, {
        opacity: 1,
        x: 0,
        duration: 0.35,
        stagger: 0.12,
      }, '-=0.2')

      /* Phase 7: Right badge */
      tl.to(rightBadge, { opacity: 1, scale: 1, duration: 0.3, ease: 'back.out(2)' })

      /* Phase 8: Verdict */
      tl.to(verdictLine, { opacity: 1, y: 0, duration: 0.4 }, '+=0.3')

      /* Hold to appreciate */
      tl.to({}, { duration: 2.8 })

      /* Phase 9: Fade out */
      tl.to(
        [bg, dividerLine, leftLabel, rightLabel, ...leftItems, ...rightItems, leftBadge, rightBadge, rightGlow, verdictLine],
        { opacity: 0, duration: 0.8, ease: 'power1.inOut' }
      )
    },
    { scope: containerRef }
  )

  return (
    <MockFrame ref={containerRef} height="tall">
      {/* Background */}
      <div
        data-bg=""
        className="absolute inset-0 rounded-brand bg-surface border border-border overflow-hidden"
        style={{ opacity: 0 }}
      />

      <div className="relative px-5 py-6">
        {/* Column labels */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div data-left-label="" className="text-center" style={{ opacity: 0 }}>
            <p className="text-[9px] font-body-medium uppercase tracking-eyebrow text-copy-faint">
              Traditional E-Learning
            </p>
          </div>
          <div data-right-label="" className="text-center" style={{ opacity: 0 }}>
            <p className="text-[9px] font-body-medium uppercase tracking-eyebrow text-accent">
              Ambr AI Simulation
            </p>
          </div>
        </div>

        {/* Center divider */}
        <div
          data-divider=""
          className="absolute top-14 bottom-16 left-1/2 w-[1.5px] bg-border -translate-x-1/2 origin-top"
          style={{ transform: 'translateX(-50%) scaleY(0)' }}
        />

        {/* Content grid */}
        <div className="grid grid-cols-2 gap-4">
          {/* Left column — Traditional (grey, flat) */}
          <div className="space-y-2.5">
            {/* Item: Watch video */}
            <div
              data-left-item=""
              className="p-2.5 rounded-brand-sm bg-surface-white border border-border"
              style={{ opacity: 0 }}
            >
              <div className="flex items-center gap-2 mb-1.5">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-copy-faint">
                  <polygon points="4,2 10,6 4,10" fill="currentColor" />
                </svg>
                <span className="text-[10px] font-body-medium text-copy-mid">Watch video</span>
              </div>
              <div className="h-8 rounded bg-dark/[0.04] flex items-center justify-center">
                <span className="text-[8px] text-copy-faint">30 min lecture</span>
              </div>
            </div>

            {/* Item: Take quiz */}
            <div
              data-left-item=""
              className="p-2.5 rounded-brand-sm bg-surface-white border border-border"
              style={{ opacity: 0 }}
            >
              <div className="flex items-center gap-2 mb-1.5">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-copy-faint">
                  <rect x="1" y="1" width="10" height="10" rx="1.5" stroke="currentColor" strokeWidth="1" />
                  <path d="M3.5 6L5 7.5 8.5 4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                </svg>
                <span className="text-[10px] font-body-medium text-copy-mid">Multiple choice</span>
              </div>
              <div className="space-y-1">
                <div className="h-3 rounded bg-dark/[0.04]" />
                <div className="h-3 rounded bg-dark/[0.04]" />
                <div className="h-3 rounded bg-dark/[0.06]" />
              </div>
            </div>

            {/* Item: Certificate */}
            <div
              data-left-item=""
              className="p-2.5 rounded-brand-sm bg-surface-white border border-border"
              style={{ opacity: 0 }}
            >
              <div className="flex items-center gap-2">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-copy-faint">
                  <rect x="1" y="2" width="10" height="8" rx="1" stroke="currentColor" strokeWidth="1" />
                  <path d="M4 6h4M4 8h2" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
                </svg>
                <span className="text-[10px] font-body-medium text-copy-mid">Certificate</span>
              </div>
              <p className="text-[8px] text-copy-faint mt-1">Auto-generated on completion</p>
            </div>

            {/* Badge */}
            <div
              data-left-badge=""
              className="text-center py-2"
              style={{ opacity: 0 }}
            >
              <span className="text-[9px] font-body-medium text-copy-faint border border-border rounded-full px-3 py-1">
                Passive learning
              </span>
            </div>
          </div>

          {/* Right column — Ambr AI (warm, alive) */}
          <div className="space-y-2.5 relative">
            {/* Glow */}
            <div
              data-right-glow=""
              className="absolute -inset-2 rounded-brand bg-accent-soft/10 blur-sm"
              style={{ opacity: 0 }}
            />

            {/* Item: Live conversation */}
            <div
              data-right-item=""
              className="relative p-2.5 rounded-brand-sm bg-accent-whisper border border-accent-soft/40"
              style={{ opacity: 0 }}
            >
              <div className="flex items-center gap-2 mb-1.5">
                <div className="w-3 h-3 rounded-full bg-accent/20 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                </div>
                <span className="text-[10px] font-body-medium text-dark">Live conversation</span>
              </div>
              <div className="h-8 rounded-brand-sm bg-surface-white/60 border border-accent-soft/20 flex items-center justify-center">
                <span className="text-[8px] text-accent">AI-powered roleplay</span>
              </div>
            </div>

            {/* Item: Real-time feedback */}
            <div
              data-right-item=""
              className="relative p-2.5 rounded-brand-sm bg-accent-whisper border border-accent-soft/40"
              style={{ opacity: 0 }}
            >
              <div className="flex items-center gap-2 mb-1.5">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-accent">
                  <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.2" />
                  <path d="M6 3.5v3M6 8v.01" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                </svg>
                <span className="text-[10px] font-body-medium text-dark">Real-time coaching</span>
              </div>
              <p className="text-[8px] text-copy-mid leading-relaxed">
                In-moment feedback on tone, empathy, and approach
              </p>
            </div>

            {/* Item: Practiced skill */}
            <div
              data-right-item=""
              className="relative p-2.5 rounded-brand-sm bg-accent-whisper border border-accent-soft/40"
              style={{ opacity: 0 }}
            >
              <div className="flex items-center gap-2">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-accent">
                  <path d="M2.5 6.5L5 9L9.5 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-[10px] font-body-medium text-dark">Practiced skill</span>
              </div>
              <p className="text-[8px] text-copy-mid mt-1">Behavior change, not just knowledge</p>
            </div>

            {/* Badge */}
            <div
              data-right-badge=""
              className="relative text-center py-2"
              style={{ opacity: 0 }}
            >
              <span className="text-[9px] font-body-medium text-accent border border-accent-soft rounded-full px-3 py-1">
                Active practice
              </span>
            </div>
          </div>
        </div>

        {/* Verdict */}
        <div
          data-verdict=""
          className="mt-4 text-center"
          style={{ opacity: 0 }}
        >
          <p className="text-caption text-copy-mid">
            Same LMS. <span className="font-body-medium text-dark">Fundamentally different training.</span>
          </p>
        </div>
      </div>
    </MockFrame>
  )
}
