<?php
declare(strict_types=1);

function total(array $items): int
{
    if (empty($items)) {
        return 0;
    }

    $counts = array_fill(0, 5, 0);
    foreach ($items as $item) {
        if ($item >= 1 and $item <= 5) {
            $counts[$item - 1] += 1;
        }
    }

    return bestPrice($counts);
}

function bestPrice(array $counts): int
{
    $groups = array_fill(1, 5, 0);
    $remaining = $counts;

    for ($groupSize = 5; $groupSize >= 2; $groupSize--) {
        while (canFormGroup($remaining, $groupSize)) {
            $groups[$groupSize]++;
            $toRemove = $groupSize;
            for ($i = 0; $i < 5 && $toRemove > 0; $i++) {
                if ($remaining[$i] > 0) {
                    $remaining[$i]--;
                    $toRemove--;
                }
            }
        }
    }

    $groups[1] = array_sum($remaining);

    $swapCount = min($groups[5], $groups[3]);
    $groups[5] -= $swapCount;
    $groups[3] -= $swapCount;
    $groups[4] += 2 * $swapCount;

    $totalCost = 0;
    foreach ($groups as $size => $count) {
        $totalCost += $count * getGroupPrice($size);
    }

    return $totalCost;
}

function canFormGroup(array $counts, int $groupSize): bool
{
    $unique = 0;
    foreach ($counts as $count) {
        if ($count > 0) {
            $unique++;
            if ($unique >= $groupSize) {
                return true;
            }
        }
    }
    return false;
}

function getGroupPrice(int $groupSize): int
{
    $basePrice = 800;

    return match ($groupSize) {
        1 => $basePrice,
        2 => (int) ($basePrice * 2 * 95) / 100,
        3 => (int) ($basePrice * 3 * 90) / 100,
        4 => (int) ($basePrice * 4 * 80) / 100,
        5 => (int) ($basePrice * 5 * 75) / 100,
        default => 0,
    };
}
