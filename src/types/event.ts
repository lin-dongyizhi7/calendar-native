export interface CalendarEvent {
  id: string;
  title: string;
  start: string; // YYYY-MM-DD HH:mm
  end: string;   // YYYY-MM-DD HH:mm
  description?: string;
}

export type NewCalendarEvent = Omit<CalendarEvent, 'id'> & { id?: string };


