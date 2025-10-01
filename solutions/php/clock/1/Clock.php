<?php
declare(strict_types=1);

class Clock
{
    private int $hours;
    private int $minutes;

    function __construct(int $hours, int $minutes = 0)
    {
        $this->hours = $hours;
        $this->minutes = $minutes;
        $this->normalize();
    }

    function __toString(): string
    {
        return sprintf('%02d:%02d', $this->hours, $this->minutes);
    }

    function add(int $minutes): Clock
    {
        return new Clock($this->hours, $this->minutes + $minutes);
    }

    function sub(int $minutes): Clock
    {
        return new Clock($this->hours, $this->minutes - $minutes);
    }

    private function normalize(): void
    {
        $totalMinutes = $this->hours * 60 + $this->minutes;
        $totalMinutes = (($totalMinutes % (24 * 60)) + 24 * 60) % (24 * 60);
        $this->hours = intdiv($totalMinutes, 60);
        $this->minutes = $totalMinutes % 60;
    }
}
