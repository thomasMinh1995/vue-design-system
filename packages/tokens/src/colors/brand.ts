import { blue } from './base'

/**
 * Brand colors
 * Semantic usage mapped from base palettes
 */

export const brand = {
  primary: {
    light: {
      background: blue[1],
      backgroundHover: blue[2],

      border: blue[3],
      borderHover: blue[4],

      text: blue[6],
      textHover: blue[7],
      textActive: blue[8],
    },

    dark: {
      background: blue[8],
      backgroundHover: blue[7],

      border: blue[6],
      borderHover: blue[5],

      text: blue[3],
      textHover: blue[2],
      textActive: blue[1],
    },
  },
} as const