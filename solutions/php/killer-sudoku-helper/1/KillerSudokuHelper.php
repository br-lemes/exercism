<?php
declare(strict_types=1);

class KillerSudokuHelper
{
    private array $result = [];
    private array $exclude = [];
    private int $sum = 0;
    private int $size = 0;

    function combinations(int $sum, int $size, array $exclude): array
    {
        $this->sum = $sum;
        $this->size = $size;
        $this->exclude = array_unique($exclude);
        $this->result = [];

        $this->findCombinations(1, []);

        return $this->result;
    }

    private function findCombinations(int $start, array $current): void
    {
        $currentSum = array_sum($current);
        $currentSize = count($current);

        if ($currentSum === $this->sum && $currentSize === $this->size) {
            $this->result[] = $current;
            return;
        }

        if ($currentSum >= $this->sum || $currentSize >= $this->size) {
            return;
        }

        for ($i = $start; $i <= 9; $i++) {
            if (
                in_array($i, $this->exclude, true) ||
                in_array($i, $current, true)
            ) {
                continue;
            }

            if ($currentSum + $i > $this->sum) {
                continue;
            }

            $current[] = $i;
            $this->findCombinations($i + 1, $current);
            array_pop($current);
        }
    }
}
