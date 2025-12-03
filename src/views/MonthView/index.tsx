import React, { useEffect, useMemo, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useTheme } from '../../theme/ThemeContext';
import SvgIcon from '../../components/SvgIcon';
import { listEventsByDate } from '../../storage/events';
import { getMonthMatrix, formatYMD, parseYMD } from '../../utils/date';
import { lunarForDate } from '../../utils/lunar';
import styles from './index.less';

interface MonthViewProps {
  selectedDate: string;
  onSelectDate: (ymd: string) => void;
}

export default function MonthView({ selectedDate, onSelectDate }: MonthViewProps) {
  const { theme } = useTheme();
  const [cursor, setCursor] = useState<Date>(new Date());
  const matrix = useMemo(() => getMonthMatrix(cursor), [cursor]);
  const todayYMD = formatYMD(new Date());

  useEffect(() => {
    const target = parseYMD(selectedDate);
    if (target.getMonth() !== cursor.getMonth() || target.getFullYear() !== cursor.getFullYear()) {
      setCursor(new Date(target.getFullYear(), target.getMonth(), 1));
    }
  }, [cursor, selectedDate]);

  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        <TouchableOpacity
          onPress={() => setCursor(prev => new Date(prev.getFullYear(), prev.getMonth() - 1, 1))}
          style={[
            styles.navButton,
            {
              backgroundColor: theme.colors.card,
              borderColor: theme.colors.border
            }
          ]}
        >
          <SvgIcon name="prevMonth" size={16} color={theme.colors.text} />
          <Text style={[styles.navButtonText, { color: theme.colors.text }]}>上月</Text>
        </TouchableOpacity>

        <View style={styles.titleWrapper}>
          <SvgIcon name="today" size={20} color={theme.colors.primary} />
          <Text style={[styles.titleText, { color: theme.colors.text }]}>
            {cursor.getFullYear()}年{cursor.getMonth() + 1}月
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => setCursor(prev => new Date(prev.getFullYear(), prev.getMonth() + 1, 1))}
          style={[
            styles.navButton,
            {
              backgroundColor: theme.colors.card,
              borderColor: theme.colors.border
            }
          ]}
        >
          <Text
            style={[
              styles.navButtonText,
              { color: theme.colors.text, marginLeft: 0, marginRight: 4 }
            ]}
          >
            下月
          </Text>
          <SvgIcon name="nextMonth" size={16} color={theme.colors.text} />
        </TouchableOpacity>
      </View>
      {matrix.map((week, i) => (
        <View key={i} style={styles.weekRow}>
          {week.map((d, j) => {
            const ymd = formatYMD(d);
            const events = listEventsByDate(ymd);
            const lunar = lunarForDate(d);
            const isToday = ymd === todayYMD;
            const isCurrentMonth = d.getMonth() === cursor.getMonth();
            const isSelected = ymd === selectedDate;
            return (
              <TouchableOpacity
                key={j}
                style={styles.dayCell}
                onPress={() => onSelectDate(ymd)}
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
                  <Text
                    style={[
                      styles.dayNumber,
                      { color: theme.colors.text },
                      !isCurrentMonth && styles.dayMuted
                    ]}
                  >
                    {d.getDate()}
                  </Text>
                </View>
                <Text
                  style={[
                    styles.lunarText,
                    { color: theme.colors.secondary },
                    !isCurrentMonth && styles.dayMuted
                  ]}
                >
                  {lunar.dayName}
                </Text>
                {events.length ? (
                  <View
                    style={[
                      styles.eventBadge,
                      {
                        backgroundColor: theme.colors.primary
                      }
                    ]}
                  >
                    <SvgIcon name="event" size={8} color="white" />
                    <Text style={styles.eventBadgeText}>{events.length}</Text>
                  </View>
                ) : null}
              </TouchableOpacity>
            );
          })}
        </View>
      ))}
    </View>
  );
}

