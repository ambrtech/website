import { ProductScreenshot } from '@/components/sections/product-screenshot'
import { MockDisplay } from '@/components/ui/mock-display'
import { ScenarioCardJourney } from '@/components/ui/scenario-card-journey'
import { ScenarioCardDossier } from '@/components/ui/scenario-card-dossier'
import { ScenarioCardPulse } from '@/components/ui/scenario-card-pulse'
import { VoiceWave } from '@/components/ui/voice-wave'

/* ── Feedback Panel ── */
import { FeedbackPanelAnimatedA } from '@/components/ui/feedback-panel-animated-a'
import { FeedbackPanelAnimatedB } from '@/components/ui/feedback-panel-animated-b'
import { FeedbackPanelAnimatedC } from '@/components/ui/feedback-panel-animated-c'

/* ── Customization Flow ── */
import { CustomizationFlowAnimatedA } from '@/components/ui/customization-flow-animated-a'
import { CustomizationFlowAnimatedB } from '@/components/ui/customization-flow-animated-b'
import { CustomizationFlowAnimatedC } from '@/components/ui/customization-flow-animated-c'

/* ── Journey Grid ── */
import { JourneyGridAnimatedA } from '@/components/ui/journey-grid-animated-a'
import { JourneyGridAnimatedB } from '@/components/ui/journey-grid-animated-b'
import { JourneyGridAnimatedC } from '@/components/ui/journey-grid-animated-c'

/* ── Context Selector (Character Design) ── */
import { ContextSelectorAnimatedA } from '@/components/ui/context-selector-animated-a'
import { ContextSelectorAnimatedB } from '@/components/ui/context-selector-animated-b'
import { ContextSelectorAnimatedC } from '@/components/ui/context-selector-animated-c'

/* ── Screen Sharing ── */
import { ScreensharingAnimatedA } from '@/components/ui/screensharing-animated-a'
import { ScreensharingAnimatedB } from '@/components/ui/screensharing-animated-b'
import { ScreensharingAnimatedC } from '@/components/ui/screensharing-animated-c'

/* ── Body Language ── */
import { BodyLanguageAnimatedA } from '@/components/ui/body-language-animated-a'
import { BodyLanguageAnimatedB } from '@/components/ui/body-language-animated-b'
import { BodyLanguageAnimatedC } from '@/components/ui/body-language-animated-c'

/* ── Chat Training ── */
import { ChatTrainingAnimatedA } from '@/components/ui/chat-training-animated-a'
import { ChatTrainingAnimatedB } from '@/components/ui/chat-training-animated-b'
import { ChatTrainingAnimatedC } from '@/components/ui/chat-training-animated-c'

/* ── Presentation Training ── */
import { PresentationTrainingAnimatedA } from '@/components/ui/presentation-training-animated-a'
import { PresentationTrainingAnimatedB } from '@/components/ui/presentation-training-animated-b'
import { PresentationTrainingAnimatedC } from '@/components/ui/presentation-training-animated-c'

/* ── Scenario Creator ── */
import { ScenarioCreatorAnimatedA } from '@/components/ui/scenario-creator-animated-a'
import { ScenarioCreatorAnimatedB } from '@/components/ui/scenario-creator-animated-b'
import { ScenarioCreatorAnimatedC } from '@/components/ui/scenario-creator-animated-c'

/* ── Admin Builder ── */
import { AdminBuilderAnimatedA } from '@/components/ui/admin-builder-animated-a'
import { AdminBuilderAnimatedB } from '@/components/ui/admin-builder-animated-b'
import { AdminBuilderAnimatedC } from '@/components/ui/admin-builder-animated-c'

/* ── Customization Delivery ── */
import { CustomizationDeliveryAnimatedA } from '@/components/ui/customization-delivery-animated-a'
import { CustomizationDeliveryAnimatedB } from '@/components/ui/customization-delivery-animated-b'
import { CustomizationDeliveryAnimatedC } from '@/components/ui/customization-delivery-animated-c'

/* ── Voice Conversation ── */
import { VoiceConversationAnimatedA } from '@/components/ui/voice-conversation-animated-a'
import { VoiceConversationAnimatedB } from '@/components/ui/voice-conversation-animated-b'
import { VoiceConversationAnimatedC } from '@/components/ui/voice-conversation-animated-c'

