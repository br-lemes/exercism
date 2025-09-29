package brackets

func Bracket(input string) bool {
	bracketPairs := map[rune]rune{
		')': '(',
		'}': '{',
		']': '[',
	}

	var stack []rune
	for _, c := range input {
		if c == '(' || c == '{' || c == '[' {
			stack = append(stack, c)
			continue
		}
		if c == ')' || c == '}' || c == ']' {
			if len(stack) == 0 {
				return false
			}
			i := len(stack) - 1
			lastOpen := stack[i]
			stack = stack[:i]
			if lastOpen != bracketPairs[c] {
				return false
			}
		}
	}
	return len(stack) == 0
}
