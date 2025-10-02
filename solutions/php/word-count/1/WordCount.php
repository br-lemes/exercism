<?php
declare(strict_types=1);

function wordCount(string $words): array
{
    $words = preg_split('/\W+/', strtolower($words), -1, PREG_SPLIT_NO_EMPTY);
    $wordCount = [];
    foreach ($words as $word) {
        if (isset($wordCount[$word])) {
            $wordCount[$word]++;
        } else {
            $wordCount[$word] = 1;
        }
    }
    return $wordCount;
}
