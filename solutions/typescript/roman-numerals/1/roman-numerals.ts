export const toRoman = (number: number) => {
    const map = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1,
    };
    let result = '';
    for (const [roman, int] of Object.entries(map)) {
        const count = Math.floor(number / int);
        result += roman.repeat(count);
        number = number % int;
    }
    return result;
};
