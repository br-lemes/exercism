
export class List {
    /** @type {any[]} */
    values = [];

    /** @template T @param {...T} values @returns {List} */
    static create(...values) {
        return new List(values);
    }

    /** @param {any[]} [values] */
    constructor(values) {
        for (const v of values || []) {
            this.values = v instanceof List
                ? [...this.values, ...v.values]
                : [...this.values, v];
        }
    }

    /** @template T @param {(v: T) => void} fn @returns {void} */
    forEach(fn) {
        for (const v of this.values) {
            fn(v);
        }
    }

    /** @param {List} list @returns {List} */
    append(list) {
        return new List([...this.values, ...list.values]);
    }

    /** @param {List} list @returns {List} */
    concat(list) {
        return this.append(list);
    }

    /** @template T @param {(v: T) => boolean} fn @returns {List} */
    filter(fn) {
        /** @type {T[]} */
        let newValues = [];
        for (const v of this.values) {
            if (fn(v)) {
                newValues = [...newValues, v];
            }
        }

        return new List(newValues);
    }

    /** @template T @param {(v: T) => any} fn @returns {List} */
    map(fn) {
        /** @type {T[]} */
        let newValues = [];
        for (const v of this.values) {
            newValues = [...newValues, fn(v)];
        }

        return new List(newValues);
    }

    /** @returns {number} */
    length() {
        return this.values.length;
    }

    /**
     * @template T, U
     * @param {(acc: T, v: U) => T} fn
     * @param {T} init
     * @returns {T}
     */
    foldl(fn, init) {
        let acc = init;
        for (const v of this.values) {
            acc = fn(acc, v);
        }

        return acc;
    }

    /**
     * @template T, U
     * @param {(acc: T, v: U) => T} fn
     * @param {T} init
     * @returns {T}
     */
    foldr(fn, init) {
        let acc = init;
        for (let i = this.values.length - 1; i >= 0; i--) {
            acc = fn(acc, this.values[i]);
        }

        return acc;
    }

    reverse() {
        /** @type {any[]} */
        let newValues = [];
        for (const v of this.values) {
            newValues = [v, ...newValues];
        }

        return new List(newValues);
    }
}
