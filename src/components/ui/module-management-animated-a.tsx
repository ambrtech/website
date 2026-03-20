'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { gsapRevealEase } from '@/lib/easing'
import { MockFrame } from '@/components/ui/mock-frame'

/* ---------------------------------------------------------
   Concept A: "Toggle Dashboard"

   Module cards appear in a stack, each with a toggle switch.
   The toggles flip on one by one — the first two activate
   (switch slides right, color fills), the third stays off.
   Then scope labels reveal under each active module,
   showing which users or groups have access.
   --------------------------------------------------------- */

const modules = [
  { name: 'Difficult Conversations', desc: 'Core management scenarios', enabled: true, scope: 'All users' },
  { name: 'AI Coaching', desc: 'Advanced coaching and mentoring', enabled: true, scope: '5 selected users' },
  { name: 'Presentations', desc: 'Presentation practice with AI audience', enabled: false, scope: 'Disabled' },
]

export function ModuleManagementAnimatedA() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const el = containerRef.current
      if (!el) return

      const card = el.querySelector('[data-card]')
      const header = el.querySelector('[data-header]')
      const moduleCards = el.querySelectorAll('[data-module-card]')
      const moduleNames = el.querySelectorAll('[data-module-name]')
      const moduleDescs = el.querySelectorAll('[data-module-desc]')
      const toggleTracks = el.querySelectorAll('[data-toggle-track]')
      const toggleThumbs = el.querySelectorAll('[data-toggle-thumb]')
      const scopeLabels = el.querySelectorAll('[data-scope]')
      const summary = el.querySelector('[data-summary]')

      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.8,
        defaults: { ease: gsapRevealEase },
      })

      /* Initial state */
      tl.set(card, { opacity: 0 })
      tl.set(header, { opacity: 0, y: -6 })
      tl.set(moduleCards, { opacity: 0, y: 10 })
      tl.set(moduleNames, { opacity: 0, x: -6 })
      tl.set(moduleDescs, { opacity: 0 })
      tl.set(toggleTracks, { opacity: 0 })
      tl.set(toggleThumbs, { x: 0 })
      tl.set(scopeLabels, { opacity: 0, y: 4 })
      tl.set(summary, { opacity: 0, y: 6 })

      /* Phase 1: Card appears */
      tl.to(card, { opacity: 1, duration: 0.5, ease: 'power1.out' })

      /* Phase 2: Header */
      tl.to(header, { opacity: 1, y: 0, duration: 0.4 })

      /* Phase 3: Module cards slide up */
      tl.to(moduleCards, {
        opacity: 1,
        y: 0,
        duration: 0.4,
        stagger: 0.15,
        ease: 'power2.out',
      })

      /* Phase 4: Names and descriptions reveal */
      tl.to(moduleNames, {
        opacity: 1,
        x: 0,
        duration: 0.3,
        stagger: 0.1,
      }, '-=0.2')
      tl.to(moduleDescs, {
        opacity: 1,
        duration: 0.25,
        stagger: 0.1,
      }, '-=0.15')

      /* Phase 5: Toggle tracks appear */
      tl.to(toggleTracks, {
        opacity: 1,
        duration: 0.3,
        stagger: 0.1,
      })

      /* Phase 6: Toggle switches animate — first two flip ON */
      // Module 0: flip on
      tl.to(toggleThumbs[0], {
        x: 16,
        duration: 0.35,
        ease: 'back.out(2)',
      }, '+=0.15')

      // Module 1: flip on (slightly delayed)
      tl.to(toggleThumbs[1], {
        x: 16,
        duration: 0.35,
        ease: 'back.out(2)',
      }, '-=0.1')

      // Module 2 stays off — no animation needed

      /* Phase 7: Scope labels appear under enabled modules */
      tl.to(scopeLabels, {
        opacity: 1,
        y: 0,
        duration: 0.3,
        stagger: 0.12,
      }, '+=0.1')

      /* Phase 8: Summary */
      tl.to(summary, { opacity: 1, y: 0, duration: 0.35 })

      /* Phase 9: Hold */
      tl.to({}, { duration: 2.8 })

      /* Phase 10: Fade out */
      tl.to(card, {
        opacity: 0,
        duration: 0.9,
        ease: 'power1.inOut',
      })
    },
    { scope: containerRef }
  )

  return (
    <MockFrame ref={containerRef} height="standard">
      <div
        data-card=""
        className="absolute inset-0 rounded-brand bg-accent-whisper bg-noise-fine px-5 py-5"
        style={{ opacity: 0, backgroundBlendMode: 'overlay' }}
      >
        {/* Header */}
        <div className="mb-4">
          <span
            data-header=""
            className="text-eyebrow-sm font-body-medium uppercase tracking-eyebrow text-copy-light"
            style={{ opacity: 0 }}
          >
            Module Management
          </span>
        </div>

        {/* Module rows */}
        <div className="space-y-3">
          {modules.map((mod, i) => (
            <div
              key={mod.name}
              data-module-card=""
              className="p-3.5 rounded-brand-sm border border-border bg-surface-white"
              style={{ opacity: 0 }}
            >
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex-1 min-w-0">
                  <p
                    data-module-name=""
                    className="text-caption font-body-medium text-dark"
                    style={{ opacity: 0 }}
                  >
                    {mod.name}
                  </p>
                  <p
                    data-module-desc=""
                    className="text-detail text-copy-faint"
                    style={{ opacity: 0 }}
                  >
                    {mod.desc}
                  </p>
                </div>
                {/* Toggle */}
                <div
                  data-toggle-track=""
                  className={`w-9 h-5 rounded-full relative shrink-0 ml-3 ${
                    mod.enabled ? 'bg-accent' : 'bg-surface-alt border border-border'
                  }`}
                  style={{ opacity: 0 }}
                >
                  <div
                    data-toggle-thumb=""
                    className="absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-surface-white shadow-sm"
                  />
                </div>
              </div>
              <span
                data-scope=""
                className={`text-detail ${i < 2 ? 'text-accent' : 'text-copy-faint'}`}
                style={{ opacity: 0 }}
              >
                {mod.scope}
              </span>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div
          data-summary=""
          className="mt-4 flex items-center gap-2 text-caption text-copy-light"
          style={{ opacity: 0 }}
        >
          <span className="text-accent font-body-medium">2 active</span>
          <span className="text-copy-faint">&middot;</span>
          <span>1 disabled</span>
        </div>
      </div>
    </MockFrame>
  )
}
