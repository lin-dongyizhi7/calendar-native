import React, { useMemo, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useTheme } from '../theme/ThemeContext';
import SvgIcon from '../components/SvgIcon';
import { listEventsByDate } from '../storage/events';
import { getMonthMatrix, formatYMD } from '../utils/date';
import { lunarForDate } from '../utils/lunar';

export default function MonthView() {
  const { theme } = useTheme();
  const [cursor, setCursor] = useState<Date>(new Date());
  const matrix = useMemo(() => getMonthMatrix(cursor), [cursor]);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 12 }}>
        <TouchableOpacity 
          onPress={() => setCursor(prev => new Date(prev.getFullYear(), prev.getMonth() - 1, 1))}
          style={{ 
            flexDirection: 'row', 
            alignItems: 'center', 
            padding: 8,
            backgroundColor: theme.colors.card,
            borderRadius: 8,
            borderWidth: 1,
            borderColor: theme.colors.border
          }}
        >
          <SvgIcon name="prevMonth" size={16} color={theme.colors.text} />
          <Text style={{ color: theme.colors.text, marginLeft: 4, fontWeight: '600' }}>上月</Text>
        </TouchableOpacity>
        
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <SvgIcon name="today" size={20} color={theme.colors.primary} />
          <Text style={{ color: theme.colors.text, fontWeight: '700', fontSize: 16, marginLeft: 8 }}>
            {cursor.getFullYear()}年{cursor.getMonth() + 1}月
          </Text>
        </View>
        
        <TouchableOpacity 
          onPress={() => setCursor(prev => new Date(prev.getFullYear(), prev.getMonth() + 1, 1))}
          style={{ 
            flexDirection: 'row', 
            alignItems: 'center', 
            padding: 8,
            backgroundColor: theme.colors.card,
            borderRadius: 8,
            borderWidth: 1,
            borderColor: theme.colors.border
          }}
        >
          <Text style={{ color: theme.colors.text, marginRight: 4, fontWeight: '600' }}>下月</Text>
          <SvgIcon name="nextMonth" size={16} color={theme.colors.text} />
        </TouchableOpacity>
      </View>
      {matrix.map((week, i) => (
        <View key={i} style={{ flexDirection: 'row', justifyContent: 'space-around', paddingVertical: 8 }}>
          {week.map((d, j) => {
            const ymd = formatYMD(d);
            const events = listEventsByDate(ymd);
            const lunar = lunarForDate(d);
            return (
              <View key={j} style={{ 
                width: '14.2%', 
                alignItems: 'center',
                paddingVertical: 4,
                paddingHorizontal: 2
              }}>
                <Text style={{ 
                  color: theme.colors.text, 
                  fontWeight: '600',
                  fontSize: 14
                }}>
                  {d.getDate()}
                </Text>
                <Text style={{ 
                  color: theme.colors.secondary, 
                  fontSize: 9,
                  marginTop: 2
                }}>
                  {lunar.dayName}
                </Text>
                {events.length ? (
                  <View style={{ 
                    backgroundColor: theme.colors.primary, 
                    borderRadius: 8, 
                    paddingHorizontal: 6, 
                    paddingVertical: 2, 
                    marginTop: 4,
                    flexDirection: 'row',
                    alignItems: 'center'
                  }}>
                    <SvgIcon name="event" size={8} color="white" />
                    <Text style={{ 
                      color: 'white', 
                      fontSize: 9, 
                      marginLeft: 2,
                      fontWeight: '600'
                    }}>
                      {events.length}
                    </Text>
                  </View>
                ) : null}
              </View>
            );
          })}
        </View>
      ))}
    </View>
  );
}


