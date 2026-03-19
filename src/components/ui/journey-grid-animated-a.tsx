'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { gsapRevealEase } from '@/lib/easing'

/* ─────────────────────────────────────────────────────
   Journey Grid A: "The Pathway"

   A vertical learning pathway with milestone nodes
   connected by a winding path line. Each scenario
   appears as a step along the journey, with a progress
   indicator showing how far the learner has come.
   The path draws itself, nodes light up sequentially,
   and a "current step" pulses with warmth.
   ───────────────────────────────────────────────────── */

interface Scenario {
  title: string
  subtitle: string
  status: 'completed' | 'current' | 'locked'
}

const scenarios: Scenario[] = [
  { title: 'Addressing poor performance', subtitle: 'Communicate constructively', status: 'completed' },
  { title: 'Supporting a stressed employee', subtitle: 'Manage with empathy', status: 'completed' },
  { title: 'Unsuccessful promotion news', subtitle: 'Deliver with care', status: 'current' },
  { title: 'Resolving team conflict', subtitle: 'Find common ground', status: 'locked' },
]

function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="shrink-0">
      <path
        d="M2.5 6.5L5 9L9.5 3.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function LockIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="shrink-0">
      <rect x="2" y="4.5" width="6" height="4.5" rx="1" stroke="currentColor" strokeWidth="1" />
      <path d="M3.5 4.5V3a1.5 1.5 0 013 0v1.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    </svg>
  )
}

