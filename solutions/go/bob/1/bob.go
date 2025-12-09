package bob

import "strings"

func Hey(remark string) string {
	remark = strings.TrimSpace(remark)
	if remark == "" {
		return "Fine. Be that way!"
	}

	hasLower := false
	hasUpper := false
	var lastChar rune
	for _, c := range remark {
		if c >= 'a' && c <= 'z' {
			hasLower = true
		}
		if c >= 'A' && c <= 'Z' {
			hasUpper = true
		}
		lastChar = c
	}
	if !hasLower && hasUpper {
		if lastChar == '?' {
			return "Calm down, I know what I'm doing!"
		}
		return "Whoa, chill out!"
	}
	if lastChar == '?' {
		return "Sure."
	}
	return "Whatever."
}
