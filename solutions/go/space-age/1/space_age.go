package space

type Planet string

func Age(seconds float64, planet Planet) float64 {
	result := seconds / 31557600.0
	switch planet {
	case "Earth":
	case "Mercury":
		result /= 0.2408467
	case "Venus":
		result /= 0.61519726
	case "Mars":
		result /= 1.8808158
	case "Jupiter":
		result /= 11.862615
	case "Saturn":
		result /= 29.447498
	case "Uranus":
		result /= 84.016846
	case "Neptune":
		result /= 164.79132
	default:
		result = -1.0
	}
	return result
}
