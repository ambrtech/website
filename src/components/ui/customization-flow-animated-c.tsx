'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { gsapRevealEase } from '@/lib/easing'
import { FileText, Users, CreditCard, Target } from 'lucide-react'

/* ─────────────────────────────────────────────────────
   Concept C: "The Distillation"

   Four context fragments orbit/hover around a central
   vessel. They compress inward and dissolve. The vessel
   glows, then a fully-formed scenario card crystallizes
   outward from the center — like ingredients becoming
   a finished dish.
   ───────────────────────────────────────────────────── */

const ingredients = [
  { Icon: FileText, label: 'Sales methodology', shorthand: 'MEDDPICC', position: 'top-left' },
  { Icon: Users, label: 'Buyer personas', shorthand: '3 DMs', position: 'top-right' },
  { Icon: CreditCard, label: 'Pricing model', shorthand: '3 tiers', position: 'bottom-left' },
  { Icon: Target, label: 'Competitors', shorthand: '4 rivals', position: 'bottom-right' },
]

/* Position offsets for the four corners around the center */
const positions: Record<string, { x: number; y: number }> = {
  'top-left': { x: -120, y: -90 },
  'top-right': { x: 120, y: -90 },
  'bottom-left': { x: -120, y: 90 },
  'bottom-right': { x: 120, y: 90 },
}

