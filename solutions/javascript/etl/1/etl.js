/** @param {Record<string, string[]>} old */
export const transform = (old) => {
    /** @type {Record<string, number>} */
    const newStructure = {};
    for (const score in old) {
        for (const letter of old[score]) {
            newStructure[letter.toLowerCase()] = parseInt(score, 10);
        }
    }
    return newStructure;
};
