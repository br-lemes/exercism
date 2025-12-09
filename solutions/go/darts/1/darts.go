package darts

func Score(x, y float64) int {
	distanceSquared := x*x + y*y
	if distanceSquared > 100 {
		return 0
	}
	if distanceSquared > 25 {
		return 1
	}
	if distanceSquared > 1 {
		return 5
	}
	return 10
}
