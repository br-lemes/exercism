export function isPangram(str: string): boolean {
    const counts: Record<string, number> = {};
    for (const char of str.toLowerCase()) {
        if (char >= 'a' && char <= 'z') {
            counts[char] = (counts[char] || 0) + 1;
        }
    }
    return Object.keys(counts).length === 26;
}
