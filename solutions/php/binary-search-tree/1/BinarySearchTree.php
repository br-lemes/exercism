<?php
declare(strict_types=1);

class BinarySearchTree
{
    public ?BinarySearchTree $left = null;
    public ?BinarySearchTree $right = null;
    public int $data;

    function __construct(int $data)
    {
        $this->data = $data;
    }

    function insert(int $data): void
    {
        if ($data <= $this->data) {
            if ($this->left === null) {
                $this->left = new self($data);
            } else {
                $this->left->insert($data);
            }
        } else {
            if ($this->right === null) {
                $this->right = new self($data);
            } else {
                $this->right->insert($data);
            }
        }
    }

    function getSortedData(): array
    {
        $result = [];
        if ($this->left !== null) {
            $result = array_merge($result, $this->left->getSortedData());
        }
        $result[] = $this->data;
        if ($this->right !== null) {
            $result = array_merge($result, $this->right->getSortedData());
        }
        return $result;
    }
}
