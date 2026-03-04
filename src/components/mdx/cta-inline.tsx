import Link from 'next/link'

interface CTAInlineProps {
  text: string
  href: string
  label: string
}

export function CTAInline({ text, href, label }: CTAInlineProps) {
  return (
    <div className="my-10 rounded-brand bg-surface-alt px-6 py-6 text-center">
      <p className="text-body text-copy-mid leading-[1.7] mb-4">{text}</p>
      <Link
        href={href}
        className="inline-block rounded-brand-sm bg-accent text-surface-white px-6 py-2.5 text-body-sm font-body-medium transition-all hover:bg-accent-hover hover:-translate-y-px hover:shadow-lg"
      >
        {label}
      </Link>
    </div>
  )
}
