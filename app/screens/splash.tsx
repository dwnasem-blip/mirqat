/**
 * Splash Screen
 */

import React, { useEffect } from 'react';
import { SafeAreaView, View, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import { useTheme } from '@/hooks/useTheme';
import { ThemedText } from '@/components/ThemedText';

export default function SplashScreen() {
  const { theme } = useTheme();
  const router = useRouter();

  useEffect(() => {
    // Simulate splash screen duration
    const timer = setTimeout(() => {
      router.replace('../(tabs)');
    }, 2000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme.colors.primary.main,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <View style={{ alignItems: 'center' }}>
        <ThemedText
          variant="h1"
          color="primary"
          style={{
            color: theme.colors.text.inverse,
            marginBottom: 16,
          }}
        >
          مِرقاة
        </ThemedText>
        <ThemedText
          variant="body-base"
          color="primary"
          style={{
            color: theme.colors.text.inverse,
            marginBottom: 32,
          }}
        >
          ارتقِ بعلمك، وازدد قرباً
        </ThemedText>
        <ActivityIndicator color={theme.colors.text.inverse} size="large" />
      </View>
    </SafeAreaView>
  );
}
