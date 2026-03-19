'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Image from 'next/image'
import { gsapRevealEase } from '@/lib/easing'
import { VoiceWave } from '@/components/ui/voice-wave'

/* ─────────────────────────────────────────────────────
   Voice Conversation B: "The Transcript"

   Transcript-focused editorial layout on a warm,
   light background. The conversation flows as a
   dialogue script — like reading a play — with
   speaker labels, a compact waveform, and inline
   coaching annotations. More literary, less UI-heavy.
   ───────────────────────────────────────────────────── */

export function VoiceConversationAnimatedB() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const el = containerRef.current
      if (!el) return

      const bg = el.querySelector('[data-bg]')
      const header = el.querySelector('[data-header]')
      const waveRow = el.querySelector('[data-wave-row]')
      const divider1 = el.querySelector('[data-divider-1]')
      const divider2 = el.querySelector('[data-divider-2]')
      const line1 = el.querySelector('[data-line-1]')
      const line2 = el.querySelector('[data-line-2]')
      const line3 = el.querySelector('[data-line-3]')
      const annotation1 = el.querySelector('[data-annotation-1]')
      const annotation2 = el.querySelector('[data-annotation-2]')
      const timer = el.querySelector('[data-timer]')
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
      tl.set(waveRow, { opacity: 0 })
      tl.set(divider1, { scaleX: 0 })
      tl.set(divider2, { scaleX: 0 })
      tl.set(line1, { opacity: 0, y: 12 })
      tl.set(line2, { opacity: 0, y: 12 })
      tl.set(line3, { opacity: 0, y: 12 })
      tl.set(annotation1, { opacity: 0, x: 16 })
      tl.set(annotation2, { opacity: 0, x: 16 })
      tl.set(confidenceBadge, { opacity: 0, scale: 0.8 })

      /* Phase 1: Background + header */
      tl.to(bg, { opacity: 1, duration: 0.5, ease: 'power1.out' })
      tl.to(header, { opacity: 1, y: 0, duration: 0.4 }, '-=0.3')

      /* Phase 2: Waveform + first divider */
      tl.to(waveRow, { opacity: 1, duration: 0.35 })
      tl.to(divider1, { scaleX: 1, duration: 0.5, ease: 'power2.inOut' }, '-=0.1')

      /* Timer counting — separate */
      const timerTl = gsap.timeline()
      timerTl.to(timerObj, {
        val: 10,
        duration: 11,
        ease: 'none',
        onUpdate: () => {
          const v = Math.floor(timerObj.val)
          const mins = Math.floor(v / 60)
          const secs = v % 60
          if (timer) timer.textContent = `${mins}:${String(secs).padStart(2, '0')}`
        },
      })

      /* Phase 3: First dialogue line */
      tl.to(line1, { opacity: 1, y: 0, duration: 0.5 })
      tl.to({}, { duration: 1.0 })

      /* Phase 4: Second line + first annotation */
      tl.to(line2, { opacity: 1, y: 0, duration: 0.5 })
      tl.to(annotation1, { opacity: 1, x: 0, duration: 0.4, ease: 'power2.out' }, '-=0.2')

      /* Hold */
      tl.to({}, { duration: 1.5 })

      /* Phase 5: Second divider + third line */
      tl.to(divider2, { scaleX: 1, duration: 0.4, ease: 'power2.inOut' })
      tl.to(line3, { opacity: 1, y: 0, duration: 0.5 }, '-=0.1')
      tl.to(annotation2, { opacity: 1, x: 0, duration: 0.4, ease: 'power2.out' }, '-=0.2')

      /* Confidence badge pops */
      tl.to(confidenceBadge, { opacity: 1, scale: 1, duration: 0.3, ease: 'back.out(2)' }, '-=0.1')

      /* Hold final state */
      tl.to({}, { duration: 2.5 })

      /* Fade out */
      tl.call(() => {
        timerTl.kill()
      })
      tl.to(
        [bg, header, waveRow, divider1, divider2, line1, line2, line3, annotation1, annotation2, confidenceBadge],
        { opacity: 0, duration: 0.9, ease: 'power1.inOut' }
      )
    },
    { scope: containerRef }
  )

  return (
    <div ref={containerRef} className="relative min-h-[420px]">
      {/* Warm background */}
      <div
        data-bg=""
        className="absolute inset-0 rounded-brand bg-accent-whisper"
        style={{ opacity: 0 }}
      />

      <div className="relative px-6 py-6">
        {/* Header: scenario + timer */}
        <div
          data-header=""
          className="flex items-center justify-between mb-4"
          style={{ opacity: 0 }}
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-accent-soft shrink-0">
              <Image
                src="/images/team/jamie-headshot.png"
                alt="Character"
                width={36}
                height={36}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-caption font-body-medium text-dark">Performance Review</p>
              <p className="text-[10px] text-copy-light">Sarah Chen &middot; Team Lead</p>
            </div>
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

        {/* Compact waveform row */}
        <div
          data-wave-row=""
          className="flex items-center justify-center gap-3 mb-4 py-2 px-4 rounded-brand-sm bg-surface-white/50"
          style={{ opacity: 0 }}
        >
          <VoiceWave width={180} height={24} />
        </div>

        {/* Divider 1 */}
        <div
          data-divider-1=""
          className="h-[1px] bg-accent-soft/30 mb-4 origin-left"
          style={{ transform: 'scaleX(0)' }}
        />

        {/* Dialogue — script format */}
        <div className="space-y-3.5">
          {/* Line 1: AI character */}
          <div data-line-1="" className="flex items-start gap-3" style={{ opacity: 0 }}>
            <span className="text-[10px] font-body-medium text-accent/70 uppercase tracking-eyebrow w-14 shrink-0 pt-0.5 text-right">
              Sarah
            </span>
            <p className="text-caption text-copy-mid leading-relaxed flex-1">
              &ldquo;I appreciate you raising this directly. Before we get into the specifics,
              I want you to know that I value your work on the Henderson account.&rdquo;
            </p>
          </div>

          {/* Line 2: User */}
          <div className="flex items-start gap-3">
            <div data-line-2="" className="flex items-start gap-3 flex-1" style={{ opacity: 0 }}>
              <span className="text-[10px] font-body-medium text-copy-light uppercase tracking-eyebrow w-14 shrink-0 pt-0.5 text-right">
                You
              </span>
              <p className="text-caption text-copy-mid leading-relaxed flex-1">
                &ldquo;Thank you. I want to be transparent about the missed deadlines — there
                were some capacity challenges I should have flagged sooner.&rdquo;
              </p>
            </div>
          </div>

          {/* Annotation 1 — inline coaching */}
          <div
            data-annotation-1=""
            className="ml-[68px] flex items-start gap-2 bg-accent/[0.06] border-l-2 border-accent/30 rounded-r-brand-sm px-3 py-2"
            style={{ opacity: 0 }}
          >
            <svg
              width="12"
              height="12"
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
            <p className="text-[11px] text-accent/80 leading-relaxed">
              Strong ownership — now pivot to asking what support they need.
            </p>
          </div>

          {/* Divider 2 */}
          <div
            data-divider-2=""
            className="h-[1px] bg-accent-soft/20 origin-left"
            style={{ transform: 'scaleX(0)' }}
          />

          {/* Line 3: AI continues */}
          <div data-line-3="" className="flex items-start gap-3" style={{ opacity: 0 }}>
            <span className="text-[10px] font-body-medium text-accent/70 uppercase tracking-eyebrow w-14 shrink-0 pt-0.5 text-right">
              Sarah
            </span>
            <p className="text-caption text-copy-mid leading-relaxed flex-1">
              &ldquo;I appreciate that honesty. Can you walk me through what happened with
              last week&apos;s client deliverable specifically?&rdquo;
            </p>
          </div>

          {/* Annotation 2 */}
          <div
            data-annotation-2=""
            className="ml-[68px] flex items-start gap-2 bg-accent/[0.06] border-l-2 border-accent/30 rounded-r-brand-sm px-3 py-2"
            style={{ opacity: 0 }}
          >
            <svg
              width="12"
              height="12"
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
            <p className="text-[11px] text-accent/80 leading-relaxed">
              Open question — lets them explain without feeling interrogated.
            </p>
          </div>
        </div>

        {/* Confidence badge */}
        <div className="flex justify-end mt-4">
          <span
            data-confidence=""
            className="text-[10px] font-body-medium text-accent bg-accent/[0.08] px-3 py-1 rounded-full"
            style={{ opacity: 0 }}
          >
            Empathy score: 8.4 / 10
          </span>
        </div>
      </div>
    </div>
  )
}
