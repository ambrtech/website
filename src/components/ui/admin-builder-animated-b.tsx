'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { gsapRevealEase } from '@/lib/easing'

/* ---------------------------------------------------------
   Concept B: "The Stacking Cards"

   Each stage of the admin builder is a card that slides in
   from the right, stacks on the previous one, gets a
   completion badge, then the next card arrives. Creates a
   satisfying sense of accumulation — each layer adds to the
   scenario being constructed. Based on the existing mock's
   numbered-step metaphor but with a card-stacking motion.
   --------------------------------------------------------- */

const stages = [
  {
    number: 1,
    title: 'Scenario Context',
    detail: 'Performance review — underperforming team member',
    complete: false,
  },
  {
    number: 2,
    title: 'AI Character Behavior',
    detail: 'Defensive, avoids direct answers, becomes emotional',
    complete: false,
  },
  {
    number: 3,
    title: 'Feedback Criteria',
    detail: 'Empathy, directness, actionable next steps',
    complete: false,
  },
  {
    number: 4,
    title: 'Assign to Team',
    detail: '12 team members across 3 regions',
    complete: false,
  },
]

export function AdminBuilderAnimatedB() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const el = containerRef.current
      if (!el) return

      const eyebrow = el.querySelector('[data-eyebrow]')
      const title = el.querySelector('[data-title]')
      const cards = el.querySelectorAll('[data-stage-card]')
      const badges = el.querySelectorAll('[data-badge]')
      const numbers = el.querySelectorAll('[data-number]')
      const summaryCard = el.querySelector('[data-summary]')
      const summaryItems = el.querySelectorAll('[data-summary-item]')

      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.8,
        defaults: { ease: gsapRevealEase },
      })

      /* Initial state */
      tl.set(eyebrow, { opacity: 0 })
      tl.set(title, { opacity: 0, y: 8 })
      tl.set(cards, { opacity: 0, x: 40, scale: 0.95 })
      tl.set(badges, { opacity: 0, scale: 0 })
      tl.set(numbers, { opacity: 0.3 })
      tl.set(summaryCard, { opacity: 0, y: 16 })
      tl.set(summaryItems, { opacity: 0, y: 8 })

      /* Phase 1: Header */
      tl.to(eyebrow, { opacity: 1, duration: 0.3 })
      tl.to(title, { opacity: 1, y: 0, duration: 0.4 }, '-=0.15')

      /* Phase 2-5: Each card slides in, pauses, gets checkmark */
      cards.forEach((_, i) => {
        // Card slides in
        tl.to(cards[i], {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.45,
          ease: 'power2.out',
        })

        // Number lights up
        tl.to(numbers[i], { opacity: 1, duration: 0.2 }, '-=0.2')

        // Hold
        tl.to({}, { duration: 0.6 })

        // Completion badge
        tl.to(badges[i], {
          opacity: 1,
          scale: 1,
          duration: 0.25,
          ease: 'back.out(3)',
        })

        // Card slightly recedes to make room for next
        if (i < cards.length - 1) {
          tl.to(cards[i], {
            scale: 0.97,
            opacity: 0.7,
            duration: 0.3,
          })
        }
      })

      /* Phase 6: All cards visible — summary appears */
      tl.to({}, { duration: 0.3 })
      tl.to(summaryCard, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' })
      tl.to(summaryItems, {
        opacity: 1,
        y: 0,
        duration: 0.3,
        stagger: 0.1,
      })

      /* Phase 7: Hold */
      tl.to({}, { duration: 2.5 })

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
      <div className="absolute inset-0 px-5 py-6 md:px-7">
        {/* Eyebrow + title */}
        <div data-eyebrow="" className="flex items-center gap-2 mb-1" style={{ opacity: 0 }}>
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span className="text-eyebrow-sm font-body-medium uppercase tracking-eyebrow text-accent">
            Scenario Builder
          </span>
        </div>
        <h3
          data-title=""
          className="font-heading text-body tracking-heading text-dark mb-5"
          style={{ opacity: 0 }}
        >
          Build a training scenario
        </h3>

        {/* Stage cards */}
        <div className="space-y-2">
          {stages.map((stage, i) => (
            <div
              key={i}
              data-stage-card=""
              className="flex items-center gap-3 p-3 rounded-brand-sm bg-surface-white border border-border"
              style={{ opacity: 0 }}
            >
              {/* Step number */}
              <span
                data-number=""
                className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-caption font-body-medium text-accent shrink-0"
                style={{ opacity: 0.3 }}
              >
                {stage.number}
              </span>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <p className="text-caption font-body-medium text-dark leading-tight">
                  {stage.title}
                </p>
                <p className="text-[10px] text-copy-light leading-tight mt-0.5 truncate">
                  {stage.detail}
                </p>
              </div>

              {/* Completion badge */}
              <div
                data-badge=""
                className="w-5 h-5 rounded-full bg-accent flex items-center justify-center shrink-0"
                style={{ opacity: 0, transform: 'scale(0)' }}
              >
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M2.5 5.5l1.5 1.5 3.5-4" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Summary card */}
        <div
          data-summary=""
          className="mt-4 p-4 rounded-brand-sm bg-accent-whisper border border-accent-soft/30"
          style={{ opacity: 0 }}
        >
          <div data-summary-item="" className="flex items-center gap-2 mb-2" style={{ opacity: 0 }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-accent shrink-0">
              <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.2" />
              <path d="M4.5 7.2L6.2 8.8L9.5 5.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-caption font-body-medium text-dark">
              All steps complete
            </span>
          </div>
          <div data-summary-item="" className="flex items-center justify-between" style={{ opacity: 0 }}>
            <span className="text-[10px] text-copy-light">
              Scenario ready for 12 team members
            </span>
            <span className="inline-block text-caption font-body-medium text-surface-white bg-accent px-4 py-1.5 rounded-full">
              Publish
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
