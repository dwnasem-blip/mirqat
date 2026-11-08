/**
 * Prayer Times Screen
 */

import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { useI18n } from '@/hooks/useI18n';
import { SPACING } from '@/constants/spacing';
import { ThemedText } from '@/components/ThemedText';
import { Card } from '@/components/Card';

export default function PrayerScreen() {
  const { theme } = useTheme();
  const { t } = useI18n();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background.primary }}>
      <ScrollView contentContainerStyle={{ padding: SPACING.lg }}>
        <ThemedText variant="h2" color="primary" style={{ marginBottom: SPACING.xl }}>
          {t('prayer.prayerTimes')}
        </ThemedText>

        <Card style={{ marginBottom: SPACING.lg }}>
          <ThemedText variant="label" color="primary" style={{ marginBottom: SPACING.sm }}>
            {t('prayer.fajr')}
          </ThemedText>
          <ThemedText variant="h4" color="primary">
            05:30
          </ThemedText>
        </Card>

        <Card style={{ marginBottom: SPACING.lg }}>
          <ThemedText variant="label" color="primary" style={{ marginBottom: SPACING.sm }}>
            {t('prayer.dhuhr')}
          </ThemedText>
          <ThemedText variant="h4" color="primary">
            12:30
          </ThemedText>
        </Card>

        <Card style={{ marginBottom: SPACING.lg }}>
          <ThemedText variant="label" color="primary" style={{ marginBottom: SPACING.sm }}>
            {t('prayer.asr')}
          </ThemedText>
          <ThemedText variant="h4" color="primary">
            16:00
          </ThemedText>
        </Card>

        <Card style={{ marginBottom: SPACING.lg }}>
          <ThemedText variant="label" color="primary" style={{ marginBottom: SPACING.sm }}>
            {t('prayer.maghrib')}
          </ThemedText>
          <ThemedText variant="h4" color="primary">
            18:30
          </ThemedText>
        </Card>

        <Card>
          <ThemedText variant="label" color="primary" style={{ marginBottom: SPACING.sm }}>
            {t('prayer.isha')}
          </ThemedText>
          <ThemedText variant="h4" color="primary">
            20:00
          </ThemedText>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}
