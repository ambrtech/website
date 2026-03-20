'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { gsapRevealEase } from '@/lib/easing'
import { MockFrame } from '@/components/ui/mock-frame'

/* ─────────────────────────────────────────────────────
   Chat Training C: "The Coach View"

   Split-panel layout: the chat conversation on the left,
   and a live coaching/analysis panel on the right. Shows
   not just the conversation but the AI evaluating the
   agent's performance in real time — skills detected,
   tone analysis, and suggested improvements.
   ───────────────────────────────────────────────────── */

export function ChatTrainingAnimatedC() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const el = containerRef.current
      if (!el) return

      const panel = el.querySelector('[data-panel]')
      const chatHeader = el.querySelector('[data-chat-header]')
      const coachHeader = el.querySelector('[data-coach-header]')
      const msg1 = el.querySelector('[data-msg-1]')
      const msg2 = el.querySelector('[data-msg-2]')
      const msg3 = el.querySelector('[data-msg-3]')
      const msg4 = el.querySelector('[data-msg-4]')
      const skill1 = el.querySelector('[data-skill-1]')
      const skill2 = el.querySelector('[data-skill-2]')
      const skill3 = el.querySelector('[data-skill-3]')
      const toneBar = el.querySelector('[data-tone-bar]')
      const toneFill = el.querySelector('[data-tone-fill]')
      const suggestion = el.querySelector('[data-suggestion]')
      const scoreCard = el.querySelector('[data-score-card]')

      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 1,
        defaults: { ease: gsapRevealEase },
      })

      /* Initial state */
      tl.set(panel, { opacity: 0, scale: 0.97 })
      tl.set([chatHeader, coachHeader], { opacity: 0, y: -6 })
      tl.set([msg1, msg2, msg3, msg4], { opacity: 0, y: 14 })
      tl.set([skill1, skill2, skill3], { opacity: 0, x: 12, scale: 0.9 })
      tl.set(toneBar, { opacity: 0 })
      tl.set(toneFill, { scaleX: 0 })
      tl.set(suggestion, { opacity: 0, y: 10 })
      tl.set(scoreCard, { opacity: 0, scale: 0.9 })

      /* Phase 1: Panel appears */
      tl.to(panel, { opacity: 1, scale: 1, duration: 0.4, ease: 'power2.out' })
      tl.to(chatHeader, { opacity: 1, y: 0, duration: 0.3 }, '-=0.2')
      tl.to(coachHeader, { opacity: 1, y: 0, duration: 0.3 }, '-=0.2')

      /* Phase 2: Customer sends message */
      tl.to(msg1, { opacity: 1, y: 0, duration: 0.4 })
      tl.to({}, { duration: 0.6 })

      /* Phase 3: Agent responds + skills light up */
      tl.to(msg2, { opacity: 1, y: 0, duration: 0.4 })
      tl.to(skill1, { opacity: 1, x: 0, scale: 1, duration: 0.3, ease: 'back.out(2)' }, '-=0.1')
      tl.to(skill2, { opacity: 1, x: 0, scale: 1, duration: 0.3, ease: 'back.out(2)' }, '-=0.15')

      /* Tone bar fills */
      tl.to(toneBar, { opacity: 1, duration: 0.2 }, '-=0.2')
      tl.to(toneFill, { scaleX: 0.75, duration: 0.6, ease: 'power2.out' }, '-=0.1')

      /* Hold */
      tl.to({}, { duration: 1.0 })

      /* Phase 4: Customer escalates */
      tl.to(msg3, { opacity: 1, y: 0, duration: 0.4 })
      tl.to({}, { duration: 0.5 })

      /* Phase 5: Agent resolves + more skills + suggestion */
      tl.to(msg4, { opacity: 1, y: 0, duration: 0.4 })
      tl.to(skill3, { opacity: 1, x: 0, scale: 1, duration: 0.3, ease: 'back.out(2)' }, '-=0.1')
      tl.to(toneFill, { scaleX: 1, duration: 0.4, ease: 'power2.out' }, '-=0.2')
      tl.to(suggestion, { opacity: 1, y: 0, duration: 0.35 }, '-=0.1')

      /* Phase 6: Score card appears */
      tl.to(scoreCard, { opacity: 1, scale: 1, duration: 0.4, ease: 'back.out(1.5)' })

      /* Hold final state */
      tl.to({}, { duration: 2.5 })

      /* Fade out */
      tl.to(
        [panel, chatHeader, coachHeader, msg1, msg2, msg3, msg4, skill1, skill2, skill3, toneBar, toneFill, suggestion, scoreCard],
        { opacity: 0, duration: 0.9, ease: 'power1.inOut' }
      )
    },
    { scope: containerRef }
  )

  return (
    <MockFrame ref={containerRef}>
      {/* Main panel */}
      <div
        data-panel=""
        className="absolute inset-0 rounded-brand bg-surface-white border border-border overflow-hidden"
        style={{ opacity: 0 }}
      >
        <div className="flex h-full">
          {/* ── Left: Chat ── */}
          <div className="flex-1 flex flex-col border-r border-border min-w-0">
            {/* Chat header */}
            <div
              data-chat-header=""
              className="px-3.5 py-2.5 border-b border-border"
              style={{ opacity: 0 }}
            >
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span className="text-[10px] font-body-medium uppercase tracking-eyebrow text-accent">
                  Chat Simulation
                </span>
              </div>
              <p className="text-[10px] text-copy-light mt-0.5">Refund escalation</p>
            </div>

            {/* Messages */}
            <div className="flex-1 px-3 py-2.5 space-y-2 overflow-hidden">
              {/* Customer */}
              <div data-msg-1="" style={{ opacity: 0 }}>
                <div className="max-w-[90%] px-2.5 py-2 rounded-brand-sm bg-surface border border-border">
                  <p className="text-[9px] font-body-medium text-copy-light mb-0.5">Customer</p>
                  <p className="text-[11px] text-copy-mid leading-relaxed">
                    I&apos;ve been waiting 3 days. This is unacceptable.
                  </p>
                </div>
              </div>

              {/* Agent */}
              <div data-msg-2="" className="flex justify-end" style={{ opacity: 0 }}>
                <div className="max-w-[90%] px-2.5 py-2 rounded-brand-sm bg-accent-whisper border border-accent-soft/30">
                  <p className="text-[9px] font-body-medium text-copy-light mb-0.5">You</p>
                  <p className="text-[11px] text-copy-mid leading-relaxed">
                    I understand your frustration. I&apos;m looking into this right now.
                  </p>
                </div>
              </div>

              {/* Customer escalation */}
              <div data-msg-3="" style={{ opacity: 0 }}>
                <div className="max-w-[90%] px-2.5 py-2 rounded-brand-sm bg-surface border border-border">
                  <p className="text-[9px] font-body-medium text-copy-light mb-0.5">Customer</p>
                  <p className="text-[11px] text-copy-mid leading-relaxed">
                    I already explained this twice. I want my money back.
                  </p>
                </div>
              </div>

              {/* Agent resolution */}
              <div data-msg-4="" className="flex justify-end" style={{ opacity: 0 }}>
                <div className="max-w-[90%] px-2.5 py-2 rounded-brand-sm bg-accent-whisper border border-accent-soft/30">
                  <p className="text-[9px] font-body-medium text-copy-light mb-0.5">You</p>
                  <p className="text-[11px] text-copy-mid leading-relaxed">
                    I have the full history — your $89.99 refund is processed. 2 business days.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right: Coach Panel ── */}
          <div className="w-[42%] flex flex-col bg-surface/50 min-w-0">
            {/* Coach header */}
            <div
              data-coach-header=""
              className="px-3.5 py-2.5 border-b border-border"
              style={{ opacity: 0 }}
            >
              <div className="flex items-center gap-2">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-accent">
                  <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.1" />
                  <path d="M6 3.5v3M6 8v.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
                <span className="text-[10px] font-body-medium text-dark">Live Coaching</span>
              </div>
            </div>

            {/* Skills detected */}
            <div className="px-3 py-2.5 space-y-2">
              <p className="text-[9px] font-body-medium text-copy-light uppercase tracking-eyebrow">
                Skills Detected
              </p>
              <div className="space-y-1.5">
                <div
                  data-skill-1=""
                  className="flex items-center gap-2 px-2 py-1.5 rounded-brand-sm bg-accent/[0.06] border border-accent/10"
                  style={{ opacity: 0 }}
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="text-accent shrink-0">
                    <path d="M2 5.5L4 7.5L8 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-[10px] text-accent/80">Empathetic acknowledgment</span>
                </div>
                <div
                  data-skill-2=""
                  className="flex items-center gap-2 px-2 py-1.5 rounded-brand-sm bg-accent/[0.06] border border-accent/10"
                  style={{ opacity: 0 }}
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="text-accent shrink-0">
                    <path d="M2 5.5L4 7.5L8 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-[10px] text-accent/80">Immediate action</span>
                </div>
                <div
                  data-skill-3=""
                  className="flex items-center gap-2 px-2 py-1.5 rounded-brand-sm bg-accent/[0.06] border border-accent/10"
                  style={{ opacity: 0 }}
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="text-accent shrink-0">
                    <path d="M2 5.5L4 7.5L8 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-[10px] text-accent/80">Specific resolution</span>
                </div>
              </div>

              {/* Tone analysis bar */}
              <div className="mt-3">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-[9px] font-body-medium text-copy-light uppercase tracking-eyebrow">
                    Tone
                  </p>
                  <p className="text-[9px] text-copy-faint">Professional</p>
                </div>
                <div
                  data-tone-bar=""
                  className="h-1.5 rounded-full bg-accent-soft/20 overflow-hidden"
                  style={{ opacity: 0 }}
                >
                  <div
                    data-tone-fill=""
                    className="h-full rounded-full bg-accent origin-left"
                    style={{ transform: 'scaleX(0)' }}
                  />
                </div>
              </div>

              {/* Suggestion */}
              <div
                data-suggestion=""
                className="mt-3 bg-accent/[0.06] border-l-2 border-accent/25 rounded-r-brand-sm px-2.5 py-2"
                style={{ opacity: 0 }}
              >
                <p className="text-[9px] font-body-medium text-accent/70 uppercase tracking-eyebrow mb-1">
                  Suggestion
                </p>
                <p className="text-[10px] text-copy-mid leading-relaxed">
                  Consider offering a goodwill gesture for the service delay.
                </p>
              </div>

              {/* Score card */}
              <div
                data-score-card=""
                className="mt-3 bg-surface-white border border-border rounded-brand-sm px-3 py-2.5 text-center"
                style={{ opacity: 0 }}
              >
                <p className="text-[9px] font-body-medium text-copy-light uppercase tracking-eyebrow mb-1">
                  Overall Performance
                </p>
                <p className="font-heading text-section tracking-heading text-accent leading-none">
                  92
                </p>
                <p className="text-[9px] text-copy-faint mt-0.5">out of 100</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MockFrame>
  )
}
