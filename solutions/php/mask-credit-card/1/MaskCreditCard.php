<?php
declare(strict_types=1);

function maskify(string $cc): string
{
    $length = strlen($cc);
    if ($length < 6) {
        return $cc;
    }
    for ($i = 1; $i < $length - 4; $i++) {
        if ($cc[$i] === '-') {
            continue;
        }
        $cc[$i] = '#';
    }
    return $cc;
}
