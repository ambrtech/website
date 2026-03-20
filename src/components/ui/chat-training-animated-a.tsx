'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { gsapRevealEase } from '@/lib/easing'
import { MockFrame } from '@/components/ui/mock-frame'

/* ─────────────────────────────────────────────────────
   Chat Training A: "The Chat Window"

   Realistic chat interface — messages appear one by one
   with typing indicators, proper chat bubbles (customer
   left, agent right), and a text input. Feels like
   watching a live customer service conversation unfold.
   ───────────────────────────────────────────────────── */

function TypingDots() {
  return (
    <div className="flex items-center gap-1 px-3 py-2">
      <span className="w-1.5 h-1.5 rounded-full bg-copy-faint/50 animate-pulse" />
      <span className="w-1.5 h-1.5 rounded-full bg-copy-faint/50 animate-pulse [animation-delay:150ms]" />
      <span className="w-1.5 h-1.5 rounded-full bg-copy-faint/50 animate-pulse [animation-delay:300ms]" />
    </div>
  )
}

export function ChatTrainingAnimatedA() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const el = containerRef.current
      if (!el) return

      const panel = el.querySelector('[data-panel]')
      const header = el.querySelector('[data-header]')
      const msg1 = el.querySelector('[data-msg-1]')
      const typing1 = el.querySelector('[data-typing-1]')
      const msg2 = el.querySelector('[data-msg-2]')
      const msg3 = el.querySelector('[data-msg-3]')
      const typing2 = el.querySelector('[data-typing-2]')
      const msg4 = el.querySelector('[data-msg-4]')
      const nudge = el.querySelector('[data-nudge]')
      const inputBar = el.querySelector('[data-input]')
      const inputText = el.querySelector('[data-input-text]')

      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 1,
        defaults: { ease: gsapRevealEase },
      })

      /* Initial state */
      tl.set(panel, { opacity: 0, scale: 0.97 })
      tl.set(header, { opacity: 0, y: -6 })
      tl.set([msg1, msg2, msg3, msg4], { opacity: 0, y: 16, scale: 0.95 })
      tl.set([typing1, typing2], { opacity: 0, y: 8 })
      tl.set(nudge, { opacity: 0, x: -12 })
      tl.set(inputBar, { opacity: 0, y: 8 })
      tl.set(inputText, { opacity: 0 })

      /* Phase 1: Panel + header */
      tl.to(panel, { opacity: 1, scale: 1, duration: 0.4, ease: 'power2.out' })
      tl.to(header, { opacity: 1, y: 0, duration: 0.35 }, '-=0.2')
      tl.to(inputBar, { opacity: 1, y: 0, duration: 0.3 }, '-=0.1')

      /* Phase 2: Customer sends first message */
      tl.to(msg1, { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: 'power2.out' })
      tl.to({}, { duration: 0.6 })

      /* Phase 3: Typing indicator, then agent response */
      tl.to(typing1, { opacity: 1, y: 0, duration: 0.2 })
      tl.to({}, { duration: 1.0 })
      tl.to(typing1, { opacity: 0, duration: 0.15 })
      tl.to(msg2, { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: 'power2.out' })

      /* Phase 4: Coaching nudge slides in */
      tl.to(nudge, { opacity: 1, x: 0, duration: 0.35, ease: 'power2.out' }, '-=0.1')

      /* Hold */
      tl.to({}, { duration: 1.2 })

      /* Phase 5: Customer sends follow-up */
      tl.to(msg3, { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: 'power2.out' })
      tl.to(nudge, { opacity: 0, duration: 0.3 }, '-=0.2')

      /* Phase 6: Agent types again */
      tl.to({}, { duration: 0.4 })
      tl.to(typing2, { opacity: 1, y: 0, duration: 0.2 })

      /* Simulated typing in input bar */
      tl.to(inputText, { opacity: 1, duration: 0.3 }, '-=0.1')

      tl.to({}, { duration: 1.0 })
      tl.to(typing2, { opacity: 0, duration: 0.15 })
      tl.to(inputText, { opacity: 0, duration: 0.15 }, '-=0.15')
      tl.to(msg4, { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: 'power2.out' })

      /* Hold final */
      tl.to({}, { duration: 2.0 })

      /* Fade out */
      tl.to(
        [panel, header, msg1, msg2, msg3, msg4, nudge, inputBar],
        { opacity: 0, duration: 0.9, ease: 'power1.inOut' }
      )
    },
    { scope: containerRef }
  )

  return (
    <MockFrame ref={containerRef} height="fill">
      {/* Chat panel */}
      <div
        data-panel=""
        className="absolute inset-0 rounded-brand bg-surface-white border border-border overflow-hidden flex flex-col"
        style={{ opacity: 0 }}
      >
        {/* Header */}
        <div
          data-header=""
          className="flex items-center gap-3 px-4 py-3 border-b border-border"
          style={{ opacity: 0 }}
        >
          <div className="w-8 h-8 rounded-full bg-surface-alt border border-border flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-copy-light">
              <path d="M4 10V7a5 5 0 0110 0v3" stroke="currentColor" strokeWidth="1.2" transform="translate(-2, -1) scale(0.85)" />
              <rect x="2" y="7" width="2.5" height="4" rx="0.8" stroke="currentColor" strokeWidth="1" />
              <rect x="9.5" y="7" width="2.5" height="4" rx="0.8" stroke="currentColor" strokeWidth="1" />
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-caption font-body-medium text-dark">Customer Service Simulation</p>
            <p className="text-[10px] text-copy-light">Refund escalation scenario</p>
          </div>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="text-[10px] text-copy-faint">Live</span>
          </span>
        </div>

        {/* Messages area */}
        <div className="flex-1 px-4 py-3 space-y-2.5 overflow-hidden">
          {/* Customer message 1 */}
          <div data-msg-1="" className="flex justify-start" style={{ opacity: 0 }}>
            <div className="max-w-[78%] px-3.5 py-2.5 rounded-brand-sm bg-surface border border-border">
              <p className="text-eyebrow-sm font-body-medium text-copy-light mb-1">Customer</p>
              <p className="text-caption text-copy-mid leading-relaxed">
                I&apos;ve been waiting 3 days for a response about my refund. This is completely
                unacceptable.
              </p>
            </div>
          </div>

          {/* Typing indicator 1 */}
          <div data-typing-1="" className="flex justify-end" style={{ opacity: 0 }}>
            <div className="px-3.5 py-1.5 rounded-brand-sm bg-accent-whisper border border-accent-soft/30">
              <TypingDots />
            </div>
          </div>

          {/* Agent message 1 */}
          <div data-msg-2="" className="flex justify-end" style={{ opacity: 0 }}>
            <div className="max-w-[78%] px-3.5 py-2.5 rounded-brand-sm bg-accent-whisper border border-accent-soft/30">
              <p className="text-eyebrow-sm font-body-medium text-copy-light mb-1">You</p>
              <p className="text-caption text-copy-mid leading-relaxed">
                I completely understand your frustration, and I sincerely apologize for the delay.
                Let me look into this for you right now.
              </p>
            </div>
          </div>

          {/* Coaching nudge */}
          <div
            data-nudge=""
            className="flex items-start gap-2 bg-accent/[0.06] border-l-2 border-accent/30 rounded-r-brand-sm px-3 py-2 ml-4"
            style={{ opacity: 0 }}
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              className="text-accent shrink-0 mt-0.5"
            >
              <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.1" />
              <path d="M6 3.5v3M6 8v.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
            <p className="text-[11px] text-accent/80 leading-relaxed">
              Good empathy. Now offer a specific resolution with a timeline.
            </p>
          </div>

          {/* Customer message 2 */}
          <div data-msg-3="" className="flex justify-start" style={{ opacity: 0 }}>
            <div className="max-w-[78%] px-3.5 py-2.5 rounded-brand-sm bg-surface border border-border">
              <p className="text-eyebrow-sm font-body-medium text-copy-light mb-1">Customer</p>
              <p className="text-caption text-copy-mid leading-relaxed">
                I&apos;ve already explained the issue twice to different agents.
              </p>
            </div>
          </div>

          {/* Typing indicator 2 */}
          <div data-typing-2="" className="flex justify-end" style={{ opacity: 0 }}>
            <div className="px-3.5 py-1.5 rounded-brand-sm bg-accent-whisper border border-accent-soft/30">
              <TypingDots />
            </div>
          </div>

          {/* Agent message 2 */}
          <div data-msg-4="" className="flex justify-end" style={{ opacity: 0 }}>
            <div className="max-w-[78%] px-3.5 py-2.5 rounded-brand-sm bg-accent-whisper border border-accent-soft/30">
              <p className="text-eyebrow-sm font-body-medium text-copy-light mb-1">You</p>
              <p className="text-caption text-copy-mid leading-relaxed">
                I can see the full history here, so you won&apos;t need to repeat anything.
                Your refund of $89.99 has been processed and will arrive within 2 business days.
              </p>
            </div>
          </div>
        </div>

        {/* Input bar */}
        <div
          data-input=""
          className="flex items-center gap-2 px-4 py-3 border-t border-border"
          style={{ opacity: 0 }}
        >
          <div className="flex-1 h-9 rounded-brand-sm bg-surface border border-border flex items-center px-3">
            <span className="text-caption text-copy-faint flex-1">Type your response...</span>
            <span
              data-input-text=""
              className="text-caption text-copy-mid absolute"
              style={{ opacity: 0 }}
            >
              I can see the full history...
            </span>
          </div>
          <span className="text-caption font-body-medium text-accent px-2">Send</span>
        </div>
      </div>
    </MockFrame>
  )
}
