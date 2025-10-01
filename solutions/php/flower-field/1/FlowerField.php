<?php
declare(strict_types=1);

class FlowerField
{
    private array $garden;
    private int $rows;
    private int $cols;

    public function __construct(array $garden)
    {
        $this->garden = $garden;
        $this->rows = count($garden);
        $this->cols = $this->rows > 0 ? strlen($garden[0] ?? '') : 0;
    }

    public function annotate(): array
    {
        if ($this->rows === 0) {
            return [];
        }
        $result = [];
        for ($i = 0; $i < $this->rows; $i++) {
            $row = '';
            for ($j = 0; $j < $this->cols; $j++) {
                $current = $this->garden[$i][$j];
                if ($current === '*') {
                    $row .= '*';
                    continue;
                }
                $count = $this->countAdjacentFlowers($i, $j);
                $row .= $count > 0 ? (string) $count : ' ';
            }
            $result[] = $row;
        }
        return $result;
    }

    private function countAdjacentFlowers(int $row, int $col): int
    {
        $count = 0;
        for ($i = $row - 1; $i <= $row + 1; $i++) {
            for ($j = $col - 1; $j <= $col + 1; $j++) {
                if ($i === $row && $j === $col) {
                    continue;
                }
                if (
                    $i >= 0 &&
                    $i < $this->rows &&
                    $j >= 0 &&
                    $j < $this->cols
                ) {
                    if (
                        isset($this->garden[$i][$j]) &&
                        $this->garden[$i][$j] === '*'
                    ) {
                        $count++;
                    }
                }
            }
        }
        return $count;
    }
}
