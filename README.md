# Calendar Native 可爱粉紫风格日历 App

本项目是一个使用 React Native 实现的日历应用，参考 RFC5545（iCalendar）实现事件导入导出，提供月/周/日视图、日程增删改查、提醒占位实现、农历显示、主题切换（粉紫可爱风），使用 less 编写样式，并通过路由进行页面组织。

## 功能
- 月/周/日视图浏览
- 日程添加、编辑、查看、删除（本地存储）
- 提醒功能（抽象接口与占位实现，需后续原生集成）
- RFC5545 事件导入/导出（.ics）
- 农历显示（solarlunar）
- 主题切换（粉紫可爱风）
- less 样式

## 开发
1. 安装依赖
   - 使用 npm 或 yarn 安装依赖
2. 运行 Metro 与工程
   - Android/iOS 需按照 React Native 官方文档完成基础环境与原生配置

> 提醒：通知功能需要原生模块（如 react-native-push-notification、Notifee 等）进一步配置方可在后台触发。本项目提供统一抽象与前台占位实现，便于后续接入。
