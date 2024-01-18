<?php

declare(strict_types=1);

function isLeap(int $year): bool
{
    return match (true) {
        $year % 4 !== 0 => false,
        $year % 100 !== 0 => true,
        $year % 400 !== 0 => false,
        default => true
    };
}
