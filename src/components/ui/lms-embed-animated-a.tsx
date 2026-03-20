'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { gsapRevealEase } from '@/lib/easing'
import { MockFrame } from '@/components/ui/mock-frame'

/* ─────────────────────────────────────────────────────
   LMS Embed A: "The Module List"

   Shows a generic LMS interface with a list of training
   modules. Traditional e-learning items sit flat and
   grey, then an Ambr AI simulation module appears among
   them — visually distinct, with a warm accent glow,
   interactive badge, and micro-progress indicators that
   make it feel alive among the static content. The
   contrast tells the story: same LMS, better training.
   ───────────────────────────────────────────────────── */

export function LmsEmbedAnimatedA() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const el = containerRef.current
      if (!el) return

      const shell = el.querySelector('[data-shell]')
      const lmsNav = el.querySelector('[data-lms-nav]')
      const courseHeader = el.querySelector('[data-course-header]')
      const boringModules = el.querySelectorAll('[data-boring]')
      const ambrModule = el.querySelector('[data-ambr-module]')
      const ambrGlow = el.querySelector('[data-ambr-glow]')
      const ambrBadge = el.querySelector('[data-ambr-badge]')
      const ambrProgress = el.querySelector('[data-ambr-progress]')
      const ambrDetails = el.querySelector('[data-ambr-details]')
      const sparkle = el.querySelector('[data-sparkle]')

      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.8,
        defaults: { ease: gsapRevealEase },
      })

      /* Initial state */
      tl.set(shell, { opacity: 0 })
      tl.set(lmsNav, { opacity: 0, y: -6 })
      tl.set(courseHeader, { opacity: 0, y: 6 })
      tl.set(boringModules, { opacity: 0, x: -8 })
      tl.set(ambrModule, { opacity: 0, scale: 0.96 })
      tl.set(ambrGlow, { opacity: 0 })
      tl.set(ambrBadge, { opacity: 0, scale: 0.5 })
      tl.set(ambrProgress, { scaleX: 0 })
      tl.set(ambrDetails, { opacity: 0, y: 6 })
      tl.set(sparkle, { opacity: 0, scale: 0, rotation: -45 })

      /* Phase 1: LMS shell appears */
      tl.to(shell, { opacity: 1, duration: 0.5, ease: 'power1.out' })
      tl.to(lmsNav, { opacity: 1, y: 0, duration: 0.3 }, '-=0.25')
      tl.to(courseHeader, { opacity: 1, y: 0, duration: 0.35 }, '-=0.15')

      /* Phase 2: Boring modules slide in one by one */
      tl.to(boringModules, {
        opacity: 1,
        x: 0,
        duration: 0.3,
        stagger: 0.1,
      })

      /* Hold — look at the boring LMS */
      tl.to({}, { duration: 1.0 })

      /* Phase 3: Ambr module appears with presence */
      tl.to(ambrModule, { opacity: 1, scale: 1, duration: 0.5, ease: 'power2.out' })
      tl.to(ambrGlow, { opacity: 1, duration: 0.4, ease: 'power1.out' }, '-=0.3')

      /* Phase 4: Badge pops */
      tl.to(ambrBadge, { opacity: 1, scale: 1, duration: 0.35, ease: 'back.out(3)' }, '-=0.2')

      /* Phase 5: Progress fills and details appear */
      tl.to(ambrProgress, { scaleX: 1, duration: 0.7, ease: 'power2.out' })
      tl.to(ambrDetails, { opacity: 1, y: 0, duration: 0.35 }, '-=0.3')

      /* Phase 6: Sparkle */
      tl.to(sparkle, {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 0.4,
        ease: 'back.out(2)',
      }, '-=0.2')
      tl.to(sparkle, { opacity: 0, scale: 1.3, duration: 0.5 }, '+=0.5')

      /* Hold — appreciate the difference */
      tl.to({}, { duration: 2.5 })

      /* Phase 7: Everything fades */
      tl.to(
        [shell, lmsNav, courseHeader, ...boringModules, ambrModule, ambrGlow, ambrBadge, ambrDetails],
        { opacity: 0, duration: 0.8, ease: 'power1.inOut' }
      )
    },
    { scope: containerRef }
  )

  const boringItems = [
    { title: 'Code of Conduct (Annual)', type: 'Video + Quiz', time: '25 min' },
    { title: 'Data Privacy Essentials', type: 'Slides + Quiz', time: '15 min' },
    { title: 'Fire Safety Refresher', type: 'Video', time: '10 min' },
  ]

  return (
    <MockFrame ref={containerRef} height="tall">
      <div
        data-shell=""
        className="absolute inset-0 rounded-brand bg-surface-white border border-border overflow-hidden"
        style={{ opacity: 0 }}
      >
        {/* LMS top nav */}
        <div
          data-lms-nav=""
          className="flex items-center gap-4 px-5 py-3 border-b border-border"
          style={{ opacity: 0 }}
        >
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded bg-dark/10" />
            <span className="text-caption font-body-medium text-copy-light">Cornerstone</span>
          </div>
          <div className="flex gap-3 ml-auto">
            <span className="text-caption text-copy-faint">Catalog</span>
            <span className="text-caption font-body-medium text-dark">My Learning</span>
            <span className="text-caption text-copy-faint">Reports</span>
          </div>
        </div>

        <div className="px-5 py-4 space-y-3">
          {/* Course header */}
          <div
            data-course-header=""
            className="mb-2"
            style={{ opacity: 0 }}
          >
            <p className="text-[9px] font-body-medium text-copy-faint uppercase tracking-eyebrow mb-1">
              Required Training — Q1 2026
            </p>
            <p className="font-heading text-body-sm tracking-heading text-dark">
              Leadership Development
            </p>
          </div>

          {/* Boring traditional modules */}
          {boringItems.map((item) => (
            <div
              key={item.title}
              data-boring=""
              className="flex items-center gap-3 p-3 rounded-brand-sm border border-border bg-surface"
              style={{ opacity: 0 }}
            >
              <div className="w-5 h-5 rounded-full border-2 border-copy-faint/30 shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-caption font-body-medium text-copy-mid">{item.title}</p>
                <p className="text-[9px] text-copy-faint">{item.type}</p>
              </div>
              <span className="text-[9px] text-copy-faint shrink-0">{item.time}</span>
            </div>
          ))}

          {/* Ambr AI module — stands out */}
          <div className="relative">
            {/* Glow behind */}
            <div
              data-ambr-glow=""
              className="absolute -inset-1 rounded-brand bg-accent-soft/15 blur-sm"
              style={{ opacity: 0 }}
            />

            <div
              data-ambr-module=""
              className="relative flex items-start gap-3 p-3 rounded-brand-sm border border-accent-soft/50 bg-accent-whisper"
              style={{ opacity: 0 }}
            >
              {/* Progress circle */}
              <div className="w-5 h-5 rounded-full border-2 border-accent-soft flex items-center justify-center shrink-0 mt-0.5">
                <div className="w-2 h-2 rounded-full bg-accent-soft" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <p className="text-caption font-body-medium text-dark">Performance Feedback</p>
                  {/* Interactive badge */}
                  <span
                    data-ambr-badge=""
                    className="text-[8px] font-body-medium uppercase tracking-eyebrow text-accent bg-accent/10 px-1.5 py-0.5 rounded"
                    style={{ opacity: 0 }}
                  >
                    AI Simulation
                  </span>
                </div>

                <p className="text-[9px] text-copy-mid mb-2">
                  Practice realistic conversations with AI-powered characters
                </p>

                {/* Progress bar */}
                <div
                  data-ambr-details=""
                  className="flex items-center gap-3"
                  style={{ opacity: 0 }}
                >
                  <div className="flex-1 h-1.5 rounded-full bg-surface-white overflow-hidden">
                    <div
                      data-ambr-progress=""
                      className="h-full rounded-full bg-accent-soft origin-left"
                      style={{ width: '71%', transform: 'scaleX(0)' }}
                    />
                  </div>
                  <span className="text-caption text-accent shrink-0">5/7</span>
                </div>
              </div>

              {/* Sparkle */}
              <div
                data-sparkle=""
                className="absolute -top-2 -right-2"
                style={{ opacity: 0 }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-accent">
                  <path d="M8 1l1.5 4.5L14 8l-4.5 1.5L8 15l-1.5-5.5L2 8l4.5-2.5L8 1Z" fill="currentColor" opacity="0.6" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MockFrame>
  )
}
