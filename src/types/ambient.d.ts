declare module 'solarlunar' {
  export interface LunarInfo {
    dayCn: string;
    monthCn: string;
    festival?: string;
    lunarFestival?: string;
  }
  const api: {
    solar2lunar: (y: number, m: number, d: number) => LunarInfo;
  };
  export default api;
}

declare module 'ical.js' {
  export default ICAL;
  export const ICAL: any;
}

declare module '*.less' {
  const styles: { [key: string]: any };
  export default styles;
}


