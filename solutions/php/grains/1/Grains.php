<?php
declare(strict_types=1);

function square(int $number): string
{
    if ($number < 1 || $number > 64) {
        throw new InvalidArgumentException();
    }
    return sprintf('%u', 1 << $number - 1);
}

function total(): string
{
    return sprintf('%u', (1 << 64) - 1);
}
