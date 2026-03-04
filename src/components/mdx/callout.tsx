interface CalloutProps {
  type?: 'info' | 'warning'
  children: React.ReactNode
}

export function Callout({ type = 'info', children }: CalloutProps) {
  const isWarning = type === 'warning'

  return (
    <aside
      role="note"
      className={`rounded-brand border-l-[3px] px-6 py-5 my-8 text-body-sm leading-[1.75] ${
        isWarning
          ? 'border-copy-faint bg-surface-alt text-copy-mid'
          : 'border-accent-soft bg-accent-whisper text-copy'
      }`}
    >
      <div className="[&>p]:mb-0 [&>p:last-child]:mb-0">{children}</div>
    </aside>
  )
}
