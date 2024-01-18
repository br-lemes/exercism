<?php

declare(strict_types=1);

function isLeap(int $year): bool
{
    if ($year % 4 !== 0) {
        return false;
    }
    if ($year % 100 !== 0) {
        return true;
    }
    if ($year % 400 !== 0) {
        return false;
    }
    return true;
}
