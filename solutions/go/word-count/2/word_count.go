package wordcount

import (
	"strings"
	"unicode"
)

type Frequency map[string]int

func getWords(phrase string) []string {
	lastIndex := 0
	lastSeparator := false
	result := []string{}
	runes := []rune(strings.ToLower(phrase))
	for i, char := range runes {
		if char == '\'' || unicode.IsLetter(char) || unicode.IsNumber(char) {
			lastSeparator = false
			continue
		}
		if lastSeparator {
			lastIndex = i + 1
			continue
		}
		lastSeparator = true
		result = append(result, strings.Trim(string(runes[lastIndex:i]), "'"))
		lastIndex = i + 1
	}
	length := len(runes)
	if lastIndex < length {
		result = append(result, strings.Trim(string(runes[lastIndex:length]), "'"))
	}
	return result
}

func WordCount(phrase string) Frequency {
	result := Frequency{}
	for _, word := range getWords(phrase) {
		if word == "" {
			continue
		}
		result[word]++
	}
	return result
}
