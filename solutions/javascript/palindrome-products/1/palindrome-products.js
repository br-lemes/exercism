/**
 * @typedef {Object} Palindrome
 * @property {number | null} value
 * @property {Array<[number, number]>} factors
 */

// biome-ignore lint/complexity/noStaticOnlyClass: blame exercism for this non-sense
class Palindromes {
    /** @param {{ minFactor: number; maxFactor: number }} params */
    static generate({ minFactor, maxFactor }) {
        if (minFactor > maxFactor) {
            throw new Error('min must be <= max');
        }

        /** @param {number} n */
        function isPalindrome(n) {
            const s = n.toString();
            return s === s.split('').reverse().join('');
        }

        /**
         * @param {number} n
         * @param {number} min
         * @param {number} max
         */
        function findFactors(n, min, max) {
            /** @type {Array<[number, number]>} */
            const factors = [];
            for (let i = min; i * i <= n; i++) {
                if (n % i === 0) {
                    const j = n / i;
                    if (j >= min && j <= max) {
                        factors.push([i, j]);
                    }
                }
            }
            return factors;
        }

        /** @type {Palindrome} */
        let smallest = { value: null, factors: [] };
        /** @type {Palindrome} */
        let largest = { value: null, factors: [] };
        const minProduct = minFactor * minFactor;
        const maxProduct = maxFactor * maxFactor;

        for (let i = minProduct; i <= maxProduct; i++) {
            if (isPalindrome(i)) {
                const factors = findFactors(i, minFactor, maxFactor);
                if (factors.length > 0) {
                    smallest = { value: i, factors };
                    break;
                }
            }
        }

        for (let i = maxProduct; i >= minProduct; i--) {
            if (isPalindrome(i)) {
                const factors = findFactors(i, minFactor, maxFactor);
                if (factors.length > 0) {
                    largest = { value: i, factors };
                    break;
                }
            }
        }

        return { smallest, largest };
    }
}

export { Palindromes };
