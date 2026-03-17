'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { gsapRevealEase } from '@/lib/easing'

/* ─────────────────────────────────────────────────────
   Visual context items — each a small artifact vignette
   ───────────────────────────────────────────────────── */

function DocIcon() {
  return (
    <svg width="32" height="38" viewBox="0 0 32 38" fill="none" className="shrink-0">
      <rect x="1" y="1" width="30" height="36" rx="3" stroke="currentColor" strokeWidth="1.2" />
      <rect x="6" y="7" width="14" height="2" rx="1" fill="currentColor" opacity="0.4" />
      <rect x="6" y="12" width="20" height="1.5" rx="0.75" fill="currentColor" opacity="0.2" />
      <rect x="6" y="16" width="18" height="1.5" rx="0.75" fill="currentColor" opacity="0.2" />
      <rect x="6" y="20" width="20" height="1.5" rx="0.75" fill="currentColor" opacity="0.2" />
      <rect x="6" y="24" width="15" height="1.5" rx="0.75" fill="currentColor" opacity="0.2" />
      <rect x="6" y="28" width="19" height="1.5" rx="0.75" fill="currentColor" opacity="0.2" />
    </svg>
  )
}

function PeopleIcon() {
  return (
    <div className="flex -space-x-2.5 shrink-0">
      <div className="w-9 h-9 rounded-full bg-accent-soft/60 border-2 border-accent-whisper flex items-center justify-center">
        <span className="text-[9px] font-body-medium text-accent/80">VP</span>
      </div>
      <div className="w-9 h-9 rounded-full bg-accent-tint border-2 border-accent-whisper flex items-center justify-center">
        <span className="text-[9px] font-body-medium text-accent/60">CFO</span>
      </div>
      <div className="w-9 h-9 rounded-full bg-surface-alt border-2 border-accent-whisper flex items-center justify-center">
        <span className="text-[9px] font-body-medium text-copy-light">DIR</span>
      </div>
    </div>
  )
}

function PricingIcon() {
  return (
    <div className="flex items-end gap-1 shrink-0">
      {[
        { h: 'h-5', label: '$' },
        { h: 'h-7', label: '$$' },
        { h: 'h-10', label: '$$$' },
      ].map((tier, i) => (
        <div
          key={i}
          className={`w-7 ${tier.h} rounded-sm border border-accent-soft/50 bg-accent-whisper flex items-center justify-center`}
        >
          <span className="text-[7px] font-body-medium text-accent/60">{tier.label}</span>
        </div>
      ))}
    </div>
  )
}

function CompetitorIcon() {
  return (
    <div className="grid grid-cols-2 gap-0.5 shrink-0 w-[38px]">
      <div className="h-4 rounded-sm bg-copy-faint/20 border border-copy-faint/10" />
      <div className="h-4 rounded-sm bg-accent-soft/40 border border-accent-soft/20" />
      <div className="h-4 rounded-sm bg-accent-soft/30 border border-accent-soft/15" />
      <div className="h-4 rounded-sm bg-copy-faint/15 border border-copy-faint/10" />
    </div>
  )
}

/* ─────────────────────────────────────────────────────
   Animated flow component
   ───────────────────────────────────────────────────── */

