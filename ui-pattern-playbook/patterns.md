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
;<button className="text-md hover:bg-grey-100 focus:outline-primary-500 focus:outline-primary-600 active:bg-grey-200 inline-flex items-center gap-2 rounded-md border-2 px-4 py-2 font-semibold transition-colors focus:outline focus:outline-1 focus:outline-offset-2">
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
  <button className="text-md hover:bg-grey-100 focus:outline-primary-500 focus:outline-primary-600 active:bg-grey-200 rounded-md border-2 px-4 py-2 font-semibold transition-colors focus:outline focus:outline-1 focus:outline-offset-2">
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
- Ask for confirmation with explanation (EXPLAIN before ASK)
- **🔴 COMMAND:** Must provide UNDO action immediately after deletion

**High-impact deletion:**

- Very expensive or time-consuming to recreate
- Large amount of data deleted
- Require typed confirmation (manual verification)
- **🔴 COMMAND:** Must provide UNDO action immediately after deletion

```tsx
{
  /* Low-impact: immediate deletion */
}
;<button className="rounded-md p-1 text-red-600 hover:bg-red-50">
  <Trash2 className="h-5 w-5" aria-hidden="true" />
</button>

{
  /* Moderate-impact: confirmation dialog with EXPLAIN before ASK */
}
;<div className="border-grey-300 rounded-md border-2 bg-white p-4">
  <h3 className="font-semibold">Delete 3 items</h3>
  <p className="text-grey-600 text-sm">
    These items will be permanently removed from your account. This action cannot be undone.
  </p>
  <div className="mt-4 flex gap-2">
    <button className="text-md rounded-md border-2 px-4 py-2 font-semibold">Cancel</button>
    <button className="rounded-md bg-red-300 px-3 py-2 text-white">Delete 3 items</button>
  </div>
</div>

{
  /* After deletion: UNDO action prominently displayed */
}
;<div className="mt-4 rounded-md border-2 bg-emerald-50 p-4">
  <div className="flex items-center justify-between">
    <div>
      <p className="text-base font-semibold">3 items deleted</p>
      <small>You can restore these items within 30 days</small>
    </div>
    <button className="rounded-md border-2 bg-emerald-300 px-4 py-2 text-sm font-semibold text-black">
      Undo
    </button>
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

**🔴 COMMAND:** Show success notification with UNDO action prominently displayed.

**🔴 COMMAND:** UNDO action must be part of the initial confirmation flow - displayed immediately after deletion, not hidden in menus or settings.

**🔴 COMMAND:** If deletion fails, show error notification and animate data back.

**🔴 COMMAND:** Frame deletion messages with positive intent - guide users rather than warn them. Use EXPLAIN before ASK structure.

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
;<button className="text-md hover:bg-grey-100 focus:outline-primary-500 focus:outline-primary-600 active:bg-grey-200 inline-flex items-center gap-2 rounded-md border-2 px-4 py-2 font-semibold transition-colors focus:outline focus:outline-1 focus:outline-offset-2">
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

### 10.4 Error Translation

**🔴 COMMAND:** Complex technical errors must be translated into user-friendly language that explains the root problem and solution without overwhelming users with technical jargon.

**🔴 COMMAND:** Error translation follows the EXPLAIN before ASK principle - explain what happened and why, then guide users toward resolution.

**🔴 COMMAND:** Error messages must keep users in context - avoid losing them with technical details they cannot act upon.

**Key principles:**

1. **Translate technical to human** - Convert system errors, rule violations, and technical failures into clear, actionable language
2. **Focus on root cause** - Explain what actually went wrong, not just the error code or technical term
3. **Provide solution path** - Offer strongly suggested actions from the platform to solve the problem
4. **Offer quick retry** - When appropriate, provide quick-access retry actions for transient errors
5. **Preserve technical details** - Keep technical information available but secondary (collapsible or in trace sections)

---

#### 10.4.1 Complex Error Pattern

**Use when:** System errors, rule violations, or complex failures require explanation and resolution guidance.

**Structure:**

1. **Error container** - Visual indicator of the problem (alert container or error trace section)
2. **Translated message** - User-friendly explanation of what happened and why
3. **Technical details** - Collapsible or secondary section with technical information (optional)
4. **Primary action** - Strongly suggested action from platform to resolve the issue
5. **Quick retry** - Retry button group when appropriate

```tsx
{
  /* Complex error with error translation */
}
;<div className="overflow-hidden rounded-lg border-2 bg-white">
  {/* Section header */}
  <div className="border-b-2 px-6 py-4">
    <h3 className="text-base font-bold text-black">Reasoning Trace</h3>
  </div>

  <div className="space-y-4 px-6 py-4">
    {/* Error container - technical details preserved but secondary */}
    <div className="border-l-8 border-red-500 bg-red-100 p-4">
      <p className="font-mono text-sm">Rule: PII_REDACTION_STRICT</p>
      <small className="mt-1 font-mono">Triggered: Patient scheduling detected in response</small>
      <small className="mt-1 font-mono">Action: Response blocked</small>
    </div>

    {/* Action buttons */}
    <div className="flex gap-2">
      {/* Primary action - strongly suggested solution */}
      <button
        type="button"
        className="text-md bg-primary-300 hover:bg-primary-200 active:bg-primary-100 focus:outline-primary-500 focus:outline-primary-600 inline-flex items-center gap-2 rounded-md border-2 px-4 py-2 font-semibold text-black transition-colors focus:outline focus:outline-1 focus:outline-offset-2"
      >
        <ThumbsUp className="h-5 w-5 flex-shrink-0" />
        Generate fix suggestion
      </button>

      {/* Quick retry - when appropriate */}
      <div className="mr-0 ml-auto flex overflow-hidden rounded-md border-2">
        <button className="text-md active:bg-grey-200 hover:bg-grey-100 focus:outline-primary-600 min-w-32 rounded-md py-2 font-semibold transition-colors focus:outline focus:outline-1 focus:outline-offset-2">
          Retry
        </button>
        <button className="text-md active:bg-grey-200 hover:bg-grey-100 focus:outline-primary-600 border-l-2 px-2 py-2 font-semibold text-black transition-colors focus:outline focus:outline-1 focus:outline-offset-2">
          <ChevronDown className="h-5 w-5" />
        </button>
      </div>
    </div>
  </div>
</div>
```

**🔴 COMMAND:** Error container styling:

- Left border accent: `border-l-8 border-red-500` (for critical errors)
- Background: `bg-red-100` (subtle, not alarming)
- Padding: `p-4`
- Technical details: Use `font-mono text-sm` for code/technical text

**🔴 COMMAND:** Primary action button:

- Use primary button styling (`bg-primary-300`)
- Include descriptive icon (e.g., ThumbsUp for suggestions, Wrench for fixes)
- Label must describe the solution, not just "Fix" or "Resolve"

**🔴 COMMAND:** Quick retry group:

- Use secondary button styling
- Group retry button with dropdown/chevron button
- Only show when retry is appropriate (transient errors, network issues)

---

#### 10.4.2 Error Translation Guidelines

**🔴 COMMAND:** Translate technical errors into user-friendly language:

**✅ DO:**

- Explain what happened in plain language
- Focus on the impact to the user's workflow
- Provide actionable guidance
- Offer platform-suggested solutions
- Keep technical details available but secondary

**❌ DON'T:**

- Show raw error codes or technical jargon without translation
- Overwhelm users with technical details upfront
- Provide dead-end errors with no solution path
- Use vague messages ("Something went wrong")
- Lose users out of context with irrelevant technical information

**Translation Examples:**

```tsx
{
  /* Wrong: Technical jargon */
}
;<div className="bg-red-100 p-4">
  <p className="font-mono">Error 500: PII_REDACTION_STRICT violation</p>
  <p className="font-mono">NullPointerException at line 342</p>
</div>

{
  /* Correct: Translated to user-friendly */
}
;<div className="border-l-8 border-red-500 bg-red-100 p-4">
  <p className="text-sm font-semibold text-black">Response blocked due to privacy protection</p>
  <p className="mt-1 text-sm text-black">
    Your response contained patient information that needs to be protected. We can help you rewrite
    it safely.
  </p>
  {/* Technical details available but secondary */}
  <details className="mt-2">
    <summary className="text-grey-600 cursor-pointer text-xs">Technical details</summary>
    <div className="mt-2 font-mono text-xs">
      Rule: PII_REDACTION_STRICT | Triggered: Patient scheduling detected
    </div>
  </details>
