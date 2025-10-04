<?php
declare(strict_types=1);

function prime(int $number)
{
    if ($number === 0) {
        return false;
    }
    $count = 0;
    $candidate = 2;
    while (true) {
        if (isPrime($candidate)) {
            $count += 1;
            if ($count === $number) {
                return $candidate;
            }
        }
        if ($candidate === 2) {
            $candidate = 3;
        } else {
            $candidate += 2;
        }
    }
}

function isPrime(int $number): bool
{
    if ($number < 2) {
        return false;
    }
    if ($number === 2) {
        return true;
    }
    if ($number % 2 === 0) {
        return false;
    }
    for ($i = 3; $i * $i <= $number; $i += 2) {
        if ($number % $i === 0) {
            return false;
        }
    }
    return true;
}
