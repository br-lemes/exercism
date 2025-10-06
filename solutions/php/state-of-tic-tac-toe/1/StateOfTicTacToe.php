<?php
declare(strict_types=1);

enum State
{
    case Win;
    case Ongoing;
    case Draw;
}

class StateOfTicTacToe
{
    public function gameState(array $board): State
    {
        $this->validateBoard($board);

        if ($this->hasWinner($board, 'X') || $this->hasWinner($board, 'O')) {
            return State::Win;
        }

        foreach ($board as $row) {
            if (str_contains($row, ' ')) {
                return State::Ongoing;
            }
        }

        return State::Draw;
    }

    private function validateBoard(array $board): void
    {
        $xCount = 0;
        $oCount = 0;

        foreach ($board as $row) {
            $xCount += substr_count($row, 'X');
            $oCount += substr_count($row, 'O');
        }

        if ($oCount > $xCount) {
            throw new RuntimeException('Wrong turn order: O started');
        }
        if ($xCount - $oCount > 1) {
            throw new RuntimeException('Wrong turn order: X went twice');
        }

        $xWon = $this->hasWinner($board, 'X');
        $oWon = $this->hasWinner($board, 'O');

        if ($xWon && $oWon) {
            throw new RuntimeException(
                'Impossible board: game should have ended after the game was won',
            );
        }

        if ($xWon && $xCount !== $oCount + 1) {
            throw new RuntimeException(
                'Impossible board: game should have ended after the game was won',
            );
        }

        if ($oWon && $xCount !== $oCount) {
            throw new RuntimeException(
                'Impossible board: game should have ended after the game was won',
            );
        }
    }

    private function hasWinner(array $board, string $player): bool
    {
        foreach ($board as $row) {
            if ($row === str_repeat($player, 3)) {
                return true;
            }
        }

        for ($col = 0; $col < 3; $col++) {
            if (
                $board[0][$col] === $player &&
                $board[1][$col] === $player &&
                $board[2][$col] === $player
            ) {
                return true;
            }
        }

        if (
            $board[0][0] === $player &&
            $board[1][1] === $player &&
            $board[2][2] === $player
        ) {
            return true;
        }

        if (
            $board[0][2] === $player &&
            $board[1][1] === $player &&
            $board[2][0] === $player
        ) {
            return true;
        }

        return false;
    }
}
