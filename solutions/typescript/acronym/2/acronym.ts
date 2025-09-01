export function parse(phrase: string): string {
    return phrase
        .split(/[a-z](?=[A-Z])|[- ]/)
        .map((word) => word[0].toUpperCase())
        .join('');
}
