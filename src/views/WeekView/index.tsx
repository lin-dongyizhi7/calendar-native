import React, { useMemo, useState } from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '../../theme/ThemeContext';
import SvgIcon from '../../components/SvgIcon';
import { getWeekDates, formatYMD } from '../../utils/date';
import { listEventsByDate } from '../../storage/events';
import styles from './index.less';

export default function WeekView() {
  const { theme } = useTheme();
  const [cursor] = useState<Date>(new Date());
  const days = useMemo(() => getWeekDates(cursor), [cursor]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SvgIcon name="week" size={20} color={theme.colors.primary} />
        <Text style={[styles.headerTitle, { color: theme.colors.text }]}>
          第 {days[0].week} 周
        </Text>
      </View>

      <View style={styles.weekRow}>
        {days.map((d, i) => {
          const events = listEventsByDate(formatYMD(d.date));
          return (
            <View key={i} style={styles.dayColumn}>
              <Text style={[styles.dayNumber, { color: theme.colors.text }]}>{d.date.getDate()}</Text>
              <Text style={[styles.weekdayText, { color: theme.colors.secondary }]}>
                {['日', '一', '二', '三', '四', '五', '六'][d.date.getDay()]}
              </Text>
              {events.map(ev => (
                <View
                  key={ev.id}
                  style={[
                    styles.eventChip,
                    {
                      backgroundColor: theme.colors.primary
                    }
                  ]}
                >
                  <SvgIcon name="event" size={8} color="white" />
                  <Text style={styles.eventChipText} numberOfLines={1}>
                    {ev.title}
                  </Text>
                </View>
              ))}
            </View>
          );
        })}
      </View>
    </View>
  );
}

