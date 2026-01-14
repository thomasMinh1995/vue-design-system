import { size } from "./size";

//represent distance ranging from 4px to 48px
export const margin = {
  marginXXS: size.sizeXXS,
  marginXS: size.sizeXS,
  marginSM: size.sizeSM,
  margin: size.size,
  marginMD: size.sizeMD,
  marginLG: size.sizeLG,
  marginXL: size.sizeXL,
  marginXXL: size.sizeXXL,
} as const

export const padding = {
  paddingXXS: size.sizeXXS,
  paddingXS: size.sizeXS, 
  paddingSM: size.sizeSM,
  padding: size.size,
  paddingMD: size.sizeMD,
  paddingLG: size.sizeLG,
  paddingXL: size.sizeXL,
  paddingXXL: size.sizeXXL,

  paddingContentHorizontalSM: size.size,
  paddingContentVertialSM: size.sizeXS,
  paddingContentHorizontal: size.sizeMS,
  paddingContentVertial: size.sizeSM,
  paddingContentHorizontalLG: size.sizeLG,
  paddingContentVertialLG: size.sizeMS,
} as const