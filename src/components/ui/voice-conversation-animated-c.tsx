'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { gsapRevealEase } from '@/lib/easing'
import { MockFrame } from '@/components/ui/mock-frame'
import { VoiceWave } from '@/components/ui/voice-wave'

/* ─────────────────────────────────────────────────────
   Voice Conversation C: "The Dialogue"

   Abstract, minimal representation of two entities
   in voice dialogue. Two waveforms face each other —
   one accent (AI character), one muted (user). They
   take turns "speaking" while a sparse transcript
   floats between them. Feels like watching sound itself.
   ───────────────────────────────────────────────────── */

export function VoiceConversationAnimatedC() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const el = containerRef.current
      if (!el) return

      const bg = el.querySelector('[data-bg]')
      const labelTop = el.querySelector('[data-label-top]')
      const labelBottom = el.querySelector('[data-label-bottom]')
      const waveTop = el.querySelector('[data-wave-top]')
      const waveBottom = el.querySelector('[data-wave-bottom]')
      const centerLine = el.querySelector('[data-center-line]')
      const timer = el.querySelector('[data-timer]')
      const transcript1 = el.querySelector('[data-transcript-1]')
      const transcript2 = el.querySelector('[data-transcript-2]')
      const transcript3 = el.querySelector('[data-transcript-3]')
      const badge = el.querySelector('[data-badge]')
      const topIndicator = el.querySelector('[data-indicator-top]')
      const bottomIndicator = el.querySelector('[data-indicator-bottom]')

      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 1.2,
        defaults: { ease: gsapRevealEase },
      })

      /* Timer */
      const timerObj = { val: 0 }
      tl.call(() => {
        timerObj.val = 0
        if (timer) timer.textContent = '00:00'
      })

      /* Initial state */
      tl.set(bg, { opacity: 0 })
      tl.set([labelTop, labelBottom], { opacity: 0 })
      tl.set([waveTop, waveBottom], { opacity: 0, scaleX: 0 })
      tl.set(centerLine, { scaleX: 0 })
      tl.set(timer, { opacity: 0 })
      tl.set([topIndicator, bottomIndicator], { opacity: 0, scale: 0 })
      tl.set(transcript1, { opacity: 0 })
      tl.set(transcript2, { opacity: 0 })
      tl.set(transcript3, { opacity: 0 })
      tl.set(badge, { opacity: 0, y: 10 })

      /* Phase 1: Background + center line draws */
      tl.to(bg, { opacity: 1, duration: 0.5, ease: 'power1.out' })
      tl.to(centerLine, { scaleX: 1, duration: 0.6, ease: 'power2.inOut' }, '-=0.2')
      tl.to(timer, { opacity: 1, duration: 0.3 }, '-=0.3')

      /* Timer — separate */
      const timerTl = gsap.timeline()
      timerTl.to(timerObj, {
        val: 11,
        duration: 11,
        ease: 'none',
        onUpdate: () => {
          const v = Math.floor(timerObj.val)
          if (timer) timer.textContent = `00:${String(v).padStart(2, '0')}`
        },
      })

      /* Phase 2: Labels appear */
      tl.to(labelTop, { opacity: 1, duration: 0.3 })
      tl.to(labelBottom, { opacity: 1, duration: 0.3 }, '-=0.15')

      /* Phase 3: Top waveform (AI speaks first) + indicator */
      tl.to(topIndicator, { opacity: 1, scale: 1, duration: 0.2, ease: 'back.out(3)' })
      tl.to(waveTop, { opacity: 1, scaleX: 1, duration: 0.5, ease: 'power2.out' })

      /* Transcript 1 fades in center */
      tl.to(transcript1, { opacity: 1, duration: 0.6 }, '-=0.2')

      /* Hold — AI speaking */
      tl.to({}, { duration: 1.8 })

      /* Turn switch: top dims, bottom activates */
      tl.to(topIndicator, { opacity: 0.3, duration: 0.3 })
      tl.to(waveTop, { opacity: 0.2, duration: 0.4 }, '-=0.2')
      tl.to(transcript1, { opacity: 0.3, y: -6, duration: 0.3 }, '-=0.3')

      tl.to(bottomIndicator, { opacity: 1, scale: 1, duration: 0.2, ease: 'back.out(3)' })
      tl.to(waveBottom, { opacity: 1, scaleX: 1, duration: 0.5, ease: 'power2.out' }, '-=0.1')
      tl.to(transcript2, { opacity: 1, duration: 0.6 }, '-=0.2')

      /* Hold — user speaking */
      tl.to({}, { duration: 1.8 })

      /* Turn switch again: bottom dims, top reactivates */
      tl.to(bottomIndicator, { opacity: 0.3, duration: 0.3 })
      tl.to(waveBottom, { opacity: 0.2, duration: 0.4 }, '-=0.2')
      tl.to(transcript2, { opacity: 0.3, y: 6, duration: 0.3 }, '-=0.3')

      tl.to(topIndicator, { opacity: 1, duration: 0.3 })
      tl.to(waveTop, { opacity: 1, duration: 0.4 }, '-=0.2')
      tl.to(transcript3, { opacity: 1, duration: 0.6 }, '-=0.2')

      /* Badge appears */
      tl.to(badge, { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out' }, '-=0.1')

      /* Hold */
      tl.to({}, { duration: 2 })

      /* Fade out everything */
      tl.call(() => {
        timerTl.kill()
      })
      tl.to(
        [bg, labelTop, labelBottom, waveTop, waveBottom, centerLine, timer, topIndicator, bottomIndicator, transcript1, transcript2, transcript3, badge],
        { opacity: 0, duration: 0.9, ease: 'power1.inOut' }
      )
    },
    { scope: containerRef }
  )

  return (
    <MockFrame ref={containerRef} height="fill">
      {/* Dark background */}
      <div
        data-bg=""
        className="absolute inset-0 rounded-brand bg-dark overflow-hidden"
        style={{ opacity: 0 }}
      />

      <div className="relative px-6 py-6 flex flex-col h-[420px]">
        {/* Timer — top center */}
        <div className="flex justify-center mb-6">
          <span
            data-timer=""
            className="text-[11px] font-body-medium text-surface-white/40 tabular-nums"
            style={{ opacity: 0 }}
          >
            00:00
          </span>
        </div>

        {/* Top speaker: AI Character */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="flex items-center gap-2 mb-3">
            <span
              data-indicator-top=""
              className="w-2 h-2 rounded-full bg-accent"
              style={{ opacity: 0 }}
            />
            <span
              data-label-top=""
              className="text-[10px] font-body-medium text-accent/70 uppercase tracking-eyebrow"
              style={{ opacity: 0 }}
            >
              Sarah Chen &middot; Team Lead
            </span>
          </div>
          <div data-wave-top="" style={{ opacity: 0, transformOrigin: 'center' }}>
            <VoiceWave width={220} height={36} />
          </div>
        </div>

        {/* Center: divider + transcripts */}
        <div className="relative py-5">
          <div
            data-center-line=""
            className="h-[1px] bg-surface-white/[0.08] origin-center"
            style={{ transform: 'scaleX(0)' }}
          />

          {/* Transcript lines — positioned absolutely over the center */}
          <div className="absolute inset-x-0 -top-2 -bottom-2 flex flex-col items-center justify-center gap-1.5">
            <p
              data-transcript-1=""
              className="text-[11px] text-surface-white/50 leading-relaxed text-center max-w-[80%]"
              style={{ opacity: 0 }}
            >
              &ldquo;I wanted to talk about the project timelines...&rdquo;
            </p>
            <p
              data-transcript-2=""
              className="text-[11px] text-surface-white/60 leading-relaxed text-center max-w-[80%]"
              style={{ opacity: 0 }}
            >
              &ldquo;I know the deadlines slipped. I want to understand what happened.&rdquo;
            </p>
            <p
              data-transcript-3=""
              className="text-[11px] text-surface-white/50 leading-relaxed text-center max-w-[80%]"
              style={{ opacity: 0 }}
            >
              &ldquo;There have been capacity issues I should have flagged earlier.&rdquo;
            </p>
          </div>
        </div>

        {/* Bottom speaker: User */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <div data-wave-bottom="" style={{ opacity: 0, transformOrigin: 'center' }}>
            <VoiceWave width={220} height={36} color="#8A8983" />
          </div>
          <div className="flex items-center gap-2 mt-3">
            <span
              data-indicator-bottom=""
              className="w-2 h-2 rounded-full bg-surface-white/40"
              style={{ opacity: 0 }}
            />
            <span
              data-label-bottom=""
              className="text-[10px] font-body-medium text-surface-white/40 uppercase tracking-eyebrow"
              style={{ opacity: 0 }}
            >
              You
            </span>
          </div>
        </div>

        {/* Badge — bottom */}
        <div className="flex justify-center mt-4">
          <span
            data-badge=""
            className="text-[10px] font-body-medium text-accent/80 bg-accent/[0.08] px-3 py-1 rounded-full"
            style={{ opacity: 0 }}
          >
            Active listening detected
          </span>
        </div>
      </div>
    </MockFrame>
  )
}
