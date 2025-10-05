<?php
declare(strict_types=1);

class IsbnVerifier
{
    public function isValid(string $isbn): bool
    {
        $count = 0;
        $sum = 0;
        for ($i = 0; $i < strlen($isbn); $i++) {
            if ($isbn[$i] >= '0' && $isbn[$i] <= '9') {
                $sum += (int) $isbn[$i] * (10 - $count);
                $count++;
                continue;
            }
            if ($isbn[$i] === 'X' && $count === 9) {
                $sum += 10;
                $count++;
                continue;
            }
            if ($isbn[$i] !== '-') {
                return false;
            }
        }
        return $count === 10 && $sum % 11 === 0;
    }
}
