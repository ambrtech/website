'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { gsapRevealEase } from '@/lib/easing'

/* ─────────────────────────────────────────────────────
   Concept A: "The Debrief Dashboard"

   A warm editorial card with animated circular gauges
   for talk-listen balance and speech pace, plus a
   single coaching insight that reveals. Quantitative-
   first: the numbers tell the story before the words.
   ───────────────────────────────────────────────────── */

/** Circular arc for talk-listen and pace gauges */
function GaugeArc({
  dataAttr,
  radius,
  progress,
  className,
}: {
  dataAttr: string
  radius: number
  progress: number
  className: string
}) {
  const circumference = 2 * Math.PI * radius
  const dashLen = progress * circumference
  return (
    <circle
      {...{ [`data-${dataAttr}`]: '' }}
      cx="50"
      cy="50"
      r={radius}
      fill="none"
      stroke="currentColor"
      strokeWidth="5"
      strokeDasharray={`${dashLen} ${circumference}`}
      strokeLinecap="round"
      className={className}
      style={{ transformOrigin: 'center', transform: 'rotate(-90deg)', opacity: 0 }}
    />
  )
}

export function FeedbackPanelAnimatedA() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const el = containerRef.current
      if (!el) return

      const bg = el.querySelector('[data-bg]')
      const eyebrow = el.querySelector('[data-eyebrow]')
      const title = el.querySelector('[data-title]')

      // Talk-listen gauge
      const tlTrack = el.querySelector('[data-tl-track]')
      const tlArc = el.querySelector('[data-tl-arc]')
      const tlLabel = el.querySelector('[data-tl-label]')
      const tlValue = el.querySelector('[data-tl-value]')
      const tlCaption = el.querySelector('[data-tl-caption]')

      // Pace gauge
      const paceTrack = el.querySelector('[data-pace-track]')
      const paceArc = el.querySelector('[data-pace-arc]')
      const paceLabel = el.querySelector('[data-pace-label]')
      const paceValue = el.querySelector('[data-pace-value]')
      const paceCaption = el.querySelector('[data-pace-caption]')

      // Divider and coaching insight
      const divider = el.querySelector('[data-divider]')
      const insightIcon = el.querySelector('[data-insight-icon]')
      const insightText = el.querySelector('[data-insight-text]')
      const insightIcon2 = el.querySelector('[data-insight-icon-2]')
      const insightText2 = el.querySelector('[data-insight-text-2]')

      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.8,
        defaults: { ease: gsapRevealEase },
      })

      /* Initial states */
      tl.set(bg, { opacity: 0 })
      tl.set(eyebrow, { opacity: 0, y: 6 })
      tl.set(title, { opacity: 0, y: 10 })
      tl.set([tlTrack, paceTrack], { opacity: 0, scale: 0.8 })
      tl.set([tlArc, paceArc], { opacity: 0 })
      tl.set([tlLabel, paceLabel], { opacity: 0 })
      tl.set([tlValue, paceValue], { opacity: 0, scale: 0.5 })
      tl.set([tlCaption, paceCaption], { opacity: 0, y: 4 })
      tl.set(divider, { scaleX: 0 })
      tl.set(insightIcon, { opacity: 0, scale: 0 })
      tl.set(insightText, { opacity: 0, y: 6 })
      tl.set(insightIcon2, { opacity: 0, scale: 0 })
      tl.set(insightText2, { opacity: 0, y: 6 })

      /* Phase 1: Background card */
      tl.to(bg, { opacity: 1, duration: 0.5, ease: 'power1.out' })

      /* Phase 2: Eyebrow + title */
      tl.to(eyebrow, { opacity: 1, y: 0, duration: 0.35 }, '-=0.2')
      tl.to(title, { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out' }, '-=0.15')

      /* Phase 3: Talk-listen gauge — track appears, then arc fills */
      tl.to(tlTrack, { opacity: 1, scale: 1, duration: 0.4, ease: 'power2.out' })
      tl.to(tlArc, { opacity: 1, duration: 0.05 }, '-=0.1')
      tl.fromTo(
        tlArc,
        { strokeDasharray: `0 ${2 * Math.PI * 38}` },
        {
          strokeDasharray: `${0.36 * 2 * Math.PI * 38} ${2 * Math.PI * 38}`,
          duration: 0.9,
          ease: 'power2.out',
        },
        '-=0.05'
      )
      tl.to(tlValue, { opacity: 1, scale: 1, duration: 0.3, ease: 'back.out(2)' }, '-=0.5')
      tl.to(tlLabel, { opacity: 1, duration: 0.25 }, '-=0.2')
      tl.to(tlCaption, { opacity: 1, y: 0, duration: 0.3 }, '-=0.1')

      /* Phase 4: Pace gauge — same pattern, staggered */
      tl.to(paceTrack, { opacity: 1, scale: 1, duration: 0.4, ease: 'power2.out' }, '-=0.5')
      tl.to(paceArc, { opacity: 1, duration: 0.05 }, '-=0.1')
      tl.fromTo(
        paceArc,
        { strokeDasharray: `0 ${2 * Math.PI * 38}` },
        {
          strokeDasharray: `${0.72 * 2 * Math.PI * 38} ${2 * Math.PI * 38}`,
          duration: 0.9,
          ease: 'power2.out',
        },
        '-=0.05'
      )
      tl.to(paceValue, { opacity: 1, scale: 1, duration: 0.3, ease: 'back.out(2)' }, '-=0.5')
      tl.to(paceLabel, { opacity: 1, duration: 0.25 }, '-=0.2')
      tl.to(paceCaption, { opacity: 1, y: 0, duration: 0.3 }, '-=0.1')

      /* Phase 5: Divider draws */
      tl.to(divider, { scaleX: 1, duration: 0.5, ease: 'power2.inOut' })

      /* Phase 6: Coaching insights */
      tl.to(insightIcon, { opacity: 1, scale: 1, duration: 0.3, ease: 'back.out(2.5)' })
      tl.to(insightText, { opacity: 1, y: 0, duration: 0.5 }, '-=0.15')
      tl.to(insightIcon2, { opacity: 1, scale: 1, duration: 0.3, ease: 'back.out(2.5)' })
      tl.to(insightText2, { opacity: 1, y: 0, duration: 0.5 }, '-=0.15')

      /* Phase 7: Hold for reading */
      tl.to({}, { duration: 3.2 })

      /* Phase 8: Fade out */
      tl.to(el.querySelectorAll('[data-bg], [data-eyebrow], [data-title], [data-tl-track], [data-tl-arc], [data-tl-label], [data-tl-value], [data-tl-caption], [data-pace-track], [data-pace-arc], [data-pace-label], [data-pace-value], [data-pace-caption], [data-divider], [data-insight-icon], [data-insight-text], [data-insight-icon-2], [data-insight-text-2]'), {
        opacity: 0,
        duration: 0.9,
        ease: 'power1.inOut',
      })
    },
    { scope: containerRef }
  )

  return (
    <div ref={containerRef} className="relative min-h-[420px]">
      {/* Background */}
      <div
        data-bg=""
        className="absolute inset-0 rounded-brand bg-accent-whisper"
        style={{ opacity: 0 }}
      />

      <div className="relative px-6 py-7 md:px-8">
        {/* Eyebrow */}
        <div data-eyebrow="" className="flex items-center gap-2 mb-3" style={{ opacity: 0 }}>
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span className="text-eyebrow-sm font-body-medium uppercase tracking-eyebrow text-accent">
            Session Debrief
          </span>
        </div>

        {/* Title */}
        <h3
          data-title=""
          className="font-heading text-body text-dark tracking-heading leading-snug mb-6"
          style={{ opacity: 0 }}
        >
          Performance feedback conversation
        </h3>

        {/* Gauge row */}
        <div className="flex items-start gap-6 mb-6">
          {/* Talk-listen gauge */}
          <div className="flex flex-col items-center flex-1">
            <div className="relative w-[100px] h-[100px]">
              <svg
                data-tl-track=""
                viewBox="0 0 100 100"
                className="w-full h-full text-accent-soft/30"
                style={{ opacity: 0 }}
              >
                <circle cx="50" cy="50" r="38" fill="none" stroke="currentColor" strokeWidth="5" />
              </svg>
              {/* Arc overlay — positioned absolutely over the track */}
              <svg
                viewBox="0 0 100 100"
                className="absolute inset-0 w-full h-full text-accent"
              >
                <GaugeArc dataAttr="tl-arc" radius={38} progress={0.36} className="text-accent" />
              </svg>
              {/* Center value */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span
                  data-tl-value=""
                  className="font-heading text-body text-dark tracking-heading leading-none"
                  style={{ opacity: 0 }}
                >
                  36%
                </span>
                <span
                  data-tl-label=""
                  className="text-detail text-copy-light mt-0.5"
                  style={{ opacity: 0 }}
                >
                  talking
                </span>
              </div>
            </div>
            <p
              data-tl-caption=""
              className="text-caption text-copy-mid mt-2 text-center leading-relaxed"
              style={{ opacity: 0 }}
            >
              Balanced listening
            </p>
          </div>

          {/* Pace gauge */}
          <div className="flex flex-col items-center flex-1">
            <div className="relative w-[100px] h-[100px]">
              <svg
                data-pace-track=""
                viewBox="0 0 100 100"
                className="w-full h-full text-accent-soft/30"
                style={{ opacity: 0 }}
              >
                <circle cx="50" cy="50" r="38" fill="none" stroke="currentColor" strokeWidth="5" />
              </svg>
              <svg
                viewBox="0 0 100 100"
                className="absolute inset-0 w-full h-full"
              >
                <GaugeArc dataAttr="pace-arc" radius={38} progress={0.72} className="text-accent-soft" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span
                  data-pace-value=""
                  className="font-heading text-body text-dark tracking-heading leading-none"
                  style={{ opacity: 0 }}
                >
                  105
                </span>
                <span
                  data-pace-label=""
                  className="text-detail text-copy-light mt-0.5"
                  style={{ opacity: 0 }}
                >
                  wpm
                </span>
              </div>
            </div>
            <p
              data-pace-caption=""
              className="text-caption text-copy-mid mt-2 text-center leading-relaxed"
              style={{ opacity: 0 }}
            >
              Steady, measured pace
            </p>
          </div>
        </div>

        {/* Divider */}
        <div
          data-divider=""
          className="h-[1.5px] bg-gradient-to-r from-accent-soft via-accent-soft/40 to-transparent mb-5 origin-left"
          style={{ transform: 'scaleX(0)' }}
        />

        {/* Coaching insights */}
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <div
              data-insight-icon=""
              className="shrink-0 w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center mt-0.5"
              style={{ opacity: 0 }}
            >
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="text-accent">
                <path
                  d="M5 1.5C3.067 1.5 1.5 3.067 1.5 5S3.067 8.5 5 8.5 8.5 6.933 8.5 5 6.933 1.5 5 1.5Z"
                  stroke="currentColor"
                  strokeWidth="0.9"
                />
                <path d="M5 3.5V5.5M5 7V7.01" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
              </svg>
            </div>
            <p
              data-insight-text=""
              className="text-caption text-copy-mid leading-relaxed"
              style={{ opacity: 0 }}
            >
              You listened attentively and gave space for the other person to respond.
              Consider pausing a beat longer after their answers to build trust.
            </p>
          </div>

          <div className="flex items-start gap-3">
            <div
              data-insight-icon-2=""
              className="shrink-0 w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center mt-0.5"
              style={{ opacity: 0 }}
            >
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="text-accent">
                <path
                  d="M5 1.5C3.067 1.5 1.5 3.067 1.5 5S3.067 8.5 5 8.5 8.5 6.933 8.5 5 6.933 1.5 5 1.5Z"
                  stroke="currentColor"
                  strokeWidth="0.9"
                />
                <path d="M5 3.5V5.5M5 7V7.01" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
              </svg>
            </div>
            <p
              data-insight-text-2=""
              className="text-caption text-copy-mid leading-relaxed"
              style={{ opacity: 0 }}
            >
              Your opening acknowledged their strengths before raising the issue — this
              set a collaborative rather than confrontational tone.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
