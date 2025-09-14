export function count(lines: string[]): number {
    if (lines.length === 0 || lines[0].length === 0) {
        return 0;
    }

    const rows = lines.length;
    const cols = lines[0].length;
    let rectangleCount = 0;

    for (let r1 = 0; r1 < rows; r1++) {
        for (let c1 = 0; c1 < cols; c1++) {
            if (lines[r1][c1] !== '+') continue;

            for (let r2 = r1 + 1; r2 < rows; r2++) {
                if (lines[r2][c1] !== '+') continue;

                for (let c2 = c1 + 1; c2 < cols; c2++) {
                    if (lines[r1][c2] !== '+') continue;
                    if (lines[r2][c2] !== '+') continue;

                    let isRectangle = true;

                    for (let c = c1 + 1; c < c2; c++) {
                        if (lines[r1][c] !== '-' && lines[r1][c] !== '+') {
                            isRectangle = false;
                            break;
                        }
                    }
                    if (!isRectangle) continue;

                    for (let c = c1 + 1; c < c2; c++) {
                        if (lines[r2][c] !== '-' && lines[r2][c] !== '+') {
                            isRectangle = false;
                            break;
                        }
                    }
                    if (!isRectangle) continue;

                    for (let r = r1 + 1; r < r2; r++) {
                        if (lines[r][c1] !== '|' && lines[r][c1] !== '+') {
                            isRectangle = false;
                            break;
                        }
                    }
                    if (!isRectangle) continue;

                    for (let r = r1 + 1; r < r2; r++) {
                        if (lines[r][c2] !== '|' && lines[r][c2] !== '+') {
                            isRectangle = false;
                            break;
                        }
                    }
                    if (!isRectangle) continue;

                    rectangleCount++;
                }
            }
        }
    }

    return rectangleCount;
}
