'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { gsapRevealEase } from '@/lib/easing'

/* ─────────────────────────────────────────────────────
   Concept A: "The Typewriter"

   Context appears as typed document fragments on the left.
   A cursor blinks, then text dissolves line-by-line into
   a generated simulation dialogue on the right — showing
   how raw organizational knowledge becomes conversation.
   ───────────────────────────────────────────────────── */

const contextLines = [
  { label: 'Methodology', text: 'MEDDPICC qualification framework' },
  { label: 'Persona', text: 'CFO — risk-averse, data-driven' },
  { label: 'Pricing', text: '3-tier usage-based model' },
  { label: 'Competitor', text: 'Rival offering 20% discount' },
]

const dialogueLines = [
  { speaker: 'CFO', text: '"We\'ve had a competitive bid come in at 20% less..."' },
  { speaker: 'You', text: '(Apply MEDDPICC — identify the economic buyer\'s real concern)' },
  { speaker: 'CFO', text: '"Walk me through the usage-based pricing again."' },
  { speaker: 'You', text: '(Reference tier structure, anchor on value metrics)' },
]

export function CustomizationFlowAnimatedA() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const el = containerRef.current
      if (!el) return

      const contextRows = el.querySelectorAll('[data-ctx]')
      const cursor = el.querySelector('[data-cursor]')
      const arrow = el.querySelector('[data-arrow]')
      const dialogueRows = el.querySelectorAll('[data-dlg]')
      const outputHeader = el.querySelector('[data-output-hdr]')
      const scenarioTitle = el.querySelector('[data-scenario-title]')

      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 1.5,
        defaults: { ease: gsapRevealEase },
      })

      /* Initial states */
      tl.set(contextRows, { opacity: 0, x: -16 })
      tl.set(cursor, { opacity: 0 })
      tl.set(arrow, { opacity: 0, scaleX: 0 })
      tl.set(dialogueRows, { opacity: 0, y: 10 })
      tl.set(outputHeader, { opacity: 0, y: -8 })
      tl.set(scenarioTitle, { opacity: 0 })

      /* Phase 1: Context lines type in one by one */
      tl.to(cursor, { opacity: 1, duration: 0.2 })
      tl.to(contextRows, {
        opacity: 1,
        x: 0,
        duration: 0.4,
        stagger: 0.5,
      })

      /* Phase 2: Cursor blink hold */
      tl.to(cursor, {
        opacity: 0,
        duration: 0.15,
        repeat: 3,
        yoyo: true,
        ease: 'steps(1)',
      })

      /* Phase 3: Context fades, arrow draws, output appears */
      tl.to(arrow, {
        opacity: 1,
        scaleX: 1,
        duration: 0.5,
        ease: 'power2.out',
      })
      tl.to(contextRows, {
        opacity: 0.2,
        x: -8,
        duration: 0.6,
        stagger: 0.05,
        ease: 'power2.inOut',
      }, '-=0.3')
      tl.to(cursor, { opacity: 0, duration: 0.2 }, '-=0.4')

      /* Phase 4: Output header + title appear */
      tl.to(outputHeader, {
        opacity: 1,
        y: 0,
        duration: 0.4,
      })
      tl.to(scenarioTitle, {
        opacity: 1,
        duration: 0.4,
      }, '-=0.2')

      /* Phase 5: Dialogue lines appear with typing rhythm */
      tl.to(dialogueRows, {
        opacity: 1,
        y: 0,
        duration: 0.35,
        stagger: 0.4,
      })

      /* Phase 6: Hold for reading */
      tl.to({}, { duration: 2.5 })

      /* Phase 7: Fade out for loop */
      tl.to(
        [
          ...contextRows,
          cursor,
          arrow,
          ...dialogueRows,
          outputHeader,
          scenarioTitle,
        ],
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
    <div ref={containerRef} className="relative min-h-[420px] flex items-center">
      {/* ── Left: Context fragments (typed document) ── */}
      <div className="absolute left-0 top-0 bottom-0 w-[44%] flex flex-col justify-center gap-2 pl-2">
        <p className="text-[10px] font-body-medium uppercase tracking-eyebrow text-copy-light mb-2">
          Your context
        </p>
        {contextLines.map((line, i) => (
          <div
            key={i}
            data-ctx
            className="flex items-baseline gap-2 px-3 py-2 rounded-brand-sm bg-surface border border-border"
            style={{ opacity: 0 }}
          >
            <span className="text-[9px] font-body-medium uppercase tracking-eyebrow text-accent shrink-0 w-[72px]">
              {line.label}
            </span>
            <span className="text-caption text-copy-mid font-body leading-tight">
              {line.text}
            </span>
          </div>
        ))}
        {/* Blinking cursor */}
        <div
          data-cursor
          className="ml-3 mt-1 w-[2px] h-4 bg-accent rounded-full"
          style={{ opacity: 0 }}
        />
      </div>

      {/* ── Center: Transform arrow ── */}
      <div className="absolute left-[46%] top-1/2 -translate-y-1/2 w-[8%] flex items-center justify-center">
        <div
          data-arrow
          className="h-px w-full bg-gradient-to-r from-accent-soft to-accent origin-left"
          style={{ opacity: 0 }}
        />
      </div>

      {/* ── Right: Generated dialogue ── */}
      <div className="absolute right-0 top-0 bottom-0 w-[44%] flex flex-col justify-center pr-2">
        <div
          data-output-hdr
          className="flex items-center gap-2 mb-2"
          style={{ opacity: 0 }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span className="text-[10px] font-body-medium uppercase tracking-eyebrow text-accent">
            Generated Simulation
          </span>
        </div>

        <p
          data-scenario-title
          className="text-caption font-heading tracking-heading text-dark mb-3"
          style={{ opacity: 0 }}
        >
          Enterprise renewal — CFO pushback
        </p>

        <div className="space-y-2">
          {dialogueLines.map((line, i) => (
            <div
              key={i}
              data-dlg
              className={`flex items-start gap-2 px-3 py-2 rounded-brand-sm ${
                line.speaker === 'CFO'
                  ? 'bg-accent-whisper/60 border border-accent-soft/30'
                  : 'bg-surface border border-border'
              }`}
              style={{ opacity: 0 }}
            >
              <span
                className={`text-[9px] font-body-medium shrink-0 mt-0.5 ${
                  line.speaker === 'CFO' ? 'text-accent' : 'text-copy-light'
                }`}
              >
                {line.speaker}
              </span>
              <span className="text-[11px] text-copy-mid leading-relaxed">
                {line.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
