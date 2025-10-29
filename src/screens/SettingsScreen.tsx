import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useTheme } from '../theme/ThemeContext';
import SvgIcon from '../components/SvgIcon';
import { exportICS, importICS } from '../services/ics';

export default function SettingsScreen() {
  const { theme, setThemeName } = useTheme();

  return (
    <View style={{ flex: 1, padding: 16, backgroundColor: theme.colors.background }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 16 }}>
        <SvgIcon name="settings" size={24} color={theme.colors.primary} />
        <Text style={{ color: theme.colors.text, fontWeight: '700', fontSize: 20, marginLeft: 8 }}>设置</Text>
      </View>

      <View style={{ marginBottom: 24 }}>
        <Text style={{ color: theme.colors.text, fontWeight: '700', fontSize: 18, marginBottom: 12 }}>🎨 主题选择</Text>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity 
            onPress={() => setThemeName('cute')} 
            style={{ 
              backgroundColor: theme.colors.card, 
              padding: 16, 
              borderRadius: 12, 
              marginRight: 12,
              flex: 1,
              alignItems: 'center',
              borderWidth: theme.name === 'cute' ? 2 : 1,
              borderColor: theme.name === 'cute' ? theme.colors.primary : theme.colors.border
            }}
          >
            <SvgIcon name="themeCute" size={32} color={theme.colors.primary} />
            <Text style={{ color: theme.colors.text, marginTop: 8, fontWeight: '600' }}>粉紫可爱</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => setThemeName('darkCute')} 
            style={{ 
              backgroundColor: theme.colors.card, 
              padding: 16, 
              borderRadius: 12,
              flex: 1,
              alignItems: 'center',
              borderWidth: theme.name === 'darkCute' ? 2 : 1,
              borderColor: theme.name === 'darkCute' ? theme.colors.primary : theme.colors.border
            }}
          >
            <SvgIcon name="themeDark" size={32} color={theme.colors.primary} />
            <Text style={{ color: theme.colors.text, marginTop: 8, fontWeight: '600' }}>暗黑可爱</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ marginBottom: 24 }}>
        <Text style={{ color: theme.colors.text, fontWeight: '700', fontSize: 18, marginBottom: 12 }}>📁 导入 / 导出</Text>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity 
            onPress={exportICS} 
            style={{ 
              backgroundColor: theme.colors.primary, 
              padding: 16, 
              borderRadius: 12, 
              marginRight: 12,
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <SvgIcon name="export" size={20} color="white" />
            <Text style={{ color: 'white', marginLeft: 8, fontWeight: '600' }}>导出 .ics</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={importICS} 
            style={{ 
              backgroundColor: theme.colors.secondary, 
              padding: 16, 
              borderRadius: 12,
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <SvgIcon name="import" size={20} color="white" />
            <Text style={{ color: 'white', marginLeft: 8, fontWeight: '600' }}>导入 .ics</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}


