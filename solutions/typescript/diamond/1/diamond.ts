export function makeDiamond(letter: string): string {
    const n = letter.charCodeAt(0) - 'A'.charCodeAt(0);
    const lines: string[] = [];
    for (let i = 0; i <= n; i++) {
        const char = String.fromCharCode('A'.charCodeAt(0) + i);
        const outerSpaces = ' '.repeat(n - i);
        if (i === 0) {
            lines.push(outerSpaces + char + outerSpaces);
        } else {
            const innerSpaces = ' '.repeat(2 * i - 1);
            lines.push(outerSpaces + char + innerSpaces + char + outerSpaces);
        }
    }
    for (let i = n - 1; i >= 0; i--) {
        lines.push(lines[i]);
    }
    return `${lines.join('\n')}\n`;
}
