import 'package:flutter/foundation.dart';

import '../models/event.dart';

abstract class EventStorage {
  Future<List<CalendarEvent>> listEvents();
  Future<void> upsertEvent(CalendarEvent event);
  Future<void> deleteEvent(String id);
}

class InMemoryEventStorage implements EventStorage {
  final List<CalendarEvent> _events = <CalendarEvent>[];

  @override
  Future<List<CalendarEvent>> listEvents() async {
    return List<CalendarEvent>.unmodifiable(_events);
  }

  @override
  Future<void> upsertEvent(CalendarEvent event) async {
    final index = _events.indexWhere((e) => e.id == event.id);
    if (index >= 0) {
      _events[index] = event;
    } else {
      _events.add(event);
    }
  }

  @override
  Future<void> deleteEvent(String id) async {
    _events.removeWhere((e) => e.id == id);
  }
}

class EventStore extends ChangeNotifier {
  EventStore({EventStorage? storage}) : _storage = storage ?? InMemoryEventStorage();

  final EventStorage _storage;
  List<CalendarEvent> _events = <CalendarEvent>[];

  List<CalendarEvent> get events => _events;

  Future<void> refresh() async {
    _events = await _storage.listEvents();
    notifyListeners();
  }
}


