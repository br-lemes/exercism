package atbash

import "strings"

func Atbash(s string) string {
	result := []rune{}
	count := 0

	for _, c := range strings.ToLower(s) {
		if c >= '0' && c <= '9' {
			if count > 0 && count%5 == 0 {
				result = append(result, ' ')
			}
			result = append(result, c)
			count++
			continue
		}
		if c >= 'a' && c <= 'z' {
			if count > 0 && count%5 == 0 {
				result = append(result, ' ')
			}
			result = append(result, 'z'-(c-'a'))
			count++
		}
	}

	return string(result)
}
