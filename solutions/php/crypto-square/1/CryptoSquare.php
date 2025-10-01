<?php
declare(strict_types=1);

function crypto_square(string $plaintext): string
{
    $plaintext = preg_replace('/[^a-zA-Z0-9]/', '', $plaintext);
    $plaintext = strtolower($plaintext);
    $len = strlen($plaintext);
    if ($len === 0) {
        return '';
    } else {
        $cols = ceil(sqrt($len));
        $rows = ceil($len / $cols);
    }
    $chunks = [];
    for ($i = 0; $i < $cols; $i++) {
        $chunk = '';
        for ($j = 0; $j < $rows; $j++) {
            $index = (int) ($i + $j * $cols);
            if ($index < $len) {
                $chunk .= $plaintext[$index];
            } else {
                $chunk .= ' ';
            }
        }
        $chunks[] = $chunk;
    }
    return implode(' ', $chunks);
}
