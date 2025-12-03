local BottleSong = {}

function numberToWord(number, capitalize)
    local words = {
        [0] = 'no',
        [1] = 'one',
        [2] = 'two',
        [3] = 'three',
        [4] = 'four',
        [5] = 'five',
        [6] = 'six',
        [7] = 'seven',
        [8] = 'eight',
        [9] = 'nine',
        [10] = 'ten',
    }
    local word = words[number] or tostring(number)
    if capitalize then
        return string.upper(string.sub(word, 1, 1)) .. string.sub(word, 2)
    end
    return word
end

local function pluralize(count)
    return count == 1 and '' or 's'
end

local verseLine = '%s green bottle%s hanging on the wall,'
local fallLine = 'And if one green bottle should accidentally fall,'
local resultLine = 'There\'ll be %s green bottle%s hanging on the wall.'

function verse(currentBottles)
    local currentWord = numberToWord(currentBottles, true)
    local nextBottles = currentBottles - 1
    local nextWord = nextBottles >= 0 and numberToWord(nextBottles) or 'no'

    local currentPlural = pluralize(currentBottles)
    local nextPlural = pluralize(nextBottles)

    local lines = {
        verseLine:format(currentWord, currentPlural),
        verseLine:format(currentWord, currentPlural),
        fallLine,
        resultLine:format(nextWord, nextPlural),
    }

    return table.concat(lines, '\n') .. '\n'
end

function BottleSong.recite(startBottles, takeDown)
    local result = {}
    for i = 1, takeDown do
        local current = startBottles - i + 1
        table.insert(result, verse(current))
    end
    return table.concat(result, '\n')
end

return BottleSong
