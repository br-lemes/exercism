export const eggCount = (number: number): number => {
    let count = 0;
    let n = number;
    while (n > 0) {
        if ((n & 1) === 1) {
            count += 1;
        }
        n >>= 1;
    }
    return count;
};
