# 📅 Calendar Native 可爱粉紫风格日历 App

一个使用 React Native 实现的现代化日历应用，采用可爱的粉紫色主题设计，提供完整的日程管理功能和优雅的用户体验。

## ✨ 主要功能

### 📱 多视图浏览

- **月视图** - 完整的月份日历网格，支持农历显示
- **周视图** - 一周日程概览，清晰展示每日安排
- **日视图** - 详细的单日日程，支持事件详情查看

### 🎨 精美UI设计

- **可爱图标系统** - 22个精心设计的SVG图标，提升用户体验
- **粉紫主题** - 温馨的粉紫色配色方案
- **暗黑模式** - 支持暗黑可爱主题切换
- **响应式布局** - 适配不同屏幕尺寸

### 📝 日程管理

- **CRUD操作** - 完整的日程增删改查功能
- **本地存储** - 使用AsyncStorage持久化数据
- **时间管理** - 支持开始/结束时间设置
- **备注功能** - 详细的日程描述和备注

### 🔔 提醒系统

- **抽象接口** - 统一的提醒功能抽象层
- **占位实现** - 前台提醒功能实现
- **扩展性** - 便于后续集成原生推送通知

### 📁 数据导入导出

- **RFC5545标准** - 完全兼容iCalendar格式
- **.ics文件支持** - 标准的事件导入导出
- **跨平台兼容** - 与其他日历应用无缝对接

### 🌙 农历支持

- **农历显示** - 基于solarlunar库的农历计算
- **传统节日** - 支持中国传统节日显示
- **文化融合** - 现代科技与传统文化的完美结合

## 🎯 技术特色

### 🛠️ 技术栈

- **React Native 0.75.3** - 跨平台移动应用开发
- **TypeScript** - 类型安全的JavaScript超集
- **React Navigation 6** - 现代化的导航解决方案
- **Less** - CSS预处理器，提升样式开发效率
- **AsyncStorage** - 本地数据持久化

### 🎨 设计系统

- **SVG图标** - 22个Unicode字符图标，零依赖实现
- **主题系统** - 支持多主题切换和自定义
- **组件化** - 高度可复用的UI组件
- **响应式** - 适配不同设备和屏幕尺寸

### 📦 项目结构

```text
src/
├── components/          # 可复用组件
│   └── SvgIcon.tsx     # SVG图标组件
├── screens/            # 页面组件
│   ├── HomeScreen.tsx      # 主页面
│   ├── EventEditorScreen.tsx # 事件编辑
│   └── SettingsScreen.tsx   # 设置页面
├── views/              # 视图组件
│   ├── MonthView.tsx       # 月视图
│   ├── WeekView.tsx        # 周视图
│   └── DayView.tsx         # 日视图
├── theme/              # 主题系统
├── storage/            # 数据存储
├── services/           # 业务服务
├── utils/              # 工具函数
└── styles/             # 样式文件
```

## 🚀 快速开始

### 环境要求

- Node.js >= 16.0.0
- React Native CLI
- Android Studio (Android开发)
- Xcode (iOS开发)

### 安装步骤

1. **克隆项目**

   ```bash
   git clone <repository-url>
   cd calendar-native
   ```
2. **安装依赖**

   ```bash
   npm install
   # 或
   yarn install
   ```
3. **iOS额外配置** (仅iOS)

   ```bash
   cd ios && pod install && cd ..
   ```
4. **启动开发服务器**

   ```bash
   npm start
   # 或
   yarn start
   ```
5. **运行应用**

   ```bash
   # Android
   npm run android
   # 或
   yarn android

   # iOS
   npm run ios
   # 或
   yarn ios
   ```

## 🎨 图标系统

项目包含22个精心设计的SVG图标，涵盖所有主要功能：

### 导航图标

- 📅 月视图、📊 周视图、📋 日视图、⚙️ 设置

### 操作图标

- ➕ 添加、✏️ 编辑、🗑️ 删除、💾 保存、📤 导出、📥 导入

### 日历图标

- ◀️ 上个月、▶️ 下个月、📆 今天、⭐ 事件

### 主题图标

- 🌸 粉紫可爱、🌙 暗黑可爱

### 使用方式

```tsx
import SvgIcon from '../components/SvgIcon';

// 基本使用
<SvgIcon name="add" size={24} color="#b18bd9" />

// 在按钮中使用
<TouchableOpacity>
  <SvgIcon name="save" size={16} color="white" />
  <Text>保存</Text>
</TouchableOpacity>
```

## 🎯 主题系统

### 粉紫可爱主题

- 主色调：`#b18bd9` (紫色)
- 辅助色：`#f7a8d0` (粉色)
- 背景色：`#fde0f0` (浅粉色)

### 暗黑可爱主题

- 主色调：`#8b6ccf` (深紫色)
- 辅助色：`#f7a8d0` (粉色)
- 背景色：`#2a1f3d` (深色)

## 📱 功能截图

### 主页面

- 多视图切换（月/周/日）
- 直观的图标导航
- 悬浮新建按钮

### 事件编辑

- 清晰的表单设计
- 图标化的输入提示
- 美观的操作按钮

### 设置页面

- 可视化主题选择
- 导入导出功能
- 统一的视觉风格

## 🔧 开发说明

### 项目结构

- `src/components/` - 可复用组件
- `src/screens/` - 页面组件
- `src/views/` - 视图组件
- `src/theme/` - 主题配置
- `src/storage/` - 数据存储
- `src/services/` - 业务服务
- `src/utils/` - 工具函数
- `src/styles/` - 样式文件
