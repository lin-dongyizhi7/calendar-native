import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useTheme } from '../../theme/ThemeContext';
import SvgIcon from '../../components/SvgIcon';
import { exportICS, importICS } from '../../services/ics';
import styles from './index.less';

export default function SettingsScreen() {
  const { theme, setThemeName } = useTheme();

  return (
    <View style={[styles.settingsScreen, { backgroundColor: theme.colors.background }]}>
      <View style={styles.header}>
        <SvgIcon name="settings" size={24} color={theme.colors.primary} />
        <Text style={[styles.headerTitle, { color: theme.colors.text }]}>设置</Text>
      </View>

      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>🎨 主题选择</Text>
        <View style={styles.themeRow}>
          <TouchableOpacity
            onPress={() => setThemeName('cute')}
            style={[
              styles.themeCard,
              {
                backgroundColor: theme.colors.card,
                borderWidth: theme.name === 'cute' ? 2 : 1,
                borderColor: theme.name === 'cute' ? theme.colors.primary : theme.colors.border
              }
            ]}
          >
            <SvgIcon name="themeCute" size={32} color={theme.colors.primary} />
            <Text style={{ color: theme.colors.text, marginTop: 8, fontWeight: '600' }}>粉紫可爱</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setThemeName('darkCute')}
            style={[
              styles.themeCard,
              {
                backgroundColor: theme.colors.card,
                borderWidth: theme.name === 'darkCute' ? 2 : 1,
                borderColor: theme.name === 'darkCute' ? theme.colors.primary : theme.colors.border
              }
            ]}
          >
            <SvgIcon name="themeDark" size={32} color={theme.colors.primary} />
            <Text style={{ color: theme.colors.text, marginTop: 8, fontWeight: '600' }}>暗黑可爱</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>📁 导入 / 导出</Text>
        <View style={styles.transferRow}>
          <TouchableOpacity
            onPress={exportICS}
            style={[styles.transferButton, { backgroundColor: theme.colors.primary }]}
          >
            <SvgIcon name="export" size={20} color="white" />
            <Text style={[styles.transferText, { color: 'white' }]}>导出 .ics</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={importICS}
            style={[styles.transferButton, { backgroundColor: theme.colors.secondary }]}
          >
            <SvgIcon name="import" size={20} color="white" />
            <Text style={[styles.transferText, { color: 'white' }]}>导入 .ics</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

