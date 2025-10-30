import 'package:flutter/material.dart';

class SettingsScreen extends StatelessWidget {
  static const String routeName = '/settings';
  const SettingsScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('设置')),
      body: ListView(
        children: const [
          ListTile(
            title: Text('主题'),
            subtitle: Text('跟随系统（可在后续实现切换）'),
          ),
          ListTile(
            title: Text('导入/导出 (.ics)'),
            subtitle: Text('后续加入 ics 服务实现'),
          ),
        ],
      ),
    );
  }
}


