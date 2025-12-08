package luhn

func Valid(id string) bool {
	i := len(id)
	sum := 0
	count := 0
	double := false
	for i > 0 {
		i--
		char := id[i]
		if char == ' ' {
			continue
		}
		if char < '0' || char > '9' {
			return false
		}
		digit := char - '0'
		if double {
			value := digit * 2
			if value > 9 {
				value -= 9
			}
			sum += int(value)
		} else {
			sum += int(digit)
		}
		double = !double
		count++
	}
	return count > 1 && sum%10 == 0
}
