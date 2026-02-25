const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ambr.ai'

interface JsonLdProps {
  data: Record<string, unknown>
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, '\\u003c'),
      }}
    />
  )
}

export function OrganizationJsonLd() {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Ambr AI',
        url: siteUrl,
        logo: `${siteUrl}/images/logo.png`,
        description:
          'Bespoke voice-based AI conversation simulations for enterprise workplace training.',
        sameAs: [],
      }}
    />
  )
}

interface BreadcrumbItem {
  name: string
  href: string
}

export function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.name,
          item: `${siteUrl}${item.href}`,
        })),
      }}
    />
  )
}

interface ArticleJsonLdProps {
  title: string
  description: string
  slug: string
  publishedAt: string
  updatedAt?: string
  author: string
  authorRole?: string
  image?: string
}

export function ArticleJsonLd({
  title,
  description,
  slug,
  publishedAt,
  updatedAt,
  author,
  image,
}: ArticleJsonLdProps) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: title,
        description,
        url: `${siteUrl}/blog/${slug}`,
        datePublished: publishedAt,
        ...(updatedAt && { dateModified: updatedAt }),
        author: {
          '@type': 'Person',
          name: author,
        },
        publisher: {
          '@type': 'Organization',
          name: 'Ambr AI',
          url: siteUrl,
          logo: {
            '@type': 'ImageObject',
            url: `${siteUrl}/images/logo.png`,
          },
        },
        ...(image && {
          image: {
            '@type': 'ImageObject',
            url: `${siteUrl}${image}`,
          },
        }),
      }}
    />
  )
}

interface FaqItem {
  question: string
  answer: string
}

export function FaqJsonLd({ items }: { items: FaqItem[] }) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: items.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      }}
    />
  )
}
