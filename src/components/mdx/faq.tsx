interface FAQProps {
  question: string
  children: React.ReactNode
}

export function FAQ({ question, children }: FAQProps) {
  return (
    <div className="my-8 border-t border-border pt-5">
      <h3 className="font-heading text-[1.15rem] tracking-heading text-copy mb-3">
        {question}
      </h3>
      <div className="text-body-sm text-copy-mid leading-[1.75]">{children}</div>
    </div>
  )
}
