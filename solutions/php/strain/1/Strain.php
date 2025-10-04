<?php
declare(strict_types=1);

class Strain
{
    public function keep(array $list, callable $predicate): array
    {
        $keep = [];
        foreach ($list as $item) {
            if ($predicate($item)) {
                $keep[] = $item;
            }
        }
        return $keep;
    }

    public function discard(array $list, callable $predicate): array
    {
        $discard = [];
        foreach ($list as $item) {
            if (!$predicate($item)) {
                $discard[] = $item;
            }
        }
        return $discard;
    }
}
