import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CalendarLayout from '../CalendarLayout';
import YearView from '../../views/YearView';
import EventListPanel from '../../components/EventListPanel';
import { useAllEvents, useEventsByDate } from '../../hooks/useEvents';
import { formatYMD, pad2 } from '../../utils/date';

export default function YearScreen() {
  const navigate = useNavigate();
  const now = new Date();
  const [year, setYear] = useState(now.getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(now.getMonth());
  const selectedDate = `${year}-${pad2(selectedMonth + 1)}-01`;
  const allEvents = useAllEvents();
  const events = useEventsByDate(selectedDate);

  const stats = useMemo(() => {
    const base = Array.from({ length: 12 }, (_, idx) => ({ month: idx, count: 0 }));
    allEvents.forEach(ev => {
      if (!ev.start) return;
      const [y, m] = ev.start.split('-').map(Number);
      if (y === year && m) {
        base[m - 1].count += 1;
      }
    });
    return base;
  }, [allEvents, year]);

  const handleSelectMonth = (monthIndex: number) => {
    setSelectedMonth(monthIndex);
    const targetDate = `${year}-${pad2(monthIndex + 1)}-01`;
    navigate(`/month?date=${targetDate}`);
  };

  const handleAdd = () => {
    navigate(`/event-editor?defaultDate=${selectedDate}`);
  };

  return (
    <CalendarLayout title="年视图" onAddPress={handleAdd}>
      <YearView
        year={year}
        stats={stats}
        onPrevYear={() => setYear(prev => prev - 1)}
        onNextYear={() => setYear(prev => prev + 1)}
        onSelectMonth={handleSelectMonth}
      />
      <EventListPanel dateLabel={`${year}年${selectedMonth + 1}月`} events={events} onAddPress={handleAdd} />
    </CalendarLayout>
  );
}

