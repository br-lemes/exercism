<?php
declare(strict_types=1);

class Series
{
    private string $input;

    function __construct(string $input)
    {
        $this->input = $input;
    }

    function largestProduct(int $span): int
    {
        if ($span < 0) {
            throw new \InvalidArgumentException('Span must not be negative');
        }
        if ($span > strlen($this->input)) {
            throw new \InvalidArgumentException(
                'Span must be smaller than string length',
            );
        }
        if (preg_match('/[^0-9]/', $this->input)) {
            throw new \InvalidArgumentException(
                'Digits input must only contain digits',
            );
        }

        if ($span === 0) {
            return 1;
        }

        $maxProduct = 0;

        for ($i = 0; $i <= strlen($this->input) - $span; $i++) {
            $series = substr($this->input, $i, $span);
            $product = array_product(str_split($series));
            if ($product > $maxProduct) {
                $maxProduct = $product;
            }
        }

        return $maxProduct;
    }
}
