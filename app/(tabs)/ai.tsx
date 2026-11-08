/**
 * AI Assistant Screen
 */

import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { useI18n } from '@/hooks/useI18n';
import { SPACING } from '@/constants/spacing';
import { ThemedText } from '@/components/ThemedText';
import { Card } from '@/components/Card';
import { Button } from '@/components/Button';

export default function AIScreen() {
  const { theme } = useTheme();
  const { t } = useI18n();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background.primary }}>
      <ScrollView contentContainerStyle={{ padding: SPACING.lg }}>
        <ThemedText variant="h2" color="primary" style={{ marginBottom: SPACING.xl }}>
          {t('ai.assistant')}
        </ThemedText>

        <Card style={{ marginBottom: SPACING.lg, backgroundColor: theme.colors.primary.lightest }}>
          <ThemedText variant="h5" color="primary" style={{ marginBottom: SPACING.md }}>
            المساعد الذكي القرآني
          </ThemedText>
          <ThemedText variant="body-base" color="secondary" style={{ marginBottom: SPACING.lg }}>
            اسأل أي سؤال عن القرآن الكريم والتفسير والأحاديث الشريفة والمعلومات الإسلامية
          </ThemedText>
          <Button
            title={t('ai.askQuestion')}
            onPress={() => {}}
            variant="primary"
            size="md"
            fullWidth
          />
        </Card>

        <Card style={{ marginBottom: SPACING.lg }}>
          <ThemedText variant="h5" color="primary" style={{ marginBottom: SPACING.md }}>
            أمثلة على الأسئلة
          </ThemedText>
          <ThemedText variant="body-base" color="secondary">
            • ماذا تعني هذه الآية؟{'\n'}
            • ما معنى هذه الكلمة في القرآن؟{'\n'}
            • أين ورد موضوع الصبر؟{'\n'}
            • ما الفرق بين آيتين؟{'\n'}
            • ما سياق هذه الآية؟
          </ThemedText>
        </Card>

        <Card>
          <ThemedText variant="h5" color="primary" style={{ marginBottom: SPACING.md }}>
            المميزات
          </ThemedText>
          <ThemedText variant="body-base" color="secondary">
            • إجابات موثوقة من المصادر المعتمدة{'\n'}
            • تعرض المراجع والمصادر{'\n'}
            • تفسيرات متعددة{'\n'}
            • آيات ذات صلة
          </ThemedText>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}
