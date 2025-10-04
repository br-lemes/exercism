<?php
declare(strict_types=1);

function translateWord(string $word): string
{
    if (preg_match('/^[aeiouAEIOU]|^xr|^yt/', $word)) {
        return "{$word}ay";
    }
    $rule3 = preg_match('/^[^aeiouAEIOU]*qu/', $word, $matches);
    if ($rule3) {
        $prefix = $matches[0];
        $rest = substr($word, strlen($prefix));
        return "{$rest}{$prefix}ay";
    }
    $rule4 = preg_match('/^([^aeiouAEIOU]+)y/', $word, $matches);
    if ($rule4) {
        $prefix = $matches[1];
        $rest = substr($word, strlen($prefix));
        return "{$rest}{$prefix}ay";
    }
    $rule2 = preg_match('/^[^aeiouAEIOU]+/', $word, $matches);
    if ($rule2) {
        $prefix = $matches[0];
        $rest = substr($word, strlen($prefix));
        return "{$rest}{$prefix}ay";
    }
    return "{$word}ay";
}

function translate(string $text): string
{
    $words = explode(' ', $text);
    return implode(' ', array_map('translateWord', $words));
}
