<?php
declare(strict_types=1);

class TwelveDays
{
    const GIFTS = [
        'a Partridge in a Pear Tree',
        'two Turtle Doves',
        'three French Hens',
        'four Calling Birds',
        'five Gold Rings',
        'six Geese-a-Laying',
        'seven Swans-a-Swimming',
        'eight Maids-a-Milking',
        'nine Ladies Dancing',
        'ten Lords-a-Leaping',
        'eleven Pipers Piping',
        'twelve Drummers Drumming',
    ];

    const DAYS = [
        'first',
        'second',
        'third',
        'fourth',
        'fifth',
        'sixth',
        'seventh',
        'eighth',
        'ninth',
        'tenth',
        'eleventh',
        'twelfth',
    ];

    function recite(int $start, int $end): string
    {
        $result = '';
        for ($i = $start; $i <= $end; $i++) {
            $result .= $this->verse($i);
        }
        return rtrim($result);
    }

    private function verse(int $n): string
    {
        $day = self::DAYS[$n - 1];
        $gifts = '';
        for ($i = $n - 1; $i >= 0; $i--) {
            if ($i === 0 && $n > 1) {
                $gifts .= 'and ';
            }
            $gifts .= self::GIFTS[$i];
            if ($i > 0) {
                $gifts .= ', ';
            }
        }
        return "On the $day day of Christmas my true love gave to me: $gifts.\n";
    }
}
