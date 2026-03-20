'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { gsapRevealEase } from '@/lib/easing'
import { MockFrame } from '@/components/ui/mock-frame'

/* ─────────────────────────────────────────────────────
   Dashboard B: "The Growth Ladder"

   People-first representation: shows individual team
   members improving at specific competencies over time.
   Uses horizontal progress bars that animate from
   "before" to "after" states, with person initials
   and competency labels. The metaphor is a team
   collectively climbing — each person's improvement
   is visible and celebrated.
   ───────────────────────────────────────────────────── */

interface TeamMember {
  initials: string
  name: string
  competency: string
  before: number /* 0-100 */
  after: number  /* 0-100 */
  level: string
}

const members: TeamMember[] = [
  { initials: 'SK', name: 'S. Kapoor', competency: 'Empathetic delivery', before: 38, after: 74, level: 'Proficient' },
  { initials: 'JR', name: 'J. Reeves', competency: 'De-escalation', before: 45, after: 82, level: 'Advanced' },
  { initials: 'ML', name: 'M. Liu', competency: 'Active listening', before: 52, after: 78, level: 'Proficient' },
  { initials: 'AT', name: 'A. Torres', competency: 'Constructive framing', before: 30, after: 65, level: 'Developing' },
]

const insights = [
  { label: 'Team strengths', text: 'Building rapport and genuine care' },
  { label: 'Growth area', text: 'Clear openings and stating purpose' },
]

