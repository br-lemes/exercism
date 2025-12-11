package wordcount

import (
	"regexp"
	"strings"
)

type Frequency map[string]int

func getWords(phrase string) []string {
	re := regexp.MustCompile(`\b[\w']+\b`)
	return re.FindAllString(strings.ToLower(phrase), -1)
}

func WordCount(phrase string) Frequency {
	result := Frequency{}
	for _, word := range getWords(phrase) {
		result[word]++
	}
	return result
}
