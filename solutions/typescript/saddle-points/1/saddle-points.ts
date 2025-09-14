type Point = { row: number; column: number };

export function saddlePoints(matrix: number[][]): Point[] {
    const saddlePoints: Point[] = [];
    if (matrix.length === 0 || matrix[0].length === 0) {
        return saddlePoints;
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            const element = matrix[i][j];
            const row = matrix[i];
            if (Math.max(...row) === element) {
                const column = matrix.map((r) => r[j]);
                if (Math.min(...column) === element) {
                    saddlePoints.push({ row: i + 1, column: j + 1 });
                }
            }
        }
    }

    return saddlePoints;
}