</div>
```

---

#### 10.4.3 When to Show Technical Details

**🔴 COMMAND:** Technical details must be available but secondary:

**Show technical details when:**

- Users need to debug or troubleshoot
- Developers need error information
- Support teams need diagnostic information
- Users explicitly request technical information

**🔴 COMMAND:** Technical details should be:

- Collapsible (use `<details>` element or expandable section)
- Clearly labeled ("Technical details", "Error trace", "Debug information")
- Formatted with monospace font (`font-mono`)
- Secondary to the translated message

**🟡 DIRECTIVE:** For reasoning traces and complex error logs, use a dedicated "Reasoning Trace" or "Error Details" section that preserves technical information while keeping the primary message user-friendly.

---

#### 10.4.4 Solution Actions

**🔴 COMMAND:** Complex errors must include strongly suggested solution actions from the platform.

**Solution action types:**

1. **Generate fix suggestion** - Platform analyzes error and suggests a fix
2. **Review and adjust** - Guide user to review settings or configuration
3. **Contact support** - When user action cannot resolve the issue
4. **Retry** - For transient errors that may resolve on retry

**🔴 COMMAND:** Primary solution action must:

- Use primary button styling
- Include descriptive icon
- Clearly describe what the action will do
- Be prominently placed (left side for LTR layouts)

**🔴 COMMAND:** Retry actions must:

- Only appear when retry is appropriate (network errors, transient failures)
- Use secondary button styling
- Be grouped with additional options (dropdown) when multiple retry strategies exist

```tsx
{
  /* Solution actions layout */
}
;<div className="flex gap-2">
  {/* Primary solution - strongly suggested */}
  <button className="text-md bg-primary-300 hover:bg-primary-200 active:bg-primary-100 focus:outline-primary-600 inline-flex items-center gap-2 rounded-md border-2 px-4 py-2 font-semibold text-black transition-colors focus:outline focus:outline-1 focus:outline-offset-2">
    <ThumbsUp className="h-5 w-5 flex-shrink-0" />
    Generate fix suggestion
  </button>

  {/* Quick retry - when appropriate */}
  <div className="mr-0 ml-auto flex overflow-hidden rounded-md border-2">
    <button className="text-md active:bg-grey-200 hover:bg-grey-100 focus:outline-primary-600 min-w-32 rounded-md py-2 font-semibold transition-colors focus:outline focus:outline-1 focus:outline-offset-2">
      Retry
    </button>
    <button className="text-md active:bg-grey-200 hover:bg-grey-100 focus:outline-primary-600 border-l-2 px-2 py-2 font-semibold text-black transition-colors focus:outline focus:outline-1 focus:outline-offset-2">
      <ChevronDown className="h-5 w-5" />
    </button>
  </div>
</div>
```

---

#### 10.4.5 Error Translation Checklist

**Before showing an error to users, verify:**

- [ ] Technical error has been translated to user-friendly language
- [ ] Root cause is explained, not just the error code
- [ ] Solution path is provided (strongly suggested action)
- [ ] Technical details are available but secondary
- [ ] User remains in context (not lost with irrelevant details)
- [ ] Retry action is included when appropriate
- [ ] Message follows EXPLAIN before ASK principle
- [ ] Message uses GUIDING, supportive tone

---

---

### 10.5 Platform Input Assistance

**🔴 COMMAND:** The platform must proactively provide assistance to users when they are inputting content, especially in contexts involving generative AI, AI rule instructions, or AGENT handling.

**🔴 COMMAND:** Platform assistance should include:

1. **Recommendations** - Suggested content, patterns, or best practices
2. **Auto-complete** - Predictive text completion based on context
3. **Linting suggestions** - Real-time feedback on input quality, errors, or improvements

**🔴 COMMAND:** Assistance must be contextual, non-intrusive, and easily dismissible.

**🔴 COMMAND:** Visual indicators for assistance must use established patterns:

- **Chips** - For actionable recommendations or suggestions
- **Dotted underline** - For inline terminology, jargon, or expandable hints (see [Foundations: Indicating Interactivity](./foundations.md#533-indicating-interactivity))

---

#### 10.5.1 Recommendations

**Use when:** Platform can suggest content, patterns, or best practices based on context.

**🔴 COMMAND:** Recommendations must be:

- Contextually relevant to the current input
- Clearly actionable (user can accept with one click)
- Non-intrusive (don't block input)
- Easily dismissible

**Visual Pattern:** Use chips for recommendations

```tsx
{
  /* Recommendations as chips below input */
}
;<div className="space-y-2">
  <textarea
    className="border-grey-600 focus:outline-primary-500 focus:outline-primary-600 w-full rounded-md border-2 px-3 py-2 text-sm text-black focus:outline focus:outline-1 focus:outline-offset-2"
    placeholder="Enter AI instructions..."
  />

  {/* Recommendations */}
  <div className="flex flex-wrap gap-2">
    <span className="text-grey-600 text-xs">Suggestions:</span>
    <button
      type="button"
      onClick={() => insertRecommendation('Use clear, specific language')}
      className="hover:bg-primary-100 border-primary-200 bg-primary-50 text-primary-700 inline-flex items-center rounded-md border-2 px-2.5 py-1 text-xs font-medium transition-colors"
    >
      Use clear, specific language
    </button>
    <button
      type="button"
      onClick={() => insertRecommendation('Include examples')}
      className="hover:bg-primary-100 border-primary-200 bg-primary-50 text-primary-700 inline-flex items-center rounded-md border-2 px-2.5 py-1 text-xs font-medium transition-colors"
    >
      Include examples
    </button>
    <button
      type="button"
      onClick={() => insertRecommendation('Specify output format')}
      className="hover:bg-primary-100 border-primary-200 bg-primary-50 text-primary-700 inline-flex items-center rounded-md border-2 px-2.5 py-1 text-xs font-medium transition-colors"
    >
      Specify output format
    </button>
  </div>
</div>
```

**🔴 COMMAND:** Recommendation chip styling:

- Background: `bg-primary-50`
- Border: `border-2 border-primary-200`
- Text: `text-xs font-medium text-primary-700`
- Padding: `px-2.5 py-1`
- Hover: `hover:bg-primary-100`
- Rounded: `rounded-md`

**🟡 DIRECTIVE:** Show recommendations based on:

- Common patterns in similar contexts
- Best practices for the input type
- User's previous inputs (if available)
- Platform knowledge base

---

#### 10.5.2 Auto-complete

**Use when:** Platform can predict or complete user input based on context, patterns, or previous usage.

**🔴 COMMAND:** Auto-complete must:

- Appear inline or as a dropdown below the input
- Be clearly distinguishable from user input
- Allow users to accept or dismiss easily
- Not interfere with typing

**Visual Pattern:** Dropdown list or inline suggestions

```tsx
{
  /* Auto-complete dropdown */
}
;<div className="relative">
  <input
    type="text"
    className="border-grey-600 focus:outline-primary-500 focus:outline-primary-600 w-full rounded-md border-2 px-3 py-2 text-sm text-black focus:outline focus:outline-1 focus:outline-offset-2"
    placeholder="Enter rule name..."
  />

  {/* Auto-complete suggestions */}
  {showSuggestions && (
    <div className="absolute z-50 mt-1 w-full rounded-md border-2 bg-white shadow-lg">
      <div className="max-h-60 overflow-y-auto">
        {suggestions.map((suggestion) => (
          <button
            key={suggestion}
            type="button"
            onClick={() => selectSuggestion(suggestion)}
            className="hover:bg-grey-100 w-full px-3 py-2 text-left text-sm text-black transition-colors"
          >
            {suggestion}
          </button>
        ))}
      </div>
    </div>
  )}
</div>
```

**🔴 COMMAND:** Auto-complete dropdown styling:

- Position: `absolute` below input
- Background: `bg-white`
- Border: `border-2`
- Shadow: `shadow-lg`
- Max height: `max-h-60` with `overflow-y-auto`
- Item hover: `hover:bg-grey-100`

**🟡 DIRECTIVE:** Trigger auto-complete:

- After user stops typing (debounced)
- On focus (if context allows)
- Based on partial matches

---

#### 10.5.3 Linting Suggestions

**Use when:** Platform can provide real-time feedback on input quality, potential errors, or improvements.

**🔴 COMMAND:** Linting suggestions must:

- Appear in real-time or near real-time
- Be clearly marked as suggestions (not errors)
- Explain why the suggestion is being made
- Allow users to accept, dismiss, or ignore

**Visual Patterns:**

- **Inline hints** - Dotted underline for expandable suggestions
- **Below input** - Suggestions list with explanations
- **Chips** - Quick-fix suggestions

```tsx
{
  /* Linting suggestions with dotted underline hints */
}
;<div className="space-y-2">
  <div className="relative">
    <textarea
      className="border-grey-600 focus:outline-primary-500 focus:outline-primary-600 w-full rounded-md border-2 px-3 py-2 text-sm text-black focus:outline focus:outline-1 focus:outline-offset-2"
      placeholder="Enter AI instructions..."
    />

    {/* Inline hint with dotted underline */}
    <div className="mt-2 flex items-center gap-2">
      <button
        type="button"
        className="text-primary-600 hover:text-primary-700 border-b-2 border-dotted border-current text-xs font-semibold"
        onClick={() => showLintingDetails('vague-language')}
      >
        Consider being more specific
      </button>
      <span className="text-grey-500 text-xs">•</span>
      <button
        type="button"
        className="text-primary-600 hover:text-primary-700 border-b-2 border-dotted border-current text-xs font-semibold"
        onClick={() => showLintingDetails('missing-examples')}
      >
        Add examples for clarity
      </button>
    </div>
  </div>
</div>

