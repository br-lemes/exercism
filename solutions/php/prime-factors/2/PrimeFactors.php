<?php
declare(strict_types=1);

function factors(int $number): array
{
    $factors = [];

    while ($number % 2 === 0) {
        $factors[] = 2;
        $number /= 2;
    }

    $divisor = 3;
    while ($divisor * $divisor <= $number) {
        while ($number % $divisor === 0) {
            $factors[] = $divisor;
            $number /= $divisor;
        }
        $divisor += 2;
    }

    if ($number > 1) {
        $factors[] = $number;
    }

    return $factors;
}
