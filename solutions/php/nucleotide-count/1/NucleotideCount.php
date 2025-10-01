<?php
declare(strict_types=1);

function nucleotideCount(string $input): array
{
    $counts = ['a' => 0, 'c' => 0, 't' => 0, 'g' => 0];
    for ($i = 0; $i < strlen($input); $i++) {
        switch ($input[$i]) {
            case 'A':
                $counts['a']++;
                break;
            case 'C':
                $counts['c']++;
                break;
            case 'T':
                $counts['t']++;
                break;
            case 'G':
                $counts['g']++;
                break;
            default:
                throw new \BadFunctionCallException(
                    'Invalid nucleotide in strand',
                );
        }
    }
    return $counts;
}
