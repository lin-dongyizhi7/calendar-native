import React from 'react';
import { View, Text } from 'react-native';
import { DataTable, Button, IconButton } from 'react-native-paper';
import { useTheme } from '../../theme/ThemeContext';
import { formatYMD, parseYMD } from '../../utils/date';
import type { CalendarEvent } from '../../types/event';
import styles from './index.less';

interface DayViewProps {
  selectedDate: string;
  onSelectDate: (ymd: string) => void;
  events: CalendarEvent[];
  onAddPress?: () => void;
}

function shiftDay(ymd: string, diff: number) {
  const d = parseYMD(ymd);
  d.setDate(d.getDate() + diff);
  return formatYMD(d);
}

export default function DayView({ selectedDate, onSelectDate, events, onAddPress }: DayViewProps) {
  const { theme } = useTheme();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={[styles.headerTitle, { color: theme.colors.text }]}>{selectedDate}</Text>
        <View style={styles.headerActions}>
          <IconButton icon="chevron-left" onPress={() => onSelectDate(shiftDay(selectedDate, -1))} />
          <IconButton icon="chevron-right" onPress={() => onSelectDate(shiftDay(selectedDate, 1))} />
          <Button mode="outlined" compact onPress={() => onSelectDate(formatYMD(new Date()))}>
            今天
          </Button>
        </View>
      </View>

      <View style={styles.tableWrapper}>
        {events.length === 0 ? (
          <View style={styles.empty}>
            <Text style={[styles.emptyText, { color: theme.colors.text }]}>暂无日程，点击下方按钮新增～</Text>
          </View>
        ) : (
          <DataTable>
            <DataTable.Header>
              <DataTable.Title>时间</DataTable.Title>
              <DataTable.Title>标题</DataTable.Title>
              <DataTable.Title numeric>提醒</DataTable.Title>
            </DataTable.Header>
            {events.map(ev => (
              <DataTable.Row key={ev.id}>
                <DataTable.Cell>{`${(ev.start || '').split(' ')[1]}~${(ev.end || '').split(' ')[1]}`}</DataTable.Cell>
                <DataTable.Cell>{ev.title}</DataTable.Cell>
                <DataTable.Cell numeric>
                  {ev.reminderMinutesBefore != null ? `提前${ev.reminderMinutesBefore}分钟` : '无'}
                </DataTable.Cell>
              </DataTable.Row>
            ))}
          </DataTable>
        )}
      </View>

      <Button icon="plus" mode="contained" style={{ marginTop: 16 }} onPress={onAddPress}>
        新增事项
      </Button>
    </View>
  );
}

