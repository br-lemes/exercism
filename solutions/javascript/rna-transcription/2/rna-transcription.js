/** @type {Record<string, string>} */
const DNA_TO_RNA = { G: 'C', C: 'G', T: 'A', A: 'U' };

/** @param {string} dna */
export const toRna = (dna) => {
    let rna = '';
    for (const nucleotide of dna) {
        const rnaNucleotide = DNA_TO_RNA[nucleotide];
        if (!rnaNucleotide) {
            throw new Error('Invalid input DNA.');
        }
        rna += rnaNucleotide;
    }
    return rna;
};
