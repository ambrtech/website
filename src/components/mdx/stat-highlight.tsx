interface StatHighlightProps {
  value: string
  label: string
}

export function StatHighlight({ value, label }: StatHighlightProps) {
  return (
    <div className="flex items-baseline gap-3 my-8 py-5 border-y border-border">
      <span className="font-heading text-title tracking-heading text-accent">
        {value}
      </span>
      <span className="text-body text-copy-mid leading-[1.6]">{label}</span>
    </div>
  )
}
