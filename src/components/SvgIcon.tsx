import React from 'react';
import { View, Text } from 'react-native';

// SVG图标数据
const icons = {
  month: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="4" width="18" height="16" rx="2" stroke="#b18bd9" stroke-width="2" fill="#fde0f0"/>
    <path d="M3 8h18" stroke="#b18bd9" stroke-width="2"/>
    <path d="M8 2v4" stroke="#b18bd9" stroke-width="2" stroke-linecap="round"/>
    <path d="M16 2v4" stroke="#b18bd9" stroke-width="2" stroke-linecap="round"/>
    <circle cx="7" cy="12" r="1" fill="#f7a8d0"/>
    <circle cx="12" cy="12" r="1" fill="#f7a8d0"/>
    <circle cx="17" cy="12" r="1" fill="#f7a8d0"/>
    <circle cx="7" cy="16" r="1" fill="#f7a8d0"/>
    <circle cx="12" cy="16" r="1" fill="#f7a8d0"/>
    <circle cx="17" cy="16" r="1" fill="#f7a8d0"/>
  </svg>`,
  
  week: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="4" width="18" height="16" rx="2" stroke="#b18bd9" stroke-width="2" fill="#fde0f0"/>
    <path d="M3 8h18" stroke="#b18bd9" stroke-width="2"/>
    <path d="M8 2v4" stroke="#b18bd9" stroke-width="2" stroke-linecap="round"/>
    <path d="M16 2v4" stroke="#b18bd9" stroke-width="2" stroke-linecap="round"/>
    <rect x="4" y="10" width="2.5" height="6" rx="1" fill="#f7a8d0"/>
    <rect x="7.5" y="10" width="2.5" height="6" rx="1" fill="#f7a8d0"/>
    <rect x="11" y="10" width="2.5" height="6" rx="1" fill="#f7a8d0"/>
    <rect x="14.5" y="10" width="2.5" height="6" rx="1" fill="#f7a8d0"/>
    <rect x="18" y="10" width="2" height="6" rx="1" fill="#f7a8d0"/>
  </svg>`,
  
  day: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="4" width="18" height="16" rx="2" stroke="#b18bd9" stroke-width="2" fill="#fde0f0"/>
    <path d="M3 8h18" stroke="#b18bd9" stroke-width="2"/>
    <path d="M8 2v4" stroke="#b18bd9" stroke-width="2" stroke-linecap="round"/>
    <path d="M16 2v4" stroke="#b18bd9" stroke-width="2" stroke-linecap="round"/>
    <rect x="6" y="10" width="12" height="8" rx="1" fill="#f7a8d0"/>
    <circle cx="9" cy="13" r="1" fill="white"/>
    <circle cx="12" cy="13" r="1" fill="white"/>
    <circle cx="15" cy="13" r="1" fill="white"/>
    <circle cx="9" cy="16" r="1" fill="white"/>
    <circle cx="12" cy="16" r="1" fill="white"/>
    <circle cx="15" cy="16" r="1" fill="white"/>
  </svg>`,
  
  settings: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="3" stroke="#b18bd9" stroke-width="2" fill="#fde0f0"/>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" stroke="#b18bd9" stroke-width="2" fill="none"/>
  </svg>`,
  
  add: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="#b18bd9"/>
    <path d="M12 8v8" stroke="white" stroke-width="2" stroke-linecap="round"/>
    <path d="M8 12h8" stroke="white" stroke-width="2" stroke-linecap="round"/>
  </svg>`,
  
  edit: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" stroke="#b18bd9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" stroke="#b18bd9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,
  
  delete: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 6h18" stroke="#ff5d5d" stroke-width="2" stroke-linecap="round"/>
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" stroke="#ff5d5d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M10 11v6" stroke="#ff5d5d" stroke-width="2" stroke-linecap="round"/>
    <path d="M14 11v6" stroke="#ff5d5d" stroke-width="2" stroke-linecap="round"/>
  </svg>`,
  
  save: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" stroke="#b18bd9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <polyline points="17,21 17,13 7,13 7,21" stroke="#b18bd9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <polyline points="7,3 7,8 15,8" stroke="#b18bd9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,
  
  export: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" stroke="#b18bd9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <polyline points="7,10 12,15 17,10" stroke="#b18bd9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <line x1="12" y1="15" x2="12" y2="3" stroke="#b18bd9" stroke-width="2" stroke-linecap="round"/>
  </svg>`,
  
  import: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" stroke="#f7a8d0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <polyline points="17,10 12,5 7,10" stroke="#f7a8d0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <line x1="12" y1="5" x2="12" y2="15" stroke="#f7a8d0" stroke-width="2" stroke-linecap="round"/>
  </svg>`,

  year: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="9" stroke="#b18bd9" stroke-width="2" fill="#fde0f0"/>
    <path d="M12 6v6l4 2" stroke="#b18bd9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="12" cy="12" r="1.5" fill="#f7a8d0"/>
  </svg>`,
  
  time: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="9" stroke="#b18bd9" stroke-width="2" fill="#fde0f0"/>
    <path d="M12 7v5l3 2" stroke="#b18bd9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,
  
  prevMonth: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 18l-6-6 6-6" stroke="#b18bd9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,
  
  nextMonth: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 18l6-6-6-6" stroke="#b18bd9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,
  
  today: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="4" width="18" height="16" rx="2" stroke="#b18bd9" stroke-width="2" fill="#fde0f0"/>
    <path d="M3 8h18" stroke="#b18bd9" stroke-width="2"/>
    <path d="M8 2v4" stroke="#b18bd9" stroke-width="2" stroke-linecap="round"/>
    <path d="M16 2v4" stroke="#b18bd9" stroke-width="2" stroke-linecap="round"/>
    <circle cx="12" cy="12" r="3" fill="#f7a8d0"/>
    <path d="M12 9v3l2 2" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
  </svg>`,
  
  event: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="8" fill="#f7a8d0"/>
    <path d="M8 12h8" stroke="white" stroke-width="2" stroke-linecap="round"/>
    <path d="M12 8v8" stroke="white" stroke-width="2" stroke-linecap="round"/>
    <circle cx="12" cy="12" r="2" fill="white"/>
  </svg>`,
  
  themeCute: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="#fde0f0" stroke="#b18bd9" stroke-width="2"/>
    <circle cx="9" cy="9" r="1.5" fill="#f7a8d0"/>
    <circle cx="15" cy="9" r="1.5" fill="#f7a8d0"/>
    <path d="M8 14c0 2 1.5 3 4 3s4-1 4-3" stroke="#b18bd9" stroke-width="2" stroke-linecap="round"/>
    <path d="M12 2l1 3-3 1 3 1-1 3" stroke="#f7a8d0" stroke-width="1.5" fill="none"/>
  </svg>`,
  
  themeDark: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="#2a1f3d" stroke="#8b6ccf" stroke-width="2"/>
    <circle cx="9" cy="9" r="1.5" fill="#f7a8d0"/>
    <circle cx="15" cy="9" r="1.5" fill="#f7a8d0"/>
    <path d="M8 14c0 2 1.5 3 4 3s4-1 4-3" stroke="#8b6ccf" stroke-width="2" stroke-linecap="round"/>
    <path d="M12 2l1 3-3 1 3 1-1 3" stroke="#f7a8d0" stroke-width="1.5" fill="none"/>
    <circle cx="12" cy="12" r="3" fill="#3a2a57" opacity="0.3"/>
  </svg>`,
};

export type IconName = keyof typeof icons;

interface SvgIconProps {
  name: IconName;
  size?: number;
  color?: string;
}

// 由于React Native不支持直接渲染SVG，我们使用Unicode字符作为替代
const iconChars = {
  month: '📅',
  week: '📊',
  day: '📋',
  settings: '⚙️',
  add: '➕',
  edit: '✏️',
  delete: '🗑️',
  save: '💾',
  export: '📤',
  import: '📥',
  prevMonth: '◀️',
  nextMonth: '▶️',
  today: '📆',
  year: '🗓️',
  time: '⏰',
  event: '⭐',
  themeCute: '🌸',
  themeDark: '🌙',
} as Record<IconName, string>;

export default function SvgIcon({ name, size = 24, color }: SvgIconProps) {
  const iconChar = iconChars[name] || iconChars.event;
  
  return (
    <Text style={{ 
      fontSize: size, 
      color: color || '#b18bd9',
      textAlign: 'center'
    }}>
      {iconChar}
    </Text>
  );
}
