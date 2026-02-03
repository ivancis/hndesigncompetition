# Foundations

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
- **Alignment:** Left-aligned by default

**🔴 COMMAND:** Section titles and labels MUST be left-aligned by default. Use `text-left` on flex containers or ensure parent containers align content left.

```tsx
{
  /* Section title - left-aligned */
}
;<h2 className="text-left text-xl font-bold">Section Title</h2>

{
  /* Section title in flex container - ensure left alignment */
}
;<div className="flex flex-col text-left">
  <span className="text-sm font-bold text-black">Job Details</span>
  <small>Subtext description</small>
</div>
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

- **Element:** `<small>` (semantic HTML element)
- **Use for:** Secondary information, captions, helper text, timestamps, metadata

**🔴 COMMAND:** Subtexts MUST use the `<small>` HTML element. Do not use className for subtext styling.

```tsx
{
  /* Subtext with small element */
}
;<div>
  <h3 className="text-sm font-bold text-black">Section Title</h3>
  <small>Subtext description or helper text</small>
</div>

{
  /* Timestamp/metadata with small element */
}
;<div>
  <p className="text-sm text-black">Activity description</p>
  <small className="mt-1">19m ago</small>
</div>
```

**🔴 COMMAND:** Section titles and labels MUST be left-aligned by default. Use `text-left` on flex containers or ensure parent containers align content left.

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

**🔴 COMMAND:** List items with a lot of information can have dividers between them using `border-b-2 border-grey-500` (2px divider).

**🟡 DIRECTIVE:** Use dividers when list items contain substantial content (multiple lines, metadata, actions) to improve visual separation and readability.

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
  /* List items without dividers */
}
;<ul className="space-y-0">
  <li>Item</li>
  <li>Item</li>
</ul>

{
  /* List items with dividers (when there's a lot of information) */
}
;<div className="space-y-0">
  <div className="border-grey-500 flex items-start gap-4 border-b-2 px-6 py-4">
    <p>Item with substantial content</p>
    <small>Metadata</small>
  </div>
  <div className="border-grey-500 flex items-start gap-4 border-b-2 px-6 py-4">
    <p>Another item with content</p>
    <small>More metadata</small>
  </div>
  <div className="flex items-start gap-4 px-6 py-4">
    <p>Last item (no divider)</p>
    <small>Metadata</small>
  </div>
</div>
```

**🔴 COMMAND:** The last item in a list should NOT have a divider (`border-b-2`).

#### Typography Vertical Spacing

**🔴 COMMAND:** Between these pairs, always use `space-y-1` (4px):

- Display + Subtitle
- Heading + Subtitle
- Heading + Body text

```tsx
<div className="space-y-1">
  <h1 className="text-xl font-bold">Heading</h1>
  <p className="text-grey-600 text-sm">Subtitle</p>
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
<button className="inline-flex items-center gap-2 rounded-md border-2 bg-primary-300 px-3 py-2 text-md font-semibold text-black">
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M4 3.5L12 8L4 12.5V3.5Z" fill="currentColor" />
  </svg>
  Play
</button>

<span className="inline-flex items-center gap-2 rounded-md border-2 border-grey-300 bg-grey-50 px-3 py-2 text-sm font-semibold text-grey-700">
  <span className="inline-flex rounded-full bg-grey-400 p-1" aria-hidden="true" />
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
    className="text-grey-400 size-5 shrink-0"
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

**🔴 COMMAND:** Surfaces (dialogs, cards): `px-4 py-2 sm:p-6` (responsive padding), or `p-4` (16px) for dense

**🔴 COMMAND:** Card headers: `px-6 py-4` (24px horizontal, 16px vertical)

**🔴 COMMAND:** Containers: `p-4` (16px)

**🔴 COMMAND:** Fields (buttons, inputs): `px-4 py-2` (16px horizontal, 8px vertical) for standard buttons

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
;<div className="rounded-lg border-2">
  <div className="px-4 py-2 sm:p-6">
    <Content />
  </div>
</div>

{
  /* Card with header */
}
;<div className="rounded-lg border-2">
  <div className="border-grey-700 border-b-2 px-6 py-4">
    <h3 className="text-base font-bold text-black">Card Title</h3>
  </div>
  <div className="px-4 py-2 sm:p-6">
    <Content />
  </div>
</div>

{
  /* Container */
}
;<div className="rounded-md border-2 p-4">
  <Content />
</div>

{
  /* Field */
}
;<button className="text-md rounded-md border-2 px-4 py-2 font-semibold">Action</button>
```

