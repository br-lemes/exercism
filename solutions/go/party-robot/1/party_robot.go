package partyrobot

import "fmt"

func Welcome(name string) string {
	return fmt.Sprintf("Welcome to my party, %s!", name)
}

func HappyBirthday(name string, age int) string {
	return fmt.Sprintf("Happy birthday %s! You are now %d years old!", name, age)
}

func AssignTable(name string, table int, neighbor, direction string, distance float64) string {
	tableStr := fmt.Sprintf("%03d", table)
	distanceStr := fmt.Sprintf("%.1f", distance)
	if distance == float64(int(distance)) {
		distanceStr = fmt.Sprintf("%.1f", distance)
	}

	return fmt.Sprintf("%s\nYou have been assigned to table %s. Your table is %s, exactly %s meters from here.\nYou will be sitting next to %s.",
		Welcome(name), tableStr, direction, distanceStr, neighbor)
}
