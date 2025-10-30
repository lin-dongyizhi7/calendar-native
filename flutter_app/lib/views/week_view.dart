import 'package:flutter/material.dart';
import 'package:intl/intl.dart';

class WeekView extends StatefulWidget {
  const WeekView({super.key});

  @override
  State<WeekView> createState() => _WeekViewState();
}

class _WeekViewState extends State<WeekView> {
  DateTime _anchor = DateTime.now();

  @override
  Widget build(BuildContext context) {
    final startOfWeek = _anchor.subtract(Duration(days: _anchor.weekday % 7));
    final days = List<DateTime>.generate(7, (i) => startOfWeek.add(Duration(days: i)));

    return Column(
      children: [
        Padding(
          padding: const EdgeInsets.all(12),
          child: Row(
            children: [
              IconButton(
                onPressed: () => setState(() => _anchor = _anchor.subtract(const Duration(days: 7))),
                icon: const Icon(Icons.chevron_left),
              ),
              Expanded(
                child: Center(
                  child: Text(
                    '${DateFormat('y/M/d').format(days.first)} - ${DateFormat('y/M/d').format(days.last)}',
                    style: Theme.of(context).textTheme.titleLarge,
                  ),
                ),
              ),
              IconButton(
                onPressed: () => setState(() => _anchor = _anchor.add(const Duration(days: 7))),
                icon: const Icon(Icons.chevron_right),
              ),
            ],
          ),
        ),
        Expanded(
          child: Row(
            children: [
              for (final d in days)
                Expanded(
                  child: Column(
                    children: [
                      Padding(
                        padding: const EdgeInsets.symmetric(vertical: 8),
                        child: Text(DateFormat('E d').format(d)),
                      ),
                      const Divider(height: 1),
                      Expanded(
                        child: Container(
                          margin: const EdgeInsets.all(8),
                          decoration: BoxDecoration(
                            border: Border.all(color: Theme.of(context).dividerColor),
                            borderRadius: BorderRadius.circular(8),
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
            ],
          ),
        ),
      ],
    );
  }
}


