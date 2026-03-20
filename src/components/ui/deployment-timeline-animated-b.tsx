'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { gsapRevealEase } from '@/lib/easing'
import { MockFrame } from '@/components/ui/mock-frame'

/* ─────────────────────────────────────────────────────
   Deployment Timeline B: "The Conveyor"

   A horizontal progress bar metaphor that shows the
   client's brief moving through stages: Brief → Build
   → Review → Live. Each stage is a distinct zone, and
   a "parcel" (representing the client's training
   program) moves smoothly across them. Minimal, clean,
   confident — like watching a high-end production
   process from above.
   ───────────────────────────────────────────────────── */

interface Stage {
  label: string
  day: string
  detail: string
}

const stages: Stage[] = [
  { label: 'Brief', day: 'Day 1', detail: 'Scenarios & objectives defined' },
  { label: 'Build', day: 'Day 2–3', detail: 'AI characters & feedback criteria' },
  { label: 'Review', day: 'Day 4', detail: 'Client approval & refinement' },
  { label: 'Live', day: 'Day 5', detail: 'Team begins practicing' },
]

export function DeploymentTimelineAnimatedB() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const el = containerRef.current
      if (!el) return

      const header = el.querySelector('[data-header]')
      const track = el.querySelector('[data-track]')
      const stageZones = el.querySelectorAll('[data-stage-zone]')
      const stageLabels = el.querySelectorAll('[data-stage-label]')
      const dayLabels = el.querySelectorAll('[data-day-label]')
      const details = el.querySelectorAll('[data-detail]')
      const parcel = el.querySelector('[data-parcel]')
      const progressFill = el.querySelector('[data-progress-fill]')
      const stageChecks = el.querySelectorAll('[data-stage-check]')
      const completionCard = el.querySelector('[data-completion]')

      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.8,
        defaults: { ease: gsapRevealEase },
      })

      /* Initial state */
      tl.set(header, { opacity: 0, y: 10 })
      tl.set(track, { scaleX: 0 })
      tl.set(stageZones, { opacity: 0, y: 8 })
      tl.set(stageLabels, { opacity: 0 })
      tl.set(dayLabels, { opacity: 0 })
      tl.set(details, { opacity: 0, y: 6 })
      tl.set(parcel, { opacity: 0, scale: 0, left: '0%' })
      tl.set(progressFill, { scaleX: 0 })
      tl.set(stageChecks, { opacity: 0, scale: 0 })
      tl.set(completionCard, { opacity: 0, y: 12 })

      /* Phase 1: Header */
      tl.to(header, { opacity: 1, y: 0, duration: 0.45 })

      /* Phase 2: Track draws */
      tl.to(track, {
        scaleX: 1,
        duration: 0.6,
        ease: 'power2.inOut',
      })

      /* Phase 3: Stage zones appear */
      tl.to(stageZones, {
        opacity: 1,
        y: 0,
        duration: 0.35,
        stagger: 0.1,
      })
      tl.to(stageLabels, {
        opacity: 1,
        duration: 0.3,
        stagger: 0.08,
      }, '-=0.3')

      /* Phase 4: Parcel appears at start */
      tl.to(parcel, {
        opacity: 1,
        scale: 1,
        duration: 0.35,
        ease: 'back.out(2)',
      })

      /* Phase 5: Parcel moves through each stage */
      stages.forEach((_, i) => {
        const targetPercent = (i / (stages.length - 1)) * 100

        /* Move parcel */
        tl.to(parcel, {
          left: `${targetPercent}%`,
          duration: 0.6,
          ease: 'power2.inOut',
        })

        /* Progress fills to match */
        tl.to(progressFill, {
          scaleX: (i + 1) / stages.length,
          duration: 0.4,
          ease: 'power2.out',
        }, '-=0.4')

        /* Day label appears */
        tl.to(dayLabels[i], {
          opacity: 1,
          duration: 0.25,
        }, '-=0.2')

        /* Detail text */
        tl.to(details[i], {
          opacity: 1,
          y: 0,
          duration: 0.3,
        }, '-=0.1')

        /* Check mark */
        tl.to(stageChecks[i], {
          opacity: 1,
          scale: 1,
          duration: 0.2,
          ease: 'back.out(3)',
        })

        /* Pause between stages */
        if (i < stages.length - 1) {
          tl.to({}, { duration: 0.4 })
        }
      })

      /* Phase 6: Completion card */
      tl.to(completionCard, {
        opacity: 1,
        y: 0,
        duration: 0.45,
      })

      /* Phase 7: Hold */
      tl.to({}, { duration: 2.5 })

      /* Phase 8: Fade */
      tl.to(el.children, {
        opacity: 0,
        duration: 0.8,
        ease: 'power1.inOut',
      })
    },
    { scope: containerRef }
  )

  return (
    <MockFrame ref={containerRef} height="compact">
      {/* Header */}
      <div data-header="" className="mb-6" style={{ opacity: 0 }}>
        <div className="flex items-center gap-2 mb-1">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span className="text-eyebrow-sm font-body-medium uppercase tracking-eyebrow text-accent">
            Deployment
          </span>
        </div>
        <h3 className="font-heading text-body tracking-heading text-dark leading-snug">
          From brief to practice in five days
        </h3>
      </div>

      {/* Track area */}
      <div className="relative px-4">
        {/* Track line */}
        <div
          data-track=""
          className="h-[3px] rounded-full bg-accent-soft/20 origin-left mb-8"
          style={{ transform: 'scaleX(0)' }}
        />

        {/* Progress fill - overlaid on track */}
        <div
          data-progress-fill=""
          className="absolute top-0 left-4 right-4 h-[3px] rounded-full bg-accent origin-left"
          style={{ transform: 'scaleX(0)' }}
        />

        {/* Parcel / cursor */}
        <div
          data-parcel=""
          className="absolute top-[-5px] w-[13px] h-[13px] -ml-[6.5px]"
          style={{ opacity: 0, left: '0%' }}
        >
          <div className="w-full h-full rounded-full bg-accent border-2 border-surface-white shadow-[0_0_8px_rgba(212,114,52,0.3)]" />
        </div>

        {/* Stage zones */}
        <div className="grid grid-cols-4 gap-2">
          {stages.map((stage, i) => (
            <div
              key={stage.label}
              data-stage-zone=""
              className="text-center"
              style={{ opacity: 0 }}
            >
              {/* Stage marker + check */}
              <div className="flex items-center justify-center gap-1 mb-2">
                <span
                  data-stage-label=""
                  className="text-caption font-body-medium text-dark"
                  style={{ opacity: 0 }}
                >
                  {stage.label}
                </span>
                <span
                  data-stage-check=""
                  className="text-accent"
                  style={{ opacity: 0 }}
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 5.5L4 7.5L8 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>

              {/* Day */}
              <p
                data-day-label=""
                className="text-[9px] font-body-medium text-accent mb-1"
                style={{ opacity: 0 }}
              >
                {stage.day}
              </p>

              {/* Detail */}
              <p
                data-detail=""
                className="text-[10px] text-copy-light leading-relaxed"
                style={{ opacity: 0 }}
              >
                {stage.detail}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Completion card */}
      <div
        data-completion=""
        className="mt-6 p-3.5 rounded-brand-sm bg-accent-whisper border border-accent/10"
        style={{ opacity: 0 }}
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center shrink-0">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 7.5L6 10.5L11 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div>
            <p className="text-caption font-body-medium text-dark">Ready to go</p>
            <p className="text-[10px] text-copy-light">
              Your team can start practicing real conversations today.
            </p>
          </div>
        </div>
      </div>
    </MockFrame>
  )
}
