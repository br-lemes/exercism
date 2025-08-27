export class Anagram {
    private word: string;
    private normalizedWord: string;

    constructor(word: string) {
        this.word = word;
        this.normalizedWord = this.normalize(word);
    }

    private normalize(str: string): string {
        return str.toLowerCase().split('').sort().join('');
    }

    public matches(...candidates: string[]): string[] {
        const result: string[] = [];
        const flatCandidates = candidates.flat();

        for (const candidate of flatCandidates) {
            if (this.word.toLowerCase() === candidate.toLowerCase()) {
                continue;
            }

            const normalizedCandidate = this.normalize(candidate);

            if (this.normalizedWord === normalizedCandidate) {
                result.push(candidate);
            }
        }

        return result;
    }
}
