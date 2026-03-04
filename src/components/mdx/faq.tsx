interface FAQProps {
  question: string
  children: React.ReactNode
}

export function FAQ({ question, children }: FAQProps) {
  return (
    <div className="my-8 border-t border-border pt-6">
      <h3 className="font-heading text-[1.15rem] tracking-heading text-copy mb-3 leading-[1.35]">
        {question}
      </h3>
      <div className="text-body-sm text-copy-mid leading-[1.8] [&>p]:mb-0">
        {children}
      </div>
    </div>
  )
}
