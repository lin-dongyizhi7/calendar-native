import 'package:flutter/material.dart';

import '../views/month_view.dart';
import '../views/week_view.dart';
import '../views/day_view.dart';
import 'event_editor_screen.dart';
import 'settings_screen.dart';

class HomeScreen extends StatefulWidget {
  static const String routeName = '/';
  const HomeScreen({super.key});

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  int _tabIndex = 0;

  final List<Widget> _tabs = const [
    MonthView(),
    WeekView(),
    DayView(),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Calendar'),
        actions: [
          IconButton(
            icon: const Icon(Icons.add),
            onPressed: () {
              Navigator.of(context).pushNamed(EventEditorScreen.routeName);
            },
          ),
          IconButton(
            icon: const Icon(Icons.settings),
            onPressed: () {
              Navigator.of(context).pushNamed(SettingsScreen.routeName);
            },
          ),
        ],
      ),
      body: _tabs[_tabIndex],
      bottomNavigationBar: NavigationBar(
        selectedIndex: _tabIndex,
        onDestinationSelected: (index) => setState(() => _tabIndex = index),
        destinations: const [
          NavigationDestination(icon: Icon(Icons.calendar_month), label: '月'),
          NavigationDestination(icon: Icon(Icons.view_week), label: '周'),
          NavigationDestination(icon: Icon(Icons.today), label: '日'),
        ],
      ),
    );
  }
}