export function JourneyGridAnimatedA() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const el = containerRef.current
      if (!el) return

      const header = el.querySelector('[data-header]')
      const progressBar = el.querySelector('[data-progress-fill]')
      const progressLabel = el.querySelector('[data-progress-label]')
      const pathLine = el.querySelector('[data-path-line]')
      const nodes = el.querySelectorAll('[data-node]')
      const cards = el.querySelectorAll('[data-card]')
      const currentPulse = el.querySelector('[data-current-pulse]')
      const ctaButton = el.querySelector('[data-cta]')

      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.8,
        defaults: { ease: gsapRevealEase },
      })

      /* Initial state */
      tl.set(header, { opacity: 0, y: 12 })
      tl.set(progressBar, { scaleX: 0 })
      tl.set(progressLabel, { opacity: 0 })
      tl.set(pathLine, { scaleY: 0 })
      tl.set(nodes, { opacity: 0, scale: 0 })
      tl.set(cards, { opacity: 0, x: -16 })
      tl.set(currentPulse, { opacity: 0, scale: 0 })
      tl.set(ctaButton, { opacity: 0, y: 8 })

      /* Phase 1: Header and journey title appear */
      tl.to(header, {
        opacity: 1,
        y: 0,
        duration: 0.5,
      })

      /* Phase 2: Progress bar fills to 50% */
      tl.to(progressBar, {
        scaleX: 1,
        duration: 0.6,
        ease: 'power2.out',
      })
      tl.to(progressLabel, {
        opacity: 1,
        duration: 0.3,
      }, '-=0.2')

      /* Phase 3: Path line draws down */
      tl.to(pathLine, {
        scaleY: 1,
        duration: 0.7,
        ease: 'power2.inOut',
      })

      /* Phase 4: Nodes appear sequentially along the path */
      nodes.forEach((node, i) => {
        tl.to(node, {
          opacity: 1,
          scale: 1,
          duration: 0.3,
          ease: 'back.out(2)',
        }, `-=${i === 0 ? 0 : 0.15}`)
      })

      /* Phase 5: Cards slide in from left, staggered */
      tl.to(cards, {
        opacity: 1,
        x: 0,
        duration: 0.4,
        stagger: 0.12,
      }, '-=0.3')

      /* Phase 6: Current step gets a warm pulse */
      tl.to(currentPulse, {
        opacity: 1,
        scale: 1,
        duration: 0.4,
        ease: 'power2.out',
      })
      tl.to(currentPulse, {
        scale: 1.4,
        opacity: 0,
        duration: 0.8,
        ease: 'power1.out',
        repeat: 2,
        yoyo: false,
      })

      /* Phase 7: CTA appears */
      tl.to(ctaButton, {
        opacity: 1,
        y: 0,
        duration: 0.35,
      }, '-=1.2')

      /* Phase 8: Hold */
      tl.to({}, { duration: 2.5 })

      /* Phase 9: Fade out */
      tl.to(el.children, {
        opacity: 0,
        duration: 0.8,
        ease: 'power1.inOut',
      })
    },
    { scope: containerRef }
  )

  return (
    <div ref={containerRef} className="relative min-h-[420px]">
      <div className="space-y-4">
        {/* Header */}
        <div data-header="" style={{ opacity: 0 }}>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="text-eyebrow-sm font-body-medium uppercase tracking-eyebrow text-accent">
              Learning Journey
            </span>
          </div>
          <h3 className="font-heading text-body tracking-heading text-dark leading-snug mb-1">
            Mastering Difficult Conversations
          </h3>
          <p className="text-caption text-copy-light leading-relaxed mb-3">
            Build the skills to manage performance, support stressed staff, and resolve team conflict.
          </p>

          {/* Progress bar */}
          <div className="flex items-center gap-3">
            <div className="flex-1 h-1.5 rounded-full bg-accent-soft/30 overflow-hidden">
              <div
                data-progress-fill=""
                className="h-full rounded-full bg-accent origin-left"
                style={{ width: '50%', transform: 'scaleX(0)' }}
              />
            </div>
            <span
              data-progress-label=""
              className="text-caption font-body-medium text-accent shrink-0"
              style={{ opacity: 0 }}
            >
              2 of 4
            </span>
          </div>
        </div>

        {/* Pathway */}
        <div className="relative pl-6 pt-2">
          {/* Vertical path line */}
          <div
            data-path-line=""
            className="absolute left-[11px] top-6 bottom-4 w-px bg-gradient-to-b from-accent via-accent-soft to-accent-soft/20 origin-top"
            style={{ transform: 'scaleY(0)' }}
          />

          {/* Scenario steps */}
          <div className="space-y-4">
            {scenarios.map((scenario, i) => (
              <div key={scenario.title} className="flex items-start gap-3 relative">
                {/* Node */}
                <div
                  data-node=""
                  className="absolute -left-6 top-1 flex items-center justify-center shrink-0"
                  style={{ opacity: 0 }}
                >
                  <div
                    className={`w-[22px] h-[22px] rounded-full border-2 flex items-center justify-center ${
                      scenario.status === 'completed'
                        ? 'border-accent bg-accent text-surface-white'
                        : scenario.status === 'current'
                          ? 'border-accent bg-accent-whisper'
                          : 'border-accent-soft/40 bg-surface'
                    }`}
                  >
                    {scenario.status === 'completed' && <CheckIcon />}
                    {scenario.status === 'current' && (
                      <div className="w-2 h-2 rounded-full bg-accent" />
                    )}
                    {scenario.status === 'locked' && (
                      <span className="text-copy-faint"><LockIcon /></span>
                    )}
                  </div>

                  {/* Pulse ring for current */}
                  {scenario.status === 'current' && (
                    <div
                      data-current-pulse=""
                      className="absolute inset-0 rounded-full border-2 border-accent/40"
                      style={{ opacity: 0 }}
                    />
                  )}
                </div>

                {/* Card */}
                <div
                  data-card=""
                  className={`flex-1 p-3 rounded-brand-sm border ${
                    scenario.status === 'current'
                      ? 'bg-accent-whisper border-accent/20'
                      : scenario.status === 'completed'
                        ? 'bg-surface-white border-border'
                        : 'bg-surface border-border'
                  }`}
                  style={{ opacity: 0 }}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className={`text-caption font-body-medium leading-snug ${
                        scenario.status === 'locked' ? 'text-copy-faint' : 'text-dark'
                      }`}>
                        {scenario.title}
                      </p>
                      <p className="text-[10px] text-copy-light mt-0.5">
                        {scenario.subtitle}
                      </p>
                    </div>
                    {scenario.status === 'current' && (
                      <span
                        data-cta=""
                        className="text-[10px] font-body-medium text-surface-white bg-accent px-2.5 py-1 rounded-full shrink-0"
                        style={{ opacity: 0 }}
                      >
                        Start
                      </span>
                    )}
                    {scenario.status === 'completed' && (
                      <span className="text-[10px] font-body-medium text-accent px-2 py-0.5 rounded-full bg-accent/10 shrink-0">
                        Review
                      </span>
                    )}
                  </div>
                  {i === 3 && (
                    <p className="text-[9px] text-copy-faint mt-1 italic">
                      Complete previous scenario to unlock
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
