package prime

import "errors"

func Nth(n int) (int, error) {
	if n == 0 {
		return 0, errors.New("prime is not possible")
	}
	count := 0
	candidate := 2
	for {
		if isPrime(candidate) {
			count++
			if count == n {
				return candidate, nil
			}
		}
		if candidate == 2 {
			candidate = 3
		} else {
			candidate += 2
		}
	}
}

func isPrime(n int) bool {
	if n < 2 {
		return false
	}
	if n == 2 {
		return true
	}
	if n%2 == 0 {
		return false
	}
	for i := 3; i*i <= n; i += 2 {
		if n%i == 0 {
			return false
		}
	}
	return true
}
