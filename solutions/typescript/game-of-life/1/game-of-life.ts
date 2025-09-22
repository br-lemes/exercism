export class GameOfLife {
    private matrix: number[][];

    constructor(matrix: number[][]) {
        this.matrix = matrix;
    }

    public tick(): void {
        const newMatrix: number[][] = [];

        for (let i = 0; i < this.matrix.length; i++) {
            newMatrix[i] = [];
            for (let j = 0; j < this.matrix[i].length; j++) {
                const liveNeighbors = this.countLiveNeighbors(i, j);
                const cell = this.matrix[i][j];

                if (cell === 1) {
                    if (liveNeighbors < 2 || liveNeighbors > 3) {
                        newMatrix[i][j] = 0;
                        continue;
                    }
                    newMatrix[i][j] = 1;
                    continue;
                }
                if (liveNeighbors === 3) {
                    newMatrix[i][j] = 1;
                    continue;
                }
                newMatrix[i][j] = 0;
            }
        }

        this.matrix = newMatrix;
    }

    public state(): number[][] {
        return this.matrix;
    }

    private countLiveNeighbors(row: number, col: number): number {
        let count = 0;
        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                if (i === 0 && j === 0) {
                    continue;
                }

                const newRow = row + i;
                const newCol = col + j;

                if (
                    newRow >= 0 &&
                    newRow < this.matrix.length &&
                    newCol >= 0 &&
                    newCol < this.matrix[newRow].length &&
                    this.matrix[newRow][newCol] === 1
                ) {
                    count++;
                }
            }
        }
        return count;
    }
}
