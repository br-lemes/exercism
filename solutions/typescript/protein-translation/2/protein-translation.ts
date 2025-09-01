const CODON_TABLE: Record<string, string> = {
    AUG: 'Methionine',
    UUU: 'Phenylalanine',
    UUC: 'Phenylalanine',
    UUA: 'Leucine',
    UUG: 'Leucine',
    UCU: 'Serine',
    UCC: 'Serine',
    UCA: 'Serine',
    UCG: 'Serine',
    UAU: 'Tyrosine',
    UAC: 'Tyrosine',
    UGU: 'Cysteine',
    UGC: 'Cysteine',
    UGG: 'Tryptophan',
    UAA: 'STOP',
    UAG: 'STOP',
    UGA: 'STOP',
};

export function translate(rna: string) {
    const codons = rna.match(/.{1,3}/g) || [];
    const proteins: string[] = [];
    for (const codon of codons) {
        const protein = CODON_TABLE[codon];
        switch (protein) {
            case undefined:
                throw new Error('Invalid codon');
            case 'STOP':
                return proteins;
            default:
                proteins.push(protein);
        }
    }
    return proteins;
}
