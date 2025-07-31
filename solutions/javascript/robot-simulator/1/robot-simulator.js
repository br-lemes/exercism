// @ts-check

export class InvalidInputError extends Error {
    constructor(message) {
        super();
        this.message = message || 'Invalid Input';
    }
}

/** @typedef {'north' | 'east' | 'south' | 'west'} Direction */
/** @typedef {[number, number]} Coordinates */

export class Robot {
    constructor() {
        /** @type {Direction} */ this._bearing = 'north';
        /** @type {Coordinates} */ this._coordinates = [0, 0];
    }

    get bearing() {
        return this._bearing;
    }

    get coordinates() {
        return this._coordinates;
    }

    /** @param {{x: number, y: number, direction: string}} placement */
    place({ x, y, direction }) {
        const d = direction;
        if (d !== 'north' && d !== 'east' && d !== 'south' && d !== 'west') {
            throw new InvalidInputError(`Invalid direction: ${direction}`);
        }
        this._coordinates = [x, y];
        this._bearing = d;
    }

    /** @param {string} instructions */
    evaluate(instructions) {
        for (const instruction of instructions) {
            switch (instruction) {
                case 'L': this.turnLeft(); break;
                case 'R': this.turnRight(); break;
                case 'A': this.advance(); break;
                default: throw new InvalidInputError(
                    `Invalid instruction: ${instruction}`,
                );
            }
        }
    }

    turnLeft() {
        /** @type {Direction[]} */
        const directions = ['north', 'west', 'south', 'east'];
        this._bearing = directions[(directions.indexOf(this._bearing) + 1) % 4];
    }

    turnRight() {
        /** @type {Direction[]} */
        const directions = ['north', 'east', 'south', 'west'];
        this._bearing = directions[(directions.indexOf(this._bearing) + 1) % 4];
    }

    advance() {
        switch (this._bearing) {
            case 'north': this._coordinates[1]++; break;
            case 'east': this._coordinates[0]++; break;
            case 'south': this._coordinates[1]--; break;
            case 'west': this._coordinates[0]--; break;
        }
    }
}
