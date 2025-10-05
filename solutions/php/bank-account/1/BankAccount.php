<?php
declare(strict_types=1);

class BankAccount
{
    private int $balance = 0;
    private bool $isOpen = false;

    public function open()
    {
        if ($this->isOpen) {
            throw new InvalidArgumentException('account already open');
        }
        $this->isOpen = true;
        $this->balance = 0;
    }

    public function close()
    {
        if (!$this->isOpen) {
            throw new InvalidArgumentException('account not open');
        }
        $this->isOpen = false;
    }

    public function balance(): int
    {
        if (!$this->isOpen) {
            throw new InvalidArgumentException('account not open');
        }
        return $this->balance;
    }

    public function deposit(int $amt)
    {
        if (!$this->isOpen) {
            throw new InvalidArgumentException('account not open');
        }
        if ($amt < 0) {
            throw new InvalidArgumentException('amount must be greater than 0');
        }
        $this->balance += $amt;
    }

    public function withdraw(int $amt)
    {
        if (!$this->isOpen) {
            throw new InvalidArgumentException('account not open');
        }
        if ($amt < 0) {
            throw new InvalidArgumentException('amount must be greater than 0');
        }
        if ($amt > $this->balance) {
            throw new InvalidArgumentException(
                'amount must be less than balance',
            );
        }
        $this->balance -= $amt;
    }
}
