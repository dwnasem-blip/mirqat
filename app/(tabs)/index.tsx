/**
 * Home Screen
 */

import React from 'react';
import { ScrollView, SafeAreaView, View } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { useI18n } from '@/hooks/useI18n';
import { SPACING } from '@/constants/spacing';
import { ThemedText } from '@/components/ThemedText';
import { Card } from '@/components/Card';

export default function HomeScreen() {
  const { theme } = useTheme();
  const { t } = useI18n();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background.primary }}>
      <ScrollView
        contentContainerStyle={{
          paddingVertical: SPACING.lg,
          paddingHorizontal: SPACING.lg,
        }}
      >
        {/* Header */}
        <View style={{ marginBottom: SPACING.xl }}>
          <ThemedText variant="h2" color="primary">
            {t('mirqat.appName')}
          </ThemedText>
          <ThemedText variant="body-base" color="secondary" style={{ marginTop: SPACING.sm }}>
            {t('mirqat.appSubtitle')}
          </ThemedText>
        </View>

        {/* Verse of the Day Card */}
        <Card style={{ marginBottom: SPACING.lg }}>
          <ThemedText variant="h5" color="primary" style={{ marginBottom: SPACING.md }}>
            {t('home.verseOfDay')}
          </ThemedText>
          <ThemedText variant="body-base" color="secondary" style={{ marginBottom: SPACING.md }}>
            سورة الفاتحة - الآية 1
          </ThemedText>
          <ThemedText variant="body-base" color="primary" style={{ lineHeight: 28 }}>
            "الحمد لله رب العالمين"
          </ThemedText>
          <ThemedText variant="caption" color="tertiary" style={{ marginTop: SPACING.md }}>
            التفسير: حمد الله على تفرده بالربوبية والإلهية والأسماء الحسنى والصفات العليا.
          </ThemedText>
        </Card>

        {/* Hadith of the Day Card */}
        <Card style={{ marginBottom: SPACING.lg }}>
          <ThemedText variant="h5" color="primary" style={{ marginBottom: SPACING.md }}>
            {t('home.hadithOfDay')}
          </ThemedText>
          <ThemedText variant="body-sm" color="secondary" style={{ marginBottom: SPACING.md }}>
            عن أبي هريرة رضي الله عنه
          </ThemedText>
          <ThemedText variant="body-base" color="primary" style={{ lineHeight: 24 }}>
            "من آمن بالله واليوم الآخر فليقل خيراً أو ليصمت"
          </ThemedText>
          <ThemedText variant="caption" color="tertiary" style={{ marginTop: SPACING.md }}>
            درجة: صحيح | المصدر: صحيح البخاري
          </ThemedText>
        </Card>

        {/* Today's Adhkar Card */}
        <Card style={{ marginBottom: SPACING.lg }}>
          <ThemedText variant="h5" color="primary" style={{ marginBottom: SPACING.md }}>
            {t('home.todayAdkhar')}
          </ThemedText>
          <ThemedText variant="body-base" color="primary" style={{ marginBottom: SPACING.sm }}>
            "سبحان الله وبحمده عدد خلقه ورضا نفسه وزنة عرشه ومداد كلماته"
          </ThemedText>
          <ThemedText variant="body-base" color="primary" style={{ marginBottom: SPACING.sm }}>
            "اللهم إني أسألك العافية"
          </ThemedText>
          <ThemedText variant="body-base" color="primary">
            "ما شاء الله لا قوة إلا بالله"
          </ThemedText>
        </Card>

        {/* Upcoming Prayer Card */}
        <Card style={{ marginBottom: SPACING.lg, backgroundColor: theme.colors.primary.lightest }}>
          <ThemedText variant="h5" color="primary" style={{ marginBottom: SPACING.md }}>
            {t('home.upcomingPrayer')}
          </ThemedText>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <View>
              <ThemedText variant="h4" color="primary">
                12:30
              </ThemedText>
              <ThemedText variant="body-base" color="primary">
                الظهر
              </ThemedText>
            </View>
            <ThemedText variant="body-base" color="secondary">
              في 2 ساعة و 15 دقيقة
            </ThemedText>
          </View>
        </Card>

        {/* Your Progress Card */}
        <Card style={{ marginBottom: SPACING.lg }}>
          <ThemedText variant="h5" color="primary" style={{ marginBottom: SPACING.md }}>
            {t('home.yourProgress')}
          </ThemedText>
          <View style={{ gap: SPACING.md }}>
            <View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: SPACING.sm }}>
                <ThemedText variant="body-sm" color="secondary">
                  قراءة القرآن اليوم
                </ThemedText>
                <ThemedText variant="body-sm" color="primary" weight="bold">
                  3/5 آيات
                </ThemedText>
              </View>
              <View
                style={{
                  height: 8,
                  backgroundColor: theme.colors.background.tertiary,
                  borderRadius: 4,
                  overflow: 'hidden',
                }}
              >
                <View
                  style={{
                    height: '100%',
                    width: '60%',
                    backgroundColor: theme.colors.success,
                  }}
                />
              </View>
            </View>
            <View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: SPACING.sm }}>
                <ThemedText variant="body-sm" color="secondary">
                  الأذكار المكتملة
                </ThemedText>
                <ThemedText variant="body-sm" color="primary" weight="bold">
                  7/7 ✓
                </ThemedText>
              </View>
              <View
                style={{
                  height: 8,
                  backgroundColor: theme.colors.background.tertiary,
                  borderRadius: 4,
                  overflow: 'hidden',
                }}
              >
                <View
                  style={{
                    height: '100%',
                    width: '100%',
                    backgroundColor: theme.colors.success,
                  }}
                />
              </View>
            </View>
          </View>
        </Card>

        {/* Today's Quiz Card */}
        <Card>
          <ThemedText variant="h5" color="primary" style={{ marginBottom: SPACING.md }}>
            {t('home.todayQuiz')}
          </ThemedText>
          <ThemedText variant="body-base" color="secondary" style={{ marginBottom: SPACING.md }}>
            "كم عدد سور القرآن الكريم؟"
          </ThemedText>
          <ThemedText variant="body-sm" color="primary">
            اختبر معلوماتك الإسلامية وتعلم المزيد
          </ThemedText>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}