#### Text Balance in Insets

**🟡 DIRECTIVE:** When text borders the top or bottom edge of a padded element, reduce that edge's padding by one step for visual balance.

```tsx
{
  /* Text at top: reduce pt */
}
;<div className="px-4 pt-2 pb-3">
  <p>Text starts at top…</p>
</div>

{
  /* Text at bottom: reduce pb */
}
;<div className="px-4 pt-3 pb-2">
  <p>Text ends at bottom…</p>
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
;<div className="bg-grey-50 p-12">
  {/* Surface */}
  <div className="rounded-lg border-2 bg-white p-6">
    {/* Container */}
    <div className="bg-grey-50 rounded-md border-2 p-4">
      <div className="space-y-1">
        <h2 className="text-xl font-bold text-black">Unsaved changes</h2>
        <p className="text-grey-600 text-sm">
          You have unsaved changes. Save before you leave to avoid losing work.
        </p>
      </div>
      <div className="mt-4 flex justify-end gap-2 border-t pt-3">
        {/* Field */}
        <button className="text-md hover:bg-grey-100 focus:outline-primary-600 active:bg-grey-200 rounded-md border-2 px-4 py-2 font-semibold transition-colors focus:outline focus:outline-1 focus:outline-offset-2">
          Keep editing
        </button>
        {/* Field */}
        <button className="bg-primary-300 text-md hover:bg-primary-200 focus:outline-primary-500 focus:outline-primary-600 active:bg-primary-100 rounded-md border-2 px-4 py-2 font-semibold text-black transition-colors focus:outline focus:outline-1 focus:outline-offset-2">
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
<div className="rounded-md border-2 bg-white p-4 shadow-sm">
  <div className="px-4 py-3">
    <p>Are you sure you want to continue?</p>
  </div>
  <div className="flex justify-end gap-2 border-t pt-3">
    <button className="text-md hover:bg-grey-100 focus:outline-primary-600 active:bg-grey-200 rounded-md border-2 px-4 py-2 font-semibold transition-colors focus:outline focus:outline-1 focus:outline-offset-2">
      Cancel
    </button>
    <button className="bg-primary-300 text-md hover:bg-primary-200 focus:outline-primary-500 focus:outline-primary-600 active:bg-primary-100 rounded-md border-2 px-4 py-2 font-semibold text-black transition-colors focus:outline focus:outline-1 focus:outline-offset-2">
      Continue
    </button>
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

1. **Default** - standard contrast (subtle backgrounds: `-50`, `-100`)
2. **Emphasized** - more contrast (medium backgrounds: `-100`, `-200`)
3. **Accent** - highest contrast (prominent backgrounds: `-400` for alerts)

**🔴 COMMAND:** Surfaces with `border-grey-700` MUST have `bg-white` background. This ensures proper contrast and visual separation for container surfaces.

```tsx
{
  /* Neutral container */
}
;<div className="border-grey-300 rounded-lg border-2 bg-white p-4">
  <p>Neutral content</p>
</div>

{
  /* Container with border-grey-700 - MUST have bg-white */
}
;<div className="border-grey-700 overflow-hidden rounded-lg border-2 bg-white">
  <div className="border-grey-700 border-b-2 px-6 py-4">
    <h3 className="text-base font-bold text-black">Card Title</h3>
  </div>
  <div className="px-4 py-2 sm:p-6">
    <p>Card content</p>
  </div>
</div>

{
  /* Critical emphasized */
}
;<div className="rounded-lg border-2 border-red-200 bg-red-50 p-4">
  <p>Error: Action failed</p>
</div>

{
  /* Critical accent - Alert container */
}
;<div className="rounded-lg border-2 bg-red-400 p-4 text-black">
  <p>Critical: Immediate action required</p>
</div>
```

**🔴 COMMAND:** Surfaces with `border-grey-700` MUST have `bg-white` background. This ensures proper contrast and visual separation for container surfaces.

**🔴 COMMAND:** Alert containers (prominent semantic containers) use `-400` color variants (`bg-emerald-400`, `bg-amber-400`, `bg-red-400`, `bg-indigo-400`) with `text-black` for maximum contrast and visibility.

**🟡 DIRECTIVE:** Use accent emphasis sparingly - reserve for highest priority alerts. For detailed alert container patterns, see [Section 6.9: Alert Container Pattern](./guidelines.md#pattern-alert-container-semantic-containers) in Guidelines.

---

#### Pattern: Field Interactivity

Fields are interactive clickable elements that communicate state through visual changes.

**🔴 COMMAND:** Field padding: `p-3` (12px) or less  
**🔴 COMMAND:** State changes must use background color transitions

```tsx
{
  /* Interactive field with states */
}
;<button className="bg-grey-100 text-md hover:bg-grey-200 active:bg-grey-300 rounded-md border-2 px-4 py-2 font-semibold transition-colors">
  Click me
