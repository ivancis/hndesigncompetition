# AGENT.MD

## Grandma-Usable Design Principles

This document defines the core directives for the interface. All UI/UX generation must adhere to the rules below to ensure "Grandma-Usable" defaults: interfaces so intuitive they require zero training, supported by enterprise-grade robustness.

---

## 1. System Architecture

### Radical Clarity

- **Language:** Human-centric phrasing. Jargon is defined, never assumed.
- **Labels:** Icons are never standalone; they are paired with text.

### Guidance-First Interaction

- **Context:** Inputs require explanation or examples before user entry.
- **Complexity:** Advanced settings are hidden by default via toggles but remain fully functional.
- **Flow:** Multi-step processes are linear with visible progress tracking.

### Forgiveness and Safety

- **Resilience:** Destructive actions are reversible.
- **Persistence:** Auto-save drafts by default; require explicit action to "Publish" or go live.

### Enterprise Integrity

- **Rhythm:** Layouts follow a mathematical 8px grid.
- **Traceability:** Every change is logged with a visible audit trail.
- **Accessibility:** High contrast and keyboard-only navigation are non-negotiable.

---

## 2. Mandatory Rule Set

### Content & Language

- **Rule: Define jargon inline.** Use parentheses or subtext (e.g., "Latency (delay)").
- **Rule: No naked icons.** Every icon must have a visible text label.
- **Rule: Single-meaning labels.** Use the fewest words possible to convey one specific verb-based action.

### Interaction & Guidance

- **Rule: Explain-before-ask.** Provide context or an example (e.g., "e.g., $5,000") next to every input field.
- **Rule: Simple-by-default.** Hide complex configurations behind an "Advanced" toggle.
- **Rule: Visible progress.** Multi-step flows must include a progress bar and a dominant "Next" button.

### Safety & Error Handling

- **Rule: Non-destructive interactions.** Provide "Undo" or "Restore" for all actions, specifically deletions.
- **Rule: Publish gates.** Use a draft-first workflow. No changes are permanent until an explicit "Publish" action.
- **Rule: Proactive error prevention.** Disable "Submit" buttons until forms are valid. Errors must be conversational and offer a specific fix.

### Visual & Technical

- **Rule: Follow the 8px Grid.** All spacing and margins must be increments of 8px.
- **Rule: Mandatory state feedback.** Define distinct visual changes for hover, focus, and press states.
- **Rule: Skeleton-first loading.** Use skeleton screens instead of spinners for data fetching.
- **Rule: Accessibility standard.** Maintain a minimum 4.5:1 contrast ratio and ensure 100% keyboard navigability.
- **Rule: Audit everything.** Display a visible history of user actions and versioning/rollback options.

---

## 3. Demo Wow Moments

1. **The Time-Machine Slider:** A slider that allows users to "scrub" through history, visually reverting the UI to show exactly how data appeared in the past.
2. **Contextual Smart-Fill:** A utility that offers to auto-fill complex forms based on historical patterns or uploaded documents.
3. **Safe-Mode Sandbox:** A global toggle that activates a distinct visual "Sandbox" mode, allowing users to experiment without impacting production data.

---

## 4. Agent Implementation Checklist

- [ ] Every icon has a label.
- [ ] Jargon is defined inline.
- [ ] Input fields have "e.g." examples.
- [ ] Advanced settings are hidden.
- [ ] "Submit" is disabled until valid.
- [ ] Layout follows 8px increments.
- [ ] "Undo" is available for primary actions.
