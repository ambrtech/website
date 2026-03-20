'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Image from 'next/image'
import { gsapRevealEase } from '@/lib/easing'
import { MockFrame } from '@/components/ui/mock-frame'
import { VoiceWave } from '@/components/ui/voice-wave'

/* ─────────────────────────────────────────────────────
   Voice Conversation B: "The Editorial Dialogue"

   Warm, transcript-focused editorial layout with a
   LEFT/RIGHT split. The AI character sits on the left
   with their own VoiceWave; "You" sits on the right
   with theirs. Transcript lines appear alternating
   between the two sides like a stage script. Retains
   the accent-whisper background and literary feel.
   ───────────────────────────────────────────────────── */

export function VoiceConversationAnimatedB() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const el = containerRef.current
      if (!el) return

      const bg = el.querySelector('[data-bg]')
      const header = el.querySelector('[data-header]')
      const timer = el.querySelector('[data-timer]')

      // Speaker columns
      const aiCol = el.querySelector('[data-ai-col]')
      const youCol = el.querySelector('[data-you-col]')
      const aiWave = el.querySelector('[data-ai-wave]')
      const youWave = el.querySelector('[data-you-wave]')

      // Transcript lines
      const line1 = el.querySelector('[data-line-1]')
      const line2 = el.querySelector('[data-line-2]')
      const line3 = el.querySelector('[data-line-3]')
      const line4 = el.querySelector('[data-line-4]')

      // Annotation
      const annotation = el.querySelector('[data-annotation]')
      const confidenceBadge = el.querySelector('[data-confidence]')

      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 1,
        defaults: { ease: gsapRevealEase },
      })

      /* Timer counter */
      const timerObj = { val: 0 }
      tl.call(() => {
        timerObj.val = 0
        if (timer) timer.textContent = '0:00'
      })

      /* Initial state */
      tl.set(bg, { opacity: 0 })
      tl.set(header, { opacity: 0, y: -10 })
      tl.set(aiCol, { opacity: 0, x: -10 })
      tl.set(youCol, { opacity: 0, x: 10 })
      tl.set(aiWave, { opacity: 0 })
      tl.set(youWave, { opacity: 0 })
      tl.set(line1, { opacity: 0, y: 10 })
      tl.set(line2, { opacity: 0, y: 10 })
      tl.set(line3, { opacity: 0, y: 10 })
      tl.set(line4, { opacity: 0, y: 10 })
      tl.set(annotation, { opacity: 0, y: 8 })
      tl.set(confidenceBadge, { opacity: 0, scale: 0.8 })

      /* Phase 1: Background + header */
      tl.to(bg, { opacity: 1, duration: 0.5, ease: 'power1.out' })
      tl.to(header, { opacity: 1, y: 0, duration: 0.4 }, '-=0.3')

      /* Phase 2: Speaker columns appear */
      tl.to(aiCol, { opacity: 1, x: 0, duration: 0.4 }, '-=0.1')
      tl.to(youCol, { opacity: 1, x: 0, duration: 0.4 }, '-=0.3')

      /* Timer counting — separate */
      const timerTl = gsap.timeline()
      timerTl.to(timerObj, {
        val: 12,
        duration: 13,
        ease: 'none',
        onUpdate: () => {
          const v = Math.floor(timerObj.val)
          const mins = Math.floor(v / 60)
          const secs = v % 60
          if (timer) timer.textContent = `${mins}:${String(secs).padStart(2, '0')}`
        },
      })

      /* ── Turn 1: AI speaks ── */
      tl.to(aiWave, { opacity: 1, duration: 0.3 })
      tl.to(youWave, { opacity: 0.2, duration: 0.2 }, '-=0.15')
      tl.to(line1, { opacity: 1, y: 0, duration: 0.5 })
      tl.to({}, { duration: 1.2 })

      /* ── Turn 2: User speaks ── */
      tl.to(aiWave, { opacity: 0.2, duration: 0.3 })
      tl.to(youWave, { opacity: 1, duration: 0.3 }, '-=0.2')
      tl.to(line2, { opacity: 1, y: 0, duration: 0.5 })
      tl.to({}, { duration: 1.0 })

      /* Annotation appears after user line */
      tl.to(annotation, { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out' })
      tl.to({}, { duration: 0.8 })

      /* ── Turn 3: AI speaks again ── */
      tl.to(youWave, { opacity: 0.2, duration: 0.3 })
      tl.to(aiWave, { opacity: 1, duration: 0.3 }, '-=0.2')
      tl.to(line3, { opacity: 1, y: 0, duration: 0.5 })
      tl.to({}, { duration: 1.0 })

      /* ── Turn 4: User speaks again ── */
      tl.to(aiWave, { opacity: 0.2, duration: 0.3 })
      tl.to(youWave, { opacity: 1, duration: 0.3 }, '-=0.2')
      tl.to(line4, { opacity: 1, y: 0, duration: 0.5 })

      /* Confidence badge pops */
      tl.to(confidenceBadge, { opacity: 1, scale: 1, duration: 0.3, ease: 'back.out(2)' }, '-=0.1')

      /* Hold final state */
      tl.to({}, { duration: 2.2 })

      /* Fade out */
      tl.call(() => {
        timerTl.kill()
      })
      tl.to(
        [bg, header, aiCol, youCol, aiWave, youWave, line1, line2, line3, line4, annotation, confidenceBadge],
        { opacity: 0, duration: 0.9, ease: 'power1.inOut' }
      )
    },
    { scope: containerRef }
  )

  return (
    <MockFrame ref={containerRef} height="fill">
      {/* Warm background */}
      <div
        data-bg=""
        className="absolute inset-0 rounded-brand bg-accent-whisper"
        style={{ opacity: 0 }}
      />

      <div className="relative px-5 py-5 h-full flex flex-col">
        {/* Header: scenario + timer */}
        <div
          data-header=""
          className="flex items-center justify-between mb-4 shrink-0"
          style={{ opacity: 0 }}
        >
          <div>
            <p className="text-caption font-heading tracking-heading text-dark">Performance Review</p>
            <p className="text-[10px] text-copy-light">Difficult conversation practice</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span
              data-timer=""
              className="text-caption font-body-medium text-copy-light tabular-nums"
            >
              0:00
            </span>
          </div>
        </div>

        {/* Two speaker columns with transcript between */}
        <div className="flex gap-3 flex-1 min-h-0">
          {/* ── Left: AI Character column ── */}
          <div
            data-ai-col=""
            className="flex flex-col items-center w-[72px] shrink-0"
            style={{ opacity: 0 }}
          >
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-accent-soft mb-1.5 shrink-0">
              <Image
                src="/images/team/jamie-headshot.png"
                alt="Character"
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-[10px] font-body-medium text-dark mb-0.5">Sarah</p>
            <p className="text-[9px] text-copy-faint mb-2">Team Lead</p>
            <div data-ai-wave="" className="w-full flex justify-center" style={{ opacity: 0 }}>
              <VoiceWave width={60} height={20} color="#D47234" />
            </div>
          </div>

          {/* ── Center: Transcript ── */}
          <div className="flex-1 flex flex-col gap-2 min-h-0 overflow-hidden">
            {/* AI line 1 — left aligned */}
            <div
              data-line-1=""
              className="bg-surface-white/60 border border-accent-soft/20 rounded-brand-sm px-3 py-2 mr-4 self-start"
              style={{ opacity: 0 }}
            >
              <p className="text-[11px] text-copy-mid leading-relaxed">
                &ldquo;I appreciate you raising this directly. Before we get into specifics,
                I want you to know I value your work.&rdquo;
              </p>
            </div>

            {/* User line — right aligned */}
            <div
              data-line-2=""
              className="bg-accent/[0.06] border border-accent-soft/15 rounded-brand-sm px-3 py-2 ml-4 self-end"
              style={{ opacity: 0 }}
            >
              <p className="text-[11px] text-copy-mid leading-relaxed">
                &ldquo;Thank you. I want to be transparent about the missed deadlines — there
                were capacity challenges I should have flagged sooner.&rdquo;
              </p>
            </div>

            {/* Inline annotation */}
            <div
              data-annotation=""
              className="flex items-start gap-2 bg-accent/[0.06] border-l-2 border-accent/30 rounded-r-brand-sm px-2.5 py-1.5 mx-2"
              style={{ opacity: 0 }}
            >
              <svg
                width="11"
                height="11"
                viewBox="0 0 12 12"
                fill="none"
                className="text-accent shrink-0 mt-0.5"
              >
                <path
                  d="M6 1v6M6 9v.5"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                />
              </svg>
              <p className="text-[10px] text-accent/80 leading-relaxed">
                Strong ownership — now explore what support they need.
              </p>
            </div>

            {/* AI line 2 — left aligned */}
            <div
              data-line-3=""
              className="bg-surface-white/60 border border-accent-soft/20 rounded-brand-sm px-3 py-2 mr-4 self-start"
              style={{ opacity: 0 }}
            >
              <p className="text-[11px] text-copy-mid leading-relaxed">
                &ldquo;I appreciate that honesty. Can you walk me through what happened with
                last week&apos;s deliverable?&rdquo;
              </p>
            </div>

            {/* User line 2 — right aligned */}
            <div
              data-line-4=""
              className="bg-accent/[0.06] border border-accent-soft/15 rounded-brand-sm px-3 py-2 ml-4 self-end"
              style={{ opacity: 0 }}
            >
              <p className="text-[11px] text-copy-mid leading-relaxed">
                &ldquo;The scope expanded mid-week and I misjudged the timeline. I should
                have asked for help.&rdquo;
              </p>
            </div>
          </div>

          {/* ── Right: You column ── */}
          <div
            data-you-col=""
            className="flex flex-col items-center w-[72px] shrink-0"
            style={{ opacity: 0 }}
          >
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-copy-faint/30 mb-1.5 shrink-0 bg-surface-white/50 flex items-center justify-center text-copy-light">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="7" r="3.5" stroke="currentColor" strokeWidth="1.2" fill="none" />
                <path d="M3.5 17c0-3.6 2.9-6.5 6.5-6.5s6.5 2.9 6.5 6.5" stroke="currentColor" strokeWidth="1.2" fill="none" />
              </svg>
            </div>
            <p className="text-[10px] font-body-medium text-dark mb-0.5">You</p>
            <p className="text-[9px] text-copy-faint mb-2">Practising</p>
            <div data-you-wave="" className="w-full flex justify-center" style={{ opacity: 0 }}>
              <VoiceWave width={60} height={20} color="#8A8A87" />
            </div>
          </div>
        </div>

        {/* Confidence badge */}
        <div className="flex justify-end mt-2 shrink-0">
          <span
            data-confidence=""
            className="text-[10px] font-body-medium text-accent bg-accent/[0.08] px-3 py-1 rounded-full"
            style={{ opacity: 0 }}
          >
            Empathy score: 8.4 / 10
          </span>
        </div>
      </div>
    </MockFrame>
  )
}
