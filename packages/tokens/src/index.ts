// packages/tokens/src/index.ts

import { size } from './size'
import { margin, padding } from './spacing'
import { colors } from './colors'
import { typography } from './typography'

/**
 * Tailwind-consumable tokens
 * ONLY normalized values go here
 * A translation layer between design tokens and Tailwind utilities
 */

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

export {
  size,
  margin,
  padding,
  colors,
  typography,
}