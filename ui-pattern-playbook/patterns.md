# Patterns

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
;<button className="bg-primary-300 text-md hover:bg-primary-200 focus:outline-primary-500 focus:outline-primary-600 active:bg-primary-100 inline-flex min-w-32 items-center gap-2 rounded-md border-2 px-4 py-2 font-semibold text-black transition-colors focus:outline focus:outline-1 focus:outline-offset-2">
  <PlusCircle className="h-5 w-5" />
  Add document
</button>

{
  /* Low emphasis add */
}
;<button className="text-md hover:bg-grey-100 focus:outline-primary-600 active:bg-grey-200 inline-flex items-center gap-2 rounded-md border-2 px-4 py-2 font-semibold transition-colors focus:outline focus:outline-1 focus:outline-offset-2">
  <PlusCircle className="h-5 w-5" />
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
  <button className="text-md hover:bg-grey-100 focus:outline-primary-600 active:bg-grey-200 rounded-md border-2 px-4 py-2 font-semibold transition-colors focus:outline focus:outline-1 focus:outline-offset-2">
    Cancel
  </button>
  <button className="bg-primary-300 text-md hover:bg-primary-200 focus:outline-primary-500 focus:outline-primary-600 active:bg-primary-100 rounded-md border-2 px-4 py-2 font-semibold text-black transition-colors focus:outline focus:outline-1 focus:outline-offset-2">
    Save changes
  </button>
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
  <input className="border-grey-600 placeholder-grey-400 placeholder-grey-500 focus:outline-primary-500 focus:outline-primary-600 w-full rounded-md border-2 px-3 py-2 pr-8 text-sm text-black focus:outline focus:outline-1 focus:outline-offset-2" />
  <button className="absolute top-1/2 right-2 -translate-y-1/2">
    <XCircle className="text-grey-400 h-5 w-5" aria-hidden="true" />
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
;<div className="bg-grey-900 flex items-center justify-between gap-3 rounded-md border-2 p-4 text-white">
  <span>Action completed</span>
  <button className="hover:bg-grey-800 rounded-md p-1 transition">
    <XCircle className="h-5 w-5" aria-hidden="true" />
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
  <pre className="bg-grey-900 rounded-md border-2 p-4">
    <code>npm install package</code>
  </pre>
  <button
    className="hover:bg-grey-800 absolute top-2 right-2 rounded-md p-1.5 transition"
    aria-label="Copy to clipboard"
  >
    <Copy className="text-grey-400 h-5 w-5" aria-hidden="true" />
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
;<button className="rounded-md p-1 text-red-600 hover:bg-red-50">
  <Trash2 className="h-5 w-5" aria-hidden="true" />
</button>

{
  /* Moderate-impact: confirmation dialog */
}
;<div className="rounded-md border p-4">
  <h3 className="font-semibold">Delete 3 items?</h3>
  <p className="text-grey-600 text-sm">This action cannot be undone.</p>
  <div className="mt-4 flex gap-2">
    <button className="text-md rounded-md border-2 px-4 py-2 font-semibold">Cancel</button>
    <button className="rounded-md bg-red-300 px-3 py-2 text-white">Delete</button>
  </div>
</div>

{
  /* High-impact: typed confirmation */
}
;<div className="space-y-4">
  <p className="text-sm text-black">
    Type <strong>delete-production-db</strong> to confirm
  </p>
  <input className="border-grey-600 focus:outline-primary-500 focus:outline-primary-600 w-full rounded-md border-2 px-3 py-2 text-sm text-black focus:outline focus:outline-1 focus:outline-offset-2" />
  <button
    disabled
    className="text-md disabled:bg-grey-300 disabled:text-grey-500 disabled:border-grey-400 rounded-md border-2 bg-red-300 px-4 py-2 font-semibold text-black transition-colors disabled:cursor-not-allowed"
  >
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
;<button className="text-grey-600 hover:bg-grey-50 flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm font-medium transition-colors hover:text-black">
  <Edit2 className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
  Edit
</button>

{
  /* Edit icon button */
}
;<button className="hover:bg-grey-100 rounded-md p-1.5 transition">
  <Edit2 className="text-grey-600 h-5 w-5" aria-hidden="true" />
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
  <button className="text-md rounded-md border-2 px-4 py-2 font-semibold">Back</button>
  <button className="bg-primary-300 text-md hover:bg-primary-200 focus:outline-primary-500 focus:outline-primary-600 active:bg-primary-100 inline-flex items-center gap-2 rounded-md border-2 px-4 py-2 font-semibold text-black transition-colors focus:outline focus:outline-1 focus:outline-offset-2">
    Next
    <ArrowRight className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
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
;<button className="text-md hover:bg-grey-100 focus:outline-primary-600 active:bg-grey-200 inline-flex items-center gap-2 rounded-md border-2 px-4 py-2 font-semibold transition-colors focus:outline focus:outline-1 focus:outline-offset-2">
  <RefreshCcw className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
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
;<button className="text-grey-600 flex items-center gap-2 text-sm hover:text-black">
  <Minus className="h-5 w-5" aria-hidden="true" />
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
;<button className="text-primary-600 hover:text-primary-700 text-sm underline">
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
    <AlertCircle className="h-12 w-12" className="mx-auto text-red-600" aria-hidden="true" />
    <h1 className="text-2xl font-bold">Something went wrong</h1>
    <p className="text-grey-600">
      We couldn't process your request. Please try again or contact support if the problem persists.
    </p>
    <button className="bg-primary-300 rounded-md px-3 py-2 text-white">Try again</button>
  </div>
</div>
```

---

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
  className="bg-grey-900/50 fixed inset-0 z-50 flex items-center justify-center"
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
      <button className="text-md rounded-md border-2 px-4 py-2 font-semibold">Cancel</button>
      <button className="bg-primary-300 rounded-md px-3 py-2 text-white">Confirm</button>
    </div>
  </div>
</div>
```

**🔴 COMMAND:** All modals must include:

- Backdrop overlay (`bg-grey-900/50`)
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
;<div className="bg-grey-900/50 fixed inset-0 z-50 flex items-center justify-center p-4">
  <div className="w-full max-w-md rounded-lg bg-white p-4 shadow-xl sm:p-6">
    <h2 className="text-lg font-bold sm:text-xl">Title</h2>

    <div className="mt-3 sm:mt-4">{/* Content */}</div>

    {/* Mobile: stacked buttons, Desktop: horizontal */}
    <div className="mt-4 flex flex-col gap-2 sm:mt-6 sm:flex-row sm:justify-end">
      <button className="text-md w-full rounded-md border-2 px-4 py-2 font-semibold sm:w-auto">
        Cancel
      </button>
      <button className="bg-primary-300 w-full rounded-md px-3 py-2 text-white sm:w-auto">
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
  className="bg-grey-900/50 fixed inset-0 z-50 flex items-center justify-center p-4"
  role="dialog"
  aria-modal="true"
  aria-labelledby="publish-title"