{
  /* Linting suggestions as chips with quick fixes */
}
;<div className="space-y-2">
  <textarea
    className="border-grey-600 focus:outline-primary-500 focus:outline-primary-600 w-full rounded-md border-2 px-3 py-2 text-sm text-black focus:outline focus:outline-1 focus:outline-offset-2"
    placeholder="Enter AI instructions..."
  />

  {/* Linting suggestions */}
  <div className="flex flex-wrap gap-2">
    <span className="text-grey-600 text-xs">Suggestions:</span>
    <button
      type="button"
      onClick={() => applyLintingFix('add-examples')}
      className="inline-flex items-center gap-1 rounded-md border-2 border-amber-200 bg-amber-50 px-2.5 py-1 text-xs font-medium text-amber-700 transition-colors hover:bg-amber-100"
    >
      <span>Add examples</span>
      <span className="text-amber-600">→</span>
    </button>
    <button
      type="button"
      onClick={() => applyLintingFix('clarify-intent')}
      className="inline-flex items-center gap-1 rounded-md border-2 border-amber-200 bg-amber-50 px-2.5 py-1 text-xs font-medium text-amber-700 transition-colors hover:bg-amber-100"
    >
      <span>Clarify intent</span>
      <span className="text-amber-600">→</span>
    </button>
  </div>
</div>
```

**🔴 COMMAND:** Linting suggestion styling:

- **Dotted underline hints:** Use `border-b-2 border-dotted border-current` with `text-primary-600`
- **Chip suggestions:** Use `bg-amber-50 border-2 border-amber-200 text-amber-700` (warning/informational, not error)
- Include arrow or icon to indicate actionability

**🔴 COMMAND:** Linting suggestions must explain:

- What could be improved
- Why it matters (especially for AI/agent contexts)
- How to apply the fix

---

#### 10.5.4 Context-Specific Assistance

**🔴 COMMAND:** Platform assistance must be context-aware, especially for:

**Generative AI Inputs:**

- Suggest prompt patterns and best practices
- Recommend specific language for better AI understanding
- Provide examples of effective prompts
- Lint for clarity, specificity, and completeness

**AI Rule Instructions:**

- Auto-complete common rule patterns
- Suggest rule syntax and structure
- Validate rule logic in real-time
- Recommend rule combinations or alternatives

**AGENT Handling:**

- Suggest agent configuration patterns
- Auto-complete common agent parameters
- Lint for agent compatibility and best practices
- Recommend agent combinations or workflows

```tsx
{
  /* AI instruction input with comprehensive assistance */
}
;<div className="space-y-4">
  <div className="space-y-2">
    <label className="block text-sm font-semibold text-black">AI Instructions</label>
    <textarea
      className="border-grey-600 focus:outline-primary-500 focus:outline-primary-600 w-full rounded-md border-2 px-3 py-2 text-sm text-black focus:outline focus:outline-1 focus:outline-offset-2"
      placeholder="Describe what you want the AI to do..."
    />

    {/* Recommendations */}
    <div className="flex flex-wrap gap-2">
      <span className="text-grey-600 text-xs">Try:</span>
      <button
        type="button"
        onClick={() => insertRecommendation('Use specific examples')}
        className="hover:bg-primary-100 border-primary-200 bg-primary-50 text-primary-700 inline-flex items-center rounded-md border-2 px-2.5 py-1 text-xs font-medium transition-colors"
      >
        Use specific examples
      </button>
      <button
        type="button"
        onClick={() => insertRecommendation('Define output format')}
        className="hover:bg-primary-100 border-primary-200 bg-primary-50 text-primary-700 inline-flex items-center rounded-md border-2 px-2.5 py-1 text-xs font-medium transition-colors"
      >
        Define output format
      </button>
    </div>

    {/* Linting suggestions */}
    <div className="flex flex-wrap gap-2">
      <button
        type="button"
        className="text-primary-600 hover:text-primary-700 border-b-2 border-dotted border-current text-xs font-semibold"
        onClick={() => showDetails('vague-language')}
      >
        This instruction could be more specific
      </button>
    </div>
  </div>
</div>
```

---

#### 10.5.5 Assistance Best Practices

**🔴 COMMAND:** Platform assistance must:

**✅ DO:**

- Provide contextual, relevant suggestions
- Make assistance easily dismissible
- Use established visual patterns (chips, dotted underline)
- Explain why suggestions are being made
- Allow users to accept suggestions with minimal effort
- Respect user input (don't override without permission)

**❌ DON'T:**

- Overwhelm users with too many suggestions
- Block or interfere with user input
- Use assistance patterns for errors (use error patterns instead)
- Suggest without context
- Force users to interact with assistance

**🟡 DIRECTIVE:** Balance helpfulness with non-intrusiveness - assistance should feel supportive, not demanding.

---

#### 10.5.6 Accessibility for Assistance

**🔴 COMMAND:** Platform assistance must be accessible:

- Chips and suggestions must be keyboard accessible
- Dotted underline hints must be focusable and announceable
- Screen readers must announce assistance availability
- Users must be able to dismiss assistance via keyboard
- Focus management must not trap users in assistance UI

**🔴 COMMAND:** Use appropriate ARIA attributes:

- `role="button"` for actionable chips
- `aria-label` for icon-only assistance triggers
- `aria-describedby` for linking hints to inputs
- `aria-live="polite"` for dynamic assistance updates

---

## 11. Permission Restrictions

### 11.1 Overview

Permission restrictions occur when users lack the necessary access rights to perform actions or view content. These restrictions must be clearly communicated to help users understand why they cannot interact with certain elements and what they can do instead.

**🔴 COMMAND:** Disabled interactive elements due to permission restrictions are always non-interactive (disabled state).

**🔴 COMMAND:** Permission restrictions must be communicated through complementary informative elements, not through the disabled element itself.

**🔴 COMMAND:** Permission messages must follow the EXPLAIN before ASK principle - explain why access is restricted and guide users on next steps.

**🔴 COMMAND:** Always assume positive intent - frame permission messages in a GUIDING, supportive manner.

---

### 11.2 Permission Restriction Patterns

There are two primary patterns for communicating permission restrictions:

1. **Individual Element Restriction** - A single disabled element with a complementary informative sibling
2. **Global/Area Restriction** - A standalone alert container that restricts multiple elements or a global area

---

### 11.3 Individual Element Restriction

**Use when:** A single interactive element (button, input, checkbox, radio) is disabled due to permission restrictions.

**🔴 COMMAND:** The disabled element must remain visible but non-interactive.

**🔴 COMMAND:** A complementary informative element (info icon with tooltip) must be placed adjacent to the disabled element to explain the restriction.

**🔴 COMMAND:** Info icon must be interactive (button) to trigger tooltip on hover (desktop) or click/tap (mobile).

**Structure:**

- Disabled element (button, input, checkbox, radio)
- Adjacent info icon button (sibling element)
- Tooltip that appears on interaction with info icon

```tsx
{
  /* Individual disabled button with permission info */
}
;<div className="flex items-center gap-2">
  <button
    type="button"
    disabled
    className="text-md disabled:bg-grey-300 disabled:text-grey-500 disabled:border-grey-400 flex gap-2 rounded-md border-2 px-4 py-2 font-semibold transition-colors focus:outline-1 focus:outline-offset-2 disabled:cursor-not-allowed"
  >
    <Trash2 className="h-5 w-5 flex-shrink-0" />
    Delete
  </button>

  <div className="relative">
    <button
      type="button"
      className="hover:bg-grey-100 focus:outline-primary-500 focus:outline-primary-600 flex h-10 w-10 items-center justify-center rounded-md focus:outline focus:outline-1 focus:outline-offset-2"
      aria-label="Permission information"
      aria-describedby="delete-permission-tooltip"
    >
      <Info className="h-5 w-5 flex-shrink-0" />
    </button>

    {/* Tooltip - shown on hover/click */}
    <div
      id="delete-permission-tooltip"
      role="tooltip"
      className="bg-grey-900 absolute top-full left-0 z-50 mt-2 min-w-56 rounded-md px-3 py-2 text-center text-sm font-medium text-white shadow-lg"
    >
      No permission to delete
      <div className="border-b-grey-900 absolute bottom-full left-1/2 h-0 w-0 -translate-x-1/2 border-r-[6px] border-b-[6px] border-l-[6px] border-r-transparent border-l-transparent"></div>
    </div>
  </div>
</div>

{
  /* Individual disabled radio with permission info */
}
;<div className="flex items-center gap-2">
  <label className="flex min-h-10 cursor-pointer items-center gap-2">
    <input
      type="radio"
      disabled
      className="disabled:bg-grey-300 disabled:text-grey-500 disabled:border-grey-400 h-4 w-4 rounded-full disabled:cursor-not-allowed"
    />
    <span className="text-grey-700 text-sm">Option 3</span>
  </label>

  <div className="relative">
    <button
      type="button"
      className="hover:bg-grey-100 focus:outline-primary-500 focus:outline-primary-600 flex h-10 w-10 items-center justify-center rounded-md focus:outline focus:outline-1 focus:outline-offset-2"
      aria-label="Permission information"
      aria-describedby="select-permission-tooltip"
    >
      <Info className="h-5 w-5 flex-shrink-0" />
    </button>

    {/* Tooltip */}
    <div
      id="select-permission-tooltip"
      role="tooltip"
      className="bg-grey-900 absolute top-full left-0 z-50 mt-2 min-w-56 rounded-md px-3 py-2 text-center text-sm font-medium text-white shadow-lg"
    >
      No permission to select
      <div className="border-b-grey-900 absolute bottom-full left-1/2 h-0 w-0 -translate-x-1/2 border-r-[6px] border-b-[6px] border-l-[6px] border-r-transparent border-l-transparent"></div>
    </div>
  </div>
