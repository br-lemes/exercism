package bottlesong

func numberToWord(n int, capitalize bool) string {
	switch n {
	case 10:
		if capitalize {
			return "Ten"
		}
		return "ten"
	case 9:
		if capitalize {
			return "Nine"
		}
		return "nine"
	case 8:
		if capitalize {
			return "Eight"
		}
		return "eight"
	case 7:
		if capitalize {
			return "Seven"
		}
		return "seven"
	case 6:
		if capitalize {
			return "Six"
		}
		return "six"
	case 5:
		if capitalize {
			return "Five"
		}
		return "five"
	case 4:
		if capitalize {
			return "Four"
		}
		return "four"
	case 3:
		if capitalize {
			return "Three"
		}
		return "three"
	case 2:
		if capitalize {
			return "Two"
		}
		return "two"
	case 1:
		if capitalize {
			return "One"
		}
		return "one"
	case 0:
		return "no"
	default:
		panic("Invalid number")
	}
}

func writeVerse(currentBottles int) []string {
	currentWordUpper := numberToWord(currentBottles, true)
	nextBottles := currentBottles - 1
	nextWordLower := numberToWord(nextBottles, false)

	return []string{
		currentWordUpper +
			" green bottle" +
			pluralize(currentBottles) +
			" hanging on the wall,",
		currentWordUpper +
			" green bottle" +
			pluralize(currentBottles) +
			" hanging on the wall,",
		"And if one green bottle should accidentally fall,",
		"There'll be " +
			nextWordLower +
			" green bottle" +
			pluralize(nextBottles) +
			" hanging on the wall.",
	}
}

func pluralize(n int) string {
	if n == 1 {
		return ""
	}
	return "s"
}

func Recite(startBottles, takeDown int) []string {
	var result []string
	for i := 0; i < takeDown; i++ {
		result = append(result, writeVerse(startBottles-i)...)
		if i < takeDown-1 {
			result = append(result, "")
		}
	}
	return result
}
