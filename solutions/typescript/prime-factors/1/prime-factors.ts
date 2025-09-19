export function calculatePrimeFactors(value: number) {
    const results: number[] = [];
    let n = value;

    while (n % 2 === 0) {
        results.push(2);
        n /= 2;
    }

    let d = 3;
    while (d * d <= n) {
        while (n % d === 0) {
            results.push(d);
            n /= d;
        }
        d += 2;
    }

    if (n > 1) {
        results.push(n);
    }

    return results;
}
