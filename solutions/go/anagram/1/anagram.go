package anagram

import (
	"sort"
	"strings"
)

func normalize(s string) string {
	runes := []rune(s)
	sort.Slice(runes, func(i, j int) bool {
		return runes[i] < runes[j]
	})
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
