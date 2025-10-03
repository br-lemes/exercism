<?php
declare(strict_types=1);

class Allergies
{
    private int $input;

    public function __construct(int $input)
    {
        $this->input = $input;
    }

    public function isAllergicTo(Allergen $allergen): bool
    {
        return (bool) ($this->input & $allergen->getScore());
    }

    public function getList(): array
    {
        return array_filter(
            Allergen::allergenList(),
            fn($allergen) => $this->isAllergicTo($allergen),
        );
    }
}

class Allergen
{
    const EGGS = 1;
    const PEANUTS = 2;
    const SHELLFISH = 4;
    const STRAWBERRIES = 8;
    const TOMATOES = 16;
    const CHOCOLATE = 32;
    const POLLEN = 64;
    const CATS = 128;

    private int $score;

    function __construct(int $score)
    {
        $this->score = $score;
    }

    static function allergenList(): array
    {
        return array_map(
            fn($allergen) => new Allergen($allergen),
            (new ReflectionClass(__CLASS__))->getConstants(),
        );
    }

    function getScore(): int
    {
        return $this->score;
    }
}
