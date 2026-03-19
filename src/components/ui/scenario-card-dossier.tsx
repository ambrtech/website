'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Image from 'next/image'
import { gsapRevealEase } from '@/lib/easing'

/* ─────────────────────────────────────────────────────
   Concept B: "The Dossier" — Editorial Briefing Card

   Doesn't mimic the product UI. Instead, presents the
   scenario as a stylized, brand-native editorial card —
   like a case file or magazine spread being assembled.
   ───────────────────────────────────────────────────── */

function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="shrink-0">
      <path
        d="M2.5 6.5L5 9L9.5 3.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function ScenarioCardDossier() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const el = containerRef.current
      if (!el) return

      const bg = el.querySelector('[data-bg]')
      const photo = el.querySelector('[data-photo]')
      const nameChars = el.querySelectorAll('[data-char]')
      const role = el.querySelector('[data-role]')
      const title = el.querySelector('[data-title]')
      const difficultyRing = el.querySelector('[data-ring]')
      const difficultyLabel = el.querySelector('[data-difficulty-label]')
      const timeBadge = el.querySelector('[data-time]')
      const objectives = el.querySelectorAll('[data-objective]')
      const checks = el.querySelectorAll('[data-check]')
      const divider = el.querySelector('[data-divider]')
      const contextLine = el.querySelector('[data-context-line]')

      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.8,
        defaults: { ease: gsapRevealEase },
      })

      /* Initial state */
      tl.set(bg, { opacity: 0 })
      tl.set(photo, { opacity: 0, scale: 0.8, x: -30 })
      tl.set(nameChars, { opacity: 0, y: 8 })
      tl.set(role, { opacity: 0, y: 6 })
      tl.set(title, { opacity: 0, y: 16 })
      tl.set(difficultyRing, { opacity: 0, scale: 0.5, rotation: -90 })
      tl.set(difficultyLabel, { opacity: 0 })
      tl.set(timeBadge, { opacity: 0, scale: 0.8 })
      tl.set(objectives, { opacity: 0, x: -12 })
      tl.set(checks, { opacity: 0, scale: 0 })
      tl.set(divider, { scaleX: 0 })
      tl.set(contextLine, { opacity: 0, y: 8 })

      /* Phase 1: Warm background card appears */
      tl.to(bg, {
        opacity: 1,
        duration: 0.6,
        ease: 'power1.out',
      })

      /* Phase 2: Character photo slides in */
      tl.to(photo, {
        opacity: 1,
        scale: 1,
        x: 0,
        duration: 0.7,
        ease: 'power2.out',
      })

      /* Phase 3: Name inscribes character by character */
      tl.to(nameChars, {
        opacity: 1,
        y: 0,
        duration: 0.25,
        stagger: 0.05,
        ease: 'power1.out',
      })
      tl.to(
        role,
        {
          opacity: 1,
          y: 0,
          duration: 0.35,
        },
        '-=0.15'
      )

      /* Phase 4: Context line appears */
      tl.to(contextLine, {
        opacity: 1,
        y: 0,
        duration: 0.4,
      })

      /* Phase 5: Scenario title fades in — the editorial centrepiece */
      tl.to(title, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
      })

      /* Phase 6: Details assemble around the card */
      // Difficulty ring fills
      tl.to(difficultyRing, {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 0.5,
        ease: 'power2.out',
      })
      tl.to(
        difficultyLabel,
        {
          opacity: 1,
          duration: 0.3,
        },
        '-=0.2'
      )

      // Time badge pops
      tl.to(
        timeBadge,
        {
          opacity: 1,
          scale: 1,
          duration: 0.35,
          ease: 'back.out(2)',
        },
        '-=0.3'
      )

      // Divider line draws
      tl.to(
        divider,
        {
          scaleX: 1,
          duration: 0.5,
          ease: 'power2.inOut',
        },
        '-=0.2'
      )

      // Objectives appear with check marks
      objectives.forEach((obj, i) => {
        tl.to(
          obj,
          {
            opacity: 1,
            x: 0,
            duration: 0.35,
          },
          `-=${i === 0 ? 0.1 : 0.2}`
        )
        tl.to(
          checks[i],
          {
            opacity: 1,
            scale: 1,
            duration: 0.2,
            ease: 'back.out(3)',
          },
          '-=0.15'
        )
      })

      /* Phase 7: Hold for reading — longer to appreciate the card */
      tl.to({}, { duration: 3.5 })

      /* Phase 8: Fade everything out gracefully */
      tl.to(
        [
          bg,
          photo,
          ...nameChars,
          role,
          title,
          difficultyRing,
          difficultyLabel,
          timeBadge,
          divider,
          ...objectives,
          ...checks,
          contextLine,
        ],
        {
          opacity: 0,
          duration: 0.9,
          ease: 'power1.inOut',
        }
      )
    },
    { scope: containerRef }
  )

  /* Split name into individual character spans for typing effect */
  const name = 'Sarah Chen'

  return (
    <div ref={containerRef} className="relative min-h-[420px]">
      {/* ── Background card with paper texture ── */}
      <div
        data-bg=""
        className="absolute inset-0 rounded-brand bg-accent-whisper bg-noise-fine"
        style={{ opacity: 0, backgroundBlendMode: 'overlay' }}
      />

      {/* ── Content grid: editorial layout ── */}
      <div className="relative px-6 py-8 md:px-8">
        {/* Top row: photo + identity + metadata */}
        <div className="flex items-start gap-5 mb-5">
          {/* Character photo — offset left, warm treatment */}
          <div
            data-photo=""
            className="shrink-0"
            style={{ opacity: 0 }}
          >
            <div className="w-[72px] h-[72px] rounded-full overflow-hidden border-[3px] border-accent-soft/60 shadow-[0_8px_24px_rgba(212,114,52,0.12)]">
              <Image
                src="/images/team/jamie-headshot.png"
                alt="Character"
                width={72}
                height={72}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="flex-1 pt-1">
            {/* Name — typed character by character */}
            <div className="flex items-baseline gap-0.5 mb-0.5">
              {name.split('').map((char, i) => (
                <span
                  key={i}
                  data-char=""
                  className="font-heading text-body tracking-heading text-dark inline-block"
                  style={{ opacity: 0 }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </div>

            {/* Role */}
            <p data-role="" className="text-caption text-copy-light" style={{ opacity: 0 }}>
              Team Lead · Performance Feedback
            </p>

            {/* Brief context line */}
            <p
              data-context-line=""
              className="text-caption text-copy-mid leading-relaxed mt-2"
              style={{ opacity: 0 }}
            >
              Your direct report has missed two consecutive deadlines.
              Their non-deadline work remains excellent.
            </p>
          </div>

          {/* Metadata: difficulty + time — positioned top-right */}
          <div className="flex flex-col items-end gap-2 shrink-0">
            {/* Difficulty ring */}
            <div className="relative" data-ring="" style={{ opacity: 0 }}>
              <svg width="40" height="40" viewBox="0 0 40 40">
                {/* Track */}
                <circle
                  cx="20"
                  cy="20"
                  r="16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className="text-accent-soft/30"
                />
                {/* Fill — 60% for "Standard" */}
                <circle
                  cx="20"
                  cy="20"
                  r="16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeDasharray={`${0.6 * 2 * Math.PI * 16} ${2 * Math.PI * 16}`}
                  strokeLinecap="round"
                  className="text-accent"
                  style={{ transformOrigin: 'center', transform: 'rotate(-90deg)' }}
                />
              </svg>
              <span
                data-difficulty-label=""
                className="absolute inset-0 flex items-center justify-center text-[8px] font-body-medium text-accent uppercase tracking-wide"
                style={{ opacity: 0 }}
              >
                Mid
              </span>
            </div>

            {/* Time badge */}
            <span
              data-time=""
              className="text-[9px] font-body-medium text-copy-light bg-surface-white px-2 py-1 rounded-full border border-border"
              style={{ opacity: 0 }}
            >
              10 min
            </span>
          </div>
        </div>

        {/* Scenario title — large, editorial, serif */}
        <h3
          data-title=""
          className="font-heading text-section tracking-heading text-dark leading-[1.15] mb-5"
          style={{ opacity: 0 }}
        >
          Navigate a difficult performance conversation
        </h3>

        {/* Divider */}
        <div
          data-divider=""
          className="h-[1.5px] bg-gradient-to-r from-accent-soft via-accent-soft/40 to-transparent mb-4 origin-left"
          style={{ transform: 'scaleX(0)' }}
        />

        {/* Objectives as a checklist */}
        <div className="space-y-2.5 mb-5">
          {[
            'Address performance issues whilst acknowledging strengths',
            'Develop a plan to improve their meeting performance',
          ].map((obj, i) => (
            <div key={i} className="flex items-start gap-2">
              <span
                data-check=""
                className="mt-0.5 w-4 h-4 rounded-full bg-accent/10 flex items-center justify-center text-accent"
                style={{ opacity: 0 }}
              >
                <CheckIcon />
              </span>
              <p
                data-objective=""
                className="text-caption text-copy-mid leading-relaxed"
                style={{ opacity: 0 }}
              >
                {obj}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
