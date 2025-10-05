<?php
declare(strict_types=1);

function isPalindrome(int $number): bool
{
    $str = (string) $number;
    return $str === strrev($str);
}

function findFactors(int $number, int $min, int $max): array
{
    $factors = [];
    for ($i = $min; $i * $i <= $number; $i++) {
        if ($number % $i === 0) {
            $j = $number / $i;
            if ($j >= $min && $j <= $max) {
                $factors[] = [$i, $j];
            }
        }
    }
    return $factors;
}

function smallest(int $min, int $max): array
{
    if ($min > $max) {
        throw new Exception();
    }

    $minProduct = $min * $min;
    $maxProduct = $max * $max;

    for ($i = $minProduct; $i <= $maxProduct; $i++) {
        if (isPalindrome($i)) {
            $factors = findFactors($i, $min, $max);
            if (count($factors) > 0) {
                return [$i, $factors];
            }
        }
    }

    throw new Exception();
}

function largest(int $min, int $max): array
{
    if ($min > $max) {
        throw new Exception();
    }

    $minProduct = $min * $min;
    $maxProduct = $max * $max;

    for ($i = $maxProduct; $i >= $minProduct; $i--) {
        if (isPalindrome($i)) {
            $factors = findFactors($i, $min, $max);
            if (count($factors) > 0) {
                return [$i, $factors];
            }
        }
    }

    throw new Exception();
}
