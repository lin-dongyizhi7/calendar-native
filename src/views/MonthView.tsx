import React, { useMemo, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useTheme } from '../theme/ThemeContext';
import { listEventsByDate } from '../storage/events';
import { getMonthMatrix, formatYMD } from '../utils/date';
import { lunarForDate } from '../utils/lunar';

export default function MonthView() {
  const { theme } = useTheme();
  const [cursor, setCursor] = useState<Date>(new Date());
  const matrix = useMemo(() => getMonthMatrix(cursor), [cursor]);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 8 }}>
        <TouchableOpacity onPress={() => setCursor(prev => new Date(prev.getFullYear(), prev.getMonth() - 1, 1))}><Text style={{ color: theme.colors.text }}>上月</Text></TouchableOpacity>
        <Text style={{ color: theme.colors.text, fontWeight: '700' }}>{cursor.getFullYear()}年{cursor.getMonth() + 1}月</Text>
        <TouchableOpacity onPress={() => setCursor(prev => new Date(prev.getFullYear(), prev.getMonth() + 1, 1))}><Text style={{ color: theme.colors.text }}>下月</Text></TouchableOpacity>
      </View>
      {matrix.map((week, i) => (
        <View key={i} style={{ flexDirection: 'row', justifyContent: 'space-around', paddingVertical: 8 }}>
          {week.map((d, j) => {
            const ymd = formatYMD(d);
            const events = listEventsByDate(ymd);
            const lunar = lunarForDate(d);
            return (
              <View key={j} style={{ width: '14.2%', alignItems: 'center' }}>
                <Text style={{ color: theme.colors.text }}>{d.getDate()}</Text>
                <Text style={{ color: theme.colors.secondary, fontSize: 10 }}>{lunar.dayName}</Text>
                {events.length ? (
                  <View style={{ backgroundColor: theme.colors.primary, borderRadius: 6, paddingHorizontal: 4, marginTop: 2 }}>
                    <Text style={{ color: 'white', fontSize: 10 }}>{events.length}条</Text>
                  </View>
                ) : null}
              </View>
            );
          })}
        </View>
      ))}
    </View>
  );
}