>
  <div className="w-full max-w-md rounded-lg bg-white p-4 shadow-xl sm:p-6">
    {/* Close button */}
    <button
      onClick={onClose}
      className="hover:bg-grey-100 absolute top-4 right-4 rounded-md p-1"
      aria-label="Close"
    >
      <X className="h-5 w-5" />
    </button>

    {/* Title */}
    <h2 id="publish-title" className="text-lg font-bold sm:text-xl">
      Publish article?
    </h2>

    {/* Body */}
    <p className="text-grey-600 mt-3 text-sm sm:mt-4">
      This article will be visible to all subscribers immediately. You'll be notified when it's
      published.
    </p>

    {/* Actions */}
    <div className="mt-4 flex flex-col gap-2 sm:mt-6 sm:flex-row sm:justify-end">
      <button
        onClick={onClose}
        className="border-grey-300 hover:bg-grey-50 w-full rounded-md border-2 px-3 py-2 sm:w-auto"
      >
        Cancel
      </button>
      <button
        onClick={handlePublish}
        className="bg-primary-300 hover:bg-primary-200 w-full rounded-md px-3 py-2 text-white sm:w-auto"
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
  className="bg-grey-900/50 fixed inset-0 z-50 flex items-center justify-center p-4"
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
      <button onClick={onClose} className="hover:bg-grey-100 rounded-md p-1" aria-label="Close">
        <X className="h-5 w-5" />
      </button>
    </div>

    {/* Body */}
    <div className="mt-2 ml-11">
      <p className="text-grey-600 text-sm">
        Removing <strong>Sarah Johnson</strong> will revoke her access immediately. She won't be
        able to view projects or data.
      </p>
      <p className="mt-2 text-sm font-semibold text-black">This action cannot be undone.</p>
    </div>

    {/* Actions */}
    <div className="mt-4 flex flex-col gap-2 sm:mt-6 sm:flex-row sm:justify-end">
      <button
        onClick={onClose}
        autoFocus // Focus cancel button first
        className="border-grey-300 hover:bg-grey-50 w-full rounded-md border-2 px-3 py-2 sm:w-auto"
      >
        Cancel
      </button>
      <button
        onClick={handleDelete}
        className="w-full rounded-md bg-red-300 px-3 py-2 text-white hover:bg-red-200 sm:w-auto"
      >
        Delete member
      </button>
    </div>
  </div>
</div>

{
  /* BETTER: Undo toast after immediate action (no modal) */
}
;<div className="bg-grey-900 fixed right-4 bottom-4 left-4 rounded-lg p-4 text-white shadow-xl sm:right-4 sm:left-auto sm:w-96">
  <div className="flex items-start justify-between gap-3">
    <div>
      <p className="font-semibold">Member removed</p>
      <p className="text-grey-300 mt-1 text-sm">Sarah Johnson no longer has access</p>
    </div>
    <button
      onClick={handleUndo}
      className="rounded-md border border-white/20 px-3 py-1.5 text-sm font-semibold whitespace-nowrap hover:bg-white/10"
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
  className="bg-grey-900/50 fixed inset-0 z-50 flex items-center justify-center p-4"
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
      <p className="text-grey-600 text-sm">
        We couldn't save your changes because the connection was interrupted. Your work is saved
        locally.
      </p>
      <p className="text-grey-600 mt-2 text-sm">
        Check your internet connection and try saving again.
      </p>
    </div>

    {/* Actions */}
    <div className="mt-4 flex flex-col gap-2 sm:mt-6 sm:flex-row sm:justify-end">
      <button
        onClick={onClose}
        className="border-grey-300 hover:bg-grey-50 w-full rounded-md border-2 px-3 py-2 sm:w-auto"
      >
        Cancel
      </button>
      <button
        onClick={handleRetry}
        className="bg-primary-300 hover:bg-primary-200 w-full rounded-md px-3 py-2 text-white sm:w-auto"
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
  className="bg-grey-900/50 fixed inset-0 z-50 flex items-center justify-center p-4"
  role="dialog"
  aria-modal="true"
  aria-labelledby="permission-title"
>
  <div className="w-full max-w-md rounded-lg bg-white p-4 shadow-xl sm:p-6">
    {/* Close button */}
    <button
      onClick={onClose}
      className="hover:bg-grey-100 absolute top-4 right-4 rounded-md p-1"
      aria-label="Close"
    >
      <X className="h-5 w-5" />
    </button>

    {/* Icon + title */}
    <div className="flex items-center gap-3">
      <div className="rounded-full bg-indigo-100 p-2">
        <Camera className="text-primary-600 h-6 w-6" aria-hidden="true" />
      </div>
      <h2 id="permission-title" className="text-lg font-bold sm:text-xl">
        Allow camera access?
      </h2>
    </div>

    {/* Body */}
    <div className="mt-2 ml-11">
      <p className="text-grey-600 text-sm">
        We need camera access to scan QR codes and upload profile photos.
      </p>
      <p className="text-grey-600 mt-2 text-sm">You can change this anytime in settings.</p>
    </div>

    {/* Actions */}
    <div className="mt-4 flex flex-col gap-2 sm:mt-6 sm:flex-row sm:justify-end">
      <button
        onClick={handleDeny}
        className="border-grey-300 hover:bg-grey-50 w-full rounded-md border-2 px-3 py-2 sm:w-auto"
      >
        Not now
      </button>
      <button
        onClick={handleAllow}
        className="bg-primary-300 hover:bg-primary-200 w-full rounded-md px-3 py-2 text-white sm:w-auto"
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
  className="bg-grey-900/50 fixed inset-0 z-50 flex items-center justify-center p-4"
  role="dialog"
  aria-modal="true"
  aria-labelledby="connect-title"
>
  <div className="w-full max-w-md rounded-lg bg-white p-4 shadow-xl sm:p-6">
    {/* Close button */}
    <button
      onClick={onClose}
      className="hover:bg-grey-100 absolute top-4 right-4 rounded-md p-1"
      aria-label="Close"
    >
      <X className="h-5 w-5" />
    </button>

    {/* Icon + title */}
    <div className="flex items-center gap-3">
      <div className="bg-grey-100 flex h-12 w-12 items-center justify-center rounded-lg">
        <img src="/slack-logo.svg" alt="" className="h-8 w-8" />
      </div>
      <h2 id="connect-title" className="text-lg font-bold sm:text-xl">
        Connect Slack?
      </h2>
    </div>

    {/* Body */}
    <div className="mt-4">
      <p className="text-grey-600 text-sm">
        We'll be able to send notifications to your Slack workspace and read channel messages to
        sync data.
      </p>

      {/* Permissions list */}
      <div className="bg-grey-50 mt-3 space-y-2 rounded-md border p-3">
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
        className="border-grey-300 hover:bg-grey-50 w-full rounded-md border-2 px-3 py-2 sm:w-auto"
      >
        Cancel
      </button>
      <button
        onClick={handleConnect}
        className="bg-primary-300 hover:bg-primary-200 w-full rounded-md px-3 py-2 text-white sm:w-auto"
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
  className="bg-grey-900/50 fixed inset-0 z-50 flex items-center justify-center p-4"
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
      <button onClick={onClose} className="hover:bg-grey-100 rounded-md p-1" aria-label="Close">
        <X className="h-5 w-5" />
      </button>
    </div>

    {/* Preview content - scrollable */}
    <div className="max-h-96 overflow-y-auto p-4 sm:p-6">
      {/* Metadata */}
      <div className="bg-grey-50 mb-4 space-y-1 rounded-md border p-3 text-sm">
        <div className="flex justify-between">
          <span className="text-grey-600">Visibility:</span>
          <span className="font-semibold">All subscribers</span>
        </div>
        <div className="flex justify-between">
          <span className="text-grey-600">Publish date:</span>
          <span className="font-semibold">Immediately</span>
        </div>
        <div className="flex justify-between">
          <span className="text-grey-600">Word count:</span>
          <span className="font-semibold">1,247 words</span>
        </div>
      </div>

      {/* Preview */}
      <article className="prose prose-slate max-w-none">
        <h1>Article Title Goes Here</h1>
        <p className="text-grey-600">
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
          className="border-grey-300 hover:bg-grey-50 w-full rounded-md border-2 px-3 py-2 sm:w-auto"
        >
          Edit article
        </button>
        <button
          onClick={handlePublish}
          className="bg-primary-300 hover:bg-primary-200 w-full rounded-md px-3 py-2 text-white sm:w-auto"
        >
          Publish now
        </button>
      </div>
      <button
        onClick={handleSaveDraft}
        className="text-primary-600 hover:text-primary-700 mt-3 w-full text-sm underline sm:w-auto"
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
  className="bg-grey-900/50 fixed inset-0 z-50 flex items-center justify-center p-4"
  role="dialog"
  aria-modal="true"
  aria-labelledby="unsaved-title"
