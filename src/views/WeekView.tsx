import React, { useMemo, useState } from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '../theme/ThemeContext';
import { getWeekDates, formatYMD } from '../utils/date';
import { listEventsByDate } from '../storage/events';

export default function WeekView() {
  const { theme } = useTheme();
  const [cursor, setCursor] = useState<Date>(new Date());
  const days = useMemo(() => getWeekDates(cursor), [cursor]);

  return (
    <View style={{ flex: 1, padding: 8 }}>
      <Text style={{ color: theme.colors.text, fontWeight: '700', marginBottom: 8 }}>第 {days[0].week} 周</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        {days.map((d, i) => {
          const events = listEventsByDate(formatYMD(d.date));
          return (
            <View key={i} style={{ width: '14.2%', alignItems: 'center' }}>
              <Text style={{ color: theme.colors.text }}>{d.date.getDate()}</Text>
              {events.map(ev => (
                <View key={ev.id} style={{ backgroundColor: theme.colors.primary, borderRadius: 6, paddingHorizontal: 4, marginTop: 2 }}>
                  <Text style={{ color: 'white', fontSize: 10 }} numberOfLines={1}>{ev.title}</Text>
                </View>
              ))}
            </View>
          );
        })}
      </View>
    </View>
  );
}


