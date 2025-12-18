# Quickstart Guide for Textbook Authors

**Date**: 2025-12-10
**Feature**: [specs/001-textbook-chapters/spec.md](specs/001-textbook-chapters/spec.md)
**Purpose**: This guide provides a rapid onboarding for authors contributing to the Physical AI & Humanoid Robotics Textbook, covering setup, content creation, and previewing changes.

## Prerequisites

Before you begin, ensure you have the following installed:

-   **Node.js**: Version 20.0 or above. Download from [nodejs.org](https://nodejs.org/).
-   **Git**: For version control. Download from [git-scm.com](https://git-scm.com/downloads).
-   **Yarn**: Package manager for Docusaurus. Install via `npm install -g yarn`.

## Project Setup

1.  **Clone the Repository**:
    ```bash
    git clone [REPOSITORY_URL]
    cd physical-ai-humanoid-robotics
    ```
    *(Replace `[REPOSITORY_URL]` with the actual Git repository URL)*

2.  **Install Dependencies**:
    ```bash
    yarn
    ```

## Creating a New Chapter

1.  **Navigate to the `docs/` directory**:
    ```bash
    cd docs
    ```

2.  **Choose the appropriate Part/Appendix directory**:
    -   `part-i-foundations/`
    -   `part-ii-ros2/`
    -   `part-iii-simulation/`
    -   `part-iv-isaac/`
    -   `part-v-vla/`
    -   `appendices/`

3.  **Create your chapter Markdown file**:
    -   Follow naming conventions: `chapter[NUMBER].md` (e.g., `chapter1.md`), `appendix-[LETTER].md` (e.g., `appendix-a.md`).
    -   Refer to the [Chapter Format Guidelines](contracts/chapter-format-guidelines.md) for detailed structural and content requirements.

4.  **Add Chapter Metadata**: At the top of your Markdown file, include Docusaurus metadata:
    ```markdown
    ---
    sidebar_position: [Sequential Number]
    title: "Your Chapter Title"
    ---
    ```

5.  **Add Assets**: If your chapter includes images or other media, place them in the `assets/` subdirectory within your chapter's Part (e.g., `docs/part-i-foundations/assets/`).

## Previewing Your Changes

1.  **Start the Local Development Server**:
    From the project root directory (`physical-ai-humanoid-robotics/`), run:
    ```bash
    yarn start
    ```
    This will open the website in your browser, and changes will refresh automatically.

2.  **Navigate to your Chapter**: Find your new chapter in the sidebar navigation.

## Contribution Workflow

1.  **Create a New Branch**:
    ```bash
    git checkout -b feature/your-chapter-name
    ```

2.  **Make Your Changes**: Write your chapter content, add images, etc.

3.  **Commit Your Changes**:
    ```bash
    git add .
    git commit -m "feat: Add Chapter X - [Chapter Title]"
    ```

4.  **Push to Remote**:
    ```bash
    git push origin feature/your-chapter-name
    ```

5.  **Create a Pull Request**: Open a pull request against the `main` branch (or designated development branch) in your Git repository.

## Key Guidelines

-   **Adhere to the [Project Constitution](.specify/memory/constitution.md)** for core principles like Accuracy, Clarity, Consistency, and Safety & Ethics.
-   **Follow [Chapter Format Guidelines](contracts/chapter-format-guidelines.md)** strictly.
-   Ensure all code examples are **testable and runnable**.
-   **Review your content** for technical accuracy and pedagogical soundness.
-   **Use descriptive `alt_text` for all images** for accessibility (WCAG 2.1 AA).

## Accessibility Review

To ensure content meets WCAG 2.1 AA standards (FR-021), authors should perform the following checks before submission:

-   **Semantic HTML**: Use proper Markdown headings (H1, H2, etc.) to convey document structure. Avoid skipping heading levels.
-   **Image Alt Text**: All images MUST include descriptive `alt_text`. Avoid generic descriptions like "image" or "graphic".
-   **Color Contrast**: Ensure sufficient color contrast between text and background, especially for any custom styles or diagrams. Tools like WebAIM Contrast Checker can assist.
-   **Link Text**: Use descriptive link text instead of generic phrases like "click here".
-   **Table Structure**: Ensure tables are used for tabular data and have proper headers.
-   **Keyboard Navigation**: If any interactive elements are introduced (e.g., custom Docusaurus components), ensure they are fully navigable and operable via keyboard.
