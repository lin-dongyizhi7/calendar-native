import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { IconButton } from 'react-native-paper';
import styles from './index.less';

interface MonthStat {
  month: number; // 0-11
  count: number;
}

interface YearViewProps {
  year: number;
  stats: MonthStat[];
  onPrevYear: () => void;
  onNextYear: () => void;
  onSelectMonth: (monthIndex: number) => void;
}

export default function YearView({ year, stats, onPrevYear, onNextYear, onSelectMonth }: YearViewProps) {
  const months = Array.from({ length: 12 }).map((_, idx) => ({
    month: idx,
    label: `${idx + 1}月`,
    count: stats.find(s => s.month === idx)?.count || 0
  }));

  return (
    <View style={styles.container}>
      <View style={styles.yearHeader}>
        <IconButton icon="chevron-left" onPress={onPrevYear} />
        <Text style={{ fontSize: 20, fontWeight: '700' }}>{year} 年</Text>
        <IconButton icon="chevron-right" onPress={onNextYear} />
      </View>
      <View style={styles.grid}>
        {months.map(item => (
          <TouchableOpacity
            key={item.month}
            style={styles.card}
            onPress={() => onSelectMonth(item.month)}
            activeOpacity={0.9}
          >
            <Text style={styles.cardTitle}>{item.label}</Text>
            <Text style={styles.cardCount}>{item.count} 个日程</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

