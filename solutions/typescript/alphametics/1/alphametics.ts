export function solve(puzzle: string): Record<string, number> | undefined {
    const [left, right] = puzzle.split(' == ');
    const addends = left.split(' + ');
    const result = right;
    const words = [...addends, result];

    const letters = [...new Set(words.join('').split(''))];
    const leadingLetters = new Set(
        words.filter((w) => w.length > 1).map((w) => w[0]),
    );

    if (letters.length > 10) {
        return undefined;
    }

    const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    function* permute<T>(arr: T[], k: number): Generator<T[]> {
        if (k === 0) {
            yield [];
            return;
        }
        for (let i = 0; i < arr.length; i++) {
            const rest = [...arr.slice(0, i), ...arr.slice(i + 1)];
            for (const p of permute(rest, k - 1)) {
                yield [arr[i], ...p];
            }
        }
    }

    for (const p of permute(digits, letters.length)) {
        const map: Record<string, number> = {};
        let isValid = true;
        for (let i = 0; i < letters.length; i++) {
            map[letters[i]] = p[i];
        }

        for (const leading of leadingLetters) {
            if (map[leading] === 0) {
                isValid = false;
                break;
            }
        }
        if (!isValid) {
            continue;
        }

        const sum = addends
            .map((word) =>
                parseInt(
                    word
                        .split('')
                        .map((l) => map[l])
                        .join(''),
                    10,
                ),
            )
            .reduce((a, b) => a + b, 0);

        const res = parseInt(
            result
                .split('')
                .map((l) => map[l])
                .join(''),
            10,
        );

        if (sum === res) {
            return map;
        }
    }

    return undefined;
}
