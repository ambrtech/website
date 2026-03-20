'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Image from 'next/image'
import { gsapRevealEase } from '@/lib/easing'
import { MockFrame } from '@/components/ui/mock-frame'
import { VoiceWave } from '@/components/ui/voice-wave'

/* ---------------------------------------------------------
   Concept A: "Chat to Simulation"

   A chat interface where the user converses with an AI
   assistant to create a scenario. After the conversation
   finishes, the chat fades and a live simulation card
   materializes — showing the full journey from
   "describe what you want" to "your simulation is ready."
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
    text: "Got it — I'll build a performance conversation for you. Give me a moment...",
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
      const chatArea = el.querySelector('[data-chat-area]')

      // Transition elements
      const curtain = el.querySelector('[data-curtain]')
      const sparkle = el.querySelector('[data-sparkle]')

      // Simulation card
      const simCard = el.querySelector('[data-sim-card]')
      const simAvatar = el.querySelector('[data-sim-avatar]')
      const simTitle = el.querySelector('[data-sim-title]')
      const simDesc = el.querySelector('[data-sim-desc]')
      const simWave = el.querySelector('[data-sim-wave]')
      const simStatus = el.querySelector('[data-sim-status]')
      const simReady = el.querySelector('[data-sim-ready]')

      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 1.2,
        defaults: { ease: gsapRevealEase },
      })

      /* Initial state */
      tl.set(header, { opacity: 0, y: -10 })
      tl.set(statusDot, { scale: 0 })
      tl.set(chatBubbles, { opacity: 0, y: 16, scale: 0.95 })
      tl.set(typingDots, { opacity: 0 })
      tl.set(inputBar, { opacity: 0, y: 12 })
      tl.set(curtain, { scaleY: 0 })
      tl.set(sparkle, { opacity: 0, scale: 0 })
      tl.set(simCard, { opacity: 0, scale: 0.95, y: 12 })
      tl.set(simAvatar, { opacity: 0, scale: 0.8 })
      tl.set(simTitle, { opacity: 0, y: 8 })
      tl.set(simDesc, { opacity: 0, y: 8 })
      tl.set(simWave, { opacity: 0 })
      tl.set(simStatus, { opacity: 0 })
      tl.set(simReady, { opacity: 0, scale: 0.8 })

      /* Phase 1: Header appears with status */
      tl.to(header, { opacity: 1, y: 0, duration: 0.4 })
      tl.to(statusDot, { scale: 1, duration: 0.25, ease: 'back.out(3)' }, '-=0.15')

      /* Phase 2: Input bar appears at bottom */
      tl.to(inputBar, { opacity: 1, y: 0, duration: 0.35 })

      /* Phase 3: AI message 1 — typing indicator then message */
      tl.to(typingDots, { opacity: 1, duration: 0.2 })
      tl.to({}, { duration: 0.5 })
      tl.to(typingDots, { opacity: 0, duration: 0.15 })
      tl.to(chatBubbles[0], { opacity: 1, y: 0, scale: 1, duration: 0.4 })

      /* Phase 4: User message appears */
      tl.to({}, { duration: 0.4 })
      tl.to(chatBubbles[1], { opacity: 1, y: 0, scale: 1, duration: 0.4 })

      /* Phase 5: AI message 2 — typing then reply */
      tl.to(typingDots, { opacity: 1, duration: 0.2 })
      tl.to({}, { duration: 0.5 })
      tl.to(typingDots, { opacity: 0, duration: 0.15 })
      tl.to(chatBubbles[2], { opacity: 1, y: 0, scale: 1, duration: 0.4 })

      /* Phase 6: Hold chat state briefly */
      tl.to({}, { duration: 1.0 })

      /* Phase 7: Transition — curtain wipes, chat fades */
      tl.to(sparkle, {
        opacity: 1,
        scale: 1,
        duration: 0.3,
        ease: 'back.out(2)',
      })
      tl.to(curtain, {
        scaleY: 1,
        duration: 0.7,
        ease: 'power2.inOut',
      })
      tl.to([chatArea, inputBar, header], {
        opacity: 0,
        duration: 0.4,
      }, '-=0.5')
      tl.to(sparkle, {
        opacity: 0,
        scale: 0.5,
        duration: 0.3,
      }, '-=0.3')
      tl.to(curtain, {
        opacity: 0,
        duration: 0.4,
      })

      /* Phase 8: Simulation card materializes */
      tl.to(simCard, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.5,
        ease: 'power2.out',
      })
      tl.to(simAvatar, {
        opacity: 1,
        scale: 1,
        duration: 0.4,
        ease: 'power2.out',
      }, '-=0.2')
      tl.to(simTitle, { opacity: 1, y: 0, duration: 0.4 }, '-=0.15')
      tl.to(simDesc, { opacity: 1, y: 0, duration: 0.4 }, '-=0.2')
      tl.to(simStatus, { opacity: 1, duration: 0.3 }, '-=0.1')
      tl.to(simWave, { opacity: 1, duration: 0.4 }, '-=0.2')

      /* Phase 9: "Ready" badge pops in */
      tl.to(simReady, {
        opacity: 1,
        scale: 1,
        duration: 0.3,
        ease: 'back.out(2)',
      })

      /* Phase 10: Hold final state */
      tl.to({}, { duration: 2.8 })

      /* Phase 11: Fade out for loop */
      tl.to(el.firstElementChild, {
        opacity: 0,
        duration: 0.9,
        ease: 'power1.inOut',
      })
    },
    { scope: containerRef }
  )

  return (
    <MockFrame ref={containerRef} height="standard">
      <div className="absolute inset-0 flex flex-col">
        {/* ── Header ── */}
        <div data-header="" className="flex items-center gap-2.5 px-5 pt-5 pb-3 shrink-0" style={{ opacity: 0 }}>
          <div className="w-7 h-7 rounded-full overflow-hidden shrink-0">
            <Image
              src="/ambr/a-mark-accent.png"
              alt="Ambr AI"
              width={28}
              height={28}
              className="w-full h-full object-contain"
            />
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

        {/* ── Chat area ── */}
        <div data-chat-area="" className="flex-1 px-5 space-y-3 mb-3 min-h-0">
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

          {/* Typing indicator */}
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

        {/* ── Input bar ── */}
        <div
          data-input=""
          className="flex items-center gap-2 px-5 pb-5 shrink-0"
          style={{ opacity: 0 }}
        >
          <div className="flex items-center gap-2 px-3.5 py-2.5 rounded-brand-sm border border-border bg-surface-white flex-1">
            <span className="text-caption text-copy-faint flex-1">Type your message...</span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-copy-faint shrink-0">
              <path d="M2 7h8M7 4l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {/* ── Transition curtain ── */}
        <div
          data-curtain=""
          className="absolute inset-0 bg-gradient-to-b from-accent-whisper via-accent-soft/20 to-accent-whisper z-10 pointer-events-none origin-top"
          style={{ transform: 'scaleY(0)' }}
        />

        {/* Sparkle */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
          <div
            data-sparkle=""
            className="w-6 h-6 rounded-full bg-accent/30"
            style={{ opacity: 0, boxShadow: '0 0 20px 6px rgba(212, 114, 52, 0.2)' }}
          />
        </div>

        {/* ── Simulation card (materializes after transition) ── */}
        <div className="absolute inset-0 flex items-center justify-center px-5 z-30 pointer-events-none">
          <div
            data-sim-card=""
            className="w-full max-w-[360px] rounded-brand bg-dark overflow-hidden pointer-events-auto"
            style={{ opacity: 0 }}
          >
            {/* Sim card top bar */}
            <div className="flex items-center justify-between px-4 pt-4 pb-2">
              <div
                data-sim-status=""
                className="flex items-center gap-1.5"
                style={{ opacity: 0 }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                <span className="text-[10px] text-surface-white/40">Starting simulation</span>
              </div>
              <span
                data-sim-ready=""
                className="text-[9px] font-body-medium text-accent bg-accent/[0.12] px-2.5 py-0.5 rounded-full"
                style={{ opacity: 0 }}
              >
                Ready
              </span>
            </div>

            {/* Character */}
            <div className="flex flex-col items-center px-4 pb-3">
              <div
                data-sim-avatar=""
                className="w-[60px] h-[60px] rounded-full overflow-hidden border-[2px] border-accent mb-2"
                style={{ opacity: 0, boxShadow: '0 0 12px 3px rgba(212, 114, 52, 0.1)' }}
              >
                <Image
                  src="/images/team/jamie-headshot.png"
                  alt="AI Character"
                  width={60}
                  height={60}
                  className="w-full h-full object-cover"
                />
              </div>
              <p
                data-sim-title=""
                className="text-caption font-body-medium text-surface-white mb-0.5"
                style={{ opacity: 0 }}
              >
                Sarah Chen
              </p>
              <p
                data-sim-desc=""
                className="text-[10px] text-surface-white/40 text-center leading-relaxed mb-3 max-w-[240px]"
                style={{ opacity: 0 }}
              >
                Team Lead &middot; Performance feedback conversation about missed deadlines
              </p>

              {/* Voice wave */}
              <div data-sim-wave="" className="mb-3" style={{ opacity: 0 }}>
                <VoiceWave width={140} height={28} />
              </div>
            </div>

            {/* Bottom bar */}
            <div className="flex items-center gap-2 px-4 pb-4">
              <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center shrink-0">
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
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
              <div className="flex-1 h-8 rounded-full bg-surface-white/[0.06] flex items-center px-3">
                <span className="text-[10px] text-surface-white/25">Speak to begin...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MockFrame>
  )
}
