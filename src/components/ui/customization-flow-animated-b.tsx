'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { gsapRevealEase } from '@/lib/easing'
import { MockFrame } from '@/components/ui/mock-frame'
import { FileText, Users, CreditCard, Target } from 'lucide-react'

/* ─────────────────────────────────────────────────────
   Concept B: "The Split Reveal"

   A single card shows the "before" state (raw context)
   on the left half, then a warm curtain wipes across
   to reveal the "after" state (generated simulation)
   on the right half — a direct before → after metaphor.
   ───────────────────────────────────────────────────── */

const contextItems = [
  { Icon: FileText, label: 'Sales methodology', detail: 'MEDDPICC framework' },
  { Icon: Users, label: 'Buyer personas', detail: '3 decision-makers' },
  { Icon: CreditCard, label: 'Pricing model', detail: '3-tier, usage-based' },
  { Icon: Target, label: 'Competitors', detail: '4 mapped rivals' },
]

export function CustomizationFlowAnimatedB() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const el = containerRef.current
      if (!el) return

      const card = el.querySelector('[data-card]')
      const beforeSide = el.querySelector('[data-before]')
      const afterSide = el.querySelector('[data-after]')
      const curtain = el.querySelector('[data-curtain]')
      const beforeItems = el.querySelectorAll('[data-before-item]')
      const beforeLabel = el.querySelector('[data-before-label]')
      const afterLabel = el.querySelector('[data-after-label]')
      const afterTitle = el.querySelector('[data-after-title]')
      const afterDesc = el.querySelector('[data-after-desc]')
      const afterTags = el.querySelectorAll('[data-after-tag]')
      const sparkle = el.querySelector('[data-sparkle]')

      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 1.2,
        defaults: { ease: gsapRevealEase },
      })

      /* Initial states */
      tl.set(card, { opacity: 0, scale: 0.95 })
      tl.set(beforeItems, { opacity: 0, y: 12 })
      tl.set(beforeLabel, { opacity: 0 })
      tl.set(curtain, { scaleX: 0 })
      tl.set(afterSide, { opacity: 0 })
      tl.set(afterLabel, { opacity: 0 })
      tl.set(afterTitle, { opacity: 0, y: 8 })
      tl.set(afterDesc, { opacity: 0, y: 8 })
      tl.set(afterTags, { opacity: 0, scale: 0.8 })
      tl.set(sparkle, { opacity: 0, scale: 0 })

      /* Phase 1: Card appears */
      tl.to(card, {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: 'power2.out',
      })

      /* Phase 2: Before label + items appear */
      tl.to(beforeLabel, { opacity: 1, duration: 0.3 })
      tl.to(beforeItems, {
        opacity: 1,
        y: 0,
        duration: 0.35,
        stagger: 0.25,
      })

      /* Phase 3: Hold — let them read the "before" */
      tl.to({}, { duration: 1.4 })

      /* Phase 4: Curtain wipes from left to right */
      tl.to(sparkle, {
        opacity: 1,
        scale: 1,
        duration: 0.3,
        ease: 'back.out(2)',
      })
      tl.to(curtain, {
        scaleX: 1,
        duration: 0.8,
        ease: 'power2.inOut',
      })
      tl.to(sparkle, {
        opacity: 0,
        scale: 0.5,
        duration: 0.3,
      }, '-=0.4')

      /* Phase 5: Before fades, after reveals */
      tl.to(beforeSide, {
        opacity: 0.15,
        duration: 0.4,
      }, '-=0.5')
      tl.to(afterSide, {
        opacity: 1,
        duration: 0.4,
      }, '-=0.2')
      tl.to(afterLabel, { opacity: 1, duration: 0.3 }, '-=0.2')
      tl.to(afterTitle, {
        opacity: 1,
        y: 0,
        duration: 0.45,
      })
      tl.to(afterDesc, {
        opacity: 1,
        y: 0,
        duration: 0.45,
      }, '-=0.25')

      /* Phase 6: Source tags pop in */
      tl.to(afterTags, {
        opacity: 1,
        scale: 1,
        duration: 0.25,
        stagger: 0.12,
        ease: 'back.out(2)',
      })

      /* Phase 7: Hold for reading */
      tl.to({}, { duration: 2.5 })

      /* Phase 8: Fade out for loop */
      tl.to(card, {
        opacity: 0,
        scale: 0.97,
        duration: 0.8,
        ease: 'power1.inOut',
      })
    },
    { scope: containerRef }
  )

  return (
    <MockFrame ref={containerRef} height="standard" className="flex items-center justify-center px-4">
      <div
        data-card
        className="relative w-full max-w-[520px] rounded-brand border border-border bg-surface-white overflow-hidden"
        style={{ opacity: 0 }}
      >
        {/* Curtain overlay */}
        <div
          data-curtain
          className="absolute inset-0 bg-gradient-to-r from-accent-whisper via-accent-soft/20 to-accent-whisper z-10 origin-left pointer-events-none"
          style={{ transform: 'scaleX(0)' }}
        />

        {/* Sparkle at curtain edge */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
          <div
            data-sparkle
            className="w-6 h-6 rounded-full bg-accent/30"
            style={{ opacity: 0, boxShadow: '0 0 20px 6px rgba(212, 114, 52, 0.2)' }}
          />
        </div>

        <div className="grid grid-cols-2 min-h-[280px]">
          {/* ── Before half ── */}
          <div data-before className="p-3.5 border-r border-border/50 flex flex-col">
            <p
              data-before-label
              className="text-[10px] font-body-medium uppercase tracking-eyebrow text-copy-light mb-2.5"
              style={{ opacity: 0 }}
            >
              Your context
            </p>
            <div className="space-y-1.5 flex-1">
              {contextItems.map((item, i) => (
                <div
                  key={i}
                  data-before-item
                  className="flex items-start gap-2 px-2.5 py-1.5 rounded-brand-sm bg-surface border border-border"
                  style={{ opacity: 0 }}
                >
                  <item.Icon className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="text-[11px] font-body-medium text-dark leading-tight">
                      {item.label}
                    </p>
                    <p className="text-[9px] text-copy-faint leading-tight mt-0.5">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── After half ── */}
          <div
            data-after
            className="p-3.5 flex flex-col bg-accent-whisper/30"
            style={{ opacity: 0 }}
          >
            <p
              data-after-label
              className="text-[10px] font-body-medium uppercase tracking-eyebrow text-accent mb-2.5"
              style={{ opacity: 0 }}
            >
              Your simulation
            </p>

            {/* Character */}
            <div className="flex items-center gap-2 mb-2">
              <div className="w-7 h-7 rounded-full bg-accent-soft/40 border border-accent-soft flex items-center justify-center">
                <span className="text-[9px] font-body-medium text-accent">CFO</span>
              </div>
              <div>
                <p className="text-[11px] font-body-medium text-dark leading-tight">David Chen</p>
                <p className="text-[9px] text-copy-faint">Chief Financial Officer</p>
              </div>
            </div>

            <p
              data-after-title
              className="text-[11px] font-heading tracking-heading text-dark leading-snug mb-1.5"
              style={{ opacity: 0 }}
            >
              Enterprise renewal negotiation
            </p>

            <p
              data-after-desc
              className="text-[10px] text-copy-mid leading-relaxed mb-3 flex-1"
              style={{ opacity: 0 }}
            >
              CFO pushes back on pricing using your competitor&apos;s offer,
              referencing your packaging structure by name. Apply your
              methodology to hold the deal.
            </p>

            {/* Source tags */}
            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-accent-soft/20">
              {['Methodology', 'Personas', 'Pricing'].map((tag, i) => (
                <span
                  key={i}
                  data-after-tag
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
    </MockFrame>
  )
}
