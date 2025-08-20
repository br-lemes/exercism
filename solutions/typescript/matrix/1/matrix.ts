export class Matrix {
    private readonly matrix: number[][];

    constructor(matrix: string) {
        this.matrix = matrix
            .split('\n')
            .map((row) => row.split(' ').map(Number));
    }

    get rows(): number[][] {
        return this.matrix;
    }

    get columns(): number[][] {
        return this.matrix[0].map((_, i) => this.matrix.map((row) => row[i]));
    }
}
