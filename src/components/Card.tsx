/**
 * Card Component for displaying content
 */

import React from 'react';
import { View, ViewStyle, StyleSheet } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { SPACING, RADIUS } from '@/constants/spacing';

interface CardProps {
  children: React.ReactNode;
  style?: ViewStyle;
  padding?: 'sm' | 'md' | 'lg';
  elevation?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Card: React.FC<CardProps> = ({
  children,
  style,
  padding = 'md',
  elevation = 'md',
}) => {
  const { theme } = useTheme();

  const paddingMap = {
    sm: SPACING.sm,
    md: SPACING.md,
    lg: SPACING.lg,
  };

  const containerStyle: ViewStyle = {
    backgroundColor: theme.colors.background.secondary,
    borderRadius: RADIUS.lg,
    padding: paddingMap[padding],
    ...(theme.shadows[elevation] as any),
  };

  return <View style={[containerStyle, style]}>{children}</View>;
};
