<?php
declare(strict_types=1);

class SpaceAge
{
    private float $age;

    function __construct(int $seconds)
    {
        $this->age = $seconds / 31557600;
    }

    function earth(): float
    {
        return $this->age;
    }

    function mercury(): float
    {
        return $this->age / 0.2408467;
    }

    function venus(): float
    {
        return $this->age / 0.61519726;
    }

    function mars(): float
    {
        return $this->age / 1.8808158;
    }

    function jupiter(): float
    {
        return $this->age / 11.862615;
    }

    function saturn(): float
    {
        return $this->age / 29.447498;
    }

    function uranus(): float
    {
        return $this->age / 84.016846;
    }

    function neptune(): float
    {
        return $this->age / 164.79132;
    }
}
