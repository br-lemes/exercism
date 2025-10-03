<?php
declare(strict_types=1);

function sumOfMultiples(int $number, array $multiples): int
{
    $sum = 0;
    for ($i = 1; $i < $number; $i++) {
        foreach ($multiples as $multiple) {
            if ($multiple === 0) {
                continue;
            }
            if ($i % $multiple === 0) {
                $sum += $i;
                break;
            }
        }
    }
    return $sum;
}
