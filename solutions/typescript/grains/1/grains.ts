export const square = (index: number) => {
    if (index < 1 || index > 64) {
        throw new Error('Square must be between 1 and 64');
    }
    return BigInt(2 ** (index - 1));
};

export const total = () => {
    return BigInt(2 ** 64) - 1n;
};
