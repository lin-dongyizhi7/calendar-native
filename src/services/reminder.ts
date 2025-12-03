import type { CalendarEvent } from '../types/event';

export async function scheduleReminder(event: Partial<CalendarEvent>) {
  if (!event || !event.start) return;
  try {
    const reminderInfo = event.reminderMinutesBefore != null
      ? `提前${event.reminderMinutesBefore}分钟`
      : '默认提醒';
    console.log('[Reminder] 已调度提醒: ', event.title, event.start, reminderInfo);
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


