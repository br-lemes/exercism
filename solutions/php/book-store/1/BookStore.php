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
    $groups = array_fill(0, 6, 0);
    $remaining = $counts;
    while (canFormGroup($remaining, 5)) {
        $groups[5] += 1;
        foreach ($remaining as &$value) {
            if ($value > 0) {
                $value -= 1;
            }
        }
        unset($value);
    }

    while (canFormGroup($remaining, 4)) {
        $groups[4] += 1;
        $formed = 0;
        foreach ($remaining as &$value) {
            if ($value > 0 and $formed < 4) {
                $value -= 1;
                $formed += 1;
            }
        }
        unset($value);
    }

    while (canFormGroup($remaining, 3)) {
        $groups[3] += 1;
        $formed = 0;
        foreach ($remaining as &$value) {
            if ($value > 0 and $formed < 3) {
                $value -= 1;
                $formed += 1;
            }
        }
        unset($value);
    }

    while (canFormGroup($remaining, 2)) {
        $groups[2] += 1;
        $formed = 0;
        foreach ($remaining as &$value) {
            if ($value > 0 and $formed < 2) {
                $value -= 1;
                $formed += 1;
            }
        }
        unset($value);
    }

    foreach ($remaining as $count) {
        $groups[1] += $count;
    }

    while ($groups[5] > 0 and $groups[3] > 0) {
        $groups[5] -= 1;
        $groups[3] -= 1;
        $groups[4] += 2;
    }

    $totalCost = 0;
    $totalCost += $groups[1] * getGroupPrice(1);
    $totalCost += $groups[2] * getGroupPrice(2);
    $totalCost += $groups[3] * getGroupPrice(3);
    $totalCost += $groups[4] * getGroupPrice(4);
    $totalCost += $groups[5] * getGroupPrice(5);

    return $totalCost;
}

function canFormGroup(array $counts, int $groupSize): bool
{
    $availableTypes = 0;
    foreach ($counts as $count) {
        if ($count > 0) {
            $availableTypes++;
        }
    }
    return $availableTypes >= $groupSize;
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
