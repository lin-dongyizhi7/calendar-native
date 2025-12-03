import React from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { View, TouchableOpacity, Text } from 'react-native';
import { useTheme } from '../theme/ThemeContext';
import SvgIcon from '../components/SvgIcon';
import styles from './TabLayout.less';

const tabs = [
  { key: 'year', label: '年', icon: 'year', path: '/year' },
  { key: 'month', label: '月', icon: 'month', path: '/month' },
  { key: 'week', label: '周', icon: 'week', path: '/week' },
  { key: 'day', label: '日', icon: 'day', path: '/day' }
];

export default function TabLayout() {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const activeTab = tabs.find(tab => location.pathname === tab.path)?.key || 'month';

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={styles.content}>
        <Outlet />
      </View>
      <View style={[styles.tabBar, { borderTopColor: '#ddd', backgroundColor: '#fff' }]}>
        {tabs.map(tab => {
          const isActive = activeTab === tab.key;
          return (
            <TouchableOpacity
              key={tab.key}
              onPress={() => navigate(tab.path)}
              style={[styles.tabButton, isActive && { backgroundColor: theme.colors.primary + '20' }]}
            >
              <SvgIcon
                name={tab.icon as any}
                size={24}
                color={isActive ? theme.colors.primary : theme.colors.text + '77'}
              />
              <Text
                style={[
                  styles.tabLabel,
                  { color: isActive ? theme.colors.primary : theme.colors.text + '77' }
                ]}
              >
                {tab.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

