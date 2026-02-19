export const gamestate = (board: unknown): string => {
    const rows = board as string[];

    const countChar = (ch: string) =>
        rows.reduce(
            (acc, row) => acc + [...row].filter((c) => c === ch).length,
            0,
        );

    const xCount = countChar('X');
    const oCount = countChar('O');

    if (oCount > xCount) throw new Error('Wrong turn order: O started');
    if (xCount - oCount > 1) throw new Error('Wrong turn order: X went twice');

    const wins = (p: string) => {
        const b = rows;
        for (let i = 0; i < 3; i++) {
            if ([...b[i]].every((c) => c === p)) return true;
            if (b[0][i] === p && b[1][i] === p && b[2][i] === p) return true;
        }
        if (b[0][0] === p && b[1][1] === p && b[2][2] === p) return true;
        if (b[0][2] === p && b[1][1] === p && b[2][0] === p) return true;
        return false;
    };

    const xWins = wins('X');
    const oWins = wins('O');

    if (xWins && oWins) {
        throw new Error(
            'Impossible board: game should have ended after the game was won',
        );
    }
    if (xWins && xCount === oCount) {
        throw new Error(
            'Impossible board: game should have ended after the game was won',
        );
    }
    if (oWins && xCount > oCount) {
        throw new Error(
            'Impossible board: game should have ended after the game was won',
        );
    }

    if (xWins || oWins) return 'win';

    const filled = rows.every((row) => [...row].every((c) => c !== ' '));
    if (filled) return 'draw';

    return 'ongoing';
};
