<?php

declare(strict_types=1);

function isLeap(int $year): bool
{
    return date('d', mktime(0, 0, 0, 2, 29, $year)) === '29';
}
