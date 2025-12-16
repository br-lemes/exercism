package sieve

var primes = []int{2}

func Sieve(limit int) []int {
	if limit < 2 {
		return []int{}
	}
	for i := 3; i <= limit; i++ {
		if isPrime(i) {
			primes = append(primes, i)
		}
	}
	return primes
}

func isPrime(n int) bool {
	for _, prime := range primes {
		if n%prime == 0 {
			return false
		}
	}
	return true
}
