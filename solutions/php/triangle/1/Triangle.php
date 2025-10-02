<?php
declare(strict_types=1);

class Triangle
{
    private float $a;
    private float $b;
    private float $c;

    public function __construct(float $a, float $b, float $c)
    {
        $this->a = $a;
        $this->b = $b;
        $this->c = $c;

        if ($a <= 0 || $b <= 0 || $c <= 0) {
            throw new Exception();
        }
        if ($a + $b < $c || $a + $c < $b || $b + $c < $a) {
            throw new Exception();
        }
    }

    public function kind(): string
    {
        if ($this->a === $this->b && $this->b === $this->c) {
            return 'equilateral';
        }
        if (
            $this->a === $this->b ||
            $this->b === $this->c ||
            $this->a === $this->c
        ) {
            return 'isosceles';
        }
        return 'scalene';
    }
}
