/**
 * @param {number[]} inputDigits
 * @param {number} inputBase
 * @param {number} outputBase
 */
export const convert = (inputDigits, inputBase, outputBase) => {
    if (inputBase < 2) {
        throw new Error('Wrong input base');
    }
    if (outputBase < 2) {
        throw new Error('Wrong output base');
    }
    if (
        inputDigits.length === 0 ||
        (inputDigits.length > 1 && inputDigits[0] === 0) ||
        inputDigits.some((digit) => digit < 0 || digit >= inputBase)
    ) {
        throw new Error('Input has wrong format');
    }
    let num = inputDigits.reduce((acc, digit) => acc * inputBase + digit, 0);
    const outputDigits = [];
    do {
        outputDigits.unshift(num % outputBase);
        num = Math.floor(num / outputBase);
    } while (num > 0);
    return outputDigits;
};
