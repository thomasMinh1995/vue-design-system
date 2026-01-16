import { neutral } from './neutral'
import { brand } from './brand'

/**
 * Public semantic color tokens
 * Tailwind + components consume THIS
 */
export const colors = {
  text: {
    primary: neutral.text,
    secondary: neutral.text.secondary,
    tertiary: neutral.text.tertiary,
    disabled: neutral.text.disabled,

    success: brand.success.text,
    warning: brand.warning.text,
    error: brand.error.text,
  },

  background: {
    success: brand.success.background,
    warning: brand.warning.background,
    error: brand.error.background,
  },

  border: {
    default: neutral.border,
    success: brand.success.background,
    warning: brand.warning.background,
    error: brand.error.background,
  },

  // brand shortcut
  primary: brand.primary,
  success: brand.success,
  warning: brand.warning,
  error: brand.error,
} as const

