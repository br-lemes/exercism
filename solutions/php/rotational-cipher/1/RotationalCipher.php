<?php
declare(strict_types=1);

class RotationalCipher
{
    function rotate(string $text, int $shift): string
    {
        $result = '';
        for ($i = 0; $i < strlen($text); $i++) {
            $char = $text[$i];
            if (ctype_alpha($char)) {
                $offset = ord(strtolower($char)) - ord('a');
                $rotatedChar = chr(ord('a') + (($offset + $shift) % 26));
                $result .=
                    $char === strtoupper($char)
                        ? strtoupper($rotatedChar)
                        : $rotatedChar;
            } else {
                $result .= $char;
            }
        }
        return $result;
    }
}
