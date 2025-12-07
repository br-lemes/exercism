local animals = {
    {
        animal = 'fly',
        line = "I don't know why she swallowed the fly. Perhaps she'll die."
    },
    {
        animal = 'spider',
        line = 'It wriggled and jiggled and tickled inside her.'
    },
    { animal = 'bird', line = 'How absurd to swallow a bird!' },
    { animal = 'cat', line = 'Imagine that, to swallow a cat!' },
    { animal = 'dog', line = 'What a hog, to swallow a dog!' },
    { animal = 'goat', line = 'Just opened her throat and swallowed a goat!' },
    { animal = 'cow', line = "I don't know how she swallowed a cow!" },
    { animal = 'horse', line = "She's dead, of course!" },
}

local function verse(which)
    local result = string.format(
        "I know an old lady who swallowed a %s.\n%s\n",
        animals[which].animal,
        animals[which].line
    )

    if animals[which].animal == 'horse' then
        return result
    end

    if animals[which].animal == 'fly' then
        return result
    end

    for i = which, 2, -1 do
        local currentAnimal = animals[i].animal
        local nextAnimal = animals[i - 1].animal
        local specialLine =
            nextAnimal == 'spider'
                and ' that wriggled and jiggled and tickled inside her'
                or ''
        result = string.format(
            "%sShe swallowed the %s to catch the %s%s.\n",
            result,
            currentAnimal,
            nextAnimal,
            specialLine
        )
    end
    result = string.format(
        "%sI don't know why she swallowed the fly. Perhaps she'll die.\n",
        result
    )
    return result
end

local function verses(from, to)
    local result = ''
    for i = from, to do
        result = result .. verse(i) .. '\n'
    end
    return result
end

local function sing()
    return verses(1, #animals)
end

return { verse = verse, verses = verses, sing = sing }
