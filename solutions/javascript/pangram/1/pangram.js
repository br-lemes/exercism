/** @param {string} str */
export const isPangram = (str) => {
    const counts = {};
    for (const char of str.toLowerCase()) {
        if (char >= 'a' && char <= 'z') {
            counts[char] = (counts[char] || 0) + 1;
        }
    }
    return Object.keys(counts).length === 26;
};