</button>

{
  /* Small field */
}
;<button className="hover:bg-grey-100 rounded-md border-2 px-2 py-2 text-sm font-semibold transition-colors">
  Small action
</button>
```

---

## 5. Visual Styles

### 5.1 Border Colors

**🔴 BOUNDARY:** Never use `border-grey-200`. Use `border-grey-300` or higher for all border colors.

**🔴 COMMAND:** Border color usage:

- **Neutral containers/cards:** `border-grey-300` (light borders for subtle separation)
- **Card headers/dividers:** `border-grey-500` or `border-grey-700` (stronger borders for emphasis)
- **Interactive elements:** `border-grey-600` (inputs, buttons)
- **Card surfaces:** `border-grey-700` with `bg-white` (prominent card borders)

```tsx
{
  /* Correct: Neutral container with border-grey-300 */
}
;<div className="border-grey-300 rounded-lg border-2 bg-white p-4">
  <p>Neutral content</p>
</div>

{
  /* Wrong: Using border-grey-200 */
}
;<div className="border-grey-200 rounded-lg border-2 bg-white p-4">
  <p>Neutral content</p>
</div>
```

---

### 5.2 Border Radius

**🔴 COMMAND:** Use border radius paired with minimum padding:

```
rounded-sm  (2px)  →  min p-2  (8px)
rounded-md  (6px)  →  min p-4  (16px)
rounded-lg  (8px)  →  min p-6  (24px)
```

**Decision tree:**

- **Small components** (badges, pills, buttons): `rounded-md` with `border-2`
- **Standard components** (cards, panels): `rounded-md` with `border-2`
- **Large components** (modals, hero sections): `rounded-lg` with `border-2`

```tsx
{
  /* Badge: small */
}
;<span className="bg-primary-50 text-primary-700 rounded-md px-2.5 py-0.5 text-xs font-medium">
  New
</span>

{
  /* Button: small */
}
;<button className="bg-primary-300 text-md rounded-md border-2 px-4 py-2 font-semibold text-black">
  Submit
</button>

{
  /* Card: large */
}
;<div className="rounded-lg border-2">
  <div className="px-4 py-2 sm:p-6">
    <h3 className="text-base font-semibold text-black">Card Title</h3>
    <p className="text-grey-500 mt-1 text-sm">Card content…</p>
  </div>
</div>
```

**🔴 BOUNDARY:** Never use `rounded` (4px) or `rounded-xl` (12px) - they break the scale.

**🟡 DIRECTIVE:** Match visual weight of border radius to component importance. Larger radius = more prominent component.

**🔴 COMMAND:** Use `rounded-full` only for:

- Badges, chips, tags, and labels (small inline elements)
- Status indicators and avatars (circular elements)
- Progress bars and sliders (circular handles)

**🔴 BOUNDARY:** Never use `rounded-full` for containers, cards, panels, or any element with `border-2` - use `rounded-md` or `rounded-lg` instead.

```tsx
{
  /* Correct: Badge with rounded-full */
}
;<span className="bg-primary-50 text-primary-700 inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium">
  New
</span>

{
  /* Correct: Container with rounded-md */
}
;<div className="border-grey-300 rounded-md border-2 bg-white p-4">
  <p>Container content</p>
</div>

{
  /* Wrong: Container with rounded-full */
}
;<div className="border-grey-300 rounded-full border-2 bg-white p-4">
  <p>Container content</p>
</div>
```

---

### 5.3 Shadows

Shadows create depth and hierarchy by elevating elements above the page surface.

**🔴 COMMAND:** Use shadows only for these specific cases:

1. **Modals and overlays** - `shadow-xl` (elevated above all content)
2. **Floating elements** - `shadow-xl` (tooltips, dropdowns, popovers)
3. **Card hover states** - `hover:shadow-md` (interactive feedback only)

**🔴 BOUNDARY:** Never use shadows on:

- Standard containers, cards, or panels (use `border-2` instead)
- Buttons (use background color changes for interaction)
- Form elements (use borders for structure)
- Inline components (use borders for separation)

**🔴 COMMAND:** Standard containers must use `border-2` for visual separation, not shadows.

```tsx
{
  /* Correct: Modal with shadow-xl */
}
;<div className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
  <p>Modal content</p>
