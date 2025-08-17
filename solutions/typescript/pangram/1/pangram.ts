export function isPangram(str: string): boolean {
    const counts: Record<string, number> = {};
    for (let i = 0; i < str.length; i++) {
        const c = str[i].toLowerCase();
        if (c >= 'a' && c <= 'z') {
            counts[c] = (counts[c] || 0) + 1;
        }
    }
    return Object.keys(counts).length === 26;
}
