// packages/tokens/src/size.ts

export const size = {
  sizeXXS: '4px',
  sizeXS: '8px',
  sizeSM: '12px',
  size: '16px',     // default
  sizeMS: '16px',   // alias for compatibility
  sizeMD: '20px',
  sizeLG: '24px',
  sizeXL: '32px',
  sizeXXL: '48px',
} as const

export const controlHeight = {
  controlHeightXS: '16px',
  controlHeightSM: '24px',
  controlHeight: '32px',
  controlHeightLG: '40px',
} as const

export const screen = {
  screenXS: '480px',
  screenSM: '576px',
  screenMD: '768px',
  screenLG: '992px',
  screenXL: '1200px',
  screenXXL: '1600px',
} as const
