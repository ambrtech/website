'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { gsapRevealEase } from '@/lib/easing'
import { MockFrame } from '@/components/ui/mock-frame'

/* ---------------------------------------------------------
   Concept A: "Team Roster Assembly"

   A user list builds row by row, then group tags slide in
   next to each user showing their memberships. The admin
   sees their team coming together — names, roles, status
   dots, and group badges all assembling progressively.
   --------------------------------------------------------- */

const users = [
  { initials: 'SK', name: 'Sarah Kim', role: 'Sales Manager', active: true, groups: ['Sales Team', 'London Office'] },
  { initials: 'JH', name: 'James Hall', role: 'Account Executive', active: true, groups: ['Sales Team'] },
  { initials: 'RA', name: 'Riya Anand', role: 'Team Lead', active: false, groups: ['New Managers', 'London Office', 'Sales Team'] },
  { initials: 'MP', name: 'Marcus Price', role: 'SDR', active: true, groups: ['Sales Team'] },
]

export function UserGroupsAnimatedA() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const el = containerRef.current
      if (!el) return

      const card = el.querySelector('[data-card]')
      const header = el.querySelector('[data-header]')
      const count = el.querySelector('[data-count]')
      const rows = el.querySelectorAll('[data-row]')
      const avatars = el.querySelectorAll('[data-avatar]')
      const names = el.querySelectorAll('[data-name]')
      const roles = el.querySelectorAll('[data-role]')
      const dots = el.querySelectorAll('[data-dot]')
      const groupBadges = el.querySelectorAll('[data-group-badge]')
      const summary = el.querySelector('[data-summary]')

      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.8,
        defaults: { ease: gsapRevealEase },
      })

      /* Initial state */
      tl.set(card, { opacity: 0 })
      tl.set(header, { opacity: 0, y: -8 })
      tl.set(count, { opacity: 0 })
      tl.set(rows, { opacity: 0 })
      tl.set(avatars, { opacity: 0, scale: 0.5 })
      tl.set(names, { opacity: 0, x: -8 })
      tl.set(roles, { opacity: 0, x: -8 })
      tl.set(dots, { opacity: 0, scale: 0 })
      tl.set(groupBadges, { opacity: 0, y: 4, scale: 0.8 })
      tl.set(summary, { opacity: 0, y: 6 })

      /* Phase 1: Card appears */
      tl.to(card, { opacity: 1, duration: 0.5, ease: 'power1.out' })

      /* Phase 2: Header slides in */
      tl.to(header, { opacity: 1, y: 0, duration: 0.4 })
      tl.to(count, { opacity: 1, duration: 0.3 }, '-=0.2')

      /* Phase 3: Rows appear one by one */
      rows.forEach((row, i) => {
        const offset = i === 0 ? '+=0.1' : '-=0.1'
        tl.to(row, { opacity: 1, duration: 0.15 }, offset)
        tl.to(avatars[i], { opacity: 1, scale: 1, duration: 0.3, ease: 'back.out(2)' }, '-=0.1')
        tl.to(names[i], { opacity: 1, x: 0, duration: 0.3 }, '-=0.2')
        tl.to(roles[i], { opacity: 1, x: 0, duration: 0.25 }, '-=0.15')
        tl.to(dots[i], { opacity: 1, scale: 1, duration: 0.2, ease: 'back.out(3)' }, '-=0.15')
      })

      /* Phase 4: Group badges pop in across all rows */
      tl.to(groupBadges, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.25,
        stagger: 0.08,
        ease: 'back.out(2)',
      }, '+=0.15')

      /* Phase 5: Summary line */
      tl.to(summary, { opacity: 1, y: 0, duration: 0.4 }, '-=0.1')

      /* Phase 6: Hold */
      tl.to({}, { duration: 2.8 })

      /* Phase 7: Fade out */
      tl.to(card, {
        opacity: 0,
        duration: 0.9,
        ease: 'power1.inOut',
      })
    },
    { scope: containerRef }
  )

  return (
    <MockFrame ref={containerRef} height="standard">
      <div
        data-card=""
        className="absolute inset-0 rounded-brand bg-accent-whisper bg-noise-fine px-5 py-5"
        style={{ opacity: 0, backgroundBlendMode: 'overlay' }}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <span
            data-header=""
            className="text-eyebrow-sm font-body-medium uppercase tracking-eyebrow text-copy-light"
            style={{ opacity: 0 }}
          >
            Users &amp; Groups
          </span>
          <span
            data-count=""
            className="text-caption text-copy-faint"
            style={{ opacity: 0 }}
          >
            142 users
          </span>
        </div>

        {/* User rows */}
        <div className="space-y-0 border border-border rounded-brand-sm overflow-hidden">
          {users.map((user, i) => (
            <div
              key={user.initials}
              data-row=""
              className={`flex items-center gap-3 px-3.5 py-2.5 bg-surface-white ${
                i !== users.length - 1 ? 'border-b border-border' : ''
              }`}
              style={{ opacity: 0 }}
            >
              <div
                data-avatar=""
                className="w-7 h-7 rounded-full bg-surface-alt border border-border flex items-center justify-center shrink-0"
                style={{ opacity: 0 }}
              >
                <span className="text-detail font-body-medium text-copy-mid">{user.initials}</span>
              </div>
              <div className="flex-1 min-w-0">
                <p
                  data-name=""
                  className="text-caption font-body-medium text-dark leading-tight"
                  style={{ opacity: 0 }}
                >
                  {user.name}
                </p>
                <p
                  data-role=""
                  className="text-detail text-copy-faint"
                  style={{ opacity: 0 }}
                >
                  {user.role}
                </p>
              </div>
              <span
                data-dot=""
                className={`w-1.5 h-1.5 rounded-full shrink-0 ${user.active ? 'bg-accent' : 'bg-copy-faint'}`}
                style={{ opacity: 0 }}
              />
              <div className="flex gap-1 shrink-0">
                {user.groups.map((group) => (
                  <span
                    key={group}
                    data-group-badge=""
                    className="text-detail text-copy-light px-1.5 py-0.5 rounded-brand-sm bg-surface border border-border whitespace-nowrap"
                    style={{ opacity: 0 }}
                  >
                    {group}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div
          data-summary=""
          className="mt-3.5 flex items-center gap-2 text-caption text-copy-light"
          style={{ opacity: 0 }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span>3 active now</span>
          <span className="text-copy-faint">&middot;</span>
          <span>3 groups configured</span>
        </div>
      </div>
    </MockFrame>
  )
}
