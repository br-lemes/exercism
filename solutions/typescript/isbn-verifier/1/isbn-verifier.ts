export function isValid(isbn: string): boolean {
    let count = 0;
    let sum = 0;
    for (let i = 0; i < isbn.length; i++) {
        if (isbn[i] >= '0' && isbn[i] <= '9') {
            sum += parseInt(isbn[i], 10) * (10 - count);
            count++;
            continue;
        }
        if (isbn[i] === 'X' && count === 9) {
            sum += 10;
            count++;
            continue;
        }
        if (isbn[i] !== '-') {
            return false;
        }
    }
    return count === 10 && sum % 11 === 0;
}
