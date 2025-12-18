# ADR-5: Content Validation and Compliance

> **Scope**: Document decision clusters, not individual technology choices. Group related decisions that work together (e.g., "Frontend Stack" not separate ADRs for framework, styling, deployment).

- **Status:** Accepted
- **Date:** 2025-12-10
- **Feature:** 001-fill-textbook-content
- **Context:** With an AI-driven content generation strategy, robust mechanisms are needed to ensure the output meets the project's high standards for accuracy, pedagogy, accessibility, and publishing compliance.

<!-- Significance checklist (ALL must be true to justify this ADR)
     1) Impact: Long-term consequence for architecture/platform/security?
     2) Alternatives: Multiple viable options considered with tradeoffs?
     3) Scope: Cross-cutting concern (not an isolated detail)?
     If any are false, prefer capturing as a PHR note instead of an ADR. -->

## Decision

Implement a multi-layered content validation and compliance strategy comprising: automated checks for placeholder removal, word count adherence, Markdown syntax validation, and Docusaurus build/rendering integrity. This will be complemented by a crucial manual review process focusing on constitutional compliance (Accuracy, Clarity, Pedagogical Rigor, Consistency, Safety & Ethics) and overall pedagogical quality.

<!-- For technology stacks, list all components:
     - Framework: Next.js 14 (App Router)
     - Styling: Tailwind CSS v3
     - Deployment: Vercel
     - State Management: React Context (start simple)
-->

## Consequences

### Positive

Ensures a high degree of confidence in the quality and correctness of AI-generated content. Catches errors efficiently. Upholds the textbook's credibility and adherence to all defined standards, including accessibility and ethical guidelines.

<!-- Example: Integrated tooling, excellent DX, fast deploys, strong TypeScript support -->

### Negative

Requires investment in setting up automated validation tools and a structured manual review process. Manual review can be time-consuming, even with AI assistance. Potential for human error in manual review.

<!-- Example: Vendor lock-in to Vercel, framework coupling, learning curve -->

## Alternatives Considered

Solely Manual Review: Rejected due to inefficiency for a large volume of content. It would be prone to human fatigue and inconsistency, making it difficult to guarantee adherence to all granular requirements.

Over-reliance on Automated Checks: Rejected as certain qualitative aspects like pedagogical rigor, clarity of explanations, and nuanced safety/ethical considerations are difficult to fully automate and require human judgment.

<!-- Group alternatives by cluster:
     Alternative Stack A: Remix + styled-components + Cloudflare
     Alternative Stack B: Vite + vanilla CSS + AWS Amplify
     Why rejected: Less integrated, more setup complexity
-->

## References

- Feature Spec: specs/001-fill-textbook-content/spec.md
- Implementation Plan: specs/001-fill-textbook-content/plan.md
- Content Generation Process Contract: specs/001-fill-textbook-content/contracts/content-generation-process.md
- Project Constitution: .specify/memory/constitution.md
- Chapter Format Guidelines: specs/001-textbook-chapters/contracts/chapter-format-guidelines.md
- Related ADRs: adr-2-content-quality-and-standards.md
- Evaluator Evidence: null <!-- link to eval notes/PHR showing graders and outcomes -->
