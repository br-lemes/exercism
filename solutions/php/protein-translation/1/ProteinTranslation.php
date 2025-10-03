<?php
declare(strict_types=1);

class ProteinTranslation
{
    private const CODON_TABLE = [
        'AUG' => 'Methionine',
        'UUU' => 'Phenylalanine',
        'UUC' => 'Phenylalanine',
        'UUA' => 'Leucine',
        'UUG' => 'Leucine',
        'UCU' => 'Serine',
        'UCC' => 'Serine',
        'UCA' => 'Serine',
        'UCG' => 'Serine',
        'UAU' => 'Tyrosine',
        'UAC' => 'Tyrosine',
        'UGU' => 'Cysteine',
        'UGC' => 'Cysteine',
        'UGG' => 'Tryptophan',
        'UAA' => 'STOP',
        'UAG' => 'STOP',
        'UGA' => 'STOP',
    ];

    function getProteins(string $rna): array
    {
        $codons = str_split($rna, 3);
        $proteins = [];
        foreach ($codons as $codon) {
            $protein = self::CODON_TABLE[$codon] ?? null;
            if ($protein === null) {
                throw new InvalidArgumentException('Invalid codon');
            }
            if ($protein === 'STOP') {
                break;
            }
            $proteins[] = $protein;
        }
        return $proteins;
    }
}
