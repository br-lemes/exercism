export function clean(phoneNumber: string): string {
    if (phoneNumber.match(/[a-zA-Z]/)) {
        throw new Error('Letters not permitted');
    }

    if (phoneNumber.match(/[@:!]/)) {
        throw new Error('Punctuations not permitted');
    }

    const cleanedNumber = phoneNumber.replace(/\s|\(|\)|-|\.|\+/g, '');

    if (cleanedNumber.length < 10) {
        throw new Error('Incorrect number of digits');
    }

    if (cleanedNumber.length > 11) {
        throw new Error('More than 11 digits');
    }

    if (cleanedNumber.length === 11) {
        if (cleanedNumber.startsWith('1')) {
            const numberWithoutCountryCode = cleanedNumber.substring(1);
            validateNumber(numberWithoutCountryCode);
            return numberWithoutCountryCode;
        }
        throw new Error('11 digits must start with 1');
    }

    if (cleanedNumber.length === 10) {
        validateNumber(cleanedNumber);
        return cleanedNumber;
    }

    throw new Error('Invalid number');
}

function validateNumber(number: string): void {
    if (number.charAt(0) === '0') {
        throw new Error('Area code cannot start with zero');
    }

    if (number.charAt(0) === '1') {
        throw new Error('Area code cannot start with one');
    }

    if (number.charAt(3) === '0') {
        throw new Error('Exchange code cannot start with zero');
    }

    if (number.charAt(3) === '1') {
        throw new Error('Exchange code cannot start with one');
    }
}
