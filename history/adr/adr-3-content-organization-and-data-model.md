# ADR-3: Content Organization and Data Model

> **Scope**: Document decision clusters, not individual technology choices. Group related decisions that work together (e.g., "Frontend Stack" not separate ADRs for framework, styling, deployment).

- **Status:** Accepted
- **Date:** 2025-12-10
- **Feature:** 001-textbook-chapters
- **Context:** A clear and consistent structure is essential for a large educational textbook to ensure readability, navigability, and ease of contribution.

<!-- Significance checklist (ALL must be true to justify this ADR)
     1) Impact: Long-term consequence for architecture/platform/security?
     2) Alternatives: Multiple viable options considered with tradeoffs?
     3) Scope: Cross-cutting concern (not an isolated detail)?
     If any are false, prefer capturing as a PHR note instead of an ADR. -->

## Decision

Define a structured content model based on entities like Chapter, Section, Diagram, Code Example, Exercise, Glossary, and Reference. Organize content in a hierarchical directory structure under `docs/` reflecting parts and chapters.

<!-- For technology stacks, list all components:
     - Framework: Next.js 14 (App Router)
     - Styling: Tailwind CSS v3
     - Deployment: Vercel
     - State Management: React Context (start simple)
-->

## Consequences

### Positive

Provides a clear roadmap for content authors. Enhances user experience through predictable navigation. Facilitates modular development and content management.

<!-- Example: Integrated tooling, excellent DX, fast deploys, strong TypeScript support -->

### Negative

Initial overhead in setting up and understanding the structure. May require refactoring if the content scope changes significantly later.

<!-- Example: Vendor lock-in to Vercel, framework coupling, learning curve -->

## Alternatives Considered

Flatter content structure was rejected for potential navigation difficulties and lack of clear pedagogical flow for a multi-part textbook. Less rigid content entities was rejected as it would lead to inconsistency and difficulty in extracting structured information (e.g., for automated validation or indexing).

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
