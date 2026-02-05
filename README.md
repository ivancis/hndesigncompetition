# Health Note - Design Competition

A Next.js 14+ implementation utilizing TailwindCSS, React, and TypeScript, optimized for high-fidelity design systems.

---

## UI Pattern Playbook

Detailed design system documentation, component patterns, and coding guidelines are maintained in the **[UI Pattern Playbook](./ui-pattern-playbook/ui-pattern-playbook.md)**.

### Scope of Coverage

- Robust UI design principles for coherent and reusable build.
- Strong foundation of UX parameters to build consistent usability patterns.
- Strict adherence to **WCAG 2.1/2.2 AA** standards.
- Usability heuristics and microcopy in the English language.

### Out of Scope (Context-Dependent)

- **Singularity in the interface:** The guidelines and boundaries are robust in principles, which may mean similar interpretations of the same thing. Rules can apply to different scenarios. This gets mitigated with iteration and refinement.
- **Tailwind maintenance:** Exhaustive Tailwind class combinations were considered to a point, since they are very painful to maintain tidy—and in most cases I found they would be better handled by global overarching utilities.
- **Navigation + information architecture:** I didn't establish strict boundaries on routing or the limited extent a user flow (siblings, subpages, etc.) can have. I covered the basics essential to usability heuristics.
- **Polished user feedback:** "Nice, smooth, and snappy" interactions. To me, these would make a big difference in the look & feel if user preference is granted, but they require significant iteration to get right—and I just didn't prioritize it.
- **Color contexts:** Combinations of color schemes for different contexts, including color modes (dark mode, high contrast). I focused on strong foundations that scale, high accessibility standards, and my own personal taste.
- For some of the "patterns" stated in the competition details, I'd require specific product/user context so for some of these I didn't particularly targeted in the examples or documentation boundaries:
  - Simple→Advanced transitions, conversation flows, and human handoff logic.
  - Inline glossaries, risk-based tool pickers, and test simulators.
  - PII masking and publish checklists.

---

## Scaling Strategy

To keep improving this while maintain quality and consistency, I imagine applying a roadmap like:

1. **Reference audits:** Construct a library of "Golden Examples" for composite components (e.g., `Stepper` > `Step`).
2. **Enforcement:** Define strict component encapsulation and, based on that, refine the role of `ui-pattern-playbook.md`. Learn from usage; expand on the documentation to prevent anti-patterns.
3. **Automated Feedback:** Utilize a structured annotation format for AI coding agents to ensure design-to-code fidelity.
4. **Versioning & roll-out:** Discuss processes for breaking changes if a given interaction presents itself outside boundaries or a given release brings breaking changes.

---

### AI Agent Annotation Schema for iterations

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

---

## Referenced sources

- [https://github.com/metabrainz/design-system/](https://github.com/metabrainz/design-system/)
- [https://github.com/unicef/design-system/tree/master](https://github.com/unicef/design-system/tree/master)
- [https://tailwindcss.com/plus/ui-blocks/application-ui](https://tailwindcss.com/plus/ui-blocks/application-ui)
- [https://carbondesignsystem.com/](https://carbondesignsystem.com/)
- [https://atlassian.design/](https://atlassian.design/)
- [https://developer.dynatrace.com/design/about-strato-design-system/](https://developer.dynatrace.com/design/about-strato-design-system/)
- [https://axesslab.com/disabled-buttons-suck/](https://axesslab.com/disabled-buttons-suck/)
- [https://www.youtube.com/watch?v=cmUQiPfl1ak](https://www.youtube.com/watch?v=cmUQiPfl1ak)
- [https://uxdesign.cc/dear-llm-heres-how-my-design-system-works-b59fb9a342b7](https://uxdesign.cc/dear-llm-heres-how-my-design-system-works-b59fb9a342b7)
- [https://uxdesign.cc/designers-as-agent-orchestrators-what-i-learnt-shipping-with-ai-in-2025-3b1bf30048a3](https://uxdesign.cc/designers-as-agent-orchestrators-what-i-learnt-shipping-with-ai-in-2025-3b1bf30048a3)

# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.6.0] - 2026-02-05

### Added

- New UI patterns for Error Handling and Permission Restrictions.
- Patterns for Multi-step processes.
- Common organisms: Linear horizontal and vertical progressions (with and without dividers).
- Detailed documentation for Spacing rules and layout rhythm.

## [1.5.0] - 2026-02-03

### Added

- Voice and AI interaction patterns.
- New structural distinction for Base, Surface, Container, and Field element types.
- Specialized patterns for Dialogs and Modals.
- Morphology documentation and improved markup anatomy examples.

### Changed

- Refined UI for improved accessibility and "wow factor" visual polish.

## [1.0.0] - 2026-01-27

### Added

- Initial project build using Next.js, TailwindCSS, React, and TypeScript.
- Core `ui-patterns-playbook.md` structure for foundations and basic components.
- Automated linting for staged changes via pre-commit hooks.
- Single-file compilation for the playbook assets.
