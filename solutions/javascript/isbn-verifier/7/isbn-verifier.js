/** @param {string} isbn */
export const isValid = (isbn) => {
    let count = 0;
    let sum = 0;
    for (let i = 0; i < isbn.length; i++) {
        const char = isbn[i];
        if (char === '-') {
            continue;
        }
        if (char === 'X') {
            if (count !== 9) {
                return false;
            }
            sum += 10;
            count++;
            break;
        }
        const digit = char.charCodeAt(0) - 48;
        if (digit < 0 || digit > 9) {
            return false;
        }
        sum += digit * (10 - count);
        count++;
    }
    return count === 10 && sum % 11 === 0;
};
