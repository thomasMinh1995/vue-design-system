import { neutral } from './neutral'
import { brand } from './brand'

/**
 * Public semantic color tokens
 * Tailwind + components consume THIS
 */
export const colors = {
  // Neutral
  text: {
    ...neutral.text,

    // semantic text colors
    success: brand.success.text,
    warning: brand.warning.text,
    error: brand.error.text,
  },

  icon: neutral.icon,
  background: neutral.background,
  border: neutral.border,
  fill: neutral.fill,

  // Brand (for components like Button, Alert, etc.)
  primary: brand.primary,
  success: brand.success,
  warning: brand.warning,
  error: brand.error,
} as const

