'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { gsapRevealEase } from '@/lib/easing'
import { MockFrame } from '@/components/ui/mock-frame'

/* ---------------------------------------------------------
   Concept C: "The Blueprint"

   An editorial, document-assembly metaphor. The scenario
   builds as a single cohesive document — sections appear
   one by one like a blueprint being drafted. Context is
   written, character is sketched in, criteria are listed,
   team assignment fills in. Feels like a living document
   being composed in real-time, not a wizard form.
   --------------------------------------------------------- */

export function AdminBuilderAnimatedC() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const el = containerRef.current
      if (!el) return

      const bg = el.querySelector('[data-bg]')
      const docTitle = el.querySelector('[data-doc-title]')
      const sectionHeaders = el.querySelectorAll('[data-section-hdr]')
      const sectionContents = el.querySelectorAll('[data-section-content]')
      const dividers = el.querySelectorAll('[data-section-divider]')
      const stampBadges = el.querySelectorAll('[data-section-stamp]')
      const teamAvatars = el.querySelectorAll('[data-team-avatar]')
      const publishRow = el.querySelector('[data-publish-row]')

      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.8,
        defaults: { ease: gsapRevealEase },
      })

      /* Initial state */
      tl.set(bg, { opacity: 0 })
      tl.set(docTitle, { opacity: 0, y: 10 })
      tl.set(sectionHeaders, { opacity: 0, x: -10 })
      tl.set(sectionContents, { opacity: 0, y: 8 })
      tl.set(dividers, { scaleX: 0 })
      tl.set(stampBadges, { opacity: 0, scale: 0.5 })
      tl.set(teamAvatars, { opacity: 0, scale: 0 })
      tl.set(publishRow, { opacity: 0, y: 8 })

      /* Phase 1: Background + title */
      tl.to(bg, { opacity: 1, duration: 0.5, ease: 'power1.out' })
      tl.to(docTitle, { opacity: 1, y: 0, duration: 0.5 })

      /* Phase 2-5: Each section header → content → stamp → divider */
      const sectionCount = sectionHeaders.length
      for (let i = 0; i < sectionCount; i++) {
        tl.to(sectionHeaders[i], { opacity: 1, x: 0, duration: 0.35 })
        tl.to(sectionContents[i], { opacity: 1, y: 0, duration: 0.35 }, '-=0.1')

        // For team section, animate avatars
        if (i === sectionCount - 1) {
          tl.to(teamAvatars, {
            opacity: 1,
            scale: 1,
            duration: 0.25,
            stagger: 0.08,
            ease: 'back.out(2)',
          })
        }

        tl.to({}, { duration: 0.4 })
        tl.to(stampBadges[i], {
          opacity: 1,
          scale: 1,
          duration: 0.2,
          ease: 'back.out(2)',
        })

        if (i < sectionCount - 1) {
          tl.to(dividers[i], {
            scaleX: 1,
            duration: 0.3,
            ease: 'power2.inOut',
          })
        }
      }

      /* Phase 6: Publish row */
      tl.to(publishRow, { opacity: 1, y: 0, duration: 0.4 })

      /* Phase 7: Hold */
      tl.to({}, { duration: 2.5 })

      /* Phase 8: Fade out */
      tl.to(bg, {
        opacity: 0,
        duration: 0.9,
        ease: 'power1.inOut',
      })
    },
    { scope: containerRef }
  )

  return (
    <MockFrame ref={containerRef} height="standard">
      {/* Background */}
      <div
        data-bg=""
        className="absolute inset-0 rounded-brand bg-accent-whisper bg-noise-fine"
        style={{ opacity: 0, backgroundBlendMode: 'overlay' }}
      />

      <div className="relative px-6 py-6 md:px-8">
        {/* Document title */}
        <div data-doc-title="" className="mb-5" style={{ opacity: 0 }}>
          <p className="text-[10px] font-body-medium uppercase tracking-eyebrow text-accent mb-1.5">
            Scenario Blueprint
          </p>
          <h3 className="font-heading text-body tracking-heading text-dark">
            Handling price objections in enterprise sales
          </h3>
        </div>

        {/* Section 1: Context */}
        <div className="mb-3">
          <div className="flex items-center justify-between mb-1.5">
            <p
              data-section-hdr=""
              className="text-[10px] font-body-medium uppercase tracking-eyebrow text-copy-light"
              style={{ opacity: 0 }}
            >
              Scenario Context
            </p>
            <span
              data-section-stamp=""
              className="text-[8px] font-body-medium text-accent bg-accent/10 px-2 py-0.5 rounded-full"
              style={{ opacity: 0 }}
            >
              Set
            </span>
          </div>
          <p
            data-section-content=""
            className="text-caption text-copy-mid leading-relaxed"
            style={{ opacity: 0 }}
          >
            A procurement manager is evaluating your proposal against three competitors.
            Your solution is 20% higher than the lowest bid.
          </p>
        </div>

        <div
          data-section-divider=""
          className="h-px bg-accent-soft/30 mb-3 origin-left"
          style={{ transform: 'scaleX(0)' }}
        />

        {/* Section 2: Character */}
        <div className="mb-3">
          <div className="flex items-center justify-between mb-1.5">
            <p
              data-section-hdr=""
              className="text-[10px] font-body-medium uppercase tracking-eyebrow text-copy-light"
              style={{ opacity: 0 }}
            >
              AI Character
            </p>
            <span
              data-section-stamp=""
              className="text-[8px] font-body-medium text-accent bg-accent/10 px-2 py-0.5 rounded-full"
              style={{ opacity: 0 }}
            >
              Set
            </span>
          </div>
          <div
            data-section-content=""
            className="flex items-center gap-3"
            style={{ opacity: 0 }}
          >
            <div className="w-8 h-8 rounded-full bg-accent/10 border border-accent-soft flex items-center justify-center shrink-0">
              <span className="font-heading text-caption text-accent">L</span>
            </div>
            <div>
              <p className="text-caption font-body-medium text-dark">Lucas Ferreira</p>
              <p className="text-[10px] text-copy-light">Skeptical, Demanding, Technical</p>
            </div>
          </div>
        </div>

        <div
          data-section-divider=""
          className="h-px bg-accent-soft/30 mb-3 origin-left"
          style={{ transform: 'scaleX(0)' }}
        />

        {/* Section 3: Feedback criteria */}
        <div className="mb-3">
          <div className="flex items-center justify-between mb-1.5">
            <p
              data-section-hdr=""
              className="text-[10px] font-body-medium uppercase tracking-eyebrow text-copy-light"
              style={{ opacity: 0 }}
            >
              Feedback Criteria
            </p>
            <span
              data-section-stamp=""
              className="text-[8px] font-body-medium text-accent bg-accent/10 px-2 py-0.5 rounded-full"
              style={{ opacity: 0 }}
            >
              Set
            </span>
          </div>
          <div data-section-content="" className="space-y-1" style={{ opacity: 0 }}>
            {[
              'Articulate value proposition clearly',
              'Handle budget objections with evidence',
              'Secure commitment to next step',
            ].map((criterion, i) => (
              <div key={i} className="flex items-start gap-2">
                <span className="text-accent/50 mt-0.5 shrink-0 text-caption">{i + 1}.</span>
                <span className="text-caption text-copy-mid leading-relaxed">{criterion}</span>
              </div>
            ))}
          </div>
        </div>

        <div
          data-section-divider=""
          className="h-px bg-accent-soft/30 mb-3 origin-left"
          style={{ transform: 'scaleX(0)' }}
        />

        {/* Section 4: Team assignment */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-1.5">
            <p
              data-section-hdr=""
              className="text-[10px] font-body-medium uppercase tracking-eyebrow text-copy-light"
              style={{ opacity: 0 }}
            >
              Assigned Team
            </p>
            <span
              data-section-stamp=""
              className="text-[8px] font-body-medium text-accent bg-accent/10 px-2 py-0.5 rounded-full"
              style={{ opacity: 0 }}
            >
              Set
            </span>
          </div>
          <div data-section-content="" className="flex items-center gap-2" style={{ opacity: 0 }}>
            {/* Avatar stack */}
            <div className="flex -space-x-1.5">
              {['E', 'M', 'S', 'K', 'R'].map((initial, i) => (
                <div
                  key={i}
                  data-team-avatar=""
                  className="w-6 h-6 rounded-full bg-surface-white border border-accent-soft/40 flex items-center justify-center"
                  style={{ opacity: 0, transform: 'scale(0)' }}
                >
                  <span className="text-[8px] font-body-medium text-copy-mid">{initial}</span>
                </div>
              ))}
            </div>
            <span className="text-[10px] text-copy-light">+7 more</span>
          </div>
        </div>

        {/* Publish row */}
        <div
          data-publish-row=""
          className="flex items-center justify-between pt-3 border-t border-accent-soft/30"
          style={{ opacity: 0 }}
        >
          <span className="text-[10px] text-copy-faint">
            All sections complete
          </span>
          <span className="inline-flex items-center gap-1.5 text-caption font-body-medium text-surface-white bg-accent px-4 py-1.5 rounded-full">
            Publish Scenario
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M2 5h6M5.5 2.5L8 5l-2.5 2.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </div>
    </MockFrame>
  )
}
