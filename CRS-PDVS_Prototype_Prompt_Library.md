# CRS-PDVS Prototype Prompt Library

*Phased Coding-Agent Prompts for HTML, CSS, and JavaScript Prototype Delivery*

**Confidential Internal Build Asset**

Use sequentially. Each prompt assumes the outputs of the previous phase already exist.

Prototype scope: visual validation only; no database, no real backend, all data and outcomes mocked.

## 1. Working Rules for the Coding Agent

These prompts are derived from the approved prototype blueprint and are meant to be fed to the coding agent in sequence. The objective is a polished front-end prototype for institutional review, not a production application. The prototype must feel official, calm, and operationally realistic.

- Use only HTML, CSS, and JavaScript. Do not introduce frameworks, build tools, databases, authentication services, or API integrations.
- All data must be mocked locally through JSON objects, arrays, or static modules. All verification outcomes, analytics, and audit records must be simulated.
- Build for mobile-first responsiveness, then desktop refinement. Pensioner screens must remain legible for older users.
- Keep the design Cross River State-inspired: controlled blue, clean white, restrained accents, generous spacing, minimal clutter.
- Use professional copy. Avoid startup jargon, hype text, comic microcopy, and decorative noise.
- Every phase must preserve and extend the previous work; do not rewrite the entire prototype unless explicitly instructed.

## 2. Recommended File Structure

The prompts assume a simple, agent-friendly project structure that remains easy to inspect and demo.

- `index.html - landing and pensioner entry surface`
- `admin.html - administrative experience entry point`
- `css/base.css - resets, tokens, typography, layout primitives`
- `css/components.css - cards, buttons, form controls, tables, chips, banners, modals`
- `css/pages.css - page-specific layout refinements`
- `js/app.js - shared bootstrapping and navigation helpers`
- `js/mock-data.js - pensioners, verification sessions, analytics, support cases, audit items`
- `js/pensioner.js - pensioner flow logic`
- `js/admin.js - admin flow logic`
- `assets/ - logos, icons, illustrations, optional state-themed imagery`

## 3. Prompt Sequence Overview

Intent: build the complete pensioner and administrative prototype flow with disciplined public-service design, believable state logic, and clean mocked interactions.

Feed the following prompts to the coding agent one after the other. Do not skip the sequence. Each phase has a clear deliverable and acceptance target.

| Phase | Build Focus | Pages / Modules | Output Expectation |
|---|---|---|---|
| 01 | Foundation | shared shell | design system and navigation scaffold |
| 02 | Landing | index.html | state-worthy public entry page |
| 03 | Identity Lookup | pensioner flow | mock sign-in and account match |
| 04 | Onboarding | pensioner flow | first-use setup and camera consent |
| 05 | Verification | pensioner flow | guided liveness simulation |
| 06 | Results and Dashboard | pensioner flow | status states and history |
| 07 | Admin Shell | admin.html | role-aware admin entry and layout |
| 08 | Admin Operations | dashboard and records | queue, profiles, review actions |
| 09 | Analytics and Agent | reports and assisted mode | believable administrative depth |
| 10 | Polish and Demo | all surfaces | motion, realism, demo readiness |

## Phase 01 Prompt - Project Foundation and Shared UI System

### Prompt to feed into the coding agent

Build the initial CRS-PDVS prototype foundation using plain HTML, CSS, and JavaScript only. Create a clean project structure with index.html, admin.html, css/base.css, css/components.css, css/pages.css, js/app.js, js/mock-data.js, js/pensioner.js, and js/admin.js. Establish a professional design system inspired by Cross River State service identity: controlled royal blue, white, soft neutral surfaces, strong hierarchy, generous spacing, medium-large readable typography, and restrained motion. Add reusable components for buttons, cards, form fields, chips, banners, modal shells, tables, steppers, and status alerts. Implement a responsive header, footer, and shared page container. Include a short, elegant, dismissible intro overlay for “Season of Sweetness” that appears only once per session and disappears automatically. Do not build any business flow yet beyond placeholder navigation links. Seed realistic mock data structures for pensioners, verification sessions, admin roles, analytics, support cases, and audit logs. Ensure the code is modular, commented, and easy to extend.

