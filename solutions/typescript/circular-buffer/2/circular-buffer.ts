export default class CircularBuffer<T> {
    private size: number;
    private items: T[];

    constructor(size: number) {
        this.size = size;
        this.items = [];
    }

    write(value: T) {
        if (this.items.length === this.size) {
            throw new BufferFullError();
        }
        if (value === null || value === undefined) {
            return;
        }
        this.items.push(value);
    }

    read(): T {
        if (this.items.length === 0) {
            throw new BufferEmptyError();
        }
        const [value] = this.items.splice(0, 1);
        return value;
    }

    forceWrite(value: T) {
        if (this.items.length === this.size) {
            this.read();
        }
        this.items.push(value);
    }

    clear() {
        this.items = [];
    }
}

export class BufferFullError extends Error {}

export class BufferEmptyError extends Error {}
