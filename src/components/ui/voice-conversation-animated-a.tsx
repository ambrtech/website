'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Image from 'next/image'
import { gsapRevealEase } from '@/lib/easing'
import { VoiceWave } from '@/components/ui/voice-wave'

/* ─────────────────────────────────────────────────────
   Voice Conversation A: "The Live Call"

   Full call UI on dark background. Timer counts up in
   real-time, character ring pulses with speech, voice
   waveform animates, and a live transcript reveals
   line by line. Coaching nudge slides in mid-call.
   Most realistic of the three — feels like dropping
   into someone's active training session.
   ───────────────────────────────────────────────────── */

export function VoiceConversationAnimatedA() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const el = containerRef.current
      if (!el) return

      const panel = el.querySelector('[data-panel]')
      const topBar = el.querySelector('[data-top-bar]')
      const character = el.querySelector('[data-character]')
      const ring = el.querySelector('[data-ring]')
      const timer = el.querySelector('[data-timer]')
      const waveContainer = el.querySelector('[data-wave]')
      const statusDot = el.querySelector('[data-status-dot]')
      const statusText = el.querySelector('[data-status-text]')
      const transcript1 = el.querySelector('[data-transcript-1]')
      const transcript2 = el.querySelector('[data-transcript-2]')
      const transcript3 = el.querySelector('[data-transcript-3]')
      const nudge = el.querySelector('[data-nudge]')
      const bottomBar = el.querySelector('[data-bottom-bar]')

      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 1,
        defaults: { ease: gsapRevealEase },
      })

      /* Reset timer on each loop */
      const timerObj = { val: 0 }
      tl.call(() => {
        timerObj.val = 0
        if (timer) timer.textContent = '00:00'
      })

      /* Initial state */
      tl.set(panel, { opacity: 0, scale: 0.96 })
      tl.set(topBar, { opacity: 0, y: -8 })
      tl.set(character, { opacity: 0, scale: 0.9 })
      tl.set(ring, { opacity: 0, scale: 0.8 })
      tl.set(waveContainer, { opacity: 0 })
      tl.set(statusDot, { opacity: 0, scale: 0 })
      tl.set(statusText, { opacity: 0 })
      tl.set(transcript1, { opacity: 0, clipPath: 'inset(0 100% 0 0)' })
      tl.set(transcript2, { opacity: 0, clipPath: 'inset(0 100% 0 0)' })
      tl.set(transcript3, { opacity: 0, clipPath: 'inset(0 100% 0 0)' })
      tl.set(nudge, { opacity: 0, y: 12 })
      tl.set(bottomBar, { opacity: 0, y: 8 })

      /* Phase 1: Panel appears */
      tl.to(panel, { opacity: 1, scale: 1, duration: 0.5, ease: 'power2.out' })
      tl.to(topBar, { opacity: 1, y: 0, duration: 0.3 }, '-=0.3')
      tl.to(bottomBar, { opacity: 1, y: 0, duration: 0.3 }, '-=0.2')

      /* Phase 2: Character + ring appear */
      tl.to(character, { opacity: 1, scale: 1, duration: 0.5, ease: 'power2.out' }, '-=0.1')
      tl.to(ring, { opacity: 1, scale: 1, duration: 0.4, ease: 'power2.out' }, '-=0.3')

      /* Phase 3: Status indicator + waveform */
      tl.to(statusDot, { opacity: 1, scale: 1, duration: 0.2, ease: 'back.out(3)' })
      tl.to(statusText, { opacity: 1, duration: 0.2 }, '-=0.1')
      tl.to(waveContainer, { opacity: 1, duration: 0.3 }, '-=0.1')

      /* Timer counting — separate non-blocking timeline */
      const timerTl = gsap.timeline()
      timerTl.to(timerObj, {
        val: 12,
        duration: 12,
        ease: 'none',
        onUpdate: () => {
          const v = Math.floor(timerObj.val)
          if (timer) timer.textContent = `00:${String(v).padStart(2, '0')}`
        },
      })

      /* Ring pulse — separate non-blocking timeline */
      const ringPulse = gsap.timeline({ repeat: -1 })
      ringPulse
        .to(ring, {
          boxShadow: '0 0 28px 10px rgba(212, 114, 52, 0.3)',
          scale: 1.05,
          duration: 0.7,
          ease: 'sine.inOut',
        })
        .to(ring, {
          boxShadow: '0 0 12px 3px rgba(212, 114, 52, 0.1)',
          scale: 1,
          duration: 0.7,
          ease: 'sine.inOut',
        })

      /* Status dot pulse — separate non-blocking */
      const dotPulse = gsap.timeline({ repeat: -1 })
      dotPulse
        .to(statusDot, { opacity: 0.4, duration: 0.8, ease: 'sine.inOut' })
        .to(statusDot, { opacity: 1, duration: 0.8, ease: 'sine.inOut' })

      /* -- Transcript moment 1: AI speaks -- */
      tl.to(transcript1, {
        opacity: 1,
        clipPath: 'inset(0 0% 0 0)',
        duration: 1.6,
        ease: 'power1.inOut',
      })

      /* Hold */
      tl.to({}, { duration: 1.2 })

      /* -- Transcript moment 2: User responds -- */
      tl.to(transcript2, {
        opacity: 1,
        clipPath: 'inset(0 0% 0 0)',
        duration: 1.2,
        ease: 'power1.inOut',
      })

      /* Coaching nudge appears */
      tl.to(nudge, { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }, '-=0.3')

      /* Hold nudge */
      tl.to({}, { duration: 1.5 })

      /* -- Transcript moment 3: AI continues -- */
      tl.to([transcript1], { opacity: 0.35, duration: 0.3 })
      tl.to(nudge, { opacity: 0, y: 4, duration: 0.3 }, '-=0.2')
      tl.to(transcript3, {
        opacity: 1,
        clipPath: 'inset(0 0% 0 0)',
        duration: 1.2,
        ease: 'power1.inOut',
      })

      /* Hold final state */
      tl.to({}, { duration: 1.8 })

      /* Fade everything out */
      tl.call(() => {
        ringPulse.kill()
        timerTl.kill()
        dotPulse.kill()
      })
      tl.to(
        [panel, topBar, character, ring, waveContainer, statusDot, statusText, transcript1, transcript2, transcript3, nudge, bottomBar],
        { opacity: 0, duration: 0.9, ease: 'power1.inOut' }
      )
    },
    { scope: containerRef }
  )

  return (
    <div ref={containerRef} className="relative min-h-[420px]">
      {/* Dark call panel */}
      <div
        data-panel=""
        className="absolute inset-0 rounded-brand bg-dark overflow-hidden"
        style={{ opacity: 0 }}
      >
        {/* Top bar */}
        <div
          data-top-bar=""
          className="flex items-center justify-between px-5 pt-4 pb-2"
          style={{ opacity: 0 }}
        >
          <div className="flex items-center gap-2">
            <span
              data-status-dot=""
              className="w-2 h-2 rounded-full bg-accent"
              style={{ opacity: 0 }}
            />
            <span
              data-status-text=""
              className="text-[10px] text-surface-white/40"
              style={{ opacity: 0 }}
            >
              Speaking
            </span>
          </div>
          <span
            data-timer=""
            className="text-[11px] font-body-medium text-surface-white/50 bg-surface-white/[0.06] px-3 py-1 rounded tabular-nums"
          >
            00:00
          </span>
        </div>

        {/* Character centered */}
        <div
          data-character=""
          className="flex flex-col items-center pt-2 pb-3"
          style={{ opacity: 0 }}
        >
          <div
            data-ring=""
            className="w-[80px] h-[80px] rounded-full overflow-hidden border-[2.5px] border-accent mb-2"
            style={{
              opacity: 0,
              boxShadow: '0 0 12px 3px rgba(212, 114, 52, 0.1)',
            }}
          >
            <Image
              src="/images/team/jamie-headshot.png"
              alt="AI Character"
              width={80}
              height={80}
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-caption font-body-medium text-surface-white">Sarah Chen</p>
          <p className="text-[10px] text-surface-white/35 mt-0.5">Team Lead</p>
        </div>

        {/* Voice waveform */}
        <div data-wave="" className="flex justify-center mb-3" style={{ opacity: 0 }}>
          <VoiceWave width={160} height={32} />
        </div>

        {/* Transcript area — stacking conversation */}
        <div className="px-4 space-y-2 mb-3">
          {/* AI line 1 */}
          <div
            data-transcript-1=""
            className="bg-surface-white/[0.05] rounded-brand-sm px-3 py-2"
            style={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }}
          >
            <p className="text-[11px] text-surface-white/75 leading-relaxed">
              <span className="text-accent/70 font-body-medium">Sarah:</span>{' '}
              &ldquo;I appreciate you making time for this. I wanted to talk about the project
              timelines...&rdquo;
            </p>
          </div>

          {/* User line */}
          <div
            data-transcript-2=""
            className="bg-surface-white/[0.08] rounded-brand-sm px-3 py-2 ml-6"
            style={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }}
          >
            <p className="text-[11px] text-surface-white/75 leading-relaxed">
              <span className="text-surface-white/50 font-body-medium">You:</span>{' '}
              &ldquo;Of course. I know the last two deadlines slipped, and I want to
              understand what happened.&rdquo;
            </p>
          </div>

          {/* AI line 2 */}
          <div
            data-transcript-3=""
            className="bg-surface-white/[0.05] rounded-brand-sm px-3 py-2"
            style={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }}
          >
            <p className="text-[11px] text-surface-white/75 leading-relaxed">
              <span className="text-accent/70 font-body-medium">Sarah:</span>{' '}
              &ldquo;I hear you. Honestly, there have been some capacity issues on my end
              that I should have flagged earlier...&rdquo;
            </p>
          </div>
        </div>

        {/* Coaching nudge */}
        <div
          data-nudge=""
          className="mx-4 mb-3 flex items-start gap-2 bg-accent/[0.08] border border-accent/15 rounded-brand-sm px-3 py-2"
          style={{ opacity: 0 }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            className="text-accent shrink-0 mt-0.5"
          >
            <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.2" />
            <path
              d="M7 4v3.5M7 9.5v.01"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeLinecap="round"
            />
          </svg>
          <p className="text-[11px] text-accent/90 leading-relaxed">
            Good — you acknowledged the issue without blame. Now explore what specific support they need.
          </p>
        </div>

        {/* Bottom bar */}
        <div
          data-bottom-bar=""
          className="flex items-center gap-2.5 px-4 pb-4"
          style={{ opacity: 0 }}
        >
          <div className="w-9 h-9 rounded-full bg-[#22C55E] flex items-center justify-center shrink-0">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <rect x="5" y="1" width="4" height="7" rx="2" fill="white" />
              <path
                d="M3 6C3 8.2 4.8 10 7 10C9.2 10 11 8.2 11 6"
                stroke="white"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
              <line x1="7" y1="10" x2="7" y2="12.5" stroke="white" strokeWidth="1.2" />
            </svg>
          </div>
          <div className="flex-1 h-9 rounded-full bg-surface-white/[0.06] flex items-center px-3.5">
            <span className="text-[10px] text-surface-white/25">Speak or type a message...</span>
          </div>
          <div className="shrink-0 px-3.5 py-2 rounded-full bg-red-500/85 flex items-center gap-1.5">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path
                d="M8 2L5 5M5 5L2 8M5 5L8 8M5 5L2 2"
                stroke="white"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
            </svg>
            <span className="text-[10px] font-body-medium text-surface-white">Leave</span>
          </div>
        </div>
      </div>
    </div>
  )
}
