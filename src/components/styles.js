
export const breakpoints = {
  small: '@media (max-width: 639px)',
  medium: '@media (max-width: 1047px)',
  large: '@media (min-width: 1048px)',
}

const spacingFactor = 4
export const spacing = {
  s0: spacingFactor / 2,  // 2px
  s1: spacingFactor,      // 4px
  s2: spacingFactor * 2,  // 8px
  s3: spacingFactor * 3,  // 12px
  s4: spacingFactor * 4,  // 16px
  s5: spacingFactor * 6,  // 24px
  s6: spacingFactor * 9,  // 36px
  s7: spacingFactor * 12, // 48px
  s8: spacingFactor * 18, // 72px
}

export const headings = {
  margin: 0,
  lineHeight: '1.15',
}
