import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useTheme } from '../theme/ThemeContext';
import { exportICS, importICS } from '../services/ics';

export default function SettingsScreen() {
  const { theme, setThemeName } = useTheme();

  return (
    <View style={{ flex: 1, padding: 16, backgroundColor: theme.colors.background }}>
      <Text style={{ color: theme.colors.text, fontWeight: '700', fontSize: 18, marginBottom: 12 }}>主题</Text>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={() => setThemeName('cute')} style={{ backgroundColor: theme.colors.card, padding: 12, borderRadius: 8, marginRight: 12 }}>
          <Text style={{ color: theme.colors.text }}>粉紫可爱</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setThemeName('darkCute')} style={{ backgroundColor: theme.colors.card, padding: 12, borderRadius: 8 }}>
          <Text style={{ color: theme.colors.text }}>暗黑可爱</Text>
        </TouchableOpacity>
      </View>

      <Text style={{ color: theme.colors.text, fontWeight: '700', fontSize: 18, marginVertical: 16 }}>导入 / 导出</Text>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={exportICS} style={{ backgroundColor: theme.colors.primary, padding: 12, borderRadius: 8, marginRight: 12 }}>
          <Text style={{ color: 'white' }}>导出 .ics</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={importICS} style={{ backgroundColor: theme.colors.secondary, padding: 12, borderRadius: 8 }}>
          <Text style={{ color: 'white' }}>导入 .ics</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


