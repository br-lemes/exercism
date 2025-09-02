export function isIsogram(str: string): boolean {
    const counts: Record<string, boolean> = {};
    for (const char of str.toUpperCase()) {
        if (char < 'A' || char > 'Z') {
            continue;
        }
        if (counts[char]) {
            return false;
        }
        counts[char] = true;
    }
    return true;
}
