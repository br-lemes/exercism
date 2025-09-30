<?php
declare(strict_types=1);

function normalize(string $str): string
{
    $str = str_split($str);
    sort($str);
    return implode('', $str);
}

function detectAnagrams(string $word, array $anagrams): array
{
    $lowerWord = strtolower($word);
    $normalizedWord = normalize($lowerWord);
    $result = [];
    foreach ($anagrams as $anagram) {
        $lowerAnagram = strtolower($anagram);
        if ($lowerWord === $lowerAnagram) {
            continue;
        }
        if ($normalizedWord === normalize($lowerAnagram)) {
            $result[] = $anagram;
        }
    }
    return $result;
}