>
  <div className="w-full max-w-md rounded-lg bg-white p-4 shadow-xl sm:p-6">
    {/* Close button */}
    <button
      onClick={handleKeepEditing}
      className="hover:bg-grey-100 absolute top-4 right-4 rounded-md p-1"
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
      <p className="text-grey-600 text-sm">
        You have unsaved changes to this document. Save them before leaving?
      </p>
    </div>

    {/* Actions */}
    <div className="mt-4 flex flex-col gap-2 sm:mt-6 sm:flex-row sm:justify-end">
      <button
        onClick={handleDiscard}
        className="border-grey-300 hover:bg-grey-50 order-2 w-full rounded-md border-2 px-3 py-2 sm:order-1 sm:w-auto"
      >
        Discard
      </button>
      <button
        onClick={handleKeepEditing}
        className="border-grey-300 hover:bg-grey-50 order-1 w-full rounded-md border-2 px-3 py-2 sm:order-2 sm:w-auto"
      >
        Keep editing
      </button>
      <button
        onClick={handleSave}
        className="bg-primary-300 hover:bg-primary-200 order-3 w-full rounded-md px-3 py-2 text-white sm:w-auto"
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
  className="bg-grey-900/50 fixed inset-0 z-50 flex items-center justify-center p-4"
  role="dialog"
  aria-modal="true"
  aria-labelledby="help-title"
>
  <div className="w-full max-w-md rounded-lg bg-white p-4 shadow-xl sm:p-6">
    {/* Close button */}
    <button
      onClick={onClose}
      className="hover:bg-grey-100 absolute top-4 right-4 rounded-md p-1"
      aria-label="Close"
    >
      <X className="h-5 w-5" />
    </button>

    {/* Icon + title */}
    <div className="flex items-center gap-3">
      <div className="rounded-full bg-indigo-100 p-2">
        <HelpCircle className="text-primary-600 h-6 w-6" aria-hidden="true" />
      </div>
      <h2 id="help-title" className="text-lg font-bold sm:text-xl">
        API rate limit
      </h2>
    </div>

    {/* Body */}
    <div className="mt-2 ml-11 space-y-3">
      <p className="text-grey-600 text-sm">
        Rate limits control how many API requests you can make per hour. They prevent abuse and
        ensure fair usage for all users.
      </p>

      {/* Example */}
      <div className="bg-grey-50 rounded-md border p-3">
        <p className="text-xs font-semibold text-slate-500 uppercase">Example</p>
        <p className="mt-1 text-sm text-slate-700">
          With a 1,000 requests/hour limit, you can make about 16 requests per minute.
        </p>
      </div>

      {/* Learn more link */}
      <a
        href="/docs/rate-limits"
        className="text-primary-600 hover:text-primary-700 inline-flex items-center gap-1 text-sm underline"
      >
        Learn more about rate limits
        <ExternalLink className="h-4 w-4" aria-hidden="true" />
      </a>
    </div>

    {/* Action */}
    <div className="mt-4 flex justify-end sm:mt-6">
      <button
        onClick={onClose}
        className="border-grey-300 hover:bg-grey-50 w-full rounded-md border-2 px-3 py-2 sm:w-auto"
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
  className="bg-grey-900/50 fixed inset-0 z-50 flex items-center justify-center p-4"
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
      <button onClick={onClose} className="hover:bg-grey-100 rounded-md p-1" aria-label="Close">
        <X className="h-4 w-4" aria-hidden="true" />
      </button>
    </div>
    <p className="text-grey-600 mt-2 text-sm">
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
  className="bg-grey-900/50 fixed inset-0 z-50 flex items-center justify-center p-4"
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
      className="hover:bg-grey-100 absolute top-4 right-4 rounded-md p-1"
      aria-label="Close"
    >
      <X className="h-4 w-4" />
    </button>

    <h2 id="transaction-title" className="text-lg font-semibold">
      Save changes?
    </h2>

    <p className="text-grey-600 mt-2 text-sm">
      You have unsaved changes. Do you want to save before closing?
    </p>

    <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:justify-end">
      <button
        onClick={handleDiscard}
        className="border-grey-300 hover:bg-grey-50 w-full rounded-md border-2 px-3 py-2 sm:w-auto"
      >
        Discard
      </button>
      <button
        onClick={handleSave}
        className="bg-primary-300 hover:bg-primary-200 w-full rounded-md px-3 py-2 text-white sm:w-auto"
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
  className="bg-grey-900/50 fixed inset-0 z-50 flex items-center justify-center p-4"
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
      className="hover:bg-grey-100 absolute top-4 right-4 rounded-md p-1"
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

    <p className="text-grey-600 mt-2 ml-11 text-sm">Your profile has been updated successfully.</p>

    <div className="mt-4 flex justify-end">
      <button
        onClick={onClose}
        className="bg-primary-300 hover:bg-primary-200 w-1/2 rounded-md px-3 py-2 text-white"
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
  className="bg-grey-900/50 fixed inset-0 z-50 flex items-center justify-center p-4"
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
        <div className="bg-primary-300 h-1 flex-1 rounded-full" />
        <div className="bg-primary-300 h-1 flex-1 rounded-full" />
        <div className="bg-grey-200 h-1 flex-1 rounded-full" />
      </div>
    </div>

    {/* Step content */}
    <div className="p-4 sm:p-6">
      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium">Company name</label>
          <input
            type="text"
            className="text-md mt-1 w-full rounded-md border-2 px-4 py-2 font-semibold"
          />
        </div>
        <div>
          <label className="text-sm font-medium">Industry</label>
          <select className="text-md mt-1 w-full rounded-md border-2 px-4 py-2 font-semibold">
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
          className="text-grey-600 hover:bg-grey-50 rounded-md px-3 py-2"
        >
          Cancel
        </button>
        <div className="flex gap-2">
          <button
            onClick={handlePrevious}
            className="border-grey-300 hover:bg-grey-50 w-24 rounded-md border-2 px-3 py-2"
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            className="bg-primary-300 hover:bg-primary-200 w-24 rounded-md px-3 py-2 text-white"
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
  <button className="bg-primary-300 w-full rounded-md px-3 py-2 text-white sm:w-1/2">Got it</button>
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
  <button className="border-grey-300 flex-1 rounded-md border-2 px-3 py-2">Cancel</button>
  <button className="bg-primary-300 flex-1 rounded-md px-3 py-2 text-white">Save</button>
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
  <button className="text-md w-full rounded-md border-2 px-4 py-2 text-sm font-semibold sm:w-1/4">
    Discard
  </button>
  <button className="text-md w-full rounded-md border-2 px-4 py-2 text-sm font-semibold sm:w-1/4">
    Save draft
  </button>
  <button className="bg-primary-300 w-full rounded-md px-3 py-2 text-sm text-white sm:w-1/4">
    Publish
  </button>
