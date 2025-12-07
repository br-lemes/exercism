<?php
declare(strict_types=1);

class Lasagna
{
    function expectedCookTime(): int
    {
        return 40;
    }

    function remainingCookTime(int $elapsed_minutes): int
    {
        return $this->expectedCookTime() - $elapsed_minutes;
    }

    function totalPreparationTime(int $layers_to_prep): int
    {
        return 2 * $layers_to_prep;
    }

    function totalElapsedTime(int $layers_to_prep, int $elapsed_minutes): int
    {
        return $this->totalPreparationTime($layers_to_prep) + $elapsed_minutes;
    }

    function alarm(): string
    {
        return "Ding!";
    }
}
