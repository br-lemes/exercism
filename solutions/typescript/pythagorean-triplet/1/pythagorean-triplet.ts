type Options = { minFactor?: number; maxFactor?: number; sum: number };

export function triplets({
    minFactor = 1,
    maxFactor,
    sum,
}: Options): Triplet[] {
    const result: Triplet[] = [];
    const max = maxFactor ?? sum;

    for (let a = minFactor; a <= sum / 3; a++) {
        for (let b = a + 1; b <= sum / 2; b++) {
            const c = sum - a - b;
            if (c > max) {
                continue;
            }
            if (b < c && a * a + b * b === c * c) {
                result.push(new Triplet(a, b, c));
            }
        }
    }

    return result;
}

class Triplet {
    private readonly a: number;
    private readonly b: number;
    private readonly c: number;

    constructor(a: number, b: number, c: number) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    toArray(): [number, number, number] {
        return [this.a, this.b, this.c];
    }
}
