export function valid(digitString: string): boolean {
    let i = digitString.length;
    let sum = 0;
    let count = 0
    let double = false;
    while (i > 0) {
        i--;
        const char = digitString[i];
        if (char === ' ') {
            continue;
        }
        if (char < '0' || char > '9') {
            return false;
        }
        const digit = char.charCodeAt(0) - '0'.charCodeAt(0);
        if (double) {
            const doubled = digit * 2;
            sum += doubled > 9 ? doubled - 9 : doubled;
        } else {
            sum += digit;
        }
        double = !double;
        count++;
    }
    return (count > 1) && (sum % 10 === 0);
}
