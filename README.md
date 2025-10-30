# 📅 Calendar Flutter（Web / iOS / Android）

项目已从 React Native 迁移为 Flutter 实现，Flutter 工程位于 `flutter_app/`。

## 🚀 快速开始（Flutter）

### 环境要求

- Flutter SDK（3.4+）
- Android Studio（Android 构建）
- Xcode（iOS 构建，需在 macOS 上）

### 初始化

```bash
cd flutter_app
flutter doctor
flutter config --enable-web
flutter create .   # 生成 android/ios/web 目录
flutter pub get
```

### 运行

```bash
# Web（Chrome）
flutter run -d chrome

# Android（示例设备 ID 以实际为准）
flutter run -d emulator-5554

# iOS（需在 macOS 上）
flutter run -d ios
```

## 📦 目录结构（Flutter）

```text
flutter_app/
├── lib/
│   ├── main.dart                  # 入口，路由
│   ├── theme/app_theme.dart       # 主题（亮/暗）
│   ├── screens/                   # 页面：Home/Settings/Editor
│   ├── views/                     # 视图：Month/Week/Day
│   ├── models/event.dart          # 事件模型
│   └── services/                  # 存储、ICS、提醒占位
├── pubspec.yaml                   # 依赖配置（intl、provider、flutter_svg）
└── analysis_options.yaml          # Lints 配置
```

## 🎨 资源与图标

- 旧 `pubilc/` 下 SVG 将迁移至 `flutter_app/assets/icons/`。
- 迁移后在 `pubspec.yaml` 中启用：

```yaml
flutter:
  uses-material-design: true
  assets:
    - assets/icons/
```

## 🧭 功能现状

- 月/周/日视图最小可用版本（可切换/翻页）
- 主题支持（明/暗，Material 3）
- 事件模型与内存存储占位
- ICS/提醒服务占位

> 后续逐步完善：事件渲染与编辑器、ICS 导入导出、提醒通知、图标接入、农历算法等。
