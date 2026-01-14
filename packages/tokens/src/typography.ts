// typography tokens
export const typography = {
  // Body
  sm: {
    fontSize: '12px',
    lineHeight: '20px',
  },
  base: {
    fontSize: '14px',
    lineHeight: '22px',
  },
  lg: {
    fontSize: '16px',
    lineHeight: '24px',
  },

  // Headings
  h1: {
    fontSize: '38px',
    lineHeight: '46px',
  },
  h2: {
    fontSize: '30px',
    lineHeight: '38px',
  },
  h3: {
    fontSize: '24px',
    lineHeight: '32px',
  },
  h4: {
    fontSize: '20px',
    lineHeight: '28px',
  },
  h5: {
    fontSize: '16px',
    lineHeight: '24px',
  },
} as const

// text-decoration
export const textDecoration = {
  none: 'none',
  underline: 'underline',
  lineThrough: 'line-through',
} as const
