<?php
declare(strict_types=1);

function vlq_encode(array $input): array
{
    $encoded = [];

    foreach ($input as $number) {
        if ($number === 0) {
            $encoded[] = 0;
            continue;
        }

        $bytes = [];
        $bytes[] = $number & 0x7f;
        $number >>= 7;

        while ($number > 0) {
            $byte = $number & 0x7f;
            $byte |= 0x80;
            $bytes[] = $byte;
            $number >>= 7;
        }

        $encoded = array_merge($encoded, array_reverse($bytes));
    }

    return $encoded;
}

function vlq_decode(array $input): array
{
    $decoded = [];
    $currentNumberBytes = [];

    foreach ($input as $byte) {
        $currentNumberBytes[] = $byte;
        if (($byte & 0x80) === 0) {
            $number = 0;
            foreach ($currentNumberBytes as $b) {
                $number = $number * 128 + ($b & 0x7f);
                if ($number > 0x7fffffff) {
                    throw new OverflowException();
                }
            }
            $decoded[] = $number;
            $currentNumberBytes = [];
        }
    }

    if (count($currentNumberBytes) > 0) {
        throw new InvalidArgumentException();
    }

    return $decoded;
}
