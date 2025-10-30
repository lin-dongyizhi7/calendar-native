class CalendarEvent {
  final String id;
  final String title;
  final DateTime start;
  final DateTime end;
  final String? location;
  final String? notes;

  CalendarEvent({
    required this.id,
    required this.title,
    required this.start,
    required this.end,
    this.location,
    this.notes,
  });
}


