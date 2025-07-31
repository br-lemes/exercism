
function cellIncrease(board: string[][], row: number, col: number) {
    if (row < 0 || col < 0 || row >= board.length || col >= board[row].length) {
        return;
    }
    switch (board[row][col]) {
        case '*':
            break;
        case ' ':
            board[row][col] = '1';
            break;
        default:
            board[row][col] = String(Number(board[row][col]) + 1);
            break;
    }
}

export function annotate(field: string[]): string[] {
    const board: string[][] = [];
    for (const row of field) {
        board.push([...row]);
    }
    for (let row = 0; row < field.length; row++) {
        for (let col = 0; col < field[row].length; col++) {
            if (field[row][col] === '*') {
                cellIncrease(board, row - 1, col - 1);
                cellIncrease(board, row - 1, col);
                cellIncrease(board, row - 1, col + 1);
                cellIncrease(board, row, col - 1);
                cellIncrease(board, row, col + 1);
                cellIncrease(board, row + 1, col - 1);
                cellIncrease(board, row + 1, col);
                cellIncrease(board, row + 1, col + 1);
            }
        }
    }
    const result: string[] = [];
    for (const row in board) {
        result.push(board[row].join(''));
    }
    return result;
}
