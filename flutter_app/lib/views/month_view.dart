import 'package:flutter/material.dart';
import 'package:intl/intl.dart';

class MonthView extends StatefulWidget {
  const MonthView({super.key});

  @override
  State<MonthView> createState() => _MonthViewState();
}

class _MonthViewState extends State<MonthView> {
  DateTime _anchor = DateTime.now();

  @override
  Widget build(BuildContext context) {
    final year = _anchor.year;
    final month = _anchor.month;
    final firstDay = DateTime(year, month, 1);
    final firstWeekday = firstDay.weekday % 7; // 0=Sun ... 6=Sat
    final daysInMonth = DateTime(year, month + 1, 0).day;
    final totalCells = firstWeekday + daysInMonth;
    final rows = (totalCells / 7).ceil();

    return Column(
      children: [
        Padding(
          padding: const EdgeInsets.all(12),
          child: Row(
            children: [
              IconButton(
                onPressed: () => setState(() => _anchor = DateTime(year, month - 1, 1)),
                icon: const Icon(Icons.chevron_left),
              ),
              Expanded(
                child: Center(
                  child: Text(
                    DateFormat('y年M月').format(_anchor),
                    style: Theme.of(context).textTheme.titleLarge,
                  ),
                ),
              ),
              IconButton(
                onPressed: () => setState(() => _anchor = DateTime(year, month + 1, 1)),
                icon: const Icon(Icons.chevron_right),
              ),
            ],
          ),
        ),
        _buildWeekdayHeader(context),
        const Divider(height: 1),
        Expanded(
          child: GridView.builder(
            padding: const EdgeInsets.all(8),
            gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
              crossAxisCount: 7,
              mainAxisSpacing: 8,
              crossAxisSpacing: 8,
            ),
            itemCount: rows * 7,
            itemBuilder: (context, index) {
              final dayNum = index - firstWeekday + 1;
              final inMonth = dayNum >= 1 && dayNum <= daysInMonth;
              final date = inMonth ? DateTime(year, month, dayNum) : null;
              final isToday = date != null
                  ? DateUtils.isSameDay(date, DateTime.now())
                  : false;

              return DecoratedBox(
                decoration: BoxDecoration(
                  border: Border.all(color: Theme.of(context).dividerColor),
                  borderRadius: BorderRadius.circular(8),
                  color: isToday
                      ? Theme.of(context).colorScheme.primaryContainer
                      : null,
                ),
                child: Padding(
                  padding: const EdgeInsets.all(6),
                  child: Align(
                    alignment: Alignment.topLeft,
                    child: Text(
                      inMonth ? '$dayNum' : '',
                      style: TextStyle(
                        color: inMonth
                            ? null
                            : Theme.of(context).textTheme.bodySmall?.color,
                        fontWeight: isToday ? FontWeight.bold : null,
                      ),
                    ),
                  ),
                ),
              );
            },
          ),
        ),
      ],
    );
  }

  Widget _buildWeekdayHeader(BuildContext context) {
    const labels = ['日', '一', '二', '三', '四', '五', '六'];
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
      child: Row(
        children: [
          for (final text in labels)
            Expanded(
              child: Center(
                child: Text(
                  text,
                  style: Theme.of(context).textTheme.labelLarge,
                ),
              ),
            ),
        ],
      ),
    );
  }
}


