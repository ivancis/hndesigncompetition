# `ui-pattern-playbook.md`

**Version 1.0.0**  
January 2026

> **Note:**  
> This document is for AI code editors (Cursor, Claude Code, Copilot) to follow when maintaining,  
> generating, or refactoring React codebases with TailwindCSS.  
> Guidance is optimized for automation and consistency.

---

## Table of Contents

1. [Executive Directive](#1-executive-directive)
2. [Typography](#2-typography)
3. [Spacing System](#3-spacing-system)
4. [Layouts](#4-layouts)
5. [Visual Styles](#5-visual-styles)
6. [Accessibility](#6-accessibility)
7. [Quick Reference](#quick-reference)

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

---

## 2. Typography

### 2.1 Overview

Typography establishes content hierarchy and shapes readability. It determines how an interface looks, feels, and communicates.

**🔴 BOUNDARY:** Use only Tailwind text utilities (`text-sm`, `text-base`, etc.). Never use custom font-size values.

---

### 2.2 Type Scale

**🔴 COMMAND:** Use only these size tokens:

```tsx
<p className="text-sm">Small text</p>      {/* 14px */}
<p className="text-base">Base text</p>     {/* 16px */}
<p className="text-lg">Large text</p>      {/* 18px */}
<p className="text-xl">Extra large</p>     {/* 20px */}
<p className="text-2xl">2X large</p>       {/* 24px */}
<p className="text-3xl">3X large</p>       {/* 30px */}
<p className="text-4xl">4X large</p>       {/* 36px */}
<p className="text-5xl">5X large</p>       {/* 48px */}
```

---

### 2.3 Semantic Categories

**🔴 COMMAND:** Apply these categories consistently:

#### Display

- **Size:** `text-5xl`
- **Weight:** `font-extrabold`
- **Use for:** Primary hero headlines, page titles

```tsx
<h1 className="text-5xl font-extrabold">Main Headline</h1>
```

#### Headings

- **Size:** `text-xl`
- **Weight:** `font-bold`
- **Use for:** Section titles, card headings

```tsx
<h2 className="text-xl font-bold">Section Title</h2>
```

#### Subheadings

- **Size:** `text-lg`
- **Weight:** `font-semibold`
- **Use for:** Subsection titles, grouped content labels

```tsx
<h3 className="text-lg font-semibold">Subsection</h3>
```

#### Body Text

- **Size:** `text-base`
- **Weight:** `font-normal`
- **Use for:** Main body content, readable paragraphs

```tsx
<p className="text-base font-normal">Main content text...</p>
```

#### Subtext

- **Size:** `text-sm`
- **Weight:** `font-medium`
- **Use for:** Secondary information, captions, helper text

```tsx
<p className="text-sm font-medium">Helper text</p>
```

---

### 2.4 Content Rules

#### Character Usage

**🔴 BOUNDARY:** Never use three dots `...` - always use ellipsis `…`

**🔴 BOUNDARY:** Never use straight quotes `"` - always use curly quotes `“` `”`

**🔴 COMMAND:** Use non-breaking space `&nbsp;` between number and unit

```tsx
<p>Loading… please wait</p>
<p>She said, “Hello world.”</p>
<p>File size: 10&nbsp;MB</p>
```

---

### 2.5 Voice and Tone

#### Active Voice

**🔴 COMMAND:** Write in active voice by default.

Structure: `[Subject] + [Verb] + [Object]`

```tsx
<p>The system identified the problem.</p>
<p>The team investigated the incident.</p>
```

- **Be clear and concise.** Describe with precision and without hyperbole. Omit unnecessary details.
- **Be concrete and decisive.** Provide well-reasoned content with examples and data—clearly state possibilities and outcomes without hedging or waffling.
- **Be honest and transparent.** Don't sugarcoat bad news or take undue credit for good news. Be upfront and take responsibility.
- **Be pragmatic.** When there's an issue, explain why and share known solutions. Anticipate user questions and provide answers.
- **Use active voice.** Active statements convey authority, transparency, and are easier to read. Passive voice often comes off as sounding defensive.
- **Be direct.** Address users clearly and directly. State facts and explanations in straightforward declarative sentences. Use imperative verbs when providing instructions to users. Use only simple tenses (past, present, and future) and avoid progressive tenses.

#### When to Use Passive Voice

**🟡 DIRECTIVE:** Use passive voice when the actor is less important than the action, especially in warnings or system messages.

```tsx
{/* Acceptable: passive voice */}
<p>Deletion cannot be reversed.</p>
<p>An alert was triggered when the threshold was exceeded.</p>
```

---

### 2.6 Contractions

**🟡 COMMAND:** Use common contractions for conversational tone.

**Allowed contractions:**

- I'm, it's, what's, that's, we're, they're, let's
- aren't, can't, don't, isn't, didn't, wasn't, doesn't, hasn't, haven't

**🔴 BOUNDARY:** Never use these awkward contractions:

- it'll, it'd, they'd, there'd, mustn't, shan't
- would've, could've, should've, needn't, mayn't, who'd

```tsx
<p>We're processing your request. It will be ready soon.</p>
```

#### 2.7 Industry terminology

This page offers terminology guidelines for HealthNote users. While these terms aren't specific to the health industry, they appear frequently in our app. This is neither a dictionary or a glossary but rather a guide to correct usage.

- affect, effect / Most commonly, "affect" is a verb and means to influence or cause change. "Effect" is a noun and is the result of a change.
  ✅ This might affect performance.
  ✅ The change affects everyone.
  ✅ This might have an effect on performance.
  ✅ The effects of the changes were dramatic.

- after / Use "after" in place of "once."
  ✅ After you install the software, you can adjust the settings.
  ❌ Once you install the software, you can adjust the settings.

- click, select / Use "click" only when referring to mouse actions. Otherwise, use "select," which works for all device types.
  ✅ Select <button label>.
  ✅ Select <checkbox label>.
  ✅ Select <radio button label>.
  ✅ Right-click <button label>.
  ✅ Double-click <button label>.
  ✅ Hover over the image and click with your mouse.
  ✅ Select <button label> on your mobile device.
  ❌ Click <button label> on your mobile device.

- configure, configuration, adjust / Configuration is the process of arranging or connecting software components for a specific use in a specific environment, including the adjustment of available settings for installed software. Configuration is typically a part of the software installation process. When settings are changed following release of software into production, use adjust in place of configure.
  ✅ Your success depends on how you configure your environment settings and workflow rules before deployment.
  ❌ Your success depends on how you adjust your environment settings and workflow rules before deployment.
  ✅ You can adjust the settings in the future if you change your mind.
  ❌ You can configure the settings in the future if you change your mind.

---

## 3. Spacing System

### 3.1 Overview

Spacing establishes visual hierarchy and guides attention. Proximity communicates relationships:

- **Narrow spacing** = elements are connected
- **Wide spacing** = elements are distinct
- **Consistent spacing** = grouped unit

**🔴 BOUNDARY:** Use spacing tokens for padding, margin, and gap ONLY. Never use spacing tokens for width or height properties.

---

### 3.2 Spacing Scale

**🔴 BOUNDARY:** Only use these exact Tailwind spacing tokens:

```
Small:   0, 0.5, 1, 2        (0px, 2px, 4px, 8px)
Medium:  3, 4, 5, 6          (12px, 16px, 20px, 24px)
Large:   8, 10, 12, 16, 20   (32px, 40px, 48px, 64px, 80px)
```

**🔴 BOUNDARY:** Never use `p-7`, `m-9`, `gap-11`, `space-y-15` or arbitrary values like `p-[13px]`

---

### 3.3 Vertical Spacing Rules

**🔴 COMMAND:** Between groups of UI elements: `space-y-8` (32px)

**🔴 COMMAND:** Between UI elements (default): `space-y-4` (16px)

**🔴 COMMAND:** Between closely related UI elements: `space-y-2` (8px)

**🔴 COMMAND:** Between closely related text: `space-y-1` (4px)

**🔴 COMMAND:** Between list items: `space-y-0` (0px)

```tsx
{
  /* Groups of elements */
}
;<div className="space-y-8">
  <FormSection />
  <FormSection />
</div>

{
  /* Standard elements */
}
;<div className="space-y-4">
  <FormField />
  <FormField />
</div>

{
  /* Closely related */
}
;<div className="space-y-2">
  <h3>Title</h3>
  <p>Description</p>
</div>

{
  /* List items */
}
;<ul className="space-y-0">
  <li>Item</li>
  <li>Item</li>
</ul>
```

#### Typography Vertical Spacing

**🔴 COMMAND:** Between these pairs, always use `space-y-1` (4px):

- Display + Subtitle
- Heading + Subtitle
- Heading + Body text

```tsx
<div className="space-y-1">
  <h1 className="text-xl font-bold">Heading</h1>
  <p className="text-sm text-gray-600">Subtitle</p>
</div>
```

**🟡 DIRECTIVE:** For all other typography combinations, use default spacing (`space-y-4`).

#### Divider Spacing

**🔴 COMMAND:** When using dividers, split spacing evenly before and after.

```tsx
{
  /* 32px total = 16px before + 16px after */
}
;<div className="space-y-4">
  <Content />
  <hr className="border-gray-200" />
  <Content />
</div>
```

---

### 3.4 Horizontal Spacing Rules

**🔴 COMMAND:** Between groups of UI elements: `gap-8` (32px)

**🔴 COMMAND:** Between UI elements (default): `gap-4` (16px)

**🔴 COMMAND:** Between closely related UI elements: `gap-2` (8px)

**🔴 COMMAND:** Between closely related elements in dense layouts: `gap-1` (4px)

```tsx
{
  /* Groups */
}
;<div className="flex gap-8">
  <Section />
  <Section />
</div>

{
  /* Standard */
}
;<div className="flex gap-4">
  <Button />
  <Button />
</div>

{
  /* Closely related */
}
;<div className="flex items-center gap-2">
  <Icon aria-hidden="true" />
  <span>Label</span>
</div>

{
  /* Dense */
}
;<div className="flex gap-1">
  <Badge />
  <Badge />
</div>
```

---

### 3.5 Inset Spacing (Padding)

**🔴 COMMAND:** Outermost layout layer: `p-12` (48px), or `p-4` (16px) for dense

**🔴 COMMAND:** Surfaces (dialogs, cards): `p-6` (24px), or `p-4` (16px) for dense

**🔴 COMMAND:** Containers: `p-4` (16px)

**🔴 COMMAND:** Fields (buttons, inputs): `p-3` (12px) or less

```tsx
{
  /* Page container */
}
;<main className="p-12">
  <Content />
</main>

{
  /* Dialog/Surface */
}
;<div className="rounded-lg border p-6">
  <Content />
</div>

{
  /* Container */
}
;<div className="rounded-md border p-4">
  <Content />
</div>

{
  /* Field */
}
;<button className="px-3 py-2">Action</button>
```

#### Text Balance in Insets

**🟡 DIRECTIVE:** When text borders the top or bottom edge of a padded element, reduce that edge's padding by one step for visual balance.

```tsx
{
  /* Text at top: reduce pt */
}
;<div className="px-4 pt-2 pb-3">
  <p>Text starts at top...</p>
</div>

{
  /* Text at bottom: reduce pb */
}
;<div className="px-4 pt-3 pb-2">
  <p>Text ends at bottom...</p>
</div>
```

---

## 4. Layouts

### 4.1 Element Hierarchy

Understanding element nesting determines spacing strategy.

**🔴 COMMAND:** Elements nest in this order only:

```
1. Base (page background)
   └─ 2. Surfaces (dialogs, cards)
      └─ 3. Containers (sections with borders/backgrounds)
         └─ 4. Fields (buttons, inputs)
            └─ 5. Dividers (hr, borders)
```

**🔴 BOUNDARY:** No element can contain another instance of itself.

```tsx
{
  /* Correct nesting */
}
;<div className="bg-gray-50 p-12">
  {' '}
  {/* Base */}
  <div className="rounded-lg border p-6">
    {' '}
    {/* Surface */}
    <div className="rounded-md bg-gray-100 p-4">
      {' '}
      {/* Container */}
      <button className="rounded-sm px-3 py-2">
        {' '}
        {/* Field */}
        Action
      </button>
    </div>
  </div>
</div>
```

---

### 4.2 Common Patterns

#### Pattern: Dialog Structure

Dialogs are conversations: statement + detail + action.

**🔴 COMMAND:** Dialog padding: `p-4` (standard) or `p-2` (dense menus)  
**🔴 COMMAND:** Content padding: `px-4 py-3`  
**🔴 COMMAND:** Footer gap: `gap-2`

```tsx
<div className="rounded-md border bg-white p-4 shadow-sm">
  <div className="px-4 py-3">
    <p>Are you sure you want to continue?</p>
  </div>
  <div className="flex justify-end gap-2 border-t pt-3">
    <button className="px-3 py-2">Cancel</button>
    <button className="px-3 py-2">Continue</button>
  </div>
</div>
```

**🟡 DIRECTIVE:** For menus and overlays with limited space, use `p-2` variant.

---

#### Pattern: Container Emphasis

Containers highlight essential information with semantic meaning.

**Semantic variants:**

1. **Neutral** - default, multiple per page allowed
2. **Primary** - important, once per page maximum
3. **Success** - action succeeded
4. **Warning** - attention required
5. **Critical** - immediate attention required

**Emphasis levels:**

1. **Default** - standard contrast
2. **Emphasized** - more contrast
3. **Accent** - highest contrast

```tsx
{
  /* Neutral container */
}
;<div className="rounded-lg border border-gray-200 bg-white p-4">
  <p>Neutral content</p>
</div>

{
  /* Critical emphasized */
}
;<div className="rounded-lg border border-red-200 bg-red-50 p-4">
  <p>Error: Action failed</p>
</div>

{
  /* Critical accent */
}
;<div className="rounded-lg border-2 border-red-500 bg-red-100 p-4">
  <p>Critical: Immediate action required</p>
</div>
```

**🟡 DIRECTIVE:** Use accent emphasis sparingly - reserve for highest priority alerts.

---

#### Pattern: Field Interactivity

Fields are interactive clickable elements that communicate state through visual changes.

**🔴 COMMAND:** Field padding: `p-3` (12px) or less  
**🔴 COMMAND:** State changes must use background color transitions

```tsx
{
  /* Interactive field with states */
}
;<button className="rounded-sm bg-gray-100 p-3 hover:bg-gray-200 active:bg-gray-300">
  Click me
</button>

{
  /* Small field */
}
;<button className="rounded-sm px-2 py-2 text-sm hover:bg-gray-100">Small action</button>
```

---

## 5. Visual Styles

### 5.1 Border Radius

**🔴 COMMAND:** Use border radius paired with minimum padding:

```
rounded-sm  (2px)  →  min p-2  (8px)
rounded-md  (6px)  →  min p-4  (16px)
rounded-lg  (8px)  →  min p-6  (24px)
```

**Decision tree:**

- **Small components** (badges, pills, buttons): `rounded-sm p-2`
- **Standard components** (cards, panels): `rounded-md p-4`
- **Large components** (modals, hero sections): `rounded-lg p-6`

```tsx
{
  /* Badge: small */
}
;<span className="rounded-sm bg-blue-100 p-2 text-sm">New</span>

{
  /* Button: small */
}
;<button className="rounded-sm bg-blue-600 px-3 py-2 text-white">Submit</button>

{
  /* Card: large */
}
;<div className="rounded-lg border p-6">
  <h3>Card Title</h3>
  <p>Card content...</p>
</div>
```

## 8. Status and Health

### 8.1 Overview

Status describes the condition or health of a system, process, or object. Consistent status visualization helps users assess situations and respond appropriately.

**🔴 COMMAND:** Follow WCAG 2.1 AA accessibility guidelines (Success Criterion 1.4.1).

**🔴 BOUNDARY:** Never use color alone to convey status information.

---

### 8.2 Status Levels

**🔴 COMMAND:** Use only these five universal status levels:

```
1. Ideal    →  emerald  →  Success, desired result
2. Good     →  indigo   →  Informative, minor issues, new features
3. Neutral  →  slate    →  Inactive, undefined, unessential
4. Warning  →  amber    →  Potential issues, attention needed
5. Critical →  pink     →  Failed, immediate attention required
```

---

### 8.3 Status Color Tokens

**🔴 COMMAND:** Use these exact Tailwind color tokens for status:

**Default emphasis:**

```
Ideal:    text-emerald-600  bg-emerald-50  border-emerald-200
Good:     text-indigo-600   bg-indigo-50   border-indigo-200
Neutral:  text-slate-600    bg-slate-50    border-slate-200
Warning:  text-amber-600    bg-amber-50    border-amber-200
Critical: text-pink-600     bg-pink-50     border-pink-200
```

**Emphasized (more contrast):**

```
Ideal:    text-emerald-700  bg-emerald-100  border-emerald-300
Good:     text-indigo-700   bg-indigo-100   border-indigo-300
Neutral:  text-slate-700    bg-slate-100    border-slate-300
Warning:  text-amber-700    bg-amber-100    border-amber-300
Critical: text-pink-700     bg-pink-100     border-pink-300
```

**Accent (highest contrast):**

```
Ideal:    text-emerald-900  bg-emerald-200  border-emerald-500
Good:     text-indigo-900   bg-indigo-200   border-indigo-500
Neutral:  text-slate-900    bg-slate-200    border-slate-500
Warning:  text-amber-900    bg-amber-200    border-amber-500
Critical: text-pink-900     bg-pink-200     border-pink-500
```

---

### 8.4 Status Mapping Examples

**Security Risk:**

```
Ideal    → (not used)
Good     → Low
Neutral  → Muted
Warning  → Medium
Critical → High
```

**Process Status:**

```
Ideal    → Completed
Good     → In progress
Neutral  → Not started
Warning  → (not used)
Critical → Failed
```

**🟡 DIRECTIVE:** Map only the levels your context requires - not every context needs all five levels.

---

### 8.5 Accessibility Requirements

**🔴 COMMAND:** Status must be communicated through AT LEAST TWO of:

- Color
- Icon
- Shape
- Text

**🔴 COMMAND:** Icon-only and shape-only indicators must have `aria-label` for screen readers.

```tsx
{
  /* ✅ CORRECT: Color + Icon + Text */
}
;<div className="flex items-center gap-2 text-emerald-600">
  <CheckCircle aria-hidden="true" />
  <span className="text-sm font-semibold">Healthy</span>
</div>

{
  /* ✅ CORRECT: Color + Shape + aria-label */
}
;<div className="inline-flex rounded-full bg-emerald-100 p-1" role="status" aria-label="Healthy" />
```

---

### 8.6 When to Show Status

**🔴 COMMAND:** Always show status for:

- Warnings
- Critical conditions

**🟡 DIRECTIVE:** Show ideal status to reassure users everything is okay.

**🔴 BOUNDARY:** Don't over-communicate status - only highlight essential information.

**🔴 COMMAND:** Prioritize negative over positive status when both exist.

```tsx
{
  /* ✅ CORRECT: Critical status visible first */
}
;<div className="space-y-2">
  <StatusIndicator level="critical">3 failed services</StatusIndicator>
  <StatusIndicator level="ideal">12 healthy services</StatusIndicator>
</div>
```

---

### 8.7 Where to Show Status

**🔴 COMMAND:** Place status indicators to support reading flow (top-left before bottom-right).

**🔴 COMMAND:** Section-level status: Place at top, next to heading.

**🔴 COMMAND:** Element-level status: Place in close proximity to element.

```tsx
{
  /* Section-level status */
}
;<section className="space-y-4">
  <div className="flex items-center justify-between">
    <h2 className="text-xl font-bold">Services</h2>
    <div className="flex items-center gap-2 text-pink-600">
      <AlertCircle aria-hidden="true" />
      <span className="text-sm font-semibold">3 unhealthy</span>
    </div>
  </div>
  <div className="space-y-2">{/* Service list */}</div>
</section>

{
  /* Element-level status */
}
;<div className="flex items-center justify-between rounded-md border p-4">
  <div>
    <h3 className="font-semibold">API Service</h3>
    <p className="text-sm text-slate-600">api.example.com</p>
  </div>
  <div className="flex items-center gap-2 text-emerald-600">
    <CheckCircle aria-hidden="true" />
    <span className="text-sm font-semibold">Healthy</span>
  </div>
</div>
```

---

### 8.8 Communicating Status Changes

**🟡 DIRECTIVE:** Use Toast component for important status changes that require user attention.

**🔴 BOUNDARY:** Don't use toasts for every status change - they interrupt user flow.

**🟡 DIRECTIVE:** For non-critical changes, update existing indicators without notifications.

```tsx
{
  /* Important change: show toast */
}
;<Toast variant="critical">
  <div className="flex items-center gap-2">
    <AlertCircle aria-hidden="true" />
    <span>API service has gone down</span>
  </div>
</Toast>

{
  /* Minor change: update indicator only */
}
;<div className="flex items-center gap-2 text-emerald-600">
  <CheckCircle aria-hidden="true" />
  <span className="text-sm font-semibold">Healthy</span>
</div>
```

---

### 8.9 Status Component Patterns

#### Pattern: Health Indicator (Subtle)

Subtle status for systems, processes, or objects.

**🔴 COMMAND:** Use shape or icon as visual.

**🔴 COMMAND:** Must be accessible (color + shape/icon + label or aria-label).

```tsx
{/* Shape-based health indicator */}
<div className="flex items-center gap-2">
  <div
    className="inline-flex rounded-full bg-emerald-100 p-1"
    role="status"
    aria-label="Healthy"
  />
  <span className="text-sm text-slate-900">API Service</span>
</div>

{/* Icon-based health indicator */}
<div className="flex items-center gap-2">
  <CheckCircle className="text-emerald-600" aria-hidden="true" />
  <span className="text-sm font-semibold text-emerald-600">Healthy</span>
</div>

{/* All status levels */}
<div className="flex items-center gap-2">
  <div className="inline-flex rounded-full bg-emerald-100 p-1" role="status" aria-label="Ideal" />
  <span className="text-sm">Ideal</span>
</div>

<div className="flex items-center gap-2">
  <div className="inline-flex rounded-full bg-indigo-100 p-1" role="status" aria-label="Good" />
  <span className="text-sm">Good</span>
</div>

<div className="flex items-center gap-2">
  <div className="inline-flex rounded-full bg-slate-100 p-1" role="status" aria-label="Neutral" />
  <span className="text-sm">Neutral</span>
</div>

<div className="flex items-center gap-2">
  <div className="inline-flex rounded-full bg-amber-100 p-1" role="status" aria-label="Warning" />
  <span className="text-sm">Warning</span>
</div>

<div className="flex items-center gap-2">
  <div className="inline-flex rounded-full bg-pink-100 p-1" role="status" aria-label="Critical" />
  <span className="text-sm">Critical</span>
</div>
```

#### Pattern: Chip (Prominent Tag)

Prominent status tags for objects or processes.

**🔴 COMMAND:** Chip padding: `p-2`

**🔴 COMMAND:** Chip text: `text-sm font-semibold`

**🔴 COMMAND:** Chip radius: `rounded-sm`

```tsx
{/* Status chips - all levels */}
<span className="inline-flex items-center gap-1 rounded-sm bg-emerald-50 p-2 text-sm font-semibold text-emerald-700">
  <CheckCircle aria-hidden="true" />
  Completed
</span>

<span className="inline-flex items-center gap-1 rounded-sm bg-indigo-50 p-2 text-sm font-semibold text-indigo-700">
  <Clock aria-hidden="true" />
  In progress
</span>

<span className="inline-flex items-center gap-1 rounded-sm bg-slate-50 p-2 text-sm font-semibold text-slate-700">
  <Minus aria-hidden="true" />
  Not started
</span>

<span className="inline-flex items-center gap-1 rounded-sm bg-amber-50 p-2 text-sm font-semibold text-amber-700">
  <AlertTriangle aria-hidden="true" />
  Delayed
</span>

<span className="inline-flex items-center gap-1 rounded-sm bg-pink-50 p-2 text-sm font-semibold text-pink-700">
  <XCircle aria-hidden="true" />
  Failed
</span>
```

#### Pattern: Message Container

Important conditions or status changes for current section/page.

**🔴 COMMAND:** Container padding: `p-4`

**🔴 COMMAND:** Icon + title + description structure

**🔴 COMMAND:** Use semantic color variants

```tsx
{
  /* Critical message container */
}
;<div className="flex gap-3 rounded-md border-2 border-pink-300 bg-pink-100 p-4">
  <AlertCircle className="flex-shrink-0 text-pink-700" aria-hidden="true" />
  <div className="space-y-1">
    <h3 className="text-sm font-semibold text-pink-700">Service Unavailable</h3>
    <p className="text-sm text-pink-700">
      The API service is currently down. Our team has been notified and is working on a fix.
    </p>
  </div>
</div>

{
  /* Warning message container */
}
;<div className="flex gap-3 rounded-md border border-amber-300 bg-amber-100 p-4">
  <AlertTriangle className="flex-shrink-0 text-amber-700" aria-hidden="true" />
  <div className="space-y-1">
    <h3 className="text-sm font-semibold text-amber-700">High Memory Usage</h3>
    <p className="text-sm text-amber-700">
      Database is using 85% of allocated memory. Consider scaling up.
    </p>
  </div>
</div>

{
  /* Success message container */
}
;<div className="flex gap-3 rounded-md border border-emerald-300 bg-emerald-100 p-4">
  <CheckCircle className="flex-shrink-0 text-emerald-700" aria-hidden="true" />
  <div className="space-y-1">
    <h3 className="text-sm font-semibold text-emerald-700">Deployment Successful</h3>
    <p className="text-sm text-emerald-700">Your changes have been deployed to production.</p>
  </div>
</div>

{
  /* Info message container */
}
;<div className="flex gap-3 rounded-md border border-indigo-300 bg-indigo-100 p-4">
  <Info className="flex-shrink-0 text-indigo-700" aria-hidden="true" />
  <div className="space-y-1">
    <h3 className="text-sm font-semibold text-indigo-700">New Feature Available</h3>
    <p className="text-sm text-indigo-700">
      Advanced monitoring is now available for all services.
    </p>
  </div>
</div>

{
  /* Neutral message container */
}
;<div className="flex gap-3 rounded-md border border-slate-300 bg-slate-100 p-4">
  <Minus className="flex-shrink-0 text-slate-700" aria-hidden="true" />
  <div className="space-y-1">
    <h3 className="text-sm font-semibold text-slate-700">Service Inactive</h3>
    <p className="text-sm text-slate-700">This service is currently not in use.</p>
  </div>
</div>
```

#### Pattern: Toast Notification

Notify users about status changes.

**🔴 COMMAND:** Toast padding: `p-4`

**🔴 COMMAND:** Auto-dismiss after 5-7 seconds for non-critical

**🔴 COMMAND:** Manual dismiss for critical

```tsx
{
  /* Success toast (auto-dismiss) */
}
;<div className="flex items-center gap-3 rounded-md bg-emerald-200 p-4 text-emerald-900 shadow-lg">
  <CheckCircle aria-hidden="true" />
  <span className="text-sm font-semibold">Changes saved successfully</span>
</div>

{
  /* Info toast */
}
;<div className="flex items-center gap-3 rounded-md bg-indigo-200 p-4 text-indigo-900 shadow-lg">
  <Info aria-hidden="true" />
  <span className="text-sm font-semibold">Deployment started</span>
</div>

{
  /* Warning toast */
}
;<div className="flex items-center gap-3 rounded-md bg-amber-200 p-4 text-amber-900 shadow-lg">
  <AlertTriangle aria-hidden="true" />
  <span className="text-sm font-semibold">Service degraded</span>
</div>

{
  /* Critical toast (manual dismiss) */
}
;<div className="flex items-center justify-between gap-3 rounded-md bg-pink-200 p-4 text-pink-900 shadow-lg">
  <div className="flex items-center gap-3">
    <AlertCircle aria-hidden="true" />
    <span className="text-sm font-semibold">Connection lost</span>
  </div>
  <button className="rounded-sm p-2">
    <X aria-hidden="true" />
  </button>
</div>
```

#### Pattern: Information Overlay

Detailed status information in contextual overlay.

**🔴 COMMAND:** Triggered by status icon with label

**🔴 COMMAND:** Overlay shows additional context

```tsx
{
  /* Trigger */
}
;<button className="flex items-center gap-1 text-sm text-amber-700 hover:text-amber-800">
  <AlertTriangle aria-hidden="true" />
  <span>2 warnings</span>
</button>

{
  /* Overlay content */
}
;<div className="max-w-sm rounded-md border bg-white p-4 shadow-lg">
  <div className="space-y-3">
    <div className="flex items-start gap-2">
      <AlertTriangle className="flex-shrink-0 text-amber-600" aria-hidden="true" />
      <div className="space-y-1">
        <p className="text-sm font-semibold text-slate-900">High memory usage</p>
        <p className="text-sm text-slate-600">Service using 85% of allocated memory</p>
      </div>
    </div>

    <div className="flex items-start gap-2">
      <AlertTriangle className="flex-shrink-0 text-amber-600" aria-hidden="true" />
      <div className="space-y-1">
        <p className="text-sm font-semibold text-slate-900">Slow response time</p>
        <p className="text-sm text-slate-600">Average latency increased to 450ms</p>
      </div>
    </div>
  </div>
</div>
```

---

### 8.10 Other Status Indicators

#### Status Highlights

Visual emphasis with colored vertical line.

**🔴 COMMAND:** Use `border-l-4` for vertical highlight

**🔴 BOUNDARY:** Must be accompanied by other status indicators nearby for accessibility

```tsx
{
  /* Table row with critical highlight */
}
;<tr className="border-l-4 border-pink-300 bg-pink-100">
  <td className="px-4 py-3">
    <div className="flex items-center gap-2">
      <AlertCircle className="text-pink-600" aria-hidden="true" />
      <span className="font-semibold">API Service</span>
    </div>
  </td>
  <td className="px-4 py-3">
    <span className="text-sm text-pink-700">Unhealthy</span>
  </td>
</tr>

{
  /* List item with warning highlight */
}
;<div className="flex items-center gap-3 border-l-4 border-amber-300 bg-amber-100 p-4">
  <AlertTriangle className="text-amber-600" aria-hidden="true" />
  <div>
    <p className="text-sm font-semibold text-amber-700">Database backup pending</p>
    <p className="text-sm text-amber-700">Last backup: 36 hours ago</p>
  </div>
</div>

{
  /* List item with success highlight */
}
;<div className="flex items-center gap-3 border-l-4 border-emerald-300 bg-emerald-100 p-4">
  <CheckCircle className="text-emerald-600" aria-hidden="true" />
  <div>
    <p className="text-sm font-semibold text-emerald-700">Deployment complete</p>
    <p className="text-sm text-emerald-700">Version 2.4.1 deployed successfully</p>
  </div>
</div>
```

#### Trend Indicators

Communicate positive or negative changes in data.

**🔴 COMMAND:** Use for reporting, never for predictions

**🔴 COMMAND:** Context or label must clarify if trend is positive/negative

**🔴 BOUNDARY:** Don't rely on color alone - upward arrow doesn't always mean "good"

```tsx
{
  /* Positive trend (revenue up is good) */
}
;<div className="flex items-center gap-2">
  <span className="text-2xl font-bold text-slate-900">$45,231</span>
  <div className="flex items-center gap-1 text-emerald-600">
    <TrendingUp aria-hidden="true" />
    <span className="text-sm font-semibold">+12%</span>
  </div>
</div>

{
  /* Negative trend (error rate up is bad) */
}
;<div className="flex items-center gap-2">
  <span className="text-2xl font-bold text-slate-900">3.2%</span>
  <div className="flex items-center gap-1 text-pink-600">
    <TrendingUp aria-hidden="true" />
    <span className="text-sm font-semibold">+1.2%</span>
  </div>
  <span className="text-sm text-slate-600">error rate</span>
</div>

{
  /* Neutral trend */
}
;<div className="flex items-center gap-2">
  <span className="text-2xl font-bold text-slate-900">156</span>
  <div className="flex items-center gap-1 text-slate-600">
    <Minus aria-hidden="true" />
    <span className="text-sm font-semibold">0%</span>
  </div>
</div>

{
  /* Warning trend */
}
;<div className="flex items-center gap-2">
  <span className="text-2xl font-bold text-slate-900">2.1s</span>
  <div className="flex items-center gap-1 text-amber-600">
    <TrendingUp aria-hidden="true" />
    <span className="text-sm font-semibold">+450ms</span>
  </div>
  <span className="text-sm text-slate-600">avg response time</span>
</div>
```

**🟡 DIRECTIVE:** Label should make it clear whether upward/downward is positive or negative based on metric context.

---

### 8.11 Complete Status Dashboard Example

```tsx
<div className="space-y-6">
  {/* Page header with overall status */}
  <div className="flex items-center justify-between">
    <h1 className="text-3xl font-bold">System Health</h1>
    <div className="flex items-center gap-2 text-amber-600">
      <AlertTriangle aria-hidden="true" />
      <span className="font-semibold">2 warnings</span>
    </div>
  </div>

  {/* Critical alert banner */}
  <div className="flex gap-3 rounded-md border-2 border-pink-300 bg-pink-100 p-4">
    <AlertCircle className="flex-shrink-0 text-pink-700" aria-hidden="true" />
    <div className="space-y-1">
      <h3 className="text-sm font-semibold text-pink-700">Payment Service Down</h3>
      <p className="text-sm text-pink-700">Immediate attention required. Incident #1234 created.</p>
    </div>
  </div>

  {/* Services list */}
  <div className="space-y-2">
    <h2 className="text-lg font-semibold">Services</h2>

    <div className="space-y-1">
      {/* Critical service */}
      <div className="flex items-center justify-between border-l-4 border-pink-300 bg-pink-100 p-4">
        <div className="flex items-center gap-3">
          <XCircle className="text-pink-700" aria-hidden="true" />
          <div>
            <p className="font-semibold text-pink-700">Payment API</p>
            <p className="text-sm text-pink-700">Last healthy: 5 minutes ago</p>
          </div>
        </div>
        <span className="rounded-sm bg-pink-100 p-2 text-sm font-semibold text-pink-700">
          Critical
        </span>
      </div>

      {/* Warning service */}
      <div className="flex items-center justify-between border-l-4 border-amber-300 bg-amber-100 p-4">
        <div className="flex items-center gap-3">
          <AlertTriangle className="text-amber-700" aria-hidden="true" />
          <div>
            <p className="font-semibold text-amber-700">Database</p>
            <p className="text-sm text-amber-700">High memory usage: 85%</p>
          </div>
        </div>
        <span className="rounded-sm bg-amber-100 p-2 text-sm font-semibold text-amber-700">
          Warning
        </span>
      </div>

      {/* Healthy service */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <CheckCircle className="text-emerald-600" aria-hidden="true" />
          <div>
            <p className="font-semibold">Auth API</p>
            <p className="text-sm text-slate-600">All systems operational</p>
          </div>
        </div>
        <span className="rounded-sm bg-emerald-50 p-2 text-sm font-semibold text-emerald-700">
          Healthy
        </span>
      </div>

      {/* Inactive service */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <Minus className="text-slate-400" aria-hidden="true" />
          <div>
            <p className="font-semibold text-slate-600">Legacy API</p>
            <p className="text-sm text-slate-500">Service not in use</p>
          </div>
        </div>
        <span className="rounded-sm bg-slate-50 p-2 text-sm font-semibold text-slate-600">
          Inactive
        </span>
      </div>
    </div>
  </div>
</div>
```

---

### 8.12 Status Color Quick Reference

```
STATUS COLORS (Default)
Ideal:    emerald-600  emerald-50  emerald-200
Good:     indigo-600   indigo-50   indigo-200
Neutral:  slate-600    slate-50    slate-200
Warning:  amber-600    amber-50    amber-200
Critical: pink-600     pink-50     pink-200

STATUS COLORS (Emphasized)
Ideal:    emerald-700  emerald-100  emerald-300
Good:     indigo-700   indigo-100   indigo-300
Neutral:  slate-700    slate-100    slate-300
Warning:  amber-700    amber-100    amber-300
Critical: pink-700     pink-100     pink-300

STATUS COLORS (Accent)
Ideal:    emerald-900  emerald-200  emerald-500
Good:     indigo-900   indigo-200   indigo-500
Neutral:  slate-900    slate-200    slate-500
Warning:  amber-900    amber-200    amber-500
Critical: pink-900     pink-200     pink-500
```

---

**🔴 BOUNDARY:** Never use `rounded` (4px) or `rounded-xl` (12px) - they break the scale.

**🟡 DIRECTIVE:** Match visual weight of border radius to component importance. Larger radius = more prominent component.

---

### 5.2 Interaction States

Interaction states visually reflect the current state of UI elements. States communicate affordance and feedback to users.

---

#### 5.2.1 Exclusive States

These states are mutually exclusive - an element can only be in one state at a time.

##### Rest State

**🔴 COMMAND:** Rest is the default visual state for all elements.

```tsx
<button className="rounded-sm bg-violet-500 px-3 py-2 text-white">Default Button</button>
```

##### Hover State

**🔴 COMMAND:** Hover increases color value by +100 from rest state.

**🔴 COMMAND:** Use `hover:` prefix for hover states.

```tsx
<button className="rounded-sm bg-violet-500 px-3 py-2 text-white hover:bg-violet-600">
  Hover me
</button>
```

**🟡 DIRECTIVE:** Hover states should provide immediate visual feedback - avoid subtle changes that users might miss.

##### Active State

**🔴 COMMAND:** Active increases color value by +200 from rest state.

**🔴 COMMAND:** Use `active:` prefix for active states.

**🟡 DIRECTIVE:** Active state communicates "currently being pressed" - works with mouse, touch, stylus, or any pointing device.

```tsx
<button className="rounded-sm bg-violet-500 px-3 py-2 text-white hover:bg-violet-600 active:bg-violet-700">
  Click me
</button>
```

##### Focus State

**🔴 COMMAND:** Focus uses outline with same color as rest state.

**🔴 COMMAND:** Focus outline width: `outline-2`

**🔴 COMMAND:** Focus outline offset: `outline-offset-2`

**🟡 DIRECTIVE:** Focus states are for keyboard navigation - they must be highly visible for accessibility.

```tsx
<button className="rounded-sm bg-violet-500 px-3 py-2 text-white hover:bg-violet-600 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700">
  Tab to focus
</button>
```

**Complete interactive button pattern:**

```tsx
<button className="rounded-sm bg-violet-500 px-3 py-2 text-white transition-colors hover:bg-violet-600 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700">
  Interactive Button
</button>
```

##### Disabled State

**🔴 COMMAND:** Use `disabled:` prefix for disabled states.

**🔴 COMMAND:** Disabled elements must have `disabled` attribute for accessibility.

**🔴 COMMAND:** Disabled reduces opacity to communicate unavailability.

```tsx
<button
  disabled
  className="rounded-sm bg-violet-500 px-3 py-2 text-white disabled:cursor-not-allowed disabled:opacity-50"
>
  Disabled Button
</button>
```

**Disable vs Hide Decision Tree:**

**✅ DISABLE when:**

- User needs to know the feature exists
- Feature will become available later
- Helpful to show what's possible

**❌ HIDE when:**

- Element contains sensitive data
- Element provides no value to user
- Element interrupts user flow

```tsx
{
  /* Show disabled button */
}
;<button disabled className="disabled:opacity-50">
  Save (requires changes)
</button>

{
  /* Conditionally hide sensitive action */
}
{
  hasPermission && <button>Delete Account</button>
}
```

**🟡 DIRECTIVE:** When disabling, make it apparent WHY the element is disabled - use helper text or tooltips.

```tsx
<div className="space-y-1">
  <button disabled className="disabled:opacity-50">
    Submit
  </button>
  <p className="text-sm text-gray-600">Complete all fields to submit</p>
</div>
```

---

#### 5.2.2 Selected State

**🔴 COMMAND:** Selected uses primary color tokens.

**🔴 COMMAND:** Selected must include additional visual indicator (checkmark, line, or background).

**Decision tree:**

- **Radio/checkbox:** Use checkmark icon
- **Tabs/navigation:** Use underline or background
- **Cards/tiles:** Use border or background

```tsx
{
  /* Tab navigation with selected state */
}
;<div className="flex gap-4 border-b">
  <button className="border-b-2 border-violet-500 px-3 py-2 font-semibold text-violet-600">
    Active Tab
  </button>
  <button className="border-b-2 border-transparent px-3 py-2 text-gray-600 hover:text-gray-900">
    Inactive Tab
  </button>
</div>

{
  /* Card selection */
}
;<div className="rounded-md border-2 border-violet-500 bg-violet-50 p-4">
  <p>Selected card</p>
</div>

{
  /* Checkbox with selected state */
}
;<label className="flex items-center gap-2">
  <input
    type="checkbox"
    checked
    className="rounded-sm border-gray-300 text-violet-600 focus:ring-violet-500"
  />
  <span>Selected option</span>
</label>
```

**🟡 DIRECTIVE:** Selected states should be immediately obvious - don't rely on subtle color changes alone.

---

#### 5.2.3 Indicating Interactivity

**🔴 COMMAND:** Use these patterns to indicate interactivity:

1. **Inline text action (not a link):** Dotted underline
2. **Inline text link:** Solid underline
3. **Other elements:** Distinguished by position, emphasized text, or context

**🔴 BOUNDARY:** Color alone is NOT an indicator of interactivity.

```tsx
{
  /* Inline action trigger */
}
;<button className="border-b border-dotted border-current text-violet-600 hover:text-violet-700">
  Show more details
</button>

{
  /* Inline link */
}
;<a href="/docs" className="text-violet-600 underline hover:text-violet-700">
  Read documentation
</a>

{
  /* Button distinguished by context */
}
;<button className="rounded-sm bg-violet-500 px-3 py-2 font-semibold text-white hover:bg-violet-600">
  Primary Action
</button>

{
  /* Secondary button - distinguished by style */
}
;<button className="rounded-sm border border-gray-300 px-3 py-2 font-semibold text-gray-700 hover:bg-gray-50">
  Secondary Action
</button>
```

**🟡 DIRECTIVE:** Ensure interactive elements have sufficient visual weight or position to signal they're clickable - users shouldn't have to guess.

---

### 5.3 Complete Component Patterns

#### Pattern: Primary Button

```tsx
<button className="rounded-sm bg-violet-500 px-3 py-2 font-semibold text-white transition-colors hover:bg-violet-600 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700 disabled:cursor-not-allowed disabled:opacity-50">
  Primary Action
</button>
```

#### Pattern: Secondary Button

```tsx
<button className="rounded-sm border border-gray-300 bg-white px-3 py-2 font-semibold text-gray-700 transition-colors hover:bg-gray-50 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-gray-500 active:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50">
  Secondary Action
</button>
```

#### Pattern: Ghost Button

```tsx
<button className="rounded-sm px-3 py-2 font-semibold text-gray-700 transition-colors hover:bg-gray-100 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-gray-500 active:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-50">
  Ghost Action
</button>
```

#### Pattern: Danger Button

```tsx
<button className="rounded-sm bg-red-500 px-3 py-2 font-semibold text-white transition-colors hover:bg-red-600 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-red-500 active:bg-red-700 disabled:cursor-not-allowed disabled:opacity-50">
  Delete
</button>
```

#### Pattern: Interactive Link

```tsx
<a
  href="/docs"
  className="text-violet-600 underline transition-colors hover:text-violet-700 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-violet-500"
>
  Read documentation
</a>
```

#### Pattern: Interactive Card

```tsx
<button className="w-full rounded-lg border-2 border-gray-200 bg-white p-6 text-left transition-all hover:border-violet-300 hover:bg-violet-50 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:border-violet-400 active:bg-violet-100">
  <h3 className="text-lg font-semibold">Card Title</h3>
  <p className="text-sm text-gray-600">Card description</p>
</button>
```

---

## 6. Accessibility

### 6.1 Nested Interactivity & DOM Flattening

#### 6.1.1 BOUNDARY: Structural Constraints

- **Forbidden Nesting:** An interactive element (Parent) **must never** contain another interactive element (Child).
- **Target Elements:** `<a>`, `<button>`, `<details>`, `<input>`, `<select>`, `<textarea>`, and any element with `tabindex="0"`.
- **WCAG Mapping:** Direct violation of **4.1.1 (Parsing)**, **2.1.1 (Keyboard)**, and **4.1.2 (Name, Role, Value)**.

#### 6.1.2 DIRECTIVE: The "Stretched Sibling" Pattern

When a container (e.g., a Card) requires a primary click area plus secondary internal actions, agents must apply the following logic:

1. **Flatten:** Place the primary link and secondary buttons as **siblings** in the DOM.
2. **Expand:** Use a CSS `::after` pseudo-element on the primary link, set to `position: absolute` with inset `0`, to cover the parent container.
3. **Layer:** Apply `position: relative` and a higher `z-index` to the secondary buttons to ensure they remain "on top" of the primary link's hit area.

## Quick Reference

### Spacing Cheat Sheet

```
VERTICAL                    HORIZONTAL
Groups:      space-y-8      Groups:      gap-8
Default:     space-y-4      Default:     gap-4
Related:     space-y-2      Related:     gap-2
Text:        space-y-1      Dense:       gap-1
Lists:       space-y-0

INSET (PADDING)
Page:        p-12 (or p-4 dense)
Surface:     p-6  (or p-4 dense)
Container:   p-4
Field:       p-3 or less
```

### Typography Cheat Sheet

```
Display:     text-5xl font-extrabold
Heading:     text-xl font-bold
Subheading:  text-lg font-semibold
Body:        text-base font-normal
Subtext:     text-sm font-medium
```

### Border Radius Cheat Sheet

```
Small:       rounded-sm p-2
Standard:    rounded-md p-4
Large:       rounded-lg p-6
```

---

## Component usage guidelines

#### Basic kit

## 6. Navigation

### 6.1 Overview

Navigation provides predictable ways for users to move through your app. Consistent navigation patterns and logical information structure are essential for usability.

**🔴 COMMAND:** Use links for navigation whenever the URL changes.

**🔴 BOUNDARY:** Never use buttons for navigation - this violates accessibility standards (WCAG 2.1).

---

### 6.2 Navigation Hierarchy Types

#### Flat Hierarchy

**Use when:**

- App has 6-8 pages or less
- Content can be consumed in any order
- No parent-child relationships between pages

**🔴 COMMAND:** Clearly differentiate all content pages.

**🟡 DIRECTIVE:** Ensure users understand the purpose of each page without needing to visit it.

```tsx
{
  /* Flat navigation example */
}
;<nav className="flex gap-4 border-b">
  <a href="/dashboard" className="px-3 py-2 font-semibold text-gray-900">
    Dashboard
  </a>
  <a href="/analytics" className="px-3 py-2 text-gray-600 hover:text-gray-900">
    Analytics
  </a>
  <a href="/settings" className="px-3 py-2 text-gray-600 hover:text-gray-900">
    Settings
  </a>
</nav>
```

#### Nested Hierarchy

**Use when:**

- Content has hierarchical structure
- Content must be consumed in specific order
- Pages are organized in tree-like structure

**🔴 COMMAND:** Users must know their location within hierarchy at all times.

**🟡 DIRECTIVE:** Provide breadcrumbs or visual indicators for deeply nested pages - users need orientation help.

**🟡 DIRECTIVE:** Consider that users may share deep links - recipients won't know where they are in your app without proper context.

```tsx
{
  /* Nested navigation with breadcrumbs */
}
;<nav className="flex items-center gap-2 text-sm">
  <a href="/docs" className="text-gray-600 hover:text-gray-900">
    Documentation
  </a>
  <span className="text-gray-400">/</span>
  <a href="/docs/components" className="text-gray-600 hover:text-gray-900">
    Components
  </a>
  <span className="text-gray-400">/</span>
  <span className="font-semibold text-gray-900">Button</span>
</nav>
```

#### Combined Hierarchy

**Use when:**

- App is complex with multiple content types
- Some sections are flat, others are nested

**🔴 COMMAND:** Follow recommendations for both nested and flat hierarchies.

---

### 6.3 Navigation Levels

#### Primary Navigation

Primary navigation contains main entry points to your app's content areas.

**🔴 COMMAND:** Primary navigation spacing: `gap-4` between items

**🔴 COMMAND:** Primary navigation padding: `px-3 py-2` for items

```tsx
{
  /* Primary navigation */
}
;<nav className="flex gap-4 border-b border-gray-200">
  <a
    href="/dashboard"
    className="border-b-2 border-violet-500 px-3 py-2 font-semibold text-violet-600"
  >
    Dashboard
  </a>
  <a
    href="/projects"
    className="border-b-2 border-transparent px-3 py-2 text-gray-600 hover:text-gray-900"
  >
    Projects
  </a>
  <a
    href="/team"
    className="border-b-2 border-transparent px-3 py-2 text-gray-600 hover:text-gray-900"
  >
    Team
  </a>
</nav>
```

#### Secondary Navigation

Secondary navigation leads to pages branching from main entry points - hierarchically subordinate to primary navigation.

**🔴 COMMAND:** Secondary navigation spacing: `gap-2` between items (more compact)

```tsx
{
  /* Secondary navigation (sidebar) */
}
;<nav className="space-y-1">
  <a
    href="/settings/profile"
    className="block rounded-sm bg-gray-100 px-3 py-2 text-sm font-semibold text-gray-900"
  >
    Profile
  </a>
  <a
    href="/settings/security"
    className="block rounded-sm px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900"
  >
    Security
  </a>
  <a
    href="/settings/notifications"
    className="block rounded-sm px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900"
  >
    Notifications
  </a>
</nav>
```

---

### 6.4 Navigation Components

#### Tabs

Tabs group related content into multiple sections for quick switching.

**Use when:**

- Users need to switch between related content groups quickly
- Content sections are at the same hierarchy level
- All tabs are visible without scrolling (ideally 3-7 tabs)

**🔴 COMMAND:** Tab spacing: `gap-4` between tabs

**🔴 COMMAND:** Selected tab must have clear visual indicator (underline or background)

```tsx
{
  /* Tabs navigation */
}
;<div className="border-b border-gray-200">
  <nav className="flex gap-4">
    <button className="border-b-2 border-violet-500 px-3 py-2 font-semibold text-violet-600">
      Overview
    </button>
    <button className="border-b-2 border-transparent px-3 py-2 text-gray-600 hover:text-gray-900">
      Activity
    </button>
    <button className="border-b-2 border-transparent px-3 py-2 text-gray-600 hover:text-gray-900">
      Settings
    </button>
  </nav>
</div>
```

#### Links

Links enable navigation between pages and sections.

**🔴 BOUNDARY:** Use `<a>` tags with `href` for navigation, never `<button>`.

**🔴 COMMAND:** Links must have visual differentiation beyond color (underline, icon, context).

**🔴 COMMAND:** Inline links: solid underline

```tsx
{
  /* Standard inline link */
}
;<p className="text-base">
  Learn more in our{' '}
  <a href="/docs" className="text-violet-600 underline hover:text-violet-700">
    documentation
  </a>
  .
</p>

{
  /* Navigation link */
}
;<a
  href="/dashboard"
  className="flex items-center gap-2 rounded-sm px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-100"
>
  <Icon aria-hidden="true" />
  Dashboard
</a>

{
  /* External link with icon */
}
;<a
  href="https://example.com"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-1 text-violet-600 underline hover:text-violet-700"
>
  Visit website
  <ExternalLink aria-hidden="true" />
</a>
```

**🟡 DIRECTIVE:** For accessibility, users must always be able to identify links - provide additional visual cues beyond color.

---

## 7. Forms

### 7.1 Overview

Forms gather input from users and allow configuration of options. Well-designed forms reduce friction and errors.

---

### 7.2 Form Element Anatomy

Every form element consists of up to four parts:

1. **Label** (required)
2. **Input value** (or placeholder/default)
3. **Hint** (optional)
4. **Error message** (when invalid)

---

### 7.3 Form Element Components

#### Labels

**🔴 COMMAND:** All form elements must have labels.

**🔴 COMMAND:** Labels must be concise and clear.

**🔴 COMMAND:** Required fields show asterisk (\*) in label.

```tsx
{
  /* Standard label */
}
;<label className="block text-sm font-semibold text-gray-900">Email address</label>

{
  /* Required field label */
}
;<label className="block text-sm font-semibold text-gray-900">
  Email address <span className="text-red-500">*</span>
</label>
```

#### Placeholders

**🟡 DIRECTIVE:** Use placeholders to show input format examples (e.g., YYYY-MM-DD).

**🔴 BOUNDARY:** Never put necessary information in placeholders - users can't see them while typing.

```tsx
<input
  type="date"
  placeholder="YYYY-MM-DD"
  className="rounded-sm border border-gray-300 px-3 py-2"
/>
```

#### Hints

**🟡 DIRECTIVE:** Use hints for additional in-context help and guidance.

**🔴 COMMAND:** Hints remain visible while typing - can contain necessary information.

**🔴 COMMAND:** Keep hint text concise.

```tsx
<div className="space-y-1">
  <label className="block text-sm font-semibold text-gray-900">
    Password <span className="text-red-500">*</span>
  </label>
  <input type="password" className="w-full rounded-sm border border-gray-300 px-3 py-2" />
  <p className="text-sm text-gray-600">
    Must be at least 8 characters with one number and one special character
  </p>
</div>
```

#### Default Values

**🟡 DIRECTIVE:** Provide default values to reduce user effort when appropriate.

**🔴 BOUNDARY:** Never provide wrong or inappropriate defaults - when in doubt, leave empty.

```tsx
<select className="rounded-sm border border-gray-300 px-3 py-2">
  <option value="">Select country...</option>
  <option value="us" selected>
    United States
  </option>
  <option value="uk">United Kingdom</option>
</select>
```

---

### 7.4 Form Layout

#### Spacing Rules

**🔴 COMMAND:** Between groups of form elements: `space-y-8` (32px)

**🔴 COMMAND:** Between form elements: `space-y-4` (16px)

**🔴 COMMAND:** Between checkboxes/radios: `space-y-2` (8px)

**🔴 COMMAND:** Between label and input: `space-y-1` (4px)

**🔴 COMMAND:** Maximum single-column form width: `max-w-md` (480px)

```tsx
{
  /* Complete form structure */
}
;<form className="max-w-md space-y-8">
  {/* Form group 1 */}
  <div className="space-y-4">
    <div className="space-y-1">
      <label className="block text-sm font-semibold">Email</label>
      <input className="w-full rounded-sm border px-3 py-2" />
    </div>

    <div className="space-y-1">
      <label className="block text-sm font-semibold">Password</label>
      <input type="password" className="w-full rounded-sm border px-3 py-2" />
    </div>
  </div>

  {/* Form group 2 */}
  <div className="space-y-4">
    <div className="space-y-2">
      <label className="flex items-center gap-2">
        <input type="checkbox" className="rounded-sm" />
        <span className="text-sm">Remember me</span>
      </label>

      <label className="flex items-center gap-2">
        <input type="checkbox" className="rounded-sm" />
        <span className="text-sm">Send me updates</span>
      </label>
    </div>
  </div>
</form>
```

#### Columns

**🔴 BOUNDARY:** Never use multi-column forms - they interrupt vertical momentum.

**🔴 COMMAND:** Keep single-column layout where each row is one form element.

**Exception:** If multi-column is required (e.g., address forms):

**🔴 COMMAND:** Horizontal spacing between columns: `gap-2` (8px)

```tsx
{
  /* Multi-column exception: address form */
}
;<div className="grid grid-cols-2 gap-2">
  <div className="space-y-1">
    <label className="block text-sm font-semibold">City</label>
    <input className="w-full rounded-sm border px-3 py-2" />
  </div>

  <div className="space-y-1">
    <label className="block text-sm font-semibold">ZIP</label>
    <input className="w-full rounded-sm border px-3 py-2" />
  </div>
</div>
```

#### Input Width

**🟡 DIRECTIVE:** Input width should reflect expected input length.

**🟡 DIRECTIVE:** If expected length is unknown, inputs may fill parent width in single-column layouts.

```tsx
{
  /* Short expected input */
}
;<input className="max-w-xs rounded-sm border px-3 py-2" placeholder="Age" />

{
  /* Unknown length - full width */
}
;<input className="w-full rounded-sm border px-3 py-2" placeholder="Address" />
```

---

### 7.5 Form Actions (Buttons)

#### Alignment

**🔴 COMMAND:** Left-align buttons by default.

**Exception:** Right-align when:

- Inside wizard/multi-step form
- Inside modal or overlay

```tsx
{
  /* Left-aligned (default) */
}
;<div className="flex gap-2">
  <button className="bg-violet-500 px-3 py-2 text-white">Submit</button>
  <button className="border px-3 py-2">Cancel</button>
</div>

{
  /* Right-aligned (modal/wizard) */
}
;<div className="flex justify-end gap-2">
  <button className="border px-3 py-2">Back</button>
  <button className="bg-violet-500 px-3 py-2 text-white">Next</button>
</div>
```

#### Spacing

**🔴 COMMAND:** Vertical spacing between form elements and buttons: `space-y-8` (32px)

**🔴 COMMAND:** Horizontal spacing between buttons: `gap-2` (8px)

```tsx
<form className="space-y-8">
  <div className="space-y-4">{/* Form fields */}</div>

  <div className="flex gap-2">
    <button className="bg-violet-500 px-3 py-2">Submit</button>
    <button className="border px-3 py-2">Cancel</button>
  </div>
</form>
```

#### Emphasis and Order

**🔴 COMMAND:** Main action uses accent emphasis (solid background).

**🔴 COMMAND:** Secondary actions use minimal emphasis (outline or ghost).

**🔴 COMMAND:** If left-aligned: main action first

**🔴 COMMAND:** If right-aligned: main action last

```tsx
{
  /* Left-aligned: primary first */
}
;<div className="flex gap-2">
  <button className="bg-violet-500 px-3 py-2 text-white">Save</button>
  <button className="border px-3 py-2">Cancel</button>
</div>

{
  /* Right-aligned: primary last */
}
;<div className="flex justify-end gap-2">
  <button className="border px-3 py-2">Cancel</button>
  <button className="bg-violet-500 px-3 py-2 text-white">Save</button>
</div>
```

---

### 7.6 Validation and Errors

#### Showing Errors

**🔴 COMMAND:** Form elements in error state must show error message explaining the issue.

**🔴 COMMAND:** Error messages must be clear and actionable.

**🔴 COMMAND:** Errors must be resolved before form submission succeeds.

```tsx
{
  /* Field with error */
}
;<div className="space-y-1">
  <label className="block text-sm font-semibold text-gray-900">
    Email <span className="text-red-500">*</span>
  </label>
  <input
    type="email"
    aria-invalid="true"
    aria-describedby="email-error"
    className="w-full rounded-sm border-2 border-red-500 px-3 py-2"
  />
  <p id="email-error" className="text-sm text-red-600">
    Please enter a valid email address
  </p>
</div>
```

**🟡 DIRECTIVE:** Write error messages thoughtfully - they reduce frustration when done well.

#### Validation Timing

##### On Submit (Default)

**🔴 COMMAND:** Always validate complete form on submission.

**🔴 COMMAND:** On validation failure, focus and scroll first invalid field into viewport.

**🔴 COMMAND:** After first failed submission, provide immediate validation on subsequent changes.

**🔴 BOUNDARY:** Never block submission by disabling submit button - let users submit, then show errors.

```tsx
{
  /* Submit button never disabled */
}
;<button type="submit" className="bg-violet-500 px-3 py-2 text-white hover:bg-violet-600">
  Submit
</button>
```

**🟡 DIRECTIVE:** If server-side validation takes time, disable fields and show loading state on submit button to prevent multiple submissions.

##### Immediate Validation

**🟡 DIRECTIVE:** Only validate immediately when:

- User finishes input and focus leaves field
- Field is already invalid and user is fixing it (provide live feedback)

**🔴 BOUNDARY:** Never validate while user is actively typing in an empty/pristine field.

```tsx
{
  /* Validate on blur */
}
;<input type="email" onBlur={validateEmail} className="rounded-sm border px-3 py-2" />
```

---

### 7.7 Complete Form Pattern

```tsx
<form className="max-w-md space-y-8">
  {/* Personal info group */}
  <div className="space-y-4">
    <h2 className="text-lg font-semibold">Personal Information</h2>

    <div className="space-y-1">
      <label className="block text-sm font-semibold text-gray-900">
        Full name <span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        className="w-full rounded-sm border border-gray-300 px-3 py-2 focus:outline focus:outline-2 focus:outline-violet-500"
      />
    </div>

    <div className="space-y-1">
      <label className="block text-sm font-semibold text-gray-900">
        Email <span className="text-red-500">*</span>
      </label>
      <input
        type="email"
        className="w-full rounded-sm border border-gray-300 px-3 py-2 focus:outline focus:outline-2 focus:outline-violet-500"
      />
      <p className="text-sm text-gray-600">We'll never share your email</p>
    </div>
  </div>

  {/* Preferences group */}
  <div className="space-y-4">
    <h2 className="text-lg font-semibold">Preferences</h2>

    <div className="space-y-2">
      <label className="flex items-center gap-2">
        <input type="checkbox" className="rounded-sm" />
        <span className="text-sm">Send me product updates</span>
      </label>

      <label className="flex items-center gap-2">
        <input type="checkbox" className="rounded-sm" />
        <span className="text-sm">Send me marketing emails</span>
      </label>
    </div>
  </div>

  {/* Actions */}
  <div className="flex gap-2">
    <button
      type="submit"
      className="rounded-sm bg-violet-500 px-3 py-2 font-semibold text-white hover:bg-violet-600 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-violet-500"
    >
      Create account
    </button>
    <button
      type="button"
      className="rounded-sm border border-gray-300 px-3 py-2 font-semibold text-gray-700 hover:bg-gray-50"
    >
      Cancel
    </button>
  </div>
</form>
```

---

#### Empty, loading, success and error states

#### Search and filter

#### Tables, graphs and charts

---

**End of Playbook v1.0.0**
