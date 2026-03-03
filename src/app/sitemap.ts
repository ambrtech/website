import type { MetadataRoute } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ambr.ai'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return [
    { url: siteUrl, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${siteUrl}/customisation`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${siteUrl}/company`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${siteUrl}/faq`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${siteUrl}/try-for-free`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${siteUrl}/product/ai-roleplay`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/product/how-it-works`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/product/admin-experience`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/product/integrations`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/industries/professional-services`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${siteUrl}/industries/consulting-advisory`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${siteUrl}/industries/accounting-audit-tax`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${siteUrl}/industries/legal`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${siteUrl}/industries/retail-hospitality`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${siteUrl}/industries/technology`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${siteUrl}/industries/other`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${siteUrl}/solutions/management-leadership`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${siteUrl}/solutions/sales-negotiations`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${siteUrl}/solutions/customer-service`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${siteUrl}/solutions/other`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${siteUrl}/trust/security-certifications`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${siteUrl}/trust/data-management`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${siteUrl}/trust/ai-ethics`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
  ]
}