/* ── Training Nudge ── */
import { TrainingNudgeAnimatedA } from '@/components/ui/training-nudge-animated-a'
import { TrainingNudgeAnimatedB } from '@/components/ui/training-nudge-animated-b'
import { TrainingNudgeAnimatedC } from '@/components/ui/training-nudge-animated-c'

/* ── LMS Embed ── */
import { LmsEmbedAnimatedA } from '@/components/ui/lms-embed-animated-a'
import { LmsEmbedAnimatedB } from '@/components/ui/lms-embed-animated-b'
import { LmsEmbedAnimatedC } from '@/components/ui/lms-embed-animated-c'

/* ── Deployment Timeline ── */
import { DeploymentTimelineAnimatedA } from '@/components/ui/deployment-timeline-animated-a'
import { DeploymentTimelineAnimatedB } from '@/components/ui/deployment-timeline-animated-b'
import { DeploymentTimelineAnimatedC } from '@/components/ui/deployment-timeline-animated-c'

/* ── Evaluation Rubric ── */
import { EvaluationRubricAnimatedA } from '@/components/ui/evaluation-rubric-animated-a'
import { EvaluationRubricAnimatedB } from '@/components/ui/evaluation-rubric-animated-b'
import { EvaluationRubricAnimatedC } from '@/components/ui/evaluation-rubric-animated-c'

/* ── Dashboard ── */
import { DashboardAnimatedA } from '@/components/ui/dashboard-animated-a'
import { DashboardAnimatedB } from '@/components/ui/dashboard-animated-b'
import { DashboardAnimatedC } from '@/components/ui/dashboard-animated-c'

/* ─────────────────────────────────────────────────────
   Helper: renders a section with 3 concepts (A/B/C)
   ───────────────────────────────────────────────────── */

interface MockSectionProps {
  title: string
  description?: string
  concepts: {
    label: string
    component: React.ReactNode
  }[]
}

