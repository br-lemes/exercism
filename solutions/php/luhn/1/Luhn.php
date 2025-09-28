<?php
declare(strict_types=1);

function isValid(string $number): bool
{
    $i = strlen($number);
    $sum = 0;
    $count = 0;
    $double = false;
    while ($i > 0) {
        $i--;
        $char = $number[$i];
        if ($char === ' ') {
            continue;
        }
        if ($char < '0' || $char > '9') {
            return false;
        }
        $digit = ord($char) - ord('0');
        if ($double) {
            $doubled = $digit * 2;
            $sum += $doubled > 9 ? $doubled - 9 : $doubled;
        } else {
            $sum += $digit;
        }
        $double = !$double;
        $count++;
    }
    return $count > 1 && $sum % 10 === 0;
}
