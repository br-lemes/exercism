export function sayInEnglish(n: number): string {
    if (n < 0 || n > 999999999999) {
        throw new Error('Number must be between 0 and 999,999,999,999.');
    }

    if (n === 0) {
        return 'zero';
    }

    const ones = [
        '',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
        'ten',
        'eleven',
        'twelve',
        'thirteen',
        'fourteen',
        'fifteen',
        'sixteen',
        'seventeen',
        'eighteen',
        'nineteen',
    ];
    const tens = [
        '',
        '',
        'twenty',
        'thirty',
        'forty',
        'fifty',
        'sixty',
        'seventy',
        'eighty',
        'ninety',
    ];

    function convertHundreds(num: number): string {
        let result = '';
        if (num >= 100) {
            result += `${ones[Math.floor(num / 100)]} hundred `;
            num %= 100;
        }
        if (num >= 20) {
            result += tens[Math.floor(num / 10)];
            if (num % 10 !== 0) {
                result += `-${ones[num % 10]}`;
            }
        } else if (num > 0) {
            result += ones[num];
        }
        return result.trim();
    }

    const scales = ['', 'thousand', 'million', 'billion'];
    let result = '';
    let scaleIndex = 0;

    if (n === 0) return 'zero';

    while (n > 0) {
        const chunk = n % 1000;
        if (chunk > 0) {
            const chunkStr = convertHundreds(chunk);
            result =
                chunkStr +
                (scales[scaleIndex] ? ` ${scales[scaleIndex]}` : '') +
                (result ? ` ${result}` : '');
        }
        n = Math.floor(n / 1000);
        scaleIndex++;
    }

    return result.trim();
}