</div>

{
  /* Correct: Card with border-2, no shadow */
}
;<div className="border-grey-300 rounded-lg border-2 bg-white p-4">
  <p>Card content</p>
</div>

{
  /* Wrong: Standard container with shadow */
}
;<div className="rounded-lg border-2 bg-white p-4 shadow-sm">
  <p>Card content</p>
</div>
```

**🟡 DIRECTIVE:** Shadows create visual weight - use sparingly to maintain hierarchy. When in doubt, use `border-2` instead.

---

### 5.4 Interaction States

Interaction states visually reflect the current state of UI elements. States communicate affordance and feedback to users.

---

#### 5.3.1 Exclusive States

These states are mutually exclusive - an element can only be in one state at a time.

##### Rest State

**🔴 COMMAND:** Rest is the default visual state for all elements.

```tsx
<button className="bg-primary-300 text-md rounded-md border-2 px-4 py-2 font-semibold text-black">
  Default Button
</button>
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
<button className="bg-primary-300 text-md hover:bg-primary-200 active:bg-primary-100 rounded-md border-2 px-4 py-2 font-semibold text-black transition-colors">
  Click me
</button>
```

##### Focus State

**🔴 COMMAND:** Focus uses outline with same color as rest state.

**🔴 COMMAND:** Focus outline width: `outline-1`

**🔴 COMMAND:** Focus outline offset: `outline-offset-2`

**🟡 DIRECTIVE:** Focus states are for keyboard navigation - they must be highly visible for accessibility.

```tsx
<button className="bg-primary-300 text-md hover:bg-primary-200 focus:outline-primary-500 focus:outline-primary-600 active:bg-primary-100 rounded-md border-2 px-4 py-2 font-semibold text-black focus:outline focus:outline-1 focus:outline-offset-2">
  Tab to focus
</button>
```

**Complete interactive button pattern:**

```tsx
<button className="bg-primary-300 text-md hover:bg-primary-200 focus:outline-primary-500 focus:outline-primary-600 active:bg-primary-100 rounded-md border-2 px-4 py-2 font-semibold text-black transition-colors focus:outline focus:outline-1 focus:outline-offset-2">
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
  className="bg-primary-300 text-md disabled:bg-grey-300 disabled:text-grey-500 disabled:border-grey-400 rounded-md border-2 px-4 py-2 font-semibold text-black disabled:cursor-not-allowed"
>
  Disabled Button
</button>
```

**🟡 DIRECTIVE:** For detailed disabled state patterns, see [Section 11: Disabled States](#11-disabled-states).

---

#### 5.3.2 Selected State

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
;<nav className="border-grey-700 flex gap-4 border-b-2">
  <button className="border-primary-600 text-primary-600 border-b-4 px-1 py-4 text-sm font-semibold">
    Active Tab
  </button>
  <button className="text-grey-600 hover:text-grey-700 border-b-2 border-transparent px-1 py-4 text-sm font-medium">
    Inactive Tab
  </button>
</nav>

{
  /* Card selection */
}
;<div className="border-primary-600 bg-primary-50 rounded-lg border-2 p-4">
  <p>Selected card</p>
</div>

{
  /* Checkbox with selected state */
}
;<label className="flex cursor-pointer items-center gap-2">
  <input
    type="checkbox"
    checked
    className="border-grey-400 text-primary-600 focus:ring-primary-500 h-4 w-4 rounded-md"
  />
  <span className="text-grey-700 text-sm">Selected option</span>
</label>
```

**🟡 DIRECTIVE:** Selected states should be immediately obvious - don't rely on subtle color changes alone.

---

#### 5.3.3 Indicating Interactivity

**🔴 COMMAND:** Use these patterns to indicate interactivity:

1. **Inline text action (not a link):** Dotted underline
2. **Inline text link:** Solid underline
3. **Other elements:** Distinguished by position, emphasized text, or context

**🔴 BOUNDARY:** Color alone is NOT an indicator of interactivity.

```tsx
{
  /* Inline action trigger */
}
;<button className="text-primary-600 hover:text-primary-700 border-b-2 border-dotted border-current text-sm font-semibold">
  Show more details
</button>

{
  /* Inline link */
}
;<a
  href="/docs"
  className="text-primary-600 hover:text-primary-700 text-sm font-semibold underline"
>
  Read documentation
</a>

{
  /* Button distinguished by context */
}
;<button className="bg-primary-300 text-md hover:bg-primary-200 focus:outline-primary-500 focus:outline-primary-600 active:bg-primary-100 rounded-md border-2 px-4 py-2 font-semibold text-black transition-colors focus:outline focus:outline-1 focus:outline-offset-2">
  Primary Action
</button>

{
  /* Secondary button - distinguished by style */
}
;<button className="text-md hover:bg-grey-100 focus:outline-primary-600 active:bg-grey-200 rounded-md border-2 px-4 py-2 font-semibold transition-colors focus:outline focus:outline-1 focus:outline-offset-2">
  Secondary Action
</button>
```