function MockSection({ title, description, concepts }: MockSectionProps) {
  return (
    <section className="mb-24">
      <h2 className="font-heading text-title tracking-heading text-dark mb-2">
        {title}
      </h2>
      {description && (
        <p className="text-body-sm text-copy-light mb-10">{description}</p>
      )}

      <div className="space-y-16">
        {concepts.map((concept) => (
          <div key={concept.label} className="max-w-[540px]">
            <p className="text-caption font-body-medium text-copy-mid mb-4 uppercase tracking-eyebrow">
              {concept.label}
            </p>
            <ProductScreenshot>
              <MockDisplay>
                {concept.component}
              </MockDisplay>
            </ProductScreenshot>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────────────
   Page
   ───────────────────────────────────────────────────── */

export default function AnimatedMocksPage() {
  return (
    <div className="min-h-screen bg-surface py-16 px-container-mobile md:px-container">
      <div className="mx-auto max-w-site">
        <h1 className="font-heading text-headline tracking-heading text-dark mb-2">
          Animated Mock Concepts
        </h1>
        <p className="text-body text-copy-mid mb-4">
          Three animated concepts per component. Stacked vertically for comparison.
        </p>
        <p className="text-body-sm text-copy-light mb-16">
          17 mocks &times; 3 versions = 51 animated components + voice indicator + scenario card (from earlier).
        </p>

        {/* ── Voice Indicators ── */}
        <section className="mb-24">
          <h2 className="font-heading text-title tracking-heading text-dark mb-2">
            Voice Indicators
          </h2>
          <p className="text-body-sm text-copy-light mb-10">
            Simplex noise-driven Canvas 2D animations. Shown on light and dark backgrounds.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-brand bg-surface-white border border-border p-6 flex items-center justify-center">
              <VoiceWave width={140} height={80} />
            </div>
            <div className="rounded-brand bg-dark p-6 flex items-center justify-center">
              <VoiceWave width={140} height={80} />
            </div>
          </div>
        </section>

        {/* ── MockScenarioCard (from earlier session) ── */}
        <MockSection
          title="MockScenarioCard"
          description="Completed in earlier session. Three fundamentally different representations."
          concepts={[
            { label: 'A — The Journey (Full Flow Walkthrough)', component: <ScenarioCardJourney /> },
            { label: 'B — The Dossier (Editorial Briefing Card)', component: <ScenarioCardDossier /> },
            { label: 'C — The Pulse (Live Conversation Moment)', component: <ScenarioCardPulse /> },
          ]}
        />

        {/* ── MockFeedbackPanel ── */}
        <MockSection
          title="MockFeedbackPanel"
          description="Quantitative feedback: talk-listen balance, speech pace, and coaching insights."
          concepts={[
            { label: 'A — The Debrief Dashboard', component: <FeedbackPanelAnimatedA /> },
            { label: 'B — The Coaching Margin', component: <FeedbackPanelAnimatedB /> },
            { label: 'C — The Reflective Summary', component: <FeedbackPanelAnimatedC /> },
          ]}
        />

        {/* ── MockCustomizationFlow ── */}
        <MockSection
          title="MockCustomizationFlow"
          description="Organizational context transformed into bespoke simulations. Three new concepts."
          concepts={[
            { label: 'A — The Typewriter', component: <CustomizationFlowAnimatedA /> },
            { label: 'B — The Split Reveal', component: <CustomizationFlowAnimatedB /> },
            { label: 'C — The Distillation', component: <CustomizationFlowAnimatedC /> },
          ]}
        />

        {/* ── MockJourneyGrid ── */}
        <MockSection
          title="MockJourneyGrid"
          description="The learning journey experience — a structured pathway of practice conversations."
          concepts={[
            { label: 'A — The Pathway', component: <JourneyGridAnimatedA /> },
            { label: 'B — The Storyboard', component: <JourneyGridAnimatedB /> },
            { label: 'C — The Horizon Line', component: <JourneyGridAnimatedC /> },
          ]}
        />

        {/* ── MockContextSelector (Character Design) ── */}
        <MockSection
          title="MockContextSelector (Character Design)"
          description="Designing an AI character: personality, role, behavior patterns."
          concepts={[
            { label: 'A — The Persona Emerges', component: <ContextSelectorAnimatedA /> },
            { label: 'B — The Slider Board', component: <ContextSelectorAnimatedB /> },
            { label: 'C — The Character Dossier', component: <ContextSelectorAnimatedC /> },
          ]}
        />

        {/* ── MockScreensharing ── */}
        <MockSection
          title="MockScreensharing"
          description="Screen sharing during a simulation — the AI responds to what it sees."
          concepts={[
            { label: 'A — The Demo in Motion', component: <ScreensharingAnimatedA /> },
            { label: 'B — The AI&apos;s Perspective', component: <ScreensharingAnimatedB /> },
            { label: 'C — The Training Feedback Overlay', component: <ScreensharingAnimatedC /> },
          ]}
        />

        {/* ── MockBodyLanguage ── */}
        <MockSection
          title="MockBodyLanguage"
          description="Webcam-based body language analysis: eye contact, posture, gestures."
          concepts={[
            { label: 'A — SVG Face Mesh', component: <BodyLanguageAnimatedA /> },
            { label: 'B — The Silhouette Blueprint', component: <BodyLanguageAnimatedB /> },
            { label: 'C — The Coaching Cards', component: <BodyLanguageAnimatedC /> },
          ]}
        />

        {/* ── MockChatTraining ── */}
        <MockSection
          title="MockChatTraining"
          description="Text-based simulation for customer service training."
          concepts={[
            { label: 'A — The Chat Window', component: <ChatTrainingAnimatedA /> },
            { label: 'B — The Editorial Script', component: <ChatTrainingAnimatedB /> },
            { label: 'C — The Coach View', component: <ChatTrainingAnimatedC /> },
          ]}
        />

        {/* ── MockPresentationTraining ── */}
        <MockSection
          title="MockPresentationTraining"
          description="Practice presentations to an AI audience that reacts and asks questions."
          concepts={[
            { label: 'A — The Slide & Speaker View', component: <PresentationTrainingAnimatedA /> },
            { label: 'B — The Q&A Moment', component: <PresentationTrainingAnimatedB /> },
            { label: 'C — The Audience Grid', component: <PresentationTrainingAnimatedC /> },
          ]}
        />

        {/* ── MockScenarioCreator ── */}
        <MockSection
          title="MockScenarioCreator"
          description="Individual users create practice scenarios via chat or text input."
          concepts={[
            { label: 'A — The Chat Creation', component: <ScenarioCreatorAnimatedA /> },
            { label: 'B — Thought to Scenario', component: <ScenarioCreatorAnimatedB /> },
            { label: 'C — Thought Bubble to Scenario', component: <ScenarioCreatorAnimatedC /> },
          ]}
        />

        {/* ── MockAdminBuilder ── */}
        <MockSection
          title="MockAdminBuilder"
          description="Admin multi-step wizard for building company-wide training scenarios."
          concepts={[
            { label: 'A — The Progress Rail', component: <AdminBuilderAnimatedA /> },
            { label: 'B — The Stacking Cards', component: <AdminBuilderAnimatedB /> },
            { label: 'C — The Blueprint', component: <AdminBuilderAnimatedC /> },
          ]}
        />

        {/* ── MockCustomizationDelivery ── */}
        <MockSection
          title="MockCustomizationDelivery"
          description="White-glove service: brief to custom scenarios in 48 hours."
          concepts={[
            { label: 'A — The Timeline', component: <CustomizationDeliveryAnimatedA /> },
            { label: 'B — The Handoff', component: <CustomizationDeliveryAnimatedB /> },
            { label: 'C — The Progress Board', component: <CustomizationDeliveryAnimatedC /> },
          ]}
        />

        {/* ── MockVoiceConversation ── */}
        <MockSection
          title="MockVoiceConversation"
          description="Live voice call with an AI character — the core product experience."
          concepts={[
            { label: 'A — The Live Call', component: <VoiceConversationAnimatedA /> },
            { label: 'B — The Transcript', component: <VoiceConversationAnimatedB /> },
            { label: 'C — The Dialogue', component: <VoiceConversationAnimatedC /> },
          ]}
        />

        {/* ── MockTrainingNudge ── */}
        <MockSection
          title="MockTrainingNudge"
          description="Automated training reminders via Slack, Teams, or email."
          concepts={[
            { label: 'A — Slack Notification', component: <TrainingNudgeAnimatedA /> },
            { label: 'B — Teams Notification', component: <TrainingNudgeAnimatedB /> },
            { label: 'C — Email Notification', component: <TrainingNudgeAnimatedC /> },
          ]}
        />

        {/* ── MockLmsEmbed ── */}
        <MockSection
          title="MockLmsEmbed"
          description="Ambr AI embedded within existing Learning Management Systems."
          concepts={[
            { label: 'A — The Module List', component: <LmsEmbedAnimatedA /> },
            { label: 'B — Before & After', component: <LmsEmbedAnimatedB /> },
            { label: 'C — Comes Alive', component: <LmsEmbedAnimatedC /> },
          ]}
        />

        {/* ── MockDeploymentTimeline ── */}
        <MockSection
          title="MockDeploymentTimeline"
          description="From brief to team practicing in 5 days."
          concepts={[
            { label: 'A — The Letter Exchange', component: <DeploymentTimelineAnimatedA /> },
            { label: 'B — The Conveyor', component: <DeploymentTimelineAnimatedB /> },
            { label: 'C — The Calendar Pages', component: <DeploymentTimelineAnimatedC /> },
          ]}
        />

        {/* ── MockEvaluationRubric ── */}
        <MockSection
          title="MockEvaluationRubric"
          description="Scored competencies against a client's framework."
          concepts={[
            { label: 'A — The Competency Dial', component: <EvaluationRubricAnimatedA /> },
            { label: 'B — The Editorial Scorecard', component: <EvaluationRubricAnimatedB /> },
            { label: 'C — The Growth Map', component: <EvaluationRubricAnimatedC /> },
          ]}
        />

        {/* ── MockDashboard ── */}
        <MockSection
          title="MockDashboard"
          description="Admin view: people getting better at competencies over time."
          concepts={[
            { label: 'A — The Competency Bloom', component: <DashboardAnimatedA /> },
            { label: 'B — The Growth Ladder', component: <DashboardAnimatedB /> },
            { label: 'C — The Garden', component: <DashboardAnimatedC /> },
          ]}
        />
      </div>
    </div>
  )
}
