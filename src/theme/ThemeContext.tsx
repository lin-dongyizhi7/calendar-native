import React, { createContext, useContext, useMemo, useState } from 'react';

type ThemeColors = {
  primary: string;
  secondary: string;
  background: string;
  text: string;
  card: string;
  border: string;
};

type Theme = {
  name: 'cute' | 'darkCute';
  colors: ThemeColors;
};

const pink = '#f7a8d0';
const purple = '#b18bd9';
const deepPurple = '#8b6ccf';
const lightPink = '#fde0f0';

const themes: Record<Theme['name'], Theme> = {
  cute: {
    name: 'cute',
    colors: {
      primary: purple,
      secondary: pink,
      background: lightPink,
      text: '#4c3a64',
      card: '#ffffff',
      border: '#f1d4ea'
    }
  },
  darkCute: {
    name: 'darkCute',
    colors: {
      primary: deepPurple,
      secondary: pink,
      background: '#2a1f3d',
      text: '#f6e9ff',
      card: '#3a2a57',
      border: '#644a89'
    }
  }
};

type ThemeContextValue = { theme: Theme; setThemeName: (name: Theme['name']) => void };

const ThemeContext = createContext<ThemeContextValue>({ theme: themes.cute, setThemeName: () => {} });

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [themeName, setThemeName] = useState<Theme['name']>('cute');
  const value = useMemo(() => ({ theme: themes[themeName], setThemeName }), [themeName]);
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  return useContext(ThemeContext);
}


