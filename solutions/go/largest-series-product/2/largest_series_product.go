package lsproduct

import "errors"

func LargestSeriesProduct(digits string, span int) (int64, error) {
	if span < 0 {
		return 0, errors.New("span must not be negative")
	}
	if span == 0 {
		return 1, nil
	}

	digitsLength := len(digits)
	if span > digitsLength {
		return 0, errors.New("span must be smaller than string length")
	}

	numbers := make([]int64, digitsLength)
	for i, c := range digits {
		if c < '0' || c > '9' {
			return 0, errors.New("digits input must only contain digits")
		}
		numbers[i] = int64(c - '0')
	}

	maxProduct := int64(0)

	for i := 0; i <= digitsLength-span; i++ {
		product := int64(1)
		for j := i; j < i+span; j++ {
			product *= numbers[j]
		}
		if product > maxProduct {
			maxProduct = product
		}
	}
	return maxProduct, nil
}
