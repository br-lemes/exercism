<?php
declare(strict_types=1);

function meetup_day(
    int $year,
    int $month,
    string $which,
    string $weekday,
): DateTimeImmutable {
    $firstDayOfMonth = new DateTimeImmutable("$year-$month-01");
    $lastDayOfMonth = $firstDayOfMonth->modify('last day of this month');
    $daysInMonth = (int) $lastDayOfMonth->format('d');

    $weekdayIndex = array_flip([
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    ]);
    $targetWeekdayNum = $weekdayIndex[$weekday];

    $occurrences = [];
    for ($day = 1; $day <= $daysInMonth; $day++) {
        $date = $firstDayOfMonth->modify('+' . ($day - 1) . ' days');
        if ($date->format('w') == $targetWeekdayNum) {
            $occurrences[] = $date;
        }
    }

    switch ($which) {
        case 'first':
            return $occurrences[0];
        case 'second':
            return $occurrences[1];
        case 'third':
            return $occurrences[2];
        case 'fourth':
            return $occurrences[3];
        case 'last':
            return end($occurrences);
        case 'teenth':
            foreach ($occurrences as $date) {
                if ($date->format('j') >= 13 && $date->format('j') <= 19) {
                    return $date;
                }
            }
    }

    throw new InvalidArgumentException('Invalid parameters');
}
