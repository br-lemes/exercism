/** @param {string} strand */
export function countNucleotides(strand) {
    const counts = [0, 0, 0, 0];
    for (const nucleotide of strand.toUpperCase()) {
        switch (nucleotide) {
            case 'A':
                counts[0] += 1;
                break;
            case 'C':
                counts[1] += 1;
                break;
            case 'G':
                counts[2] += 1;
                break;
            case 'T':
                counts[3] += 1;
                break;
            default:
                throw new Error('Invalid nucleotide in strand');
        }
    }
    return counts.join(' ');
}
