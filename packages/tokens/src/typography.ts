// packages/tokens/src/typography.ts

export const fontSize = {
  xs: ['12px', '16px'],
  sm: ['14px', '20px'],
  md: ['16px', '24px'],
  lg: ['18px', '28px'],
  xl: ['20px', '32px'],
}

export const fontWeight = {
  regular: 400,
  medium: 500,
  bold: 700,
} as const

export const lineHeight = {
  tight: '1.25',
  normal: '1.5',
  relaxed: '1.75',
} as const
