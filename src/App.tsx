import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ThemeProvider } from './theme/ThemeContext';
import HomeScreen from './screens/HomeScreen';
import EventEditorScreen from './screens/EventEditorScreen';
import SettingsScreen from './screens/SettingsScreen';

export type RootStackParamList = {
  Home: undefined;
  EventEditor: { id?: string } | undefined;
  Settings: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white'
  }
};

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer theme={navTheme}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: '可爱日历' }} />
          <Stack.Screen name="EventEditor" component={EventEditorScreen} options={{ title: '编辑日程' }} />
          <Stack.Screen name="Settings" component={SettingsScreen} options={{ title: '设置' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}