</div>

{
  /* BETTER: Two buttons + tertiary link */
}
;<div className="space-y-3">
  <div className="flex flex-col gap-2 sm:flex-row">
    <button className="text-md flex-1 rounded-md border-2 px-4 py-2 font-semibold">Discard</button>
    <button className="bg-primary-300 flex-1 rounded-md px-3 py-2 text-white">Publish</button>
  </div>
  <button className="text-primary-600 hover:text-primary-700 w-full text-sm underline sm:w-auto">
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
  <button className="text-grey-600 hover:bg-grey-50 order-2 w-full rounded-md px-3 py-2 sm:order-1 sm:w-auto">
    Cancel
  </button>
  <div className="order-1 flex gap-2 sm:order-2">
    <button className="border-grey-300 w-full rounded-md border-2 px-3 py-2 sm:w-24">
      Previous
    </button>
    <button className="bg-primary-300 w-full rounded-md px-3 py-2 text-white sm:w-24">Next</button>
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
- [ ] Backdrop has sufficient contrast (`bg-grey-900/50` minimum)
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
      className="bg-grey-900/50 fixed inset-0 z-50 flex items-center justify-center p-4"
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
          className="hover:bg-grey-100 absolute top-4 right-4 rounded-md p-1"
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

**🔴 COMMAND:** Cards use `rounded-lg border-2 border-grey-300 bg-white p-6` as base styling.

**🔴 COMMAND:** Apply `dark:border-grey-700 dark:bg-grey-900` for dark mode support.

```tsx
<div className="border-grey-300 dark:border-grey-700 dark:bg-grey-900 rounded-lg border-2 bg-white p-6 transition-all hover:border-indigo-500 hover:shadow-md">
  <div className="flex items-start gap-4">
    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-50 dark:bg-indigo-900/20">
      {/* Icon */}
    </div>
    <div className="min-w-0 flex-1">
      <h3 className="text-lg font-bold text-black dark:text-gray-100">Title</h3>
      <p className="text-grey-600 mt-1 text-sm dark:text-gray-400">Description</p>
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
| Capability | `bg-grey-100 text-gray-700` (dark: `bg-gray-800 text-gray-300`)           | Technical capabilities         |

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
;<div className="border-grey-300 rounded-lg border-2 bg-white p-6 transition-all hover:border-indigo-500 hover:shadow-md">
  {/* Content */}
</div>

{
  /* Selected state */
}
;<div className="relative rounded-lg border-2 border-indigo-500 bg-white p-6 shadow-md">
  <div className="bg-primary-300 absolute top-4 right-4 flex h-6 w-6 items-center justify-center rounded-full">
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

**🔴 COMMAND:** Empty state heading uses `text-lg font-semibold`, description uses `text-sm text-grey-600`.

```tsx
<div className="flex min-h-[400px] items-center justify-center px-4 py-12">
  <div className="max-w-md text-center">
    <div className="bg-grey-100 mx-auto flex h-16 w-16 items-center justify-center rounded-full">
      <Search className="h-8 w-8 text-gray-400" />
    </div>
    <h3 className="mt-4 text-lg font-semibold text-black">No templates found</h3>
    <p className="text-grey-600 mt-2 text-sm">Try adjusting your filters or search terms.</p>
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
<div className="bg-grey-900/50 fixed inset-0 z-50 flex items-center justify-center p-4">
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
        <button className="text-primary-600 border-b-2 border-indigo-600 px-1 py-3 text-sm font-semibold">
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
      className="block w-full rounded-md border py-2 pr-3 pl-10 text-sm"
    />
  </div>
  <div className="flex gap-3">
    <select className="text-md block rounded-md border-2 px-4 py-2 text-sm font-semibold">
      <option>All categories</option>
    </select>
    <select className="text-md block rounded-md border-2 px-4 py-2 text-sm font-semibold">
      <option>Popular first</option>
    </select>
  </div>
</div>
```

---

#### Context and Pagination

**🟡 DIRECTIVE:** Display gallery context to help users understand their position in the collection.

**🔴 COMMAND:** Show result count as "Showing X of Y templates" using `text-sm text-grey-600`.

**🔴 COMMAND:** For large collections (>12 items), implement pagination or "Load more" button.

```tsx
<div className="mb-4">
  <p className="text-grey-600 text-sm dark:text-gray-400">Showing 12 of 48 templates</p>
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
    <p className="text-grey-600 mt-1 text-sm">Handles FAQs and routing.</p>
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

**🔴 COMMAND:** Display "X of Y steps" in page header using `text-sm text-grey-600`.

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
        <span className="text-primary-600 text-sm font-semibold">2</span>
      </div>
      <span className="text-primary-600 text-sm font-semibold">Voice Settings</span>
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

**🔴 COMMAND:** Progress fill uses `bg-primary-300` with smooth transition animation.

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
      className="bg-primary-300 h-full rounded-full transition-all duration-300"
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
  <label className="block text-sm font-medium text-black">Agent Name</label>
  <input
    className="mt-1 block w-full rounded-md border border-red-600 bg-white px-3 py-2 text-sm"
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
    <label className="block text-sm font-medium text-black">Agent Name</label>
    <input
      type="text"
      defaultValue="Customer Support Agent"
      className="text-md mt-1 block w-full rounded-md border-2 px-4 py-2 text-sm font-semibold"
    />
  </div>

  <div>
    <label className="block text-sm font-medium text-black">Voice Language</label>
    <select
      defaultValue="en-US"
      className="text-md mt-1 block w-full rounded-md border-2 px-4 py-2 text-sm font-semibold"
    >
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
    className="hover:bg-grey-50 order-2 rounded-md px-4 py-2 text-sm font-semibold text-gray-700 sm:order-1"
  >
    Cancel
  </button>

  <div className="order-1 flex gap-3 sm:order-2">
    <button
      type="button"
      className="flex-1 rounded-md border border-gray-300 px-4 py-2 text-sm font-semibold sm:flex-initial"
    >
      Previous
    </button>
    <button
      type="button"
      className="bg-primary-300 flex-1 rounded-md px-4 py-2 text-sm font-semibold text-white sm:flex-initial"
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
    <span className="font-medium text-black">Step 2 of 4:</span>
    <span className="text-grey-600">Voice Settings</span>
  </div>
  <div className="mt-2 h-1 overflow-hidden rounded-full bg-gray-200">
    <div className="bg-primary-300 h-full transition-all" style={{ width: '50%' }} />
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
    <h1 className="text-xl font-bold text-black">Create Voice Agent</h1>
    <p className="text-grey-600 mt-1 text-sm">Configure your agent in 4 simple steps</p>
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
        <h2 className="text-lg font-semibold text-black">Voice Settings</h2>
        <p className="text-grey-600 mt-1 text-sm">Choose how your agent will sound</p>
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
  <div className="border-grey-300 rounded-lg border-2 bg-white p-6">
    <div className="mb-4 flex items-center justify-between">
      <h3 className="text-base font-semibold text-black">Basic Information</h3>
      <button className="text-primary-600 text-sm font-semibold" onClick={() => goToStep(1)}>
        Edit
      </button>
    </div>
    <dl className="space-y-3">
      <div>
        <dt className="text-sm font-medium text-gray-500">Agent Name</dt>
        <dd className="mt-1 text-sm text-black">Customer Support Agent</dd>
      </div>
    </dl>
  </div>

  {/* Final actions */}
  <div className="flex gap-3">
    <button className="flex-1 rounded-md border px-4 py-2 text-sm font-semibold">
      Save as Draft
    </button>
    <button className="bg-primary-300 flex-1 rounded-md px-4 py-2 text-sm font-semibold text-white">
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
    <h3 className="text-base font-semibold text-black">Basic Settings</h3>
    <p className="text-grey-600 mt-1 text-sm">Essential configuration for your voice agent</p>
  </div>

  <div className="space-y-4">
    <div>
      <label className="block text-sm font-medium text-black">Voice Language</label>
      <select
        defaultValue="en-US"
        className="text-md mt-1 block w-full rounded-md border-2 px-4 py-2 text-sm font-semibold"
      >
        <option value="en-US">English (US)</option>
        <option value="en-GB">English (UK)</option>
      </select>
    </div>

    <div>
      <label className="block text-sm font-medium text-black">Response Style</label>
      <select
        defaultValue="concise"
        className="text-md mt-1 block w-full rounded-md border-2 px-4 py-2 text-sm font-semibold"
      >
        <option value="concise">Concise</option>
        <option value="detailed">Detailed</option>
      </select>
    </div>
  </div>

  {/* Advanced toggle */}
  <button
    type="button"
    className="text-primary-600 hover:text-primary-700 inline-flex items-center gap-2 text-sm font-semibold"
  >
    <ChevronRight className="h-4 w-4" />
    Show advanced settings
  </button>
