export function isArmstrongNumber(num: number | bigint): boolean {
    let sum = BigInt(0);
    const numStr = num.toString();
    const len = BigInt(numStr.length);

    for (let i = 0; i < numStr.length; i++) {
        const digit = BigInt(numStr[i]);
        sum += digit ** len;
    }

    return sum === BigInt(num);
}
