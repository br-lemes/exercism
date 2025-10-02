const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const DIGITS = '0123456789';

export class Robot {
    /** @type {string[]} */
    static usedNames = [];

    constructor() {
        this.reset();
    }

    get name() {
        return this._name;
    }

    reset() {
        do {
            this._name = this.generateName();
        } while (Robot.usedNames.includes(this._name));
        Robot.usedNames.push(this._name);
    }

    generateName() {
        let name = '';
        for (let i = 0; i < 2; i++) {
            name += LETTERS.charAt(Math.floor(Math.random() * LETTERS.length));
        }
        for (let i = 0; i < 3; i++) {
            name += DIGITS.charAt(Math.floor(Math.random() * DIGITS.length));
        }
        return name;
    }
}

Robot.releaseNames = () => {};
