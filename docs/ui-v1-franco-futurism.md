# NileEcho UI V1 — Franco-Futurism (Balanced Mix C)

This document is the implementation-ready UI blueprint for **Landing**, **Demo**, and **Admin Lite** screens, optimized for **Next.js + Tailwind CSS**.

## 1) Design Tokens

### Color Tokens (CSS Variables)

```css
:root {
  --bg-0: #0B0F14;   /* desert night */
  --bg-1: #0F172A;   /* temple shadow */
  --gold: #D4AF37;   /* pharaoh gold */
  --sand: #E8D9B5;   /* soft sand */
  --cyan: #22D3EE;   /* hologram */
  --text: #E5E7EB;   /* light text */
  --danger: #EF4444;
}
```

### Typography
- Arabic: `Cairo` or `IBM Plex Sans Arabic`
- English: `Inter`
- Headings: `700`
- Body: `400/500`

### Shared Styling
- Card radius: `rounded-2xl`
- Button radius: `rounded-xl`
- Base border: `border border-white/10`
- Hover border: `hover:border-white/20`
- Gold glow: `shadow-[0_0_32px_rgba(212,175,55,0.14)]`
- Cyan glow: `shadow-[0_0_32px_rgba(34,211,238,0.14)]`

### Background Stack (All Pages)
- `bg-gradient-to-b from-[#0B0F14] via-[#0F172A] to-black`
- Hieroglyph transparent pattern layer: `opacity-5..8`
- Noise overlay: `opacity-2..4`

---

## 2) Screen Blueprint

## A) Landing Page

### Grid
- Container: `max-w-6xl mx-auto px-5`
- Main hero grid: `grid lg:grid-cols-12 gap-6`
- Left copy: `lg:col-span-6`
- Right visual preview: `lg:col-span-6`

### Section Order
1. Navbar (`h-16`)
2. Hero (`~520px visual height`)
3. Mini Demo Preview (chat + mini before/after)
4. Features (4 cards)
5. Use Cases (3 cards)
6. Footer

### Hero Copy
- H1: `خلّي الحضارة تتكلم معاك.`
- Subtitle: `NileEcho AI بيحيي المواقع الأثرية رقميًا… و”فرعون AI” يجاوبك بالعامية أو الإنجليزي.`
- CTA Primary: `جرّب الديمو`
- CTA Secondary: `شوف قبل/بعد`

### Hero Visual
- Right side mock chat window
- Fine hologram lines
- Transparent hieroglyph symbol

---

## B) Demo Page

### Grid
- `min-h-screen`
- `grid lg:grid-cols-12 gap-6`
- Left chat panel: `lg:col-span-7`
- Right before/after panel: `lg:col-span-5`

### Left — Chat Card
- Header title: `اسأل الفرعون`
- Toggles/badges:
  - Language: `Arabic | English`
  - Tone: `عامي | رسمي`
- Messages area: `h-[520px] overflow-y-auto`
- Input bar: `sticky bottom-0`
- Quick prompt chips:
  - `احكيلي عن الكرنك`
  - `ليه الأهرامات اتبنت كده؟`
  - `إيه معنى النقش ده؟`
  - `ايه أهم 3 حاجات لازم أشوفهم؟`
- Disabled CTA: `اسمع الإجابة (قريبًا)`

### Right — Before/After Card
- Title: `شوف التحول`
- Site dropdown: `Karnak / Abu Simbel / Giza`
- Large slider as visual priority
- Note: `إعادة تخيل رقمية لأغراض تعليمية/سياحية.`

---

## C) Admin Lite

### Routes
- `/admin/places`
- `/admin/places/new`
- `/admin/places/:id`

### Place CRUD Fields
- `name_ar`, `name_en`
- `short_description`
- `before_image`
- `after_image`
- `context_prompt`

---

## 3) Component Presets (Tailwind)

### Navbar
- Brand: `NileEcho AI`
- Links: `Demo / Places / About`
- CTA: `Try Demo`

### Card
```txt
bg-white/5 border border-white/10 rounded-2xl backdrop-blur
```

### Button — Primary (Gold)
```txt
bg-[var(--gold)] text-black font-semibold rounded-xl px-5 py-3
hover:brightness-110 active:brightness-95
shadow-[0_0_32px_rgba(212,175,55,0.14)]
```

### Button — Secondary (Cyan Outline)
```txt
border border-[var(--cyan)]/40 text-[var(--text)] rounded-xl px-5 py-3
hover:bg-[var(--cyan)]/10
shadow-[0_0_32px_rgba(34,211,238,0.10)]
```

### Chat Bubbles
- User bubble:
```txt
bg-white/10 border border-white/10 rounded-2xl px-4 py-3
```

- Pharaoh bubble:
```txt
bg-gradient-to-r from-cyan-500/10 to-yellow-500/10
border border-white/10 rounded-2xl px-4 py-3
```

### Quick Prompt Chip
```txt
bg-white/5 border border-white/10 rounded-full px-3 py-1 text-sm
hover:bg-white/10
```

### Before/After Slider
- Handle: cyan glowing knob
- Labels: `Then` (before), `Now` (after)

---

## 4) Ready Copy Pack

### Hero
- `خلّي الحضارة تتكلم معاك.`

### CTAs
- `جرّب الفرعون دلوقتي`
- `شوف قبل/بعد`

### Feature Titles
- `فرعون AI يجاوبك`
- `ترجمة فورية للسياح`
- `قبل/بعد في ثانية`
- `تجربة سينمائية خفيفة وسريعة`

### Use Cases
- `شركات سياحة`
- `مدارس ومحتوى تعليمي`
- `متاحف ومعارض`

### Footer
- `Coming 2027`

---

## 5) Suggested Build Order (Fast Execution)
1. Setup global tokens and base background layers.
2. Build reusable components (`Button`, `Card`, `ChatBubble`, `PromptChip`, `BeforeAfterSlider`).
3. Implement Landing using the 12-column structure.
4. Implement Demo (chat + slider columns).
5. Implement Admin Lite CRUD forms.
6. Add responsive polishing and content QA.
