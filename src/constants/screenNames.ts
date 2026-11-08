/**
 * Screen Names for Navigation
 * Centralized screen route names to avoid typos
 */

export const SCREEN_NAMES = {
  // Tab Navigation
  HOME: 'index',
  QURAN: 'quran',
  ADHKAR: 'adhkar',
  PRAYER: 'prayer',
  AI: 'ai',
  ACADEMY: 'academy',
  PROFILE: 'profile',

  // Auth Screens
  SPLASH: 'splash',
  ONBOARDING: 'onboarding',
  SIGN_UP: 'signup',
  SIGN_IN: 'signin',
  FORGOT_PASSWORD: 'forgotPassword',
  RESET_PASSWORD: 'resetPassword',

  // Quran Screens
  QURAN_READER: 'quran/reader',
  QURAN_TAFSIR: 'quran/tafsir',
  QURAN_SEARCH: 'quran/search',
  QURAN_BOOKMARKS: 'quran/bookmarks',
  QURAN_NOTES: 'quran/notes',

  // Prayer Screens
  PRAYER_SETTINGS: 'prayer/settings',
  PRAYER_QIBLA: 'prayer/qibla',

  // AI Screens
  AI_CHAT: 'ai/chat',
  AI_HISTORY: 'ai/history',

  // Academy Screens
  ACADEMY_COURSES: 'academy/courses',
  ACADEMY_COURSE_DETAIL: 'academy/[courseId]',
  ACADEMY_LESSON: 'academy/lesson/[lessonId]',
  ACADEMY_QUIZ: 'academy/quiz/[quizId]',

  // Settings Screens
  SETTINGS: 'settings',
  LANGUAGE: 'settings/language',
  NOTIFICATIONS: 'settings/notifications',
  PRIVACY: 'settings/privacy',
  ABOUT: 'settings/about',

  // Subscription Screens
  SUBSCRIPTION: 'subscription',
  SUBSCRIPTION_MANAGE: 'subscription/manage',
} as const;

export type ScreenName = typeof SCREEN_NAMES[keyof typeof SCREEN_NAMES];
