package dndcharacter

import (
	"math"
	"math/rand"
)

type Character struct {
	Strength     int
	Dexterity    int
	Constitution int
	Intelligence int
	Wisdom       int
	Charisma     int
	Hitpoints    int
}

func Modifier(score int) int {
	return int(math.Floor(float64(score-10) / 2))
}

func Ability() int {
	return rand.Intn(18-3) + 3
}

func GenerateCharacter() Character {
	character := Character{
		Strength:     Ability(),
		Dexterity:    Ability(),
		Constitution: Ability(),
		Intelligence: Ability(),
		Wisdom:       Ability(),
		Charisma:     Ability(),
	}
	character.Hitpoints = 10 + Modifier(character.Constitution)
	return character
}
