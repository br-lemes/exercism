package resistorcolor

var colors = map[string]int{
	"black":  0,
	"brown":  1,
	"red":    2,
	"orange": 3,
	"yellow": 4,
	"green":  5,
	"blue":   6,
	"violet": 7,
	"grey":   8,
	"white":  9,
}

func Colors() []string {
	result := make([]string, 0, len(colors))
	for color := range colors {
		result = append(result, color)
	}
	return result
}

func ColorCode(color string) int {
	return colors[color]
}
