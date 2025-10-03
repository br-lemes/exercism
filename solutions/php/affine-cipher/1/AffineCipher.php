<?php
declare(strict_types=1);

function gcd(int $a, int $b): int
{
    while ($b !== 0) {
        $temp = $a % $b;
        $a = $b;
        $b = $temp;
    }
    return $a;
}

function mmi(int $a, int $m): int
{
    $a = $a % $m;
    for ($x = 1; $x < $m; $x++) {
        if (($a * $x) % $m === 1) {
            return $x;
        }
    }
    throw new Exception();
}

function processText(string $text, int $a, int $b, bool $encode = true): string
{
    $m = 26;
    if (gcd($a, $m) !== 1) {
        throw new Exception();
    }
    $result = '';
    $groupCount = 0;
    $textToProcess = $encode
        ? strtolower($text)
        : str_replace(' ', '', strtolower($text));
    foreach (str_split($textToProcess) as $char) {
        if (ctype_lower($char)) {
            $x = ord($char) - ord('a');
            if ($encode) {
                $y = ($a * $x + $b) % $m;
                if ($y < 0) {
                    $y += $m;
                }
                $result .= chr($y + ord('a'));
                $groupCount++;
                if ($groupCount % 5 === 0) {
                    $result .= ' ';
                }
                continue;
            }
            $aInverse = mmi($a, $m);
            $y = ($aInverse * ($x - $b + $m)) % $m;
            if ($y < 0) {
                $y += $m;
            }
            $result .= chr($y + ord('a'));
            continue;
        }
        if (ctype_digit($char)) {
            $result .= $char;
            if ($encode) {
                $groupCount++;
                if ($groupCount % 5 === 0) {
                    $result .= ' ';
                }
            }
            continue;
        }
    }
    return trim($result);
}

function encode(string $text, int $a, int $b): string
{
    return processText($text, $a, $b, true);
}

function decode(string $text, int $a, int $b): string
{
    return processText($text, $a, $b, false);
}
