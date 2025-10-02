/**
 * @param {number} year
 * @param {number} month
 * @param {string} which
 * @param {string} weekday
 */
export const meetup = (year, month, which, weekday) => {
    const lastDayOfMonth = new Date(year, month, 0);
    const daysInMonth = lastDayOfMonth.getDate();

    /** @type {Record<string, number>} */
    const weekdayIndex = {
        Sunday: 0,
        Monday: 1,
        Tuesday: 2,
        Wednesday: 3,
        Thursday: 4,
        Friday: 5,
        Saturday: 6,
    };
    const targetWeekdayNum = weekdayIndex[weekday];

    const occurrences = [];
    for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(year, month - 1, day);
        if (date.getDay() === targetWeekdayNum) {
            occurrences.push(date);
        }
    }

    switch (which) {
        case 'first':
            return occurrences[0];
        case 'second':
            return occurrences[1];
        case 'third':
            return occurrences[2];
        case 'fourth':
            return occurrences[3];
        case 'last':
            return occurrences[occurrences.length - 1];
        case 'teenth':
            return occurrences.find(
                (date) => date.getDate() >= 13 && date.getDate() <= 19,
            );
    }

    throw new Error('Invalid parameters');
};
