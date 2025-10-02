<?php
declare(strict_types=1);

function isArmstrongNumber(int $number): bool
{
    $sum = 0;
    $len = strlen((string) $number);

    for ($i = 0; $i < $len; $i++) {
        $sum += pow((int) substr((string) $number, $i, 1), $len);
    }

    return $sum === $number;
}
