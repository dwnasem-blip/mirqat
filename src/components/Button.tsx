/**
 * Primary Button Component
 */

import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  ActivityIndicator,
} from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { SPACING, RADIUS } from '@/constants/spacing';
import { TYPOGRAPHY } from '@/constants/typography';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  style?: ViewStyle;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  fullWidth = false,
  style,
}) => {
  const { theme } = useTheme();

  const sizeStyles: Record<string, { paddingVertical: number; paddingHorizontal: number }> = {
    sm: { paddingVertical: SPACING.sm, paddingHorizontal: SPACING.md },
    md: { paddingVertical: SPACING.md, paddingHorizontal: SPACING.lg },
    lg: { paddingVertical: SPACING.lg, paddingHorizontal: SPACING.xl },
  };

  const variantStyles: Record<string, { backgroundColor: string; color: string; borderWidth?: number; borderColor?: string }> = {
    primary: {
      backgroundColor: theme.colors.primary.main,
      color: theme.colors.text.inverse,
    },
    secondary: {
      backgroundColor: theme.colors.secondary.main,
      color: theme.colors.primary.main,
    },
    tertiary: {
      backgroundColor: theme.colors.background.secondary,
      color: theme.colors.primary.main,
      borderWidth: 1,
      borderColor: theme.colors.border.light,
    },
  };

  const containerStyle: ViewStyle = {
    ...sizeStyles[size],
    ...variantStyles[variant],
    borderRadius: RADIUS.md,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: disabled || loading ? 0.6 : 1,
    width: fullWidth ? '100%' : 'auto',
  };

  const textStyle: TextStyle = {
    color: variantStyles[variant].color,
    fontSize: TYPOGRAPHY.fontSize.base,
    fontWeight: '600',
  };

  return (
    <TouchableOpacity
      style={[containerStyle, style]}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.7}
    >
      {loading ? (
        <ActivityIndicator color={variantStyles[variant].color} />
      ) : (
        <Text style={textStyle}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};