</div>
```

**🔴 COMMAND:** Tooltip must be accessible:

- Use `role="tooltip"`
- Link via `aria-describedby` on info button
- Include `aria-label` on info button describing its purpose
- Tooltip appears on hover (desktop) or click/tap (mobile)

**🔴 COMMAND:** Tooltip styling:

- Background: `bg-grey-900`
- Text: `text-white`
- Padding: `px-3 py-2`
- Text size: `text-sm`
- Rounded: `rounded-md`
- Shadow: `shadow-lg`
- Max width: `min-w-56` (224px)

**🟡 DIRECTIVE:** Position tooltip above info icon by default; adjust to below if insufficient space.

---

### 11.4 Global/Area Restriction

**Use when:** Multiple interactive elements or a global area of the page is restricted due to permissions.

**🔴 COMMAND:** Use a standalone alert container (semantic container) to communicate the restriction.

**🔴 COMMAND:** Alert container must follow the Alert Container pattern from [Guidelines: Status and Health](./guidelines.md#pattern-alert-container-semantic-containers).

**🔴 COMMAND:** Alert container must include:

1. **EXPLAIN:** Clear title explaining the restriction
2. **EXPLAIN:** Body text explaining why access is restricted and what users can do
3. **GUIDE:** Action button(s) for next steps (e.g., "Contact admin", "Request access", "Copy details")

**Structure:**

- Alert container with Info icon
- Title explaining restriction
- Body text with guidance
- Action buttons for next steps

```tsx
{
  /* Global permission restriction alert */
}
;<div className="bg-grey-300 mb-4 rounded-lg border-2 p-4 text-black">
  <div className="flex">
    <div className="flex-shrink-0">
      <Info className="h-6 w-6" />
    </div>
    <div className="ml-3">
      <h3 className="text-lg font-medium">No permission to edit</h3>
      <div className="text-md mt-2">
        <p>
          You don't have permission to edit this content. Contact your administrator to request
          access, or share these details with someone who can help.
        </p>
      </div>
      <div className="mt-6 mb-3">
        <div className="-mx-2 -my-1.5 flex">
          <button
            type="button"
            className="focus:outline-primary-600 hover:bg-grey-100 active:bg-grey-300 ml-3 flex gap-2 rounded-md border-2 px-2 py-1.5 text-sm font-semibold transition-colors focus:outline focus:outline-1 focus:outline-offset-2"
          >
            <Copy className="h-5 w-5 flex-shrink-0" />
            Copy details
          </button>
          <button
            type="button"
            className="focus:outline-primary-600 hover:bg-grey-100 active:bg-grey-300 ml-3 rounded-md border-2 px-2 py-1.5 text-sm font-semibold transition-colors focus:outline focus:outline-1 focus:outline-offset-2"
          >
            Contact admin
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
```

**🔴 COMMAND:** Alert container styling for permission restrictions:

- Background: `bg-grey-300` (neutral, informational)
- Border: `border-2`
- Border radius: `rounded-lg`
- Padding: `p-4`
- Text color: `text-black`

**🔴 COMMAND:** All interactive elements within the restricted area must be disabled, but the alert container itself provides the explanation.

**🟡 DIRECTIVE:** When multiple elements are restricted, show one alert container rather than individual info icons for each element.

---

### 11.5 Permission Message Guidelines

**🔴 COMMAND:** Permission messages must be clear and actionable:

**✅ DO:**

- Explain what permission is missing
- Explain why access is restricted
- Provide guidance on how to obtain access
- Offer alternative actions (copy details, contact admin)
- Use GUIDING, supportive tone

**❌ DON'T:**

- Use vague messages ("Access denied")
- Blame the user ("You don't have permission")
- Hide the disabled elements
- Use alarming or threatening language
- Provide no guidance on next steps

**Message Structure:**

1. **Title:** State the restriction clearly ("No permission to [action]")
2. **Body:** Explain why and provide guidance
3. **Actions:** Offer helpful next steps

```tsx
{/* Correct: GUIDING with guidance */}
<h3 className="text-lg font-medium">No permission to edit</h3>
<p>
  You don't have permission to edit this content. Contact your administrator to request access, or share these details with someone who can help.
</p>

{/* Wrong: Vague and unhelpful */}
<h3 className="text-lg font-medium">Access Denied</h3>
<p>You don't have permission.</p>
```

---

### 11.6 Accessibility Requirements

**🔴 COMMAND:** Permission restrictions must be accessible:

- Disabled elements must have `disabled` attribute
- Info icons must have `aria-label` describing their purpose
- Tooltips must have `role="tooltip"` and be linked via `aria-describedby`
- Alert containers must have proper heading hierarchy
- Screen readers must announce permission restrictions

**🔴 COMMAND:** Keyboard navigation:

- Disabled elements are not focusable (by default)
- Info icon buttons must be keyboard accessible
- Tooltips must appear on focus for info buttons
- Alert container actions must be keyboard accessible

---

### 11.7 When to Use Each Pattern

**Use Individual Element Restriction when:**

- Only one or a few elements are restricted
- Restriction is specific to that element
- Other elements on the page remain interactive

**Use Global/Area Restriction when:**

- Multiple elements are restricted
- An entire section or page area is restricted
- Restriction affects a workflow or process
- Users need comprehensive guidance on obtaining access

**🟡 DIRECTIVE:** When in doubt, use Global/Area Restriction for better user understanding and guidance.

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

**🔴 COMMAND:** Modal content must follow the EXPLAIN before ASK principle - provide context and explanation before requesting user action.

**🔴 COMMAND:** Always assume positive intent from the user - frame modal content in a GUIDING, supportive manner rather than demanding or warning.

**Structure:** `[Title] → [Explanation/Context] → [Action Request]`

```tsx
{
  /* Correct: EXPLAIN before ASK */
}
;<div className="max-w-md rounded-lg bg-white p-6 shadow-xl">
  <h2 className="text-xl font-bold">Publish article</h2>
  <p className="text-grey-600 mt-4 text-sm">
    Publishing makes your article visible to all subscribers immediately. You'll receive a
    notification when it's live.
  </p>
  <div className="mt-6 flex justify-end gap-2">
    <button>Cancel</button>
    <button>Publish now</button>
  </div>
</div>

{
  /* Wrong: ASK without EXPLAIN */
}
;<div className="max-w-md rounded-lg bg-white p-6 shadow-xl">
  <h2 className="text-xl font-bold">Publish article?</h2>
  <div className="mt-6 flex justify-end gap-2">
    <button>Cancel</button>
    <button>Confirm</button>
  </div>
</div>
```

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

1. **EXPLAIN:** State what will be deleted and why it matters
2. **EXPLAIN:** Explain consequences (data loss, affected users) in a GUIDING manner
3. **EXPLAIN:** Mention if action is permanent
4. **ASK:** Request confirmation with clear action buttons
5. **PROVIDE:** UNDO mechanism must be part of initial flow (displayed immediately after action)

**Action Rules:**

- Primary button: Destructive action (red/red)
- Secondary button: "Cancel" (border only)
- Button text: Use specific verb ("Delete account", not "Confirm")
- **🔴 COMMAND:** Show UNDO action immediately after deletion - prominently displayed, not hidden
- **🔴 COMMAND:** UNDO must be part of initial confirmation flow, available for reasonable time period

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

- ❌ Don't ask "Are you sure?" - be specific about what's being deleted (EXPLAIN before ASK)
- ❌ Don't use generic "Confirm" or "OK" - use "Delete [thing]"
- ❌ Don't omit consequences - tell user what they'll lose (EXPLAIN)
- ❌ Don't skip UNDO mechanism - UNDO must be prominently displayed immediately after action
- ❌ Don't assume negative intent - frame messages in GUIDING, supportive manner

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

**🔴 COMMAND:** Error Recovery modals must follow [Error Translation](./patterns.md#104-error-translation) principles - translate technical errors to user-friendly language.

**Title Formula:** `[Problem description]` (NOT "Error" or "Oops")

**Body Formula:**

1. **EXPLAIN:** Explain what happened (in plain language, translated from technical)
2. **EXPLAIN:** Explain why it happened (if known and helpful)
3. **ASK/GUIDE:** Tell user what to do next with strongly suggested action

**Action Rules:**

- Primary button: Recovery action (indigo/blue) - "Try again", "Contact support", "Generate fix suggestion"
- Secondary button: Alternative path (border) - "Go back", "Cancel"
- **🔴 COMMAND:** Always provide actionable next step
- **🔴 COMMAND:** For complex errors, offer platform-suggested solutions (see Error Translation)

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

- ❌ Don't use technical error messages ("Error 500", "NullPointerException") - translate to user-friendly language
- ❌ Don't blame the user ("You did something wrong")
- ❌ Don't provide dead-end errors with no action
- ❌ Don't use red for system errors (reserve for user mistakes)
- ❌ Don't lose users with technical jargon - keep them in context

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
      <div className="bg-primary-100 rounded-full p-2">
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
      <div className="bg-grey-50 border-grey-300 mt-3 space-y-2 rounded-md border-2 p-3">
        <p className="text-grey-500 text-xs font-semibold uppercase">This will allow us to:</p>
        <ul className="text-grey-700 space-y-1.5 text-sm">
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
      <div className="bg-grey-50 border-grey-300 mb-4 space-y-1 rounded-md border-2 p-3 text-sm">
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
      <div className="bg-primary-100 rounded-full p-2">
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
      <div className="bg-grey-50 border-grey-300 rounded-md border-2 p-3">
        <p className="text-grey-500 text-xs font-semibold uppercase">Example</p>
        <p className="text-grey-700 mt-1 text-sm">
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

- Primary button: Specific action verb (primary-600)
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

- Single primary button (primary-600)
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

**🔴 COMMAND:** Step controllers must follow the controller variants pattern (first, middle, last) as defined in [Guided Wizard: Step Controller Variants](./patterns.md#step-controller-variants).

**🔴 COMMAND:** First-level steps must not exceed 7 steps maximum.

**🔴 COMMAND:** Each step must have minimal anatomy: title, description, and optional yes-no choice.

**Title Formula:** `[Process name] (Step [N] of [Total])`

**Action Rules:**

- Primary button: "Next" (primary-600) or "Complete" on final step
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
Confirm/Cancel           primary-600              Primary        ✅
Destructive              red-600                Secondary      ❌
Error Recovery           primary-600              Primary        ✅ (if safe)
Permissions Request      primary-600              Primary        ✅
Tool Connection          primary-600              Primary        ✅
Preview Before Publish   primary-600              Primary        ✅
Unsaved Changes          primary-600              Primary        ✅
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
<button
  type="button"
  className="focus:outline-primary-500 hover:bg-primary-200 active:bg-primary-100 focus:outline-primary-600 w-full rounded-lg border-2 bg-white p-4 text-left transition-all focus:outline focus:outline-1 focus:outline-offset-2 sm:p-6"
>
  <h3 className="text-base font-semibold text-black">Card Title</h3>
  <small className="mt-1">Card description</small>
</button>
```

