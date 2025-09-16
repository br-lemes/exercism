type Position = readonly [number, number];

type Positions = { white: Position; black: Position };

export class QueenAttack {
    public readonly black: Position;
    public readonly white: Position;

    constructor({ black = [0, 3], white = [7, 3] }: Partial<Positions> = {}) {
        if (this.isOffBoard(white)) {
            throw new Error('Queen must be placed on the board');
        }
        if (this.isOffBoard(black)) {
            throw new Error('Queen must be placed on the board');
        }
        if (this.areSamePosition(white, black)) {
            throw new Error('Queens cannot share the same space');
        }

        this.white = white;
        this.black = black;
    }

    private isOffBoard(position: Position): boolean {
        const [row, col] = position;
        return row < 0 || row > 7 || col < 0 || col > 7;
    }

    private areSamePosition(pos1: Position, pos2: Position): boolean {
        return pos1[0] === pos2[0] && pos1[1] === pos2[1];
    }

    toString(): string {
        const board = Array.from({ length: 8 }, () => Array(8).fill('_'));
        board[this.white[0]][this.white[1]] = 'W';
        board[this.black[0]][this.black[1]] = 'B';
        return board.map((row) => row.join(' ')).join('\n');
    }

    get canAttack(): boolean {
        if (
            this.white[0] === this.black[0] ||
            this.white[1] === this.black[1]
        ) {
            return true;
        }
        const rowDiff = Math.abs(this.white[0] - this.black[0]);
        const colDiff = Math.abs(this.white[1] - this.black[1]);
        return rowDiff === colDiff;
    }
}
