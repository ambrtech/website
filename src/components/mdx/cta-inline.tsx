import Link from 'next/link'

interface CTAInlineProps {
  text: string
  href: string
  label: string
}

export function CTAInline({ text, href, label }: CTAInlineProps) {
  return (
    <div className="my-10 rounded-brand-lg border border-border bg-surface-white px-7 py-7 md:px-8 md:py-8">
      <p className="font-heading text-label tracking-heading text-copy leading-[1.5] mb-4">
        {text}
      </p>
      <Link
        href={href}
        className="inline-flex items-center gap-2 text-body-sm font-body-medium text-accent transition-colors hover:text-accent-hover group"
      >
        {label}
        <span
          aria-hidden="true"
          className="transition-transform group-hover:translate-x-0.5"
        >
          &rarr;
        </span>
      </Link>
    </div>
  )
}
