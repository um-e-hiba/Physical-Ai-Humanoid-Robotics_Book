# Chapter Format Guidelines: Physical AI & Humanoid Robotics Textbook

**Date**: 2025-12-10
**Feature**: [specs/001-textbook-chapters/spec.md](specs/001-textbook-chapters/spec.md)
**Purpose**: To ensure consistency, pedagogical rigor, and Docusaurus compatibility for all textbook chapters. These guidelines serve as the "contract" for chapter content.

## General Markdown Structure (FR-006, FR-007)

Each chapter Markdown file (`chapterN.md`, `appendix-X.md`) MUST adhere to the following top-level structure.

```markdown
---
sidebar_position: [NUMBER] # Sequential position within its part/appendix
title: "[CHAPTER TITLE]"
---

# [CHAPTER TITLE]

## Executive Summary
[Concise overview of the chapter's content and key takeaways.]

## Learning Objectives
- Objective 1
- Objective 2
- ...

## Conceptual Overview
[High-level explanation of the main concepts, setting the stage.]

## Deep Technical Explanation
[Detailed exposition of the technical concepts, algorithms, theories.]

### Sub-Section Title (H3)
[Content for sub-section.]

#### Sub-Sub-Section Title (H4)
[Content for sub-sub-section.]

## Practical Workflow
[Step-by-step guidance for practical application, implementation, or hands-on tasks.]

### Code Example: [Descriptive Title]
```python
# Python code
print("Hello, Robotics!")
```
[Explanation of the code example.]

### Diagram: [Descriptive Title]
```text
+-------------------+
|  Robot Component  |
+-------------------+
       |
       v
+-------------------+
|     Sensor        |
+-------------------+
```
[Explanation of the diagram.]

## Case Studies
[Real-world applications or illustrative examples.]

## Exercises
### Exercise 1: [Descriptive Title]
[Problem statement or task description.]

### Exercise 2: [Descriptive Title]
[Problem statement or task description.]

## Summary
[Recap of the chapter's main points.]

## Glossary
- **Term 1**: Definition 1
- **Term 2**: Definition 2

## References
- [Reference 1](URL)
- [Reference 2](URL)
```

## Content Guidelines

### Accuracy (FR-001)
- All technical facts, code, and diagrams MUST be verified against real-world systems, official documentation, and academic literature.

### Clarity (FR-002)
- Explanations MUST be step-by-step, precise, and use accessible language for advanced learners.
- Avoid jargon where simpler terms suffice; define all necessary technical terms in the Glossary.

### Pedagogical Content (FR-003, FR-024)
- Each chapter MUST balance theory, practical examples, and exercises.
- Focus on breadth of coverage; provide foundational understanding without exhaustive detail.

### Consistency (FR-004)
- Adhere to consistent terminology, writing style, and formatting throughout all chapters.
- Follow the Docusaurus Markdown conventions.

### Safety & Ethics (FR-005)
- All hands-on instructions and discussions MUST emphasize safe and responsible robotics practices. Highlight potential hazards where applicable.

### Commands (FR-008)
- All ROS2, Python, Bash, or Shell commands MUST be syntactically correct, functional, and tested.

### Diagrams (FR-009)
- ASCII or textual diagrams are preferred for conceptual clarity. Image-based diagrams MUST be high-resolution and accompanied by descriptive `alt_text` for accessibility.

### References (FR-010)
- Only authoritative sources (official documentation, peer-reviewed research papers, product specifications) are permitted.

### Accessibility (FR-021)
- Content MUST adhere to WCAG 2.1 AA standards. Ensure all images have `alt_text`, tables are structured correctly, and color contrasts are sufficient.

### Localization (FR-022)
- Content should be written with future localization in mind; avoid culture-specific idioms where possible.

### Publishing Compliance (FR-023)
- All content MUST comply with general academic publishing standards and adhere strictly to copyright laws. Ensure proper attribution for all third-party materials.

## File Naming Conventions

- Chapter files: `chapter[NUMBER].md` (e.g., `chapter1.md`, `chapter15.md`)
- Appendix files: `appendix-[LETTER].md` (e.g., `appendix-a.md`)
- Assets (images): Place in `assets/` subdirectory within the chapter's part.
- Category files: `_category_.json` for defining sidebar structure.