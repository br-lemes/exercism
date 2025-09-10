export function encode(numbers: number[]): number[] {
    const encoded: number[] = [];

    for (const number of numbers) {
        if (number === 0) {
            encoded.push(0);
            continue;
        }

        let num = number;
        const bytes: number[] = [];
        bytes.push(num & 0x7f);
        num >>>= 7;

        while (num > 0) {
            let byte = num & 0x7f;
            byte |= 0x80;
            bytes.push(byte);
            num >>>= 7;
        }

        encoded.push(...bytes.reverse());
    }

    return encoded;
}

export function decode(bytes: number[]): number[] {
    const decoded: number[] = [];
    let currentNumberBytes: number[] = [];

    for (const byte of bytes) {
        currentNumberBytes.push(byte);
        if ((byte & 0x80) === 0) {
            let number = 0;
            for (const b of currentNumberBytes) {
                number = number * 128 + (b & 0x7f);
            }
            decoded.push(number);
            currentNumberBytes = [];
        }
    }

    if (currentNumberBytes.length > 0) {
        throw new Error('Incomplete sequence');
    }

    return decoded;
}
