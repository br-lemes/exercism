<?php
declare(strict_types=1);

class SecretHandshake
{
    function commands(int $handshake): array
    {
        $signals = [];

        $handshake = $handshake & 31;

        if ($handshake & 1) {
            $signals[] = 'wink';
        }
        if ($handshake & 2) {
            $signals[] = 'double blink';
        }
        if ($handshake & 4) {
            $signals[] = 'close your eyes';
        }
        if ($handshake & 8) {
            $signals[] = 'jump';
        }

        if ($handshake & 16 && count($signals) > 0) {
            $signals = array_reverse($signals);
        }

        return $signals;
    }
}
