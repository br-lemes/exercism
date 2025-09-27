<?php
declare(strict_types=1);

class Proverb
{
    public function recite(array $words): array
    {
        $result = [];
        foreach ($words as $i => $word) {
            if ($i === count($words) - 1) {
                $result[] = "And all for the want of a {$words[0]}.";
                return $result;
            }
            $result[] = "For want of a $word the {$words[$i + 1]} was lost.";
        }
        return $result;
    }
}
