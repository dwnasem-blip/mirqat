/**
 * MIRQAT Color System
 * Professional Islamic color palette with dark emerald green, soft gold, and ivory
 */

export const COLORS = {
  // Primary Colors
  primary: {
    main: '#1B5E46', // Dark Emerald Green
    light: '#2A7A5F',
    lighter: '#4A9B7F',
    lightest: '#E8F3F0',
    dark: '#0F3D2A',
  },

  // Secondary Colors
  secondary: {
    main: '#D4AF87', // Soft Gold
    light: '#E8C9A8',
    lighter: '#F3DCC4',
    lightest: '#FBF6F1',
    dark: '#B8945F',
  },

  // Neutral Colors
  neutral: {
    white: '#FFFFFF',
    ivory: '#FFFEF9',
    light: '#F5F3F0',
    medium: '#9B9B9B',
    dark: '#4A4A4A',
    darker: '#2D2D2D',
    black: '#000000',
  },

  // Semantic Colors
  success: '#10B981',
  warning: '#F59E0B',
  error: '#EF4444',
  info: '#3B82F6',

  // Status Colors
  status: {
    success: '#22C55E',
    pending: '#FBBF24',
    error: '#EF4444',
    disabled: '#D1D5DB',
  },

  // Functional
  background: {
    primary: '#FFFEF9',
    secondary: '#F5F3F0',
    tertiary: '#E8F3F0',
  },

  // Text
  text: {
    primary: '#2D2D2D',
    secondary: '#666666',
    tertiary: '#999999',
    inverse: '#FFFFFF',
  },

  // Border
  border: {
    light: '#E8E8E8',
    medium: '#D1D1D1',
    dark: '#999999',
  },
} as const;

/**
 * Dark Mode Colors
 */
export const DARK_COLORS = {
  // Primary Colors - adjusted for dark mode
  primary: {
    main: '#2A7A5F',
    light: '#3A9A7F',
    lighter: '#5AAA8F',
    lightest: '#0D3D2A',
    dark: '#1A5E4E',
  },

  // Secondary Colors
  secondary: {
    main: '#D4AF87',
    light: '#E8C9A8',
    lighter: '#C9A076',
    lightest: '#8B6F47',
    dark: '#A68960',
  },

  // Neutral Colors
  neutral: {
    white: '#1A1A1A',
    ivory: '#242424',
    light: '#333333',
    medium: '#666666',
    dark: '#CCCCCC',
    darker: '#E0E0E0',
    black: '#FFFFFF',
  },

  // Semantic Colors
  success: '#34D399',
  warning: '#FBBF24',
  error: '#F87171',
  info: '#60A5FA',

  // Status Colors
  status: {
    success: '#34D399',
    pending: '#FBBF24',
    error: '#F87171',
    disabled: '#4B5563',
  },

  // Functional
  background: {
    primary: '#1A1A1A',
    secondary: '#242424',
    tertiary: '#2D3E38',
  },

  // Text
  text: {
    primary: '#E0E0E0',
    secondary: '#B0B0B0',
    tertiary: '#808080',
    inverse: '#1A1A1A',
  },

  // Border
  border: {
    light: '#333333',
    medium: '#4A4A4A',
    dark: '#666666',
  },
} as const;

export type ColorKeys = keyof typeof COLORS;
