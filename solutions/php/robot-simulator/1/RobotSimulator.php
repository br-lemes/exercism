<?php
declare(strict_types=1);

class RobotSimulator
{
    private array $position;
    private string $direction;
    private const ROTATION_RIGHT = [
        'north' => 'east',
        'east' => 'south',
        'south' => 'west',
        'west' => 'north',
    ];
    private const ROTATION_LEFT = [
        'north' => 'west',
        'west' => 'south',
        'south' => 'east',
        'east' => 'north',
    ];
    private const MOVE_VECTORS = [
        'north' => [0, 1],
        'east' => [1, 0],
        'south' => [0, -1],
        'west' => [-1, 0],
    ];

    public function __construct(array $position, string $direction)
    {
        $this->position = $position;
        $this->direction = $direction;
    }

    public function instructions(string $instructions): void
    {
        for ($i = 0, $len = strlen($instructions); $i < $len; $i++) {
            $instruction = $instructions[$i];
            switch ($instruction) {
                case 'L':
                    $this->turnLeft();
                    break;
                case 'R':
                    $this->turnRight();
                    break;
                case 'A':
                    $this->advance();
                    break;
            }
        }
    }

    public function getPosition(): array
    {
        return $this->position;
    }

    public function getDirection(): string
    {
        return $this->direction;
    }

    private function turnLeft(): void
    {
        $this->direction = self::ROTATION_LEFT[$this->direction];
    }

    private function turnRight(): void
    {
        $this->direction = self::ROTATION_RIGHT[$this->direction];
    }

    private function advance(): void
    {
        $vector = self::MOVE_VECTORS[$this->direction];
        $this->position[0] += $vector[0];
        $this->position[1] += $vector[1];
    }
}
