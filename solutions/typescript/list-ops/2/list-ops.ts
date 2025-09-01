export class List<T> {
    values: T[] = [];

    public static create<T>(...values: T[]): List<T> {
        return new List(values);
    }

    constructor(values: (T | List<T>)[] = []) {
        for (const v of values) {
            this.values =
                v instanceof List
                    ? [...this.values, ...v.values]
                    : [...this.values, v];
        }
    }

    forEach(fn: (v: T) => void): void {
        for (const v of this.values) {
            fn(v);
        }
    }

    append(list: List<T>): List<T> {
        return new List([...this.values, list]);
    }

    concat(lists: List<List<T> | T>): List<T> {
        return new List([...this.values, ...lists.values]);
    }

    filter(fn: (v: T) => boolean): List<T> {
        let newValues: T[] = [];
        for (const v of this.values) {
            if (fn(v)) {
                newValues = [...newValues, v];
            }
        }
        return new List(newValues);
    }

    map<U>(fn: (v: T) => U): List<U> {
        let newValues: U[] = [];
        for (const v of this.values) {
            newValues = [...newValues, fn(v)];
        }
        return new List(newValues);
    }

    length(): number {
        return this.values.length;
    }

    foldl<U>(fn: (acc: U, v: T) => U, init: U): U {
        let acc = init;
        for (const v of this.values) {
            acc = fn(acc, v);
        }
        return acc;
    }

    foldr<U>(fn: (acc: U, v: T) => U, init: U): U {
        let acc = init;
        for (let i = this.values.length - 1; i >= 0; i--) {
            acc = fn(acc, this.values[i]);
        }
        return acc;
    }

    reverse(): List<T> {
        let newValues: T[] = [];
        for (const v of this.values) {
            newValues = [v, ...newValues];
        }
        return new List(newValues);
    }
}
