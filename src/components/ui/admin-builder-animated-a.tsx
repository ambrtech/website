'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { gsapRevealEase } from '@/lib/easing'
import { MockFrame } from '@/components/ui/mock-frame'

/* ---------------------------------------------------------
   Concept A: "The Progress Rail"

   A horizontal step indicator with 5 steps (like the real
   product) — Basic Info, Character, Context, Generate,
   Review. Each step animates forward: the progress bar
   fills, the step icon gets a checkmark, a brief content
   preview appears below, then advances to the next step.
   Compact, purposeful, clear.
   --------------------------------------------------------- */

const steps = [
  { label: 'Basic Info', summary: 'Sales scenario: handling price objections' },
  { label: 'Character', summary: 'Lucas — Demanding procurement manager' },
  { label: 'Context', summary: 'Company pricing guidelines uploaded' },
  { label: 'Generate', summary: 'Building scenario draft...' },
  { label: 'Review', summary: 'Ready to publish to team' },
]

export function AdminBuilderAnimatedA() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const el = containerRef.current
      if (!el) return

      const header = el.querySelector('[data-header]')
      const stepNodes = el.querySelectorAll('[data-step-node]')
      const stepLabels = el.querySelectorAll('[data-step-label]')
      const progressSegments = el.querySelectorAll('[data-progress-seg]')
      const checkmarks = el.querySelectorAll('[data-check]')
      const contentPanels = el.querySelectorAll('[data-content]')
      const publishBtn = el.querySelector('[data-publish]')

      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.8,
        defaults: { ease: gsapRevealEase },
      })

      /* Initial state */
      tl.set(header, { opacity: 0, y: -8 })
      tl.set(stepNodes, { opacity: 0.3, scale: 0.8 })
      tl.set(stepLabels, { opacity: 0.3 })
      tl.set(progressSegments, { scaleX: 0 })
      tl.set(checkmarks, { opacity: 0, scale: 0 })
      tl.set(contentPanels, { opacity: 0, y: 12 })
      tl.set(publishBtn, { opacity: 0, y: 8 })

      /* Phase 1: Header appears */
      tl.to(header, { opacity: 1, y: 0, duration: 0.4 })

      /* Phase 2: All step nodes appear (dimmed) */
      tl.to(stepNodes, { opacity: 1, scale: 1, duration: 0.35, stagger: 0.06 })
      tl.to(stepLabels, { opacity: 0.5, duration: 0.3, stagger: 0.06 }, '-=0.3')

      /* Phase 3-7: Walk through each step */
      steps.forEach((_, i) => {
        // Activate current step label
        tl.to(stepLabels[i], { opacity: 1, color: '#D47234', duration: 0.25 })

        // Show content panel for this step
        tl.to(contentPanels[i], { opacity: 1, y: 0, duration: 0.35 })

        // Hold to read
        tl.to({}, { duration: 0.7 })

        // Hide content panel
        tl.to(contentPanels[i], { opacity: 0, y: -6, duration: 0.25 })

        // Mark step as complete (checkmark)
        tl.to(checkmarks[i], {
          opacity: 1,
          scale: 1,
          duration: 0.25,
          ease: 'back.out(3)',
        })

        // Fill progress segment to next step
        if (i < steps.length - 1) {
          tl.to(progressSegments[i], {
            scaleX: 1,
            duration: 0.4,
            ease: 'power2.inOut',
          }, '-=0.15')
        }
      })

      /* Phase 8: Publish button appears */
      tl.to(publishBtn, {
        opacity: 1,
        y: 0,
        duration: 0.4,
      })
      tl.to({}, { duration: 0.4 })
      tl.to(publishBtn, { scale: 0.94, duration: 0.08, ease: 'power2.in' })
      tl.to(publishBtn, {
        scale: 1,
        boxShadow: '0 0 12px 3px rgba(212, 114, 52, 0.2)',
        duration: 0.15,
        ease: 'power2.out',
      })

      /* Phase 9: Hold */
      tl.to({}, { duration: 2.0 })

      /* Phase 10: Fade out */
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
      <div className="absolute inset-0 px-5 py-6 md:px-7">
        {/* Header */}
        <div data-header="" className="mb-6" style={{ opacity: 0 }}>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="text-eyebrow-sm font-body-medium uppercase tracking-eyebrow text-accent">
              Scenario Builder
            </span>
          </div>
          <h3 className="font-heading text-body tracking-heading text-dark">
            Build a training scenario
          </h3>
        </div>

        {/* Step rail */}
        <div className="flex items-center justify-between mb-8 px-2">
          {steps.map((step, i) => (
            <div key={i} className="flex items-center flex-1 last:flex-none">
              {/* Step node */}
              <div className="flex flex-col items-center">
                <div
                  data-step-node=""
                  className="relative w-7 h-7 rounded-full border-2 border-accent-soft/40 bg-surface-white flex items-center justify-center mb-1"
                  style={{ opacity: 0.3 }}
                >
                  <span className="text-[10px] font-body-medium text-copy-light">
                    {i + 1}
                  </span>
                  {/* Checkmark overlay */}
                  <div
                    data-check=""
                    className="absolute inset-0 rounded-full bg-accent flex items-center justify-center"
                    style={{ opacity: 0, transform: 'scale(0)' }}
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M3 6.5l2 2 4-4.5" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <span
                  data-step-label=""
                  className="text-[9px] font-body-medium text-copy-light whitespace-nowrap"
                  style={{ opacity: 0.3 }}
                >
                  {step.label}
                </span>
              </div>

              {/* Progress segment between steps */}
              {i < steps.length - 1 && (
                <div className="flex-1 h-[2px] mx-1.5 mt-[-14px] bg-accent-soft/20 rounded-full overflow-hidden">
                  <div
                    data-progress-seg=""
                    className="h-full bg-accent rounded-full origin-left"
                    style={{ transform: 'scaleX(0)' }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Content panels (one per step, absolutely positioned) */}
        <div className="relative min-h-[180px]">
          {steps.map((step, i) => (
            <div
              key={i}
              data-content=""
              className="absolute inset-x-0 top-0 p-4 rounded-brand-sm bg-accent-whisper/60 border border-accent-soft/20"
              style={{ opacity: 0 }}
            >
              <p className="text-[10px] font-body-medium uppercase tracking-eyebrow text-accent mb-2">
                Step {i + 1}: {step.label}
              </p>
              <p className="text-caption text-copy-mid leading-relaxed">
                {step.summary}
              </p>
              {i === 3 && (
                <div className="mt-3 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full border-2 border-accent border-t-transparent animate-spin" />
                  <span className="text-[10px] text-copy-faint">Generating draft...</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Publish button */}
        <div className="flex justify-end mt-4">
          <span
            data-publish=""
            className="inline-flex items-center gap-1.5 text-caption font-body-medium text-surface-white bg-accent px-5 py-2 rounded-full"
            style={{ opacity: 0 }}
          >
            Publish to Team
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M2 5h6M5.5 2.5L8 5l-2.5 2.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </div>
    </MockFrame>
  )
}
