<?php
declare(strict_types=1);

function pascalsTriangleRows(int $rowCount)
{
    $rows = [];
    for ($i = 0; $i < $rowCount; $i++) {
        $row = [];
        for ($j = 0; $j <= $i; $j++) {
            if ($j === 0 || $j === $i) {
                $row[] = 1;
            } else {
                $row[] = $rows[$i - 1][$j - 1] + $rows[$i - 1][$j];
            }
        }
        $rows[] = $row;
    }
    return $rows;
}
