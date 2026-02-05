# Components

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
;<label className="block text-sm font-semibold text-black">Email address</label>

{
  /* Required field label */
}
;<label className="block text-sm font-semibold text-black">
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
  className="border-grey-600 placeholder-grey-400 placeholder-grey-500 focus:outline-primary-500 focus:outline-primary-600 rounded-md border-2 px-3 py-2 text-sm text-black focus:outline focus:outline-1 focus:outline-offset-2"
/>
```

#### Hints

**🟡 DIRECTIVE:** Use hints for additional in-context help and guidance.

**🔴 COMMAND:** Hints remain visible while typing - can contain necessary information.

**🔴 COMMAND:** Keep hint text concise.

**🔴 COMMAND:** Form labels, hints, and helper text must follow the EXPLAIN before ASK principle - provide context and guidance before requesting input.

**🔴 COMMAND:** Always assume positive intent - frame form guidance in a GUIDING, supportive manner.

```tsx
{
  /* Correct: EXPLAIN before ASK with GUIDING tone */
}
;<div className="space-y-1">
  <label className="block text-sm font-semibold text-black">
    Password <span className="text-red-500">*</span>
  </label>
  <input
    type="password"
    className="border-grey-600 focus:outline-primary-500 focus:outline-primary-600 w-full rounded-md border-2 px-3 py-2 text-sm text-black focus:outline focus:outline-1 focus:outline-offset-2"
  />
  <p className="text-grey-500 text-sm">
    Create a strong password with at least 8 characters, including one number and one special
    character for better security.
  </p>
</div>

{
  /* Wrong: Demanding tone without explanation */
}
;<div className="space-y-1">
  <label className="block text-sm font-semibold text-black">
    Password <span className="text-red-500">*</span>
  </label>
  <input
    type="password"
    className="border-grey-600 focus:outline-primary-500 focus:outline-primary-600 w-full rounded-md border-2 px-3 py-2 text-sm text-black focus:outline focus:outline-1 focus:outline-offset-2"
  />
  <p className="text-grey-500 text-sm">
    Password must meet requirements or account creation will fail.
  </p>
</div>
```

#### Default Values

**🟡 DIRECTIVE:** Provide default values to reduce user effort when appropriate.

**🔴 BOUNDARY:** Never provide wrong or inappropriate defaults - when in doubt, leave empty.

```tsx
<select className="border-grey-600 focus:outline-primary-500 focus:outline-primary-600 rounded-md border-2 px-3 py-2 text-sm text-black focus:outline focus:outline-1 focus:outline-offset-2">
  <option value="">Select country…</option>
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
      <label className="block text-sm font-semibold text-black">Email</label>
      <input className="border-grey-600 focus:outline-primary-500 focus:outline-primary-600 w-full rounded-md border-2 px-3 py-2 text-sm text-black focus:outline focus:outline-1 focus:outline-offset-2" />
    </div>

    <div className="space-y-1">
      <label className="block text-sm font-semibold text-black">Password</label>
      <input
        type="password"
        className="border-grey-600 focus:outline-primary-500 focus:outline-primary-600 w-full rounded-md border-2 px-3 py-2 text-sm text-black focus:outline focus:outline-1 focus:outline-offset-2"
      />
    </div>
  </div>

  {/* Form group 2 */}
  <div className="space-y-4">
    <div className="space-y-2">
      <label className="flex cursor-pointer items-center gap-2">
        <input
          type="checkbox"
          className="border-grey-400 text-primary-600 focus:ring-primary-500 h-4 w-4 rounded-md"
        />
        <span className="text-grey-700 text-sm">Remember me</span>
      </label>

      <label className="flex cursor-pointer items-center gap-2">
        <input
          type="checkbox"
          className="border-grey-400 text-primary-600 focus:ring-primary-500 h-4 w-4 rounded-md"
        />
        <span className="text-grey-700 text-sm">Send me updates</span>
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
    <label className="block text-sm font-semibold text-black">City</label>
    <input className="border-grey-600 focus:outline-primary-500 focus:outline-primary-600 w-full rounded-md border-2 px-3 py-2 text-sm text-black focus:outline focus:outline-1 focus:outline-offset-2" />
  </div>

  <div className="space-y-1">
    <label className="block text-sm font-semibold text-black">ZIP</label>
    <input className="border-grey-600 focus:outline-primary-500 focus:outline-primary-600 w-full rounded-md border-2 px-3 py-2 text-sm text-black focus:outline focus:outline-1 focus:outline-offset-2" />
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
;<input
  className="border-grey-600 placeholder-grey-400 placeholder-grey-500 focus:outline-primary-500 focus:outline-primary-600 max-w-xs rounded-md border-2 px-3 py-2 text-sm text-black focus:outline focus:outline-1 focus:outline-offset-2"
  placeholder="Age"
