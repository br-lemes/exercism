export function nth(n: number): number {
    if (n === 0) throw new Error('Prime is not possible');
    let count = 0;
    let candidate = 2;
    // eslint-disable-next-line no-constant-condition
    while (true) {
        if (isPrime(candidate)) {
            count += 1;
            if (count === n) return candidate;
        }
        if (candidate === 2) {
            candidate = 3;
        } else {
            candidate += 2;
        }
    }
}

function isPrime(n: number): boolean {
    if (n < 2) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;
    for (let i = 3; i * i <= n; i += 2) {
        if (n % i === 0) return false;
    }
    return true;
}
