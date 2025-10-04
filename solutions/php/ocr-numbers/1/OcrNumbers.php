<?php
declare(strict_types=1);

function recognize(array $input): string
{
    if (count($input) % 4 !== 0) {
        throw new InvalidArgumentException();
    }

    $result = [];
    for ($i = 0; $i < count($input); $i += 4) {
        $line1 = $input[$i];
        $line2 = $input[$i + 1];
        $line3 = $input[$i + 2];
        $result[] = parseLine($line1, $line2, $line3);
    }
    return implode(',', $result);
}

function parseLine(string $line1, string $line2, string $line3): string
{
    if (
        strlen($line1) % 3 !== 0 ||
        strlen($line2) % 3 !== 0 ||
        strlen($line3) % 3 !== 0
    ) {
        throw new InvalidArgumentException();
    }

    $result = '';
    for ($i = 0; $i < strlen($line1); $i += 3) {
        $char1 = substr($line1, $i, 3);
        $char2 = substr($line2, $i, 3);
        $char3 = substr($line3, $i, 3);
        $result .= parseChar($char1, $char2, $char3);
    }
    return $result;
}

function parseChar(string $char1, string $char2, string $char3): string
{
    $pattern = $char1 . $char2 . $char3;
    switch ($pattern) {
        case ' _ | ||_|':
            return '0';
        case '     |  |':
            return '1';
        case ' _  _||_ ':
            return '2';
        case ' _  _| _|':
            return '3';
        case '   |_|  |':
            return '4';
        case ' _ |_  _|':
            return '5';
        case ' _ |_ |_|':
            return '6';
        case ' _   |  |':
            return '7';
        case ' _ |_||_|':
            return '8';
        case ' _ |_| _|':
            return '9';
        default:
            return '?';
    }
}
