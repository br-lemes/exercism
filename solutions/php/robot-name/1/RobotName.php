<?php
declare(strict_types=1);

class Robot
{
    const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const DIGITS = '0123456789';

    private static array $usedNames = [];
    private string $name;

    function __construct()
    {
        $this->reset();
    }

    function getName(): string
    {
        return $this->name;
    }

    function reset(): void
    {
        do {
            $this->name = $this->generateName();
        } while (in_array($this->name, self::$usedNames));
        self::$usedNames[] = $this->name;
    }

    private function generateName(): string
    {
        $name = '';
        for ($i = 0; $i < 2; $i++) {
            $name .= self::LETTERS[mt_rand(0, strlen(self::LETTERS) - 1)];
        }
        for ($i = 0; $i < 3; $i++) {
            $name .= self::DIGITS[mt_rand(0, strlen(self::DIGITS) - 1)];
        }
        return $name;
    }
}
