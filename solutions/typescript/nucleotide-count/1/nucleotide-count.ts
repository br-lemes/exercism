export function nucleotideCounts(strand: string) {
    const counts = { A: 0, C: 0, G: 0, T: 0 };
    for (const nucleotide of strand) {
        switch (nucleotide.toUpperCase()) {
            case 'A':
                counts.A += 1;
                break;
            case 'C':
                counts.C += 1;
                break;
            case 'G':
                counts.G += 1;
                break;
            case 'T':
                counts.T += 1;
                break;
            default:
                throw new Error('Invalid nucleotide in strand');
        }
    }
    return counts;
}
