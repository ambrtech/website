'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { gsapRevealEase } from '@/lib/easing'
import { MockFrame } from '@/components/ui/mock-frame'

/* ─────────────────────────────────────────────────────
   Chat Training B: "The Editorial"

   Not a chat UI — an editorial view of a conversation
   exchange. Dialogue renders as a typeset script on a
   warm paper background with margin annotations, like
   a marked-up rehearsal script. Speaker labels sit in
   the left margin, coaching notes in the right.
   ───────────────────────────────────────────────────── */

export function ChatTrainingAnimatedB() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const el = containerRef.current
      if (!el) return

      const bg = el.querySelector('[data-bg]')
      const title = el.querySelector('[data-title]')
      const marginLine = el.querySelector('[data-margin-line]')
      const line1 = el.querySelector('[data-line-1]')
      const line2 = el.querySelector('[data-line-2]')
      const line3 = el.querySelector('[data-line-3]')
      const line4 = el.querySelector('[data-line-4]')
      const note1 = el.querySelector('[data-note-1]')
      const note2 = el.querySelector('[data-note-2]')
      const score = el.querySelector('[data-score]')
      const divider = el.querySelector('[data-divider]')

      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 1,
        defaults: { ease: gsapRevealEase },
      })

      /* Initial state */
      tl.set(bg, { opacity: 0 })
      tl.set(title, { opacity: 0, y: -8 })
      tl.set(marginLine, { scaleY: 0 })
      tl.set([line1, line2, line3, line4], { opacity: 0, clipPath: 'inset(0 100% 0 0)' })
      tl.set([note1, note2], { opacity: 0, x: 20 })
      tl.set(score, { opacity: 0, scale: 0.8 })
      tl.set(divider, { scaleX: 0 })

      /* Phase 1: Paper background + title */
      tl.to(bg, { opacity: 1, duration: 0.5, ease: 'power1.out' })
      tl.to(title, { opacity: 1, y: 0, duration: 0.4 }, '-=0.2')

      /* Phase 2: Margin line draws down */
      tl.to(marginLine, { scaleY: 1, duration: 0.8, ease: 'power2.inOut' }, '-=0.1')

      /* Phase 3: Dialogue lines type out one by one */
      tl.to(line1, {
        opacity: 1,
        clipPath: 'inset(0 0% 0 0)',
        duration: 1.2,
        ease: 'power1.inOut',
      })
      tl.to({}, { duration: 0.5 })

      tl.to(line2, {
        opacity: 1,
        clipPath: 'inset(0 0% 0 0)',
        duration: 1.0,
        ease: 'power1.inOut',
      })

      /* Note 1 slides in from margin */
      tl.to(note1, { opacity: 1, x: 0, duration: 0.4, ease: 'power2.out' }, '-=0.3')

      tl.to({}, { duration: 0.8 })

      /* Phase 4: More dialogue */
      tl.to(line3, {
        opacity: 1,
        clipPath: 'inset(0 0% 0 0)',
        duration: 1.0,
        ease: 'power1.inOut',
      })
      tl.to({}, { duration: 0.4 })

      tl.to(line4, {
        opacity: 1,
        clipPath: 'inset(0 0% 0 0)',
        duration: 1.0,
        ease: 'power1.inOut',
      })

      /* Note 2 slides in */
      tl.to(note2, { opacity: 1, x: 0, duration: 0.4, ease: 'power2.out' }, '-=0.3')

      /* Phase 5: Divider + score */
      tl.to(divider, { scaleX: 1, duration: 0.5, ease: 'power2.inOut' })
      tl.to(score, { opacity: 1, scale: 1, duration: 0.35, ease: 'back.out(2)' }, '-=0.1')

      /* Hold */
      tl.to({}, { duration: 2.5 })

      /* Fade out */
      tl.to(
        [bg, title, marginLine, line1, line2, line3, line4, note1, note2, score, divider],
        { opacity: 0, duration: 0.9, ease: 'power1.inOut' }
      )
    },
    { scope: containerRef }
  )

  return (
    <MockFrame ref={containerRef}>
      {/* Paper background */}
      <div
        data-bg=""
        className="absolute inset-0 rounded-brand bg-accent-whisper"
        style={{ opacity: 0 }}
      />

      <div className="relative px-6 py-6">
        {/* Title */}
        <div data-title="" className="mb-5" style={{ opacity: 0 }}>
          <p className="text-[10px] font-body-medium uppercase tracking-eyebrow text-accent mb-1">
            Chat Simulation &middot; Customer Service
          </p>
          <h3 className="font-heading text-body tracking-heading text-dark leading-snug">
            Handling an escalated refund request
          </h3>
        </div>

        {/* Script layout: margin line + dialogue */}
        <div className="relative pl-5">
          {/* Vertical margin line */}
          <div
            data-margin-line=""
            className="absolute left-0 top-0 bottom-0 w-[1.5px] bg-accent-soft/40 origin-top"
            style={{ transform: 'scaleY(0)' }}
          />

          <div className="space-y-4">
            {/* Line 1: Customer */}
            <div data-line-1="" style={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }}>
              <span className="text-[10px] font-body-medium text-copy-light uppercase tracking-eyebrow block mb-1">
                Customer
              </span>
              <p className="text-caption text-copy-mid leading-relaxed">
                I&apos;ve been waiting 3 days for a response about my refund. This is completely
                unacceptable and I&apos;m considering filing a complaint.
              </p>
            </div>

            {/* Line 2: Agent */}
            <div className="flex items-start gap-3">
              <div data-line-2="" className="flex-1" style={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }}>
                <span className="text-[10px] font-body-medium text-accent/70 uppercase tracking-eyebrow block mb-1">
                  You
                </span>
                <p className="text-caption text-copy-mid leading-relaxed">
                  I completely understand your frustration with the wait time. I&apos;m looking at your
                  account right now and I can see the refund request from Monday.
                </p>
              </div>
              {/* Margin note 1 */}
              <div
                data-note-1=""
                className="shrink-0 w-[100px] bg-accent/[0.06] rounded-brand-sm px-2 py-1.5 border-l-2 border-accent/25"
                style={{ opacity: 0 }}
              >
                <p className="text-[10px] text-accent/70 leading-snug">
                  Validated frustration and showed system awareness
                </p>
              </div>
            </div>

            {/* Line 3: Customer */}
            <div data-line-3="" style={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }}>
              <span className="text-[10px] font-body-medium text-copy-light uppercase tracking-eyebrow block mb-1">
                Customer
              </span>
              <p className="text-caption text-copy-mid leading-relaxed">
                I&apos;ve already explained this twice to different people. I just want my money back.
              </p>
            </div>

            {/* Line 4: Agent */}
            <div className="flex items-start gap-3">
              <div data-line-4="" className="flex-1" style={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }}>
                <span className="text-[10px] font-body-medium text-accent/70 uppercase tracking-eyebrow block mb-1">
                  You
                </span>
                <p className="text-caption text-copy-mid leading-relaxed">
                  You won&apos;t need to repeat anything — I have the full history. I&apos;m processing
                  your $89.99 refund now. It&apos;ll arrive within 2 business days.
                </p>
              </div>
              {/* Margin note 2 */}
              <div
                data-note-2=""
                className="shrink-0 w-[100px] bg-accent/[0.06] rounded-brand-sm px-2 py-1.5 border-l-2 border-accent/25"
                style={{ opacity: 0 }}
              >
                <p className="text-[10px] text-accent/70 leading-snug">
                  Specific resolution with clear timeline
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider + score */}
        <div
          data-divider=""
          className="h-[1px] bg-accent-soft/30 mt-5 mb-3 origin-left"
          style={{ transform: 'scaleX(0)' }}
        />

        <div className="flex items-center justify-between">
          <div
            data-score=""
            className="flex items-center gap-3"
            style={{ opacity: 0 }}
          >
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] text-copy-light">Empathy</span>
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <span
                    key={i}
                    className={`w-2 h-2 rounded-full ${i <= 4 ? 'bg-accent' : 'bg-accent-soft/40'}`}
                  />
                ))}
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] text-copy-light">Resolution</span>
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <span
                    key={i}
                    className={`w-2 h-2 rounded-full ${i <= 5 ? 'bg-accent' : 'bg-accent-soft/40'}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </MockFrame>
  )
}
