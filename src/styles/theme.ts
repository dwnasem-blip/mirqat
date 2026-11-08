/**
 * MIRQAT Theme System
 * Complete design system combining colors, typography, and spacing
 */

import { COLORS, DARK_COLORS } from '../constants/colors';
import { TYPOGRAPHY, FONTS } from '../constants/typography';
import { SPACING, RADIUS, SHADOWS, CONTAINER } from '../constants/spacing';

export type Theme = ReturnType<typeof createTheme>;

export function createTheme(isDark: boolean = false) {
  const colors = isDark ? DARK_COLORS : COLORS;

  return {
    colors,
    typography: TYPOGRAPHY,
    fonts: FONTS,
    spacing: SPACING,
    radius: RADIUS,
    shadows: SHADOWS,
    container: CONTAINER,

    // Common Component Styles
    button: {
      primary: {
        backgroundColor: colors.primary.main,
        color: colors.text.inverse,
        padding: `${SPACING.md}px ${SPACING.lg}px`,
        borderRadius: RADIUS.md,
      },
      secondary: {
        backgroundColor: colors.secondary.main,
        color: colors.primary.main,
        padding: `${SPACING.md}px ${SPACING.lg}px`,
        borderRadius: RADIUS.md,
      },
      tertiary: {
        backgroundColor: colors.background.secondary,
        color: colors.primary.main,
        padding: `${SPACING.md}px ${SPACING.lg}px`,
        borderRadius: RADIUS.md,
        borderWidth: 1,
        borderColor: colors.border.light,
      },
    },

    card: {
      backgroundColor: colors.background.secondary,
      borderRadius: RADIUS.lg,
      padding: SPACING.lg,
      ...SHADOWS.md,
    },

    input: {
      backgroundColor: colors.background.primary,
      borderColor: colors.border.light,
      borderWidth: 1,
      borderRadius: RADIUS.md,
      padding: `${SPACING.md}px ${SPACING.lg}px`,
      color: colors.text.primary,
      fontSize: TYPOGRAPHY.fontSize.base,
    },

    modal: {
      backgroundColor: colors.background.primary,
      borderRadius: RADIUS.xl,
      padding: SPACING.xl,
      ...SHADOWS.xl,
    },

    divider: {
      backgroundColor: colors.border.light,
      height: 1,
      marginVertical: SPACING.md,
    },

    statusBar: {
      backgroundColor: colors.primary.main,
      barStyle: isDark ? 'light-content' : 'dark-content' as const,
    },

    navigationBar: {
      backgroundColor: colors.background.primary,
      borderTopColor: colors.border.light,
      borderTopWidth: 1,
    },
  };
}

// Default theme (light)
export const defaultTheme = createTheme(false);

// Dark theme
export const darkTheme = createTheme(true);
