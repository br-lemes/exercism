export function sum(factors: number[], limit: number): number {
    let sum = 0;
    for (let i = 1; i < limit; i++) {
        for (const factor of factors) {
            if (i % factor === 0) {
                sum += i;
                break;
            }
        }
    }
    return sum;
}
