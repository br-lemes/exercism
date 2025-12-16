package armstrong

import "math"

func IsNumber(n int) bool {
	num := n
	sum := 0
	len := 0

	for num > 0 {
		len++
		num /= 10
	}
	num = n

	for num > 0 {
		sum += int(math.Pow(float64(num%10), float64(len)))
		num /= 10
	}
	return sum == n
}
