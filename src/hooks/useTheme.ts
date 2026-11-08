/**
 * Theme Hook for managing dark/light mode
 */

import { useEffect, useState, useCallback } from 'react';
import { useColorScheme } from 'react-native';
import { createTheme } from '../styles/theme';

export type ThemeMode = 'light' | 'dark' | 'system';

let currentThemeMode: ThemeMode = 'system';

export const useTheme = () => {
  const systemColorScheme = useColorScheme();
  const [themeMode, setThemeModeState] = useState<ThemeMode>('system');
  const [isDark, setIsDark] = useState(systemColorScheme === 'dark');

  useEffect(() => {
    currentThemeMode = themeMode;

    if (themeMode === 'system') {
      setIsDark(systemColorScheme === 'dark');
    } else {
      setIsDark(themeMode === 'dark');
    }
  }, [themeMode, systemColorScheme]);

  const setThemeMode = useCallback((mode: ThemeMode) => {
    setThemeModeState(mode);
  }, []);

  const theme = createTheme(isDark);

  return {
    theme,
    isDark,
    themeMode,
    setThemeMode,
  };
};

export const getThemeMode = (): ThemeMode => currentThemeMode;
export const setGlobalThemeMode = (mode: ThemeMode) => {
  currentThemeMode = mode;
};
