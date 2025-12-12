package lsproduct

import "errors"

func product(series string) int64 {
	result := int64(1)
	for _, c := range series {
		result *= int64(c - '0')
	}
	return result
}

func LargestSeriesProduct(digits string, span int) (int64, error) {
	if span < 0 {
		return 0, errors.New("span must not be negative")
	}
	digitsLength := len(digits)
	if span > digitsLength {
		return 0, errors.New("span must be smaller than string length")
	}
	for _, c := range digits {
		if c < '0' || c > '9' {
			return 0, errors.New("digits input must only contain digits")
		}
	}

	if span == 0 {
		return 1, nil
	}

	maxProduct := int64(0)

	for i := 0; i <= digitsLength-span; i++ {
		series := digits[i : i+span]
		product := product(series)
		if product > maxProduct {
			maxProduct = product
		}
	}
	return maxProduct, nil
}
