import React, { useMemo, useState } from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '../../theme/ThemeContext';
import SvgIcon from '../../components/SvgIcon';
import { formatYMD } from '../../utils/date';
import { listEventsByDate } from '../../storage/events';
import styles from './index.less';

export default function DayView() {
  const { theme } = useTheme();
  const [cursor] = useState<Date>(new Date());
  const ymd = useMemo(() => formatYMD(cursor), [cursor]);
  const events = listEventsByDate(ymd);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SvgIcon name="day" size={20} color={theme.colors.primary} />
        <Text style={[styles.headerTitle, { color: theme.colors.text }]}>{ymd}</Text>
      </View>

      {events.length === 0 ? (
        <View style={styles.empty}>
          <SvgIcon name="event" size={48} color={theme.colors.secondary} />
          <Text style={[styles.emptyText, { color: theme.colors.text }]}>今天还没有日程～</Text>
          <Text style={[styles.emptyHint, { color: theme.colors.secondary }]}>
            点击右下角的"新建"按钮添加日程吧！
          </Text>
        </View>
      ) : (
        events.map(ev => (
          <View
            key={ev.id}
            style={[
              styles.eventCard,
              {
                backgroundColor: theme.colors.card,
                borderColor: theme.colors.border,
                shadowColor: theme.colors.primary,
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.1,
                shadowRadius: 4,
                elevation: 2
              }
            ]}
          >
            <View style={styles.eventTitleRow}>
              <SvgIcon name="event" size={16} color={theme.colors.primary} />
              <Text style={[styles.eventTitle, { color: theme.colors.text }]}>{ev.title}</Text>
            </View>

            <View style={styles.eventTimeRow}>
              <SvgIcon name="time" size={14} color={theme.colors.secondary} />
              <Text style={[styles.eventTimeText, { color: theme.colors.text }]}>
                {ev.start} - {ev.end}
              </Text>
            </View>

            {ev.description ? (
              <View style={styles.eventDescRow}>
                <SvgIcon name="edit" size={14} color={theme.colors.secondary} />
                <Text style={[styles.eventDescText, { color: theme.colors.text }]}>{ev.description}</Text>
              </View>
            ) : null}
          </View>
        ))
      )}
    </View>
  );
}

