package luhn

func Valid(id string) bool {
	sum := 0
	count := 0
	double := false
	for i := len(id) - 1; i >= 0; i-- {
		char := id[i]
		if char == ' ' {
			continue
		}
		if char < '0' || char > '9' {
			return false
		}
		digit := char - '0'
		if double {
			digit *= 2
			if digit > 9 {
				digit -= 9
			}
		}
		sum += int(digit)
		double = !double
		count++
	}
	return count > 1 && sum%10 == 0
}
