export function solve(puzzle: string): Record<string, number> | undefined {
    const [addendsStr, resultStr] = puzzle.split(' == ');
    const addendWords = addendsStr.split(' + ');
    const allWords = [...addendWords, resultStr];

    const leadingLetters = new Set(
        allWords.filter((w) => w.length > 1).map((w) => w[0]),
    );

    const letterCoefficients: { [key: string]: number } = {};
    const uniqueLetters = Array.from(new Set(allWords.join('')));

    for (const letter of uniqueLetters) {
        letterCoefficients[letter] = 0;
    }

    for (const word of addendWords) {
        let place = 1;
        for (let i = word.length - 1; i >= 0; i--) {
            letterCoefficients[word[i]] += place;
            place *= 10;
        }
    }

    let place = 1;
    for (let i = resultStr.length - 1; i >= 0; i--) {
        letterCoefficients[resultStr[i]] -= place;
        place *= 10;
    }

    function backtrack(
        letterIndex: number,
        currentSum: number,
        usedDigits: boolean[],
        assignments: Record<string, number>,
    ): Record<string, number> | null {
        if (letterIndex === uniqueLetters.length) {
            return currentSum === 0 ? assignments : null;
        }

        const letter = uniqueLetters[letterIndex];
        const coefficient = letterCoefficients[letter];

        for (let digit = 0; digit < 10; digit++) {
            if (usedDigits[digit]) continue;

            if (leadingLetters.has(letter) && digit === 0) continue;

            assignments[letter] = digit;
            usedDigits[digit] = true;

            const solution = backtrack(
                letterIndex + 1,
                currentSum + coefficient * digit,
                usedDigits,
                assignments,
            );
            if (solution) return solution;

            usedDigits[digit] = false;
            delete assignments[letter];
        }

        return null;
    }

    const solution = backtrack(0, 0, Array(10).fill(false), {});

    if (solution) {
        const sortedSolution: Record<string, number> = {};
        Object.keys(solution)
            .sort()
            .forEach((key) => {
                sortedSolution[key] = solution[key];
            });
        return sortedSolution;
    }

    return undefined;
}
