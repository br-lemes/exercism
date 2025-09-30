<?php
declare(strict_types=1);

class HighScores
{
    public array $scores;

    public readonly int $latest;
    public readonly int $personalBest;
    public readonly array $personalTopThree;

    public function __construct(array $scores)
    {
        $this->scores = $scores;
        $this->latest = !empty($scores) ? end($scores) : 0;
        $this->personalBest = !empty($scores) ? max($scores) : 0;

        $sorted = $scores;
        rsort($sorted, SORT_NUMERIC);
        $this->personalTopThree = array_slice($sorted, 0, 3);
    }
}
