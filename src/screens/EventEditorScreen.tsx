import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useTheme } from '../theme/ThemeContext';
import { saveEvent, getEventById, deleteEvent } from '../storage/events';
import { scheduleReminder, cancelReminderById } from '../services/reminder';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../App';
import type { NewCalendarEvent } from '../types/event';

type Nav = NativeStackNavigationProp<RootStackParamList, 'EventEditor'>;

export default function EventEditorScreen() {
  const { theme } = useTheme();
  const navigation = useNavigation<Nav>();
  const route = useRoute();
  const editingId = (route.params as { id?: string } | undefined)?.id;

  const [title, setTitle] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [desc, setDesc] = useState('');

  useEffect(() => {
    if (editingId) {
      (async () => {
        const e = await getEventById(editingId);
        if (e) {
          setTitle(e.title || '');
          setStart(e.start || '');
          setEnd(e.end || '');
          setDesc(e.description || '');
        }
      })();
    }
  }, [editingId]);

  async function onSave() {
    const event: NewCalendarEvent = { id: editingId, title, start, end, description: desc };
    await saveEvent(event);
    await scheduleReminder(event as any);
    navigation.goBack();
  }

  async function onDelete() {
    if (editingId) {
      await deleteEvent(editingId);
      await cancelReminderById(editingId);
    }
    navigation.goBack();
  }

  return (
    <View style={{ flex: 1, padding: 16, backgroundColor: theme.colors.background }}>
      <Text style={{ color: theme.colors.text, marginBottom: 8 }}>标题</Text>
      <TextInput value={title} onChangeText={setTitle} placeholder="输入标题" style={{ backgroundColor: '#fff', padding: 10, borderRadius: 8, marginBottom: 12 }} />

      <Text style={{ color: theme.colors.text, marginBottom: 8 }}>开始时间（YYYY-MM-DD HH:mm）</Text>
      <TextInput value={start} onChangeText={setStart} placeholder="2025-10-16 09:00" style={{ backgroundColor: '#fff', padding: 10, borderRadius: 8, marginBottom: 12 }} />

      <Text style={{ color: theme.colors.text, marginBottom: 8 }}>结束时间（YYYY-MM-DD HH:mm）</Text>
      <TextInput value={end} onChangeText={setEnd} placeholder="2025-10-16 10:00" style={{ backgroundColor: '#fff', padding: 10, borderRadius: 8, marginBottom: 12 }} />

      <Text style={{ color: theme.colors.text, marginBottom: 8 }}>备注</Text>
      <TextInput value={desc} onChangeText={setDesc} placeholder="备注..." style={{ backgroundColor: '#fff', padding: 10, borderRadius: 8, marginBottom: 12 }} multiline />

      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <TouchableOpacity onPress={onSave} style={{ backgroundColor: theme.colors.primary, paddingVertical: 12, paddingHorizontal: 18, borderRadius: 10 }}>
          <Text style={{ color: 'white', fontWeight: '700' }}>保存</Text>
        </TouchableOpacity>
        {editingId ? (
          <TouchableOpacity onPress={onDelete} style={{ backgroundColor: '#ff5d5d', paddingVertical: 12, paddingHorizontal: 18, borderRadius: 10 }}>
            <Text style={{ color: 'white', fontWeight: '700' }}>删除</Text>
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
}


