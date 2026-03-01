package squareroot

import (
	"errors"
	"math"
)

func SquareRoot(number int) (int, error) {
	if number < 0 {
		return 0, errors.New("negative number")
	}
	return int(math.Sqrt(float64(number))), nil
}
