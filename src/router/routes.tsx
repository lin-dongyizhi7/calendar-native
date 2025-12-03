import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import YearScreen from '../screens/YearScreen';
import MonthScreen from '../screens/MonthScreen';
import WeekScreen from '../screens/WeekScreen';
import DayScreen from '../screens/DayScreen';
import EventEditorScreen from '../screens/EventEditorScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import TabLayout from './TabLayout';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<TabLayout />}>
        <Route index element={<Navigate to="/month" replace />} />
        <Route path="year" element={<YearScreen />} />
        <Route path="month" element={<MonthScreen />} />
        <Route path="week" element={<WeekScreen />} />
        <Route path="day" element={<DayScreen />} />
      </Route>
      <Route path="/event-editor" element={<EventEditorScreen />} />
      <Route path="/event-editor/:id" element={<EventEditorScreen />} />
      <Route path="/settings" element={<SettingsScreen />} />
      <Route path="/profile" element={<ProfileScreen />} />
    </Routes>
  );
}

