return function(s)
    local counts = {}
    s = s:upper()
    for i = 1, #s do
        local c = s:sub(i, i)
        if c < 'A' or c > 'Z' then
            goto continue
        end
        if counts[c] then
            return false
        end
        counts[c] = true
        ::continue::
    end
    return true
end
