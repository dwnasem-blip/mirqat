/**
 * Authentication Screen
 */

import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, TextInput } from 'react-native';
import { useRouter } from 'expo-router';
import { useTheme } from '@/hooks/useTheme';
import { SPACING, RADIUS } from '@/constants/spacing';
import { ThemedText } from '@/components/ThemedText';
import { Button } from '@/components/Button';

export default function AuthScreen() {
  const { theme } = useTheme();
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background.primary }}>
      <ScrollView contentContainerStyle={{ flex: 1, padding: SPACING.lg }}>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <View style={{ marginBottom: SPACING.xl }}>
            <ThemedText variant="h2" color="primary" style={{ marginBottom: SPACING.md }}>
              {isLogin ? 'تسجيل الدخول' : 'إنشاء حساب'}
            </ThemedText>
            <ThemedText variant="body-base" color="secondary">
              {isLogin
                ? 'استمتع بتجربة إسلامية شاملة'
                : 'انضم إلى ملايين المستخدمين'}
            </ThemedText>
          </View>

          <View style={{ marginBottom: SPACING.xl }}>
            <ThemedText
              variant="label"
              color="primary"
              style={{ marginBottom: SPACING.sm }}
            >
              البريد الإلكتروني
            </ThemedText>
            <TextInput
              style={{
                borderWidth: 1,
                borderColor: theme.colors.border.light,
                borderRadius: RADIUS.md,
                padding: SPACING.md,
                backgroundColor: theme.colors.background.secondary,
                color: theme.colors.text.primary,
                marginBottom: SPACING.lg,
              }}
              placeholder="you@example.com"
              placeholderTextColor={theme.colors.text.tertiary}
              value={email}
              onChangeText={setEmail}
              editable={false}
            />

            <ThemedText
              variant="label"
              color="primary"
              style={{ marginBottom: SPACING.sm }}
            >
              كلمة المرور
            </ThemedText>
            <TextInput
              style={{
                borderWidth: 1,
                borderColor: theme.colors.border.light,
                borderRadius: RADIUS.md,
                padding: SPACING.md,
                backgroundColor: theme.colors.background.secondary,
                color: theme.colors.text.primary,
              }}
              placeholder="••••••••"
              placeholderTextColor={theme.colors.text.tertiary}
              secureTextEntry
              value={password}
              onChangeText={setPassword}
              editable={false}
            />

            {isLogin && (
              <ThemedText
                variant="body-sm"
                color="info"
                style={{ marginTop: SPACING.md }}
              >
                هل نسيت كلمة المرور؟
              </ThemedText>
            )}
          </View>

          <Button
            title={isLogin ? 'دخول' : 'إنشاء حساب'}
            onPress={() => router.replace('../(tabs)')}
            variant="primary"
            size="lg"
            fullWidth
            style={{ marginBottom: SPACING.lg }}
          />

          <View style={{ alignItems: 'center' }}>
            <ThemedText variant="body-base" color="secondary">
              {isLogin ? 'ليس لديك حساب؟ ' : 'لديك حساب؟ '}
              <ThemedText
                variant="body-base"
                color="info"
                onPress={() => setIsLogin(!isLogin)}
              >
                {isLogin ? 'إنشاء حساب' : 'تسجيل الدخول'}
              </ThemedText>
            </ThemedText>
          </View>

          <View style={{ marginTop: SPACING.xl }}>
            <Button
              title="العودة"
              onPress={() => router.back()}
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
