import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import CalendarLayout from '../CalendarLayout';
import WeekView from '../../views/WeekView';
import EventListPanel from '../../components/EventListPanel';
import { useEventsByDate } from '../../hooks/useEvents';
import { formatYMD } from '../../utils/date';

export default function WeekScreen() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const today = formatYMD(new Date());
  const [selectedDate, setSelectedDate] = useState(searchParams.get('date') || today);
  const events = useEventsByDate(selectedDate);

  const handleAdd = () => {
    navigate(`/event-editor?defaultDate=${selectedDate}`);
  };

  return (
    <CalendarLayout title="周视图" onAddPress={handleAdd}>
      <WeekView selectedDate={selectedDate} onSelectDate={setSelectedDate} />
      <EventListPanel dateLabel={selectedDate} events={events} onAddPress={handleAdd} />
    </CalendarLayout>
  );
}

