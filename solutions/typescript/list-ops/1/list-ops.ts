/* eslint-disable @typescript-eslint/no-explicit-any */

export class List {
    values: any[] = [];

    public static create<T>(...values: T[]): List {
        return new List(values);
    }

    constructor(values: any[]) {
        for (const v of values) {
            this.values = v instanceof List
                ? [...this.values, ...v.values]
                : [...this.values, v];
        }
    }

    forEach<T>(fn: (v: T) => void): void {
        for (const v of this.values) {
            fn(v);
        }
    }

    append(list: List): List {
        return new List([...this.values, ...list.values]);
    }

    concat(list: List): List {
        return this.append(list);
    }

    filter<T>(fn: (v: T) => boolean): List {
        let newValues: T[] = [];
        for (const v of this.values) {
            if (fn(v)) {
                newValues = [...newValues, v];
            }
        }

        return new List(newValues);
    }

    map<T>(fn: (v: T) => any): List {
        let newValues: T[] = [];
        for (const v of this.values) {
            newValues = [...newValues, fn(v)];
        }

        return new List(newValues);
    }

    length(): number {
        return this.values.length;
    }

    foldl<T, U>(fn: (acc: T, v: U) => T, init: T): T {
        let acc = init;
        for (const v of this.values) {
            acc = fn(acc, v);
        }

        return acc;
    }

    foldr<T, U>(fn: (acc: T, v: U) => T, init: T): T {
        let acc = init;
        for (let i = this.values.length - 1; i >= 0; i--) {
            acc = fn(acc, this.values[i]);
        }

        return acc;
    }

    reverse() {
        let newValues: any[] = [];
        for (const v of this.values) {
            newValues = [v, ...newValues];
        }

        return new List(newValues);
    }
}
