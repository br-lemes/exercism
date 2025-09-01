/** @template T */
class CircularBuffer {
    /** @param {number} size */
    constructor(size) {
        this.size = size;
        /** @type {T[]} */
        this.items = [];
    }

    /** @param {T} value */
    write(value) {
        if (this.items.length === this.size) {
            throw new BufferFullError();
        }
        if (value === null || value === undefined) {
            return;
        }
        this.items.push(value);
    }

    /** @returns {T} */
    read() {
        if (this.items.length === 0) {
            throw new BufferEmptyError();
        }
        const [value] = this.items.splice(0, 1);
        return value;
    }

    /** @param {T} value */
    forceWrite(value) {
        if (this.items.length === this.size) {
            this.read();
        }
        this.items.push(value);
    }

    clear() {
        this.items = [];
    }
}

export default CircularBuffer;

export class BufferFullError extends Error {}

export class BufferEmptyError extends Error {}