**🟡 DIRECTIVE:** Ensure interactive elements have sufficient visual weight or position to signal they're clickable - users shouldn't have to guess.

---

### 5.5 Basic component build

#### Pattern: Primary Button

**🔴 COMMAND:** Primary buttons MUST use this exact configuration:

```tsx
<button className="focus:outline-primary-500 bg-primary-300 hover:bg-primary-200 active:bg-primary-100 focus:outline-primary-600 rounded-md border-2 px-4 py-2 font-semibold text-black transition-colors focus:outline-1 focus:outline-offset-2">
  Primary Action
</button>
```

**🔴 COMMAND:** Class order must be:

1. Focus outline colors (`focus:outline-primary-500` first, then `focus:outline-primary-600`)
2. Background colors (`bg-primary-300`)
3. Hover state (`hover:bg-primary-200`)
4. Active state (`active:bg-primary-100`)
5. Border radius (`rounded-md`)
6. Border (`border-2`)
7. Typography (`font-semibold text-black`)
8. Transitions (`transition-colors`)
9. Focus outline utilities (`focus:outline-1 focus:outline-offset-2`)

**🔴 COMMAND:** Primary buttons must include BOTH `focus:outline-primary-500` AND `focus:outline-primary-600` for proper focus states.

**🟡 DIRECTIVE:** For icon-only buttons, omit `px-4 py-2` and use appropriate padding (`p-2` or `p-3`). For text buttons, always include `px-4 py-2`.

#### Pattern: Secondary Button

```tsx
<button className="text-md hover:bg-grey-100 focus:outline-primary-600 active:bg-grey-200 rounded-md border-2 px-4 py-2 font-semibold transition-colors focus:outline focus:outline-1 focus:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
  Secondary Action
</button>
```

#### Pattern: Ghost Button

```tsx
<button className="text-grey-700 hover:bg-grey-100 focus:outline-primary-600 active:bg-grey-200 rounded-md px-3 py-2 text-sm font-semibold transition-colors focus:outline focus:outline-1 focus:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
  Ghost Action
</button>
```

#### Pattern: Danger Button

```tsx
<button className="text-md rounded-md border-2 bg-red-300 px-4 py-2 font-semibold text-black transition-colors hover:bg-red-200 focus:outline focus:outline-1 focus:outline-offset-2 focus:outline-red-500 focus:outline-red-600 active:bg-red-100 disabled:cursor-not-allowed disabled:opacity-50">
  Delete
</button>
```

#### Pattern: Interactive Link

```tsx
<a
  href="/docs"
  className="text-primary-600 hover:text-primary-700 focus:outline-primary-500 focus:outline-primary-600 text-sm font-semibold underline transition-colors focus:outline focus:outline-1 focus:outline-offset-2"
>
  Read documentation
</a>
```

#### Pattern: Interactive Card

```tsx
<button className="hover:bg-primary-200 focus:outline-primary-500 focus:outline-primary-600 active:bg-primary-100 w-full rounded-lg border-2 p-4 text-left transition-all focus:outline focus:outline-1 focus:outline-offset-2 sm:p-6">
  <h3 className="text-base font-semibold text-black">Card Title</h3>
  <p className="text-grey-500 mt-1 text-sm">Card description</p>
</button>
```

#### Pattern: Icon-Only Button

**🔴 COMMAND:** Buttons with a single icon (no text label) must render as a perfect square, matching its height.

**🔴 COMMAND:** Use equal padding on all sides (e.g., `p-2` for a 32px square button, `p-3` for a 40px square button).

**🔴 COMMAND:** Ensure the button meets minimum touch target size requirements (44×44px minimum for accessibility).

```tsx
{
  /* Icon-only close button - perfect square */}
}
;<button
  type="button"
  className="flex h-10 w-10 items-center justify-center rounded-md text-grey-400 transition hover:bg-grey-100 hover:text-grey-600 focus:outline focus:outline-1 focus:outline-offset-2 focus:outline-primary-500 focus:outline-primary-600"
  aria-label="Close"
>
  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
</button>
```

---
