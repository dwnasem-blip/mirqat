/**
 * MIRQAT String Constants
 * All UI strings for i18n support
 */

export const STRINGS = {
  // App Name
  appName: 'mirqat.appName',
  appSubtitle: 'mirqat.appSubtitle',

  // Navigation
  home: 'navigation.home',
  quran: 'navigation.quran',
  adhkar: 'navigation.adhkar',
  prayer: 'navigation.prayer',
  ai: 'navigation.ai',
  academy: 'navigation.academy',
  profile: 'navigation.profile',

  // Common Actions
  ok: 'common.ok',
  cancel: 'common.cancel',
  save: 'common.save',
  delete: 'common.delete',
  edit: 'common.edit',
  search: 'common.search',
  loading: 'common.loading',
  error: 'common.error',
  success: 'common.success',
  close: 'common.close',
  back: 'common.back',
  next: 'common.next',
  previous: 'common.previous',
  settings: 'common.settings',
  logout: 'common.logout',

  // Auth
  signIn: 'auth.signIn',
  signUp: 'auth.signUp',
  forgotPassword: 'auth.forgotPassword',
  resetPassword: 'auth.resetPassword',
  email: 'auth.email',
  password: 'auth.password',
  confirmPassword: 'auth.confirmPassword',

  // Home Screen
  verseOfDay: 'home.verseOfDay',
  hadithOfDay: 'home.hadithOfDay',
  todayAdkhar: 'home.todayAdkhar',
  upcomingPrayer: 'home.upcomingPrayer',
  yourProgress: 'home.yourProgress',
  todayQuiz: 'home.todayQuiz',

  // Quran
  quranTitle: 'quran.title',
  surah: 'quran.surah',
  ayah: 'quran.ayah',
  juz: 'quran.juz',
  hizb: 'quran.hizb',
  readMore: 'quran.readMore',
  tafsir: 'quran.tafsir',
  quranSearch: 'quran.search',
  bookmarks: 'quran.bookmarks',
  notes: 'quran.notes',

  // Prayer Times
  prayerTimes: 'prayer.prayerTimes',
  fajr: 'prayer.fajr',
  sunrise: 'prayer.sunrise',
  dhuhr: 'prayer.dhuhr',
  asr: 'prayer.asr',
  maghrib: 'prayer.maghrib',
  isha: 'prayer.isha',
  location: 'prayer.location',
  qibla: 'prayer.qibla',

  // Adhkar
  adhkarTitle: 'adhkar.title',
  morningAdhkar: 'adhkar.morningAdhkar',
  eveningAdhkar: 'adhkar.eveningAdhkar',
  sleepAdhkar: 'adhkar.sleepAdhkar',
  count: 'adhkar.count',

  // AI
  aiAssistant: 'ai.assistant',
  askQuestion: 'ai.askQuestion',
  source: 'ai.source',
  related: 'ai.related',

  // Errors
  networkError: 'errors.networkError',
  loadingError: 'errors.loadingError',
  tryAgain: 'errors.tryAgain',
  noData: 'errors.noData',
} as const;

export type StringKey = typeof STRINGS[keyof typeof STRINGS];
