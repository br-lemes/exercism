<?php
declare(strict_types=1);

function calculate(string $input): int
{
    if (
        !str_starts_with($input, 'What is') ||
        !str_ends_with($input, '?') ||
        str_contains($input, 'cubed')
    ) {
        throw new InvalidArgumentException();
    }

    $expression = trim(substr($input, 8, -1));
    $tokens = explode(' ', $expression);

    $result = intval($tokens[0]);
    $i = 1;
    while ($i < count($tokens)) {
        $operator = $tokens[$i];

        if ($operator === 'plus' || $operator === 'minus') {
            $operand = intval($tokens[$i + 1]);
            if ($operator === 'plus') {
                $result += $operand;
            } elseif ($operator === 'minus') {
                $result -= $operand;
            }
            $i += 2;
            continue;
        }
        if ($operator === 'multiplied' || $operator === 'divided') {
            $operand = intval($tokens[$i + 2]);
            if ($operator === 'multiplied') {
                $result *= $operand;
            } elseif ($operator === 'divided') {
                $result /= $operand;
            }
            $i += 3;
            continue;
        }
    }
    return $result;
}
