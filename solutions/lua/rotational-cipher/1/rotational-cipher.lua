return {
    rotate = function(input, key)
        local result = ""
        for i = 1, #input do
            local c = input:sub(i, i)
            if c >= 'A' and c <= 'Z' then
                result = result .. string.char((c:byte() - 65 + key) % 26 + 65)
            elseif c >= 'a' and c <= 'z' then
                result = result .. string.char((c:byte() - 97 + key) % 26 + 97)
            else
                result = result .. c
            end
        end
        return result
    end,
}
