'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Image from 'next/image'
import { gsapRevealEase } from '@/lib/easing'
import { VoiceWave } from '@/components/ui/voice-wave'


/* ─────────────────────────────────────────────────────
   Concept C: "The Pulse" — Live Conversation Moment

   Drops you straight into the action. A dark call UI
   with a character, pulsing speaking indicator, typed
   transcript, and contextual coaching nudges. Cycles
   through two conversation moments before looping.
   ───────────────────────────────────────────────────── */

export function ScenarioCardPulse() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const el = containerRef.current
      if (!el) return

      const panel = el.querySelector('[data-panel]')
      const character = el.querySelector('[data-character]')
      const ring = el.querySelector('[data-ring]')
      const timer = el.querySelector('[data-timer]')
      const waveBars = el.querySelectorAll('[data-wave]')
      const transcript1 = el.querySelector('[data-transcript-1]')
      const transcript2 = el.querySelector('[data-transcript-2]')
      const nudge1 = el.querySelector('[data-nudge-1]')
      const nudge2 = el.querySelector('[data-nudge-2]')
      const keyDetails = el.querySelector('[data-key-details]')

      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.8,
        defaults: { ease: gsapRevealEase },
      })

      /* Reset timer on each loop */
      const timerObj = { val: 0 }
      tl.call(() => {
        timerObj.val = 0
        if (timer) timer.textContent = '00:00'
      })

      /* Initial state */
      tl.set(panel, { opacity: 0, scale: 0.97 })
      tl.set(character, { opacity: 0, y: 12 })
      tl.set(ring, { scale: 0.85, opacity: 0 })
      tl.set(timer, { opacity: 0 })
      tl.set(transcript1, { opacity: 0, clipPath: 'inset(0 100% 0 0)' })
      tl.set(transcript2, { opacity: 0, clipPath: 'inset(0 100% 0 0)' })
      tl.set(nudge1, { opacity: 0, x: 30 })
      tl.set(nudge2, { opacity: 0, x: 30 })
      tl.set(keyDetails, { opacity: 0, y: 8 })

      /* Phase 1: Dark panel + character + timer appear quickly */
      tl.to(panel, { opacity: 1, scale: 1, duration: 0.4, ease: 'power2.out' })
      tl.to(character, { opacity: 1, y: 0, duration: 0.4 }, '-=0.2')
      tl.to(ring, { scale: 1, opacity: 1, duration: 0.3, ease: 'power2.out' }, '-=0.2')
      tl.to(timer, { opacity: 1, duration: 0.2 }, '-=0.1')

      /* Phase 2: Key details appear almost immediately */
      tl.to(keyDetails, { opacity: 1, y: 0, duration: 0.35 }, '-=0.1')

      /* Phase 3: Timer counts up — separate non-blocking timeline */
      const timerTl = gsap.timeline()
      timerTl.to(timerObj, {
        val: 10,
        duration: 14,
        ease: 'none',
        onUpdate: () => {
          const v = Math.floor(timerObj.val)
          if (timer) timer.textContent = `00:${String(v).padStart(2, '0')}`
        },
      })

      /* Phase 3b: Ring pulses gently throughout (non-blocking) */
      const ringPulse = gsap.timeline({ repeat: -1 })
      ringPulse
        .to(ring, {
          boxShadow: '0 0 24px 8px rgba(212, 114, 52, 0.25)',
          scale: 1.04,
          duration: 0.6,
          ease: 'sine.inOut',
        })
        .to(ring, {
          boxShadow: '0 0 12px 3px rgba(212, 114, 52, 0.1)',
          scale: 1,
          duration: 0.6,
          ease: 'sine.inOut',
        })

      /* ── Moment 1: transcript + nudge appear quickly ── */

      tl.to(transcript1, {
        opacity: 1,
        clipPath: 'inset(0 0% 0 0)',
        duration: 1.4,
        ease: 'power1.inOut',
      })
      tl.to(nudge1, { opacity: 1, x: 0, duration: 0.4, ease: 'power2.out' }, '-=0.4')

      /* Hold moment 1 */
      tl.to({}, { duration: 2.2 })

      /* Moment 1 fades */
      tl.to([transcript1, nudge1], { opacity: 0, duration: 0.3, ease: 'power1.in' })

      /* ── Moment 2 ── */

      tl.to(transcript2, {
        opacity: 1,
        clipPath: 'inset(0 0% 0 0)',
        duration: 1.4,
        ease: 'power1.inOut',
      })
      tl.to(nudge2, { opacity: 1, x: 0, duration: 0.4, ease: 'power2.out' }, '-=0.4')

      /* Hold moment 2 */
      tl.to({}, { duration: 2.2 })

      /* Phase 12: Everything fades out */
      tl.call(() => { ringPulse.kill(); timerTl.kill() })
      tl.to(
        [panel, character, ring, timer, transcript2, nudge2, keyDetails],
        {
          opacity: 0,
          duration: 0.8,
          ease: 'power1.inOut',
        }
      )
    },
    { scope: containerRef }
  )

  return (
    <div ref={containerRef} className="relative min-h-[420px]">
      {/* ── Dark call panel ── */}
      <div
        data-panel=""
        className="absolute inset-0 rounded-brand bg-dark overflow-hidden"
        style={{ opacity: 0 }}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-5 pt-4">
          <span
            data-timer=""
            className="text-[11px] font-body-medium text-surface-white/50 bg-surface-white/[0.06] px-3 py-1 rounded tabular-nums"
            style={{ opacity: 0 }}
          >
            00:00
          </span>
          <span className="text-[10px] text-surface-white/30 bg-surface-white/[0.06] px-2.5 py-1 rounded">
            Camera off
          </span>
        </div>

        {/* Main content: character + transcripts + nudges */}
        <div className="px-5 pt-3 pb-4">
          {/* Character with pulsing ring */}
          <div data-character="" className="flex flex-col items-center mb-4" style={{ opacity: 0 }}>
            <div
              data-ring=""
              className="w-[72px] h-[72px] rounded-full overflow-hidden border-[2.5px] border-accent mb-2"
              style={{
                opacity: 0,
                boxShadow: '0 0 12px 3px rgba(212, 114, 52, 0.1)',
              }}
            >
              <Image
                src="/images/team/jamie-headshot.png"
                alt="Character"
                width={72}
                height={72}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-caption font-body-medium text-surface-white">Sarah Chen</p>
            <p className="text-[10px] text-surface-white/35 mt-0.5">Team Lead</p>
          </div>

          {/* Voice waveform */}
          <div className="flex justify-center mb-4">
            <VoiceWave width={140} height={28} />
          </div>

          {/* Transcript area — overlapping moments */}
          <div className="relative min-h-[40px] mb-3">
            {/* Moment 1 transcript */}
            <div
              data-transcript-1=""
              className="absolute inset-x-0 top-0 bg-surface-white/[0.05] rounded-brand-sm px-3.5 py-2.5"
              style={{ opacity: 0 }}
            >
              <p className="text-caption text-surface-white/80 leading-relaxed">
                <span className="text-accent/70 font-body-medium">Sarah:</span>{' '}
                &ldquo;I hear what you&apos;re saying about the deadlines, and I appreciate you
                raising this with me directly...&rdquo;
              </p>
            </div>

            {/* Moment 2 transcript */}
            <div
              data-transcript-2=""
              className="absolute inset-x-0 top-0 bg-surface-white/[0.05] rounded-brand-sm px-3.5 py-2.5"
              style={{ opacity: 0 }}
            >
              <p className="text-caption text-surface-white/80 leading-relaxed">
                <span className="text-surface-white/50 font-body-medium">You:</span>{' '}
                &ldquo;Could you walk me through what happened with last week&apos;s
                client meeting?&rdquo;
              </p>
            </div>
          </div>

          {/* Coaching nudge area — overlapping moments */}
          <div className="relative min-h-[44px] mb-3">
            {/* Nudge 1 */}
            <div
              data-nudge-1=""
              className="absolute inset-x-0 top-0 flex items-start gap-2 bg-accent/[0.08] border border-accent/15 rounded-brand-sm px-3.5 py-2.5"
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
                Acknowledge their perspective before giving direct feedback on the missed deadlines.
              </p>
            </div>

            {/* Nudge 2 */}
            <div
              data-nudge-2=""
              className="absolute inset-x-0 top-0 flex items-start gap-2 bg-accent/[0.08] border border-accent/15 rounded-brand-sm px-3.5 py-2.5"
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
                Good open question — let them share their perspective before proposing solutions.
              </p>
            </div>
          </div>

          {/* Key Details sidebar — compact version */}
          <div
            data-key-details=""
            className="bg-surface-white/[0.04] border border-surface-white/[0.06] rounded-brand-sm px-3.5 py-2.5"
            style={{ opacity: 0 }}
          >
            <p className="text-[9px] font-body-medium text-surface-white/40 uppercase tracking-eyebrow mb-1.5">
              Key Details
            </p>
            <div className="space-y-1">
              <p className="text-[10px] text-surface-white/50 leading-relaxed">
                1. Missed two deadlines on a critical project
              </p>
              <p className="text-[10px] text-surface-white/50 leading-relaxed">
                2. Non-deadline work remains excellent
              </p>
              <p className="text-[10px] text-surface-white/50 leading-relaxed">
                3. Goal: improve performance without damaging rapport
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex items-center gap-2.5 px-4 pb-4">
          {/* Mic button */}
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

          {/* Text input */}
          <div className="flex-1 h-9 rounded-full bg-surface-white/[0.06] flex items-center px-3.5">
            <span className="text-[10px] text-surface-white/25">Speak or type a message...</span>
          </div>

          {/* Leave button */}
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