</div>
```

---

#### Toggle Mechanism

**🔴 COMMAND:** Advanced toggle must use chevron icon (right when collapsed, down when expanded) with clear label text.

**🔴 COMMAND:** Toggle button uses `text-sm font-semibold text-primary-600` styling.

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
  className="text-primary-600 hover:text-primary-700 inline-flex items-center gap-2 text-sm font-semibold"
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
  className="text-primary-600 hover:text-primary-700 inline-flex items-center gap-2 text-sm font-semibold"
  onClick={() => setShowAdvanced(false)}
>
  <ChevronDown className="h-4 w-4" />
  Hide advanced settings
</button>
```

---

#### Advanced View (Expanded State)

**🔴 COMMAND:** Advanced section must appear immediately below the toggle with smooth transition animation.

**🔴 COMMAND:** Advanced settings container uses lighter background: `bg-grey-50 border border-gray-200 rounded-lg p-6`.

**🔴 COMMAND:** Advanced setting labels use `text-sm font-medium text-black` with helper text in `text-sm text-gray-500`.

**🟡 DIRECTIVE:** Group advanced settings by technical complexity or user persona (curious vs. cautious users).

```tsx
{
  /* Advanced section */
}
;<div className="border-grey-300 bg-grey-50 mt-4 overflow-hidden rounded-lg border-2 p-6">
  <div className="mb-4">
    <h4 className="text-sm font-semibold text-black">Advanced LLM Parameters</h4>
    <p className="mt-1 text-sm text-gray-500">Fine-tune model behavior for specific use cases</p>
  </div>

  <div className="space-y-4">
    <div>
      <label className="block text-sm font-medium text-black">Temperature</label>
      <p className="mt-1 text-sm text-gray-500">
        Controls randomness. Lower values make responses more focused and deterministic.
      </p>
      <input
        type="number"
        step="0.1"
        min="0"
        max="2"
        defaultValue="0.7"
        className="text-md mt-2 block w-full rounded-md border-2 px-4 py-2 text-sm font-semibold"
      />
    </div>

    <div>
      <label className="block text-sm font-medium text-black">Max Tokens</label>
      <p className="mt-1 text-sm text-gray-500">
        Maximum length of the response in tokens (roughly 4 characters per token)
      </p>
      <input
        type="number"
        defaultValue="1000"
        className="text-md mt-2 block w-full rounded-md border-2 px-4 py-2 text-sm font-semibold"
      />
    </div>
  </div>
</div>
```

---

#### Modified State Indicators

**🔴 COMMAND:** Advanced parameters modified from defaults must show indigo-600 dot indicator next to label.

**🔴 COMMAND:** Display "Reset to default" link button next to modified fields using `text-sm text-grey-600`.

**🟡 DIRECTIVE:** Show count of modified advanced settings in toggle button when collapsed.

```tsx
{
  /* Modified field indicator */
}
;<div>
  <div className="flex items-center gap-2">
    <label className="block text-sm font-medium text-black">Temperature</label>
    <div className="bg-primary-300 h-2 w-2 rounded-full" />
  </div>
  <div className="mt-1 flex items-center justify-between">
    <p className="text-sm text-gray-500">Controls response randomness</p>
    <button className="text-grey-600 text-sm font-medium hover:text-black">Reset to default</button>
  </div>
  <input
    type="number"
    value="1.2"
    className="text-md mt-2 block w-full rounded-md border-2 px-4 py-2 text-sm font-semibold"
  />
</div>

{
  /* Collapsed toggle with modification count */
}
;<button
  type="button"
  className="text-primary-600 hover:text-primary-700 inline-flex items-center gap-2 text-sm font-semibold"
>
  <ChevronRight className="h-4 w-4" />
  Show advanced settings
  <span className="text-primary-700 rounded-full bg-indigo-100 px-2 py-0.5 text-xs font-medium">
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
  <label className="block text-sm font-medium text-black">Top P (Nucleus Sampling)</label>
  <div className="mt-1 text-sm text-gray-500">
    <p>Controls diversity by limiting token selection to top probability mass.</p>
    <button
      className="text-primary-600 hover:text-primary-700 mt-1 text-sm font-semibold"
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
    className="text-md mt-2 block w-full rounded-md border-2 px-4 py-2 text-sm font-semibold"
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
    <label className="block text-sm font-medium text-black">Frequency Penalty</label>
    <button
      type="button"
      className="hover:text-grey-600 flex h-4 w-4 items-center justify-center rounded-full text-gray-400"
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
    className="text-md mt-2 block w-full rounded-md border-2 px-4 py-2 text-sm font-semibold"
  />
</div>
```

---

#### Categorized Advanced Settings

**🔴 COMMAND:** Group advanced settings into logical categories with clear subheadings.

**🔴 COMMAND:** Category headings use `text-sm font-semibold text-black` with divider lines between groups.

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
    <h4 className="mb-3 text-sm font-semibold text-black">Response Generation</h4>
    <div className="space-y-4">{/* Parameters */}</div>
  </div>

  <div className="border-t border-gray-200" />

  {/* Category 2 */}
  <div>
    <h4 className="mb-3 text-sm font-semibold text-black">Content Control</h4>
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
  <label className="block text-sm font-medium text-black">Configuration Preset</label>
  <p className="mt-1 text-sm text-gray-500">
    Choose a preset or customize individual parameters below
  </p>
  <select
    value={preset}
    onChange={(e) => applyPreset(e.target.value)}
    className="text-md mt-2 block w-full rounded-md border-2 px-4 py-2 text-sm font-semibold"
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
        <input type="checkbox" id="disable-safety" className="rounded-md" />
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
    className="text-primary-600 inline-flex items-center gap-2 text-sm font-semibold"
  >
    <ChevronRight className="h-4 w-4" />
    Show advanced settings
  </button>
  <kbd className="bg-grey-50 text-grey-600 rounded border border-gray-300 px-2 py-0.5 font-mono text-xs">
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
  className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600"
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

