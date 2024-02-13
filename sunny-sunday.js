function sunnySunday(date) {
    const weekdays = [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    const daysElapsed = Math.floor((date.getTime() - new Date('0001-01-01').getTime()) / (1000 * 60 * 60 * 24));
    const weekdayIndex = daysElapsed % weekdays.length;
    return weekdays[weekdayIndex];
  }