/**
 * Onboarding Screen
 */

import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { useRouter } from 'expo-router';
import { useTheme } from '@/hooks/useTheme';
import { SPACING } from '@/constants/spacing';
import { ThemedText } from '@/components/ThemedText';
import { Button } from '@/components/Button';

export default function OnboardingScreen() {
  const { theme } = useTheme();
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background.primary }}>
      <ScrollView contentContainerStyle={{ flex: 1, padding: SPACING.lg }}>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <View style={{ alignItems: 'center', marginBottom: SPACING.xl }}>
            <ThemedText variant="h1" color="primary" style={{ marginBottom: SPACING.md }}>
              مِرقاة
            </ThemedText>
            <ThemedText variant="body-base" color="secondary">
              ارتقِ بعلمك، وازدد قرباً
            </ThemedText>
          </View>

          <View style={{ marginBottom: SPACING.xl }}>
            <ThemedText variant="h4" color="primary" style={{ marginBottom: SPACING.lg }}>
              مرحباً بك في التطبيق الإسلامي الشامل
            </ThemedText>
            <ThemedText variant="body-base" color="secondary" style={{ lineHeight: 24 }}>
              اكتشف مميزات تطبيق مِرقاة:{'\n\n'}
              🕌 قراءة القرآن الكريم والتفسير{'\n'}
              🤖 مساعد ذكي قرآني{'\n'}
              ⏰ مواقيت الصلاة والأذكار{'\n'}
              📚 أكاديمية إسلامية شاملة{'\n'}
              🏆 مسابقات وتحديات تعليمية
            </ThemedText>
          </View>

          <View style={{ gap: SPACING.md }}>
            <Button
              title="إنشاء حساب جديد"
              onPress={() => router.push('./auth')}
              variant="primary"
              size="lg"
              fullWidth
            />
            <Button
              title="تسجيل الدخول"
              onPress={() => router.push('./auth')}
              variant="secondary"
              size="lg"
              fullWidth
            />
            <Button
              title="المتابعة بدون حساب"
              onPress={() => router.replace('../(tabs)')}
              variant="tertiary"
              size="lg"
              fullWidth
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
