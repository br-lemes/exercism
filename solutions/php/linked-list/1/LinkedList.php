<?php
declare(strict_types=1);

class Node
{
    public int $value;
    public ?Node $next = null;
    public ?Node $prev = null;

    function __construct(int $value)
    {
        $this->value = $value;
    }
}

class LinkedList
{
    private ?Node $head = null;
    private ?Node $tail = null;
    private int $length = 0;

    function push(int $value): void
    {
        $newNode = new Node($value);
        $this->length++;

        if ($this->tail) {
            $this->tail->next = $newNode;
            $newNode->prev = $this->tail;
        } else {
            $this->head = $newNode;
        }
        $this->tail = $newNode;
    }

    function pop(): ?int
    {
        if (!$this->tail) {
            return null;
        }

        $value = $this->tail->value;
        $this->tail = $this->tail->prev;
        $this->length--;

        if ($this->tail) {
            $this->tail->next = null;
        } else {
            $this->head = null;
        }

        return $value;
    }

    function shift(): ?int
    {
        if (!$this->head) {
            return null;
        }

        $value = $this->head->value;
        $this->head = $this->head->next;
        $this->length--;

        if ($this->head) {
            $this->head->prev = null;
        } else {
            $this->tail = null;
        }

        return $value;
    }

    function unshift(int $value): void
    {
        $newNode = new Node($value);
        $this->length++;

        if (!$this->head) {
            $this->head = $newNode;
            $this->tail = $newNode;
            return;
        }

        $this->head->prev = $newNode;
        $newNode->next = $this->head;
        $this->head = $newNode;
    }

    function delete(int $value): void
    {
        $currentNode = $this->head;

        while ($currentNode) {
            if ($currentNode->value === $value) {
                if ($currentNode === $this->head) {
                    $this->shift();
                    return;
                }
                if ($currentNode === $this->tail) {
                    $this->pop();
                    return;
                }
                $currentNode->prev->next = $currentNode->next;
                $currentNode->next->prev = $currentNode->prev;
                $this->length--;
                return;
            }
            $currentNode = $currentNode->next;
        }
    }

    function count(): int
    {
        return $this->length;
    }
}
