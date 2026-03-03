export const semanticTokens = {
  color: {
    surface: {
      default: "oklch(1 0 0)",
      defaultDark: "#0b0d10",
      muted: "oklch(0.96 0 0)",
      mutedDark: "oklch(0.252 0 0)"
    },
    text: {
      default: "oklch(0.2178 0 0)",
      defaultDark: "oklch(0.9551 0 0)",
      muted: "oklch(0.5103 0 0)",
      mutedDark: "oklch(0.683 0 0)",
      onBrand: "oklch(1 0 0)",
      onBrandDark: "oklch(0.9551 0 0)"
    },
    brand: {
      primary: "oklch(0.6248 0.2042 257.0818)",
      primaryDark: "oklch(0.6248 0.2042 257.0818)"
    },
    border: {
      default: "oklch(0.92 0 0)",
      defaultDark: "oklch(0.28 0 0)",
      focus: "oklch(0.8452 0 0)"
    },
    status: {
      destructive: "oklch(0.6496 0.2362 26.9032)",
      onDestructive: "oklch(1 0 0)"
    }
  },
  space: {
    1: "0.25rem",
    2: "0.5rem",
    3: "0.75rem",
    4: "1rem",
    6: "1.5rem",
    8: "2rem"
  },
  radius: {
    sm: "0.525rem",
    md: "0.625rem",
    lg: "0.725rem"
  },
  typography: {
    fontFamily: {
      sans: "Inter, system-ui, sans-serif"
    },
    text: {
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem"
    }
  }
} as const

// Legacy aliases kept for compatibility while teams adopt semantic paths.
export const colors = {
  background: semanticTokens.color.surface.default,
  foreground: semanticTokens.color.text.default,
  primary: semanticTokens.color.brand.primary,
  primaryForeground: semanticTokens.color.text.onBrand,
  secondary: semanticTokens.color.surface.muted,
  secondaryForeground: semanticTokens.color.text.default,
  muted: semanticTokens.color.surface.muted,
  mutedForeground: semanticTokens.color.text.muted,
  border: semanticTokens.color.border.default,
  ring: semanticTokens.color.border.focus,
  destructive: semanticTokens.color.status.destructive,
  destructiveForeground: semanticTokens.color.status.onDestructive
} as const

export const spacing = {
  xs: semanticTokens.space[1],
  sm: semanticTokens.space[2],
  md: semanticTokens.space[4],
  lg: semanticTokens.space[6],
  xl: semanticTokens.space[8]
} as const

export const radii = {
  sm: semanticTokens.radius.sm,
  md: semanticTokens.radius.md,
  lg: semanticTokens.radius.lg
} as const

export const typography = {
  fontFamily: semanticTokens.typography.fontFamily.sans,
  textSm: semanticTokens.typography.text.sm,
  textBase: semanticTokens.typography.text.base,
  textLg: semanticTokens.typography.text.lg
} as const
