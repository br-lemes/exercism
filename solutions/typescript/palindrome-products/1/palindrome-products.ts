type Palindrome = { value: number | null; factors: [number, number][] };

type Palindromes = { smallest: Palindrome; largest: Palindrome };

type Params = { maxFactor: number; minFactor: number };

function isPalindrome(n: number): boolean {
    const s = n.toString();
    return s === s.split('').reverse().join('');
}

function findFactors(n: number, min: number, max: number): [number, number][] {
    const factors: [number, number][] = [];
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

export function generate({ maxFactor, minFactor }: Params): Palindromes {
    if (minFactor > maxFactor) {
        throw new Error('min must be <= max');
    }

    const smallestPalindrome: Palindrome = { value: null, factors: [] };

    const largestPalindrome: Palindrome = { value: null, factors: [] };

    const minProduct = minFactor * minFactor;
    const maxProduct = maxFactor * maxFactor;

    for (let i = minProduct; i <= maxProduct; i++) {
        if (isPalindrome(i)) {
            const factors = findFactors(i, minFactor, maxFactor);
            if (factors.length > 0) {
                smallestPalindrome.value = i;
                smallestPalindrome.factors = factors;
                break;
            }
        }
    }

    for (let i = maxProduct; i >= minProduct; i--) {
        if (isPalindrome(i)) {
            const factors = findFactors(i, minFactor, maxFactor);
            if (factors.length > 0) {
                largestPalindrome.value = i;
                largestPalindrome.factors = factors;
                break;
            }
        }
    }

    return { smallest: smallestPalindrome, largest: largestPalindrome };
}
