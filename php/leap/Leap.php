<?php

declare(strict_types=1);

function isLeap(int $year): bool
{
    if ($year % 4 === 0) {
        if ($year % 100 === 0) {
            if ($year % 400 === 0) {
                return true;
            }
            return false;
        }
        return true;
    }
    return false;
}
