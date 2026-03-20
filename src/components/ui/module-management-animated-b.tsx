'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { gsapRevealEase } from '@/lib/easing'
import { MockFrame } from '@/components/ui/mock-frame'

/* ---------------------------------------------------------
   Concept B: "Content Library"

   A library-style grid where module cards appear as content
   tiles. Each tile reveals its title, a brief description,
   and then an "enabled" checkmark badge or "available" tag
   gets stamped onto it. Some tiles also get user-count
   pills showing assignment scope. Feels like browsing a
   curated collection and selectively activating items.
   --------------------------------------------------------- */

function CheckIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="shrink-0">
      <path
        d="M2 5.5L4 7.5L8 3"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const modules = [
  { name: 'Difficult Conversations', icon: 'DC', enabled: true, users: 'All users', desc: 'Core management' },
  { name: 'AI Coaching', icon: 'AC', enabled: true, users: '5 users', desc: 'Advanced coaching' },
  { name: 'Presentations', icon: 'PR', enabled: false, users: null, desc: 'AI audience practice' },
  { name: 'Sales Objections', icon: 'SO', enabled: true, users: 'Sales Team', desc: 'Objection handling' },
]

export function ModuleManagementAnimatedB() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const el = containerRef.current
      if (!el) return

      const card = el.querySelector('[data-card]')
      const header = el.querySelector('[data-header]')
      const tiles = el.querySelectorAll('[data-tile]')
      const icons = el.querySelectorAll('[data-icon]')
      const names = el.querySelectorAll('[data-tile-name]')
      const descs = el.querySelectorAll('[data-tile-desc]')
      const badges = el.querySelectorAll('[data-badge]')
      const userPills = el.querySelectorAll('[data-user-pill]')
      const divider = el.querySelector('[data-divider]')
      const footer = el.querySelector('[data-footer]')

      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.8,
        defaults: { ease: gsapRevealEase },
      })

      /* Initial state */
      tl.set(card, { opacity: 0 })
      tl.set(header, { opacity: 0, y: -6 })
      tl.set(tiles, { opacity: 0, scale: 0.9, y: 8 })
      tl.set(icons, { opacity: 0, scale: 0.5 })
      tl.set(names, { opacity: 0, y: 4 })
      tl.set(descs, { opacity: 0 })
      tl.set(badges, { opacity: 0, scale: 0 })
      tl.set(userPills, { opacity: 0, y: 4 })
      tl.set(divider, { scaleX: 0 })
      tl.set(footer, { opacity: 0, y: 6 })

      /* Phase 1: Card */
      tl.to(card, { opacity: 1, duration: 0.5, ease: 'power1.out' })

      /* Phase 2: Header */
      tl.to(header, { opacity: 1, y: 0, duration: 0.4 })

      /* Phase 3: Tiles pop in as a 2x2 grid */
      tl.to(tiles, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.35,
        stagger: 0.1,
        ease: 'power2.out',
      })

      /* Phase 4: Icons appear */
      tl.to(icons, {
        opacity: 1,
        scale: 1,
        duration: 0.3,
        stagger: 0.08,
        ease: 'back.out(2)',
      }, '-=0.15')

      /* Phase 5: Names */
      tl.to(names, {
        opacity: 1,
        y: 0,
        duration: 0.3,
        stagger: 0.06,
      }, '-=0.1')

      /* Phase 6: Descriptions */
      tl.to(descs, {
        opacity: 1,
        duration: 0.25,
        stagger: 0.06,
      }, '-=0.1')

      /* Phase 7: Enabled/Available badges stamp on */
      tl.to(badges, {
        opacity: 1,
        scale: 1,
        duration: 0.25,
        stagger: 0.12,
        ease: 'back.out(3)',
      }, '+=0.15')

      /* Phase 8: User pills */
      tl.to(userPills, {
        opacity: 1,
        y: 0,
        duration: 0.3,
        stagger: 0.1,
      })

      /* Phase 9: Divider + footer */
      tl.to(divider, { scaleX: 1, duration: 0.4, ease: 'power2.inOut' })
      tl.to(footer, { opacity: 1, y: 0, duration: 0.35 }, '-=0.15')

      /* Phase 10: Hold */
      tl.to({}, { duration: 2.5 })

      /* Phase 11: Fade out */
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
        <div className="flex items-center justify-between mb-4">
          <span
            data-header=""
            className="text-eyebrow-sm font-body-medium uppercase tracking-eyebrow text-copy-light"
            style={{ opacity: 0 }}
          >
            Content Library
          </span>
        </div>

        {/* 2x2 grid of module tiles */}
        <div className="grid grid-cols-2 gap-2.5">
          {modules.map((mod) => (
            <div
              key={mod.name}
              data-tile=""
              className="p-3 rounded-brand-sm border border-border bg-surface-white flex flex-col"
              style={{ opacity: 0 }}
            >
              {/* Icon + badge row */}
              <div className="flex items-start justify-between mb-2">
                <div
                  data-icon=""
                  className={`w-8 h-8 rounded-brand-sm flex items-center justify-center text-detail font-body-medium ${
                    mod.enabled
                      ? 'bg-accent/10 text-accent'
                      : 'bg-surface-alt text-copy-faint'
                  }`}
                  style={{ opacity: 0 }}
                >
                  {mod.icon}
                </div>
                <span
                  data-badge=""
                  className={`inline-flex items-center gap-1 text-[9px] font-body-medium px-1.5 py-0.5 rounded-full ${
                    mod.enabled
                      ? 'bg-accent/10 text-accent'
                      : 'bg-surface-alt text-copy-faint border border-border'
                  }`}
                  style={{ opacity: 0 }}
                >
                  {mod.enabled && <CheckIcon />}
                  {mod.enabled ? 'Active' : 'Available'}
                </span>
              </div>

              {/* Name */}
              <p
                data-tile-name=""
                className="text-caption font-body-medium text-dark leading-tight mb-0.5"
                style={{ opacity: 0 }}
              >
                {mod.name}
              </p>

              {/* Desc */}
              <p
                data-tile-desc=""
                className="text-detail text-copy-faint leading-snug mb-2"
                style={{ opacity: 0 }}
              >
                {mod.desc}
              </p>

              {/* User scope pill */}
              {mod.users && (
                <span
                  data-user-pill=""
                  className="text-[9px] text-accent mt-auto"
                  style={{ opacity: 0 }}
                >
                  {mod.users}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Divider + footer */}
        <div
          data-divider=""
          className="h-px bg-gradient-to-r from-accent-soft via-accent-soft/40 to-transparent mt-4 mb-2.5 origin-left"
          style={{ transform: 'scaleX(0)' }}
        />
        <p
          data-footer=""
          className="text-caption text-copy-light"
          style={{ opacity: 0 }}
        >
          3 of 4 modules active
        </p>
      </div>
    </MockFrame>
  )
}
