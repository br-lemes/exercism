package cipher

import "strings"

type shift struct {
	distance int
}

type vigenere struct {
	distances []int
}

func NewCaesar() Cipher {
	return &shift{distance: 3}
}

func NewShift(distance int) Cipher {
	if distance < -25 || distance == 0 || distance > 25 {
		return nil
	}
	return &shift{distance: distance}
}

func (c shift) Encode(input string) string {
	sb := strings.Builder{}
	sb.Grow(len(input))
	for _, r := range strings.ToLower(input) {
		if r >= 'a' && r <= 'z' {
			sb.WriteRune(shiftRune(r, c.distance))
		}
	}
	return sb.String()
}

func (c shift) Decode(input string) string {
	sb := strings.Builder{}
	sb.Grow(len(input))
	for _, r := range strings.ToLower(input) {
		if r >= 'a' && r <= 'z' {
			sb.WriteRune(shiftRune(r, -c.distance))
		}
	}
	return sb.String()
}

func NewVigenere(key string) Cipher {
	if key == "" {
		return nil
	}
	valid := false
	distances := make([]int, 0, len(key))
	for _, r := range key {
		if r < 'a' || r > 'z' {
			valid = false
			break
		}
		if r != 'a' {
			valid = true
		}
		distances = append(distances, int(r-'a'))
	}
	if !valid {
		return nil
	}
	return &vigenere{distances: distances}
}

func (v vigenere) Encode(input string) string {
	sb := strings.Builder{}
	sb.Grow(len(input))
	idx := 0
	for _, r := range strings.ToLower(input) {
		if r >= 'a' && r <= 'z' {
			sb.WriteRune(shiftRune(r, v.distances[idx%len(v.distances)]))
			idx++
		}
	}
	return sb.String()
}

func (v vigenere) Decode(input string) string {
	sb := strings.Builder{}
	sb.Grow(len(input))
	idx := 0
	for _, r := range strings.ToLower(input) {
		if r >= 'a' && r <= 'z' {
			sb.WriteRune(shiftRune(r, -v.distances[idx%len(v.distances)]))
			idx++
		}
	}
	return sb.String()
}

func shiftRune(r rune, distance int) rune {
	if distance < 0 {
		distance += 26
	}
	idx := (int(r-'a') + distance) % 26
	return rune('a' + idx)
}
