<?php
declare(strict_types=1);

class EliudsEggs
{
    function eggCount(int $displayValue): int
    {
        $count = 0;
        $n = $displayValue;
        while ($n > 0) {
            if (($n & 1) === 1) {
                $count += 1;
            }
            $n >>= 1;
        }
        return $count;
    }
}
