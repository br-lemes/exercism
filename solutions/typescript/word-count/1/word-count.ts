export function count(sentence: string): Map<string, number> {
    const words = sentence.toLowerCase().match(/\b[\w']+\b/g) || [];
    const wordCounts = new Map<string, number>();

    for (const word of words) {
        const count = wordCounts.get(word) || 0;
        wordCounts.set(word, count + 1);
    }

    return wordCounts;
}
