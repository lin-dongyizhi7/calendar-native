import React, { useMemo, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../../theme/ThemeContext';
import SvgIcon from '../../components/SvgIcon';
import '../../styles/global.less';
import MonthView from '../../views/MonthView';
import WeekView from '../../views/WeekView';
import DayView from '../../views/DayView';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../App';
import styles from './index.less';

type Nav = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const tabs = ['month', 'week', 'day'] as const;
type Tab = typeof tabs[number];

export default function HomeScreen() {
  const { theme } = useTheme();
  const navigation = useNavigation<Nav>();
  const [activeTab, setActiveTab] = useState<Tab>('month');

  const TabContent = useMemo(() => {
    if (activeTab === 'month') return <MonthView />;
    if (activeTab === 'week') return <WeekView />;
    return <DayView />;
  }, [activeTab]);

  return (
    <View style={[styles.homeScreen, { backgroundColor: theme.colors.background }]}>
      <View style={styles.tabBar}>
        {tabs.map(tab => (
          <TouchableOpacity
            key={tab}
            onPress={() => setActiveTab(tab)}
            style={[
              styles.tabButton,
              { backgroundColor: activeTab === tab ? theme.colors.primary + '20' : 'transparent' }
            ]}
          >
            <SvgIcon
              name={tab as any}
              size={20}
              color={activeTab === tab ? theme.colors.primary : theme.colors.text}
            />
            <Text
              style={[
                styles.tabLabel,
                { color: activeTab === tab ? theme.colors.primary : theme.colors.text }
              ]}
            >
              {tab === 'month' ? '月' : tab === 'week' ? '周' : '日'}
            </Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity
          onPress={() => navigation.navigate('Settings')}
          style={[
            styles.settingsButton,
            { backgroundColor: theme.colors.secondary + '20' }
          ]}
        >
          <SvgIcon name="settings" size={20} color={theme.colors.secondary} />
          <Text style={[styles.tabLabel, { color: theme.colors.secondary }]}>设置</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>{TabContent}</View>

      <View style={styles.fabWrapper}>
        <TouchableOpacity
          onPress={() => navigation.navigate('EventEditor')}
          style={[
            styles.fabButton,
            {
              backgroundColor: theme.colors.primary,
              shadowColor: theme.colors.primary,
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.3,
              shadowRadius: 4,
              elevation: 4
            }
          ]}
        >
          <SvgIcon name="add" size={16} color="white" />
          <Text style={[styles.fabText, { color: 'white' }]}>新建</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

