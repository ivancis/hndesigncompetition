### 2.3 Layout Element Hierarchy

Understanding element nesting determines spacing strategy.

**🔴 COMMAND:** Elements nest in this order only:

```
1. Base (ground level background)
   └─ 2. Surfaces (dialogs, cards)
      └─ 3. Containers (highlighted sections)
         └─ 4. Fields (smallest interactive units)
            └─ 5. Dividers (separators)
```

**🔴 BOUNDARY:** No element can contain another instance of itself.

- Surface cannot hold another surface
- Container cannot hold another container
- Field cannot hold another field

```tsx
{
  /* Correct nesting */
}
;<div className="p-12">
  {' '}
  {/* Base */}
  <div role="dialog" className="p-8">
    {' '}
    {/* Surface */}
    <div role="container" className="p-4">
      {' '}
      {/* Container */}
      <button role="field" className="p-2">
        {' '}
        {/* Field */}
        Button
      </button>
      <hr /> {/* Divider */}
      <button role="field" className="p-2">
        {' '}
        {/* Field */}
        Button
      </button>
    </div>
  </div>
</div>

{
  /* Wrong: dialog inside dialog */
}
;<div role="dialog" className="p-6">
  <div role="dialog" className="p-4">
    {' '}
    {/* VIOLATION */}
  </div>
</div>
```

---

### 2.3.1 Common Patterns

#### Pattern: Dialog Structure

Dialogs are conversations between system and user: statement + detail + action.

**🔴 COMMAND:** Dialog padding: `p-4` (16px)  
**🔴 COMMAND:** Content padding: `px-4 py-3`  
**🔴 COMMAND:** Footer gap: `gap-2`

```tsx
<div role="dialog" className="rounded-md border bg-white p-4">
  <div className="px-4 py-3">
    <p>Are you sure you want to continue?</p>
  </div>
  <div className="flex justify-end gap-2 border-t pt-3">
    <button className="px-3 py-1.5">Cancel</button>
    <button className="px-3 py-1.5">Continue</button>
  </div>
</div>
```

**🟡 DIRECTIVE:** For menus and overlays (limited space contexts), use `p-2` variant.

#### Pattern: Container Emphasis

Containers highlight essential information with semantic meaning.

**Semantic variants:**

1. Neutral (default, multiple per page)
2. Primary (important, once per page)
3. Success (action succeeded)
4. Warning (attention required)
5. Critical (immediate attention required)

**Emphasis levels:**

1. Default (standard contrast)
2. Emphasized (more contrast)
3. Accent (highest contrast, use sparingly)

```tsx
{
  /* Default container */
}
;<div className="rounded-lg border border-gray-200 bg-white p-4">
  <p>Neutral content</p>
</div>

{
  /* Emphasized critical */
}
;<div className="rounded-lg border border-red-200 bg-red-50 p-4">
  <p>Error: Action failed</p>
</div>
```

**🟡 DIRECTIVE:** Use accent emphasis sparingly - it should draw maximum attention.

#### Pattern: Field Interactivity

Fields are interactive clickable elements with state changes.

**🔴 COMMAND:** Field padding: `p-3` (12px) or less  
**🔴 COMMAND:** Fields communicate state through background color change

```tsx
{
  /* Interactive field states */
}
;<button className="rounded bg-gray-100 p-3 hover:bg-gray-200 active:bg-gray-300">Click me</button>
```

---
