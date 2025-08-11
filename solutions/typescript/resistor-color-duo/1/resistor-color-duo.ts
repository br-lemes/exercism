const colorMap: { [key: string]: number } = {
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    grey: 8,
    white: 9,
};

export function decodedValue(colors: string[]): number {
    const [firstColor, secondColor] = colors;
    const firstValue = colorMap[firstColor];
    const secondValue = colorMap[secondColor];
    return firstValue * 10 + secondValue;
}
