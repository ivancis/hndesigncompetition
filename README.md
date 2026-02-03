# Health Note - Design Competition

A Next.js 14+ implementation utilizing TailwindCSS, React, and TypeScript, optimized for high-fidelity design systems.

---

## UI Pattern Playbook

Detailed design system documentation, component patterns, and coding guidelines are maintained in the **[UI Pattern Playbook](./ui-pattern-playbook/ui-pattern-playbook.md)**.

### Scope of Coverage

- **Foundations:** Strong, robust design principles for consistent, coherent, reusable UIs.
- **Accessibility:** Strict adherence to **WCAG 2.1/2.2 AA** standards.
- **Not just UI:** Usability heuristics and microcopy in the English language.

### Out of Scope (Context-Dependent)

- **Singularity in the interface:** The guidelines and boundaries are robust in principles, which may mean similar interpretations of the same thing. Rules can apply to different scenarios.
- **Tailwind maintenance:** Exhaustive Tailwind class combinations were considered to a point, since they are very painful to maintain tidy—and in most cases I found they would be better handled by global overarching utilities.
- **Navigation + information architecture:** I didn't establish strict boundaries on routing or the limited extent a user flow (siblings, subpages, etc.) can have. I covered the basics essential to usability heuristics.
- **Polished user feedback:** "Nice, smooth, and snappy" interactions. To me, these would make a big difference in the look & feel if user preference is granted, but they require significant iteration to get right—and I just didn't prioritize it.
- **Color contexts:** Combinations of color schemes for different contexts, including color modes (dark mode, high contrast). I focused on strong foundations that scale, high accessibility standards, and my own personal taste.
- For the following "patterns," I require specific product/user context, and they weren't particularly targeted in the examples or documentation boundaries:
  - **Complex Flows:** Simple→Advanced transitions, conversation flows, and human handoff logic.
  - **System Tools:** Inline glossaries, risk-based tool pickers, and test simulators.
  - **Safety & Governance:** PII masking and publish checklists.

---

## Scaling Strategy

To maintain quality consistency, I imagine following a roadmap like:

1. **Reference audits:** Construct a library of "Golden Examples" for composite components (e.g., `Stepper` > `Step`).
2. **Enforcement:** Define strict component encapsulation and, based on that, refine the role of `ui-pattern-playbook.md`. Learn from usage; expand on the documentation to prevent anti-patterns.
3. **Automated Feedback:** Utilize a structured annotation format for AI coding agents to ensure design-to-code fidelity.
4. **Versioning & roll-out:** Discuss processes for breaking changes if a given interaction presents itself outside boundaries or a given release brings breaking changes.

### AI Agent Annotation Schema

When providing feedback to agents, use the following structured format to ensure precision in UI corrections:

```tsx
## Feedback Schema:

**Environment Metadata:**
- Viewport: {width}×{height} | DPR: {ratio}
- URL/Timestamp: {url} | {iso_timestamp}

---

### Component: {Element Name}
**Selector/Path:** {Full DOM Path}
```
