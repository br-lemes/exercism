<?php
declare(strict_types=1);

function brackets_match(string $input): bool
{
    $bracketPairs = [')' => '(', '}' => '{', ']' => '['];
    $openingBrackets = array_values($bracketPairs);
    $closingBrackets = array_keys($bracketPairs);

    $stack = [];
    foreach (str_split($input) as $char) {
        if (in_array($char, $openingBrackets)) {
            $stack[] = $char;
            continue;
        }
        if (in_array($char, $closingBrackets)) {
            if (empty($stack)) {
                return false;
            }
            $lastOpen = array_pop($stack);
            if ($lastOpen !== $bracketPairs[$char]) {
                return false;
            }
        }
    }
    return empty($stack);
}
