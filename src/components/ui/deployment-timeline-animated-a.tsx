'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { gsapRevealEase } from '@/lib/easing'
import { MockFrame } from '@/components/ui/mock-frame'

/* ─────────────────────────────────────────────────────
   Deployment Timeline A: "The Letter Exchange"

   An editorial, correspondence-style metaphor. Each
   phase of deployment is presented as a letter or note
   being opened: the client's brief arrives, Ambr's
   response unfolds, and the team gets invited. Uses
   envelope/card animations — warm, personal, and
   distinctly un-techy. Like watching mail arrive.
   ───────────────────────────────────────────────────── */

interface Phase {
  day: string
  title: string
  description: string
  icon: 'brief' | 'build' | 'practice'
}

const phases: Phase[] = [
  {
    day: 'Day 1',
    title: 'Brief received',
    description: 'Your scenarios, context, and learning objectives — all captured.',
    icon: 'brief',
  },
  {
    day: 'Day 3',
    title: 'Simulations built',
    description: 'AI characters crafted to match your organization\'s real-world situations.',
    icon: 'build',
  },
  {
    day: 'Day 5',
    title: 'Team practicing',
    description: 'Employees begin having realistic conversations — measurable growth starts.',
    icon: 'practice',
  },
]

function PhaseIcon({ type }: { type: Phase['icon'] }) {
  if (type === 'brief') {
    return (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect x="2" y="3" width="12" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
        <path d="M2 5.5L8 9L14 5.5" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    )
  }
  if (type === 'build') {
    return (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M4 12V7L8 4L12 7V12" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
        <path d="M6.5 12V9.5H9.5V12" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    )
  }
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.2" />
      <path d="M3.5 13.5C3.5 10.5 5.5 8.5 8 8.5C10.5 8.5 12.5 10.5 12.5 13.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}

export function DeploymentTimelineAnimatedA() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const el = containerRef.current
      if (!el) return

      const header = el.querySelector('[data-header]')
      const cards = el.querySelectorAll('[data-phase-card]')
      const icons = el.querySelectorAll('[data-phase-icon]')
      const dayBadges = el.querySelectorAll('[data-day]')
      const titles = el.querySelectorAll('[data-phase-title]')
      const descriptions = el.querySelectorAll('[data-phase-desc]')
      const connectors = el.querySelectorAll('[data-connector]')
      const checkmarks = el.querySelectorAll('[data-checkmark]')
      const finalGlow = el.querySelector('[data-glow]')

      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.8,
        defaults: { ease: gsapRevealEase },
      })

      /* Initial state */
      tl.set(header, { opacity: 0, y: 10 })
      tl.set(cards, { opacity: 0, y: 20, rotationX: -8 })
      tl.set(icons, { opacity: 0, scale: 0 })
      tl.set(dayBadges, { opacity: 0, scale: 0.8 })
      tl.set(titles, { opacity: 0, x: -8 })
      tl.set(descriptions, { opacity: 0 })
      tl.set(connectors, { scaleY: 0 })
      tl.set(checkmarks, { opacity: 0, scale: 0 })
      tl.set(finalGlow, { opacity: 0 })

      /* Phase 1: Header */
      tl.to(header, { opacity: 1, y: 0, duration: 0.45 })

      /* Phase 2-4: Cards arrive one by one (like letters) */
      phases.forEach((_, i) => {
        /* Card "lands" */
        tl.to(cards[i], {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 0.5,
          ease: 'power2.out',
        })

        /* Day badge */
        tl.to(dayBadges[i], {
          opacity: 1,
          scale: 1,
          duration: 0.25,
          ease: 'back.out(2)',
        }, '-=0.25')

        /* Icon pops */
        tl.to(icons[i], {
          opacity: 1,
          scale: 1,
          duration: 0.3,
          ease: 'back.out(2.5)',
        }, '-=0.15')

        /* Title slides in */
        tl.to(titles[i], {
          opacity: 1,
          x: 0,
          duration: 0.35,
        }, '-=0.2')

        /* Description fades */
        tl.to(descriptions[i], {
          opacity: 1,
          duration: 0.3,
        }, '-=0.15')

        /* Checkmark */
        tl.to(checkmarks[i], {
          opacity: 1,
          scale: 1,
          duration: 0.25,
          ease: 'back.out(3)',
        })

        /* Connector to next (except last) */
        if (i < phases.length - 1) {
          tl.to(connectors[i], {
            scaleY: 1,
            duration: 0.3,
            ease: 'power2.inOut',
          }, '-=0.1')
        }

        /* Brief pause between letters */
        if (i < phases.length - 1) {
          tl.to({}, { duration: 0.3 })
        }
      })

      /* Phase 5: Final card gets a warm glow */
      tl.to(finalGlow, {
        opacity: 1,
        duration: 0.6,
        ease: 'power2.out',
      })

      /* Phase 6: Hold */
      tl.to({}, { duration: 2.8 })

      /* Phase 7: Fade */
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
      <div data-header="" className="mb-5" style={{ opacity: 0 }}>
        <div className="flex items-center gap-2 mb-1">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span className="text-eyebrow-sm font-body-medium uppercase tracking-eyebrow text-accent">
            From Brief to Practice
          </span>
        </div>
        <p className="text-caption text-copy-light">
          Five days. That&apos;s all it takes.
        </p>
      </div>

      {/* Timeline */}
      <div className="space-y-0">
        {phases.map((phase, i) => (
          <div key={phase.title}>
            {/* Phase card */}
            <div
              data-phase-card=""
              className={`relative p-4 rounded-brand-sm border ${
                i === phases.length - 1
                  ? 'bg-accent-whisper border-accent/15'
                  : 'bg-surface-white border-border'
              }`}
              style={{ opacity: 0 }}
            >
              {/* Glow on final card */}
              {i === phases.length - 1 && (
                <div
                  data-glow=""
                  className="absolute inset-0 rounded-brand-sm"
                  style={{
                    opacity: 0,
                    background: 'radial-gradient(ellipse at center, rgba(212, 114, 52, 0.06) 0%, transparent 70%)',
                  }}
                />
              )}

              <div className="relative flex items-start gap-3">
                {/* Icon */}
                <div
                  data-phase-icon=""
                  className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0 mt-0.5"
                  style={{ opacity: 0 }}
                >
                  <PhaseIcon type={phase.icon} />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      data-day=""
                      className="text-[9px] font-body-medium text-accent bg-accent/10 px-2 py-0.5 rounded-full"
                      style={{ opacity: 0 }}
                    >
                      {phase.day}
                    </span>
                    <span
                      data-checkmark=""
                      className="text-accent"
                      style={{ opacity: 0 }}
                    >
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M2.5 6.5L5 9L9.5 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                  <p
                    data-phase-title=""
                    className="text-caption font-body-medium text-dark leading-snug mb-0.5"
                    style={{ opacity: 0 }}
                  >
                    {phase.title}
                  </p>
                  <p
                    data-phase-desc=""
                    className="text-[10px] text-copy-light leading-relaxed"
                    style={{ opacity: 0 }}
                  >
                    {phase.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Connector */}
            {i < phases.length - 1 && (
              <div className="flex justify-start pl-[19px] py-0">
                <div
                  data-connector=""
                  className="w-px h-5 bg-accent-soft/50 origin-top"
                  style={{ transform: 'scaleY(0)' }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </MockFrame>
  )
}
