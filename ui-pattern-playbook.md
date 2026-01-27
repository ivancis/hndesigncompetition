# `ui-pattern-playbook.md`

**Version 1.0.0**  
January 2026

> **Note:**  
> This document is for humans and AI agents (Cursor, Claude Code, Codex) to follow when maintaining,  
> generating, or refactoring React codebases with TailwindCSS.  
> It is optimized for automation and can be referenced into `AGENTS.md`.

---

## Table of Contents

1. [Executive Directive](#1-executive-directive)
2. [Typography](#2-typography)
3. [Spacing System](#3-spacing-system)
4. [Layouts](#4-layouts)
5. [Visual Styles](#5-visual-styles)
6. [Status and Health](#6-status-and-health)
7. [Accessibility](#7-accessibility)
8. [Navigation](#8-navigation)
9. [Forms](#9-forms)
10. [Common Actions](#10-common-actions)
11. [Disabled States](#11-disabled-states)
12. [Empty States](#12-empty-states)
13. [Loading States](#13-loading-states)
14. [Modal Patterns](#14-modal-patterns)
15. [Voice Agent Builder Patterns](#15-voice-agent-builder-patterns)
16. [AI Instructions + Global Rules](#16-ai-instructions--global-rules)
17. [Quick Reference](#17-quick-reference)

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

**🔴 BOUNDARY:** Never use straight quotes `"` - always use curly quotes `"` `"`

**🔴 COMMAND:** Use non-breaking space `&nbsp;` between number and unit

```tsx
{/* Correct */}
<p>Loading… please wait</p>
<p>She said, "Hello world."</p>
<p>File size: 10&nbsp;MB</p>

{/* Wrong */}
<p>Loading... please wait</p>
<p>She said, "Hello world."</p>
<p>File size: 10 MB</p>
```

---

### 2.5 Voice and Tone

#### Tone Principles

**🔴 COMMAND:** Be clear and concise - describe with precision, omit unnecessary details.

**🔴 COMMAND:** Be concrete and decisive - provide examples and data, state outcomes clearly.

**🔴 COMMAND:** Be honest and transparent - don't sugarcoat bad news or take undue credit.

**🔴 COMMAND:** Be pragmatic - explain issues and share solutions, anticipate questions.

**🔴 COMMAND:** Be direct - address users clearly in straightforward declarative sentences.

**🟡 DIRECTIVE:** Use simple tenses (past, present, future) - avoid progressive tenses.

---

#### Active Voice

**🔴 COMMAND:** Write in active voice by default.

**Structure:** `[Subject] + [Verb] + [Object]`

```tsx
{/* Correct: active voice */}
<p>The system identified the problem.</p>
<p>The team investigated the incident.</p>
<p>All formats support the same request payloads.</p>

{/* Wrong: passive voice */}
<p>The problem was identified by the system.</p>
<p>The incident was investigated by the team.</p>
<p>The same request payloads are supported in all formats.</p>
```

**🟡 DIRECTIVE:** Active voice conveys authority and transparency - easier to read and translate.

---

#### When to Use Passive Voice

**🟡 DIRECTIVE:** Use passive voice when the actor is less important than the action, especially in:

- Warnings
- System messages
- Glossary definitions

```tsx
{/* Acceptable: passive voice */}
<p>Deletion cannot be reversed.</p>
<p>An alert was triggered when the threshold was exceeded.</p>
<p>The &lt;domain&gt;\&lt;username&gt; format is not supported.</p>
```

---

### 2.6 Contractions

**🟡 COMMAND:** Use common contractions for conversational tone.

**Allowed contractions:**

```
I'm, it's, what's, that's, we're, they're, let's
aren't, can't, don't, isn't, didn't, wasn't, doesn't, hasn't, haven't
```

**🔴 BOUNDARY:** Never use these awkward contractions:

```
it'll, it'd, they'd, there'd, mustn't, shan't
would've, could've, should've, needn't, mayn't, who'd
```

```tsx
{/* Correct */}
<p>We're processing your request. It will be ready soon.</p>
<p>The service isn't available right now.</p>

{/* Wrong: awkward contraction */}
<p>It'll be ready soon.</p>
<p>You should've completed this earlier.</p>
```

---

### 2.7 Industry Terminology

Standard terminology for consistent interface language.

#### Affect vs Effect

**🔴 COMMAND:** "affect" = verb (to influence or cause change)

**🔴 COMMAND:** "effect" = noun (the result of a change)

```tsx
{/* Correct */}
<p>This change might affect performance.</p>
<p>The update affects all users.</p>
<p>This might have an effect on performance.</p>
<p>The effects of the changes were significant.</p>

{/* Wrong */}
<p>This change might effect performance.</p>
<p>This might have an affect on performance.</p>
```

---

#### After vs Once

**🔴 COMMAND:** Use "after" instead of "once"

```tsx
{/* Correct */}
<p>After you install the software, you can adjust the settings.</p>
<p>After saving, the changes will be visible.</p>

{/* Wrong */}
<p>Once you install the software, you can adjust the settings.</p>
<p>Once saved, the changes will be visible.</p>
```

---

#### Click vs Select

**🔴 COMMAND:** Use "click" only for mouse actions

**🔴 COMMAND:** Use "select" for device-agnostic instructions

```tsx
{/* Correct: device-agnostic */}
<p>Select <strong>Save</strong>.</p>
<p>Select the <strong>Enable</strong> checkbox.</p>
<p>Select the <strong>Monthly</strong> radio button.</p>
<p>Select <strong>Continue</strong> on your mobile device.</p>

{/* Correct: mouse-specific */}
<p>Right-click <strong>File</strong>.</p>
<p>Double-click <strong>Setup.exe</strong>.</p>
<p>Hover over the image and click with your mouse.</p>

{/* Wrong: mouse terminology on mobile */}
<p>Click <strong>Submit</strong> on your mobile device.</p>
<p>Double-click the button.</p>
```

---

#### Configure vs Adjust

**🔴 COMMAND:** "configure" = arranging components during installation/setup

**🔴 COMMAND:** "adjust" = changing settings after deployment

```tsx
{/* Correct: during setup */}
<p>Configure your environment settings before deployment.</p>
<p>Configure workflow rules during installation.</p>

{/* Correct: after deployment */}
<p>You can adjust the settings later if needed.</p>
<p>Adjust your preferences in the Settings menu.</p>

{/* Wrong: mismatched context */}
<p>Adjust your environment settings before deployment.</p>
<p>Configure the settings in the future if you change your mind.</p>
```

---

### 2.8 Terminology Quick Reference

```
WORD PAIRS
affect (verb)       → to influence or cause change
effect (noun)       → result of a change

after              → use instead of "once"
once               → avoid, use "after"

click              → mouse actions only
select             → device-agnostic (preferred)

configure          → setup/installation phase
adjust             → post-deployment changes
```

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

**🔴 COMMAND:** Icon + label buttons and chips must use `gap-2` (8px).

**🔴 COMMAND:** For icon + label buttons and chips, use horizontal padding one step larger than vertical (example: `px-3 py-2`).

**🔴 COMMAND:** Icon + label combinations must have similar visual weight. Use `text-lg leading-5` (18px font-size, 20px line-height) for labels to match icon height (typically 20px). This ensures the first line aligns with the icon even when text wraps.

```tsx
<button className="inline-flex items-center gap-2 rounded-sm bg-gray-900 px-3 py-2 text-sm font-semibold text-white">
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M4 3.5L12 8L4 12.5V3.5Z" fill="currentColor" />
  </svg>
  Play
</button>

<span className="inline-flex items-center gap-2 rounded-sm border border-gray-200 bg-gray-50 px-3 py-2 text-sm font-semibold text-gray-700">
  <span className="inline-flex rounded-full bg-gray-400 p-1" aria-hidden="true" />
  Status
</span>
```

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

#### Header label + icon

**🔴 COMMAND:** When a header (section title, card title, or similar) includes both a label and an icon, the icon must be placed on the left and aligned to the baseline of the label.

**🔴 COMMAND:** Use `flex items-baseline gap-2` (or `gap-4` if more separation is needed). Icon first, then label.

**🔴 BOUNDARY:** Never place icons to the right of header labels - icons must always be on the left for consistency and visual hierarchy.

```tsx
{
  /* Header with label + icon */
}
;<div className="flex items-baseline gap-2">
  <svg
    className="size-5 shrink-0 text-gray-400"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 2v20M2 12h20" />
  </svg>
  <h2 className="text-xl font-bold">Section Title</h2>
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
  /* Base */
}
;<div className="bg-gray-50 p-12">
  {/* Surface */}
  <div className="rounded-lg border bg-white p-6">
    {/* Container */}
    <div className="rounded-md border bg-gray-50 p-4">
      <div className="space-y-1">
        <h2 className="text-xl font-bold">Unsaved changes</h2>
        <p className="text-sm text-gray-600">
          You have unsaved changes. Save before you leave to avoid losing work.
        </p>
      </div>
      <div className="mt-4 flex justify-end gap-2 border-t pt-3">
        {/* Field */}
        <button className="rounded-sm border border-gray-200 bg-white px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100">
          Keep editing
        </button>
        {/* Field */}
        <button className="rounded-sm bg-gray-900 px-3 py-2 text-sm font-semibold text-white hover:bg-gray-800">
          Save changes
        </button>
      </div>
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

````tsx
{/* Badge: small */}
<span className="rounded-sm bg-blue-100 p-2 text-sm">New</span>

{/* Button: small */}
<button className="rounded-sm bg-blue-600 px-3 py-2 text-white">Submit</button>

{/* Card: large */}
<div className="rounded-lg border p-6">
  <h3>Card Title</h3>
  <p>Card content...</p>
</div>
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
````

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

**🟡 DIRECTIVE:** For detailed disabled state patterns, see [Section 11: Disabled States](#11-disabled-states).

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

#### Pattern: Icon-Only Button

**🔴 COMMAND:** Buttons with a single icon (no text label) must render as a perfect square, matching its height.

**🔴 COMMAND:** Use equal padding on all sides (e.g., `p-2` for a 32px square button, `p-3` for a 40px square button).

**🔴 COMMAND:** Ensure the button meets minimum touch target size requirements (44×44px minimum for accessibility).

```tsx
{
  /* Icon-only close button - perfect square */
}
;<button
  type="button"
  className="flex h-10 w-10 items-center justify-center rounded-sm text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-gray-500"
  aria-label="Close"
>
  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
</button>
```

---

## 6. Status and Health

### 6.1 Overview

Status communicates the health of a system, process, or object. Use consistent, accessible indicators so users can assess conditions quickly.

**🔴 COMMAND:** Follow WCAG 2.1 AA accessibility guidelines.  
**🔴 BOUNDARY:** Never use color alone to convey status.

---

### 6.2 Status Levels

**🔴 COMMAND:** Use only these five universal status levels:

```
1. Ideal    →  emerald  →  Success, desired result
2. Good     →  indigo   →  Informative, minor issues, new features
3. Neutral  →  slate    →  Inactive, undefined, unessential
4. Warning  →  amber    →  Potential issues, attention needed
5. Critical →  red     →  Failed, immediate attention required
```

---

### 6.3 Status Color Tokens

**🔴 COMMAND:** Use these exact Tailwind color tokens for status:

**Default emphasis:**

```
Ideal:    text-emerald-600  bg-emerald-50  border-emerald-200
Good:     text-indigo-600   bg-indigo-50   border-indigo-200
Neutral:  text-slate-600    bg-slate-50    border-slate-200
Warning:  text-amber-600    bg-amber-50    border-amber-200
Critical: text-red-600     bg-red-50     border-red-200
```

**Emphasized (more contrast):**

```
Ideal:    text-emerald-700  bg-emerald-100  border-emerald-300
Good:     text-indigo-700   bg-indigo-100   border-indigo-300
Neutral:  text-slate-700    bg-slate-100    border-slate-300
Warning:  text-amber-700    bg-amber-100    border-amber-300
Critical: text-red-700     bg-red-100     border-red-300
```

**Accent (highest contrast):**

```
Ideal:    text-emerald-900  bg-emerald-200  border-emerald-500
Good:     text-indigo-900   bg-indigo-200   border-indigo-500
Neutral:  text-slate-900    bg-slate-200    border-slate-500
Warning:  text-amber-900    bg-amber-200    border-amber-500
Critical: text-red-900     bg-red-200     border-red-500
```

---

### 6.4 Status Mapping Examples

Map universal levels to your context:

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

**🟡 DIRECTIVE:** Use only the levels your context needs.

---

### 6.5 Accessibility Requirements

**🔴 COMMAND:** Status must be communicated through at least two of:

- Color
- Icon
- Shape
- Text

**🔴 COMMAND:** Icon-only and shape-only indicators must include `aria-label`.

```tsx
{
  /* Color + Icon + Text */
}
;<div className="flex items-center gap-2 text-emerald-600">
  <CheckCircle aria-hidden="true" />
  <span className="text-sm font-semibold">Healthy</span>
</div>

{
  /* Color + Shape + aria-label */
}
;<div className="inline-flex rounded-full bg-emerald-100 p-1" role="status" aria-label="Healthy" />
```

---

### 6.6 When to Show Status

**🔴 COMMAND:** Always show status for:

- Warnings
- Critical conditions

**🟡 DIRECTIVE:** Show ideal status to reassure users when appropriate.  
**🔴 BOUNDARY:** Avoid flooding the UI with non-critical status.

**🔴 COMMAND:** Prioritize negative over positive status when both exist.

```tsx
<div className="space-y-2">
  <StatusIndicator level="critical">3 failed services</StatusIndicator>
  <StatusIndicator level="ideal">12 healthy services</StatusIndicator>
</div>
```

---

### 6.7 Where to Show Status

**🔴 COMMAND:** Place status indicators to support reading flow (top-left before bottom-right).  
**🔴 COMMAND:** Section-level status goes next to the section heading.  
**🔴 COMMAND:** Element-level status sits adjacent to the element.

```tsx
{
  /* Section-level status */
}
;<section className="space-y-4">
  <div className="flex items-center justify-between">
    <h2 className="text-xl font-bold">Services</h2>
    <div className="flex items-center gap-2 text-red-600">
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

### 6.8 Communicating Status Changes

**🟡 DIRECTIVE:** Use a toast for important status changes.  
**🔴 BOUNDARY:** Do not toast every change.  
**🟡 DIRECTIVE:** For minor changes, update the indicator only.

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

### 6.9 Status Component Patterns

#### Pattern: Health Indicator (Subtle)

Subtle status for systems, processes, or objects.

**🔴 COMMAND:** Use shape or icon as the visual.
**🔴 COMMAND:** Must be accessible (color + shape/icon + label or aria-label).

```tsx
{
  /* Shape-based health indicator */
}
;<div className="flex items-center gap-2">
  <div className="inline-flex rounded-full bg-emerald-100 p-1" role="status" aria-label="Healthy" />
  <span className="text-sm text-slate-900">API Service</span>
</div>

{
  /* Icon-based health indicator */
}
;<div className="flex items-center gap-2">
  <div className="inline-flex rounded-full bg-emerald-600" aria-hidden="true" />
  <span className="text-sm font-semibold text-emerald-600">Healthy</span>
</div>
```

#### Pattern: Chip (Prominent Tag)

**🔴 COMMAND:** Chip padding: `p-2`  
**🔴 COMMAND:** Chip text: `text-sm font-semibold`  
**🔴 COMMAND:** Chip radius: `rounded-sm`

**🔴 COMMAND:** When a chip/badge/tag has an icon as the first element (leftmost), add extra left padding (`pl-3` or `pl-2.5`) to compensate for visual weight and ensure balanced spacing.

**🟡 EXCEPTION:** When the container is fully rounded (`rounded-full`), do NOT add extra left padding - use standard padding (`px-2.5` or `px-3`) instead, as the fully rounded shape already provides visual balance.

```tsx
{
  /* Chip with icon first - extra left padding */
}
;<span className="inline-flex items-center gap-2 rounded-sm bg-emerald-50 py-2 pr-2 pl-3 text-sm font-semibold text-emerald-700">
  <div className="inline-flex h-2 w-2 rounded-full bg-emerald-600" aria-hidden="true" />
  Completed
</span>

{
  /* Chip without icon - standard padding */
}
;<span className="inline-flex items-center rounded-sm bg-emerald-50 px-2 py-2 text-sm font-semibold text-emerald-700">
  Completed
</span>

{
  /* Fully rounded chip with icon - NO extra left padding (exception) */
}
;<span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-2.5 py-0.5 text-sm font-medium text-emerald-700">
  <div className="inline-flex h-2 w-2 rounded-full bg-emerald-600" aria-hidden="true" />
  Completed
</span>
```

#### Pattern: Message Container

**🔴 COMMAND:** Container padding: `p-4`  
**🔴 COMMAND:** Use icon + title + description structure  
**🔴 COMMAND:** Use semantic color variants

```tsx
<div className="flex gap-3 rounded-md border-2 border-red-300 bg-red-100 p-4">
  <div className="inline-flex flex-shrink-0 rounded-full bg-red-700" aria-hidden="true" />
  <div className="space-y-1">
    <h3 className="text-sm font-semibold text-red-700">Service Unavailable</h3>
    <p className="text-sm text-red-700">
      The API service is currently down. Our team has been notified and is working on a fix.
    </p>
  </div>
</div>
```

#### Pattern: Toast Notification

**🔴 COMMAND:** Toast padding: `p-4`  
**🔴 COMMAND:** Auto-dismiss non-critical toasts after 5-7 seconds  
**🔴 COMMAND:** Critical toasts must be manually dismissible

```tsx
<div className="flex items-center gap-3 rounded-md bg-emerald-200 p-4 text-emerald-900 shadow-lg">
  <CheckCircle aria-hidden="true" />
  <span className="text-sm font-semibold">Changes saved successfully</span>
</div>
```

#### Pattern: Information Overlay

**🔴 COMMAND:** Triggered by a status icon with label  
**🔴 COMMAND:** Overlay shows additional context

```tsx
<button className="flex items-center gap-1 text-sm text-amber-700 hover:text-amber-800">
  <AlertTriangle aria-hidden="true" />
  <span>2 warnings</span>
</button>
```

---

### 6.10 Other Status Indicators

#### Status Highlights

**🔴 COMMAND:** Use `border-l-4` for vertical highlight  
**🔴 BOUNDARY:** Must be accompanied by another indicator for accessibility

```tsx
<div className="flex items-center gap-3 border-l-4 border-amber-300 bg-amber-100 p-4">
  <AlertTriangle className="text-amber-600" aria-hidden="true" />
  <div>
    <p className="text-sm font-semibold text-amber-700">Database backup pending</p>
    <p className="text-sm text-amber-700">Last backup: 36 hours ago</p>
  </div>
</div>
```

#### Trend Indicators

**🔴 COMMAND:** Use for reporting, not predictions  
**🔴 COMMAND:** Label must clarify if trend is positive or negative  
**🔴 BOUNDARY:** Do not rely on color alone

```tsx
<div className="flex items-center gap-2">
  <span className="text-2xl font-bold text-slate-900">3.2%</span>
  <div className="flex items-center gap-1 text-red-600">
    <TrendingUp aria-hidden="true" />
    <span className="text-sm font-semibold">+1.2%</span>
  </div>
  <span className="text-sm text-slate-600">error rate</span>
</div>
```

---

### 6.11 Complete Status Dashboard Example

```tsx
<div className="space-y-6">
  <div className="flex items-center justify-between">
    <h1 className="text-3xl font-bold">System Health</h1>
    <div className="flex items-center gap-2 text-amber-600">
      <AlertTriangle aria-hidden="true" />
      <span className="font-semibold">2 warnings</span>
    </div>
  </div>

  <div className="flex gap-3 rounded-md border-2 border-red-300 bg-red-100 p-4">
    <AlertCircle className="flex-shrink-0 text-red-700" aria-hidden="true" />
    <div className="space-y-1">
      <h3 className="text-sm font-semibold text-red-700">Payment Service Down</h3>
      <p className="text-sm text-red-700">Immediate attention required. Incident #1234 created.</p>
    </div>
  </div>
</div>
```

---

### 6.12 Status Color Quick Reference

```
STATUS COLORS (Default)
Ideal:    emerald-600  emerald-50  emerald-200
Good:     indigo-600   indigo-50   indigo-200
Neutral:  slate-600    slate-50    slate-200
Warning:  amber-600    amber-50    amber-200
Critical: red-600     red-50     red-200

STATUS COLORS (Emphasized)
Ideal:    emerald-700  emerald-100  emerald-300
Good:     indigo-700   indigo-100   indigo-300
Neutral:  slate-700    slate-100    slate-300
Warning:  amber-700    amber-100    amber-300
Critical: red-700     red-100     red-300

STATUS COLORS (Accent)
Ideal:    emerald-900  emerald-200  emerald-500
Good:     indigo-900   indigo-200   indigo-500
Neutral:  slate-900    slate-200    slate-500
Warning:  amber-900    amber-200    amber-500
Critical: red-900     red-200     red-500
```

---

## 7. Accessibility

### 7.1 Nested Interactivity & DOM Flattening

#### 7.1.1 BOUNDARY: Structural Constraints

- **Forbidden Nesting:** An interactive element (Parent) **must never** contain another interactive element (Child).
- **Target Elements:** `<a>`, `<button>`, `<details>`, `<input>`, `<select>`, `<textarea>`, and any element with `tabindex="0"`.
- **WCAG Mapping:** Direct violation of **4.1.1 (Parsing)**, **2.1.1 (Keyboard)**, and **4.1.2 (Name, Role, Value)**.

#### 7.1.2 DIRECTIVE: The "Stretched Sibling" Pattern

When a container (e.g., a Card) requires a primary click area plus secondary internal actions, agents must apply the following logic:

1. **Flatten:** Place the primary link and secondary buttons as **siblings** in the DOM.
2. **Expand:** Use a CSS `::after` pseudo-element on the primary link, set to `position: absolute` with inset `0`, to cover the parent container.
3. **Layer:** Apply `position: relative` and a higher `z-index` to the secondary buttons to ensure they remain "on top" of the primary link's hit area.

---

## 8. Navigation

### 8.1 Overview

Navigation provides predictable ways for users to move through your app. Consistent navigation patterns and logical information structure are essential for usability.

**🔴 COMMAND:** Use links for navigation whenever the URL changes.

**🔴 BOUNDARY:** Never use buttons for navigation - this violates accessibility standards (WCAG 2.1).

---

### 8.2 Navigation Hierarchy Types

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

### 8.3 Navigation Levels

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

### 8.4 Navigation Components

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

## 9. Forms

### 9.1 Overview

Forms gather input from users and allow configuration of options. Well-designed forms reduce friction and errors.

---

### 9.2 Form Element Anatomy

Every form element consists of up to four parts:

1. **Label** (required)
2. **Input value** (or placeholder/default)
3. **Hint** (optional)
4. **Error message** (when invalid)

---

### 9.3 Form Element Components

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
  className="rounded-sm border border-gray-300 px-3 py-2 placeholder:text-gray-500"
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

### 9.4 Form Layout

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

### 9.5 Form Actions (Buttons)

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

### 9.6 Validation and Errors

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

### 9.7 Complete Form Pattern

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

## 10. Common Actions

### 10.1 Overview

Use consistent patterns and clear labeling to reduce uncertainty and guide users effectively.

**🔴 COMMAND:** Action labels must be descriptive and specific (e.g., "Delete account" not "OK").

**🟡 DIRECTIVE:** Consider these questions for every action:

- What are the implications? (financial, access, legal)
- Does the user have correct permissions to perform this action?
- Is the action permanent or reversible?
- What timeframe will it take? (seconds, minutes, hours)
- What happens if the action fails?
- Is this a single or bulk action?

---

### 10.2 Action Patterns

#### Add

**Use for:** Inserting an existing object to a list, set, or system.

**🔴 COMMAND:** Button emphasis depends on importance:

- High emphasis: Primary button
- Medium/Low emphasis: Secondary button

```tsx
{
  /* High emphasis add */
}
;<button className="flex items-center gap-2 rounded-sm bg-indigo-600 px-3 py-2 text-white hover:bg-indigo-700">
  <Plus width="16" height="16" aria-hidden="true" />
  Add document
</button>

{
  /* Low emphasis add */
}
;<button className="flex items-center gap-2 rounded-sm border px-3 py-2 text-sm hover:bg-slate-50">
  <Plus width="16" height="16" aria-hidden="true" />
  Add
</button>
```

---

#### Cancel

**Use for:** Stopping current action and closing component.

**🔴 COMMAND:** Use secondary button or link for cancel actions.

**🔴 COMMAND:** Warn user of negative consequences (data loss, data corruption).

```tsx
{
  /* Cancel in modal */
}
;<div className="flex justify-end gap-2">
  <button className="rounded-sm border px-3 py-2 hover:bg-slate-50">Cancel</button>
  <button className="rounded-sm bg-indigo-600 px-3 py-2 text-white">Save changes</button>
</div>
```

---

#### Clear

**Use for:** Removing data from fields or selections.

**🔴 COMMAND:** Use close icon (X) on right side of field.

**🟡 DIRECTIVE:** For controls with defaults (radio buttons), reset to default value.

```tsx
{
  /* Clear in search field */
}
;<div className="relative">
  <input className="w-full rounded-sm border pr-8" />
  <button className="absolute top-1/2 right-2 -translate-y-1/2">
    <X width="16" height="16" className="text-slate-400" aria-hidden="true" />
  </button>
</div>
```

---

#### Close

**Use for:** Terminating page, window, or menu. Dismissing notifications.

**🔴 COMMAND:** Use close icon (X), typically upper right.

**🔴 BOUNDARY:** Never use "close" in a button - use icon only.

```tsx
{
  /* Close in toast */
}
;<div className="flex items-center justify-between gap-3 rounded-md bg-slate-900 p-4 text-white">
  <span>Action completed</span>
  <button className="rounded-sm p-1 hover:bg-slate-800">
    <X width="16" height="16" aria-hidden="true" />
  </button>
</div>
```

---

#### Copy

**Use for:** Creating new identical instance of selected object(s).

**🔴 COMMAND:** Use copy icon with "Copied" confirmation tooltip.

```tsx
{
  /* Copy code snippet */
}
;<div className="relative">
  <pre className="rounded-md bg-slate-900 p-4">
    <code>npm install package</code>
  </pre>
  <button
    className="absolute top-2 right-2 rounded-sm p-1.5 hover:bg-slate-800"
    aria-label="Copy to clipboard"
  >
    <Copy width="16" height="16" className="text-slate-400" aria-hidden="true" />
  </button>
</div>
```

---

#### Delete

**Use for:** Destroying an object permanently.

**🔴 COMMAND:** Delete actions use:

- Delete or trash icon
- Danger button styling
- Danger option in menu

**🔴 COMMAND:** Warn user of negative consequences (data loss).

**Impact levels:**

**Low-impact deletion:**

- Trivial to undo or recreate
- Delete immediately without warning

**Moderate-impact deletion:**

- Cannot undo or recreate easily
- Ask for confirmation with explanation

**High-impact deletion:**

- Very expensive or time-consuming to recreate
- Large amount of data deleted
- Require typed confirmation (manual verification)

```tsx
{
  /* Low-impact: immediate deletion */
}
;<button className="rounded-sm p-1 text-red-600 hover:bg-red-50">
  <Trash2 width="16" height="16" aria-hidden="true" />
</button>

{
  /* Moderate-impact: confirmation dialog */
}
;<div className="rounded-md border p-4">
  <h3 className="font-semibold">Delete 3 items?</h3>
  <p className="text-sm text-slate-600">This action cannot be undone.</p>
  <div className="mt-4 flex gap-2">
    <button className="rounded-sm border px-3 py-2">Cancel</button>
    <button className="rounded-sm bg-red-600 px-3 py-2 text-white">Delete</button>
  </div>
</div>

{
  /* High-impact: typed confirmation */
}
;<div className="space-y-4">
  <p className="text-sm">
    Type <strong>delete-production-db</strong> to confirm
  </p>
  <input className="w-full rounded-sm border px-3 py-2" />
  <button disabled className="rounded-sm bg-red-600 px-3 py-2 text-white disabled:opacity-50">
    Delete database
  </button>
</div>
```

**Post-deletion:**

**🔴 COMMAND:** After deletion, return to list page.

**🔴 COMMAND:** Animate removal from list.

**🔴 COMMAND:** Show success notification.

**🔴 COMMAND:** If deletion fails, show error notification and animate data back.

---

#### Edit

**Use for:** Changing data or values.

**🔴 COMMAND:** Offer as menu option, button, or edit icon.

```tsx
{
  /* Edit in overflow menu */
}
;<button className="flex w-full items-center gap-2 px-3 py-2 text-left text-sm hover:bg-slate-50">
  <Edit2 width="16" height="16" aria-hidden="true" />
  Edit
</button>

{
  /* Edit icon button */
}
;<button className="rounded-sm p-1.5 hover:bg-slate-100">
  <Edit2 width="16" height="16" className="text-slate-600" aria-hidden="true" />
</button>
```

---

#### Next

**Use for:** Advancing to next step in sequence (wizards).

**🔴 COMMAND:** Use button with forward icon or standalone forward icon.

```tsx
{
  /* Next button in wizard */
}
;<div className="flex justify-end gap-2">
  <button className="rounded-sm border px-3 py-2">Back</button>
  <button className="flex items-center gap-2 rounded-sm bg-indigo-600 px-3 py-2 text-white">
    Next
    <ChevronRight width="16" height="16" aria-hidden="true" />
  </button>
</div>
```

---

#### Refresh

**Use for:** Reloading view when displayed data is unsynchronized.

**🔴 COMMAND:** Use refresh icon or button.

```tsx
{
  /* Refresh button */
}
;<button className="flex items-center gap-2 rounded-sm border px-3 py-2 text-sm hover:bg-slate-50">
  <RefreshCw width="16" height="16" aria-hidden="true" />
  Refresh
</button>
```

---

#### Remove

**Use for:** Removing object from list (not destroying it).

**🔴 COMMAND:** Use button or subtract/minus icon.

**🟡 DIRECTIVE:** Remove is rarely primary action - avoid over-emphasis.

**🟡 DIRECTIVE:** Clarify difference from delete - removal doesn't destroy data.

```tsx
{
  /* Remove from list */
}
;<button className="flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900">
  <Minus width="16" height="16" aria-hidden="true" />
  Remove from collection
</button>
```

---

#### Reset

**Use for:** Reverting values to last saved state.

**🔴 COMMAND:** Use link styling (not button).

```tsx
{
  /* Reset form */
}
;<button className="text-sm text-indigo-600 underline hover:text-indigo-700">
  Reset to defaults
</button>
```

---

### 10.3 Error Handling

**🔴 COMMAND:** Errors must provide:

- Context of what happened
- Clear path to continue or resolve

**🔴 COMMAND:** Be brief, honest, and supportive.

**🔴 COMMAND:** Maximum length:

- Full-page/large modals: 3 paragraph lines
- Form errors: 2 lines

**🟡 DIRECTIVE:** Consider redirecting to previous state, support page, or offering recommendations.

```tsx
{
  /* Inline form error */
}
;<div className="space-y-1">
  <input aria-invalid="true" className="w-full rounded-md border-2 border-red-500 px-3 py-2" />
  <p className="text-sm text-red-600">Password must be at least 8 characters</p>
</div>

{
  /* Full-page error */
}
;<div className="flex min-h-screen items-center justify-center p-4">
  <div className="max-w-md space-y-4 text-center">
    <AlertCircle width="48" height="48" className="mx-auto text-red-600" aria-hidden="true" />
    <h1 className="text-2xl font-bold">Something went wrong</h1>
    <p className="text-slate-600">
      We couldn't process your request. Please try again or contact support if the problem persists.
    </p>
    <button className="rounded-sm bg-indigo-600 px-3 py-2 text-white">Try again</button>
  </div>
</div>
```

---

## 11. Disabled States

### 11.1 Overview

Disabled states remove interactive function when users cannot interact with component due to permissions, dependencies, or prerequisites.

---

### 11.2 Disabled Variations

**🔴 COMMAND:** Use one of these three variations:

```
1. Default disabled → Cannot interact, not read by screen reader
2. Read-only       → Cannot interact, readable by screen reader
3. Hidden          → Completely hidden from view
```

---

#### Default Disabled

**Use when:** Temporarily disabled due to dependencies or unmet prerequisites.

**🔴 COMMAND:** Component returns to enabled state once conditions are met.

**🔴 BOUNDARY:** Never hide temporarily disabled components.

**Style:**

```
Component:  50% opacity
Text:       25% opacity
Icons:      50% opacity
Hover:      None
Cursor:     not-allowed
```

```tsx
{
  /* Disabled button */
}
;<button
  disabled
  className="rounded-sm bg-indigo-600 px-3 py-2 text-white disabled:cursor-not-allowed disabled:opacity-50"
>
  Submit
</button>

{
  /* Disabled input */
}
;<input
  disabled
  className="rounded-sm border px-3 py-2 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:opacity-50"
/>
```

**🟡 DIRECTIVE:** Show inline warning if disabled item affects multiple items or primary action.

```tsx
<div className="space-y-2">
  <button disabled className="disabled:opacity-50">
    Submit application
  </button>
  <div className="flex gap-2 rounded-md border border-amber-200 bg-amber-50 p-3">
    <AlertTriangle className="h-4 w-4 flex-shrink-0 text-amber-600" />
    <p className="text-sm text-amber-700">Complete all required fields to enable submission</p>
  </div>
</div>
```

---

#### Read-Only

**Use when:** Content is relevant but user cannot change it.

**🔴 COMMAND:** Content must be accessible to screen readers.

**🔴 BOUNDARY:** No interactive indicators (hover states, brand colors, underlines).

```tsx
{
  /* Read-only input */
}
;<input
  readOnly
  value="john@example.com"
  className="rounded-sm border bg-slate-50 px-3 py-2 text-slate-600"
/>

{
  /* Read-only text */
}
;<p className="text-sm text-slate-600">
  Account ID: <span className="font-mono">abc-123-def</span>
</p>
```

---

#### Hidden

**Use when:** User lacks permission to view, interact, or take action.

**🔴 COMMAND:** Completely remove from UI.

**🟡 DIRECTIVE:** Only way to reveal is changing assigned permissions.

```tsx
{
  /* Conditionally render based on permissions */
}
{
  hasPermission && (
    <button className="rounded-sm bg-indigo-600 px-3 py-2 text-white">Add member</button>
  )
}
```

---

## 12. Empty States

### 12.1 Overview

Empty states occur when no data is available to display. They keep users informed and guide next steps.

**🟡 DIRECTIVE:** Turn empty states into positive, productive experiences with just enough contextual guidance.

---

### 12.2 Empty State Anatomy

```
┌─────────────────────────────┐
│                             │
│     [Optional Image]        │
│                             │
│     Title                   │
│     Body copy explaining    │
│     next steps              │
│                             │
│     [Primary Action]        │
│                             │
│     [Secondary Link]        │
│                             │
└─────────────────────────────┘
```

**🔴 COMMAND:** Empty state must include:

1. **Title:** Short, positive explanation
2. **Body:** Clear next action or explanation

**🟡 DIRECTIVE:** Optional elements:

- Image (non-interactive, relates to situation)
- Primary action button/link
- Secondary call to action link

---

### 12.3 Empty State Types

#### No Data (First Use)

**Use for:** User hasn't added data yet.

**Goal:** User understands what will appear when data exists and how to add it.

```tsx
{
  /* Basic first-use empty state */
}
;<div className="flex flex-col items-center justify-center p-12 text-center">
  <Database width="48" height="48" className="text-slate-400" aria-hidden="true" />
  <h3 className="mt-4 text-lg font-semibold">No data sources yet</h3>
  <p className="mt-2 text-sm text-slate-600">
    Connect your first data source to start analyzing metrics
  </p>
  <button className="mt-6 rounded-sm bg-indigo-600 px-3 py-2 text-white">Add data source</button>
</div>

{
  /* Alternative: direct to UI element */
}
;<div className="p-12 text-center">
  <h3 className="text-lg font-semibold">No projects yet</h3>
  <p className="mt-2 text-sm text-slate-600">
    Click <strong>New project</strong> in the top right to get started
  </p>
</div>
```

---

#### User Action Result

**Use for:** No results from search, filters, or completed process.

**Goal:** User understands why and knows how to adjust or continue.

```tsx
{
  /* No search results */
}
;<div className="p-12 text-center">
  <Search width="48" height="48" className="mx-auto text-slate-400" aria-hidden="true" />
  <h3 className="mt-4 text-lg font-semibold">No results found</h3>
  <p className="mt-2 text-sm text-slate-600">Try adjusting your search terms or filters</p>
</div>

{
  /* Success confirmation */
}
;<div className="p-12 text-center">
  <CheckCircle width="48" height="48" className="mx-auto text-emerald-600" aria-hidden="true" />
  <h3 className="mt-4 text-lg font-semibold">All caught up!</h3>
  <p className="mt-2 text-sm text-slate-600">No pending notifications</p>
</div>
```

---

#### Error Management

**Use for:** Permissions issue, system error, or configuration required.

**Goal:** User understands problem and knows corrective actions.

```tsx
{
  /* Permissions error */
}
;<div className="p-12 text-center">
  <Lock width="48" height="48" className="mx-auto text-slate-400" aria-hidden="true" />
  <h3 className="mt-4 text-lg font-semibold">Access restricted</h3>
  <p className="mt-2 text-sm text-slate-600">
    You don't have permission to view this data. Contact your administrator to request access.
  </p>
  <a href="/support" className="mt-4 inline-block text-sm text-indigo-600 underline">
    Contact support
  </a>
</div>

{
  /* System error */
}
;<div className="p-12 text-center">
  <AlertCircle width="48" height="48" className="mx-auto text-amber-600" aria-hidden="true" />
  <h3 className="mt-4 text-lg font-semibold">Unable to load data</h3>
  <p className="mt-2 text-sm text-slate-600">
    We're having trouble connecting to the server. Check the activity log for details.
  </p>
  <button className="mt-6 rounded-sm border px-3 py-2">View activity log</button>
</div>
```

---

### 12.4 Empty State Placement

**🔴 COMMAND:** Empty states replace the element that would show (table, list, etc.).

**🔴 BOUNDARY:** Don't show table headers/footers with empty table - replace entire table.

For small spaces (tiles, side panels):

Left-align text and button as block
Exception: Small tiles center image above left-aligned text

```tsx
{
  /* Small tile empty state */
}
;<div className="rounded-lg border p-4">
  <FileQuestion width="32" height="32" className="mx-auto text-slate-400" aria-hidden="true" />
  <h4 className="mt-3 text-sm font-semibold">No files</h4>
  <p className="mt-1 text-xs text-slate-600">Upload your first file to get started</p>
  <button className="mt-3 w-full rounded-sm border px-3 py-2 text-sm">Upload file</button>
</div>
```

For large spaces (full pages, large sections):

Left-align block with wider left margin OR center block
Image can be above text OR to the left

```tsx
{
  /* Full page empty state - centered */
}
;<div className="flex min-h-screen items-center justify-center p-4">
  <div className="max-w-md text-center">
    <Database width="64" height="64" className="mx-auto text-slate-400" aria-hidden="true" />
    <h2 className="mt-6 text-2xl font-bold">No databases configured</h2>
    <p className="mt-3 text-slate-600">
      Connect your first database to start managing your data infrastructure
    </p>
    <button className="mt-6 rounded-sm bg-indigo-600 px-3 py-2 text-white">Connect database</button>
    <a href="/docs" className="mt-4 block text-sm text-indigo-600 underline">
      View documentation
    </a>
  </div>
</div>
```

### 12.5 Empty State Best Practices

**✅ DO:**

Be specific about what will appear when data exists
Keep text minimal and scannable
Provide actionable next steps
Use positive language ("Start by..." vs "You don't have...")
Make primary action fast (link in copy or button)

**❌ DON'T:**

Cover multiple options in one empty state
Use product jargon users may not understand
Include content about other app areas
Lead users to dead ends without next steps
Show multiple identical empty states on same page

**🟡 DIRECTIVE:** If multiple empty states appear simultaneously, use tertiary buttons to avoid visual clutter.

---

## 13. Loading States

### 13.1 Overview

Loading patterns communicate that processes are ongoing and prevent users from thinking the app is frozen.

**🔴 COMMAND:** Use skeleton states for initial page loads.

**🔴 COMMAND:** Use loading indicators for user-triggered actions.

### 13.2 Skeleton States

**Use for:** Initial page load before content appears.

**🔴 COMMAND:** Only appear for a few seconds.

**🔴 COMMAND:** Use on container components (tiles, cards, tables) and data components.

**🔴 BOUNDARY:** Never use skeleton states for:

- Action components (buttons, inputs, checkboxes)
- Toast notifications
- Dropdown items
- Modals
- Overflow menus

```tsx
{
  /* Text skeleton */
}
;<div className="space-y-2">
  <div className="h-4 w-3/4 animate-pulse rounded bg-slate-200" />
  <div className="h-4 w-1/2 animate-pulse rounded bg-slate-200" />
</div>

{
  /* Card skeleton */
}
;<div className="rounded-lg border p-4">
  <div className="h-6 w-32 animate-pulse rounded bg-slate-200" />
  <div className="mt-3 space-y-2">
    <div className="h-4 w-full animate-pulse rounded bg-slate-200" />
    <div className="h-4 w-5/6 animate-pulse rounded bg-slate-200" />
  </div>
</div>

{
  /* Table row skeleton */
}
;<tr>
  <td className="px-4 py-3">
    <div className="h-4 w-24 animate-pulse rounded bg-slate-200" />
  </td>
  <td className="px-4 py-3">
    <div className="h-4 w-32 animate-pulse rounded bg-slate-200" />
  </td>
</tr>
```

### 13.3 Loading Indicators

#### Full-Screen Loading

**Use when:** Entire application is processing after user submission.

**🔴 COMMAND:** Use overlay with loading spinner.

**🟡 DIRECTIVE:** If process takes >few minutes, add notification explaining delay.

```tsx
{
  /* Full-screen loading */
}
;<div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50">
  <div className="rounded-lg bg-white p-8 text-center">
    <Loader2
      width="48"
      height="48"
      className="mx-auto animate-spin text-indigo-600"
      aria-hidden="true"
    />
    <p className="mt-4 font-semibold">Saving changes...</p>
  </div>
</div>
```

#### Inline Loading

**Use when:** Single component is processing.

**🔴 COMMAND:** Show loading state on specific component only.

```tsx
{
  /* Inline loading button */
}
;<button
  disabled
  className="flex items-center gap-2 rounded-sm bg-indigo-600 px-3 py-2 text-white disabled:opacity-75"
>
  <Loader2 width="16" height="16" className="animate-spin" aria-hidden="true" />
  Sending invite...
</button>

{
  /* Inline loading in content area */
}
;<div className="flex items-center gap-2 text-sm text-slate-600">
  <Loader2 width="16" height="16" className="animate-spin" aria-hidden="true" />
  <span>Loading data...</span>
</div>
```

### 13.4 Progressive Loading

**Use when:** Page loads in batches (common for dashboards).

**Load sequence:**

1. First batch: Page structure (skeleton containers) + static text
2. Second batch: Images, content outside viewport
3. Third batch: Interactive components, data-based text

```tsx
{
  /* Phase 1: Skeleton */
}
;<div className="grid grid-cols-3 gap-4">
  <div className="rounded-lg border p-4">
    <div className="h-6 w-32 animate-pulse rounded bg-slate-200" />
    <div className="mt-3 h-24 animate-pulse rounded bg-slate-200" />
  </div>
  {/* More skeleton cards */}
</div>

{
  /* Phase 2: Partial data */
}
;<div className="grid grid-cols-3 gap-4">
  <div className="rounded-lg border p-4">
    <h3 className="text-lg font-semibold">Revenue</h3>
    <div className="mt-3 h-24 animate-pulse rounded bg-slate-200" />
  </div>
</div>

{
  /* Phase 3: Complete */
}
;<div className="grid grid-cols-3 gap-4">
  <div className="rounded-lg border p-4">
    <h3 className="text-lg font-semibold">Revenue</h3>
    <p className="mt-3 text-3xl font-bold">$45,231</p>
  </div>
</div>
```

### 13.5 Load More

**Use when:** Extending lists with large datasets.

**🔴 COMMAND:** Load data in progressive batches on user action.

```tsx
{
  /* Load more button */
}
;<div className="space-y-2">
  {items.map((item) => (
    <Item key={item.id} />
  ))}

  <button className="w-full rounded-sm border px-3 py-2 hover:bg-slate-50">Load more</button>
</div>

{
  /* Load more with loading state */
}
;<button
  disabled={isLoading}
  className="flex w-full items-center justify-center gap-2 rounded-md border px-4 py-2"
>
  {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
  {isLoading ? 'Loading...' : 'Load more'}
</button>
```

### 13.6 Loading Accessibility

**🔴 COMMAND:** Screen reader must announce loading states.

**🔴 COMMAND:** Use aria-live for dynamic loading notifications.

**🔴 COMMAND:** Announce when loading fails.

```tsx
{
  /* Accessible loading indicator */
}
;<div role="status" aria-live="polite">
  {isLoading ? (
    <div className="flex items-center gap-2">
      <Loader2 width="16" height="16" className="animate-spin" aria-hidden="true" />
      <span>Loading data...</span>
    </div>
  ) : (
    <span className="sr-only">Data loaded</span>
  )}
</div>
```

---

## 14. Modal Patterns

### 14.1 Overview

Modals interrupt workflow to capture attention for critical tasks. They prevent users from interacting with the underlying page until dismissed.

**🔴 COMMAND:** Use modals only when user input or acknowledgment is required immediately.

**🔴 BOUNDARY:** Never use modals for:

- Non-critical information
- Complex multi-step workflows (use dedicated pages)
- Content users may need to reference while completing the task

**🟡 DIRECTIVE:** Prefer inline patterns (expandable sections, slide-over panels) when interruption isn't necessary.

---

### 14.2 Modal Anatomy

All modals share this structure:

```tsx
{
  /* Modal overlay + container */
}
;<div
  className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50"
  onClick={handleBackdropClick}
  role="dialog"
  aria-modal="true"
  aria-labelledby="modal-title"
>
  {/* Modal content */}
  <div className="max-w-md rounded-lg bg-white p-6 shadow-xl" onClick={(e) => e.stopPropagation()}>
    {/* Title */}
    <h2 id="modal-title" className="text-xl font-bold">
      Modal Title
    </h2>

    {/* Body */}
    <div className="mt-4">{/* Content */}</div>

    {/* Actions */}
    <div className="mt-6 flex justify-end gap-2">
      <button className="rounded-sm border px-3 py-2">Cancel</button>
      <button className="rounded-sm bg-indigo-600 px-3 py-2 text-white">Confirm</button>
    </div>
  </div>
</div>
```

**🔴 COMMAND:** All modals must include:

- Backdrop overlay (`bg-slate-900/50`)
- Focus trap (keyboard navigation stays within modal)
- `role="dialog"` and `aria-modal="true"`
- `aria-labelledby` pointing to title

---

### 14.3 Universal Modal Rules

#### Escape Behavior

**🔴 COMMAND:** Modals must support these dismissal methods:

- Escape key
- Backdrop click (clicking outside modal)
- Close button (X icon in top-right)
- Cancel/secondary action button

**🔴 BOUNDARY:** Destructive modals require explicit action - disable backdrop click for destructive actions.

```tsx
{
  /* Standard dismissal */
}
const handleEscape = (e: KeyboardEvent) => {
  if (e.key === 'Escape') closeModal()
}

const handleBackdropClick = () => {
  closeModal()
}

{
  /* Destructive action - no backdrop dismiss */
}
const handleBackdropClick = () => {
  // Do nothing - force explicit choice
}
```

#### Focus Management

**🔴 COMMAND:** On open:

1. Set focus to first interactive element (usually primary action)
2. Trap focus within modal (Tab cycles through modal elements only)

**🔴 COMMAND:** On close:

1. Return focus to element that triggered modal

```tsx
import { useEffect, useRef } from 'react'

const Modal = ({ isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (isOpen) {
      // Store trigger element
      triggerRef.current = document.activeElement as HTMLElement

      // Focus first interactive element
      const firstButton = modalRef.current?.querySelector('button')
      firstButton?.focus()
    } else {
      // Return focus to trigger
      triggerRef.current?.focus()
    }
  }, [isOpen])

  // Focus trap implementation
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Tab') {
      const focusableElements = modalRef.current?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )

      if (!focusableElements?.length) return

      const firstElement = focusableElements[0] as HTMLElement
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement

      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault()
        lastElement.focus()
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault()
        firstElement.focus()
      }
    }
  }

  return (
    <div ref={modalRef} onKeyDown={handleKeyDown} role="dialog" aria-modal="true">
      {/* Modal content */}
    </div>
  )
}
```

#### Mobile Behavior

**🔴 COMMAND:** On mobile (< 640px):

- Modal expands to full width with `mx-4` margins (16px)
- Reduce padding to `p-4` (16px)
- Stack buttons vertically with full width

**🟡 DIRECTIVE:** For small screens, prefer bottom sheets or full-page overlays.

```tsx
{
  /* Responsive modal */
}
;<div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4">
  <div className="w-full max-w-md rounded-lg bg-white p-4 shadow-xl sm:p-6">
    <h2 className="text-lg font-bold sm:text-xl">Title</h2>

    <div className="mt-3 sm:mt-4">{/* Content */}</div>

    {/* Mobile: stacked buttons, Desktop: horizontal */}
    <div className="mt-4 flex flex-col gap-2 sm:mt-6 sm:flex-row sm:justify-end">
      <button className="w-full rounded-sm border px-3 py-2 sm:w-auto">Cancel</button>
      <button className="w-full rounded-sm bg-indigo-600 px-3 py-2 text-white sm:w-auto">
        Confirm
      </button>
    </div>
  </div>
</div>
```

---

### 14.4 Modal Pattern Library

---

#### 14.4.1 Confirm/Cancel (High Impact)

**Use for:** Significant actions that aren't destructive but have meaningful consequences.

**Examples:** Publishing content, inviting users, changing settings that affect others.

**Title Formula:** `[Action] [object]?`

**Body Formula:** Explain what will happen + who/what is affected.

**Action Rules:**

- Primary button: Confirms action (indigo/blue)
- Secondary button: "Cancel" (border only)
- Button order: Cancel (left) → Confirm (right)

**Escape Rules:**

- ✅ Escape key closes (treated as Cancel)
- ✅ Backdrop click closes (treated as Cancel)
- ✅ Close button (X) in top-right

**Focus/Keyboard:**

- Initial focus: Primary (Confirm) button
- Tab order: Cancel → Confirm → Close button
- Enter: Activates focused button
- Escape: Cancels

**Mobile Behavior:**

- Stack buttons vertically (Cancel on top)
- Full-width buttons
- Reduce padding to `p-4`

**Anti-patterns:**

- ❌ Don't use for destructive actions (use Destructive pattern instead)
- ❌ Don't include form fields (use dedicated form modal)
- ❌ Don't write vague body text ("Are you sure?")

```tsx
{
  /* Publish confirmation modal */
}
;<div
  className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4"
  role="dialog"
  aria-modal="true"
  aria-labelledby="publish-title"
>
  <div className="w-full max-w-md rounded-lg bg-white p-4 shadow-xl sm:p-6">
    {/* Close button */}
    <button
      onClick={onClose}
      className="absolute top-4 right-4 rounded-sm p-1 hover:bg-slate-100"
      aria-label="Close"
    >
      <X className="h-5 w-5" />
    </button>

    {/* Title */}
    <h2 id="publish-title" className="text-lg font-bold sm:text-xl">
      Publish article?
    </h2>

    {/* Body */}
    <p className="mt-3 text-sm text-slate-600 sm:mt-4">
      This article will be visible to all subscribers immediately. You'll be notified when it's
      published.
    </p>

    {/* Actions */}
    <div className="mt-4 flex flex-col gap-2 sm:mt-6 sm:flex-row sm:justify-end">
      <button
        onClick={onClose}
        className="w-full rounded-sm border border-slate-300 px-3 py-2 hover:bg-slate-50 sm:w-auto"
      >
        Cancel
      </button>
      <button
        onClick={handlePublish}
        className="w-full rounded-sm bg-indigo-600 px-3 py-2 text-white hover:bg-indigo-700 sm:w-auto"
      >
        Publish now
      </button>
    </div>
  </div>
</div>
```

---

#### 14.4.2 Destructive (Undo-First)

**Use for:** Actions that permanently delete or destroy data.

**Examples:** Deleting accounts, removing team members, destroying resources.

**Title Formula:** `Delete [object]?` OR `Remove [object]?`

**Body Formula:**

1. State what will be deleted
2. Explain consequences (data loss, affected users)
3. Mention if action is permanent
4. PREFERRED: Offer undo mechanism instead of confirmation

**Action Rules:**

- Primary button: Destructive action (red/red)
- Secondary button: "Cancel" (border only)
- Button text: Use specific verb ("Delete account", not "Confirm")
- **🔴 COMMAND:** Show undo toast after action when possible

**Escape Rules:**

- ✅ Escape key closes (treated as Cancel)
- 🔴 BOUNDARY: Disable backdrop click - force explicit choice
- ✅ Close button (X) in top-right

**Focus/Keyboard:**

- Initial focus: Secondary (Cancel) button - prevent accidental deletion
- Tab order: Cancel → Delete
- Enter: Activates focused button (starts on Cancel)
- Escape: Cancels

**Mobile Behavior:**

- Stack buttons vertically (Cancel on top)
- Full-width buttons
- Keep red background for delete button

**Anti-patterns:**

- ❌ Don't ask "Are you sure?" - be specific about what's being deleted
- ❌ Don't use generic "Confirm" or "OK" - use "Delete [thing]"
- ❌ Don't omit consequences - tell user what they'll lose
- ❌ Don't skip undo mechanism - prefer undo toast over confirmation

```tsx
{
  /* Destructive action modal */
}
;<div
  className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4"
  onClick={(e) => e.stopPropagation()} // No backdrop dismiss
  role="dialog"
  aria-modal="true"
  aria-labelledby="delete-title"
>
  <div className="w-full max-w-md rounded-lg bg-white p-4 shadow-xl sm:p-6">
    {/* Icon + close button */}
    <div className="flex items-start justify-between">
      <div className="flex items-center gap-3">
        <div className="rounded-full bg-red-100 p-2">
          <AlertTriangle className="h-6 w-6 text-red-600" aria-hidden="true" />
        </div>
        <h2 id="delete-title" className="text-lg font-bold sm:text-xl">
          Delete team member?
        </h2>
      </div>
      <button onClick={onClose} className="rounded-sm p-1 hover:bg-slate-100" aria-label="Close">
        <X className="h-5 w-5" />
      </button>
    </div>

    {/* Body */}
    <div className="mt-2 ml-11">
      <p className="text-sm text-slate-600">
        Removing <strong>Sarah Johnson</strong> will revoke her access immediately. She won't be
        able to view projects or data.
      </p>
      <p className="mt-2 text-sm font-semibold text-slate-900">This action cannot be undone.</p>
    </div>

    {/* Actions */}
    <div className="mt-4 flex flex-col gap-2 sm:mt-6 sm:flex-row sm:justify-end">
      <button
        onClick={onClose}
        autoFocus // Focus cancel button first
        className="w-full rounded-sm border border-slate-300 px-3 py-2 hover:bg-slate-50 sm:w-auto"
      >
        Cancel
      </button>
      <button
        onClick={handleDelete}
        className="w-full rounded-sm bg-red-600 px-3 py-2 text-white hover:bg-red-700 sm:w-auto"
      >
        Delete member
      </button>
    </div>
  </div>
</div>

{
  /* BETTER: Undo toast after immediate action (no modal) */
}
;<div className="fixed right-4 bottom-4 left-4 rounded-lg bg-slate-900 p-4 text-white shadow-xl sm:right-4 sm:left-auto sm:w-96">
  <div className="flex items-start justify-between gap-3">
    <div>
      <p className="font-semibold">Member removed</p>
      <p className="mt-1 text-sm text-slate-300">Sarah Johnson no longer has access</p>
    </div>
    <button
      onClick={handleUndo}
      className="rounded-sm border border-white/20 px-3 py-1.5 text-sm font-semibold whitespace-nowrap hover:bg-white/10"
    >
      Undo
    </button>
  </div>
</div>
```

---

#### 14.4.3 Error Recovery

**Use for:** System errors that prevent user from continuing, requiring user to make a choice.

**Examples:** Network failures, permission errors, data conflicts, failed uploads.

**Title Formula:** `[Problem description]` (NOT "Error" or "Oops")

**Body Formula:**

1. Explain what happened (in plain language)
2. Explain why it happened (if known and helpful)
3. Tell user what to do next

**Action Rules:**

- Primary button: Recovery action (indigo/blue) - "Try again", "Contact support"
- Secondary button: Alternative path (border) - "Go back", "Cancel"
- **🔴 COMMAND:** Always provide actionable next step

**Escape Rules:**

- ✅ Escape key closes (if there's a safe fallback)
- ✅ Backdrop click closes (if there's a safe fallback)
- 🔴 BOUNDARY: If no safe fallback exists, disable escape/backdrop

**Focus/Keyboard:**

- Initial focus: Primary action button
- Tab order: Primary → Secondary
- Enter: Activates focused button
- Escape: Closes (if safe)

**Mobile Behavior:**

- Stack buttons vertically
- Full-width buttons
- Ensure error icon is visible

**Anti-patterns:**

- ❌ Don't use technical error messages ("Error 500", "NullPointerException")
- ❌ Don't blame the user ("You did something wrong")
- ❌ Don't provide dead-end errors with no action
- ❌ Don't use red for system errors (reserve for user mistakes)

```tsx
{
  /* Error recovery modal */
}
;<div
  className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4"
  role="dialog"
  aria-modal="true"
  aria-labelledby="error-title"
>
  <div className="w-full max-w-md rounded-lg bg-white p-4 shadow-xl sm:p-6">
    {/* Icon */}
    <div className="flex items-center gap-3">
      <div className="rounded-full bg-amber-100 p-2">
        <AlertCircle className="h-6 w-6 text-amber-600" aria-hidden="true" />
      </div>
      <h2 id="error-title" className="text-lg font-bold sm:text-xl">
        Connection lost
      </h2>
    </div>

    {/* Body */}
    <div className="mt-2 ml-11">
      <p className="text-sm text-slate-600">
        We couldn't save your changes because the connection was interrupted. Your work is saved
        locally.
      </p>
      <p className="mt-2 text-sm text-slate-600">
        Check your internet connection and try saving again.
      </p>
    </div>

    {/* Actions */}
    <div className="mt-4 flex flex-col gap-2 sm:mt-6 sm:flex-row sm:justify-end">
      <button
        onClick={onClose}
        className="w-full rounded-sm border border-slate-300 px-3 py-2 hover:bg-slate-50 sm:w-auto"
      >
        Cancel
      </button>
      <button
        onClick={handleRetry}
        className="w-full rounded-sm bg-indigo-600 px-3 py-2 text-white hover:bg-indigo-700 sm:w-auto"
      >
        Try again
      </button>
    </div>
  </div>
</div>
```

---

#### 14.4.4 Permissions Request

**Use for:** Asking user to grant application permissions (camera, location, notifications).

**Examples:** Camera access for uploads, location for maps, notification permissions.

**Title Formula:** `Allow [app] to [action]?`

**Body Formula:**

1. Explain what permission is needed
2. Explain why you need it (benefit to user)
3. Optional: Explain what happens if denied

**Action Rules:**

- Primary button: "Allow" or "Grant access" (indigo/blue)
- Secondary button: "Don't allow" or "Not now" (border)
- **🔴 COMMAND:** Respect denial - don't re-prompt immediately

**Escape Rules:**

- ✅ Escape key closes (treated as denial)
- ✅ Backdrop click closes (treated as denial)
- ✅ Close button (X) available

**Focus/Keyboard:**

- Initial focus: Primary (Allow) button
- Tab order: Allow → Don't allow
- Enter: Activates focused button
- Escape: Closes (treated as denial)

**Mobile Behavior:**

- Stack buttons vertically
- Full-width buttons
- Ensure clear explanation for small screens

**Anti-patterns:**

- ❌ Don't explain permissions with technical jargon
- ❌ Don't guilt-trip users ("We won't work without this")
- ❌ Don't hide the deny option
- ❌ Don't re-prompt immediately after denial

```tsx
{
  /* Permission request modal */
}
;<div
  className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4"
  role="dialog"
  aria-modal="true"
  aria-labelledby="permission-title"
>
  <div className="w-full max-w-md rounded-lg bg-white p-4 shadow-xl sm:p-6">
    {/* Close button */}
    <button
      onClick={onClose}
      className="absolute top-4 right-4 rounded-sm p-1 hover:bg-slate-100"
      aria-label="Close"
    >
      <X className="h-5 w-5" />
    </button>

    {/* Icon + title */}
    <div className="flex items-center gap-3">
      <div className="rounded-full bg-indigo-100 p-2">
        <Camera className="h-6 w-6 text-indigo-600" aria-hidden="true" />
      </div>
      <h2 id="permission-title" className="text-lg font-bold sm:text-xl">
        Allow camera access?
      </h2>
    </div>

    {/* Body */}
    <div className="mt-2 ml-11">
      <p className="text-sm text-slate-600">
        We need camera access to scan QR codes and upload profile photos.
      </p>
      <p className="mt-2 text-sm text-slate-600">You can change this anytime in settings.</p>
    </div>

    {/* Actions */}
    <div className="mt-4 flex flex-col gap-2 sm:mt-6 sm:flex-row sm:justify-end">
      <button
        onClick={handleDeny}
        className="w-full rounded-sm border border-slate-300 px-3 py-2 hover:bg-slate-50 sm:w-auto"
      >
        Not now
      </button>
      <button
        onClick={handleAllow}
        className="w-full rounded-sm bg-indigo-600 px-3 py-2 text-white hover:bg-indigo-700 sm:w-auto"
      >
        Allow
      </button>
    </div>
  </div>
</div>
```

---

#### 14.4.5 Tool Connection / OAuth

**Use for:** Connecting third-party services, OAuth authentication flows.

**Examples:** Connecting Slack, GitHub, Google Drive, payment processors.

**Title Formula:** `Connect [service name]?`

**Body Formula:**

1. Explain what you'll be able to do with connection
2. List specific permissions being requested
3. Privacy/security note if sensitive

**Action Rules:**

- Primary button: "Connect" or "Connect [service]" (indigo/blue)
- Secondary button: "Cancel" (border)
- **🔴 COMMAND:** After connection, show success confirmation with "Disconnect" option

**Escape Rules:**

- ✅ Escape key closes (treated as Cancel)
- ✅ Backdrop click closes (treated as Cancel)
- ✅ Close button (X) available

**Focus/Keyboard:**

- Initial focus: Primary (Connect) button
- Tab order: Connect → Cancel
- Enter: Activates focused button
- Escape: Cancels connection

**Mobile Behavior:**

- Stack buttons vertically
- Full-width buttons
- Ensure permission list is readable

**Anti-patterns:**

- ❌ Don't hide what permissions you're requesting
- ❌ Don't make it difficult to disconnect later
- ❌ Don't assume connection - always confirm first
- ❌ Don't use "Login" or "Sign in" for connections (confusing)

```tsx
{
  /* OAuth connection modal */
}
;<div
  className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4"
  role="dialog"
  aria-modal="true"
  aria-labelledby="connect-title"
>
  <div className="w-full max-w-md rounded-lg bg-white p-4 shadow-xl sm:p-6">
    {/* Close button */}
    <button
      onClick={onClose}
      className="absolute top-4 right-4 rounded-sm p-1 hover:bg-slate-100"
      aria-label="Close"
    >
      <X className="h-5 w-5" />
    </button>

    {/* Icon + title */}
    <div className="flex items-center gap-3">
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100">
        <img src="/slack-logo.svg" alt="" className="h-8 w-8" />
      </div>
      <h2 id="connect-title" className="text-lg font-bold sm:text-xl">
        Connect Slack?
      </h2>
    </div>

    {/* Body */}
    <div className="mt-4">
      <p className="text-sm text-slate-600">
        We'll be able to send notifications to your Slack workspace and read channel messages to
        sync data.
      </p>

      {/* Permissions list */}
      <div className="mt-3 space-y-2 rounded-md border bg-slate-50 p-3">
        <p className="text-xs font-semibold text-slate-500 uppercase">This will allow us to:</p>
        <ul className="space-y-1.5 text-sm text-slate-700">
          <li className="flex items-start gap-2">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-600" aria-hidden="true" />
            <span>Send messages to channels</span>
          </li>
          <li className="flex items-start gap-2">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-600" aria-hidden="true" />
            <span>Read channel messages</span>
          </li>
          <li className="flex items-start gap-2">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-600" aria-hidden="true" />
            <span>View workspace members</span>
          </li>
        </ul>
      </div>
    </div>

    {/* Actions */}
    <div className="mt-4 flex flex-col gap-2 sm:mt-6 sm:flex-row sm:justify-end">
      <button
        onClick={onClose}
        className="w-full rounded-sm border border-slate-300 px-3 py-2 hover:bg-slate-50 sm:w-auto"
      >
        Cancel
      </button>
      <button
        onClick={handleConnect}
        className="w-full rounded-sm bg-indigo-600 px-3 py-2 text-white hover:bg-indigo-700 sm:w-auto"
      >
        Connect Slack
      </button>
    </div>
  </div>
</div>
```

---

#### 14.4.6 Preview Before Publish

**Use for:** Showing final preview before irreversible or public action.

**Examples:** Publishing blog posts, sending emails, posting to social media.

**Title Formula:** `Preview [content type]`

**Body Formula:**

- Show preview of content (with scroll if needed)
- Include metadata (recipients, visibility, schedule)
- Optional: Show character/word count

**Action Rules:**

- Primary button: "Publish" or "Send" (indigo/blue)
- Secondary button: "Edit" or "Cancel" (border)
- Tertiary option: "Save as draft" (link below buttons)

**Escape Rules:**

- ✅ Escape key closes (treated as Cancel - back to edit)
- ✅ Backdrop click closes (treated as Cancel)
- ✅ Close button (X) available

**Focus/Keyboard:**

- Initial focus: Primary (Publish) button
- Tab order: Publish → Edit → Close button
- Enter: Activates focused button
- Escape: Returns to edit mode

**Mobile Behavior:**

- Stack buttons vertically
- Scrollable preview area with max-height
- Reduce preview padding on mobile

**Anti-patterns:**

- ❌ Don't show identical preview that's already visible
- ❌ Don't omit key metadata (who will see this, when it sends)
- ❌ Don't make preview area too large (use max-height + scroll)
- ❌ Don't hide "Edit" option - users should easily go back

```tsx
{
  /* Preview before publish modal */
}
;<div
  className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4"
  role="dialog"
  aria-modal="true"
  aria-labelledby="preview-title"
>
  <div className="w-full max-w-2xl rounded-lg bg-white shadow-xl">
    {/* Header */}
    <div className="flex items-center justify-between border-b p-4 sm:p-6">
      <h2 id="preview-title" className="text-lg font-bold sm:text-xl">
        Preview article
      </h2>
      <button onClick={onClose} className="rounded-sm p-1 hover:bg-slate-100" aria-label="Close">
        <X className="h-5 w-5" />
      </button>
    </div>

    {/* Preview content - scrollable */}
    <div className="max-h-96 overflow-y-auto p-4 sm:p-6">
      {/* Metadata */}
      <div className="mb-4 space-y-1 rounded-md border bg-slate-50 p-3 text-sm">
        <div className="flex justify-between">
          <span className="text-slate-600">Visibility:</span>
          <span className="font-semibold">All subscribers</span>
        </div>
        <div className="flex justify-between">
          <span className="text-slate-600">Publish date:</span>
          <span className="font-semibold">Immediately</span>
        </div>
        <div className="flex justify-between">
          <span className="text-slate-600">Word count:</span>
          <span className="font-semibold">1,247 words</span>
        </div>
      </div>

      {/* Preview */}
      <article className="prose prose-slate max-w-none">
        <h1>Article Title Goes Here</h1>
        <p className="text-slate-600">
          This is a preview of how your article will appear to readers...
        </p>
        {/* Content preview */}
      </article>
    </div>

    {/* Footer with actions */}
    <div className="border-t p-4 sm:p-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:justify-end">
        <button
          onClick={handleEdit}
          className="w-full rounded-sm border border-slate-300 px-3 py-2 hover:bg-slate-50 sm:w-auto"
        >
          Edit article
        </button>
        <button
          onClick={handlePublish}
          className="w-full rounded-sm bg-indigo-600 px-3 py-2 text-white hover:bg-indigo-700 sm:w-auto"
        >
          Publish now
        </button>
      </div>
      <button
        onClick={handleSaveDraft}
        className="mt-3 w-full text-sm text-indigo-600 underline hover:text-indigo-700 sm:w-auto"
      >
        Save as draft instead
      </button>
    </div>
  </div>
</div>
```

---

#### 14.4.7 Unsaved Changes

**Use for:** Warning when user tries to leave with unsaved changes.

**Examples:** Closing form, navigating away from editor, closing modal with edits.

**Title Formula:** `Unsaved changes` OR `Save changes?`

**Body Formula:**

1. State what will be lost
2. Offer to save or discard

**Action Rules:**

- Primary button: "Save changes" (indigo/blue)
- Secondary button: "Discard" (border)
- Tertiary button: "Keep editing" (border) OR link

**Escape Rules:**

- ✅ Escape key closes (treated as "Keep editing")
- ✅ Backdrop click closes (treated as "Keep editing")
- ✅ Close button (X) available

**Focus/Keyboard:**

- Initial focus: Primary (Save) button
- Tab order: Save → Discard → Keep editing
- Enter: Activates focused button
- Escape: Keeps editing (safest option)

**Mobile Behavior:**

- Stack buttons vertically
- Full-width buttons
- Keep "Save" on bottom (thumb-friendly)

**Anti-patterns:**

- ❌ Don't force choice between "OK" and "Cancel" (confusing)
- ❌ Don't use only "Discard" without "Save" option
- ❌ Don't make "Discard" the primary action
- ❌ Don't trigger for trivial changes (opening dropdown, etc.)

```tsx
{
  /* Unsaved changes modal */
}
;<div
  className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4"
  role="dialog"
  aria-modal="true"
  aria-labelledby="unsaved-title"
>
  <div className="w-full max-w-md rounded-lg bg-white p-4 shadow-xl sm:p-6">
    {/* Close button */}
    <button
      onClick={handleKeepEditing}
      className="absolute top-4 right-4 rounded-sm p-1 hover:bg-slate-100"
      aria-label="Close"
    >
      <X className="h-5 w-5" />
    </button>

    {/* Icon + title */}
    <div className="flex items-center gap-3">
      <div className="rounded-full bg-amber-100 p-2">
        <AlertTriangle className="h-6 w-6 text-amber-600" aria-hidden="true" />
      </div>
      <h2 id="unsaved-title" className="text-lg font-bold sm:text-xl">
        Unsaved changes
      </h2>
    </div>

    {/* Body */}
    <div className="mt-2 ml-11">
      <p className="text-sm text-slate-600">
        You have unsaved changes to this document. Save them before leaving?
      </p>
    </div>

    {/* Actions */}
    <div className="mt-4 flex flex-col gap-2 sm:mt-6 sm:flex-row sm:justify-end">
      <button
        onClick={handleDiscard}
        className="order-2 w-full rounded-sm border border-slate-300 px-3 py-2 hover:bg-slate-50 sm:order-1 sm:w-auto"
      >
        Discard
      </button>
      <button
        onClick={handleKeepEditing}
        className="order-1 w-full rounded-sm border border-slate-300 px-3 py-2 hover:bg-slate-50 sm:order-2 sm:w-auto"
      >
        Keep editing
      </button>
      <button
        onClick={handleSave}
        className="order-3 w-full rounded-sm bg-indigo-600 px-3 py-2 text-white hover:bg-indigo-700 sm:w-auto"
      >
        Save changes
      </button>
    </div>
  </div>
</div>
```

---

#### 14.4.8 Contextual Help / Glossary

**Use for:** Explaining unfamiliar terms, providing additional context, showing examples.

**Examples:** Term definitions, feature explanations, "What's this?" links.

**Title Formula:** `[Term or feature name]`

**Body Formula:**

1. Clear definition or explanation
2. Example or use case (if helpful)
3. Optional: Link to full documentation

**Action Rules:**

- Primary button: "Got it" or "Close" (border only)
- Optional: "Learn more" link to full docs

**Escape Rules:**

- ✅ Escape key closes
- ✅ Backdrop click closes
- ✅ Close button (X) available

**Focus/Keyboard:**

- Initial focus: Close/Got it button
- Tab order: Got it → Learn more link → Close button
- Enter: Activates focused button
- Escape: Closes

**Mobile Behavior:**

- Reduce padding on mobile
- Full-width close button
- Ensure definition is readable

**Anti-patterns:**

- ❌ Don't show long documentation (link to it instead)
- ❌ Don't use technical jargon in explanations
- ❌ Don't force user to take action (just reading is fine)
- ❌ Don't interrupt workflow - show on explicit request only

```tsx
{
  /* Contextual help modal */
}
;<div
  className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4"
  role="dialog"
  aria-modal="true"
  aria-labelledby="help-title"
>
  <div className="w-full max-w-md rounded-lg bg-white p-4 shadow-xl sm:p-6">
    {/* Close button */}
    <button
      onClick={onClose}
      className="absolute top-4 right-4 rounded-sm p-1 hover:bg-slate-100"
      aria-label="Close"
    >
      <X className="h-5 w-5" />
    </button>

    {/* Icon + title */}
    <div className="flex items-center gap-3">
      <div className="rounded-full bg-indigo-100 p-2">
        <HelpCircle className="h-6 w-6 text-indigo-600" aria-hidden="true" />
      </div>
      <h2 id="help-title" className="text-lg font-bold sm:text-xl">
        API rate limit
      </h2>
    </div>

    {/* Body */}
    <div className="mt-2 ml-11 space-y-3">
      <p className="text-sm text-slate-600">
        Rate limits control how many API requests you can make per hour. They prevent abuse and
        ensure fair usage for all users.
      </p>

      {/* Example */}
      <div className="rounded-md border bg-slate-50 p-3">
        <p className="text-xs font-semibold text-slate-500 uppercase">Example</p>
        <p className="mt-1 text-sm text-slate-700">
          With a 1,000 requests/hour limit, you can make about 16 requests per minute.
        </p>
      </div>

      {/* Learn more link */}
      <a
        href="/docs/rate-limits"
        className="inline-flex items-center gap-1 text-sm text-indigo-600 underline hover:text-indigo-700"
      >
        Learn more about rate limits
        <ExternalLink className="h-4 w-4" aria-hidden="true" />
      </a>
    </div>

    {/* Action */}
    <div className="mt-4 flex justify-end sm:mt-6">
      <button
        onClick={onClose}
        className="w-full rounded-sm border border-slate-300 px-3 py-2 hover:bg-slate-50 sm:w-auto"
      >
        Got it
      </button>
    </div>
  </div>
</div>
```

---

### 14.5 Additional Modal Patterns

These are simpler modal patterns for common use cases. They follow the same universal rules but have standardized structures.

---

#### 14.5.1 Passive Modal

**Use for:** Informational announcements that don't require user action.

**Examples:** Scheduled maintenance notices, system status updates, informational alerts.

**🔴 COMMAND:** No action buttons - informational only.

**🔴 COMMAND:** Dismiss methods: X icon, backdrop click, or Escape key.

**🔴 BOUNDARY:** Use sparingly - prefer toasts/banners for passive information.

**When to use Passive vs Toast:**

- Passive modal: Information user should see before continuing
- Toast: Non-blocking update or confirmation

```tsx
{
  /* Passive modal */
}
;<div
  className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4"
  onClick={onClose}
  role="dialog"
  aria-modal="true"
  aria-labelledby="passive-title"
>
  <div
    className="w-full max-w-md rounded-lg bg-white p-4 shadow-xl sm:p-6"
    onClick={(e) => e.stopPropagation()}
  >
    <div className="flex items-start justify-between">
      <h2 id="passive-title" className="text-lg font-semibold">
        Maintenance scheduled
      </h2>
      <button onClick={onClose} className="rounded-sm p-1 hover:bg-slate-100" aria-label="Close">
        <X className="h-4 w-4" aria-hidden="true" />
      </button>
    </div>
    <p className="mt-2 text-sm text-slate-600">
      System will be unavailable tomorrow from 2–4&nbsp;AM EST for scheduled maintenance.
    </p>
  </div>
</div>
```

---

#### 14.5.2 Transactional Modal

**Use for:** Actions that require user decision to complete a transaction.

**Examples:** Saving changes, confirming orders, applying settings.

**🔴 COMMAND:** Must include cancel and primary action buttons.

**🔴 COMMAND:** Primary action describes what will happen (not "OK" or "Confirm").

**Title Formula:** `[Action] [object]?`

**Action Rules:**

- Primary button: Specific action verb (indigo-600)
- Secondary button: "Cancel" (border only)
- Button order: Cancel → Primary

```tsx
{
  /* Transactional modal */
}
;<div
  className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4"
  onClick={onClose}
  role="dialog"
  aria-modal="true"
  aria-labelledby="transaction-title"
>
  <div
    className="w-full max-w-md rounded-lg bg-white p-4 shadow-xl sm:p-6"
    onClick={(e) => e.stopPropagation()}
  >
    <button
      onClick={onClose}
      className="absolute top-4 right-4 rounded-sm p-1 hover:bg-slate-100"
      aria-label="Close"
    >
      <X className="h-4 w-4" />
    </button>

    <h2 id="transaction-title" className="text-lg font-semibold">
      Save changes?
    </h2>

    <p className="mt-2 text-sm text-slate-600">
      You have unsaved changes. Do you want to save before closing?
    </p>

    <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:justify-end">
      <button
        onClick={handleDiscard}
        className="w-full rounded-sm border border-slate-300 px-3 py-2 hover:bg-slate-50 sm:w-auto"
      >
        Discard
      </button>
      <button
        onClick={handleSave}
        className="w-full rounded-sm bg-indigo-600 px-3 py-2 text-white hover:bg-indigo-700 sm:w-auto"
      >
        Save changes
      </button>
    </div>
  </div>
</div>
```

---

#### 14.5.3 Acknowledgment Modal

**Use for:** Success confirmations or information requiring user acknowledgment.

**Examples:** "Profile updated", "Email sent", "Task completed".

**🔴 COMMAND:** Single button only (typically "Got it" or "OK").

**🔴 BOUNDARY:** Use only for success states - errors need recovery actions.

**Title Formula:** `[Thing] [completed state]`

**Body Formula:** Brief confirmation of what happened.

**Action Rules:**

- Single primary button (indigo-600)
- Button text: "Got it", "OK", or "Close"
- Button width: 50% width, right-aligned

```tsx
{
  /* Acknowledgment modal */
}
;<div
  className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4"
  onClick={onClose}
  role="dialog"
  aria-modal="true"
  aria-labelledby="acknowledgment-title"
>
  <div
    className="w-full max-w-md rounded-lg bg-white p-4 shadow-xl sm:p-6"
    onClick={(e) => e.stopPropagation()}
  >
    <button
      onClick={onClose}
      className="absolute top-4 right-4 rounded-sm p-1 hover:bg-slate-100"
      aria-label="Close"
    >
      <X className="h-4 w-4" />
    </button>

    {/* Success icon */}
    <div className="flex items-center gap-3">
      <div className="rounded-full bg-green-100 p-2">
        <Check className="h-6 w-6 text-green-600" aria-hidden="true" />
      </div>
      <h2 id="acknowledgment-title" className="text-lg font-semibold">
        Update complete
      </h2>
    </div>

    <p className="mt-2 ml-11 text-sm text-slate-600">Your profile has been updated successfully.</p>

    <div className="mt-4 flex justify-end">
      <button
        onClick={onClose}
        className="w-1/2 rounded-sm bg-indigo-600 px-3 py-2 text-white hover:bg-indigo-700"
      >
        Got it
      </button>
    </div>
  </div>
</div>
```

---

#### 14.5.4 Progress Modal (Multi-Step)

**Use for:** Multi-step processes like wizards, onboarding, or setup flows.

**Examples:** Account setup, configuration wizards, guided tutorials.

**🔴 COMMAND:** Must include step indicator in title.

**🔴 COMMAND:** Includes cancel, previous, and next/complete buttons.

**Title Formula:** `[Process name] (Step [N] of [Total])`

**Action Rules:**

- Primary button: "Next" (indigo-600) or "Complete" on final step
- Secondary button: "Previous" (border only)
- Tertiary button: "Cancel" (text only, left-aligned)

**Button Layout:**

- Cancel: Left-aligned, ghost style
- Previous + Next: Right-aligned, grouped

**Progress Indicator:**

- Show step numbers in title
- Optional: Visual progress bar above content

```tsx
{
  /* Progress/wizard modal */
}
;<div
  className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4"
  onClick={(e) => e.stopPropagation()} // No backdrop dismiss
  role="dialog"
  aria-modal="true"
  aria-labelledby="progress-title"
>
  <div
    className="w-full max-w-md rounded-lg bg-white shadow-xl"
    onClick={(e) => e.stopPropagation()}
  >
    {/* Header with progress */}
    <div className="border-b p-4 sm:p-6">
      <h2 id="progress-title" className="text-lg font-semibold">
        Setup wizard (Step 2 of 3)
      </h2>

      {/* Optional: Visual progress bar */}
      <div className="mt-3 flex gap-1">
        <div className="h-1 flex-1 rounded-full bg-indigo-600" />
        <div className="h-1 flex-1 rounded-full bg-indigo-600" />
        <div className="h-1 flex-1 rounded-full bg-slate-200" />
      </div>
    </div>

    {/* Step content */}
    <div className="p-4 sm:p-6">
      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium">Company name</label>
          <input type="text" className="mt-1 w-full rounded-sm border px-3 py-2" />
        </div>
        <div>
          <label className="text-sm font-medium">Industry</label>
          <select className="mt-1 w-full rounded-sm border px-3 py-2">
            <option>Select industry</option>
          </select>
        </div>
      </div>
    </div>

    {/* Footer with actions */}
    <div className="border-t p-4 sm:p-6">
      <div className="flex items-center justify-between">
        <button
          onClick={handleCancel}
          className="rounded-sm px-3 py-2 text-slate-600 hover:bg-slate-50"
        >
          Cancel
        </button>
        <div className="flex gap-2">
          <button
            onClick={handlePrevious}
            className="w-24 rounded-sm border border-slate-300 px-3 py-2 hover:bg-slate-50"
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            className="w-24 rounded-sm bg-indigo-600 px-3 py-2 text-white hover:bg-indigo-700"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
```

---

### 14.6 Dialog Button Layouts

Standard button layouts for consistent modal footers.

**🔴 COMMAND:** Cancel always leftmost, primary action always rightmost.

**🔴 COMMAND:** Only one primary action per dialog.

**🟡 DIRECTIVE:** On mobile, stack buttons vertically with full width.

---

#### One Button (50% width, right-aligned)

**Use for:** Acknowledgment modals, passive modals with action.

```tsx
<div className="flex justify-end">
  <button className="w-full rounded-sm bg-indigo-600 px-3 py-2 text-white sm:w-1/2">Got it</button>
</div>
```

---

#### Two Buttons (each 50% width)

**Use for:** Transactional modals, confirm/cancel patterns.

**🔴 COMMAND:** Use `flex-1` for equal-width buttons.

```tsx
{
  /* Desktop: side-by-side */
}
;<div className="flex flex-col gap-2 sm:flex-row">
  <button className="flex-1 rounded-sm border border-slate-300 px-3 py-2">Cancel</button>
  <button className="flex-1 rounded-sm bg-indigo-600 px-3 py-2 text-white">Save</button>
</div>
```

---

#### Three Buttons (each 25% width, right-aligned)

**Use for:** Modals with tertiary action (e.g., "Save as draft").

**🔴 BOUNDARY:** Rarely use three buttons - can overwhelm users.

**🟡 DIRECTIVE:** Consider moving tertiary action to a link below buttons.

```tsx
{
  /* Three buttons - use sparingly */
}
;<div className="flex flex-col gap-2 sm:flex-row sm:justify-end">
  <button className="w-full rounded-sm border px-3 py-2 text-sm sm:w-1/4">Discard</button>
  <button className="w-full rounded-sm border px-3 py-2 text-sm sm:w-1/4">Save draft</button>
  <button className="w-full rounded-sm bg-indigo-600 px-3 py-2 text-sm text-white sm:w-1/4">
    Publish
  </button>
</div>

{
  /* BETTER: Two buttons + tertiary link */
}
;<div className="space-y-3">
  <div className="flex flex-col gap-2 sm:flex-row">
    <button className="flex-1 rounded-sm border px-3 py-2">Discard</button>
    <button className="flex-1 rounded-sm bg-indigo-600 px-3 py-2 text-white">Publish</button>
  </div>
  <button className="w-full text-sm text-indigo-600 underline hover:text-indigo-700 sm:w-auto">
    Save as draft instead
  </button>
</div>
```

---

#### Progress Buttons (Split layout)

**Use for:** Multi-step wizards.

**🔴 COMMAND:** Cancel left-aligned, Previous + Next right-aligned grouped.

```tsx
<div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
  <button className="order-2 w-full rounded-sm px-3 py-2 text-slate-600 hover:bg-slate-50 sm:order-1 sm:w-auto">
    Cancel
  </button>
  <div className="order-1 flex gap-2 sm:order-2">
    <button className="w-full rounded-sm border border-slate-300 px-3 py-2 sm:w-24">
      Previous
    </button>
    <button className="w-full rounded-sm bg-indigo-600 px-3 py-2 text-white sm:w-24">Next</button>
  </div>
</div>
```

---

### 14.7 Modal Accessibility Checklist

**🔴 COMMAND:** All modals must implement:

- [ ] `role="dialog"` and `aria-modal="true"` on container
- [ ] `aria-labelledby` pointing to modal title
- [ ] Focus trap (Tab cycles within modal only)
- [ ] Initial focus set to appropriate element
- [ ] Return focus to trigger element on close
- [ ] Escape key closes modal (when safe)
- [ ] Screen reader announces modal opening
- [ ] All interactive elements have visible focus indicators
- [ ] Backdrop has sufficient contrast (`bg-slate-900/50` minimum)
- [ ] Close button includes `aria-label="Close"`

---

### 14.8 Focus Management Behaviors

**🔴 COMMAND:** When dialog opens, focus first interactive element.

**🔴 COMMAND:** Trap focus inside modal until dismissed.

**🔴 COMMAND:** When dialog closes, return focus to triggering element.

**🔴 BOUNDARY:** Never set initial focus on primary action button if there are inputs to complete first.

**Focus Priority:**

1. **Modals with forms:** Focus first input field
2. **Destructive modals:** Focus secondary (Cancel) button
3. **Standard modals:** Focus primary action button
4. **Passive/info modals:** Focus close button

---

### 14.9 Complete Accessible Modal Implementation

```tsx
{
  /* Accessible modal implementation */
}
import { useEffect, useRef } from 'react'

const AccessibleModal = ({ isOpen, onClose, title, children }) => {
  const modalRef = useRef<HTMLDivElement>(null)
  const previousActiveElement = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (isOpen) {
      // Store previously focused element
      previousActiveElement.current = document.activeElement as HTMLElement

      // Focus first focusable element in modal
      const firstFocusable = modalRef.current?.querySelector(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      ) as HTMLElement
      firstFocusable?.focus()

      // Prevent body scroll
      document.body.style.overflow = 'hidden'
    } else {
      // Restore focus and body scroll
      previousActiveElement.current?.focus()
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // Focus trap
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose()
      return
    }

    if (e.key === 'Tab') {
      const focusableElements = modalRef.current?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )

      if (!focusableElements?.length) return

      const firstElement = focusableElements[0] as HTMLElement
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement

      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault()
        lastElement.focus()
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault()
        firstElement.focus()
      }
    }
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        ref={modalRef}
        className="w-full max-w-md rounded-lg bg-white p-4 shadow-xl sm:p-6"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDown}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 rounded-sm p-1 hover:bg-slate-100"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        <h2 id="modal-title" className="text-lg font-bold sm:text-xl">
          {title}
        </h2>

        <div className="mt-4">{children}</div>
      </div>
    </div>
  )
}
```

---

### 14.10 Modal Anti-Patterns

**🔴 BOUNDARY:** Never do these:

❌ **Modal inception** - Don't open modals from modals (use multi-step flow instead)

❌ **Auto-opening modals** - Don't show modals on page load without user action

❌ **Non-dismissible modals** - Always provide escape method (even for critical actions)

❌ **Vague actions** - Don't use "OK", "Submit", "Confirm" - be specific

❌ **Hidden information** - Don't require scrolling to see action buttons

❌ **Surprise modals** - Don't trigger modals from non-button elements (images, text)

❌ **Modal for everything** - Don't use modals for complex forms (use dedicated page)

❌ **Blocking passive content** - Don't use modals for announcements (use toasts/banners)

---

### 14.11 Quick Reference

```
MODAL TYPE               PRIMARY BUTTON COLOR    FOCUS FIRST    BACKDROP DISMISS
Confirm/Cancel           indigo-600              Primary        ✅
Destructive              red-600                Secondary      ❌
Error Recovery           indigo-600              Primary        ✅ (if safe)
Permissions Request      indigo-600              Primary        ✅
Tool Connection          indigo-600              Primary        ✅
Preview Before Publish   indigo-600              Primary        ✅
Unsaved Changes          indigo-600              Primary        ✅
Contextual Help          border only             Close button   ✅

ESCAPE BEHAVIOR
Standard:      Escape key + backdrop click + X button
Destructive:   Escape key + X button only (no backdrop)
Help/Info:     All methods (least disruptive)

MOBILE ADAPTATIONS
- Full width with mx-4 margins
- Reduce padding to p-4
- Stack buttons vertically
- Full-width buttons
- Scrollable content with max-height

ACCESSIBILITY REQUIREMENTS
- role="dialog" + aria-modal="true"
- aria-labelledby on title
- Focus trap with Tab cycling
- Return focus to trigger on close
- Escape key support
- Visible focus indicators
```

---

## 15. Voice Agent Builder Patterns

### 15.1 Template Gallery

**Use for:** Providing pre-configured agent shells to accelerate development by offering users a curated collection of starting points.

**🔴 COMMAND:** Use a grid of "Surface" cards (`p-6`) with high-contrast labels.
**🔴 COMMAND:** Display specific capabilities (e.g., "Outbound Sales," "Customer Support") as secondary labels using `text-sm`.

---

#### Grid Layout and Responsive Behavior

**🔴 COMMAND:** Use responsive grid: 1 column on mobile, 2 columns on tablet (`sm:`), 3 columns on desktop (`lg:`).

**🔴 COMMAND:** Apply `gap-4` between cards for consistent spacing.

**🟡 DIRECTIVE:** Use `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3` as the standard responsive pattern for template galleries.

```tsx
<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">{/* Template cards */}</div>
```

---

#### Template Card Structure

**🔴 COMMAND:** Each card must include: icon, title, description, capability badges, and action area.

**🔴 COMMAND:** Cards use `rounded-lg border border-gray-200 bg-white p-6` as base styling.

**🔴 COMMAND:** Apply `dark:border-gray-700 dark:bg-gray-900` for dark mode support.

```tsx
<div className="rounded-lg border border-gray-200 bg-white p-6 transition-all hover:border-indigo-500 hover:shadow-md dark:border-gray-700 dark:bg-gray-900">
  <div className="flex items-start gap-4">
    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-50 dark:bg-indigo-900/20">
      {/* Icon */}
    </div>
    <div className="min-w-0 flex-1">
      <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">Title</h3>
      <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">Description</p>
      <div className="mt-3 flex flex-wrap gap-2">{/* Badges */}</div>
      <button className="mt-4">{/* Action */}</button>
    </div>
  </div>
</div>
```

---

#### Badge Patterns for Template Classification

**🔴 COMMAND:** Use color-coded badges to indicate template status and characteristics.

**Badge Categories:**

| Badge Type | Color Scheme                                                              | Use Case                       |
| ---------- | ------------------------------------------------------------------------- | ------------------------------ |
| Popular    | `bg-blue-50 text-blue-700` (dark: `bg-blue-900/40 text-blue-300`)         | High usage templates           |
| New        | `bg-green-50 text-green-700` (dark: `bg-green-900/40 text-green-300`)     | Recently added (< 30 days)     |
| Enterprise | `bg-purple-50 text-purple-700` (dark: `bg-purple-900/40 text-purple-300`) | Advanced features, higher tier |
| Beta       | `bg-amber-50 text-amber-700` (dark: `bg-amber-900/40 text-amber-300`)     | Experimental features          |
| Capability | `bg-gray-100 text-gray-700` (dark: `bg-gray-800 text-gray-300`)           | Technical capabilities         |

**🔴 COMMAND:** Status badges (Popular, New, Enterprise, Beta) must appear before capability badges.

**🔴 BOUNDARY:** Maximum 4 badges visible per card; use "+N more" indicator if exceeding limit.

```tsx
<span className="rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
  Popular
</span>
```

---

#### Hover and Selection States

**🔴 COMMAND:** Cards must show visual feedback on hover: border color changes to `indigo-500` and shadow appears.

**🔴 COMMAND:** Selected cards display `border-indigo-500 border-2` with a checkmark icon in the top-right corner.

**🟡 DIRECTIVE:** Use `transition-all` for smooth state changes between default, hover, and selected states.

```tsx
{
  /* Hover state */
}
;<div className="rounded-lg border border-gray-200 bg-white p-6 transition-all hover:border-indigo-500 hover:shadow-md">
  {/* Content */}
</div>

{
  /* Selected state */
}
;<div className="relative rounded-lg border-2 border-indigo-500 bg-white p-6 shadow-md">
  <div className="absolute top-4 right-4 flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600">
    <Check className="h-4 w-4 text-white" />
  </div>
  {/* Content */}
</div>
```

---

#### Empty State Pattern

**Use for:** When no templates match the current filter criteria or search query.

**🔴 COMMAND:** Empty state must include: icon, heading, description, and clear action.

**🔴 COMMAND:** Use centered layout with `max-w-md mx-auto` for empty state content.

**🔴 COMMAND:** Empty state heading uses `text-lg font-semibold`, description uses `text-sm text-gray-600`.

```tsx
<div className="flex min-h-[400px] items-center justify-center px-4 py-12">
  <div className="max-w-md text-center">
    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
      <Search className="h-8 w-8 text-gray-400" />
    </div>
    <h3 className="mt-4 text-lg font-semibold text-gray-900">No templates found</h3>
    <p className="mt-2 text-sm text-gray-600">Try adjusting your filters or search terms.</p>
    <button className="mt-6">Clear all filters</button>
  </div>
</div>
```

---

#### Template Preview Modal

**Use for:** Providing detailed information about a template before committing to use it.

**🔴 COMMAND:** Preview modal must include: template details, capabilities list, example use cases, and configuration preview.

**🔴 COMMAND:** Modal size: `max-w-2xl` for detailed previews with sufficient content space.

**🔴 COMMAND:** Use tabbed interface for organizing: Overview, Features, Examples, and Configuration sections.

```tsx
<div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4">
  <div className="w-full max-w-2xl overflow-hidden rounded-lg bg-white shadow-xl">
    <div className="border-b px-6 py-4">
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50">
            {/* Icon */}
          </div>
          <div>
            <h2 className="text-xl font-bold">Template Name</h2>
            <div className="mt-1 flex gap-2">{/* Badges */}</div>
          </div>
        </div>
        <button aria-label="Close">
          <X className="h-5 w-5" />
        </button>
      </div>
    </div>

    <div className="border-b">
      <nav className="flex gap-4 px-6">
        <button className="border-b-2 border-indigo-600 px-1 py-3 text-sm font-semibold text-indigo-600">
          Overview
        </button>
        <button className="border-b-2 border-transparent px-1 py-3 text-sm font-semibold text-gray-500">
          Features
        </button>
      </nav>
    </div>

    <div className="max-h-[500px] overflow-y-auto px-6 py-4">{/* Tab content */}</div>

    <div className="flex items-center justify-between border-t px-6 py-4">
      <button className="text-sm font-semibold text-gray-700">View documentation</button>
      <div className="flex gap-3">
        <button>Preview demo</button>
        <button>Use this template</button>
      </div>
    </div>
  </div>
</div>
```

---

#### Navigation Patterns for Galleries

**🟡 DIRECTIVE:** Provide multiple navigation methods to accommodate different user behaviors.

**Navigation Options:**

1. **Grid View (Primary):** Standard card grid for browsing multiple options
2. **Search:** Text input for filtering by name or capability
3. **Category Filters:** Dropdown or sidebar for filtering by use case
4. **Sort Options:** Dropdown for Popular, Newest, A-Z sorting

**🔴 COMMAND:** Search and filter controls must appear above the grid with `mb-6` spacing.

```tsx
<div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
  <div className="relative flex-1 sm:max-w-xs">
    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
      <Search className="h-4 w-4 text-gray-400" />
    </div>
    <input
      type="text"
      placeholder="Search templates…"
      className="block w-full rounded-sm border py-2 pr-3 pl-10 text-sm"
    />
  </div>
  <div className="flex gap-3">
    <select className="block rounded-sm border px-3 py-2 text-sm">
      <option>All categories</option>
    </select>
    <select className="block rounded-sm border px-3 py-2 text-sm">
      <option>Popular first</option>
    </select>
  </div>
</div>
```

---

#### Context and Pagination

**🟡 DIRECTIVE:** Display gallery context to help users understand their position in the collection.

**🔴 COMMAND:** Show result count as "Showing X of Y templates" using `text-sm text-gray-600`.

**🔴 COMMAND:** For large collections (>12 items), implement pagination or "Load more" button.

```tsx
<div className="mb-4">
  <p className="text-sm text-gray-600 dark:text-gray-400">Showing 12 of 48 templates</p>
</div>
```

---

#### Accessibility Requirements

**🔴 COMMAND:** Template cards must be keyboard navigable with visible focus indicators.

**🔴 COMMAND:** Each card must have semantic markup with proper heading hierarchy.

**🔴 COMMAND:** Preview modals must implement focus trap and return focus to trigger element on close.

**🔴 COMMAND:** Badge colors must maintain WCAG AA contrast ratios (4.5:1 minimum).

**🟡 DIRECTIVE:** Use `aria-label` on action buttons to provide context: "Use Inbound Support template".

---

#### Gallery Pattern Guidelines for AGENTS.MD

**Context Provision:**

- Always provide users with their position in the collection ("X of Y templates")
- Display active filters and search terms to maintain orientation
- Show result counts before presenting the grid

**Multiple Navigation Options:**

- Support both browsing (grid view) and searching (text input)
- Provide category filters for common groupings
- Include sort options (popularity, recency, alphabetical)
- Enable keyboard navigation for accessibility

**Progressive Enhancement:**

- Start with simple grid layout, add filters only when collection is large (>12 items)
- Implement preview modals for detailed information without losing context
- Use "Load more" or pagination for collections exceeding 24 items

**Visual Hierarchy:**

- Use badges to quickly communicate template characteristics
- Maintain consistent card structure across all templates
- Provide clear hover states to indicate interactivity
- Use color coding for status (Popular, New, Beta, Enterprise)

**Empty States:**

- Always handle the case when no templates match filters
- Provide clear path to resolution (clear filters, adjust search)
- Maintain visual consistency with the rest of the interface

**Selection Patterns:**

- Provide immediate visual feedback on hover
- Show selection state clearly with border and checkmark
- Enable quick comparison via preview modal
- Offer primary action (Use template) prominently

```tsx
{
  /* Grid List Pattern - Ref: Tailwind UI Grid Lists */
}
;<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
  <div className="rounded-lg border bg-white p-6 hover:border-indigo-500">
    <div className="flex items-baseline gap-2">
      <h3 className="text-lg font-bold">Inbound Support</h3>
    </div>
    <p className="mt-1 text-sm text-gray-600">Handles FAQs and routing.</p>
  </div>
</div>
```

---

### 15.2 Guided Wizard (Progress + Safe Defaults)

**Use for:** Step-by-step agent configuration for complex voice setups that require sequential decision-making.

**🔴 COMMAND:** Use `gap-8` between vertical steps to maintain clear grouping.
**🔴 COMMAND:** Pre-fill all fields with "Safe Defaults" to allow immediate "Next" actions.

---

#### Step Indicator Pattern

**🔴 COMMAND:** Step indicators must show three states: completed (checkmark + green-600), current (number + indigo-600), upcoming (number + gray-400).

**🔴 COMMAND:** Display "X of Y steps" in page header using `text-sm text-gray-600`.

**🟡 DIRECTIVE:** Use horizontal layout for step indicators on desktop, vertical condensed list on mobile.

```tsx
{
  /* Horizontal Step Indicator */
}
;<nav aria-label="Progress">
  <ol className="flex items-center gap-2">
    {/* Completed step */}
    <li className="flex items-center gap-2">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-600">
        <Check className="h-5 w-5 text-white" />
      </div>
      <span className="text-sm font-medium text-green-600">Setup</span>
      <ChevronRight className="h-4 w-4 text-gray-400" />
    </li>

    {/* Current step */}
    <li className="flex items-center gap-2">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-indigo-600 bg-white">
        <span className="text-sm font-semibold text-indigo-600">2</span>
      </div>
      <span className="text-sm font-semibold text-indigo-600">Voice Settings</span>
      <ChevronRight className="h-4 w-4 text-gray-400" />
    </li>

    {/* Upcoming step */}
    <li className="flex items-center gap-2">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-gray-300 bg-white">
        <span className="text-sm font-medium text-gray-500">3</span>
      </div>
      <span className="text-sm font-medium text-gray-500">Review</span>
    </li>
  </ol>
</nav>
```

---

#### Progress Bar Implementation

**🔴 COMMAND:** Progress bar must reflect completion percentage based on step count.

**🔴 COMMAND:** Use `h-2 rounded-full` for progress bar container with `bg-gray-200` background.

**🔴 COMMAND:** Progress fill uses `bg-indigo-600` with smooth transition animation.

```tsx
{
  /* Progress Bar */
}
;<div className="mb-8">
  <div className="mb-2 flex items-center justify-between">
    <span className="text-sm font-medium text-gray-700">Step 2 of 4</span>
    <span className="text-sm font-medium text-gray-700">50% complete</span>
  </div>
  <div className="h-2 overflow-hidden rounded-full bg-gray-200">
    <div
      className="h-full rounded-full bg-indigo-600 transition-all duration-300"
      style={{ width: '50%' }}
    />
  </div>
</div>
```

---

#### Field Validation Per Step

**🔴 COMMAND:** Display inline validation errors immediately after field interaction using `text-sm text-red-600`.

**🔴 COMMAND:** Show field-level errors with red-600 border and error icon.

**🔴 BOUNDARY:** Never allow progression to next step with validation errors present.

**🟡 DIRECTIVE:** Use red-50 background with red-600 border for error summary boxes at top of step.

```tsx
{
  /* Error Summary */
}
;<div className="mb-6 rounded-lg border border-red-600 bg-red-50 p-4">
  <div className="flex gap-3">
    <AlertCircle className="h-5 w-5 shrink-0 text-red-600" />
    <div>
      <h3 className="text-sm font-semibold text-red-800">Please fix the following errors:</h3>
      <ul className="mt-2 space-y-1 text-sm text-red-700">
        <li>• Agent name is required</li>
        <li>• Voice language must be selected</li>
      </ul>
    </div>
  </div>
</div>

{
  /* Field with error */
}
;<div>
  <label className="block text-sm font-medium text-gray-900">Agent Name</label>
  <input
    className="mt-1 block w-full rounded-sm border border-red-600 bg-white px-3 py-2 text-sm"
    aria-invalid="true"
    aria-describedby="name-error"
  />
  <p id="name-error" className="mt-1 text-sm text-red-600">
    Agent name is required
  </p>
</div>
```

---

#### Safe Defaults Strategy

**🔴 COMMAND:** All input fields must have pre-filled default values based on most common use case.

**🔴 COMMAND:** Use placeholder text only for format guidance, never for default values.

**🟡 DIRECTIVE:** Defaults should allow users to click "Next" immediately without modifications.

**Default Value Guidelines:**

| Field Type     | Default Strategy    | Example                    |
| -------------- | ------------------- | -------------------------- |
| Text input     | Most common value   | "Customer Support Agent"   |
| Dropdown       | Most popular option | Language: "English (US)"   |
| Number stepper | Expected average    | Response delay: "500ms"    |
| Toggle         | Safest option       | PII redaction: ON          |
| Radio group    | Recommended choice  | Voice type: "Professional" |

```tsx
{
  /* Pre-filled defaults */
}
;<div className="space-y-4">
  <div>
    <label className="block text-sm font-medium text-gray-900">Agent Name</label>
    <input
      type="text"
      defaultValue="Customer Support Agent"
      className="mt-1 block w-full rounded-sm border px-3 py-2 text-sm"
    />
  </div>

  <div>
    <label className="block text-sm font-medium text-gray-900">Voice Language</label>
    <select defaultValue="en-US" className="mt-1 block w-full rounded-sm border px-3 py-2 text-sm">
      <option value="en-US">English (US)</option>
      <option value="en-GB">English (UK)</option>
    </select>
  </div>
</div>
```

---

#### Navigation and Data Persistence

**🔴 COMMAND:** Wizard must persist data when navigating between steps using state management or local storage.

**🔴 COMMAND:** Back button must restore previously entered values exactly as user left them.

**🔴 BOUNDARY:** Never clear or reset data when user navigates backward unless explicitly requested.

**🟡 DIRECTIVE:** Show unsaved changes warning if user attempts to exit wizard without completing.

**Navigation Button Layout:**

- Cancel: Left-aligned, text-only or subtle border
- Previous: Right-aligned group, secondary style
- Next/Continue: Right-aligned group, primary style

```tsx
{
  /* Navigation buttons */
}
;<div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
  <button
    type="button"
    className="order-2 rounded-sm px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 sm:order-1"
  >
    Cancel
  </button>

  <div className="order-1 flex gap-3 sm:order-2">
    <button
      type="button"
      className="flex-1 rounded-sm border border-gray-300 px-4 py-2 text-sm font-semibold sm:flex-initial"
    >
      Previous
    </button>
    <button
      type="button"
      className="flex-1 rounded-sm bg-indigo-600 px-4 py-2 text-sm font-semibold text-white sm:flex-initial"
      disabled={hasErrors}
    >
      Next
    </button>
  </div>
</div>
```

---

#### Mobile Stack Behavior

**🔴 COMMAND:** Step indicators must collapse to vertical compact view on mobile breakpoints.

**🔴 COMMAND:** Show only current step details with summary line for previous/next steps.

**🟡 DIRECTIVE:** Navigation buttons stack vertically with full width on mobile, horizontal on desktop.

```tsx
{
  /* Mobile compact step indicator */
}
;<div className="block sm:hidden">
  <div className="flex items-center gap-2 text-sm">
    <span className="font-medium text-gray-900">Step 2 of 4:</span>
    <span className="text-gray-600">Voice Settings</span>
  </div>
  <div className="mt-2 h-1 overflow-hidden rounded-full bg-gray-200">
    <div className="h-full bg-indigo-600 transition-all" style={{ width: '50%' }} />
  </div>
</div>
```

---

#### Step Completion Indicators

**🔴 COMMAND:** Completed steps must display checkmark icon in green-600 circle.

**🔴 COMMAND:** Allow users to click completed steps to navigate backward and review/edit.

**🟡 DIRECTIVE:** Disable forward navigation to uncompleted steps to maintain sequential flow.

```tsx
{
  /* Clickable completed step */
}
;<button
  type="button"
  className="flex items-center gap-2 text-sm font-medium text-green-600 hover:text-green-700"
  onClick={() => goToStep(1)}
>
  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-600">
    <Check className="h-5 w-5 text-white" />
  </div>
  <span>Setup</span>
</button>
```

---

#### Wizard Header Pattern

**🔴 COMMAND:** Wizard header must include: title, step progress, optional description.

**🔴 COMMAND:** Header remains sticky on scroll with `sticky top-0` positioning.

**🟡 DIRECTIVE:** Use `border-b` to separate header from step content area.

```tsx
{
  /* Sticky wizard header */
}
;<div className="sticky top-0 z-10 border-b bg-white px-6 py-4">
  <div className="mb-3">
    <h1 className="text-xl font-bold text-gray-900">Create Voice Agent</h1>
    <p className="mt-1 text-sm text-gray-600">Configure your agent in 4 simple steps</p>
  </div>

  {/* Progress indicator */}
  <nav aria-label="Progress">{/* Step indicators */}</nav>
</div>
```

---

#### Step Content Container

**🔴 COMMAND:** Each step content uses consistent padding: `px-6 py-8` on desktop, `px-4 py-6` on mobile.

**🔴 COMMAND:** Group related fields with `space-y-6` for section spacing, `space-y-4` for field spacing.

**🟡 DIRECTIVE:** Maximum content width: `max-w-2xl` centered with `mx-auto` for optimal readability.

```tsx
{
  /* Step content container */
}
;<div className="px-4 py-6 sm:px-6 sm:py-8">
  <div className="mx-auto max-w-2xl">
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold text-gray-900">Voice Settings</h2>
        <p className="mt-1 text-sm text-gray-600">Choose how your agent will sound</p>
      </div>

      <div className="space-y-4">{/* Form fields */}</div>
    </div>
  </div>
</div>
```

---

#### Review Step Pattern

**🔴 COMMAND:** Final review step must display all collected data in description list format.

**🔴 COMMAND:** Each section must have "Edit" link that navigates back to relevant step.

**🔴 COMMAND:** Use Submit/Create as final action button label, not "Next".

```tsx
{
  /* Review step */
}
;<div className="space-y-6">
  <div className="rounded-lg border border-gray-200 bg-white p-6">
    <div className="mb-4 flex items-center justify-between">
      <h3 className="text-base font-semibold text-gray-900">Basic Information</h3>
      <button className="text-sm font-semibold text-indigo-600" onClick={() => goToStep(1)}>
        Edit
      </button>
    </div>
    <dl className="space-y-3">
      <div>
        <dt className="text-sm font-medium text-gray-500">Agent Name</dt>
        <dd className="mt-1 text-sm text-gray-900">Customer Support Agent</dd>
      </div>
    </dl>
  </div>

  {/* Final actions */}
  <div className="flex gap-3">
    <button className="flex-1 rounded-sm border px-4 py-2 text-sm font-semibold">
      Save as Draft
    </button>
    <button className="flex-1 rounded-sm bg-indigo-600 px-4 py-2 text-sm font-semibold text-white">
      Create Agent
    </button>
  </div>
</div>
```

---

#### Accessibility Requirements

**🔴 COMMAND:** Wizard must have `role="navigation"` on step indicator with `aria-label="Progress"`.

**🔴 COMMAND:** Current step must have `aria-current="step"` attribute.

**🔴 COMMAND:** Each step content area must have descriptive heading for screen readers.

**🔴 COMMAND:** Disabled "Next" button must include `aria-disabled="true"` with explanation.

**🟡 DIRECTIVE:** Use `aria-live="polite"` for validation error announcements.

---

#### Wizard Pattern Guidelines for AGENTS.MD

**Sequential Flow Management:**

- Always maintain linear progression (no skipping uncompleted steps forward)
- Allow backward navigation to completed steps for review/editing
- Persist all user input across navigation actions
- Validate each step before allowing forward progression

**Default Value Strategy:**

- Pre-fill every field with sensible defaults based on common use cases
- Use most popular option as default for dropdowns and radio groups
- Set safest/most conservative option as default for security settings
- Enable immediate "Next" action without forcing user input

**Progress Communication:**

- Display step number and total count prominently ("Step 2 of 4")
- Show percentage complete if helpful for user planning
- Use visual progress bar for at-a-glance completion status
- Indicate completed vs. current vs. upcoming steps clearly

**Validation and Error Handling:**

- Validate fields on blur (after user leaves field)
- Show inline errors immediately after interaction
- Display error summary at step level if multiple issues exist
- Block forward progression until all errors resolved
- Preserve valid data when navigating backward to fix errors

**Mobile Optimization:**

- Collapse detailed step indicators to compact progress bar
- Stack navigation buttons vertically with full width
- Reduce padding and spacing for smaller screens
- Ensure touch targets meet minimum 44x44px size

**Save and Exit Patterns:**

- Provide "Save as Draft" option for partial completion
- Warn users about unsaved changes before exit
- Allow resume from saved state when returning
- Clear distinction between "Save Draft" and final submission

**Step Completion:**

- Mark completed steps with clear visual indicator (checkmark)
- Enable backward navigation to any completed step
- Maintain data integrity when editing previous steps
- Show summary of all collected data in final review step

---

### 15.3 Simple → Advanced (Progressive Disclosure)

**Use for:** Keeping the interface clean while allowing expert overrides for LLM parameters by progressively revealing complexity based on user need.

**🟡 DIRECTIVE:** Default to "Simple" view; use a button link to reveal "Advanced" settings.

**🔴 COMMAND:** Labels for advanced settings must use "Subtext" (`text-sm`) styling.

---

#### Progressive Disclosure Philosophy

**🟡 DIRECTIVE:** Follow the principle of placing content in context—reveal advanced options only when users indicate they need them.

**🟡 DIRECTIVE:** Let users pick their own path—provide freedom to discover features progressively at their own pace.

**Core Principles:**

- **Good design is the foundation:** Simple view should be intuitive without requiring advanced options
- **Always in context:** Advanced settings appear within the relevant section, not separate pages
- **User-controlled:** Users decide when to reveal complexity, never forced

---

#### Simple View (Default State)

**🔴 COMMAND:** Simple view must include only essential parameters needed for 80% of use cases.

**🔴 COMMAND:** All fields must have safe, production-ready defaults pre-filled.

**🟡 DIRECTIVE:** Group related simple settings with `space-y-4` vertical spacing.

**Common Simple Parameters:**

| Category | Simple Setting    | Default Value |
| -------- | ----------------- | ------------- |
| Voice    | Language          | English (US)  |
| Voice    | Speaking Rate     | Normal        |
| Behavior | Response Length   | Concise       |
| Safety   | PII Redaction     | Enabled       |
| Tools    | Tool Access Level | Basic         |

```tsx
{
  /* Simple view */
}
;<div className="space-y-6">
  <div>
    <h3 className="text-base font-semibold text-gray-900">Basic Settings</h3>
    <p className="mt-1 text-sm text-gray-600">Essential configuration for your voice agent</p>
  </div>

  <div className="space-y-4">
    <div>
      <label className="block text-sm font-medium text-gray-900">Voice Language</label>
      <select
        defaultValue="en-US"
        className="mt-1 block w-full rounded-sm border px-3 py-2 text-sm"
      >
        <option value="en-US">English (US)</option>
        <option value="en-GB">English (UK)</option>
      </select>
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-900">Response Style</label>
      <select
        defaultValue="concise"
        className="mt-1 block w-full rounded-sm border px-3 py-2 text-sm"
      >
        <option value="concise">Concise</option>
        <option value="detailed">Detailed</option>
      </select>
    </div>
  </div>

  {/* Advanced toggle */}
  <button
    type="button"
    className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-700"
  >
    <ChevronRight className="h-4 w-4" />
    Show advanced settings
  </button>
</div>
```

---

#### Toggle Mechanism

**🔴 COMMAND:** Advanced toggle must use chevron icon (right when collapsed, down when expanded) with clear label text.

**🔴 COMMAND:** Toggle button uses `text-sm font-semibold text-indigo-600` styling.

**🟡 DIRECTIVE:** Position toggle at the bottom of simple settings section with `mt-6` spacing.

**Toggle Label Patterns:**

- Collapsed: "Show advanced settings" or "Show advanced [category] settings"
- Expanded: "Hide advanced settings" or "Hide advanced [category] settings"

```tsx
{
  /* Collapsed state */
}
;<button
  type="button"
  className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-700"
  onClick={() => setShowAdvanced(true)}
>
  <ChevronRight className="h-4 w-4" />
  Show advanced settings
</button>

{
  /* Expanded state */
}
;<button
  type="button"
  className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-700"
  onClick={() => setShowAdvanced(false)}
>
  <ChevronDown className="h-4 w-4" />
  Hide advanced settings
</button>
```

---

#### Advanced View (Expanded State)

**🔴 COMMAND:** Advanced section must appear immediately below the toggle with smooth transition animation.

**🔴 COMMAND:** Advanced settings container uses lighter background: `bg-gray-50 border border-gray-200 rounded-lg p-6`.

**🔴 COMMAND:** Advanced setting labels use `text-sm font-medium text-gray-900` with helper text in `text-sm text-gray-500`.

**🟡 DIRECTIVE:** Group advanced settings by technical complexity or user persona (curious vs. cautious users).

```tsx
{
  /* Advanced section */
}
;<div className="mt-4 overflow-hidden rounded-lg border border-gray-200 bg-gray-50 p-6">
  <div className="mb-4">
    <h4 className="text-sm font-semibold text-gray-900">Advanced LLM Parameters</h4>
    <p className="mt-1 text-sm text-gray-500">Fine-tune model behavior for specific use cases</p>
  </div>

  <div className="space-y-4">
    <div>
      <label className="block text-sm font-medium text-gray-900">Temperature</label>
      <p className="mt-1 text-sm text-gray-500">
        Controls randomness. Lower values make responses more focused and deterministic.
      </p>
      <input
        type="number"
        step="0.1"
        min="0"
        max="2"
        defaultValue="0.7"
        className="mt-2 block w-full rounded-sm border px-3 py-2 text-sm"
      />
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-900">Max Tokens</label>
      <p className="mt-1 text-sm text-gray-500">
        Maximum length of the response in tokens (roughly 4 characters per token)
      </p>
      <input
        type="number"
        defaultValue="1000"
        className="mt-2 block w-full rounded-sm border px-3 py-2 text-sm"
      />
    </div>
  </div>
</div>
```

---

#### Modified State Indicators

**🔴 COMMAND:** Advanced parameters modified from defaults must show indigo-600 dot indicator next to label.

**🔴 COMMAND:** Display "Reset to default" link button next to modified fields using `text-sm text-gray-600`.

**🟡 DIRECTIVE:** Show count of modified advanced settings in toggle button when collapsed.

```tsx
{
  /* Modified field indicator */
}
;<div>
  <div className="flex items-center gap-2">
    <label className="block text-sm font-medium text-gray-900">Temperature</label>
    <div className="h-2 w-2 rounded-full bg-indigo-600" />
  </div>
  <div className="mt-1 flex items-center justify-between">
    <p className="text-sm text-gray-500">Controls response randomness</p>
    <button className="text-sm font-medium text-gray-600 hover:text-gray-900">
      Reset to default
    </button>
  </div>
  <input
    type="number"
    value="1.2"
    className="mt-2 block w-full rounded-sm border px-3 py-2 text-sm"
  />
</div>

{
  /* Collapsed toggle with modification count */
}
;<button
  type="button"
  className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-700"
>
  <ChevronRight className="h-4 w-4" />
  Show advanced settings
  <span className="rounded-full bg-indigo-100 px-2 py-0.5 text-xs font-medium text-indigo-700">
    3 modified
  </span>
</button>
```

---

#### Expandable Text for Complex Explanations

**Use for:** Providing detailed explanations for advanced parameters without overwhelming the interface.

**🔴 COMMAND:** Use expandable text pattern for explanations longer than 2 sentences.

**🔴 COMMAND:** Expandable text trigger uses "Show more" label, collapsed uses "Show less".

**🟡 DIRECTIVE:** Always display critical information upfront; use expandable text only for supplementary details.

```tsx
{
  /* Expandable explanation */
}
;<div>
  <label className="block text-sm font-medium text-gray-900">Top P (Nucleus Sampling)</label>
  <div className="mt-1 text-sm text-gray-500">
    <p>Controls diversity by limiting token selection to top probability mass.</p>
    <button
      className="mt-1 text-sm font-semibold text-indigo-600 hover:text-indigo-700"
      onClick={() => setExpanded(!expanded)}
    >
      {expanded ? 'Show less' : 'Show more'}
    </button>
    {expanded && (
      <p className="mt-2">
        A value of 0.9 means only tokens comprising the top 90% probability mass are considered.
        Lower values make output more focused; higher values increase diversity. Generally, alter
        either temperature or top_p, but not both.
      </p>
    )}
  </div>
  <input
    type="number"
    step="0.1"
    min="0"
    max="1"
    defaultValue="1"
    className="mt-2 block w-full rounded-sm border px-3 py-2 text-sm"
  />
</div>
```

---

#### Information Overlays for In-Context Help

**Use for:** Providing persistent, non-intrusive explanations for technical parameters.

**🔴 COMMAND:** Use information overlay (info icon) next to parameter labels that may need clarification.

**🔴 COMMAND:** Overlay content must be concise: 1-3 sentences maximum, avoid jargon.

**🟡 DIRECTIVE:** Include external link to detailed documentation when available.

```tsx
{
  /* Parameter with info overlay */
}
;<div>
  <div className="flex items-center gap-2">
    <label className="block text-sm font-medium text-gray-900">Frequency Penalty</label>
    <button
      type="button"
      className="flex h-4 w-4 items-center justify-center rounded-full text-gray-400 hover:text-gray-600"
      aria-label="More information about frequency penalty"
    >
      <Info className="h-4 w-4" />
    </button>
  </div>
  <p className="mt-1 text-sm text-gray-500">Reduces likelihood of repeating the same phrases</p>
  <input
    type="number"
    step="0.1"
    min="-2"
    max="2"
    defaultValue="0"
    className="mt-2 block w-full rounded-sm border px-3 py-2 text-sm"
  />
</div>
```

---

#### Categorized Advanced Settings

**🔴 COMMAND:** Group advanced settings into logical categories with clear subheadings.

**🔴 COMMAND:** Category headings use `text-sm font-semibold text-gray-900` with divider lines between groups.

**🟡 DIRECTIVE:** Order categories by technical complexity: basic → intermediate → expert.

**Common Categories:**

- **Response Generation:** Temperature, max tokens, top_p
- **Content Control:** Frequency penalty, presence penalty, stop sequences
- **Performance:** Timeout, retry logic, caching
- **Safety & Compliance:** Content filtering, PII handling, logging

```tsx
{
  /* Categorized advanced section */
}
;<div className="space-y-6">
  {/* Category 1 */}
  <div>
    <h4 className="mb-3 text-sm font-semibold text-gray-900">Response Generation</h4>
    <div className="space-y-4">{/* Parameters */}</div>
  </div>

  <div className="border-t border-gray-200" />

  {/* Category 2 */}
  <div>
    <h4 className="mb-3 text-sm font-semibold text-gray-900">Content Control</h4>
    <div className="space-y-4">{/* Parameters */}</div>
  </div>
</div>
```

---

#### Preset Configurations

**Use for:** Offering curated advanced settings bundles for common use cases.

**🔴 COMMAND:** Display preset selector at top of advanced section using radio group or dropdown.

**🔴 COMMAND:** Presets must include: "Balanced" (default), "Creative", "Precise", "Custom".

**🟡 DIRECTIVE:** Selecting a preset automatically updates all advanced parameters; switching to "Custom" when user manually changes any value.

```tsx
{
  /* Preset selector */
}
;<div className="mb-6">
  <label className="block text-sm font-medium text-gray-900">Configuration Preset</label>
  <p className="mt-1 text-sm text-gray-500">
    Choose a preset or customize individual parameters below
  </p>
  <select
    value={preset}
    onChange={(e) => applyPreset(e.target.value)}
    className="mt-2 block w-full rounded-sm border px-3 py-2 text-sm"
  >
    <option value="balanced">Balanced (Recommended)</option>
    <option value="creative">Creative (Higher variability)</option>
    <option value="precise">Precise (Focused responses)</option>
    <option value="custom">Custom</option>
  </select>
</div>
```

---

#### Warning Indicators for Risky Settings

**🔴 COMMAND:** Parameters that can negatively impact performance must show warning indicator.

**🔴 COMMAND:** Use amber-50 background with amber-600 border for warning sections.

**🟡 DIRECTIVE:** Include brief explanation of risk with warning indicator.

```tsx
{
  /* Risky parameter with warning */
}
;<div className="rounded-lg border border-amber-600 bg-amber-50 p-4">
  <div className="flex gap-3">
    <AlertTriangle className="h-5 w-5 shrink-0 text-amber-600" />
    <div className="min-w-0 flex-1">
      <label className="block text-sm font-semibold text-amber-900">Disable Safety Filters</label>
      <p className="mt-1 text-sm text-amber-700">
        Removing safety filters may result in inappropriate responses. Only disable for controlled
        testing environments.
      </p>
      <div className="mt-3 flex items-center gap-2">
        <input type="checkbox" id="disable-safety" className="rounded-sm" />
        <label htmlFor="disable-safety" className="text-sm font-medium text-amber-900">
          I understand the risks
        </label>
      </div>
    </div>
  </div>
</div>
```

---

#### Keyboard Shortcuts for Power Users

**🟡 DIRECTIVE:** Provide keyboard shortcut to toggle advanced settings for efficiency.

**🔴 COMMAND:** Display shortcut indicator next to toggle button using keyboard shortcut component.

**Recommended Shortcuts:**

- Toggle advanced: `Cmd/Ctrl + Shift + A`
- Reset to defaults: `Cmd/Ctrl + R`

```tsx
{
  /* Toggle with keyboard shortcut indicator */
}
;<div className="flex items-center gap-3">
  <button
    type="button"
    className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600"
  >
    <ChevronRight className="h-4 w-4" />
    Show advanced settings
  </button>
  <kbd className="rounded border border-gray-300 bg-gray-50 px-2 py-0.5 font-mono text-xs text-gray-600">
    ⌘⇧A
  </kbd>
</div>
```

---

#### Accessibility Requirements

**🔴 COMMAND:** Advanced sections must use `aria-expanded` attribute on toggle button.

**🔴 COMMAND:** Advanced content container must have `id` that matches toggle's `aria-controls`.

**🔴 COMMAND:** Collapsing advanced section must not lose focus or scroll position.

**🟡 DIRECTIVE:** Screen readers should announce when advanced settings are revealed or hidden.

```tsx
{/* Accessible toggle implementation */}
<button
  type="button"
  aria-expanded={showAdvanced}
  aria-controls="advanced-settings"
  className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600"
>
  {showAdvanced ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
  {showAdvanced ? 'Hide' : 'Show'} advanced settings
</button>

<div
  id="advanced-settings"
  className={showAdvanced ? 'block' : 'hidden'}
  role="region"
  aria-label="Advanced settings"
>
  {/* Advanced content */}
</div>
```

---

#### Progressive Disclosure Guidelines for AGENTS.MD

**Design Foundation:**

- Default to simple, intuitive interface that works for 80% of users
- Never require advanced settings for basic functionality
- Pre-fill all fields with safe, production-ready defaults
- Use progressive disclosure to manage complexity, not hide critical features

**User Control Principles:**

- Let users decide when they need more control
- Provide clear toggle mechanism with descriptive labels
- Allow both expansion and collapse of advanced sections
- Maintain state when navigating between simple/advanced views

**Context and Clarity:**

- Keep advanced options within relevant section, not separate pages
- Provide inline help (info overlays, expandable text) for complex parameters
- Use clear, jargon-free explanations for technical concepts
- Link to detailed documentation for comprehensive information

**Visual Distinction:**

- Use lighter background color for advanced sections
- Clearly separate simple from advanced with visual hierarchy
- Indicate modified values with visual markers
- Use appropriate warning indicators for risky settings

**Categorization Strategy:**

- Group advanced settings by functionality or user persona
- Order categories from basic to expert complexity
- Use clear category headings with consistent styling
- Consider offering preset configurations for common patterns

**Modification Tracking:**

- Show which advanced parameters have been changed
- Provide easy reset to default values
- Display modification count in collapsed toggle
- Persist modifications across sessions

**Support for Different User Types:**

- **Curious users:** Provide freedom to explore, clear signifiers for advanced features
- **Cautious users:** Offer presets, detailed explanations, safe defaults
- **Power users:** Keyboard shortcuts, batch operations, expert mode

**Mobile Considerations:**

- Advanced sections may need different layout on mobile
- Ensure touch targets for toggles meet minimum size
- Consider full-screen overlay for complex advanced settings on small screens

**Performance Optimization:**

- Lazy load advanced option values until section is expanded
- Use smooth transitions for expansion/collapse
- Avoid layout shift when toggling advanced sections

---

### 15.4 Inline Glossary

**Use for:** Defining technical terms (e.g., Latency, Temperature) without leaving the builder context by providing persistent, in-context explanations.

**🟡 DIRECTIVE:** Use "Passive Voice" for definitions.

**🔴 COMMAND:** Trigger via hover or click on dotted-underlined text.

---

#### Visual Treatment of Terms

**🔴 COMMAND:** Glossary terms must use dotted underline with `border-b-2 border-dotted border-gray-400` styling.

**🔴 COMMAND:** Term text color uses `text-gray-900` (not link color) to distinguish from navigation links.

**🟡 DIRECTIVE:** Cursor changes to `cursor-help` on hover to signal additional information is available.

```tsx
{
  /* Glossary term inline */
}
;<p className="text-sm text-gray-600">
  The agent uses{' '}
  <button
    type="button"
    className="cursor-help border-b-2 border-dotted border-gray-400 text-gray-900 hover:border-gray-600"
    onClick={() => showTooltip('temperature')}
  >
    temperature
  </button>{' '}
  to control response variability.
</p>
```

---

#### Tooltip Implementation

**🔴 COMMAND:** Tooltip appears on hover (desktop) with 200ms delay, on click/tap (mobile) with immediate display.

**🔴 COMMAND:** Tooltip container uses `bg-gray-900 text-white rounded-sm px-3 py-2 text-sm` with max width of `max-w-xs`.

**🔴 COMMAND:** Position tooltip above term by default; adjust to below if insufficient space above.

**🟡 DIRECTIVE:** Include small arrow pointing to triggering term using pseudo-elements or SVG.

```tsx
{
  /* Tooltip overlay */
}
;<div
  role="tooltip"
  className="absolute z-50 max-w-xs rounded-sm bg-gray-900 px-3 py-2 text-sm text-white shadow-lg"
>
  <p>
    Controls randomness in responses. Lower values produce more focused output; higher values
    increase creativity.
  </p>
  {/* Arrow */}
  <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-gray-900" />
</div>
```

---

#### Definition Content Guidelines

**🔴 COMMAND:** Definitions must be under 50 words and readable in 5 seconds or less.

**🔴 COMMAND:** Use sentence case throughout definition text.

**🔴 COMMAND:** End all sentences with periods.

**🟡 DIRECTIVE:** Focus on 2-3 key pieces of information: what it is, why it matters, typical usage.

**Definition Structure Pattern:**

1. **What:** Brief explanation of the term (1 sentence)
2. **Impact:** How it affects behavior (1 sentence)
3. **Range/Default:** Common values or recommendations (optional)

**Content Rules:**

- Remove unnecessary words that don't change meaning
- Use simple, understandable language
- Avoid technical jargon unless absolutely necessary
- If jargon is required, provide reference links

```tsx
{/* Good definition examples */}

{/* Example 1: Temperature */}
"Controls randomness in responses. Lower values (0.1-0.5) produce focused,
deterministic output; higher values (0.7-1.5) increase creativity and variation."

{/* Example 2: Latency */}
"Time between user speech ending and agent response beginning. Measured in
milliseconds. Target: under 500ms for natural conversation flow."

{/* Example 3: Context Window */}
"Maximum amount of conversation history the agent can remember. Measured in
tokens (roughly 4 characters each). Larger windows improve coherence but
increase cost."
```

---

#### Extended Definitions with Links

**🔴 COMMAND:** For complex terms requiring more explanation, include "Learn more" link to documentation.

**🔴 COMMAND:** External links must use descriptive text with external link icon, positioned at end of definition.

**🟡 DIRECTIVE:** Links should not break reading flow; place after complete explanation.

```tsx
{
  /* Definition with external link */
}
;<div
  role="tooltip"
  className="absolute z-50 max-w-xs rounded-sm bg-gray-900 px-3 py-2 text-sm text-white shadow-lg"
>
  <p>
    Reduces likelihood of repeating tokens that have already appeared. Range: -2.0 to 2.0. Higher
    values penalize repetition more strongly.
  </p>
  <a
    href="https://docs.example.com/frequency-penalty"
    target="_blank"
    rel="noopener noreferrer"
    className="mt-2 inline-flex items-center gap-1 text-indigo-300 hover:text-indigo-200"
  >
    Learn more about frequency penalty
    <ExternalLink className="h-3 w-3" />
  </a>
</div>
```

---

#### Passive Voice for Definitions

**🟡 DIRECTIVE:** Use passive voice to maintain focus on the concept rather than the agent or system.

**Passive Voice Examples:**

```tsx
{
  /* Correct: Passive voice */
}
;('Maximum tokens is set to control response length.')
;('The threshold is measured in milliseconds.')
;('Values are constrained between 0 and 2.')

{
  /* Avoid: Active voice */
}
;('You set maximum tokens to control response length.')
;('The system measures the threshold in milliseconds.')
;('We constrain values between 0 and 2.')
```

---

#### Terminology vs. Information Overlay

**Use Terminology Overlay (Glossary) When:**

- Defining a technical term or concept
- Explaining specialized vocabulary
- Providing reference information about parameters

**Use Information Overlay (Info Icon) When:**

- Explaining how a feature works
- Providing contextual help about UI elements
- Giving usage tips or recommendations

```tsx
{
  /* Terminology overlay - for definitions */
}
;<span className="cursor-help border-b-2 border-dotted border-gray-400 text-gray-900">
  temperature
</span>

{
  /* Information overlay - for contextual help */
}
;<div className="flex items-center gap-2">
  <label className="text-sm font-medium text-gray-900">Response Delay</label>
  <button className="flex h-4 w-4 items-center justify-center text-gray-400 hover:text-gray-600">
    <Info className="h-4 w-4" />
  </button>
</div>
```

---

#### Mobile and Touch Considerations

**🔴 COMMAND:** On mobile, tooltip must appear on tap and include close button or tap-outside-to-dismiss behavior.

**🔴 COMMAND:** Ensure touch target for term is minimum 44x44px with adequate padding.

**🟡 DIRECTIVE:** Consider showing tooltip in fixed position overlay on mobile to avoid viewport issues.

```tsx
{
  /* Mobile-optimized glossary term */
}
;<button
  type="button"
  className="inline-block min-h-[44px] border-b-2 border-dotted border-gray-400 py-2 text-gray-900"
  onClick={() => setActiveTooltip('temperature')}
>
  temperature
</button>

{
  /* Mobile tooltip with close button */
}
;<div className="fixed inset-x-4 bottom-4 z-50 rounded-lg bg-gray-900 p-4 text-sm text-white shadow-xl sm:hidden">
  <button
    className="absolute top-2 right-2 rounded-sm p-1 hover:bg-gray-800"
    onClick={() => setActiveTooltip(null)}
  >
    <X className="h-4 w-4" />
  </button>
  <p>{definition}</p>
</div>
```

---

#### Glossary Index Pattern

**Use for:** Providing centralized access to all defined terms when multiple glossary items exist.

**🟡 DIRECTIVE:** Include "View glossary" link in help menu or settings for quick reference.

**🔴 COMMAND:** Glossary index displays terms alphabetically with expandable definitions.

```tsx
{
  /* Glossary index modal */
}
;<div className="rounded-lg bg-white p-6">
  <h2 className="text-xl font-bold text-gray-900">Glossary</h2>
  <p className="mt-1 text-sm text-gray-600">
    Technical terms and concepts used in voice agent configuration
  </p>

  <div className="mt-6 space-y-4">
    <div>
      <button
        className="flex w-full items-center justify-between text-left"
        onClick={() => toggleTerm('temperature')}
      >
        <span className="text-sm font-semibold text-gray-900">Temperature</span>
        <ChevronDown className="h-4 w-4 text-gray-500" />
      </button>
      {expandedTerm === 'temperature' && (
        <p className="mt-2 text-sm text-gray-600">
          Controls randomness in responses. Lower values produce more focused output; higher values
          increase creativity.
        </p>
      )}
    </div>
    {/* More terms */}
  </div>
</div>
```

---

#### Keyboard Navigation

**🔴 COMMAND:** Glossary terms must be keyboard accessible with focus indicators.

**🔴 COMMAND:** Tooltip should appear on focus and dismiss on blur or Escape key.

**🟡 DIRECTIVE:** Use `Tab` to navigate between glossary terms, `Enter` or `Space` to trigger tooltip.

```tsx
{
  /* Keyboard accessible term */
}
;<button
  type="button"
  className="cursor-help border-b-2 border-dotted border-gray-400 text-gray-900 hover:border-gray-600 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500"
  onFocus={() => showTooltip('temperature')}
  onBlur={() => hideTooltip()}
  onKeyDown={(e) => e.key === 'Escape' && hideTooltip()}
  aria-describedby="tooltip-temperature"
>
  temperature
</button>
```

---

#### Consistent Term Usage

**🔴 COMMAND:** Use identical term text throughout interface; avoid synonyms that may confuse users.

**🟡 DIRECTIVE:** Maintain glossary term list in centralized configuration to ensure consistency.

**Term Consistency Examples:**

```tsx
{
  /* Consistent */
}
;('Configure the temperature parameter...')
;('Adjust temperature to control...')
;('Current temperature: 0.7')

{
  /* Inconsistent - avoid */
}
;('Configure the temperature parameter...')
;('Adjust randomness to control...') // Use "temperature" not "randomness"
;('Current heat setting: 0.7') // Use "temperature" not "heat"
```

---

#### Accessibility Requirements

**🔴 COMMAND:** Glossary terms must have `role="button"` and appropriate ARIA attributes.

**🔴 COMMAND:** Tooltip must have `role="tooltip"` and be linked via `aria-describedby`.

**🔴 COMMAND:** Ensure sufficient color contrast for dotted underline (WCAG AA: 3:1 minimum).

**🟡 DIRECTIVE:** Screen readers should announce "glossary term" or "definition available" on focus.

```tsx
{/* Fully accessible glossary term */}
<button
  type="button"
  role="button"
  aria-describedby="tooltip-temperature"
  aria-label="Definition for temperature"
  className="border-b-2 border-dotted border-gray-400 text-gray-900 cursor-help"
>
  temperature
</button>

<div
  id="tooltip-temperature"
  role="tooltip"
  aria-live="polite"
  className="absolute z-50 max-w-xs rounded-sm bg-gray-900 px-3 py-2 text-sm text-white"
>
  Controls randomness in responses. Lower values produce more focused output.
</div>
```

---

#### Definition Quality Checklist

**Before publishing a glossary definition, verify:**

- [ ] Under 50 words total
- [ ] Readable in 5 seconds or less
- [ ] Uses sentence case
- [ ] All sentences end with periods
- [ ] Passive voice for term explanation
- [ ] No unnecessary jargon (or linked if required)
- [ ] Provides 2-3 key facts about the term
- [ ] Includes practical context (ranges, defaults, impact)
- [ ] Link to documentation if term requires deeper explanation

---

#### Inline Glossary Guidelines for AGENTS.MD

**When to Use Glossary Terms:**

- Technical parameters not obvious to general users (Temperature, Top P, Frequency Penalty)
- Domain-specific concepts (Latency, Context Window, Token Limits)
- Acronyms and abbreviations (NLU, ASR, TTS, PII)
- Platform-specific terminology unique to voice agents

**When NOT to Use:**

- Common words users already understand
- Terms that appear in labels with sufficient context
- Concepts better explained through UI design itself
- Every technical word (avoid over-glossarization)

**Content Creation Principles:**

- Focus on what users need to know, not exhaustive technical detail
- Explain impact and practical usage, not just academic definition
- Use analogies or comparisons when helpful
- Provide ranges, defaults, or recommendations when applicable
- Link to comprehensive documentation for complex topics

**Interaction Design:**

- Make glossary terms visually distinct but not like navigation links
- Ensure tooltips don't obscure important UI elements
- Position tooltips intelligently based on available viewport space
- Provide alternative access method (glossary index) for comprehensive reference

**Progressive Learning:**

- Start with essential terms in simple view
- Introduce advanced terms only in advanced settings sections
- Allow users to access definitions repeatedly without penalty
- Consider user learning curve when deciding term prominence

**Consistency Standards:**

- Use same term throughout interface for same concept
- Maintain central glossary source of truth
- Apply consistent visual treatment across all instances
- Update all instances when definition changes

**Mobile Optimization:**

- Ensure touch targets meet minimum size requirements
- Use tap instead of hover for mobile interactions
- Consider modal or overlay approach for small screens
- Always provide close/dismiss mechanism on mobile

**Accessibility Requirements:**

- Full keyboard navigation support
- Screen reader announcements for definitions
- Sufficient color contrast for visual indicators
- Semantic HTML with appropriate ARIA attributes
- Focus management for tooltip display/dismiss

---

### 15.5 Tool Picker Cards (Risks)

**Use for:** Selecting external capabilities (APIs, Database access) for the agent.

**🔴 COMMAND:** Cards with high-risk tools (e.g., "Delete Data") must feature a "red/Red" danger indicator.

**🟡 DIRECTIVE:** Describe implications (financial/access) within the card body using "Description List" formatting.

---

#### Risk Level Indicator System

**🔴 COMMAND:** Risk levels: High (red-600 border + icon), Medium (amber-600), Low (gray-300).

**🔴 COMMAND:** High-risk tools require confirmation dialog before enabling.

**🟡 DIRECTIVE:** Display risk level badge prominently in card header.

```tsx
{
  /* High-risk tool card */
}
;<div className="rounded-lg border-2 border-red-600 bg-white p-6">
  <div className="flex items-start gap-3">
    <AlertTriangle className="h-5 w-5 shrink-0 text-red-600" />
    <div className="min-w-0 flex-1">
      <div className="flex items-center gap-2">
        <h3 className="text-lg font-bold text-gray-900">Delete Data API</h3>
        <span className="rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-700">
          High Risk
        </span>
      </div>
    </div>
  </div>
</div>
```

---

#### Permission Requirements Display

**🔴 COMMAND:** Display required permissions using description list format within card body.

**🔴 COMMAND:** Use `text-sm text-gray-600` for permission descriptions.

```tsx
<dl className="mt-4 space-y-2">
  <div className="flex items-start gap-2">
    <dt className="text-sm font-medium text-gray-900">Permissions:</dt>
    <dd className="text-sm text-gray-600">Read/Write access to user database</dd>
  </div>
</dl>
```

---

#### Cost Implications Warning

**🟡 DIRECTIVE:** Display cost implications as "~$X per 1k calls" in card footer.

**🔴 COMMAND:** Use `text-sm text-gray-500` for cost information.

```tsx
<div className="mt-4 border-t pt-4">
  <p className="text-sm text-gray-500">Estimated cost: ~$2.50 per 1k calls</p>
</div>
```

---

#### Multi-Select Behavior

**🔴 COMMAND:** Selected tools must show checkmark icon in top-right corner.

**🔴 COMMAND:** Use `border-indigo-500 border-2` for selected state.

```tsx
{
  /* Selected tool card */
}
;<div className="relative rounded-lg border-2 border-indigo-500 bg-white p-6">
  <div className="absolute top-4 right-4 flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600">
    <Check className="h-4 w-4 text-white" />
  </div>
  {/* Card content */}
</div>
```

---

#### Filtering and Search

**🟡 DIRECTIVE:** Provide search input and category filters above tool grid.

**🔴 COMMAND:** Search placeholder: "Search tools…" (with ellipsis).

```tsx
<div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
  <div className="relative flex-1 sm:max-w-xs">
    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
      <Search className="h-4 w-4 text-gray-400" />
    </div>
    <input
      type="text"
      placeholder="Search tools…"
      className="block w-full rounded-sm border py-2 pr-3 pl-10 text-sm"
    />
  </div>
  <select className="block rounded-sm border px-3 py-2 text-sm">
    <option>All categories</option>
  </select>
</div>
```

---

#### Tool Dependency Warnings

**🔴 BOUNDARY:** Never allow enabling dependent tools without parent tool.

**🔴 COMMAND:** Disabled dependent tools must show explanation with link to required parent tool.

**🟡 DIRECTIVE:** Use amber-50 background with amber-600 border for dependency warnings.

```tsx
{
  /* Dependent tool warning */
}
;<div className="rounded-lg border border-amber-600 bg-amber-50 p-4">
  <div className="flex gap-3">
    <AlertCircle className="h-5 w-5 shrink-0 text-amber-600" />
    <div>
      <p className="text-sm font-medium text-amber-900">
        Requires: <button className="text-indigo-600 underline">Database Access</button>
      </p>
      <p className="mt-1 text-sm text-amber-700">
        Enable the parent tool first to use this capability.
      </p>
    </div>
  </div>
</div>
```

---

#### Accessibility Requirements

**🔴 COMMAND:** Tool cards must be keyboard navigable with visible focus indicators.

**🔴 COMMAND:** Risk level indicators must include `aria-label` describing severity.

**🟡 DIRECTIVE:** Use `aria-describedby` to link risk warnings to card content.

---

#### Tool Picker Pattern Guidelines for AGENTS.MD

**Risk Communication:**

- Always display risk level prominently before user selects tool
- Require explicit confirmation for high-risk tools
- Explain consequences clearly in plain language
- Show cost implications upfront to prevent surprises

**Dependency Management:**

- Prevent enabling dependent tools without prerequisites
- Provide clear path to enable required parent tools
- Visualize dependency relationships when helpful
- Block selection until dependencies are met

**Selection Patterns:**

- Support multi-select for tools that work together
- Show clear visual feedback for selected state
- Allow easy deselection with confirmation for high-risk tools
- Display selected count in header or summary area

---

### 15.6 Conversation Flow (Happy + Fallback)

**Use for:** Visualizing the primary path and error-handling branches.

**🔴 COMMAND:** Use `items-baseline gap-2` for step labels to ensure vertical alignment.

**🔴 COMMAND:** Fallback paths must be visually distinct (e.g., dashed borders).

---

#### Node Types

**🔴 COMMAND:** Support four node types: start, decision, action, end.

**🔴 COMMAND:** Nodes must use `gap-4` for internal spacing.

**Node Type Styling:**

| Node Type | Visual Treatment                       | Use Case              |
| --------- | -------------------------------------- | --------------------- |
| Start     | Green-600 circle with "Start" label    | Entry point           |
| Decision  | Diamond shape with indigo-600 border   | Conditional branching |
| Action    | Rounded rectangle with gray-200 border | Process step          |
| End       | Red-600 circle with "End" label        | Exit point            |

```tsx
{
  /* Start node */
}
;<div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-600">
  <span className="text-sm font-semibold text-white">Start</span>
</div>

{
  /* Decision node */
}
;<div className="flex h-16 w-16 rotate-45 items-center justify-center border-2 border-indigo-600 bg-white">
  <span className="-rotate-45 text-xs font-medium text-indigo-600">User intent?</span>
</div>

{
  /* Action node */
}
;<div className="rounded-lg border border-gray-200 bg-white px-4 py-3">
  <p className="text-sm font-medium text-gray-900">Process request</p>
</div>

{
  /* End node */
}
;<div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600">
  <span className="text-sm font-semibold text-white">End</span>
</div>
```

---

#### Connection Line Styles

**🔴 COMMAND:** Primary path uses solid indigo-500 connections.

**🔴 COMMAND:** Fallback paths use dashed amber-500 connections.

**🔴 COMMAND:** Error paths use dashed red-500 connections.

**🟡 DIRECTIVE:** Display decision conditions on connection lines as `text-xs` badges.

```tsx
{
  /* Primary path connection */
}
;<svg className="text-indigo-500">
  <path d="M 0 0 L 100 0" stroke="currentColor" strokeWidth="2" fill="none" />
</svg>

{
  /* Fallback path connection */
}
;<svg className="text-amber-500">
  <path d="M 0 0 L 100 0" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" fill="none" />
  <text x="50" y="-5" className="text-xs font-medium text-amber-600">
    Timeout
  </text>
</svg>

{
  /* Error path connection */
}
;<svg className="text-red-500">
  <path d="M 0 0 L 100 0" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" fill="none" />
</svg>
```

---

#### Conditional Branch Indicators

**🟡 DIRECTIVE:** Display decision conditions on connection lines as `text-xs` badges.

**🔴 COMMAND:** Condition labels use `text-xs font-medium` with appropriate color matching path type.

```tsx
<div className="relative">
  <svg className="text-indigo-500">
    <path d="M 0 0 L 100 0" stroke="currentColor" strokeWidth="2" fill="none" />
  </svg>
  <span className="absolute -top-2 left-1/2 -translate-x-1/2 rounded bg-white px-1.5 py-0.5 text-xs font-medium text-indigo-600">
    Yes
  </span>
</div>
```

---

#### Loop Detection Warnings

**🟡 DIRECTIVE:** Display warning when flow contains potential infinite loops.

**🔴 COMMAND:** Loop warnings use amber-50 background with amber-600 border.

```tsx
<div className="rounded-lg border border-amber-600 bg-amber-50 p-4">
  <div className="flex gap-3">
    <AlertTriangle className="h-5 w-5 shrink-0 text-amber-600" />
    <div>
      <p className="text-sm font-semibold text-amber-900">Potential infinite loop detected</p>
      <p className="mt-1 text-sm text-amber-700">
        Decision node "User intent?" connects back to itself without exit condition.
      </p>
    </div>
  </div>
</div>
```

---

#### Flow Validation Rules

**🔴 BOUNDARY:** Maximum 15 nodes per flow before requiring subflow creation.

**🔴 COMMAND:** Validate flow completeness: must have start and end nodes.

**🟡 DIRECTIVE:** Show validation errors inline with affected nodes.

```tsx
{
  /* Validation error on node */
}
;<div className="rounded-lg border-2 border-red-600 bg-red-50 px-4 py-3">
  <div className="flex items-center gap-2">
    <AlertCircle className="h-4 w-4 text-red-600" />
    <p className="text-sm font-medium text-red-900">No connection to end node</p>
  </div>
</div>
```

---

#### Export/Import Functionality

**🟡 DIRECTIVE:** Provide export/import buttons in flow editor header.

**🔴 COMMAND:** Export format: JSON with clear schema documentation.

**🟡 DIRECTIVE:** Import must validate structure before applying changes.

---

#### Accessibility Requirements

**🔴 COMMAND:** Flow nodes must be keyboard navigable with arrow key navigation.

**🔴 COMMAND:** Connection lines must have `aria-label` describing path type and condition.

**🟡 DIRECTIVE:** Provide text-based flow summary for screen readers.

---

#### Conversation Flow Pattern Guidelines for AGENTS.MD

**Visual Hierarchy:**

- Use distinct colors and line styles for different path types
- Make primary path most prominent (solid, indigo)
- Clearly distinguish fallback and error paths (dashed, amber/red)
- Use consistent node styling across flow diagram

**Flow Validation:**

- Enforce maximum node limit to prevent complexity
- Require start and end nodes for valid flows
- Detect and warn about potential infinite loops
- Validate all nodes have connections (no orphaned nodes)

**User Guidance:**

- Display decision conditions clearly on connection lines
- Provide inline validation errors with specific fixes
- Show flow summary or statistics (node count, path count)
- Enable undo/redo for flow editing operations

---

### 15.7 Test Simulator (Transcripts + Debugging)

**Use for:** Real-time testing of the voice agent performance.

**🔴 COMMAND:** Use `role="status"` and `aria-live="polite"` for incoming transcript text.

**🔴 COMMAND:** Debugging logs must use "Subtext" (`text-sm`) and be collapsible.

---

#### Conversation Transcript Layout

**🔴 COMMAND:** User messages align left with gray-100 background.

**🔴 COMMAND:** Agent messages align right with indigo-50 background.

**🔴 COMMAND:** Timestamps use `text-xs text-gray-500` below each message.

```tsx
{
  /* User message */
}
;<div className="flex justify-start">
  <div className="max-w-[80%] rounded-lg bg-gray-100 px-4 py-2">
    <p className="text-sm text-gray-900">Hello, I need help with my order.</p>
    <p className="mt-1 text-xs text-gray-500">10:23:45 AM</p>
  </div>
</div>

{
  /* Agent message */
}
;<div className="flex justify-end">
  <div className="max-w-[80%] rounded-lg bg-indigo-50 px-4 py-2">
    <p className="text-sm text-gray-900">I'd be happy to help with your order.</p>
    <p className="mt-1 text-xs text-gray-500">10:23:47 AM</p>
  </div>
</div>
```

---

#### User/Agent Message Differentiation

**🔴 COMMAND:** Use distinct background colors and alignment to differentiate message types.

**🟡 DIRECTIVE:** Include avatar or icon indicator for additional visual distinction.

```tsx
{
  /* Message with avatar */
}
;<div className="flex items-start gap-3">
  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-600">
    <span className="text-xs font-semibold text-white">AI</span>
  </div>
  <div className="max-w-[80%] rounded-lg bg-indigo-50 px-4 py-2">
    <p className="text-sm text-gray-900">Message content</p>
  </div>
</div>
```

---

#### Timestamp Display

**🔴 COMMAND:** Timestamps use `text-xs text-gray-500` below each message.

**🟡 DIRECTIVE:** Show relative time (e.g., "2s ago") for recent messages, absolute time for older messages.

```tsx
;<p className="mt-1 text-xs text-gray-500">10:23:45 AM</p>
{
  /* Or relative */
}
;<p className="mt-1 text-xs text-gray-500">2 seconds ago</p>
```

---

#### Debug Panel Implementation

**🔴 COMMAND:** Debug panel must be collapsible with default collapsed state.

**🔴 COMMAND:** Debugging logs must use "Subtext" (`text-sm`) styling.

**🟡 DIRECTIVE:** Group debug information by category: Variables, API Calls, Errors, Performance.

```tsx
{
  /* Collapsible debug panel */
}
;<div className="border-t">
  <button
    className="flex w-full items-center justify-between px-4 py-3 text-left"
    onClick={() => setDebugOpen(!debugOpen)}
  >
    <span className="text-sm font-semibold text-gray-900">Debug Information</span>
    <ChevronDown
      className={`h-4 w-4 text-gray-500 transition-transform ${debugOpen ? 'rotate-180' : ''}`}
    />
  </button>

  {debugOpen && (
    <div className="border-t bg-gray-50 px-4 py-3">
      <div className="space-y-2">
        <div>
          <p className="text-xs font-medium text-gray-500">Variables</p>
          <pre className="mt-1 text-sm text-gray-700">{JSON.stringify(variables, null, 2)}</pre>
        </div>
      </div>
    </div>
  )}
</div>
```

---

#### Variable Inspection

**🟡 DIRECTIVE:** Display conversation variables in expandable debug section.

**🔴 COMMAND:** Use monospace font for variable values with proper formatting.

```tsx
<div className="rounded border bg-gray-50 p-3">
  <p className="text-xs font-medium text-gray-500">Conversation Variables</p>
  <dl className="mt-2 space-y-1">
    <div className="flex gap-2">
      <dt className="text-sm font-medium text-gray-700">user_name:</dt>
      <dd className="text-sm text-gray-600">John Doe</dd>
    </div>
  </dl>
</div>
```

---

#### Error Highlighting in Transcript

**🔴 COMMAND:** Errors in transcript must show red-100 background with red-600 text.

**🔴 COMMAND:** Include error icon and description for failed messages.

```tsx
{
  /* Error message */
}
;<div className="flex justify-end">
  <div className="max-w-[80%] rounded-lg border border-red-600 bg-red-100 px-4 py-2">
    <div className="flex items-start gap-2">
      <AlertCircle className="h-4 w-4 shrink-0 text-red-600" />
      <div>
        <p className="text-sm font-medium text-red-900">Error processing request</p>
        <p className="mt-1 text-xs text-red-700">API timeout after 5 seconds</p>
      </div>
    </div>
    <p className="mt-1 text-xs text-gray-500">10:23:50 AM</p>
  </div>
</div>
```

---

#### Latency Metrics Display

**🟡 DIRECTIVE:** Display latency metrics as badges: <200ms (green), 200-500ms (amber), >500ms (red).

```tsx
{
  /* Latency badge */
}
;<span
  className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${
    latency < 200
      ? 'bg-green-100 text-green-700'
      : latency < 500
        ? 'bg-amber-100 text-amber-700'
        : 'bg-red-100 text-red-700'
  }`}
>
  {latency}ms
</span>
```

---

#### Export Transcript Functionality

**🟡 DIRECTIVE:** Provide export button in transcript header.

**🔴 COMMAND:** Export formats: JSON, CSV, or plain text.

```tsx
<button className="inline-flex items-center gap-2 rounded-sm border px-3 py-2 text-sm font-semibold">
  <Download className="h-4 w-4" />
  Export transcript
</button>
```

---

#### Audio Playback Controls

**🟡 DIRECTIVE:** If applicable, provide audio playback controls with waveform visualization.

**🔴 COMMAND:** Use standard media controls: play, pause, seek, volume.

---

#### Accessibility Requirements

**🔴 COMMAND:** Transcript container must have `role="log"` with `aria-live="polite"`.

**🔴 COMMAND:** Each message must have `aria-label` describing sender and timestamp.

**🟡 DIRECTIVE:** Provide keyboard shortcuts for common actions (play, pause, export).

---

#### Test Simulator Pattern Guidelines for AGENTS.MD

**Real-Time Updates:**

- Use `aria-live="polite"` for incoming messages to announce to screen readers
- Update transcript smoothly without disrupting user's reading position
- Show loading indicators for pending agent responses
- Display connection status when testing live agents

**Message Organization:**

- Clearly distinguish user vs. agent messages with visual and semantic differences
- Group related messages or show conversation threads when helpful
- Allow filtering or searching within transcript
- Provide clear timestamps for debugging timing issues

**Debug Information:**

- Keep debug panel collapsed by default to reduce visual clutter
- Organize debug data by category for easy navigation
- Show variable values in readable format (not raw JSON)
- Highlight errors prominently with actionable information

**Performance Metrics:**

- Display latency for each message exchange
- Show aggregate statistics (average latency, error rate)
- Visualize performance trends over conversation duration
- Alert on performance degradation or errors

---

### 15.8 Error Translation (Plain-Language + Recommended Fix)

**Use for:** Converting technical LLM errors into actionable user steps.

**🔴 COMMAND:** Never show raw code errors. Provide a "Context" and a "Path to resolve."

**🔴 COMMAND:** Maximum 2 lines for inline form-based errors.

---

#### Error Severity Levels

**🔴 COMMAND:** Critical errors use red-50 background with red-700 text.

**🔴 COMMAND:** Warning errors use amber-50 background with amber-700 text.

**🔴 COMMAND:** Info errors use blue-50 background with blue-700 text.

```tsx
{
  /* Critical error */
}
;<div className="rounded-lg border border-red-600 bg-red-50 p-4">
  <div className="flex gap-3">
    <AlertCircle className="h-5 w-5 shrink-0 text-red-600" />
    <div>
      <h3 className="text-sm font-semibold text-red-800">Unable to connect to API</h3>
      <p className="mt-1 text-sm text-red-700">
        The service is temporarily unavailable. Please try again in a few minutes.
      </p>
    </div>
  </div>
</div>

{
  /* Warning error */
}
;<div className="rounded-lg border border-amber-600 bg-amber-50 p-4">
  <div className="flex gap-3">
    <AlertTriangle className="h-5 w-5 shrink-0 text-amber-600" />
    <div>
      <h3 className="text-sm font-semibold text-amber-800">Rate limit approaching</h3>
      <p className="mt-1 text-sm text-amber-700">
        You've used 90% of your API quota. Consider upgrading your plan.
      </p>
    </div>
  </div>
</div>

{
  /* Info error */
}
;<div className="rounded-lg border border-blue-600 bg-blue-50 p-4">
  <div className="flex gap-3">
    <Info className="h-5 w-5 shrink-0 text-blue-600" />
    <div>
      <h3 className="text-sm font-semibold text-blue-800">Configuration updated</h3>
      <p className="mt-1 text-sm text-blue-700">
        Your changes have been saved. The agent will use new settings on next call.
      </p>
    </div>
  </div>
</div>
```

---

#### Error Code to Message Mapping

**🔴 BOUNDARY:** Never show raw error codes without translation.

**🔴 COMMAND:** Each error must include: plain-language description, cause, and resolution steps.

**🟡 DIRECTIVE:** Map common error codes to user-friendly messages with actionable guidance.

```tsx
const errorMessages = {
  API_TIMEOUT: {
    title: 'Request took too long',
    description: 'The API did not respond within the expected time.',
    cause: 'The service may be experiencing high load or network issues.',
    resolution:
      'Try again in a few moments. If the problem persists, check your network connection.',
  },
  INVALID_CONFIG: {
    title: 'Configuration error',
    description: 'One or more settings are invalid.',
    cause: 'A required field is missing or contains an invalid value.',
    resolution: 'Review the highlighted fields and correct any errors.',
  },
}
```

---

#### Suggested Fix Action Buttons

**🟡 DIRECTIVE:** Provide one-click fix buttons for common resolvable errors.

**🔴 COMMAND:** Action buttons use primary styling (indigo-600) and descriptive labels.

```tsx
<div className="mt-4 flex gap-3">
  <button className="rounded-sm bg-indigo-600 px-4 py-2 text-sm font-semibold text-white">
    Retry connection
  </button>
  <button className="rounded-sm border border-gray-300 px-4 py-2 text-sm font-semibold">
    Check network settings
  </button>
</div>
```

---

#### Related Documentation Links

**🟡 DIRECTIVE:** Include links to relevant documentation for complex errors.

**🔴 COMMAND:** Links use `text-sm text-indigo-600` with external link icon.

```tsx
<a
  href="/docs/troubleshooting/api-errors"
  className="inline-flex items-center gap-1 text-sm font-semibold text-indigo-600 hover:text-indigo-700"
>
  Learn more about API errors
  <ExternalLink className="h-4 w-4" />
</a>
```

---

#### Error Frequency Tracking Display

**🟡 DIRECTIVE:** Show error frequency when same error occurs multiple times.

**🔴 COMMAND:** Display count badge: "This error occurred 3 times in the last hour."

```tsx
<div className="mt-2 flex items-center gap-2">
  <span className="text-xs text-gray-500">This error occurred</span>
  <span className="rounded-full bg-red-100 px-2 py-0.5 text-xs font-medium text-red-700">
    3 times
  </span>
  <span className="text-xs text-gray-500">in the last hour</span>
</div>
```

---

#### Stack Trace Toggle (for Developers)

**🟡 DIRECTIVE:** Provide expandable stack trace for developer debugging.

**🔴 COMMAND:** Stack trace uses monospace font with `text-xs` sizing.

**🔴 COMMAND:** Default to collapsed state; show "Show technical details" toggle.

```tsx
;<button
  className="mt-2 text-sm font-semibold text-gray-600 hover:text-gray-900"
  onClick={() => setShowStack(!showStack)}
>
  {showStack ? 'Hide' : 'Show'} technical details
</button>

{
  showStack && (
    <pre className="mt-2 overflow-auto rounded border bg-gray-50 p-3 text-xs">{stackTrace}</pre>
  )
}
```

---

#### Inline Form Errors

**🔴 COMMAND:** Maximum 2 lines for inline form-based errors.

**🔴 COMMAND:** Use `text-sm text-red-600` for error message below field.

```tsx
<div>
  <label className="block text-sm font-medium text-gray-900">API Key</label>
  <input
    className="mt-1 block w-full rounded-sm border border-red-600 px-3 py-2 text-sm"
    aria-invalid="true"
    aria-describedby="api-key-error"
  />
  <p id="api-key-error" className="mt-1 text-sm text-red-600">
    API key is required and must be at least 32 characters.
  </p>
</div>
```

---

#### Copy Error Details Button

**🟡 DIRECTIVE:** Provide "Copy error details" button for support ticket creation.

**🔴 COMMAND:** Button includes copy icon and confirmation feedback.

```tsx
<button
  className="inline-flex items-center gap-2 rounded-sm border px-3 py-2 text-sm font-semibold"
  onClick={handleCopyError}
>
  <Copy className="h-4 w-4" />
  Copy error details
</button>
```

---

#### Accessibility Requirements

**🔴 COMMAND:** Error messages must have `role="alert"` or `aria-live="assertive"` for critical errors.

**🔴 COMMAND:** Use `aria-describedby` to link error messages to form fields.

**🟡 DIRECTIVE:** Provide sufficient color contrast and don't rely solely on color to convey severity.

---

#### Error Translation Pattern Guidelines for AGENTS.MD

**Plain Language Principles:**

- Translate all technical error codes to human-readable messages
- Explain what happened in user's terms, not system terms
- Provide context about why the error occurred
- Offer clear, actionable steps to resolve the issue

**Error Presentation:**

- Use appropriate severity levels with matching visual treatment
- Keep inline errors concise (maximum 2 lines)
- Provide expandable details for complex errors
- Include one-click fixes when possible

**Developer Support:**

- Hide technical details by default but make accessible
- Provide copy functionality for support tickets
- Include error codes in technical details section
- Link to relevant documentation for complex issues

**Error Frequency:**

- Track and display error frequency to identify patterns
- Alert users to recurring issues that may need attention
- Provide aggregate error statistics in dashboard views

---

### 15.9 Publish Checklist (Blocked Items)

**Use for:** Final verification before the voice agent goes live.

**🔴 COMMAND:** Use "red/Red" for blocked items and "Gray/Neutral" for optional tasks.

**🔴 BOUNDARY:** Disable the "Publish" button until all critical items are resolved.

---

#### Checklist Item States

**🔴 COMMAND:** Blocked items show red-600 X icon with underlined "Fix now" link.

**🔴 COMMAND:** Complete items show green-600 checkmark icon.

**🔴 COMMAND:** Incomplete items show gray-400 circle icon.

**🔴 COMMAND:** Optional items show gray-300 circle with italic label.

```tsx
{
  /* Blocked item */
}
;<div className="flex items-start gap-3">
  <X className="h-5 w-5 shrink-0 text-red-600" />
  <div className="min-w-0 flex-1">
    <p className="text-sm font-medium text-gray-900">API endpoint configured</p>
    <p className="mt-1 text-sm text-gray-600">Required for agent to function</p>
    <button className="mt-2 text-sm font-semibold text-indigo-600 underline">Fix now</button>
  </div>
</div>

{
  /* Complete item */
}
;<div className="flex items-start gap-3">
  <Check className="h-5 w-5 shrink-0 text-green-600" />
  <div className="min-w-0 flex-1">
    <p className="text-sm font-medium text-gray-900">Voice settings configured</p>
  </div>
</div>

{
  /* Incomplete item */
}
;<div className="flex items-start gap-3">
  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-gray-400" />
  <div className="min-w-0 flex-1">
    <p className="text-sm font-medium text-gray-900">Test conversation completed</p>
  </div>
</div>

{
  /* Optional item */
}
;<div className="flex items-start gap-3">
  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-gray-300" />
  <div className="min-w-0 flex-1">
    <p className="text-sm font-medium text-gray-500 italic">Custom branding applied</p>
  </div>
</div>
```

---

#### Dependency Visualization

**🟡 DIRECTIVE:** Show dependencies between checklist items when applicable.

**🔴 COMMAND:** Use indentation or connection lines to indicate item relationships.

```tsx
<div className="space-y-2">
  <div className="flex items-start gap-3">
    <Check className="h-5 w-5 shrink-0 text-green-600" />
    <p className="text-sm font-medium text-gray-900">API endpoint configured</p>
  </div>
  <div className="ml-8 flex items-start gap-3">
    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-gray-400" />
    <p className="text-sm font-medium text-gray-900">API endpoint tested</p>
    <span className="text-xs text-gray-500">(Requires: API endpoint configured)</span>
  </div>
</div>
```

---

#### One-Click Fix Actions

**🟡 DIRECTIVE:** Provide "Fix now" links that navigate directly to relevant configuration.

**🔴 COMMAND:** Fix links use `text-sm font-semibold text-indigo-600 underline` styling.

```tsx
<button
  className="text-sm font-semibold text-indigo-600 underline hover:text-indigo-700"
  onClick={() => navigateToFix('api-endpoint')}
>
  Fix now
</button>
```

---

#### Estimated Publish Time

**🟡 DIRECTIVE:** Display estimated time to publish when all checks pass.

**🔴 COMMAND:** Use `text-sm text-gray-600` for time estimate.

```tsx
<div className="mt-4 rounded-lg border bg-gray-50 p-4">
  <p className="text-sm text-gray-600">
    Estimated publish time: <span className="font-medium text-gray-900">2-3 minutes</span>
  </p>
</div>
```

---

#### Rollback Plan Requirement

**🟡 DIRECTIVE:** Show rollback plan status in checklist for production deployments.

**🔴 COMMAND:** Rollback plan must be confirmed before publishing to production.

```tsx
<div className="flex items-start gap-3">
  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-gray-400" />
  <div className="min-w-0 flex-1">
    <p className="text-sm font-medium text-gray-900">Rollback plan confirmed</p>
    <p className="mt-1 text-sm text-gray-600">
      Required for production deployments. Review rollback procedure in settings.
    </p>
  </div>
</div>
```

---

#### Completion Percentage Display

**🟡 DIRECTIVE:** Display completion percentage in header: "7/10 checks passed".

**🔴 COMMAND:** Use `text-sm text-gray-600` for completion status.

```tsx
<div className="mb-6 flex items-center justify-between">
  <h2 className="text-xl font-bold text-gray-900">Publish Checklist</h2>
  <p className="text-sm text-gray-600">
    <span className="font-semibold text-gray-900">7</span> of{' '}
    <span className="font-semibold text-gray-900">10</span> checks passed
  </p>
</div>
```

---

#### Publish Button State

**🔴 BOUNDARY:** Publish button must remain disabled until all non-optional items complete.

**🔴 COMMAND:** Disabled button uses `opacity-50 cursor-not-allowed` with `aria-disabled="true"`.

```tsx
<button
  disabled={!allChecksPassed}
  aria-disabled={!allChecksPassed}
  className={`rounded-sm px-4 py-2 text-sm font-semibold text-white ${
    allChecksPassed
      ? 'bg-indigo-600 hover:bg-indigo-700'
      : 'cursor-not-allowed bg-gray-400 opacity-50'
  }`}
>
  Publish Agent
</button>
```

---

#### Accessibility Requirements

**🔴 COMMAND:** Checklist items must be keyboard navigable with focus indicators.

**🔴 COMMAND:** Use `aria-label` to describe item state: "Blocked: API endpoint not configured".

**🟡 DIRECTIVE:** Announce completion status changes to screen readers.

---

#### Publish Checklist Pattern Guidelines for AGENTS.MD

**Checklist Organization:**

- Group related items together (e.g., API configuration, voice settings)
- Show dependencies clearly to help users understand requirements
- Prioritize critical items at top of list
- Mark optional items clearly to reduce confusion

**Blocked Item Handling:**

- Make blocked items highly visible with red indicators
- Provide direct path to fix each blocked item
- Explain why item is required when helpful
- Allow users to skip optional items without blocking publish

**Progress Communication:**

- Show completion percentage prominently
- Update progress in real-time as items are completed
- Display estimated time to completion when applicable
- Celebrate completion of all required items

**Publish Readiness:**

- Clearly distinguish between required and optional items
- Disable publish button until all required items pass
- Show rollback plan requirement for production
- Provide summary of what will be published before final confirmation

---

### 15.10 Safety Rails (PII + Confirmations)

**Use for:** Preventing the agent from collecting or sharing sensitive user data.

**🔴 COMMAND:** High-impact safety changes require a "Moderate-impact" confirmation dialog.

**🔴 COMMAND:** Use "Active Voice" to state exactly what data is being protected.

---

#### Multiple Toggle Patterns

**🔴 COMMAND:** Safety toggles must show impact description with `text-sm text-gray-500`.

**🔴 COMMAND:** Disabling safety rails requires confirmation dialog with written justification.

```tsx
<div className="rounded-lg border bg-white shadow-sm">
  <div className="border-b px-4 py-3">
    <h3 className="text-base font-semibold">Safety Rails</h3>
  </div>
  <div className="space-y-4 p-4">
    <div className="flex items-center justify-between">
      <div className="space-y-1">
        <p className="text-sm font-medium">Redact PII</p>
        <p className="text-sm text-gray-500">
          Automatically masks SSNs and credit cards in conversation transcripts.
        </p>
      </div>
      <input type="checkbox" className="rounded-sm" />
    </div>
  </div>
</div>
```

---

#### Risk Impact Visualization

**🟡 DIRECTIVE:** Display risk level indicator for each safety rail.

**🔴 COMMAND:** High-risk toggles use red-600 border when disabled.

```tsx
<div className="rounded-lg border-2 border-red-600 bg-white p-4">
  <div className="flex items-center justify-between">
    <div>
      <div className="flex items-center gap-2">
        <p className="text-sm font-medium">Disable PII Redaction</p>
        <span className="rounded-full bg-red-100 px-2 py-0.5 text-xs font-medium text-red-700">
          High Risk
        </span>
      </div>
      <p className="mt-1 text-sm text-gray-500">
        Sensitive data will be visible in transcripts and logs.
      </p>
    </div>
    <input type="checkbox" className="rounded-sm" />
  </div>
</div>
```

---

#### Audit Log Preview

**🟡 DIRECTIVE:** Show "Last modified by X on Y" below each safety rail.

**🔴 COMMAND:** Use `text-xs text-gray-500` for audit information.

```tsx
<div className="mt-2">
  <p className="text-xs text-gray-500">
    Last modified by <span className="font-medium">admin@example.com</span> on Jan 24, 2026
  </p>
</div>
```

---

#### Override Justification Requirement

**🔴 COMMAND:** Disabling safety rails requires confirmation dialog with written justification.

**🔴 BOUNDARY:** PII redaction cannot be disabled without admin role.

```tsx
{
  /* Confirmation dialog for disabling safety rail */
}
;<div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4">
  <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
    <h2 className="text-lg font-semibold">Disable PII Redaction?</h2>
    <p className="mt-2 text-sm text-gray-600">
      This will allow sensitive data to appear in transcripts. Please provide a justification.
    </p>
    <textarea
      className="mt-4 block w-full rounded-sm border px-3 py-2 text-sm"
      placeholder="Justification for disabling this safety rail..."
      rows={3}
    />
    <div className="mt-4 flex gap-3">
      <button className="flex-1 rounded-sm border px-4 py-2 text-sm font-semibold">Cancel</button>
      <button className="flex-1 rounded-sm bg-red-600 px-4 py-2 text-sm font-semibold text-white">
        Disable
      </button>
    </div>
  </div>
</div>
```

---

#### Active Voice for Safety Descriptions

**🔴 COMMAND:** Use "Active Voice" to state exactly what data is being protected.

```tsx
{
  /* Correct: Active voice */
}
;<p className="text-sm text-gray-500">
  The system masks credit card numbers and SSNs in all conversation transcripts.
</p>

{
  /* Avoid: Passive voice */
}
;<p className="text-sm text-gray-500">
  Credit card numbers and SSNs are masked in conversation transcripts.
</p>
```

---

#### Accessibility Requirements

**🔴 COMMAND:** Safety toggles must have clear labels and descriptions.

**🔴 COMMAND:** Confirmation dialogs must implement focus trap and keyboard navigation.

**🟡 DIRECTIVE:** Announce safety changes to screen readers with appropriate severity.

---

#### Safety Rails Pattern Guidelines for AGENTS.MD

**Safety Communication:**

- Use active voice to clearly state what protection is provided
- Explain impact of enabling/disabling each safety rail
- Show risk level prominently for high-impact settings
- Require explicit justification for disabling protections

**Confirmation Patterns:**

- Require confirmation for all high-impact safety changes
- Request written justification for disabling critical protections
- Enforce role-based permissions (admin required for sensitive changes)
- Log all safety rail modifications with audit trail

**Visual Hierarchy:**

- Make high-risk toggles visually distinct (red borders, warning icons)
- Show impact descriptions clearly below each toggle
- Display audit information (who changed what, when)
- Group related safety settings together

**Reference:**

- [Guardrails Implementation Best Practice](https://medium.com/@dickson.lukose/guardrails-implementation-best-practice-e5fa2c1e4e09)

---

### 15.11 Voice-Specific Controls

**Use for:** Configuring voice-specific parameters that affect speech synthesis and recognition.

**🟡 DIRECTIVE:** Group voice controls by category: Speech Output, Speech Input, Audio Processing.

---

#### Interrupt Handling Settings

**🟡 DIRECTIVE:** Provide toggle for barge-in (interrupt) capability.

**🔴 COMMAND:** Use description list format to explain interrupt behavior.

```tsx
<div className="space-y-4">
  <div>
    <label className="block text-sm font-medium text-gray-900">Allow Interruptions</label>
    <p className="mt-1 text-sm text-gray-500">
      Users can interrupt the agent while it's speaking. Disable for strict turn-taking.
    </p>
    <input type="checkbox" className="mt-2 rounded-sm" />
  </div>
</div>
```

---

#### Speech Rate/Pitch/Volume Controls

**🟡 DIRECTIVE:** Provide sliders or number inputs for speech parameters.

**🔴 COMMAND:** Display current value and range (e.g., "Rate: 1.0x (0.5x - 2.0x)").

```tsx
<div>
  <div className="flex items-center justify-between">
    <label className="block text-sm font-medium text-gray-900">Speech Rate</label>
    <span className="text-sm text-gray-600">1.0x</span>
  </div>
  <input type="range" min="0.5" max="2.0" step="0.1" defaultValue="1.0" className="mt-2 w-full" />
  <div className="mt-1 flex justify-between text-xs text-gray-500">
    <span>0.5x (Slow)</span>
    <span>2.0x (Fast)</span>
  </div>
</div>
```

---

#### Silence Detection Thresholds

**🟡 DIRECTIVE:** Configure silence timeout for turn-taking detection.

**🔴 COMMAND:** Use milliseconds with clear description of behavior.

```tsx
<div>
  <label className="block text-sm font-medium text-gray-900">Silence Timeout</label>
  <p className="mt-1 text-sm text-gray-500">
    Time to wait (in milliseconds) before considering user finished speaking.
  </p>
  <input
    type="number"
    defaultValue="500"
    className="mt-2 block w-full rounded-sm border px-3 py-2 text-sm"
  />
  <p className="mt-1 text-xs text-gray-500">Range: 200ms - 2000ms</p>
</div>
```

---

#### Background Noise Handling

**🟡 DIRECTIVE:** Provide noise cancellation and sensitivity settings.

**🔴 COMMAND:** Use toggle for noise cancellation with description of impact.

```tsx
<div>
  <div className="flex items-center justify-between">
    <div>
      <p className="text-sm font-medium text-gray-900">Noise Cancellation</p>
      <p className="mt-1 text-sm text-gray-500">
        Reduces background noise but may affect speech recognition in quiet environments.
      </p>
    </div>
    <input type="checkbox" className="rounded-sm" />
  </div>
</div>
```

---

#### Language/Accent Selection

**🔴 COMMAND:** Use dropdown for language selection with accent variants.

**🟡 DIRECTIVE:** Group languages by region with clear labels.

```tsx
<div>
  <label className="block text-sm font-medium text-gray-900">Voice Language</label>
  <select className="mt-1 block w-full rounded-sm border px-3 py-2 text-sm">
    <option value="en-US">English (United States)</option>
    <option value="en-GB">English (United Kingdom)</option>
    <option value="en-AU">English (Australia)</option>
    <option value="es-ES">Spanish (Spain)</option>
    <option value="es-MX">Spanish (Mexico)</option>
  </select>
</div>
```

---

#### Accessibility Requirements

**🔴 COMMAND:** All voice controls must have descriptive labels and help text.

**🟡 DIRECTIVE:** Provide audio preview for voice settings when applicable.

---

#### Voice Controls Pattern Guidelines for AGENTS.MD

**Parameter Organization:**

- Group related settings together (output, input, processing)
- Provide clear descriptions of what each setting affects
- Show current values and acceptable ranges
- Offer presets for common configurations

**User Guidance:**

- Explain impact of each setting on user experience
- Provide audio previews when possible
- Include recommended values for common use cases
- Warn about potential issues (e.g., noise cancellation in quiet rooms)

---

### 15.12 Analytics Dashboard

**Use for:** Monitoring voice agent performance, usage, and costs.

**🟡 DIRECTIVE:** Organize metrics by category: Performance, Usage, Costs, Quality.

---

#### Call Success Metrics

**🔴 COMMAND:** Display success rate as percentage with trend indicator.

**🟡 DIRECTIVE:** Show breakdown by call outcome (completed, abandoned, failed).

```tsx
<div className="rounded-lg border bg-white p-6">
  <h3 className="text-base font-semibold text-gray-900">Call Success Rate</h3>
  <div className="mt-4">
    <div className="flex items-baseline gap-2">
      <span className="text-3xl font-bold text-gray-900">94.2%</span>
      <span className="text-sm font-medium text-green-600">+2.1%</span>
    </div>
    <p className="mt-2 text-sm text-gray-600">Last 30 days</p>
  </div>
</div>
```

---

#### Latency Visualization

**🟡 DIRECTIVE:** Display latency metrics as time-series chart or summary statistics.

**🔴 COMMAND:** Show average, median, and p95 latency values.

```tsx
<div className="rounded-lg border bg-white p-6">
  <h3 className="text-base font-semibold text-gray-900">Response Latency</h3>
  <dl className="mt-4 grid grid-cols-3 gap-4">
    <div>
      <dt className="text-xs text-gray-500">Average</dt>
      <dd className="mt-1 text-lg font-semibold text-gray-900">245ms</dd>
    </div>
    <div>
      <dt className="text-xs text-gray-500">Median</dt>
      <dd className="mt-1 text-lg font-semibold text-gray-900">198ms</dd>
    </div>
    <div>
      <dt className="text-xs text-gray-500">P95</dt>
      <dd className="mt-1 text-lg font-semibold text-gray-900">512ms</dd>
    </div>
  </dl>
</div>
```

---

#### Error Rate Tracking

**🔴 COMMAND:** Display error rate with breakdown by error type.

**🟡 DIRECTIVE:** Show error trends over time with sparkline chart.

```tsx
<div className="rounded-lg border bg-white p-6">
  <h3 className="text-base font-semibold text-gray-900">Error Rate</h3>
  <div className="mt-4">
    <div className="flex items-baseline gap-2">
      <span className="text-3xl font-bold text-gray-900">2.3%</span>
      <span className="text-sm font-medium text-red-600">-0.5%</span>
    </div>
    <div className="mt-4 space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-600">API Timeout</span>
        <span className="text-sm font-medium text-gray-900">1.2%</span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-600">Invalid Response</span>
        <span className="text-sm font-medium text-gray-900">0.8%</span>
      </div>
    </div>
  </div>
</div>
```

---

#### Cost per Conversation

**🟡 DIRECTIVE:** Display cost metrics with breakdown by component.

**🔴 COMMAND:** Show total cost and average cost per conversation.

```tsx
<div className="rounded-lg border bg-white p-6">
  <h3 className="text-base font-semibold text-gray-900">Costs</h3>
  <dl className="mt-4 space-y-3">
    <div className="flex items-center justify-between">
      <dt className="text-sm text-gray-600">Total (Last 30 days)</dt>
      <dd className="text-sm font-semibold text-gray-900">$1,234.56</dd>
    </div>
    <div className="flex items-center justify-between">
      <dt className="text-sm text-gray-600">Average per conversation</dt>
      <dd className="text-sm font-semibold text-gray-900">$0.12</dd>
    </div>
  </dl>
</div>
```

---

#### User Satisfaction Scores

**🟡 DIRECTIVE:** Display satisfaction metrics when available from post-call surveys.

**🔴 COMMAND:** Show average rating with distribution breakdown.

```tsx
<div className="rounded-lg border bg-white p-6">
  <h3 className="text-base font-semibold text-gray-900">User Satisfaction</h3>
  <div className="mt-4">
    <div className="flex items-baseline gap-2">
      <span className="text-3xl font-bold text-gray-900">4.2</span>
      <span className="text-sm text-gray-600">/ 5.0</span>
    </div>
    <p className="mt-2 text-sm text-gray-600">Based on 1,234 responses</p>
  </div>
</div>
```

---

#### Analytics Dashboard Pattern Guidelines for AGENTS.MD

**Metric Organization:**

- Group related metrics together in logical sections
- Use consistent card layout for all metric displays
- Show trends and comparisons (vs. previous period)
- Provide drill-down capability for detailed analysis

**Visualization:**

- Use charts for time-series data (line charts, bar charts)
- Display key numbers prominently with context
- Show percentage changes with color coding (green up, red down)
- Provide date range selectors for flexible time periods

**Actionability:**

- Highlight metrics that need attention (errors, high costs)
- Provide links to detailed reports or configuration
- Show recommendations based on metrics when applicable
- Enable export of analytics data for external analysis

---

### 15.13 Version Comparison

**Use for:** Comparing different versions of agent configuration and performance.

**🟡 DIRECTIVE:** Provide side-by-side diff view for configuration changes.

---

#### Side-by-Side Configuration Diff

**🔴 COMMAND:** Use description list format to show configuration differences.

**🟡 DIRECTIVE:** Highlight added, removed, and modified settings with color coding.

```tsx
<div className="grid grid-cols-2 gap-4">
  <div>
    <h3 className="text-base font-semibold text-gray-900">Version 2.1</h3>
    <dl className="mt-4 space-y-2">
      <div>
        <dt className="text-sm font-medium text-gray-500">Voice Language</dt>
        <dd className="mt-1 text-sm text-gray-900">English (US)</dd>
      </div>
    </dl>
  </div>
  <div>
    <h3 className="text-base font-semibold text-gray-900">Version 2.2</h3>
    <dl className="mt-4 space-y-2">
      <div className="rounded bg-green-50 p-2">
        <dt className="text-sm font-medium text-green-700">Voice Language</dt>
        <dd className="mt-1 text-sm text-green-900">English (UK)</dd>
      </div>
    </dl>
  </div>
</div>
```

---

#### Performance Metric Comparison

**🟡 DIRECTIVE:** Display performance metrics side-by-side with change indicators.

**🔴 COMMAND:** Show percentage change with color coding (green for improvement, red for degradation).

```tsx
<div className="space-y-4">
  <div className="flex items-center justify-between">
    <span className="text-sm text-gray-600">Average Latency</span>
    <div className="flex items-center gap-3">
      <span className="text-sm font-medium text-gray-900">245ms</span>
      <span className="text-sm font-medium text-green-600">→ 198ms (-19%)</span>
    </div>
  </div>
</div>
```

---

#### A/B Testing Setup

**🟡 DIRECTIVE:** Provide interface for configuring A/B tests between versions.

**🔴 COMMAND:** Show traffic split percentage and test duration.

```tsx
<div className="rounded-lg border bg-white p-6">
  <h3 className="text-base font-semibold text-gray-900">A/B Test Configuration</h3>
  <div className="mt-4 space-y-4">
    <div>
      <label className="block text-sm font-medium text-gray-900">Traffic Split</label>
      <div className="mt-2 flex items-center gap-4">
        <div className="flex-1">
          <p className="text-sm text-gray-600">Version A</p>
          <input type="range" min="0" max="100" defaultValue="50" className="mt-1 w-full" />
          <p className="mt-1 text-sm font-medium text-gray-900">50%</p>
        </div>
        <div className="flex-1">
          <p className="text-sm text-gray-600">Version B</p>
          <input type="range" min="0" max="100" defaultValue="50" className="mt-1 w-full" />
          <p className="mt-1 text-sm font-medium text-gray-900">50%</p>
        </div>
      </div>
    </div>
  </div>
</div>
```

---

#### Rollback Decision Support

**🟡 DIRECTIVE:** Provide comparison data to help decide whether to rollback.

**🔴 COMMAND:** Highlight key differences that may impact rollback decision.

```tsx
<div className="rounded-lg border border-amber-600 bg-amber-50 p-4">
  <div className="flex gap-3">
    <AlertTriangle className="h-5 w-5 shrink-0 text-amber-600" />
    <div>
      <h3 className="text-sm font-semibold text-amber-900">Performance Degradation Detected</h3>
      <p className="mt-1 text-sm text-amber-700">
        Current version shows 15% increase in error rate compared to previous version.
      </p>
      <button className="mt-3 text-sm font-semibold text-amber-900 underline">
        Review rollback options
      </button>
    </div>
  </div>
</div>
```

---

#### Version Comparison Pattern Guidelines for AGENTS.MD

**Comparison Display:**

- Use side-by-side layout for easy comparison
- Highlight differences clearly with color coding
- Show both configuration and performance metrics
- Provide context about when changes were made

**Decision Support:**

- Surface key metrics that indicate success or failure
- Show trends over time, not just point-in-time comparison
- Provide recommendations based on comparison data
- Enable easy rollback when issues are detected

---

### 15.14 Collaboration & Permissions

**Use for:** Managing team access, edit history, and approval workflows for agent configurations.

**🟡 DIRECTIVE:** Organize by: Team Management, Edit History, Comments, Approval Workflows.

---

#### Team Member Roles

**🔴 COMMAND:** Display team members with role badges using description list format.

**🟡 DIRECTIVE:** Support roles: Owner, Admin, Editor, Viewer.

```tsx
<div className="rounded-lg border bg-white p-6">
  <h3 className="text-base font-semibold text-gray-900">Team Members</h3>
  <dl className="mt-4 divide-y">
    <div className="flex items-center justify-between py-3">
      <div>
        <dt className="text-sm font-medium text-gray-900">john@example.com</dt>
        <dd className="mt-1 text-sm text-gray-600">Owner</dd>
      </div>
      <span className="rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-medium text-indigo-700">
        Owner
      </span>
    </div>
  </dl>
</div>
```

---

#### Edit History/Audit Trail

**🟡 DIRECTIVE:** Display chronological list of configuration changes.

**🔴 COMMAND:** Show who made change, what changed, and when using `text-sm` styling.

```tsx
<div className="space-y-3">
  <div className="flex items-start gap-3">
    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-100">
      <User className="h-4 w-4 text-gray-600" />
    </div>
    <div className="min-w-0 flex-1">
      <p className="text-sm font-medium text-gray-900">
        <span className="font-semibold">admin@example.com</span> updated Voice Settings
      </p>
      <p className="mt-1 text-sm text-gray-600">
        Changed language from English (US) to English (UK)
      </p>
      <p className="mt-1 text-xs text-gray-500">2 hours ago</p>
    </div>
  </div>
</div>
```

---

#### Comment Threads on Configurations

**🟡 DIRECTIVE:** Provide inline commenting on specific configuration sections.

**🔴 COMMAND:** Comments use `text-sm` styling with author and timestamp.

```tsx
<div className="mt-4 rounded-lg border bg-gray-50 p-4">
  <div className="flex items-start gap-3">
    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-600">
      <span className="text-xs font-semibold text-white">JD</span>
    </div>
    <div className="min-w-0 flex-1">
      <div className="flex items-center gap-2">
        <p className="text-sm font-semibold text-gray-900">John Doe</p>
        <p className="text-xs text-gray-500">2 hours ago</p>
      </div>
      <p className="mt-1 text-sm text-gray-700">
        Should we enable interrupt handling for this use case?
      </p>
    </div>
  </div>
</div>
```

---

#### Review/Approval Workflows

**🟡 DIRECTIVE:** Show approval status and required reviewers.

**🔴 COMMAND:** Use status badges: Pending, Approved, Rejected.

```tsx
<div className="rounded-lg border bg-white p-6">
  <h3 className="text-base font-semibold text-gray-900">Approval Status</h3>
  <div className="mt-4 space-y-3">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-900">admin@example.com</p>
        <p className="mt-1 text-sm text-gray-600">Required for production deployment</p>
      </div>
      <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-700">
        Pending
      </span>
    </div>
  </div>
</div>
```

---

#### Collaboration Pattern Guidelines for AGENTS.MD

**Team Management:**

- Display team members with clear role indicators
- Show permissions for each role clearly
- Enable easy addition/removal of team members
- Support role-based access control

**Change Tracking:**

- Maintain complete audit trail of all configuration changes
- Show who made changes, what changed, and when
- Enable filtering and searching of edit history
- Provide rollback capability to previous versions

**Communication:**

- Support inline comments on configuration sections
- Notify relevant team members of changes
- Enable @mentions for specific people
- Show comment threads with replies

**Approval Workflows:**

- Require approvals for production deployments
- Show approval status clearly
- Notify reviewers when action is needed
- Support multiple approval requirements

---

## 16. AI Instructions + Global Rules

### 16.1 Global Rules Console (System Prompt + Policies)

**Use for:** Managing top-level behavioral constraints that apply to all agents in an organization.

**🔴 COMMAND:** Use a "Sticky Header" for the version selector and "Publish" status.
**🔴 COMMAND:** Separate "System Persona" from "Safety Policies" using `space-y-8` to prevent instruction bleeding.
**🔴 COMMAND:** When a header includes both a label and an icon, place the icon on the left and align to the baseline (`items-baseline gap-2`).

```tsx
{
  /* Ref: Tailwind UI Card Headings + Description Lists */
}
;<div className="mb-8">
  <div className="mb-4 flex items-baseline gap-2">
    <ShieldCheck className="size-5 text-gray-400" aria-hidden="true" />
    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Global Rules Console</h3>
  </div>
  <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900">
    <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4 dark:border-gray-700">
      <h4 className="text-base font-bold text-gray-900 dark:text-gray-100">
        Global Safety Policy v2.4
      </h4>
      <span className="rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900/40 dark:text-green-300">
        Active
      </span>
    </div>
    <dl className="divide-y divide-gray-200 px-6 py-4 dark:divide-gray-700">
      <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4">
        <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Last Modified</dt>
        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 dark:text-gray-100">
          Jan 24, 2026 by @admin
        </dd>
      </div>
    </dl>
  </div>
</div>
```

---

### 16.2 Agent-Specific Instructions (Inheritance/Overrides)

**Use for:** Defining local agent behavior while honoring global guardrails.

**🟡 DIRECTIVE:** Use "Visual Indicators" (e.g., a lock icon `size-4`) to show which rules are locked by the Global Console.
**🔴 COMMAND:** Local overrides must be explicitly toggled and require a "Change Reason" log.
**🔴 COMMAND:** Use "select" instead of "click" for device-agnostic instructions in helper text.

---

### 16.3 Rule Builder (Plain-Language Cards)

**Use for:** Converting natural language intent into structured, machine-readable prompts.

**🔴 COMMAND:** Use "Grid List" cards with `gap-4` for rule categories (e.g., "Tone," "Tools," "Data Access").
**🔴 COMMAND:** Each card must contain a `textarea` for the natural language rule and a `select` for the "Enforcement Level" (Strict vs. Suggestion).
**🔴 COMMAND:** Apply `rounded-sm` for fields and `rounded-lg` for card surfaces.

```tsx
<div className="mb-8">
  <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-gray-100">Rule Builder</h3>
  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
    <div className="overflow-hidden rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-900">
      <div className="space-y-4">
        <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Tone</h4>
        <textarea
          rows={3}
          className="block w-full rounded-sm border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder-gray-500 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-400"
          placeholder="Describe the desired tone…"
        />
        <select className="block w-full rounded-sm border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100">
          <option>Strict</option>
          <option>Suggestion</option>
        </select>
      </div>
    </div>

    <div className="overflow-hidden rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-900">
      <div className="space-y-4">
        <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Tools</h4>
        <textarea
          rows={3}
          className="block w-full rounded-sm border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder-gray-500 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-400"
          placeholder="Specify allowed tools…"
        />
        <select className="block w-full rounded-sm border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100">
          <option>Strict</option>
          <option>Suggestion</option>
        </select>
      </div>
    </div>

    <div className="overflow-hidden rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-900">
      <div className="space-y-4">
        <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Data Access</h4>
        <textarea
          rows={3}
          className="block w-full rounded-sm border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder-gray-500 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-400"
          placeholder="Define data access rules…"
        />
        <select className="block w-full rounded-sm border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100">
          <option>Strict</option>
          <option>Suggestion</option>
        </select>
      </div>
    </div>
  </div>
</div>
```

---

### 16.4 Conflict Detection + Resolution

**Use for:** Identifying contradictory instructions between global and local prompts.

**🔴 COMMAND:** Trigger a "red/Red" warning banner if a local instruction negates a global safety policy.
**🟡 DIRECTIVE:** Resolve via "Ranked Priority." Global Rules > Department Rules > Agent Overrides.
**🔴 BOUNDARY:** Never use color alone to convey a conflict status; always include a status icon (e.g. `AlertCircle`).

---

### 16.5 Rule Simulator / Dry Run

**Use for:** Debugging why an agent performed (or refused) an action before going live.

**🔴 COMMAND:** Present a "Reasoning Trace" using `text-sm font-mono` to show which specific rule triggered a block.
**🔴 COMMAND:** Provide a "Fix Suggestion" button using `gap-2` for the icon and label.

```tsx
<div className="mb-8">
  <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-gray-100">Rule Simulator</h3>
  <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900">
    <div className="border-b border-gray-200 px-6 py-4 dark:border-gray-700">
      <h4 className="text-base font-bold text-gray-900 dark:text-gray-100">Reasoning Trace</h4>
    </div>
    <div className="space-y-4 px-6 py-4">
      <div className="rounded-sm border-l-4 border-red-500 bg-gray-50 p-4 dark:bg-gray-800">
        <p className="font-mono text-sm text-gray-900 dark:text-gray-100">
          Rule: PII_REDACTION_STRICT
        </p>
        <p className="mt-1 font-mono text-sm text-gray-500 dark:text-gray-400">
          Triggered: Credit card number detected in response
        </p>
        <p className="mt-1 font-mono text-sm text-gray-500 dark:text-gray-400">
          Action: Response blocked
        </p>
      </div>
      <button
        type="button"
        className="inline-flex items-center gap-2 rounded-sm bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-indigo-700 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-600"
      >
        <Wand2 className="size-4" aria-hidden="true" />
        Generate fix suggestion
      </button>
    </div>
  </div>
</div>
```

---

### 16.6 Change Review + Publish Gate

**Use for:** Managing the risk of deploying new agent instructions to production.

**🔴 COMMAND:** Display a "Risk Summary" card using `border-2 border-amber-200`.
**🔴 COMMAND:** Use `space-y-1` between the heading and subtext in the risk alert.
**🔴 COMMAND:** All "Publish" actions must include a mandatory "Rollback Version" selection.

```tsx
{
  /* Ref: Tailwind UI Card Headings (Action-oriented) */
}
;<div className="rounded-lg border-2 border-amber-200 bg-amber-50 p-4">
  <div className="flex items-center gap-3">
    <AlertTriangle className="size-5 text-amber-600" aria-hidden="true" />
    <div className="space-y-1">
      <h4 className="font-bold text-amber-900">High Risk Deployment</h4>
      <p className="text-sm text-amber-800">
        This version modifies <strong>Tool Access</strong> permissions. Review the security diff
        before proceeding.
      </p>
    </div>
  </div>
  <div className="mt-4 flex gap-3">
    <button className="rounded-sm bg-amber-600 px-4 py-2 text-sm font-bold text-white">
      Review Diff
    </button>
    <button className="text-sm text-amber-700 underline">Cancel</button>
  </div>
</div>
```

---

### 16.7 Versioning & Rollback

**Use for:** Keeping a historical record of instruction sets and restoring previous states.

**🔴 COMMAND:** Use a "Vertical Timeline" for version history with `p-12` standard padding.
**🔴 COMMAND:** Labels must include "Version ID," "Timestamp," and "Performance Score" (if available).

---

## 17. Quick Reference

### 17.1 Spacing Cheat Sheet

```
VERTICAL                    HORIZONTAL
Groups:      space-y-8      Groups:      gap-8
Default:     space-y-4      Default:     gap-4
Related:     space-y-2      Related:     gap-2
Text:        space-y-1      Dense:       gap-1
Lists:       space-y-0

Header label + icon: icon left, items-baseline gap-2

INSET (PADDING)
Page:        p-12 (or p-4 dense)
Surface:     p-6  (or p-4 dense)
Container:   p-4
Field:       p-3 or less
```

### 17.2 Typography Cheat Sheet

```
Display:     text-5xl font-extrabold
Heading:     text-xl font-bold
Subheading:  text-lg font-semibold
Body:        text-base font-normal
Subtext:     text-sm font-medium
```

### 17.3 Border Radius Cheat Sheet

```
Small:       rounded-sm p-2
Standard:    rounded-md p-4
Large:       rounded-lg p-6
```

### 17.4 Actions Quick Reference

```
Add:       Insert to list/system
Cancel:    Stop and close
Clear:     Remove from field
Close:     Terminate/dismiss (X icon only)
Copy:      Create duplicate
Delete:    Destroy permanently (warn user)
Edit:      Change values
Next:      Advance in sequence
Refresh:   Reload view
Remove:    Remove from list (not destroy)
Reset:     Revert to last saved (link only)
```

### 17.5 Dialog Sizes

```
Small:   max-w-sm  (384px)
Medium:  max-w-md  (448px)
Large:   max-w-lg  (512px)
X-Large: max-w-xl  (576px)
```

### 17.6 Empty State Layouts

```
Small tile:    Center image, left-align text
Side panel:    Left-align all
Large space:   Wide margin OR centered block
Full page:     Centered block preferred
```

### 17.7 Loading Types

```
Skeleton:      Initial page load
Full-screen:   App-wide processing
Inline:        Component-specific
Progressive:   Batched loading
Load more:     Extending lists
```

---
