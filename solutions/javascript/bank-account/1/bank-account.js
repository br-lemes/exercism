export class ValueError extends Error {
    constructor() {
        super('Bank account error');
    }
}

export class BankAccount {
    #balance = 0;
    #isOpen = false;

    open() {
        if (this.#isOpen) {
            throw new ValueError();
        }
        this.#isOpen = true;
        this.#balance = 0;
    }

    close() {
        if (!this.#isOpen) {
            throw new ValueError();
        }
        this.#isOpen = false;
    }

    /** @param {number} amount */
    deposit(amount) {
        if (!this.#isOpen || amount < 0) {
            throw new ValueError();
        }
        this.#balance += amount;
    }

    /** @param {number} amount */
    withdraw(amount) {
        if (!this.#isOpen || amount < 0 || amount > this.#balance) {
            throw new ValueError();
        }
        this.#balance -= amount;
    }

    get balance() {
        if (!this.#isOpen) {
            throw new ValueError();
        }
        return this.#balance;
    }
}
