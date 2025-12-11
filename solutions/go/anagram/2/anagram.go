package anagram

import (
	"slices"
	"strings"
)

func normalize(s string) string {
	runes := []rune(s)
	slices.Sort(runes)
	return string(runes)
}

func Detect(subject string, candidates []string) []string {
	result := []string{}
	lowerSubject := strings.ToLower(subject)
	normalizedSubject := normalize(lowerSubject)

	for _, candidate := range candidates {
		if lowerSubject == strings.ToLower(candidate) {
			continue
		}
		if normalizedSubject == normalize(strings.ToLower(candidate)) {
			result = append(result, candidate)
		}
	}

	return result
}
