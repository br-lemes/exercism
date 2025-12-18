package robotname

import (
	"errors"
	"fmt"
	"math/rand/v2"
)

type Robot struct {
	name string
}

const maxRobotNames = 26 * 26 * 10 * 10 * 10

var (
	namePool  = generateRandomNames()
	nameIndex = 0
)

func (r *Robot) Name() (string, error) {
	if r.name != "" {
		return r.name, nil
	}

	if nameIndex >= maxRobotNames {
		return "", errors.New("all robot names have been used")
	}

	r.name = namePool[nameIndex]
	nameIndex++

	return r.name, nil
}

func (r *Robot) Reset() {
	r.name = ""
}

func generateRandomNames() []string {
	names := make([]string, 0, maxRobotNames)
	for i := 'A'; i <= 'Z'; i++ {
		for j := 'A'; j <= 'Z'; j++ {
			for k := 0; k < 1000; k++ {
				names = append(names, fmt.Sprintf("%c%c%03d", i, j, k))
			}
		}
	}

	rand.Shuffle(
		len(names),
		func(i, j int) { names[i], names[j] = names[j], names[i] },
	)
	return names
}
