export function rotate(text: string, shiftKey: number): string {
    let result = '';
    for (const char of text) {
        const charCode = char.charCodeAt(0);
        if (charCode >= 65 && charCode <= 90) {
            result += String.fromCharCode(
                ((charCode - 65 + shiftKey) % 26) + 65,
            );
        } else if (charCode >= 97 && charCode <= 122) {
            result += String.fromCharCode(
                ((charCode - 97 + shiftKey) % 26) + 97,
            );
        } else {
            result += char;
        }
    }
    return result;
}
