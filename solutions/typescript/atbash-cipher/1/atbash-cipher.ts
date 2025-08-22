export function encode(plainText: string): string {
    const result: string[] = [];
    let count = 0;

    for (const char of plainText.toLowerCase()) {
        if (char.match(/[0-9]/)) {
            if (count > 0 && count % 5 === 0) {
                result.push(' ');
            }
            result.push(char);
            count++;
            continue;
        }
        if (char.match(/[a-z]/)) {
            if (count > 0 && count % 5 === 0) {
                result.push(' ');
            }
            result.push(String.fromCharCode(122 - (char.charCodeAt(0) - 97)));
            count++;
        }
    }
    return result.join('');
}

export function decode(cipherText: string): string {
    const result: string[] = [];
    for (const char of cipherText) {
        if (char.match(/[0-9]/)) {
            result.push(char);
            continue;
        }
        if (char.match(/[a-z]/)) {
            result.push(String.fromCharCode(122 - (char.charCodeAt(0) - 97)));
        }
    }
    return result.join('');
}
