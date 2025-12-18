# ADR-1: Content Delivery Platform

> **Scope**: Document decision clusters, not individual technology choices. Group related decisions that work together (e.g., "Frontend Stack" not separate ADRs for framework, styling, deployment).

- **Status:** Accepted
- **Date:** 2025-12-10
- **Feature:** 001-textbook-chapters
- **Context:** The project requires publishing a comprehensive textbook on Physical AI & Humanoid Robotics. A platform is needed to manage content, provide a modern web interface, and support author collaboration.

<!-- Significance checklist (ALL must be true to justify this ADR)
     1) Impact: Long-term consequence for architecture/platform/security?
     2) Alternatives: Multiple viable options considered with tradeoffs?
     3) Scope: Cross-cutting concern (not an isolated detail)?
     If any are false, prefer capturing as a PHR note instead of an ADR. -->

## Decision

Utilize Docusaurus as the publishing platform, with content authored in Markdown, structured into parts and chapters under the `docs/` directory.

<!-- For technology stacks, list all components:
     - Framework: Next.js 14 (App Router)
     - Styling: Tailwind CSS v3
     - Deployment: Vercel
     - State Management: React Context (start simple)
-->

## Consequences

### Positive

Leverage Docusaurus's features for documentation, static site generation, Markdown support, versioning, and search. Facilitates easy content creation and version control via Git. Modern web-based presentation.

<!-- Example: Integrated tooling, excellent DX, fast deploys, strong TypeScript support -->

### Negative

Dependency on Docusaurus framework, potential learning curve for new authors not familiar with Docusaurus/Markdown. Customization limited by Docusaurus's architecture.

<!-- Example: Vendor lock-in to Vercel, framework coupling, learning curve -->

## Alternatives Considered

Other static site generators (e.g., Hugo, Jekyll) were considered but Docusaurus provides strong out-of-the-box features for documentation sites. Traditional CMS (e.g., WordPress) was rejected due to overhead, security concerns, and less natural integration with Git-based content workflows for code-heavy content. PDF-only publishing was rejected for lack of interactivity, searchability, and modern web experience.

<!-- Group alternatives by cluster:
     Alternative Stack A: Remix + styled-components + Cloudflare
     Alternative Stack B: Vite + vanilla CSS + AWS Amplify
     Why rejected: Less integrated, more setup complexity
-->

## References

- Feature Spec: specs/001-textbook-chapters/spec.md
- Implementation Plan: specs/001-textbook-chapters/plan.md
- Related ADRs: null
- Evaluator Evidence: null <!-- link to eval notes/PHR showing graders and outcomes -->
