/** @param {string} str */
const normalize = (str) => str.split('').sort().join('');

/**
 * @param {string} word
 * @param {string[]} candidates
 */
export const findAnagrams = (word, candidates) => {
    const result = [];
    const lowerWord = word.toLowerCase();
    const normalizedWord = normalize(lowerWord);
    for (const candidate of candidates) {
        const lowerCandidate = candidate.toLowerCase();
        if (lowerCandidate === lowerWord) {
            continue;
        }
        const normalizedCandidate = normalize(lowerCandidate);
        if (normalizedWord === normalizedCandidate) {
            result.push(candidate);
        }
    }
    return result;
};
