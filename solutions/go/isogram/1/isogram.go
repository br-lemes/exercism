package isogram

import "strings"

func IsIsogram(word string) bool {
	counts := make(map[rune]bool)
	for _, char := range strings.ToUpper(word) {
		if char < 'A' || char > 'Z' {
			continue
		}
		if counts[char] {
			return false
		}
		counts[char] = true
	}
	return true
}
