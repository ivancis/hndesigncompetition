# UI Pattern Playbook

**Version 1.1.0**  
February 2026

- [Deployed](https://teal-tanuki-9b1890.netlify.app/)
- [GitHub](https://github.com/ivancis/hndesigncompetition)

> **Note:**  
> This document is for humans and AI agents (Cursor, Claude Code, Codex) to follow when maintaining,  
> generating, or refactoring React codebases with TailwindCSS.  
> It is optimized for automation and can be referenced into `AGENTS.md`.

---

## Consumption order (AI agents)

| Document                                     | Purpose                                                              |
| -------------------------------------------- | -------------------------------------------------------------------- |
| [foundations.md](./foundaticlearons.md)      | Core tokens (spacing, typography, layouts, visual styles)            |
| [components.md](./components.md)             | Standard UI patterns (forms, buttons, disabled/empty/loading states) |
| [patterns.md](./patterns.md)                 | Complex workflows (common actions, modals, voice agent, AI rules)    |
| [guidelines.md](./guidelines.md)             | Content, tone, accessibility, navigation                             |
| [quick-references.md](./quick-references.md) | Token lookups, spacing cheat sheets                                  |

## Table of Contents

**This document**

1. [Executive Directive](#1-executive-directive)

**Foundations** ([foundations.md](./foundations.md))

2. [Typography](./foundations.md#2-typography)
3. [Spacing System](./foundations.md#3-spacing-system)
4. [Layouts](./foundations.md#4-layouts)
5. [Visual Styles](./foundations.md#5-visual-styles)

**Guidelines** ([guidelines.md](./guidelines.md))

6. [Status and Health](./guidelines.md#6-status-and-health)
7. [Accessibility](./guidelines.md#7-accessibility)
8. [Navigation](./guidelines.md#8-navigation)

**Components** ([components.md](./components.md))

9. [Forms](./components.md#9-forms)
10. [Disabled States](./components.md#11-disabled-states)
11. [Empty States](./components.md#12-empty-states)
12. [Loading States](./components.md#13-loading-states)

**Patterns** ([patterns.md](./patterns.md))

10. [Common Actions](./patterns.md#10-common-actions)
11. [Modal Patterns](./patterns.md#14-modal-patterns)
12. [Voice Agent Builder Patterns](./patterns.md#15-voice-agent-builder-patterns)
13. [AI Instructions + Global Rules](./patterns.md#16-ai-instructions--global-rules)

**Quick References** ([quick-references.md](./quick-references.md))

17. [Quick Reference](./quick-references.md#17-quick-reference)

---

## 1. Executive Directive

### 1.1 Design Philosophy

- **Aesthetic:** Classic, minimal, utilitarian
- **Tone:** Concise, coherent, consistent
- **Accessibility:** WCAG 2.1 AA minimum

### 1.2 Technology Stack

- **Framework:** React 18+
- **Styling:** TailwindCSS utility classes ONLY

### 1.3 Output Standards

🔴 **CRITICAL:** All UI code must pass accessibility validation  
🔴 **CRITICAL:** No inline styles (`style={{}}`) - use Tailwind only

### 1.4 Tailwind Usage Rules

🔴 **BOUNDARY:** Use Tailwind utility classes only. Avoid custom CSS, `@apply`, and arbitrary values like `p-[13px]`.  
🔴 **BOUNDARY:** Use the documented scales and tokens in this playbook.  
🟡 **DIRECTIVE:** Prefer `className` composition over custom utilities or bespoke CSS.

### 1.5 Agent Checklist (Before Building UI)

- Confirm the component's semantic role (surface, container, field).
- Pick typography tokens from the scale only.
- Apply spacing rules (vertical, horizontal, inset).
- Ensure interaction states are defined and visible.
- Validate accessibility (focus, disabled, nested interactivity).
