import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

import 'screens/home_screen.dart';
import 'screens/settings_screen.dart';
import 'screens/event_editor_screen.dart';
import 'theme/app_theme.dart';

void main() {
  runApp(const CalendarApp());
}

class CalendarApp extends StatelessWidget {
  const CalendarApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MultiProvider(
      providers: const [],
      child: MaterialApp(
        title: 'Calendar',
        debugShowCheckedModeBanner: false,
        theme: AppTheme.lightTheme,
        darkTheme: AppTheme.darkTheme,
        themeMode: ThemeMode.system,
        routes: {
          HomeScreen.routeName: (_) => const HomeScreen(),
          SettingsScreen.routeName: (_) => const SettingsScreen(),
          EventEditorScreen.routeName: (_) => const EventEditorScreen(),
        },
        initialRoute: HomeScreen.routeName,
      ),
    );
  }
}


