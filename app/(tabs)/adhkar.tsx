/**
 * Adhkar Screen
 */

import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { useI18n } from '@/hooks/useI18n';
import { SPACING } from '@/constants/spacing';
import { ThemedText } from '@/components/ThemedText';
import { Card } from '@/components/Card';

export default function AdhkarScreen() {
  const { theme } = useTheme();
  const { t } = useI18n();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background.primary }}>
      <ScrollView contentContainerStyle={{ padding: SPACING.lg }}>
        <ThemedText variant="h2" color="primary" style={{ marginBottom: SPACING.xl }}>
          {t('adhkar.title')}
        </ThemedText>

        <Card style={{ marginBottom: SPACING.lg }}>
          <ThemedText variant="h5" color="primary" style={{ marginBottom: SPACING.md }}>
            {t('adhkar.morningAdhkar')}
          </ThemedText>
          <ThemedText variant="body-base" color="secondary">
            أذكار مأثورة للصباح مع حديث نبوي شريف
          </ThemedText>
        </Card>

        <Card style={{ marginBottom: SPACING.lg }}>
          <ThemedText variant="h5" color="primary" style={{ marginBottom: SPACING.md }}>
            {t('adhkar.eveningAdhkar')}
          </ThemedText>
          <ThemedText variant="body-base" color="secondary">
            أذكار مأثورة للمساء مع حديث نبوي شريف
          </ThemedText>
        </Card>

        <Card style={{ marginBottom: SPACING.lg }}>
          <ThemedText variant="h5" color="primary" style={{ marginBottom: SPACING.md }}>
            {t('adhkar.sleepAdhkar')}
          </ThemedText>
          <ThemedText variant="body-base" color="secondary">
            أذكار مأثورة قبل النوم للحماية والأمان
          </ThemedText>
        </Card>

        <Card>
          <ThemedText variant="h5" color="primary" style={{ marginBottom: SPACING.md }}>
            الميزات
          </ThemedText>
          <ThemedText variant="body-base" color="secondary">
            • عداد الأذكار{'\n'}
            • تنبيهات مخصصة{'\n'}
            • حفظ المفضلة{'\n'}
            • عمل بدون إنترنت
          </ThemedText>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}
