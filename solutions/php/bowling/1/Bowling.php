<?php
declare(strict_types=1);

class Game
{
    private array $rolls = [];
    private int $currentRoll = 0;

    public function roll(int $pins): void
    {
        if ($pins < 0) {
            throw new Exception('Negative roll is invalid');
        }
        if ($pins > 10) {
            throw new Exception('Pin count exceeds pins on the lane');
        }
        if ($this->isGameComplete()) {
            throw new Exception('Cannot roll after game is over');
        }

        if ($this->isLastFrame()) {
            $this->validateLastFrameRoll($pins);
        } else {
            if (
                $this->currentRoll > 0 &&
                !$this->isStrike($this->currentRoll - 1)
            ) {
                $frameFirstRoll = $this->getFrameFirstRoll();
                if ($frameFirstRoll + $pins > 10) {
                    throw new Exception('Pin count exceeds pins on the lane');
                }
            }
        }

        $this->rolls[$this->currentRoll] = $pins;
        $this->currentRoll++;
    }

    public function score(): int
    {
        if (!$this->isGameComplete()) {
            throw new Exception(
                'Score cannot be taken until the end of the game',
            );
        }

        $score = 0;
        $rollIndex = 0;

        for ($frame = 0; $frame < 10; $frame++) {
            if ($this->isStrike($rollIndex)) {
                $score += 10 + $this->strikeBonus($rollIndex);
                $rollIndex++;
            } elseif ($this->isSpare($rollIndex)) {
                $score += 10 + $this->spareBonus($rollIndex);
                $rollIndex += 2;
            } else {
                $score += $this->sumOfBallsInFrame($rollIndex);
                $rollIndex += 2;
            }
        }

        return $score;
    }

    private function isStrike(int $rollIndex): bool
    {
        return isset($this->rolls[$rollIndex]) &&
            $this->rolls[$rollIndex] === 10;
    }

    private function isSpare(int $rollIndex): bool
    {
        return isset($this->rolls[$rollIndex], $this->rolls[$rollIndex + 1]) &&
            $this->rolls[$rollIndex] + $this->rolls[$rollIndex + 1] === 10;
    }

    private function strikeBonus(int $rollIndex): int
    {
        return $this->rolls[$rollIndex + 1] + $this->rolls[$rollIndex + 2];
    }

    private function spareBonus(int $rollIndex): int
    {
        return $this->rolls[$rollIndex + 2];
    }

    private function sumOfBallsInFrame(int $rollIndex): int
    {
        return $this->rolls[$rollIndex] + $this->rolls[$rollIndex + 1];
    }

    private function isGameComplete(): bool
    {
        $rollIndex = 0;
        $frame = 0;

        while ($frame < 9 && $rollIndex < $this->currentRoll) {
            if ($this->isStrike($rollIndex)) {
                $rollIndex++;
            } else {
                $rollIndex += 2;
            }
            $frame++;
        }

        if ($frame < 9) {
            return false;
        }

        $rollsInLastFrame = $this->currentRoll - $rollIndex;
        if ($rollsInLastFrame < 2) {
            return false;
        }
        if ($this->isStrike($rollIndex)) {
            return $rollsInLastFrame >= 3;
        }
        if ($rollsInLastFrame >= 2 && $this->isSpare($rollIndex)) {
            return $rollsInLastFrame >= 3;
        }
        return $rollsInLastFrame >= 2;
    }

    private function isLastFrame(): bool
    {
        $rollIndex = 0;
        $frame = 0;

        while ($frame < 9 && $rollIndex < $this->currentRoll) {
            if ($this->isStrike($rollIndex)) {
                $rollIndex++;
            } else {
                $rollIndex += 2;
            }
            $frame++;
        }

        return $frame >= 9;
    }

    private function getFrameFirstRoll(): int
    {
        $rollIndex = 0;
        $frame = 0;

        while ($frame < 9 && $rollIndex < $this->currentRoll - 1) {
            if ($this->isStrike($rollIndex)) {
                $rollIndex++;
            } else {
                $rollIndex += 2;
            }
            $frame++;
        }

        if (
            $rollIndex < $this->currentRoll &&
            isset($this->rolls[$rollIndex]) &&
            !$this->isStrike($rollIndex)
        ) {
            return $this->rolls[$rollIndex];
        }

        return 0;
    }

    private function validateLastFrameRoll(int $pins): void
    {
        $rollIndex = 0;
        $frame = 0;

        while ($frame < 9) {
            if ($this->isStrike($rollIndex)) {
                $rollIndex++;
            } else {
                $rollIndex += 2;
            }
            $frame++;
        }

        $rollsInLastFrame = $this->currentRoll - $rollIndex;

        if ($rollsInLastFrame === 0) {
            return;
        } elseif ($rollsInLastFrame === 1) {
            $firstRoll = $this->rolls[$rollIndex];
            if ($firstRoll < 10 && $firstRoll + $pins > 10) {
                throw new Exception('Pin count exceeds pins on the lane');
            }
        } elseif ($rollsInLastFrame === 2) {
            $firstRoll = $this->rolls[$rollIndex];
            $secondRoll = $this->rolls[$rollIndex + 1];
            if ($firstRoll < 10 && $firstRoll + $secondRoll < 10) {
                throw new Exception('Cannot roll after game is over');
            }
            if ($secondRoll < 10 && $pins === 10) {
                throw new Exception('Pin count exceeds pins on the lane');
            }
            if ($secondRoll < 10 && $secondRoll + $pins > 10) {
                throw new Exception('Pin count exceeds pins on the lane');
            }
        }
    }
}
