/** @param {Date} initialDate */
export const gigasecond = (initialDate) => {
    return new Date(initialDate.getTime() + 1000000000 * 1000);
};
