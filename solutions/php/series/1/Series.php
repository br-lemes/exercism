<?php
declare(strict_types=1);

function slices(string $digits, int $series): array
{
    if ($series <= 0) {
        throw new Exception();
    }

    $digitsLength = strlen($digits);
    if ($series > $digitsLength) {
        throw new Exception();
    }

    $result = [];
    for ($i = 0; $i <= $digitsLength - $series; $i++) {
        $result[] = substr($digits, $i, $series);
    }
    return $result;
}