export function DashboardAnimatedB() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const el = containerRef.current
      if (!el) return

      const header = el.querySelector('[data-header]')
      const subline = el.querySelector('[data-subline]')
      const memberRows = el.querySelectorAll('[data-member]')
      const beforeBars = el.querySelectorAll('[data-bar-before]')
      const afterBars = el.querySelectorAll('[data-bar-after]')
      const levelBadges = el.querySelectorAll('[data-level]')
      const divider = el.querySelector('[data-divider]')
      const insightItems = el.querySelectorAll('[data-insight-item]')
      const summaryLine = el.querySelector('[data-summary]')

      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.8,
        defaults: { ease: gsapRevealEase },
      })

      /* Initial state */
      tl.set(header, { opacity: 0, y: 10 })
      tl.set(subline, { opacity: 0 })
      tl.set(memberRows, { opacity: 0, y: 14 })
      tl.set(beforeBars, { scaleX: 0 })
      tl.set(afterBars, { scaleX: 0 })
      tl.set(levelBadges, { opacity: 0, scale: 0.8 })
      tl.set(divider, { scaleX: 0 })
      tl.set(insightItems, { opacity: 0, x: -10 })
      tl.set(summaryLine, { opacity: 0, y: 8 })

      /* Phase 1: Header */
      tl.to(header, { opacity: 1, y: 0, duration: 0.45 })
      tl.to(subline, { opacity: 1, duration: 0.3 }, '-=0.15')

      /* Phase 2: Member rows appear */
      tl.to(memberRows, {
        opacity: 1,
        y: 0,
        duration: 0.4,
        stagger: 0.12,
      })

      /* Phase 3: "Before" bars fill */
      tl.to(beforeBars, {
        scaleX: 1,
        duration: 0.5,
        stagger: 0.08,
        ease: 'power2.out',
      })

      /* Phase 4: Hold on "before" */
      tl.to({}, { duration: 0.8 })

      /* Phase 5: "After" bars extend beyond, showing growth */
      tl.to(afterBars, {
        scaleX: 1,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power2.out',
      })

      /* Phase 6: Level badges pop */
      tl.to(levelBadges, {
        opacity: 1,
        scale: 1,
        duration: 0.3,
        stagger: 0.08,
        ease: 'back.out(2)',
      })

      /* Phase 7: Divider + insights */
      tl.to(divider, {
        scaleX: 1,
        duration: 0.4,
        ease: 'power2.inOut',
      })
      tl.to(insightItems, {
        opacity: 1,
        x: 0,
        duration: 0.35,
        stagger: 0.1,
      })

      /* Phase 8: Summary */
      tl.to(summaryLine, {
        opacity: 1,
        y: 0,
        duration: 0.4,
      })

      /* Phase 9: Hold */
      tl.to({}, { duration: 2.2 })

      /* Phase 10: Fade */
      tl.to(el.children, {
        opacity: 0,
        duration: 0.8,
        ease: 'power1.inOut',
      })
    },
    { scope: containerRef }
  )

  return (
    <MockFrame ref={containerRef} height="tall">
      {/* Header */}
      <div className="mb-4">
        <div className="flex items-center justify-between">
          <span
            data-header=""
            className="text-eyebrow-sm font-body-medium uppercase tracking-eyebrow text-copy-light"
            style={{ opacity: 0 }}
          >
            Learning Insights
          </span>
          <span
            data-subline=""
            className="text-caption text-copy-faint"
            style={{ opacity: 0 }}
          >
            12-week program
          </span>
        </div>
      </div>

      {/* Member growth rows */}
      <div className="space-y-4">
        {members.map((member) => (
          <div
            key={member.initials}
            data-member=""
            className="space-y-1.5"
            style={{ opacity: 0 }}
          >
            {/* Row header: avatar + name + competency + level */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {/* Avatar circle */}
                <div className="w-6 h-6 rounded-full bg-accent-soft/40 flex items-center justify-center">
                  <span className="text-[8px] font-body-medium text-accent">
                    {member.initials}
                  </span>
                </div>
                <div>
                  <span className="text-caption font-body-medium text-dark">
                    {member.name}
                  </span>
                  <span className="text-[10px] text-copy-light ml-1.5">
                    {member.competency}
                  </span>
                </div>
              </div>
              <span
                data-level=""
                className={`text-[9px] font-body-medium px-2 py-0.5 rounded-full shrink-0 ${
                  member.level === 'Advanced'
                    ? 'text-accent bg-accent/10'
                    : member.level === 'Proficient'
                      ? 'text-copy-mid bg-accent-soft/30'
                      : 'text-copy-light bg-surface'
                }`}
                style={{ opacity: 0 }}
              >
                {member.level}
              </span>
            </div>

            {/* Progress bar — layered before/after */}
            <div className="relative h-2 rounded-full bg-surface overflow-hidden">
              {/* Before bar (muted) */}
              <div
                data-bar-before=""
                className="absolute inset-y-0 left-0 rounded-full bg-accent-soft/40 origin-left"
                style={{ width: `${member.before}%`, transform: 'scaleX(0)' }}
              />
              {/* After bar (accent) */}
              <div
                data-bar-after=""
                className="absolute inset-y-0 left-0 rounded-full bg-accent origin-left"
                style={{ width: `${member.after}%`, transform: 'scaleX(0)' }}
              />
            </div>

            {/* Before/After labels */}
            <div className="flex items-center justify-between">
              <span className="text-[9px] text-copy-faint">
                Week 1: {member.before}%
              </span>
              <span className="text-[9px] font-body-medium text-accent">
                +{member.after - member.before}% growth
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div
        data-divider=""
        className="h-px bg-gradient-to-r from-accent-soft via-accent-soft/40 to-transparent my-4 origin-left"
        style={{ transform: 'scaleX(0)' }}
      />

      {/* AI-generated insights */}
      <div className="grid grid-cols-2 gap-3">
        {insights.map((item) => (
          <div
            key={item.label}
            data-insight-item=""
            className="p-2.5 rounded-brand-sm bg-surface border border-border"
            style={{ opacity: 0 }}
          >
            <p className="text-[9px] font-body-medium text-copy-light uppercase tracking-eyebrow mb-1">
              {item.label}
            </p>
            <p className="text-caption text-copy-mid leading-relaxed">
              {item.text}
            </p>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div
        data-summary=""
        className="mt-3 text-center"
        style={{ opacity: 0 }}
      >
        <p className="text-caption text-copy-mid">
          <span className="font-body-medium text-dark">4 of 4 team members improved</span>{' '}
          across all measured competencies.
        </p>
      </div>
    </MockFrame>
  )
}
