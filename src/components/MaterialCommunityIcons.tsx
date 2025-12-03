import React from 'react';
import SvgIcon, { IconName } from './SvgIcon';

type Props = {
  name: IconName | string;
  color?: string;
  size?: number;
};

export default function MaterialCommunityIcons({ name, color, size = 24 }: Props) {
  const iconName = (name as IconName) || 'event';
  return <SvgIcon name={iconName} color={color} size={size} />;
}