/>

{
  /* Unknown length - full width */
}
;<input
  className="border-grey-600 placeholder-grey-400 placeholder-grey-500 focus:outline-primary-500 focus:outline-primary-600 w-full rounded-md border-2 px-3 py-2 text-sm text-black focus:outline focus:outline-1 focus:outline-offset-2"
  placeholder="Address"
/>
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
  <button className="focus:outline-primary-500 bg-primary-300 hover:bg-primary-200 active:bg-primary-100 focus:outline-primary-600 rounded-md border-2 px-4 py-2 font-semibold text-black transition-colors focus:outline-1 focus:outline-offset-2">
    Submit
  </button>
  <button className="hover:bg-grey-100 focus:outline-primary-600 active:bg-grey-200 rounded-md border-2 px-4 py-2 font-semibold transition-colors focus:outline-1 focus:outline-offset-2">
    Cancel
  </button>
</div>

{
  /* Right-aligned (modal/wizard) */
}
;<div className="flex justify-end gap-2">
  <button className="text-md hover:bg-grey-100 focus:outline-primary-600 active:bg-grey-200 rounded-md border-2 px-4 py-2 font-semibold transition-colors focus:outline focus:outline-1 focus:outline-offset-2">
    Back
  </button>
  <button className="focus:outline-primary-500 bg-primary-300 hover:bg-primary-200 active:bg-primary-100 focus:outline-primary-600 rounded-md border-2 px-4 py-2 font-semibold text-black transition-colors focus:outline-1 focus:outline-offset-2">
    Next
  </button>
</div>
```

#### Spacing

**🔴 COMMAND:** Vertical spacing between form elements and buttons: `space-y-8` (32px)

**🔴 COMMAND:** Horizontal spacing between buttons: `gap-2` (8px)

```tsx
<form className="space-y-8">
  <div className="space-y-4">{/* Form fields */}</div>

  <div className="flex gap-2">
    <button className="focus:outline-primary-500 bg-primary-300 hover:bg-primary-200 active:bg-primary-100 focus:outline-primary-600 rounded-md border-2 px-4 py-2 font-semibold text-black transition-colors focus:outline-1 focus:outline-offset-2">
      Submit
    </button>
    <button className="text-md hover:bg-grey-100 focus:outline-primary-600 active:bg-grey-200 rounded-md border-2 px-4 py-2 font-semibold transition-colors focus:outline focus:outline-1 focus:outline-offset-2">
      Cancel
    </button>
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
  <button className="focus:outline-primary-500 bg-primary-300 hover:bg-primary-200 active:bg-primary-100 focus:outline-primary-600 rounded-md border-2 px-4 py-2 font-semibold text-black transition-colors focus:outline-1 focus:outline-offset-2">
    Save
  </button>
  <button className="text-md hover:bg-grey-100 focus:outline-primary-600 active:bg-grey-200 rounded-md border-2 px-4 py-2 font-semibold transition-colors focus:outline focus:outline-1 focus:outline-offset-2">
    Cancel
  </button>
</div>

