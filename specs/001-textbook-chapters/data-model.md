# Data Model: Physical AI & Humanoid Robotics Textbook Chapters

**Date**: 2025-12-10
**Feature**: [specs/001-textbook-chapters/spec.md](specs/001-textbook-chapters/spec.md)

## Entities

### Chapter
- **Description**: A primary unit of the textbook, comprising structured content on a specific topic.
- **Attributes**:
    - `id`: Unique identifier (e.g., "chapter1", "appendix-a")
    - `title`: Chapter title (e.g., "Introduction to Physical AI & Embodied Intelligence")
    - `file_path`: Path to the Markdown file (e.g., `docs/part-i-foundations/chapter1.md`)
    - `sections`: List of Section entities
    - `exercises`: List of Exercise entities
    - `glossary_terms`: List of Glossary entities
    - `references`: List of Reference entities
    - `word_count`: Estimated or actual word count (for FR-015, FR-020 tracking)
    - `figure_count`: Number of diagrams/images
    - `code_example_count`: Number of code examples
- **Relationships**: Contains Sections, Exercises, Glossary, References.

### Section
- **Description**: A subdivision within a chapter, focusing on a more granular aspect of the chapter's topic.
- **Attributes**:
    - `id`: Unique identifier within a chapter
    - `title`: Section title
    - `level`: Heading level (H2, H3, H4)
    - `content`: Markdown content
- **Relationships**: Belongs to a Chapter. Can contain Diagrams, Code Examples.

### Diagram
- **Description**: A visual representation (ASCII or textual) used to explain concepts.
- **Attributes**:
    - `id`: Unique identifier
    - `type`: ASCII, conceptual, image (SVG, PNG, JPG)
    - `alt_text`: Alternative text for accessibility (FR-021)
    - `caption`: Description of the diagram
    - `source`: File path for image-based diagrams
- **Relationships**: Can be embedded within a Section or Chapter.

### Code Example
- **Description**: Snippets of functional code (ROS2, Python, Bash, Shell) demonstrating practical application.
- **Attributes**:
    - `id`: Unique identifier
    - `language`: (ROS2, Python, Bash, Shell)
    - `content`: Code block text
    - `description`: Explanation of the code example
    - `file_path`: (Optional) Path to external script if too long for inline
- **Relationships**: Can be embedded within a Section or Chapter.

### Exercise
- **Description**: A task or problem posed to the reader to reinforce learning.
- **Attributes**:
    - `id`: Unique identifier
    - `type`: (Conceptual, coding, simulation-based, hardware-based)
    - `prompt`: Description of the task
    - `solution`: (Optional) Path to solution (e.g., `exercises/chapterX_exerciseY_solution.md`)
    - `difficulty`: (Easy, Medium, Hard)
- **Relationships**: Belongs to a Chapter.

### Glossary Term
- **Description**: A key term and its definition.
- **Attributes**:
    - `term`: The term being defined
    - `definition`: Explanation of the term
- **Relationships**: Belongs to a Chapter.

### Reference
- **Description**: A citation to an external authoritative source.
- **Attributes**:
    - `citation`: Full citation text
    - `url`: (Optional) URL to online resource
    - `type`: (Book, paper, documentation, product spec)
- **Relationships**: Belongs to a Chapter.
