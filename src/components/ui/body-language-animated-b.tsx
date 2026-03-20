'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { gsapRevealEase } from '@/lib/easing'
import { MockFrame } from '@/components/ui/mock-frame'

/* ─────────────────────────────────────────────────────
   Concept B: "The Silhouette Blueprint"

   More abstract and editorial. A clean silhouette of
   head-and-shoulders with measurement guide lines
   radiating from key body points (eyes, shoulders,
   chin). Lines animate out from the figure with
   labelled dimensions. Coaching prompts flow as a
   running log beneath.
   ───────────────────────────────────────────────────── */

export function BodyLanguageAnimatedB() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const el = containerRef.current
      if (!el) return

      const bg = el.querySelector('[data-bg]')
      const eyebrow = el.querySelector('[data-eyebrow]')
      const silhouette = el.querySelector('[data-silhouette]')
      const measureLines = el.querySelectorAll('[data-measure]')
      const measureLabels = el.querySelectorAll('[data-label]')
      const dotPairs = el.querySelectorAll('[data-dot-pair]')
      const prompt1 = el.querySelector('[data-prompt-1]')
      const prompt2 = el.querySelector('[data-prompt-2]')
      const prompt3 = el.querySelector('[data-prompt-3]')
      const prompt4 = el.querySelector('[data-prompt-4]')
      const liveTag = el.querySelector('[data-live]')

      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.8,
        defaults: { ease: gsapRevealEase },
      })

      /* Initial state */
      tl.set(bg, { opacity: 0 })
      tl.set(eyebrow, { opacity: 0, y: 6 })
      tl.set(silhouette, { opacity: 0, scale: 0.9 })
      tl.set(measureLines, { scaleX: 0 })
      tl.set(measureLabels, { opacity: 0 })
      tl.set(dotPairs, { opacity: 0, scale: 0 })
      tl.set(prompt1, { opacity: 0, y: 6 })
      tl.set(prompt2, { opacity: 0, y: 6 })
      tl.set(prompt3, { opacity: 0, y: 6 })
      tl.set(prompt4, { opacity: 0, y: 6 })
      tl.set(liveTag, { opacity: 0, scale: 0.8 })

      /* Phase 1: Background + eyebrow */
      tl.to(bg, { opacity: 1, duration: 0.5, ease: 'power1.out' })
      tl.to(eyebrow, { opacity: 1, y: 0, duration: 0.35 }, '-=0.2')
      tl.to(liveTag, { opacity: 1, scale: 1, duration: 0.3, ease: 'back.out(2)' }, '-=0.1')

      /* Phase 2: Silhouette fades in */
      tl.to(silhouette, {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: 'power2.out',
      })

      /* Phase 3: Measurement dots appear */
      tl.to(dotPairs, {
        opacity: 1,
        scale: 1,
        duration: 0.2,
        stagger: 0.12,
        ease: 'back.out(2)',
      })

      /* Phase 4: Measurement lines extend from dots */
      tl.to(measureLines, {
        scaleX: 1,
        duration: 0.5,
        stagger: 0.12,
        ease: 'power2.out',
      })

      /* Phase 5: Labels appear */
      tl.to(measureLabels, {
        opacity: 1,
        duration: 0.3,
        stagger: 0.12,
      }, '-=0.3')

      /* Phase 6: Running coaching log appears */
      tl.to(prompt1, { opacity: 1, y: 0, duration: 0.4 })
      tl.to({}, { duration: 1 })

      tl.to(prompt2, { opacity: 1, y: 0, duration: 0.4 })
      tl.to({}, { duration: 1 })

      tl.to(prompt3, { opacity: 1, y: 0, duration: 0.4 })
      tl.to({}, { duration: 1 })

      tl.to(prompt4, { opacity: 1, y: 0, duration: 0.4 })

      /* Hold */
      tl.to({}, { duration: 2 })

      /* Phase 7: Fade out */
      tl.to(
        [bg, eyebrow, silhouette, ...measureLines, ...measureLabels, ...dotPairs, prompt1, prompt2, prompt3, prompt4, liveTag],
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
    <MockFrame ref={containerRef}>
      {/* Background */}
      <div
        data-bg=""
        className="absolute inset-0 rounded-brand bg-accent-whisper"
        style={{ opacity: 0 }}
      />

      <div className="relative px-5 py-6 md:px-7">
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <div data-eyebrow="" className="flex items-center gap-2" style={{ opacity: 0 }}>
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="text-eyebrow-sm font-body-medium uppercase tracking-eyebrow text-accent">
              Body Language
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

        {/* Silhouette + measurement area */}
        <div className="flex justify-center mb-5">
          <div
            data-silhouette=""
            className="relative"
            style={{ opacity: 0 }}
          >
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
              {/* Head — clean oval */}
              <ellipse
                cx="100"
                cy="60"
                rx="30"
                ry="38"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-copy-faint/40"
              />

              {/* Neck */}
              <path
                d="M88 95 L88 110 M112 95 L112 110"
                stroke="currentColor"
                strokeWidth="1.2"
                className="text-copy-faint/30"
              />

              {/* Shoulders */}
              <path
                d="M88 110 Q75 112 50 130 L50 155 M112 110 Q125 112 150 130 L150 155"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-copy-faint/40"
                fill="none"
              />

              {/* Torso hint */}
              <path
                d="M50 155 L50 200 M150 155 L150 200 M70 200 L130 200"
                stroke="currentColor"
                strokeWidth="1"
                className="text-copy-faint/20"
              />

              {/* ── Measurement point: Eyes ── */}
              <circle data-dot-pair="" cx="88" cy="55" r="3" fill="currentColor" className="text-accent" style={{ opacity: 0 }} />
              <circle data-dot-pair="" cx="112" cy="55" r="3" fill="currentColor" className="text-accent" style={{ opacity: 0 }} />

              {/* Eye measurement line */}
              <line
                data-measure=""
                x1="120"
                y1="55"
                x2="175"
                y2="55"
                stroke="currentColor"
                strokeWidth="0.8"
                strokeDasharray="3 2"
                className="text-accent/60"
                style={{ transformOrigin: '120px 55px' }}
              />

              {/* ── Measurement point: Chin/jaw ── */}
              <circle data-dot-pair="" cx="100" cy="95" r="3" fill="currentColor" className="text-accent-soft" style={{ opacity: 0 }} />

              {/* Chin measurement line */}
              <line
                data-measure=""
                x1="108"
                y1="95"
                x2="175"
                y2="95"
                stroke="currentColor"
                strokeWidth="0.8"
                strokeDasharray="3 2"
                className="text-accent-soft/60"
                style={{ transformOrigin: '108px 95px' }}
              />

              {/* ── Measurement point: Shoulders ── */}
              <circle data-dot-pair="" cx="55" cy="135" r="3" fill="currentColor" className="text-accent" style={{ opacity: 0 }} />
              <circle data-dot-pair="" cx="145" cy="135" r="3" fill="currentColor" className="text-accent" style={{ opacity: 0 }} />

              {/* Shoulder measurement line */}
              <line
                data-measure=""
                x1="153"
                y1="135"
                x2="190"
                y2="135"
                stroke="currentColor"
                strokeWidth="0.8"
                strokeDasharray="3 2"
                className="text-accent/60"
                style={{ transformOrigin: '153px 135px' }}
              />

              {/* ── Measurement point: Head tilt ── */}
              <circle data-dot-pair="" cx="100" cy="22" r="3" fill="currentColor" className="text-accent-soft" style={{ opacity: 0 }} />

              {/* Head tilt measurement line — extends left */}
              <line
                data-measure=""
                x1="92"
                y1="22"
                x2="25"
                y2="22"
                stroke="currentColor"
                strokeWidth="0.8"
                strokeDasharray="3 2"
                className="text-accent-soft/60"
                style={{ transformOrigin: '92px 22px' }}
              />
            </svg>

            {/* Measurement labels (positioned absolutely) */}
            <span
              data-label=""
              className="absolute text-[9px] font-body-medium text-accent"
              style={{ top: '22%', right: '-10px', opacity: 0 }}
            >
              Gaze: centered
            </span>
            <span
              data-label=""
              className="absolute text-[9px] font-body-medium text-accent-soft"
              style={{ top: '42%', right: '-10px', opacity: 0 }}
            >
              Head: neutral
            </span>
            <span
              data-label=""
              className="absolute text-[9px] font-body-medium text-accent"
              style={{ top: '62%', right: '-28px', opacity: 0 }}
            >
              Shoulders: level
            </span>
            <span
              data-label=""
              className="absolute text-[9px] font-body-medium text-accent-soft"
              style={{ top: '6%', left: '-8px', opacity: 0 }}
            >
              Tilt: upright
            </span>
          </div>
        </div>

        {/* Running coaching log */}
        <div className="space-y-1.5">
          <div
            data-prompt-1=""
            className="flex items-center gap-2 px-3 py-2 rounded-brand-sm bg-surface-white border border-border"
            style={{ opacity: 0 }}
          >
            <span className="w-1 h-1 rounded-full bg-accent shrink-0" />
            <p className="text-[11px] text-copy-mid leading-relaxed">
              <span className="font-body-medium text-accent">Great eye contact</span>
              {' '}— maintaining focus on the camera
            </p>
          </div>

          <div
            data-prompt-2=""
            className="flex items-center gap-2 px-3 py-2 rounded-brand-sm bg-surface-white border border-border"
            style={{ opacity: 0 }}
          >
            <span className="w-1 h-1 rounded-full bg-accent-soft shrink-0" />
            <p className="text-[11px] text-copy-mid leading-relaxed">
              <span className="font-body-medium text-copy-mid">Posture check</span>
              {' '}— try leaning in when they respond
            </p>
          </div>

          <div
            data-prompt-3=""
            className="flex items-center gap-2 px-3 py-2 rounded-brand-sm bg-accent-whisper border border-accent-soft/30"
            style={{ opacity: 0 }}
          >
            <span className="w-1 h-1 rounded-full bg-accent shrink-0" />
            <p className="text-[11px] text-copy-mid leading-relaxed">
              <span className="font-body-medium text-accent">Nice hand gesture</span>
              {' '}— good emphasis on the key point
            </p>
          </div>

          <div
            data-prompt-4=""
            className="flex items-center gap-2 px-3 py-2 rounded-brand-sm bg-surface-white border border-border"
            style={{ opacity: 0 }}
          >
            <span className="w-1 h-1 rounded-full bg-accent-soft shrink-0" />
            <p className="text-[11px] text-copy-mid leading-relaxed">
              <span className="font-body-medium text-copy-mid">Shoulders relaxing</span>
              {' '}— looking more natural now
            </p>
          </div>
        </div>
      </div>
    </MockFrame>
  )
}