**🔴 COMMAND:** Term text color uses `text-black` (not link color) to distinguish from navigation links.

**🟡 DIRECTIVE:** Cursor changes to `cursor-help` on hover to signal additional information is available.

```tsx
{
  /* Glossary term inline */
}
;<p className="text-grey-600 text-sm">
  The agent uses{' '}
  <button
    type="button"
    className="cursor-help border-b-2 border-dotted border-gray-400 text-black hover:border-gray-600"
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

**🔴 COMMAND:** Tooltip container uses `bg-gray-900 text-white rounded-md px-3 py-2 text-sm` with max width of `max-w-xs`.

**🔴 COMMAND:** Position tooltip above term by default; adjust to below if insufficient space above.

**🟡 DIRECTIVE:** Include small arrow pointing to triggering term using pseudo-elements or SVG.

```tsx
{
  /* Tooltip overlay */
}
;<div
  role="tooltip"
  className="absolute z-50 max-w-xs rounded-md bg-gray-900 px-3 py-2 text-sm text-white shadow-lg"
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
  className="absolute z-50 max-w-xs rounded-md bg-gray-900 px-3 py-2 text-sm text-white shadow-lg"
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
;<span className="cursor-help border-b-2 border-dotted border-gray-400 text-black">
  temperature
</span>

{
  /* Information overlay - for contextual help */
}
;<div className="flex items-center gap-2">
  <label className="text-sm font-medium text-black">Response Delay</label>
  <button className="hover:text-grey-600 flex h-4 w-4 items-center justify-center text-gray-400">
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
  className="inline-block min-h-[44px] border-b-2 border-dotted border-gray-400 py-2 text-black"
  onClick={() => setActiveTooltip('temperature')}
>
  temperature
</button>

