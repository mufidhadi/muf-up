---
name: learning-content-creator
description: Create, structure, and format educational and technical learning content using the highly intuitive "Golden Formula". Use this skill whenever the user asks to write a tutorial, create course material, structure an educational module, or explain a technical concept in a way that is easy to understand and practice.
---

# Learning Content Creator

This skill helps you generate highly effective, intuitive, and consistent educational content for technical topics (like Python programming), following the "Golden Formula" structure.

The goal is to ensure the content is not just read, but understood and immediately actionable by the learner.

## The "Golden Formula" Structure
a good learning content should be having some component that can guides the learner through the material in a logical and engaging manner. The "Golden Formula" consists of the following sections:
- Introduction & Problem Statement
- Analogy & Big Picture
- Learning Objectives
- Prerequisites
- Core Material & Concept Explanation
- Guided Implementation
- Common Pitfalls & Edge Cases
- Interactive Challenge
- Summary & Next Steps

---

## Technical Formatting Rules

*   **Read-Write-Execute Approach:** For every paragraph explaining a concept, follow it immediately with 3-5 lines of code that can be tried right away. Keep engagement high.
*   **Markdown Formatting:** Use proper Markdown (H2, H3, bold, italic) to make the text scannable.
*   **Language:** Default to Indonesian unless the user specifies otherwise, as the provided examples are in Indonesian. Ensure a friendly, encouraging, and professional tone.
*   **humanize the text content:** Avoid robotic or overly technical language. Use analogies, real-world examples, and a conversational tone to make the material approachable.
*   **Visual Aids:** Use flowcharts, tables, or ASCII diagrams to explain complex logic when necessary. This helps learners visualize concepts and understand how different parts fit together.
*   **embrace narrative storytelling:** When explaining learning objectives or the problem statement, use a narrative style to make it more engaging. For example, instead of just listing learning objectives, tell a story about how mastering this material will empower the learner to solve real-world problems or achieve specific goals.
*   **avoid lazy explanations and list formatting:** Instead of giving a high-level overview of a concept, break it down into digestible pieces with detailed explanations and code snippets. Avoid simply listing features or concepts without providing context and examples.

## Output Format

```markdown
# Modul: [Module Name]

[Brief introduction to the module]
[Problem Statement, tell about Real-world problem that this module solves]
[gave an Analogy to explain the abstract concept]

[tell about Learning Objectives]
[give realistic and measurable learning objectives using operational verbs]
[let the user know what they will be able to do after completing the module in narrative form]

[tell the user what they need to know or have installed before starting, in a short list format]
* [Prerequisite 1]
* [Prerequisite 2]

[Core Material, break it down into small units, never output a wall of text.]
[For each concept, explain the "What", "Why", and provide a Visual Aid if necessary.]
[tell the user why they would want to use this feature, what problem it solves, and how it fits into the bigger picture of programming.]
[Use flowcharts, tables, or ASCII diagrams if explaining complex logic.]
[For example, if explaining a Python function, show the function definition, explain each parameter, and provide an example of how to call it.]
[never gave lazy explanations like "This function does X, Y, and Z." Instead, break it down into digestible pieces with code snippets that can be tried immediately.]
[never only explaining concept in only 1-2 paragraphs. gave at least 3-5 paragraphs of explanation for each concept, with code snippets in between to keep the user engaged and practicing.]

> **Pro-Tip:** [Common mistake and how to avoid]
[tell the user about Common Pitfalls that they should be aware of when practicing this material. This is what separates standard documentation from great learning material. For example, if teaching about Python's mutable default arguments, explain the common mistake and how to avoid it.]
[give the user a Pro-Tip that they can use to avoid common mistakes and pitfalls when practicing this material.]
[never just give the code solution for the Pro-Tip. Instead, explain the concept and let the user figure out how to apply it in their own.]

[tell the user about Interactive Challenge, provided on this module, that they can try on their own without giving the direct code solution. This is where they can think creatively using what they just learned.]

### Summary & Next Steps
[sumarize the main points of the material in 3-5 bullet points]
**Next:** [Teaser for next lesson]
```

## IMPORTANT NOTE
ALWAYS USE HUMAN LANGUAGE AND A FRIENDLY TONE. The goal is to make the material approachable and engaging, not just informative. Avoid robotic or overly technical language that might intimidate beginners. Always encourage the user to try the code snippets and engage with the material actively.

## do and don't
- DO break down complex concepts into smaller, digestible pieces with detailed explanations and code snippets.
- DO use analogies, real-world examples, and a conversational tone to make the material approachable.
- DO use proper Markdown formatting to make the text scannable and engaging.
- DO provide interactive challenges that encourage learners to apply what they've learned without giving direct code solutions.
- DON'T give lazy explanations or simply list features without providing context and examples.
- DON'T use robotic or overly technical language that might intimidate beginners. Always aim for a friendly and encouraging tone.
- DON'T just provide code snippets without explanations. Always explain the "What", "Why", and "How" of each concept to ensure learners understand the material deeply.
- DON'T forget to include Pro-Tips that highlight common pitfalls and how to avoid them, as this is what separates standard documentation from great learning material.
- DON'T forget to summarize the main points at the end of each module and provide a teaser for the next lesson to keep learners engaged and looking forward to what's next.
- DON'T write in a way that assumes the learner has prior knowledge of the topic. Always start with the basics and build up from there, ensuring that even complete beginners can follow along and understand the material.
- DON'T forget to encourage learners to try the code snippets and engage with the material actively, as this is crucial for effective learning.
- DO always use human language and a friendly tone to make the material approachable and engaging, rather than just informative.