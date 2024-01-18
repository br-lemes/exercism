<?php

declare(strict_types=1);

function isLeap(int $year): bool
{
    switch (true) {
        case $year % 4 !== 0:
            return false;
        case $year % 100 !== 0:
            return true;
        case $year % 400 !== 0:
            return false;
    }
    return true;
}
