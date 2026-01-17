const numberToWord = (number: number, capitalize: boolean): string => {
    const words: Record<number, string> = {
        0: 'no',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
    };
    const word = words[number] || number.toString();
    if (capitalize) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
    return word;
};

const pluralize = (count: number): string => {
    return count === 1 ? '' : 's';
};

const verseLine = (bottleCount: number): string => {
    const word = numberToWord(bottleCount, true);
    const plural = pluralize(bottleCount);
    return `${word} green bottle${plural} hanging on the wall,`;
};

const resultLine = (bottleCount: number): string => {
    const word = bottleCount >= 0 ? numberToWord(bottleCount, false) : 'no';
    const plural = pluralize(bottleCount);
    return `There'll be ${word} green bottle${plural} hanging on the wall.`;
};

const verse = (bottleCount: number): string[] => {
    return [
        verseLine(bottleCount),
        verseLine(bottleCount),
        'And if one green bottle should accidentally fall,',
        resultLine(bottleCount - 1),
    ];
};

export const recite = (initialBottle: number, takeDown: number): string[] => {
    const result: string[][] = [];
    for (let i = 0; i < takeDown; i++) {
        result.push(verse(initialBottle - i));
        result.push(['']);
    }
    result.pop();
    return result.flat();
};
