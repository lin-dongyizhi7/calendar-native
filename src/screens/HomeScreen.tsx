import React, { useMemo, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../theme/ThemeContext';
import '../styles/global.less';
import MonthView from '../views/MonthView';
import WeekView from '../views/WeekView';
import DayView from '../views/DayView';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../App';

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
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 12 }}>
        {tabs.map(tab => (
          <TouchableOpacity key={tab} onPress={() => setActiveTab(tab)} style={{ padding: 8 }}>
            <Text style={{ color: activeTab === tab ? theme.colors.primary : theme.colors.text }}>
              {tab === 'month' ? '月' : tab === 'week' ? '周' : '日'}
            </Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity onPress={() => navigation.navigate('Settings')} style={{ padding: 8 }}>
          <Text style={{ color: theme.colors.secondary }}>设置</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1 }}>
        {TabContent}
      </View>

      <View style={{ position: 'absolute', right: 16, bottom: 24 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('EventEditor')}
          style={{ backgroundColor: theme.colors.primary, borderRadius: 24, paddingVertical: 12, paddingHorizontal: 16 }}
        >
          <Text style={{ color: 'white', fontWeight: '700' }}>＋ 新建</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


