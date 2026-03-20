'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { gsapRevealEase } from '@/lib/easing'
import { MockFrame } from '@/components/ui/mock-frame'

/* ─────────────────────────────────────────────────────
   Concept C: "Team Leaderboard"

   An editorial-style team roster where individual scores
   animate upward, showing who is improving most. Feels
   like a warm, non-competitive recognition board —
   everyone is getting better.
   ───────────────────────────────────────────────────── */

const teamMembers = [
  { initials: 'SK', name: 'Sarah Kim', role: 'Sales Manager', score: 86, change: '+12', streak: 8 },
  { initials: 'JH', name: 'James Hall', role: 'Account Executive', score: 79, change: '+9', streak: 5 },
  { initials: 'RA', name: 'Riya Anand', role: 'Team Lead', score: 74, change: '+15', streak: 11 },
  { initials: 'MT', name: 'Marcus Torres', role: 'Sales Rep', score: 71, change: '+8', streak: 3 },
]

export function UsageAnalyticsAnimatedC() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const el = containerRef.current
      if (!el) return

      const bg = el.querySelector('[data-bg]')
      const eyebrow = el.querySelector('[data-eyebrow]')
      const title = el.querySelector('[data-title]')
      const statCards = el.querySelectorAll('[data-stat]')
      const sectionLabel = el.querySelector('[data-section-label]')
      const members = el.querySelectorAll('[data-member]')
      const scores = el.querySelectorAll('[data-score]')
      const changes = el.querySelectorAll('[data-change]')
      const streaks = el.querySelectorAll('[data-streak]')

      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.8,
        defaults: { ease: gsapRevealEase },
      })

      /* Initial states */
      tl.set(bg, { opacity: 0 })
      tl.set(eyebrow, { opacity: 0, y: 6 })
      tl.set(title, { opacity: 0, y: 10 })
      tl.set(statCards, { opacity: 0, y: 8 })
      tl.set(sectionLabel, { opacity: 0 })
      tl.set(members, { opacity: 0, x: -10 })
      tl.set(scores, { opacity: 0, scale: 0.5 })
      tl.set(changes, { opacity: 0, y: 4 })
      tl.set(streaks, { opacity: 0 })

      /* Phase 1: Card */
      tl.to(bg, { opacity: 1, duration: 0.5, ease: 'power1.out' })

      /* Phase 2: Header */
      tl.to(eyebrow, { opacity: 1, y: 0, duration: 0.35 }, '-=0.2')
      tl.to(title, { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out' }, '-=0.15')

      /* Phase 3: Summary stat cards */
      tl.to(statCards, { opacity: 1, y: 0, duration: 0.35, stagger: 0.1, ease: 'power2.out' })

      /* Phase 4: Section label */
      tl.to(sectionLabel, { opacity: 1, duration: 0.3 })

      /* Phase 5: Team members slide in one by one */
      members.forEach((member, i) => {
        tl.to(member, { opacity: 1, x: 0, duration: 0.35 }, i === 0 ? undefined : '-=0.2')
        tl.to(scores[i], { opacity: 1, scale: 1, duration: 0.25, ease: 'back.out(2)' }, '-=0.15')
        tl.to(changes[i], { opacity: 1, y: 0, duration: 0.2 }, '-=0.1')
        tl.to(streaks[i], { opacity: 1, duration: 0.15 }, '-=0.1')
      })

      /* Phase 6: Hold */
      tl.to({}, { duration: 3 })

      /* Phase 7: Fade out */
      tl.to(
        el.querySelectorAll('[data-bg], [data-eyebrow], [data-title], [data-stat], [data-section-label], [data-member], [data-score], [data-change], [data-streak]'),
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
            Team Performance
          </span>
        </div>

        {/* Title */}
        <h3
          data-title=""
          className="font-heading text-body text-dark tracking-heading leading-snug mb-4"
          style={{ opacity: 0 }}
        >
          Everyone is getting better
        </h3>

        {/* Summary stats */}
        <div className="grid grid-cols-3 gap-2 mb-5">
          {[
            { value: '74%', label: 'Avg. score', accent: false },
            { value: '+8%', label: 'This quarter', accent: true },
            { value: '142', label: 'Active users', accent: false },
          ].map((stat) => (
            <div
              key={stat.label}
              data-stat=""
              className="p-2.5 rounded-brand-sm bg-surface-white/60 border border-border"
              style={{ opacity: 0 }}
            >
              <p className={`font-heading text-label tracking-heading leading-none ${stat.accent ? 'text-accent' : 'text-dark'}`}>
                {stat.value}
              </p>
              <p className="text-detail text-copy-faint mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Section label */}
        <p
          data-section-label=""
          className="text-caption font-body-medium text-copy-mid mb-3"
          style={{ opacity: 0 }}
        >
          Most improved this quarter
        </p>

        {/* Team member list */}
        <div className="space-y-0 rounded-brand-sm border border-border overflow-hidden">
          {teamMembers.map((member, i) => (
            <div
              key={member.initials}
              data-member=""
              className={`flex items-center gap-3 px-3 py-2.5 bg-surface-white/80 ${
                i !== teamMembers.length - 1 ? 'border-b border-border' : ''
              }`}
              style={{ opacity: 0 }}
            >
              {/* Avatar */}
              <div className="w-7 h-7 rounded-full bg-accent-tint border border-accent-soft/30 flex items-center justify-center shrink-0">
                <span className="text-detail font-body-medium text-accent">{member.initials}</span>
              </div>

              {/* Name and role */}
              <div className="flex-1 min-w-0">
                <p className="text-caption font-body-medium text-dark leading-tight">{member.name}</p>
                <p className="text-detail text-copy-faint">{member.role}</p>
              </div>

              {/* Streak indicator */}
              <span
                data-streak=""
                className="text-detail text-copy-light shrink-0"
                style={{ opacity: 0 }}
              >
                {member.streak}d streak
              </span>

              {/* Score */}
              <span
                data-score=""
                className="font-heading text-caption tracking-heading text-dark shrink-0 w-8 text-right"
                style={{ opacity: 0 }}
              >
                {member.score}%
              </span>

              {/* Change */}
              <span
                data-change=""
                className="text-detail text-accent font-body-medium shrink-0 w-7 text-right"
                style={{ opacity: 0 }}
              >
                {member.change}
              </span>
            </div>
          ))}
        </div>
      </div>
    </MockFrame>
  )
}
