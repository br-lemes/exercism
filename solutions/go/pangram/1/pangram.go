package pangram

func IsPangram(input string) bool {
    var counts [26]uint8
    for _, c := range input {
        if c >= 'A' && c <= 'Z' {
            counts[c - 'A']++
        } else if c >= 'a' && c <= 'z' {
            counts[c - 'a']++
        }
    }
    for _, c := range counts {
        if c == 0 {
            return false
        }
    }
	return true
}
