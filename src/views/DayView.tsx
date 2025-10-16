import React, { useMemo, useState } from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '../theme/ThemeContext';
import { formatYMD } from '../utils/date';
import { listEventsByDate } from '../storage/events';

export default function DayView() {
  const { theme } = useTheme();
  const [cursor] = useState<Date>(new Date());
  const ymd = useMemo(() => formatYMD(cursor), [cursor]);
  const events = listEventsByDate(ymd);

  return (
    <View style={{ flex: 1, padding: 12 }}>
      <Text style={{ color: theme.colors.text, fontWeight: '700', marginBottom: 8 }}>{ymd}</Text>
      {events.length === 0 ? (
        <Text style={{ color: theme.colors.text }}>今天还没有日程～</Text>
      ) : (
        events.map(ev => (
          <View key={ev.id} style={{ backgroundColor: theme.colors.card, borderRadius: 10, padding: 12, marginBottom: 8, borderColor: theme.colors.border, borderWidth: 1 }}>
            <Text style={{ color: theme.colors.text, fontWeight: '700' }}>{ev.title}</Text>
            <Text style={{ color: theme.colors.text, marginTop: 4 }}>{ev.start} - {ev.end}</Text>
            {ev.description ? <Text style={{ color: theme.colors.text, marginTop: 4 }}>{ev.description}</Text> : null}
          </View>
        ))
      )}
    </View>
  );
}


