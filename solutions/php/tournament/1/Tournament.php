<?php
declare(strict_types=1);

class Team
{
    public string $name;
    public int $matches;
    public int $wins;
    public int $draws;
    public int $losses;
    public int $points;

    function __construct(string $name)
    {
        $this->name = $name;
        $this->matches = 0;
        $this->wins = 0;
        $this->draws = 0;
        $this->losses = 0;
        $this->points = 0;
    }

    function win(): void
    {
        $this->matches += 1;
        $this->wins += 1;
        $this->points += 3;
    }

    function draw(): void
    {
        $this->matches += 1;
        $this->draws += 1;
        $this->points += 1;
    }

    function loss(): void
    {
        $this->matches += 1;
        $this->losses += 1;
    }
}

class Tournament
{
    function tally(string $input): string
    {
        $teams = [];

        if ($input === '') {
            return 'Team                           | MP |  W |  D |  L |  P';
        }

        $lines = explode("\n", $input);
        foreach ($lines as $line) {
            [$team1Name, $team2Name, $result] = explode(';', $line);

            if (!isset($teams[$team1Name])) {
                $teams[$team1Name] = new Team($team1Name);
            }
            if (!isset($teams[$team2Name])) {
                $teams[$team2Name] = new Team($team2Name);
            }

            $team1 = $teams[$team1Name];
            $team2 = $teams[$team2Name];

            switch ($result) {
                case 'win':
                    $team1->win();
                    $team2->loss();
                    break;
                case 'draw':
                    $team1->draw();
                    $team2->draw();
                    break;
                case 'loss':
                    $team1->loss();
                    $team2->win();
                    break;
            }
        }

        uasort($teams, function (Team $a, Team $b) {
            if ($a->points !== $b->points) {
                return $b->points <=> $a->points;
            }
            return $a->name <=> $b->name;
        });

        $output = 'Team                           | MP |  W |  D |  L |  P';
        foreach ($teams as $team) {
            $name = str_pad($team->name, 30);
            $mp = str_pad((string) $team->matches, 2, ' ', STR_PAD_LEFT);
            $w = str_pad((string) $team->wins, 2, ' ', STR_PAD_LEFT);
            $d = str_pad((string) $team->draws, 2, ' ', STR_PAD_LEFT);
            $l = str_pad((string) $team->losses, 2, ' ', STR_PAD_LEFT);
            $p = str_pad((string) $team->points, 2, ' ', STR_PAD_LEFT);
            $output .= "\n$name | $mp | $w | $d | $l | $p";
        }

        return $output;
    }
}
