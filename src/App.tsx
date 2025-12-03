import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider as PaperProvider, MD3LightTheme } from 'react-native-paper';
import type { Settings as PaperSettings } from 'react-native-paper/lib/typescript/core/settings';
import type { IconProps as PaperIconProps } from 'react-native-paper/lib/typescript/components/MaterialCommunityIcon';
import { ThemeProvider } from './theme/ThemeContext';
import SvgIcon, { IconName } from './components/SvgIcon';
import AppRoutes from './router/routes';

const paperTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#b18bd9'
  }
};

const paperIconMap: Record<string, IconName> = {
  'calendar-blank': 'month',
  'dots-vertical': 'event',
  plus: 'add',
  'chevron-left': 'prevMonth',
  'chevron-right': 'nextMonth',
  'account-circle': 'themeCute',
  cog: 'settings',
  'bell-plus': 'event',
  'plus-circle': 'add',
  'calendar-check': 'event',
  'account-sync': 'week',
  bell: 'event',
  information: 'today'
};

const paperSettings: PaperSettings = {
  icon: ({ name, size = 24, color }: PaperIconProps) => {
    const key = typeof name === 'string' ? name : undefined;
    const mapped = (key && paperIconMap[key]) || (key as IconName) || 'event';
    return <SvgIcon name={mapped} size={size} color={color} />;
  }
};

export default function App() {
  return (
    <BrowserRouter>
      <PaperProvider theme={paperTheme} settings={paperSettings}>
        <ThemeProvider>
          <AppRoutes />
        </ThemeProvider>
      </PaperProvider>
    </BrowserRouter>
  );
}


