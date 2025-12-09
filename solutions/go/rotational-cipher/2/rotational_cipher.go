package rotationalcipher

func RotationalCipher(plain string, shiftKey int) string {
	result := make([]rune, len(plain))
	for i, char := range plain {
		if char >= 'a' && char <= 'z' {
			result[i] = 'a' + (char-'a'+rune(shiftKey))%26
		} else if char >= 'A' && char <= 'Z' {
			result[i] = 'A' + (char-'A'+rune(shiftKey))%26
		} else {
			result[i] = char
		}
	}
	return string(result)
}
