/** @param {number} number */
export const rows = (number) => {
    /** @type {number[][]} */
    const rows = [];
    for (let i = 0; i < number; i++) {
        const row = [];
        for (let j = 0; j <= i; j++) {
            if (j === 0 || j === i) {
                row.push(1);
            } else {
                row.push(rows[i - 1][j - 1] + rows[i - 1][j]);
            }
        }
        rows.push(row);
    }
    return rows;
};
