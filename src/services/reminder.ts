import type { CalendarEvent } from '../types/event';

export async function scheduleReminder(event: Partial<CalendarEvent>) {
  if (!event || !event.start) return;
  try {
    console.log('[Reminder] 已调度提醒: ', event.title, event.start);
  } catch (e) {
    console.warn('scheduleReminder error', e);
  }
}

export async function cancelReminderById(id: string) {
  try {
    console.log('[Reminder] 取消提醒: ', id);
  } catch (e) {
    console.warn('cancelReminderById error', e);
  }
}


