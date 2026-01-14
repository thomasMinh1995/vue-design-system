export type TextSize =
  | 'sm'
  | 'base'
  | 'lg'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'

export type TextColor =
  | 'success'
  | 'warning'
  | 'error'

export type TextDecoration = 'none' | 'underline' | 'lineThrough'

export interface TextProps {
  as?: keyof HTMLElementTagNameMap
  size?: TextSize
  decoration?: TextDecoration
  color?: TextColor
}
