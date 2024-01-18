<?php

declare(strict_types=1);

function isLeap(int $year): bool
{
    return date('d', strtotime("$year-02-28 +1 day")) === '29';
}
