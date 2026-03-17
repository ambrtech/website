import { createMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/sections/breadcrumbs'
import { PageHero } from '@/components/sections/page-hero'

export const metadata = createMetadata({
  title: 'Data Processing Agreement',
  description:
    'Data Processing Agreement between Ambr Technologies Limited and its customers, covering GDPR compliance, data security, sub-processors, and international transfers.',
  path: '/dpa',
})

export default function DpaPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Home', href: '/' },
          { name: 'Security', href: '/security/compliance' },
          { name: 'Data Processing Agreement', href: '/dpa' },
        ]}
      />

      <PageHero
        eyebrow="Legal"
        heading="Data Processing Agreement"
        subtitle="Effective: 2 March 2026"
      />

      <section className="pb-section md:pb-section-lg px-container-mobile md:px-container">
        <div className="mx-auto max-w-[720px]">
          <div className="prose-ambr">

            {/* ── 1. Introduction ── */}
            <h2>1. Introduction</h2>

            <p>
              1.1 This Data Processing Agreement (&ldquo;DPA&rdquo;) forms part of the agreement between
              Ambr Technologies Limited (&ldquo;Supplier&rdquo;) and the customer entity identified in the
              applicable Order Form (&ldquo;Customer&rdquo;), which incorporates by reference the
              Supplier&rsquo;s Terms and Conditions (the &ldquo;Agreement&rdquo;). This DPA sets out the terms
              on which the Supplier will process Customer Personal Data on behalf of the Customer in
              accordance with Data Protection Legislation.
            </p>

            <p>
              1.2 All capitalised terms not defined in this DPA shall have the meanings set forth in the
              Agreement. In the event of a conflict between this DPA and the Agreement, the terms of this
              DPA shall prevail with respect to data protection matters.
            </p>

            <p>
              1.3 This DPA is intended to ensure compliance with Data Protection Legislation, including the
              UK GDPR, EU GDPR, and Data Protection Act 2018, as well as other applicable laws.
            </p>

            {/* ── 2. Definitions ── */}
            <h2>2. Definitions</h2>

            <p>
              2.1 &ldquo;Data Protection Legislation&rdquo; means all applicable data protection and privacy
              laws, regulations, and legally binding codes of practice in force from time to time, including
              the UK GDPR (as defined in section 3(10) of the Data Protection Act 2018), the EU GDPR
              (Regulation (EU) 2016/679), the Data Protection Act 2018, and the Privacy and Electronic
              Communications Regulations 2003.
            </p>

            <p>
              2.2 &ldquo;Personal Data&rdquo; or &ldquo;Customer Personal Data&rdquo; means any personal data
              (as defined under the UK GDPR and EU GDPR) that the Supplier processes on behalf of the
              Customer pursuant to the Agreement.
            </p>

            <p>
              2.3 &ldquo;Controller, Processor, Data Subject, Processing, Personal Data Breach&rdquo; and all
              related expressions shall have the meanings given to them in the UK GDPR and EU GDPR.
            </p>

            <p>
              2.4 &ldquo;Sub-Processor&rdquo; means any third party engaged by the Supplier to process
              Customer Personal Data on behalf of the Customer.
            </p>

            {/* ── 3. Roles and Scope of Processing ── */}
            <h2>3. Roles and Scope of Processing</h2>

            <p>
              3.1 The parties acknowledge that the Customer is the Controller and the Supplier is the
              Processor of the Customer Personal Data processed under the Agreement.
            </p>

            <p>
              3.2 The Supplier shall only process the Customer Personal Data on documented instructions from
              the Customer, including as set out in the Agreement and this DPA, unless otherwise required by
              applicable law (in which case the Supplier shall use reasonable efforts to notify the Customer
              before such processing, unless legally prohibited).
            </p>

            {/* ── 4. Purpose, Nature, and Categories of Data ── */}
            <h2>4. Purpose, Nature, and Categories of Data</h2>

            <p>
              4.1 <strong>Purpose:</strong> The Supplier processes the Customer Personal Data solely to
              provide AI-powered training services (e.g., through simulated conversations, feedback, and
              progress tracking) as further described in the Agreement and Order Form.
            </p>

            <p>
              4.2 <strong>Nature and Scope of Processing:</strong> Processing includes collection, storage,
              analysis, retrieval, and use of Customer Personal Data to facilitate the Supplier&rsquo;s
              Services envisaged under this Agreement and related support.
            </p>

            <p>4.3 <strong>Types of Personal Data</strong> may include, without limitation:</p>

            <ul>
              <li><strong>Identifiers:</strong> Names, email addresses, job titles, departments, usernames</li>
              <li><strong>Voice Data:</strong> Voice recordings of simulated conversations</li>
              <li><strong>Transcripts:</strong> Transcripts of these simulated conversations</li>
              <li><strong>Performance Data:</strong> Performance metrics, feedback data, usage statistics, progress tracking information</li>
              <li><strong>Other Data:</strong> IP addresses, self-reported skill levels, organizational role and reporting structure</li>
            </ul>

            <p>4.4 <strong>Categories of Data Subjects</strong> may include:</p>

            <ul>
              <li>Customer&rsquo;s employees, managers, and administrators participating in training</li>
              <li>Contractors or consultants included in the management training program</li>
            </ul>

            <p>
              4.5 The duration of processing shall be for the term set out in the Agreement plus any
              additional retention period required by applicable law or as necessary to establish, exercise,
              or defend legal claims.
            </p>

            <h3>4.6 User-Generated Scenarios</h3>

            <p>Where the Services include functionality for Authorised Users to create custom scenarios:</p>

            <p>
              (a) <strong>Types of Personal Data:</strong> In addition to the data types listed in Section
              4.3, user-generated scenarios may contain:
            </p>

            <ul>
              <li>Names, job titles, or identifying information of third parties</li>
              <li>Descriptions of workplace situations involving identifiable individuals</li>
              <li>Customer-created context that may reference real people or situations</li>
            </ul>

            <p>
              (b) <strong>Privacy by Design:</strong> The Supplier implements product design measures to
              minimize the processing of third-party personal data, including:
            </p>

            <ul>
              <li>In-product guidance discouraging users from including real names or identifying information</li>
              <li>Prompts encouraging users to anonymize scenarios based on real situations</li>
              <li>Clear warnings about confidentiality and privacy obligations</li>
            </ul>

            <p>
              (c) <strong>Controller Obligations:</strong> Notwithstanding the measures in 4.6(b), the
              Customer acknowledges that:
            </p>

            <ul>
              <li>It remains the Controller for any third-party personal data included in user-generated scenarios</li>
              <li>It must ensure it has a lawful basis for processing any such third-party data</li>
              <li>It is responsible for obtaining any necessary consents before including third-party personal data</li>
              <li>The Supplier has no means of verifying whether appropriate consents have been obtained</li>
            </ul>

            <p>
              (d) <strong>Deletion Rights:</strong> User-generated scenarios containing personal data may be
              deleted by Authorised Users at any time during the subscription term. The Supplier shall delete
              such data within 72 hours of a deletion request.
            </p>

            <p>
              (e) <strong>No Review Obligation:</strong> The Supplier has no obligation to review, monitor,
              or assess user-generated scenarios for compliance with data protection laws or the presence of
              third-party personal data.
            </p>

            {/* ── 5. Data Subject Rights and Assistance ── */}
            <h2>5. Data Subject Rights and Assistance</h2>

            <p>
              5.1 The Supplier shall, taking into account the nature of the processing, implement appropriate
              technical and organisational measures to assist the Customer in fulfilling its obligations to
              respond to requests by Data Subjects to exercise their rights under Data Protection Legislation.
              This assistance (provided at the Customer&rsquo;s cost) includes:
            </p>

            <ul>
              <li>Promptly notifying the Customer of any Data Subject request received directly (and in any event within five (5) days).</li>
              <li>Not responding to any such request without the Customer&rsquo;s express written approval (unless required by law).</li>
            </ul>

            {/* ── 6. Security Measures and Breach Notification ── */}
            <h2>6. Security Measures and Breach Notification</h2>

            <p>
              6.1 The Supplier shall implement appropriate technical and organisational measures to ensure a
              level of security appropriate to the risk, including protection against accidental or unlawful
              destruction, loss, alteration, unauthorised disclosure of, or access to Customer Personal Data.
            </p>

            <p>
              6.2 In the event the Supplier becomes aware of a Personal Data Breach affecting Customer
              Personal Data, it shall promptly (and in any event within twenty-four (24) hours) notify the
              Customer and provide all information the Customer reasonably requires to meet its obligations to
              report or inform Data Subjects of the breach under Data Protection Legislation.
            </p>

            <p>
              6.3 The Supplier shall make available to the Customer all information reasonably necessary to
              demonstrate compliance with the obligations set out in this DPA and Data Protection Legislation,
              and shall allow for and contribute to audits, including inspections, conducted by the Customer
              or an independent auditor mandated by the Customer, subject to the following conditions: (a) The
              Customer shall give the Supplier not less than thirty (30) days&rsquo; prior written notice of
              any audit request, unless a shorter period is required by a supervisory authority or
              necessitated by an actual or reasonably suspected Personal Data Breach. (b) Audits shall be
              conducted during normal business hours, no more than once per twelve-month period (unless
              required by a supervisory authority or triggered by a Personal Data Breach), and in a manner
              that minimises disruption to the Supplier&rsquo;s operations. (c) The Customer shall bear all
              costs associated with any audit, including the Supplier&rsquo;s reasonable internal costs of
              co-operation. (d) The auditor shall enter into a confidentiality agreement reasonably acceptable
              to the Supplier before commencing any audit. (e) The Supplier may satisfy the Customer&rsquo;s
              audit rights under this clause by providing, at the Supplier&rsquo;s election, a copy of a
              current SOC 2 Type II report (or equivalent independent third-party certification or audit
              report) covering the Services. Where such a report reasonably addresses the Customer&rsquo;s
              audit concerns, the Customer shall accept it in lieu of conducting its own audit. If the report
              does not reasonably address the Customer&rsquo;s specific concerns, the Customer retains the
              right to conduct an audit in accordance with this clause. (f) The Supplier shall promptly
              remediate any material non-compliance identified by an audit and shall inform the Customer in
              writing of the remedial steps taken.
            </p>

            {/* ── 7. Sub-Processors ── */}
            <h2>7. Sub-Processors</h2>

            <p>
              7.1 The Customer generally authorises the Supplier to engage Sub-Processors to process Customer
              Personal Data. The Supplier shall:
            </p>

            <ul>
              <li>Impose on any Sub-Processor data protection obligations that are materially similar to those set out in this DPA.</li>
              <li>Remain liable to the Customer for the performance of Sub-Processors&rsquo; obligations.</li>
            </ul>

            <p>
              7.2 The Supplier shall inform the Customer of any intended changes concerning the addition or
              replacement of Sub-Processors, giving the Customer reasonable opportunity to object to such
              changes. If the Customer raises a reasonable objection, the parties shall discuss the objection
              in good faith. If no resolution is reached within 30 days, either party may terminate the
              affected services upon written notice.
            </p>

            <p>
              7.3 A list of the Supplier&rsquo;s current Sub-Processors, including the nature of the
              processing and the location of processing, is available at{' '}
              <a href="https://security.ambr.ai" target="_blank" rel="noopener noreferrer">
                https://security.ambr.ai
              </a>
              . The Supplier shall update this list before engaging any new or replacement Sub-Processor, and
              the notification and objection process set out in Section 7.2 shall apply.
            </p>

            {/* ── 8. International Transfers ── */}
            <h2>8. International Transfers</h2>

            <p>
              8.1 The Supplier may transfer Customer Personal Data outside of the UK and/or the EEA as
              necessary, provided that all such transfers comply with Data Protection Legislation. The
              Customer acknowledges that a subset of the Supplier&rsquo;s current sub-processors process data
              outside the UK/EEA, and by entering into this Agreement, consents to these existing transfers.
              Any future transfers through new or replacement sub-processors shall be subject to the
              notification and objection process set out in Section 7 of this DPA. All transfers shall be
              protected by appropriate safeguards, including the UK International Data Transfer Addendum to
              the EU Standard Contractual Clauses or other appropriate transfer mechanisms. Details of
              Sub-Processor locations, including those outside the UK/EEA, are set out at{' '}
              <a href="https://security.ambr.ai" target="_blank" rel="noopener noreferrer">
                https://security.ambr.ai
              </a>
              .
            </p>

            <p>
              8.2 The Customer agrees to cooperate with the Supplier&rsquo;s efforts to implement any
              required data transfer mechanisms and shall sign additional documents or provide information
              reasonably requested by the Supplier to effect such mechanisms.
            </p>

            {/* ── 9. Return or Deletion of Data ── */}
            <h2>9. Return or Deletion of Data</h2>

            <p>
              9.1 Upon termination or expiry of the Agreement, and at the Customer&rsquo;s written direction,
              the Supplier shall delete (so far as technically possible) or return all Customer Personal Data
              within thirty (30) days, unless continued storage is required by applicable law. Customer
              Personal Data shall be considered deleted where it can no longer be used by the Supplier.
            </p>

            {/* ── 10. Liability and Indemnities ── */}
            <h2>10. Liability and Indemnities</h2>

            <p>
              10.1 Nothing in this DPA limits any liability which cannot be excluded or limited under
              applicable law.
            </p>

            <p>
              10.2 Subject to clause 10.1, the Supplier&rsquo;s total aggregate liability arising under or in
              connection with this DPA and the Data Protection Legislation, whether in contract, tort
              (including negligence), breach of statutory duty, or otherwise, shall not exceed &pound;2,000,000.
            </p>

            <p>
              10.3 The Supplier shall indemnify and keep indemnified the Customer against all losses, claims,
              damages, liabilities, fines, interest, penalties, costs, charges, sanctions, expenses,
              compensation paid to Data Subjects, demands and legal and other professional costs (calculated
              on a full indemnity basis) arising out of or in connection with any breach by the Supplier of
              its obligations under this DPA, subject always to the liability cap in clause 10.2.
            </p>

            {/* ── 11. General ── */}
            <h2>11. General</h2>

            <p>
              11.1 This DPA shall be governed by and construed in accordance with the laws of England and
              Wales, and the courts of England and Wales shall have exclusive jurisdiction to settle any
              dispute arising out of or in connection with this DPA.
            </p>

            <p>
              11.2 If any provision of this DPA is found to be invalid or unenforceable, the remainder of the
              DPA shall remain in full force and effect.
            </p>

            <p>
              11.3 This DPA may be executed in counterparts, and its provisions are in addition to and not in
              substitution for any other rights relating to data protection contained in the Agreement.
            </p>

            <hr />

            {/* ── Addendum 1 ── */}
            <h2>Addendum 1 &ndash; Presentation Practice Module</h2>

            <h3>1. Introduction</h3>

            <p>
              1.1 <strong>Applicability.</strong> This Addendum supplements the existing Data Processing
              Agreement (&ldquo;DPA&rdquo;) between Ambr Technologies Limited (&ldquo;Supplier&rdquo;) and the
              Customer, solely with respect to the Presentation Practice Module (the &ldquo;Module&rdquo;).
            </p>

            <p>
              1.2 <strong>Conflict.</strong> In the event of a conflict between this Addendum and the DPA,
              this Addendum prevails with respect to the processing activities specifically related to the
              Module.
            </p>

            <h3>2. Additional Processing Details</h3>

            <p>
              2.1 <strong>Nature and Purpose of Processing.</strong> The Module enables Authorised Users to
              practice delivering presentations using AI-based transcription, Q&amp;A, and feedback. In
              connection with the Module, the Supplier processes user audio data and transcripts. This
              includes:
            </p>

            <ul>
              <li><strong>Collection:</strong> Capturing voice recordings of presentation sessions.</li>
              <li><strong>Storage:</strong> Storing such voice recordings and transcripts on the Supplier&rsquo;s systems as necessary to provide the service.</li>
              <li><strong>Analysis and Use:</strong> Converting audio to text, generating AI-generated presentation feedback and Q&amp;A sessions, storing feedback, and facilitating session playback and record-keeping (if applicable).</li>
            </ul>

            <p>
              2.2 <strong>Categories of Data Subjects.</strong> Employees, contractors, or other individuals
              designated by the Customer who choose to use the Module.
            </p>

            <p>2.3 <strong>Lawful Basis.</strong></p>

            <p>
              The Supplier processes personal data in the Module on behalf of the Customer, consistent with
              the lawful basis set out in the DPA (e.g., performance of contract or legitimate interests, as
              determined by the Customer).
            </p>

            <p>2.4 <strong>Retention and Deletion.</strong></p>

            <p>
              (a) <strong>During the Term.</strong> The Customer or Authorised Users may request deletion of
              voice recordings, transcripts, or related data at any time, and the Supplier shall comply in
              accordance with the DPA and the Terms.
            </p>

            <p>
              (b) <strong>Post-Termination.</strong> Following termination or expiry of the Agreement, Clause
              9 of the DPA and Clause 8.3 of the Terms govern data retrieval and deletion of module data.
            </p>

            <h3>3. Data Subject Rights and Assistance</h3>

            <p>
              3.1 <strong>AI Considerations.</strong> If a Data Subject requests correction or erasure of
              personal data contained within transcripts, the Supplier shall comply with such request in line
              with the DPA.
            </p>

            <p>
              3.2 <strong>Requests Handling.</strong> The Supplier will promptly forward any data subject
              requests related to the Module to the Customer, or otherwise handle such requests as directed by
              the Customer under the DPA.
            </p>

            <p>
              3.3 <strong>User Awareness.</strong> The Customer is responsible for ensuring that Authorised
              Users understand how their data is processed within the Presentation Practice Module, in
              accordance with the DPA and applicable laws.
            </p>

            <h3>4. Sub-Processors</h3>

            <p>
              4.1 <strong>AI/Transcription Tools.</strong> The engagement of sub-processors specifically to
              support transcription or AI feedback for the Module shall be subject to Section 7 of the DPA,
              including the notification and objection process set forth therein.
            </p>

            <p>
              4.2 <strong>Liability.</strong> The Supplier remains liable for the acts and omissions of any
              sub-processor it appoints, as set forth in the DPA.
            </p>

            <h3>5. Security Measures</h3>

            <p>
              5.1 <strong>Technical and Organisational Measures.</strong> The Supplier shall maintain security
              measures appropriate for processing voice, transcript, and Q&amp;A data, in line with Section 6
              of the DPA. This includes:
            </p>

            <ul>
              <li>Encryption of data in transit and at rest (where applicable)</li>
              <li>Restricting internal access to Module data to authorised personnel</li>
              <li>Secure deletion of audio post-transcription (when applicable)</li>
            </ul>

            <p>
              The Supplier shall regularly review and update these measures to ensure they remain appropriate
              to the risks associated with processing voice and transcript data.
            </p>

            <h3>6. General</h3>

            <p>
              6.1 <strong>No Other Amendments.</strong> Except as expressly stated in this Addendum, the DPA
              remains unchanged and in full force.
            </p>

            <p>
              6.2 <strong>Governing Law.</strong> This Addendum is governed by the same law and jurisdiction
              provisions set out in the DPA.
            </p>

            <p>
              6.3 <strong>Entire Agreement.</strong> This Addendum, together with the DPA, forms the entire
              agreement between the parties regarding the processing of personal data for the Module.
            </p>

            <p>
              6.4 <strong>Relationship with Terms.</strong> This Addendum shall be read in conjunction with
              the Terms&rsquo; Schedule 1 (Presentation Practice Module). In the event of any conflict between
              this Addendum and Schedule 1 regarding data protection matters, this Addendum shall prevail.
            </p>

            <hr />

            {/* ── Addendum 2 ── */}
            <h2>Addendum 2 &ndash; Coaching Module</h2>

            <h3>1. Introduction</h3>

            <p>
              1.1 <strong>Applicability.</strong> This Addendum supplements the existing Data Processing
              Agreement (&ldquo;DPA&rdquo;) between Ambr Technologies Limited (&ldquo;Supplier&rdquo;) and the
              Customer, solely with respect to the Coaching Module.
            </p>

            <p>
              1.2 <strong>Conflict.</strong> If there is a conflict between this Addendum and the DPA, this
              Addendum prevails for processing activities specifically related to the Coaching Module.
            </p>

            <h3>2. Additional Processing Details</h3>

            <p>
              2.1 <strong>Nature and Purpose of Processing.</strong> For the Coaching Module, the Supplier
              processes User audio data, transcripts, and AI-generated responses to provide interactive
              coaching simulations. This includes:
            </p>

            <ul>
              <li><strong>Collection:</strong> Capturing voice recordings of simulated coaching sessions, which may contain personal or sensitive information.</li>
              <li><strong>Storage:</strong> Storing such voice recordings and transcripts on the Supplier&rsquo;s systems as necessary to provide the service.</li>
              <li><strong>Analysis and Use:</strong> Converting audio to text, generating AI-driven coaching prompts, storing feedback, and facilitating session playback and record-keeping (if applicable).</li>
            </ul>

            <p>
              2.2 <strong>Types of Personal Data.</strong> The personal data processed in the Coaching Module
              may include, without limitation:
            </p>

            <ul>
              <li><strong>Identifiers:</strong> Names, email addresses, or other user account details.</li>
              <li><strong>Voice Data:</strong> Voice recordings of the coaching sessions.</li>
              <li><strong>Transcripts:</strong> Converted text from user audio, which may include references to career goals, workplace challenges, or other personal reflections.</li>
              <li><strong>Usage Data and Metadata:</strong> Interaction timestamps, frequency of sessions, and performance metrics.</li>
            </ul>

            <p>
              2.3 <strong>Potential Special Category Data.</strong> The Supplier does not require Authorised
              Users to provide special category data (health information, ethnicity, etc.) and the Customer
              shall ensure that sharing such data is not part of the acceptable use. However, Users may
              voluntarily disclose such information. The Supplier processes any such data solely on behalf of
              the Customer and under the instructions set out in the DPA.
            </p>

            <p>
              2.4 <strong>Deletion of Detected Sensitive Data.</strong> The Supplier does not accept or intend
              to store or otherwise process special category data in the Coaching Module. If any scanning or
              detection mechanism identifies such data in session content, the Supplier may delete or anonymise
              the relevant data and shall have no liability for any resulting loss of session records. The
              Customer acknowledges that it remains solely responsible for compliance with applicable laws
              regarding the collection and disclosure of any special category data by its Authorised Users.
            </p>

            <p>2.5 <strong>Retention and Deletion.</strong></p>

            <p>
              (a) <strong>During the Term.</strong> The Customer or Authorised Users may request deletion of
              voice recordings, transcripts, or related data at any time, and the Supplier shall comply in
              accordance with the DPA and the Terms.
            </p>

            <p>
              (b) <strong>Post-Termination.</strong> Following termination or expiry of the Agreement, Clause
              9 of the DPA and Clause 8.3 of the Terms govern data retrieval and deletion of Coaching Module
              data.
            </p>

            <h3>3. Data Subject Rights and Assistance</h3>

            <p>
              3.1 <strong>AI Considerations.</strong> If a Data Subject requests correction or erasure of
              personal data contained within transcripts (or other Coaching Module records), the Supplier shall
              comply with such request in line with the DPA.
            </p>

            <p>
              3.2 <strong>Requests Handling.</strong> The Supplier will promptly forward any data subject
              requests related to the Coaching Module to the Customer, or otherwise handle such requests as
              directed by the Customer under the DPA.
            </p>

            <p>
              3.3 <strong>User Awareness.</strong> The Customer is responsible for ensuring that Authorised
              Users understand how their personal data (including any sensitive information) is processed
              within the Coaching Module, in accordance with the DPA and applicable laws.
            </p>

            <h3>4. Sub-Processors</h3>

            <p>
              4.1 <strong>Transcription / AI Tools.</strong> The use or addition of sub-processors for voice
              transcription or AI analysis in the Coaching Module is subject to Section 7 of the DPA,
              including the notification and objection process.
            </p>

            <p>
              4.2 <strong>Liability.</strong> The Supplier remains liable for the acts and omissions of any
              sub-processor it appoints, as set forth in the DPA.
            </p>

            <h3>5. Security Measures</h3>

            <p>
              5.1 <strong>Technical and Organisational Measures.</strong> The Supplier shall apply appropriate
              security measures (e.g., encryption of data at rest and in transit, limited internal access, and
              secure deletion) to protect personal data processed in the Coaching Module, in line with
              Section 6 of the DPA.
            </p>

            <h3>6. General</h3>

            <p>
              6.1 <strong>No Other Amendments.</strong> Except as expressly stated here, the DPA remains
              unchanged. This Addendum is incorporated into the DPA by reference.
            </p>

            <p>
              6.2 <strong>Governing Law.</strong> This Addendum follows the same governing law and
              jurisdiction as set out in the DPA.
            </p>

            <p>
              6.3 <strong>Entire Agreement.</strong> This Addendum, together with the DPA, forms the entire
              agreement regarding personal data processing for the Coaching Module.
            </p>

            <p>
              6.4 <strong>Relationship to Terms Schedule 2 (Coaching Module).</strong> This Addendum should be
              read alongside Schedule 2 of the Terms (Coaching Module). In the event of any conflict on data
              protection matters, this Addendum shall prevail.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
