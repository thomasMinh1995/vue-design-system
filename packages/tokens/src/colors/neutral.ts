import { blue } from './base'

/**
 * Neutral colors
 * Used for text, icon, background, border, fill
 * Theme-aware (light / dark)
 */
export const neutral = {
  light: {
    text: {
      primary: '#1F2937',     // gray-800
      secondary: '#4B5563',   // gray-600
      tertiary: '#6B7280',    // gray-500
      disabled: '#9CA3AF',    // gray-400
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
  },

  dark: {
    text: {
      primary: '#F9FAFB',
      secondary: '#E5E7EB',
      tertiary: '#9CA3AF',
      disabled: '#6B7280',
      inverse: '#111827',
    },

    icon: {
      primary: '#E5E7EB',
      secondary: '#9CA3AF',
      disabled: '#6B7280',
    },

    background: {
      page: '#030712',
      container: '#111827',
      elevated: '#1F2937',
      disabled: '#374151',
    },

    border: {
      primary: '#374151',
      secondary: '#4B5563',
      strong: '#6B7280',
    },

    fill: {
      primary: '#1F2937',
      secondary: '#374151',
      tertiary: '#4B5563',
    },
  },
} as const