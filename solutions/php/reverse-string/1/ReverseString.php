<?php
declare(strict_types=1);

function reverseString(string $text): string
{
    $result = '';
    foreach (str_split($text) as $char) {
        $result = "$char$result";
    }
    return $result;
}
