<?php
declare(strict_types=1);

class ListOps
{
    function append(array $list1, array $list2): array
    {
        return array_merge($list1, $list2);
    }

    function concat(array $list1, array ...$listN): array
    {
        return array_merge($list1, ...$listN);
    }

    /**
     * @param callable(mixed $item): bool $predicate
     */
    function filter(callable $predicate, array $list): array
    {
        return array_values(array_filter($list, $predicate));
    }

    function length(array $list): int
    {
        return count($list);
    }

    /**
     * @param callable(mixed $item): mixed $function
     */
    function map(callable $function, array $list): array
    {
        return array_map($function, $list);
    }

    /**
     * @param callable(mixed $accumulator, mixed $item): mixed $function
     */
    function foldl(callable $function, array $list, $accumulator)
    {
        return array_reduce($list, $function, $accumulator);
    }

    /**
     * @param callable(mixed $accumulator, mixed $item): mixed $function
     */
    function foldr(callable $function, array $list, $accumulator)
    {
        return array_reduce(array_reverse($list), $function, $accumulator);
    }

    function reverse(array $list): array
    {
        return array_reverse($list);
    }
}
