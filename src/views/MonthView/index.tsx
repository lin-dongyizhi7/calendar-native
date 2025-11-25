import React, { useMemo, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useTheme } from '../../theme/ThemeContext';
import SvgIcon from '../../components/SvgIcon';
import { listEventsByDate } from '../../storage/events';
import { getMonthMatrix, formatYMD } from '../../utils/date';
import { lunarForDate } from '../../utils/lunar';
import styles from './index.less';

export default function MonthView() {
  const { theme } = useTheme();
  const [cursor, setCursor] = useState<Date>(new Date());
  const matrix = useMemo(() => getMonthMatrix(cursor), [cursor]);

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
            return (
              <View key={j} style={styles.dayCell}>
                <Text style={[styles.dayNumber, { color: theme.colors.text }]}>{d.getDate()}</Text>
                <Text style={[styles.lunarText, { color: theme.colors.secondary }]}>{lunar.dayName}</Text>
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
              </View>
            );
          })}
        </View>
      ))}
    </View>
  );
}

