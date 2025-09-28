<?php
declare(strict_types=1);

const DNA_TO_RNA = ['G' => 'C', 'C' => 'G', 'T' => 'A', 'A' => 'U'];

function toRna(string $dna): string
{
    $rna = '';
    foreach (str_split($dna) as $nucleotide) {
        $rna .= DNA_TO_RNA[$nucleotide];
    }
    return $rna;
}
