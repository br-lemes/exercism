export function score(s?: string): number {
    const letters: Record<string, number> = {
        D: 2, G: 2,
        B: 3, C: 3, M: 3, P: 3,
        F: 4, H: 4, V: 4, W: 4, Y: 4,
        K: 5,
        J: 8, X: 8,
        Q: 10, Z: 10
    }
    const word = s?.toUpperCase()
    let result = 0
    for (const letter of word ?? '') {
        if (!letter.match(/[A-Z]/)) continue
        result += letters[letter] ?? 1
    }
    return result
}
