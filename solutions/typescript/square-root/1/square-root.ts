export function squareRoot(radicand: number): number {
    if (radicand === 0) return 0;
    let x = radicand;
    let y = (x + 1) / 2;
    while (y < x) {
        x = y;
        y = (x + radicand / x) / 2;
    }
    return x;
}
