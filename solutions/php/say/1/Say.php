<?php
declare(strict_types=1);

function say(int $number): string
{
    if ($number < 0 || $number > 999999999999) {
        throw new InvalidArgumentException('Input out of range');
    }

    if ($number === 0) {
        return 'zero';
    }

    $scales = ['', 'thousand', 'million', 'billion'];
    $result = '';
    $scaleIndex = 0;
    while ($number > 0) {
        $chunk = $number % 1000;
        if ($chunk > 0) {
            $chunkStr = convertHundreds($chunk);
            $result = "$chunkStr $scales[$scaleIndex] $result";
        }
        $number = intdiv($number, 1000);
        $scaleIndex++;
    }
    return trim($result);
}

function convertHundreds(int $number): string
{
    $ones = [
        '',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
        'ten',
        'eleven',
        'twelve',
        'thirteen',
        'fourteen',
        'fifteen',
        'sixteen',
        'seventeen',
        'eighteen',
        'nineteen',
    ];
    $tens = [
        '',
        '',
        'twenty',
        'thirty',
        'forty',
        'fifty',
        'sixty',
        'seventy',
        'eighty',
        'ninety',
    ];

    $result = '';
    if ($number >= 100) {
        $result .= "{$ones[intdiv($number, 100)]} hundred ";
        $number %= 100;
    }
    if ($number >= 20) {
        $result .= $tens[intdiv($number, 10)];
        if ($number % 10 !== 0) {
            $result .= "-{$ones[$number % 10]}";
        }
    } elseif ($number > 0) {
        $result .= $ones[$number];
    }
    return trim($result);
}
