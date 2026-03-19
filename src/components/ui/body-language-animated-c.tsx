'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { gsapRevealEase } from '@/lib/easing'

/* ─────────────────────────────────────────────────────
   Concept C: "The Coaching Cards"

   Editorial approach: a minimal figure is present as
   context, but the focus is on warm coaching cards
   that appear around the figure — like sticky notes
   from a supportive coach. Cards float in from
   different positions, each with a specific observation.
   The most editorial and brand-native of the three.
   ───────────────────────────────────────────────────── */

export function BodyLanguageAnimatedC() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const el = containerRef.current
      if (!el) return

      const bg = el.querySelector('[data-bg]')
      const eyebrow = el.querySelector('[data-eyebrow]')
      const figure = el.querySelector('[data-figure]')
      const glow = el.querySelector('[data-glow]')
      const card1 = el.querySelector('[data-card-1]')
      const card2 = el.querySelector('[data-card-2]')
      const card3 = el.querySelector('[data-card-3]')
      const card4 = el.querySelector('[data-card-4]')
      const connectors = el.querySelectorAll('[data-connector]')
      const summaryCard = el.querySelector('[data-summary]')

      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.8,
        defaults: { ease: gsapRevealEase },
      })

      /* Initial state */
      tl.set(bg, { opacity: 0 })
      tl.set(eyebrow, { opacity: 0, y: 6 })
      tl.set(figure, { opacity: 0, scale: 0.9 })
      tl.set(glow, { opacity: 0, scale: 0.5 })
      tl.set(card1, { opacity: 0, x: -20, y: -10 })
      tl.set(card2, { opacity: 0, x: 20, y: -10 })
      tl.set(card3, { opacity: 0, x: -20, y: 10 })
      tl.set(card4, { opacity: 0, x: 20, y: 10 })
      tl.set(connectors, { opacity: 0, scaleX: 0 })
      tl.set(summaryCard, { opacity: 0, y: 12 })

      /* Phase 1: Background + eyebrow */
      tl.to(bg, { opacity: 1, duration: 0.5, ease: 'power1.out' })
      tl.to(eyebrow, { opacity: 1, y: 0, duration: 0.35 }, '-=0.2')

      /* Phase 2: Figure appears with gentle glow */
      tl.to(figure, { opacity: 1, scale: 1, duration: 0.6, ease: 'power2.out' })
      tl.to(glow, { opacity: 0.6, scale: 1, duration: 0.8, ease: 'power1.out' }, '-=0.4')

      /* Phase 3: Cards float in one by one from their corners */
      tl.to(card1, { opacity: 1, x: 0, y: 0, duration: 0.5, ease: 'power2.out' })
      tl.to(connectors[0], { opacity: 0.4, scaleX: 1, duration: 0.3 }, '-=0.2')
      tl.to({}, { duration: 0.4 })

      tl.to(card2, { opacity: 1, x: 0, y: 0, duration: 0.5, ease: 'power2.out' })
      tl.to(connectors[1], { opacity: 0.4, scaleX: 1, duration: 0.3 }, '-=0.2')
      tl.to({}, { duration: 0.4 })

      tl.to(card3, { opacity: 1, x: 0, y: 0, duration: 0.5, ease: 'power2.out' })
      tl.to(connectors[2], { opacity: 0.4, scaleX: 1, duration: 0.3 }, '-=0.2')
      tl.to({}, { duration: 0.4 })

      tl.to(card4, { opacity: 1, x: 0, y: 0, duration: 0.5, ease: 'power2.out' })
      tl.to(connectors[3], { opacity: 0.4, scaleX: 1, duration: 0.3 }, '-=0.2')

      /* Phase 4: Summary card */
      tl.to(summaryCard, { opacity: 1, y: 0, duration: 0.5 })

      /* Hold */
      tl.to({}, { duration: 2.5 })

      /* Phase 5: Fade out */
      tl.to(
        [bg, eyebrow, figure, glow, card1, card2, card3, card4, ...connectors, summaryCard],
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
        className="absolute inset-0 rounded-brand bg-accent-whisper bg-noise-fine"
        style={{ opacity: 0, backgroundBlendMode: 'overlay' }}
      />

      <div className="relative px-5 py-6 md:px-7">
        {/* Eyebrow */}
        <div data-eyebrow="" className="flex items-center gap-2 mb-5" style={{ opacity: 0 }}>
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span className="text-eyebrow-sm font-body-medium uppercase tracking-eyebrow text-accent">
            Body Language Coaching
          </span>
        </div>

        {/* Main layout: figure center, cards around */}
        <div className="relative min-h-[280px]">
          {/* Central figure — minimal abstract */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            {/* Glow behind figure */}
            <div
              data-glow=""
              className="absolute -inset-10 rounded-full bg-accent-soft/20 blur-2xl"
              style={{ opacity: 0 }}
            />

            <div
              data-figure=""
              className="relative"
              style={{ opacity: 0 }}
            >
              <svg width="90" height="140" viewBox="0 0 90 140" fill="none">
                {/* Head */}
                <circle
                  cx="45"
                  cy="28"
                  r="20"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-accent/40"
                />

                {/* Face features — minimal */}
                <circle cx="38" cy="25" r="2" fill="currentColor" className="text-accent/30" />
                <circle cx="52" cy="25" r="2" fill="currentColor" className="text-accent/30" />
                <path
                  d="M40 33 Q45 36 50 33"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-accent/20"
                  fill="none"
                />

                {/* Neck */}
                <line x1="45" y1="48" x2="45" y2="60" stroke="currentColor" strokeWidth="1.2" className="text-copy-faint/30" />

                {/* Shoulders */}
                <path
                  d="M45 60 Q30 62 15 75 M45 60 Q60 62 75 75"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-copy-faint/30"
                  fill="none"
                />

                {/* Torso */}
                <path
                  d="M15 75 L20 130 L70 130 L75 75"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  className="text-copy-faint/20"
                  fill="none"
                />

                {/* Arms — slightly gestural */}
                <path
                  d="M18 78 Q5 95 12 110"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-copy-faint/20"
                  fill="none"
                />
                <path
                  d="M72 78 Q85 90 78 108"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-copy-faint/20"
                  fill="none"
                />
              </svg>
            </div>
          </div>

          {/* Connector lines (invisible divs with gradient) */}
          <div
            data-connector=""
            className="absolute top-[60px] left-[calc(50%-10px)] w-[60px] h-[1px] bg-gradient-to-l from-transparent to-accent-soft/40 origin-right -translate-x-full"
            style={{ opacity: 0 }}
          />
          <div
            data-connector=""
            className="absolute top-[80px] right-[calc(50%-10px)] w-[60px] h-[1px] bg-gradient-to-r from-transparent to-accent-soft/40 origin-left translate-x-full"
            style={{ opacity: 0 }}
          />
          <div
            data-connector=""
            className="absolute top-[140px] left-[calc(50%-10px)] w-[60px] h-[1px] bg-gradient-to-l from-transparent to-accent-soft/40 origin-right -translate-x-full"
            style={{ opacity: 0 }}
          />
          <div
            data-connector=""
            className="absolute top-[170px] right-[calc(50%-10px)] w-[60px] h-[1px] bg-gradient-to-r from-transparent to-accent-soft/40 origin-left translate-x-full"
            style={{ opacity: 0 }}
          />

          {/* Card 1: Eye contact — top left */}
          <div
            data-card-1=""
            className="absolute top-[40px] left-0 w-[120px] px-3 py-2.5 rounded-brand-sm bg-surface-white border border-border shadow-sm"
            style={{ opacity: 0 }}
          >
            <div className="flex items-center gap-1.5 mb-1.5">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-accent shrink-0">
                <ellipse cx="6" cy="6" rx="5" ry="3" stroke="currentColor" strokeWidth="0.8" />
                <circle cx="6" cy="6" r="1.5" fill="currentColor" />
              </svg>
              <span className="text-[9px] font-body-medium text-accent">Eye Contact</span>
            </div>
            <p className="text-[10px] text-copy-mid leading-relaxed">
              Great focus, very engaged
            </p>
          </div>

          {/* Card 2: Posture — top right */}
          <div
            data-card-2=""
            className="absolute top-[60px] right-0 w-[120px] px-3 py-2.5 rounded-brand-sm bg-surface-white border border-accent-soft/30 shadow-sm"
            style={{ opacity: 0 }}
          >
            <div className="flex items-center gap-1.5 mb-1.5">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-accent-soft shrink-0">
                <path d="M6 2V9M4 4L6 2L8 4" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
                <line x1="3" y1="11" x2="9" y2="11" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
              </svg>
              <span className="text-[9px] font-body-medium text-copy-mid">Posture</span>
            </div>
            <p className="text-[10px] text-copy-mid leading-relaxed">
              Lean in slightly when listening
            </p>
          </div>

          {/* Card 3: Gestures — bottom left */}
          <div
            data-card-3=""
            className="absolute top-[120px] left-0 w-[120px] px-3 py-2.5 rounded-brand-sm bg-surface-white border border-border shadow-sm"
            style={{ opacity: 0 }}
          >
            <div className="flex items-center gap-1.5 mb-1.5">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-accent shrink-0">
                <path d="M6 3C6 3 4 5 4 7C4 8.5 5 10 6 10C7 10 8 8.5 8 7C8 5 6 3 6 3Z" stroke="currentColor" strokeWidth="0.8" />
                <path d="M2 7L4 6.5M10 7L8 6.5" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" />
              </svg>
              <span className="text-[9px] font-body-medium text-accent">Gestures</span>
            </div>
            <p className="text-[10px] text-copy-mid leading-relaxed">
              Good emphasis with hands
            </p>
          </div>

          {/* Card 4: Expression — bottom right */}
          <div
            data-card-4=""
            className="absolute top-[150px] right-0 w-[120px] px-3 py-2.5 rounded-brand-sm bg-accent-whisper border border-accent-soft/30 shadow-sm"
            style={{ opacity: 0 }}
          >
            <div className="flex items-center gap-1.5 mb-1.5">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-accent shrink-0">
                <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="0.8" />
                <circle cx="4.5" cy="5" r="0.7" fill="currentColor" />
                <circle cx="7.5" cy="5" r="0.7" fill="currentColor" />
                <path d="M4 7.5 Q6 9 8 7.5" stroke="currentColor" strokeWidth="0.7" fill="none" />
              </svg>
              <span className="text-[9px] font-body-medium text-accent">Expression</span>
            </div>
            <p className="text-[10px] text-copy-mid leading-relaxed">
              Warm, approachable smile
            </p>
          </div>
        </div>

        {/* Summary coaching card */}
        <div
          data-summary=""
          className="mt-4 flex items-start gap-2.5 px-3.5 py-3 rounded-brand-sm bg-surface-white border border-border"
          style={{ opacity: 0 }}
        >
          <div className="shrink-0 w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center mt-0.5">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="text-accent">
              <path
                d="M2.5 5.5L4.5 7.5L7.5 3.5"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div>
            <p className="text-[10px] font-body-medium text-dark mb-0.5">Looking confident</p>
            <p className="text-caption text-copy-mid leading-relaxed">
              Your body language is open and engaged. Small adjustment: lean forward slightly during their key points.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
