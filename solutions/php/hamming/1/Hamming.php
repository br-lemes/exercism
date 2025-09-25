<?php
declare(strict_types=1);

function distance(string $strandA, string $strandB): int
{
    $aLen = strlen($strandA);
    $bLen = strlen($strandB);
    if ($aLen !== $bLen) {
        throw new InvalidArgumentException('DNA strands must be of equal length');
    }

    $count = 0;
    for ($i = 0; $i < $aLen; $i++) {
        if ($strandA[$i] !== $strandB[$i]) {
            $count++;
        }
    }
    return $count;
}
