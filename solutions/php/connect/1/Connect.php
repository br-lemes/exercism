<?php
declare(strict_types=1);

function winner(array $lines): ?string
{
    if (empty($lines)) {
        return null;
    }

    $board = parseBoard($lines);
    $rows = count($board);
    $cols = count($board[0]);

    if (checkXWins($board, $rows, $cols)) {
        return 'black';
    }
    if (checkOWins($board, $rows, $cols)) {
        return 'white';
    }

    return '';
}

function parseBoard(array $lines): array
{
    $board = [];
    foreach ($lines as $rowIndex => $line) {
        $row = [];
        $chars = str_split($line);
        foreach ($chars as $char) {
            if ($char !== ' ') {
                $row[] = $char;
            }
        }
        $board[] = $row;
    }
    return $board;
}

function checkXWins(array $board, int $rows, int $cols): bool
{
    $visited = array_fill(0, $rows, array_fill(0, $cols, false));
    for ($row = 0; $row < $rows; $row++) {
        if ($board[$row][0] === 'X' && !$visited[$row][0]) {
            if (dfsX($board, $visited, $row, 0, $rows, $cols)) {
                return true;
            }
        }
    }
    return false;
}

function checkOWins(array $board, int $rows, int $cols): bool
{
    $visited = array_fill(0, $rows, array_fill(0, $cols, false));
    for ($col = 0; $col < $cols; $col++) {
        if ($board[0][$col] === 'O' && !$visited[0][$col]) {
            if (dfsO($board, $visited, 0, $col, $rows, $cols)) {
                return true;
            }
        }
    }
    return false;
}

function dfsX(
    array $board,
    array &$visited,
    int $row,
    int $col,
    int $rows,
    int $cols,
): bool {
    if ($col === $cols - 1) {
        return true;
    }
    $visited[$row][$col] = true;
    $neighbors = getHexNeighbors($row, $col, $rows, $cols);
    foreach ($neighbors as [$newRow, $newCol]) {
        if (!$visited[$newRow][$newCol] && $board[$newRow][$newCol] === 'X') {
            if (dfsX($board, $visited, $newRow, $newCol, $rows, $cols)) {
                return true;
            }
        }
    }
    return false;
}

function dfsO(
    array $board,
    array &$visited,
    int $row,
    int $col,
    int $rows,
    int $cols,
): bool {
    if ($row === $rows - 1) {
        return true;
    }
    $visited[$row][$col] = true;
    $neighbors = getHexNeighbors($row, $col, $rows, $cols);
    foreach ($neighbors as [$newRow, $newCol]) {
        if (!$visited[$newRow][$newCol] && $board[$newRow][$newCol] === 'O') {
            if (dfsO($board, $visited, $newRow, $newCol, $rows, $cols)) {
                return true;
            }
        }
    }
    return false;
}

function getHexNeighbors(int $row, int $col, int $rows, int $cols): array
{
    $neighbors = [];
    if ($row > 0) {
        $neighbors[] = [$row - 1, $col];
    }
    if ($row > 0 && $col < $cols - 1) {
        $neighbors[] = [$row - 1, $col + 1];
    }
    if ($col > 0) {
        $neighbors[] = [$row, $col - 1];
    }
    if ($col < $cols - 1) {
        $neighbors[] = [$row, $col + 1];
    }
    if ($row < $rows - 1 && $col > 0) {
        $neighbors[] = [$row + 1, $col - 1];
    }
    if ($row < $rows - 1) {
        $neighbors[] = [$row + 1, $col];
    }
    return $neighbors;
}
