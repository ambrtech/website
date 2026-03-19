'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { gsapRevealEase } from '@/lib/easing'

/* ─────────────────────────────────────────────────────
   Presentation Training B: "The Q&A Moment"

   Focuses on the Q&A phase after a presentation. Three
   AI audience members are shown as a panel of interviewers
   with distinct thinking styles. One asks a tough question,
   the user's response types out, and real-time coaching
   feedback appears. Captures the high-stakes moment of
   handling audience questions under pressure.
   ───────────────────────────────────────────────────── */

export function PresentationTrainingAnimatedB() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const el = containerRef.current
      if (!el) return

      const panel = el.querySelector('[data-panel]')
      const header = el.querySelector('[data-header]')
      const audienceCards = el.querySelectorAll('[data-audience]')
      const questionBubble = el.querySelector('[data-question]')
      const questionHighlight = el.querySelector('[data-question-highlight]')
      const responseArea = el.querySelector('[data-response]')
      const responseText = el.querySelector('[data-response-text]')
      const feedback = el.querySelector('[data-feedback]')
      const scoreRing = el.querySelector('[data-score-ring]')
      const scoreLabel = el.querySelector('[data-score-label]')

      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.8,
        defaults: { ease: gsapRevealEase },
      })

      /* Initial state */
      tl.set(panel, { opacity: 0, scale: 0.97 })
      tl.set(header, { opacity: 0, y: -8 })
      tl.set(audienceCards, { opacity: 0, y: 12, scale: 0.95 })
      tl.set(questionBubble, { opacity: 0, y: 10 })
      tl.set(questionHighlight, { opacity: 0 })
      tl.set(responseArea, { opacity: 0, y: 8 })
      tl.set(responseText, { opacity: 0, clipPath: 'inset(0 100% 0 0)' })
      tl.set(feedback, { opacity: 0, x: 16 })
      tl.set(scoreRing, { opacity: 0, scale: 0.5, rotation: -90 })
      tl.set(scoreLabel, { opacity: 0 })

      /* Phase 1: Panel + header appear */
      tl.to(panel, { opacity: 1, scale: 1, duration: 0.4, ease: 'power2.out' })
      tl.to(header, { opacity: 1, y: 0, duration: 0.35 }, '-=0.2')

      /* Phase 2: Audience cards appear staggered */
      tl.to(audienceCards, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.35,
        stagger: 0.1,
        ease: 'power2.out',
      })

      /* Phase 3: One audience member's card highlights */
      tl.to(questionHighlight, { opacity: 1, duration: 0.3 }, '+=0.3')

      /* Phase 4: Question bubble appears */
      tl.to(questionBubble, { opacity: 1, y: 0, duration: 0.45 })

      /* Hold — read the question */
      tl.to({}, { duration: 1.5 })

      /* Phase 5: Response area + typing effect */
      tl.to(responseArea, { opacity: 1, y: 0, duration: 0.35 })
      tl.to(responseText, {
        opacity: 1,
        clipPath: 'inset(0 0% 0 0)',
        duration: 1.6,
        ease: 'power1.inOut',
      })

      /* Phase 6: Coaching feedback slides in */
      tl.to(feedback, { opacity: 1, x: 0, duration: 0.4, ease: 'power2.out' }, '-=0.3')

      /* Phase 7: Score ring animates */
      tl.to(scoreRing, {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 0.5,
        ease: 'power2.out',
      }, '-=0.2')
      tl.to(scoreLabel, { opacity: 1, duration: 0.25 }, '-=0.15')

      /* Hold — let it breathe */
      tl.to({}, { duration: 2.5 })

      /* Phase 8: Everything fades out */
      tl.to(
        [panel, header, ...audienceCards, questionBubble, questionHighlight, responseArea, responseText, feedback, scoreRing, scoreLabel],
        { opacity: 0, duration: 0.8, ease: 'power1.inOut' }
      )
    },
    { scope: containerRef }
  )

  return (
    <div ref={containerRef} className="relative min-h-[420px]">
      <div
        data-panel=""
        className="absolute inset-0 rounded-brand bg-accent-whisper bg-noise-fine overflow-hidden"
        style={{ opacity: 0, backgroundBlendMode: 'overlay' }}
      >
        {/* Header */}
        <div
          data-header=""
          className="px-5 pt-5 pb-3"
          style={{ opacity: 0 }}
        >
          <p className="text-eyebrow-sm font-body-medium uppercase tracking-eyebrow text-copy-light mb-1">
            Q&A Practice
          </p>
          <p className="font-heading text-body tracking-heading text-dark">
            Ready for tough questions?
          </p>
        </div>

        {/* Audience panel — 3 interviewers */}
        <div className="px-5 pb-3">
          <div className="grid grid-cols-3 gap-2.5">
            {[
              { name: 'Anjali', style: 'Detail Explorer', initials: 'A' },
              { name: 'Marcus', style: 'Big Picture Thinker', initials: 'M' },
              { name: 'David', style: 'Critical Thinker', initials: 'D' },
            ].map((person, i) => (
              <div
                key={person.name}
                data-audience=""
                className="relative text-center p-3 rounded-brand-sm bg-surface-white border border-border"
                style={{ opacity: 0 }}
              >
                {/* Highlight ring on the active questioner (Marcus) */}
                {i === 1 && (
                  <div
                    data-question-highlight=""
                    className="absolute inset-0 rounded-brand-sm border-2 border-accent pointer-events-none"
                    style={{ opacity: 0 }}
                  />
                )}
                <div className="w-8 h-8 rounded-full bg-accent-soft/30 flex items-center justify-center mx-auto mb-1.5">
                  <span className="text-caption font-body-medium text-accent">{person.initials}</span>
                </div>
                <p className="text-caption font-body-medium text-dark leading-tight">{person.name}</p>
                <p className="text-[9px] text-accent mt-0.5">{person.style}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Question bubble */}
        <div className="px-5 pb-3">
          <div
            data-question=""
            className="px-3.5 py-2.5 rounded-brand-sm bg-surface-white border border-border"
            style={{ opacity: 0 }}
          >
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-caption font-body-medium text-accent">Marcus</span>
              <span className="text-[9px] text-copy-faint">Big Picture Thinker</span>
            </div>
            <p className="text-caption text-copy-mid leading-relaxed">
              &ldquo;Your implementation timeline shows three phases, but how does this connect to the broader strategic vision you outlined earlier?&rdquo;
            </p>
          </div>
        </div>

        {/* User response area */}
        <div className="px-5 pb-3">
          <div
            data-response=""
            className="px-3.5 py-2.5 rounded-brand-sm bg-surface border border-border"
            style={{ opacity: 0 }}
          >
            <p className="text-[9px] font-body-medium text-copy-faint uppercase tracking-eyebrow mb-1">
              Your Response
            </p>
            <p
              data-response-text=""
              className="text-caption text-copy-mid leading-relaxed"
              style={{ opacity: 0 }}
            >
              &ldquo;Great question, Marcus. Each phase directly maps to our three strategic pillars...&rdquo;
            </p>
          </div>
        </div>

        {/* Coaching feedback + score */}
        <div className="px-5 pb-5">
          <div className="flex items-start gap-3">
            <div
              data-feedback=""
              className="flex-1 flex items-start gap-2 px-3 py-2.5 rounded-brand-sm bg-accent-whisper border border-accent-soft/30"
              style={{ opacity: 0 }}
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-accent shrink-0 mt-0.5">
                <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.2" />
                <path d="M6 3.5v3M6 8v.01" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
              <p className="text-[10px] text-accent/90 leading-relaxed">
                Good — you acknowledged the question and bridged back to strategy. Try adding a specific metric.
              </p>
            </div>

            {/* Mini score ring */}
            <div className="relative shrink-0" data-score-ring="" style={{ opacity: 0 }}>
              <svg width="36" height="36" viewBox="0 0 36 36">
                <circle
                  cx="18" cy="18" r="14"
                  fill="none" stroke="currentColor" strokeWidth="2.5"
                  className="text-accent-soft/30"
                />
                <circle
                  cx="18" cy="18" r="14"
                  fill="none" stroke="currentColor" strokeWidth="2.5"
                  strokeDasharray={`${0.72 * 2 * Math.PI * 14} ${2 * Math.PI * 14}`}
                  strokeLinecap="round"
                  className="text-accent"
                  style={{ transformOrigin: 'center', transform: 'rotate(-90deg)' }}
                />
              </svg>
              <span
                data-score-label=""
                className="absolute inset-0 flex items-center justify-center text-[9px] font-body-medium text-accent"
                style={{ opacity: 0 }}
              >
                72
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
