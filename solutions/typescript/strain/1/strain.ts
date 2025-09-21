export function keep<T>(collection: T[], predicate: (e: T) => boolean): T[] {
    const kept: T[] = [];
    for (const element of collection) {
        if (predicate(element)) {
            kept.push(element);
        }
    }
    return kept;
}

export function discard<T>(collection: T[], predicate: (e: T) => boolean): T[] {
    const discarded: T[] = [];
    for (const element of collection) {
        if (!predicate(element)) {
            discarded.push(element);
        }
    }
    return discarded;
}
