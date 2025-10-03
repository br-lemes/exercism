<?php
declare(strict_types=1);

function placeQueen(int $xCoordinate, int $yCoordinate): bool
{
    if ($xCoordinate < 0 || $yCoordinate < 0) {
        throw new InvalidArgumentException(
            'The rank and file numbers must be positive.',
        );
    }
    if ($xCoordinate > 7 || $yCoordinate > 7) {
        throw new InvalidArgumentException(
            'The position must be on a standard size chess board.',
        );
    }
    return true;
}

function canAttack(array $whiteQueen, array $blackQueen): bool
{
    if ($whiteQueen[0] == $blackQueen[0]) {
        return true;
    }
    if ($whiteQueen[1] == $blackQueen[1]) {
        return true;
    }
    $rowDiff = abs($whiteQueen[0] - $blackQueen[0]);
    $colDiff = abs($whiteQueen[1] - $blackQueen[1]);
    return $rowDiff == $colDiff;
}
