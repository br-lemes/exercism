<?php

declare(strict_types=1);

function isLeap(int $year): bool
{
    return date('d', strtotime("$year-02-29")) === '29';
}
