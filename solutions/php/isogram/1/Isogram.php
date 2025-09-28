<?php
declare(strict_types=1);

function isIsogram(string $word): bool
{
    $counts = [];
    foreach (str_split(strtoupper($word)) as $char) {
        if (!ctype_alpha($char)) {
            continue;
        }
        if (isset($counts[$char])) {
            return false;
        }
        $counts[$char] = true;
    }
    return true;
}
