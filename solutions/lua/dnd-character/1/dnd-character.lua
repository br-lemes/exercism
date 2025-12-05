local Character = {}

local function ability(scores)
    return math.random(3, 18)
end

local function modifier(input)
    return math.floor((input - 10) / 2)
end

function Character:new(name)
    local character = {name = name}
    character.strength = ability()
    character.dexterity = ability()
    character.constitution = ability()
    character.intelligence = ability()
    character.wisdom = ability()
    character.charisma = ability()
    character.hitpoints = 10 + modifier(character.constitution)
    return setmetatable(character, {__index = Character})
end

return {Character = Character, ability = ability, modifier = modifier}
