<?php

declare(strict_types=1);

class LuckyNumbers
{
    public function sumUp(array $digitsOfNumber1, array $digitsOfNumber2): int
    {
        return implode('', $digitsOfNumber1) + implode('', $digitsOfNumber2);
    }

    public function isPalindrome(int $number): bool
    {
        $number = strval($number);
        return $number === strrev($number);
    }

    public function validate(string $input): string
    {
        $input = trim($input);
        if ($input === '') {
            return 'Required field';
        }
        if (intval($input) <= 0) {
            return 'Must be a whole number larger than 0';
        }
        return '';
    }
}
