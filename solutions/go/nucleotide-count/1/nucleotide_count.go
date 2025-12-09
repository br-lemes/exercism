package dna

import "fmt"

type DNA string
type Histogram map[rune]int

func (d DNA) Counts() (Histogram, error) {
	h := Histogram{'A': 0, 'C': 0, 'G': 0, 'T': 0}
	for _, nucleotide := range d {
		if _, valid := h[nucleotide]; !valid {
			return h, fmt.Errorf("invalid nucleotide %c", nucleotide)
		}
		h[nucleotide]++
	}
	return h, nil
}
