<?php
declare(strict_types=1);

class CircularBuffer
{
    private int $size;
    private array $items = [];

    function __construct(int $size)
    {
        $this->size = $size;
    }

    function clear(): void
    {
        $this->items = [];
    }

    function forceWrite($item): void
    {
        if (count($this->items) === $this->size) {
            $this->read();
        }

        $this->items[] = $item;
    }

    function read()
    {
        if (empty($this->items)) {
            throw new BufferEmptyError();
        }

        return array_shift($this->items);
    }

    function write($item): void
    {
        if (count($this->items) === $this->size) {
            throw new BufferFullError();
        }

        $this->items[] = $item;
    }
}

class BufferFullError extends Exception {}

class BufferEmptyError extends Exception {}
