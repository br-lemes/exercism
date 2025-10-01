<?php
declare(strict_types=1);

function transform(array $input): array
{
    $output = [];
    foreach ($input as $score => $letters) {
        foreach ($letters as $letter) {
            $output[strtolower($letter)] = $score;
        }
    }
    return $output;
}
