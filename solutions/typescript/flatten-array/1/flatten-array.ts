type NestedArray<T> = (T | NestedArray<T>)[];

export function flatten<T>(arr: NestedArray<T | null | undefined>): T[] {
    const flattened: T[] = [];

    for (const element of arr) {
        if (Array.isArray(element)) {
            flattened.push(...flatten(element));
        } else if (element !== null && element !== undefined) {
            flattened.push(element);
        }
    }

    return flattened;
}
