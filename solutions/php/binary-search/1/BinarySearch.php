<?php
declare(strict_types=1);

function find(int $needle, array $haystack): int
{
    if (empty($haystack)) {
        return -1;
    }

    $left = 0;
    $right = count($haystack) - 1;

    while ($left <= $right) {
        $mid = intdiv($left + $right, 2);
        if ($haystack[$mid] === $needle) {
            return $mid;
        }
        if ($haystack[$mid] < $needle) {
            $left = $mid + 1;
        } else {
            $right = $mid - 1;
        }
    }

    return -1;
}