export function MockCustomizationFlowAnimated() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const el = containerRef.current
      if (!el) return

      const items = el.querySelectorAll('[data-context-item]')
      const trails = el.querySelectorAll('[data-trail]')
      const convergence = el.querySelector('[data-convergence]')
      const outputCard = el.querySelector('[data-output]')
      const highlights = el.querySelectorAll('[data-highlight]')
      const connectionLines = el.querySelectorAll('[data-connection]')

      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 2,
        defaults: { ease: gsapRevealEase },
      })

      /* Phase 1: Context items appear (staggered from left) */
      tl.set([...items, ...trails, convergence, outputCard, ...highlights, ...connectionLines], {
        opacity: 0,
      })
        .set(items, { x: -30 })
        .set(outputCard, { scale: 0.85, x: 20 })

      tl.to(items, {
        opacity: 1,
        x: 0,
        duration: 0.6,
        stagger: 0.2,
      })

      /* Phase 2: Hold — let the viewer read the context */
      tl.to({}, { duration: 1.2 })

      /* Phase 3: Trails appear, items start flowing right */
      tl.to(trails, {
        opacity: 1,
        duration: 0.4,
        stagger: 0.1,
      })
        .to(
          items,
          {
            x: 40,
            opacity: 0.3,
            scale: 0.85,
            duration: 1,
            stagger: 0.08,
            ease: 'power2.inOut',
          },
          '-=0.2'
        )

      /* Phase 4: Convergence point glows */
      tl.to(
        convergence,
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
        },
        '-=0.6'
      )
        .to(convergence, {
          boxShadow: '0 0 30px 8px rgba(212, 114, 52, 0.25)',
          duration: 0.6,
          ease: 'power1.inOut',
        })
        .to(
          items,
          {
            opacity: 0,
            duration: 0.4,
          },
          '-=0.4'
        )
        .to(
          trails,
          {
            opacity: 0,
            duration: 0.3,
          },
          '-=0.3'
        )

      /* Phase 5: Convergence shrinks, output card emerges */
      tl.to(convergence, {
        scale: 0.5,
        opacity: 0,
        duration: 0.4,
        ease: 'power2.in',
      }).to(
        outputCard,
        {
          opacity: 1,
          scale: 1,
          x: 0,
          duration: 0.7,
          ease: 'power2.out',
        },
        '-=0.2'
      )

      /* Phase 6: Connection highlights appear in sequence */
      tl.to(highlights, {
        opacity: 1,
        duration: 0.3,
        stagger: 0.4,
      })

      /* Phase 6b: Connection lines draw in */
      tl.to(
        connectionLines,
        {
          opacity: 1,
          duration: 0.3,
          stagger: 0.2,
        },
        '-=1.0'
      )

      /* Phase 7: Hold for reading */
      tl.to({}, { duration: 2.5 })

      /* Phase 8: Fade everything out for loop */
      tl.to([outputCard, ...highlights, ...connectionLines], {
        opacity: 0,
        duration: 0.8,
        ease: 'power1.inOut',
      })
    },
    { scope: containerRef }
  )

  return (
    <div ref={containerRef} className="relative min-h-[380px] flex items-center">
      {/* ── Left: Context items ── */}
      <div className="absolute left-0 top-0 bottom-0 w-[42%] flex flex-col justify-center gap-4 pl-2">
        {/* Sales methodology */}
        <div
          data-context-item
          className="flex items-center gap-3 px-3.5 py-3 rounded-brand-sm bg-surface border border-border"
        >
          <DocIcon />
          <div>
            <p className="text-caption font-body-medium text-dark leading-tight">
              Sales methodology
            </p>
            <p className="text-[10px] text-copy-faint leading-tight mt-0.5">
              MEDDPICC framework
            </p>
          </div>
        </div>

        {/* Personas */}
        <div
          data-context-item
          className="flex items-center gap-3 px-3.5 py-3 rounded-brand-sm bg-surface border border-border"
        >
          <PeopleIcon />
          <div>
            <p className="text-caption font-body-medium text-dark leading-tight">
              Buyer personas
            </p>
            <p className="text-[10px] text-copy-faint leading-tight mt-0.5">
              3 key decision-makers
            </p>
          </div>
        </div>

        {/* Pricing & packaging */}
        <div
          data-context-item
          className="flex items-center gap-3 px-3.5 py-3 rounded-brand-sm bg-surface border border-border"
        >
          <PricingIcon />
          <div>
            <p className="text-caption font-body-medium text-dark leading-tight">
              Pricing & packaging
            </p>
            <p className="text-[10px] text-copy-faint leading-tight mt-0.5">
              3 tiers, usage-based
            </p>
          </div>
        </div>

        {/* Competitive landscape */}
        <div
          data-context-item
          className="flex items-center gap-3 px-3.5 py-3 rounded-brand-sm bg-surface border border-border"
        >
          <CompetitorIcon />
          <div>
            <p className="text-caption font-body-medium text-dark leading-tight">
              Competitive landscape
            </p>
            <p className="text-[10px] text-copy-faint leading-tight mt-0.5">
              4 key competitors mapped
            </p>
          </div>
        </div>

        {/* Trailing dots (flow indicators) */}
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            data-trail
            className="absolute right-0"
            style={{ top: `${22 + i * 19}%` }}
          >
            <div className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-accent-soft" />
              <span className="w-1 h-1 rounded-full bg-accent-soft/60" />
              <span className="w-1 h-1 rounded-full bg-accent-soft/30" />
            </div>
          </div>
        ))}
      </div>

      {/* ── Center: Convergence point ── */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div
          data-convergence
          className="w-10 h-10 rounded-full bg-accent flex items-center justify-center"
          style={{ opacity: 0, scale: '0.6' }}
        >
          <span className="text-caption font-body-medium text-surface-white tracking-tight">
            A
          </span>
        </div>
      </div>

      {/* ── Right: Output simulation card ── */}
      <div className="absolute right-0 top-0 bottom-0 w-[48%] flex items-center pr-2">
        <div
          data-output
          className="w-full rounded-brand-sm border border-accent-soft/40 bg-accent-whisper/50 p-5 space-y-3"
          style={{ opacity: 0 }}
        >
          {/* Simulation header */}
          <div className="flex items-center gap-2 mb-1">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="text-[10px] font-body-medium uppercase tracking-eyebrow text-accent">
              Generated Simulation
            </span>
          </div>

          {/* Character */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-accent-soft/40 border border-accent-soft flex items-center justify-center">
              <span className="text-[10px] font-body-medium text-accent">
                CFO
              </span>
            </div>
            <div>
              <p className="text-caption font-body-medium text-dark leading-tight">
                David Chen
              </p>
              <p className="text-[10px] text-copy-faint">
                Chief Financial Officer
              </p>
            </div>
          </div>

          {/* Scenario title */}
          <p className="text-caption font-body-medium text-dark leading-snug">
            Enterprise renewal negotiation
          </p>

          {/* Scenario description with highlights */}
          <p className="text-[11px] text-copy-mid leading-relaxed">
            <span data-highlight data-connection className="bg-accent-soft/40 rounded px-0.5" style={{ opacity: 0 }}>
              CFO
            </span>{' '}
            pushes back on{' '}
            <span data-highlight className="bg-accent-soft/40 rounded px-0.5" style={{ opacity: 0 }}>
              pricing
            </span>{' '}
            using your{' '}
            <span data-highlight className="bg-accent-soft/40 rounded px-0.5" style={{ opacity: 0 }}>
              competitor&apos;s
            </span>{' '}
            offer, referencing your{' '}
            <span data-highlight className="bg-accent-soft/40 rounded px-0.5" style={{ opacity: 0 }}>
              packaging structure
            </span>{' '}
            by name. Apply your{' '}
            <span data-highlight className="bg-accent-soft/40 rounded px-0.5" style={{ opacity: 0 }}>
              methodology
            </span>{' '}
            to hold the deal.
          </p>

          {/* Tags linking back to sources */}
          <div className="flex flex-wrap gap-1.5 pt-2 border-t border-accent-soft/20">
            <span
              data-connection
              className="text-[9px] px-2 py-0.5 rounded-full bg-surface border border-border text-copy-light"
              style={{ opacity: 0 }}
            >
              From: Sales methodology
            </span>
            <span
              data-connection
              className="text-[9px] px-2 py-0.5 rounded-full bg-surface border border-border text-copy-light"
              style={{ opacity: 0 }}
            >
              From: Buyer personas
            </span>
            <span
              data-connection
              className="text-[9px] px-2 py-0.5 rounded-full bg-surface border border-border text-copy-light"
              style={{ opacity: 0 }}
            >
              From: Pricing & packaging
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
