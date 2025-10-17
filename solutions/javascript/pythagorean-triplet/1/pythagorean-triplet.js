/** @param {{ minFactor?: number; maxFactor?: number; sum: number }} options */
export function triplets({ minFactor = 1, maxFactor, sum }) {
    const result = [];
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
    #a;
    #b;
    #c;

    /**
     * @param {number} a
     * @param {number} b
     * @param {number} c
     */
    constructor(a, b, c) {
        this.#a = a;
        this.#b = b;
        this.#c = c;
    }

    toArray() {
        return [this.#a, this.#b, this.#c];
    }
}
