type Result = { start: [number, number]; end: [number, number] };

type Results = { [word: string]: Result | undefined };

export class WordSearch {
    private grid: string[];

    constructor(grid: string[]) {
        this.grid = grid;
    }

    public find(words: string[]): Results {
        const results: Results = {};

        for (const word of words) {
            results[word] = this.findWord(word);
        }

        return results;
    }

    private findWord(word: string): Result | undefined {
        const height = this.grid.length;
        if (height === 0) return undefined;
        const width = this.grid[0].length;

        for (let r = 0; r < height; r++) {
            for (let c = 0; c < width; c++) {
                const found = this.checkDirections(word, r, c);
                if (found) {
                    return found;
                }
            }
        }

        return undefined;
    }

    private checkDirections(
        word: string,
        r: number,
        c: number,
    ): Result | undefined {
        const directions = [
            { dr: 0, dc: 1 }, // right
            { dr: 0, dc: -1 }, // left
            { dr: 1, dc: 0 }, // down
            { dr: -1, dc: 0 }, // up
            { dr: 1, dc: 1 }, // down-right
            { dr: -1, dc: -1 }, // up-left
            { dr: 1, dc: -1 }, // down-left
            { dr: -1, dc: 1 }, // up-right
        ];

        for (const dir of directions) {
            let match = true;
            const endR = r + (word.length - 1) * dir.dr;
            const endC = c + (word.length - 1) * dir.dc;

            if (
                endR >= 0 &&
                endR < this.grid.length &&
                endC >= 0 &&
                endC < this.grid[0].length
            ) {
                for (let i = 0; i < word.length; i++) {
                    const nextR = r + i * dir.dr;
                    const nextC = c + i * dir.dc;
                    if (this.grid[nextR][nextC] !== word[i]) {
                        match = false;
                        break;
                    }
                }

                if (match) {
                    return { start: [r + 1, c + 1], end: [endR + 1, endC + 1] };
                }
            }
        }

        return undefined;
    }
}
