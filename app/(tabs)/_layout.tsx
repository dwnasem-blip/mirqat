/**
 * Tab Navigation Layout
 */

import React from 'react';
import { Tabs } from 'expo-router';
import { View, StyleSheet, I18nManager } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { useI18n } from '@/hooks/useI18n';
import { SPACING } from '@/constants/spacing';
import { ThemedText } from '@/components/ThemedText';

interface TabIcon {
  name: string;
  label: string;
  size: number;
}

export default function TabLayout() {
  const { theme } = useTheme();
  const { t, isRTL } = useI18n();

  const TabIcon = ({ name, label, focused }: { name: string; label: string; focused: boolean }) => (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        gap: 4,
      }}
    >
      <View
        style={{
          width: 24,
          height: 24,
          borderRadius: 6,
          backgroundColor: focused ? theme.colors.primary.main : 'transparent',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <ThemedText
          variant="caption"
          color={focused ? 'primary' : 'secondary'}
          style={{
            fontSize: 12,
            fontWeight: 'bold',
          }}
        >
          {name[0].toUpperCase()}
        </ThemedText>
      </View>
      <ThemedText
        variant="caption"
        color={focused ? 'primary' : 'secondary'}
        style={{
          fontSize: 10,
        }}
      >
        {label}
      </ThemedText>
    </View>
  );

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.colors.background.primary,
          borderTopColor: theme.colors.border.light,
          borderTopWidth: 1,
          paddingVertical: SPACING.sm,
          paddingHorizontal: SPACING.md,
          height: 80,
          ...theme.shadows.md,
        },
        tabBarActiveTintColor: theme.colors.primary.main,
        tabBarInactiveTintColor: theme.colors.text.tertiary,
        tabBarLabelStyle: {
          fontSize: 10,
          marginTop: 2,
          fontWeight: '500',
        },
        tabBarIconStyle: {
          marginBottom: 2,
        },
        sceneStyle: {
          backgroundColor: theme.colors.background.primary,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: t('navigation.home'),
          tabBarIcon: ({ focused }) => <TabIcon name="Home" label={t('navigation.home')} focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="quran"
        options={{
          title: t('navigation.quran'),
          tabBarIcon: ({ focused }) => <TabIcon name="Quran" label={t('navigation.quran')} focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="adhkar"
        options={{
          title: t('navigation.adhkar'),
          tabBarIcon: ({ focused }) => <TabIcon name="Adhkar" label={t('navigation.adhkar')} focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="prayer"
        options={{
          title: t('navigation.prayer'),
          tabBarIcon: ({ focused }) => <TabIcon name="Prayer" label={t('navigation.prayer')} focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="ai"
        options={{
          title: t('navigation.ai'),
          tabBarIcon: ({ focused }) => <TabIcon name="AI" label={t('navigation.ai')} focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="academy"
        options={{
          title: t('navigation.academy'),
          tabBarIcon: ({ focused }) => <TabIcon name="Learn" label={t('navigation.academy')} focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: t('navigation.profile'),
          tabBarIcon: ({ focused }) => <TabIcon name="User" label={t('navigation.profile')} focused={focused} />,
        }}
      />
    </Tabs>
  );
}
