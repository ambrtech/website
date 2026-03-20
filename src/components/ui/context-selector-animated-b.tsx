'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { gsapRevealEase } from '@/lib/easing'
import { MockFrame } from '@/components/ui/mock-frame'

/* ---------------------------------------------------------
   Concept B: "The Slider Board"

   Inspired by the real product's character design screen.
   Personality sliders animate to different positions,
   trait tags get selected/deselected, and a relationship
   context radio button gets chosen — like watching an
   L&D admin thoughtfully tuning a character in real-time.
   --------------------------------------------------------- */

const personalityOptions = [
  { label: 'Challenging', sub: 'Frustrated, Demanding', active: true },
  { label: 'Cooperative', sub: 'Friendly, Enthusiastic', active: false },
  { label: 'Professional', sub: 'Diplomatic, Analytical', active: false },
  { label: 'Uncertain', sub: 'Anxious, Confused', active: false },
  { label: 'Assertive', sub: 'Confident, Direct', active: false },
]

const contextOptions = [
  { label: 'First meeting', detail: 'No prior history', selected: false },
  { label: 'Ongoing relationship', detail: 'Regular contact', selected: false },
  { label: 'Escalated situation', detail: 'Previous attempts failed', selected: false },
]

export function ContextSelectorAnimatedB() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const el = containerRef.current
      if (!el) return

      const header = el.querySelector('[data-header]')
      const nameField = el.querySelector('[data-name-field]')
      const roleField = el.querySelector('[data-role-field]')
      const sectionPersonality = el.querySelector('[data-section-personality]')
      const personalityCells = el.querySelectorAll('[data-personality]')
      const activeHighlight = el.querySelector('[data-personality-active]')
      const selectedTraits = el.querySelector('[data-selected-traits]')
      const traitTags = el.querySelectorAll('[data-trait-tag]')
      const sectionContext = el.querySelector('[data-section-context]')
      const contextRadios = el.querySelectorAll('[data-context-radio]')
      const selectedDot = el.querySelector('[data-selected-dot]')
      const continueBtn = el.querySelector('[data-continue-btn]')

      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.8,
        defaults: { ease: gsapRevealEase },
      })

      /* Initial state */
      tl.set(header, { opacity: 0, y: -10 })
      tl.set(nameField, { opacity: 0, y: 8 })
      tl.set(roleField, { opacity: 0, y: 8 })
      tl.set(sectionPersonality, { opacity: 0 })
      tl.set(personalityCells, { opacity: 0, scale: 0.9 })
      tl.set(activeHighlight, { borderColor: 'transparent', boxShadow: 'none' })
      tl.set(selectedTraits, { opacity: 0, y: 6 })
      tl.set(traitTags, { opacity: 0, scale: 0.7 })
      tl.set(sectionContext, { opacity: 0 })
      tl.set(contextRadios, { opacity: 0, x: -8 })
      tl.set(selectedDot, { scale: 0 })
      tl.set(continueBtn, { opacity: 0, y: 8 })

      /* Phase 1: Header + name/role fields appear */
      tl.to(header, { opacity: 1, y: 0, duration: 0.4 })
      tl.to(nameField, { opacity: 1, y: 0, duration: 0.35 }, '-=0.15')
      tl.to(roleField, { opacity: 1, y: 0, duration: 0.35 }, '-=0.15')

      /* Phase 2: Personality section fades in */
      tl.to(sectionPersonality, { opacity: 1, duration: 0.3 })
      tl.to(personalityCells, {
        opacity: 1,
        scale: 1,
        duration: 0.3,
        stagger: 0.08,
      })

      /* Phase 3: "Challenging" gets selected — border highlight */
      tl.to({}, { duration: 0.4 })
      tl.to(activeHighlight, {
        borderColor: '#D47234',
        boxShadow: '0 0 0 2px rgba(212, 114, 52, 0.12)',
        duration: 0.35,
        ease: 'power2.out',
      })

      /* Phase 4: Selected traits appear as tags */
      tl.to(selectedTraits, { opacity: 1, y: 0, duration: 0.3 })
      tl.to(traitTags, {
        opacity: 1,
        scale: 1,
        duration: 0.25,
        stagger: 0.12,
        ease: 'back.out(2)',
      })

      /* Phase 5: Context section appears */
      tl.to(sectionContext, { opacity: 1, duration: 0.3 })
      tl.to(contextRadios, {
        opacity: 1,
        x: 0,
        duration: 0.3,
        stagger: 0.12,
      })

      /* Phase 6: "Escalated situation" gets selected */
      tl.to({}, { duration: 0.3 })
      tl.to(selectedDot, { scale: 1, duration: 0.25, ease: 'back.out(3)' })

      /* Phase 7: Continue button appears */
      tl.to(continueBtn, { opacity: 1, y: 0, duration: 0.35 })

      /* Phase 8: Button press effect */
      tl.to({}, { duration: 0.5 })
      tl.to(continueBtn, { scale: 0.94, duration: 0.08, ease: 'power2.in' })
      tl.to(continueBtn, {
        scale: 1,
        boxShadow: '0 0 12px 3px rgba(212, 114, 52, 0.25)',
        duration: 0.15,
        ease: 'power2.out',
      })

      /* Phase 9: Hold */
      tl.to({}, { duration: 2.5 })

      /* Phase 10: Fade out */
      tl.to(el.firstElementChild, {
        opacity: 0,
        duration: 0.9,
        ease: 'power1.inOut',
      })
    },
    { scope: containerRef }
  )

  return (
    <MockFrame ref={containerRef} height="standard">
      <div className="absolute inset-0 px-5 py-6 md:px-7">
        {/* Header */}
        <div data-header="" className="mb-4" style={{ opacity: 0 }}>
          <h3 className="font-heading text-body tracking-heading text-dark mb-0.5">
            Design your conversation partner
          </h3>
          <p className="text-caption text-copy-light">
            Customize the AI character for this scenario
          </p>
        </div>

        {/* Name + Role fields */}
        <div className="grid grid-cols-2 gap-3 mb-5">
          <div data-name-field="" style={{ opacity: 0 }}>
            <label className="text-[10px] font-body-medium text-copy-light uppercase tracking-eyebrow block mb-1">
              Character Name
            </label>
            <div className="px-3 py-2 rounded-brand-sm border border-border bg-surface-white">
              <span className="text-caption text-dark font-body">Lucas</span>
            </div>
          </div>
          <div data-role-field="" style={{ opacity: 0 }}>
            <label className="text-[10px] font-body-medium text-copy-light uppercase tracking-eyebrow block mb-1">
              Character Role
            </label>
            <div className="px-3 py-2 rounded-brand-sm border border-border bg-surface-white">
              <span className="text-caption text-dark font-body">Procurement Manager</span>
            </div>
          </div>
        </div>

        {/* Personality section */}
        <div data-section-personality="" className="mb-4" style={{ opacity: 0 }}>
          <p className="text-[10px] font-body-medium uppercase tracking-eyebrow text-copy-light mb-2">
            Personality
          </p>
          <div className="grid grid-cols-3 gap-1.5 mb-2.5">
            {personalityOptions.slice(0, 3).map((opt) => (
              <div
                key={opt.label}
                data-personality=""
                {...(opt.active ? { 'data-personality-active': '' } : {})}
                className="px-2.5 py-2 rounded-brand-sm border border-border bg-surface-white text-center"
                style={{ opacity: 0 }}
              >
                <p className="text-caption font-body-medium text-dark leading-tight">{opt.label}</p>
                <p className="text-[9px] text-copy-faint mt-0.5">{opt.sub}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-1.5">
            {personalityOptions.slice(3).map((opt) => (
              <div
                key={opt.label}
                data-personality=""
                className="px-2.5 py-2 rounded-brand-sm border border-border bg-surface-white text-center"
                style={{ opacity: 0 }}
              >
                <p className="text-caption font-body-medium text-dark leading-tight">{opt.label}</p>
                <p className="text-[9px] text-copy-faint mt-0.5">{opt.sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Selected traits */}
        <div data-selected-traits="" className="mb-5" style={{ opacity: 0 }}>
          <p className="text-[10px] font-body-medium text-copy-light mb-1.5">Selected traits:</p>
          <div className="flex gap-1.5">
            {['Skeptical', 'Demanding', 'Technical'].map((tag) => (
              <span
                key={tag}
                data-trait-tag=""
                className="px-2.5 py-1 rounded-full bg-accent/10 text-[10px] font-body-medium text-accent"
                style={{ opacity: 0 }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Relationship context */}
        <div data-section-context="" className="mb-4" style={{ opacity: 0 }}>
          <p className="text-[10px] font-body-medium uppercase tracking-eyebrow text-copy-light mb-2">
            Relationship Context
          </p>
          <div className="space-y-1.5">
            {contextOptions.map((opt, i) => (
              <div
                key={opt.label}
                data-context-radio=""
                className="flex items-center gap-2.5 px-3 py-2 rounded-brand-sm bg-surface-white border border-border"
                style={{ opacity: 0 }}
              >
                <div className="w-4 h-4 rounded-full border-2 border-copy-faint flex items-center justify-center shrink-0">
                  {i === 2 && (
                    <div
                      data-selected-dot=""
                      className="w-2 h-2 rounded-full bg-accent"
                      style={{ transform: 'scale(0)' }}
                    />
                  )}
                </div>
                <div>
                  <span className="text-caption font-body-medium text-dark">{opt.label}</span>
                  <span className="text-[10px] text-copy-faint ml-2">{opt.detail}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Continue button */}
        <div className="flex justify-end">
          <span
            data-continue-btn=""
            className="inline-flex items-center gap-1.5 text-caption font-body-medium text-surface-white bg-accent px-5 py-2 rounded-full"
            style={{ opacity: 0 }}
          >
            Continue to Context
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M3.5 2L7 5L3.5 8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </div>
    </MockFrame>
  )
}
