<?php
declare(strict_types=1);

function from(DateTimeImmutable $date): DateTimeImmutable
{
    $timestamp = $date->getTimestamp();
    $newTimestamp = $timestamp + 1000000000;
    return new DateTimeImmutable("@$newTimestamp");
}
