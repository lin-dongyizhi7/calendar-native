import 'package:flutter/material.dart';

class EventEditorScreen extends StatelessWidget {
  static const String routeName = '/editor';
  const EventEditorScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('编辑事件')),
      body: Padding(
        padding: const EdgeInsets.all(16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const TextField(decoration: InputDecoration(labelText: '标题')),
            const SizedBox(height: 12),
            const TextField(decoration: InputDecoration(labelText: '地点')),
            const SizedBox(height: 12),
            Row(
              children: [
                Expanded(
                  child: TextField(
                    decoration: const InputDecoration(labelText: '开始时间'),
                    readOnly: true,
                    onTap: () {},
                  ),
                ),
                const SizedBox(width: 12),
                Expanded(
                  child: TextField(
                    decoration: const InputDecoration(labelText: '结束时间'),
                    readOnly: true,
                    onTap: () {},
                  ),
                ),
              ],
            ),
            const Spacer(),
            SizedBox(
              width: double.infinity,
              child: FilledButton(
                onPressed: () {
                  Navigator.of(context).maybePop();
                },
                child: const Text('保存'),
              ),
            ),
          ],
        ),
      ),
    );
  }
}


