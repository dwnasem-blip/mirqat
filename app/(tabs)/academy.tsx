/**
 * Academy Screen
 */

import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { useI18n } from '@/hooks/useI18n';
import { SPACING } from '@/constants/spacing';
import { ThemedText } from '@/components/ThemedText';
import { Card } from '@/components/Card';

export default function AcademyScreen() {
  const { theme } = useTheme();
  const { t } = useI18n();

  const courses = [
    { title: 'تعلم القرآن', description: 'مسار شامل لتعلم القرآن الكريم وآداب تلاوته' },
    { title: 'أساسيات العقيدة', description: 'دروس في التوحيد والعقيدة الإسلامية' },
    { title: 'السيرة النبوية', description: 'حياة النبي محمد صلى الله عليه وسلم' },
    { title: 'الفقه الأساسي', description: 'مبادئ الفقه الإسلامي وأحكام العبادات' },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background.primary }}>
      <ScrollView contentContainerStyle={{ padding: SPACING.lg }}>
        <ThemedText variant="h2" color="primary" style={{ marginBottom: SPACING.xl }}>
          الأكاديمية الإسلامية
        </ThemedText>

        {courses.map((course, index) => (
          <Card key={index} style={{ marginBottom: SPACING.lg }}>
            <ThemedText variant="h5" color="primary" style={{ marginBottom: SPACING.md }}>
              {course.title}
            </ThemedText>
            <ThemedText variant="body-base" color="secondary">
              {course.description}
            </ThemedText>
          </Card>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
