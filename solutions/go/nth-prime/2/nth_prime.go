package prime

import "errors"

var primes = []int{2}

func Nth(n int) (int, error) {
	if n < 1 {
		return 0, errors.New("prime is not possible")
	}
	if n == 1 {
		return 2, nil
	}
	for i := 3; len(primes) < n; i++ {
		if isPrime(i) {
			primes = append(primes, i)
		}
	}
	return primes[len(primes)-1], nil
}

func isPrime(n int) bool {
	for _, prime := range primes {
		if n%prime == 0 {
			return false
		}
	}
	return true
}
