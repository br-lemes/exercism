return {
    encode = function(plaintext)
        local result = ""
        local count = 0
        for i = 1, #plaintext do
            local char = plaintext:sub(i, i):lower()
            if char:match("[0-9]") then
                if count > 0 and count % 5 == 0 then
                    result = result .. " "
                end
                result = result .. char
                count = count + 1
                goto continue
            end
            if char:match("[a-z]") then
                if count > 0 and count % 5 == 0 then
                    result = result .. " "
                end
                result = result .. string.char(122 - (char:byte() - 97))
                count = count + 1
            end
            ::continue::
        end
        return result
    end,
}
