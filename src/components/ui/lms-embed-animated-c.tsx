'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { gsapRevealEase } from '@/lib/easing'
import { MockFrame } from '@/components/ui/mock-frame'

/* ─────────────────────────────────────────────────────
   LMS Embed C: "Comes Alive"

   A SCORM/module list in a generic LMS where everything
   is static and grey — then one module transforms. The
   flat row expands, warm accent color floods in, a mini
   character avatar appears, and the text changes from
   "Compliance Training Module 4" to the rich Ambr AI
   experience. It's the moment the LMS goes from boring
   to alive. The other modules stay grey, emphasizing
   the contrast.
   ───────────────────────────────────────────────────── */

export function LmsEmbedAnimatedC() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const el = containerRef.current
      if (!el) return

      const shell = el.querySelector('[data-shell]')
      const nav = el.querySelector('[data-nav]')
      const searchBar = el.querySelector('[data-search]')
      const modules = el.querySelectorAll('[data-module]')
      const targetRow = el.querySelector('[data-target-row]')
      const targetExpanded = el.querySelector('[data-target-expanded]')
      const targetAvatar = el.querySelector('[data-target-avatar]')
      const targetTitle = el.querySelector('[data-target-title]')
      const targetMeta = el.querySelector('[data-target-meta]')
      const targetProgress = el.querySelector('[data-target-progress]')
      const targetCta = el.querySelector('[data-target-cta]')
      const targetGlow = el.querySelector('[data-target-glow]')
      const ambrLogo = el.querySelector('[data-ambr-logo]')

      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.8,
        defaults: { ease: gsapRevealEase },
      })

      /* Initial state */
      tl.set(shell, { opacity: 0 })
      tl.set(nav, { opacity: 0, y: -6 })
      tl.set(searchBar, { opacity: 0 })
      tl.set(modules, { opacity: 0, y: 6 })
      tl.set(targetRow, { opacity: 1 })
      tl.set(targetExpanded, { opacity: 0, height: 0 })
      tl.set(targetAvatar, { opacity: 0, scale: 0.5 })
      tl.set(targetTitle, { opacity: 0 })
      tl.set(targetMeta, { opacity: 0, y: 4 })
      tl.set(targetProgress, { scaleX: 0 })
      tl.set(targetCta, { opacity: 0, scale: 0.9 })
      tl.set(targetGlow, { opacity: 0 })
      tl.set(ambrLogo, { opacity: 0, scale: 0.5 })

      /* Phase 1: Shell appears */
      tl.to(shell, { opacity: 1, duration: 0.5, ease: 'power1.out' })
      tl.to(nav, { opacity: 1, y: 0, duration: 0.3 }, '-=0.25')
      tl.to(searchBar, { opacity: 1, duration: 0.25 }, '-=0.1')

      /* Phase 2: Module rows appear */
      tl.to(modules, {
        opacity: 1,
        y: 0,
        duration: 0.25,
        stagger: 0.08,
      })

      /* Hold — boring module list */
      tl.to({}, { duration: 1.2 })

      /* Phase 3: Target row transforms — glow appears */
      tl.to(targetGlow, { opacity: 1, duration: 0.3 })

      /* Phase 4: Row expands to show Ambr content */
      tl.to(targetRow, { opacity: 0, duration: 0.2 })
      tl.to(targetExpanded, {
        opacity: 1,
        height: 'auto',
        duration: 0.5,
        ease: 'power2.out',
      })

      /* Phase 5: Ambr logo badge pops */
      tl.to(ambrLogo, { opacity: 1, scale: 1, duration: 0.3, ease: 'back.out(2)' }, '-=0.2')

      /* Phase 6: Character avatar appears */
      tl.to(targetAvatar, { opacity: 1, scale: 1, duration: 0.35, ease: 'back.out(2)' }, '-=0.1')

      /* Phase 7: Title transforms */
      tl.to(targetTitle, { opacity: 1, duration: 0.3 })

      /* Phase 8: Meta info + progress */
      tl.to(targetMeta, { opacity: 1, y: 0, duration: 0.3 })
      tl.to(targetProgress, { scaleX: 1, duration: 0.6, ease: 'power2.out' })

      /* Phase 9: CTA appears */
      tl.to(targetCta, { opacity: 1, scale: 1, duration: 0.35, ease: 'back.out(2)' })

      /* Hold — appreciate the transformation */
      tl.to({}, { duration: 2.8 })

      /* Phase 10: Everything fades */
      tl.to(
        [shell, nav, searchBar, ...modules, targetExpanded, targetAvatar, targetTitle, targetMeta, targetCta, targetGlow, ambrLogo],
        { opacity: 0, duration: 0.8, ease: 'power1.inOut' }
      )
    },
    { scope: containerRef }
  )

  const staticModules = [
    { num: '1', title: 'Workplace Harassment Prevention', type: 'Video + Quiz', status: 'Completed' },
    { num: '2', title: 'Information Security Basics', type: 'Slides + Quiz', status: 'Completed' },
    { num: '3', title: 'Equal Opportunities & Inclusion', type: 'Video', status: 'Completed' },
  ]

  return (
    <MockFrame ref={containerRef} height="tall">
      <div
        data-shell=""
        className="absolute inset-0 rounded-brand bg-surface-white border border-border overflow-hidden"
        style={{ opacity: 0 }}
      >
        {/* Nav */}
        <div
          data-nav=""
          className="flex items-center justify-between px-5 py-3 border-b border-border"
          style={{ opacity: 0 }}
        >
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded bg-dark/10" />
            <span className="text-caption font-body-medium text-copy-light">Learning Portal</span>
          </div>
          <span className="text-caption text-copy-faint">My Courses</span>
        </div>

        {/* Search bar */}
        <div className="px-5 pt-3 pb-2">
          <div
            data-search=""
            className="flex items-center gap-2 px-3 py-2 rounded-brand-sm bg-surface border border-border"
            style={{ opacity: 0 }}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-copy-faint">
              <circle cx="5" cy="5" r="3.5" stroke="currentColor" strokeWidth="1.2" />
              <path d="M8 8l2.5 2.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
            <span className="text-[10px] text-copy-faint">Search modules...</span>
          </div>
        </div>

        {/* Module list */}
        <div className="px-5 py-2 space-y-1.5">
          {/* Static completed modules */}
          {staticModules.map((mod) => (
            <div
              key={mod.num}
              data-module=""
              className="flex items-center gap-3 px-3 py-2.5 rounded-brand-sm border border-border bg-surface/50"
              style={{ opacity: 0 }}
            >
              <span className="text-[9px] font-body-medium text-copy-faint w-4 text-center">{mod.num}</span>
              <div className="w-4 h-4 rounded-full border-2 border-copy-faint/40 bg-copy-faint/10 flex items-center justify-center shrink-0">
                <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                  <path d="M1 3L3 5L7 1" stroke="currentColor" strokeWidth="1" strokeLinecap="round" className="text-copy-faint" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-caption text-copy-mid">{mod.title}</p>
                <p className="text-[8px] text-copy-faint">{mod.type}</p>
              </div>
              <span className="text-[8px] text-copy-faint shrink-0">{mod.status}</span>
            </div>
          ))}

          {/* Module 4 — the one that transforms */}
          <div data-module="" className="relative" style={{ opacity: 0 }}>
            {/* Glow behind */}
            <div
              data-target-glow=""
              className="absolute -inset-1.5 rounded-brand bg-accent-soft/15 blur-sm"
              style={{ opacity: 0 }}
            />

            {/* Static row (visible initially, fades when expanded appears) */}
            <div
              data-target-row=""
              className="relative flex items-center gap-3 px-3 py-2.5 rounded-brand-sm border border-border bg-surface/50"
            >
              <span className="text-[9px] font-body-medium text-copy-faint w-4 text-center">4</span>
              <div className="w-4 h-4 rounded-full border-2 border-copy-faint/30 shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-caption text-copy-mid">Performance Feedback Skills</p>
                <p className="text-[8px] text-copy-faint">Module</p>
              </div>
              <span className="text-[8px] text-copy-faint shrink-0">Not started</span>
            </div>

            {/* Expanded Ambr AI version (hidden initially) */}
            <div
              data-target-expanded=""
              className="relative rounded-brand-sm border border-accent-soft/50 bg-accent-whisper overflow-hidden"
              style={{ opacity: 0, height: 0 }}
            >
              <div className="p-3.5 space-y-2.5">
                {/* Top row: logo + title */}
                <div className="flex items-center gap-2.5">
                  <div
                    data-ambr-logo=""
                    className="w-6 h-6 rounded-brand-sm bg-accent-soft/40 flex items-center justify-center shrink-0"
                    style={{ opacity: 0 }}
                  >
                    <span className="text-[8px] font-body-medium text-accent">A</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[9px] font-body-medium text-copy-faint w-4 text-center">4</span>
                    <span
                      data-target-title=""
                      className="text-caption font-body-medium text-dark"
                      style={{ opacity: 0 }}
                    >
                      Performance Feedback — AI Simulation
                    </span>
                  </div>
                </div>

                {/* Character + description */}
                <div className="flex items-start gap-2.5">
                  <div
                    data-target-avatar=""
                    className="w-8 h-8 rounded-full bg-accent-soft/30 flex items-center justify-center shrink-0"
                    style={{ opacity: 0 }}
                  >
                    <span className="text-[9px] font-body-medium text-accent">SC</span>
                  </div>
                  <div
                    data-target-meta=""
                    className="flex-1"
                    style={{ opacity: 0 }}
                  >
                    <p className="text-[10px] text-copy-mid leading-relaxed">
                      Practice a difficult performance conversation with Sarah Chen,
                      an AI team lead who responds to your actual words.
                    </p>
                    <div className="flex items-center gap-2 mt-1.5">
                      <span className="text-[8px] font-body-medium uppercase tracking-eyebrow text-accent bg-accent/10 px-1.5 py-0.5 rounded">
                        Interactive
                      </span>
                      <span className="text-[8px] text-copy-faint">10 min</span>
                      <span className="text-[8px] text-copy-faint">3 objectives</span>
                    </div>
                  </div>
                </div>

                {/* Progress */}
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-1.5 rounded-full bg-surface-white overflow-hidden">
                    <div
                      data-target-progress=""
                      className="h-full rounded-full bg-accent-soft origin-left"
                      style={{ width: '0%', transform: 'scaleX(0)' }}
                    />
                  </div>
                  <span className="text-[9px] text-copy-faint shrink-0">Not started</span>
                </div>

                {/* CTA */}
                <div
                  data-target-cta=""
                  style={{ opacity: 0 }}
                >
                  <span className="inline-block rounded-brand-sm bg-accent text-surface-white px-4 py-1.5 text-caption font-body-medium">
                    Begin simulation
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Module 5 — stays static */}
          <div
            data-module=""
            className="flex items-center gap-3 px-3 py-2.5 rounded-brand-sm border border-border bg-surface/50"
            style={{ opacity: 0 }}
          >
            <span className="text-[9px] font-body-medium text-copy-faint w-4 text-center">5</span>
            <div className="w-4 h-4 rounded-full border-2 border-copy-faint/30 shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-caption text-copy-mid">Anti-Money Laundering Basics</p>
              <p className="text-[8px] text-copy-faint">Video + Quiz</p>
            </div>
            <span className="text-[8px] text-copy-faint shrink-0">Not started</span>
          </div>
        </div>
      </div>
    </MockFrame>
  )
}
