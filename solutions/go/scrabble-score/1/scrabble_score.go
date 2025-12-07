package scrabble

import "strings"

func Score(word string) int {
	letters := map[rune]int{
		'D': 2, 'G': 2,
		'B': 3, 'C': 3, 'M': 3, 'P': 3,
		'F': 4, 'H': 4, 'V': 4, 'W': 4, 'Y': 4,
		'K': 5,
		'J': 8, 'X': 8,
		'Q': 10, 'Z': 10,
	}
	result := 0
	for _, letter := range strings.ToUpper(word) {
		if letter < 'A' || letter > 'Z' {
			continue
		}
		value, found := letters[letter]
		if !found {
			value = 1
		}
		result += value
	}
	return result
}
