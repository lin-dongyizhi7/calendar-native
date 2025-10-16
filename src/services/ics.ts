import { getAllEvents, setAllEvents } from '../storage/events';
import ICAL from 'ical.js';
import type { CalendarEvent } from '../types/event';

export async function exportICS(): Promise<string> {
  const events = await getAllEvents();
  const vcal = new ICAL.Component(['vcalendar', [], []]);
  vcal.updatePropertyWithValue('prodid', '-//Calendar Native//CN 1.0//EN');
  vcal.updatePropertyWithValue('version', '2.0');

  events.forEach((e: CalendarEvent) => {
    const vevent = new ICAL.Component('vevent');
    const event = new ICAL.Event(vevent);
    event.uid = e.id || `${Date.now()}@local`;
    try {
      event.startDate = ICAL.Time.fromString(e.start.replace(' ', 'T'));
      event.endDate = ICAL.Time.fromString(e.end.replace(' ', 'T'));
    } catch {}
    event.summary = e.title || '';
    if (e.description) {
      vevent.addPropertyWithValue('description', e.description);
    }
    vcal.addSubcomponent(vevent);
  });

  const data = vcal.toString();
  console.log('ICS Export:\n', data);
  return data;
}

export async function importICS(): Promise<void> {
  const sample = `BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\nSUMMARY:示例事件\nDTSTART:20250101T090000\nDTEND:20250101T100000\nEND:VEVENT\nEND:VCALENDAR`;
  const jcal = ICAL.parse(sample);
  const comp = new ICAL.Component(jcal);
  const vevents = comp.getAllSubcomponents('vevent');
  const list = (await getAllEvents()).slice();
  vevents.forEach(v => {
    const ev = new ICAL.Event(v);
    const start = ev.startDate ? ev.startDate.toString().replace('T', ' ') : '';
    const end = ev.endDate ? ev.endDate.toString().replace('T', ' ') : '';
    list.push({ id: `${Date.now()}_${Math.random()}`, title: ev.summary || '导入事件', start, end, description: '' } as CalendarEvent);
  });
  await setAllEvents(list);
}


