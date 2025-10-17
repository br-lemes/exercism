/** @param {number} n */
export const classify = (n) => {
    if (n <= 0) {
        throw new Error('Classification is only possible for natural numbers.');
    }
    if (n === 1) return 'deficient';

    let sum = 1;
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) {
            sum += i;
            if (i * i !== n) {
                sum += n / i;
            }
        }
    }

    if (sum < n) return 'deficient';
    if (sum > n) return 'abundant';
    return 'perfect';
};
