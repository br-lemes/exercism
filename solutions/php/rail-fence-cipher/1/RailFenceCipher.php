<?php
declare(strict_types=1);

function encode(string $plainMessage, int $rails): string
{
    if ($rails === 1) {
        return $plainMessage;
    }

    $fence = array_fill(0, $rails, []);
    $rail = 0;
    $direction = 1;
    $result = '';
    for ($i = 0; $i < strlen($plainMessage); $i++) {
        $fence[$rail][] = $plainMessage[$i];
        $rail += $direction;
        if ($rail === $rails - 1 || $rail === 0) {
            $direction *= -1;
        }
    }
    foreach ($fence as $rail) {
        $result .= implode('', $rail);
    }
    return $result;
}

function decode(string $cipherMessage, int $rails): string
{
    if ($rails === 1) {
        return $cipherMessage;
    }

    $length = strlen($cipherMessage);
    $rail = 0;
    $direction = 1;
    $pattern = [];
    for ($i = 0; $i < $length; $i++) {
        $pattern[] = $rail;
        $rail += $direction;
        if ($rail === $rails - 1 || $rail === 0) {
            $direction *= -1;
        }
    }
    $railPositions = [];
    for ($i = 0; $i < $rails; $i++) {
        $railPositions[$i] = [];
    }
    for ($i = 0; $i < $length; $i++) {
        $railPositions[$pattern[$i]][] = $i;
    }
    $positions = [];
    foreach ($railPositions as $rail) {
        $positions = array_merge($positions, $rail);
    }
    $decoded = array_fill(0, $length, '');
    for ($i = 0; $i < $length; $i++) {
        $decoded[$positions[$i]] = $cipherMessage[$i];
    }
    return implode('', $decoded);
}
