
local function translate(word)
    local rule1 = word:match('^[aeiouAEIOU]') or
        word:match('^xr') or word:match('^yt')
    if rule1 then
        return word .. 'ay'
    end
    local rule3 = word:match('^[^aeiouAEIOU]*qu')
    if rule3 then
        return word:sub(#rule3 + 1) .. rule3 .. 'ay'
    end
    local rule4 = word:match('^([^aeiouAEIOU]+)y')
    if rule4 then
        return word:sub(#rule4 + 1) .. rule4 .. 'ay'
    end
    local rule2 = word:match('^[^aeiouAEIOU]*')
    if rule2 then
        return word:sub(#rule2 + 1) .. rule2 .. 'ay'
    end
end

return function(phrase)
    local result = ''
    for word in phrase:gmatch('%S+') do
        result = result .. translate(word) .. ' '
    end
    return result:sub(1, -2)
end
