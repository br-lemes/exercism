local house = {}

local parts = {
    { subject = 'the house that Jack built.' },
    { subject = 'the malt', verb = 'that lay in' },
    { subject = 'the rat', verb = 'that ate' },
    { subject = 'the cat', verb = 'that killed' },
    { subject = 'the dog', verb = 'that worried' },
    { subject = 'the cow with the crumpled horn', verb = 'that tossed' },
    { subject = 'the maiden all forlorn', verb = 'that milked' },
    { subject = 'the man all tattered and torn', verb = 'that kissed' },
    { subject = 'the priest all shaven and shorn', verb = 'that married' },
    { subject = 'the rooster that crowed in the morn', verb = 'that woke' },
    { subject = 'the farmer sowing his corn', verb = 'that kept' },
    {
        subject = 'the horse and the hound and the horn',
        verb = 'that belonged to',
    },
}

house.verse = function(which)
    local result = {
        string.format('This is %s', parts[which].subject),
    }
    for i = which - 1, 1, -1 do
        table.insert(result, parts[i + 1].verb .. ' ' .. parts[i].subject)
    end
    return table.concat(result, '\n')
end

house.recite = function()
    local result = {}
    for i = 1, #parts do
        table.insert(result, house.verse(i))
    end
    return table.concat(result, '\n')
end

return house
