<?php
declare(strict_types=1);

class ResistorColorTrio
{
    const COLORS = [
        'black' => 0,
        'brown' => 1,
        'red' => 2,
        'orange' => 3,
        'yellow' => 4,
        'green' => 5,
        'blue' => 6,
        'violet' => 7,
        'grey' => 8,
        'white' => 9,
    ];

    function label(array $colors): string
    {
        $mainValue = self::COLORS[$colors[0]] * 10 + self::COLORS[$colors[1]];
        $resistance = $mainValue * pow(10, self::COLORS[$colors[2]]);

        if ($resistance >= 1000000000) {
            return sprintf('%s gigaohms', $resistance / 1000000000);
        }
        if ($resistance >= 1000000) {
            return sprintf('%s megaohms', $resistance / 1000000);
        }
        if ($resistance >= 1000) {
            return sprintf('%s kiloohms', $resistance / 1000);
        }
        return sprintf('%s ohms', $resistance);
    }
}
