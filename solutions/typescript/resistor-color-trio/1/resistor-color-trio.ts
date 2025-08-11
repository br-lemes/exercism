const colorCode: { [key: string]: number } = {
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

export function decodedResistorValue(colors: string[]): string {
    const [color1, color2, color3] = colors;
    const mainValue = colorCode[color1] * 10 + colorCode[color2];
    const resistance = mainValue * Math.pow(10, colorCode[color3]);

    if (resistance >= 1000000000) {
        return `${resistance / 1000000000} gigaohms`;
    }
    if (resistance >= 1000000) {
        return `${resistance / 1000000} megaohms`;
    }
    if (resistance >= 1000) {
        return `${resistance / 1000} kiloohms`;
    }
    return `${resistance} ohms`;
}
