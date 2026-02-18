export function simulateGame(playerA: string[], playerB: string[]) {
    const deckA = [...playerA];
    const deckB = [...playerB];
    const pile: string[] = [];
    let cards = 0;
    let tricks = 0;

    const penaltyMap: Record<string, number> = { J: 1, Q: 2, K: 3, A: 4 };
    const isPayment = (card: string) => card in penaltyMap;

    const deckPattern = (d: string[]) => {
        let result = '';
        let numCount = 0;
        for (const card of d) {
            if (isPayment(card)) {
                result += numCount + card;
                numCount = 0;
            } else {
                numCount++;
            }
        }
        return result + numCount;
    };

    const stateKey = () => `${deckPattern(deckA)}|${deckPattern(deckB)}`;

    const seen = new Set<string>();
    let current = 0;
    const decks = [deckA, deckB];

    const playCard = (playerIdx: number): string | number => {
        if (decks[playerIdx].length === 0) {
            const winner = 1 - playerIdx;
            decks[winner].push(...pile);
            pile.length = 0;
            tricks++;
            return winner;
        }
        // biome-ignore lint/style/noNonNullAssertion: never happens
        const card = decks[playerIdx].shift()!;
        cards++;
        pile.push(card);
        return card;
    };

    // eslint-disable-next-line no-constant-condition
    while (true) {
        if (pile.length === 0) {
            if (decks[0].length === 0 || decks[1].length === 0) break;

            const key = stateKey();
            if (seen.has(key)) return { status: 'loop', cards, tricks };
            seen.add(key);
        }

        const card = playCard(current);

        if (typeof card === 'number') {
            current = card;
            continue;
        }

        if (!isPayment(card)) {
            current = 1 - current;
            continue;
        }

        let penalty = penaltyMap[card];
        let payer = 1 - current;

        while (penalty > 0) {
            const paid = playCard(payer);

            if (typeof paid === 'number') {
                current = paid;
                penalty = 0;
                break;
            }

            penalty--;

            if (isPayment(paid)) {
                current = payer;
                payer = 1 - current;
                penalty = penaltyMap[paid];
            }
        }

        if (penalty === 0 && pile.length > 0) {
            decks[current].push(...pile);
            pile.length = 0;
            tricks++;
        }
    }

    return { status: 'finished', cards, tricks };
}
