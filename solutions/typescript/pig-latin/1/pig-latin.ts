function translateWord(word: string) {
    if (word.match(/^[aeiouAEIOU]|^xr|^yt/)) {
        return `${word}ay`;
    }
    const rule3 = word.match(/^[^aeiouAEIOU]*qu/);
    if (rule3) {
        const prefix = rule3[0];
        const rest = word.substring(prefix.length);
        return `${rest}${prefix}ay`;
    }
    const rule4 = word.match(/^([^aeiouAEIOU]+)y/);
    if (rule4) {
        const prefix = rule4[1];
        const rest = word.substring(prefix.length);
        return `${rest}${prefix}ay`;
    }
    const rule2 = word.match(/^[^aeiouAEIOU]+/);
    if (rule2) {
        const prefix = rule2[0];
        const rest = word.substring(prefix.length);
        return `${rest}${prefix}ay`;
    }
    return `${word}ay`;
}

export function translate(phrase: string) {
    const words = phrase.split(' ');
    return words.map(translateWord).join(' ');
}
