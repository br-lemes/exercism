<?php
declare(strict_types=1);

function diamond(string $letter): array
{
    $n = ord($letter) - ord('A');
    $lines = [];
    for ($i = 0; $i <= $n; $i++) {
        $char = chr(ord('A') + $i);
        $outerSpaces = str_repeat(' ', $n - $i);
        if ($i === 0) {
            $lines[] = $outerSpaces . $char . $outerSpaces;
        } else {
            $innerSpaces = str_repeat(' ', 2 * $i - 1);
            $lines[] =
                $outerSpaces . $char . $innerSpaces . $char . $outerSpaces;
        }
    }
    for ($i = $n - 1; $i >= 0; $i--) {
        $lines[] = $lines[$i];
    }
    return $lines;
}
