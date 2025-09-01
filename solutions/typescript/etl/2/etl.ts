export function transform(old: { [key: string]: string[] }) {
    const newStructure: { [key: string]: number } = {};

    for (const score in old) {
        for (const letter of old[score]) {
            newStructure[letter.toLowerCase()] = parseInt(score, 10);
        }
    }

    return newStructure;
}
