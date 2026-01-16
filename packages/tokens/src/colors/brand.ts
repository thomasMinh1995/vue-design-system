import { green, red, orange, blue } from './base'

/**
 * Brand colors
 * Semantic usage mapped from base palettes
 * used by components (Button, Tag...)
 */

export const brand = {
  primary: {
    background: blue[1],
    backgroundHover: blue[2],
    border: blue[3],
    borderHover: blue[4],
    text: blue[6],
    textHover: blue[7],
  },

  success: {
    scale: green,
    background: green[1],
    backgroundHover: green[2],
    border: green[3],
    borderHover: green[4],
    text: green[6],
    textHover: green[7],
  },

  warning: {
    scale: orange,
    background: orange[1],
    backgroundHover: orange[2],
    border: orange[3],
    borderHover: orange[4],
    text: orange[6],
    textHover: orange[7],
  },

  error: {
    scale: red,
    background: red[1],
    backgroundHover: red[2],
    border: red[3],
    borderHover: red[4],
    text: red[6],
    textHover: red[7],
  },
} as const