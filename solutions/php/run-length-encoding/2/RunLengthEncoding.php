<?php
declare(strict_types=1);

function encode(string $input): string
{
    return preg_replace_callback(
        '/(.)\1+/',
        fn($matches) => strlen($matches[0]) . $matches[1],
        $input,
    );
}

function decode(string $input): string
{
    return preg_replace_callback(
        '/(\d+)(\D)/',
        fn($matches) => str_repeat($matches[2], (int) $matches[1]),
        $input,
    );
}
