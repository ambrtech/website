'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { gsapRevealEase } from '@/lib/easing'

/* ---------------------------------------------------------
   Concept B: "The Thought-to-Scenario"

   A text input field with a typing effect — the user
   describes what they want to practice in a single text
   area, hits create, and the scenario materializes below
   as a structured card: title, objectives, character
   preview. The transformation from thought to structure.
   --------------------------------------------------------- */

const typedText = 'I need to give feedback to a team member about missed deadlines...'

export function ScenarioCreatorAnimatedB() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const el = containerRef.current
      if (!el) return

      const eyebrow = el.querySelector('[data-eyebrow]')
      const inputArea = el.querySelector('[data-input-area]')
      const cursor = el.querySelector('[data-cursor]')
      const typedChars = el.querySelectorAll('[data-typed-char]')
      const privacyNote = el.querySelector('[data-privacy]')
      const createBtn = el.querySelector('[data-create]')
      const sparkle = el.querySelector('[data-sparkle]')
      const resultCard = el.querySelector('[data-result]')
      const resultItems = el.querySelectorAll('[data-result-item]')

      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.8,
        defaults: { ease: gsapRevealEase },
      })

      /* Initial state */
      tl.set(eyebrow, { opacity: 0 })
      tl.set(inputArea, { opacity: 0, y: 10 })
      tl.set(cursor, { opacity: 0 })
      tl.set(typedChars, { opacity: 0 })
      tl.set(privacyNote, { opacity: 0 })
      tl.set(createBtn, { opacity: 0, y: 6 })
      tl.set(sparkle, { opacity: 0, scale: 0 })
      tl.set(resultCard, { opacity: 0, y: 20 })
      tl.set(resultItems, { opacity: 0, y: 10 })

      /* Phase 1: Eyebrow + input area appear */
      tl.to(eyebrow, { opacity: 1, duration: 0.3 })
      tl.to(inputArea, { opacity: 1, y: 0, duration: 0.4 })

      /* Phase 2: Cursor appears, text types in */
      tl.to(cursor, { opacity: 1, duration: 0.15 })
      tl.to(typedChars, {
        opacity: 1,
        duration: 0.03,
        stagger: 0.04,
        ease: 'none',
      })

      /* Phase 3: Cursor blinks */
      tl.to(cursor, {
        opacity: 0,
        duration: 0.2,
        repeat: 2,
        yoyo: true,
        ease: 'steps(1)',
      })

      /* Phase 4: Privacy + create button */
      tl.to(privacyNote, { opacity: 1, duration: 0.25 })
      tl.to(createBtn, { opacity: 1, y: 0, duration: 0.35 })

      /* Phase 5: Button press → sparkle */
      tl.to({}, { duration: 0.3 })
      tl.to(createBtn, { scale: 0.94, duration: 0.08, ease: 'power2.in' })
      tl.to(createBtn, { scale: 1, duration: 0.12, ease: 'power2.out' })
      tl.to(sparkle, {
        opacity: 1,
        scale: 1,
        duration: 0.3,
        ease: 'back.out(2)',
      })

      /* Phase 6: Input fades slightly, result card rises */
      tl.to(cursor, { opacity: 0, duration: 0.1 })
      tl.to([inputArea, createBtn, privacyNote], {
        opacity: 0.3,
        y: -6,
        duration: 0.4,
      })
      tl.to(sparkle, { opacity: 0, scale: 1.5, duration: 0.3 }, '-=0.3')
      tl.to(resultCard, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' })

      /* Phase 7: Result items stagger in */
      tl.to(resultItems, {
        opacity: 1,
        y: 0,
        duration: 0.35,
        stagger: 0.12,
      })

      /* Phase 8: Hold */
      tl.to({}, { duration: 3.0 })

      /* Phase 9: Fade out */
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
      <div className="absolute inset-0 px-5 py-6 md:px-7 flex flex-col">
        {/* Eyebrow */}
        <div data-eyebrow="" className="flex items-center gap-2 mb-4" style={{ opacity: 0 }}>
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span className="text-eyebrow-sm font-body-medium uppercase tracking-eyebrow text-accent">
            Create Scenario
          </span>
        </div>

        {/* Text input area */}
        <div
          data-input-area=""
          className="rounded-brand-sm border border-border bg-surface-white px-4 py-3.5 mb-3"
          style={{ opacity: 0 }}
        >
          <p className="text-caption font-body-medium text-copy-mid mb-2">
            What conversation do you want to practice?
          </p>
          <div className="min-h-[40px] flex flex-wrap items-start">
            {typedText.split('').map((char, i) => (
              <span
                key={i}
                data-typed-char=""
                className="text-body-sm text-dark inline"
                style={{ opacity: 0 }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
            <span
              data-cursor=""
              className="inline-block w-[2px] h-[14px] bg-accent ml-px translate-y-[1px]"
              style={{ opacity: 0 }}
            />
          </div>
        </div>

        {/* Privacy + create row */}
        <div className="flex items-center justify-between mb-5">
          <span
            data-privacy=""
            className="text-[10px] text-copy-faint flex items-center gap-1"
            style={{ opacity: 0 }}
          >
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <rect x="2" y="5" width="6" height="4" rx="1" stroke="currentColor" strokeWidth="0.8" />
              <path d="M3.5 5V3.5a1.5 1.5 0 013 0V5" stroke="currentColor" strokeWidth="0.8" />
            </svg>
            Private — only visible to you
          </span>
          <span
            data-create=""
            className="inline-block rounded-brand-sm bg-accent text-surface-white px-4 py-1.5 text-caption font-body-medium"
            style={{ opacity: 0 }}
          >
            Create Scenario
          </span>
        </div>

        {/* Sparkle transition */}
        <div className="flex justify-center mb-3">
          <div
            data-sparkle=""
            className="w-6 h-6 text-accent"
            style={{ opacity: 0, transform: 'scale(0)' }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 2l2 6.5L20.5 12l-6.5 2L12 22l-2-8-6.5-2L10 10z" fill="currentColor" />
            </svg>
          </div>
        </div>

        {/* Result card — the generated scenario */}
        <div
          data-result=""
          className="rounded-brand bg-accent-whisper border border-accent-soft/30 px-5 py-4 flex-1"
          style={{ opacity: 0 }}
        >
          <div data-result-item="" className="mb-3" style={{ opacity: 0 }}>
            <p className="text-[10px] font-body-medium uppercase tracking-eyebrow text-accent mb-1">
              Your Scenario
            </p>
            <h4 className="font-heading text-body tracking-heading text-dark">
              Difficult feedback on missed deadlines
            </h4>
          </div>

          <div data-result-item="" className="flex items-center gap-3 mb-3" style={{ opacity: 0 }}>
            <div className="w-8 h-8 rounded-full bg-accent/10 border border-accent-soft flex items-center justify-center">
              <span className="font-heading text-caption text-accent">J</span>
            </div>
            <div>
              <p className="text-caption font-body-medium text-dark">Jordan</p>
              <p className="text-[10px] text-copy-light">Direct report, 2 years on team</p>
            </div>
          </div>

          <div data-result-item="" className="space-y-1.5 mb-3" style={{ opacity: 0 }}>
            <p className="text-[10px] font-body-medium uppercase tracking-eyebrow text-copy-light">
              Objectives
            </p>
            <p className="text-caption text-copy-mid leading-relaxed">
              1. Address missed deadlines constructively
            </p>
            <p className="text-caption text-copy-mid leading-relaxed">
              2. Agree on improvement plan together
            </p>
          </div>

          <div data-result-item="" className="flex justify-end" style={{ opacity: 0 }}>
            <span className="inline-flex items-center gap-1.5 text-caption font-body-medium text-accent">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2.5 6.5L5 9L9.5 3.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Ready to practice
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
