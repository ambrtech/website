'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { gsapRevealEase } from '@/lib/easing'
import Image from 'next/image'
import { MockFrame } from '@/components/ui/mock-frame'

/* ─────────────────────────────────────────────────────
   Training Nudge C: "Email Notification"

   An email notification preview appears as a mobile-style
   banner, then opens into a full email client view with
   the Ambr AI training nudge as a well-designed HTML
   email. Captures the email-first nudge experience.
   ───────────────────────────────────────────────────── */

export function TrainingNudgeAnimatedC() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const el = containerRef.current
      if (!el) return

      const phoneBanner = el.querySelector('[data-phone-banner]')
      const bannerIcon = el.querySelector('[data-banner-icon]')
      const bannerText = el.querySelector('[data-banner-text]')
      const emailShell = el.querySelector('[data-email-shell]')
      const emailToolbar = el.querySelector('[data-email-toolbar]')
      const emailFrom = el.querySelector('[data-email-from]')
      const emailSubject = el.querySelector('[data-email-subject]')
      const emailBody = el.querySelector('[data-email-body]')
      const emailCard = el.querySelector('[data-email-card]')
      const emailProgress = el.querySelector('[data-email-progress]')
      const emailCta = el.querySelector('[data-email-cta]')
      const emailFooter = el.querySelector('[data-email-footer]')

      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.8,
        defaults: { ease: gsapRevealEase },
      })

      /* Initial state */
      tl.set(phoneBanner, { opacity: 0, y: -24 })
      tl.set(bannerIcon, { opacity: 0, scale: 0.5 })
      tl.set(bannerText, { opacity: 0 })
      tl.set(emailShell, { opacity: 0, scale: 0.95 })
      tl.set(emailToolbar, { opacity: 0, y: -6 })
      tl.set(emailFrom, { opacity: 0, y: 6 })
      tl.set(emailSubject, { opacity: 0, y: 6 })
      tl.set(emailBody, { opacity: 0, y: 8 })
      tl.set(emailCard, { opacity: 0, scale: 0.97 })
      tl.set(emailProgress, { scaleX: 0 })
      tl.set(emailCta, { opacity: 0, y: 8 })
      tl.set(emailFooter, { opacity: 0 })

      /* Phase 1: Phone notification banner slides down */
      tl.to(phoneBanner, { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out' })
      tl.to(bannerIcon, { opacity: 1, scale: 1, duration: 0.25, ease: 'back.out(2)' }, '-=0.2')
      tl.to(bannerText, { opacity: 1, duration: 0.25 }, '-=0.1')

      /* Hold banner */
      tl.to({}, { duration: 1.2 })

      /* Phase 2: Banner slides away, email opens */
      tl.to(phoneBanner, { opacity: 0, y: -12, duration: 0.3, ease: 'power2.in' })
      tl.to(emailShell, { opacity: 1, scale: 1, duration: 0.5, ease: 'power2.out' }, '-=0.15')

      /* Phase 3: Email chrome */
      tl.to(emailToolbar, { opacity: 1, y: 0, duration: 0.3 }, '-=0.2')
      tl.to(emailFrom, { opacity: 1, y: 0, duration: 0.3 })
      tl.to(emailSubject, { opacity: 1, y: 0, duration: 0.3 }, '-=0.15')

      /* Phase 4: Email body */
      tl.to(emailBody, { opacity: 1, y: 0, duration: 0.35 })

      /* Phase 5: Training card within email */
      tl.to(emailCard, { opacity: 1, scale: 1, duration: 0.4, ease: 'power2.out' })
      tl.to(emailProgress, { scaleX: 1, duration: 0.6, ease: 'power2.out' })
      tl.to(emailCta, { opacity: 1, y: 0, duration: 0.35 }, '-=0.2')
      tl.to(emailFooter, { opacity: 1, duration: 0.25 })

      /* Hold — read the email */
      tl.to({}, { duration: 2.8 })

      /* Phase 6: Everything fades */
      tl.to(
        [emailShell, emailToolbar, emailFrom, emailSubject, emailBody, emailCard, emailCta, emailFooter],
        { opacity: 0, duration: 0.8, ease: 'power1.inOut' }
      )
    },
    { scope: containerRef }
  )

  return (
    <MockFrame ref={containerRef} height="compact">
      {/* ── Phone notification banner (centered top) ── */}
      <div className="absolute inset-0 flex justify-center pt-16 pointer-events-none">
        <div
          data-phone-banner=""
          className="w-[260px] flex items-start gap-2.5 p-3 rounded-brand bg-surface-white border border-border shadow-card"
          style={{ opacity: 0 }}
        >
          <div
            data-banner-icon=""
            className="w-7 h-7 rounded-brand-sm bg-accent-soft/40 flex items-center justify-center shrink-0"
            style={{ opacity: 0 }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-accent">
              <rect x="2" y="3" width="10" height="7" rx="1" stroke="currentColor" strokeWidth="1.2" />
              <path d="M2 4l5 3 5-3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
          </div>
          <div
            data-banner-text=""
            className="min-w-0"
            style={{ opacity: 0 }}
          >
            <p className="text-[10px] font-body-medium text-dark leading-tight">Ambr AI</p>
            <p className="text-[9px] text-copy-mid leading-snug mt-0.5">
              You&apos;re almost done with Performance Feedback — 2 scenarios left!
            </p>
          </div>
        </div>
      </div>

      {/* ── Email client shell ── */}
      <div
        data-email-shell=""
        className="absolute inset-0 rounded-brand bg-surface-white border border-border overflow-hidden flex flex-col"
        style={{ opacity: 0 }}
      >
        {/* Toolbar */}
        <div
          data-email-toolbar=""
          className="flex items-center gap-3 px-4 py-2.5 border-b border-border bg-surface"
          style={{ opacity: 0 }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-copy-faint">
            <path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-caption text-copy-faint">Inbox</span>
          <div className="ml-auto flex items-center gap-2.5">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-copy-faint">
              <path d="M1 3h10M1 6h10M1 9h10" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
            </svg>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-copy-faint">
              <path d="M10 2L4 10M4 2l6 8" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        {/* Email content */}
        <div className="flex-1 overflow-hidden px-5 py-4 space-y-3">
          {/* From */}
          <div
            data-email-from=""
            className="flex items-center gap-2.5"
            style={{ opacity: 0 }}
          >
            <div className="w-8 h-8 rounded-full overflow-hidden shrink-0">
              <Image
                src="/ambr/a-mark-accent.png"
                alt="Ambr AI"
                width={32}
                height={32}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-caption font-body-medium text-dark">Ambr AI</p>
              <p className="text-[9px] text-copy-faint">notifications@ambr.ai</p>
            </div>
            <span className="ml-auto text-[9px] text-copy-faint">10:24 AM</span>
          </div>

          {/* Subject */}
          <div data-email-subject="" style={{ opacity: 0 }}>
            <p className="font-heading text-body-sm tracking-heading text-dark">
              Your training is almost complete
            </p>
          </div>

          {/* Body text */}
          <div data-email-body="" style={{ opacity: 0 }}>
            <p className="text-caption text-copy-mid leading-relaxed">
              Hi Sarah, you&apos;ve made great progress on the Performance Feedback journey.
              Just 2 more scenarios to go.
            </p>
          </div>

          {/* Embedded training card */}
          <div
            data-email-card=""
            className="p-4 rounded-brand-sm bg-accent-whisper border border-accent-soft/30 space-y-3"
            style={{ opacity: 0 }}
          >
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-brand-sm bg-accent-soft/40 flex items-center justify-center">
                <span className="text-[8px] font-body-medium text-accent">A</span>
              </div>
              <span className="text-caption font-body-medium text-dark">Performance Feedback</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex-1 h-2 rounded-full bg-surface-white overflow-hidden">
                <div
                  data-email-progress=""
                  className="h-full rounded-full bg-accent-soft origin-left"
                  style={{ width: '71%', transform: 'scaleX(0)' }}
                />
              </div>
              <span className="text-caption font-body-medium text-accent shrink-0">71%</span>
            </div>

            <p className="text-caption text-copy-mid">
              Next scenario: <span className="font-body-medium text-dark">Delivering feedback to a defensive team member</span>
            </p>

            <div
              data-email-cta=""
              className="pt-1"
              style={{ opacity: 0 }}
            >
              <span className="inline-block rounded-brand-sm bg-accent text-surface-white px-5 py-2 text-caption font-body-medium">
                Continue training
              </span>
            </div>
          </div>

          {/* Footer */}
          <p
            data-email-footer=""
            className="text-[9px] text-copy-faint leading-relaxed pt-1"
            style={{ opacity: 0 }}
          >
            Sent by Ambr AI on behalf of your L&D team. Unsubscribe from training reminders.
          </p>
        </div>
      </div>
    </MockFrame>
  )
}
