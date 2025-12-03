import React from 'react';
import { View } from 'react-native';
import { Button, Card, List, Text } from 'react-native-paper';
import type { CalendarEvent } from '../types/event';

interface EventListPanelProps {
  dateLabel: string;
  events: CalendarEvent[];
  onAddPress?: () => void;
}

function formatTime(event: CalendarEvent) {
  const start = (event.start || '').split(' ')[1] || '';
  const end = (event.end || '').split(' ')[1] || '';
  return `${start} - ${end}`;
}

export default function EventListPanel({ dateLabel, events, onAddPress }: EventListPanelProps) {
  return (
    <Card mode="elevated" style={{ marginTop: 12 }}>
      <Card.Title
        title={`日程 · ${dateLabel}`}
        right={props => (
          <Button compact onPress={onAddPress} {...props}>
            新增
          </Button>
        )}
      />
      <Card.Content>
        {events.length === 0 ? (
          <Text style={{ opacity: 0.6 }}>暂无日程，点击右上角新增一个吧～</Text>
        ) : (
          events.map(ev => (
            <View key={ev.id} style={{ marginBottom: 4 }}>
              <List.Item
                title={ev.title}
                description={`${formatTime(ev)}${ev.description ? ` · ${ev.description}` : ''}`}
                left={props => <List.Icon {...props} icon="calendar-check" />}
              />
            </View>
          ))
        )}
      </Card.Content>
    </Card>
  );
}