{
  /* Mobile tooltip with close button */
}
;<div className="fixed inset-x-4 bottom-4 z-50 rounded-lg bg-gray-900 p-4 text-sm text-white shadow-xl sm:hidden">
  <button
    className="absolute top-2 right-2 rounded-md p-1 hover:bg-gray-800"
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
  <h2 className="text-xl font-bold text-black">Glossary</h2>
  <p className="text-grey-600 mt-1 text-sm">
    Technical terms and concepts used in voice agent configuration
  </p>

  <div className="mt-6 space-y-4">
    <div>
      <button
        className="flex w-full items-center justify-between text-left"
        onClick={() => toggleTerm('temperature')}
      >
        <span className="text-sm font-semibold text-black">Temperature</span>
        <ChevronDown className="h-4 w-4 text-gray-500" />
      </button>
      {expandedTerm === 'temperature' && (
        <p className="text-grey-600 mt-2 text-sm">
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
  className="cursor-help border-b-2 border-dotted border-gray-400 text-black hover:border-gray-600 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500"
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
  className="border-b-2 border-dotted border-gray-400 text-black cursor-help"
>
  temperature
</button>

<div
  id="tooltip-temperature"
  role="tooltip"
  aria-live="polite"
  className="absolute z-50 max-w-xs rounded-md bg-gray-900 px-3 py-2 text-sm text-white"
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
        <h3 className="text-lg font-bold text-black">Delete Data API</h3>
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

**🔴 COMMAND:** Use `text-sm text-grey-600` for permission descriptions.

```tsx
<dl className="mt-4 space-y-2">
  <div className="flex items-start gap-2">
    <dt className="text-sm font-medium text-black">Permissions:</dt>
    <dd className="text-grey-600 text-sm">Read/Write access to user database</dd>
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
  <div className="bg-primary-300 absolute top-4 right-4 flex h-6 w-6 items-center justify-center rounded-full">
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
      className="block w-full rounded-md border py-2 pr-3 pl-10 text-sm"
    />
  </div>
  <select className="text-md block rounded-md border-2 px-4 py-2 text-sm font-semibold">
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
        Requires: <button className="text-primary-600 underline">Database Access</button>
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
  <span className="text-primary-600 -rotate-45 text-xs font-medium">User intent?</span>
</div>

{
  /* Action node */
}
;<div className="border-grey-300 rounded-lg border-2 bg-white px-4 py-3">
  <p className="text-sm font-medium text-black">Process request</p>
</div>

{
  /* End node */
}
;<div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-300">
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
  <span className="text-primary-600 absolute -top-2 left-1/2 -translate-x-1/2 rounded bg-white px-1.5 py-0.5 text-xs font-medium">
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
  <div className="bg-grey-100 max-w-[80%] rounded-lg px-4 py-2">
    <p className="text-sm text-black">Hello, I need help with my order.</p>
    <p className="mt-1 text-xs text-gray-500">10:23:45 AM</p>
  </div>
</div>

{
  /* Agent message */
}
;<div className="flex justify-end">
  <div className="max-w-[80%] rounded-lg bg-indigo-50 px-4 py-2">
    <p className="text-sm text-black">I'd be happy to help with your order.</p>
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
  <div className="bg-primary-300 flex h-8 w-8 shrink-0 items-center justify-center rounded-full">
    <span className="text-xs font-semibold text-white">AI</span>
  </div>
  <div className="max-w-[80%] rounded-lg bg-indigo-50 px-4 py-2">
    <p className="text-sm text-black">Message content</p>
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
    <span className="text-sm font-semibold text-black">Debug Information</span>
    <ChevronDown
      className={`h-4 w-4 text-gray-500 transition-transform ${debugOpen ? 'rotate-180' : ''}`}
    />
  </button>

  {debugOpen && (
    <div className="bg-grey-50 border-t px-4 py-3">
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
<div className="bg-grey-50 rounded border p-3">
  <p className="text-xs font-medium text-gray-500">Conversation Variables</p>
  <dl className="mt-2 space-y-1">
    <div className="flex gap-2">
      <dt className="text-sm font-medium text-gray-700">user_name:</dt>
      <dd className="text-grey-600 text-sm">John Doe</dd>
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
<button className="text-md inline-flex items-center gap-2 rounded-md border-2 px-4 py-2 text-sm font-semibold">
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
  <button className="bg-primary-300 rounded-md px-4 py-2 text-sm font-semibold text-white">
    Retry connection
  </button>
  <button className="rounded-md border border-gray-300 px-4 py-2 text-sm font-semibold">
    Check network settings
  </button>
</div>
```

---

#### Related Documentation Links

**🟡 DIRECTIVE:** Include links to relevant documentation for complex errors.

**🔴 COMMAND:** Links use `text-sm text-primary-600` with external link icon.

```tsx
<a
  href="/docs/troubleshooting/api-errors"
  className="text-primary-600 hover:text-primary-700 inline-flex items-center gap-1 text-sm font-semibold"
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
  className="text-grey-600 mt-2 text-sm font-semibold hover:text-black"
  onClick={() => setShowStack(!showStack)}
>
  {showStack ? 'Hide' : 'Show'} technical details
</button>

{
  showStack && (
    <pre className="bg-grey-50 mt-2 overflow-auto rounded border p-3 text-xs">{stackTrace}</pre>
  )
}
```

---

#### Inline Form Errors

**🔴 COMMAND:** Maximum 2 lines for inline form-based errors.

**🔴 COMMAND:** Use `text-sm text-red-600` for error message below field.

```tsx
<div>
  <label className="block text-sm font-medium text-black">API Key</label>
  <input
    className="mt-1 block w-full rounded-md border border-red-600 px-3 py-2 text-sm"
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
  className="text-md inline-flex items-center gap-2 rounded-md border-2 px-4 py-2 text-sm font-semibold"
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
    <p className="text-sm font-medium text-black">API endpoint configured</p>
    <p className="text-grey-600 mt-1 text-sm">Required for agent to function</p>
    <button className="text-primary-600 mt-2 text-sm font-semibold underline">Fix now</button>
  </div>
</div>

{
  /* Complete item */
}
;<div className="flex items-start gap-3">
  <Check className="h-5 w-5 shrink-0 text-green-600" />
  <div className="min-w-0 flex-1">
    <p className="text-sm font-medium text-black">Voice settings configured</p>
  </div>
</div>

{
  /* Incomplete item */
}
;<div className="flex items-start gap-3">
  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-gray-400" />
  <div className="min-w-0 flex-1">
    <p className="text-sm font-medium text-black">Test conversation completed</p>
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
    <p className="text-sm font-medium text-black">API endpoint configured</p>
  </div>
  <div className="ml-8 flex items-start gap-3">
    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-gray-400" />
    <p className="text-sm font-medium text-black">API endpoint tested</p>
    <span className="text-xs text-gray-500">(Requires: API endpoint configured)</span>
  </div>
</div>
```

---

#### One-Click Fix Actions

**🟡 DIRECTIVE:** Provide "Fix now" links that navigate directly to relevant configuration.

**🔴 COMMAND:** Fix links use `text-sm font-semibold text-primary-600 underline` styling.

```tsx
<button
  className="text-primary-600 hover:text-primary-700 text-sm font-semibold underline"
  onClick={() => navigateToFix('api-endpoint')}
>
  Fix now
</button>
```

---

#### Estimated Publish Time

**🟡 DIRECTIVE:** Display estimated time to publish when all checks pass.

**🔴 COMMAND:** Use `text-sm text-grey-600` for time estimate.

```tsx
<div className="bg-grey-50 mt-4 rounded-lg border p-4">
  <p className="text-grey-600 text-sm">
    Estimated publish time: <span className="font-medium text-black">2-3 minutes</span>
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
    <p className="text-sm font-medium text-black">Rollback plan confirmed</p>
    <p className="text-grey-600 mt-1 text-sm">
      Required for production deployments. Review rollback procedure in settings.
    </p>
  </div>
</div>
```

---

#### Completion Percentage Display

**🟡 DIRECTIVE:** Display completion percentage in header: "7/10 checks passed".

**🔴 COMMAND:** Use `text-sm text-grey-600` for completion status.

```tsx
<div className="mb-6 flex items-center justify-between">
  <h2 className="text-xl font-bold text-black">Publish Checklist</h2>
  <p className="text-grey-600 text-sm">
    <span className="font-semibold text-black">7</span> of{' '}
    <span className="font-semibold text-black">10</span> checks passed
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
  className={`rounded-md px-4 py-2 text-sm font-semibold text-white ${
    allChecksPassed
      ? 'bg-primary-300 hover:bg-primary-200'
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
      <input type="checkbox" className="rounded-md" />
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
    <input type="checkbox" className="rounded-md" />
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
;<div className="bg-grey-900/50 fixed inset-0 z-50 flex items-center justify-center p-4">
  <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
    <h2 className="text-lg font-semibold">Disable PII Redaction?</h2>
    <p className="text-grey-600 mt-2 text-sm">
      This will allow sensitive data to appear in transcripts. Please provide a justification.
    </p>
    <textarea
      className="text-md mt-4 block w-full rounded-md border-2 px-4 py-2 text-sm font-semibold"
      placeholder="Justification for disabling this safety rail..."
      rows={3}
    />
    <div className="mt-4 flex gap-3">
      <button className="flex-1 rounded-md border px-4 py-2 text-sm font-semibold">Cancel</button>
      <button className="flex-1 rounded-md bg-red-300 px-4 py-2 text-sm font-semibold text-white">
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
    <label className="block text-sm font-medium text-black">Allow Interruptions</label>
    <p className="mt-1 text-sm text-gray-500">
      Users can interrupt the agent while it's speaking. Disable for strict turn-taking.
    </p>
    <input type="checkbox" className="mt-2 rounded-md" />
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
    <label className="block text-sm font-medium text-black">Speech Rate</label>
    <span className="text-grey-600 text-sm">1.0x</span>
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
  <label className="block text-sm font-medium text-black">Silence Timeout</label>
  <p className="mt-1 text-sm text-gray-500">
    Time to wait (in milliseconds) before considering user finished speaking.
  </p>
  <input
    type="number"
    defaultValue="500"
    className="text-md mt-2 block w-full rounded-md border-2 px-4 py-2 text-sm font-semibold"
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
      <p className="text-sm font-medium text-black">Noise Cancellation</p>
      <p className="mt-1 text-sm text-gray-500">
        Reduces background noise but may affect speech recognition in quiet environments.
      </p>
    </div>
    <input type="checkbox" className="rounded-md" />
  </div>
</div>
```

---

#### Language/Accent Selection

**🔴 COMMAND:** Use dropdown for language selection with accent variants.

**🟡 DIRECTIVE:** Group languages by region with clear labels.

```tsx
<div>
  <label className="block text-sm font-medium text-black">Voice Language</label>
  <select className="text-md mt-1 block w-full rounded-md border-2 px-4 py-2 text-sm font-semibold">
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
  <h3 className="text-base font-semibold text-black">Call Success Rate</h3>
  <div className="mt-4">
    <div className="flex items-baseline gap-2">
      <span className="text-3xl font-bold text-black">94.2%</span>
      <span className="text-sm font-medium text-green-600">+2.1%</span>
    </div>
    <p className="text-grey-600 mt-2 text-sm">Last 30 days</p>
  </div>
</div>
```

---

#### Latency Visualization

**🟡 DIRECTIVE:** Display latency metrics as time-series chart or summary statistics.

**🔴 COMMAND:** Show average, median, and p95 latency values.

```tsx
<div className="rounded-lg border bg-white p-6">
  <h3 className="text-base font-semibold text-black">Response Latency</h3>
  <dl className="mt-4 grid grid-cols-3 gap-4">
    <div>
      <dt className="text-xs text-gray-500">Average</dt>
      <dd className="mt-1 text-lg font-semibold text-black">245ms</dd>
    </div>
    <div>
      <dt className="text-xs text-gray-500">Median</dt>
      <dd className="mt-1 text-lg font-semibold text-black">198ms</dd>
    </div>
    <div>
      <dt className="text-xs text-gray-500">P95</dt>
      <dd className="mt-1 text-lg font-semibold text-black">512ms</dd>
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
  <h3 className="text-base font-semibold text-black">Error Rate</h3>
  <div className="mt-4">
    <div className="flex items-baseline gap-2">
      <span className="text-3xl font-bold text-black">2.3%</span>
      <span className="text-sm font-medium text-red-600">-0.5%</span>
    </div>
    <div className="mt-4 space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-grey-600 text-sm">API Timeout</span>
        <span className="text-sm font-medium text-black">1.2%</span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-grey-600 text-sm">Invalid Response</span>
        <span className="text-sm font-medium text-black">0.8%</span>
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
  <h3 className="text-base font-semibold text-black">Costs</h3>
  <dl className="mt-4 space-y-3">
    <div className="flex items-center justify-between">
      <dt className="text-grey-600 text-sm">Total (Last 30 days)</dt>
      <dd className="text-sm font-semibold text-black">$1,234.56</dd>
    </div>
    <div className="flex items-center justify-between">
      <dt className="text-grey-600 text-sm">Average per conversation</dt>
      <dd className="text-sm font-semibold text-black">$0.12</dd>
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
  <h3 className="text-base font-semibold text-black">User Satisfaction</h3>
  <div className="mt-4">
    <div className="flex items-baseline gap-2">
      <span className="text-3xl font-bold text-black">4.2</span>
      <span className="text-grey-600 text-sm">/ 5.0</span>
    </div>
    <p className="text-grey-600 mt-2 text-sm">Based on 1,234 responses</p>
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
    <h3 className="text-base font-semibold text-black">Version 2.1</h3>
    <dl className="mt-4 space-y-2">
      <div>
        <dt className="text-sm font-medium text-gray-500">Voice Language</dt>
        <dd className="mt-1 text-sm text-black">English (US)</dd>
      </div>
    </dl>
  </div>
  <div>
    <h3 className="text-base font-semibold text-black">Version 2.2</h3>
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
    <span className="text-grey-600 text-sm">Average Latency</span>
    <div className="flex items-center gap-3">
      <span className="text-sm font-medium text-black">245ms</span>
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
  <h3 className="text-base font-semibold text-black">A/B Test Configuration</h3>
  <div className="mt-4 space-y-4">
    <div>
      <label className="block text-sm font-medium text-black">Traffic Split</label>
      <div className="mt-2 flex items-center gap-4">
        <div className="flex-1">
          <p className="text-grey-600 text-sm">Version A</p>
          <input type="range" min="0" max="100" defaultValue="50" className="mt-1 w-full" />
          <p className="mt-1 text-sm font-medium text-black">50%</p>
        </div>
        <div className="flex-1">
          <p className="text-grey-600 text-sm">Version B</p>
          <input type="range" min="0" max="100" defaultValue="50" className="mt-1 w-full" />
          <p className="mt-1 text-sm font-medium text-black">50%</p>
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
  <h3 className="text-base font-semibold text-black">Team Members</h3>
  <dl className="mt-4 divide-y">
    <div className="flex items-center justify-between py-3">
      <div>
        <dt className="text-sm font-medium text-black">john@example.com</dt>
        <dd className="text-grey-600 mt-1 text-sm">Owner</dd>
      </div>
      <span className="text-primary-700 rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-medium">
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
    <div className="bg-grey-100 flex h-8 w-8 shrink-0 items-center justify-center rounded-full">
      <User className="text-grey-600 h-4 w-4" />
    </div>
    <div className="min-w-0 flex-1">
      <p className="text-sm font-medium text-black">
        <span className="font-semibold">admin@example.com</span> updated Voice Settings
      </p>
      <p className="text-grey-600 mt-1 text-sm">
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
<div className="bg-grey-50 mt-4 rounded-lg border p-4">
  <div className="flex items-start gap-3">
    <div className="bg-primary-300 flex h-8 w-8 shrink-0 items-center justify-center rounded-full">
      <span className="text-xs font-semibold text-white">JD</span>
    </div>
    <div className="min-w-0 flex-1">
      <div className="flex items-center gap-2">
        <p className="text-sm font-semibold text-black">John Doe</p>
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
  <h3 className="text-base font-semibold text-black">Approval Status</h3>
  <div className="mt-4 space-y-3">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-black">admin@example.com</p>
        <p className="text-grey-600 mt-1 text-sm">Required for production deployment</p>
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
    <h3 className="text-lg font-semibold text-black dark:text-gray-100">Global Rules Console</h3>
  </div>
  <div className="border-grey-300 dark:border-grey-700 dark:bg-grey-900 overflow-hidden rounded-lg border-2 bg-white shadow-sm">
    <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4 dark:border-gray-700">
      <h4 className="text-base font-bold text-black dark:text-gray-100">
        Global Safety Policy v2.4
      </h4>
      <span className="rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900/40 dark:text-green-300">
        Active
      </span>
    </div>
    <dl className="divide-y divide-gray-200 px-6 py-4 dark:divide-gray-700">
      <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4">
        <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Last Modified</dt>
        <dd className="mt-1 text-sm text-black sm:col-span-2 sm:mt-0 dark:text-gray-100">
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
**🔴 COMMAND:** Apply `rounded-md` for fields and `rounded-lg` for card surfaces.

```tsx
<div className="mb-8">
  <div className="mb-4 flex items-baseline gap-2">
    <svg
      className="size-5 shrink-0 text-gray-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
      />
    </svg>
    <h3 className="text-lg font-semibold text-black dark:text-gray-100">Rule Builder</h3>
  </div>
  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
    <div className="border-grey-300 dark:border-grey-700 dark:bg-grey-900 overflow-hidden rounded-lg border-2 bg-white p-4">
      <div className="space-y-4">
        <h4 className="text-sm font-semibold text-black dark:text-gray-100">Tone</h4>
        <textarea
          rows={3}
          className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-black placeholder-gray-500 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-400"
          placeholder="Describe the desired tone…"
        />
        <select className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-black focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100">
          <option>Strict</option>
          <option>Suggestion</option>
        </select>
      </div>
    </div>

    <div className="border-grey-300 dark:border-grey-700 dark:bg-grey-900 overflow-hidden rounded-lg border-2 bg-white p-4">
      <div className="space-y-4">
        <h4 className="text-sm font-semibold text-black dark:text-gray-100">Tools</h4>
        <textarea
          rows={3}
          className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-black placeholder-gray-500 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-400"
          placeholder="Specify allowed tools…"
        />
        <select className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-black focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100">
          <option>Strict</option>
          <option>Suggestion</option>
        </select>
      </div>
    </div>

    <div className="border-grey-300 dark:border-grey-700 dark:bg-grey-900 overflow-hidden rounded-lg border-2 bg-white p-4">
      <div className="space-y-4">
        <h4 className="text-sm font-semibold text-black dark:text-gray-100">Data Access</h4>
        <textarea
          rows={3}
          className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-black placeholder-gray-500 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-400"
          placeholder="Define data access rules…"
        />
        <select className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-black focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100">
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
  <div className="mb-4 flex items-baseline gap-2">
    <svg
      className="size-5 shrink-0 text-gray-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
      />
    </svg>
    <h3 className="text-lg font-semibold text-black dark:text-gray-100">Rule Simulator</h3>
  </div>
  <div className="border-grey-300 dark:border-grey-700 dark:bg-grey-900 overflow-hidden rounded-lg border-2 bg-white shadow-sm">
    <div className="border-b border-gray-200 px-6 py-4 dark:border-gray-700">
      <h4 className="text-base font-bold text-black dark:text-gray-100">Reasoning Trace</h4>
    </div>
    <div className="space-y-4 px-6 py-4">
      <div className="bg-grey-50 rounded-md border-l-4 border-red-500 p-4 dark:bg-gray-800">
        <p className="font-mono text-sm text-black dark:text-gray-100">
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
        className="bg-primary-300 hover:bg-primary-200 dark:hover:bg-primary-300 inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-semibold text-white transition-colors focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500 dark:bg-indigo-500"
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
    <button className="rounded-md bg-amber-600 px-4 py-2 text-sm font-bold text-white">
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
