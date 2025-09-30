<?php
declare(strict_types=1);

function acronym(string $text): string
{
    $text = preg_split('/[a-z](?=[A-Z])|[- ]/', $text);
    $text = array_map(fn($word) => strtoupper($word[0] ?? ''), $text);
    return implode('', $text);
}
