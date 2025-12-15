package atbash

import (
	"strings"
	"unicode"
)

func Atbash(s string) string {
	result := []rune{}

	for _, c := range s {
		if unicode.IsLetter(c) {
			lower := unicode.ToLower(c)
			substituted := 'z' - (lower - 'a')
			result = append(result, substituted)
		} else if unicode.IsDigit(c) {
			result = append(result, c)
		}
	}

	var grouped strings.Builder
	for i, c := range result {
		if i > 0 && i%5 == 0 {
			grouped.WriteRune(' ')
		}
		grouped.WriteRune(c)
	}

	return grouped.String()
}
