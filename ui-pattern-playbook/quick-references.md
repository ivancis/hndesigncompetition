# Quick References

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
Surface:     px-4 py-2 sm:p-6 (responsive) or p-4 (dense)
Card Header: px-6 py-4
Container:   p-4
Field:       px-4 py-2 (buttons) or px-3 py-2 (inputs)
Badge:       px-2.5 py-0.5
```

### 17.2 Typography Cheat Sheet

```
Display:     text-5xl font-extrabold
Heading:     text-xl font-bold (or text-base font-bold for card headings)
Subheading:  text-lg font-semibold
Body:        text-base font-normal
Subtext:     text-sm font-medium
Button:      text-md font-semibold
```

### 17.3 Border Radius Cheat Sheet

```
Small:       rounded-md border-2 (badges, buttons)
Standard:    rounded-md border-2 (cards, panels)
Large:       rounded-lg border-2 (modals, hero sections)

Badges:      rounded-md or rounded-full with px-2.5 py-0.5
Buttons:     rounded-md border-2 px-4 py-2
Cards:       rounded-lg border-2 with px-4 py-2 sm:p-6
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

### 17.8 Button Patterns

```
Primary:       rounded-md border-2 bg-primary-300 px-4 py-2 text-md font-semibold text-black
               hover:bg-primary-200 active:bg-primary-100
               focus:outline focus:outline-1 focus:outline-offset-2 focus:outline-primary-500 focus:outline-primary-600

Secondary:     rounded-md border-2 px-4 py-2 text-md font-semibold
               hover:bg-grey-100 active:bg-grey-200
               focus:outline focus:outline-1 focus:outline-offset-2 focus:outline-primary-600

Danger:        rounded-md border-2 bg-red-300 px-4 py-2 text-md font-semibold text-black
               hover:bg-red-200 active:bg-red-100
               focus:outline focus:outline-1 focus:outline-offset-2 focus:outline-red-500 focus:outline-red-600

Link:          text-sm font-semibold text-primary-600 underline hover:text-primary-700
```

### 17.9 Color Tokens

```
Primary:       bg-primary-300, text-primary-600, border-primary-500
Grey:          bg-grey-50, text-grey-600, border-grey-600
Success:       bg-emerald-50, text-emerald-600, border-emerald-200
Warning:       bg-amber-50, text-amber-600, border-amber-200
Critical:      bg-red-50, text-red-600, border-red-200

Text Colors:
- Black:       text-black (headings, primary text)
- Grey:        text-grey-600 (secondary text), text-grey-500 (hints)
- Primary:     text-primary-600 (links, active states)
```

### 17.10 Form Patterns

```
Input:         rounded-md border-2 border-grey-600 px-3 py-2 text-sm text-black
               placeholder-grey-400 placeholder-grey-500
               focus:outline focus:outline-1 focus:outline-offset-2 focus:outline-primary-500 focus:outline-primary-600

Label:         block text-sm font-semibold text-black

Select:        rounded-md border-2 border-grey-600 px-3 py-2 text-sm text-black
               focus:outline focus:outline-1 focus:outline-offset-2 focus:outline-primary-500 focus:outline-primary-600

Checkbox:      h-4 w-4 rounded-md border-grey-400 text-primary-600 focus:ring-primary-500
```

### 17.11 Navigation Patterns

```
Active Tab:    border-b-4 border-primary-600 px-1 py-4 text-sm font-semibold text-primary-600
Inactive Tab:  border-b-2 border-transparent px-1 py-4 text-sm font-medium text-grey-600 hover:text-grey-700

Nav Container: border-b-2 border-grey-700

Sidebar Item:  rounded-md px-3 py-2 text-sm font-semibold (active) or font-medium (inactive)
               bg-grey-100 text-black (active) or text-grey-600 hover:bg-grey-50 hover:text-black (inactive)
```

### 17.12 Focus States

```
Focus Outline: focus:outline focus:outline-1 focus:outline-offset-2
Primary:       focus:outline-primary-500 focus:outline-primary-600
Grey:          focus:outline-grey-500
Danger:        focus:outline-red-500 focus:outline-red-600
```

---
