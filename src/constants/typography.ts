/**
 * MIRQAT Typography System
 * Font sizes, line heights, and font weights
 */

export const TYPOGRAPHY = {
  // Font Sizes
  fontSize: {
    xs: 12,
    sm: 14,
    base: 16,
    lg: 18,
    xl: 20,
    '2xl': 24,
    '3xl': 30,
    '4xl': 36,
    '5xl': 48,
  },

  // Line Heights
  lineHeight: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.6,
    loose: 1.8,
  },

  // Font Weights
  fontWeight: {
    light: '300' as const,
    normal: '400' as const,
    medium: '500' as const,
    semibold: '600' as const,
    bold: '700' as const,
    extrabold: '800' as const,
  },

  // Heading Styles
  heading: {
    h1: {
      fontSize: 36,
      fontWeight: '700' as const,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: 30,
      fontWeight: '700' as const,
      lineHeight: 1.3,
    },
    h3: {
      fontSize: 24,
      fontWeight: '600' as const,
      lineHeight: 1.3,
    },
    h4: {
      fontSize: 20,
      fontWeight: '600' as const,
      lineHeight: 1.4,
    },
    h5: {
      fontSize: 18,
      fontWeight: '600' as const,
      lineHeight: 1.4,
    },
    h6: {
      fontSize: 16,
      fontWeight: '600' as const,
      lineHeight: 1.5,
    },
  },

  // Body Styles
  body: {
    large: {
      fontSize: 18,
      fontWeight: '400' as const,
      lineHeight: 1.6,
    },
    base: {
      fontSize: 16,
      fontWeight: '400' as const,
      lineHeight: 1.5,
    },
    small: {
      fontSize: 14,
      fontWeight: '400' as const,
      lineHeight: 1.5,
    },
  },

  // Caption/Label Styles
  caption: {
    fontSize: 12,
    fontWeight: '400' as const,
    lineHeight: 1.5,
  },

  // Label Styles
  label: {
    fontSize: 14,
    fontWeight: '600' as const,
    lineHeight: 1.5,
  },
} as const;

/**
 * Font Family
 */
export const FONTS = {
  // Primary font - will be customized for Arabic support
  primary: 'System',
  // Fallback fonts
  fallback: [
    'Helvetica Neue',
    'Arial',
    'sans-serif',
  ],
  // Arabic specific fonts (to be configured with custom fonts)
  arabic: 'Arabic',
} as const;
