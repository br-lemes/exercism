package proverb

import "fmt"

const wantFormat = "For want of a %s the %s was lost."
const allFormat = "And all for the want of a %s."

func Proverb(rhyme []string) []string {
	if len(rhyme) == 0 {
		return []string{}
	}

	result := make([]string, 0, len(rhyme))
	for i := 0; i < len(rhyme)-1; i++ {
		result = append(result, fmt.Sprintf(wantFormat, rhyme[i], rhyme[i+1]))
	}
	result = append(result, fmt.Sprintf(allFormat, rhyme[0]))
	return result
}
