import { typography } from '@ds/tokens'

export default {
  theme: {
    extend: {
      fontSize: {
        // Body text
        sm: [
          typography.sm.fontSize,
          { lineHeight: typography.sm.lineHeight },
        ],
        base: [
          typography.base.fontSize,
          { lineHeight: typography.base.lineHeight },
        ],
        lg: [
          typography.lg.fontSize,
          { lineHeight: typography.lg.lineHeight },
        ],

        // Headings
        h1: [
          typography.h1.fontSize,
          { lineHeight: typography.h1.lineHeight },
        ],
        h2: [
          typography.h2.fontSize,
          { lineHeight: typography.h2.lineHeight },
        ],
        h3: [
          typography.h3.fontSize,
          { lineHeight: typography.h3.lineHeight },
        ],
        h4: [
          typography.h4.fontSize,
          { lineHeight: typography.h4.lineHeight },
        ],
        h5: [
          typography.h5.fontSize,
          { lineHeight: typography.h5.lineHeight },
        ],
      },
    },
  },
}
