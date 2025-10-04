<?php
declare(strict_types=1);

class Sublist
{
    function compare(array $listOne, array $listTwo): string
    {
        if ($this->isEqual($listOne, $listTwo)) {
            return 'EQUAL';
        }
        if ($this->isSublist($listOne, $listTwo)) {
            return 'SUBLIST';
        }
        if ($this->isSuperlist($listOne, $listTwo)) {
            return 'SUPERLIST';
        }
        return 'UNEQUAL';
    }

    private function isEqual(array $listOne, array $listTwo): bool
    {
        if (count($listOne) !== count($listTwo)) {
            return false;
        }
        for ($i = 0; $i < count($listOne); $i++) {
            if ($listOne[$i] !== $listTwo[$i]) {
                return false;
            }
        }
        return true;
    }

    private function isSublist(array $listOne, array $listTwo): bool
    {
        if (count($listOne) >= count($listTwo)) {
            return false;
        }
        for ($i = 0; $i <= count($listTwo) - count($listOne); $i++) {
            $isSub = true;
            for ($j = 0; $j < count($listOne); $j++) {
                if ($listTwo[$i + $j] !== $listOne[$j]) {
                    $isSub = false;
                    break;
                }
            }
            if ($isSub) {
                return true;
            }
        }
        return false;
    }

    private function isSuperlist(array $listOne, array $listTwo): bool
    {
        return $this->isSublist($listTwo, $listOne);
    }
}
