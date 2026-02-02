# Health Note - Design Competition

A Next.js 14+ implementation utilizing TailwindCSS, React, and TypeScript, optimized for high-fidelity design systems.

---

## 🏗 UI Pattern Playbook

Detailed design system documentation, component patterns, and coding guidelines are maintained in the **[UI Pattern Playbook](./ui-pattern-playbook/ui-pattern-playbook.md)**.

### Scope of Coverage

- **Foundations:** Core principles for a consistent, coherent, and accessible UI.
- **Accessibility:** Strict adherence to **WCAG 2.1/2.2 AA** standards.
- **Directives:** Established boundaries for microcopy, IA, and usability.

### Out of Scope (Context-Dependent)

The following "Organisms" require specific product/user context and are currently excluded:

- **Complex Flows:** Simple→Advanced transitions, conversation flows, and human handoff logic.
- **System Tools:** Inline glossaries, risk-based tool pickers, and test simulators.
- **Safety & Governance:** PII masking, versioning/restore, and publish checklists.

---

## 🚀 Scaling Strategy

To maintain quality consistency, the following roadmap is established:

1.  **Reference Audits:** Construct a library of "Golden Examples" for composite components (e.g., `Stepper` > `Step`).
2.  **Enforcement:** Refine `patterns.md` to define strict component encapsulation, preventing anti-patterns.
3.  **Automated Feedback:** Utilize a structured annotation format for AI coding agents to ensure design-to-code fidelity.

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
**Attributes:** - Classes: `{css_classes}`
- Computed Styles: `{color, font_size, spacing, etc.}`
**Spatial Context:**
- Position: x:{x}, y:{y} ({w}×{h}px)
- Accessibility: {focus_state, aria_labels}
**Instruction:**
- Feedback: {Clear, actionable correction}

```

## References

- https://github.com/metabrainz/design-system/
- https://github.com/unicef/design-system/tree/master
- https://tailwindcss.com/plus/ui-blocks/application-ui
- https://carbondesignsystem.com/
- https://atlassian.design/
- https://developer.dynatrace.com/design/about-strato-design-system/
- https://axesslab.com/disabled-buttons-suck/
- https://www.youtube.com/watch?v=cmUQiPfl1ak
- https://uxdesign.cc/dear-llm-heres-how-my-design-system-works-b59fb9a342b7
- https://uxdesign.cc/designers-as-agent-orchestrators-what-i-learnt-shipping-with-ai-in-2025-3b1bf30048a3

---

### Installation

```bash
npm install
```

### Development

```bash
npm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Tech Stack

- **Framework:** Next.js with React 18+
- **Styling:** TailwindCSS
- **Icons:** Feather icons
- **Language:** TypeScript

## License

MIT
