/**
 * Themed Text Component
 */

import React from 'react';
import { Text, TextProps, StyleSheet } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { TYPOGRAPHY } from '@/constants/typography';

interface ThemedTextProps extends TextProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body-lg' | 'body-base' | 'body-sm' | 'label' | 'caption';
  weight?: keyof typeof TYPOGRAPHY.fontWeight;
  color?: 'primary' | 'secondary' | 'tertiary' | 'success' | 'error' | 'warning' | 'info';
  children: React.ReactNode;
}

export const ThemedText: React.FC<ThemedTextProps> = ({
  variant = 'body-base',
  weight,
  color = 'primary',
  children,
  style,
  ...props
}) => {
  const { theme } = useTheme();

  const variantStyles: Record<string, any> = {
    h1: theme.typography.heading.h1,
    h2: theme.typography.heading.h2,
    h3: theme.typography.heading.h3,
    h4: theme.typography.heading.h4,
    h5: theme.typography.heading.h5,
    h6: theme.typography.heading.h6,
    'body-lg': theme.typography.body.large,
    'body-base': theme.typography.body.base,
    'body-sm': theme.typography.body.small,
    label: theme.typography.label,
    caption: theme.typography.caption,
  };

  const colorMap: Record<string, string> = {
    primary: theme.colors.text.primary,
    secondary: theme.colors.text.secondary,
    tertiary: theme.colors.text.tertiary,
    success: theme.colors.success,
    error: theme.colors.error,
    warning: theme.colors.warning,
    info: theme.colors.info,
  };

  const textStyle = {
    ...variantStyles[variant],
    color: colorMap[color],
    fontWeight: weight ? theme.typography.fontWeight[weight] : variantStyles[variant].fontWeight,
  };

  return (
    <Text {...props} style={[textStyle, style]}>
      {children}
    </Text>
  );
};
