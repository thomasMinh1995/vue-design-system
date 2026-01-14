export const textSizeClasses = {
  sm: 'text-sm',
  base: 'text-base',
  lg: 'text-lg',
  h1: 'text-h1',
  h2: 'text-h2',
  h3: 'text-h3',
  h4: 'text-h4',
  h5: 'text-h5',
} as const

export const textDecorationClasses = {
  none: 'no-underline',
  underline: 'underline',
  lineThrough: 'line-through',
} as const

export const textColorClasses = {
  default: 'text-text-primary',
  muted: 'text-text-secondary',
  inverse: 'text-text-inverse',

  success: 'text-text-success',
  warning: 'text-text-warning',
  error: 'text-text-error',
} as const
