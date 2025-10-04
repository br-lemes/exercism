<?php
declare(strict_types=1);

function isPangram(string $string): bool
{
    $string = strtolower($string);
    $counts = [];
    for ($i = 0; $i < strlen($string); $i++) {
        $char = $string[$i];
        if ($char >= 'a' && $char <= 'z') {
            $counts[$char] = (isset($counts[$char]) ? $counts[$char] : 0) + 1;
        }
    }
    return count($counts) === 26;
}
