// import { blue } from './base'

/**
 * Neutral colors
 * Used for text, icon, background, border, fill
 * Theme-aware (light / dark)
 */
export const neutral = {
  text: {
    primary: '#1F2937',
    secondary: '#4B5563',
    tertiary: '#6B7280',
    disabled: '#9CA3AF',
    inverse: '#FFFFFF',
  },

  icon: {
    primary: '#374151',
    secondary: '#6B7280',
    disabled: '#9CA3AF',
  },

  background: {
    page: '#F9FAFB',
    container: '#FFFFFF',
    elevated: '#FFFFFF',
    disabled: '#F3F4F6',
  },

  border: {
    primary: '#E5E7EB',
    secondary: '#D1D5DB',
    strong: '#9CA3AF',
  },

  fill: {
    primary: '#F3F4F6',
    secondary: '#E5E7EB',
    tertiary: '#D1D5DB',
  },
} as const