---

#### Badge Patterns for Template Classification

**🔴 COMMAND:** Use color-coded badges to indicate template status and characteristics.

**Badge Categories:**

| Badge Type | Color Scheme                                                              | Use Case                       |
| ---------- | ------------------------------------------------------------------------- | ------------------------------ |
| Popular    | `bg-indigo-50 text-indigo-700` (dark: `bg-indigo-900/40 text-indigo-300`) | High usage templates           |
| New        | `bg-green-50 text-green-700` (dark: `bg-green-900/40 text-green-300`)     | Recently added (< 30 days)     |
| Enterprise | `bg-purple-50 text-purple-700` (dark: `bg-purple-900/40 text-purple-300`) | Advanced features, higher tier |
| Beta       | `bg-amber-50 text-amber-700` (dark: `bg-amber-900/40 text-amber-300`)     | Experimental features          |
| Capability | `bg-grey-100 text-grey-700` (dark: `bg-grey-800 text-grey-300`)           | Technical capabilities         |

**🔴 COMMAND:** Status badges (Popular, New, Enterprise, Beta) must appear before capability badges.

**🔴 BOUNDARY:** Maximum 4 badges visible per card; use "+N more" indicator if exceeding limit.

```tsx
<span className="rounded-full bg-indigo-50 px-2.5 py-0.5 text-xs font-medium text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300">
  Popular
</span>
```

---

#### Hover and Selection States

**🔴 COMMAND:** Cards must show visual feedback on hover: border color changes to `primary-500` and shadow appears.

**🔴 COMMAND:** Selected cards display `border-primary-600 border-2` with a checkmark icon in the top-right corner.

**🟡 DIRECTIVE:** Use `transition-all` for smooth state changes between default, hover, and selected states.

```tsx
{
  /* Hover state */
}
;<div className="border-grey-300 rounded-lg border-2 bg-white p-6">{/* Content */}</div>

{
  /* Selected state */
}
;<div className="border-primary-600 relative rounded-lg border-2 bg-white p-6">
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

**🔴 COMMAND:** Empty state heading uses `text-md font-medium text-black`, description uses `<small>` element.

```tsx
<div className="flex min-h-[400px] items-center justify-center px-4 py-12">
  <div className="max-w-md text-center">
    <div className="bg-grey-100 mx-auto flex h-16 w-16 items-center justify-center rounded-full">
      <Search className="text-grey-400 h-8 w-8" />
    </div>
    <h3 className="text-md mt-4 font-medium text-black">No templates found</h3>
    <small className="mt-2">Try adjusting your filters or search terms.</small>
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
          <div className="bg-primary-50 flex h-12 w-12 items-center justify-center rounded-lg">
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

    <nav className="border-grey-700 flex gap-4 border-b-2 px-6" aria-label="Tabs">
      <button
        type="button"
        className="border-primary-600 text-primary-600 border-b-4 px-1 py-4 text-sm font-semibold"
      >
        Overview
      </button>
      <button
        type="button"
        className="text-grey-600 hover:text-grey-400 hover:text-grey-700 border-b-2 border-transparent px-1 py-4 text-sm font-medium"
      >
        Features
      </button>
    </nav>

    <div className="max-h-[500px] overflow-y-auto px-6 py-4">{/* Tab content */}</div>

    <div className="flex items-center justify-between border-t px-6 py-4">
      <button className="text-grey-700 text-sm font-semibold">View documentation</button>
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
      <Search className="text-grey-400 h-4 w-4" />
    </div>
    <input
      type="text"
      placeholder="Search templates…"
      className="focus:outline-primary-500 border-grey-600 placeholder-grey-400 placeholder-grey-500 focus:outline-primary-600 block w-full rounded-md border-2 py-2 pr-3 pl-10 text-sm text-black focus:outline focus:outline-1 focus:outline-offset-2"
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
  <small className="dark:text-grey-400">Showing 12 of 48 templates</small>
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
  <div className="border-grey-300 rounded-lg border-2 bg-white p-6">
    <div className="flex items-baseline gap-2">
      <h3 className="text-base font-semibold text-black">Inbound Support</h3>
    </div>
    <small className="mt-1">Handles FAQs and routing.</small>
  </div>
</div>
```

---

### 15.2 Guided Wizard (Progress + Safe Defaults)

**Use for:** Step-by-step agent configuration for complex voice setups that require sequential decision-making.

**🔴 COMMAND:** Use `gap-8` between vertical steps to maintain clear grouping.
**🔴 COMMAND:** Pre-fill all fields with "Safe Defaults" to allow immediate "Next" actions.

**🔴 COMMAND:** First-level steps must not exceed 7 steps maximum.

**🔴 COMMAND:** Sub-steps should aim for a maximum of 3 sub-steps per parent step.

**🔴 COMMAND:** Each step must have minimal anatomy:

1. **Title** - Clear, descriptive step name
2. **Description** - Explanation of what the step accomplishes
3. **Optional yes-no** - When applicable, provide binary choice for quick decisions

---

#### Step Controller Variants

**🔴 COMMAND:** Step controllers must adapt based on step position: first step, middle steps, or last step.

**First Step Variant:**

- Single primary action button: "Start" with forward arrow icon
- Right-aligned (`ml-auto mr-0`)
- No back button (no previous step)

**Middle Step Variant:**

- Two buttons: "Back" (secondary) and "Next" (primary)
- Back button: Left-aligned with backward arrow icon
- Next button: Right-aligned with forward arrow icon
- Layout: `justify-between` to space buttons apart

**Last Step Variant:**

- Single primary action button: "Done" or "Finish"
- Right-aligned (`ml-auto mr-0`)
- No next button (final step)

```tsx
{
  /* First step controller */
}
;<div className="mr-0 ml-auto flex gap-2">
  <button
    type="button"
    className="text-md focus:outline-primary-500 bg-primary-300 hover:bg-primary-200 active:bg-primary-100 focus:outline-primary-600 inline-flex min-w-32 items-center justify-center gap-2 rounded-md border-2 px-4 py-2 font-semibold text-black transition-colors focus:outline focus:outline-1 focus:outline-offset-2"
  >
    Start
    <ArrowRight className="h-5 w-5 flex-shrink-0" />
  </button>
</div>

{
  /* Middle step controller */
}
;<div className="flex justify-between gap-2">
  <button
    type="button"
    className="text-md active:bg-grey-200 hover:bg-grey-100 focus:outline-primary-500 focus:outline-primary-600 flex min-w-32 items-center justify-center gap-2 rounded-md border-2 px-4 py-2 font-semibold transition-colors focus:outline focus:outline-1 focus:outline-offset-2"
  >
    <ArrowLeft className="h-5 w-5 flex-shrink-0" />
    Back
  </button>
  <button
    type="button"
    className="text-md focus:outline-primary-500 bg-primary-300 hover:bg-primary-200 active:bg-primary-100 focus:outline-primary-600 inline-flex min-w-32 items-center justify-center gap-2 rounded-md border-2 px-4 py-2 font-semibold text-black transition-colors focus:outline focus:outline-1 focus:outline-offset-2"
  >
    Next
    <ArrowRight className="h-5 w-5 flex-shrink-0" />
  </button>
</div>

{
  /* Last step controller */
}
;<div className="mr-0 ml-auto flex gap-2">
  <button
    type="button"
    className="text-md focus:outline-primary-500 bg-primary-300 hover:bg-primary-200 active:bg-primary-100 focus:outline-primary-600 inline-flex min-w-32 items-center justify-center gap-2 rounded-md border-2 px-4 py-2 font-semibold text-black transition-colors focus:outline focus:outline-1 focus:outline-offset-2"
  >
    Done
  </button>
