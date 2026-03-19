'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Image from 'next/image'
import { gsapRevealEase } from '@/lib/easing'
import { VoiceWave } from '@/components/ui/voice-wave'

/* ─────────────────────────────────────────────────────
   Concept A: "The Journey" — Full Flow Walkthrough

   Shows the complete user experience compressed into ~10s:
   Category selection → Scenario briefing → Live call UI
   ───────────────────────────────────────────────────── */


function CategoryIcon({ type }: { type: 'feedback' | 'sales' | 'service' | 'leadership' }) {
  const icons = {
    feedback: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M3 4.5h12M3 8h8M3 11.5h10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M14 11l2.5 3v-3H14z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
      </svg>
    ),
    sales: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M2 13V8l5-4.5L12 8v5a1 1 0 01-1 1H3a1 1 0 01-1-1z" stroke="currentColor" strokeWidth="1.2" />
        <path d="M13 7l3 2.5V15a1 1 0 01-1 1h-2" stroke="currentColor" strokeWidth="1.2" />
        <path d="M6 14v-3h2v3" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    ),
    service: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M4 10V7a5 5 0 0110 0v3" stroke="currentColor" strokeWidth="1.2" />
        <rect x="2" y="9" width="3" height="5" rx="1" stroke="currentColor" strokeWidth="1.2" />
        <rect x="13" y="9" width="3" height="5" rx="1" stroke="currentColor" strokeWidth="1.2" />
        <path d="M3.5 14v1a2 2 0 002 2h3" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    ),
    leadership: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <circle cx="9" cy="5.5" r="2.5" stroke="currentColor" strokeWidth="1.2" />
        <path d="M3.5 15.5c0-3 2.5-5 5.5-5s5.5 2 5.5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  }
  return <span className="text-accent/70">{icons[type]}</span>
}

