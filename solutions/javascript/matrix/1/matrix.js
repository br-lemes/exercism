export class Matrix {
    /** @param {string} matrix */
    constructor(matrix) {
        this.matrix = matrix
            .split('\n')
            .map((row) => row.split(' ').map(Number));
    }

    get rows() {
        return this.matrix;
    }

    get columns() {
        return this.matrix[0].map((_, i) => this.matrix.map((row) => row[i]));
    }
}
