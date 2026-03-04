interface CalloutProps {
  type?: 'info' | 'warning'
  children: React.ReactNode
}

export function Callout({ type = 'info', children }: CalloutProps) {
  const isWarning = type === 'warning'

  return (
    <aside
      role="note"
      className={`rounded-brand-sm border-l-[3px] px-5 py-4 my-6 text-body-sm leading-[1.7] ${
        isWarning
          ? 'border-copy-light bg-surface-alt text-copy-mid'
          : 'border-accent-soft bg-accent-whisper text-copy'
      }`}
    >
      {children}
    </aside>
  )
}
