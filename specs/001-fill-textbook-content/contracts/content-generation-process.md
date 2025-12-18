# Content Generation Process Contract: Fill Textbook Chapters

**Date**: 2025-12-10
**Feature**: [specs/001-fill-textbook-content/spec.md](specs/001-fill-textbook-content/spec.md)
**Purpose**: To define the explicit contract for AI-driven content generation for the textbook chapters, ensuring all requirements are met and the output is consistent and high-quality.

## Input Contract

The input for content generation will be an existing chapter Markdown file (`.md` or `.mdx`) located under the `docs/` directory of the textbook project. This file will have the structure and placeholder text as established by the `001-textbook-chapters` feature and its `chapter-format-guidelines.md`.

**Key Input Elements**:
-   **Chapter File Structure**: The hierarchical headings (H1, H2, H3, H4) and specific sections (Executive Summary, Learning Objectives, etc.) MUST be preserved.
-   **Placeholder Text**: Bracketed `[ ]` text within these sections indicating areas requiring content.
-   **Contextual Information**: The chapter title, part, and surrounding content (if any) will provide context for generation.
-   **External Guidelines**:
    -   `.specify/memory/constitution.md` (for core principles).
    -   `specs/001-textbook-chapters/contracts/chapter-format-guidelines.md` (for specific formatting, tone, and content element expectations).

## Output Contract

The output for content generation will be a modified version of the input chapter Markdown file, with all placeholders replaced by comprehensive, accurate, and pedagogically sound content.

**Key Output Elements & Requirements**:
-   **Placeholder Elimination (FR-001)**: All bracketed placeholder text MUST be entirely removed and replaced with generated content.
-   **Content Completeness (FR-002)**: Generated content MUST include:
    -   Thorough explanations for each section.
    -   Concrete, relevant examples (conceptual or code-based).
    -   Clear, descriptive explanations for diagrams (even if the diagram itself is textual/ASCII).
    -   Practical, relevant exercises as specified.
-   **Word Count Adherence (FR-003)**: The prose content (excluding code blocks, diagram descriptions, glossary definitions, and references) for each chapter MUST be between 500–700 words.
-   **Constitutional Compliance (FR-004)**: Generated content MUST strictly adhere to:
    -   **Accuracy**: Reflect real-world robotics systems, ROS2, Isaac Sim, Gazebo, Unity, VLA.
    -   **Clarity**: Explain concepts step-by-step for advanced learners/engineers.
    -   **Pedagogical Rigor**: Balance theory, practicals, exercises.
    -   **Consistency**: Uniform terminology, style, and formatting.
    -   **Safety & Ethics**: Emphasize safe and responsible practices.
-   **Plan Adherence (FR-005)**: The content MUST conform to the structure, headings, and formatting dictated by the `chapter-format-guidelines.md`. This includes use of Markdown formatting, fenced code blocks, and appropriate heading levels.
-   **Valid Markdown Output (FR-006)**: The final output MUST be valid Markdown, compatible with Docusaurus rendering.
-   **Structure Preservation (FR-007)**: The existing hierarchical structure of headings (H1, H2, H3, H4) MUST be preserved; no new top-level headings should be introduced, nor existing ones removed or reordered.
-   **Clean Output (FR-008)**: All template comments (e.g., `<!-- Example: ... -->`) and generic instructions present in the input file MUST be removed.

## Content Generation Process (Conceptual)

1.  **Read Chapter File**: Ingest the target `chapterN.md` file.
2.  **Parse Structure**: Identify sections and placeholder text based on headings and bracketed content.
3.  **Contextualize**: Use chapter title, part context, and global guidelines (`constitution.md`, `chapter-format-guidelines.md`) to inform content generation for each placeholder.
4.  **Generate Content**: For each placeholder, generate detailed text, examples, exercises, and diagram descriptions, ensuring compliance with all output requirements.
5.  **Validate Output**:
    -   Check for remaining placeholders.
    -   Verify word count.
    -   Validate Markdown syntax.
    -   Ensure structural integrity.
6.  **Write Back**: Overwrite the original `chapterN.md` with the newly generated content.

## Error Handling

-   If a placeholder cannot be filled meaningfully, a warning should be logged, and a placeholder `[CONTENT PENDING: <reason>]` should be left in place, triggering a manual review.
-   If word count constraints are severely violated, a warning should be logged, requiring manual adjustment.
