export function reverse(str: string) {
    let result = '';
    for (const char of str) {
        result = char + result;
    }
    return result;
}
