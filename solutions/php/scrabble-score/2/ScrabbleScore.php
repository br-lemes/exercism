<?php
declare(strict_types=1);

const LETTERS = [
    'D' => 2,
    'G' => 2,
    'B' => 3,
    'C' => 3,
    'M' => 3,
    'P' => 3,
    'F' => 4,
    'H' => 4,
    'V' => 4,
    'W' => 4,
    'Y' => 4,
    'K' => 5,
    'J' => 8,
    'X' => 8,
    'Q' => 10,
    'Z' => 10,
];

function score(string $word): int
{
    $score = 0;
    $word = strtoupper($word);
    for ($i = 0; $i < strlen($word); $i++) {
        if (!ctype_alpha($word[$i])) {
            continue;
        }
        $score += LETTERS[$word[$i]] ?? 1;
    }
    return $score;
}
