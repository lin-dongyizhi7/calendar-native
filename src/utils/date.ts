export function pad2(n: number): string {
  return n < 10 ? `0${n}` : `${n}`;
}

export function formatYMD(d: Date): string {
  return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;
}

export function parseYMD(ymd: string): Date {
  const [y, m, d] = ymd.split('-').map(Number);
  return new Date(y, (m || 1) - 1, d || 1);
}

export function getMonthMatrix(cursor: Date): Date[][] {
  const year = cursor.getFullYear();
  const month = cursor.getMonth();
  const firstDay = new Date(year, month, 1);
  const start = new Date(firstDay);
  start.setDate(firstDay.getDate() - ((firstDay.getDay() + 6) % 7)); // 周一为首
  const matrix: Date[][] = [];
  for (let w = 0; w < 6; w++) {
    const week: Date[] = [];
    for (let i = 0; i < 7; i++) {
      const d = new Date(start);
      d.setDate(start.getDate() + w * 7 + i);
      week.push(d);
    }
    matrix.push(week);
  }
  return matrix;
}

export function getWeekDates(cursor: Date): { date: Date; week: number }[] {
  const d = new Date(cursor);
  const day = (d.getDay() + 6) % 7; // 周一=0
  const monday = new Date(d);
  monday.setDate(d.getDate() - day);
  const week: { date: Date; week: number }[] = [];
  for (let i = 0; i < 7; i++) {
    const di = new Date(monday);
    di.setDate(monday.getDate() + i);
    week.push({ date: di, week: getWeekNumber(di) });
  }
  return week;
}

export function getWeekNumber(d: Date): number {
  const target = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  const dayNr = (target.getUTCDay() + 6) % 7;
  target.setUTCDate(target.getUTCDate() - dayNr + 3);
  const firstThursday = new Date(Date.UTC(target.getUTCFullYear(), 0, 4));
  const diff = Number(target) - Number(firstThursday);
  return 1 + Math.round(diff / (7 * 24 * 3600 * 1000));
}


