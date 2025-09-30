<?php
declare(strict_types=1);

function rebase(int $fromBase, array $digits, int $toBase): array
{
    if ($fromBase < 2) {
        throw new \InvalidArgumentException('input base must be >= 2');
    }
    if ($toBase < 2) {
        throw new \InvalidArgumentException('output base must be >= 2');
    }
    if (
        array_filter($digits, fn($digit) => $digit < 0 || $digit >= $fromBase)
    ) {
        throw new \InvalidArgumentException(
            'all digits must satisfy 0 <= d < input base',
        );
    }
    $num = array_reduce(
        $digits,
        fn($acc, $digit) => $acc * $fromBase + $digit,
        0,
    );
    $outputDigits = [];
    do {
        array_unshift($outputDigits, $num % $toBase);
        $num = intdiv($num, $toBase);
    } while ($num > 0);
    return $outputDigits;
}
