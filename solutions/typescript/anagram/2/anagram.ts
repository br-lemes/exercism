export class Anagram {
    private lowerWord: string;
    private normalizedWord: string;

    constructor(word: string) {
        this.lowerWord = word.toLowerCase();
        this.normalizedWord = this.normalize(this.lowerWord);
    }

    private normalize(str: string): string {
        return str.split('').sort().join('');
    }

    public matches(...candidates: string[]): string[] {
        const result: string[] = [];
        const flatCandidates = candidates.flat();

        for (const candidate of flatCandidates) {
            const lowerCandidate = candidate.toLowerCase();
            if (this.lowerWord === lowerCandidate) {
                continue;
            }

            const normalizedCandidate = this.normalize(lowerCandidate);

            if (this.normalizedWord === normalizedCandidate) {
                result.push(candidate);
            }
        }

        return result;
    }
}
