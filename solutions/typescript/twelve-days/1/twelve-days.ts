const GIFTS = [
    'a Partridge in a Pear Tree',
    'two Turtle Doves',
    'three French Hens',
    'four Calling Birds',
    'five Gold Rings',
    'six Geese-a-Laying',
    'seven Swans-a-Swimming',
    'eight Maids-a-Milking',
    'nine Ladies Dancing',
    'ten Lords-a-Leaping',
    'eleven Pipers Piping',
    'twelve Drummers Drumming',
];

const DAYS = [
    'first',
    'second',
    'third',
    'fourth',
    'fifth',
    'sixth',
    'seventh',
    'eighth',
    'ninth',
    'tenth',
    'eleventh',
    'twelfth',
];

export function recite(start: number, end: number): string {
    let result = '';
    for (let i = start; i <= end; i++) {
        result += getVerse(i);
    }
    return result;
}

function getVerse(n: number): string {
    const day = DAYS[n - 1];
    let gifts = '';
    for (let i = n - 1; i >= 0; i--) {
        if (i === 0 && n > 1) {
            gifts += 'and ';
        }
        gifts += GIFTS[i];
        if (i > 0) {
            gifts += ', ';
        }
    }
    return `On the ${day} day of Christmas my true love gave to me: ${gifts}.\n`;
}
