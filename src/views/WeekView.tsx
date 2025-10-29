import React, { useMemo, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useTheme } from '../theme/ThemeContext';
import SvgIcon from '../components/SvgIcon';
import { getWeekDates, formatYMD } from '../utils/date';
import { listEventsByDate } from '../storage/events';

export default function WeekView() {
  const { theme } = useTheme();
  const [cursor, setCursor] = useState<Date>(new Date());
  const days = useMemo(() => getWeekDates(cursor), [cursor]);

  return (
    <View style={{ flex: 1, padding: 12 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 16 }}>
        <SvgIcon name="week" size={20} color={theme.colors.primary} />
        <Text style={{ color: theme.colors.text, fontWeight: '700', fontSize: 16, marginLeft: 8 }}>
          第 {days[0].week} 周
        </Text>
      </View>
      
      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        {days.map((d, i) => {
          const events = listEventsByDate(formatYMD(d.date));
          return (
            <View key={i} style={{ 
              width: '14.2%', 
              alignItems: 'center',
              paddingVertical: 8,
              paddingHorizontal: 2
            }}>
              <Text style={{ 
                color: theme.colors.text, 
                fontWeight: '600',
                fontSize: 14
              }}>
                {d.date.getDate()}
              </Text>
              <Text style={{ 
                color: theme.colors.secondary, 
                fontSize: 10,
                marginTop: 2
              }}>
                {['日', '一', '二', '三', '四', '五', '六'][d.date.getDay()]}
              </Text>
              {events.map(ev => (
                <View key={ev.id} style={{ 
                  backgroundColor: theme.colors.primary, 
                  borderRadius: 8, 
                  paddingHorizontal: 6, 
                  paddingVertical: 3, 
                  marginTop: 4,
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: '100%'
                }}>
                  <SvgIcon name="event" size={8} color="white" />
                  <Text style={{ 
                    color: 'white', 
                    fontSize: 9, 
                    marginLeft: 2,
                    flex: 1
                  }} numberOfLines={1}>
                    {ev.title}
                  </Text>
                </View>
              ))}
            </View>
          );
        })}
      </View>
    </View>
  );
}


