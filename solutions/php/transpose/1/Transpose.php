<?php
declare(strict_types=1);

function transpose(array $input): array
{
    $numRows = count($input);
    $numCols = max(array_map('strlen', $input));

    if ($numRows === 0 || $numCols === 0) {
        return [''];
    }

    $transposed = [];
    for ($j = 0; $j < $numCols; $j++) {
        $newRow = '';
        $trailingSpaces = 0;
        for ($i = 0; $i < $numRows; $i++) {
            if ($j < strlen($input[$i])) {
                $newRow .= str_repeat(' ', $trailingSpaces);
                $trailingSpaces = 0;
                $newRow .= $input[$i][$j];
                continue;
            }
            $trailingSpaces++;
        }
        $transposed[] = $newRow;
    }

    return $transposed;
}
