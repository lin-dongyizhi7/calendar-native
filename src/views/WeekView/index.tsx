import React, { useEffect, useMemo, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useTheme } from '../../theme/ThemeContext';
import SvgIcon from '../../components/SvgIcon';
import { getWeekDates, formatYMD, parseYMD } from '../../utils/date';
import { listEventsByDate } from '../../storage/events';
import styles from './index.less';

interface WeekViewProps {
  selectedDate: string;
  onSelectDate: (ymd: string) => void;
}

export default function WeekView({ selectedDate, onSelectDate }: WeekViewProps) {
  const { theme } = useTheme();
  const [cursor, setCursor] = useState<Date>(parseYMD(selectedDate));
  const days = useMemo(() => getWeekDates(cursor), [cursor]);
  const todayYMD = formatYMD(new Date());

  useEffect(() => {
    const target = parseYMD(selectedDate);
    const inSameWeek = getWeekDates(cursor).some(item => formatYMD(item.date) === selectedDate);
    if (!inSameWeek) {
      setCursor(target);
    }
  }, [cursor, selectedDate]);

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
          const dayYMD = formatYMD(d.date);
          const events = listEventsByDate(dayYMD);
          const isToday = dayYMD === todayYMD;
          const isSelected = dayYMD === selectedDate;
          return (
            <TouchableOpacity
              key={i}
              style={styles.dayColumn}
              onPress={() => onSelectDate(dayYMD)}
              activeOpacity={0.8}
            >
              <View
                style={[
                  styles.dayNumberWrapper,
                  isToday && {
                    borderColor: theme.colors.primary,
                    backgroundColor: theme.colors.primary + '22'
                  },
                  isSelected && {
                    borderColor: theme.colors.primary,
                    backgroundColor: theme.colors.primary + '33'
                  }
                ]}
              >
                <Text style={[styles.dayNumber, { color: theme.colors.text }]}>{d.date.getDate()}</Text>
              </View>
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
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

