<?php
declare(strict_types=1);

function score(float $xAxis, float $yAxis): int
{
    $distance = sqrt($xAxis ** 2 + $yAxis ** 2);
    if ($distance > 10) {
        return 0;
    }
    if ($distance > 5) {
        return 1;
    }
    if ($distance > 1) {
        return 5;
    }
    return 10;
}
