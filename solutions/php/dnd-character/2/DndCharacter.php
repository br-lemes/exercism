<?php
declare(strict_types=1);

class DndCharacter
{
    public int $strength;
    public int $dexterity;
    public int $constitution;
    public int $intelligence;
    public int $wisdom;
    public int $charisma;
    public int $hitpoints;

    function __construct()
    {
        $this->strength = self::ability();
        $this->dexterity = self::ability();
        $this->constitution = self::ability();
        $this->intelligence = self::ability();
        $this->wisdom = self::ability();
        $this->charisma = self::ability();
        $this->hitpoints = 10 + self::modifier($this->constitution);
    }

    static function ability(): int
    {
        return rand(3, 18);
    }

    static function modifier(int $score): int
    {
        return (int) floor(($score - 10) / 2);
    }

    static function generate(): self
    {
        return new self();
    }
}
