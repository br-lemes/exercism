<?php
declare(strict_types=1);

class Alphametics
{
    private array $letters = [];
    private array $firstLetters = [];
    private array $coefficients = [];
    private ?array $solution = null;
    private array $leftWords = [];
    private string $rightWord = '';

    public function solve(string $puzzle): ?array
    {
        [$left, $right] = explode(' == ', $puzzle);
        $this->leftWords = explode(' + ', $left);
        $this->rightWord = $right;

        $allWords = array_merge($this->leftWords, [$this->rightWord]);

        $this->letters = array_values(
            array_unique(str_split(implode('', $allWords))),
        );

        if (count($this->letters) > 10) {
            return null;
        }

        foreach ($allWords as $word) {
            if (strlen($word) > 1) {
                $this->firstLetters[] = $word[0];
            }
        }

        $this->coefficients = array_fill_keys($this->letters, 0);

        foreach ($this->leftWords as $word) {
            $length = strlen($word);
            for ($i = 0; $i < $length; $i++) {
                $char = $word[$i];
                $this->coefficients[$char] += 10 ** ($length - $i - 1);
            }
        }

        $length = strlen($this->rightWord);
        for ($i = 0; $i < $length; $i++) {
            $char = $this->rightWord[$i];
            $this->coefficients[$char] -= 10 ** ($length - $i - 1);
        }

        usort($this->letters, function ($a, $b) {
            return abs($this->coefficients[$b]) - abs($this->coefficients[$a]);
        });

        $this->backtrack(0, 0, array_fill(0, 10, false), []);

        if ($this->solution !== null) {
            ksort($this->solution);
            return $this->solution;
        }

        return null;
    }

    private function backtrack(
        int $index,
        int $sum,
        array $used,
        array $assignments,
    ): void {
        if ($this->solution !== null) {
            return;
        }

        if ($index === count($this->letters)) {
            if ($sum === 0) {
                $this->solution = $assignments;
            }
            return;
        }

        $currentLetter = $this->letters[$index];
        $coefficient = $this->coefficients[$currentLetter];
        $isFirstLetter = in_array($currentLetter, $this->firstLetters, true);

        for ($digit = $isFirstLetter ? 1 : 0; $digit <= 9; $digit++) {
            if (!$used[$digit]) {
                $used[$digit] = true;
                $assignments[$currentLetter] = $digit;

                $this->backtrack(
                    $index + 1,
                    $sum + $coefficient * $digit,
                    $used,
                    $assignments,
                );

                $used[$digit] = false;
                unset($assignments[$currentLetter]);

                if ($this->solution !== null) {
                    return;
                }
            }
        }
    }
}
