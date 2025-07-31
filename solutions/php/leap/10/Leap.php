<?php

declare(strict_types=1);

function isLeap(int $year): bool
{
    return (new DateTime("$year-02-29"))->format('d') === '29';
}