{
  /* Right-aligned: primary last */
}
;<div className="flex justify-end gap-2">
  <button className="text-md hover:bg-grey-100 focus:outline-primary-600 active:bg-grey-200 rounded-md border-2 px-4 py-2 font-semibold transition-colors focus:outline focus:outline-1 focus:outline-offset-2">
    Cancel
  </button>
  <button className="focus:outline-primary-500 bg-primary-300 hover:bg-primary-200 active:bg-primary-100 focus:outline-primary-600 rounded-md border-2 px-4 py-2 font-semibold text-black transition-colors focus:outline-1 focus:outline-offset-2">
    Save
  </button>
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
  <label className="block text-sm font-semibold text-black">
    Email <span className="text-red-500">*</span>
  </label>
  <input
    type="email"
    aria-invalid="true"
    aria-describedby="email-error"
    className="w-full rounded-md border-2 border-red-500 px-3 py-2 text-sm text-black focus:outline focus:outline-1 focus:outline-offset-2 focus:outline-red-500 focus:outline-red-600"
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
;<button
  type="submit"
  className="focus:outline-primary-500 bg-primary-300 hover:bg-primary-200 active:bg-primary-100 focus:outline-primary-600 rounded-md border-2 px-4 py-2 font-semibold text-black transition-colors focus:outline-1 focus:outline-offset-2"
>
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
;<input
  type="email"
  onBlur={validateEmail}
  className="border-grey-600 focus:outline-primary-500 focus:outline-primary-600 rounded-md border-2 px-3 py-2 text-sm text-black focus:outline focus:outline-1 focus:outline-offset-2"
/>
```

---

### 9.7 Complete Form Pattern

```tsx
<form className="max-w-md space-y-8">
  {/* Personal info group */}
  <div className="space-y-4">
    <h2 className="text-lg font-semibold text-black">Personal Information</h2>

    <div className="space-y-1">
      <label className="block text-sm font-semibold text-black">
        Full name <span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        className="border-grey-600 focus:outline-primary-500 focus:outline-primary-600 w-full rounded-md border-2 px-3 py-2 text-sm text-black focus:outline focus:outline-1 focus:outline-offset-2"
      />
    </div>

    <div className="space-y-1">
      <label className="block text-sm font-semibold text-black">
        Email <span className="text-red-500">*</span>
      </label>
      <input
        type="email"
        className="border-grey-600 focus:outline-primary-500 focus:outline-primary-600 w-full rounded-md border-2 px-3 py-2 text-sm text-black focus:outline focus:outline-1 focus:outline-offset-2"
      />
      <p className="text-grey-500 text-sm">We'll never share your email</p>
    </div>
  </div>

  {/* Preferences group */}
  <div className="space-y-4">
    <h2 className="text-lg font-semibold text-black">Preferences</h2>

    <div className="space-y-2">
      <label className="flex cursor-pointer items-center gap-2">
        <input
          type="checkbox"
          className="border-grey-400 text-primary-600 focus:ring-primary-500 h-4 w-4 rounded-md"
        />
        <span className="text-grey-700 text-sm">Send me product updates</span>
      </label>

      <label className="flex cursor-pointer items-center gap-2">
        <input
          type="checkbox"
          className="border-grey-400 text-primary-600 focus:ring-primary-500 h-4 w-4 rounded-md"
        />
        <span className="text-grey-700 text-sm">Send me marketing emails</span>
      </label>
    </div>
  </div>

  {/* Actions */}
  <div className="flex gap-2">
    <button
      type="submit"
      className="focus:outline-primary-500 bg-primary-300 hover:bg-primary-200 active:bg-primary-100 focus:outline-primary-600 rounded-md border-2 px-4 py-2 font-semibold text-black transition-colors focus:outline-1 focus:outline-offset-2"
    >
      Create account
    </button>
    <button
      type="button"
      className="text-md hover:bg-grey-100 focus:outline-primary-600 active:bg-grey-200 rounded-md border-2 px-4 py-2 font-semibold transition-colors focus:outline focus:outline-1 focus:outline-offset-2"
    >
      Cancel
    </button>
  </div>