</div>
```

**🔴 COMMAND:** Controller button styling:

- Minimum width: `min-w-32` (128px) for consistent button sizes
- Primary buttons: `bg-primary-300` with hover/active states
- Secondary buttons: `hover:bg-grey-100` with border
- Icons: `h-5 w-5 flex-shrink-0` for consistent icon sizing
- Gap between icon and text: `gap-2` (8px)

**🔴 COMMAND:** Icon placement:

- Forward arrow (`ArrowRight`) appears on right side of "Start" and "Next" buttons
- Backward arrow (`ArrowLeft`) appears on left side of "Back" button
- "Done" button typically has no icon (final action)

---

#### Step Anatomy

**🔴 COMMAND:** Each step must have minimal anatomy:

1. **Title** - Clear, descriptive step name (`text-xl font-bold` or `text-lg font-semibold`)
2. **Description** - Explanation of what the step accomplishes (`text-base` or `text-sm text-grey-600`)
3. **Optional yes-no** - When applicable, provide binary choice for quick decisions (toggle, radio group, or checkbox)

**Step Structure:**

```tsx
{
  /* Step with minimal anatomy */
}
;<div className="space-y-4">
  {/* Title */}
  <h2 className="text-xl font-bold text-black">Configure Voice Settings</h2>

  {/* Description */}
  <p className="text-grey-600 text-base">
    Choose the voice characteristics and language for your agent. These settings affect how the
    agent sounds to users.
  </p>

  {/* Optional yes-no choice */}
  <div className="space-y-2">
    <label className="flex cursor-pointer items-center gap-2">
      <input
        type="radio"
        name="voice-type"
        value="professional"
        defaultChecked
        className="border-grey-400 text-primary-600 focus:ring-primary-500 h-4 w-4 rounded-full"
      />
      <span className="text-grey-700 text-sm">Use professional voice</span>
    </label>
    <label className="flex cursor-pointer items-center gap-2">
      <input
        type="radio"
        name="voice-type"
        value="casual"
        className="border-grey-400 text-primary-600 focus:ring-primary-500 h-4 w-4 rounded-full"
      />
      <span className="text-grey-700 text-sm">Use casual voice</span>
    </label>
  </div>
</div>
```

**🔴 COMMAND:** Title and description must follow EXPLAIN before ASK principle - explain what the step does before requesting input.

**🟡 DIRECTIVE:** Yes-no choices can be implemented as:

- Radio buttons for mutually exclusive options
- Toggle switches for on/off decisions
- Checkboxes for multiple selections

---

#### Step Indicator Pattern

**🔴 COMMAND:** Step indicators must show three states: completed (checkmark + green-600), current (number + primary-600), upcoming (number + gray-400).

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
      <ChevronRight className="text-grey-400 h-4 w-4" />
    </li>

    {/* Current step */}
    <li className="flex items-center gap-2">
      <div className="border-primary-600 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 bg-white">
        <span className="text-primary-600 text-sm font-semibold">2</span>
      </div>
      <span className="text-primary-600 text-sm font-semibold">Voice Settings</span>
      <ChevronRight className="text-grey-400 h-4 w-4" />
    </li>

    {/* Upcoming step */}
    <li className="flex items-center gap-2">
      <div className="border-grey-300 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 bg-white">
        <span className="text-grey-500 text-sm font-medium">3</span>
      </div>
      <span className="text-grey-500 text-sm font-medium">Review</span>
    </li>
  </ol>
</nav>
```

---

#### Progress Bar Implementation

**🔴 COMMAND:** Progress bar must reflect completion percentage based on step count.

**🔴 COMMAND:** Use `h-2 rounded-full` for progress bar container with `bg-grey-200` background.

**🔴 COMMAND:** Progress fill uses `bg-primary-300` with smooth transition animation.

```tsx
{
  /* Progress Bar */
}
;<div className="mb-8">
  <div className="mb-2 flex items-center justify-between">
    <span className="text-grey-700 text-sm font-medium">Step 2 of 4</span>
    <span className="text-grey-700 text-sm font-medium">50% complete</span>
  </div>
  <div className="bg-grey-200 h-2 overflow-hidden rounded-full">
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
;<div className="mb-6 rounded-lg border-2 bg-red-400 p-4 text-black">
  <div className="flex">
    <div className="flex-shrink-0">
      <AlertCircle className="h-6 w-6" />
    </div>
    <div className="ml-3">
      <h3 className="text-lg font-medium">Please fix the following errors:</h3>
      <ul className="mt-2 space-y-1 text-sm">
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
    className="focus:outline-primary-500 placeholder-grey-400 placeholder-grey-500 focus:outline-primary-600 mt-1 block w-full rounded-md border-2 border-red-600 bg-white px-3 py-2 text-sm text-black focus:outline focus:outline-1 focus:outline-offset-2"
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
    className="hover:bg-grey-50 text-grey-700 order-2 rounded-md px-4 py-2 text-sm font-semibold sm:order-1"
  >
    Cancel
  </button>

  <div className="order-1 flex gap-3 sm:order-2">
    <button
      type="button"
      className="focus:outline-primary-500 border-grey-600 placeholder-grey-400 placeholder-grey-500 focus:outline-primary-600 flex-1 rounded-md border-2 px-4 py-2 text-sm font-semibold text-black focus:outline focus:outline-1 focus:outline-offset-2 sm:flex-initial"
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
  <div className="bg-grey-200 mt-2 h-1 overflow-hidden rounded-full">
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
        <dt className="text-grey-500 text-sm font-medium">Agent Name</dt>
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

**🔴 COMMAND:** Advanced settings container uses lighter background: `bg-grey-50 border border-grey-200 rounded-lg p-6`.

**🔴 COMMAND:** Advanced setting labels use `text-sm font-medium text-black` with helper text in `text-sm text-grey-500`.

**🟡 DIRECTIVE:** Group advanced settings by technical complexity or user persona (curious vs. cautious users).

```tsx
{
  /* Advanced section */
}
;<div className="border-grey-300 bg-grey-50 mt-4 overflow-hidden rounded-lg border-2 p-6">
  <div className="mb-4">
    <h4 className="text-sm font-semibold text-black">Advanced LLM Parameters</h4>
    <p className="text-grey-500 mt-1 text-sm">Fine-tune model behavior for specific use cases</p>
  </div>

  <div className="space-y-4">
    <div>
      <label className="block text-sm font-medium text-black">Temperature</label>
      <p className="text-grey-500 mt-1 text-sm">
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
      <p className="text-grey-500 mt-1 text-sm">
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

**🔴 COMMAND:** Advanced parameters modified from defaults must show primary-600 dot indicator next to label.

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
    <p className="text-grey-500 text-sm">Controls response randomness</p>
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
  <span className="text-primary-700 bg-primary-100 rounded-full px-2 py-0.5 text-xs font-medium">
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
  <div className="text-grey-500 mt-1 text-sm">
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
      className="hover:text-grey-600 text-grey-400 flex h-4 w-4 items-center justify-center rounded-full"
      aria-label="More information about frequency penalty"
    >
      <Info className="h-4 w-4" />
    </button>
  </div>
  <p className="text-grey-500 mt-1 text-sm">Reduces likelihood of repeating the same phrases</p>
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

  <div className="border-grey-200 border-t" />

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
  <p className="text-grey-500 mt-1 text-sm">
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
;<div className="rounded-lg border-2 bg-amber-400 p-4 text-black">
  <div className="flex">
    <div className="flex-shrink-0">
      <AlertTriangle className="h-6 w-6" />
    </div>
    <div className="ml-3">
      <h3 className="text-lg font-medium">Disable Safety Filters</h3>
      <div className="mt-2 text-sm">
        <p>
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
  <kbd className="bg-grey-50 text-grey-600 border-grey-300 rounded border px-2 py-0.5 font-mono text-xs">
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

