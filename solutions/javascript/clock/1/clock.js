export class Clock {
    #hours;
    #minutes;

    /** @param {number} hours */
    constructor(hours, minutes = 0) {
        this.#hours = hours;
        this.#minutes = minutes;
        this.#normalize();
    }

    #normalize() {
        let totalMinutes = this.#hours * 60 + this.#minutes;
        totalMinutes = ((totalMinutes % (24 * 60)) + 24 * 60) % (24 * 60);
        this.#hours = Math.floor(totalMinutes / 60);
        this.#minutes = totalMinutes % 60;
    }

    toString() {
        /** @param {number} num */
        const pad = (num) => num.toString().padStart(2, '0');
        return `${pad(this.#hours)}:${pad(this.#minutes)}`;
    }

    /** @param {number} minutes */
    plus(minutes) {
        return new Clock(this.#hours, this.#minutes + minutes);
    }

    /** @param {number} minutes */
    minus(minutes) {
        return new Clock(this.#hours, this.#minutes - minutes);
    }

    /** @param {Clock} other */
    equals(other) {
        return this.#hours === other.#hours && this.#minutes === other.#minutes;
    }
}
