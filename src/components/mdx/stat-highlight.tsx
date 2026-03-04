interface StatHighlightProps {
  value: string
  label: string
}

export function StatHighlight({ value, label }: StatHighlightProps) {
  return (
    <div className="my-10 py-6 border-y border-border">
      <div className="flex items-baseline gap-4">
        <span className="font-heading text-title tracking-heading text-accent flex-shrink-0">
          {value}
        </span>
        <span className="text-body text-copy-mid leading-[1.65]">{label}</span>
      </div>
    </div>
  )
}
