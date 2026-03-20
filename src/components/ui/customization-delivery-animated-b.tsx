'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { gsapRevealEase } from '@/lib/easing'
import { MockFrame } from '@/components/ui/mock-frame'

/* ─────────────────────────────────────────────────────
   Concept B: "The Handoff"

   The brief card slides in from the left as a client
   message. It crosses through a warm processing zone
   in the center (Ambr branding pulse), then the output
   scenario cards fan out to the right like dealt cards.
   ───────────────────────────────────────────────────── */

const deliverables = [
  { title: 'Enterprise renewal — CFO pushback', status: 'Ready' as const },
  { title: 'Discovery call — cold prospect', status: 'Ready' as const },
  { title: 'Competitive displacement — VP Ops', status: 'In review' as const },
]

export function CustomizationDeliveryAnimatedB() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const el = containerRef.current
      if (!el) return

      const header = el.querySelector('[data-header]')
      const briefCard = el.querySelector('[data-brief]')
      const processingZone = el.querySelector('[data-processing]')
      const processingLabel = el.querySelector('[data-processing-label]')
      const processingDots = el.querySelectorAll('[data-dot]')
      const outputCards = el.querySelectorAll('[data-output-card]')
      const outputLabel = el.querySelector('[data-output-label]')

      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 1.5,
        defaults: { ease: gsapRevealEase },
      })

      /* Initial states */
      tl.set(header, { opacity: 0 })
      tl.set(briefCard, { opacity: 0, x: -60 })
      tl.set(processingZone, { opacity: 0, scale: 0.8 })
      tl.set(processingLabel, { opacity: 0 })
      tl.set(processingDots, { opacity: 0, scale: 0 })
      tl.set(outputCards, { opacity: 0, x: 30, y: 0 })
      tl.set(outputLabel, { opacity: 0 })

      /* Phase 1: Header fades in */
      tl.to(header, { opacity: 1, duration: 0.3 })

      /* Phase 2: Brief slides in from left */
      tl.to(briefCard, {
        opacity: 1,
        x: 0,
        duration: 0.6,
        ease: 'power2.out',
      })

      /* Phase 3: Hold — read the brief */
      tl.to({}, { duration: 0.8 })

      /* Phase 4: Brief starts moving right, fading */
      tl.to(briefCard, {
        x: 40,
        opacity: 0.3,
        scale: 0.9,
        duration: 0.7,
        ease: 'power2.inOut',
      })

      /* Phase 5: Processing zone appears */
      tl.to(processingZone, {
        opacity: 1,
        scale: 1,
        duration: 0.4,
        ease: 'power2.out',
      }, '-=0.5')
      tl.to(processingLabel, {
        opacity: 1,
        duration: 0.3,
      }, '-=0.2')

      /* Processing dots animate in sequence */
      tl.to(processingDots, {
        opacity: 1,
        scale: 1,
        duration: 0.2,
        stagger: 0.15,
        ease: 'back.out(3)',
      })

      /* Dots pulse */
      tl.to(processingDots, {
        scale: 1.3,
        duration: 0.3,
        stagger: 0.1,
        yoyo: true,
        repeat: 1,
        ease: 'power1.inOut',
      })

      /* Phase 6: Brief disappears, processing zone shrinks */
      tl.to(briefCard, { opacity: 0, duration: 0.3 })
      tl.to([processingZone, processingLabel, ...processingDots], {
        opacity: 0,
        scale: 0.7,
        duration: 0.4,
      })

      /* Phase 7: Output label + cards fan out */
      tl.to(outputLabel, { opacity: 1, duration: 0.3 })
      tl.to(outputCards, {
        opacity: 1,
        x: 0,
        duration: 0.45,
        stagger: 0.2,
        ease: 'power2.out',
      })

      /* Phase 8: Hold for reading */
      tl.to({}, { duration: 2.5 })

      /* Phase 9: Fade out for loop */
      tl.to(
        [header, briefCard, outputLabel, ...outputCards],
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
    <MockFrame ref={containerRef} height="standard">
      <div className="px-2 py-4">
        {/* ── Header ── */}
        <div
          data-header
          className="flex items-center gap-2 mb-5"
          style={{ opacity: 0 }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span className="text-[10px] font-body-medium uppercase tracking-eyebrow text-accent">
            Customization Service
          </span>
        </div>

        {/* ── Brief card (client message) ── */}
        <div
          data-brief
          className="flex items-center gap-4 p-4 rounded-brand-sm bg-surface border border-border mb-6"
          style={{ opacity: 0 }}
        >
          <div className="w-10 h-10 rounded-full bg-accent-soft/30 flex items-center justify-center shrink-0">
            <span className="text-caption font-body-medium text-accent">AB</span>
          </div>
          <div>
            <p className="text-caption font-body-medium text-dark">Brief received</p>
            <p className="text-[11px] text-copy-light leading-relaxed">
              &ldquo;We need scenarios for our Q2 sales kickoff covering new pricing...&rdquo;
            </p>
          </div>
        </div>

        {/* ── Processing zone ── */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div
            data-processing
            className="flex items-center gap-3 px-5 py-3 rounded-full bg-accent-whisper border border-accent-soft/30"
            style={{ opacity: 0 }}
          >
            <div className="flex gap-1.5">
              <span
                data-dot
                className="w-2 h-2 rounded-full bg-accent/60"
                style={{ opacity: 0 }}
              />
              <span
                data-dot
                className="w-2 h-2 rounded-full bg-accent/40"
                style={{ opacity: 0 }}
              />
              <span
                data-dot
                className="w-2 h-2 rounded-full bg-accent/20"
                style={{ opacity: 0 }}
              />
            </div>
            <span
              data-processing-label
              className="text-[10px] font-body-medium text-accent"
              style={{ opacity: 0 }}
            >
              Building your scenarios...
            </span>
          </div>
        </div>

        {/* ── Output ── */}
        <p
          data-output-label
          className="text-[10px] font-body-medium uppercase tracking-eyebrow text-copy-light mb-3"
          style={{ opacity: 0 }}
        >
          Delivered within 48 hours
        </p>

        <div className="space-y-2">
          {deliverables.map((item, i) => (
            <div
              key={i}
              data-output-card
              className="flex items-center gap-3 p-3 rounded-brand-sm border border-border bg-surface-white"
              style={{ opacity: 0 }}
            >
              <span
                className={`text-caption font-body-medium shrink-0 ${
                  item.status === 'Ready' ? 'text-accent' : 'text-copy-faint'
                }`}
              >
                {item.status === 'Ready' ? '✓' : '○'}
              </span>
              <span className="text-caption text-copy-mid flex-1">
                {item.title}
              </span>
              <span
                className={`text-[10px] font-body-medium px-2 py-0.5 rounded-full ${
                  item.status === 'Ready'
                    ? 'text-accent bg-accent-whisper border border-accent-soft/30'
                    : 'text-copy-faint bg-surface border border-border'
                }`}
              >
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </MockFrame>
  )
}
