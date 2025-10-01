<?php
declare(strict_types=1);

class PhoneNumber
{
    private string $number;

    function __construct(string $phoneNumber)
    {
        $this->number = $this->cleanNumber($phoneNumber);
    }

    function number(): string
    {
        return $this->number;
    }

    private function cleanNumber(string $phoneNumber): string
    {
        if (preg_match('/[a-zA-Z]/', $phoneNumber)) {
            throw new InvalidArgumentException('letters not permitted');
        }

        if (preg_match('/[@:!]/', $phoneNumber)) {
            throw new InvalidArgumentException('punctuations not permitted');
        }

        $phoneNumber = preg_replace('/\s|\(|\)|\-|\.|\+/', '', $phoneNumber);

        if (strlen($phoneNumber) < 10) {
            throw new InvalidArgumentException('incorrect number of digits');
        }

        if (strlen($phoneNumber) > 11) {
            throw new InvalidArgumentException('more than 11 digits');
        }

        if (strlen($phoneNumber) === 11) {
            if (substr($phoneNumber, 0, 1) === '1') {
                $phoneNumber = substr($phoneNumber, 1);
                $this->validateNumber($phoneNumber);
                return $phoneNumber;
            }
            throw new InvalidArgumentException('11 digits must start with 1');
        }

        if (strlen($phoneNumber) === 10) {
            $this->validateNumber($phoneNumber);
            return $phoneNumber;
        }

        throw new InvalidArgumentException('Invalid number');
    }

    private function validateNumber(string $phoneNumber): void
    {
        if (substr($phoneNumber, 0, 1) === '0') {
            throw new InvalidArgumentException(
                'area code cannot start with zero',
            );
        }

        if (substr($phoneNumber, 0, 1) === '1') {
            throw new InvalidArgumentException(
                'area code cannot start with one',
            );
        }

        if (substr($phoneNumber, 3, 1) === '0') {
            throw new InvalidArgumentException(
                'exchange code cannot start with zero',
            );
        }

        if (substr($phoneNumber, 3, 1) === '1') {
            throw new InvalidArgumentException(
                'exchange code cannot start with one',
            );
        }
    }
}
