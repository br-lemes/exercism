<?php
declare(strict_types=1);

class Knapsack
{
    function getMaximumValue(int $maximumWeight, array $items): int
    {
        $dp = array_fill(0, $maximumWeight + 1, 0);

        foreach ($items as $item) {
            for ($w = $maximumWeight; $w >= $item['weight']; $w--) {
                $dp[$w] = max(
                    $dp[$w],
                    $dp[$w - $item['weight']] + $item['value'],
                );
            }
        }

        return $dp[$maximumWeight];
    }
}
