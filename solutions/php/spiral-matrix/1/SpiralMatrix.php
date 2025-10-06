<?php
declare(strict_types=1);

class SpiralMatrix
{
    function draw(int $n): array
    {
        if ($n === 0) {
            return [];
        }

        $matrix = array_fill(0, $n, array_fill(0, $n, 0));

        $top = 0;
        $bottom = $n - 1;
        $left = 0;
        $right = $n - 1;
        $num = 1;

        while ($top <= $bottom && $left <= $right) {
            for ($i = $left; $i <= $right; $i++) {
                $matrix[$top][$i] = $num++;
            }
            $top++;

            for ($i = $top; $i <= $bottom; $i++) {
                $matrix[$i][$right] = $num++;
            }
            $right--;

            if ($top <= $bottom) {
                for ($i = $right; $i >= $left; $i--) {
                    $matrix[$bottom][$i] = $num++;
                }
                $bottom--;
            }

            if ($left <= $right) {
                for ($i = $bottom; $i >= $top; $i--) {
                    $matrix[$i][$left] = $num++;
                }
                $left++;
            }
        }

        return $matrix;
    }
}
