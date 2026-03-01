package primefactors

func Factors(n int64) []int64 {
	results := []int64{}
	num := n
	for num%2 == 0 {
		results = append(results, 2)
		num /= 2
	}

	d := int64(3)
	for d*d <= n {
		for num%d == 0 {
			results = append(results, d)
			num /= d
		}
		d += 2
	}

	if num > 1 {
		results = append(results, num)
	}
	return results
}
