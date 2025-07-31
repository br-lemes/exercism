package letter

type FreqMap map[rune]int

func Frequency(s string) FreqMap {
	m := FreqMap{}
	for _, r := range s {
		m[r]++
	}
	return m
}

func ConcurrentFrequency(list []string) FreqMap {
	ch := make(chan FreqMap)
	for _, s := range list {
		go func(s string) { ch <- Frequency(s) }(s)
	}
	result := FreqMap{}
	for range list {
		for letter, count := range <-ch {
			result[letter] += count
		}
	}
	return result
}
