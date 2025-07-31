import math, random

randomize()

type
    Character* = object
        strength*: int
        dexterity*: int
        constitution*: int
        intelligence*: int
        wisdom*: int
        charisma*: int
        hitpoints*: int

proc ability*: int =
    var rolls = [0, 0, 0, 0]
    for roll in rolls.mitems:
        roll = rand(1..6)
    sum(rolls) - min(rolls)

proc modifier*(n: int): int =
    int(floor(float(n - 10) / 2))

proc initCharacter*: Character =
    var character: Character
    character.strength = ability()
    character.dexterity = ability()
    character.constitution = ability()
    character.intelligence = ability()
    character.wisdom = ability()
    character.charisma = ability()
    character.hitpoints = 10 + modifier(character.constitution)
    character
