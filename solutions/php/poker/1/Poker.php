<?php
declare(strict_types=1);

class Poker
{
    public array $bestHands = [];
    private const CARD_RANKS = [
        '2' => 2,
        '3' => 3,
        '4' => 4,
        '5' => 5,
        '6' => 6,
        '7' => 7,
        '8' => 8,
        '9' => 9,
        '10' => 10,
        'J' => 11,
        'Q' => 12,
        'K' => 13,
        'A' => 14,
    ];

    public function __construct(array $hands)
    {
        $this->bestHands = $this->evaluateHands($hands);
    }

    private function evaluateHands(array $hands): array
    {
        if (empty($hands)) {
            return [];
        }

        $evaluatedHands = [];
        $maxScore = 0;
        $bestHands = [];

        foreach ($hands as $hand) {
            $cards = array_map('trim', explode(',', $hand));
            $evaluation = $this->evaluate($cards);
            $evaluatedHands[] = [
                'hand' => $hand,
                'score' => $evaluation['score'],
                'values' => $evaluation['values'],
            ];
            $maxScore = max($maxScore, $evaluation['score']);
        }

        $candidates = array_filter(
            $evaluatedHands,
            fn($h) => $h['score'] === $maxScore,
        );

        if (count($candidates) === 1) {
            return [current($candidates)['hand']];
        }

        $bestHands = [];
        $bestValues = null;

        foreach ($candidates as $candidate) {
            if ($bestValues === null) {
                $bestValues = $candidate['values'];
                $bestHands = [$candidate['hand']];
                continue;
            }

            $comparison = $this->compareCardValues(
                $candidate['values'],
                $bestValues,
            );
            if ($comparison > 0) {
                $bestValues = $candidate['values'];
                $bestHands = [$candidate['hand']];
            } elseif ($comparison === 0) {
                $bestHands[] = $candidate['hand'];
            }
        }

        return $bestHands;
    }

    private function evaluate(array $cards): array
    {
        $values = [];
        $suits = [];

        foreach ($cards as $card) {
            $value = substr($card, 0, -1);
            $suit = substr($card, -1);
            $values[] = self::CARD_RANKS[$value];
            $suits[] = $suit;
        }

        rsort($values);
        $valueCounts = array_count_values($values);
        arsort($valueCounts);
        $isFlush = count(array_unique($suits)) === 1;
        $isStraight = $this->isStraight($values);

        if ($isFlush && $isStraight) {
            $score = $values[0] === 14 && $values[4] === 10 ? 10 : 9;
            return ['score' => $score, 'values' => $values];
        }

        if (max($valueCounts) === 4) {
            $quadra = array_search(4, $valueCounts);
            $kicker = array_search(1, $valueCounts);
            return ['score' => 8, 'values' => [$quadra, $kicker]];
        }

        if (count($valueCounts) === 2 && max($valueCounts) === 3) {
            $trinca = array_search(3, $valueCounts);
            $par = array_search(2, $valueCounts);
            return ['score' => 7, 'values' => [$trinca, $par]];
        }

        if ($isFlush) {
            return ['score' => 6, 'values' => $values];
        }
        if ($isStraight) {
            return ['score' => 5, 'values' => $values];
        }

        if (max($valueCounts) === 3) {
            $trinca = array_search(3, $valueCounts);
            $kickers = array_keys(
                array_diff_key(array_count_values($values), [$trinca => '']),
            );
            rsort($kickers);
            return ['score' => 4, 'values' => array_merge([$trinca], $kickers)];
        }

        if (count($valueCounts) === 3 && max($valueCounts) === 2) {
            $pares = array_keys(
                array_filter($valueCounts, fn($count) => $count === 2),
            );
            rsort($pares);
            $kicker = array_search(1, $valueCounts);
            return ['score' => 3, 'values' => array_merge($pares, [$kicker])];
        }

        if (max($valueCounts) === 2) {
            $par = array_search(2, $valueCounts);
            $kickers = array_keys(array_diff_key($values, [$par => '']));
            rsort($kickers);
            return ['score' => 2, 'values' => array_merge([$par], $kickers)];
        }

        return ['score' => 1, 'values' => $values];
    }

    private function isStraight(array $values): bool
    {
        $isNormalStraight = true;
        for ($i = 1; $i < 5; $i++) {
            if ($values[$i - 1] - $values[$i] !== 1) {
                $isNormalStraight = false;
                break;
            }
        }

        $isLowStraight = $values === [14, 5, 4, 3, 2];

        return $isNormalStraight || $isLowStraight;
    }

    private function compareCardValues(array $values1, array $values2): int
    {
        $length = max(count($values1), count($values2));
        for ($i = 0; $i < $length; $i++) {
            $val1 = $values1[$i] ?? 0;
            $val2 = $values2[$i] ?? 0;
            if ($val1 > $val2) {
                return 1;
            }
            if ($val1 < $val2) {
                return -1;
            }
        }
        return 0;
    }
}
