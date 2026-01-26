### 2.1 Typography

Typography establishes content hierarchy in your app, and is a key aspect of shaping its readability.
It plays a crucial role in how an interface looks, feels, and effectively communicates content to users.

Use only Tailwind utilities like ´text-base´ and ´text-lg´ to set the font size of an element.
For most uses the scale values should come from the typescale below.

**Typescale**

```tsx
<p class="text-sm ...">Aa</p>
<p class="text-base ...">Aa</p>
<p class="text-lg ...">Aa</p>
<p class="text-xl ...">Aa</p>
<p class="text-2xl ...">Aa</p>
<p class="text-3xl ...">Aa</p>
<p class="text-4xl ...">Aa</p>
<p class="text-5xl ...">Aa</p>
```

These can be grouped as Display, Headings, Subheadings, Text, Subtexts

1. **Display:**
2. **Headings:**
3. **Subheadings:**
4. **Text:** Use to style the main body text of the interface. Legible and comfortable for extended reading.
5. **Subtexts:** Use to display text in a lower hierarchy than the base text style.

**Weights:**

1. Display: ´font-extrabold´
2. Headings: ´font-bold´
3. Subheadings: ´font-semibold´
4. Text: ´font-normal´ / Use to style short-form text in the interface that requires additional emphasis or attention. Conveys a stronger tone in relation to the default text style.
5. Subtexts: ´font-medium´ / Use to add a tone that conveys importance in relation to the default text style.
