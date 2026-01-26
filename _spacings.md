## 2.2 Spacing System

### 2.2.1 Overview

Spacing establishes visual hierarchy and guides attention. Proximity communicates relationships:

- **Narrow spacing** = elements are connected
- **Wide spacing** = elements are distinct
- **Consistent spacing** = grouped unit

**🔴 BOUNDARY:** Use spacing tokens for padding, margin, and gap ONLY. Never use spacing tokens for width or height properties.

---

### 2.2.2 Spacing Scale

**🔴 BOUNDARY:** Only use these exact Tailwind spacing tokens:

```
Small:   0, 0.5, 1, 2        (0px, 2px, 4px, 8px)
Medium:  3, 4, 5, 6          (12px, 16px, 20px, 24px)
Large:   8, 10, 12, 16, 20   (32px, 40px, 48px, 64px, 80px)
```

**🔴 BOUNDARY:** Never use `p-7`, `m-9`, `gap-11`, `space-y-15` or arbitrary values like `p-[13px]`

---

### 2.2.3 Vertical Spacing Rules

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
  /* Text lines */
}
;<div className="space-y-1">
  <p className="text-sm">Line 1</p>
  <p className="text-sm">Line 2</p>
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
  <h1 className="text-3xl font-bold">Heading</h1>
  <p className="text-sm text-gray-600">Subtitle</p>
</div>
```

**🟡 DIRECTIVE:** For all other typography combinations, use default spacing (`space-y-4`).

#### Divider Spacing

**🔴 COMMAND:** When using dividers, split spacing evenly before and after.

```tsx
{
  /* 32px total = 16px before + 16px after divider */
}
;<div className="space-y-4">
  <Content />
  <hr className="border-gray-200" />
  <Content />
</div>
```

---

### 2.2.4 Horizontal Spacing Rules

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
  <Icon className="h-4 w-4" />
  <span>Label</span>
</div>

{
  /* Dense layout */
}
;<div className="flex gap-1">
  <Badge />
  <Badge />
</div>
```

---

### 2.2.5 Inset Spacing (Padding)

**🔴 COMMAND:** Outermost layout layer: `p-12` minimum (48px), or `p-4` (16px) for dense layouts

**🔴 COMMAND:** Surfaces (dialogs): `p-6` (24px), or `p-4` (16px) for dense layouts

**🔴 COMMAND:** Containers: `p-4` (16px)

**🔴 COMMAND:** Fields: `p-3` (12px) or less, depending on use case

```tsx
{
  /* Page container */
}
;<main className="p-12">{/* Dense variant: p-4 */}</main>

{
  /* Dialog/Surface */
}
;<div role="dialog" className="p-12">
  {/* Dense variant: p-4 */}
</div>

{
  /* Container */
}
;<div className="rounded-lg border p-8">
  <Content />
</div>

{
  /* Field */
}
;<button className="px-4 py-2">Action</button>
```

#### Text Balance in Insets

**🟡 COMMAND:** When text borders the top or bottom edge of a padded element, reduce top or bottom padding by one step for visual balance.

```tsx
{
  /* Text at top edge: reduce top padding */
}
;<div className="px-4 pt-2 pb-3">
  <p>Text starts at top...</p>
</div>

{
  /* Text at bottom edge: reduce bottom padding */
}
;<div className="px-4 pt-3 pb-2">
  <p>Text ends at bottom...</p>
</div>
```

---
