import { neutral } from './neutral'
import { brand } from './brand'

/**
 * Public semantic color tokens
 * Tailwind + components consume THIS
 */

export const colors = {
  text: neutral.light.text,
  icon: neutral.light.icon,
  background: neutral.light.background,
  border: neutral.light.border,
  fill: neutral.light.fill,

  primary: brand.primary.light,
} as const
