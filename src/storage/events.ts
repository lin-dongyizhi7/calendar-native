import AsyncStorage from '@react-native-async-storage/async-storage';
import type { CalendarEvent, NewCalendarEvent } from '../types/event';

const KEY = 'cn_events_v1';

export async function getAllEvents(): Promise<CalendarEvent[]> {
  const raw = await AsyncStorage.getItem(KEY);
  if (!raw) return [];
  try {
    return JSON.parse(raw) as CalendarEvent[];
  } catch {
    return [];
  }
}

export async function setAllEvents(events: CalendarEvent[]): Promise<void> {
  await AsyncStorage.setItem(KEY, JSON.stringify(events));
  (global as any).__EVENTS_SNAPSHOT__ = events;
}

export async function saveEvent(event: NewCalendarEvent): Promise<void> {
  const events = await getAllEvents();
  if (event.id) {
    const idx = events.findIndex(e => e.id === event.id);
    if (idx >= 0) events[idx] = { ...events[idx], ...(event as CalendarEvent) };
    else events.push({ ...(event as CalendarEvent) });
  } else {
    const id = `${Date.now()}`;
    events.push({ ...(event as CalendarEvent), id });
  }
  await setAllEvents(events);
}

export async function deleteEvent(id: string): Promise<void> {
  const events = await getAllEvents();
  const filtered = events.filter(e => e.id !== id);
  await setAllEvents(filtered);
}

export async function getEventById(id: string): Promise<CalendarEvent | undefined> {
  const events = await getAllEvents();
  return events.find(e => e.id === id);
}

export function listEventsByDate(ymd: string): CalendarEvent[] {
  const snapshot: CalendarEvent[] = (global as any).__EVENTS_SNAPSHOT__ || [];
  if (!snapshot.length) {
    getAllEvents().then(list => ((global as any).__EVENTS_SNAPSHOT__ = list));
    return [];
  }
  return snapshot.filter(e => (e.start || '').startsWith(ymd));
}


