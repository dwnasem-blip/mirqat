/**
 * Quran Screen
 */

import React from 'react';
import { SafeAreaView, View, ScrollView } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { useI18n } from '@/hooks/useI18n';
import { SPACING } from '@/constants/spacing';
import { ThemedText } from '@/components/ThemedText';
import { Card } from '@/components/Card';

export default function QuranScreen() {
  const { theme } = useTheme();
  const { t } = useI18n();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background.primary }}>
      <ScrollView contentContainerStyle={{ padding: SPACING.lg }}>
        <ThemedText variant="h2" color="primary" style={{ marginBottom: SPACING.xl }}>
          {t('quran.title')}
        </ThemedText>

        <Card style={{ marginBottom: SPACING.lg }}>
          <ThemedText variant="h5" color="primary" style={{ marginBottom: SPACING.md }}>
            السور المتوفرة
          </ThemedText>
          <ThemedText variant="body-base" color="secondary">
            سيتم عرض 114 سورة من القرآن الكريم بترتيب المصحف
          </ThemedText>
        </Card>

        <Card style={{ marginBottom: SPACING.lg }}>
          <ThemedText variant="h5" color="primary" style={{ marginBottom: SPACING.md }}>
            ميزات القراءة
          </ThemedText>
          <ThemedText variant="body-base" color="secondary">
            • قراءة بسهولة وتصفح سلس{'\n'}
            • تفسيرات موثوقة{'\n'}
            • حفظ الإشارات المرجعية{'\n'}
            • ملاحظات شخصية{'\n'}
            • وضع الليل والنهار
          </ThemedText>
        </Card>

        <Card>
          <ThemedText variant="h5" color="primary" style={{ marginBottom: SPACING.md }}>
            قريباً
          </ThemedText>
          <ThemedText variant="body-base" color="secondary">
            تلاوة صوتية • تفسيرات متعددة • بحث متقدم
          </ThemedText>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}
