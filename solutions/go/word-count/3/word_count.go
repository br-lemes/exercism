package wordcount

import (
	"strings"
	"unicode"
)

type Frequency map[string]int

func isSeparator(char rune) bool {
	return !unicode.IsLetter(char) && !unicode.IsNumber(char) && char != '\''
}

func getWords(phrase string) []string {
	words := strings.FieldsFunc(strings.ToLower(phrase), isSeparator)
	result := []string{}
	for _, word := range words {
		word = strings.Trim(word, "'")
		if word != "" {
			result = append(result, word)
		}
	}
	return result
}

func WordCount(phrase string) Frequency {
	result := Frequency{}
	for _, word := range getWords(phrase) {
		result[word]++
	}
	return result
}
