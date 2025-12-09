package proverb

import "fmt"

const wantFormat = "For want of a %s the %s was lost."
const allFormat = "And all for the want of a %s."

func Proverb(rhyme []string) []string {
	count := len(rhyme)
	if count == 0 {
		return []string{}
	}

	result := make([]string, count)
	for i := 0; i < count-1; i++ {
		result[i] = fmt.Sprintf(wantFormat, rhyme[i], rhyme[i+1])
	}
	result[count-1] = fmt.Sprintf(allFormat, rhyme[0])
	return result
}
