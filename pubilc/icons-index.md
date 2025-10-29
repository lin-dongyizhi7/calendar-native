# 日历应用 SVG 图标索引

本目录包含了可爱日历应用所需的所有 SVG 图标文件。

## 导航图标
- `icon-month.svg` - 月视图图标
- `icon-week.svg` - 周视图图标  
- `icon-day.svg` - 日视图图标
- `icon-settings.svg` - 设置图标

## 操作图标
- `icon-add.svg` - 添加事件图标
- `icon-edit.svg` - 编辑图标
- `icon-delete.svg` - 删除图标
- `icon-save.svg` - 保存图标
- `icon-export.svg` - 导出图标
- `icon-import.svg` - 导入图标

## 日历相关图标
- `icon-prev-month.svg` - 上个月图标
- `icon-next-month.svg` - 下个月图标
- `icon-today.svg` - 今天图标
- `icon-event.svg` - 事件图标
- `icon-event-dot.svg` - 事件小圆点图标
- `icon-calendar.svg` - 通用日历图标

## 主题图标
- `icon-theme-cute.svg` - 粉紫可爱主题图标
- `icon-theme-dark.svg` - 暗黑可爱主题图标

## 实用图标
- `icon-time.svg` - 时间图标
- `icon-date.svg` - 日期图标
- `icon-reminder.svg` - 提醒图标
- `icon-lunar.svg` - 农历图标

## 使用说明

所有图标都采用 24x24 的尺寸，使用应用的主题色彩：
- 主色调：`#b18bd9` (紫色)
- 辅助色：`#f7a8d0` (粉色)
- 背景色：`#fde0f0` (浅粉色)
- 文字色：`#4c3a64` (深紫色)

在 React Native 中，可以通过以下方式使用这些图标：

```tsx
import { SvgXml } from 'react-native-svg';

// 使用示例
<SvgXml xml={require('./pubilc/icon-add.svg')} width={24} height={24} />
```

或者使用 react-native-vector-icons 库来管理这些图标。
