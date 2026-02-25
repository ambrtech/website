export const tags = {
  'sales-training': { label: 'Sales Training', description: 'Techniques and strategies for developing high-performing sales teams through practice-based learning.' },
  'leadership-development': { label: 'Leadership Development', description: 'Building confident leaders through realistic conversation practice and feedback.' },
  'ai-simulation': { label: 'AI Simulation', description: 'How AI-powered conversation simulations are reshaping workplace training.' },
  'ld-strategy': { label: 'L&D Strategy', description: 'Strategic approaches to learning and development in enterprise organisations.' },
  'onboarding': { label: 'Onboarding', description: 'Accelerating new hire readiness through structured practice and scenario-based training.' },
  'enterprise-training': { label: 'Enterprise Training', description: 'Scaling training programmes across large organisations with consistency and quality.' },
} as const

export type TagSlug = keyof typeof tags
