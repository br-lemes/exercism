package lineup

import "fmt"

func Format(name string, number int) string {
	suffix := "th"
	if number%10 == 1 && number%100 != 11 {
		suffix = "st"
	} else if number%10 == 2 && number%100 != 12 {
		suffix = "nd"
	} else if number%10 == 3 && number%100 != 13 {
		suffix = "rd"
	}
	return fmt.Sprintf(
		"%s, you are the %d%s customer we serve today. Thank you!",
		name,
		number,
		suffix,
	)
}
