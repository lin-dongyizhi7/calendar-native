import React, { useMemo, useState } from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '../theme/ThemeContext';
import SvgIcon from '../components/SvgIcon';
import { formatYMD } from '../utils/date';
import { listEventsByDate } from '../storage/events';

export default function DayView() {
  const { theme } = useTheme();
  const [cursor] = useState<Date>(new Date());
  const ymd = useMemo(() => formatYMD(cursor), [cursor]);
  const events = listEventsByDate(ymd);

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 16 }}>
        <SvgIcon name="day" size={20} color={theme.colors.primary} />
        <Text style={{ color: theme.colors.text, fontWeight: '700', fontSize: 16, marginLeft: 8 }}>
          {ymd}
        </Text>
      </View>
      
      {events.length === 0 ? (
        <View style={{ 
          flex: 1, 
          justifyContent: 'center', 
          alignItems: 'center',
          paddingVertical: 40
        }}>
          <SvgIcon name="event" size={48} color={theme.colors.secondary} />
          <Text style={{ 
            color: theme.colors.text, 
            fontSize: 16,
            marginTop: 16,
            textAlign: 'center'
          }}>
            今天还没有日程～
          </Text>
          <Text style={{ 
            color: theme.colors.secondary, 
            fontSize: 14,
            marginTop: 8,
            textAlign: 'center'
          }}>
            点击右下角的"新建"按钮添加日程吧！
          </Text>
        </View>
      ) : (
        events.map(ev => (
          <View key={ev.id} style={{ 
            backgroundColor: theme.colors.card, 
            borderRadius: 12, 
            padding: 16, 
            marginBottom: 12, 
            borderColor: theme.colors.border, 
            borderWidth: 1,
            shadowColor: theme.colors.primary,
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 2
          }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
              <SvgIcon name="event" size={16} color={theme.colors.primary} />
              <Text style={{ 
                color: theme.colors.text, 
                fontWeight: '700', 
                fontSize: 16,
                marginLeft: 8,
                flex: 1
              }}>
                {ev.title}
              </Text>
            </View>
            
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
              <SvgIcon name="time" size={14} color={theme.colors.secondary} />
              <Text style={{ 
                color: theme.colors.text, 
                marginLeft: 6,
                fontSize: 14
              }}>
                {ev.start} - {ev.end}
              </Text>
            </View>
            
            {ev.description ? (
              <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
                <SvgIcon name="edit" size={14} color={theme.colors.secondary} />
                <Text style={{ 
                  color: theme.colors.text, 
                  marginLeft: 6,
                  fontSize: 14,
                  flex: 1,
                  lineHeight: 20
                }}>
                  {ev.description}
                </Text>
              </View>
            ) : null}
          </View>
        ))
      )}
    </View>
  );
}


