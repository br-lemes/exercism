<?php
declare(strict_types=1);

function getClassification(int $number): string
{
    if ($number <= 0) {
        throw new InvalidArgumentException(
            'Classification is only possible for natural numbers.',
        );
    }
    if ($number === 1) {
        return 'deficient';
    }

    $sum = 1;
    for ($i = 2; $i * $i <= $number; $i++) {
        if ($number % $i === 0) {
            $sum += $i;
            if ($i * $i !== $number) {
                $sum += $number / $i;
            }
        }
    }

    if ($sum < $number) {
        return 'deficient';
    }
    if ($sum > $number) {
        return 'abundant';
    }
    return 'perfect';
}
