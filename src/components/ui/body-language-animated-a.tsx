'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { gsapRevealEase } from '@/lib/easing'

/* ─────────────────────────────────────────────────────
   Concept A: "SVG Face Mesh"

   A stylized SVG wireframe of a head and face with
   Mediapipe-inspired tracking points. Dots at key
   landmarks subtly drift and the mesh lines pulse.
   Coaching prompts appear as warm toast notifications.
   ───────────────────────────────────────────────────── */

export function BodyLanguageAnimatedA() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const el = containerRef.current
      if (!el) return

      const bg = el.querySelector('[data-bg]')
      const eyebrow = el.querySelector('[data-eyebrow]')
      const faceOutline = el.querySelector('[data-face-outline]')
      const meshLines = el.querySelectorAll('[data-mesh-line]')
      const trackingDots = el.querySelectorAll('[data-dot]')
      const eyeL = el.querySelector('[data-eye-l]')
      const eyeR = el.querySelector('[data-eye-r]')
      const toast1 = el.querySelector('[data-toast-1]')
      const toast2 = el.querySelector('[data-toast-2]')
      const toast3 = el.querySelector('[data-toast-3]')
      const statusBar = el.querySelector('[data-status]')

      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.8,
        defaults: { ease: gsapRevealEase },
      })

      /* Initial state */
      tl.set(bg, { opacity: 0 })
      tl.set(eyebrow, { opacity: 0, y: 6 })
      tl.set(faceOutline, { opacity: 0, scale: 0.85 })
      tl.set(meshLines, { opacity: 0 })
      tl.set(trackingDots, { opacity: 0, scale: 0 })
      tl.set(eyeL, { opacity: 0 })
      tl.set(eyeR, { opacity: 0 })
      tl.set(toast1, { opacity: 0, x: 30 })
      tl.set(toast2, { opacity: 0, x: 30 })
      tl.set(toast3, { opacity: 0, x: 30 })
      tl.set(statusBar, { opacity: 0, y: 8 })

      /* Phase 1: Background + eyebrow */
      tl.to(bg, { opacity: 1, duration: 0.5, ease: 'power1.out' })
      tl.to(eyebrow, { opacity: 1, y: 0, duration: 0.35 }, '-=0.2')

      /* Phase 2: Face outline emerges */
      tl.to(faceOutline, {
        opacity: 1,
        scale: 1,
        duration: 0.7,
        ease: 'power2.out',
      })

      /* Phase 3: Mesh lines draw in */
      tl.to(meshLines, {
        opacity: 0.4,
        duration: 0.5,
        stagger: 0.08,
      })

      /* Phase 4: Tracking dots pop in */
      tl.to(trackingDots, {
        opacity: 1,
        scale: 1,
        duration: 0.25,
        stagger: 0.04,
        ease: 'back.out(2.5)',
      })

      /* Phase 5: Eyes light up — tracking engaged */
      tl.to([eyeL, eyeR], {
        opacity: 1,
        duration: 0.3,
        ease: 'power2.out',
      })

      /* Phase 5b: Subtle head movement — dots drift slightly (non-blocking) */
      const driftTl = gsap.timeline({ repeat: 3 })
      trackingDots.forEach((dot, i) => {
        const dx = (i % 3 - 1) * 1.5
        const dy = (i % 2 === 0 ? 1 : -1) * 1.2
        driftTl
          .to(dot, { x: dx, y: dy, duration: 0.8, ease: 'sine.inOut' }, 0)
          .to(dot, { x: 0, y: 0, duration: 0.8, ease: 'sine.inOut' }, 0.8)
      })

      /* Phase 5c: Status bar */
      tl.to(statusBar, { opacity: 1, y: 0, duration: 0.3 })

      /* Phase 6: First toast — eye contact */
      tl.to(toast1, { opacity: 1, x: 0, duration: 0.4, ease: 'power2.out' })
      tl.to({}, { duration: 1.6 })
      tl.to(toast1, { opacity: 0, x: -10, duration: 0.3 })

      /* Phase 7: Second toast — posture */
      tl.to(toast2, { opacity: 1, x: 0, duration: 0.4, ease: 'power2.out' })
      tl.to({}, { duration: 1.6 })
      tl.to(toast2, { opacity: 0, x: -10, duration: 0.3 })

      /* Phase 8: Third toast — gestures */
      tl.to(toast3, { opacity: 1, x: 0, duration: 0.4, ease: 'power2.out' })
      tl.to({}, { duration: 1.6 })

      /* Phase 9: Fade out */
      tl.call(() => { driftTl.kill() })
      tl.to(
        [bg, eyebrow, faceOutline, ...meshLines, ...trackingDots, eyeL, eyeR, toast3, statusBar],
        {
          opacity: 0,
          duration: 0.9,
          ease: 'power1.inOut',
        }
      )
    },
    { scope: containerRef }
  )

  /* Tracking dot positions for a stylized face mesh */
  const dots = [
    /* Forehead row */
    { cx: 85, cy: 52 }, { cx: 100, cy: 46 }, { cx: 115, cy: 52 },
    /* Brow row */
    { cx: 78, cy: 68 }, { cx: 90, cy: 62 }, { cx: 100, cy: 60 }, { cx: 110, cy: 62 }, { cx: 122, cy: 68 },
    /* Eye corners */
    { cx: 82, cy: 78 }, { cx: 94, cy: 76 }, { cx: 106, cy: 76 }, { cx: 118, cy: 78 },
    /* Nose bridge + tip */
    { cx: 100, cy: 72 }, { cx: 100, cy: 85 }, { cx: 94, cy: 90 }, { cx: 106, cy: 90 },
    /* Mouth */
    { cx: 88, cy: 102 }, { cx: 96, cy: 100 }, { cx: 100, cy: 101 }, { cx: 104, cy: 100 }, { cx: 112, cy: 102 },
    /* Chin */
    { cx: 92, cy: 114 }, { cx: 100, cy: 118 }, { cx: 108, cy: 114 },
    /* Jaw line */
    { cx: 74, cy: 92 }, { cx: 72, cy: 78 }, { cx: 126, cy: 92 }, { cx: 128, cy: 78 },
  ]

  /* Mesh line connections (index pairs) */
  const meshConnections = [
    /* Forehead */
    [0, 1], [1, 2],
    /* Brow */
    [3, 4], [4, 5], [5, 6], [6, 7],
    /* Eyes */
    [3, 8], [8, 9], [9, 10], [10, 11], [11, 7],
    /* Nose */
    [5, 12], [12, 13], [13, 14], [13, 15],
    /* Mouth */
    [16, 17], [17, 18], [18, 19], [19, 20],
    /* Chin */
    [21, 22], [22, 23],
    /* Jaw */
    [24, 16], [20, 26], [25, 3], [27, 7],
    /* Verticals */
    [0, 4], [2, 6], [1, 5], [14, 17], [15, 19], [16, 21], [20, 23],
  ]

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
            Body Language Analysis
          </span>
        </div>

        {/* Main layout: face mesh + toast area */}
        <div className="flex gap-4 items-start">
          {/* SVG Face mesh */}
          <div className="flex-1 flex justify-center">
            <div
              data-face-outline=""
              className="relative"
              style={{ opacity: 0 }}
            >
              <svg
                width="200"
                height="220"
                viewBox="0 0 200 170"
                fill="none"
              >
                {/* Head outline — oval */}
                <ellipse
                  cx="100"
                  cy="82"
                  rx="42"
                  ry="52"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-surface-white/20"
                />

                {/* Neck / shoulders hint */}
                <path
                  d="M72 128 Q72 145 50 155 L50 165 L150 165 L150 155 Q128 145 128 128"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-surface-white/15"
                  fill="none"
                />

                {/* Mesh lines */}
                {meshConnections.map(([a, b], i) => (
                  <line
                    key={i}
                    data-mesh-line=""
                    x1={dots[a].cx}
                    y1={dots[a].cy}
                    x2={dots[b].cx}
                    y2={dots[b].cy}
                    stroke="currentColor"
                    strokeWidth="0.5"
                    className="text-accent-soft/60"
                    style={{ opacity: 0 }}
                  />
                ))}

                {/* Eye indicators */}
                <circle
                  data-eye-l=""
                  cx="88"
                  cy="77"
                  r="6"
                  stroke="currentColor"
                  strokeWidth="0.8"
                  className="text-accent"
                  fill="none"
                  style={{ opacity: 0 }}
                />
                <circle
                  data-eye-r=""
                  cx="112"
                  cy="77"
                  r="6"
                  stroke="currentColor"
                  strokeWidth="0.8"
                  className="text-accent"
                  fill="none"
                  style={{ opacity: 0 }}
                />

                {/* Tracking dots */}
                {dots.map((d, i) => (
                  <circle
                    key={i}
                    data-dot=""
                    cx={d.cx}
                    cy={d.cy}
                    r="2"
                    fill="currentColor"
                    className="text-accent"
                    style={{ opacity: 0 }}
                  />
                ))}
              </svg>
            </div>
          </div>

          {/* Toast notification area */}
          <div className="w-[150px] shrink-0 space-y-2.5 pt-4">
            {/* Toast 1: Eye contact */}
            <div
              data-toast-1=""
              className="px-3 py-2.5 rounded-brand-sm bg-accent/[0.08] border border-accent/15"
              style={{ opacity: 0 }}
            >
              <div className="flex items-center gap-1.5 mb-1">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="text-accent">
                  <ellipse cx="5" cy="5" rx="4" ry="2.5" stroke="currentColor" strokeWidth="0.8" />
                  <circle cx="5" cy="5" r="1.2" fill="currentColor" />
                </svg>
                <span className="text-[9px] font-body-medium text-accent uppercase tracking-wide">
                  Eye Contact
                </span>
              </div>
              <p className="text-[10px] text-surface-white/60 leading-relaxed">
                Great eye contact, very consistent
              </p>
            </div>

            {/* Toast 2: Posture */}
            <div
              data-toast-2=""
              className="px-3 py-2.5 rounded-brand-sm bg-surface-white/[0.04] border border-surface-white/[0.08]"
              style={{ opacity: 0 }}
            >
              <div className="flex items-center gap-1.5 mb-1">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="text-accent-soft">
                  <path d="M5 1V7M3 3L5 1L7 3" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
                  <line x1="2" y1="9" x2="8" y2="9" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
                </svg>
                <span className="text-[9px] font-body-medium text-accent-soft uppercase tracking-wide">
                  Posture
                </span>
              </div>
              <p className="text-[10px] text-surface-white/60 leading-relaxed">
                Try leaning in slightly when listening
              </p>
            </div>

            {/* Toast 3: Gestures */}
            <div
              data-toast-3=""
              className="px-3 py-2.5 rounded-brand-sm bg-accent/[0.08] border border-accent/15"
              style={{ opacity: 0 }}
            >
              <div className="flex items-center gap-1.5 mb-1">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="text-accent">
                  <path d="M5 2C5 2 3 4 3 6C3 7.5 4 9 5 9C6 9 7 7.5 7 6C7 4 5 2 5 2Z" stroke="currentColor" strokeWidth="0.8" />
                  <path d="M1 6L3.5 5M9 6L6.5 5" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" />
                </svg>
                <span className="text-[9px] font-body-medium text-accent uppercase tracking-wide">
                  Gestures
                </span>
              </div>
              <p className="text-[10px] text-surface-white/60 leading-relaxed">
                Good use of hand gestures for emphasis
              </p>
            </div>
          </div>
        </div>

        {/* Bottom status */}
        <div
          data-status=""
          className="mt-4 flex items-center gap-2 px-3 py-2 rounded-brand-sm bg-surface-white/[0.03] border border-surface-white/[0.06]"
          style={{ opacity: 0 }}
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-[10px] text-surface-white/40">
            Tracking 28 facial landmarks in real time
          </span>
        </div>
      </div>
    </div>
  )
}
