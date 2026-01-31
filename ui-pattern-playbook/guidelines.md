# Guidelines

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
