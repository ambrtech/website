'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Image from 'next/image'
import { gsapRevealEase } from '@/lib/easing'
import { MockFrame } from '@/components/ui/mock-frame'
import { VoiceWave } from '@/components/ui/voice-wave'

/* ─────────────────────────────────────────────────────
   Voice Conversation A: "The Live Call — Split View"

   Dark call UI with LEFT/RIGHT speaker layout. The AI
   character sits on the left, "You" on the right. Each
   has their own VoiceWave indicator. Turn-taking is
   animated: AI speaks → user speaks → AI speaks, with
   the active speaker's wave visible and the other dimmed.
   ───────────────────────────────────────────────────── */

export function VoiceConversationAnimatedA() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const el = containerRef.current
      if (!el) return

      const panel = el.querySelector('[data-panel]')
      const topBar = el.querySelector('[data-top-bar]')
      const timer = el.querySelector('[data-timer]')
      const bottomBar = el.querySelector('[data-bottom-bar]')

      // Left speaker (AI)
      const aiSide = el.querySelector('[data-ai-side]')
      const aiAvatar = el.querySelector('[data-ai-avatar]')
      const aiRing = el.querySelector('[data-ai-ring]')
      const aiWave = el.querySelector('[data-ai-wave]')

      // Right speaker (You)
      const youSide = el.querySelector('[data-you-side]')
      const youAvatar = el.querySelector('[data-you-avatar]')
      const youWave = el.querySelector('[data-you-wave]')

      // Transcript bubbles
      const line1 = el.querySelector('[data-line-1]')
      const line2 = el.querySelector('[data-line-2]')
      const line3 = el.querySelector('[data-line-3]')

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
      tl.set(bottomBar, { opacity: 0, y: 8 })
      tl.set(aiSide, { opacity: 0, x: -12 })
      tl.set(youSide, { opacity: 0, x: 12 })
      tl.set(aiAvatar, { opacity: 0, scale: 0.9 })
      tl.set(aiRing, { opacity: 0, scale: 0.8 })
      tl.set(youAvatar, { opacity: 0, scale: 0.9 })
      tl.set(aiWave, { opacity: 0 })
      tl.set(youWave, { opacity: 0 })
      tl.set(line1, { opacity: 0, y: 8 })
      tl.set(line2, { opacity: 0, y: 8 })
      tl.set(line3, { opacity: 0, y: 8 })

      /* Phase 1: Panel + chrome appear */
      tl.to(panel, { opacity: 1, scale: 1, duration: 0.5, ease: 'power2.out' })
      tl.to(topBar, { opacity: 1, y: 0, duration: 0.3 }, '-=0.3')
      tl.to(bottomBar, { opacity: 1, y: 0, duration: 0.3 }, '-=0.2')

      /* Phase 2: Both speaker sides slide in */
      tl.to(aiSide, { opacity: 1, x: 0, duration: 0.45 }, '-=0.1')
      tl.to(youSide, { opacity: 1, x: 0, duration: 0.45 }, '-=0.35')

      /* Phase 3: Avatars appear */
      tl.to(aiAvatar, { opacity: 1, scale: 1, duration: 0.4, ease: 'power2.out' }, '-=0.2')
      tl.to(aiRing, { opacity: 1, scale: 1, duration: 0.3, ease: 'power2.out' }, '-=0.2')
      tl.to(youAvatar, { opacity: 1, scale: 1, duration: 0.4, ease: 'power2.out' }, '-=0.3')

      /* Timer counting — separate non-blocking timeline */
      const timerTl = gsap.timeline()
      timerTl.to(timerObj, {
        val: 14,
        duration: 14,
        ease: 'none',
        onUpdate: () => {
          const v = Math.floor(timerObj.val)
          if (timer) timer.textContent = `00:${String(v).padStart(2, '0')}`
        },
      })

      /* Ring pulse on AI avatar — separate non-blocking */
      const ringPulse = gsap.timeline({ repeat: -1 })
      ringPulse
        .to(aiRing, {
          boxShadow: '0 0 24px 8px rgba(212, 114, 52, 0.25)',
          scale: 1.04,
          duration: 0.65,
          ease: 'sine.inOut',
        })
        .to(aiRing, {
          boxShadow: '0 0 10px 3px rgba(212, 114, 52, 0.1)',
          scale: 1,
          duration: 0.65,
          ease: 'sine.inOut',
        })

      /* ── Turn 1: AI speaks ── */
      tl.to(aiWave, { opacity: 1, duration: 0.3 })
      tl.to(youWave, { opacity: 0.15, duration: 0.2 }, '-=0.2')
      tl.to(line1, { opacity: 1, y: 0, duration: 0.5 })
      tl.to({}, { duration: 1.4 })

      /* ── Turn 2: User speaks ── */
      tl.to(aiWave, { opacity: 0.15, duration: 0.3 })
      tl.to(youWave, { opacity: 1, duration: 0.3 }, '-=0.2')
      tl.to(line2, { opacity: 1, y: 0, duration: 0.5 })
      tl.to({}, { duration: 1.4 })

      /* ── Turn 3: AI speaks again ── */
      tl.to(youWave, { opacity: 0.15, duration: 0.3 })
      tl.to(aiWave, { opacity: 1, duration: 0.3 }, '-=0.2')
      tl.to(line1, { opacity: 0.3, duration: 0.3 })
      tl.to(line3, { opacity: 1, y: 0, duration: 0.5 })
      tl.to({}, { duration: 1.8 })

      /* Fade everything out */
      tl.call(() => {
        ringPulse.kill()
        timerTl.kill()
      })
      tl.to(
        [panel, topBar, bottomBar, aiSide, youSide, aiAvatar, aiRing, youAvatar, aiWave, youWave, line1, line2, line3],
        { opacity: 0, duration: 0.9, ease: 'power1.inOut' }
      )
    },
    { scope: containerRef }
  )

  return (
    <MockFrame ref={containerRef} height="fill">
      {/* Dark call panel */}
      <div
        data-panel=""
        className="absolute inset-0 rounded-brand bg-dark overflow-hidden flex flex-col"
        style={{ opacity: 0 }}
      >
        {/* Top bar */}
        <div
          data-top-bar=""
          className="flex items-center justify-between px-5 pt-4 pb-2 shrink-0"
          style={{ opacity: 0 }}
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-[10px] text-surface-white/40">Live conversation</span>
          </div>
          <span
            data-timer=""
            className="text-[11px] font-body-medium text-surface-white/50 bg-surface-white/[0.06] px-3 py-1 rounded tabular-nums"
          >
            00:00
          </span>
        </div>

        {/* Main content: two speakers side by side */}
        <div className="flex-1 flex items-stretch px-4 pb-2 gap-3 min-h-0">
          {/* ── Left: AI Character ── */}
          <div
            data-ai-side=""
            className="flex-1 flex flex-col items-center justify-start pt-4"
            style={{ opacity: 0 }}
          >
            <div
              data-ai-ring=""
              className="w-[64px] h-[64px] rounded-full overflow-hidden border-[2.5px] border-accent mb-2 shrink-0"
              style={{
                opacity: 0,
                boxShadow: '0 0 10px 3px rgba(212, 114, 52, 0.1)',
              }}
            >
              <div data-ai-avatar="" style={{ opacity: 0 }}>
                <Image
                  src="/images/team/jamie-headshot.png"
                  alt="AI Character"
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <p className="text-caption font-body-medium text-surface-white mb-0.5">Sarah Chen</p>
            <p className="text-[10px] text-surface-white/35 mb-3">Team Lead</p>
            <div data-ai-wave="" className="w-full flex justify-center" style={{ opacity: 0 }}>
              <VoiceWave width={100} height={28} color="#D47234" />
            </div>
          </div>

          {/* Center divider */}
          <div className="w-[1px] bg-surface-white/[0.08] self-stretch my-4" />

          {/* ── Right: You ── */}
          <div
            data-you-side=""
            className="flex-1 flex flex-col items-center justify-start pt-4"
            style={{ opacity: 0 }}
          >
            <div className="w-[64px] h-[64px] rounded-full overflow-hidden border-[2px] border-surface-white/20 mb-2 shrink-0 bg-surface-white/[0.06] flex items-center justify-center">
              <div data-you-avatar="" style={{ opacity: 0 }}>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <circle cx="14" cy="10" r="5" stroke="white" strokeWidth="1.5" fill="none" opacity="0.5" />
                  <path d="M5 24c0-5 4-9 9-9s9 4 9 9" stroke="white" strokeWidth="1.5" fill="none" opacity="0.5" />
                </svg>
              </div>
            </div>
            <p className="text-caption font-body-medium text-surface-white mb-0.5">You</p>
            <p className="text-[10px] text-surface-white/35 mb-3">Practising</p>
            <div data-you-wave="" className="w-full flex justify-center" style={{ opacity: 0 }}>
              <VoiceWave width={100} height={28} color="#8A8A87" />
            </div>
          </div>
        </div>

        {/* Transcript area — flowing conversation */}
        <div className="px-4 pb-2 space-y-1.5 shrink-0">
          {/* AI line 1 */}
          <div
            data-line-1=""
            className="bg-surface-white/[0.05] rounded-brand-sm px-3 py-2 mr-8"
            style={{ opacity: 0 }}
          >
            <p className="text-[11px] text-surface-white/75 leading-relaxed">
              <span className="text-accent/70 font-body-medium">Sarah:</span>{' '}
              &ldquo;I appreciate you making time for this. I wanted to talk about the project
              timelines...&rdquo;
            </p>
          </div>

          {/* User line */}
          <div
            data-line-2=""
            className="bg-surface-white/[0.08] rounded-brand-sm px-3 py-2 ml-8"
            style={{ opacity: 0 }}
          >
            <p className="text-[11px] text-surface-white/75 leading-relaxed text-right">
              <span className="text-surface-white/50 font-body-medium">You:</span>{' '}
              &ldquo;I know the last two deadlines slipped, and I want to understand what
              happened.&rdquo;
            </p>
          </div>

          {/* AI line 2 */}
          <div
            data-line-3=""
            className="bg-surface-white/[0.05] rounded-brand-sm px-3 py-2 mr-8"
            style={{ opacity: 0 }}
          >
            <p className="text-[11px] text-surface-white/75 leading-relaxed">
              <span className="text-accent/70 font-body-medium">Sarah:</span>{' '}
              &ldquo;There have been some capacity issues I should have flagged
              earlier...&rdquo;
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          data-bottom-bar=""
          className="flex items-center gap-2.5 px-4 pb-4 pt-1 shrink-0"
          style={{ opacity: 0 }}
        >
          <div className="w-9 h-9 rounded-full bg-green-600 flex items-center justify-center shrink-0">
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
    </MockFrame>
  )
}