### Acceptance check

- A working visual foundation exists across both entry points.
- The design tokens and reusable components are established once and reused.
- Mock data is centralized and named clearly.
- The intro overlay is polished, lightweight, and non-intrusive.

## Phase 02 Prompt - Public Landing Page and Service Entry

### Prompt to feed into the coding agent

Using the existing foundation, build the full public landing page for CRS-PDVS in index.html. The page should feel like an official Cross River State pension verification service, not a startup homepage. Include the state logo area, product name, a concise purpose statement, a “Start Verification” primary action, a “Get Help” secondary action, a trust strip explaining secure verification, assisted support, and Pension Board oversight, and a restrained “Think Cross River” support line. Add clear sections for how the process works in three steps, who the service is for, support options for pensioners without smartphones, and a footer with calm institutional copy. Keep the page uncluttered, elegant, and fully responsive. Use subtle animation only where it improves polish.

### Acceptance check

- Landing page communicates trust within a few seconds.
- Primary and secondary actions are visually distinct.
- The page remains readable and calm on mobile.
- Branding feels state-native without becoming slogan-heavy.

## Phase 03 Prompt - Pensioner Identity Lookup and Sign-In Flow

### Prompt to feed into the coding agent

Extend the pensioner experience by building the identity lookup and sign-in flow. Create a dedicated section or screen state where the pensioner enters Pension ID and a secondary identifier - registered phone number. Use mocked local data to simulate account matching. Include clear progress cues, reassuring privacy language, and concise error handling for invalid or unmatched entries. Add success behavior that reveals a masked identity confirmation card showing name, LGA, pension category, and partially masked phone number. Provide options to continue, retry, or seek assistance. Do not use any real authentication or backend calls; all behavior must be mocked in JavaScript with believable logic.

### Acceptance check

- The form is simple and pensioner-friendly.
- Success and failure states both look intentional.
- Mock lookup logic is believable and easy to follow.
- No dense or technical wording appears on user-facing screens.

## Phase 04 Prompt - First-Time Onboarding and Camera Consent

### Prompt to feed into the coding agent

Build the first-time onboarding flow that follows successful identity lookup. Add step-based screens for identity confirmation, secure-access explanation, prototype-only consent messaging, and camera permission preparation. Include a calm explanation of how digital verification works, what the pensioner will do next, and what happens if the process cannot be completed. Create a polished camera-permission screen that explains the need for face guidance and liveness prompts without sounding technical. Add back, continue, and help actions. Treat the onboarding as part of a larger guided flow with a visible stepper and strong visual continuity.

### Acceptance check

- The onboarding reduces anxiety instead of adding friction.
- The stepper makes progress obvious.
- Help paths are visible but not disruptive.
- The screen sequence is coherent and polished.

## Phase 05 Prompt - Guided Verification and Liveness Simulation

### Prompt to feed into the coding agent

Build the core verification experience as a semi-real visual simulation. Use the browser camera if available for visual realism, but keep all verification outcomes mocked in JavaScript. Create screens for face-position guidance, liveness prompts such as blink, turn left, and turn right, and a processing state with premium loading feedback. Add visual framing guides, quality hints, and accessible instructions suitable for older users. Do not implement real biometric matching; instead, simulate a staged flow that feels operationally credible. Support both happy-path progression and a controlled failed-attempt branch. Keep the interface calm, non-technical, and high-trust.

### Acceptance check

- The verification flow feels serious and credible.
- Camera guidance is clear and usable.
- Processing and transition states are polished.
- The outcome remains mocked but believable.

## Phase 06 Prompt - Verification Outcomes, Pensioner Dashboard, and History

### Prompt to feed into the coding agent

Build the pensioner outcome states and post-verification dashboard. Implement four result states: verified successfully, pending manual review, verification could not be completed, and referred to approved support center. Each state should have its own message hierarchy, visual treatment, and next-step actions. After a successful flow, route the pensioner to a simple dashboard showing current status, verification history, next expected cycle note, confirmation reference, and support options. Add a verification-history view with realistic past timestamps and statuses drawn from mock data. Maintain strong readability and emotional calm throughout.

