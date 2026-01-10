export type TextSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type TextWeight = 'regular' | 'medium' | 'bold'
export type TextColor = 'default' | 'muted' | 'danger'

export interface TextProps {
  as?: keyof HTMLElementTagNameMap
  size?: TextSize
  weight?: TextWeight
  color?: TextColor
}
