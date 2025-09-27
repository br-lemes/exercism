<?php
declare(strict_types=1);

function from(DateTimeImmutable $date): DateTimeImmutable
{
    $interval = new DateInterval('PT1000000000S');
    return $date->add($interval);
}
