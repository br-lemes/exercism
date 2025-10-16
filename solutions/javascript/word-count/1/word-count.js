/** @param {string} sentence */
export const countWords = (sentence) => {
    const words = sentence.toLowerCase().match(/\b[\w']+\b/g) || [];
    /** @type {{ [word: string]: number }} */
    const wordCounts = {};

    for (const word of words) {
        const count = wordCounts[word] || 0;
        wordCounts[word] = count + 1;
    }

    return wordCounts;
};