**🔴 COMMAND:** Terminology overlays and inline jargon must use dotted underline pattern as defined in [Foundations: Indicating Interactivity](./foundations.md#533-indicating-interactivity).

---

#### Visual Treatment of Terms

**🔴 COMMAND:** Glossary terms must use dotted underline with `border-b-2 border-dotted border-grey-400` styling.

**🟡 DIRECTIVE:** For terminology overlays that reveal context on hover or interaction, you may use `border-current` to inherit text color for better visual integration (see Foundations guidance).

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
    className="border-grey-400 hover:border-grey-600 cursor-help border-b-2 border-dotted text-black"
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

**🔴 COMMAND:** Tooltip container uses `bg-grey-900 text-white rounded-md px-3 py-2 text-sm` with max width of `max-w-xs`.

**🔴 COMMAND:** Position tooltip above term by default; adjust to below if insufficient space above.

**🟡 DIRECTIVE:** Include small arrow pointing to triggering term using pseudo-elements or SVG.

```tsx
{
  /* Tooltip overlay */
}
;<div
  role="tooltip"
  className="bg-grey-900 absolute z-50 max-w-xs rounded-md px-3 py-2 text-sm text-white"
>
  <p>
    Controls randomness in responses. Lower values produce more focused output; higher values
    increase creativity.
  </p>
  {/* Arrow */}
  <div className="bg-grey-900 absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45" />
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
  className="bg-grey-900 absolute z-50 max-w-xs rounded-md px-3 py-2 text-sm text-white"
>
  <p>
    Reduces likelihood of repeating tokens that have already appeared. Range: -2.0 to 2.0. Higher
    values penalize repetition more strongly.
  </p>
  <a
    href="https://docs.example.com/frequency-penalty"
    target="_blank"
    rel="noopener noreferrer"
    className="text-primary-300 hover:text-primary-200 mt-2 inline-flex items-center gap-1"
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
;<span className="border-grey-400 cursor-help border-b-2 border-dotted text-black">
  temperature
</span>

{
  /* Information overlay - for contextual help */
}
;<div className="flex items-center gap-2">
  <label className="text-sm font-medium text-black">Response Delay</label>
  <button className="hover:text-grey-600 text-grey-400 flex h-4 w-4 items-center justify-center">
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
  className="border-grey-400 inline-block min-h-[44px] border-b-2 border-dotted py-2 text-black"
  onClick={() => setActiveTooltip('temperature')}
>
  temperature
</button>

{
  /* Mobile tooltip with close button */
}
;<div className="bg-grey-900 fixed inset-x-4 bottom-4 z-50 rounded-lg p-4 text-sm text-white shadow-xl sm:hidden">
  <button
    className="hover:bg-grey-800 absolute top-2 right-2 rounded-md p-1"
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
        <ChevronDown className="text-grey-500 h-4 w-4" />
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
  className="border-grey-400 hover:border-grey-600 focus:outline-primary-500 cursor-help border-b-2 border-dotted text-black focus:outline focus:outline-2 focus:outline-offset-2"
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
  className="border-b-2 border-dotted border-grey-400 text-black cursor-help"
>
  temperature
</button>

<div
  id="tooltip-temperature"
  role="tooltip"
  aria-live="polite"
  className="absolute z-50 max-w-xs rounded-md bg-grey-900 px-3 py-2 text-sm text-white"
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
        <h3 className="text-base font-semibold text-black">Delete Data API</h3>
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

**🔴 COMMAND:** Use `text-sm text-grey-500` for cost information.

```tsx
<div className="mt-4 border-t pt-4">
  <p className="text-grey-500 text-sm">Estimated cost: ~$2.50 per 1k calls</p>
</div>
```

---

#### Multi-Select Behavior

**🔴 COMMAND:** Selected tools must show checkmark icon in top-right corner.

**🔴 COMMAND:** Use `border-primary-600 border-2` for selected state.

```tsx
{
  /* Selected tool card */
}
;<div className="border-primary-600 relative rounded-lg border-2 bg-white p-6">
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
      <Search className="text-grey-400 h-4 w-4" />
    </div>
    <input
      type="text"
      placeholder="Search tools…"
      className="focus:outline-primary-500 border-grey-600 placeholder-grey-400 placeholder-grey-500 focus:outline-primary-600 block w-full rounded-md border-2 py-2 pr-3 pl-10 text-sm text-black focus:outline focus:outline-1 focus:outline-offset-2"
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
;<div className="rounded-lg border-2 bg-amber-400 p-4 text-black">
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
| Decision  | Diamond shape with primary-600 border  | Conditional branching |
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
;<div className="border-primary-600 flex h-16 w-16 rotate-45 items-center justify-center border-2 bg-white">
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

**🔴 COMMAND:** Primary path uses solid primary-500 connections.

**🔴 COMMAND:** Fallback paths use dashed amber-500 connections.

**🔴 COMMAND:** Error paths use dashed red-500 connections.

**🟡 DIRECTIVE:** Display decision conditions on connection lines as `text-xs` badges.

```tsx
{
  /* Primary path connection */
}
;<svg className="text-primary-500">
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
  <svg className="text-primary-500">
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
<div className="rounded-lg border-2 bg-amber-400 p-4 text-black">
  <div className="flex">
    <div className="flex-shrink-0">
      <AlertTriangle className="h-6 w-6" />
    </div>
    <div className="ml-3">
      <h3 className="text-lg font-medium">Potential infinite loop detected</h3>
      <div className="mt-2 text-sm">
        <p>
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
;<div className="rounded-lg border-2 bg-red-400 px-4 py-3 text-black">
  <div className="flex">
    <div className="flex-shrink-0">
      <AlertCircle className="h-6 w-6" />
    </div>
    <div className="ml-3">
      <p className="text-sm font-medium">No connection to end node</p>
    </div>
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

**🔴 COMMAND:** Agent messages align right with primary-50 background.

**🔴 COMMAND:** Timestamps use `text-xs text-grey-500` below each message.

```tsx
{
  /* User message */
}
;<div className="flex justify-start">
  <div className="bg-grey-100 max-w-[80%] rounded-lg px-4 py-2">
    <p className="text-sm text-black">Hello, I need help with my order.</p>
    <p className="text-grey-500 mt-1 text-xs">10:23:45 AM</p>
  </div>
</div>

{
  /* Agent message */
}
;<div className="flex justify-end">
  <div className="bg-primary-50 max-w-[80%] rounded-lg px-4 py-2">
    <p className="text-sm text-black">I'd be happy to help with your order.</p>
    <p className="text-grey-500 mt-1 text-xs">10:23:47 AM</p>
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
  <div className="bg-primary-50 max-w-[80%] rounded-lg px-4 py-2">
    <p className="text-sm text-black">Message content</p>
  </div>
</div>
```

---

#### Timestamp Display

**🔴 COMMAND:** Timestamps use `text-xs text-grey-500` below each message.

**🟡 DIRECTIVE:** Show relative time (e.g., "2s ago") for recent messages, absolute time for older messages.

```tsx
;<p className="text-grey-500 mt-1 text-xs">10:23:45 AM</p>
{
  /* Or relative */
}
;<p className="text-grey-500 mt-1 text-xs">2 seconds ago</p>
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
      className={`text-grey-500 h-4 w-4 transition-transform ${debugOpen ? 'rotate-180' : ''}`}
    />
  </button>

  {debugOpen && (
    <div className="bg-grey-50 border-t px-4 py-3">
      <div className="space-y-2">
        <div>
          <p className="text-grey-500 text-xs font-medium">Variables</p>
          <pre className="text-grey-700 mt-1 text-sm">{JSON.stringify(variables, null, 2)}</pre>
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
  <p className="text-grey-500 text-xs font-medium">Conversation Variables</p>
  <dl className="mt-2 space-y-1">
    <div className="flex gap-2">
      <dt className="text-grey-700 text-sm font-medium">user_name:</dt>
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
  <div className="max-w-[80%] rounded-lg border-2 bg-red-400 px-4 py-2 text-black">
    <div className="flex">
      <div className="flex-shrink-0">
        <AlertCircle className="h-6 w-6" />
      </div>
      <div className="ml-3">
      <div>
        <p className="text-sm font-medium text-red-900">Error processing request</p>
        <p className="mt-1 text-xs text-red-700">API timeout after 5 seconds</p>
      </div>
    </div>
    <p className="mt-1 text-xs text-grey-500">10:23:50 AM</p>
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

**🔴 COMMAND:** Info alerts use `bg-indigo-400 border-2 text-black` following the Alert Container pattern.

```tsx
{
  /* Critical error */
}
;<div className="rounded-lg border-2 bg-red-400 p-4 text-black">
  <div className="flex">
    <div className="flex-shrink-0">
      <AlertCircle className="h-6 w-6" />
    </div>
    <div className="ml-3">
      <h3 className="text-lg font-medium">Unable to connect to API</h3>
      <div className="mt-2 text-sm">
        <p>
        The service is temporarily unavailable. Please try again in a few minutes.
      </p>
    </div>
  </div>
</div>

{
  /* Warning error */
}
;<div className="rounded-lg border-2 bg-amber-400 p-4 text-black">
  <div className="flex">
    <div className="flex-shrink-0">
      <AlertTriangle className="h-6 w-6" />
    </div>
    <div className="ml-3">
      <h3 className="text-lg font-medium">Rate limit approaching</h3>
      <div className="mt-2 text-sm">
        <p>
        You've used 90% of your API quota. Consider upgrading your plan.
      </p>
    </div>
  </div>
</div>

{
  /* Info error */
}
;<div className="rounded-lg border-2 bg-indigo-400 p-4 text-black">
  <div className="flex">
    <div className="flex-shrink-0">
      <Info className="h-6 w-6" />
    </div>
    <div className="ml-3">
      <h3 className="text-lg font-medium">Configuration updated</h3>
      <div className="mt-2 text-sm">
        <p>
          Your changes have been saved. The agent will use new settings on next call.
        </p>
      </div>
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

**🔴 COMMAND:** Action buttons use primary styling (primary-600) and descriptive labels.

```tsx
<div className="mt-4 flex gap-3">
  <button className="bg-primary-300 rounded-md px-4 py-2 text-sm font-semibold text-white">
    Retry connection
  </button>
  <button
    type="button"
    className="focus:outline-primary-600 border-grey-300 hover:bg-grey-100 rounded-md border-2 px-4 py-2 text-sm font-semibold transition-colors focus:outline focus:outline-1 focus:outline-offset-2"
  >
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
  <span className="text-grey-500 text-xs">This error occurred</span>
  <span className="rounded-full bg-red-100 px-2 py-0.5 text-xs font-medium text-red-700">
    3 times
  </span>
  <span className="text-grey-500 text-xs">in the last hour</span>
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
  <div className="border-grey-400 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2" />
  <div className="min-w-0 flex-1">
    <p className="text-sm font-medium text-black">Test conversation completed</p>
  </div>
</div>

{
  /* Optional item */
}
;<div className="flex items-start gap-3">
  <div className="border-grey-300 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2" />
  <div className="min-w-0 flex-1">
    <p className="text-grey-500 text-sm font-medium italic">Custom branding applied</p>
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
    <div className="border-grey-400 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2" />
    <p className="text-sm font-medium text-black">API endpoint tested</p>
    <span className="text-grey-500 text-xs">(Requires: API endpoint configured)</span>
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
  <div className="border-grey-400 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2" />
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
      : 'bg-grey-400 cursor-not-allowed opacity-50'
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

**🔴 COMMAND:** Safety toggles must show impact description with `text-sm text-grey-500`.

**🔴 COMMAND:** Disabling safety rails requires confirmation dialog with written justification.

```tsx
<div className="rounded-lg border bg-white">
  <div className="border-b px-4 py-3">
    <h3 className="text-base font-semibold">Safety Rails</h3>
  </div>
  <div className="space-y-4 p-4">
    <div className="flex items-center justify-between">
      <div className="space-y-1">
        <p className="text-sm font-medium">Redact PII</p>
        <p className="text-grey-500 text-sm">
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
      <p className="text-grey-500 mt-1 text-sm">
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

**🔴 COMMAND:** Use `text-xs text-grey-500` for audit information.

```tsx
<div className="mt-2">
  <p className="text-grey-500 text-xs">
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
;<p className="text-grey-500 text-sm">
  The system masks credit card numbers and SSNs in all conversation transcripts.
</p>

{
  /* Avoid: Passive voice */
}
;<p className="text-grey-500 text-sm">
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
    <p className="text-grey-500 mt-1 text-sm">
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
  <div className="text-grey-500 mt-1 flex justify-between text-xs">
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
  <p className="text-grey-500 mt-1 text-sm">
    Time to wait (in milliseconds) before considering user finished speaking.
  </p>
  <input
    type="number"
    defaultValue="500"
    className="text-md mt-2 block w-full rounded-md border-2 px-4 py-2 text-sm font-semibold"
  />
  <p className="text-grey-500 mt-1 text-xs">Range: 200ms - 2000ms</p>
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
      <p className="text-grey-500 mt-1 text-sm">
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
      <dt className="text-grey-500 text-xs">Average</dt>
      <dd className="mt-1 text-lg font-semibold text-black">245ms</dd>
    </div>
    <div>
      <dt className="text-grey-500 text-xs">Median</dt>
      <dd className="mt-1 text-lg font-semibold text-black">198ms</dd>
    </div>
    <div>
      <dt className="text-grey-500 text-xs">P95</dt>
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
        <dt className="text-grey-500 text-sm font-medium">Voice Language</dt>
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
<div className="rounded-lg border-2 bg-amber-400 p-4 text-black">
  <div className="flex">
    <div className="flex-shrink-0">
      <AlertTriangle className="h-6 w-6" />
    </div>
    <div className="ml-3">
      <h3 className="text-lg font-medium">Performance Degradation Detected</h3>
      <div className="mt-2 text-sm">
        <p>Current version shows 15% increase in error rate compared to previous version.</p>
      </div>
      <button className="mt-3 text-sm font-semibold underline">Review rollback options</button>
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
      <span className="text-primary-700 bg-primary-100 rounded-full px-2.5 py-0.5 text-xs font-medium">
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
      <p className="text-grey-500 mt-1 text-xs">2 hours ago</p>
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
        <p className="text-grey-500 text-xs">2 hours ago</p>
      </div>
      <p className="text-grey-700 mt-1 text-sm">
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
    <ShieldCheck className="text-grey-400 size-5" aria-hidden="true" />
    <h3 className="dark:text-grey-100 text-lg font-semibold text-black">Global Rules Console</h3>
  </div>
  <div className="border-grey-300 dark:border-grey-700 dark:bg-grey-900 overflow-hidden rounded-lg border-2 bg-white">
    <div className="border-grey-200 dark:border-grey-700 flex items-center justify-between border-b px-6 py-4">
      <h4 className="dark:text-grey-100 text-base font-bold text-black">
        Global Safety Policy v2.4
      </h4>
      <span className="rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900/40 dark:text-green-300">
        Active
      </span>
    </div>
    <dl className="divide-y divide-gray-200 px-6 py-4 dark:divide-gray-700">
      <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4">
        <dt className="text-grey-500 dark:text-grey-400 text-sm font-medium">Last Modified</dt>
        <dd className="dark:text-grey-100 mt-1 text-sm text-black sm:col-span-2 sm:mt-0">
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
      className="text-grey-400 size-5 shrink-0"
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
    <h3 className="dark:text-grey-100 text-lg font-semibold text-black">Rule Builder</h3>
  </div>
  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
    <div className="border-grey-300 dark:border-grey-700 dark:bg-grey-900 overflow-hidden rounded-lg border-2 bg-white p-4">
      <div className="space-y-4">
        <h4 className="dark:text-grey-100 text-sm font-semibold text-black">Tone</h4>
        <textarea
          rows={3}
          className="border-grey-300 focus:outline-primary-500 dark:border-grey-600 dark:bg-grey-800 dark:text-grey-100 block w-full rounded-md border bg-white px-3 py-2 text-sm text-black placeholder-gray-500 focus:outline focus:outline-2 focus:outline-offset-2 dark:placeholder-gray-400"
          placeholder="Describe the desired tone…"
        />
        <select className="border-grey-300 focus:outline-primary-500 dark:border-grey-600 dark:bg-grey-800 dark:text-grey-100 block w-full rounded-md border bg-white px-3 py-2 text-sm text-black focus:outline focus:outline-2 focus:outline-offset-2">
          <option>Strict</option>
          <option>Suggestion</option>
        </select>
      </div>
    </div>

    <div className="border-grey-300 dark:border-grey-700 dark:bg-grey-900 overflow-hidden rounded-lg border-2 bg-white p-4">
      <div className="space-y-4">
        <h4 className="dark:text-grey-100 text-sm font-semibold text-black">Tools</h4>
        <textarea
          rows={3}
          className="border-grey-300 focus:outline-primary-500 dark:border-grey-600 dark:bg-grey-800 dark:text-grey-100 block w-full rounded-md border bg-white px-3 py-2 text-sm text-black placeholder-gray-500 focus:outline focus:outline-2 focus:outline-offset-2 dark:placeholder-gray-400"
          placeholder="Specify allowed tools…"
        />
        <select className="border-grey-300 focus:outline-primary-500 dark:border-grey-600 dark:bg-grey-800 dark:text-grey-100 block w-full rounded-md border bg-white px-3 py-2 text-sm text-black focus:outline focus:outline-2 focus:outline-offset-2">
          <option>Strict</option>
          <option>Suggestion</option>
        </select>
      </div>
    </div>

    <div className="border-grey-300 dark:border-grey-700 dark:bg-grey-900 overflow-hidden rounded-lg border-2 bg-white p-4">
      <div className="space-y-4">
        <h4 className="dark:text-grey-100 text-sm font-semibold text-black">Data Access</h4>
        <textarea
          rows={3}
          className="border-grey-300 focus:outline-primary-500 dark:border-grey-600 dark:bg-grey-800 dark:text-grey-100 block w-full rounded-md border bg-white px-3 py-2 text-sm text-black placeholder-gray-500 focus:outline focus:outline-2 focus:outline-offset-2 dark:placeholder-gray-400"
          placeholder="Define data access rules…"
        />
        <select className="border-grey-300 focus:outline-primary-500 dark:border-grey-600 dark:bg-grey-800 dark:text-grey-100 block w-full rounded-md border bg-white px-3 py-2 text-sm text-black focus:outline focus:outline-2 focus:outline-offset-2">
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
      className="text-grey-400 size-5 shrink-0"
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
    <h3 className="dark:text-grey-100 text-lg font-semibold text-black">Rule Simulator</h3>
  </div>
  <div className="border-grey-300 dark:border-grey-700 dark:bg-grey-900 overflow-hidden rounded-lg border-2 bg-white">
    <div className="border-grey-200 dark:border-grey-700 border-b px-6 py-4">
      <h4 className="dark:text-grey-100 text-base font-bold text-black">Reasoning Trace</h4>
    </div>
    <div className="space-y-4 px-6 py-4">
      <div className="bg-grey-50 dark:bg-grey-800 rounded-md border-l-4 border-red-500 p-4">
        <p className="dark:text-grey-100 font-mono text-sm text-black">
          Rule: PII_REDACTION_STRICT
        </p>
        <p className="text-grey-500 dark:text-grey-400 mt-1 font-mono text-sm">
          Triggered: Credit card number detected in response
        </p>
        <p className="text-grey-500 dark:text-grey-400 mt-1 font-mono text-sm">
          Action: Response blocked
        </p>
      </div>
      <button
        type="button"
        className="bg-primary-300 hover:bg-primary-200 dark:hover:bg-primary-300 focus:outline-primary-500 dark:bg-primary-500 inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-semibold text-white transition-colors focus:outline focus:outline-2 focus:outline-offset-2"
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
