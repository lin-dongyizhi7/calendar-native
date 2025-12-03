import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { useTheme } from '../../theme/ThemeContext';
import SvgIcon from '../../components/SvgIcon';
import { saveEvent, getEventById, deleteEvent } from '../../storage/events';
import { scheduleReminder, cancelReminderById } from '../../services/reminder';
import type { NewCalendarEvent } from '../../types/event';
import { formatYMD } from '../../utils/date';
import styles from './index.less';

export default function EventEditorScreen() {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const { id } = useParams<{ id?: string }>();
  const [searchParams] = useSearchParams();
  const editingId = id;

  const [title, setTitle] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [desc, setDesc] = useState('');
  const defaultDate = searchParams.get('defaultDate');
  const defaultReminder = searchParams.get('defaultReminder');
  const [reminderMinutes, setReminderMinutes] = useState<number | undefined>(
    defaultReminder ? parseInt(defaultReminder, 10) : 30
  );

  useEffect(() => {
    if (editingId) {
      (async () => {
        const e = await getEventById(editingId);
        if (e) {
          setTitle(e.title || '');
          setStart(e.start || '');
          setEnd(e.end || '');
          setDesc(e.description || '');
          setReminderMinutes(e.reminderMinutesBefore);
        }
      })();
    } else {
      const baseDate = defaultDate || formatYMD(new Date());
      setStart(`${baseDate} 09:00`);
      setEnd(`${baseDate} 10:00`);
    }
  }, [editingId, defaultDate]);

  async function onSave() {
    const event: NewCalendarEvent = {
      id: editingId,
      title,
      start,
      end,
      description: desc,
      reminderMinutesBefore: reminderMinutes
    };
    await saveEvent(event);
    await scheduleReminder(event as any);
    navigate(-1);
  }

  async function onDelete() {
    if (editingId) {
      await deleteEvent(editingId);
      await cancelReminderById(editingId);
    }
    navigate(-1);
  }

  return (
    <View style={[styles.editorScreen, { backgroundColor: theme.colors.background }]}>
      <View style={styles.header}>
        <SvgIcon name="edit" size={20} color={theme.colors.primary} />
        <Text style={[styles.headerTitle, { color: theme.colors.text }]}>
          {editingId ? '编辑日程' : '新建日程'}
        </Text>
      </View>

      <View style={styles.field}>
        <Text style={[styles.fieldLabel, { color: theme.colors.text }]}>📝 标题</Text>
        <TextInput
          value={title}
          onChangeText={setTitle}
          placeholder="输入标题"
          style={[
            styles.input,
            {
              backgroundColor: theme.colors.card,
              borderColor: theme.colors.border,
              color: theme.colors.text
            }
          ]}
        />
      </View>

      <View style={styles.field}>
        <Text style={[styles.fieldLabel, { color: theme.colors.text }]}>🕐 开始时间（YYYY-MM-DD HH:mm）</Text>
        <TextInput
          value={start}
          onChangeText={setStart}
          placeholder="2025-10-16 09:00"
          style={[
            styles.input,
            {
              backgroundColor: theme.colors.card,
              borderColor: theme.colors.border,
              color: theme.colors.text
            }
          ]}
        />
      </View>

      <View style={styles.field}>
        <Text style={[styles.fieldLabel, { color: theme.colors.text }]}>🕐 结束时间（YYYY-MM-DD HH:mm）</Text>
        <TextInput
          value={end}
          onChangeText={setEnd}
          placeholder="2025-10-16 10:00"
          style={[
            styles.input,
            {
              backgroundColor: theme.colors.card,
              borderColor: theme.colors.border,
              color: theme.colors.text
            }
          ]}
        />
      </View>

      <View style={styles.field}>
        <Text style={[styles.fieldLabel, { color: theme.colors.text }]}>📄 备注</Text>
        <TextInput
          value={desc}
          onChangeText={setDesc}
          placeholder="备注..."
          style={[
            styles.input,
            styles.textarea,
            {
              backgroundColor: theme.colors.card,
              borderColor: theme.colors.border,
              color: theme.colors.text
            }
          ]}
          multiline
        />
      </View>

      <View style={styles.field}>
        <Text style={[styles.fieldLabel, { color: theme.colors.text }]}>⏰ 提醒（提前分钟）</Text>
        <TextInput
          value={reminderMinutes != null ? String(reminderMinutes) : ''}
          onChangeText={val => {
            const num = Number(val);
            setReminderMinutes(Number.isNaN(num) ? undefined : num);
          }}
          placeholder="30"
          keyboardType="numeric"
          style={[
            styles.input,
            {
              backgroundColor: theme.colors.card,
              borderColor: theme.colors.border,
              color: theme.colors.text
            }
          ]}
        />
      </View>

      <View style={styles.actions}>
        <TouchableOpacity
          onPress={onSave}
          style={[
            styles.actionButton,
            {
              backgroundColor: theme.colors.primary,
              marginRight: editingId ? 8 : 0
            }
          ]}
        >
          <SvgIcon name="save" size={16} color="white" />
          <Text style={[styles.actionText, { color: 'white' }]}>保存</Text>
        </TouchableOpacity>
        {editingId ? (
          <TouchableOpacity
            onPress={onDelete}
            style={[
              styles.actionButton,
              {
                backgroundColor: '#ff5d5d',
                marginLeft: 8
              }
            ]}
          >
            <SvgIcon name="delete" size={16} color="white" />
            <Text style={[styles.actionText, { color: 'white' }]}>删除</Text>
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
}

