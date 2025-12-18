# Data Model: Fill Textbook Chapters Content

**Date**: 2025-12-10
**Feature**: [specs/001-fill-textbook-content/spec.md](specs/001-fill-textbook-content/spec.md)

## Entities

### Chapter File
- **Description**: An existing Markdown file (`.md` or `.mdx`) within the `docs/` directory of the textbook project. These files contain a predefined structure with placeholder text.
- **Attributes**:
    - `file_path`: Absolute path to the Markdown file (e.g., `docs/part-i-foundations/chapter1.md`).
    - `content_raw`: The entire textual content of the file, including frontmatter and placeholders.
    - `placeholders_found`: A list of detected bracketed placeholder strings.
- **Relationships**: Contains multiple Content Sections, each potentially containing Placeholder Text.

### Placeholder Text
- **Description**: Specific textual markers within a Chapter File, typically enclosed in square brackets `[ ]`, indicating areas where detailed content needs to be generated.
- **Attributes**:
    - `text`: The literal placeholder string (e.g., `[Concise overview...]`).
    - `context_section`: The Content Section within which this placeholder resides.
- **Relationships**: Belongs to a Chapter File and a Content Section.

### Content Section
- **Description**: A predefined structural element within a Chapter File (e.g., "Executive Summary", "Deep Technical Explanation", "Exercises"). These sections guide the type and format of content to be generated.
- **Attributes**:
    - `name`: The heading or identifier of the section (e.g., "Executive Summary").
    - `expected_content_type`: (e.g., "concise overview", "detailed explanation", "problem statement").
- **Relationships**: Belongs to a Chapter File. May contain Placeholder Text.
