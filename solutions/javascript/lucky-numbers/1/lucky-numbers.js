/**
 * @param {number[]} array1
 * @param {number[]} array2
 */
export function twoSum(array1, array2) {
    return Number(array1.join('')) + Number(array2.join(''));
}

/** @param {number} value */
export function luckyNumber(value) {
    const str = value.toString();
    return str === str.split('').reverse().join('');
}

/** @param {string|null|undefined} input */
export function errorMessage(input) {
    if (!input) {
        return 'Required field';
    }
    const num = Number(input);
    if (Number.isNaN(num) || num <= 0) {
        return 'Must be a number besides 0';
    }
    return '';
}