</form>
```

---

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
  className="bg-primary-300 text-md disabled:bg-grey-300 disabled:text-grey-500 disabled:border-grey-400 rounded-md border-2 px-4 py-2 font-semibold text-black disabled:cursor-not-allowed"
>
  Submit
</button>

{
  /* Disabled input */
}
;<input
  disabled
  className="border-grey-600 disabled:bg-grey-50 rounded-md border-2 px-3 py-2 text-sm text-black disabled:cursor-not-allowed disabled:opacity-50"
/>
```

**🟡 DIRECTIVE:** Show inline warning if disabled item affects multiple items or primary action.

```tsx
<div className="space-y-2">
  <button
    disabled
    className="bg-primary-300 text-md disabled:bg-grey-300 disabled:text-grey-500 disabled:border-grey-400 rounded-md border-2 px-4 py-2 font-semibold text-black disabled:cursor-not-allowed"
  >
    Submit application
  </button>
  <div className="flex gap-2 rounded-md border-2 border-amber-200 bg-amber-50 p-3">
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
    <button className="focus:outline-primary-500 bg-primary-300 hover:bg-primary-200 active:bg-primary-100 focus:outline-primary-600 rounded-md border-2 px-4 py-2 font-semibold text-black transition-colors focus:outline-1 focus:outline-offset-2">
      Add member
    </button>
  )
}
```

---

### 11.3 Permission Restrictions

**🔴 COMMAND:** When interactive elements are disabled due to permission restrictions, they must remain visible but non-interactive.

**🔴 COMMAND:** Permission restrictions must be communicated through complementary informative elements, not through the disabled element itself.