export function ScenarioCardJourney() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const el = containerRef.current
      if (!el) return

      const categories = el.querySelectorAll('[data-category]')
      const activeCard = el.querySelector('[data-category-active]')
      const inactive = el.querySelectorAll('[data-category]:not([data-category-active])')
      const briefing = el.querySelector('[data-briefing]')
      const briefingItems = el.querySelectorAll('[data-briefing-item]')
      const callPanel = el.querySelector('[data-call]')
      const callItems = el.querySelectorAll('[data-call-item]')

      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.8,
        defaults: { ease: gsapRevealEase },
      })

      /* Initial state — everything hidden */
      tl.set(categories, { opacity: 0, y: 24, scale: 0.92 })
      tl.set(briefing, { opacity: 0 })
      tl.set(briefingItems, { opacity: 0, y: 14 })
      tl.set(callPanel, { opacity: 0, scale: 0.96 })
      tl.set(callItems, { opacity: 0, y: 10 })

      /* Phase 1: Category cards appear */
      tl.to(categories, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.55,
        stagger: 0.12,
      })

      /* Phase 2: Hold, then highlight active card */
      tl.to({}, { duration: 0.9 })
      tl.to(activeCard, {
        borderColor: '#D47234',
        boxShadow: '0 0 0 2px rgba(212, 114, 52, 0.15), 0 4px 16px rgba(212, 114, 52, 0.08)',
        duration: 0.45,
        ease: 'power2.out',
      })

      /* Phase 3: Others fade, active dissolves into briefing */
      tl.to({}, { duration: 0.5 })
      tl.to(inactive, {
        opacity: 0,
        scale: 0.85,
        y: -8,
        duration: 0.35,
        stagger: 0.06,
      })
      tl.to(
        activeCard,
        {
          opacity: 0,
          scale: 1.08,
          duration: 0.3,
        },
        '-=0.15'
      )

      /* Phase 4: Briefing appears with staggered elements */
      tl.set(briefing, { opacity: 1 })
      tl.to(briefingItems, {
        opacity: 1,
        y: 0,
        duration: 0.45,
        stagger: 0.12,
      })

      /* Phase 5: Hold on briefing */
      tl.to({}, { duration: 2.2 })

      /* Phase 6: Continue button gets "pressed" */
      const continueBtn = el.querySelector('[data-continue]')
      tl.to(continueBtn, { scale: 0.92, duration: 0.08, ease: 'power2.in' })
      tl.to(continueBtn, {
        scale: 1,
        boxShadow: '0 0 16px 4px rgba(212, 114, 52, 0.3)',
        duration: 0.15,
        ease: 'power2.out',
      })

      /* Phase 7: Briefing fades, call panel rises */
      tl.to(briefing, {
        opacity: 0,
        y: -16,
        duration: 0.4,
        ease: 'power2.in',
      })
      tl.to(callPanel, {
        opacity: 1,
        scale: 1,
        duration: 0.55,
        ease: 'power2.out',
      })
      tl.to(
        callItems,
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.08,
        },
        '-=0.35'
      )

      /* Phase 8: Hold on call (VoiceWave self-animates) */
      tl.to({}, { duration: 1.8 })

      /* Phase 10: Fade everything out */
      tl.to(callPanel, {
        opacity: 0,
        duration: 0.9,
        ease: 'power1.inOut',
      })
    },
    { scope: containerRef }
  )

  return (
    <div ref={containerRef} className="relative min-h-[420px]">
      {/* ── Layer 1: Category Grid ── */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="grid grid-cols-2 gap-3 w-full max-w-[360px]">
          {(
            [
              { label: 'Performance Feedback', type: 'feedback' as const, active: true },
              { label: 'Sales & Negotiation', type: 'sales' as const, active: false },
              { label: 'Customer Service', type: 'service' as const, active: false },
              { label: 'Leadership', type: 'leadership' as const, active: false },
            ]
          ).map((cat) => (
            <div
              key={cat.label}
              data-category=""
              {...(cat.active ? { 'data-category-active': '' } : {})}
              className="flex items-center gap-2.5 px-4 py-3.5 rounded-brand-sm bg-surface-white border border-border"
              style={{ opacity: 0 }}
            >
              <CategoryIcon type={cat.type} />
              <span className="text-caption font-body-medium text-dark leading-tight">
                {cat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Layer 2: Scenario Briefing ── */}
      <div data-briefing="" className="absolute inset-0" style={{ opacity: 0 }}>
        <div className="space-y-3.5">
          {/* Category eyebrow */}
          <div data-briefing-item="" className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="text-eyebrow-sm font-body-medium uppercase tracking-eyebrow text-accent">
              Performance Feedback
            </span>
          </div>

          {/* Title + character row */}
          <div data-briefing-item="">
            <h3 className="font-heading text-body tracking-heading text-dark mb-3 leading-snug">
              Navigate a difficult performance conversation
            </h3>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-accent-soft shrink-0">
                <Image
                  src="/images/team/jamie-headshot.png"
                  alt="Character"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-caption font-body-medium text-dark">Sarah Chen</p>
                <p className="text-[10px] text-copy-light">Team Lead · 10 minutes</p>
              </div>
            </div>
          </div>

          {/* Difficulty pills */}
          <div data-briefing-item="" className="flex items-center gap-2">
            <span className="text-[10px] px-2.5 py-1 rounded-full bg-accent text-surface-white font-body-medium">
              Standard
            </span>
            <span className="text-[10px] px-2.5 py-1 rounded-full border border-border text-copy-light font-body-medium">
              Advanced
            </span>
          </div>

          {/* Context box */}
          <div data-briefing-item="" className="p-3.5 rounded-brand-sm bg-surface border border-border">
            <p className="text-[10px] font-body-medium text-copy-light uppercase tracking-eyebrow mb-1.5">
              Context
            </p>
            <p className="text-caption text-copy-mid leading-relaxed">
              Your direct report has missed two consecutive deadlines on a critical project.
              Their non-deadline work remains excellent. Address performance while maintaining
              the relationship.
            </p>
          </div>

          {/* Objectives */}
          <div data-briefing-item="">
            <p className="text-[10px] font-body-medium text-copy-light uppercase tracking-eyebrow mb-1.5">
              Objectives
            </p>
            <div className="space-y-1">
              <p className="text-caption text-copy-mid">
                1. Address performance issues whilst acknowledging strengths
              </p>
              <p className="text-caption text-copy-mid">
                2. Develop a plan to improve their meeting performance
              </p>
            </div>
          </div>

          {/* Continue button */}
          <div data-briefing-item="" className="flex justify-end pt-1">
            <span
              data-continue=""
              className="inline-block text-caption font-body-medium text-surface-white bg-accent px-5 py-1.5 rounded-full"
            >
              Continue
            </span>
          </div>
        </div>
      </div>

      {/* ── Layer 3: Call Panel ── */}
      <div
        data-call=""
        className="absolute inset-0 flex items-center justify-center"
        style={{ opacity: 0 }}
      >
        <div className="w-full rounded-brand bg-dark overflow-hidden">
          {/* Call chrome */}
          <div className="relative px-5 pt-5 pb-4">
            {/* Timer */}
            <div data-call-item="" className="absolute top-4 left-4">
              <span className="text-[10px] font-body-medium text-surface-white/50 bg-surface-white/[0.06] px-2.5 py-1 rounded">
                00:05
              </span>
            </div>

            {/* Camera off badge */}
            <div data-call-item="" className="absolute top-4 right-4">
              <span className="text-[10px] text-surface-white/35 bg-surface-white/[0.06] px-2 py-1 rounded">
                Camera off
              </span>
            </div>

            {/* Character — centered */}
            <div data-call-item="" className="flex flex-col items-center pt-6 pb-4">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-accent mb-2.5 shadow-[0_0_20px_4px_rgba(212,114,52,0.15)]">
                <Image
                  src="/images/team/jamie-headshot.png"
                  alt="Character"
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-caption font-body-medium text-surface-white">Sarah Chen</p>
              <p className="text-[10px] text-surface-white/35 mt-0.5 flex items-center gap-1">
                <span className="inline-block w-0 h-0 border-l-[5px] border-l-surface-white/35 border-y-[3px] border-y-transparent" />
                Live transcript
              </p>
            </div>

            {/* Waveform */}
            <div data-call-item="" className="flex justify-center mb-4">
              <VoiceWave width={140} height={32} />
            </div>
          </div>

          {/* Bottom bar */}
          <div data-call-item="" className="flex items-center gap-2.5 px-4 pb-4">
            {/* Mic button */}
            <div className="w-9 h-9 rounded-full bg-[#22C55E] flex items-center justify-center shrink-0">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <rect x="5" y="1" width="4" height="7" rx="2" fill="white" />
                <path
                  d="M3 6C3 8.2 4.8 10 7 10C9.2 10 11 8.2 11 6"
                  stroke="white"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
                <line x1="7" y1="10" x2="7" y2="12.5" stroke="white" strokeWidth="1.2" />
              </svg>
            </div>

            {/* Text input */}
            <div className="flex-1 h-9 rounded-full bg-surface-white/[0.06] flex items-center px-3.5">
              <span className="text-[10px] text-surface-white/25">Speak or type a message...</span>
            </div>

            {/* Leave button */}
            <div className="shrink-0 px-3.5 py-2 rounded-full bg-red-500/85 flex items-center gap-1.5">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path
                  d="M8 2L5 5M5 5L2 8M5 5L8 8M5 5L2 2"
                  stroke="white"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
              </svg>
              <span className="text-[10px] font-body-medium text-surface-white">Leave</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
