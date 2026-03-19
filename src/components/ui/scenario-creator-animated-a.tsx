'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { gsapRevealEase } from '@/lib/easing'

/* ---------------------------------------------------------
   Concept A: "The Chat Creation"

   A chat interface where the user converses with an AI
   assistant to create a scenario. Messages appear back
   and forth — the AI asks questions, the user responds,
   and the scenario materializes from the conversation.
   Based on the real Individual Scenario Creator.
   --------------------------------------------------------- */

const messages: Array<{
  sender: 'ai' | 'user'
  text: string
}> = [
  {
    sender: 'ai',
    text: "Hey there. I'll help you create a custom scenario. What would you like to practice?",
  },
  {
    sender: 'user',
    text: 'I need to give feedback to a team member about missed deadlines',
  },
  {
    sender: 'ai',
    text: "Got it. Let's get some details to personalize this scenario.",
  },
]

export function ScenarioCreatorAnimatedA() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const el = containerRef.current
      if (!el) return

      const header = el.querySelector('[data-header]')
      const statusDot = el.querySelector('[data-status-dot]')
      const chatBubbles = el.querySelectorAll('[data-bubble]')
      const typingDots = el.querySelector('[data-typing]')
      const inputBar = el.querySelector('[data-input]')
      const sidebar = el.querySelectorAll('[data-sidebar-item]')

      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.8,
        defaults: { ease: gsapRevealEase },
      })

      /* Initial state */
      tl.set(header, { opacity: 0, y: -10 })
      tl.set(statusDot, { scale: 0 })
      tl.set(chatBubbles, { opacity: 0, y: 16, scale: 0.95 })
      tl.set(typingDots, { opacity: 0 })
      tl.set(inputBar, { opacity: 0, y: 12 })
      tl.set(sidebar, { opacity: 0, x: 10 })

      /* Phase 1: Header appears with status */
      tl.to(header, { opacity: 1, y: 0, duration: 0.4 })
      tl.to(statusDot, { scale: 1, duration: 0.25, ease: 'back.out(3)' }, '-=0.15')

      /* Phase 2: Input bar appears at bottom */
      tl.to(inputBar, { opacity: 1, y: 0, duration: 0.35 })

      /* Phase 3: AI message 1 — typing indicator then message */
      tl.to(typingDots, { opacity: 1, duration: 0.2 })
      tl.to({}, { duration: 0.6 })
      tl.to(typingDots, { opacity: 0, duration: 0.15 })
      tl.to(chatBubbles[0], { opacity: 1, y: 0, scale: 1, duration: 0.4 })

      /* Phase 4: User message appears (typed feeling) */
      tl.to({}, { duration: 0.5 })
      tl.to(chatBubbles[1], { opacity: 1, y: 0, scale: 1, duration: 0.4 })

      /* Phase 5: AI message 2 — typing then reply */
      tl.to(typingDots, { opacity: 1, duration: 0.2 })
      tl.to({}, { duration: 0.5 })
      tl.to(typingDots, { opacity: 0, duration: 0.15 })
      tl.to(chatBubbles[2], { opacity: 1, y: 0, scale: 1, duration: 0.4 })

      /* Phase 6: Sidebar guide items fade in */
      tl.to(sidebar, {
        opacity: 1,
        x: 0,
        duration: 0.3,
        stagger: 0.1,
      }, '-=0.2')

      /* Phase 7: Hold */
      tl.to({}, { duration: 3.0 })

      /* Phase 8: Fade out */
      tl.to(el.firstElementChild, {
        opacity: 0,
        duration: 0.9,
        ease: 'power1.inOut',
      })
    },
    { scope: containerRef }
  )

  return (
    <div ref={containerRef} className="relative min-h-[420px]">
      <div className="absolute inset-0 flex">
        {/* ── Main chat area ── */}
        <div className="flex-1 flex flex-col px-5 py-5">
          {/* Header */}
          <div data-header="" className="flex items-center gap-2 mb-5" style={{ opacity: 0 }}>
            <div className="w-7 h-7 rounded-full bg-accent/10 flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 2v10M4.5 4.5l5 5M9.5 4.5l-5 5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" className="text-accent" />
              </svg>
            </div>
            <div>
              <p className="text-caption font-body-medium text-dark">AI Scenario Assistant</p>
              <div className="flex items-center gap-1">
                <div
                  data-status-dot=""
                  className="w-1.5 h-1.5 rounded-full bg-green-500"
                  style={{ transform: 'scale(0)' }}
                />
                <span className="text-[9px] text-copy-faint">Ready to help</span>
              </div>
            </div>
          </div>

          {/* Chat messages */}
          <div className="flex-1 space-y-3 mb-4">
            {messages.map((msg, i) => (
              <div
                key={i}
                data-bubble=""
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                style={{ opacity: 0 }}
              >
                <div
                  className={`max-w-[85%] px-3.5 py-2.5 rounded-brand-sm text-caption leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-accent text-surface-white rounded-br-sm'
                      : 'bg-surface border border-border text-copy-mid rounded-bl-sm'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {/* Typing indicator (reused between messages) */}
            <div data-typing="" className="flex justify-start" style={{ opacity: 0 }}>
              <div className="px-3.5 py-2.5 rounded-brand-sm bg-surface border border-border rounded-bl-sm">
                <div className="flex gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-copy-faint animate-pulse" />
                  <span className="w-1.5 h-1.5 rounded-full bg-copy-faint animate-pulse [animation-delay:150ms]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-copy-faint animate-pulse [animation-delay:300ms]" />
                </div>
              </div>
            </div>
          </div>

          {/* Input bar */}
          <div
            data-input=""
            className="flex items-center gap-2 px-3.5 py-2.5 rounded-brand-sm border border-border bg-surface-white"
            style={{ opacity: 0 }}
          >
            <span className="text-caption text-copy-faint flex-1">Type your message...</span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-copy-faint shrink-0">
              <path d="M2 7h8M7 4l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {/* ── Sidebar: Guide checklist ── */}
        <div className="w-[38%] border-l border-border bg-surface/50 px-4 py-5">
          <p className="text-[10px] font-body-medium uppercase tracking-eyebrow text-copy-light mb-3">
            Describe:
          </p>
          <div className="space-y-2.5">
            {[
              { label: 'Your relationship', done: true },
              { label: 'The specific situation', done: true },
              { label: 'What makes it challenging', done: false },
              { label: 'Your goals', done: false },
              { label: 'Character details', sub: 'Optional', done: false },
            ].map((item, i) => (
              <div
                key={i}
                data-sidebar-item=""
                className="flex items-start gap-2"
                style={{ opacity: 0 }}
              >
                <div
                  className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center shrink-0 mt-0.5 ${
                    item.done
                      ? 'bg-accent/10 border-accent text-accent'
                      : 'border-copy-faint'
                  }`}
                >
                  {item.done && (
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                      <path d="M2 4l1.5 1.5L6 3" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>
                <div>
                  <span className={`text-caption ${item.done ? 'text-dark font-body-medium' : 'text-copy-mid'}`}>
                    {item.label}
                  </span>
                  {item.sub && (
                    <span className="text-[9px] text-copy-faint ml-1">{item.sub}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
