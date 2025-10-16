import solarlunar from 'solarlunar';

export function lunarForDate(date: Date) {
  const y = date.getFullYear();
  const m = date.getMonth() + 1;
  const d = date.getDate();
  const info = solarlunar.solar2lunar(y, m, d);
  return {
    dayName: info.dayCn as string,
    monthName: info.monthCn as string,
    festival: (info.festival || info.lunarFestival || '') as string
  };
}


