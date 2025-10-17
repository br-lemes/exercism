export class Squares {
    #count;

    /** @param {number} count */
    constructor(count) {
        this.#count = count;
    }

    get sumOfSquares() {
        let sum = 0;
        for (let i = 1; i <= this.#count; i++) {
            sum += i * i;
        }
        return sum;
    }

    get squareOfSum() {
        let sum = 0;
        for (let i = 1; i <= this.#count; i++) {
            sum += i;
        }
        return sum * sum;
    }

    get difference() {
        return this.squareOfSum - this.sumOfSquares;
    }
}
