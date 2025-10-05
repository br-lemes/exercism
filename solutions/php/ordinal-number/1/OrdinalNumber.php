<?php
declare(strict_types=1);

function toOrdinal(int $number): string
{
    if ($number === 0) {
        return '0';
    }
    $lastDigit = $number % 10;
    $secondLastDigit = (int) (($number % 100) / 10);
    if ($secondLastDigit === 1) {
        return $number . 'th';
    }
    if ($lastDigit === 1) {
        return $number . 'st';
    }
    if ($lastDigit === 2) {
        return $number . 'nd';
    }
    if ($lastDigit === 3) {
        return $number . 'rd';
    }
    return $number . 'th';
}