### Acceptance check

- Each outcome state is distinct and purposeful.
- Dashboard content feels useful, not decorative.
- History data looks real enough for demo use.
- Support actions remain visible and dignified.

## Phase 07 Prompt - Administrative Entry, Roles, and Dashboard Shell

### Prompt to feed into the coding agent

Build the administrative side in admin.html using the established design system. Create a secure-looking admin login surface with role context, then route into a full dashboard shell with left navigation, top status bar, and content panels. Simulate role-based identity for Pension Board Administrator, Verification Officer, Supervisor, Auditor, and Assisted Verification Agent. The dashboard home should display summary cards for total pensioners, current-cycle verified count, pending review cases, failed attempts, assisted verifications, LGA coverage, and suspicious activity alerts. Keep the experience operational and restrained. No marketing styling. All values should be supplied from mock data.

### Acceptance check

- Admin area feels like a command centre.
- Role context is visible and believable.
- Summary metrics are clean and readable.
- Navigation is ready for deeper operational modules.

## Phase 08 Prompt - Records, Review Queue, and Pensioner Profile Detail

### Prompt to feed into the coding agent

Extend the admin area with functional screens for pensioner records, the verification review queue, and pensioner profile detail. Build a searchable records table with filters for LGA, status, and verification cycle. Create a review queue that lists recent attempts, reason tags, timestamps, and actions such as Review, Escalate, Approve, and Refer. Build a pensioner profile page showing identity summary, verification status, history, support history, case notes, and an audit timeline. All data remains mocked, but the behavior should feel like a real administrative system. Use good table spacing, readable chips, and disciplined layout hierarchy.

### Acceptance check

- Tables are spacious and easy to scan.
- Profile detail is information-rich without clutter.
- Review actions feel operationally grounded.
- Queue and record logic is coherent.

## Phase 09 Prompt - Reports, Analytics, and Assisted Verification Console

### Prompt to feed into the coding agent

Build the remaining high-value administrative surfaces: reports and analytics, plus an assisted verification console for support staff. The reports screen should include visual summaries for verification completion rate, pending review trends, assisted-verification volume, LGA comparisons, exception categories, and suspicious-activity indicators. Use plain JavaScript charts or lightweight custom SVG/canvas rendering; do not add a framework. Then create an assisted-verification console where an agent can search for a pensioner, confirm identity using mocked fields, guide the assisted process, and record an assisted-verification outcome. Add realistic support notes, timestamps, and case references.

### Acceptance check

- Analytics demonstrate administrative intelligence.
- The agent console proves inclusion for non-digital users.
- Chart visuals are clean and not overdesigned.
- Mock workflows feel demo-ready.

## Phase 10 Prompt - Final Polish, Motion, Accessibility, and Demo Mode

### Prompt to feed into the coding agent

Perform a final pass across the entire prototype. Refine spacing, typography, button hierarchy, empty states, error states, loading states, transitions, and motion timing. Ensure all screens are responsive and visually consistent. Improve accessibility by tightening contrast, enlarging weak tap targets, clarifying labels, and ensuring keyboard navigation works on the main flows. Add a demo mode switch or seeded demo state so reviewers can quickly jump between pensioner and admin experiences. Populate realistic mock records for several LGAs in Cross River State, believable timestamps, audit notes, and support cases. Prepare the prototype so it is visually complete, institutionally credible, and ready for stakeholder walkthrough.

### Acceptance check

- The full prototype feels coherent from start to finish.
- Accessibility and responsiveness hold up under review.
- Demo navigation is smooth and practical.
- The system looks ready to present, even though everything remains mocked.

## 11. Usage Notes

Feed one prompt at a time. Review the generated work after each phase before moving to the next.

Where the agent produces weak layout or noisy copy, correct it immediately rather than letting the problem compound into later phases.

Use the prompt library as an execution script, not as a suggestion list. Sequence matters.
