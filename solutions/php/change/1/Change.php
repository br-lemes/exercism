<?php
declare(strict_types=1);

function findFewestCoins(array $coins, int $amount): array
{
    if ($amount < 0) {
        throw new InvalidArgumentException(
            'Cannot make change for negative value',
        );
    }
    if ($amount === 0) {
        return [];
    }
    $minCoin = min($coins);
    if ($amount < $minCoin) {
        throw new InvalidArgumentException(
            'No coins small enough to make change',
        );
    }

    $dp = array_fill(0, $amount + 1, PHP_INT_MAX);
    $parent = array_fill(0, $amount + 1, -1);

    $dp[0] = 0;

    for ($i = 1; $i <= $amount; $i++) {
        foreach ($coins as $coin) {
            if ($coin <= $i && $dp[$i - $coin] !== PHP_INT_MAX) {
                if ($dp[$i - $coin] + 1 < $dp[$i]) {
                    $dp[$i] = $dp[$i - $coin] + 1;
                    $parent[$i] = $coin;
                }
            }
        }
    }

    if ($dp[$amount] === PHP_INT_MAX) {
        throw new InvalidArgumentException(
            'No combination can add up to target',
        );
    }

    $result = [];
    $current = $amount;
    while ($current > 0) {
        $coin = $parent[$current];
        $result[] = $coin;
        $current -= $coin;
    }
    sort($result);
    return $result;
}
