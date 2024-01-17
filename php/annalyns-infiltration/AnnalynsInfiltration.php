<?php

declare(strict_types=1);

class AnnalynsInfiltration
{
    function canFastAttack(bool $is_knight_awake): bool
    {
        return !$is_knight_awake;
    }

    function canSpy(
        bool $is_knight_awake,
        bool $is_archer_awake,
        bool $is_prisoner_awake
    ): bool {
        return $is_knight_awake || $is_archer_awake || $is_prisoner_awake;
    }

    function canSignal(bool $is_archer_awake, bool $is_prisoner_awake): bool
    {
        return !$is_archer_awake && $is_prisoner_awake;
    }

    function canLiberate(
        bool $is_knight_awake,
        bool $is_archer_awake,
        bool $is_prisoner_awake,
        bool $is_dog_present
    ): bool {
        if ($is_dog_present) {
            if (!$is_archer_awake) {
                return true;
            }
            return false;
        }
        if ($is_prisoner_awake && !$is_knight_awake && !$is_archer_awake) {
            return true;
        }
        return false;
    }
}
