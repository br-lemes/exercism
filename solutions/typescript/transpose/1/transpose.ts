export function transpose(input: string[]): string[] {
    if (input.length === 0) {
        return [];
    }

    const numRows = input.length;
    let numCols = 0;
    for (const row of input) {
        if (row.length > numCols) {
            numCols = row.length;
        }
    }

    const transposed: string[] = [];
    for (let j = 0; j < numCols; j++) {
        let newRow = '';
        let trailingSpaces = 0;
        for (let i = 0; i < numRows; i++) {
            if (j < input[i].length) {
                newRow += ' '.repeat(trailingSpaces);
                trailingSpaces = 0;
                newRow += input[i][j];
                continue;
            }
            trailingSpaces++;
        }
        transposed.push(newRow);
    }

    return transposed;
}
