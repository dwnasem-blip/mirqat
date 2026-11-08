/**
 * Profile Screen
 */

import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { useI18n } from '@/hooks/useI18n';
import { SPACING } from '@/constants/spacing';
import { ThemedText } from '@/components/ThemedText';
import { Card } from '@/components/Card';
import { Button } from '@/components/Button';

export default function ProfileScreen() {
  const { theme } = useTheme();
  const { t } = useI18n();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background.primary }}>
      <ScrollView contentContainerStyle={{ padding: SPACING.lg }}>
        <ThemedText variant="h2" color="primary" style={{ marginBottom: SPACING.xl }}>
          {t('navigation.profile')}
        </ThemedText>

        <Card style={{ marginBottom: SPACING.lg, alignItems: 'center' }}>
          <View
            style={{
              width: 80,
              height: 80,
              borderRadius: 40,
              backgroundColor: theme.colors.primary.light,
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: SPACING.lg,
            }}
          >
            <ThemedText variant="h1" color="primary">
              👤
            </ThemedText>
          </View>
          <ThemedText variant="h4" color="primary" style={{ marginBottom: SPACING.sm }}>
            المستخدم
          </ThemedText>
          <ThemedText variant="body-base" color="secondary" style={{ marginBottom: SPACING.lg }}>
            user@example.com
          </ThemedText>
          <Button
            title="تحرير الملف الشخصي"
            onPress={() => {}}
            variant="secondary"
            size="md"
            fullWidth
          />
        </Card>

        <Card style={{ marginBottom: SPACING.lg }}>
          <ThemedText variant="h5" color="primary" style={{ marginBottom: SPACING.md }}>
            الإحصائيات
          </ThemedText>
          <View style={{ gap: SPACING.md }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <ThemedText variant="body-base" color="secondary">
                الأيام المتتالية
              </ThemedText>
              <ThemedText variant="h5" color="primary">
                15
              </ThemedText>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <ThemedText variant="body-base" color="secondary">
                الآيات المقروءة
              </ThemedText>
              <ThemedText variant="h5" color="primary">
                450
              </ThemedText>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <ThemedText variant="body-base" color="secondary">
                النقاط المكتسبة
              </ThemedText>
              <ThemedText variant="h5" color="primary">
                2,500
              </ThemedText>
            </View>
          </View>
        </Card>

        <Card style={{ marginBottom: SPACING.lg }}>
          <ThemedText variant="h5" color="primary" style={{ marginBottom: SPACING.md }}>
            الإعدادات
          </ThemedText>
          <Button
            title={t('common.settings')}
            onPress={() => {}}
            variant="tertiary"
            size="md"
            fullWidth
            style={{ marginBottom: SPACING.md }}
          />
          <Button
            title="إدارة الاشتراك"
            onPress={() => {}}
            variant="tertiary"
            size="md"
            fullWidth
          />
        </Card>

        <Card>
          <Button
            title={t('common.logout')}
            onPress={() => {}}
            variant="tertiary"
            size="md"
            fullWidth
          />
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}
