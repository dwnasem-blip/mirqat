/**
 * Root Layout with Navigation
 */

import React, { useEffect } from 'react';
import { Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { I18nManager, View } from 'react-native';
import { useI18n } from '@/hooks/useI18n';
import { useTheme } from '@/hooks/useTheme';

// Enable RTL support for Arabic
I18nManager.allowRTL(true);

export default function RootLayout() {
  const { isRTL } = useI18n();
  const { theme } = useTheme();

  useEffect(() => {
    if (isRTL) {
      I18nManager.forceRTL(true);
    } else {
      I18nManager.forceRTL(false);
    }
  }, [isRTL]);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          backgroundColor: theme.colors.background.primary,
        }}
      >
        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: {
              backgroundColor: theme.colors.background.primary,
            },
          }}
        >
          <Stack.Screen
            name="(tabs)"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="screens/splash"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="screens/onboarding"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="screens/auth"
            options={{
              headerShown: false,
            }}
          />
        </Stack>
      </View>
    </GestureHandlerRootView>
  );
}
