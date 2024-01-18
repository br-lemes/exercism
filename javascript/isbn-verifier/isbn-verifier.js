
export const isValid = (isbn) => {
    let count = 0;
    let sum = 0;
    for (let i = 0; i < isbn.length; i++) {
        let char = isbn[i];
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
        char = char.charCodeAt(0) - 48;
        if (char < 0 || char > 9) {
            return false
        }
        sum += char * (10 - count);
        count++;
    }
    return count === 10 && sum % 11 === 0
};
