<?php

declare(strict_types=1);

class PizzaPi
{
    public function calculateDoughRequirement(int $pizzas, int $persons): int
    {
        return $pizzas * (($persons * 20) + 200);
    }

    public function calculateSauceRequirement(int $pizzas, int $volume): float
    {
        return $pizzas * 125 / $volume;
    }

    public function calculateCheeseCubeCoverage(
        float $dimension,
        float $thickness,
        float $diameter
    ): float {
        return floor(pow($dimension, 3) / ($thickness * M_PI * $diameter));
    }

    public function calculateLeftOverSlices(int $pizzas, int $friends): int
    {
        return ($pizzas * 8) % $friends;
    }
}