**Read about permissions:** See [Patterns: Permission Restrictions](./patterns.md#11-permission-restrictions) for complete guidance on:

- Individual element restrictions (disabled element + info icon with tooltip)
- Global/area restrictions (standalone alert container)
- Permission message guidelines
- Accessibility requirements

**Key principles:**

- Disabled elements due to permissions are always non-interactive
- Complementary informative sibling elements explain the restriction
- Messages follow EXPLAIN before ASK principle
- GUIDING, supportive tone assumes positive intent

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
  <Database width="48" height="48" className="text-grey-400" aria-hidden="true" />
  <h3 className="mt-4 text-lg font-semibold text-black">No data sources yet</h3>
  <p className="text-grey-600 mt-2 text-sm">
    Connect your first data source to start analyzing metrics
  </p>
  <button className="focus:outline-primary-500 bg-primary-300 hover:bg-primary-200 active:bg-primary-100 focus:outline-primary-600 mt-6 rounded-md border-2 px-4 py-2 font-semibold text-black transition-colors focus:outline-1 focus:outline-offset-2">
    Add data source
  </button>
</div>

{
  /* Alternative: direct to UI element */
}
;<div className="p-12 text-center">
  <h3 className="text-lg font-semibold text-black">No projects yet</h3>
  <p className="text-grey-600 mt-2 text-sm">
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

**🔴 COMMAND:** Complex errors must follow [Error Translation](./patterns.md#104-error-translation) principles - translate technical errors to user-friendly language that explains root cause and solution.

```tsx
{
  /* Permissions error */
}
;<div className="p-12 text-center">
  <Lock width="48" height="48" className="text-grey-400 mx-auto" aria-hidden="true" />
  <h3 className="mt-4 text-lg font-semibold text-black">Access restricted</h3>
  <p className="text-grey-600 mt-2 text-sm">
    You don't have permission to view this data. Contact your administrator to request access.
  </p>
  <a
    href="/support"
    className="text-primary-600 hover:text-primary-700 mt-4 inline-block text-sm font-semibold underline"
  >
    Contact support
  </a>
</div>

{
  /* System error */
}
;<div className="p-12 text-center">
  <AlertCircle width="48" height="48" className="mx-auto text-amber-600" aria-hidden="true" />
  <h3 className="mt-4 text-lg font-semibold text-black">Unable to load data</h3>
  <p className="text-grey-600 mt-2 text-sm">
    We're having trouble connecting to the server. Check the activity log for details.
  </p>
  <button className="text-md hover:bg-grey-100 focus:outline-primary-600 active:bg-grey-200 mt-6 rounded-md border-2 px-4 py-2 font-semibold transition-colors focus:outline focus:outline-1 focus:outline-offset-2">
    View activity log
  </button>
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
;<div className="rounded-lg border-2 p-4">
  <FileQuestion width="32" height="32" className="text-grey-400 mx-auto" aria-hidden="true" />
  <h4 className="mt-3 text-sm font-semibold text-black">No files</h4>
  <p className="text-grey-600 mt-1 text-xs">Upload your first file to get started</p>
  <button className="hover:bg-grey-100 focus:outline-primary-600 active:bg-grey-200 mt-3 w-full rounded-md border-2 px-3 py-2 text-sm font-semibold transition-colors focus:outline focus:outline-1 focus:outline-offset-2">
    Upload file
  </button>
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
    <Database width="64" height="64" className="text-grey-400 mx-auto" aria-hidden="true" />
    <h2 className="mt-6 text-2xl font-bold text-black">No databases configured</h2>
    <p className="text-grey-600 mt-3">
      Connect your first database to start managing your data infrastructure
    </p>
    <button className="focus:outline-primary-500 bg-primary-300 hover:bg-primary-200 active:bg-primary-100 focus:outline-primary-600 mt-6 rounded-md border-2 px-4 py-2 font-semibold text-black transition-colors focus:outline-1 focus:outline-offset-2">
      Connect database
    </button>
    <a
      href="/docs"
      className="text-primary-600 hover:text-primary-700 mt-4 block text-sm font-semibold underline"
    >
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
  <div className="bg-grey-200 h-4 w-3/4 animate-pulse rounded" />
  <div className="bg-grey-200 h-4 w-1/2 animate-pulse rounded" />
</div>

{
  /* Card skeleton */
}
;<div className="rounded-lg border-2 p-4">
  <div className="bg-grey-200 h-6 w-32 animate-pulse rounded" />
  <div className="mt-3 space-y-2">
    <div className="bg-grey-200 h-4 w-full animate-pulse rounded" />
    <div className="bg-grey-200 h-4 w-5/6 animate-pulse rounded" />
  </div>
</div>

{
  /* Table row skeleton */
}
;<tr>
  <td className="px-4 py-3">
    <div className="bg-grey-200 h-4 w-24 animate-pulse rounded" />
  </td>
  <td className="px-4 py-3">
    <div className="bg-grey-200 h-4 w-32 animate-pulse rounded" />
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
;<div className="bg-grey-900/50 fixed inset-0 z-50 flex items-center justify-center">
  <div className="rounded-lg border-2 bg-white p-8 text-center">
    <Loader2
      width="48"
      height="48"
      className="text-primary-600 mx-auto animate-spin"
      aria-hidden="true"
    />
    <p className="mt-4 font-semibold text-black">Saving changes…</p>
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
  <div className="rounded-lg border-2 p-4">
    <div className="bg-grey-200 h-6 w-32 animate-pulse rounded" />
    <div className="bg-grey-200 mt-3 h-24 animate-pulse rounded" />
  </div>
  {/* More skeleton cards */}
</div>

{
  /* Phase 2: Partial data */
}
;<div className="grid grid-cols-3 gap-4">
  <div className="rounded-lg border-2 p-4">
    <h3 className="text-lg font-semibold text-black">Revenue</h3>
    <div className="bg-grey-200 mt-3 h-24 animate-pulse rounded" />
  </div>
</div>

{
  /* Phase 3: Complete */
}
;<div className="grid grid-cols-3 gap-4">
  <div className="rounded-lg border-2 p-4">
    <h3 className="text-lg font-semibold text-black">Revenue</h3>
    <p className="mt-3 text-3xl font-bold text-black">$45,231</p>
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
    <div className="text-grey-600 flex items-center gap-2 text-sm">
      <Loader2 width="16" height="16" className="animate-spin" aria-hidden="true" />
      <span>Loading data…</span>
    </div>
  ) : (
    <span className="sr-only">Data loaded</span>
  )}
</div>
```

---
