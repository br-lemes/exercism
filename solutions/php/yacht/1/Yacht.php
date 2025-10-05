<?php
declare(strict_types=1);

class Yacht
{
    public function score(array $rolls, string $category): int
    {
        sort($rolls);

        return match ($category) {
            'ones' => $this->sumOfDice($rolls, 1),
            'twos' => $this->sumOfDice($rolls, 2),
            'threes' => $this->sumOfDice($rolls, 3),
            'fours' => $this->sumOfDice($rolls, 4),
            'fives' => $this->sumOfDice($rolls, 5),
            'sixes' => $this->sumOfDice($rolls, 6),
            'full house' => $this->fullHouse($rolls),
            'four of a kind' => $this->fourOfAKind($rolls),
            'little straight' => $this->isLittleStraight($rolls) ? 30 : 0,
            'big straight' => $this->isBigStraight($rolls) ? 30 : 0,
            'choice' => array_sum($rolls),
            'yacht' => $this->isYacht($rolls) ? 50 : 0,
            default => 0,
        };
    }

    private function sumOfDice(array $rolls, int $value): int
    {
        $counts = array_count_values($rolls);
        return $value * ($counts[$value] ?? 0);
    }

    private function fullHouse(array $rolls): int
    {
        $counts = array_count_values($rolls);

        if (count($counts) === 2) {
            $values = array_values($counts);
            if (
                ($values[0] === 2 && $values[1] === 3) ||
                ($values[0] === 3 && $values[1] === 2)
            ) {
                return array_sum($rolls);
            }
        }

        return 0;
    }

    private function fourOfAKind(array $rolls): int
    {
        $counts = array_count_values($rolls);

        foreach ($counts as $value => $count) {
            if ($count >= 4) {
                return $value * 4;
            }
        }

        return 0;
    }

    private function isLittleStraight(array $rolls): bool
    {
        return $rolls === [1, 2, 3, 4, 5];
    }

    private function isBigStraight(array $rolls): bool
    {
        return $rolls === [2, 3, 4, 5, 6];
    }

    private function isYacht(array $rolls): bool
    {
        return count(array_unique($rolls)) === 1;
    }
}
