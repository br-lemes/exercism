package strand

var dnaMap = map[rune]rune{'G': 'C', 'C': 'G', 'T': 'A', 'A': 'U'}

func ToRNA(dna string) string {
	result := make([]rune, len(dna))
	for i, nucleotide := range dna {
		result[i] = dnaMap[nucleotide]
	}
	return string(result)
}
