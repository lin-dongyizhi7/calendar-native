import { useCallback, useEffect, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { getAllEvents } from '../storage/events';
import type { CalendarEvent } from '../types/event';

export function useEventsByDate(ymd: string) {
  const [events, setEvents] = useState<CalendarEvent[]>([]);

  const load = useCallback(async () => {
    const all = await getAllEvents();
    setEvents(all.filter(ev => (ev.start || '').startsWith(ymd)));
  }, [ymd]);

  useEffect(() => {
    load();
  }, [load]);

  useFocusEffect(
    useCallback(() => {
      load();
    }, [load])
  );

  return events;
}

export function useAllEvents() {
  const [events, setEvents] = useState<CalendarEvent[]>([]);

  const load = useCallback(async () => {
    const all = await getAllEvents();
    setEvents(all);
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  useFocusEffect(
    useCallback(() => {
      load();
    }, [load])
  );

  return events;
}

