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

**Use for:** Providing pre-configured agent shells to accelerate development.

**🔴 COMMAND:** Use a grid of "Surface" cards (`p-6`) with high-contrast labels.
**🔴 COMMAND:** Display specific capabilities (e.g., "Outbound Sales," "Customer Support") as secondary labels using `text-sm`.

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

**Use for:** Step-by-step agent configuration for complex voice setups.

**🔴 COMMAND:** Use `gap-8` between vertical steps to maintain clear grouping.
**🔴 COMMAND:** Pre-fill all fields with "Safe Defaults" to allow immediate "Next" actions.

---

### 15.3 Simple → Advanced (Progressive Disclosure)

**Use for:** Keeping the interface clean while allowing expert overrides for LLM parameters.

**🟡 DIRECTIVE:** Default to "Simple" view; use a button link to reveal "Advanced" settings.
**🔴 COMMAND:** Labels for advanced settings must use "Subtext" (`text-sm`) styling.

---

### 15.4 Inline Glossary

**Use for:** Defining technical terms (e.g., Latency, Temperature) without leaving the builder context.

**🟡 DIRECTIVE:** Use "Passive Voice" for definitions.
**🔴 COMMAND:** Trigger via hover or click on dotted-underlined text.

---

### 15.5 Tool Picker Cards (Risks)

**Use for:** Selecting external capabilities (APIs, Database access) for the agent.

**🔴 COMMAND:** Cards with high-risk tools (e.g., "Delete Data") must feature a "red/Red" danger indicator.
**🟡 DIRECTIVE:** Describe implications (financial/access) within the card body using "Description List" formatting.

---

### 15.6 Conversation Flow (Happy + Fallback)

**Use for:** Visualizing the primary path and error-handling branches.

**🔴 COMMAND:** Use `items-baseline gap-2` for step labels to ensure vertical alignment.
**🔴 COMMAND:** Fallback paths must be visually distinct (e.g., dashed borders).

---

### 15.7 Test Simulator (Transcripts + Debugging)

**Use for:** Real-time testing of the voice agent performance.

**🔴 COMMAND:** Use `role="status"` and `aria-live="polite"` for incoming transcript text.
**🔴 COMMAND:** Debugging logs must use "Subtext" (`text-sm`) and be collapsible.

---

### 15.8 Error Translation (Plain-Language + Recommended Fix)

**Use for:** Converting technical LLM errors into actionable user steps.

**🔴 COMMAND:** Never show raw code errors. Provide a "Context" and a "Path to resolve."
**🔴 COMMAND:** Maximum 2 lines for inline form-based errors.

---

### 15.9 Publish Checklist (Blocked Items)

**Use for:** Final verification before the voice agent goes live.

**🔴 COMMAND:** Use "red/Red" for blocked items and "Gray/Neutral" for optional tasks.
**🔴 BOUNDARY:** Disable the "Publish" button until all critical items are resolved.

---

### 15.10 Safety Rails (PII + Confirmations)

**Use for:** Preventing the agent from collecting or sharing sensitive user data.

**🔴 COMMAND:** High-impact safety changes require a "Moderate-impact" confirmation dialog.
**🔴 COMMAND:** Use "Active Voice" to state exactly what data is being protected.

```tsx
{
  /* Safety Toggle Pattern - Ref: Tailwind UI Card Headings */
}
;<div className="rounded-lg border bg-white shadow-sm">
  <div className="border-b px-4 py-3">
    <h3 className="text-base font-semibold">Safety Rails</h3>
  </div>
  <div className="space-y-4 p-4">
    <div className="flex items-center justify-between">
      <div className="space-y-1">
        <p className="text-sm font-medium">Redact PII</p>
        <p className="text-sm text-gray-500">Automatically masks SSNs and credit cards.</p>
      </div>
      <input type="checkbox" className="rounded-sm" />
    </div>
  </div>
</div>
```

---

## 16. AI Instructions + Global Rules

### 16.1 Global Rules Console (System Prompt + Policies)

**Use for:** Managing top-level behavioral constraints that apply to all agents in an organization.

**🔴 COMMAND:** Use a "Sticky Header" for the version selector and "Publish" status.
**🔴 COMMAND:** Separate "System Persona" from "Safety Policies" using `space-y-8` to prevent instruction bleeding.

```tsx
{
  /* Ref: Tailwind UI Card Headings + Description Lists */
}
;<div className="mb-8">
  <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-gray-100">
    Global Rules Console
  </h3>
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

**🟡 DIRECTIVE:** Use "Visual Indicators" (e.g., an inheritance icon) to show which rules are locked by the Global Console.
**🔴 COMMAND:** Local overrides must be explicitly toggled and require a "Change Reason" log.

---

### 16.3 Rule Builder (Plain-Language Cards)

**Use for:** Converting natural language intent into structured, machine-readable prompts.

**🔴 COMMAND:** Use "Grid List" cards for rule categories (e.g., "Tone," "Tools," "Data Access").
**🔴 COMMAND:** Each card must contain a `textarea` for the natural language rule and a `select` for the "Enforcement Level" (Strict vs. Suggestion).

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

---

### 16.5 Rule Simulator / Dry Run

**Use for:** Debugging why an agent performed (or refused) an action before going live.

**🔴 COMMAND:** Present a "Reasoning Trace" using `text-sm font-mono` to show which specific rule triggered a block.
**🔴 COMMAND:** Provide a "Fix Suggestion" button that automatically drafts a prompt adjustment.

```tsx
<div className="mb-8">
  <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-gray-100">Rule Simulator</h3>
  <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900">
    <div className="border-b border-gray-200 px-6 py-4 dark:border-gray-700">
      <h4 className="text-base font-bold text-gray-900 dark:text-gray-100">Reasoning Trace</h4>
    </div>
    <div className="space-y-4 px-6 py-4">
      <div className="rounded-sm bg-gray-50 p-4 dark:bg-gray-800">
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
        className="inline-flex items-center rounded-sm border border-transparent bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-indigo-700 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-600"
      >
        Generate fix suggestion
      </button>
    </div>
  </div>
</div>
```

---

### 16.6 Change Review + Publish Gate

**Use for:** Managing the risk of deploying new agent instructions to production.

**🔴 COMMAND:** Display a "Risk Summary" card highlighting any changes to PII handling or external tool access.
**🔴 COMMAND:** All "Publish" actions must include a mandatory "Rollback Version" selection.

```tsx
{
  /* Ref: Tailwind UI Card Headings (Action-oriented) */
}
;<div className="rounded-lg border-2 border-amber-200 bg-amber-50 p-4">
  <div className="flex items-center gap-3">
    <AlertTriangle className="text-amber-600" />
    <h4 className="font-bold text-amber-900">High Risk Deployment</h4>
  </div>
  <p className="mt-2 text-sm text-amber-800">
    This version modifies <strong>Tool Access</strong> permissions. Review the security diff before
    proceeding.
  </p>
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

**🔴 COMMAND:** Use a "Vertical Timeline" for version history.
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
