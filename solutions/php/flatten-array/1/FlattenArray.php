<?php
declare(strict_types=1);

function flatten(array $input): array
{
    $flattened = [];

    foreach ($input as $item) {
        if (is_array($item)) {
            $flattened = array_merge($flattened, flatten($item));
            continue;
        }
        if ($item === null) {
            continue;
        }
        $flattened[] = $item;
    }

    return $flattened;
}
