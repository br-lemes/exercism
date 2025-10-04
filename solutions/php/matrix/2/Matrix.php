<?php
declare(strict_types=1);

class Matrix
{
    private array $matrix;

    function __construct(string $matrix)
    {
        $this->matrix = array_map(
            fn($row) => array_map(fn($n) => (int) $n, explode(' ', $row)),
            explode("\n", $matrix),
        );
    }

    function getRow(int $rowId): array
    {
        return $this->matrix[$rowId - 1];
    }

    function getColumn(int $columnId): array
    {
        return array_column($this->matrix, $columnId - 1);
    }
}
