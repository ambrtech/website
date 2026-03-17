import {
  ProductScreenshot,
  MockFeedbackPanel,
  MockScenarioCard,
  MockCustomizationFlow,
  MockJourneyGrid,
  MockContextSelector,
  MockScreensharing,
  MockBodyLanguage,
  MockChatTraining,
  MockPresentationTraining,
  MockScenarioCreator,
  MockAdminBuilder,
  MockCustomizationDelivery,
  MockVoiceConversation,
  MockTrainingNudge,
  MockLmsEmbed,
  MockDeploymentTimeline,
  MockEvaluationRubric,
  MockDashboard,
} from '@/components/sections/product-screenshot'
import {
  MockUsageAnalytics,
  MockLearningInsights,
  MockStreaksConfig,
  MockUserGroups,
  MockModuleManagement,
} from '@/components/sections/admin-mocks'
import { SimulationCard } from '@/components/ui/simulation-card'
import { MockCustomizationFlowAnimated } from '@/components/ui/customization-flow-animated'

const productMocks: { name: string; component: React.ReactNode }[] = [
  { name: 'MockFeedbackPanel', component: <MockFeedbackPanel /> },
  { name: 'MockScenarioCard', component: <MockScenarioCard /> },
  { name: 'MockCustomizationFlow', component: <MockCustomizationFlow /> },
  { name: 'MockJourneyGrid', component: <MockJourneyGrid /> },
  { name: 'MockContextSelector', component: <MockContextSelector /> },
  { name: 'MockScreensharing', component: <MockScreensharing /> },
  { name: 'MockBodyLanguage', component: <MockBodyLanguage /> },
  { name: 'MockChatTraining', component: <MockChatTraining /> },
  { name: 'MockPresentationTraining', component: <MockPresentationTraining /> },
  { name: 'MockScenarioCreator', component: <MockScenarioCreator /> },
  { name: 'MockAdminBuilder', component: <MockAdminBuilder /> },
  { name: 'MockCustomizationDelivery', component: <MockCustomizationDelivery /> },
  { name: 'MockVoiceConversation', component: <MockVoiceConversation /> },
  { name: 'MockTrainingNudge', component: <MockTrainingNudge /> },
  { name: 'MockLmsEmbed', component: <MockLmsEmbed /> },
  { name: 'MockDeploymentTimeline', component: <MockDeploymentTimeline /> },
  { name: 'MockEvaluationRubric', component: <MockEvaluationRubric /> },
  { name: 'MockDashboard', component: <MockDashboard /> },
]

const adminMocks: { name: string; component: React.ReactNode }[] = [
  { name: 'MockUsageAnalytics', component: <MockUsageAnalytics /> },
  { name: 'MockLearningInsights', component: <MockLearningInsights /> },
  { name: 'MockStreaksConfig', component: <MockStreaksConfig /> },
  { name: 'MockUserGroups', component: <MockUserGroups /> },
  { name: 'MockModuleManagement', component: <MockModuleManagement /> },
]

const demoScenario = {
  characterName: 'Sarah',
  characterRole: 'Team Lead',
  characterInitials: 'SL',
  title: 'Navigate a difficult performance conversation',
  description: 'Your direct report has missed two consecutive deadlines. Address performance while maintaining the relationship.',
  socialProof: '2,847 conversations this week',
  characterImage: '/images/team/zoe-headshot.png',
  backgroundImage: '/images/photography/glass-tower-pair-at-window.png',
}

const simulationLayouts = [
  'horizontal',
  'stacked',
  'pill',
  'live-call',
  'scenario',
  'photo-warm',
  'photo-duotone',
  'photo-muted',
] as const

export default function MocksPreviewPage() {
  return (
    <div className="min-h-screen bg-surface py-16 px-container-mobile md:px-container">
      <div className="mx-auto max-w-site">
        <h1 className="font-heading text-headline tracking-heading text-dark mb-2">
          All Mockups
        </h1>
        <p className="text-body text-copy-mid mb-16">
          Complete catalogue of every mock component in the codebase.
        </p>

        {/* ── Animated Mocks ── */}
        <section className="mb-24">
          <h2 className="font-heading text-title tracking-heading text-dark mb-2">
            Animated Mocks
          </h2>
          <p className="text-body-sm text-copy-light mb-10">
            GSAP-driven narrative sequences. These loop continuously.
          </p>

          <div>
            <p className="text-caption font-body-medium text-copy-mid mb-3 uppercase tracking-eyebrow">
              MockCustomizationFlowAnimated
            </p>
            <ProductScreenshot>
              <MockCustomizationFlowAnimated />
            </ProductScreenshot>
          </div>
        </section>

        {/* ── Product Mocks (product-screenshot.tsx) ── */}
        <section className="mb-24">
          <h2 className="font-heading text-title tracking-heading text-dark mb-2">
            Product Mocks
          </h2>
          <p className="text-body-sm text-copy-light mb-10">
            From <code className="text-caption bg-surface-alt px-1.5 py-0.5 rounded">product-screenshot.tsx</code> — 18 components. Shown inside ProductScreenshot wrapper.
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            {productMocks.map(({ name, component }) => (
              <div key={name}>
                <p className="text-caption font-body-medium text-copy-mid mb-3 uppercase tracking-eyebrow">
                  {name}
                </p>
                <ProductScreenshot>
                  {component}
                </ProductScreenshot>
              </div>
            ))}
          </div>
        </section>

        {/* ── Admin Mocks (admin-mocks.tsx) ── */}
        <section className="mb-24">
          <h2 className="font-heading text-title tracking-heading text-dark mb-2">
            Admin Mocks
          </h2>
          <p className="text-body-sm text-copy-light mb-10">
            From <code className="text-caption bg-surface-alt px-1.5 py-0.5 rounded">admin-mocks.tsx</code> — 5 components. Shown inside ProductScreenshot wrapper.
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            {adminMocks.map(({ name, component }) => (
              <div key={name}>
                <p className="text-caption font-body-medium text-copy-mid mb-3 uppercase tracking-eyebrow">
                  {name}
                </p>
                <ProductScreenshot>
                  {component}
                </ProductScreenshot>
              </div>
            ))}
          </div>
        </section>

        {/* ── SimulationCard Layouts ── */}
        <section>
          <h2 className="font-heading text-title tracking-heading text-dark mb-2">
            SimulationCard Layouts
          </h2>
          <p className="text-body-sm text-copy-light mb-10">
            From <code className="text-caption bg-surface-alt px-1.5 py-0.5 rounded">simulation-card.tsx</code> — 8 layout variants (6 unique compositions + 3 photo sub-variants).
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            {simulationLayouts.map((layout) => (
              <div key={layout}>
                <p className="text-caption font-body-medium text-copy-mid mb-3 uppercase tracking-eyebrow">
                  {layout}
                </p>
                <SimulationCard
                  layout={layout}
                  {...demoScenario}
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
