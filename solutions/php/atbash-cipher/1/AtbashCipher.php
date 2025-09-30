<?php
declare(strict_types=1);

function encode(string $text): string
{
    $result = [];
    $count = 0;
    $text = strtolower($text);
    for ($i = 0; $i < strlen($text); $i++) {
        $char = $text[$i];
        if (ctype_digit($char)) {
            if ($count > 0 && $count % 5 === 0) {
                $result[] = ' ';
            }
            $result[] = $char;
            $count++;
            continue;
        }
        if (ctype_alpha($char)) {
            if ($count > 0 && $count % 5 === 0) {
                $result[] = ' ';
            }
            $result[] = chr(122 - (ord($char) - 97));
            $count++;
        }
    }
    return implode('', $result);
}

function decode(string $text): string
{
    $result = [];
    for ($i = 0; $i < strlen($text); $i++) {
        $char = $text[$i];
        if (ctype_digit($char)) {
            $result[] = $char;
            continue;
        }
        if (ctype_alpha($char)) {
            $result[] = chr(122 - (ord($char) - 97));
        }
    }
    return implode('', $result);
}