export function CustomizationFlowAnimatedC() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const el = containerRef.current
      if (!el) return

      const fragments = el.querySelectorAll('[data-fragment]')
      const vessel = el.querySelector('[data-vessel]')
      const vesselGlow = el.querySelector('[data-vessel-glow]')
      const outputCard = el.querySelector('[data-result]')
      const outputTitle = el.querySelector('[data-result-title]')
      const outputBody = el.querySelector('[data-result-body]')
      const outputMeta = el.querySelectorAll('[data-result-meta]')
      const labelBefore = el.querySelector('[data-label-before]')
      const labelAfter = el.querySelector('[data-label-after]')

      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 1.5,
        defaults: { ease: gsapRevealEase },
      })

      /* Initial states — position each fragment at its orbital offset */
      fragments.forEach((frag, i) => {
        const pos = positions[ingredients[i].position]
        tl.set(frag, { opacity: 0, scale: 0.7, x: pos.x, y: pos.y })
      })
      tl.set(vessel, { opacity: 0, scale: 0.4 })
      tl.set(vesselGlow, { opacity: 0, scale: 0.3 })
      tl.set(outputCard, { opacity: 0, scale: 0.6 })
      tl.set(outputTitle, { opacity: 0, y: 10 })
      tl.set(outputBody, { opacity: 0 })
      tl.set(outputMeta, { opacity: 0, y: 6 })
      tl.set(labelBefore, { opacity: 0 })
      tl.set(labelAfter, { opacity: 0 })

      /* Phase 1: Label + fragments appear at their orbital positions */
      tl.to(labelBefore, { opacity: 1, duration: 0.3 })
      tl.to(fragments, {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        stagger: 0.15,
        ease: 'back.out(1.5)',
      })

      /* Phase 2: Gentle floating hold */
      tl.to({}, { duration: 1.2 })

      /* Phase 3: Vessel appears at center */
      tl.to(vessel, {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: 'power2.out',
      })

      /* Phase 4: Fragments compress toward center */
      tl.to(fragments, {
        x: 0,
        y: 0,
        scale: 0.3,
        opacity: 0,
        duration: 0.9,
        stagger: 0.08,
        ease: 'power3.in',
      })
      tl.to(labelBefore, { opacity: 0, duration: 0.3 }, '-=0.6')

      /* Phase 5: Vessel pulses and glows */
      tl.to(vesselGlow, {
        opacity: 1,
        scale: 1.2,
        duration: 0.4,
        ease: 'power1.out',
      })
      tl.to(vessel, {
        scale: 1.15,
        duration: 0.3,
        ease: 'power1.inOut',
      }, '-=0.3')
      tl.to(vessel, {
        scale: 0.8,
        opacity: 0.5,
        duration: 0.3,
      })
      tl.to(vesselGlow, {
        opacity: 0,
        scale: 0.5,
        duration: 0.3,
      }, '-=0.2')

      /* Phase 6: Result card crystallizes outward from center */
      tl.to(vessel, { opacity: 0, scale: 0.3, duration: 0.2 })
      tl.to(labelAfter, { opacity: 1, duration: 0.3 }, '-=0.1')
      tl.to(outputCard, {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: 'power2.out',
      }, '-=0.2')
      tl.to(outputTitle, {
        opacity: 1,
        y: 0,
        duration: 0.4,
      })
      tl.to(outputBody, {
        opacity: 1,
        duration: 0.5,
      }, '-=0.2')
      tl.to(outputMeta, {
        opacity: 1,
        y: 0,
        duration: 0.3,
        stagger: 0.1,
      }, '-=0.2')

      /* Phase 7: Hold for reading */
      tl.to({}, { duration: 2.5 })

      /* Phase 8: Fade out for loop */
      tl.to([outputCard, labelAfter], {
        opacity: 0,
        duration: 0.8,
        ease: 'power1.inOut',
      })
    },
    { scope: containerRef }
  )

  return (
    <div ref={containerRef} className="relative min-h-[420px] flex items-center justify-center">
      {/* ── Top label: "Your context" → "Your simulation" ── */}
      <div className="absolute top-4 left-0 right-0 flex justify-center">
        <p
          data-label-before
          className="text-[10px] font-body-medium uppercase tracking-eyebrow text-copy-light"
          style={{ opacity: 0 }}
        >
          Your context
        </p>
        <p
          data-label-after
          className="text-[10px] font-body-medium uppercase tracking-eyebrow text-accent"
          style={{ opacity: 0, position: 'absolute' }}
        >
          Your simulation
        </p>
      </div>

      {/* ── Orbiting fragments (positioned via GSAP) ── */}
      {ingredients.map((item, i) => (
        <div
          key={i}
          data-fragment
          className="absolute left-1/2 top-1/2 z-10 -ml-[50px]"
          style={{ opacity: 0 }}
        >
          <div className="flex items-center gap-2 px-3 py-2 rounded-brand-sm bg-surface border border-border shadow-card min-w-[100px]">
            <item.Icon className="w-3.5 h-3.5 text-accent shrink-0" />
            <div>
              <p className="text-[10px] font-body-medium text-dark leading-tight">
                {item.label}
              </p>
              <p className="text-[9px] text-copy-faint mt-0.5">{item.shorthand}</p>
            </div>
          </div>
        </div>
      ))}

      {/* ── Central vessel ── */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        <div
          data-vessel-glow
          className="absolute -inset-4 rounded-full"
          style={{
            opacity: 0,
            background: 'radial-gradient(circle, rgba(212,114,52,0.2) 0%, transparent 70%)',
          }}
        />
        <div
          data-vessel
          className="w-12 h-12 rounded-full bg-accent flex items-center justify-center"
          style={{ opacity: 0 }}
        >
          {/* Ambr "A" mark — white, extracted from brand wordmark */}
          <svg width="20" height="22" viewBox="0 0 20 22" fill="none" className="text-surface-white">
            <path
              d="M10 2L1 20h3.5l1.8-4h7.4l1.8 4H19L10 2Zm-2.4 11.5L10 7.2l2.4 6.3H7.6Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>

      {/* ── Result card ── */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-[85%] max-w-[380px]">
        <div
          data-result
          className="rounded-brand-sm border border-accent-soft/40 bg-accent-whisper/60 p-5 space-y-3"
          style={{ opacity: 0 }}
        >
          {/* Header */}
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="text-[10px] font-body-medium uppercase tracking-eyebrow text-accent">
              Generated Simulation
            </span>
          </div>

          {/* Character + title */}
          <div className="flex items-center gap-2.5 mb-1">
            <div className="w-8 h-8 rounded-full bg-accent-soft/40 border border-accent-soft flex items-center justify-center">
              <span className="text-[10px] font-body-medium text-accent">CFO</span>
            </div>
            <div>
              <p className="text-caption font-body-medium text-dark leading-tight">David Chen</p>
              <p className="text-[9px] text-copy-faint">Chief Financial Officer</p>
            </div>
          </div>

          <p
            data-result-title
            className="text-caption font-heading tracking-heading text-dark leading-snug"
            style={{ opacity: 0 }}
          >
            Enterprise renewal negotiation
          </p>

          <p
            data-result-body
            className="text-[11px] text-copy-mid leading-relaxed"
            style={{ opacity: 0 }}
          >
            CFO pushes back on pricing using your competitor&apos;s offer,
            referencing your packaging structure by name. Apply your
            methodology to hold the deal.
          </p>

          {/* Source tags */}
          <div className="flex flex-wrap gap-1.5 pt-2 border-t border-accent-soft/20">
            {['Sales methodology', 'Buyer personas', 'Pricing'].map((tag, i) => (
              <span
                key={i}
                data-result-meta
                className="text-[9px] px-2 py-0.5 rounded-full bg-surface-white border border-border text-copy-light"
                style={{ opacity: 0 }}
              >
                From: {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
