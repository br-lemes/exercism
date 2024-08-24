
export function steps(count: number): number {
    if (!Number.isInteger(count) || count <= 0) {
        throw new Error('Only positive integers are allowed');
    }
    let result = 0;
    while (count > 1) {
        if (count % 2 === 0) {
            count = count / 2;
        } else {
            count = count * 3 + 1;
        }
        result++;
    }
    return result;
}
