export function encode(text: string): string {
    return text.replace(/(.)\1+/g, (match, char) => match.length + char);
}

export function decode(encodedText: string): string {
    return encodedText.replace(/(\d+)(\D)/g, (_, count, char) =>
        char.repeat(Number(count)),
    );
}
