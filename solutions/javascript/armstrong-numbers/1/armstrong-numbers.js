/** @param {number} num */
export const isArmstrongNumber = (num) => {
    let sum = 0;
    let len = num.toString().length;

    for (let i = 0; i < len; i++) {
        const digit = Number(num.toString()[i]);
        sum += Math.pow(digit, len);
    }

    return sum === num;
};
