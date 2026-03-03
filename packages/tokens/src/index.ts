export const colors = {
  background: "hsl(0 0% 100%)",
  foreground: "hsl(222.2 47.4% 11.2%)",
  primary: "hsl(222.2 47.4% 11.2%)",
  primaryForeground: "hsl(210 40% 98%)",
  secondary: "hsl(210 40% 96.1%)",
  secondaryForeground: "hsl(222.2 47.4% 11.2%)",
  muted: "hsl(210 40% 96.1%)",
  mutedForeground: "hsl(215.4 16.3% 46.9%)",
  border: "hsl(214.3 31.8% 91.4%)",
  ring: "hsl(215 20.2% 65.1%)"
} as const

export const spacing = {
  xs: "0.25rem",
  sm: "0.5rem",
  md: "1rem",
  lg: "1.5rem",
  xl: "2rem"
} as const

export const radii = {
  sm: "0.375rem",
  md: "0.5rem",
  lg: "0.75rem"
} as const

export const typography = {
  fontFamily: "Inter, system-ui, sans-serif",
  textSm: "0.875rem",
  textBase: "1rem",
  textLg: "1.125rem"
} as const
