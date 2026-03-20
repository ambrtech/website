'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { gsapRevealEase } from '@/lib/easing'
import { MockFrame } from '@/components/ui/mock-frame'

/* ─────────────────────────────────────────────────────
   Concept B: "Notification Preview"

   Instead of showing the settings panel, this concept
   shows the *outcome* — notification previews appearing
   across different channels (Slack, Teams, Email). Each
   notification slides in like a real toast/message,
   demonstrating what the team actually sees. Shows the
   admin the value of engagement features in action.
   ───────────────────────────────────────────────────── */

function SlackIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0">
      <path d="M3 8.5a1.5 1.5 0 1 1 0-3h3v3a1.5 1.5 0 0 1-3 0Z" fill="currentColor" />
      <path d="M5.5 3a1.5 1.5 0 1 1 3 0v3h-3a1.5 1.5 0 0 1 0-3Z" fill="currentColor" />
      <path d="M11 5.5a1.5 1.5 0 1 1 0 3H8v-3a1.5 1.5 0 0 1 3 0Z" fill="currentColor" />
      <path d="M8.5 11a1.5 1.5 0 1 1-3 0V8h3a1.5 1.5 0 0 1 0 3Z" fill="currentColor" />
    </svg>
  )
}

function TeamsIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0">
      <rect x="1" y="3" width="8" height="8" rx="1" fill="currentColor" />
      <circle cx="11" cy="5" r="2" fill="currentColor" opacity="0.6" />
      <rect x="9" y="7" width="4" height="4" rx="0.5" fill="currentColor" opacity="0.4" />
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0">
      <rect x="1" y="3" width="12" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.2" fill="none" />
      <path d="M1.5 3.5L7 7.5L12.5 3.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function StreaksConfigAnimatedB() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const el = containerRef.current
      if (!el) return

      const bg = el.querySelector('[data-bg]')
      const eyebrow = el.querySelector('[data-eyebrow]')
      const title = el.querySelector('[data-title]')
      const slackNotif = el.querySelector('[data-slack]')
      const teamsNotif = el.querySelector('[data-teams]')
      const emailNotif = el.querySelector('[data-email]')
      const digestNotif = el.querySelector('[data-digest]')
      const divider = el.querySelector('[data-divider]')
      const footer = el.querySelector('[data-footer]')

      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.8,
        defaults: { ease: gsapRevealEase },
      })

      /* Initial states */
      tl.set(bg, { opacity: 0 })
      tl.set(eyebrow, { opacity: 0, y: 6 })
      tl.set(title, { opacity: 0, y: 10 })
      tl.set(slackNotif, { opacity: 0, x: -20, y: 4 })
      tl.set(teamsNotif, { opacity: 0, x: 20, y: 4 })
      tl.set(emailNotif, { opacity: 0, y: 12 })
      tl.set(digestNotif, { opacity: 0, y: 12 })
      tl.set(divider, { scaleX: 0 })
      tl.set(footer, { opacity: 0, y: 6 })

      /* Phase 1: Card */
      tl.to(bg, { opacity: 1, duration: 0.5, ease: 'power1.out' })

      /* Phase 2: Header */
      tl.to(eyebrow, { opacity: 1, y: 0, duration: 0.35 }, '-=0.2')
      tl.to(title, { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out' }, '-=0.15')

      /* Phase 3: Slack notification slides in from left */
      tl.to(slackNotif, { opacity: 1, x: 0, y: 0, duration: 0.5, ease: 'power2.out' })

      /* Phase 4: Teams notification slides in from right */
      tl.to(teamsNotif, { opacity: 1, x: 0, y: 0, duration: 0.5, ease: 'power2.out' }, '-=0.2')

      /* Phase 5: Email notification rises */
      tl.to(emailNotif, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, '-=0.2')

      /* Phase 6: Divider */
      tl.to(divider, { scaleX: 1, duration: 0.4, ease: 'power2.inOut' })

      /* Phase 7: Admin digest notification */
      tl.to(digestNotif, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' })

      /* Phase 8: Footer */
      tl.to(footer, { opacity: 1, y: 0, duration: 0.35 }, '-=0.2')

      /* Phase 9: Hold */
      tl.to({}, { duration: 3 })

      /* Phase 10: Fade out */
      tl.to(
        el.querySelectorAll('[data-bg], [data-eyebrow], [data-title], [data-slack], [data-teams], [data-email], [data-digest], [data-divider], [data-footer]'),
        { opacity: 0, duration: 0.9, ease: 'power1.inOut' }
      )
    },
    { scope: containerRef }
  )

  return (
    <MockFrame ref={containerRef} height="tall">
      {/* Background */}
      <div
        data-bg=""
        className="absolute inset-0 rounded-brand bg-accent-whisper"
        style={{ opacity: 0 }}
      />

      <div className="relative px-6 py-6">
        {/* Eyebrow */}
        <div data-eyebrow="" className="flex items-center gap-2 mb-2" style={{ opacity: 0 }}>
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span className="text-eyebrow-sm font-body-medium uppercase tracking-eyebrow text-accent">
            Engagement
          </span>
        </div>

        {/* Title */}
        <h3
          data-title=""
          className="font-heading text-body text-dark tracking-heading leading-snug mb-5"
          style={{ opacity: 0 }}
        >
          Reach your team where they work
        </h3>

        {/* Notification previews */}
        <div className="space-y-3 mb-4">
          {/* Slack notification */}
          <div
            data-slack=""
            className="p-3 rounded-brand-sm bg-surface-white/80 border border-border flex items-start gap-3"
            style={{ opacity: 0 }}
          >
            <div className="w-6 h-6 rounded bg-accent-tint flex items-center justify-center mt-0.5 text-accent">
              <SlackIcon />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-caption font-body-medium text-dark">Slack</span>
                <span className="text-detail text-copy-faint">just now</span>
              </div>
              <p className="text-detail text-copy-mid leading-relaxed">
                You are 1 scenario away from your weekly streak goal. Keep it going!
              </p>
            </div>
          </div>

          {/* Teams notification */}
          <div
            data-teams=""
            className="p-3 rounded-brand-sm bg-surface-white/80 border border-border flex items-start gap-3"
            style={{ opacity: 0 }}
          >
            <div className="w-6 h-6 rounded bg-accent-tint flex items-center justify-center mt-0.5 text-accent">
              <TeamsIcon />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-caption font-body-medium text-dark">Microsoft Teams</span>
                <span className="text-detail text-copy-faint">2m ago</span>
              </div>
              <p className="text-detail text-copy-mid leading-relaxed">
                New scenario assigned: Navigating a difficult performance review.
              </p>
            </div>
          </div>

          {/* Email notification */}
          <div
            data-email=""
            className="p-3 rounded-brand-sm bg-surface-white/80 border border-border flex items-start gap-3"
            style={{ opacity: 0 }}
          >
            <div className="w-6 h-6 rounded bg-accent-tint flex items-center justify-center mt-0.5 text-accent">
              <EmailIcon />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-caption font-body-medium text-dark">Email</span>
                <span className="text-detail text-copy-faint">10:30 AM</span>
              </div>
              <p className="text-detail text-copy-mid leading-relaxed">
                Weekly reminder: 3 team members have incomplete journeys this week.
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          data-divider=""
          className="h-[1.5px] bg-gradient-to-r from-accent-soft via-accent-soft/40 to-transparent mb-3 origin-left"
          style={{ transform: 'scaleX(0)' }}
        />

        {/* Admin digest preview */}
        <div
          data-digest=""
          className="p-3 rounded-brand-sm bg-accent-tint/40 border border-accent-soft/20"
          style={{ opacity: 0 }}
        >
          <p className="text-caption font-body-medium text-dark mb-0.5">Admin digest</p>
          <p className="text-detail text-copy-mid leading-relaxed">
            Weekly summary: 89% engagement rate, 12 completions, 3 users need attention.
          </p>
        </div>

        {/* Footer */}
        <p data-footer="" className="text-detail text-copy-light mt-3 text-center" style={{ opacity: 0 }}>
          All channels configurable per team
        </p>
      </div>
    </MockFrame>
  )
}
