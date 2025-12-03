import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import CalendarLayout from '../CalendarLayout';
import DayView from '../../views/DayView';
import { useEventsByDate } from '../../hooks/useEvents';
import { formatYMD } from '../../utils/date';

export default function DayScreen() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const today = formatYMD(new Date());
  const [selectedDate, setSelectedDate] = useState(searchParams.get('date') || today);
  const events = useEventsByDate(selectedDate);

  const handleAdd = () => {
    navigate(`/event-editor?defaultDate=${selectedDate}`);
  };

  return (
    <CalendarLayout title="日视图" onAddPress={handleAdd}>
      <DayView selectedDate={selectedDate} onSelectDate={setSelectedDate} events={events} onAddPress={handleAdd} />
    </CalendarLayout>
  );
}

