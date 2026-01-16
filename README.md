# Design System (Tailwind CSS v3)

A **token-driven Design System** built with **Tailwind CSS v3**, designed for **scalability, consistency, and real-world consumption** across multiple applications.

This system separates **design tokens**, **Tailwind configuration**, and **UI components**, enabling both **design–development alignment** and **safe reuse across projects**.

---

## 🧱 Architecture Overview

```
design-system/
├─ packages/
│  ├─ tokens/        # Design tokens (colors, spacing, size, radius, typography)
│  └─ ui/            # Tailwind preset + UI components
│
├─ apps/
│  ├─ docs-storybook # Documentation & visual reference
│  └─ demo-use-design-system # Real consumer app
```

### Core Principles

- **Design tokens are the source of truth**
- **Tailwind only consumes tokens**
- **Apps never import raw tokens directly**
- **Tailwind CSS v3 compatible**
- **pnpm workspace–based**

---

## 📦 Packages

### `@ds/tokens`

Pure design tokens.

- No Tailwind dependency
- No Vue dependency
- No CSS output

#### Token Categories

| Token | Description |
|------|-------------|
| `colors` | Neutral + semantic + brand colors |
| `size` | Base size scale |
| `spacing` | Normalized spacing for Tailwind |
| `radius` | Border radius tokens |
| `typography` | Font size & line height |

📍 Location:

```
packages/tokens/src
```

---

### `@ds/ui`

Bridges tokens → Tailwind and hosts UI components.

Includes:

- Tailwind **preset**
- Component styles
- Shared UI exports

📍 Location:

```
packages/ui
```

---

## 🎨 Design Tokens

### Size Tokens

**`packages/tokens/src/size.ts`**

```ts
export const size = {
  sizeXXS: '4px',
  sizeXS: '8px',
  sizeSM: '12px',
  size: '16px',     // default
  sizeMS: '16px',   // alias
  sizeMD: '20px',
  sizeLG: '24px',
  sizeXL: '32px',
  sizeXXL: '48px',
} as const
```

---

### Spacing Tokens

Spacing is **normalized** for Tailwind consumption.

**`packages/tokens/src/index.ts`**

```ts
export const spacing = {
  0: '0px',
  xxs: size.sizeXXS,
  xs: size.sizeXS,
  sm: size.sizeSM,
  md: size.size,
  lg: size.sizeLG,
  xl: size.sizeXL,
  xxl: size.sizeXXL,
} as const
```

✅ Enables utilities like:

```
p-md → 16px
m-sm → 12px
```

---

### Radius Tokens

```ts
export const radius = {
  none: '0px',
  sm: '4px',
  md: '6px',
  lg: '8px',
  xl: '12px',
  full: '9999px',
} as const
```

---

### Color Tokens

#### Neutral colors

Used for:

- text
- icon
- background
- border
- fill

```ts
colors.text.primary
colors.background.page
colors.border.secondary
```

#### Semantic colors

Mapped from brand palettes:

```ts
text.success
text.warning
text.error
```

Used by components and typography.

---

## 🧠 Semantic Color Resolution

Example:

```html
<span class="text-success">Success message</span>
```

Resolution chain:

```
text-success
→ colors.text.success
→ brand.success.text
→ base palette value
```

---

## 🧩 Tailwind Preset

**`packages/ui/tailwind.preset.js`**

```js
import { colors, spacing, typography } from '@ds/tokens'
import { radius } from '@ds/tokens/radius'

export default {
  theme: {
    extend: {
      fontSize: {
        sm: [typography.sm.fontSize, { lineHeight: typography.sm.lineHeight }],
        base: [typography.base.fontSize, { lineHeight: typography.base.lineHeight }],
        lg: [typography.lg.fontSize, { lineHeight: typography.lg.lineHeight }],
        h1: [typography.h1.fontSize, { lineHeight: typography.h1.lineHeight }],
        h2: [typography.h2.fontSize, { lineHeight: typography.h2.lineHeight }],
        h3: [typography.h3.fontSize, { lineHeight: typography.h3.lineHeight }],
        h4: [typography.h4.fontSize, { lineHeight: typography.h4.lineHeight }],
        h5: [typography.h5.fontSize, { lineHeight: typography.h5.lineHeight }],
      },

      spacing,
      borderRadius: radius,
    },
  },

  colors: {
    text: colors.text,
    icon: colors.icon,
    background: colors.background,
    border: colors.border,
    fill: colors.fill,
    primary: colors.primary,
  },
}
```

---

## 📄 Tailwind Resolution Example

```html
<div class="p-md m-sm rounded-lg">
  Content
</div>
```

Resolution chain:

```
p-md
→ theme.spacing.md
→ size.size (16px)

m-sm
→ theme.spacing.sm
→ size.sizeSM (12px)

rounded-lg
→ theme.borderRadius.lg
→ 8px
```

---

## 📘 Storybook (Docs)

Storybook is used to:

- Visualize tokens
- Validate spacing / size / radius
- Document components

Tailwind utilities are generated via:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## 🚀 Using the Design System in a Real App

### Install (workspace)

```json
{
  "dependencies": {
    "@ds/ui": "workspace:*"
  }
}
```

---

### Tailwind Config

```js
import dsPreset from '@ds/ui/tailwind.preset'

export default {
  presets: [dsPreset],
  content: [
    './index.html',
    './src/**/*.{vue,js,ts}',
    '../../packages/ui/src/**/*.{vue,js,ts}',
  ],
}
```

---

### App Entry

```js
import { createApp } from 'vue'
import App from './App.vue'
import '@ds/ui/style.css'
import './style.css'

createApp(App).mount('#app')
```

---

### Usage Example

```vue
<template>
  <div class="p-md rounded-lg bg-background-container text-text-primary">
    <p class="text-success">Design System works 🎉</p>
  </div>
</template>
```

---

## 🧪 Tailwind v3 Compatibility

- Tailwind CSS v3
- PostCSS required
- `@tailwind base/components/utilities` used
- JIT scanning enabled via `content`

⚠️ Tailwind v4 migration is **not implemented yet**.

---

## 🔐 Type Safety

- Tokens exported as `as const`
- Tailwind keys are normalized
- Prevents arbitrary spacing/color usage
- Enforces design consistency

---

## 📌 What’s Done

- Token architecture
- Semantic colors
- Spacing / size / radius system
- Tailwind preset
- Storybook docs
- Real app consumption
- pnpm workspace setup

---

## 🔜 Next Steps (Optional)

- Compile and ship `@ds/ui/style.css`
- Add component-level tokens (Button, Alert, Input)
- Dark mode support
- Tailwind v4 migration
- Publish to npm registry

---

## 🏁 Summary

This design system is:

- Token-first
- Tailwind-native
- Scalable
- Real-app tested
- Following the [Ant design system for Figma 5.24](https://www.figma.com/design/dpZfImYKfEEBd42o8nfO4h/Preview---Ant-Design-System-for-Figma-5.24?node-id=3745-8277&p=f&t=XRf2DoxFa3ALGkkA-0).

You now have a **real design system foundation**, not just a UI kit.

