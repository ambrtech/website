import { createMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/sections/breadcrumbs'
import { PageHero } from '@/components/sections/page-hero'

export const metadata = createMetadata({
  title: 'Terms & Conditions',
  description:
    'Terms and Conditions for Ambr Technologies Limited, covering service provision, acceptable use, data protection, fees, liability, and governing law.',
  path: '/terms',
})

export default function TermsPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Home', href: '/' },
          { name: 'Terms & Conditions', href: '/terms' },
        ]}
      />

      <PageHero
        eyebrow="Legal"
        heading="Terms & Conditions"
        subtitle="Effective: 2 March 2026"
      />

      <section className="pb-section md:pb-section-lg px-container-mobile md:px-container">
        <div className="mx-auto max-w-[720px]">
          <div className="prose-ambr">

            {/* ── 1. Introduction and Incorporation by Reference ── */}
            <h2>1. Introduction and Incorporation by Reference</h2>

            <h3>1.1 Parties</h3>
            <p>
              These Terms and Conditions (&ldquo;Terms&rdquo;) govern the relationship between Ambr
              Technologies Limited, a company registered in England and Wales with company number 13908245 and
              registered office at 128 City Road, London, United Kingdom, EC1V 2NX (&ldquo;Supplier&rdquo;)
              and the customer entity identified on the applicable Order Form (&ldquo;Customer&rdquo;).
            </p>

            <h3>1.2 Incorporation by Reference</h3>
            <p>
              These Terms apply to and form part of each order form, statement of work, or similar document
              agreed between the Supplier and the Customer (each an &ldquo;Order Form&rdquo;). By executing an
              Order Form, the Customer confirms its acceptance of these Terms.
            </p>

            <h3>1.3 Access to Terms</h3>
            <p>
              The current version of these Terms is available at{' '}
              <a href="https://ambr.ai/terms">https://ambr.ai/terms</a>. The Supplier may update these Terms
              from time to time. Updated Terms will become effective upon posting to the Supplier&rsquo;s
              website and will apply prospectively to any new Order Form or renewal term. It is the
              Customer&rsquo;s responsibility to review the Terms periodically. If the Customer does not agree
              to the updated Terms, it must notify the Supplier before the commencement of the next renewal
              term, in which case no renewal will occur.
            </p>

            {/* ── 2. Definitions and Interpretation ── */}
            <h2>2. Definitions and Interpretation</h2>

            <h3>2.1 Authorised Users</h3>
            <p>
              Individuals who are authorised by the Customer to use the Services on its behalf in accordance
              with these Terms and the applicable Order Form.
            </p>

            <h3>2.2 Confidential Information</h3>
            <p>
              All information, in any form, disclosed by one party to the other that is marked confidential,
              or that ought reasonably to be considered as confidential, including, without limitation, business
              plans, technical information, product roadmaps, pricing, and personal data.
            </p>

            <h3>2.3 Customer Data</h3>
            <p>
              All data, content, and information that the Customer or its Authorised Users submit, upload, or
              input into the Services, including but not limited to user-generated scenarios, practice sessions,
              and any associated metadata.
            </p>

            <h3>2.4 Data Protection Legislation</h3>
            <p>
              The UK Data Protection Act 2018, the UK General Data Protection Regulation (UK GDPR), the EU
              General Data Protection Regulation (EU GDPR) (Regulation (EU) 2016/679), the Privacy and
              Electronic Communications Regulations (PECR), and any other applicable data protection or privacy
              laws, regulations, and legally binding codes of practice in force in the UK and the EU.
            </p>

            <h3>2.5 Services</h3>
            <p>
              The Supplier&rsquo;s proprietary software-as-a-service platform and related services identified
              in the applicable Order Form, including any updates, enhancements, or professional services
              agreed by the parties.
            </p>

            <h3>2.6 Start Date</h3>
            <p>
              The date set out in the Order Form from which the Customer&rsquo;s subscription to the Services
              begins.
            </p>

            {/* ── 3. Provision of the Services ── */}
            <h2>3. Provision of the Services</h2>

            <h3>3.1 Licence Grant</h3>
            <p>
              Subject to payment of all applicable fees and compliance with these Terms, the Supplier grants
              the Customer a non-exclusive, non-transferable right for the term of the Order Form to allow its
              Authorised Users to access and use the Services solely for the Customer&rsquo;s internal business
              operations.
            </p>

            <h3>3.2 Authorised Users</h3>
            <p>
              The Customer shall ensure that only Authorised Users access the Services, and that each
              Authorised User complies with these Terms. The Customer shall be responsible for managing user
              credentials, promptly removing or disabling credentials of individuals who are no longer
              authorised to access the Services, and preventing unauthorised use.
            </p>

            <h3>3.3 Service Availability</h3>
            <p>
              The Supplier shall use commercially reasonable efforts to make the Services available in
              accordance with any service levels set out in the Order Form or a separate service level
              agreement.
            </p>

            <h3>3.4 Maintenance and Updates</h3>
            <p>
              The Supplier may from time to time perform scheduled maintenance and introduce updates,
              enhancements, and new features to the Services. The Supplier shall use reasonable endeavours to
              give the Customer notice of planned downtime and minimise disruptions. If any update to the
              Services materially degrades the Customer&rsquo;s use of the core functionality purchased under
              the applicable Order Form, and the Supplier does not remedy such degradation within 30 days of
              receiving written notice from the Customer, the Customer may terminate the affected Order Form
              without penalty.
            </p>

            <h3>3.5 Service Levels and Remedies</h3>
            <p>
              The Supplier shall use commercially reasonable efforts to maintain a monthly service availability
              of at least 99.0%, excluding scheduled maintenance notified in advance. If the Supplier fails to
              meet this target in any calendar month (as measured by Supplier&rsquo;s monitoring systems
              available at{' '}
              <a href="https://ambr.ai.instatus.com/" target="_blank" rel="noopener noreferrer">
                https://ambr.ai.instatus.com/
              </a>
              ), the Customer shall be entitled, upon written request submitted within 30 days of the end of
              the affected month, to a service credit equal to 5% of one-twelfth (1/12th) of the total annual
              subscription fee for each full 1% below the target availability in that month, up to a maximum
              of 25% of one-twelfth (1/12th) of the annual subscription fee per affected month. Service
              credits shall be applied against future invoices and are not redeemable for cash. Service credits
              under this clause are the Customer&rsquo;s sole and exclusive remedy for failure to meet the
              service availability target.
            </p>

            {/* ── 4. Acceptable Use and Restrictions ── */}
            <h2>4. Acceptable Use and Restrictions</h2>

            <h3>4.1 Acceptable Use</h3>
            <p>
              The Customer shall use the Services in accordance with all applicable laws and regulations,
              including those relating to data protection and intellectual property. The Customer shall not
              misuse the Services or permit anyone else to do so.
            </p>

            <h3>4.2 Restrictions</h3>
            <p>
              The Customer shall not (and shall not allow any third party to) reverse engineer, decompile,
              disassemble, or otherwise attempt to derive the source code or underlying ideas of the Services;
              copy, modify, or create derivative works of the Services; or sublicense, resell, rent, lease, or
              otherwise make the Services available to any third party except as expressly permitted by these
              Terms or the applicable Order Form.
            </p>

            <h3>4.3 User-Generated Scenarios</h3>
            <p>
              Where the Services include functionality for Authorised Users to create custom scenarios:
            </p>

            <p>
              (a) <strong>Product Guidance:</strong> The Supplier provides in-product guidance to encourage
              best practices, including prompts to anonymize real situations and reminders about
              confidentiality obligations.
            </p>

            <p>
              (b) <strong>Customer Responsibilities:</strong> Notwithstanding such guidance, the Customer shall
              ensure that Authorised Users do not include in any user-generated scenario:
            </p>

            <ul>
              <li>Real names or identifying information of any third party without their express consent</li>
              <li>Confidential information belonging to third parties</li>
              <li>Content that could be defamatory, harassing, or violate any person&rsquo;s privacy rights</li>
            </ul>

            <p>(c) <strong>Acknowledgments:</strong> The Customer acknowledges and agrees that:</p>

            <ul>
              <li>It is solely responsible for all content created by its Authorised Users</li>
              <li>It must ensure such content complies with all applicable laws, employment contracts, confidentiality obligations, and internal policies</li>
              <li>The Supplier has no obligation to review user-generated scenarios</li>
              <li>Any scenarios based on real situations are created at the Customer&rsquo;s own risk</li>
            </ul>

            <p>
              (d) <strong>Indemnification:</strong> The Customer shall indemnify the Supplier against any
              claims arising from user-generated scenarios, including but not limited to claims by third parties
              whose information may have been included without consent.
            </p>

            <p>
              (e) <strong>Deletion:</strong> User-generated scenarios may be deleted by Authorised Users at
              any time during the subscription term. Upon deletion, such content will be removed from the
              Services within a commercially reasonable timeframe.
            </p>

            {/* ── 5. Intellectual Property Rights ── */}
            <h2>5. Intellectual Property Rights</h2>

            <h3>5.1 Supplier IP</h3>
            <p>
              The Supplier and/or its licensors own all intellectual property rights in and to the Services and
              all related materials. Except for the limited rights expressly granted herein, no rights, title,
              or interests in any intellectual property are transferred.
            </p>

            <h3>5.2 Customer Data</h3>
            <p>
              The Customer owns all intellectual property rights in Customer Data. The Customer grants the
              Supplier a non-exclusive, royalty-free, worldwide licence to process Customer Data only as
              necessary to perform the Services and as permitted under these Terms.
            </p>

            <h3>5.3 Feedback</h3>
            <p>
              Any feedback, suggestions, or ideas for improvements provided by the Customer may be used by the
              Supplier without restriction or obligation.
            </p>

            {/* ── 6. Data Protection ── */}
            <h2>6. Data Protection</h2>

            <h3>6.1 Compliance</h3>
            <p>Each party shall comply with its obligations under Data Protection Legislation.</p>

            <h3>6.2 Data Controller/Processor</h3>
            <p>
              To the extent that the Supplier processes personal data on the Customer&rsquo;s behalf in the
              course of providing the Services, the Supplier shall be the processor and the Customer shall be
              the controller.
            </p>

            <h3>6.3 Data Processing Agreement</h3>
            <p>
              The parties shall enter into a data processing agreement (DPA) governing the Supplier&rsquo;s
              processing of personal data. Where a separate DPA is not executed, the Supplier&rsquo;s standard
              DPA (available at{' '}
              <a href="https://ambr.ai/dpa">www.ambr.ai/dpa</a>) shall apply.
            </p>

            <h3>6.4 Data Location and Transfers</h3>
            <p>
              The Supplier shall process personal data in the UK or European Economic Area (EEA). If any
              personal data is transferred outside these regions, the Supplier shall ensure appropriate
              safeguards are in place, such as Standard Contractual Clauses.
            </p>

            <h3>6.5 Security</h3>
            <p>
              The Supplier shall implement appropriate technical and organisational measures to protect personal
              data from unauthorised or unlawful processing and against accidental loss, destruction, damage,
              alteration, or disclosure.
            </p>

            <h3>6.6 AI Training</h3>
            <p>
              The Supplier shall not use Customer Data to train AI models or for any purpose beyond providing
              the Services under these Terms and the applicable Order Form.
            </p>

            {/* ── 7. Fees, Invoicing, and Payment ── */}
            <h2>7. Fees, Invoicing, and Payment</h2>

            <h3>7.1 Fees</h3>
            <p>
              The Customer shall pay the fees set out in the applicable Order Form. All fees are exclusive of
              VAT and other applicable taxes, which shall be payable in addition.
            </p>

            <h3>7.2 Invoicing</h3>
            <p>
              Unless otherwise stated in the Order Form, the Supplier shall invoice the Customer at the start
              of each billing period. Payment is due within 30 days of the invoice date.
            </p>

            <h3>7.3 Late Payment</h3>
            <p>
              If the Customer fails to pay any amount due by the due date, the Supplier may charge interest on
              overdue amounts at the rate of 4% per annum above the Bank of England base rate until payment is
              made in full.
            </p>

            {/* ── 8. Term, Termination, and Post-Termination Data Handling ── */}
            <h2>8. Term, Termination, and Post-Termination Data Handling</h2>

            <h3>8.1 Term</h3>
            <p>
              Each Order Form remains in effect for the term specified therein. If the Order Form provides for
              auto-renewal, it shall renew on the terms stated, unless the Customer or the Supplier provides
              prior written notice of non-renewal at least 30 days before the end of the current term.
            </p>

            <h3>8.2 Termination for Cause</h3>
            <p>
              Either party may terminate an Order Form or these Terms immediately upon written notice in case
              of the other party&rsquo;s fraud, gross negligence, wilful misconduct or material breach of this
              agreement and failure to remedy such breach within 30 days&rsquo; notice, or if the other party
              becomes insolvent or subject to insolvency proceedings.
            </p>

            <h3>8.3 Effect of Termination</h3>
            <p>
              Upon termination or expiry of all Order Forms, the Customer&rsquo;s right to access the Services
              ceases immediately. The Supplier shall make Customer Data available to the Customer for retrieval
              for a period of 30 days following termination. After that period, the Supplier may delete Customer
              Data, except to the extent required by law or regulatory obligations.
            </p>

            <h3>8.4 Surviving Terms</h3>
            <p>
              Any provision intended to survive termination, including confidentiality, liability, governing
              law, and dispute resolution provisions, shall survive.
            </p>

            {/* ── 9. Warranties and Disclaimers ── */}
            <h2>9. Warranties and Disclaimers</h2>

            <h3>9.1 Supplier Warranties</h3>
            <p>
              The Supplier warrants that it will provide the Services with reasonable skill and care.
            </p>

            <h3>9.2 Customer Warranties</h3>
            <p>
              The Customer warrants that it has the authority to enter into these Terms, and that it shall use
              the Services in accordance with all applicable laws and regulations.
            </p>

            <h3>9.3 Disclaimer</h3>
            <p>
              Except as expressly stated in these Terms or the Order Form, the Services are provided &ldquo;as
              is&rdquo; without any warranties, express or implied, including warranties of merchantability,
              fitness for a particular purpose, and non-infringement.
            </p>

            {/* ── 10. Liability and Indemnities ── */}
            <h2>10. Liability and Indemnities</h2>

            <h3>10.1 Limitation of Liability</h3>
            <p>
              Subject to Clause 10.3, each party&rsquo;s total aggregate liability arising out of or in
              connection with these Terms shall not exceed the total fees paid by the Customer to the Supplier
              under the applicable Order Form in the twelve (12) months preceding the event giving rise to
              liability.
            </p>

            <h3>10.2 Exclusion of Certain Damages</h3>
            <p>
              Subject to Clause 10.3, neither party shall be liable for any indirect, consequential, punitive,
              or special damages, or any loss of profits, revenue, business, goodwill, or anticipated savings.
            </p>

            <h3>10.3 Unlimited Liabilities</h3>
            <p>
              Nothing in these Terms shall exclude or limit liability for death or personal injury caused by
              negligence; fraud or fraudulent misrepresentation; wilful misconduct; gross negligence; or any
              other liability that cannot be excluded or limited under English law.
            </p>

            <h3>10.4 Indemnity</h3>
            <p>
              The Customer shall indemnify and hold the Supplier harmless from any third-party claims arising
              from the Customer&rsquo;s or its Authorised Users&rsquo; misuse of the Services or breach of
              these Terms, provided that: (a) the Supplier promptly notifies the Customer in writing upon
              becoming aware of any claim, demand, or proceeding that may give rise to an indemnity under this
              clause; (b) the Customer shall have the right, at its own expense and in its sole discretion, to
              assume the defence and control of any such claim, including the selection of legal counsel;
              (c) the Supplier shall provide the Customer with all reasonable assistance and information
              requested by the Customer in connection with the defence of the claim, at the Customer&rsquo;s
              expense; and (d) the Supplier shall not settle or admit liability in respect of any such claim
              without the Customer&rsquo;s prior written consent (such consent not to be unreasonably withheld
              or delayed).
            </p>

            <h3>10.5 Supplier IP Indemnity</h3>
            <p>
              The Supplier shall defend the Customer against any third-party claim that the Services, as
              provided by the Supplier, infringe that third party&rsquo;s intellectual property rights under
              the laws of England and Wales, and shall indemnify the Customer against any damages finally
              awarded or agreed in settlement, subject to the Customer providing prompt written notice, the
              Supplier having sole control of the defence, and the Customer providing reasonable cooperation.
              This indemnity shall not apply where the claim arises from the Customer&rsquo;s modification of
              the Services, use in combination with third-party products or data, use other than in accordance
              with these Terms, or Customer Data. The Supplier&rsquo;s liability under this clause is subject
              to Sections 10.1 and 10.3.
            </p>

            {/* ── 11. Professional Services ── */}
            <h2>11. Professional Services (If Applicable)</h2>

            <p>
              If the Customer engages the Supplier to provide professional or consulting services, such
              services shall be provided subject to these Terms and any additional terms agreed in the Order
              Form. The Customer shall provide all necessary cooperation and information to enable the Supplier
              to perform such services.
            </p>

            {/* ── 12. Confidentiality ── */}
            <h2>12. Confidentiality</h2>

            <h3>12.1 Obligations</h3>
            <p>
              Each party shall treat the other&rsquo;s Confidential Information as strictly confidential and
              not use or disclose it except as necessary to perform obligations under these Terms or as
              required by law.
            </p>

            <h3>12.2 Exceptions</h3>
            <p>
              Confidential Information does not include information that is or becomes publicly known without
              breach; was lawfully known before disclosure; is received from a third party without breach of
              confidentiality; or is independently developed without reference to the Confidential Information.
            </p>

            {/* ── 13. Amendments and Updates ── */}
            <h2>13. Amendments and Updates</h2>

            <h3>13.1 Amendments to Terms</h3>
            <p>
              The Supplier may amend these Terms by posting an updated version on its website. Such updates
              will apply to new and renewal Order Forms as described in Clause 1.3.
            </p>

            <h3>13.2 Order Form Changes</h3>
            <p>
              Changes to an existing Order Form shall be made by a written amendment signed by both parties or
              as otherwise agreed in writing (including electronic means).
            </p>

            {/* ── 14. Force Majeure ── */}
            <h2>14. Force Majeure</h2>

            <h3>14.1 Events</h3>
            <p>
              Neither party shall be liable for delays or failures to perform due to events beyond its
              reasonable control, including acts of God, war, terrorism, natural disasters, strikes, or
              pandemics.
            </p>

            <h3>14.2 Notification</h3>
            <p>
              A party affected by a force majeure event shall promptly notify the other and use reasonable
              endeavours to mitigate its effects.
            </p>

            {/* ── 15. Notices ── */}
            <h2>15. Notices</h2>

            <h3>15.1 Form of Notice</h3>
            <p>
              All notices must be in writing and delivered by email or registered post to the contacts
              specified in the Order Form (or subsequently notified in writing).
            </p>

            <h3>15.2 Deemed Receipt</h3>
            <p>
              Notices sent by registered post are deemed received three (3) business days after posting.
              Notices sent by email are deemed received on the next business day after sending, provided no
              delivery failure notice is received.
            </p>

            {/* ── 16. Governing Law and Jurisdiction ── */}
            <h2>16. Governing Law and Jurisdiction</h2>

            <h3>16.1 Governing Law</h3>
            <p>
              These Terms and any disputes arising out of or in connection with them (whether contractual or
              non-contractual) shall be governed by and construed in accordance with the laws of England and
              Wales.
            </p>

            <h3>16.2 Jurisdiction</h3>
            <p>
              The courts of England and Wales shall have exclusive jurisdiction to settle any disputes arising
              out of or in connection with these Terms.
            </p>

            {/* ── 17. Dispute Resolution ── */}
            <h2>17. Dispute Resolution</h2>

            <h3>17.1 Good Faith Discussions</h3>
            <p>
              The parties shall first seek to resolve any disputes informally through good faith discussions.
            </p>

            <h3>17.2 Escalation</h3>
            <p>
              If a dispute cannot be resolved amicably, either party may refer it to a senior executive of
              each party for resolution.
            </p>

            <h3>17.3 Legal Proceedings</h3>
            <p>
              If the dispute is not resolved within 30 days following escalation, either party may pursue its
              remedies in the courts as set out in Clause 16.2.
            </p>

            {/* ── 18. General Provisions ── */}
            <h2>18. General Provisions</h2>

            <h3>18.1 Independent Contractors</h3>
            <p>
              The parties are independent contractors. No partnership, agency, or joint venture is created by
              these Terms.
            </p>

            <h3>18.2 No Third-Party Rights</h3>
            <p>
              Except as otherwise stated, these Terms do not confer any rights on third parties.
            </p>

            <h3>18.3 Severability</h3>
            <p>
              If any provision of these Terms is found unenforceable, it shall be amended to the minimum extent
              necessary to make it enforceable, and the remaining provisions shall remain in full force and
              effect.
            </p>

            <h3>18.4 Entire Agreement</h3>
            <p>
              These Terms, together with any Order Form and referenced documents, constitute the entire
              agreement between the parties relating to the subject matter and supersede all prior agreements.
            </p>

            <h3>18.5 Waiver</h3>
            <p>
              No waiver of any breach shall be considered a waiver of subsequent breaches.
            </p>

            <hr />

            {/* ── Schedule 1 ── */}
            <h2>Schedule 1: Presentation Practice Module</h2>

            <h3>1. Scope and Incorporation</h3>

            <p>
              1.1 <strong>Application of Terms.</strong> This Schedule supplements the Terms &amp; Conditions
              (&ldquo;Terms&rdquo;) solely with respect to the &ldquo;Presentation Practice Module&rdquo;
              (&ldquo;Module&rdquo;). Except as expressly amended here, the Terms remain in full force and
              effect.
            </p>

            <p>
              1.2 <strong>Conflict.</strong> If there is a conflict between the Schedule and the main Terms,
              this Schedule prevails for issues specifically relating to the Module.
            </p>

            <h3>2. Overview of Module</h3>

            <p>
              2.1 <strong>Purpose.</strong> The Module enables Authorised Users to practice and improve their
              presentations using AI-driven feedback, including simulated audience questions.
            </p>

            <p>
              2.2 <strong>Confidential Content.</strong> Audio inputs, transcripts, Q&amp;A, and any data
              generated or uploaded by the Customer or Authorised Users in connection with the Module shall be
              treated as Confidential Information, in accordance with Clause 12 of the Terms.
            </p>

            <h3>3. Use of AI and Limitations</h3>

            <p>
              3.1 <strong>AI Output.</strong> The Module relies on AI-based technologies. The Supplier makes no
              warranties regarding accuracy, completeness, or suitability of AI-generated feedback, notes, or
              Q&amp;A.
            </p>

            <p>
              3.2 <strong>No Reliance.</strong> The Customer acknowledges that the Module is provided as a
              training aid only, and the Customer remains responsible for verifying any AI-generated outputs.
            </p>

            <h3>4. Additional Confidentiality &amp; Data Handling</h3>

            <p>
              4.1 <strong>Customer Responsibility.</strong> The Customer is responsible for ensuring that any
              confidential or proprietary business data they submit in the Module is permitted under their
              internal policies.
            </p>

            <p>
              4.2 <strong>Supplier Obligations.</strong> The Supplier will treat all Module-related content in
              accordance with the confidentiality and data protection provisions set out in the Terms and the
              Data Processing Agreement (&ldquo;DPA&rdquo;).
            </p>

            <p>
              4.3 <strong>Deletion.</strong> Upon request or termination, the Supplier shall delete or return
              transcripts, feedback, and other Module data as set forth in the Terms and the DPA.
            </p>

            <p>
              4.4 <strong>Data Retention Period.</strong> Notwithstanding Section 4.3 and for clarity,
              following termination or expiry, the Supplier shall make Module-related content available for
              retrieval for thirty (30) days in accordance with Clause 8.3 of the Terms. During the active
              term of the Agreement, deletion requests shall be handled in accordance with Section 2.3 of the
              DPA Addendum.
            </p>

            <p>
              4.5 <strong>Data Protection.</strong> For clarity, all processing of personal data in connection
              with the Module shall be governed by the DPA and its Module-specific Addendum. The Customer
              acknowledges that voice recordings and transcripts may constitute personal data and shall be
              processed accordingly.
            </p>

            <h3>5. Fees and Term</h3>

            <p>
              5.1 <strong>Fees.</strong> Any Module-related fees will be specified in the Order Form.
            </p>

            <p>
              5.2 <strong>Duration.</strong> The Module will be provided for the term indicated in the Order
              Form. Termination or expiry of the Module follows the same procedures under the Terms.
            </p>

            <h3>6. No Other Changes</h3>

            <p>
              6.1 <strong>Entire Agreement.</strong> Except as expressly stated in this Schedule, the Terms
              remain unchanged. The governing law and dispute resolution provisions of the Terms apply equally
              to this Schedule.
            </p>

            <hr />

            {/* ── Schedule 2 ── */}
            <h2>Schedule 2: Coaching Module</h2>

            <h3>1. Scope and Incorporation</h3>

            <p>
              1.1 <strong>Application of Terms.</strong> This Schedule supplements the Terms &amp; Conditions
              (&ldquo;Terms&rdquo;) solely with respect to the &ldquo;Coaching Module.&rdquo; Except as
              expressly amended in this Schedule, the Terms remain in full force and effect.
            </p>

            <p>
              1.2 <strong>Conflict.</strong> In the event of any conflict between this Schedule and the main
              Terms, this Schedule prevails for issues specifically relating to the Coaching Module.
            </p>

            <h3>2. Overview of Module</h3>

            <p>
              2.1 <strong>Purpose.</strong> The Coaching Module enables Authorised Users to engage in voice AI
              simulations that emulate professional or executive coaching sessions, focusing on career goals,
              workplace challenges, and related topics.
            </p>

            <p>
              2.2 <strong>Confidential Content.</strong> Conversations, transcripts, feedback, and any data
              generated or uploaded by the Customer or its Authorised Users in connection with the Coaching
              Module shall be treated as Confidential Information, in accordance with Clause 12 of the Terms.
            </p>

            <h3>3. Use of AI and Limitations</h3>

            <p>
              3.1 <strong>AI Outputs.</strong> The Coaching Module relies on AI-driven character responses. The
              Supplier makes no warranties regarding the accuracy, completeness, or applicability of any
              feedback or coaching advice generated by the AI.
            </p>

            <p>
              3.2 <strong>No Reliance.</strong> The Customer remains responsible for verifying the suitability
              of any AI-generated outputs. The Coaching Module is not a substitute for professional mental
              health or medical services and does not purport to provide therapy or counseling.
            </p>

            <p>
              3.3 <strong>Sensitive Topics.</strong> The Supplier does not intend or require Authorised Users
              to share special category data (e.g., health or other sensitive personal information). The
              Customer acknowledges, however, that Users may disclose such personal or sensitive details at
              their own discretion. Any data voluntarily shared remains the responsibility of the Customer and
              will be processed in accordance with the Terms and the DPA. The Customer must ensure that such
              disclosures do not violate its internal policies or applicable law.
            </p>

            <p>
              3.4 <strong>Prohibition on Special Category Data.</strong> The Coaching Module is not intended
              for the storage or processing of special category data (e.g., health information or other
              sensitive personal data). If the Supplier detects that special category data has been submitted,
              the Supplier may, at its discretion, delete or anonymise the session data to remove such content.
              The Customer acknowledges that any session or transcripts containing special category data may be
              lost in the process, and the Supplier shall have no liability for such deletion or anonymisation.
            </p>

            <h3>4. Additional Confidentiality &amp; Data Handling</h3>

            <p>
              4.1 <strong>Customer Responsibility.</strong> The Customer must ensure that any confidential or
              proprietary information submitted through the Coaching Module is permitted under its own policies
              and that Users understand the nature of the AI-based simulations.
            </p>

            <p>
              4.2 <strong>Supplier Obligations.</strong> The Supplier shall treat all Coaching Module content
              in accordance with its confidentiality obligations in the Terms and its data protection
              obligations in the DPA and the Coaching Module Addendum.
            </p>

            <p>
              4.3 <strong>Deletion.</strong> Upon request or termination, the Supplier shall delete or return
              any Coaching Module transcripts, recordings, or related content in accordance with Clause 8.3 of
              the Terms and the DPA.
            </p>

            <p>
              4.4 <strong>Data Retention Period.</strong> Following termination or expiry, the Supplier will
              make Coaching Module content available for retrieval for thirty (30) days in accordance with
              Clause 8.3 of the Terms. During the active term of the Agreement, deletion requests shall be
              handled under the DPA Addendum for the Coaching Module.
            </p>

            <h3>5. Fees and Term</h3>

            <p>
              5.1 <strong>Fees.</strong> Any fees for the Coaching Module shall be specified in the Order Form.
            </p>

            <p>
              5.2 <strong>Duration.</strong> The Coaching Module will be provided for the term indicated in the
              Order Form. Termination or expiry of the Coaching Module follows the same procedures under the
              Terms.
            </p>

            <h3>6. No Other Changes</h3>

            <p>
              6.1 <strong>Entire Agreement.</strong> Except as expressly stated in this Schedule, the Terms
              remain unchanged. The governing law and dispute resolution provisions of the Terms apply equally
              to this Schedule.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
