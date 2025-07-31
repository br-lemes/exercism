
/** @param {string} phrase */
export const parse = (phrase) => {
    return phrase
        .split(/[a-z](?=[A-Z])|[-_ ]/)
        .map((word) => word[0]?.toUpperCase())
        .join('');
};
