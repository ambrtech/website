# TODO

## Now
- [x] Create Skyscanner case study page
- [x] Compliance page: make the three compliance boxes (GDPR, EU AI Act, Ongoing Verification) collapsible — show only the icon, title, and status badge by default. Dense body text hidden until the user expands.

## Later

### Sitewide
- [ ] **Fix mock-up animation** — The three-column customization mock-ups (Admin, In-House, Individual) don't animate correctly — they suddenly appear after a few seconds instead of smoothly revealing. This is broken on the homepage, customization page, and admin experience page.
- [ ] **Find and verify all stats/numbers/figures** — Audit every stat, number, or figure mentioned anywhere across the website for accuracy and consistency.
- [ ] **Standardize CTA blocks** — Different pages use different CTA block types/styles. Standardize on a consistent design (the Languages page CTA is preferred). Audit and align all CTAs across the site.
- [ ] **Remove "interactive demo" terminology** — The term was agreed to not be used. Find and remove/replace across the site.
- [ ] **Update embedded demo scenarios** — Any embedded interactive demo scenarios need to point to the correct scenario.

### Stats
- [ ] Get the real "would recommend" stat from the Deloitte survey and Brand Jacobson survey, then update the 85% figure across the whole website

### Homepage
- [ ] **Review all homepage mock-ups** — Check each mock-up is appropriate and representative of the actual product
- [ ] **Body language analysis mock-up** — Add a wireframe mesh of a person to the body language analysis visual in the "Why Teams Choose Ambr AI" section
- [ ] **"See all supported languages" link placement** — Currently doesn't sit under the "Global training" / Languages reason. Move it so it's visually associated with that item.
- [ ] **Security section copy** — "Data is isolated, never shared, and never used to train external models" — remove "isolated" and "shared", reword to align with the linked security pages

### Customization page
- [ ] **"Why it matters" section** — Needs an image, mock-up, or animation to make it visually interesting (currently text-only SplitContent with no visual)
- [ ] **"What you can customize" line break** — Should read "What you can customize" then line break, then "(and how easy it is)" — not all on one line

### What is AI Roleplay page
- [ ] **Hero needs rewording** — Too long/verbose, needs to be more concise. Also needs accent emphasis — currently all black.
- [ ] **Page needs more visual interest** — Currently very bland and text-heavy. Probably needs an embedded demo and possibly other visual additions.

### How It Works page
- [x] **Reframe steps for buyer vs user (FOR DISCUSSION)** — Step 1 should be clearly for the buyer (e.g. "You pick the simulations for your teams to practice — from our pre-built library or creating your own"). Step 2 onward is the user experience ("Employees go to..."). Drop "Your team member" — unclear phrasing. *(Steph: "I wonder if we basically have a first step that is clearly for the buyer... and then the second step starts with employees/users go to." Zoe: "we are aligned")*
- [ ] **Make customization more prominent on this page?** *(Zoe: "Broader thought. Do we need to make customization more prominent on this page? Only gets a few mentions at the moment — and we know that this page is usually the most visited after the homepage")*
- [ ] **Why Voice section — mention why not video** *(Zoe: "Could: just a thought. Do we need to also say why not video in this section?")*
- [ ] **Mention text-entry support** — It's an important feature for some users *(Steph: "Should: I think we should make clear that it does support text-entry though as that's an important feature for some users")*
- [ ] **Screensharing in "Beyond the conversation"** — Doesn't fit as its own item. At most a sub-bullet under Presentations. *(Steph: "Should: I don't think this goes with the rest of the items listed here and we have very little feedback that users want it — I think at most it should be a sub bullet in presentations.")*
- [ ] **Step 2 — Add "Try a simulation" button** — Under "Employees have the conversation" blurb, add a horizontal thin CTA button to try a simulation (not a full square box)
- [ ] **Step 2 mock-up — Review copy** — Remove "Response Time" from the voice conversation mock-up on the left
- [ ] **Step 3 mock-up — Animate and improve** — "Structured feedback, instantly" mock-up should be animated and show feedback more representative of the actual product (not just horizontal bars)
- [ ] **Why Voice section too text-heavy** — Needs visual improvements or restructuring to break up the text
- [ ] **"For admins" section mock-up** — Dashboard mock-up in "Built for the people who run training" needs updating
- [ ] **93% stat section looks orphaned** — Doesn't fit the visual rhythm of the rest of the page. Needs redesign or integration into another section.

### Admin Experience page
- [ ] **Review all mock-ups** — All mock-ups on this page need to be checked and updated
- [ ] **Customization three-column section** — Same broken animation issue as homepage/customization page

### Industries pages (all)
- [ ] **Use cases + "Why choose Ambr AI" sections** — Both use the same layout/design and together are far too text-heavy. At least one needs to change to a more visually interesting layout.

### Solutions pages (all)
- [ ] **Accordion section** — Background texture and mock-ups that change between accordion options need updating
- [ ] **Example scenarios presentation** — The visual presentation of example scenarios doesn't fit the aesthetic and probably needs changing
- [ ] **Generally too text-heavy** — May need layout improvements across all solutions pages
- [ ] **Check feature relevance** — The features shown for each solutions page may need checking for relevance

### Company page
- [ ] **Hero team picture** — Discuss with Zoe and Steph whether to include the team picture in the hero, or remove it. Also discuss including founders' photos.

### FAQ page
- [ ] Add tech detail FAQs that don't have an obvious home elsewhere: supported browsers, headset/mic requirements, network considerations
- [ ] Add more GEO-optimized FAQ questions (Jamie has a prompt to generate them). Human-targeted FAQs at the top, GEO-focused ones underneath — possibly a separate component to visually separate them
- [x] Security & Data section: add EU AI Act compliance question — resolved via Trust Portal link in FAQ
- [x] Could: host our Security & Privacy Q&A on the website and link it from the FAQ *(Steph)* — added Trust Portal callout to Security & Data section
- [ ] **Jamie to review FAQ for accuracy**

### Blog
- [ ] **Jamie to review initial blog posts** — 15 GEO-optimized posts published 2026-03-17. Need human review for: accuracy of cited stats/sources (several lack direct URLs), tone/voice consistency, Ambr AI positioning, and whether publication dates should be staggered for a more organic cadence. See Claude's initial review notes for specific flagged citations.

### Brand & Copy
- [ ] Agree with S and Z the wording underneath logo in the footer (and anywhere else it's used): "Realistic AI voice simulations, custom-built for enterprise teams."
- [ ] **Audit accent emphasis consistency** — Get Claude to extract every heading/sub-heading that uses `<em className="text-accent">` across the site into a consolidated markdown file, alongside the CLAUDE.md guidance on when emphasis should be used. Jamie to audit for consistency and cascade changes back out.
