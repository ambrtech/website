'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { gsapRevealEase } from '@/lib/easing'
import { MockFrame } from '@/components/ui/mock-frame'

/* ---------------------------------------------------------
   Concept C: "Curriculum Builder"

   A vertical list of modules arranged like a curriculum
   sequence. Each module slides in from the left, then
   group/user assignment chips attach on the right. A
   progress-style connector line links them vertically,
   drawing as the sequence builds — like the admin is
   assembling a training pathway.
   --------------------------------------------------------- */

const curriculum = [
  {
    name: 'Difficult Conversations',
    desc: 'Core management scenarios',
    assignedTo: ['All users'],
    enabled: true,
  },
  {
    name: 'AI Coaching',
    desc: 'Advanced coaching and mentoring',
    assignedTo: ['Sales Team', '5 users'],
    enabled: true,
  },
  {
    name: 'Presentations',
    desc: 'Presentation practice with AI audience',
    assignedTo: [],
    enabled: false,
  },
]

export function ModuleManagementAnimatedC() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const el = containerRef.current
      if (!el) return

      const card = el.querySelector('[data-card]')
      const header = el.querySelector('[data-header]')
      const headerBadge = el.querySelector('[data-header-badge]')
      const stepDots = el.querySelectorAll('[data-step-dot]')
      const stepLines = el.querySelectorAll('[data-step-line]')
      const moduleBlocks = el.querySelectorAll('[data-module-block]')
      const moduleNames = el.querySelectorAll('[data-mod-name]')
      const moduleDescs = el.querySelectorAll('[data-mod-desc]')
      const statusIndicators = el.querySelectorAll('[data-status]')
      const assignChips = el.querySelectorAll('[data-assign-chip]')
      const footer = el.querySelector('[data-footer]')
      const footerMeter = el.querySelector('[data-footer-meter]')

      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.8,
        defaults: { ease: gsapRevealEase },
      })

      /* Initial state */
      tl.set(card, { opacity: 0 })
      tl.set(header, { opacity: 0, y: -6 })
      tl.set(headerBadge, { opacity: 0, scale: 0.8 })
      tl.set(stepDots, { opacity: 0, scale: 0 })
      tl.set(stepLines, { scaleY: 0 })
      tl.set(moduleBlocks, { opacity: 0, x: -12 })
      tl.set(moduleNames, { opacity: 0 })
      tl.set(moduleDescs, { opacity: 0 })
      tl.set(statusIndicators, { opacity: 0, scale: 0.5 })
      tl.set(assignChips, { opacity: 0, x: 8, scale: 0.8 })
      tl.set(footer, { opacity: 0, y: 6 })
      tl.set(footerMeter, { scaleX: 0 })

      /* Phase 1: Card */
      tl.to(card, { opacity: 1, duration: 0.5, ease: 'power1.out' })

      /* Phase 2: Header + badge */
      tl.to(header, { opacity: 1, y: 0, duration: 0.4 })
      tl.to(headerBadge, { opacity: 1, scale: 1, duration: 0.3, ease: 'back.out(2)' }, '-=0.15')

      /* Phase 3: Build the curriculum sequence — dot, line, module for each step */
      curriculum.forEach((_, i) => {
        const offset = i === 0 ? '+=0.1' : '-=0.05'

        // Step dot appears
        tl.to(stepDots[i], {
          opacity: 1,
          scale: 1,
          duration: 0.25,
          ease: 'back.out(3)',
        }, offset)

        // Connector line draws down (except last)
        if (stepLines[i]) {
          tl.to(stepLines[i], {
            scaleY: 1,
            duration: 0.3,
            ease: 'power2.out',
          }, '-=0.1')
        }

        // Module block slides in
        tl.to(moduleBlocks[i], {
          opacity: 1,
          x: 0,
          duration: 0.4,
          ease: 'power2.out',
        }, '-=0.2')

        // Name + desc reveal
        tl.to(moduleNames[i], { opacity: 1, duration: 0.25 }, '-=0.2')
        tl.to(moduleDescs[i], { opacity: 1, duration: 0.2 }, '-=0.1')

        // Status indicator
        tl.to(statusIndicators[i], {
          opacity: 1,
          scale: 1,
          duration: 0.25,
          ease: 'back.out(2)',
        }, '-=0.1')
      })

      /* Phase 4: Assignment chips fly in from the right */
      tl.to(assignChips, {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 0.3,
        stagger: 0.08,
        ease: 'back.out(1.5)',
      }, '+=0.15')

      /* Phase 5: Footer with meter */
      tl.to(footer, { opacity: 1, y: 0, duration: 0.35 })
      tl.to(footerMeter, {
        scaleX: 1,
        duration: 0.6,
        ease: 'power2.out',
      }, '-=0.15')

      /* Phase 6: Hold */
      tl.to({}, { duration: 2.5 })

      /* Phase 7: Fade out */
      tl.to(card, {
        opacity: 0,
        duration: 0.9,
        ease: 'power1.inOut',
      })
    },
    { scope: containerRef }
  )

  return (
    <MockFrame ref={containerRef} height="tall">
      <div
        data-card=""
        className="absolute inset-0 rounded-brand bg-accent-whisper bg-noise-fine px-5 py-5"
        style={{ opacity: 0, backgroundBlendMode: 'overlay' }}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <span
            data-header=""
            className="text-eyebrow-sm font-body-medium uppercase tracking-eyebrow text-copy-light"
            style={{ opacity: 0 }}
          >
            Training Curriculum
          </span>
          <span
            data-header-badge=""
            className="text-detail font-body-medium text-accent px-2 py-0.5 rounded-full bg-accent/10"
            style={{ opacity: 0 }}
          >
            3 modules
          </span>
        </div>

        {/* Curriculum timeline */}
        <div className="relative">
          {curriculum.map((mod, i) => (
            <div key={mod.name} className="flex gap-3 mb-0">
              {/* Timeline track: dot + line */}
              <div className="flex flex-col items-center shrink-0 w-4">
                <div
                  data-step-dot=""
                  className={`w-3 h-3 rounded-full border-2 shrink-0 ${
                    mod.enabled
                      ? 'bg-accent border-accent'
                      : 'bg-surface-white border-copy-faint'
                  }`}
                  style={{ opacity: 0 }}
                />
                {i < curriculum.length - 1 && (
                  <div
                    data-step-line=""
                    className="w-px flex-1 bg-accent-soft/60 origin-top my-1"
                    style={{ transform: 'scaleY(0)' }}
                  />
                )}
              </div>

              {/* Module content */}
              <div
                data-module-block=""
                className={`flex-1 p-3 rounded-brand-sm border bg-surface-white mb-3 ${
                  mod.enabled ? 'border-border' : 'border-border/60'
                }`}
                style={{ opacity: 0 }}
              >
                <div className="flex items-start justify-between mb-1">
                  <div className="flex-1 min-w-0">
                    <p
                      data-mod-name=""
                      className={`text-caption font-body-medium leading-tight ${
                        mod.enabled ? 'text-dark' : 'text-copy-faint'
                      }`}
                      style={{ opacity: 0 }}
                    >
                      {mod.name}
                    </p>
                    <p
                      data-mod-desc=""
                      className="text-detail text-copy-faint mt-0.5"
                      style={{ opacity: 0 }}
                    >
                      {mod.desc}
                    </p>
                  </div>
                  <span
                    data-status=""
                    className={`text-[9px] font-body-medium px-1.5 py-0.5 rounded-full shrink-0 ml-2 ${
                      mod.enabled
                        ? 'bg-accent/10 text-accent'
                        : 'bg-surface-alt text-copy-faint'
                    }`}
                    style={{ opacity: 0 }}
                  >
                    {mod.enabled ? 'On' : 'Off'}
                  </span>
                </div>

                {/* Assignment chips */}
                {mod.assignedTo.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-2">
                    {mod.assignedTo.map((assignment) => (
                      <span
                        key={`${mod.name}-${assignment}`}
                        data-assign-chip=""
                        className="text-[9px] px-1.5 py-0.5 rounded-full bg-accent-tint border border-accent-soft/40 text-copy-mid"
                        style={{ opacity: 0 }}
                      >
                        {assignment}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Footer with progress */}
        <div
          data-footer=""
          className="mt-1"
          style={{ opacity: 0 }}
        >
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-caption text-copy-light">Curriculum coverage</span>
            <span className="text-caption text-accent font-body-medium">67%</span>
          </div>
          <div className="h-1.5 rounded-full bg-surface-white overflow-hidden">
            <div
              data-footer-meter=""
              className="h-full rounded-full bg-gradient-to-r from-accent-soft to-accent origin-left"
              style={{ transform: 'scaleX(0)' }}
            />
          </div>
        </div>
      </div>
    </MockFrame>
  )
}
